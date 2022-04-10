import React, {useState, useEffect} from 'react';
import '../assets/styles/TableGet.css';

const API = process.env.APIGET

const TableGet = () => {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    fetch(API)
      .then((response) => {
        return response.json()
      })
      .then((datos) => {
        datos.data.forEach(usuario => {
          setDatos(usuario)
        });
          console.log(datos.data);
      })
  }, [])

	return (
		<div>
      <table borderColor="white" className="table">
        <thead className="table-head">
          <tr className="titles">
            <th className="title">Nombre</th>
            <th className="title" >Apellido</th>
            <th className="title" >Dpi</th>
            <th className="title" >Nit</th>
            <th className="title" >Municipio</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {Object.keys(datos).map(dat => {
            console.log(dat)
            return (
              <tr key={datos.id} className="content">
                <td className="datos" >{datos.nombre}</td>
                <td className="datos" >{datos.apellido}</td>
                <td className="datos" >{datos.dpi}</td>
                <td className="datos" >{datos.nit}</td>
                <td className="datos">{datos.municipio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
	);
};

export default TableGet;
