import Campo from '../Campo'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados e escolha um assunto</h2>
                <Campo label="Nome" placeholder="Digite seu nome" />
                <Campo label="Assunto" placeholder="Digite o assunto" />
                <Campo label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario