import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Help from "./pages/Help";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Inicio</Link>
      <Link to="/help">Ajuda</Link>

      <Routes>
        <Route path="/" element={ <Home/> }   />
        <Route path="/help" element={<Help/>} />
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
