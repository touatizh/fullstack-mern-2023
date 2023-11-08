import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './componenets/Welcome'
import WordNumber from './componenets/WordNumber'
import ColoredWord from './componenets/ColoredWord'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={ <Welcome /> } />
          <Route path="/:wordNbr" element={ <WordNumber /> } />
          <Route path="/:word/:txtColor/:bgColor" element={ <ColoredWord /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
