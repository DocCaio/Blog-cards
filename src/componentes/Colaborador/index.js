import './Colaborador.css';

const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    return (
        <main className="card">
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