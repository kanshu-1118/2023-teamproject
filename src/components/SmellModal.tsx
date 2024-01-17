import React, { useEffect, useState } from 'react'
import { css } from '../../styled-system/css'
import { Center } from '../../styled-system/jsx'
import { center, flex } from '../../styled-system/patterns'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useModalScrollLock } from './logic/use-modal-scroll-lock'
import Image from 'next/image'

export const MODAL_ID = "modal"

const SmellModal = ({show,setShow,smell1,smell2,smell3} : any) => {

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
                className={center({overflow:"hidden",zIndex:"1",transition:"0.2s ease",top:"0",left:"0",position:"fixed",bgColor:"rgba(19, 19, 19, 0.25)",w:"100vw",h:"100vh"})}
                onClick={() => {setShow(false)}}
                >
                    <div className={center({
                        bgColor:"base",
                        flexDir:"column",
                        padding:"32px 24px",
                        borderRadius:"8px",
                        gap:"4px",
                        })}
                        onClick={(e) => e.stopPropagation()}
                        >
                        <p className={css({fontSize:"20px",fontWeight:"bold"})}>ひじょうによわい</p>
                        <div className={flex({gap:"8px"})}>
                            <div className={css({bgImage:"url(/images/myRoot1.svg)",w:"41px",h:"37px"})}></div>
                            <div className={css({bgImage:"url(/images/myRoot2.svg)",w:"41px",h:"37px"})}></div>
                            <div className={css({bgImage:"url(/images/myRoot3.svg)",w:"41px",h:"37px"})}></div>
                            <div className={css({bgImage:"url(/images/myRoot4.svg)",w:"41px",h:"37px"})}></div>
                            <div className={css({bgImage:"url(/images/myRoot5.svg)",w:"41px",h:"37px"})}></div>
                        </div>
                        <p className={css({fontSize:"10px"})}>(ほとんど感じないが匂いに敏感な人は分かる匂い)</p>
                        <div className={css({
                            w:"221px",
                            h:"163px",
                        })}>
                            <div className={center({position:"absolute",top:"400px"})}>
                                <Image src="./images/smellWrapImg.svg" height={"100"} width={"100"} alt="" />
                                <p className={css({position:"absolute"})}>{smell1}</p>
                            </div>
                            <div className={center({position:"absolute",right:"65px"})}>
                                <Image src="./images/smellWrapImg.svg" height={"100"} width={"100"} alt="" />
                                <p className={css({position:"absolute"})}>{smell2}</p>
                            </div>
                            <div className={center({position:"absolute",bottom:"280px",left:"40%"})}>
                                <Image src="./images/smellWrapImg.svg" height={"100"} width={"100"} alt="" />
                                <p className={css({position:"absolute"})}>{smell3}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default SmellModal