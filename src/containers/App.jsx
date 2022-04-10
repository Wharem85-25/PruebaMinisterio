import React, { useState } from 'react';
import Post from './Post';
import TableGet from '../components/TableGet';
import Delete from './Delete';
import Update from './Update';
import Title from '../components/Title';
import '../assets/styles/App.css'

const App = () => {

	return (
		<div className="content">
			<Title />
			<TableGet />
			<div className="content-button">
				<Post />
				<Delete />
				<Update />
			</div>
		</div>
	)
}

export default App;
