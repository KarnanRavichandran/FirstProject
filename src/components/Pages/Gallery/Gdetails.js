import React from 'react'
import {styled} from '@mui/material/styles';
import { Button, Container, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField1 from '@mui/material/TextField';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';




const breadcrumbs = [
  <Link 
  
  sx={{ display: 'flex',fontSize:'14px', alignItems: 'center','&:hover': { color: '#0077ef' },textDecoration:'none' }}
  color="inherit"
  href="/"

  >
      Media
  </Link>,

  <Typography key="3" color="#0077ef" fontSize={14}>
    Media Details
  </Typography>,
];


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

const GalleryBackground = styled(Card)(({theme})=>({
    padding: theme.spacing(5),
    boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',
}));

const theme = createMuiTheme({
  props: {
      MuiTextField: {
          variant: "outlined"
      }
  }
});



const Action = styled(Box)(({theme})=>({
      display: 'flex',
      justifyContent:'right',
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(3),
}));



const Details = styled(Typography)(({theme})=>({
      margin: '10px  10px',
      fontSize: '14px',

}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Form() {
  const [text, setText] = React.useState("");

    const handleChange = event => {
        setText(event.target.value);
    };


  return (
    <React.Fragment>

        <Typography variant="h5" component="div" align="left" display="block" gutterBottom >
     Media
        </Typography>
      {/* Bradecrums code functionality */}
     
      <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
      {/* Bradecrums code functionality */}
                     <Box>
                        <Typography sx={{ marginTop:'20px',background:'#00bcd4', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Image Details</Typography>
                  </Box>
    {/* main gallery contaier  */}
        
            <GalleryBackground>

              {/* first row gallery list */}
              <Grid container sx={{marginBottom:'10px'}}>
                <Grid item xs={6}>
                    <Box component="img" sx={{width:'738px'}}
                        src={'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
                        />
                        
                       
                        {/* <Button variant="outlined" size='small' sx={{textTransform:'capitalize',border:'1px solid #0077ef',color: '#0077ef',marginLeft:'318px',marginTop:'10px',marginBottom:'7px',fontSize:'14px'}}>Edit</Button> */}
                              
                        <Button 
              size="small"
              href="#outlined-buttons"
              sx={{textTransform:'capitalize',
              color:'#94979f',
              marginLeft:'338px',
              borderColor:'#f1f5f8',
              fontWeight:'400',
              padding:'3px',
              '&:hover': {color:'#0077ef', },
              }}>
            <CameraAltOutlinedIcon  />
            <Typography sx={{marginLeft:'2px',fontSize:'14px'}}> Edit</Typography>
          </Button>
                
                
                </Grid>
                
                <Grid item xs={6}>
                    <Grid container >
                        <Grid item xs={12} color='#888888'>
                            <Details >
               <Grid xs={12} sx={{display:'flex',marginTop:'12px'}} >
                <Grid xs={12}>
                <TextField fullWidth  sx={{  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
     borderColor:'#0077ef'
    },}} 
                  label="File Name"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="Test"
                  InputProps={{ style: { fontSize: 14} }}
                  InputLabelProps={{ style: { fontSize: 14} }}
                   />
                </Grid>

                <Grid  xs={12}  sx={{marginLeft:'10px'}}>
                <TextField fullWidth 
                  label="File Type"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="image/.png"
                  InputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px',  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   },}}
                   />
                </Grid>
         </Grid>

         <Grid xs={12} sx={{display:'flex',marginTop:'20px'}} >
                <Grid xs={12}>
                <TextField fullWidth  sx={{  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
     borderColor:'#0077ef'
    },}} 
                  label="File Size"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="240 KB"
                  InputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14} }}
                   />
                </Grid>

                <Grid  xs={12}  sx={{marginLeft:'10px'}}>
                <TextField fullWidth 
                  label="Dimensions"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="2560 by 1707 Pixels"
                  InputProps={{ style: { fontSize: 14} }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px',  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   },}}
                   />
                </Grid>
         </Grid>

        
         <Grid xs={12} sx={{display:'flex',marginTop:'20px'}} >
                <Grid xs={12}>
                <TextField fullWidth  sx={{  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
     borderColor:'#0077ef'
    },}} 
                  label="Upload on"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="Feb 12, 2022"
                  InputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                   />
                </Grid>

                <Grid  xs={12}  sx={{marginLeft:'10px'}}>
                <TextField fullWidth 
                  label="Uploaded By"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="New"
                  InputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px',  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   },}}
                   />
                </Grid>
         </Grid>

         <Grid xs={12} sx={{display:'flex',marginTop:'20px'}} >
                <Grid  xs={12}  >
                <TextField fullWidth 
                  label="Alternative Text"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="The number of lines in a paragraph depends on the size of the browser window"
                  InputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px',  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   },}}
                   />
                </Grid>
         </Grid>

         <Grid xs={12} sx={{display:'flex',marginTop:'20px'}} >
                <Grid  xs={12}  >
                <TextField fullWidth 
                  label="Title"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="Natural background concept "
                  InputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px',  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   },}}
                   />
                </Grid>
          </Grid>


          <Grid xs={12} sx={{display:'flex',marginTop:'20px'}} >
                <Grid  xs={12}  >
                <TextField fullWidth 
                  label="File Url"
                  id="outlined-size-small"
                  size="small"
                  defaultValue="https://www.w3schools.com/colors/colors_converter.asp"
                  InputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  sx={{fontSize:'14px',  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                    borderColor:'#0077ef'
                   },}}
                   />
                </Grid>
          </Grid>



          <Grid xs={12} sx={{display:'flex',marginTop:'20px'}} >
                <Grid  xs={12}  >
                <TextField
                        fullWidth
                        multiline
                        label="Description"
                        defaultValue="https://www.w3schools.com/colors/colors_converter.asp"
                        InputProps={{ style: { fontSize: 14,color:'#444444',height:'90px' },
                            inputComponent: TextareaAutosize
                        }}
                        value={text}
                        onChange={handleChange}
                    />
                </Grid>
          </Grid>

          <Grid xs={12} sx={{display:'flex',marginTop:'20px'}} >
         <Typography sx={{fontSize:'14px',color:'#0077ef'}}>View attachment page | </Typography>
         <Typography sx={{fontSize:'14px',color:'#0077ef'}}>&nbsp;Edit more Details |</Typography>
         <Typography sx={{fontSize:'14px',color:'#f3425f'}} > &nbsp;Delete permanently</Typography>
          </Grid>

         </Details>

      
                        </Grid>
                    </Grid>
                </Grid>
                
              </Grid>
              {/* first row gallery list */}

              <Divider variant="middle" />
              <Action >
              <Button variant="outlined" size="small"  sx={{marginRight:'10px',padding:'6px 9px',textTransform:'capitalize',backgroundColor:'#0077ef ',fontSize:'14px', color:'white','&:hover': {backgroundColor: '#fff',color:'#0077ef' },}}>
                            Submit
                            </Button>
      <Button variant="outlined" size="small"  sx={{marginRight:'10px',padding:'6px 9px',textTransform:'capitalize',borderColor:'#f3425f',backgroundColor:'#f3425f',fontSize:'14px', color:'white','&:hover': {backgroundColor: '#fff',color:'#f3425f',borderColor:'#f3425f', },}}>
            cancel
            </Button>
              </Action>

            </GalleryBackground>
    {/* main gallery contaier  */}

    </React.Fragment>
  )
}
