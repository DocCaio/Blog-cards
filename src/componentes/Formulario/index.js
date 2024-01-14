import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados e escolha um assunto</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Assunto" placeholder="Digite o assunto" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario