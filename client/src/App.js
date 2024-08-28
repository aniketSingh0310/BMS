import "./App.css";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/register";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile/profile";
import Admin from "./pages/Admin/admin";
function App() {
  const {loading}= useSelector((state)=>state.loaders )
  return (
    <div className="App">
    {loading && (
      <div className="loading">
      <div className="loading-circle">Loading</div>
      </div>
             
    )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<ProtectedRoutes> <Admin /></ProtectedRoutes>} />
          <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
