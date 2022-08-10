import {  Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards";

export default function Colaboradores(){

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/collaborators')
            .then(response => response.json())
            .then(response => setData(response))
    })
    return(
        <div>
            <h1>Colaboradores</h1>
            <Divider/>
            {data.map(collaborators => {
                return(
                    <Cards titulo={collaborators.name} descricao={collaborators.cpf}/>
                )
            })}
        </div>
    );
};