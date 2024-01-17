"use client";
import { auth } from "@/libs/firebase/index";  //パスは必要に応じて調節してください
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";  // ←next/routerではない
import { useState } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/libs/firebase/config";
import { center, flex } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, user, loginLoading, error] =
        useSignInWithEmailAndPassword(auth);
    const [createUserWithEmailAndPassword, newUser, loading] =
        useCreateUserWithEmailAndPassword(auth);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    if (user) {
        router.push("/");
    }
    return (
        <div className={center({h:"100vh",flexDir:"column",gap:"40px"})}>
            <form className={center({
                flexDir:"column",
                gap:"12px",
                })}>
            <div className={flex({
                flexDir:"column",
                })}>
                <label htmlFor="email" className={css({fontSize:"12px"})}>メールアドレス</label>
                <input
                className={css({border:"1px solid",padding:"4px",borderColor:"main",borderRadius:"4px"})}
                type="text"
                placeholder="email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={isLoading}
                />
            </div>
            <div className={flex({
                flexDir:"column",
                })}>
                <label htmlFor="password" className={css({fontSize:"12px"})}>パスワード</label>
                <input
                    className={css({border:"1px solid",padding:"4px",borderColor:"main",borderRadius:"4px"})}
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    readOnly={isLoading}
                />
            </div>
            <div>{error && <p>メールアドレスかパスワードが間違っています。もう一度誤入力お願いいたします。</p>}</div>
                    <button
                        className={css({
                            bgColor:"base",
                            w:"150px",
                            padding:"8px 0",
                            fontWeight:"bold",
                            color:"main",
                            border:"3px solid",
                            borderRadius:"8px",
                            })}
                        onClick={async (e) => {
                            e.preventDefault();
                            setIsLoading(true);
                            const user = await createUserWithEmailAndPassword(email, password);
                            if (!user) throw new Error("user is null");
                            // const userdata = user;
                            // const docRef = doc(db, "users", userdata.uid);
                            // const docSnap = await getDoc(docRef);
                            // if (!docSnap.exists()) {
                            //     await setDoc(doc(db, "users", userdata.uid), {
                            //     // name: userdata.displayName,
                            //     // email: userdata.email,
                            //     name:"kanshu",
                            //     });
                            // }
                            router.push("/signupAbout");
                            setIsLoading(false);
                        }}
                        disabled={isLoading}
                    >
                        新規登録{loading && "中"}
                    </button>
            </form>
        </div>
    );
}