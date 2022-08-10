import { useEffect, useState } from "react"
import { Divider, Fab, Button } from "@mui/material";
import Cards from "../../components/Cards";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ProfileList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/profiles')
            .then(response => response.json())
            .then(response => setData(response));
    }, []);

    const remove = (id) => {
        fetch('http://localhost:9000/profiles/'+id, {
            method: 'DELETE'
        });

        setData(
            data.filter(p => p.id !== id)
        );
    }

    return (
        <div>
            <h1> - Perfis - </h1>
            <Divider/>

            <Link to="/perfis/novo">
                <Fab color="primary">
                    <Add/>
                </Fab>
            </Link>

            {data.map(profile => {
                return (
                    <Cards 
                        footer={
                            <>
                                <Link to={"/perfis/"+profile.id}><Button color="warning">Editar</Button></Link>
                                <Button onClick={() => remove(profile.id)} color="error">Excluir</Button>
                            </>
                        }
                        titulo={profile.name} 
                        descricao={profile.permissions.join(' - ')} 
                    />
                )
            })}
        </div>
    )
}