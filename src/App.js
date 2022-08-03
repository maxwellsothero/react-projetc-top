import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import './style.css';





export default function App() {
  return (
    <div className="app">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }   />
        <Route path="/login" element={ <Login/> }   />
      </Routes>
    </BrowserRouter>
    </div>  
  );
}


