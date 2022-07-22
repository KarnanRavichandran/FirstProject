import React, {useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {MenuItem,InputLabel,FormControl} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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

import axios from 'axios';




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
  padding: '10px 5px',
  textAlign:'justify'
}));


 const TableRow = styled(Tablerow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },}));


  const columns = [
    { id: 'id', label: 'ID', minWidth: 50 },
    { id: 'Course Name', label: 'Course Name', minWidth: 500 },
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
      minWidth: 100,
      align: 'left',
      format: (value) => value.toFixed(2),
    },

    {
      id: 'action',
      label: 'Action',
      Width: 100,
      align: 'left',
      format: (value) => value.toFixed(2),
    },
  ];
 



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default function Partneredit() {


const [pname,setPname] = useState('');
const [pcode,setPcode] = useState('');
const [cfname,setCfname] = useState('');
const [clname,setClname] = useState('');
const [pemail,setPemail] = useState('');
const [pphone,setPphone] = useState('');
const [pmobile,setPmobile] = useState('');
const [pfax,setPfax] = useState('');
const [paddress_line1,setPaddress_line1] = useState('');
const [paddress_line2,setPaddress_line2] = useState('');
const [pcity,setPcity] = useState('');
const [pzip,setPzip] = useState('');
const [pstate,setPstate] = useState('');
const [pcountry,setPcountry] = useState('');
const [pwebsite,setPwebsite] = useState('');

const {id} = useParams();

  const [eidpartner,setePartner] = useState({});   

  const update = async (e)=>{
    // console.log(
    //   'pname:', pname,
    //   'pcode:', pcode,
    //   'cfname:', cfname,
    //   'clname:', clname,
    //   'pemail:', pemail,
    //   'pphone:', pphone,
    //   'pmobile:', pmobile,
    //  ' pfax:', pfax,
    //   'paddress_line1:', paddress_line1,
    //   'paddress_line2:', paddress_line2,
    //   'pcity:', pcity,
    //   'pzip:', pzip,
    //  ' pstate:', pstate,
    //   'pcountry:', pcountry,
    //   'pwebsite:', pwebsite,
    // );
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/api/updatepartner/${id}`,{
      pname: pname,
      pcode: pcode,
      cfname: cfname,
      clname: clname,
      pemail: pemail,
      pphone: pphone,
      pmobile: pmobile,
      pfax: pfax,
      paddress_line1: paddress_line1,
      paddress_line2: paddress_line2,
      pcity: pcity,
      pzip: pzip,
      pstate: pstate,
      pcountry: pcountry,
      pwebsite: pwebsite,
    }).then(d=>{
      alert('Successfully Updated',d);
      window.location.href="/allpartner";
    }).catch(err=>console.log(err));

  }

  useEffect(()=>{
    const partnerEdit = async ()=>{
      const res = await axios.get(`http://127.0.0.1:8000/api/editallpartner/${id}`);
      console.log(res.data);
      setPname(res.data[0].partner_name);
      setPcode(res.data[0].partner_code)
      setCfname(res.data[0].contact_fname)
      setClname(res.data[0].contact_lname)
      setPemail(res.data[0].email)
      setPphone(res.data[0].phone)
      setPmobile(res.data[0].mobile)
      setPfax(res.data[0].fax)
      setPaddress_line1(res.data[0].address_line1)
      setPaddress_line2(res.data[0].address_line2)
       setPcity(res.data[0].city)
       setPzip(res.data[0].zip)
       setPstate(res.data[0].state)
       setPcountry(res.data[0].country)
       setPwebsite(res.data[0].website)
    }

    partnerEdit();

  },[])
console.log(pname);
  // useEffect(() => {
  //   let uid = eid.id;
  //   // console.log(uid);
  //   Axios.get(`http://127.0.0.1:8000/api/editallpartner/${uid}`)
  //  .then(d => {
  //       let epartner = d.data[0];
  //       setepartner(epartner);   
  // }) }, [])

console.log(eidpartner);


//   const [evalue,setevalue] = useState({});
//     const handleCreateNewItem = (e) => {
//       e.preventDefault();
//       const { name, value } = e.target;
//       setevalue({
//       ...evalue,
//       [name]: value, 
     
//     });
  
