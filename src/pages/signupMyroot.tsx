"use client";
import { auth} from "@/libs/firebase/index";  //パスは必要に応じて調節してください
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";  // ←next/routerではない
import { useState,useEffect } from "react";
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
import firebase from "firebase/compat/app";
import 'firebase/firestore';
import { signOut } from "firebase/auth";



export default function LoginPage() {
    const [name, setName] = useState("");
    const [from, setFrom] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [signInWithEmailAndPassword, user, loginLoading, error] =
        useSignInWithEmailAndPassword(auth);
    const [createUserWithEmailAndPassword, newUser, loading] =
        useCreateUserWithEmailAndPassword(auth);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    if (user) {
        router.push("/");
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                // setCurrentUser(user);
                // setSignInCheck(true);
                console.log("ログインしてるで");
                console.log(user.uid);
                
            } else {
                // setSignInCheck(true);
                console.log("ログインしてないで");
                
            }
        });
    });

    const FireStoreSet = () => {
        auth.onAuthStateChanged(async (user:any) => {
            // ログイン済みのユーザー情報があるかをチェック
            await setDoc(doc(db, "users", user.uid), {
                userUniqueID: user.uid,
                name: name,
                from: from,
                birthDay: birthDay,
                
            });
        }
        );
    }

    return (
        <div className={center({h:"100vh",flexDir:"column",gap:"40px"})}>
            <form className={center({
                flexDir:"column",
                gap:"24px",
                })}>
            <div className={flex({
                    flexDir:"column",
                    gap:"12px",
                    })}>
                <div className={flex({
                    flexDir:"column",
                    })}>
                    <label htmlFor="name" className={css({fontSize:"12px"})}>お名前</label>
                    <input
                    className={css({border:"1px solid",fontSize:"14px",padding:"4px",borderColor:"main",borderRadius:"4px"})}
                    type="text"
                    placeholder="name"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                    readOnly={isLoading}
                    />
                </div>
                <div className={flex({
                    flexDir:"column",
                    })}>
                    <label htmlFor="name" className={css({fontSize:"12px"})}>お住まいの都道府県</label>
                    <select
                        className={css({border:"1px solid",fontSize:"14px",padding:"4px",borderColor:"main",borderRadius:"4px"})}
                        onChange={(e) => setFrom(e.target.value)}
                    >
                        <option value="北海道">北海道</option><option value="青森県">青森県</option><option value="岩手県">岩手県</option><option value="宮城県">宮城県</option><option value="秋田県">秋田県</option><option value="山形県">山形県</option><option value="福島県">福島県</option><option value="茨城県">茨城県</option><option value="栃木県">栃木県</option><option value="群馬県">群馬県</option><option value="埼玉県">埼玉県</option><option value="千葉県">千葉県</option><option value="東京都">東京都</option><option value="神奈川県">神奈川県</option><option value="新潟県">新潟県</option><option value="富山県">富山県</option><option value="石川県">石川県</option><option value="福井県">福井県</option><option value="山梨県">山梨県</option><option value="長野県">長野県</option><option value="岐阜県">岐阜県</option><option value="静岡県">静岡県</option><option value="愛知県">愛知県</option><option value="三重県">三重県</option><option value="滋賀県">滋賀県</option><option value="京都府">京都府</option><option value="大阪府">大阪府</option><option value="兵庫県">兵庫県</option><option value="奈良県">奈良県</option><option value="和歌山県">和歌山県</option><option value="鳥取県">鳥取県</option><option value="島根県">島根県</option><option value="岡山県">岡山県</option><option value="広島県">広島県</option><option value="山口県">山口県</option><option value="徳島県">徳島県</option><option value="香川県">香川県</option><option value="愛媛県">愛媛県</option><option value="高知県">高知県</option><option value="福岡県">福岡県</option><option value="佐賀県">佐賀県</option><option value="長崎県">長崎県</option><option value="熊本県">熊本県</option><option value="大分県">大分県</option><option value="宮崎県">宮崎県</option><option value="鹿児島県">鹿児島県</option><option value="沖縄県">沖縄県</option>
                    </select>
                </div>
                <div className={flex({
                    flexDir:"column",
                    })}>
                    <label htmlFor="name" className={css({fontSize:"12px"})}>生年月日</label>
                    <input
                    className={css({border:"1px solid",fontSize:"14px",padding:"4px",borderColor:"main",borderRadius:"4px"})}
                    type="date"
                    placeholder="date"
                    defaultValue={name}
                    onChange={(e) => setBirthDay(e.target.value)}
                    readOnly={isLoading}
                    />
                </div>
            </div>
            <div className={flex({flexDir:"column",gap:"12px"})}>
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
                        FireStoreSet()
                        router.push("/signupMyroot");
                        setIsLoading(false);
                    }}
                    disabled={isLoading}
                >
                    確定{loading && "中"}
                </button>
                {/* <button
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
                        signOut(auth);
                        setIsLoading(true);
                        // const userData = await firebase.auth().
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
                        setIsLoading(false);
                    }}
                    disabled={isLoading}
                >
                    ログアウト{loading && "中"}
                </button> */}
            </div>
            </form>
        </div>
    );
}