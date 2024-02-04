import './Colaborador.css';
import { AiFillCloseCircle, AiFillLike, AiOutlineLike } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }
    return (
        <main className="card">
              <AiFillCloseCircle size={25}
               className="deletar" onClick={() => 
               aoDeletar(colaborador.id)} />
        
  <div className="card-image" style={{ backgroundColor: corDeFundo }}>
  <img src="/imagens/illustration-article.svg" alt="This is a blog image"/>

  </div>
    
    <div className="colaborador">      
        
    
        <div className="card-body">
            <h4>{colaborador.nome}</h4>
            <p>{colaborador.cargo}</p>
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
            <div className='favorito'>
                {colaborador.favorito
                 ? <AiFillLike color="blue" size={25} onClick={favoritar} />
                 : <AiOutlineLike size={25} onClick={favoritar} />}
            </div>
        </div>

    </div>
    </main>)
}

export default Colaborador