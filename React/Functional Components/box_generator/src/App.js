import './App.css';
import { useState } from "react";
import ColorInput from './components/colorInputForm';
import ColoredBoxes from './components/coloredBoxes';

function App() {
  const [boxes, setBoxes] = useState([]);
  const [dimensions, setDimensions] = useState([]);
  return (
    <div className="App">
      <ColorInput boxes={ boxes } setBoxes={ setBoxes } setDims={ setDimensions }/>
      <ColoredBoxes boxes={ boxes } dims={ dimensions }/>
    </div>
  );
}

export default App;
