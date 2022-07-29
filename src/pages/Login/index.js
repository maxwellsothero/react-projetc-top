import React from 'react';

export default function Login() {
    const [pegarQuantidade, alterarQuantidade] = React.useState(1);

    const [quantidade, setQuantidade] = React.useState(1);
    const [nome, setNome] = React.useState('');
    const [modal, setModal] = React.useState(false);

    const [alunos, setAlunos] = React.useState([]);
    const [dados, setDados] = React.useState({});

    const diminuir = () => {
        if (pegarQuantidade === 1) {
            return;
        }

        alterarQuantidade(pegarQuantidade - 1);
    };

    const aumentar = () => {
        alterarQuantidade(pegarQuantidade + 1);
    };

    return (
        <div className="mt-5 mb-5">
            <h1>Ifood</h1>

            <button onClick={diminuir} className="btn btn-outline-danger">-</button>
            {pegarQuantidade}
            <button onClick={aumentar} className="btn btn-outline-danger">+</button>
        </div>
    )
}