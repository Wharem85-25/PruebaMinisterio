import React, {useState} from 'react';
import getData from '../utils/getData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const API = 'https://servicios.mem.gob.gt/api/api_prueba/prueba/read';

function createData(nombre, nit, dpi, direccion, municipio) {
  return { nombre, nit, dpi, direccion, municipio };
}

const rows = [
  createData('Ice cream', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const TableGet = () => {
  // const datos = getData(API);

  const [dpi, setDpi] = useState([]);

	return (
		<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Nit</TableCell>
            <TableCell align="right">Dpi</TableCell>
            <TableCell align="right">Direccion</TableCell>
            <TableCell align="right">Municipio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.nit}</TableCell>
              <TableCell align="right">{row.dpi}</TableCell>
              <TableCell align="right">{row.direccion}</TableCell>
              <TableCell align="right">{row.municipio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	);
};

export default TableGet;
