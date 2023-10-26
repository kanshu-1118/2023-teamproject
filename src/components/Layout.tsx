import Head from "next/head";
import { css } from "../../styled-system/css";
// import { color } from "../theme/colorTheme";
import { navArray } from "../libs/nav";
import { Box, Center, Flex } from "../../styled-system/jsx";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { center, flex } from "../../styled-system/patterns";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const appName = "Sample App"

interface propsType {
    id: "string",
}

function Layout({children} : any , props: propsType ) {
    // console.log(location.pathname);

    const [pathStatus,setPathStatus] = useState("/") 

    useEffect(() => {
        {(() : any => {
            if (location.pathname == "/") {
                setPathStatus("home")
            }else if (location.pathname == "/post") {
                setPathStatus("post")
            }else if (location.pathname == "/timetable") {
                setPathStatus("timetable")
            }else if (location.pathname == "/mypage") {
                setPathStatus("mypage")
            }else {
                setPathStatus("null")
            }
        })()}
    },[])
    
    return (
        <div className={css({padding:"48px 0 100px", overflow:"hidden"})}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={center({position:"fixed",zIndex:"2",top:"0",width:"100vw", bgColor:"main",padding:"10px 0"})}>
                <p className={css({fontSize:"20px",fontWeight:"bold",color:"base"})}>
                    {/* {Cの条件 ? (Bの条件 ? (Aの条件 ? (<p>A</p>):(<p>B</p>)) :(<p>C</p>)) :(<p>D</p>)} */}
                    {/* {true ? (true ? (false ? (false ? ("A"):("B")):("C")) :("D")) :("エラー")} */}
                    {(() : any => {
                        if (pathStatus == "home") {
                            return "ホーム"
                        }else if (pathStatus == "post") {
                            return "投稿"
                        }else if (pathStatus == "timetable") {
                            return "時刻表"
                        }else if (pathStatus == "mypage") {
                            return "マイページ"
                        }else {
                            return "　　　　"
                        }
                    })()}
                </p>
            </header>
            <motion.main
                initial={{ opacity: 0 , transform:"translateX(0)" }} //初期状態
                animate={{ opacity: 1 , transform:"translateX(0)"}} //マウント
                exit={{ opacity: 0 , transform:"translateX(0)"}} //アンマウント
            >
                
                { children }
            </motion.main>
            <footer className={css({position:"fixed",bottom:"0",width:"100vw", bgColor:"main",})}>
                <Flex >
                    {navArray.map((e:any,i:number) => {
                        if (e.id == pathStatus) {
                            return(
                                <Link href={e.link} key={i}>
                                    <Center padding={"14px 0 20px"} gap={"8px"} flexDir={"column"} w={"calc(100vw/4)"} >
                                        <FontAwesomeIcon icon={e.image} className={css({color:"accent",height:"20px"})} />
                                        <p className={css({fontSize:"10px", fontWeight:"bold", color:"base"})}>{e.name}</p>
                                    </Center>
                                </Link>
                            )
                        }else {
                            return(
                                <Link href={e.link} key={i}>
                                    <Center padding={"14px 0 20px"} gap={"8px"} flexDir={"column"} w={"calc(100vw/4)"} >
                                        <FontAwesomeIcon icon={e.image} className={css({color:"base",height:"20px"})} />
                                        <p className={css({fontSize:"10px", fontWeight:"bold", color:"base"})}>{e.name}</p>
                                    </Center>
                                </Link>
                            )
                        }
                    })}
                </Flex>
            </footer>
        </div>
    );
}

export default Layout;
