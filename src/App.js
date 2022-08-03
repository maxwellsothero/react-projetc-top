import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Help from "./pages/Help";

import './style.css';


export default function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }   />
          <Route path="/login" element={ <Login/> }   />
          <Route path="/contato" element={ <Contact/> }   />
          <Route path="/help" element={<Help/>} />
          <Route path="/cadastro" element={ <Register/> }   />

        </Routes>
      </BrowserRouter>
    </div>  
  )
}


