import "./App.css";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import {  BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./pages/Register/register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
