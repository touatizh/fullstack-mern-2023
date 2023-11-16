import './App.css';
import Home from './views/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductDetails from './views/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" default />
          <Route element={<ProductDetails />} path="/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
