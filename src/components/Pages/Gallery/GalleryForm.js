import React, {useState, useEffect} from 'react';
import {styled } from '@mui/material/styles';
import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import {Link as RouterLink} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

// drop-shadow styled function start to here
const GalleryBackground = styled(Card)(({theme})=>({
    padding: theme.spacing(2),
    boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',
}));
// drop-shadow styled function en to here

// name tag and add image icon div start to here
const Main = styled(Box)(({theme})=>({
      display: 'flex',
      justifyContent:'space-between',
      spacing: theme.spacing(5),
}));
// name tag and add image icon div end to here

// add-icon styled functionality start to here
 const Addicon = styled(Box)(({theme})=>({
    //  marginTop: '15px',
     marginRight: theme.spacing(1),
 }));



// add-icon styled functionality end to here


export default function Form() {

  const [data, setData] = useState([]); 



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

  const breadcrumbs = [
    <Link 
    
    sx={{ display: 'flex',fontSize:'14px', alignItems: 'center','&:hover': { color: '#0077ef' },textDecoration:'none' }}
    color="inherit"
    href="/"

    >
Home
    </Link>,

    <Typography key="3" color="#0077ef" fontSize={14}>
      Media Gallery
    </Typography>,
  ];

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
   setAge(event.target.value);
  };

  const [age1, setAge1] = React.useState('');
  const handleChange1 = (event) => {
   setAge1(event.target.value);
  };

  return (
    <React.Fragment>

        <Typography variant="h5" component="div" align="left" display="block" gutterBottom sx={{marginBottom:'4px'}}>
       Gallery
        </Typography>
      {/* Bradecrums code functionality */}
         
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
        
      {/* Bradecrums code functionality */}



          {/* name and  image feild start to here */}
        

    {/* main gallery contaier  */}
    <Main>
                  <Box>
                        <Typography sx={{ marginTop:'20px',background:'#00bcd4', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Media Gallery</Typography>
                  </Box>
                <Addicon>
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
            <AddCircleOutlinedIcon 
            sx={{color:' #94979f', '&:hover': {color:'#0077ef' },}} />
            Add New
          </Button>
                </Addicon>
            </Main> 
   
      
                  <Card sx={{boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',padding:'20px',}}> 
           
            <Grid  xs={12} sx={{display:'flex',padding:'7px 1px 19px 0px'}}>
        <Grid  xs={2}>         
            <FormControl fullWidth size="small" >
                  <InputLabel id="demo-simple-select-label"   sx={{ fontSize:'14px',color:'#888888' }}>  Items</InputLabel>
                  <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Items"
                        placeholder='Days'
                        onChange={handleChange}
                        sx={{height:'38px',color:'#444444',fontSize:'14px',"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                          borderColor:'#0077ef'
                         }, "& .MuiOutlinedInput-notchedOutline":{
                          borderColor:'#e6e6e6'
                         },}}
                        >
                        <MenuItem value={10} sx={{color:'#444444' ,fontSize:'14px'}}>Images</MenuItem>
                        <MenuItem value={20} sx={{color:'#444444' ,fontSize:'14px'}}>Audio</MenuItem>
                        <MenuItem value={30}sx={{color:'#444444' ,fontSize:'14px'}}>Video</MenuItem>
                        <MenuItem value={40}sx={{color:'#444444' ,fontSize:'14px'}}>Documents</MenuItem>
                        <MenuItem value={45}sx={{color:'#444444' ,fontSize:'14px'}}>Unattached</MenuItem>
                   </Select>
        </FormControl>
        </Grid>
        <Grid  xs={0.2}></Grid>  
        <Grid  xs={2}>  
        <FormControl  fullWidth size="small" >
                  <InputLabel  id="demo-simple-select-label"  sx={{fontSize:'14px',color:'#888888' }}>All Date</InputLabel>
                  <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age1}
                        label="All Date"
                        onChange={handleChange1}
                        sx={{height:'38px',color:'#444444',fontSize:'14px',"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                          borderColor:'#0077ef'
                         }, "& .MuiOutlinedInput-notchedOutline":{
                          borderColor:'#e6e6e6'
                         },}}
                        >
                      
                    <MenuItem value={10}sx={{color:'#444444' ,fontSize:'14px'}}>Mar 2021</MenuItem>
                    <MenuItem value={20}sx={{color:'#444444' ,fontSize:'14px'}}>Apr 2021</MenuItem>
                    <MenuItem value={30}sx={{color:'#444444' ,fontSize:'14px'}}>Apr 2021</MenuItem>
                    <MenuItem value={40}sx={{color:'#444444' ,fontSize:'14px'}}>Jun 2021</MenuItem>
                    <MenuItem value={45}sx={{color:'#444444' ,fontSize:'14px'}}>Feb 2021</MenuItem>
                  </Select>
         </FormControl>     
         </Grid>   
         <Grid  xs={5.8}></Grid>

         <Grid  xs={2}>    
  <TextField size='small'
      id="outlined-textarea"
      placeholder="Search"
      multiline
      onChange={(e) => searchItems(e.target.value)}
      InputProps={{
      startAdornment: <InputAdornment position="start">
      <SearchIcon />
      </InputAdornment>,
      }} 
      
      sx={{display:'flex',
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

</Grid></Grid>
              {/* first row gallery list */}
              <Grid container  spacing={1.4} sx={{marginBottom:'6px',}}>
                  {/* image property's start */}
                      <Grid item xs={1}>
                      <Link component={RouterLink} to="/gdetails">
                          <Box component="img"  sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                              src={'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
                              />
                        </Link>
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://images.unsplash.com/photo-1438786657495-640937046d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/teenager-girl-doing-her-homework-stock-photo-picture-id1213693689?k=20&m=1213693689&s=612x612&w=0&h=36CG5lOTB8N-lIJr-d8o7dFcp697qe5aZNkiOpiu92Y='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/beautiful-woman-stock-photo-picture-id1287867826?k=20&m=1287867826&s=612x612&w=0&h=Sglvj7XYKNEvtsx5dTs0XYeI3cRVeYjvnfCpU3Xhntg='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://media.istockphoto.com/photos/portrait-ot-teenage-girl-working-in-delicatessen-food-shop-as-job-picture-id1308478837?b=1&k=20&m=1308478837&s=170667a&w=0&h=RhJAdsJdCELkZT3RvHqoinTX6rz3V7zdAVA7WMf8aaY='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/teenage-girl-at-white-background-stock-images-picture-id1221041044?k=20&m=1221041044&s=612x612&w=0&h=JrnRqL2HuynuTnvUtgTX-AXJBDQkVnE3lieau7SOfMM='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://media.istockphoto.com/photos/fitness-woman-holding-a-mat-stock-image-picture-id1024110184?k=20&m=1024110184&s=612x612&w=0&h=ndnHPIlIufVrmDG4-jKNjwV4r1YHlvudEKfCGuhwZJ0='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/young-female-student-in-the-park-stock-image-picture-id1029795144?k=20&m=1029795144&s=612x612&w=0&h=hkMFj63FhHS5ekP7B2VyNHlYx_pEtTNdPrSCAMW0cOc='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://media.istockphoto.com/photos/girl-plant-sapling-tree-stock-image-picture-id953608544?k=20&m=953608544&s=612x612&w=0&h=fjZxFoArjZJ3DknalL8XuYbzRILlzMoXigzG7E-6c-c='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/cheerful-two-young-girls-looking-at-laptop-and-discuss-something-picture-id524014106?k=20&m=524014106&s=612x612&w=0&h=FhFws5c-qK-fYBjN2Up9na9O_yrH4iHybxr4o_Fm0NY='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://media.istockphoto.com/photos/worried-indian-young-women-thinking-picture-id1186128743?k=20&m=1186128743&s=612x612&w=0&h=bo1myD3y5UVykTC1OL9ZPgMnwt2I12GYNQoa-Z5-N_g='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/young-woman-working-at-home-stock-photo-picture-id1359631323?k=20&m=1359631323&s=612x612&w=0&h=424U7pqku2Uq9gIEPDzIom2hK9hWZijVe4gYnw2WEGU='}
                            />
                      </Grid>
                  {/* image property's end */}
              </Grid>
              {/* secondad row gallery list start */}

              <Grid container  spacing={1.4} sx={{marginBottom:'6px'}}>
                  {/* image property's start */}
                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://media.istockphoto.com/photos/asian-doctor-wearing-gloves-and-isolation-mask-is-making-a-covid19-picture-id1332130781?k=20&m=1332130781&s=612x612&w=0&h=QJ7380zfY_wvzb2--8Q_dSTbxdwf0EGXP2A7kv8Zr1g='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://media.istockphoto.com/photos/young-girl-with-laptop-at-white-background-stock-images-picture-id1217271676?k=20&m=1217271676&s=612x612&w=0&h=odbFKXoLcdRnhbNyqHj8hDtIQn0cbjTOaAdJM_PeoUs='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/happy-young-woman-holding-indian-2000-rupee-notes-picture-id1270790646?k=20&m=1270790646&s=612x612&w=0&h=m4Mb_MAQ0NH-o-b6aEH6uwXoaxzp2YDa2dGb6taV610='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/family-with-protective-face-mask-giving-thumbs-up-at-park-picture-id1250025683?k=20&m=1250025683&s=612x612&w=0&h=O3il7fhKMlVAt6R2O-B823hPn9HOwQXx1niaNZmss4M='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://media.istockphoto.com/photos/happy-woman-with-a-gift-stock-photo-picture-id1345618309?k=20&m=1345618309&s=612x612&w=0&h=TtqsEFnyOAOHNXB_ntJYUx5Wcv9dc-Kb5khYAib8GaM='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/pretty-young-woman-using-smart-phone-picture-id1186129533?k=20&m=1186129533&s=612x612&w=0&h=DumzX_4Y9bpm8e522c-pGP_uXaqyDuy-axKDjYzuyT4='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://media.istockphoto.com/photos/indian-modern-girl-stock-photo-picture-id1366428145?k=20&m=1366428145&s=612x612&w=0&h=lLyNeyEyZaQXVobWSdLK2D0hv-R-SEDn8kvZEy7jGzc='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/sister-doing-homework-at-home-stock-photo-picture-id1214466192?k=20&m=1214466192&s=612x612&w=0&h=0biJqWnLri0YVKAsYR0KtDFDmkifAEAOY2pSuIC7-Ig='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://media.istockphoto.com/photos/islamic-student-at-library-picture-id1201406810?k=20&m=1201406810&s=612x612&w=0&h=QT7FlLUzgACHcMHWrwcoIm9L8Z3naIBwbXoM1fn3sG0='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/happy-smiling-child-girl-stock-photo-picture-id1292019876?k=20&m=1292019876&s=612x612&w=0&h=zaQ3cn_ffVCCvoALaJgW5mtCq6SHEkXAJgtIpLxeEHU='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://media.istockphoto.com/photos/teacher-explaining-to-students-using-digital-tablet-picture-id1148232091?k=20&m=1148232091&s=612x612&w=0&h=oST3OnceTz_4WiefWL069eiMOFelIZXgcPo2ROdl4YA='}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://media.istockphoto.com/photos/university-student-in-white-background-stock-photo-picture-id1369754198?k=20&m=1369754198&s=612x612&w=0&h=uFUzNRx0XjlWuoASg1vL2_D5jcRqdSXu7Ss3XS4n8pA='}
                            />
                      </Grid>
                  {/* image property's end */}
              </Grid>

              {/* secondad row gallery list end */}

               {/* third row gallery list start */}


               <Grid container  spacing={1.4} sx={{marginBottom:'6px'}}>
                  {/* image property's start */}
                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174'}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://images.unsplash.com/photo-1473773508845-188df298d2d1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                            src={'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
                            />
                      </Grid>

                      <Grid item xs={1}>
                        <Box component="img" sx={{width:'100%',height:'130px',objectFit:'cover',backgroundRepeat:'no-repeat',cursor:'pointer'}}
                             src={'https://images.unsplash.com/photo-1475656106224-d72c2ab53e8d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'}
                            />
                      </Grid>

                     
                  {/* image property's end */}
              </Grid>
               {/* third row gallery list end */}

            
            </Card>

    {/* main gallery contaier  */}

    </React.Fragment>
  )
}
