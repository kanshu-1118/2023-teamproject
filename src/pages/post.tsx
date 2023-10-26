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
            <Center marginTop={"30px"}>
                <Center flexGrow={"1"} className={css({fontSize:"20px", fontWeight:"bold", borderLeft:"2px solid #000", borderRight:"2px solid #000" , borderTop:"2px solid #000" , borderRadius:"10px 10px 0 0 "})}>
                    <p>投稿</p>
                </Center>
                <Center flexGrow={"1"} className={css({fontSize:"20px", fontWeight:"bold", borderLeft:"2px solid #000", borderRight:"2px solid #000" , borderTop:"2px solid #000" , borderRadius:"10px 10px 0 0 "})}>
                    <p>投稿</p>
                </Center>
            </Center>
            <Center flexDir={"column"} gap={"10px"} margin={"55px 0 40px"}>
                <p className={css({fontSize:"16px", fontWeight:"bold"})}>口コミを投稿する駅の名前</p>
                <Center w={"250px"} h={"30px"} border={"1px solid #000"} borderRadius={"10px"}><p className={css({fontSize:"14px", fontWeight:"bold"})}>駅名</p></Center>
            </Center>
            <Center gap={"90px"}>
                <Center flexDir={"column"} gap={"8px"}>
                    <p className={css({fontSize:"18px", fontWeight:"bold"})}>今いる車両</p>
                    <select name="" id="" className={css({borderBottom:"1px solid #000", fontSize:"16px", fontWeight:"bold"})}>
                        <option value="">千舟駅</option>
                        <option value="">中崎町駅</option>
                        <option value="">梅田駅</option>
                    </select>
                </Center>
                <Center flexDir={"column"} gap={"8px"}>
                    <p className={css({fontSize:"18px", fontWeight:"bold"})}>今いる車両</p>
                    <select name="" id="" className={css({borderBottom:"1px solid #000", fontSize:"16px", fontWeight:"bold"})}>
                        <option value="">千舟駅</option>
                        <option value="">中崎町駅</option>
                        <option value="">梅田駅</option>
                    </select>
                </Center>
            </Center>
            <Center flexDir={"column"} marginTop={"40px"} gap={"10px"}>
                <p className={css({fontSize:"12px", fontWeight:"bold"})}>クチコミ</p>
                <input type="text" className={css({border:"1px solid #000",borderRadius:"5px", w:"340px" , h:"220px"})} />
            </Center>
        </Layout>
    )
}
