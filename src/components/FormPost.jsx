import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


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
      <TextField id="outlined-number" label="Dpi" type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
			 <TextField id="outlined-number" label="Nit" type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField id="outlined-search" label="Nombre" type="search" />
			<TextField id="outlined-search" label="Apellido" type="search"  />
			<TextField id="outlined-search" label="Direccion" type="search"  />
			<Box sx={{ maxWidth: 380 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Municipios</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select"  label="Municipios">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button >Update</Button>
		</Box>
	);
};

export default FormPost;
