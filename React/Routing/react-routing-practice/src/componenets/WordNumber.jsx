import React from 'react'
import { useParams } from 'react-router-dom'

const WordNumber = (props) => {

    const { wordNbr } = useParams()
    return (
        <>
            {!isNaN(Number(wordNbr)) ? 
            <div>The number is: { Number(wordNbr) }</div> :
            <div>The word is: { wordNbr }</div>}
        </>
    )
}

export default WordNumber