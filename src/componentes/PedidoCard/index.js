import React from 'react';
import './pedidocard.css';

const PedidoCard = ({ ongLogo, ongName, formaPagamento, status, backgroundColor }) => {
    return (
        <div className="pedido-card" style={{ backgroundColor }}>
            <img src={ongLogo} alt="Logo da ONG" className="ong-logo" />
            <div className="ong-info">
                <p className='ong-name'>{ongName}</p>
            </div>
            <div className='forma-pagamento'>
                <p>{formaPagamento}</p>
            </div>
            <div>
            <p className='status2'>{status}</p>
            </div>
            <div className={`status-dot ${getStatusClass(status)}`}></div>
        </div>
    );
}

const getStatusClass = (status) => {
    switch (status) {
        case 'Aprovado':
            return 'status-approve';
        case 'Recusado':
            return 'status-reject';
        case 'Pendente':
            return 'status-pending';
        default:
            return 'status-default';
    }
}

export default PedidoCard;

