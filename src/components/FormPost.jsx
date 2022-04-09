import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const API = process.env.API;

const FormPost = () => {
	return (
		<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' , color: "white"},
      }}
      noValidate
      autoComplete="off"
    >
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

export default FormPost;
