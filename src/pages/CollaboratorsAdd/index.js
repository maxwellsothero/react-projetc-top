import { Button, Divider, TextField } from "@mui/material";
import { useState } from "react";


export default function CollaboratorsAdd(){

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [salario, setSalario] = useState('');
    const [data, setData] = useState('');


    const handleName = (event) => {
        setName(event.target.value);
        
    };

    const handleCpf = (event) => {
        const Regex = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/
        if(Regex.test(event.target.value)){
            return;
        }
        setCpf(event.target.value);
    };

    const handleSalario = (event) => {
        if(event.target.value){
            return;
        }
        setSalario(event.target.value);
    };

    const handleData = (event) => {
        if(event.target.value){
            return;
        }
        setData(event.target.value);
    };

    const save = () => {
        fetch('http://localhost:9000/collaborators', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                cpf : cpf,
                salario: salario,
                data: data
            })
        })

        alert('Pronto')
    }


    return(
        <div>
            <h1 align="center">Novo Colaborador</h1>

            <Divider/>
 
            <form>
                <TextField onChange={handleName} id="outlined-basic" label="Nome" variant="outlined" fullWidth style={{ marginTop: 20}}/>
                <TextField  onChange={handleCpf}  id="outlined-basic" label="CPF" variant="outlined" fullWidth style={{ marginTop: 20}}/>
                <TextField onChange={handleSalario} id="outlined-basic" label="Salário" variant="outlined" fullWidth style={{ marginTop: 20}}/>
                <TextField  onChange={handleData} id="outlined-basic" label="Data de Contratação" variant="outlined" fullWidth style={{ marginTop: 20}}/>

                <Button onClick={save} fullWidth variant="contained" style={{ marginTop: 20}}>
                    Salvar
                </Button>
            </form>
        </div>
    );
};