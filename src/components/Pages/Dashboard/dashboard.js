import React from 'react';
import {Box,Grid,Typography} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupIcon from '@mui/icons-material/Group';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MapIcon from '@mui/icons-material/Map';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Item } from './dashboard.style';



export default function dashboard() {
  return (
      <Box>
    <Grid container spacing={3}>
  <Grid item xs={3} sm={3} md={3} lg={3} xl={3} >
  <Item >
    <Grid container spacing={3} sx={{height:'170px',marginTop:'5px'}}>
  <Grid item xs={8} sm={8} md={8} lg={8} xl={8}> 
         <Typography variant="h5" sx={{color:'#1878f3',fontWeight:'600'}}> Total Course</Typography> 
         <Grid container spacing={0}>
  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}> 
  <Typography variant="h6" sx={{color:'#000',fontWeight:'600',fontSize:'25px',paddingLeft:'30px'}}> 0324</Typography>
  </Grid>
  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}> 
  <Typography sx={{color:'red',fontWeight:'600',fontSize:'15px',marginTop:'10px'}}> 20.4% <ArrowDownwardIcon sx={{fontSize:'15px'}}/></Typography>
  </Grid>
  </Grid>
 
  </Grid>
  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>   
         <Typography variant="h6"><Box sx={{padding:'10px',borderRadius:'50%',background:'#1878f3',width:'50%',height:'50%'}}><MenuBookIcon sx={{fontSize:'25px',marginTop:'5px',color:'white'}}/></Box> </Typography> 
  </Grid>
  <Typography sx={{color:'#000',marginLeft:'70px',fontWeight:'600'}}> Compare Last Year (2021)</Typography> 
</Grid>
</Item>
  </Grid>


  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
  <Item >
    <Grid container spacing={3} sx={{height:'170px',marginTop:'5px'}}>
  <Grid item xs={8} sm={8} md={8} lg={8} xl={8}> 
         <Typography variant="h5" sx={{color:'#1878f3',fontWeight:'600'}}> Total Partners</Typography> 
         <Grid container spacing={0}>
  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}> 
  <Typography variant="h6" sx={{color:'#000',fontWeight:'600',fontSize:'25px',paddingLeft:'20px'}}> 0076</Typography>
  </Grid>
  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}> 
  <Typography sx={{color:'red',fontWeight:'600',fontSize:'15px',marginTop:'10px'}}> 20.4% <ArrowDownwardIcon sx={{fontSize:'15px'}}/></Typography>
  </Grid>
  </Grid>
 
  </Grid>
  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>   
         <Typography variant="h6"><Box sx={{padding:'10px',borderRadius:'50%',background:'#29bba6',width:'50%',height:'50%'}}><GroupIcon sx={{fontSize:'25px',marginTop:'5px',color:'white'}}/></Box> </Typography> 
  </Grid>
  <Typography sx={{color:'#000',marginLeft:'60px',fontWeight:'600'}}> Compare Last Year (2021)</Typography> 
</Grid>
</Item>
  </Grid>


  <Grid item xs={3} sm={3} md={3} lg={3} xl={3} >
  <Item >
    <Grid container spacing={3} sx={{height:'170px',marginTop:'5px'}}>
  <Grid item xs={8} sm={8} md={8} lg={8} xl={8} > 
         <Typography variant="h5" sx={{color:'#1878f3',fontWeight:'600'}}> Total Country</Typography> 
         <Grid container spacing={0}>
  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}> 
  <Typography variant="h6" sx={{color:'#000',fontWeight:'600',fontSize:'25px',paddingLeft:'10px'}}> 0214</Typography>
  </Grid>
  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}> 
  <Typography sx={{color:'red',fontWeight:'600',fontSize:'15px',marginTop:'10px'}}> 20.4% <ArrowDownwardIcon sx={{fontSize:'15px'}}/></Typography>
  </Grid>
  </Grid>
 
  </Grid>
  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>   
         <Typography variant="h6"><Box sx={{padding:'10px',borderRadius:'50%',background:'#f3425f',width:'50%',height:'50%'}}><MapIcon sx={{fontSize:'25px',marginTop:'5px',color:'white'}}/></Box> </Typography> 
  </Grid>
  <Typography sx={{color:'#000',marginLeft:'70px',fontWeight:'600'}}> Compare Last Year (2021)</Typography> 
</Grid>
</Item>
  </Grid>

  <Grid item xs={3} sm={3} md={3} lg={3} xl={3} >
  <Item >
    <Grid container spacing={3} sx={{height:'170px',marginTop:'5px'}}>
  <Grid item xs={8} sm={8} md={8} lg={8} xl={8} > 
         <Typography variant="h5" sx={{color:'#1878f3',fontWeight:'600',marginLeft:'-40px'}}> Total City</Typography> 
         <Grid container spacing={0}>
  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}> 
  <Typography variant="h6" sx={{color:'#000',fontWeight:'600',fontSize:'25px',paddingLeft:'30px'}}> 0080</Typography>
  </Grid>
  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}> 
  <Typography sx={{color:'red',fontWeight:'600',fontSize:'15px',marginTop:'10px'}}> 20.4% <ArrowDownwardIcon sx={{fontSize:'15px'}}/></Typography>
  </Grid>
  </Grid>
 
  </Grid>
  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>   
         <Typography variant="h6"><Box sx={{padding:'10px',borderRadius:'50%',background:'#f7b928',width:'50%',height:'50%'}}><ApartmentIcon sx={{fontSize:'25px',marginTop:'5px',color:'white'}}/></Box> </Typography> 
  </Grid>
  <Typography sx={{color:'#000',marginLeft:'70px',fontWeight:'600'}}> Compare Last Year (2021)</Typography> 
</Grid>
</Item>
  </Grid>

</Grid>


<Grid container spacing={3} sx={{marginTop:'5px'}}>
  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
  <Item>
    <Typography>hai</Typography>
  </Item>
  </Grid>
  
  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
  <Item></Item>
  </Grid>
  </Grid>

</Box>
  )
}
