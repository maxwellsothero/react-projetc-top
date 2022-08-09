import { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Cards from "../../components/Cards";


export default function Users(){
    const [data, setData]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:9000/users')
        .then(response =>response.json())
        .then(response => setData(response))
    },[])

    return(
        <>
            <h1>Usuarios do Sistema</h1>
            <Divider/>
            {data.map(user =>{
                return(
                    <Cards titulo={user.name} descricao={user.email}/>
                );
            })}
        </>
    );
}