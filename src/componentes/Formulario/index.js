import Botao from '../Botao';
import Campo from '../Campo';
import Categorias from '../Categorias';


import './Formulario.css'

const Formulario = () => {

    const times = [
       'Esporte',
       'Poítica',
       'Culinaria',
       'Games',
       'Cultura POP'
    ];

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados e escolha um assunto</h2>
                <Campo label="Nome" placeholder="Digite seu nome" />
                <Campo label="Assunto" placeholder="Digite o assunto" />
                <Campo label="Imagem" placeholder="Digite o endereço da imagem" />
                <Categorias obrigatorio={true} label="Time" itens={times}/>
                <Botao texto="Enviar"/>
               
            </form>
        </section>
    )
}

export default Formulario;