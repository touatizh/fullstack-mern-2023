import React from 'react'
import { useParams } from 'react-router-dom'


const ColoredWord = (props) => {

    const {word, txtColor, bgColor } = useParams()

    const style = {
        color: txtColor,
        backgroundColor: bgColor,
    }
    return (
        <div
        style={ style }>The word is: { word }</div>
    )
}

export default ColoredWord