import './Colaborador.css';

const Colaborador = () => {
    return (
        <main className="card">
    <section className="card-image">
      <img src="public/images/illustration-article.svg" alt="This is a blog image"/>
    </section>
    <section className="card-body">
      <h4>Learning</h4>
      <h6>Published 21 Dec 2023</h6>
      <article>
        <h2>HTML & CSS foundations</h2>
        <p>These languages are the backbone of every website, defining structure content, and presentation.</p>
      </article>
      <div class="author">
        <a href="#">
            <img src="public/images/image-avatar.webp" alt="This is an author pic"/>
                <span>Greg Hooper</span>
            </a>
      </div>
    </section>
  </main>
    )

    
}

export default Colaborador;