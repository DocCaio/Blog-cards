import Colaborador from '../Colaborador';
import './Cards.css';
import hexToRgba from 'hex-to-rgba';

const Cards = (props , mudarCor) => {
    const css = { backgroundColor: props.corSecundaria} 
    hexToRgba(props.corSecundaria ,'0.6') //Codigo extra

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <input onChange={evento => mudarCor(evento.target.value , props.id)} type='color' className='input-cor'/>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.id}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => {
                    return <Colaborador corDeFundo={props.corPrimaria}
                    key={colaborador.id}
                    nome={colaborador.id}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>
                } )}
                
            </div>
        </section> 
        : ''
    )
}

export default Cards;