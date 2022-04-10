import React, { useState, useEffect } from 'react';
import getData from '../hooks/getData';
import AppContext from '../context/AppContext';
import Post from './Post';
import TableGet from '../components/TableGet';
import Delete from './Delete';
import Update from './Update';
import Title from '../components/Title';
import '../assets/styles/App.css'

const API = process.env.APIGET

const App = () => {
  const initialState = getData();
	const [datos, setDatos] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setDatos(data.data)
      })
  }, [])

  function handleOnEnter(nombre, apellido, dpi, nit, direccion, municipio) {
    let newArray = [...rows]
    newArray.push(createData(nombre, apellido, dpi, nit, direccion, municipio))
    setRows(newArray);
    console.log(newArray)
	}

  function createData(nombre, apellido, dpi, nit, direccion, municipio) {
    return {nombre, apellido, dpi, nit, direccion, municipio};
  }

	return (
    <AppContext.Provider value={initialState}>
      <Title />
      <TableGet datos={datos} rows={rows} />
      <div className="content-button">
        <Post handleOnEnter={handleOnEnter} />
        <Delete />
        <Update />
       </div>
    </AppContext.Provider>
	)
}

export default App;
