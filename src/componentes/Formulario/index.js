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

    const aoSalvar = (evento) => { 
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados e escolha um assunto</h2>
                <Campo obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <Campo obrigatorio={true} label="Assunto" placeholder="Digite o assunto" />
                <Campo label="Imagem" placeholder="Digite o endereço da imagem" />
                <Categorias obrigatorio={true} label="Time" itens={times}/>
                <Botao>Enviar</Botao>
               
            </form>
        </section>
    )
}

export default Formulario;