import React, {useState, useEffect} from 'react';
import '../assets/styles/Title.css'
import axios from 'axios';

const API = process.env.APIGET

const Title = () => {
	// const [dpis, setDpi] = useState([]);

	// useEffect(async () => {
	// 	setDpi(`https://servicios.mem.gob.gt/api/api_prueba/prueba/read`)
	// }, [])

	return (
		<div className="title">
			<p className="textTitle">Ministerio de energia y minas</p>
			{/* {dpis.map(dpi => (
				<p dpi={dpi} key={dpi.id}></p>
			))} */}
		</div>
	);
};

export default Title;
