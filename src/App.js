import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Inicio</Link>
      <Link to="/cadastro">Cadastro</Link>

      <Routes>
        <Route path="/" element={ <Home/> }   />
        <Route path="/cadastro" element={ <Register/> }   />
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
