import Image from "next/image";
import { css } from "../../styled-system/css";
import { Box, Center, Flex, } from "../../styled-system/jsx";
import axios from 'axios';
import Layout from "../components/Layout";
import {faArrowRightArrowLeft, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { center, flex } from "../../styled-system/patterns";
import MypageModal from "@/components/MypageModal";
import MyrootPost from "@/components/MyrootPost";
import Button from "@/components/Button";
import Topics from "@/components/Topics";
import { useEffect, useState } from "react";
import { auth } from "@/libs/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/libs/firebase/config";
import Link from "next/link";
import RootModal from "@/components/RootModal";
import SmellModal from "@/components/SmellModal";

export default function Home() {

  const [userStatus,setUsertStatus] = useState(true)
  const [train,setTrain] = useState()
  const [userData,setUserData] : any = useState()
  const [show,setShow] = useState(false)
  const [smellShow,setSmellShow] = useState(false)
  const [offset,setOffset] = useState("1")
  const [lat,setLat] = useState("")
  const [lng,setLng] = useState("")
  const [address,setAddress] = useState("")



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
    auth.onAuthStateChanged(async (user:any) => {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      console.log(userDoc.data());
      setUserData(userDoc.data())
    })
  },[offset])
  
  // console.log(train);
  

  return (
    <div className={css({h:"100vh"})}>
      <Layout>
        <Flex  padding={"40px 0 100px"} flexDir={"column"} gap={"32px"} >
          <Center flexDir={"column"} padding={"16px 0px"} gap={"24px"}>
            <div className={css({position:"absolute",w:"100vw",h:"50%",bg:"linear-gradient(#FAFCFF,#63A6F7,#FAFCFF)",zIndex:"0"})}>

            </div>
            <Flex  zIndex={"1"} alignItems={"center"} gap={"16px"} w={"287px"}>
              <div className={css({w:"44px",h:"44px",border:"2px solid #000",borderColor:"base",bgColor:"green.300",borderRadius:"100%"})} />
              <p className={css({fontWeight:"bold",color:"base"})}>{userData?.name}さん</p>
            </Flex>
            <Flex zIndex={"1"} flexDir={"column"} padding={"18px 0px"} w={"287px"} h={"155px"} gap={"12px"} bgImage={"url(/images/topCard.svg)"}>
              <Flex flexDir={"column"} gap={"10px"}>
                <Flex alignItems={"center"} padding={"0px 24px"} justifyContent={"space-between"}>
                  <Flex borderRadius={"3px"}><p className={center({fontSize:"18px",width:"90px",fontWeight:"bold",h:"51px"})}>{userData?.myRoot.goStation}</p></Flex>
                  <Center className={css({bgColor:"#fff", padding:"4px 12px", borderRadius:"3px"})} 
                    
                  >
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} className={css({color:"black", height:"18px"})} />
                  </Center>
                  <Flex><p className={center({fontSize:"18px",width:"90px",fontWeight:"bold",h:"51px"})}>{userData?.myRoot.comeStation}</p></Flex>
                </Flex>
                <Box borderTop={"1px dashed #000"} marginLeft={"24px"} marginBottom={"20px"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
                <Center padding={"0 24px"} gap={"16px"} fontSize={"14px"}>
                  <Center gap={"10px"} w={"70px"}>
                    <p className={css({fontWeight:"bold"})}>7:00発</p>
                  </Center>
                  <Flex bgColor={"black"} alignItems={"center"} justifyContent={"space-between"} w={"48px"}h={"1px"} className={css({position:"relative"})}>
                    <Box w={"11px"} h={"11px"} borderRadius={"100%"} className={css({bgColor:"#FFDB5A"})}></Box>
                    <Box w={"11px"} h={"11px"} borderRadius={"100%"} className={css({bgColor:"main"})}></Box>
                  </Flex>
                  <Center gap={"10px"} w={"70px"}>
                    <p className={css({fontWeight:"bold"})}>12:00着</p>
                  </Center>
                </Center>
              </Flex>
            </Flex>
            <Center zIndex={"1"}>
              <Button text="ルート変更" onClick={() => {setShow(true)}}/>
            </Center>
          </Center>
          <div className={flex({zIndex:"0",flexDir:"column",bgColor:"base", gap:"48px",padding:"40px 0",borderRadius:"30px 30px 0 0", boxShadow:"0px -2px 4px 0px rgba(0, 0, 0, 0.25)"})}>
            <Center flexDir={"column"} gap={"32px"}>
              <h3 className={css({fontSize:"19px", fontWeight:"bold"})}>マイルートしすう</h3>
              <Flex flexDir={"column"} gap={"20px"}>
                <Center gap={"16px"}>
                  <span className={css({fontSize:"12px",fontWeight:"bold"})}>強</span>
                    {/* <Center width={"237px"} padding={"8px 0"} borderRadius={"36px"} background={"linear-gradient(to right, #FA4892, #63A6F7)"} boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}><span className={css({fontSize:"14px",fontWeight:"bold",color:"base"})}>におい指数</span></Center> */}
                    <div className={flex({gap:"8px"})}>
                      <div className={css({bgImage:"url(/images/myRoot1.svg)",w:"41px",h:"37px"})}></div>
                      <div className={css({bgImage:"url(/images/myRoot2.svg)",w:"41px",h:"37px"})}></div>
                      <div className={css({bgImage:"url(/images/myRoot3.svg)",w:"41px",h:"37px"})}></div>
                      <div className={css({bgImage:"url(/images/myRoot4.svg)",w:"41px",h:"37px"})}></div>
                      <div className={css({bgImage:"url(/images/myroot5.svg)",w:"41px",h:"37px"})}></div>
                    </div>
                  <span className={css({fontSize:"12px",fontWeight:"bold"})}>弱</span>
                </Center>
                <Flex flexDir={"column"}>
                    <Flex justifyContent={"flex-end"} w={"100vw"} overflowX={"scroll"}>
                      <Flex bgImage={"url(/images/trainBox2.svg)"} bgSize={"cover"} gap={"8px"} padding={"8px 10px 16px"} >
                        <Box bgColor={"#FFF0D9"} padding={"6px 24px"} flexShrink={"0"} borderRadius={"5px 2px 2px 2px"}><p className={css({fontSize:"18px",fontWeight:"bold",color:"base"})}
                          onClick={() => {setSmellShow(true)}}
                        >1<span className={css({fontSize:"10px",margin:"0 0 0 2px"})}>車両</span></p></Box>
                        <Box bgColor={"#FFCD82"} padding={"6px 24px"} flexShrink={"0"} borderRadius={"2px 2px 2px 2px"}><p className={css({fontSize:"18px",fontWeight:"bold",color:"base"})}>2<span className={css({fontSize:"10px",margin:"0 0 0 2px"})}>車両</span></p></Box>
                        <Box bgColor={"#FEE2B8"} padding={"6px 24px"} flexShrink={"0"} borderRadius={"2px 2px 2px 2px"}><p className={css({fontSize:"18px",fontWeight:"bold",color:"base"})}>3<span className={css({fontSize:"10px",margin:"0 0 0 2px"})}>車両</span></p></Box>
                        <Box bgColor={"#FFF0D9"} padding={"6px 24px"} flexShrink={"0"} borderRadius={"2px 2px 2px 2px"}><p className={css({fontSize:"18px",fontWeight:"bold",color:"base"})}>4<span className={css({fontSize:"10px",margin:"0 0 0 2px"})}>車両</span></p></Box>
                      </Flex>
                    </Flex>
                    <Image src="./images/load.svg" width={"1000"} height={"1000"} alt="線路画像"/>
                    <Flex justifyContent={"flex-start"} w={"100vw"} overflowX={"scroll"} paddingTop={"16px"}>
                      <Flex bgImage={"url(/images/trainBox2.svg)"} className={css({transform:"rotateY(180deg)"})} bgSize={"cover"} gap={"8px"} padding={"8px 10px 16px"} >
                        <Box bgColor={"#FF9900"} padding={"6px 24px"} transform={"rotateY(180deg)"} flexShrink={"0"} borderRadius={"5px 2px 2px 2px"}><p className={css({fontSize:"18px",fontWeight:"bold",color:"base"})}>8<span className={css({fontSize:"10px",margin:"0 0 0 2px"})}>車両</span></p></Box>
                        <Box bgColor={"#FFF0D9"} padding={"6px 24px"} transform={"rotateY(180deg)"} flexShrink={"0"} borderRadius={"2px 2px 2px 2px"}><p className={css({fontSize:"18px",fontWeight:"bold",color:"base"})}>7<span className={css({fontSize:"10px",margin:"0 0 0 2px"})}>車両</span></p></Box>
                        <Box bgColor={"#FEE2B8"} padding={"6px 24px"} transform={"rotateY(180deg)"} flexShrink={"0"} borderRadius={"2px 2px 2px 2px"}><p className={css({fontSize:"18px",fontWeight:"bold",color:"base"})}>6<span className={css({fontSize:"10px",margin:"0 0 0 2px"})}>車両</span></p></Box>
                        <Box bgColor={"#FFB526"} padding={"6px 24px"} transform={"rotateY(180deg)"} flexShrink={"0"} borderRadius={"2px 2px 2px 2px"}><p className={css({fontSize:"18px",fontWeight:"bold",color:"base"})}>5<span className={css({fontSize:"10px",margin:"0 0 0 2px"})}>車両</span></p></Box>
                      </Flex>
                    </Flex>
                    <Image src="./images/load.svg" width={"1000"} height={"1000"} alt="線路画像"/>
                </Flex>
              </Flex>
            </Center>

            <Flex gap={"32px"} alignItems={"center"} flexDir={"column"}>
              <p className={css({fontWeight:"bold", fontSize:"20px",color:"main"})}>トピックス</p>
              <div className={flex({w:"100vw",gap:"16px",overflowX:"scroll",padding:"10px",'&::-webkit-scrollbar':{display:"none"}})}>
                  <Topics />
                  <Topics />
                  <Topics />
              </div>
            </Flex>
          </div>
        </Flex>
        
      </Layout>
      <RootModal show={show} setShow={setShow} />
      <SmellModal show={smellShow} setShow={setSmellShow} smell1={userData?.butSmell.butsmell1} smell2={userData?.butSmell.butsmell2} smell3={userData?.butSmell.butsmell3} />
      <Link href={"/post"}>
        <button className={css({position:"fixed",zIndex:"0",borderRadius:"100px",fontWeight:"bold",bottom:"48px",right:"24px", bgColor:"main",fontSize:"16px",padding:"16px 48px",color:"base"})}>つぶやき</button>
      </Link>
    </div>
  )
}
