import React, { useEffect } from 'react';
import BarraAcessibilidade from '../BarraAcessibilidade';
import Footer from '../Footer';
import NavBar from '../NavBar';
import "./pagamentoconfirmacao.css";

function ConfirmacaoPagamento() {
    useEffect(() => {
        const confettiContainer = document.querySelector('.ConfettiContainer');
        const confettiCount = 20;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('Confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;

            const rotate = i % 2 === 0 ? 'rotate(225deg)' : 'rotate(315deg)';
            confetti.style.transform = rotate;

            confettiContainer.appendChild(confetti);
        }
    }, []);

    return (
        <div>
            <BarraAcessibilidade />
            <NavBar />
            <div className="Confirmacao">
                <div className="ConfettiContainer"></div>
                <div className="ConfirmacaoContainer">
                    <h1>Pagamento Confirmado!</h1>
                    <p>Seu pagamento foi processado com sucesso.</p>
                    <p>Obrigado por sua contribuição!</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ConfirmacaoPagamento;


