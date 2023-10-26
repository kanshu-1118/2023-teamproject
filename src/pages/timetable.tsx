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
      <Center gap={"14px"} margin={"30px 0 0"}>
        <p className={css({fontSize:"14px", fontWeight:"bold", padding:"16px 54px", border:"1px solid #000", borderRadius:"5px"})}>出発駅</p>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} className={css({color:"black", height:"18px"})} />
        <p className={css({fontSize:"14px", fontWeight:"bold", padding:"16px 54px", border:"1px solid #000", borderRadius:"5px"})}>到着駅</p>
      </Center>
      <Center gap={"12px"} fontWeight={"bold"} marginTop={"10px"}>
        {/* <p className={css({fontSize:"14px", fontWeight:"bold", padding:"8px 35px", border:"1px solid #000", borderRadius:"10px"})}>12:00</p> */}
        <input className={css({fontSize:"14px", fontWeight:"bold", padding:"8px 35px", border:"1px solid #000", borderRadius:"10px"})} type="time" id="time" name="予定の時刻" value="13:30" />
        <button>発車</button>
        <button>到着</button>
        <button>始発</button>
        <button>終電</button>
        <button className={css({bgColor:"#000"})}></button>
      </Center>

    </Layout>
  )
}
