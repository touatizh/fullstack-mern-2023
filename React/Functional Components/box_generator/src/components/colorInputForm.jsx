const ColorInput = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const colorValue = document.getElementById('color').value;
        const dimValue = parseInt(document.getElementById('dim').value);
        props.setBoxes((prev) => [...prev, colorValue]);
        props.setDims((prev) => [...prev, dimValue]);
        document.getElementById('color').value = "";
        document.getElementById('dim').value = "";
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <label>Color</label>
                <input type="text" id="color"/>
                <input type="number" id="dim" />
                <button type="submit">Add</button>
            </form>
        </>
    )
};

export default ColorInput;
