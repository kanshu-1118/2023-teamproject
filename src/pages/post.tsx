import Image from "next/image";
import { css } from "../../styled-system/css";
import { Box, Center, Flex } from "../../styled-system/jsx";
import Layout from "../components/Layout";
import {faArrowRightArrowLeft, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { center } from "../../styled-system/patterns";

export default function Home() {
    return (
        <Layout >
        <Flex flexDir={"column"} gap={"32px"}>
            <Flex flexDir={"column"} boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"} padding={"16px 24px"} gap={"8px"} className={css({borderWidth:"5px", borderStyle:"solid" ,borderColor:"main",borderRadius:"0 0 10px 10px"})}>
            <p className={css({fontWeight:"bold", fontSize:"20px"})}>マイルート</p>
            <Flex flexDir={"column"} gap={"12px"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}  >
                <Flex border={"1px solid #000"} padding={"6px 12px"}><p className={css({fontSize:"14px",width:"125px"})}>大阪梅田(阪急)</p></Flex>
                <FontAwesomeIcon icon={faArrowRightArrowLeft} className={css({color:"black", height:"18px"})} />
                <Flex border={"1px solid #000"} padding={"6px 12px"}><p className={css({fontSize:"14px",width:"125px"})}>高槻(阪急)</p></Flex>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"} >
                <Flex border={"1px solid #000"} padding={"6px 12px"}><p className={css({fontSize:"14px",width:"125px"})}>大阪梅田(阪急)</p></Flex>
                <FontAwesomeIcon icon={faMinus} className={css({color:"black", height:"18px"})} />
                <Flex border={"1px solid #000"} padding={"6px 12px"}><p className={css({fontSize:"14px",width:"125px"})}>高槻(阪急)</p></Flex>
                </Flex>
            </Flex>
            </Flex>

            <Center flexDir={"column"} gap={"6px"} margin={"0px 0px"}>
            <h3 className={css({fontSize:"19px", fontWeight:"bold"})}>におい指数</h3>
            <Flex flexDir={"column"} gap={"20px"}>
                <Flex gap={"4px"}>
                <span className={css({fontSize:"16px"})}>強</span>
                <Box width={"300px"} background={"linear-gradient(to right, #F05050, #FBF688, #BBE6FE)"} />
                <span className={css({fontSize:"16px"})}>弱</span>
                </Flex>
                <Flex w={"calc(100vw - 48px)"} gap={"2px"} overflowX={"scroll"}>
                <Box bgColor={"#BBE6FE"} padding={"8px 26px"} flexShrink={"0"} borderRadius={"30px 0px 0px 0px"}><span className={css({fontSize:"10px"})}>1車両</span></Box>
                <Box bgColor={"#F05050"} padding={"8px 26px"} flexShrink={"0"} borderRadius={"0 0 0 0"}><span className={css({fontSize:"10px"})}>2車両</span></Box>
                <Box bgColor={"#FBF688"} padding={"8px 26px"} flexShrink={"0"} borderRadius={"0 0 0 0"}><span className={css({fontSize:"10px"})}>3車両</span></Box>
                <Box bgColor={"#FBF688"} padding={"8px 26px"} flexShrink={"0"} borderRadius={"0 0 0 0"}><span className={css({fontSize:"10px"})}>4車両</span></Box>
                <Box bgColor={"#F05050"} padding={"8px 26px"} flexShrink={"0"} borderRadius={"0 0 0 0"}><span className={css({fontSize:"10px"})}>5車両</span></Box>
                <Box bgColor={"#BBE6FE"} padding={"8px 26px"} flexShrink={"0"} borderRadius={"0 0 0 0"}><span className={css({fontSize:"10px"})}>6車両</span></Box>
                <Box bgColor={"#F05050"} padding={"8px 26px"} flexShrink={"0"} borderRadius={"0 0 0 0"}><span className={css({fontSize:"10px"})}>7車両</span></Box>
                <Box bgColor={"#BBE6FE"} padding={"8px 26px"} flexShrink={"0"} borderRadius={"0 30px 0 0"}><span className={css({fontSize:"10px"})}>4車両</span></Box>
                </Flex>
                <Flex gap={"20px"}>
                <button className={center({boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)", bgColor:"accent", fontSize:"12px", fontWeight:"bold", width:"70px", height:"22px", borderWidth:"1px", borderStyle:"solid" ,borderColor:"black"})} >全て</button>
                <button className={center({bgColor:"base", fontSize:"12px", fontWeight:"bold", width:"70px", height:"22px", borderWidth:"1px", borderStyle:"solid" ,borderColor:"black"})} >タバコ</button>
                <button className={center({bgColor:"base", fontSize:"12px", fontWeight:"bold", width:"70px", height:"22px", borderWidth:"1px", borderStyle:"solid" ,borderColor:"black"})} >口臭</button>
                <button className={center({bgColor:"base", fontSize:"12px", fontWeight:"bold", width:"70px", height:"22px", borderWidth:"1px", borderStyle:"solid" ,borderColor:"black"})} >汗</button>
                </Flex>
            </Flex>
            </Center>

            <Flex margin={"0px 0px"} padding={"20px"} gap={"20px"} flexDir={"column"} boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"} className={css({borderWidth:"5px", borderStyle:"solid" ,borderColor:"main",borderRadius:"10px"})}>
            <p className={css({fontSize:"19px",fontWeight:"bold"})}>マイルートクチコミ</p>
            <Flex flexDir={"column"} gap={"8px"}>
                <Center gap={"16px"}>
                <Flex flexDir={"column"} fontSize={"12px"}>
                    <p>7:38</p>
                    <p>3車両</p>
                    <p>タバコ</p>
                </Flex>
                <Box w={"260px"} h={"60px"} border={"1px solid #000"} ></Box>
                </Center>
                <Center gap={"16px"}>
                <Flex flexDir={"column"} fontSize={"12px"}>
                    <p>7:38</p>
                    <p>3車両</p>
                    <p>タバコ</p>
                </Flex>
                <Box w={"260px"} h={"60px"} border={"1px solid #000"} ></Box>
                </Center>
            </Flex>
            </Flex>
            <Center padding={"20px"} gap={"8px"} flexDir={"column"} boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"} className={css({borderWidth:"5px", borderStyle:"solid" ,borderColor:"main",borderRadius:"10px"})}>
            <p className={css({fontSize:"19px",fontWeight:"bold"})}>記事</p>
            <Center gap={"8px"} flexWrap={"wrap"}>
                <Image src={"/images/test.jpg"} width={"100"} height={"100"} className={css({width:"100px", height:"100px", objectFit:"cover"})} alt={"サムネイル"} />
                <Image src={"/images/test.jpg"} width={"100"} height={"100"} className={css({width:"100px", height:"100px", objectFit:"cover"})} alt={"サムネイル"} />
                <Image src={"/images/test.jpg"} width={"100"} height={"100"} className={css({width:"100px", height:"100px", objectFit:"cover"})} alt={"サムネイル"} />
                <Image src={"/images/test.jpg"} width={"100"} height={"100"} className={css({width:"100px", height:"100px", objectFit:"cover"})} alt={"サムネイル"} />
                <Image src={"/images/test.jpg"} width={"100"} height={"100"} className={css({width:"100px", height:"100px", objectFit:"cover"})} alt={"サムネイル"} />
                <Image src={"/images/test.jpg"} width={"100"} height={"100"} className={css({width:"100px", height:"100px", objectFit:"cover"})} alt={"サムネイル"} />
            </Center>
            </Center>
        </Flex>
        </Layout>
    )
}
