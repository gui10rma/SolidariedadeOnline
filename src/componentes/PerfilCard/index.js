import React from 'react';
import './perfilcard.css'; // Certifique-se de ter um arquivo CSS para estilizar o cartão

const PerfilCard = ({ nome, cidade, email, telefone }) => {
    return (
        <div className="perfil-card">
            <div className="perfil-header">
                <h2>{nome}</h2>
            </div>
            <div className="perfil-body">
                <p><strong>Cidade:</strong> {cidade}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Telefone:</strong> {telefone}</p>
                <p className='obrigado'>Obrigado por fazer a diferença</p>
            </div>
        </div>
    );
}

export default PerfilCard;
