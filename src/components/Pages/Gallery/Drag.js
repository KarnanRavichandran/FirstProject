// import React, {useState} from 'react';
// import Axios from 'axios';

// export default function AddPartnernew() {
// const [name,setName] = useState('');

//   function addpartner(e)
//   {
//     e.preventDefault();
//     const datas={
//       name
//     };
//     Axios.post(`http://127.0.0.1:8000/api/getdata`,datas).then(
//       (res) => {
//         alert("addpartner Successfully Added",res);         
//         // window.location.href="/addPartnernew";
//       }).catch(err => {
//         alert("Does not allowed duplicate value",err.message);
//       })
//   }

//   return (
//     <div>
//       <form onSubmit={addpartner}>
//         <input type="text"  value={name}
//         onChange={(e) => setName(e.target.value)} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }


















// import React, {useState, useEffect} from 'react';
// import Button from '@mui/material/Button';
// import TextField1 from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Axios from 'axios';


// export default function FormDialog() {
  
// const [pname,setPname] = useState('');
// const [pcode,setPcode] = useState('');
// const [cfname,setCfname] = useState('');
// const [clname,setClname] = useState('');
// const [pemail,setPemail] = useState('');
// const [pphone,setPphone] = useState('');
// const [pmobile,setPmobile] = useState('');
// const [pfax,setPfax] = useState('');
// const [paddress_line1,setPaddress_line1] = useState('');
// const [paddress_line2,setPaddress_line2] = useState('');
// const [pcity,setPcity] = useState('');
// const [pzip,setPzip] = useState('');
// const [pstate,setPstate] = useState('');
// const [pcountry,setPcountry] = useState('');
// const [pwebsite,setPwebsite] = useState('');

// function handleChange(e){
//   setPname(e.target.value);
// }
// console.log(pname);
// function handleChangePcode(e){
//   setPcode(e.target.value);
// }
// function handleChangeCfname(e){
//   setCfname(e.target.value);
// }
// function handleChangeClname(e){
//   setClname(e.target.value);
// }
// function handleChangePemail(e){
//   setPemail(e.target.value);
// }
// function handleChangePphone(e){
//   setPphone(e.target.value);
// }
// function handleChangePmobile(e){
//   setPmobile(e.target.value);
// }
// function handleChangePfax(e){
//   setPfax(e.target.value);
// }
// function handleChangePaddress_line1(e){
//   setPaddress_line1(e.target.value);
// }
// function handleChangePaddress_line2(e){
//   setPaddress_line2(e.target.value);
// }
// function handleChangePcity(e){
//   setPcity(e.target.value);
// }
// function handleChangePzip(e){
//   setPzip(e.target.value);
// }
// function handleChangePstate(e){
//   setPstate(e.target.value);
// }
// function handleChangePcountry(e){
//   setPcountry(e.target.value);
// }
// function handleChangePwebsite(e){
//   setPwebsite(e.target.value);
// }



// function addpartner(e)
//     {
//       e.preventDefault();
//       const addpartner={
//         pname,pcode,cfname,clname,pemail,pphone,pmobile,pfax,paddress_line1,paddress_line2,pcity,pzip,pstate,pcountry,pwebsite
//       };
//       Axios.post(`http://127.0.0.1:8000/api/addpartner`,addpartner).then(
//         (res) => {
//           alert("addpartner Successfully Added",res);         
//           window.location.href="/addPartnernew";
//         }).catch(err => {
//           alert("Does not allowed duplicate value",err.message);
//         })
//     }
    

//   const [open, setOpen] = React.useState(false);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

//   const TextField = styled(TextField1)({
//     ".MuiInputLabel-root":
//     {
//       color:'#888888'
//     },

//     ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
//       borderColor:'#0077ef'
//      },
//      '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: '#e6e6e6',
//       },
//     },
//   });

//   return (
// <div>
//   <Button variant="outlined" onClick={handleClickOpen}>
//     Open form dialog
//   </Button>

//   <Dialog open={open} onClose={handleClose}  sx={{
//   "& .MuiDialog-container": {
//     "& .MuiPaper-root": {
//       width: "100%",
//       maxWidth: "700px",  // Set your wid]th here
//     },
//   },
// }}>



