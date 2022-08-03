import { Card, Button, CardContent} from "@mui/material";
import TextField from "@mui/material/TextField";
import "./styles.css";
import {Link} from "react-router-dom";


export default function Login() {
    return (
        <>
        <div className="login">
            <Card >
                <CardContent>    
                <TextField 
                    fullWidth
                    id="standard-basic" 
                    label="E-mail" 
                    variant="standard" 
                />
                
                <TextField 
                    fullWidth
                    id="standard-basic"     
                    label="Senha" 
                    variant="standard" 
                />

                <Button
                    fullWidth 
                    color="secondary" 
                    variant="contained"
                    className="button"
                >
                    Acessar
                </Button>
                </CardContent>
            </Card>
            
        </div>
            <Link to="/recuperarconta" className="link">Recuperar conta</Link>
            <Link to="/cadastro" className="link" >Cadastro</Link>
        </>
    );
};