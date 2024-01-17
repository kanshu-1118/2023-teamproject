import React, { useState } from 'react'
import { css } from '../../styled-system/css'
import { Center } from '../../styled-system/jsx'

const MypageModal = ({bgc,textProps,borderProps} : any) => {
    
    return (

        <div className={css({
            border:`${borderProps}px solid #000`,w:'bgc',h:"100px"
            })}>
            {textProps}
        </div>
    )
}

export default MypageModal