// <Box> 
//   <DialogTitle sx={{marginLeft:'267px'}}>Add Partners</DialogTitle>  
//   <form onSubmit={addpartner}>  
//     <DialogContent>
//           <Grid xs={12}>
//              <Grid xs={12}>
//                 <Typography 
//                       sx={{ borderBottom: "1px solid #efe9e9",
//                       padding:'2px',
//                       fontSize:'14px',
//                       fontWeight:'500',
//                       color:'black'}}>Contact
//                    </Typography>

//                 <Grid sx={{padding:'5px'}}>
//                      <Grid xs={12} sx={{display:'flex',marginTop:'12px'}} >
//                            <Grid xs={12}>
//                               <TextField fullWidth
//                                     label="Partner Name/Company"
//                                     id="pname"
//                                     InputProps={{ style: { fontSize: 14 ,} }}
//                                     InputLabelProps={{ style: { fontSize: 14} }}
//                                     size="small"
//                                     handleChange={handleChange}
                                    
//                                     />
//                              </Grid>

//                             <Grid  xs={12}  sx={{marginLeft:'10px'}}>
//                                   <TextField fullWidth
//                                     label="Partner Code"
//                                     id="pcode"
//                                     size="small"
//                                     InputProps={{ style: { fontSize: 14 } }}
//                                     InputLabelProps={{ style: { fontSize: 14} }}
//                                     sx={{fontSize:'14px'}}
//                                     handleChange={handleChangePcode}
//                                     />
//                               </Grid>
//                         </Grid>

//                         <Box sx={{display:'flex',marginTop:'12px'}} >
//                                 <Grid  xs={12} >
//                                   <TextField fullWidth
//                                       label="Contact First Name"
//                                       id="cfname"
//                                       size="small"
//                                       InputProps={{ style: { fontSize: 14 } }}
//                                       InputLabelProps={{ style: { fontSize: 14 } }}
//                                       sx={{fontSize:'14px'}}
//                                       handleChange={handleChangeCfname}
                                      
//                                       />
//                                 </Grid>

//                                 <Grid  xs={12}  sx={{marginLeft:'10px'}}>
//                                     <TextField fullWidth
//                                       label="Contact Last Name"
//                                       id="clname"
//                                       size="small"
//                                       InputProps={{ style: { fontSize: 14} }}
//                                       InputLabelProps={{ style: { fontSize: 14 } }}
//                                       sx={{fontSize:'14px'}}
//                                       handleChange={handleChangeClname}
//                                       />
//                                   </Grid>
//                          </Box>

//                                     <TextField  fullWidth 
//                                         sx={{marginTop:'12px',
//                                         fontSize:'14px'}}
//                                         label="Email"
//                                         id="pemail"
//                                         size="small"
//                                         InputProps={{ style: { fontSize: 14 } }}
//                                         InputLabelProps={{ style: { fontSize: 14 } }}
//                                         handleChange={ handleChangePemail}
//                                      /> 

//                           <Box sx={{display:'flex',marginTop:'12px'}} >
//                                 <Grid  xs={12} >
//                                     <TextField fullWidth
//                                       label="Phone"
//                                       id="pphone"
//                                       size="small"
//                                       InputProps={{ style: { fontSize: 14 } }}
//                                       InputLabelProps={{ style: { fontSize: 14 } }}
//                                       handleChange={ handleChangePphone}
//                                       />
//                                  </Grid>

//                                 <Grid  xs={12}  sx={{marginLeft:'10px'}}>
//                                     <TextField fullWidth
//                                       label="Mobile"
//                                       id="pmobile"
//                                       size="small"
//                                       InputProps={{ style: { fontSize: 14 } }}
//                                       InputLabelProps={{ style: { fontSize: 14 } }}
//                                       handleChange={ handleChangePmobile}
//                                       />
//                                   </Grid>
//                            </Box>

//                                   <TextField
//                                   fullWidth 
//                                   sx={{marginTop:'12px'}}
//                                   label="Fax"
//                                   id="pfax"
//                                   size="small"
//                                   InputProps={{ style: { fontSize: 14 } }}
//                                   InputLabelProps={{ style: { fontSize: 14 } }}
//                                   handleChange={ handleChangePfax}
//                                   /> 
//                    </Grid>
//            </Grid>
                
//                 <Grid  xs={12}>
//                       <Typography 
//                         sx={{ borderBottom: "1px solid #efe9e9",
//                         padding:'2px',fontSize:'14px',
//                         fontWeight:'500',color:'black',
//                         marginTop:'12px'}}>Address
//                      </Typography>

