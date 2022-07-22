import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import {Box,Typography,Grid,TextField,FormControl,InputLabel,Select,MenuItem,Button,Breadcrumbs,Link} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Tablecell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Tablerow from '@mui/material/TableRow';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios';


const TableCell = styled(Tablecell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f2f6f9',
    color: theme.palette.common.black,
    padding: '5px'
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: '#444444',
  },
  padding: '10px'
}));


const TableRow = styled(Tablerow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },}));

  const Editicon = styled(Box)(({theme})=>({
    // marginTop: '15px',
    marginRight: theme.spacing(1),
 
}));

const Main = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent:'space-between',
    spacing: theme.spacing(5),
}));



const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },

    { id: 'Partner_Name', label: 'Partner_Name', minWidth: 100 },

    { id: 'Partner_Code',label: 'Partner_Code',minWidth: 100,align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },

    { id: 'Contact_Name',
      label: 'Contact_Name',
      minWidth: 100,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },

    { id: 'Email',
      label: 'Email',
      minWidth: 100,
      align: 'left',
      format: (value) => value.toFixed(2),
    },

    {
      id: 'Country',
      label: 'Country',
      minWidth: 50,
      align: 'left',
      format: (value) => value.toFixed(2),
    },

    {
      id: 'action',
      label: 'Action',
      width: 10,
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

export default function Categories() {

const [data, setData] = useState([]);  
const [pname,setpname] = useState('');
const [pcode,setpcode] = useState('');
const [cfname,setcfname] = useState('');
const [clname,setclname] = useState('');
const [pemail,setpemail] = useState('');
const [pphone,setpphone] = useState('');
const [pmobile,setpmobile] = useState('');
const [pfax,setpfax] = useState('');
const [paddress_line1,setpaddress_line1] = useState('');
const [paddress_line2,setpaddress_line2] = useState('');
const [pcity,setpcity] = useState('');
const [pzip,setpzip] = useState('');
const [pstate,setpstate] = useState('');
const [pcountry,setpcountry] = useState('');
const [pwebsite,setpwebsite] = useState('');
console.log(pname);

function addpartner(e)
    {
      e.preventDefault();
      const datas={
        pname,pcode,cfname,clname,pemail,pphone,pmobile,pfax,paddress_line1,paddress_line2,pcity,pzip,pstate,pcountry,pwebsite
      };
      Axios.post(`http://127.0.0.1:8000/api/getdata`,datas).then(
        (res) => {
          alert("addpartner Successfully Added",res);         
          // window.location.href="/addPartnernew";
        }).catch(err => {
          alert("Does not allowed duplicate value",err.message);
        })
    }



useEffect(() =>{
 
  const GetData = async () => {    
    const result = await Axios('http://127.0.0.1:8000/api/allpartner');      
    setData(result.data);}   
    GetData();
     },[]);
console.log(data);





const removeCategory = async (id) => {
  try {
    const res = await Axios.delete(`http://127.0.0.1:8000/api/allpartnerdelete/${id}`)
    console.log('Item successfully deleted : ',res);
    window.location.href="/allpartner";
  } catch (error) {
    alert(error)
  }
}





  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   

    const [selectionModel, setSelectionModel] = useState([]);
    const [page,setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    const [orderdirection, setorderdirection] = useState('asc');
    const [valuetoorderby, setvaluetoorderby] = useState('id');
    const handlerequestsort = (event,property) =>{
      const isascending = (valuetoorderby === property && orderdirection === 'asc')
      setvaluetoorderby(property)
      setorderdirection(isascending ? 'desc' : 'asc')
    }

const createsorthandler = (property) => (event) =>{
    handlerequestsort(event,property)
  }

function descendingcomparator(a,b,orderby)
{
  if(b[orderby] < a[orderby])
  {
    return -1
  }
  if(b[orderby] > a[orderby])
  {
    return 1
  }
  return 0
}

function getcomparator(order,orderby)
{
  return order === "desc"
  ? (a,b) => descendingcomparator(a,b,orderby)
  : (a,b) => -descendingcomparator(a,b,orderby)
}


const sortrowinformation = (rowarray, comparator) => {
  const stabilizedrowarray = rowarray.map((el, index) => [el, index])
  stabilizedrowarray.sort((a,b) => {
    const order = comparator(a[0],b[0])
    if(order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedrowarray.map((el) => el[0])
}


const [selected, setSelected] = React.useState([]);
const isSelected = (name) => selected.indexOf(name) !== -1;

const handleSelectAllClick = (event) => {
  if (event.target.checked) {
    const newSelecteds = data.map((n) => n.name);
    setSelected(newSelecteds);
    return;
  }
  setSelected([]);
};

const handleClick = (event, name) => {
  const selectedIndex = selected.indexOf(name);
  let newSelected = [];

  if (selectedIndex === -1) {
    newSelected = newSelected.concat(selected, name);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(selected.slice(1));
  } else if (selectedIndex === selected.length - 1) {
    newSelected = newSelected.concat(selected.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      selected.slice(0, selectedIndex),
      selected.slice(selectedIndex + 1),
    );
  }

  setSelected(newSelected);
};


const [filteredResults, setFilteredResults] = useState([]);
const [searchInput, setSearchInput] = useState('');
const searchItems = (searchValue) => {
  setSearchInput(searchValue)
  if (searchInput !== '') {
      const filteredData = data.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
  }
  else{
      setFilteredResults(data)
  }
}

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;
 
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


  return (
    <Box sx={{minHeight:'800px'}}>
<Typography 
      variant="h5"
      component="div" 
      align="left" 
      display="block" 
      gutterBottom s
      x={{marginBottom:'10px'}}>
      All Partner
</Typography>

  <Breadcrumbs 
    aria-label="breadcrumb"
    sx={{marginBottom:'20px',
    fontSize:'15px'}} 
    separator={<NavigateNextIcon 
    fontSize="30px" />}
  >

  <Link
    sx={{ display: 'flex',
    fontSize:'14px', 
    alignItems: 'center'
    ,'&:hover': { color: '#0077ef' },
    textDecoration:'none' }}
    color="inherit"
    href="/"
  >
   Home
  </Link>

  <Link
    sx={{ display: 'flex',
    fontSize:'14px', 
    alignItems: 'center',
    '&:hover': { color: '#0077ef' },
    textDecoration:'none' }}
    color="inherit"
  >
   Partners
  </Link>

  <Typography
    sx={{ display: 'flex', 
    alignItems: 'center',
    fontSize:'14px',
    color: '#0077ef' }}
    color="text.primary"
  >
    All Partners
  </Typography>
</Breadcrumbs>

<Grid container spacing={3}>
  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
  <Box>
      <Main>
           <Box>
              <Typography 
                sx={{ marginTop:'20px',
                background:'#00bcd4', 
                width: 'max-content',
                borderTopRightRadius:'5px', 
                borderTopLeftRadius:'5px',
                height: '26px'
                ,color:'white',
                padding:'2px 10px'}}>
                  Partner Details
              </Typography>
           </Box>
        
        <Editicon >
        <Button onClick={handleClickOpen}
              size="small"
              href="#outlined-buttons"
              sx={{textTransform:'capitalize',
              color:'#94979f',
              borderColor:'#f1f5f8',
              fontWeight:'400',
              padding:'3px',
              '&:hover': {color:'#0077ef', },
              }}>
            <AddCircleOutlinedIcon  />
            Add New
          </Button>
        </Editicon>
      </Main> 

   <Paper 
      sx={{ width: '100%',
      boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',
      padding:'15px'}}>
    <Box
    sx={{textAlign:"right"}}
    >
  <TextField 
      id="outlined-textarea"
      placeholder="Search"
      multiline
      onChange={(e) => searchItems(e.target.value)}
      InputProps={{
      startAdornment: <InputAdornment position="start">
      <SearchIcon />
      </InputAdornment>,
      }} 
      sx={{width:'20%',margin:'10px 0px',
      ".MuiOutlinedInput-root": {
      padding: "7px",
      ".MuiOutlinedInput-notchedOutline":{
        borderColor:'#e6e6e6'
        },
      },
      ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
      borderColor:'#0077ef'
      },
     
      }}
   />  
</Box>


<TableContainer >
<Table stickyHeader aria-label="sticky table" >
  <TableHead  
  valuetoorderby = {valuetoorderby}
  orderdirection = {orderdirection}
  handlerequestsort = {handlerequestsort}
  >
  <TableRow >

   <TableCell padding="checkbox">
      <EnhancedTableHead
        numSelected={selected.length}
        onSelectAllClick={handleSelectAllClick}
        rowCount={data.length}
      />
    </TableCell>

        {columns.map((column) => (
        <TableCell
        key={column.id}
        align={column.align}
        style={{ top: 0, minWidth: column.minWidth }}>

        <TableSortLabel  className={`arrows${column.id}`}
        active = {true}
        direction = {valuetoorderby === column.id ? orderdirection : 'asc'}
        onClick = {createsorthandler(column.id)}
        sx = {
        {
        '.css-1vweko9-MuiSvgIcon-root-MuiTableSortLabel-icon': {
        fill: '#75889d',
        },              
        '.css-3l415a-MuiSvgIcon-root-MuiTableSortLabel-icon': {
        fill: 'black',
        },
        '.arrowsaction':{
        display: 'none'
        }
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
 

  {
  searchInput.length > 1 ? (
    filteredResults.map((row, index) => {  

      const isItemSelected = isSelected(row.name);
            const labelId = `enhanced-table-checkbox-${index}`;

        return (  
     <TableRow  options={{
      rowStyle: {
        backgroundColor: '#EEE',
      }
    }}
    onClick={(event) => handleClick(event, row.name)}
    onSelectionModelChange={setSelectionModel}
    key={index} >  

        <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </TableCell>

          <TableCell component="th" scope="row">   
            1  
          </TableCell>  

          <TableCell >Karnan</TableCell>  

          {/* <TableCell >{row.image}</TableCell>   */}

          <TableCell >Karnan</TableCell>  

          <TableCell >Karnan</TableCell>  

          <TableCell >Karnan</TableCell>  

          <TableCell >01</TableCell>  

          <TableCell >
          <IconButton aria-label="edit" component="a" href={`addpartner/`}>
          <VisibilityOutlinedIcon sx={{color:'#1878f3'}}/>
          </IconButton>
          <IconButton aria-label="delete" >
          <DeleteOutlinedIcon sx={{color:'#f3425f'}}/>
          </IconButton>
            </TableCell>  

        </TableRow>  
    );  
 })) :
  sortrowinformation(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data, getcomparator(orderdirection, valuetoorderby))
  .map((row, index) => {  

            const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

              return (  
           <TableRow  options={{
            rowStyle: {
              backgroundColor: '#EEE',
            }
          }}
          onClick={(event) => handleClick(event, row.id)}
          onSelectionModelChange={setSelectionModel}
          key={index} >  

              <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>

                <TableCell component="th" scope="row">   
                 
                 {row.id}
                </TableCell>  

                <TableCell >  {row.partner_name}</TableCell>  

                {/* <TableCell >{row.image}</TableCell>   */}

                <TableCell >{row.partner_code}</TableCell>  

                <TableCell >{row.contact_fname}</TableCell>  

                <TableCell >{row.email}</TableCell>  

                <TableCell >{row.country}</TableCell>  

                <TableCell >
                <IconButton aria-label="edit" component="a" href={`addpartner/${row.id}`}>
                <EditOutlinedIcon sx={{color:'#1878f3'}}/>
                </IconButton>
                <IconButton aria-label="delete"  onClick={() => removeCategory(row.id)}>
                <DeleteOutlinedIcon sx={{color:'#f3425f'}}/>
                </IconButton>
                  </TableCell>  

              </TableRow>  
          );  
       })}  
          </TableBody>
</Table>
</TableContainer>
<TablePagination
rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
colSpan={3}
count={data.length}
rowsPerPage={rowsPerPage}
page={page}

SelectProps={{
  inputProps: {
    'aria-label': 'rows per page',
  },
  native: true,
}}
labelRowsPerPage={'Rows :'}
sx={{width:"100vw",border:'none',
  ".MuiTablePagination-toolbar": {
    backgroundColor: "#f2f6f9",   
    padding:'0'
  },
  ".MuiTablePagination-spacer":{

   flex:'0.018'
  },
  ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
    fontWeight: "500",
    color: "black"
  },
  ".MuiTablePagination-displayedRows": {
    fontWeight: "500",
    color: "black",
    display:'flex',
    flex:'1',
    justifyContent:"flex-end",
  }

}}
onPageChange={handleChangePage}
onRowsPerPageChange={handleChangeRowsPerPage}
/>

</Paper>
      </Box>
    </Grid>
    </Grid>


    <div>
  {/* <Button variant="outlined" onClick={handleClickOpen}>
    Open form dialog
  </Button> */}

  <Dialog open={open} onClose={handleClose}  sx={{
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      width: "100%",
      maxWidth: "700px",  // Set your wid]th here
    },
  },
}}>



<Box> 
  <DialogTitle sx={{marginLeft:'267px'}}>Add Partners</DialogTitle>  
  <form onSubmit={addpartner}>  
    <DialogContent>
       <DialogContentText>
       
          <Grid xs={12}>
          
             <Grid xs={12}>
                <Typography 
                      sx={{ borderBottom: "1px solid #efe9e9",
                      padding:'2px',
                      fontSize:'14px',
                      fontWeight:'500',
                      color:'black'}}>Contact
                   </Typography>

                <Grid sx={{padding:'5px'}}>
                     <Grid xs={12} sx={{display:'flex',marginTop:'12px'}} >
                           <Grid xs={12}>
                              <TextField fullWidth
                                    label="Partner Name/Company"
                                    id="outlined-textarea"
                                    InputProps={{ style: { fontSize: 14 ,} }}
                                    InputLabelProps={{ style: { fontSize: 14} }}
                                    size="small"
                                    value={pname}
                                    required
                                    onChange={(e) => setpname(e.target.value)}
                                   sx={{
                                    ".MuiInputLabel-root":
                                    {
                                      color:'#888888'
                                    },
                                    ".MuiInputLabel-root.Mui-focused":
                                    {
                                      color:'#0077ef !important'
                                    },
                                
                                    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                      borderColor:'#0077ef'
                                     },
                                     '& .MuiOutlinedInput-root': {
                                      '& fieldset': {
                                        borderColor: '#e6e6e6',
                                      },
                                    },
                                   }} 
                                    />
                             </Grid>

                            <Grid  xs={12}  sx={{marginLeft:'10px'}}>
                                  <TextField fullWidth
                                    label="Partner Code"
                                    id="outlined-size-small"
                                    size="small"
                                    InputProps={{ style: { fontSize: 14 } }}
                                    InputLabelProps={{ style: { fontSize: 14} }}
                                    value={pcode}
                                    required
                                    onChange={(e) => setpcode(e.target.value)}
                                    sx={{
                                      ".MuiInputLabel-root":
                                      {
                                        color:'#888888'
                                      },
                                      ".MuiInputLabel-root.Mui-focused":
                                      {
                                        color:'#0077ef !important'
                                      },
                                      ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                        borderColor:'#0077ef'
                                       },
                                       '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                          borderColor: '#e6e6e6',
                                        },
                                      },
                                     }} 
                                    />
                              </Grid>
                        </Grid>

                        <Box sx={{display:'flex',marginTop:'12px'}} >
                                <Grid  xs={12} >
                                  <TextField fullWidth
                                      label="Contact First Name"
                                      id="outlined-size-small"
                                      size="small"
                                      required
                                      InputProps={{ style: { fontSize: 14 } }}
                                      InputLabelProps={{ style: { fontSize: 14 } }}
                                      sx={{
                                        ".MuiInputLabel-root":
                                        {
                                          color:'#888888'
                                        },
                                        ".MuiInputLabel-root.Mui-focused":
                                        {
                                          color:'#0077ef !important'
                                        },
                                        ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                          borderColor:'#0077ef'
                                         },
                                         '& .MuiOutlinedInput-root': {
                                          '& fieldset': {
                                            borderColor: '#e6e6e6',
                                          },
                                        },
                                       }} 
                                      value={cfname}  
                                      onChange={(e) => setcfname(e.target.value)}
                                      />
                                </Grid>

                                <Grid  xs={12}  sx={{marginLeft:'10px'}}>
                                    <TextField fullWidth
                                      label="Contact Last Name"
                                      id="outlined-size-small"
                                      size="small"
                                      InputProps={{ style: { fontSize: 14} }}
                                      InputLabelProps={{ style: { fontSize: 14 } }}
                                      required
                                      sx={{
                                        ".MuiInputLabel-root":
                                        {
                                          color:'#888888'
                                        },
                                        ".MuiInputLabel-root.Mui-focused":
                                        {
                                          color:'#0077ef !important'
                                        },
                                    
                                        ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                          borderColor:'#0077ef'
                                         },
                                         '& .MuiOutlinedInput-root': {
                                          '& fieldset': {
                                            borderColor: '#e6e6e6',
                                          },
                                        },
                                       }} 
                                      value={clname}
                                      onChange={(e) => setclname(e.target.value)}
                                      />
                                  </Grid>
                         </Box>

                                    <TextField  fullWidth 
                                        label="Email"
                                        id="outlined-size-small"
                                        size="small"
                                        InputProps={{ style: { fontSize: 14 } }}
                                        InputLabelProps={{ style: { fontSize: 14 } }}
                                        value={pemail}
                                        onChange={(e) => setpemail(e.target.value)}
                                        required
                                        sx={{ marginTop:'12px',
                                          ".MuiInputLabel-root":
                                          {
                                            color:'#888888'
                                          },
                                          ".MuiInputLabel-root.Mui-focused":
                                          {
                                            color:'#0077ef !important'
                                          },
                                          ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                            borderColor:'#0077ef'
                                           },
                                           '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                              borderColor: '#e6e6e6',
                                            },
                                          },
                                         }} 
                                     /> 

                          <Box sx={{display:'flex',marginTop:'12px'}} >
                                <Grid  xs={12} >
                                    <TextField fullWidth
                                      label="Phone"
                                      id="outlined-size-small"
                                      size="small"
                                      InputProps={{ style: { fontSize: 14 } }}
                                      InputLabelProps={{ style: { fontSize: 14 } }}
                                      value={pphone}
                                      onChange={(e) => setpphone(e.target.value)}
                                      required
                                      sx={{
                                        ".MuiInputLabel-root":
                                        {
                                          color:'#888888'
                                        },
                                        ".MuiInputLabel-root.Mui-focused":
                                        {
                                          color:'#0077ef !important'
                                        },
                                    
                                        ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                          borderColor:'#0077ef'
                                         },
                                         '& .MuiOutlinedInput-root': {
                                          '& fieldset': {
                                            borderColor: '#e6e6e6',
                                          },
                                        },
                                       }}
                                      />
                                 </Grid>

                                <Grid  xs={12}  sx={{marginLeft:'10px'}}>
                                    <TextField fullWidth
                                      label="Mobile"
                                      id="outlined-size-small"
                                      size="small"
                                      InputProps={{ style: { fontSize: 14 } }}
                                      InputLabelProps={{ style: { fontSize: 14 } }}
                                      value={pmobile}
                                      onChange={(e) => setpmobile(e.target.value)}
                                      required
                                      sx={{
                                        ".MuiInputLabel-root":
                                        {
                                          color:'#888888'
                                        },
                                        ".MuiInputLabel-root.Mui-focused":
                                        {
                                          color:'#0077ef !important'
                                        },
                                    
                                        ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                          borderColor:'#0077ef'
                                         },
                                         '& .MuiOutlinedInput-root': {
                                          '& fieldset': {
                                            borderColor: '#e6e6e6',
                                          },
                                        },
                                       }}
                                      />
                                  </Grid>
                           </Box>

                                  <TextField
                                  fullWidth 
                                  
                                  label="Fax"
                                  id="outlined-size-small"
                                  size="small"
                                  InputProps={{ style: { fontSize: 14 } }}
                                  InputLabelProps={{ style: { fontSize: 14 } }}
                                  value={pfax}
                                  onChange={(e) => setpfax(e.target.value)}
                                  required
                                  sx={{marginTop:'12px',
                                    ".MuiInputLabel-root":
                                    {
                                      color:'#888888'
                                    },
                                    ".MuiInputLabel-root.Mui-focused":
                                    {
                                      color:'#0077ef !important'
                                    },
                                
                                    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                      borderColor:'#0077ef'
                                     },
                                     '& .MuiOutlinedInput-root': {
                                      '& fieldset': {
                                        borderColor: '#e6e6e6',
                                      },
                                    },
                                   }}
                                  /> 
                   </Grid>
           </Grid>
                
                <Grid  xs={12}>
                      <Typography 
                        sx={{ borderBottom: "1px solid #efe9e9",
                        padding:'2px',fontSize:'14px',
                        fontWeight:'500',color:'black',
                        marginTop:'12px'}}>Address
                     </Typography>

               <Grid sx={{padding:'10px'}}>
                      <TextField fullWidth 
                        label="Address Line 1"
                        id="outlined-size-small"
                        size="small"
                        InputProps={{ style: { fontSize: 14 } }}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        value={paddress_line1}
                        onChange={(e) => setpaddress_line1(e.target.value)}
                        required
                        sx={{
                          ".MuiInputLabel-root":
                          {
                            color:'#888888'
                          },
                          ".MuiInputLabel-root.Mui-focused":
                          {
                            color:'#0077ef !important'
                          },
                      
                          ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                            borderColor:'#0077ef'
                           },
                           '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#e6e6e6',
                            },
                          },
                         }}
                      /> 

                        <TextField 
                        fullWidth
                        
                        label="Address Line 2"
                        id="outlined-size-small"
                        size="small"
                        InputProps={{ style: { fontSize: 14 } }}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        value={paddress_line2}
                        onChange={(e) => setpaddress_line2(e.target.value)}
                        required
                        sx={{ marginTop:'12px',
                          ".MuiInputLabel-root":
                          {
                            color:'#888888'
                          },
                      
                          ".MuiInputLabel-root.Mui-focused":
                          {
                            color:'#0077ef !important'
                          },

                          ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                            borderColor:'#0077ef'
                           },
                           '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#e6e6e6',
                            },
                          },
                         }}
                        /> 


              <Grid sx={{display:'flex',marginTop:'12px'}} >
                   <Grid  xs={12}>
                      <TextField fullWidth
                        label="City"
                        id="outlined-size-small"
                        size="small"
                        InputProps={{ style: { fontSize: 14 } }}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        value={pcity}
                        onChange={(e) => setpcity(e.target.value)}
                        required
                        sx={{
                          ".MuiInputLabel-root":
                          {
                            color:'#888888'
                          },
                          ".MuiInputLabel-root.Mui-focused":
                          {
                            color:'#0077ef !important'
                          },

                      
                          ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                            borderColor:'#0077ef'
                           },
                           '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#e6e6e6',
                            },
                          },
                         }}
                        />
                    </Grid>

                     <Grid  xs={12}  
                        sx={{marginLeft:'10px'}}>
                        <TextField fullWidth
                          label="Zip"
                          id="outlined-size-small"
                          size="small"
                          InputProps={{ style: { fontSize: 14 } }}
                          InputLabelProps={{ style: { fontSize: 14 } }}
                          value={pzip}
                          onChange={(e) => setpzip(e.target.value)}
                          required
                          sx={{
                            ".MuiInputLabel-root":
                            {
                              color:'#888888'
                            },

                             ".MuiInputLabel-root.Mui-focused":
                                    {
                                      color:'#0077ef !important'
                                    },

                            ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                              borderColor:'#0077ef'
                             },
                             '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: '#e6e6e6',
                              },
                            },
                           }}
                          />
                         
                      </Grid>
                 </Grid>

               <Grid sx={{display:'flex',marginTop:'12px'}} >
                   <Grid  xs={12}>
                      <TextField fullWidth
                        label="State"
                        id="outlined-size-small"
                        size="small"
                        InputProps={{ style: { fontSize: 14 } }}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        value={pstate}
                        onChange={(e) => setpstate(e.target.value)}
                        required
                        sx={{
                          ".MuiInputLabel-root":
                          {
                            color:'#888888'
                          },
                          ".MuiInputLabel-root.Mui-focused":
                          {
                            color:'#0077ef !important'
                          },
                      
                          ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                            borderColor:'#0077ef'
                           },
                           '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#e6e6e6',
                            },
                          },
                         }}
                        />
                    </Grid>

                       <Grid  xs={12}  sx={{marginLeft:'10px'}}>
                          <TextField fullWidth
                            label="Country"
                            id="outlined-size-small"
                            size="small"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            value={pcountry}
                            onChange={(e) => setpcountry(e.target.value)}
                            required
                            sx={{
                              ".MuiInputLabel-root":
                              {
                                color:'#888888'
                              },
                              ".MuiInputLabel-root.Mui-focused":
                              {
                                color:'#0077ef !important'
                              },

                              ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                borderColor:'#0077ef'
                               },
                               '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: '#e6e6e6',
                                },
                              },
                             }}
                            />
                      </Grid>
                 </Grid>
                            <TextField 
                              fullWidth 
                              
                                label="Website"
                                id="outlined-size-small"
                                size="small"
                                InputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                value={pwebsite}
                                onChange={(e) => setpwebsite(e.target.value)}
                                required
                                sx={{marginTop:'12px',
                                  ".MuiInputLabel-root":
                                  {
                                    color:'#888888'
                                  },
                                  ".MuiInputLabel-root.Mui-focused":
                                  {
                                    color:'#0077ef !important'
                                  },

                              
                                  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                    borderColor:'#0077ef'
                                   },
                                   '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                      borderColor: '#e6e6e6',
                                    },
                                  },
                                 }}
                            /> 
            </Grid>
        </Grid>
  </Grid>
              <Grid xs={12} sx={{display:'flex'}}>
                  <Grid xs={10}>

                    </Grid> 
                    <Grid xs={2} 
                          sx={{display:'flex',
                          justifyContent:'space-evenly'}}> 
                      </Grid>
                </Grid> 

                 {/* </Item>     */}
                
  </DialogContentText>
  </DialogContent>
      <DialogActions sx={{paddingRight:'251px',paddingBottom:'20px',textAlign:'center'}}>
              <Button variant="outlined"  sx={{textTransform:'capitalize',backgroundColor:'#0077ef',fontSize:'14px',padding:'7px 9px', color:'white','&:hover': {backgroundColor: '#fff',color:'#0077ef' },}} type="submit">
                    Create
                </Button>
              <Button variant="outlined"   sx={{textTransform:'capitalize', backgroundColor:'#f3425f',borderColor:'#f3425f',padding:'7px 9px',fontSize:'14px', color:'white','&:hover': {backgroundColor: '#fff',color:'#f3425f',borderColor:'#f3425f', },}}>
                    cancel
              </Button>
           </DialogActions>
           </form>
        </Box>
      </Dialog>
    </div>
    </Box>

    
  )
}


