import './App.css';
import Home from './views/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductDetails from './views/ProductDetails';
import EditProduct from './components/EditProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" default />
          <Route element={<ProductDetails />} path="/:id" />
          <Route element={<EditProduct />} path="/edit/:id/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
