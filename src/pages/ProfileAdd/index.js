import { Button, Divider, TextField } from "@mui/material";
import { useState } from "react";

export default function ProfileAdd() {
    const [name, setName] = useState('');
    const [permissions, setPermissions] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handlePermissions = (event) => {
        setPermissions(event.target.value);
    }

    const save = () => {
        fetch ('http://localhost:9000/profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                permissions: permissions.split(', ')
            })
        });

        alert('Pronto');
    }

    return (
        <div>
            <h1 align="center"> - Novo Perfil - </h1>

            <Divider/>

            <p>
                Você está cadastrando o perfil {name}
            </p>

            <form>
                <TextField onChange={handleName} label="Nome" fullWidth/>
                <TextField onChange={handlePermissions} label="Permissões" style={{marginTop: 20, marginBottom: 20}} fullWidth/>
                
                <Button onClick={save} fullWidth variant="contained">
                    Salvar
                </Button>
            </form>
        </div>
    )
}