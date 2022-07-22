import  React,{ useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {TextField,Button} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Tablecell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Tablerow from '@mui/material/TableRow';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ForkLeft } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
 
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  boxShadow:'none'
}));


const TableCell = styled(Tablecell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#f2f6f9',
      color: theme.palette.common.black,
      padding: '5px'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
    padding: '10px 5px',
    textAlign:'justify'
  }));
  
  const TableRow = styled(Tablerow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    //   // backgroundColor: theme.palette.action.hover,
    //   backgroundColor:'#f2f6f9'
    // },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },}));
  
  const columns = [
      { id: 'id', label: 'ID', minWidth: 50 },
      { id: 'Course Name', label: 'Course Name', minWidth: 500 },
      // { id: 'Stock',
      //   label: 'Stock',
      //   minWidth: 100,
      //   align: 'left',
      //   format: (value) => value.toLocaleString('en-US'),
      // },
      { id: 'Price',
        label: 'Price',
        minWidth: 50,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'), 
      },
      { id: 'Categories',
        label: 'Categories',
        minWidth: 150,
        align: 'left',
        format: (value) => value.toFixed(2),
      },
      {
        id: 'Tag',
        label: 'Tag',
        minWidth: 150,
        align: 'left',
        format: (value) => value.toFixed(2),
      },

      {
        id: 'Date',
        label: 'Date',
        minWidth: 50,
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
   
    const Items = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(3),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      height: '480px',
      boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)'
  }));

  const Editicon = styled(Box)(({theme})=>({
    // marginTop: '15px',
    // marginRight: theme.spacing(1),
    
}));

const Main = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent:'space-between',
    spacing: theme.spacing(5),
}));




