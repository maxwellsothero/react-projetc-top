import {Divider, Typography} from "@mui/material";
import { useEffect, useState } from "react";

import "./styles.css";

export default function CustomersList() {
    const [data, setData] = useState([]);
    const x = 'teste';

    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
            .then(response => response.json())
            .then(response => setData(response))
    }, []);

   

    return (
        <div align="center" className="customers">
            <Typography variant="h4" color="secondary"> - Clientes - </Typography>

            <Divider/>

            <ul>
                {data.map(cadaCliente => {
                    return (
                        <li>{cadaCliente.nome}</li>
                    )
                })}
            </ul>
        </div>
    )
}