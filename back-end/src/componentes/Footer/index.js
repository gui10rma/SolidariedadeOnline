import BotaoComImagem2 from "../BotaoComImagem2";
import "./footer.css";
import Botao2 from "../Botao2";
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="item">
                <h2>Como eu realizo uma doação ?</h2>
                <p>Para realizar uma doação na Solidariedade Online, basta fazer um rápido cadastro, escolher a ONG e a causa que deseja apoiar, selecionar o valor e a forma de pagamento, e confirmar a doação. Após isso, você poderá acompanhar o impacto da sua contribuição.</p>
            </div>
            <div className="item">
                <h2>Aceita quais formas de pagamento?</h2>
                <p>A Solidariedade Online aceita diversas formas de pagamento, incluindo cartão de crédito, boleto bancário, transferência bancária e, dependendo da região, também pode oferecer outras opções como carteiras digitais. Ao selecionar a opção de pagamento durante a doação, você poderá ver as formas disponíveis para a sua região.</p>
            </div>
            <div>
                <h3>Entre em contato:</h3>
                <p>Av. Águia de Haia 2983 </p>
                    <p>solidariedade@online.com.so</p>
                <div>
                <BotaoComImagem2 src='/imagens/Telegram.png'alt="Telefone"/>
                <BotaoComImagem2 src='/imagens/email.png'alt="Telefone"/>
                <BotaoComImagem2 src='/imagens/Telefone.png'alt="Telefone"/>
                <p><Botao2 texto="Envie um email"/></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;