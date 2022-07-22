import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import {Box,Typography,Grid,FormControl,InputLabel,Select,MenuItem,Button,Breadcrumbs,Link} from '@mui/material';
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
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import TextField1 from '@mui/material/TextField';


const TableCell = styled(Tablecell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f2f6f9',
    color: theme.palette.common.black,
    padding: '5px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color:'#444444'
  },
  padding: '10px'
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

  const Editicon = styled(Box)(({theme})=>({
    // marginTop: '15px',
    // marginRight: theme.spacing(1),
}));

const Main = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent:'space-between',
    spacing: theme.spacing(5),
}));


const TextField = styled(TextField1)({
  ".MuiInputLabel-root":
  {
    color:'#888888',
  },
  ".MuiInputLabel-root.Mui-focused":
  {
    color:'#0077ef',
  }, 
  // ".MuiInputBase-root": { border: "1px solid green", },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e6e6e6',
      
    },
 
  },
           

});



const columns = [
    { id: 'id', label: 'ID', minWidth: 50 },

    { id: 'Course_Name', label: 'Course_Name', minWidth: 100 },

    { id: 'Student_Name',
      label: 'Student_Name',
      minWidth: 100,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },

    { id: 'Partner_Name',
      label: 'Partner_Name',
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
        id: 'Status',
        label: 'Status',
        minWidth: 50,
        align: 'left',
        format: (value) => value.toFixed(2),
      },
 
      {
        id: 'Price',
        label: 'Price',
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

export default function Categories() {

    const handleChange = (event) => { setcparent(event.target.value);  };
    const [data, setData] = useState([]); 
    const [category, setcategory] = useState([]); 
    const [cname, setcname] = useState(''); 
    const [cslug, setcslug] = useState(''); 
    const [cparent, setcparent] = useState('');
    const [cdescription, setcdescription] = useState(''); 
    const [selectionModel, setSelectionModel] = useState([]);

function handleinput(str)
    {
  str = str.replace(/[`~!@#$%^&*()_\-+=[\]{};:'"\\|/,.<>?\s]/g, ' ').toLowerCase();  
  
  str = str.replace(/^\s+|\s+$/gm,''); // trim spaces at start and end of string
    
  str = str.replace(/\s+/g, '-');   // replace space with dash/hyphen
  setcslug(str);
    }
   
// function createcategory(e)
//     {
//       e.preventDefault();
//       const postcategory={
//         cname,cslug,cparent,cdescription
//       };
//       Axios.post(`http://127.0.0.1:8000/api/addcategories`,postcategory).then(
//         (res) => {
//           alert("Category Successfully Added",res);         
//           window.location.href="/Categories";
//         }).catch(err => {
//           alert("Does not allowed duplicate value",err.message);
//         })
//     }
   
// useEffect(() => {      
//               const GetData = async () => {    
//                 const result = await Axios('http://127.0.0.1:8000/api/allcategories');      
//                 setData(result.data);}   
//                 GetData();              
//               const parentcategory = async () => {    
//                 const result = await Axios('http://127.0.0.1:8000/api/parentcategory');      
//                 setcategory(result.data);}   
//                 parentcategory(); 
//       }, []);
    
// const removeCategory = async (id) => {
//         try {
//           const res = await Axios.delete(`http://127.0.0.1:8000/api/deletecategories/${id}`)
//           console.log('Item successfully deleted : ',res);
//           window.location.href="/Categories";
//         } catch (error) {
//           alert(error)
//         }
//       }

    
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


// const onDelete = () => {
//   setData((data) => data.filter((r) => !selectionModel.includes(r.id)));
// };



  return (
    <Box sx={{minHeight:'800px'}}>

<Typography variant="h5" component="div" align="left" display="block" gutterBottom sx={{marginBottom:'10px'}}>
        All Entrollments
        </Typography>

      <Breadcrumbs aria-label="breadcrumb" sx={{marginBottom:'20px',fontSize:'15px'}} separator={<NavigateNextIcon fontSize="30px" />}>
        <Link
          sx={{ display: 'flex',fontSize:'14px', alignItems: 'center','&:hover': { color: '#0077ef' },textDecoration:'none' }}
          color="inherit"
          href="/"
        >
          {/* <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
          Home
        </Link>
        <Link
          sx={{ display: 'flex',fontSize:'14px', alignItems: 'center','&:hover': { color: '#0077ef' },textDecoration:'none' }}
          color="inherit"
        >
          {/* <MenuBook sx={{ mr: 0.5 }} fontSize="inherit" /> */}
          Entrollments
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center',fontSize:'14px',color: '#0077ef' }}
          color="text.primary"
        >
          {/* <CategoryIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
          All Entrollments
        </Typography>
      </Breadcrumbs>


    <Grid container spacing={3}>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
    <Box>
        {/* <Typography variant="h5" component="div" align="left" display="block" gutterBottom sx={{marginBottom:'20px'}}>
        All Categories
        </Typography> */}

               <Main>
                  <Box>
                        <Typography sx={{ marginTop:'20px',background:'#00bcd4', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>All Entrollment</Typography>
                  </Box>
                <Editicon>
                {/* <Typography sx={{fontSize:'14px', color:'#1878f3'}} > 
                 <AddOutlinedIcon sx={{color:'#1878f3',fontSize:'23px'}} />&nbsp;Add 
                    </Typography> */}
                <Button 
              size="small"
              href="#outlined-buttons"
              sx={{textTransform:'capitalize',
              color:'#94979f',
              borderColor:'#f1f5f8',
              fontWeight:'400',
              padding:'3px',
              '&:hover': {color:'#0077ef', },
              }}>
            <AddCircleOutlinedIcon />
            Add New
          </Button>
                </Editicon>
            </Main> 
<Paper sx={{ width: '100%',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',padding:'15px'}}>
{/* <Button variant="contained" color="primary" onClick={onDelete}>
        Delete selected rows
      </Button> */}
  <Box sx={{textAlign:"right"}}>
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
{/* sx={{ maxHeight: 600}} */}
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
              // order={order}
              // orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              // onRequestSort={handleRequestSort}
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

  <TableRow   >  

        <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                  />
                </TableCell>

          <TableCell component="th" scope="row">   
            1  
          </TableCell>  

          <TableCell >MS-700: Managing Microsoft Teams</TableCell>  
          
          {/* <TableCell >{row.image}</TableCell>   */}

          <TableCell >Student_name</TableCell>  

          <TableCell >Logical Operations</TableCell>  

          <TableCell >techsharpa@gmail.com</TableCell>  

           <TableCell >
               <Button variant="contained" size='small'   sx={{textTransform:'capitalize',borderRadius:'0px',boxShadow:'none',width:'80%', fontSize:'14px',backgroundColor:'#5ec797', color:'white','&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',color:'#0077ef',boxShadow:'none' },}}> 
                   Confirmed
                   </Button>
             </TableCell>  
          <TableCell >$2,495</TableCell>  

          <TableCell >
          <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <VisibilityOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton>

          {/* <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
          <EditOutlinedIcon sx={{color:'#1878f3'}}/>
          </IconButton> */}
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

  <TableCell >MS-500: Microsoft 365 Security Administration</TableCell>  
  
  {/* <TableCell >{row.image}</TableCell>   */}

  <TableCell >Student_name</TableCell>  

  <TableCell >TechSherpas</TableCell>  

  <TableCell >logical@gmail.com</TableCell>  

  <TableCell >
               <Button variant="contained" size='small'   sx={{fontSize:'14px',textTransform:'capitalize',borderRadius:'0px',boxShadow:'none',width:'80%',background:'#f2c354',color:'black',borderRadius:'0px', color:'white','&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',color:'#0077ef',boxShadow:'none' },}}> 
                   pending
                   </Button>
             </TableCell>  
          <TableCell >$2,495</TableCell>  

  <TableCell >
  <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <VisibilityOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton>

  {/* <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <EditOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton> */}
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

  <TableCell >Automating Administration with Windows PowerShell</TableCell>  
  
  {/* <TableCell >{row.image}</TableCell>   */}

  <TableCell >Student_name</TableCell>  

  <TableCell >Logical Operations	</TableCell>  

  <TableCell >Test@gmailcom</TableCell>  

  <TableCell >
  <Button variant="contained" size='small'   sx={{textTransform:'capitalize',borderRadius:'0px',boxShadow:'none',width:'80%', fontSize:'14px',backgroundColor:'#5ec797', color:'white','&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',color:'#0077ef',boxShadow:'none' },}}> 
                   Confirmed
                   </Button>
             </TableCell>  
          <TableCell >$2,495</TableCell>  

  <TableCell >
  <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <VisibilityOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton>
{/* 
  <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <EditOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton> */}
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

  <TableCell >Automating Administration with Windows PowerShell </TableCell>  
  
  {/* <TableCell >{row.image}</TableCell>   */}

  <TableCell >Student_name</TableCell>  

  <TableCell >Google</TableCell>  

  <TableCell >Google@gmail.com</TableCell>  

  <TableCell >
               <Button variant="contained" size='small' sx={{fontSize:'14px',textTransform:'capitalize',background:'#1878f3',color:'#fff',borderRadius:'0px',boxShadow:'none',width:'80%', color:'white','&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',color:'#0077ef',boxShadow:'none' },}}> 
                  Processing
                   </Button>
             </TableCell>  
          <TableCell >$2,495</TableCell>  

  <TableCell >
  <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <VisibilityOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton>

  {/* <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <EditOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton> */}
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

  <TableCell >Yahoo</TableCell>  

  <TableCell >Yahoo </TableCell>  

  <TableCell >Yahoo@gmail.com</TableCell>  

  <TableCell >
               <Button variant="contained" size='small'    sx={{fontSize:'14px',textTransform:'capitalize',background:'#f48956',color:'#fff',borderRadius:'0px',boxShadow:'none',width:'80%', color:'white','&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',color:'#0077ef',boxShadow:'none' },}}> 
                  on-hold
                   </Button>
             </TableCell>  
          <TableCell >$2,495</TableCell>  

  <TableCell >
  <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <VisibilityOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton>
  {/* <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <EditOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton> */}
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

  <TableCell >Bing</TableCell>  

  <TableCell >Bing</TableCell>  

  <TableCell >Bing@gmail.com</TableCell>  

  <TableCell >
               <Button variant="contained" size='small'   sx={{fontSize:'14px',textTransform:'capitalize',background:'#f3425f',color:'#fff',borderRadius:'0px',boxShadow:'none',width:'80%', color:'white','&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',color:'#0077ef',boxShadow:'none' },}}> 
                  Cancelled 
                   </Button>
             </TableCell>  
          <TableCell >$2,495</TableCell>    

  <TableCell >
  <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <VisibilityOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton>
  {/* <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
  <EditOutlinedIcon sx={{color:'#1878f3'}}/>
  </IconButton> */}
  <IconButton aria-label="delete" >
  <DeleteOutlinedIcon sx={{color:'#f3425f'}}/>
  </IconButton>
    </TableCell>  

</TableRow> 

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
          <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
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
                <IconButton aria-label="edit" component="a" href={`Categoriesedit/`}>
                <EditOutlinedIcon sx={{color:'#1878f3'}}/>
                </IconButton>
                <IconButton aria-label="delete">
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

  
    </Box>
  )
}


