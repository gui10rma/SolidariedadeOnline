import { useState } from "react"
import BarraAcessibilidade from "../BarraAcessibilidade"
import Footer from "../Footer"
import Form from "../Form"
import FormList from "../FormList"
import NavBar from "../NavBar"
import "./dadosempresa.css"
import Botao2 from "../Botao2"

const DadosEmpresa = () => {

    const Categorias = [
        "Animais",
        "Meio Ambiente",
        "Criança e Adolescente",
        "LGBTQIA+",
        "Idosos",
        "Pessoas com Deficiência",
        "Justiça Social"

    ]
    
    const [RazãoSocial, setRazãoSocial] = useState('')
    const [NomeResponsavel, setNomeResponsavel] = useState('')
    const [Categoria, setCategoria] = useState('')
    const [CNPJ, setCNPJ] = useState('')
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')
    const [ConfirmarSenha, setConfirmarSenha] = useState('')


    return (
        <form className="DadosEmpresa">
            <BarraAcessibilidade />
            <NavBar />
            <div className="subtitulo">
            <h7>Cadastro Ongs</h7>
            </div>
            <div className="formulario">
            <Form
                obrigatorio={true}
                placeholder="Razão Social/Nome Titular"
                valor={RazãoSocial}
                aoAlterar={valor => setRazãoSocial(valor)} />
            <Form
                obrigatorio={true}
                placeholder="Nome Responsavel"
                valor={NomeResponsavel}
                aoAlterar={valor => setNomeResponsavel(valor)} />
            <Form
                obrigatorio={true}
                placeholder="CNPJ"
                valor={CNPJ}
                aoAlterar={valor => setCNPJ(valor)} />
            <FormList
                obrigatorio={true}
                itens={Categorias}
                valor={Categoria}
                aoAlterar={valor => setCategoria(valor)} />
            <Form
                obrigatorio={true}
                placeholder="Email"
                valor={Email}
                aoAlterar={valor => setEmail(valor)} />
            <Form
                obrigatorio={true}
                placeholder="Senha"
                valor={Senha}
                aoAlterar={valor => setSenha(valor)} />
            <Form
                obrigatorio={true}
                placeholder="ConfirmarSenha"
                valor={ConfirmarSenha}
                aoAlterar={valor => setConfirmarSenha(valor)} />
                </div>
                <div className="botãoCadastro">
            <Botao2 texto="Avançar"/>
            </div>
            <Footer />

        </form>
    )
}

export default DadosEmpresa