export default function BasicGrid() {

  const [age, setAge] = useState('');
  const handleChange = (event)=> {
    setAge(event.target.value);
  };


  const [age1, setAge1] = useState('');
  const handleChange1 = (event)=> {
    setAge1(event.target.value);
  };


  const [age2, setAge2] = useState('');
  const handleChange2 = (event)=> {
    setAge2(event.target.value);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
           <Box>
            <Typography variant="h5" component="div" align="left" display="block" gutterBottom sx={{marginBottom:'4px'}}>
            Partner Details 
      </Typography>

            <Stack spacing={3} >
            <Breadcrumbs aria-label="breadcrumb" sx={{fontSize:'15px'}} separator={<NavigateNextIcon fontSize="30px" />}>
       
        <Link
          // underline="hover"
          sx={{ display: 'flex',fontSize:'14px', alignItems: 'center','&:hover': { color: '#1878f3 ' },textDecoration:'none' }}
          color="inherit"
          href="/"
        >
         All partner
        </Link>,
        <Typography
          sx={{ display: 'flex', alignItems: 'center',fontSize:'14px' }}
          color="#1878f3 "
        >
        Partner Details
        </Typography>
      </Breadcrumbs>
            </Stack>
            </Box>

        <Grid container spacing={2} marginTop={1}>
        <Grid item xs={12}>
        <Main>
                  <Box>
                        <Typography sx={{ marginTop:'20px',background:'#00bcd4', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Partner Details</Typography>
                  </Box>
                <Editicon>
                
                {/* <Typography sx={{fontSize:'14px', color:'#1878f3'}} > */}
                  {/* <FontAwesomeIcon icon={faPenToSquare} size='1' color=''/>&nbsp;Edit */}
                {/* <EditOutlinedIcon sx={{color:'#1878f3',fontSize:'25x'}} />&nbsp;Edit 
                    </Typography> */}

          <Button variant="outlined" size="small" sx={{textTransform:'capitalize',fontSize:'14px',color:'#1878f3',border:'1px solid #1878f3'}}  >
          <EditOutlinedIcon sx={{color:'#1878f3'}} /> &nbsp;Edit
          
           </Button>
                </Editicon>
            </Main>
        
        <Item sx={{display:'flex',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)'}}>
        <Grid xs={12} sx={{display:'flex'}}>
        <Grid item xs={4}>
        <Typography sx={{ borderBottom: "1px solid #ccc",padding:'1px',fontSize:'14px',fontWeight:'500'}}>Address</Typography>
        <Grid xs={12} sx={{display:'flex',marginLeft:'-16px'}}>     
        <Grid item xs={4}>
          <Item>Company Name</Item>
          <Item>Partner Code </Item>
          <Item>Address line1</Item>
          <Item>Address line2</Item>
          <Item>Website</Item>
          </Grid>
          
          <Grid item xs={6}>
          <Item>TechSherpas</Item>
          <Item>TechSherpas#98fe </Item>
          <Item>204 North Foxrun DriveBron </Item>
          <Item>204 North Foxrun DriveBron </Item>
          <Item>oddcounts.com </Item>
          </Grid>
          <Grid item xs={2}></Grid>
          </Grid>
          
          </Grid>


          <Grid item xs={4}>
          <Typography sx={{ borderBottom: "1px solid #ccc",padding:'1px',fontSize:'14px',fontWeight:'500'}}>Contact</Typography>
        <Grid xs={12} sx={{display:'flex',marginLeft:'-16px'}}>
       
        <Grid item xs={4}>
          <Item>City</Item>
          <Item>Zip Code</Item>
          <Item>State</Item>
          <Item>Country</Item>
          <Item>Fax</Item>
          </Grid>
          
          <Grid item xs={3}>
          <Item>New York</Item>
          <Item>11102</Item>
          <Item>Albany</Item>
          <Item>USA</Item>
          <Item>techsharpa@fax</Item>
          </Grid>
          <Grid item xs={5}></Grid>
          </Grid>
          </Grid>

          <Grid item xs={4}>
          <Typography sx={{ borderBottom: "1px solid #ccc",padding:'1px',fontSize:'14px',fontWeight:'500'}}>&nbsp;</Typography>
        <Grid xs={12} sx={{display:'flex'}}>
        
        <Grid item xs={4}>
          <Item>First Name </Item>
          <Item>Last Name</Item>
          <Item>Mobile </Item>
          <Item>Phone</Item>
          <Item>Mail ID</Item>
         
         
          </Grid>
          
          <Grid item xs={4}>
          <Item>Karnan</Item>
          <Item>Ravichandran</Item>
          <Item>585-303-4570</Item>
          <Item>917-809-4514</Item>
          <Item>techsharpa@gmail.com</Item>
         

          </Grid>
          <Grid item xs={4}></Grid>
          </Grid>
          </Grid>
         
          </Grid>
          </Item>
        </Grid>




        <Grid item xs={12}>
          <Typography  sx={{ background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px',}}>Partner Courses</Typography>
          <Grid item xs={12}>
         

              <Paper sx={{ width: '100%',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',padding:'15px'}}>
{/* <Button variant="contained" color="primary" onClick={onDelete}>
        Delete selected rows
      </Button> */}
      <Box>
       
<Grid sx={{display:'flex'}}> 
<Grid xs={4} sx={{display:'flex'}}>
  <Typography sx={{color:'gray',fontSize:'14px'}}>All (3)</Typography>&nbsp;&nbsp;|&nbsp;&nbsp;<Typography  sx={{color:'gray',fontSize:'14px'}}>Published (3)</Typography>
</Grid>
<Grid xs={5.9}></Grid>
  <Grid xs={2.3}> 
<Button
  variant="contained"
  component="label" >
  Upload 
  <input
    type="file"
    hidden
  />
</Button>

<Button 
  variant="outlined"
  component="label"
  sx={{
     marginLeft:'22px',
   textTransform:'capitalize'
  }}
>

  import
  <input
    type="file"
    hidden
  />
</Button>

<Button
  variant="outlined"
  component="label"
  sx={{
    marginLeft:'24px',
    textTransform:'capitalize'
  }}
>
  export
  <input
    type="file"
    hidden
    
  />
</Button>

</Grid></Grid>
<Grid sx={{display:'flex'}}>

<Grid xs={5}>
  <Box sx={{margin:'10px 0px',display:'flex',justifyContent:'space-between'}}>
<FormControl sx={{ minWidth: 150}} size="small">
<InputLabel sx={{fontSize:'14px'}}>Bulk Actions</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Bulk Actions"
        onChange={handleChange}
        sx={{height:'36px'}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

<Button
  variant="outlined"
  component="label"
  sx={{ textTransform:'capitalize' }}>
 Apply
  <input
    type="file"
    hidden
  />
</Button>

<FormControl sx={{ minWidth: 150}} size="small">
<InputLabel sx={{fontSize:'14px'}}>All Dates</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age1}
        label="All Dates"
        onChange={handleChange1}
        sx={{height:'36px'}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>


    <FormControl sx={{ minWidth: 150}} size="small">
    <InputLabel sx={{fontSize:'14px'}}>All Categories</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age2}
        label="All Categories"
        onChange={handleChange2}
        sx={{height:'36px'}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

<Button
  variant="outlined"
  component="label"
  sx={{ textTransform:'capitalize' }}>
 Filter
  <input
    type="file"
    hidden
  />
</Button>
</Box>

</Grid>
<Grid xs={4.7}>

</Grid>
  <Grid xs={2.4}>
<TextField
          id="outlined-textarea"
        //   label="Search"
          placeholder="Search"
          multiline
        //   onChange={(e) => searchItems(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>,
          }} 
          sx={{margin:'10px 0px',width:'95.1%', height:'36px',marginLeft:'14px',
            ".MuiOutlinedInput-root": {
              padding: "7px"
            },}}

            
            
          />  
</Grid>

</Grid>
</Box>
<TableContainer >
{/* sx={{ maxHeight: 600}} */}
<Table stickyHeader aria-label="sticky table" >
  <TableHead  
//   valuetoorderby = {valuetoorderby}
//   orderdirection = {orderdirection}
//   handlerequestsort = {handlerequestsort}
  >
   
     <TableRow >
     <TableCell padding="checkbox">
     <Checkbox  color="primary" />
     {/* <EnhancedTableHead
              numSelected={selected.length}
              // order={order}
              // orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              // onRequestSort={handleRequestSort}
              rowCount={data.length}
            /> */}
            </TableCell>
      {columns.map((column) => (
        <TableCell 
          key={column.id}
          align={column.align}
          style={{ top: 0, minWidth: column.minWidth }}>

           <TableSortLabel 
           active = {true}
        //    direction = {valuetoorderby === column.id ? orderdirection : 'asc'}
        //    onClick = {createsorthandler(column.id)}
           sx = {
            {
              '.css-1vweko9-MuiSvgIcon-root-MuiTableSortLabel-icon': {
                fill: '#75889d',
            },              
                '.css-3l415a-MuiSvgIcon-root-MuiTableSortLabel-icon': {
                    fill: 'black',
                },
            }
        }
           >
          {column.label}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
  <TableBody>  

  <TableRow >  

        <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                  />
                </TableCell>

          <TableCell component="th" scope="row">   
            1  
          </TableCell>  

          <TableCell >TechSherpas</TableCell>  
          
          {/* <TableCell >{row.image}</TableCell>   */}

          <TableCell >3,975</TableCell>  

          <TableCell >null</TableCell>  

          <TableCell >none</TableCell>  

          <TableCell >21/5/2022</TableCell>  

          <TableCell >
          <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
          <EditOutlinedIcon sx={{color:'#1878f3'}}/>
          {/* <FontAwesomeIcon icon={faPenToSquare} size='1' color='#1878f3'/> */}
          </IconButton>
          <IconButton aria-label="delete" >
          <DeleteOutlinedIcon sx={{color:'#f3425f'}}/>
          </IconButton>
            </TableCell>  

        </TableRow> 
        <TableRow   >  

<TableCell padding="checkbox">
          <Checkbox
            color="primary"
          />
        </TableCell>

  <TableCell component="th" scope="row">   
    2  
  </TableCell>  

  <TableCell >Logical Operation</TableCell>  
  
  {/* <TableCell >{row.image}</TableCell>   */}


  <TableCell >3,975</TableCell>  

<TableCell >null</TableCell>  

<TableCell >none</TableCell>  

<TableCell >21/5/2022</TableCell>  
  <TableCell >
  <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <EditOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton>
  <IconButton aria-label="delete" >
  <DeleteOutlinedIcon sx={{color:'#f3425f'}}/>
  </IconButton>
    </TableCell>  

</TableRow> 

<TableRow   >  

<TableCell padding="checkbox">
          <Checkbox
            color="primary"
          />
        </TableCell>

  <TableCell component="th" scope="row">   
    3 
  </TableCell>  

  <TableCell >Test</TableCell>  
  
  {/* <TableCell >{row.image}</TableCell>   */}

 
  <TableCell >3,975</TableCell>  

<TableCell >null</TableCell>  

<TableCell >none</TableCell>  

<TableCell >21/5/2022</TableCell>  

  <TableCell >
  <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <EditOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton>
  <IconButton aria-label="delete" >
  <DeleteOutlinedIcon sx={{color:'#f3425f'}}/>
  </IconButton>
    </TableCell>  

</TableRow> 

<TableRow   >  

<TableCell padding="checkbox">
          <Checkbox
            color="primary"
          />
        </TableCell>

  <TableCell component="th" scope="row">   
    4 
  </TableCell>  

  <TableCell >Google </TableCell>  
  
  {/* <TableCell >{row.image}</TableCell>   */}


  <TableCell >3,975</TableCell>  

<TableCell >null</TableCell>  

<TableCell >none</TableCell>  

<TableCell >21/5/2022</TableCell>  

  <TableCell >
  <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <EditOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton>
  <IconButton aria-label="delete" >
  <DeleteOutlinedIcon sx={{color:'#f3425f'}}/>
  </IconButton>
    </TableCell>  

</TableRow> 


<TableRow   >  

<TableCell padding="checkbox">
          <Checkbox
            color="primary"
          />
        </TableCell>

  <TableCell component="th" scope="row">   
    5 
  </TableCell>  

  <TableCell >Yahoo </TableCell>  
  
  {/* <TableCell >{row.image}</TableCell>   */}

 
  <TableCell >3,975</TableCell>  

<TableCell >null</TableCell>  

<TableCell >none</TableCell>  

<TableCell >21/5/2022</TableCell>  

  <TableCell >
  <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <EditOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton>
  <IconButton aria-label="delete" >
  <DeleteOutlinedIcon sx={{color:'#f3425f'}}/>
  </IconButton>
    </TableCell>  

</TableRow> 


<TableRow   >  

<TableCell padding="checkbox">
          <Checkbox
            color="primary"
          />
        </TableCell>

  <TableCell component="th" scope="row">   
    6  
  </TableCell>  

  <TableCell >Bing</TableCell>  
  
  {/* <TableCell >{row.image}</TableCell>   */}

 
  <TableCell >3,975</TableCell>  

<TableCell >null</TableCell>  

<TableCell >none</TableCell>  

<TableCell >21/5/2022</TableCell>  

  <TableCell >
  <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <EditOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton>
  <IconButton aria-label="delete" >
  <DeleteOutlinedIcon sx={{color:'#f3425f'}}/>
  </IconButton>
    </TableCell>  

</TableRow> 

  {/* {
  searchInput.length > 1 ? (
    filteredResults.map((row, index) => {  

      const isItemSelected = isSelected(row.name);
            const labelId = `enhanced-table-checkbox-${index}`; */}

    
          </TableBody>
</Table>
</TableContainer>
<TablePagination
rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
colSpan={3}
// count={data.length}
// rowsPerPage={rowsPerPage}
// page={page}

SelectProps={{
  inputProps: {
    'aria-label': 'rows per page',
  },
  native: true,
}}
labelRowsPerPage={'Rows :'}
sx={{
  ".MuiTablePagination-toolbar": {
    backgroundColor: "#f2f6f9",
    width:"100%"
  },
  ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
    fontWeight: "500",
    color: "black"
  },
  ".MuiTablePagination-displayedRows": {
    fontWeight: "500",
    color: "black",
   marginLeft:"1235px"
  }

}}
// onPageChange={handleChangePage}
// onRowsPerPageChange={handleChangeRowsPerPage}
/>


</Paper>
              

             
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
