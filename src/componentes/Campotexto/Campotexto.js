import CampoTexto from './Campotexto';
import './Formulario.css';

const CampoTexto = () => {
    return (
        <section>
            <form>
               <CampoTexto label="Nome" placeholder="Digite seu nome"/>
               <CampoTexto  label="Assunto" placeholder="Digite o assunto"/>
               <CampoTexto  label="Imagem" placeholder="Ecolha uma imagem"/>
            </form>
        </section>
    )
}

export default CampoTexto;