import React from 'react'
import { css } from '../../styled-system/css'

interface propsType {
    text:string,
    onClick:any,
}

const Button = (props:propsType) => {
    return (
        <button className={css({
            padding:"4px 30px",
            borderRadius:"10px",
            bgColor:"base",
            color:"main",
            fontWeight:"bold",
            fontSize:"16px",
            })}
            onClick={props.onClick}
            >
            {props.text}
        </button>
    )
}

export default Button