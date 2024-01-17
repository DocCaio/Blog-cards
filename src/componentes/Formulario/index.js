import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import './Formulario.css';
import Categorias from '../Categorias';


const Formulario = (props) => {

    const categorias = [
        'Esporte',
        'Culinária',
        'Cultura POP',
        'Política',
        'Tecnologia',
        'Saude',
        'Educação'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            categoria
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Mensagem"
                    maxlength="500"
                    placeholder="Digite sua mensagem" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <Categorias
                    obrigatorio={true}
                    label="Categorias" 
                    itens={categorias}
                    valor={categoria}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;