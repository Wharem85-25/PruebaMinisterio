import {useEffect, useState} from 'react';

const API = process.env.APIGET

const getData = () => {
	const [nombre, setNombre] = useState(null);
  const [dpi, setDpi] = useState(null);
  const [direccion, setDireccion] = useState(null);
  const [nit, setNit] = useState(null);
  const [municipio, setMunicipio] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setNombre(data.data[1].nombre);
        setDpi(data.data[1].dpi);
        setDireccion(data.data[1].direccion);
        setNit(data.data[1].nit);
        setMunicipio(data.data[1].municipio);
        setId(data.data[1].id)
      });
  }, [])
}


export default getData;
