import {useState} from "react";
import FormAddUsers from "../../../components/FormAddUsers"
import Button from '@mui/material/Button';

export default function AddUser(){
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');
    const [tipouser, setTipoUser]= useState('');

    const handleName = (event) =>{
        setName(event.target.name);
    }
    const handleEmail = (event) =>{
        setEmail(event.target.email);
    }
    const handleSenha = (event) =>{
        setSenha(event.target.senha);
    }
    const handleTipoUsers = (event) =>{
        setTipoUser(event.target.tipouser);
    }

    const save = () => {
        fetch('http://localhost:9000/usuarios',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:name,
                email:email,
                password:senha,
                profile:tipouser
            })
        })
    }


    return(
        <>
            <h1 align="center">- Novo Usuario -</h1>
            <FormAddUsers onChange={handleName} label="Nome" />
            <FormAddUsers onChange={handleEmail} label="Email" />
            <FormAddUsers onChange={handleSenha} label="Senha" />
            <FormAddUsers onChange={handleTipoUsers} label="Tipo Usuario" />
            <Button onChange={save}>Enviar</Button>
        </>
    );
}