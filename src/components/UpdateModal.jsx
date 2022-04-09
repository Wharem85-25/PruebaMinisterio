import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const button = {
  border: '1px solid black',
  color: 'black'
}
const API = process.env.API;

const UpdateModal = () => {
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
        label="Id"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
			<Button sx={button}>Traer</Button>
      <TextField
        id="outlined-number"
        label="Dpi"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
			 <TextField
        id="outlined-number"
        label="Nit"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField id="outlined-search" label="Nombre" type="search" />
			<TextField id="outlined-search" label="Apellido" type="search" />
			<TextField id="outlined-search" label="Direccion" type="search" />
			<TextField
        id="outlined-number"
        label="Municipio"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
		</Box>
	);
};

export default UpdateModal;
