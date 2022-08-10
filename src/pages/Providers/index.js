import { useEffect, useState } from "react"
import { Divider } from "@mui/material";
import Cards from "../../components/Cards";


export default function Providers () {
    const [data, setData] = useState([1,2,3,4]);

    useEffect(() => {
        fetch('http://localhost:9000/providers')
        .then(response => response.json())
        .then(response => setData(response));
    },[])
    return (
        <div>
            <h1> - Perfil - </h1>

            <Divider/>

            {data.map(x => {
                return (
                    <Cards titulo={x.name} descricao={x.address}/>
                )

            })}
        </div>
    )
}