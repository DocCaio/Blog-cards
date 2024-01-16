import './Campo.css'

const Campo = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    return (
        <div className="campo">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default Campo;