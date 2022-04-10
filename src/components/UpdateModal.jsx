import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const button = {
	marginTop: "20px",
  backgroundColor: "black",
	color: 'gray',
	fontWeight: 'bold',
	fontSize: '16px',
  alignItems: "center"
}

const APIUPDATE = process.env.APIUPDATE;

const UpdateModal = () => {
  const [id, setId] = useState('');
  const [dpiDato, setDpi] = useState('');
  const [nitDato, setNit] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [municipio, setMunicipio] = useState(null);

  var data = {
    id: id,
    dpi: dpiDato,
    nit: nitDato,
    nombre: nombre,
    apellido: apellido,
    direccion: direccion,
    municipio_id: municipio
  }

  var config = {
    method: 'put',
    url: APIUPDATE,
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };

  const fetchData = async () => {
    await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
  .catch(function (error) {
    console.log(error);
  });
  }

  const handleClick = () => {
    fetchData()
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
        label="Id"
        type="number"
        onChange={event => setId(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-number"
        label="Dpi"
        type="number"
        onChange={event => setDpi(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
			 <TextField
        id="outlined-number"
        label="Nit"
        type="number"
        onChange={event => setNit(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField id="outlined-search" label="Nombre" type="search" onChange={event => setNombre(event.target.value)} />
			<TextField id="outlined-search" label="Apellido" type="search" onChange={event => setApellido(event.target.value)} />
			<TextField id="outlined-search" label="Direccion" type="search" onChange={event => setDireccion(event.target.value)} />
			<TextField
        id="outlined-number"
        label="Municipio"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button sx={button} onClick={handleClick} >Modificar</Button>
		</Box>
	);
};

export default UpdateModal;
