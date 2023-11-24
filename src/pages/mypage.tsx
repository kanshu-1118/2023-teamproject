import Layout from '@/components/Layout'
import React from 'react'
import { center, flex } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'

const Mypage = () => {
  return (
    <Layout>
            <div>

                <div className={flex({justifyContent:"space-between", marginTop:"35px"})}>
                    <h1 className={css({marginLeft:"25px", fontSize:"20px", fontWeight:"bold"})}>ss_miyu</h1>
                    <img className={css({marginRight:"15px", w:"24px", h:"21px"})} src="/images/gear.png" alt="設定" />
                </div>
                
                <div className={flex({marginBottom:"60px"})}>
                    <img className={css({margin:"0 25px"})} src="/images/icon.png" alt="icon" />
                    <div className={flex({flexDir:"column", fontWeight:"bold"})}>
                        <p className={css({margin:"10px 0 15px", fontSize:"14px"})}>島田美優</p>
                        <p className={css({marginBottom:"5px", fontSize:"10px"})}>1997.11.11</p>
                        <p className={css({fontSize:"10px"})}>大阪</p>
                    </div>
                </div>

                <div className={css({marginBottom:"50px"})}>
                    <h2 className={css({textAlign:"center", fontSize:"20px", fontWeight:"bold"})}>マイルート</h2>
                </div>

                <div className={css({textAlign:"center", fontWeight:"bold"})}>
                    <h2 className={css({fontSize:"20px", margin:"25px"})}>におい登録</h2>
                    <div className={center({flexDir:"column", gap:"10px", textAlign:"center", fontSize:"10px"})}>
                        <p className={center({border:"solid 1px",  w:"250px", h:"30px", borderRadius:"10px"})}>タバコ</p>
                        <p className={center({border:"solid 1px",  w:"250px", h:"30px", borderRadius:"10px"})}>汗が参加したにおい</p>
                        <p className={center({border:"solid 1px",  w:"250px", h:"30px", borderRadius:"10px"})}>口臭</p>
                    </div>
                </div>

            </div>
    </Layout>
  )
}

export default Mypage