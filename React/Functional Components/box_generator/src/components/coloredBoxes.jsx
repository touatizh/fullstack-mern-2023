import "../App.css"

const ColoredBoxes = (props) => {
    return (
        <div className="container">
            {props.boxes.map((color, index) => (
                <div key={index} style={{ 
                    backgroundColor: color, 
                    width: props.dims[index] > 10 ? `${props.dims[index]}px`:`10px`, 
                    height: props.dims[index] > 10 ? `${props.dims[index]}px`:`10px`,
                    border: `1px solid black`
                }}></div>
            ))}
        </div>
    );
}

export default ColoredBoxes;