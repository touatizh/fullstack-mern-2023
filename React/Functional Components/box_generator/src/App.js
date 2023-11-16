import './App.css';
import { useState } from "react";
import BoxInputForm from './components/BoxInputForm';
import ColoredBoxes from './components/ColoredBoxes';

function App() {
  const [boxes, setBoxes] = useState([]);
  const [dimensions, setDimensions] = useState([]);

  const addNewBox = (color, dim) => {
    setBoxes((prev) => [...prev, color])
    setDimensions((prev) => [...prev, dim])
  }

  return (
    <div className="App">
      <BoxInputForm addNewBox={ addNewBox }/>
      <ColoredBoxes boxes={ boxes } dims={ dimensions }/>
    </div>
  );
}

export default App;
