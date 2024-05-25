const mysql = require ('mysql');
const express = require ('express')


const app = express();
const port = 3000;

//Configurando a conexão com o banco
const connection = mysql.createConnection({
    host:'localhost',
    user: 'username',
    passaword: 'password',
    database: 'nomedobanco'

});

//Verificação do Json
app.use(express.json());

//Rota de cadastro para usuário
app.post('/usuario', (req,res) => {
    const{nome, cpf, telefone, email, senha, confSenha,cep, rua, bairro, cidade, estado} = req.body;
})

app.post('/cartao', (req,res) =>{
    const{tipo, nomeTitular,numero, codigo, vencimento, nomeCartao} = req.body;
})

//Validação do campo
if(!nome || cpf ||telefone || email || senha || confSenha || cep || rua || bairro || cidade || estado || tipo || nomeTitular || numero || codigo || vencimento || nomeCartao)
return res.status(400).json({ mensagem: 'Campo obrigatórios não preenchido.' });

//Inserindo dados no banco de dados
const query = 'INSERT INTO usuarios(nome, cpf, telefone, email, senha, confSenha, cep, rua, bairro, cidade, estado, tipo, nomeTitular, numero, codigo, vencimento, nomeCartao) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
connection.query, [nome, cpf, telefone, email, senha, confSenha,cep, rua, bairro, cidade, estado, tipo, nomeTitular,numero, codigo, vencimento, nomeCartao], (err,result) => {
    if (err){
        console.error('Erro ao cadastrar usuário', err);
        return res.status(500).json({mensagem: 'Erro ao cadastrar usuário'})
    }
    console.log('Usuário cadastrado com sucesso', result);
    res.status(201).json({mensagem: 'Usuário cadastrado com sucesso'});
}


// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
  });

//Estabelece conexão com o banco
connection.connect((err) => {
    if (err){
        console.error('Erro ao conectar ao banco de dados', err);
        return;
    }

        console.log('Conexão bem sucedida')
});

//Encerrando conexão com o banco
connection.end((err) => {
    if(err){
        console.error('Erro ao encerrar conexão', err);
        return;
    }

        console.log('Encerrado conexão')

});