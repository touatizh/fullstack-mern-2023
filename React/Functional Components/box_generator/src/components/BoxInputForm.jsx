import React, { useState } from "react"

const BoxInputForm = (props) => {

    const [color, setColor] = useState("")
    const [dim, setDim] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewBox(color, dim)
        setColor("")
        setDim(0)
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <label>Color</label>
                <input type="text" value={ color } onChange={e => setColor(e.target.value)}/>
                <input type="number" value={ dim } onChange={e => setDim(Number(e.target.value))} />
                <button type="submit">Add</button>
            </form>
        </>
    )
};

export default BoxInputForm
