import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Help from "./pages/Help";

import './style.css';





export default function App() {
  return (
    <div className="app">
        <Link to="/">Inicio</Link>
        <Link to="/help">Ajuda</Link>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }   />
          <Route path="/login" element={ <Login/> }   />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </BrowserRouter>
    </div>  
  );
}


