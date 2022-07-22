import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Axios from 'axios';


export default function FormDialog() {
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
    

    

  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
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
                                    onChange={(e) => setpname(e.target.value)}
                                    required
                                    
                                    sx={{
                                    ".MuiInputLabel-root":
                                    {
                                      color:'#888888'
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
                                      InputProps={{ style: { fontSize: 14 } }}
                                      InputLabelProps={{ style: { fontSize: 14 } }}
                                      required
                                      sx={{
                                        ".MuiInputLabel-root":
                                        {
                                          color:'#888888'
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
                                        type="email"
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
  );
}
