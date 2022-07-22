import  React,{ useState } from 'react';
import { styled } from '@mui/material/styles';
import {Paper,Card,CardMedia,Grid,Container,IconButton,Box,Divider,MenuItem,Select,InputLabel,FormControl,Button,Typography} from '@mui/material';
import Link from '@mui/material/Link';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import TextField1 from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Switch from '@mui/material/Switch';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Tablecell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Tablerow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Fab from '@mui/material/Fab';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';


const IOSSwitch = styled((props) => (
<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
width: 42,
height: 26,
padding: 0,
'& .MuiSwitch-switchBase': {
padding: 0,
margin: 2,
transitionDuration: '300ms',
'&.Mui-checked': {
transform: 'translateX(16px)',
color: '#fff',
'& + .MuiSwitch-track': {
backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
opacity: 1,
border: 0,
},
'&.Mui-disabled + .MuiSwitch-track': {
opacity: 0.5,
},
},
'&.Mui-focusVisible .MuiSwitch-thumb': {
color: '#33cf4d',
border: '6px solid #fff',
},
'&.Mui-disabled .MuiSwitch-thumb': {
color:
theme.palette.mode === 'light'
  ? theme.palette.grey[100]
  : theme.palette.grey[600],
},
'&.Mui-disabled + .MuiSwitch-track': {
opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
},
},
'& .MuiSwitch-thumb': {
boxSizing: 'border-box',
width: 22,
height: 22,
},
'& .MuiSwitch-track': {
borderRadius: 26 / 2,
backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
opacity: 1,
transition: theme.transitions.create(['background-color'], {
duration: 500,
}),
},
}));




const Main = styled(Box)(({theme})=>({
  display: 'flex',
  justifyContent:'space-between',
float: 'right',

}));


const Editicon = styled(Box)(({theme})=>({
  marginRight: theme.spacing(1),

}));

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



  const columns = [
  
      { id: 'Modules', label: 'Modules', minWidth: 500 },
  
      { id: 'Read',
      label: 'Read',
      minWidth: 200,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'Write',
    label: 'Write',
    minWidth: 200,
    align: 'left',
    format: (value) => value.toFixed(2),
  },

  {
    id: 'Create',
    label: 'Create',
    minWidth: 200,
    align: 'left',
    format: (value) => value.toFixed(2),
  },

      { id: 'Delete',label: 'Delete',minWidth: 200,align: 'left',
        format: (value) => value.toLocaleString('en-US'),
      },
  
    ];





const Items = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'left',
  color: theme.palette.text.secondary,
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