//  };
//  console.log(evalue);





  // const updatepartner = async (e) =>{
  //   e.preventDefault();
  
  //   const postpartner={
  //     pname,pcode,cfname,clname,pemail,pphone,pmobile,pfax,paddress_line1,paddress_line2,pcity,pzip,pstate,pcountry,pwebsite
  //   };
  
  //   let uid = eid.id;
  //   console.log(uid);
  //   console.log(postpartner)
  //  const res = Axios.put(`http://127.0.0.1:8000/api/updatepartner/${uid}`,postpartner).then(d=>{
  //     console.log(res);
  //     window.location.href="/allpartner";
  //   }).catch(err=>console.log(err));
  // };



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
     <Box sx={{ flexGrow: 1}}>
      <Typography variant="h5" component="div" align="left" display="block" gutterBottom 
        sx={{marginBottom:'4px'}}>
        Partners
      </Typography>

   <Stack spacing={3} >
        <Breadcrumbs aria-label="breadcrumb" 
        sx={{fontSize:'15px'}}
        separator={<NavigateNextIcon fontSize="30px" />}
        >
       
        <Link
          sx={{ display: 'flex',
          alignItems: 'center',
          '&:hover': { color: '#0077ef' },
          textDecoration:'none' }}
          color="inherit"
          href="/"
        >
         Partners
        </Link>,

        <Typography
          sx={{ display: 'flex',
          alignItems: 'center', }}
          color="#0077ef"
        >
          Edit Partners
        </Typography>
      </Breadcrumbs>
   </Stack>


       <Typography 
          sx={{ marginTop:'20px',
          background:'#00bcd4', 
          width: 'max-content',borderTopRightRadius:'5px',
          borderTopLeftRadius:'5px',
          height: '26px',
          color:'white',
          padding:'2px 10px'}}>
          Partner Details
       </Typography>

       <form onSubmit={update}>
       <Item 
          sx={{textAlign:'left',
          boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',
          marginBottom:'38px',
          padding:'0px',
          paddingTop:'10px',
          color:'black',
          borderRadius:'0.25rempx'}}
        >
    <Grid xs={12} 
          sx={{display:'flex',
          background:'#f1f5f8',
          margin:'5px 15px'}}
          >
        <Grid xs={6}>
          <Typography
          sx={{fontSize:'14px',
          fontWeight:'500',
          margin:'15px 20px'}}>
          Contact
          </Typography>
        </Grid>

         <Grid xs={6}>
            <Typography 
            sx={{fontSize:'14px',
            fontWeight:'500',
            margin:'15px 20px'}}>
            Address
            </Typography>
          </Grid>
   </Grid>
  
  
          <Grid xs={12} 
            sx={{display:'flex'}}
          >
          <Grid xs={6} 
            sx={{margin:'10px 15px'}}
          >
          <Grid xs={12} 
              sx={{display:'flex',
              marginTop:'12px'}}
           >
            <Grid xs={12}>
              <TextField fullWidth  
              sx={{".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{ borderColor:'#0077ef'},}} 
              label="Partner Name/Company"
              size="small"
              value={pname}
              onChange={(e) => setPname(e.target.value) }
              // defaultValue={eidpartner.partner_name}
              focused 
               InputProps={{ style: { fontSize: 14, } }}
               InputLabelProps={{ style: { fontSize: 14 } }}
              />
            </Grid>


           <Grid  xs={12} 
                 sx={{marginLeft:'10px'}}
               >
              <TextField fullWidth 
              label="Partner Code"
              id="outlined-size-small"
              size="small"
              name="pcode"
              value={pcode}
              // defaultValue={eidpartner.partner_code}
              focused 
              onChange={(e) => { setPcode(e.target.value);  }}
              InputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              sx={{fontSize:'14px',  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
              borderColor:'#0077ef'
              },}}
              />
            </Grid>
         </Grid>

        <Grid xs={12} sx={{display:'flex',marginTop:'18px'}} >
              <Grid xs={12}>
                <TextField fullWidth
                  label="Contact First Name"
                  id="outlined-size-small"
                  size="small"
                  name="cfname"
                  value={cfname}
                  // defaultValue={eidpartner.contact_fname}
                  focused 
                  onChange={(e) => { setCfname(e.target.value); }}
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px' ,".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   },}}
                   />
              </Grid>

                <Grid  xs={12}  sx={{marginLeft:'10px'}}>
                  <TextField fullWidth
                    label="Contact Last Name"
                    id="outlined-size-small"
                    size="small"
                    name="clname"
                    value={clname}
                    // defaultValue={eidpartner.contact_lname}
                   focused 
                   onChange={(e) => { setClname(e.target.value);  }}
                    InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                    InputLabelProps={{ style: { fontSize: 14 } }}
                    sx={{fontSize:'14px', 
                    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                    },}}
                  />
               </Grid>
           </Grid>

                <TextField fullWidth 
                  sx={{marginTop:'12px',
                  fontSize:'14px',
                  marginTop:'18px' ,
                  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                  borderColor:'#0077ef'
                  },}}
                    label="Email"
                    id="outlined-size-small"
                    name="pemail"
                    value={pemail}
                    // defaultValue={eidpartner.email}
                    focused 
                    onChange={(e) => { setPemail(e.target.value);  }}
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
                    name="pphone"
                    value={pphone}
                    // defaultValue={eidpartner.phone}
                    focused 
                    onChange={(e) => { setPphone(e.target.value);  }}
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
                  name="pmobile"
                  value={pmobile}
                  // defaultValue={eidpartner.mobile}
                  focused 
                  onChange={(e) => { setPmobile(e.target.value);  }}
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
                  fontSize:'14px', ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                  borderColor:'#0077ef'
                  }}}
                  label="Fax"
                  id="outlined-size-small"
                  size="small"
                  name="pfax"
                  value={pfax}
                  // defaultValue={eidpartner.fax}
                  focused 
                  onChange={(e) => { setPfax(e.target.value);  }}
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                />
           </Grid>
                
                  <Grid  xs={6} 
                    sx={{margin:'10px 15px'}}
                  >
           
               <TextField fullWidth 
                  sx={{marginTop:'12px',
                  fontSize:'14px', ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                  borderColor:'#0077ef'
                  }}}
                  label="Address Line 1"
                  id="outlined-size-small"
                  size="small"
                  name="paddress_line1"
                  value={paddress_line1}
                  // defaultValue={eidpartner.address_line1}
                  focused 
                  onChange={(e) => { setPaddress_line1(e.target.value);  }}
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  
                />

                <TextField fullWidth
                  sx={{marginTop:'18px',
                  fontSize:'14px', ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                  borderColor:'#0077ef'
                  }}}
                  label="Address Line 2"
                  id="outlined-size-small"
                  size="small"
                  name="paddress_line2"
                  value={paddress_line2}
                  // defaultValue={eidpartner.address_line2}
                  focused 
                  onChange={(e) => { setPaddress_line2(e.target.value);  }}
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                />


          <Grid sx={{display:'flex',marginTop:'18px'}} >
               <Grid  xs={12}>
                  <TextField fullWidth   
                    label="City"
                    id="outlined-size-small"
                    size="small"
                    name="pcity"
                    value={pcity}
                    // defaultValue={eidpartner.city}
                    focused 
                    onChange={(e) => { setPcity(e.target.value);  }}
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
                  name="pzip"
                  value={pzip}
                  // defaultValue={eidpartner.zip}
                  focused 
                  onChange={(e) => { setPzip(e.target.value);  }}
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
                  name="pstate"
                  value={pstate}
                  // defaultValue={eidpartner.state}
                  focused 
                  onChange={(e) => { setPstate(e.target.value);  }}
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
                  name="pcountry"
                  value={pcountry}
                  // defaultValue={eidpartner.country}
                  focused 
                  onChange={(e) => { setPcountry(e.target.value); }}
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
                  fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                  borderColor:'#0077ef'
                  }}}
                  label="Website"
                  id="outlined-size-small"
                  size="small"
                  name="pwebsite"
                  value={pwebsite}
                  // defaultValue={eidpartner.website}
                  focused 
                  onChange={(e) => { setPwebsite(e.target.value);  }}
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
              
                />

      </Grid>
  </Grid>

          <Grid xs={12} sx={{display:'flex'}}>
              <Grid xs={11} ></Grid> 
            <Grid xs={1} sx={{display:'flex'}}> 
              <Button 
                variant="outlined" 
                type="submit"
                sx={{textTransform:'capitalize',
                 marginBottom:'13px',
                 marginLeft:'55px',
                 padding:'6px 9px',
                backgroundColor:'#0077ef',
                fontSize:'14px', 
                color:'white','&:hover': {backgroundColor: '#5ec797',
                color:'white',border:'#5ec797' },}}>
                Save
              </Button>
            </Grid>
          </Grid> 
 </Item> 
 </form>

      <Grid item xs={12}>
        <Typography  
            sx={{ background:'#00bcd4 ',
            width: 'max-content',
            borderTopRightRadius:'5px',
            borderTopLeftRadius:'5px',
            height: '26px',
            color:'white',
            padding:'2px 10px',
            }}>Partner Courses
         </Typography>


        <Grid item xs={12}>
          <Paper 
            sx={{ width: '100%',
            boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',
            padding:'15px'}}
          >


          <Box>
