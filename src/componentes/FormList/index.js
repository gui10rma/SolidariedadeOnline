import "./formlist.css"

const FormList = (props) =>{
    return(
        <div className="formlist">
            <select onChange={evento =>props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item=>{
                    return<option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}
export default FormList