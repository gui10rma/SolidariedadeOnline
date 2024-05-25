import "./botaoComImagem.css"
const BotaoComImagem = ({ src, alt }) => (
    <button className="botaoImg">
        <img src={src} alt={alt} />
    </button>
);
export default BotaoComImagem

// Não esquecer quando é mais de um elemento colocar chaves {}