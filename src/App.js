import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Inicio</Link>

      <Routes>
        <Route path="/" element={ <Home/> }   />
        <Route path="/contato" element={ <Contact/> }   />
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
