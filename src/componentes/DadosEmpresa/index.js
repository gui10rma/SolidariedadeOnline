import { useState } from "react"
import { Link } from "react-router-dom"
import BarraAcessibilidade from "../BarraAcessibilidade"
import Botao2 from "../Botao2"
import Footer from "../Footer"
import Form from "../Form"
import FormList from "../FormList"
import NavBar from "../NavBar"
import "./dadosempresa.css"
import ColocarImagem from "../ColocarImagem"



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
    const [Rua, setRua] = useState('')
    const [Estado, setEstado] = useState('')
    const [Cidade, setCidade] = useState('')
    const [Telefone, setTelefone] = useState('')
    const [CEP, setCEP] = useState('')
    const todosCamposPreenchidos = RazãoSocial && NomeResponsavel && Categoria && CNPJ && Email && Senha && ConfirmarSenha


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
                <ColocarImagem/>    
            </div>
            <div className="botãoCadastro">
                {todosCamposPreenchidos ? (
                    <Link to={"/"}>
                        <Botao2 texto="Cadastrar" />
                    </Link>
                ) : (
                    <Botao2 texto="Cadastrar" disabled />
                )}
            </div>
            <Footer />

        </form>
    )
}

export default DadosEmpresa