import React, {useState, useEffect} from 'react';

import {Box,Typography } from '@mui/material';
import Axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import {test} from './allcourse.style';

const columns = [
    { id: 'id', label: 'ID', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'stock', label: 'Stock', minWidth: 100 },
    {
      id: 'price',
      label: 'Price',
      minWidth: 100,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'categories',
      label: 'Categories',
      minWidth: 100,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'tags',
      label: 'Tags',
      minWidth: 100,
      align: 'left',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'date',
      label: 'Date',
      minWidth: 100,
      align: 'left',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'action',
      label: 'Action',
      minWidth: 100,
      align: 'left',
      format: (value) => value.toFixed(2),
    },
  ];
 

  export default function Allcourse() {
    const [data, setData] = useState([]); 
   
useEffect(() => {      
          const GetData = async () => {    
            const result = await Axios('http://127.0.0.1:8000/api/get_course');      
            setData(result.data);      
          }   
          GetData();         
  }, []);

  const removeCourse = async (id) => {
    try {
      const res = await Axios.delete(`http://127.0.0.1:8000/api/delete_course/${id}`)
      console.log('Item successfully deleted : ',res);
      window.location.href="/allcourse";
    } catch (error) {
      alert(error)
    }
  }

    const [page,setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  

    return (
      <Box>
        <Typography variant="h5" component="div" align="left" display="block" gutterBottom>
        All Course
        </Typography>

<Paper sx={{ width: '100%' }}>
<TableContainer sx={{ maxHeight: 440 }}>
<Table stickyHeader aria-label="sticky table">
  <TableHead >
     <TableRow classes={{background:'#ccc'}}>
      {columns.map((column) => (
        <TableCell
          key={column.id}
          align={column.align}
          style={{ top: 0, minWidth: column.minWidth }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
  <TableBody>  

            {data.map(row => {  
              return (  
           <TableRow >  
                <TableCell component="th" scope="row">  
                  {row.id}  
                </TableCell>  

                <TableCell >{row.course_name}</TableCell>  

                <TableCell >In Stock</TableCell>  

                <TableCell >{row.price}</TableCell>  

                <TableCell >{row.course_categories}</TableCell>  

                <TableCell >{row.course_tags}</TableCell>  

                <TableCell >{row.created_at}</TableCell>  

                <TableCell >
                <IconButton aria-label="delete">
                <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => removeCourse(row.id)}>
                <DeleteIcon />
                </IconButton>
                  </TableCell>  

              </TableRow>  
          );  
       })}  
          </TableBody>
</Table>
</TableContainer>
<TablePagination
rowsPerPageOptions={[10, 25, 100]}
component="div"
count={data.length}
rowsPerPage={rowsPerPage}
page={page}
onPageChange={handleChangePage}
onRowsPerPageChange={handleChangeRowsPerPage}
/>
</Paper>

      </Box>
    )
  }
  