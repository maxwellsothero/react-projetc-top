import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import CategoryList from "./pages/CategoryList";
import RecoverAccount from "./pages/RecoverAccount";
import Nova from "./pages/CategoryList/Nova";

import './style.css';
import Navbar from "./components/Navbar";
import Produtos from "./pages/Produtos";
import CustomersList from "./pages/CustomersList";
import ProfileList from "./pages/ProfileList";
import ProfileAdd from "./pages/ProfileAdd";
import ProfileEdit from "./pages/ProfileEdit";

export default function App() {
  return (
    <div className="app">

      
      <BrowserRouter>
        <Navbar/>
    
        <Routes>
          <Route path="/" element={ <Home/> }   />
          <Route path="/login" element={ <Login/> }   />
          <Route path="/contato" element={ <Contact/> }   />
          <Route path="/help" element={<Help/>} />
          <Route path="/cadastro" element={ <Register/> }   />
          <Route path="/categorias" element={<CategoryList/>} />
          <Route path="/recuperar-conta" element={ <RecoverAccount/> }   />
          <Route path="/categorias/nova" element={<Nova/>} />
          <Route path="/produtos" element={ <Produtos/> }   />
          <Route path="/clientes" element={ <CustomersList/> }   />

          <Route path="/perfis" element={<ProfileList/>}/>
          <Route path="/perfis/novo" element={<ProfileAdd/>}/>
          <Route path="/perfis/:id" element={<ProfileEdit/>}/>
         

        </Routes>
      </BrowserRouter>
    </div>  
  )
}


