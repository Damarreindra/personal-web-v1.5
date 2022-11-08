import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'

const STYLE = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]

    const checkButtonSizes = STYLE.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        
            <button
            className={`button ${checkButtonSizes} ${checkButtonStyle}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
     
    )
}