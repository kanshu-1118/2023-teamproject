import Layout from '@/components/Layout'
import React from 'react'
import { flex } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'

const Mypage = () => {
  return (
    <Layout>
            <div>

                <div className={flex({justifyContent:"space-between", marginTop:"35px"})}>
                    <h1 className={css({marginLeft:"25px", fontSize:"2rem", fontWeight:"bold"})}>ss_miyu</h1>
                    <img className={css({marginRight:"15px"})} src="" alt="設定" />
                </div>
                
                <div className={flex({flexDir:"column"})}>
                    <img src="" alt="icon" />
                    <p>島田美優</p>
                    <p>1997.11.11</p>
                    <p>大阪</p>
                </div>

                <div>
                    <h2 className={css({textAlign:"center"})}>マイルート</h2>
                </div>

                <div className={css({textAlign:"center"})}>
                    <h2>におい登録</h2>
                    <div className={css({border:"solid 1px "})}>
                        <p>タバコ</p>
                        <p>汗が参加したにおい</p>
                        <p>口臭</p>
                    </div>
                </div>

            </div>
    </Layout>
  )
}

export default Mypage