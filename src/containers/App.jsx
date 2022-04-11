import React, { useState, useEffect } from 'react';
import getData from '../hooks/getData';
import AppContext from '../context/AppContext';
import Post from './Post';
import TableGet from '../components/TableGet';
import Delete from './Delete';
import Update from './Update';
import Title from '../components/Title';
import '../assets/styles/App.css'

const API = process.env.APIGET;

const App = () => {
  const initialState = getData();
	const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setDatos(data.data)
      })
  }, [])

	return (
    <AppContext.Provider value={initialState}>
      <Title />
      <TableGet datos={datos} />
      <div className="content-button">
        <Post />
        <Delete />
        <Update />
       </div>
    </AppContext.Provider>
	)
}

export default App;
