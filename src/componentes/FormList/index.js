import "./formlist.css"

const FormList = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterar(evento.target.value)
        
    }
    return (
        <div className="formlist">
            <section>
                <select className="input"onChange= {aoDigitado} required={props.required} value={props.value}>
                    {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}
                </select>
            </section>
        </div>
    )
}
export default FormList