import { Button, Divider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProfileEdit() {
    let params = useParams();

    const [name, setName] = useState('');
    const [permissions, setPermissions] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handlePermissions = (event) => {
        setPermissions(event.target.value);
    }

    useEffect(() => {
        fetch('http://localhost:9000/profiles/'+params.id)
            .then(response => response.json())
            .then(response => {
                setName(response.name);
                setPermissions(response.permissions.join(', '))
            })
    }, [params]);

    const save = () => {
        fetch ('http://localhost:9000/profiles/'+params.id, {
            method: 'PUT',
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
            <h1 align="center"> - Editar Perfil - </h1>

            <Divider/>

            <form>
                <TextField value={name} onChange={handleName} label="Nome" fullWidth/>
                <TextField value={permissions} onChange={handlePermissions} label="Permissões" style={{marginTop: 20, marginBottom: 20}} fullWidth/>
                
                <Button onClick={save} fullWidth variant="contained">
                    Salvar
                </Button>
            </form>
        </div>
    )
}