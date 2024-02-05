import './Colaborador.css';
import { AiFillCloseCircle, AiFillLike, AiOutlineLike , AiFillDislike , AiOutlineDislike } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar, aoDeslike }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    function deslike() {
        aoDeslike(colaborador.id);
    }
    return (
        <main className="card">
              <AiFillCloseCircle size={25}
               className="deletar" onClick={() => 
               aoDeletar(colaborador.id)} />
        
  <div className="card-image">
  <img src="./imagens/illustration-article.svg" alt="This is a blog image"/>

  </div>
    
    <div className="colaborador">      
        
    
        <div className="card-body">

        <img src={colaborador.imagem} alt={colaborador.nome} />
            <h4>{colaborador.nome}</h4>
          

            </div>
            <p>{colaborador.cargo}</p>
            
            <div className="rodape">    
           

            

            {colaborador.favorito
                 ? <AiFillLike color="blue" size={25} onClick={favoritar} />
                 : <AiOutlineLike size={25} onClick={favoritar} />}

         {colaborador.desgosto
                 ? <AiFillDislike color="red" size={25} onClick={deslike} />
                 : <AiOutlineDislike size={25} onClick={deslike} />}
                

        </div>
            
               
           
      

    </div>
    </main>)
}

export default Colaborador