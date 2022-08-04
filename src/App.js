import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Help from "./pages/Help";

import './style.css';
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="app">
      <Navbar/>

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


