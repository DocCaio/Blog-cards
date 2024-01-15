import './Categorias.css';


const Categorias = (props) => {    

    return (
        <div className='categorias'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}


export default Categorias;


     /*{props.itens.map(item => <option>{item}</option>)}*/