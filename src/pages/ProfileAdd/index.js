import { Divider, TextField, Button } from "@mui/material";

export default function ProfileAdd (){


    const [name, setName] = useState (''),
    const [endereço, setEndereço] = useState (''),
    const [phone, setPhone] = useState ('')

    const handleName = (event) => {
        setName (event.target.value);
    }

    const handleEndereço = (event) => {
        setEndereço (event.target.value);
    }

    const handlePhone = (event) => {
        setPhone (event.target.value);


    }


    const save = () => {
        fetch ('http://localhost:9000/providers', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify ({
                name: name,
                endereço: endereço,
                phone: phone
            })
            

        })
        

    }
    return (

        <div>
            <h1 align="center"> - Novo Perfil - </h1>

            <Divider/>

            <form  >

            <TextField  id="standard-basic" label="Nome" fullWidth />
            <TextField id="standard-basic" style={{marginTop: 20, marginBottom:20 }} label="Endereço" fullWidth />
            <TextField id="standard-basic" style={{ marginBottom:20 }} label="Phone" fullWidth />

            <Button fullWidth variant="contained">Salvar</Button>
  
            </form>
        </div>
    )
}