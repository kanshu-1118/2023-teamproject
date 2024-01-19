import React, { useEffect, useState } from 'react'
import { css } from '../../styled-system/css'
import { Center } from '../../styled-system/jsx'
import { center, flex } from '../../styled-system/patterns'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useModalScrollLock } from './logic/use-modal-scroll-lock'
import { useRouter } from 'next/router'

export const MODAL_ID = "modal"

const PostModal = ({show,setShow} : any) => {
    
    const router = useRouter();
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
                onClick={() => {
                    setShow(false)
                    router.reload()
                }}
                >
                    <div className={center({
                        bgColor:"base",
                        flexDir:"column",
                        padding:"24px 32px",
                        borderRadius:"8px",
                        gap:"32px",
                        })}
                        onClick={(e) => e.stopPropagation()}
                        >
                        <p className={css({fontSize:"16px",textAlign:"center",fontWeight:"bold"})}>つぶやき<br />ありがとうございます！</p>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default PostModal