//                <Grid sx={{padding:'10px'}}>
//                       <TextField fullWidth sx={{marginTop:'12px'}}
//                         label="Address Line 1"
//                         id="paddress_line1"
//                         size="small"
//                         InputProps={{ style: { fontSize: 14 } }}
//                         InputLabelProps={{ style: { fontSize: 14 } }}
//                         handleChange={ handleChangePaddress_line1}
//                       /> 

//                         <TextField 
//                         fullWidth
//                         sx={{marginTop:'12px'}}
//                         label="Address Line 2"
//                         id="paddress_line2"
//                         size="small"
//                         InputProps={{ style: { fontSize: 14 } }}
//                         InputLabelProps={{ style: { fontSize: 14 } }}
//                         handleChange={ handleChangePaddress_line2}
//                         /> 


//               <Grid sx={{display:'flex',marginTop:'12px'}} >
//                    <Grid  xs={12}>
//                       <TextField fullWidth
//                         label="City"
//                         id="pcity"
//                         size="small"
//                         InputProps={{ style: { fontSize: 14 } }}
//                         InputLabelProps={{ style: { fontSize: 14 } }}
//                         handleChange={ handleChangePcity}
//                         />
//                     </Grid>

//                      <Grid  xs={12}  
//                         sx={{marginLeft:'10px'}}>
//                         <TextField fullWidth
//                           label="Zip"
//                           id="pzip"
//                           size="small"
//                           InputProps={{ style: { fontSize: 14 } }}
//                           InputLabelProps={{ style: { fontSize: 14 } }}
//                           handleChange={ handleChangePzip}
//                           />
                         
//                       </Grid>
//                  </Grid>

//                <Grid sx={{display:'flex',marginTop:'12px'}} >
//                    <Grid  xs={12}>
//                       <TextField fullWidth
//                         label="State"
//                         id="pstate"
//                         size="small"
//                         InputProps={{ style: { fontSize: 14 } }}
//                         InputLabelProps={{ style: { fontSize: 14 } }}
//                         handleChange={ handleChangePstate}
//                         />
//                     </Grid>

//                        <Grid  xs={12}  sx={{marginLeft:'10px'}}>
//                           <TextField fullWidth
//                             label="Country"
//                             id="pcountry"
//                             size="small"
//                             InputProps={{ style: { fontSize: 14 } }}
//                             InputLabelProps={{ style: { fontSize: 14 } }}
//                             handleChange={ handleChangePcountry}
                            
//                             />
//                       </Grid>
//                  </Grid>
//                             <TextField 
//                               fullWidth 
//                                 sx={{marginTop:'12px',fontSize:'14px'}}
//                                 label="Website"
//                                 id="pwebsite"
//                                 size="small"
//                                 InputProps={{ style: { fontSize: 14 } }}
//                                 InputLabelProps={{ style: { fontSize: 14 } }}
//                                 handleChange={ handleChangePwebsite}
                                
//                             /> 
//             </Grid>
//         </Grid>
//   </Grid>
//               <Grid xs={12} sx={{display:'flex'}}>
//                   <Grid xs={10}>

//                     </Grid> 
//                     <Grid xs={2} 
//                           sx={{display:'flex',
//                           justifyContent:'space-evenly'}}> 
//                       </Grid>
//                 </Grid> 

//                  {/* </Item>     */}
//   </DialogContent>

//       <DialogActions sx={{paddingRight:'251px',paddingBottom:'20px',textAlign:'center'}}>
//               <Button variant="outlined"  sx={{textTransform:'capitalize',backgroundColor:'#0077ef',fontSize:'14px',padding:'7px 9px', color:'white','&:hover': {backgroundColor: '#fff',color:'#0077ef' },}} type="submit">
//                     Create
//                 </Button>
//               <Button variant="outlined"   sx={{textTransform:'capitalize', backgroundColor:'#f3425f',borderColor:'#f3425f',padding:'7px 9px',fontSize:'14px', color:'white','&:hover': {backgroundColor: '#fff',color:'#f3425f',borderColor:'#f3425f', },}}>
//                     cancel
//               </Button>
//            </DialogActions>

// </form>
//   </Box>
// </Dialog>
//     </div>
//   );
// }
