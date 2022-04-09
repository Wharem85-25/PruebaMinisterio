import {useEffect, useState} from 'react';

const getData = () => {
	const [datos, setDatos] = useState([]);

	useEffect(async () => {
		setDatos(API.data);
	}, [])

	return datos;
};

export default getData;
