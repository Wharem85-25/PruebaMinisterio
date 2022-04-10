import React, { useState, useEffect } from 'react';
import Post from './Post';
import TableGet from '../components/TableGet';
import Delete from './Delete';
import Update from './Update';
import Title from '../components/Title';
import '../assets/styles/App.css'

const API = process.env.APIGET

const App = () => {
	const [datos, setDatos] = useState([])

  useEffect(() => {
    fetch(API)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data.data)
        setDatos(data.data)
      })
  }, [])

	return (
		<div className="content">
			<Title />
			<TableGet datos={datos} />
			<div className="content-button">
				<Post />
				<Delete />
				<Update />
			</div>
		</div>
	)
}

export default App;
