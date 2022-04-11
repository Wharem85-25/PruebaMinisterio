import React, {useState, useEffect} from 'react';
import getMun from '../hooks/getMun';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import '../assets/styles/PostForm.css';

const APIPOST = process.env.APIPOST;

const button = {
  marginTop: "20px",
  backgroundColor: "black",
	color: 'gray',
	fontWeight: 'bold',
	fontSize: '16px',
  alignItems: "center"
}

const FormPost = ({dep}) => {
  const [dpiDato, setDpi] = useState('');
  const [nitDato, setNit] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [municipio, setMunicipio] = useState(null);
  const [departamenot, setDepartamento] = useState(null);

  var obj = {
    dpi: dpiDato,
    nit: nitDato,
    nombre: nombre,
    apellido: apellido,
    direccion: direccion,
    municipio_id: municipio
  }

  const fetchData = async (dpi, nit, nombre, apellido, direccion, municipio_id) => {
    try {
       const { data } = await axios.post(APIPOST,
        {
          dpi, nit, nombre, apellido, direccion, municipio_id
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);;
    }
  };


  const handleClick = () => {
    fetchData(obj)
  }

  const muni = getMun();

	return (
		<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' , color: "white"},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-number" label="Dpi" type="number" onChange={event => setDpi(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField id="outlined-search" label="Nombre" type="search" onChange={event => setNombre(event.target.value)}  />
			<TextField id="outlined-search" label="Apellido" type="search" onChange={event => setApellido(event.target.value)}  />
			 <TextField id="outlined-number" label="Nit" type="number" onChange={event => setNit(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
			<TextField id="outlined-search" label="Direccion" type="search" onChange={event => setDireccion(event.target.value)} />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Departamentos</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select"  label="Departamentos">
          {dep.map((item) => (
            <div key={item.id}>
              <MenuItem value={item.id} >{item.nombre}</MenuItem>
            </div>
          ))}
        </Select>
      </FormControl>
      <div className="space"></div>
      <FormControl fullWidth className="form-control">
        <InputLabel id="demo-simple-select-label">Municipios</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Municipios" >
          <MenuItem value={10}>Guatemala</MenuItem>
         </Select>
      </FormControl>
      <Button onClick={handleClick} className="button-crear" sx={button}>Nuevo usuario</Button>
		</Box>
	);
};

export default FormPost;
