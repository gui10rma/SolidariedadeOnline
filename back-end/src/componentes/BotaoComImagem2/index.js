import "./botaocomimagem2.css";
const BotaoComImagem2 = ({ src, alt }) => (
    <button className="botaoImg2">
        <img src={src} alt={alt} />
    </button>
);
export default BotaoComImagem2