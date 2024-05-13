import { useState } from "react"
import { Link } from "react-router-dom"
import BarraAcessibilidade from "../BarraAcessibilidade"
import Botao2 from "../Botao2"
import Footer from "../Footer"
import Form from "../Form"
import NavBar from "../NavBar"
import "./dadosdoadores.css"

const DadosDoadores = () => {

    const [Nome, setNome] = useState('')
    const [CPF, setCPF] = useState('')
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')
    const [ConfirmarSenha, setConfirmarSenha] = useState('')
    const [Rua, setRua] = useState('')
    const [Estado, setEstado] = useState('')
    const [Cidade, setCidade] = useState('')
    const [Telefone, setTelefone] = useState('')
    const [CEP, setCEP] = useState('')
    const todosCamposPreenchidos = Nome && CPF && Email && Senha && ConfirmarSenha && Rua && Estado && Cidade && Telefone && CEP;

    return (
        <form className="DadosPessoais">
            <BarraAcessibilidade />
            <NavBar />
            <div className="subtitulo">
                <h7>Dados Pessoais</h7>
            </div>
            <div className="formulario">
                <Form
                    obrigatorio={true}
                    placeholder="Nome"
                    valor={Nome}
                    aoAlterar={valor => setNome(valor)} />
                <Form
                    obrigatorio={true}
                    placeholder="CPF"
                    valor={CPF}
                    aoAlterar={valor => setCPF(valor)} />
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
                <Form
                    obrigatorio={true}
                    placeholder="CEP"
                    valor={CEP}
                    aoAlterar={valor => setCEP(valor)} />
                <Form
                    obrigatorio={true}
                    placeholder="Rua"
                    valor={Rua}
                    aoAlterar={valor => setRua(valor)} />
                <Form
                    obrigatorio={true}
                    placeholder="Estado"
                    valor={Estado}
                    aoAlterar={valor => setEstado(valor)} />
                <Form
                    obrigatorio={true}
                    placeholder="CNPJ"
                    valor={Cidade}
                    aoAlterar={valor => setCidade(valor)} />
                <Form
                    obrigatorio={true}
                    placeholder="Telefone"
                    valor={Telefone}
                    aoAlterar={valor => setTelefone(valor)} />
            </div>
            <div className="botãoCadastro">
                {todosCamposPreenchidos ? (
                    <Link to={"/DadosDoadoresEndereço"}>
                        <Botao2 texto="Cadastrar" />
                    </Link>
                ) : (
                    <Botao2 texto="Avançar" disabled />
                )}
            </div>
            <Footer />

        </form>
    )
}

export default DadosDoadores