import { auth} from "@/libs/firebase/index";  //パスは必要に応じて調節してください
import React, { useEffect, useState } from 'react'
import { css } from '../../styled-system/css'
import { Box, Center } from '../../styled-system/jsx'
import { center, flex } from '../../styled-system/patterns'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useModalScrollLock } from './logic/use-modal-scroll-lock'
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/libs/firebase/config";
import { useRouter } from "next/router";

export const MODAL_ID = "modal"

const RootModal = ({show,setShow} : any) => {

    const [train,setTrain] = useState()
    const [offset,setOffset] = useState("1")
    const [count,setCount] = useState(0)
    
    // inputに入れる値
    const [text, setText] = React.useState("");
    const [text2, setText2] = React.useState("");
    // inputにフォーカスしているかどうか
    const [isFocus, setIsFocus] = React.useState(false);
    const [isFocus2, setIsFocus2] = React.useState(false);
    // フィルターにかけた配列をいれるためのステート
    const [suggestions, setSuggestions] = React.useState([]);
    const [suggestions2, setSuggestions2] = React.useState([]);

    const [gostation,setGostation] = useState(text)
    const [comestation,comeGostation] = useState(text2)
    
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const params = {
            offset : offset,
        }
        console.log(offset);
        
        const query = new URLSearchParams(params)
        const fecthtrain : any = async () => {
            const responce = await fetch(`./api/train?${query}`)
            const data = await responce.json()
            setTrain(data.train)
        }
        fecthtrain()
        // for (count; count < 101; setCount(count)) {
        //     console.log(offset);
        //     // setOffset(`${i}`)
        //     setCount(count + 1)
        // }
    },[offset])
    // console.log(train);
    

    const FireStoreSet = () => {
        auth.onAuthStateChanged(async (user:any) => {
            // ログイン済みのユーザー情報があるかをチェック
            await updateDoc(doc(db, "users", user.uid), {
                userUniqueID: user.uid,
                myRoot:{
                    goStation:gostation,
                    comeStation:comestation,
                },
            });
        }
        );
    }

    const options = [
        { id: 1, text: "大阪梅田(阪神)" },
        { id: 2, text: "大阪梅田(阪急)" },
        { id: 3, text: "大阪(JR)" },
        { id: 4, text: "中崎町" },
        { id: 5, text: "高槻" },
        { id: 6, text: "北浜" },
        { id: 7, text: "千舟" },
    ];

    const handleChange = (text : any) => {
        // 入力した値をもとにフィルターをかける。
        // 空の配列を用意
        let matches : any = [];
        // 入力する値が0文字より大きければ処理を行う
        if (text.length > 0) {
        matches = options.filter((opt) => {
        // new RegExp = パターンでテキストを検索するために使用
        const regex = new RegExp(`${text}`, "gi");
            return opt.text.match(regex);
        });
        }
        // フィルターをかけた配列をsuggestionsのステートに入れる
        setSuggestions(matches);
        setText(text);
    };
    const handleChange2 = (text : any) => {
        // 入力した値をもとにフィルターをかける。
        // 空の配列を用意
        let matches : any = [];
        // 入力する値が0文字より大きければ処理を行う
        if (text.length > 0) {
        matches = options.filter((opt) => {
        // new RegExp = パターンでテキストを検索するために使用
        const regex = new RegExp(`${text}`, "gi");
            return opt.text.match(regex);
        });
        }
        // フィルターをかけた配列をsuggestionsのステートに入れる
        setSuggestions2(matches);
        setText2(text);
    };

    const isModalOpen = show
    useModalScrollLock({ isModalOpen })

    return(
        <AnimatePresence>
            {show && 
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className={center({overflow:"hidden",zIndex:"1",transition:"0.2s ease",top:"0",left:"0",position:"fixed",bgColor:"rgba(19, 19, 19, 0.25)",w:"100vw",h:"100vh"})}
                onClick={() => {setShow(false)}}
                >
                    <div className={center({
                        bgColor:"base",
                        flexDir:"column",
                        padding:"32px 24px",
                        borderRadius:"8px",
                        gap:"32px",
                        })}
                        onClick={(e) => e.stopPropagation()}
                        >
                        <div className={flex({flexDir:"column",gap:"4px"})}>
                            <p className={css({fontSize:"10px",fontWeight:"bold"})}>出発駅</p>
                            <input type='text' name="出発駅" value={text} id="autoComplete" className={center({
                                w:"275px",
                                height:"37px",
                                boxShadow:"0px 2px 5px 0px rgba(168,168,168,0.25)",
                                borderRadius:"10px",
                                fontSize:"12px",fontWeight:"bold",
                                paddingLeft:"4px",
                                })}
                                onFocus={() => setIsFocus(true)}
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            {isFocus && (
                                <Box
                                    w="100%"
                                    h="100%"
                                    boxShadow="md"
                                    bg="white"
                                    mt="8px"
                                    borderRadius="lg"
                                >
                                {/* optionsの配列を入力候補の部分に表示する */}
                                        {suggestions?.map((suggestion : any, i) => (
                                        <p
                                            className={css({
                                                bgColor:"white",
                                                padding:"8px 8px",
                                                _hover:{
                                                    bg: "gray.100"
                                                }
                                            })}
                                            key={i}
                                            // 入力候補をクリックするとクリックした入力候補がinputフィールドに入力される。
                                            // isFocusをfalseにすることで入力候補を非表示にする
                                            onClick={async () => {
                                            await setText(suggestion.text);
                                            await setIsFocus(false);
                                            }}
                                        >
                                            {suggestion.text}
                                        </p>
                                        ))}
                                    </Box>
                                    )}
                        </div>
                        <div className={flex({flexDir:"column",gap:"4px"})}>
                        <p className={css({fontSize:"10px",fontWeight:"bold"})}>到着駅</p>
                        <input type='text' name="出発駅" value={text2} id="autoComplete" className={center({
                                w:"275px",
                                height:"37px",
                                boxShadow:"0px 2px 5px 0px rgba(168,168,168,0.25)",
                                borderRadius:"10px",
                                fontSize:"12px",fontWeight:"bold",
                                paddingLeft:"4px",
                                })}
                                onFocus={() => setIsFocus2(true)}
                                onChange={(e) => handleChange2(e.target.value)}
                            />
                            {isFocus2 && (
                                <Box
                                    w="100%"
                                    h="100%"
                                    boxShadow="md"
                                    bg="white"
                                    mt="8px"
                                    borderRadius="lg"
                                >
                                {/* optionsの配列を入力候補の部分に表示する */}
                                        {suggestions2?.map((suggestion : any, i) => (
                                        <p
                                            className={css({
                                                bgColor:"white",
                                                padding:"8px 8px",
                                                _hover:{
                                                    bg: "gray.100"
                                                }
                                            })}
                                            key={i}
                                            // 入力候補をクリックするとクリックした入力候補がinputフィールドに入力される。
                                            // isFocusをfalseにすることで入力候補を非表示にする
                                            onClick={async () => {
                                            await setText2(suggestion.text);
                                            await setIsFocus2(false);
                                            }}
                                        >
                                            {suggestion.text}
                                        </p>
                                        ))}
                                    </Box>
                                    )}
                        </div>
                        <div className={center({gap:"16px",flexDir:"column"})}>
                            <div className={flex({gap:"16px"})}>
                                <button className={center({
                                    w:"88px",
                                    height:"33px",
                                    boxShadow:"0px 2px 5px 0px rgba(168,168,168,0.25)",
                                    borderRadius:"10px",
                                    fontSize:"12px",
                                    fontWeight:"bold",
                                    bgColor:"gray",
                                })}
                                >出発時間</button>
                                <button className={center({
                                    w:"88px",
                                    height:"33px",
                                    boxShadow:"0px 2px 5px 0px rgba(168,168,168,0.25)",
                                    borderRadius:"10px",
                                    fontSize:"12px",
                                    fontWeight:"bold",
                                    color:"base",
                                    bgColor:"main",
                                })}
                                >到着時間</button>
                            </div>
                            <div className={center({
                                    w:"104px",
                                    height:"33px",
                                    boxShadow:"0px 2px 5px 0px rgba(168,168,168,0.25)",
                                    borderRadius:"10px",
                                    fontSize:"12px",
                                    fontWeight:"bold",
                                    bgColor:"base",
                                })}
                                ><p>12:00</p></div>
                        </div>

                        <button className={center({
                                w:"68px",
                                height:"33px",
                                boxShadow:"0px 2px 5px 0px rgba(168,168,168,0.25)",
                                borderRadius:"10px",
                                fontSize:"12px",
                                fontWeight:"bold",
                                color:"base",
                                bgColor:"red",
                            })}
                            onClick={async (e) => {
                                e.preventDefault();
                                setIsLoading(true);
                                FireStoreSet()
                                router.push("/");
                                setIsLoading(false);
                            }}
                            disabled={isLoading}
                            >決定</button>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default RootModal