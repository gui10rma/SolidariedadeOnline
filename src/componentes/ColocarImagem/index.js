
import React, { useState } from "react";
import "./colocarimagem.css"

function ColocarImagem() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="App">
			<h2>Adicione o logo da ONG</h2>
			<input type="file" onChange={handleChange} />
			<img src={file} />
		</div>
	);
}

export default ColocarImagem;
