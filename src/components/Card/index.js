export default function Card(props) {
    return (
        <div className={`card bg-${props.color}`}>
            <div className="card-header">
                {props.titulo}
            </div>
            <div className="card-body">
                {props.conteudo}
            </div>
        </div>
    )
}