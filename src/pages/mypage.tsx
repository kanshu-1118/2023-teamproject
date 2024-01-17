import Layout from '@/components/Layout'
import React, { useState } from 'react'
import { center, flex } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'
import MypageModal from '@/components/MypageModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faTrain } from '@fortawesome/free-solid-svg-icons/faTrain'
import { faFlask } from '@fortawesome/free-solid-svg-icons/faFlask'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { motion } from 'framer-motion'

const Mypage = () => {
    const [userStatus,setUserStatus] = useState(true)
    
    return (
        <>
            <motion.div className={css({
                        position:"fixed",
                        zIndex:"999",
                        top:"0",
                        w:"100vw",
                        h:"100vh",
                        bgColor:"rgba(0,0,0,0.25)",
                    })}>
                    <div className={css({
                        position:"absolute",
                        bottom:"0",
                        w:"100vw",
                        // zIndex:"999",
                        bgColor:"#fff",
                        borderRadius:"30px 30px 0 0", boxShadow:"0 -6px 10px 0 rgba(0, 0, 0, 0.25)"})}>
                        <div className={css({padding:"10px 0 2px 0"})}><p className={css({bgColor:"#d9d9d9", borderRadius:"8px", w:"50px", h:"8px", margin:"0 auto"})}></p></div>

                        <div className={flex({padding:"20px 0 15px 25px", alignItems:"center"})}
                        onClick={()=>{console.log(userStatus) ;
                        }}
                        >
                                
                            <FontAwesomeIcon icon={faUser} className={css({h:"21px"})}/>
                            <p className={css({fontSize:"20px", fontWeight:"bold", marginLeft:"5px"})}>個人情報の変更</p>
                            <FontAwesomeIcon icon={faChevronDown} className={css({h:"21px", paddingLeft:"58px"})}/>
                        </div>
                        <div className={flex({padding:"20px 0 15px 25px", alignItems:"center"})}>
                            <FontAwesomeIcon icon={faTrain} className={css({h:"21px"})}/>
                            <p className={css({fontSize:"20px", fontWeight:"bold", marginLeft:"5px"})}>マイルートの変更</p>
                            <FontAwesomeIcon icon={faChevronDown} className={css({h:"21px", paddingLeft:"42px"})}/>
                        </div>
                        <div className={flex({padding:"20px 0 15px 25px", alignItems:"center"})}>
                            <FontAwesomeIcon icon={faFlask} className={css({h:"21px"})}/>
                            <p className={css({fontSize:"20px", fontWeight:"bold", marginLeft:"5px"})}>におい登録の変更</p>
                            <FontAwesomeIcon icon={faChevronDown} className={css({h:"21px", paddingLeft:"42px"})}/>
                        </div>
                    </div>
                </motion.div>
            <Layout>
                <div className={css({position:"relative"})}>

                    <div className={flex({justifyContent:"space-between", paddingTop:"35px"})}>
                        <h1 className={css({margin:"0 0 10px 25px", fontSize:"20px", fontWeight:"bold"})}>ss_miyu</h1>
                        <FontAwesomeIcon icon={faGear} className={css({h:"24px",color:"#6D92BF", paddingRight:"15px"})}/>
                    </div>
                    
                    <div className={flex({marginBottom:"60px"})}>
                        <img className={css({margin:"0 25px"})} src="/images/icon.png" alt="icon" />
                        <div className={flex({flexDir:"column", fontWeight:"bold"})}>
                            <p className={css({margin:"10px 0 15px", fontSize:"14px"})}>島田美優</p>
                            <p className={css({marginBottom:"5px", fontSize:"10px"})}>1997.11.11</p>
                            <p className={css({fontSize:"10px"})}>大阪</p>
                        </div>
                    </div>

                    <div>
                        <div className={flex({alignItems:"center", paddingLeft:"15px", marginBottom:"25px", gap:"4px"})}>
                            <img src="/images/startline.png" alt="" />
                            <h2 className={css({fontSize:"20px", fontWeight:"bold"})}>マイルート</h2>
                        </div>

                        <div>
                        <div className={flex({})}>
                            <img className={css({margin:"15px 0 36px"})} src="/images/line.png" alt="" />
                            <div className={flex({position:"absolute"})}>
                                <p className={center({w:"50px", h:"20px", bgColor:"#fff", borderRadius:"5px", margin:"auto 18px auto 0", fontSize:"10px", fontWeight:"bold", boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, 0.25)"})}>発車</p>
                                <p className={center({w:"140px", h:"40px", bgColor:"#fff", borderRadius:"5px", marginRight:"18px", fontSize:"14px", fontWeight:"bold", boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, 0.25)"})}>阪急高槻駅</p>
                                <p className={center({w:"140px", h:"40px", bgColor:"#fff", borderRadius:"5px", fontSize:"14px", fontWeight:"bold", boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, 0.25)"})}>7:00</p>
                            </div>
                        </div>
                        <div className={flex({})}>
                        <img className={css({margin:"15px 0 36px"})} src="/images/line.png" alt="" />
                            <div className={flex({position:"absolute"})}>
                                <p className={center({w:"50px", h:"20px", bgColor:"#fff", borderRadius:"5px", margin:"auto 18px auto 0", fontSize:"10px", fontWeight:"bold", boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, 0.25)"})}>発車</p>
                                <p className={center({w:"140px", h:"40px", bgColor:"#fff", borderRadius:"5px", marginRight:"18px", fontSize:"14px", fontWeight:"bold", boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, 0.25)"})}>大阪梅田駅</p>
                                <p className={center({w:"140px", h:"40px", bgColor:"#fff", borderRadius:"5px", fontSize:"14px", fontWeight:"bold", boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, 0.25)"})}>7:28</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className={css({fontWeight:"bold"})}>
                        <div className={flex({alignItems:"center", paddingLeft:"15px", margin:"30px 0 25px", gap:"4px"})}>
                            <img src="/images/startline.png" alt="" />
                            <h2 className={css({fontSize:"20px"})}>におい登録</h2>
                        </div>
                        <div className={center({flexDir:"column", gap:"10px", textAlign:"center", fontSize:"10px"})}>
                            <p className={center({w:"250px", h:"30px", borderRadius:"10px", boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, 0.25)"})}>タバコ</p>
                            <p className={center({w:"250px", h:"30px", borderRadius:"10px", boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, 0.25)"})}>汗が参加したにおい</p>
                            <p className={center({w:"250px", h:"30px", borderRadius:"10px", boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, 0.25)"})}>口臭</p>
                        </div>
                    </div>
                    
                    
                    {/* <MypageModal></MypageModal> */}
                </div>
            </Layout>
        </>
    )
}

export default Mypage