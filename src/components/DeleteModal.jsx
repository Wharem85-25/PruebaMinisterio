import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const box = {
  color: 'white'
}

const DeleteModal = () => {
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
        InputLabelProps={{
          shrink: true,
        }}
      />
		</Box>
	);
};

export default DeleteModal;