export default function AddCourse() {


  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
   const handleChange1= (event) => { setcparent(event.target.value);  };
    const [data, setData] = useState([]); 
    const [category, setcategory] = useState([]); 
    const [cname, setcname] = useState(''); 
    const [cslug, setcslug] = useState(''); 
    const [cparent, setcparent] = useState('');
    const [cdescription, setcdescription] = useState(''); 
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
<Box > 
     <Typography
        variant="h5"
        component="div" 
        align="left"
        display="block" 
        gutterBottom 
        sx={{marginBottom:'4px'}}>
        Users
    </Typography>

  {/* Breadcrumbs start  */}
    <Stack spacing={3} >
      <Breadcrumbs 
            aria-label="breadcrumb" 
            sx={{fontSize:'15px'}}
             separator={<NavigateNextIcon
             fontSize="30px" />}
            >

        <Link
          // underline="hover"
          sx={{ display: 'flex',
          fontSize:'14px',
          alignItems: 'center',
          '&:hover': { color: '#0077ef' },
          textDecoration:'none' }}
          color="inherit"
          href="/"
        >
        Home
        </Link>,


        <Typography
          sx={{ display: 'flex', 
          alignItems: 'center',
          fontSize:'14px' }}
          color="#0077ef"
        >
         Users
        </Typography>
      </Breadcrumbs>
    </Stack>
        {/* Breadcrumbs end  */}

        <Main>
           <Editicon  >
           {/* <Button variant="outlined" sx={{textTransform:'capitalize', color:'#00000099',}}   size="small">save</Button> */}
           <Button 
                    variant="outlined" 
                    // size="medium"  
                    sx={{textTransform:'capitalize', 
                    backgroundColor:'#0077ef',
                    fontSize:'14px',
                    padding:'6px 9px',
                    margin:'-7px',
                    color:'white',
                    '&:hover': {backgroundColor: '#5ec797',
                    color:'white',border:'#5ec797' },}}>
                    Save
                   </Button>
              
              {/* <CheckCircleOutlineOutlinedIcon sx={{color:' #00000099', '&:hover': {color:'#0077ef' },}} />   */}
              

           </Editicon>
        </Main> 
        <Typography 
            sx={{ marginTop:'20px', 
            background:'#00bcd4 ',
            width: 'max-content',
            borderTopRightRadius:'5px',
            borderTopLeftRadius:'5px',
            height: '26px',
            color:'#fff',
            padding:'2px 10px',
            boxShadow:'none !important'}}>
            User profile Image
         </Typography>
         
  <Grid spacing={2}>
  <Card 
        sx={{textAlign:'left',
        boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',
        marginBottom:'38px',
        padding:'19px 1px 19px 16px',
        color:'black',
        borderRadius:'0.25rempx'}}
        >
  <Grid xs={12} sx={{ display:'flex',backgroundColor:'#fff'}}>
    
  <Grid xs={3} sx={{padding:'5px'}}>
 
              <Box component="img" size='large' src={'https://images.unsplash.com/photo-1655184823940-6f83083b3266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} sx={{width:'100%',height:'90%',objectFit:'cover'}}/>
              

              <Button 
              size="small"
              href="#outlined-buttons"
              sx={{textTransform:'capitalize',
              color:'#94979f',
              marginLeft:'168px',
              borderColor:'#f1f5f8',
              fontWeight:'400',
              padding:'3px',
              '&:hover': {color:'#0077ef', },
              }}>
            <CameraAltOutlinedIcon />
           <Typography sx={{marginLeft:'2px',fontSize:'14px'}}> Edit</Typography>
          </Button>
              
              {/* <Fab  variant="contained"
            component="label"
            size='small'
            sx={{
             marginLeft:'173px',
            border:'1px solid #0077ef',
            marginBottom:'10px',
            borderColor:'#f1f5f8',
            boxShadow:'none',
            backgroundColor: '#f1f5f8',color:'#e0e0e0',
            '&:hover': {backgroundColor: '#fff',
            color:'#0077ef'
            }}}
            >   

            < CameraAltOutlinedIcon sx={{color:'#0000008a'}}/>
            <input
            type="file"
            hidden
            />
          </Fab> */}


          {/* </Card> */}
      {/* </Items> */}
</Grid> 

<Grid xs={0.02}></Grid>
        <Grid xs={8.98}>
                  <Grid xs={12} 
                    sx={{display:'flex',
                    background:'#f1f5f8',
                    margin:'5px 15px'}}
                  >
                  <Grid xs={6}>
                    <Typography
                    sx={{fontSize:'14px',
                    fontWeight:'500',
                    margin:'20px'}}
                    > 
                    User Contact
                    </Typography>
                  </Grid>

                  <Grid xs={6}>
                    <Typography 
                      sx={{fontSize:'14px',
                      fontWeight:'500',
                      margin:'20px'}}> 
                      User Address
                    </Typography>
                  </Grid>
                  
                 </Grid>      


                  
<Grid xs={12} 
  sx={{display:'flex'}}>
   <Grid xs={6}
     sx={{margin:'10px 15px'}}>
       <Grid xs={12} 
          sx={{display:'flex',marginTop:'12px'}} >
            <Grid xs={12}>
              <TextField fullWidth  
                sx={{  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                  borderColor:'#0077ef'
                  },}} 
                  label="Username"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="karnan"
                  InputProps={{ style: { fontSize: 14, } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                   />
            </Grid>

               <Grid  xs={12} 
                  sx={{marginLeft:'10px'}}>
                  <TextField fullWidth 
                    label="Role"
                    id="outlined-size-small"
                    size="small"
                    defaultValue="Software Engineer"
                    InputProps={{ style: { fontSize: 14 } }}
                    InputLabelProps={{ style: { fontSize: 14 } }}
                    sx={{fontSize:'14px',  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                      borderColor:'#0077ef'
                    },}}
                  />
                </Grid>
         </Grid>


           <Grid xs={12} 
            sx={{display:'flex',
            marginTop:'18px'}} 
            >
            <Grid xs={12}>
                <TextField fullWidth
                  label="First Name"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="Karnan"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px' ,".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   },}}
                  />
             </Grid>


              <Grid  xs={12}  
                sx={{marginLeft:'10px'}}>
                <TextField fullWidth
                  label=" Last Name"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="Ravichandran"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px',  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                  borderColor:'#0077ef'
                   },}}
                 />
                </Grid>
         </Grid>

         <TextField 
         fullWidth 
         sx={{marginTop:'12px',
         fontSize:'14px',
         marginTop:'18px' ,
         ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
          borderColor:'#0077ef'
         },}}
        label="Email"
        id="outlined-size-small"
        defaultValue="Karnan@gmail.com"
        InputProps={{ style: { fontSize: 14,color:'#444444' } }}
        InputLabelProps={{ style: { fontSize: 14 } }}
        size="small"
        />


         <Box sx={{display:'flex',marginTop:'18px'}} >
             <Grid  xs={12} >
                <TextField fullWidth
                  label="Phone"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="917-809-4514"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px', ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   }}}
                 />
              </Grid>

                <Grid  xs={12}  sx={{marginLeft:'10px'}}>
                <TextField fullWidth
                  label="Mobile"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="585-303-4570"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px', ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   }}}
                   />
                </Grid>
         </Box>


         <TextField fullWidth 
         sx={{marginTop:'18px',
         fontSize:'14px', 
         ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
           borderColor:'#0077ef'
               }}}
            label="Fax"
            id="outlined-size-small"
            size="small"
            defaultValue="Karnan@fax "
            InputProps={{ style: { fontSize: 14,color:'#444444' } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            
          />
       </Grid>

                
                 <Grid  xs={6} 
                 sx={{margin:'10px 15px'}}>
               <TextField fullWidth 
                  sx={{marginTop:'12px',
                  fontSize:'14px',
                  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                  borderColor:'#0077ef'
                  }}}
                  label="Address Line 1"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="154/3 North Foxrun DriveBron"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  
                />

                <TextField fullWidth 
                    sx={{marginTop:'18px',
                    fontSize:'14px',
                    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                    }}}
                  label="Address Line 2"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="154/3 North Foxrun DriveBron"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                />




              <Grid sx={{display:'flex',marginTop:'18px'}} >
                <Grid  xs={12}>
                 <TextField fullWidth   
                  label="City"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="Trichy"
                  sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   }}}
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                
                   />
              </Grid>

                <Grid  xs={12}  sx={{marginLeft:'10px'}}>
                 <TextField fullWidth
                  label="Zip"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="621703"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   }}}
                   />
                </Grid>
         </Grid>


         <Grid sx={{display:'flex',marginTop:'18px'}} >
                <Grid  xs={12}>
                <TextField fullWidth
                  label="State"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="Tamil Nadu"
                  InputProps={{ style: { fontSize: 14,color:'#444444 ' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   }}}
                   />
                </Grid>

                <Grid  xs={12}  sx={{marginLeft:'10px'}}>
                <TextField fullWidth
                  label="Country"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="India"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   }}}
                   />
                </Grid>
                
         </Grid>

            <TextField fullWidth 
                  sx={{marginTop:'18px',
                  fontSize:'14px',
                  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                   borderColor:'#0077ef'
                   }}}
                  label="Website"
                  id="outlined-size-small"
                  size="small"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  defaultValue="oddcounts.com"
                   />
             </Grid>
         </Grid>
                 <Grid xs={12} sx={{display:'flex'}}>
                 <Grid xs={11} ></Grid> 
                 <Grid xs={1} sx={{display:'flex'}}> 

                  {/* <Button fullWidth 
                    variant="outlined" 
                    size="large"  
                    sx={{textTransform:'capitalize', 
                    margin:'13px 15px',marginTop:'5px',
                    backgroundColor:'#0077ef',
                    fontSize:'14px',
                    color:'white',
                    '&:hover': {backgroundColor: '#fff',
                    color:'#0077ef' },}}>
                    Save
                   </Button> */}
                </Grid>
          </Grid> 
  {/* </Card> */}


