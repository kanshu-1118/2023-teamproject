import React from 'react'
import { css } from '../../styled-system/css'
import Image from 'next/image'
import { center, flex } from '../../styled-system/patterns'

interface propsType {

}

const Topics = (props:propsType) => {
    return (
        <div className={center({flexShrink:"0",bgColor:"#fff8e5",flexDir:"column",borderRadius:"10px",w:"200px",h:"200px",gap:"16px",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"})}>
            <Image src="/images/topicksImg.svg" width={"130"} height={"100"} alt="" />
            <p className={css({fontSize:"13px",fontWeight:"bold"})}>簡単な筋トレで体臭が激減？！</p>
            <p className={css({fontSize:"10px"})}>家族や友達から臭いといわれても</p>
        </div>
    )
}

export default Topics