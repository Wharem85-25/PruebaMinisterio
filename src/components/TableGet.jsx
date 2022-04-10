import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import '../assets/styles/TableGet.css';

const TableGet = ({datos}) => {
	return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
           <TableRow>
             <TableCell>Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
             <TableCell align="right">DPI</TableCell>
             <TableCell align="right">Nit</TableCell>
             <TableCell align="right">Direccion</TableCell>
            <TableCell align="right">Municipio</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {datos.map((dat) => (
            <TableRow
              key={dat.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {dat.nombre}
              </TableCell>
              <TableCell align="right">{dat.apellido}</TableCell>
              <TableCell align="right">{dat.dpi}</TableCell>
              <TableCell align="right">{dat.nit}</TableCell>
              <TableCell align="right">{dat.direccion}</TableCell>
              <TableCell align="right">{dat.municipio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       </Table>
    </TableContainer>
	);
};

export default TableGet;
