import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Inicio</Link>
      <Link to="/ifood">Ifood</Link>
      <Link to="/novo">Cadastro</Link>

      <Routes>
        <Route path="/" element={ <h1>Teste</h1> }   />
        <Route path="/ifood" element={<Login/>}  />
        <Route path="/novo" element={<Cadastro/>}  />
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
