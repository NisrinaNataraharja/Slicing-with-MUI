import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Box from '@mui/material/Box';
import {Active} from '../../assets/icon/icons'

function createData(title, message, important, status, action) {
  return { title, message, important, status, action };
}

const rows = [
  createData('Informasi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...', 'Yes', <Box> <Active/> </Box> , <Box sx={{display:'flex', marginLeft:'20%'}}><DeleteOutlineIcon sx={{color:'lightGrey'}} /> <EditOutlinedIcon sx={{color:'lightGrey'}} /></Box> ),
  createData('Informasi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...', 'No', <Box> <Active/> </Box>, <Box sx={{display:'flex', marginLeft:'20%'}}><DeleteOutlineIcon sx={{color:'lightGrey'}} /> <EditOutlinedIcon sx={{color:'lightGrey'}} /></Box> ),
  createData('Informasi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...', 'No', <Box> <Active/> </Box>, <Box sx={{display:'flex', marginLeft:'20%'}}><DeleteOutlineIcon sx={{color:'lightGrey'}} /> <EditOutlinedIcon sx={{color:'lightGrey'}} /></Box> ),
  createData('Informasi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...', 'Yes', <Box> <Active/> </Box> , <Box sx={{display:'flex', marginLeft:'20%'}}><DeleteOutlineIcon sx={{color:'lightGrey'}} /> <EditOutlinedIcon sx={{color:'lightGrey'}} /></Box> ),
  createData('Informasi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...', 'Yes', <Box> <Active/> </Box> , <Box sx={{display:'flex', marginLeft:'20%'}}><DeleteOutlineIcon sx={{color:'lightGrey'}} /> <EditOutlinedIcon sx={{color:'lightGrey'}} /></Box> ),
  createData('Informasi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...', 'No', <Box> <Active/> </Box> , <Box sx={{display:'flex', marginLeft:'20%'}}><DeleteOutlineIcon sx={{color:'lightGrey'}} /> <EditOutlinedIcon sx={{color:'lightGrey'}} /></Box> ),
  createData('Informasi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...', 'Yes', <Box> <Active/> </Box> , <Box sx={{display:'flex', marginLeft:'20%'}}><DeleteOutlineIcon sx={{color:'lightGrey'}} /> <EditOutlinedIcon sx={{color:'lightGrey'}} /></Box> ),
  createData('Informasi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...', 'No', <Box> <Active/> </Box> , <Box sx={{display:'flex', marginLeft:'20%'}}><DeleteOutlineIcon sx={{color:'lightGrey'}} /> <EditOutlinedIcon sx={{color:'lightGrey'}} /></Box> ),
  createData('Informasi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...', 'Yes', <Box> <Active/> </Box> , <Box sx={{display:'flex', marginLeft:'20%'}}><DeleteOutlineIcon sx={{color:'lightGrey'}} /> <EditOutlinedIcon sx={{color:'lightGrey'}} /></Box> ),
  createData('Informasi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...', 'No', <Box> <Active/> </Box> , <Box sx={{display:'flex', marginLeft:'20%'}}><DeleteOutlineIcon sx={{color:'lightGrey'}} /> <EditOutlinedIcon sx={{color:'lightGrey'}} /></Box> )
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ height:'550px' }} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor: '#E1E3E5'}}>
          <TableRow>
            <TableCell sx={{color: '#91989C', fontSize:'13px', fontWeight:'500'}}>TITLE</TableCell>
            <TableCell align="center" sx={{color: '#91989C', fontSize:'13px', fontWeight:'500'}}>MESSAGE</TableCell>
            <TableCell align="center" sx={{color: '#91989C', fontSize:'13px', fontWeight:'500'}}>IMPORTANT</TableCell>
            <TableCell align="center" sx={{color: '#91989C', fontSize:'13px', fontWeight:'500'}}>STATUS</TableCell>
            <TableCell align="center" sx={{color: '#91989C', fontSize:'13px', fontWeight:'500'}}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.message}</TableCell>
              <TableCell align="center">{row.important}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
