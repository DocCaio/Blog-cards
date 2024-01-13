import './Formulario.css';

const Formulario = (props) => {

    return (
        <div className="formulario">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )

}

export default Formulario;