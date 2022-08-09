import { Divider, Typography } from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  import "./styles.css";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Vendas',
      },
    },
  };
  
  const labels = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  
  export const data = {
    labels,
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 5, 2, 20, 45],
          }
    ]
  };


export default function Home() {
    

    return (
        <div align="center" className="home">
            <Typography variant="h4" color="secondary"> - Bem vindo - </Typography>

            <Divider/>

            <Bar options={options} data={data} />


            <p>
                O conteudo poderia vir aqui...
            </p>
        </div>
    )
}