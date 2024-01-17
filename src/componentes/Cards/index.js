import './Cards.css';

const Cards = (props) => {
    const css = {backgroundColor: props.corSegundaria}
    return (
        <section className='cards' style={css}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>

        </section>
    )
}

export default Cards;