</Grid></Grid>
</Card>

<Grid  xs={12}> 
    <Typography 
          sx={{ marginTop:'20px',
          background:'#00bcd4',
          width: 'max-content',
          borderTopRightRadius:'5px', 
          borderTopLeftRadius:'5px',
          height: '26px',
          color:'white',
          padding:'2px 10px'}}>
          Add New Password
      </Typography>

        <Card 
        sx={{textAlign:'left',
        boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',
        marginBottom:'38px',
        padding:'13px',
        color:'black',
        borderRadius:'0.25rempx'}}
        >

 <Grid xs={12} sx={{display:'flex',marginTop:'1px'}} >
    <Grid xs={12}>
       <FormControl  size="small" fullWidth >
         <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            InputProps={{ style: { fontSize: 14,color:'#444444' } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
              sx={{fontSize:'14px',".MuiOutlinedInput-notchedOutline":{ borderColor:"#e6e6e6"},
              "&.MuiOutlinedInput-root.MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
              borderColor: "#0077ef",
              },
              }}
              endAdornment={
              <InputAdornment position="end">
              <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
              </InputAdornment>
              }
              label="Password"
              />
        </FormControl>
  </Grid>


<Grid  xs={12}  sx={{marginLeft:'30px',display:'flex',}} >
        <FormControl   size="small" fullWidth >
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
              id="outlined-adornment-password"

              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              InputProps={{ style: { fontSize: 14,color:'#444444' } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              sx={{fontSize:'14px',".MuiOutlinedInput-notchedOutline":{ borderColor:"#e6e6e6"},
              "&.MuiOutlinedInput-root.MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
              borderColor: "#0077ef",
              },
              }}
              endAdornment={
              <InputAdornment position="end">
              <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
              </InputAdornment>
              }
              label=" Confirm Password"
              />
          </FormControl>



  <Grid xs={1} >
        
           < Checkbox  sx={{float:'right',
                    
                   }} />
      
   </Grid>
 </Grid>          
</Grid>
  </Card>
</Grid>

<Grid xs={12}>
                 <Box>
                    <Typography 
                    sx={{ marginTop:'20px',
                    background:'#00bcd4',
                    width: 'max-content',
                    borderTopRightRadius:'5px',
                    borderTopLeftRadius:'5px',
                    height: '26px',
                    color:'white',
                    padding:'2px 10px'}}>User Access Permission
                    </Typography>
                  </Box>
                  <Paper 
                  sx={{ width: '100%',
                  boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',
                  padding:'15px'}}>
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
          {column.label}
          {/* </TableSortLabel> */}
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


          <TableCell >Location</TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

        
        </TableRow> 
        <TableRow   >  
</TableRow> 



<TableRow>  

        <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                  />
                </TableCell>


          <TableCell >Booking</TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

         
        </TableRow> 

        <TableRow>  

        <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                  />
                </TableCell>


          <TableCell >User Access</TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

         
        </TableRow> 

        <TableRow>  

        <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                  />
                </TableCell>


          <TableCell >Partner</TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

         
        </TableRow> 

        <TableRow>  

        <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                  />
                </TableCell>


          <TableCell >Gallery</TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

          <TableCell >  <IOSSwitch /></TableCell>  

         
        </TableRow> 
        <TableRow   >  

          
</TableRow> 

 
 
          </TableBody>
</Table>
</TableContainer>
{/* <TablePagination
SelectProps={{
  inputProps: {
    'aria-label': 'rows per page',
  },
  native: true,
}}

sx={{width:"100vw",border:'none',
  ".MuiTablePagination-toolbar": {
    backgroundColor: "#f2f6f9",   
    padding:'0'
  },



}}

/> */}





</Paper>

                 </Grid>
                 
            </Grid>
            <Box>

           <Button 
                    variant="outlined" 
                 
                    sx={{textTransform:'capitalize', 
                    margin:'13px ',marginTop:'25px',
                    marginLeft:'1px',
                    backgroundColor:'#0077ef',
                    fontSize:'14px',
                    padding:'6px 9px',
                    color:'white',
                    '&:hover': {backgroundColor: '#5ec797',
                    color:'white',border:'#5ec797' },}}>
                    Save
                   </Button>
            </Box>
      </Box>
        );
        }

