import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


function DropdownFormList({ itens, valor, aoAlterar }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {valor}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {itens.map(item => (
                    <Dropdown.Item key={item} onClick={() => aoAlterar(item)}>{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownFormList;