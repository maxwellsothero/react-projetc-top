import Cards from "../../components/Cards";

import img_cafe from "./img/cafe1.jpg"

export default function CategoryList(){
    return(
        <>
        
            <div>
            <Cards titulo="Cafe Max" descricao="Café Classe A" image={img_cafe} imgdesc="foto do cafe"/>
            <Cards titulo="Leite Max" descricao="Leite da Vaca" image="https://s24937.pcdn.co/wp-content/uploads/2016/03/%C3%A1gua-e-caf%C3%A9.jpg" imgdesc="foto do leite"/>
            <Cards titulo="Suco Max" descricao="Suco Diretamente da Fruta" image="https://opresenterural.com.br/wp-content/uploads/2021/06/ABRALEITE-Leite.jpg" imgdesc="foto do Suco"/>
        </div>
        </>
    );
}
