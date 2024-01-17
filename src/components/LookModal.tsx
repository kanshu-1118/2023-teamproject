import React, { useEffect, useState } from 'react'
import { css } from '../../styled-system/css'
import { Center } from '../../styled-system/jsx'
import { center, flex } from '../../styled-system/patterns'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useModalScrollLock } from './logic/use-modal-scroll-lock'

export const MODAL_ID = "modal"

const LookModal = ({show,setShow} : any) => {

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
                className={center({overflow:"hidden",zIndex:"1",transition:"0.2s ease",top:"0",left:"0",position:"fixed",bgColor:"base",w:"100vw",h:"100vh"})}
                // onClick={() => {setShow(false)}}
                >
                    <div className={css({position:"absolute",right:"24px",top:"-37px",zIndex:"10"})}
                            onClick={() => {setShow(false)}}
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
                                    backgroundColor: "black",
                                    borderRadius:"10px",
                                    top:"0%",
                                })}></span>
                                <span className={css({
                                    position: "absolute",
                                    width: "100%",
                                    height: "4px",
                                    backgroundColor: "black",
                                    borderRadius:"10px",
                                    top:"50%",
                                })}></span>
                                <span className={css({
                                    position: "absolute",
                                    width: "100%",
                                    height: "4px",
                                    backgroundColor: "black",
                                    borderRadius:"10px",
                                    top:"100%",
                                })}></span>
                            </div>
                        </div>
                    <div className={center({
                        bgColor:"base",
                        flexDir:"column",
                        padding:"32px 24px",
                        borderRadius:"8px",
                        gap:"32px",
                        })}
                        onClick={(e) => e.stopPropagation()}
                        >
                        <p className={css({fontSize:"20px",fontWeight:"bold"})}>条件を絞り込む</p>
                        <div className={flex({alignItems:"center",justifyContent:"space-between",w:"240px"})}>
                            <p className={css({fontSize:"12px",fontWeight:"bold"})}>駅名</p>
                            <input type="text" className={center({
                                w:"150px",
                                height:"37px",
                                boxShadow:"0px 2px 5px 0px rgba(168,168,168,0.25)",
                                borderRadius:"10px",
                                fontSize:"12px",fontWeight:"bold",
                                paddingLeft:"4px",
                            })} />
                        </div>
                        <div className={flex({alignItems:"center",justifyContent:"space-between",w:"240px"})}>
                            <p className={css({fontSize:"12px",fontWeight:"bold"})}>車両を選択</p>
                            <select className={center({
                                w:"150px",
                                height:"37px",
                                boxShadow:"0px 2px 5px 0px rgba(168,168,168,0.25)",
                                borderRadius:"10px",
                                fontSize:"12px",fontWeight:"bold",
                                paddingLeft:"4px",
                            })} >
                                <option value="1車両目">1車両目</option>
                            </select>
                        </div>
                        <div className={flex({alignItems:"center",justifyContent:"space-between",w:"240px"})}>
                            <p className={css({fontSize:"12px",fontWeight:"bold"})}>時間帯</p>
                            <input type="time" className={center({
                                w:"150px",
                                height:"37px",
                                boxShadow:"0px 2px 5px 0px rgba(168,168,168,0.25)",
                                borderRadius:"10px",
                                fontSize:"12px",fontWeight:"bold",
                                paddingLeft:"4px",
                            })} />
                        </div>
                        <div className={flex({alignItems:"center",justifyContent:"space-between",w:"240px"})}>
                            <p className={css({fontSize:"12px",fontWeight:"bold"})}>においの種類</p>
                            <select className={center({
                                w:"150px",
                                height:"37px",
                                boxShadow:"0px 2px 5px 0px rgba(168,168,168,0.25)",
                                borderRadius:"10px",
                                fontSize:"12px",fontWeight:"bold",
                                paddingLeft:"4px",
                            })} >
                                <option value="たばこ">たばこ</option>
                            </select>
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
                            >決定</button>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default LookModal