import BarraAcessibilidade from "../BarraAcessibilidade";
import Footer from "../Footer";
import ImagemDepoimentos from "../ImagemDepoimentos";
import NavBar from "../NavBar";
import "./depoimentos.css";

function Depoimentos() {
    return (
        <div className="depoimentos">
            <BarraAcessibilidade />
            <NavBar />
            <h4 className="titulodepoimentos">Depoimentos de doadores</h4>
            <div className="DepoimentosContainer">
                <div className="depoimento">
                    <div className="medica">
                        <ImagemDepoimentos src="/imagens/Medica.png" />
                    </div>
                    <div className="texto">
                        <p>"Como médica, apoio a Solidariedade Online pela facilidade de doação e transparência. Receber a confirmação do pagamento por e-mail e saber para onde meu dinheiro está indo é gratificante. Recomendo a plataforma a todos que desejam fazer a diferença de forma prática e eficaz."</p>
                    </div>
                </div>
                <div className="depoimento">
                    <div className="texto">
                        <p>"Através da Solidariedade Online, posso ajudar ONGs que cuidam de cães em situação de vulnerabilidade. Receber a confirmação do pagamento por e-mail e acompanhar como meu apoio é utilizado é gratificante. Recomendo a plataforma a todos que desejam fazer a diferença na vida dos animais."</p>
                    </div>
                    <div className="veterinario">
                        <ImagemDepoimentos src="/imagens/Veterinario.png" />
                    </div>
                </div>
            </div>
            <div className="DepoimentosContainer">
                <div className="depoimento">
                    <div className="Professor">
                        <ImagemDepoimentos src="/imagens/Professor.png" />
                    </div>
                    <div className="texto">
                        <p>"Como membro da comunidade LGBT, é extremamente importante para mim apoiar iniciativas que promovam a igualdade e o respeito pela diversidade. A Solidariedade Online me proporcionou uma maneira fácil e segura de contribuir para organizações que lutam pelos direitos LGBT.”</p>
                    </div>
                </div>
                <div className="depoimento">
                    <div className="texto">
                        <p>"Como engenheiro negro, enfrentei diversos desafios para chegar onde estou hoje. É fundamental que mais pessoas negras se vejam representadas na engenharia, pois isso não apenas amplia as oportunidades para nossa comunidade, mas também enriquece o campo com perspectivas únicas e soluções inovadoras.”</p>
                    </div>
                    <div className="Engenheiro">
                        <ImagemDepoimentos src="/imagens/Engenheiro.png" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Depoimentos;