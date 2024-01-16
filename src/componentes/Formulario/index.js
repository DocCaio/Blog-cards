import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../Campo'
import './Formulario.css'
import Categorias from '../Categorias'
import Campo from '../Campo'

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
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Mensagem"
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

export default Formulario