<Grid sx={{display:'flex'}}> 
    <Grid xs={4} sx={{display:'flex'}}>
          <Typography
            sx={{color:'#888888',marginLeft:'4px',
            fontSize:'14px'}}>
            All (3)
          </Typography>&nbsp;&nbsp;|&nbsp;&nbsp;

          <Typography  
            sx={{color:'#888888',
            fontSize:'14px'}}>
            Published (3)
          </Typography>
     </Grid>


 <Grid xs={5.9}></Grid>
     <Grid xs={2.6}> 
          <Button 
          
            variant="outlined"
            component="label"
            sx={{
            textTransform:'capitalize',
            marginLeft:'30px',
            border:'1px solid #0077ef',
            color: '#0077ef',
            padding:'6px 9px'
    
            }}
            >
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
             marginLeft:'45px',
            textTransform:'capitalize',
            border:'1px solid #0077ef',
                color: '#0077ef',
                padding:'6px 9px'
               
               
               
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
                 marginLeft:'45px',
                textTransform:'capitalize',
                border:'1px solid #0077ef',
                color: '#0077ef',
                padding:'6px 9px'
            }}
            >
            export
            <input
            type="file"
            hidden
            />
          </Button>

  </Grid>
</Grid>


<Grid sx={{display:'flex'}}>
  <Grid xs={5}>
        <Box 
        sx={{margin:'10px 0px',
        display:'flex',
        justifyContent:'space-between'}}
        >

        <FormControl 
        sx={{ minWidth: 150 }}
         size="small"  >
        <InputLabel 
        sx={{fontSize:'14px', 
        color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>Bulk Actions
        </InputLabel>
        <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Bulk Actions"
        onChange={handleChange}
        sx={{height:'38px', color:'#444444',fontSize:'14px',"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
          borderColor:'#0077ef'
         }, "& .MuiOutlinedInput-notchedOutline":{
          borderColor:'#e6e6e6'
         },}}
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
          sx={{ textTransform:'capitalize',border:'1px solid #0077ef',
          color: '#0077ef' }}>
          Apply
          <input
          type="file"
          hidden
          />
        </Button>

      <FormControl 
        sx={{ minWidth: 150}}
        size="small">
        <InputLabel 
        sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>All Dates</InputLabel>
        <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age1}
        label="All Dates"
        onChange={handleChange1}
        sx={{height:'38px',color:'#444444',fontSize:'14px',"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
          borderColor:'#0077ef'
         }, "& .MuiOutlinedInput-notchedOutline":{
          borderColor:'#e6e6e6'
         },}}
        >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>


        <FormControl sx={{ minWidth: 150}}size="small">
        <InputLabel sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>All Categories</InputLabel>
        <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={ age2 }
        label="All Categories"
        onChange = { handleChange2 }
        sx={{height:'38px',color:'#444444',fontSize:'14px',"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
          borderColor:'#0077ef'
         }, "& .MuiOutlinedInput-notchedOutline":{
          borderColor:'#e6e6e6'
         },}}
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
        sx={{ textTransform:'capitalize',border:'1px solid #0077ef',
        color: '#0077ef' }}>
        Filter
        <input
        type="file"
        hidden
        />
      </Button>
   </Box>
