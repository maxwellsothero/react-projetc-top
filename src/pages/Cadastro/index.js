import Card from "../../components/Card";
// import "./styles.css";

function MeuComponente () {
    return (
        <div class="alert alert-danger" role="alert">
            A simple danger alert—check it out!
        </div>
    )
}

export default function Cadastro() {
    return (
        <section>
            <h1>Cadastro</h1>

            <hr/>

            <div className="row">
                <div className="col">
                    <Card color="primary" titulo="Vendas" conteudo="23% a mais"/>
                </div>

                <div className="col">
                    <Card color="success" conteudo={<button>Teste</button>}/>
                </div>

                <div className="col">
                    <Card conteudo={<MeuComponente/>}    />
                </div>

                <div className="col">
                    <Card/>
                </div>
            </div>

        </section>
    )
}