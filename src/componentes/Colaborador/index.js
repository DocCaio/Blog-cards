import { FaTrashAlt } from "react-icons/fa";
import './Colaborador.css';

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
    return (
        <main className="card">
          <FaTrashAlt  className="deletar" onClick={aoDeletar}/>
    <section className="card-image" style={{ backgroundColor: corDeFundo }}>
    <img src="/imagens/illustration-article.svg" alt="This is a blog image"/>
    </section>
    <section className="card-body">
      <h4>Comentário</h4>
      <h6>Publicado</h6>
      <article>        
        <p>{cargo}</p>
      </article>
      <div class="author">
        <a href="#">
        <img src={imagem} alt={nome}/>
                <span>{nome}</span>
            </a>
      </div>
    </section>
  </main>
    )

    
}

export default Colaborador;