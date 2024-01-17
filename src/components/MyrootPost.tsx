import React from 'react'
import { Box, Center, Flex } from '../../styled-system/jsx'
import { css } from '../../styled-system/css'

interface propsType {
    text:any
}

const MyrootPost = (props:propsType) => {
    return (
        <Flex gap={"4px"} flexDir={"column"}>
            <Flex fontSize={"15px"}>
            <p>7:10</p>
            <p>たばこ</p>
            <p>2号車</p>
            </Flex>
            <Center w={"calc(100vw - 40px)"} padding={"12px 0"} bgColor={"#fff"} borderRadius={"3px"} border={"3px solid #A9A9A9"} >
                <p className={css({fontSize:"12px",fontWeight:"bold"})}>{props.text}</p>
            </Center>
        </Flex>
    )
}

export default MyrootPost