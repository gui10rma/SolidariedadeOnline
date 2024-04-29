import './form.css'

const Form = (props) => {
    const placeholderModificada = `${props.placeholder}`

    const aoDigitado = (evento) => {
        props.aoAlterar(evento.target.value)
        
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )

}

export default Form