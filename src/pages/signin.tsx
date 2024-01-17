"use client";
import { auth } from "@/libs/firebase/index";  //パスは必要に応じて調節してください
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";  // ←next/routerではない
import { useState } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
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
            <Image src="/images/topIcon_spring.jpg" alt="" width={"240"} height={"100"} />
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
                type="submit"
                className={css({
                    bgColor:"main",
                    w:"150px",
                    padding:"8px 0",
                    fontWeight:"bold",
                    color:"base",
                    borderRadius:"8px",
                })}
                onClick={async (e) => {
                    e.preventDefault();
                    setIsLoading(true);
                    await signInWithEmailAndPassword(email, password);
                    setIsLoading(false);
                }}
                disabled={isLoading}
            >
                ログイン{loginLoading && "中"}
            </button>
            <Link href={"/signup"} >
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
                    disabled={isLoading}
                >
                    新規登録{loading && "中"}
                </button>
            </Link>
            </form>
        </div>
    );
}