import Image from "next/image";
import { css } from "../../styled-system/css";
import { Box, Center, Flex } from "../../styled-system/jsx";
import Layout from "../components/Layout";
import {faArrowLeft, faArrowRightArrowLeft, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { center, flex } from "../../styled-system/patterns";
import { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import LookModal from "@/components/LookModal";
import PostModal from "@/components/PostModal";
import { auth} from "@/libs/firebase/index";  //パスは必要に応じて調節してください
import { doc, setDoc, getDoc, addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/libs/firebase/config";
import { useRouter } from "next/navigation"; 
import { getDatabase, onChildAdded, ref } from "firebase/database";
import { FirebaseError } from "firebase/app";

export default function Home() {

    const [obs,setObs] = useState("post")
    const [display,setDisplay] = useState("center")
    const [opacity,setOpacity] = useState(1)
    const [show,setShow] = useState(false)
    const [postShow,setPostShow] = useState(false)
    const [station,setStation] = useState("千舟")
    const [vehicle,setVehicle] = useState("1号車")
    const [butsmell,setButsmell] = useState("たばこ")
    const [level,setLevel] = useState("lv.2")
    const [message,setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [querySnapshots,setQuerySnapshots] : any = useState([])
    const [postData,setPostData] : any = useState()
    const router = useRouter();
    const [array,setArray] = useState(new Array())

    // const FireGet = () => {
    //     auth.onAuthStateChanged(async (user:any) => {
    //         // const postDoc = await getDocs(collection(db, "post"));
    //         const querySnapshot = await getDocs(collection(db, "post",station,"posts"));
    //         querySnapshot.docs.map((doc : any,index : number,a:any) => {
    //             // doc.data() is never undefined for query doc snapshots
    //             setQuerySnapshots([...querySnapshots, doc.data()])
    //             console.log(doc.id, " => ", doc.data());
    //             console.log(querySnapshots);
    //             // if (doc.data().message == "") {
    //             //     return(
    //             //         <div key={index} className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgSmall.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"116px"})} >
    //             //             <div className={center({w:"100%",justifyContent:"space-between"})}>
    //             //                 <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
    //             //                 <div>
    //             //                     <div className={center({})}>
    //             //                         <p className={css({fontSize:"18px"})}>{doc.data().butsmell}</p>
    //             //                         <span>・</span>
    //             //                         <p className={css({fontSize:"18px"})}>{doc.data().level}</p>
    //             //                     </div>
    //             //                     <p className={css({fontSize:"24px",fontWeight:"bold",textAlign:"center"})}>{doc.data().station}</p>
    //             //                 </div>
    //             //                 <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>{doc.data().vehicle}</p>
    //             //             </div>
    //             //             <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
    //             //         </div>
    //             //     )
    //             // } else {
    //             //     return(
    //             //         <div key={index} className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgBig.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"162px"})} >
    //             //             <div className={center({w:"100%",justifyContent:"space-between"})}>
    //             //                 <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
    //             //                 <div>
    //             //                     <div className={center({})}>
    //             //                         <p className={css({fontSize:"18px"})}>{doc.data().butsmell}</p>
    //             //                         <span>・</span>
    //             //                         <p className={css({fontSize:"18px"})}>{doc.data().level}</p>
    //             //                     </div>
    //             //                     <p className={css({fontSize:"24px",fontWeight:"bold",textAlign:"center"})}>{doc.data().station}</p>
    //             //                 </div>
    //             //                 <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>{doc.data().vehicle}</p>
    //             //             </div>
    //             //             <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
    //             //             <div>
    //             //                 <p className={css({w:"210px",h:"42px",fontWeight:"bold"})}>
    //             //                     {doc.data().message}
    //             //                 </p>
    //             //             </div>
    //             //         </div>
    //             //     )
    //             // }
    //         });
    //     })
    // }

    const ent : any = []


    useEffect(() => {
        if (obs == "look") {
            setOpacity(0)
        } else if (obs == "post") {
            setOpacity(1)
        }
        // FireGet()
        auth.onAuthStateChanged(async (user:any) => {
            // const postDoc = await getDocs(collection(db, "post"));
            const querySnapshot = await getDocs(collection(db, "post",station,"posts"));
            querySnapshot.docs.map((doc : any,index : number,a:any) => {
                // doc.data() is never undefined for query doc snapshots
                // setQuerySnapshots([...querySnapshots, doc.data()])
                // console.log(doc.id, " => ", doc.data());
                // console.log(querySnapshots);
                // if (doc.data().message == "") {
                //     return(
                //         <div key={index} className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgSmall.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"116px"})} >
                //             <div className={center({w:"100%",justifyContent:"space-between"})}>
                //                 <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
                //                 <div>
                //                     <div className={center({})}>
                //                         <p className={css({fontSize:"18px"})}>{doc.data().butsmell}</p>
                //                         <span>・</span>
                //                         <p className={css({fontSize:"18px"})}>{doc.data().level}</p>
                //                     </div>
                //                     <p className={css({fontSize:"24px",fontWeight:"bold",textAlign:"center"})}>{doc.data().station}</p>
                //                 </div>
                //                 <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>{doc.data().vehicle}</p>
                //             </div>
                //             <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
                //         </div>
                //     )
                // } else {
                //     return(
                //         <div key={index} className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgBig.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"162px"})} >
                //             <div className={center({w:"100%",justifyContent:"space-between"})}>
                //                 <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
                //                 <div>
                //                     <div className={center({})}>
                //                         <p className={css({fontSize:"18px"})}>{doc.data().butsmell}</p>
                //                         <span>・</span>
                //                         <p className={css({fontSize:"18px"})}>{doc.data().level}</p>
                //                     </div>
                //                     <p className={css({fontSize:"24px",fontWeight:"bold",textAlign:"center"})}>{doc.data().station}</p>
                //                 </div>
                //                 <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>{doc.data().vehicle}</p>
                //             </div>
                //             <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
                //             <div>
                //                 <p className={css({w:"210px",h:"42px",fontWeight:"bold"})}>
                //                     {doc.data().message}
                //                 </p>
                //             </div>
                //         </div>
                //     )
                // }
                array.push(doc.data())
                setArray(new Array(array))
                console.log(array);
                
            });
        })
        
    },[]) 
    
    console.log(array[0]);
    
    const FireStoreSet = () => {
        auth.onAuthStateChanged(async () => {
            // ログイン済みのユーザー情報があるかをチェック
            await addDoc(collection(db, "post" ,station,"posts"), 
                {
                    station:station,
                    vehicle:vehicle,
                    butsmell:butsmell,
                    level:level,
                    message:message,
                }
            );
        }
        );
    }

    return (
        <Layout >
            <div className={css({h:"100vh",bgColor:"base"})}>
                <div className={css({position:"fixed",zIndex:"0",w:"100vw"})}>
                    <motion.button transition={{delay:1,ease:easeInOut}} className={css({transition:"ease 0.2s",zIndex:obs == "post" ? 2 : 0,scale:obs == "post" ? "1" : "0.8",border:obs == "post" ? "" : "10px solid",borderColor:obs == "post" ? "" : "main",position:"absolute",top:obs == "post" ? "-80px" : "-80px",left:obs == "post" ? "-32px" : "-60px",w:"280px",h:"280px",borderRadius:"100%",paddingTop:"84px",bgColor:obs == "post" ? "main" : "",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})} onClick={() => setObs("post")}><span className={css({fontSize:"26px",fontWeight:"bold",color:obs == "post" ? "base" : "#0e0e0e"})}>つぶやき</span></motion.button>
                    <motion.button className={css({transition:"ease 0.2s",zIndex:obs == "post" ? 1 : 2,scale:obs == "post" ? "0.8" : "1",border:obs == "post" ? "10px solid" : "",borderColor:obs == "post" ? "#FFCD92" : "",w:"280px",h:"280px",transform:obs == "post" ? "translateX(220px)translateY(-104px)":"translateX(150px)translateY(-78px)",borderRadius:"100%",paddingTop:"84px",bgColor:obs == "post" ? "" : "#FFCD92",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})} onClick={() => setObs("look")}>
                    {obs === "look" && 
                        <div className={css({position:"absolute",right:"80px",top:"40px",zIndex:"10"})}
                            onClick={() => {setShow(true)}}
                        >
                            <div className={css({
                                width: "32px",
                                height: "22px",
                                position: "relative",
                                top: "65px",
                            })}>
                                <span className={css({
                                    position: "absolute",
                                    width: "100%",
                                    height: "4px",
                                    backgroundColor: "base",
                                    borderRadius:"10px",
                                    top:"0%",
                                })}></span>
                                <span className={css({
                                    position: "absolute",
                                    width: "100%",
                                    height: "4px",
                                    backgroundColor: "base",
                                    borderRadius:"10px",
                                    top:"50%",
                                })}></span>
                                <span className={css({
                                    position: "absolute",
                                    width: "100%",
                                    height: "4px",
                                    backgroundColor: "base",
                                    borderRadius:"10px",
                                    top:"100%",
                                })}></span>
                            </div>
                        </div>
                    }
                        <span className={css({fontSize:"26px",fontWeight:"bold",color:obs == "post" ? "#0e0e0e" : "base"})}>
                            みる
                        </span>
                        </motion.button>
                </div>
                <div className={center({position:"relative",transform:"translateY(264px)",flexDir:"column"})}>
                    {obs === "post" ? 
                    <AnimatePresence>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2}}
                            className={center({position:"absolute",top:"0",paddingBottom:"40px",flexDir:"column"})}>
                            <div className={center({flexDir:"column",gap:"40px"})}>
                                <p className={css({fontSize:"30px",fontWeight:"bold",color:"main"})}>でんしゃ</p>
                                <div className={flex({gap:"40px"})}>
                                    <div className={center({flexDir:"column",gap:"8px"})}>
                                        <p className={css({fontSize:"14px"})}>現在の駅名</p>
                                        <input className={css({borderRadius:"10px",paddingLeft:"4px",bgColor:"white",w:"150px",h:"40px",fontSize:"16px",fontWeight:"bold",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})}
                                            placeholder="name"
                                            defaultValue={station}
                                            onChange={(e) => setStation(e.target.value)}
                                            readOnly={isLoading}
                                        />
                                        
                                    </div>
                                    <div className={center({flexDir:"column",gap:"8px"})}>
                                        <p className={css({fontSize:"14px"})}>乗車中の車両</p>
                                        <select className={center({borderRadius:"10px",bgColor:"white",w:"150px",h:"40px",fontSize:"16px",fontWeight:"bold",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})}
                                            onChange={(e) => setVehicle(e.target.value)}
                                        >
                                            <option value="1号車">1号車</option>
                                            <option value="2号車">2号車</option>
                                            <option value="3号車">3号車</option>
                                            <option value="4号車">4号車</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={flex({gap:"40px"})}>
                                    <div className={center({flexDir:"column",gap:"8px"})}>
                                        <p className={css({fontSize:"14px"})}>種類</p>
                                        <select className={center({borderRadius:"10px",bgColor:"white",w:"150px",h:"40px",fontSize:"16px",fontWeight:"bold",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})}
                                            onChange={(e) => setButsmell(e.target.value)}
                                        >
                                            <option value="たばこ">たばこ</option>
                                            <option value="にんにく">にんにく</option>
                                            <option value="口臭">口臭</option>
                                            <option value="体臭">体臭</option>
                                            <option value="香水">香水</option>
                                        </select>
                                    </div>
                                    <div className={center({flexDir:"column",gap:"8px"})}>
                                        <p className={css({fontSize:"14px"})}>強さ</p>
                                        <select className={center({borderRadius:"10px",bgColor:"white",w:"150px",h:"40px",fontSize:"16px",fontWeight:"bold",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})}
                                            onChange={(e) => setLevel(e.target.value)}
                                        >
                                            <option value="lv.1">lv.1</option>
                                            <option value="lv.2">lv.2</option>
                                            <option value="lv.3">lv.3</option>
                                            <option value="lv.4">lv.4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={center({flexDir:"column",gap:"8px"})}>
                                    <p className={css({fontSize:"14px"})}>メッセージ（任意）</p>
                                    <input type="text" className={css({ paddingLeft:"8px",borderRadius:"10px",bgColor:"white",w:"280px",h:"40px",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})} 
                                        placeholder="name"
                                        defaultValue={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        readOnly={isLoading}
                                    />
                                </div>
                                
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    :
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={flex({ maxH:"460px",gap:"24px",overflowY:"scroll",'&::-webkit-scrollbar':{display:"none"},position:"absolute",top:"0",flexDir:"column"})}>
                            
                            {/* <div className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgBig.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"162px"})} >
                                <div className={center({w:"100%",justifyContent:"space-between"})}>
                                    <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
                                    <div>
                                        <div className={center({})}>
                                            <p className={css({fontSize:"18px"})}>タバコ</p>
                                            <span>・</span>
                                            <p className={css({fontSize:"18px"})}>lv.3</p>
                                        </div>
                                        <p className={css({fontSize:"24px",fontWeight:"bold"})}>阪急高槻</p>
                                    </div>
                                    <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>3号車</p>
                                </div>
                                <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
                                <div>
                                    <p className={css({w:"210px",h:"42px",fontWeight:"bold"})}>
                                        タバコの匂いがjhscるあんh
                                    </p>
                                </div>
                            </div>
                            <div className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgSmall.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"116px"})} >
                                <div className={center({w:"100%",justifyContent:"space-between"})}>
                                    <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
                                    <div>
                                        <div className={center({})}>
                                            <p className={css({fontSize:"18px"})}>タバコ</p>
                                            <span>・</span>
                                            <p className={css({fontSize:"18px"})}>lv.3</p>
                                        </div>
                                        <p className={css({fontSize:"24px",fontWeight:"bold"})}>阪急高槻</p>
                                    </div>
                                    <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>3号車</p>
                                </div>
                                <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
                            </div> */}
                            <div>
                            {
                                array[0].map((e:any,i:any) => {
                                    if (e.message == "") {
                                        return(
                                            <div key={i} className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgSmall.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"116px"})} >
                                                <div className={center({w:"100%",justifyContent:"space-between"})}>
                                                    <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
                                                    <div>
                                                        <div className={center({})}>
                                                            <p className={css({fontSize:"18px"})}>{e.butsmell}</p>
                                                            <span>・</span>
                                                            <p className={css({fontSize:"18px"})}>{e.level}</p>
                                                        </div>
                                                        <p className={css({fontSize:"24px",fontWeight:"bold",textAlign:"center"})}>{e.station}</p>
                                                    </div>
                                                    <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>{e.vehicle}</p>
                                                </div>
                                                <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
                                            </div>
                                        )
                                    } else {
                                        return(
                                            <div key={i} className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgBig.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"162px"})} >
                                                <div className={center({w:"100%",justifyContent:"space-between"})}>
                                                    <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
                                                    <div>
                                                        <div className={center({})}>
                                                            <p className={css({fontSize:"18px"})}>{e.butsmell}</p>
                                                            <span>・</span>
                                                            <p className={css({fontSize:"18px"})}>{e.level}</p>
                                                        </div>
                                                        <p className={css({fontSize:"24px",fontWeight:"bold",textAlign:"center"})}>{e.station}</p>
                                                    </div>
                                                    <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>{e.vehicle}</p>
                                                </div>
                                                <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
                                                <div>
                                                    <p className={css({w:"210px",h:"42px",fontWeight:"bold"})}>
                                                        {e.message}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    
                                })
                            }
                            </div>
                                
                        </motion.div>
                    }
                </div>
                {obs === "post" ? 
                <AnimatePresence>
                    <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }} className={center({gap:"16px",position:"fixed",bottom:"40px",w:"100vw",opacity:opacity,transition:"0.1s ease"})}>
                    <Link href={"/"}>
                        <button className={center({gap:"8px",borderRadius:"100px",border:"2px solid", borderColor:"main",bgColor:"white",w:"140px",h:"40px",fontSize:"16px",fontWeight:"bold",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})}><FontAwesomeIcon icon={faArrowLeft} className={css({color:"black",height:"16px"})} />ホーム</button>
                    </Link>
                    <button className={css({borderRadius:"100px",bgColor:"main",w:"140px",h:"40px",fontSize:"16px",fontWeight:"bold",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)",color:"white"})}
                    onClick={async (e) => {
                        e.preventDefault();
                        setIsLoading(true);
                        FireStoreSet()
                        // router.push("/");
                        setObs("look")
                        setPostShow(true)
                        setIsLoading(false);
                    }}
                    disabled={isLoading}
                    >つぶやく！</button>
                    </motion.div>
                </AnimatePresence>
                :
                    <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }} className={center({gap:"16px",position:"fixed",bottom:"40px",w:"100vw",opacity:opacity,transition:"0.1s ease"})}>
                    <Link href={"/"}>
                        <button className={center({gap:"8px",borderRadius:"100px",border:"2px solid", borderColor:"main",bgColor:"white",w:"140px",h:"40px",fontSize:"16px",fontWeight:"bold",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})}><FontAwesomeIcon icon={faArrowLeft} className={css({color:"black",height:"16px"})} />ホーム</button>
                    </Link>
                    </motion.div>
                }
                {/* <div className={center({position:"relative",transform:"translateY(264px)",flexDir:"column"})}>
                    <div className={center({position:"absolute",top:"0",transition:"ease 0.2s",opacity: obs == "post" ? 1 : 0,zIndex: obs == "post" ? 1 : 0,paddingBottom:"40px",flexDir:"column"})}>
                        <div className={center({flexDir:"column",gap:"40px"})}>
                            <p className={css({fontSize:"30px",fontWeight:"bold",color:"main"})}>でんしゃ</p>
                            <div className={flex({gap:"40px"})}>
                                <div className={center({flexDir:"column",gap:"8px"})}>
                                    <p className={css({fontSize:"14px"})}>現在の駅名</p>
                                    <button className={css({borderRadius:"10px",bgColor:"white",w:"150px",h:"40px",fontSize:"16px",fontWeight:"bold",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})}>阪急高槻</button>
                                </div>
                                <div className={center({flexDir:"column",gap:"8px"})}>
                                <p className={css({fontSize:"14px"})}>乗車中の車両</p>
                                    <button className={css({borderRadius:"10px",bgColor:"white",w:"150px",h:"40px",fontSize:"16px",fontWeight:"bold",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})}>3号車</button>
                                </div>
                            </div>
                            <div className={flex({gap:"40px"})}>
                                <div className={center({flexDir:"column",gap:"8px"})}>
                                    <p className={css({fontSize:"14px"})}>現在の駅名</p>
                                    <button className={css({borderRadius:"10px",bgColor:"white",w:"150px",h:"40px",fontSize:"16px",fontWeight:"bold",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})}>阪急高槻</button>
                                </div>
                                <div className={center({flexDir:"column",gap:"8px"})}>
                                <p className={css({fontSize:"14px"})}>乗車中の車両</p>
                                    <button className={css({borderRadius:"10px",bgColor:"white",w:"150px",h:"40px",fontSize:"16px",fontWeight:"bold",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})}>3号車</button>
                                </div>
                            </div>
                            <div className={center({flexDir:"column",gap:"8px"})}>
                                <p className={css({fontSize:"14px"})}>メッセージ（任意）</p>
                                <input type="text" className={css({ paddingLeft:"8px",borderRadius:"10px",bgColor:"white",w:"280px",h:"40px",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})} />
                            </div>
                            
                        </div>
                    </div>
                    <div className={flex({ maxH:"460px",gap:"24px",overflowY:"scroll",'&::-webkit-scrollbar':{display:"none"},position:"absolute",top:"0",transition:"ease 0.2s",opacity: obs == "post" ? 0 : 1,zIndex: obs == "post" ? 0 : 1,flexDir:"column"})}>
                        <div className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgBig.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"162px"})} >
                            <div className={center({w:"100%",justifyContent:"space-between"})}>
                                <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
                                <div>
                                    <div className={center({})}>
                                        <p className={css({fontSize:"18px"})}>タバコ</p>
                                        <span>・</span>
                                        <p className={css({fontSize:"18px"})}>lv.3</p>
                                    </div>
                                    <p className={css({fontSize:"24px",fontWeight:"bold"})}>阪急高槻</p>
                                </div>
                                <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>3号車</p>
                            </div>
                            <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
                            <div>
                                <p className={css({w:"210px",h:"42px",fontWeight:"bold"})}>
                                    タバコの匂いがjhscるあんh
                                </p>
                            </div>
                        </div>
                        <div className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgSmall.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"116px"})} >
                            <div className={center({w:"100%",justifyContent:"space-between"})}>
                                <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
                                <div>
                                    <div className={center({})}>
                                        <p className={css({fontSize:"18px"})}>タバコ</p>
                                        <span>・</span>
                                        <p className={css({fontSize:"18px"})}>lv.3</p>
                                    </div>
                                    <p className={css({fontSize:"24px",fontWeight:"bold"})}>阪急高槻</p>
                                </div>
                                <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>3号車</p>
                            </div>
                            <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
                        </div>
                        <div className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgBig.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"162px"})} >
                            <div className={center({w:"100%",justifyContent:"space-between"})}>
                                <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
                                <div>
                                    <div className={center({})}>
                                        <p className={css({fontSize:"18px"})}>タバコ</p>
                                        <span>・</span>
                                        <p className={css({fontSize:"18px"})}>lv.3</p>
                                    </div>
                                    <p className={css({fontSize:"24px",fontWeight:"bold"})}>阪急高槻</p>
                                </div>
                                <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>3号車</p>
                            </div>
                            <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
                            <div>
                                <p className={css({w:"210px",h:"42px",fontWeight:"bold"})}>
                                    タバコの匂いがjhscるあんh
                                </p>
                            </div>
                        </div>
                        <div className={flex({gap:"16px",alignItems:"center",padding:"8px",flexDir:"column",flexShrink:"0",bgImage:"url(/images/lookImgBig.svg)",bgRepeat:"no-repeat",bgPosition:"center",w:"292px",h:"162px"})} >
                            <div className={center({w:"100%",justifyContent:"space-between"})}>
                                <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",transform:"rotate(270deg)",borderBottom:"1px solid #000"})}>7:10</p>
                                <div>
                                    <div className={center({})}>
                                        <p className={css({fontSize:"18px"})}>タバコ</p>
                                        <span>・</span>
                                        <p className={css({fontSize:"18px"})}>lv.3</p>
                                    </div>
                                    <p className={css({fontSize:"24px",fontWeight:"bold"})}>阪急高槻</p>
                                </div>
                                <p className={css({fontSize:"18px",textAlign:"center",w:"60px",h:"25px",borderTop:"1px solid #000",transform:"rotate(270deg)"})}>3号車</p>
                            </div>
                            <Box borderTop={"1px dashed #000"} alignItems={"center"} justifyContent={"space-between"} w={"239px"}h={"1px"}></Box>
                            <div>
                                <p className={css({w:"210px",h:"42px",fontWeight:"bold"})}>
                                    タバコの匂いがjhscるあんh
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <LookModal show={show} setShow={setShow} />
            <PostModal show={postShow} setShow={setPostShow} />
        </Layout>
    )
}
