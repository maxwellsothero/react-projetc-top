import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Inicio</Link>

      <Routes>
        <Route path="/" element={ <Home/> }   />
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