</Grid>
<Grid xs={4.7}></Grid>
       <Grid xs={2.4}>
          <TextField
          id="outlined-textarea"
          placeholder="Search"
          multiline
          InputProps={{
          startAdornment: <InputAdornment position="start">
          <SearchIcon />
          </InputAdornment>,
        }} 
            sx={{margin:'10px 0px',width:'95.1%', height:'36px',marginLeft:'14px',

            ".MuiOutlinedInput-root": {
            padding: "7px",
            },

            ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            borderColor:'#0077ef'
            },

            }}

         />  
  </Grid>
</Grid>
</Box>


<TableContainer >
   <Table stickyHeader aria-label="sticky table" >
      <TableHead>
           <TableRow >
              <TableCell padding="checkbox">
                <Checkbox  color="primary" />
              </TableCell>
                  {columns.map((column) => (
                  <TableCell 
                    key={column.id}
                    align={column.align}
                    style={{ top: 0, minWidth: column.minWidth }}>
                   <TableSortLabel 
                      active = {true}
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


 <TableBody >  
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
<EditOutlinedIcon sx={{color:'#0077ef'}}/>
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
<EditOutlinedIcon sx={{color:'#0077ef'}}/>
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
<EditOutlinedIcon sx={{color:'#0077ef'}}/>
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
<EditOutlinedIcon sx={{color:'#0077ef'}}/>
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
<EditOutlinedIcon sx={{color:'#0077ef'}}/>
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
<EditOutlinedIcon sx={{color:'#0077ef'}}/>
</IconButton>
<IconButton aria-label="delete" >
<DeleteOutlinedIcon sx={{color:'#f3425f'}}/>
</IconButton>
</TableCell>  

</TableRow> 

</TableBody>
</Table>
</TableContainer>
<TablePagination
rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}


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
  },
  ".MuiTablePagination-actions":{
    marginRight:'20px'
  }

}}
/>
</Paper>
</Grid>
</Grid>          
</Box>
 );
}





