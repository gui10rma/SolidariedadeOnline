import React, { useState } from 'react';
import "./dropcategorias.css"

function DropdownCategoria({ itens, onCategoriaChange }) {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Selecione uma categoria');

    const handleCategoriaSelecionada = (categoria) => {
        setCategoriaSelecionada(categoria);
        console.log('Categoria selecionada:', categoria); // Adicione esta linha
        onCategoriaChange(categoria);
    };

    return (
        <div>
            <h3 className='Titulo'>Categorias</h3>
            <select className="Drop" value={categoriaSelecionada} onChange={(e) => handleCategoriaSelecionada(e.target.value)}>
                <option disabled>Selecione uma categoria</option>
                {itens.map((categoria) => (
                    <option key={categoria} value={categoria}>{categoria}</option>
                ))}
            </select>
            <p className='categoriaselecionada'>Categoria selecionada: {categoriaSelecionada}</p>
        </div>
    );
}

export default DropdownCategoria;

