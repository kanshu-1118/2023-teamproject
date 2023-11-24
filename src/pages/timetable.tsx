import Image from "next/image";
import { css } from "../../styled-system/css";
import { Box, Center, Flex } from "../../styled-system/jsx";
import Layout from "../components/Layout";
import {faArrowRightArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { center } from "../../styled-system/patterns";

export default function Home() {
  return (
    <Layout >
      <Center flexDir={"column"}>
        <Center width={"100vw"} gap={"14px"} margin={"30px 0 0"} className={css({bgColor:"base"})}>
          <p className={css({fontSize:"14px", fontWeight:"bold", padding:"16px 54px", border:"1px solid #000", borderRadius:"5px"})}>出発駅</p>
          <FontAwesomeIcon icon={faArrowRightArrowLeft} className={css({color:"black", height:"18px"})} />
          <p className={css({fontSize:"14px", fontWeight:"bold", padding:"16px 54px", border:"1px solid #000", borderRadius:"5px"})}>到着駅</p>
        </Center>
        <Center gap={"12px"} fontWeight={"bold"} marginTop={"10px"}>
          {/* <p className={css({fontSize:"14px", fontWeight:"bold", padding:"8px 35px", border:"1px solid #000", borderRadius:"10px"})}>12:00</p> */}
          <input className={css({fontSize:"14px", fontWeight:"bold", padding:"8px 35px", border:"1px solid #000", borderRadius:"10px"})} type="time" id="time" name="予定の時刻" value="13:30" />
          <button className={css({color:"main"})}>発車</button>
          <button className={css({color:"main"})}>到着</button>
          <button className={css({color:"main"})}>始発</button>
          <button className={css({color:"main"})}>終電</button>
          <button className={css({bgColor:"#000"})}></button>
        </Center>
      </Center>
      <Flex flexDir={"column"} height={"560px"} overflowY={"scroll"} >
        <Center flexDir={"column"} marginTop={"40px"} paddingBottom={"10px"} borderBottom={"1px solid #D9D9D9"}>
          <Center gap={"14px"}>
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <FontAwesomeIcon icon={faArrowRight} className={css({color:"black", height:"18px"})} />
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <span className={css({fontSize:"14px"})}>（27分）</span>
          </Center>
          <Center fontSize={"10px"} gap={"20px"}>
            <p>大阪梅田（阪急線）行</p>
            <p>３・４番ホーム</p>
            <p>290円/乗り換え0回</p>
          </Center>
        </Center>
        <Center flexDir={"column"} marginTop={"40px"} paddingBottom={"10px"} borderBottom={"1px solid #D9D9D9"}>
          <Center gap={"14px"}>
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <FontAwesomeIcon icon={faArrowRight} className={css({color:"black", height:"18px"})} />
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <span className={css({fontSize:"14px"})}>（27分）</span>
          </Center>
          <Center fontSize={"10px"} gap={"20px"}>
            <p>大阪梅田（阪急線）行</p>
            <p>３・４番ホーム</p>
            <p>290円/乗り換え0回</p>
          </Center>
        </Center>
        <Center flexDir={"column"} marginTop={"40px"} paddingBottom={"10px"} borderBottom={"1px solid #D9D9D9"}>
          <Center gap={"14px"}>
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <FontAwesomeIcon icon={faArrowRight} className={css({color:"black", height:"18px"})} />
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <span className={css({fontSize:"14px"})}>（27分）</span>
          </Center>
          <Center fontSize={"10px"} gap={"20px"}>
            <p>大阪梅田（阪急線）行</p>
            <p>３・４番ホーム</p>
            <p>290円/乗り換え0回</p>
          </Center>
        </Center>
        <Center flexDir={"column"} marginTop={"40px"} paddingBottom={"10px"} borderBottom={"1px solid #D9D9D9"}>
          <Center gap={"14px"}>
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <FontAwesomeIcon icon={faArrowRight} className={css({color:"black", height:"18px"})} />
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <span className={css({fontSize:"14px"})}>（27分）</span>
          </Center>
          <Center fontSize={"10px"} gap={"20px"}>
            <p>大阪梅田（阪急線）行</p>
            <p>３・４番ホーム</p>
            <p>290円/乗り換え0回</p>
          </Center>
        </Center>
        <Center flexDir={"column"} marginTop={"40px"} paddingBottom={"10px"} borderBottom={"1px solid #D9D9D9"}>
          <Center gap={"14px"}>
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <FontAwesomeIcon icon={faArrowRight} className={css({color:"black", height:"18px"})} />
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <span className={css({fontSize:"14px"})}>（27分）</span>
          </Center>
          <Center fontSize={"10px"} gap={"20px"}>
            <p>大阪梅田（阪急線）行</p>
            <p>３・４番ホーム</p>
            <p>290円/乗り換え0回</p>
          </Center>
        </Center>
        <Center flexDir={"column"} marginTop={"40px"} paddingBottom={"10px"} borderBottom={"1px solid #D9D9D9"}>
          <Center gap={"14px"}>
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <FontAwesomeIcon icon={faArrowRight} className={css({color:"black", height:"18px"})} />
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <span className={css({fontSize:"14px"})}>（27分）</span>
          </Center>
          <Center fontSize={"10px"} gap={"20px"}>
            <p>大阪梅田（阪急線）行</p>
            <p>３・４番ホーム</p>
            <p>290円/乗り換え0回</p>
          </Center>
        </Center>
        <Center flexDir={"column"} marginTop={"40px"} paddingBottom={"10px"} borderBottom={"1px solid #D9D9D9"}>
          <Center gap={"14px"}>
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <FontAwesomeIcon icon={faArrowRight} className={css({color:"black", height:"18px"})} />
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <span className={css({fontSize:"14px"})}>（27分）</span>
          </Center>
          <Center fontSize={"10px"} gap={"20px"}>
            <p>大阪梅田（阪急線）行</p>
            <p>３・４番ホーム</p>
            <p>290円/乗り換え0回</p>
          </Center>
        </Center>
        <Center flexDir={"column"} marginTop={"40px"} paddingBottom={"10px"} borderBottom={"1px solid #D9D9D9"}>
          <Center gap={"14px"}>
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <FontAwesomeIcon icon={faArrowRight} className={css({color:"black", height:"18px"})} />
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <span className={css({fontSize:"14px"})}>（27分）</span>
          </Center>
          <Center fontSize={"10px"} gap={"20px"}>
            <p>大阪梅田（阪急線）行</p>
            <p>３・４番ホーム</p>
            <p>290円/乗り換え0回</p>
          </Center>
        </Center>
        <Center flexDir={"column"} marginTop={"40px"} paddingBottom={"10px"} borderBottom={"1px solid #D9D9D9"}>
          <Center gap={"14px"}>
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <FontAwesomeIcon icon={faArrowRight} className={css({color:"black", height:"18px"})} />
            <p className={css({fontSize:"30px", fontWeight:"bold"})}>7:00</p>
            <span className={css({fontSize:"14px"})}>（27分）</span>
          </Center>
          <Center fontSize={"10px"} gap={"20px"}>
            <p>大阪梅田（阪急線）行</p>
            <p>３・４番ホーム</p>
            <p>290円/乗り換え0回</p>
          </Center>
        </Center>
      </Flex>

    </Layout>
  )
}
