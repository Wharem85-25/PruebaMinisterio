import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import '../assets/styles/PostForm.css';

const FormPost = ({handleOnEnter}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dpiDato, setDpi] = useState('');
  const [nitDato, setNit] = useState('');
  const [direccionDato, setDireccion] = useState('');
  const [municipioDato, setmunicipio] = useState('');

	return (
		<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' , color: "white"},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-number" label="Dpi" type="number" onChange={setDpi}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField id="outlined-search" label="Nombre" type="search" onChange={setName} />
			<TextField id="outlined-search" label="Apellido" type="search" onChange={setLastName} />
			 <TextField id="outlined-number" label="Nit" type="number" onChange={setNit}
        InputLabelProps={{
          shrink: true,
        }}
      />
			<TextField id="outlined-search" label="Direccion" type="search" onChange={setDireccion}  />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Departamentos</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select"  label="Departamentos">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div className="space"></div>
      <FormControl fullWidth className="form-control">
        <InputLabel id="demo-simple-select-label">Municipios</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Municipios" >
          <MenuItem  onChange={setmunicipio} value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
         </Select>
      </FormControl>
      <Button onClick={handleOnEnter}>Crear</Button>
		</Box>
	);
};

export default FormPost;
