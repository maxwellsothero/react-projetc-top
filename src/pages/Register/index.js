import { Button, Card, Grid, TextField, Typography, Link } from "@mui/material";
import { Container } from "@mui/system";



import "./styles.css";


export default function Register () {
    return (

        
            

        <Container fixed>
        <Card className="card" variant="outlined" >{
            
        <div className="input_cadastro" align="center" >
            <Typography className="text" variant="h4" >Digite Seus Dados</Typography>
        
        <TextField className="input_nome" fullWidth id="outline-basic" label="Nome" variant="outlined"/>
        <TextField className="input_email"  fullWidth id="outline-basic" label="Email" variant="outlined"/>
        <TextField className="input_telefone" fullWidth id="outline-basic" label="Telefone" variant="outlined"/>
        <TextField className="input_senha" fullWidth id="outline-basic" label="Senha" variant="outlined"/>
            
        
        <Grid container>
        <Grid item xs={6}><Link href="#">VOLTAR AO INICIO</Link></Grid>
        <Grid item xs={6}><Button variant="outlined">Cadastrar</Button></Grid>
            

        </Grid>
        
        
        
        
     
        
    </div>} </Card>
    </Container>



    )
    
    }


    /* < div className="input_cadastro" align="center" >
                <Card variant="outlined">
                <TextField className="input_nome" fullWidth id="outline-basic" label="Nome" variant="outlined"/>
                <TextField className="input_email"  fullWidth id="outline-basic" label="Email" variant="outlined"/>
                <TextField className="input_telefone" fullWidth id="outline-basic" label="Telefone" variant="outlined"/>
                <TextField className="input_senha" fullWidth id="outline-basic" label="Senha" variant="outlined"/>
                </Card>
             
                
            </div>*/
    

