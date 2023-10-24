import Head from "next/head";
import { css } from "../../../styled-system/css";
// import { color } from "../theme/colorTheme";
import { navArray } from "../libs/nav";
import { Box, Center, Flex } from "../../../styled-system/jsx";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const appName = "Sample App"

function Layout({ children } : any) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <header>
            <h1>{appName}</h1>
            <p>ここにはLayout.jsの内容が表示されています。</p>
        </header>
        <main>
            { children }
        </main>
        <footer className={css({position:"fixed",bottom:"0",width:"100vw", bgColor:"main",})}>
            <Flex >
                {navArray.map((e:any,i:number) => {
                    return(
                        <Center padding={"14px 0"} gap={"8px"} key={i} flexDir={"column"} w={"calc(100vw/4)"} >
                            <FontAwesomeIcon icon={e.image} className={css({color:"base",height:"20px"})} />
                            <p className={css({fontSize:"10px", fontWeight:"bold", color:"base"})}>{e.name}</p>
                        </Center>
                    )
                })}
            </Flex>
        </footer>
        </div>
    );
}

export default Layout;
