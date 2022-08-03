import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
<<<<<<< HEAD
import './style.css';





export default function App() {
  return (
    <div className="app">
=======
import Help from "./pages/Help";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Inicio</Link>
      <Link to="/help">Ajuda</Link>
>>>>>>> 190d234e5d3bd5d07c9fdaf5f84a8b92ff993c5b

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }   />
<<<<<<< HEAD
        <Route path="/login" element={ <Login/> }   />
=======
        <Route path="/help" element={<Help/>} />
>>>>>>> 190d234e5d3bd5d07c9fdaf5f84a8b92ff993c5b
      </Routes>
    </BrowserRouter>
    </div>  
  );
}


