import './Colaborador.css';

const Colaborador = ({ nome, imagem, mensagem, corDeFundo }) => {
    return (
        <main className="card">
    <section className="card-image" style={{ backgroundColor: corDeFundo }}>
    <img src="/imagens/illustration-article.svg" alt="This is a blog image"/>
    </section>
    <section className="card-body">
      <h4>Comentario</h4>
      <h6>Publicado</h6>
      <article>
        <h2>HTML & CSS foundations</h2>
        <p>{mensagem}</p>
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