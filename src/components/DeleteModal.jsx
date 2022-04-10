import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const APIDELETE = process.env.APIDELETE;

const box = {
  color: 'white'
}

const button = {
	marginTop: "20px",
  backgroundColor: "black",
	color: 'gray',
	fontWeight: 'bold',
	fontSize: '16px',
  alignItems: "center"
}

const DeleteModal = () => {
  const [deleteId, setDeleteId] = useState('');

  const data = {
    id: deleteId
  }

  var config = {
    method: 'delete',
    url: APIDELETE,
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  }

  const fetchDataDelete = async () => {
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClickDelete = () => {
    fetchDataDelete();
  }


	return (
		<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch'},
      }}
    	noValidate
      autoComplete="off"
    >
			<TextField
        id="outlined-number"
        sx={box}
        label="id"
        type="number"
        onChange={event => setDeleteId(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button onClick={handleClickDelete} sx={button}>Borrar usuario</Button>
		</Box>
	);
};

export default DeleteModal;
