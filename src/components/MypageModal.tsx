import React from 'react'
import { css } from '../../styled-system/css'

function MypageModal(bgc:string) {
  return (
    <div className={css({bgColor:bgc, w:"100px", h:"100px"})}></div>
  )
}

export default MypageModal