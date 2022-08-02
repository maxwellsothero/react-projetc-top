import { Divider, Typography } from "@mui/material";
import "./styles.css";

export default function Home() {
    return (
        <div align="center" className="home">
            <Typography variant="h4" color="secondary"> - Bem vindo - </Typography>

            <Divider/>

            <p>
                O conteudo poderia vir aqui
            </p>
        </div>
    )
}