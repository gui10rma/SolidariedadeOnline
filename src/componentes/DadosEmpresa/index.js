// DadosEmpresa.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BarraAcessibilidade from "../BarraAcessibilidade";
import Botao2 from "../Botao2";
import Footer from "../Footer";
import Form from "../Form";
import FormList from "../FormList";
import NavBar from "../NavBar";
import "./dadosempresa.css";
import ColocarImagem from "../ColocarImagem";
import Cookies from "js-cookie";

/**
 * DadosEmpresa component is responsible for rendering the form
 * to collect data from the user and register a new ONG.
 * It also handles the state of the form inputs and the logic to save the ONG data.
 */
function DadosEmpresa() {
    // Array with the available categories for the ONG
    const Categorias = [
        "Animais",
        "Meio Ambiente",
        "Criança e Adolescente",
        "LGBTQIA+",
        "Idosos",
        "Pessoas com Deficiência",
        "Justiça Social"
    ];

    // State variables to hold the values of the form inputs
    const [RazãoSocial, setRazãoSocial] = useState('');
    const [NomeResponsavel, setNomeResponsavel] = useState('');
    const [Categoria, setCategoria] = useState('');
    const [CNPJ, setCNPJ] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [ConfirmarSenha, setConfirmarSenha] = useState('');
    const [Rua, setRua] = useState('');
    const [Estado, setEstado] = useState('');
    const [Cidade, setCidade] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [CEP, setCEP] = useState('');
    const [Descrição, setDescrição] = useState('');
    const todosCamposPreenchidos = RazãoSocial && CNPJ && Email && Senha && ConfirmarSenha && Rua && Estado && Cidade && Telefone  && CEP;

    const cadastrarONG = () => {
        const novaONG = {
            id: new Date().getTime(),
            razaoSocial: RazãoSocial,
            nomeResponsavel: NomeResponsavel,
            categoria: Categoria,
            cnpj: CNPJ,
            email: Email,
            senha: Senha,
            rua: Rua,
            estado: Estado,
            cidade: Cidade,
            telefone: Telefone,
            cep: CEP,
            descricao: Descrição
        };

        const ongsSalvas = Cookies.get("ongs");
        const ongs = ongsSalvas ? JSON.parse(ongsSalvas) : [];
        ongs.push(novaONG);
        Cookies.set("ongs", JSON.stringify(ongs));

        // Add a new card when selecting a category
        setCategoria(Categoria);
    };

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
                <FormList
                    obrigatorio={true}
                    itens={Categorias}
                    valor={Categoria}
                    aoAlterar={valor => setCategoria(valor)} />
                <Form
                    obrigatorio={true}
                    placeholder="CNPJ"
                    valor={CNPJ}
                    aoAlterar={valor => setCNPJ(valor)} />
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
                <Form
                    obrigatorio={true}
                    placeholder="Descrição"
                    valor={Descrição}
                    aoAlterar={valor => setDescrição(valor)} />
                <ColocarImagem />
            </div>
            <div className="botãoCadastro">
            {todosCamposPreenchidos ? (
                    <Link to={"/categorias"}>
                        <Botao2 texto="Cadastrar" onClick={cadastrarONG} />
                    </Link>
                ) : (
                    <Botao2 texto="Prencha" disabled/>
                )}
            </div>
            <Footer />
        </form>
    );
}

export default DadosEmpresa;
