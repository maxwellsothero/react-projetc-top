import { Divider, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function VehiclesAdd() {
    const [plate, setPlate] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');

    const handlePlate =(event) => {
        setPlate(event.target.value);
    }
    
    const handleMake =(event) => {
        setMake(event.target.value);
    }
    
    const handleModel =(event) => {
        setModel(event.target.value);
    }

    const handleYear =(event) => {
        setYear(event.target.value);
    }


    return (
        <div>
            <h1 alig="center">Novo Vehicles</h1>
            <Divider/>

            <form>
                <TextField label="plate" fullWidth/>
                <TextField label="make" fullWidth/>
                <TextField label="model" fullWidth/>
                <TextField label="year" fullWidth/>

                <Button fullWidth variant="contained">
                    Salvar

                </Button>
            </form>
        </div>

    )
}