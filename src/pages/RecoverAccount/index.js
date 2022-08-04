

import { Card, CardContent,Typography,Button, TextField } from "@mui/material";
import "./styles.css";

export default function RecoverAccount() {
    return (
        <div align="center" className="recuperar-conta">
            <Typography variant="h5" color="secondary"> Esqueceu a senha? </Typography>

          
            <Card>
                <CardContent>

                <TextField className="input_email" fullWidth id="outlined-basic" label="Endereço de email" variant="outlined" />                
                <Button fullWidth color="secondary" variant="contained" className="button">Redefinir Senha</Button>

                </CardContent>
            </Card>
        </div>
    )
}