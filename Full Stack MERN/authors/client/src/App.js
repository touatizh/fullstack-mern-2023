import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewAuthor from "./views/NewAuthor"
import Main from "./views/Main"
import EditAuthor from "./views/EditAuthor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<NewAuthor />} path="/authors/new" />
          <Route element={<EditAuthor />} path="/authors/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
