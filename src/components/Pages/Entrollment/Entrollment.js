import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {MenuItem,Select,InputLabel,FormControl} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Autocomplete from '@mui/material/Autocomplete';



const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },


];


const Text = styled(TextField)({
  '& label.Mui-focused': {
    color: '#888888',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});   


const MySelect = styled(Select)({
      
  '& label.Mui-focused': {
    color: 'black',
  },
  "& .MuiInputLabel-root":
  {
    color:'#888888'
  },

  ".Mui-focused .MuiOutlinedInput-notchedOutline":{
    borderColor:'#0077ef'
   },
   ".MuiOutlinedInput-notchedOutline":{
    borderColor:'#e6e6e6'
   },
});





const TAX_RATE = 0.07;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));




  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  
  function priceRow(qty, unit) {
    return qty * unit;
  }
  
  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }
  
  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  
  const rows = [
    createRow('Paperclips (Box)',900, 1),
    // createRow('Paper (Case)', 10, 45.99),
    // createRow('Waste Basket', 2, 17.99),
  ];
  
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;



  export default function CustomSeparator() {

    const [age1, setAge1] = React.useState('');
    const handleChange1 = (event) => {
    setAge1(event.target.value);
    };

    const [age2, setAge2] = React.useState('');
    const handleChange2 = (event) => {
    setAge2(event.target.value);
    };

    const [age3, setAge3] = React.useState('');
    const handleChange3 = (event) => {
    setAge3(event.target.value);
    };

    const [age4, setAge4] = React.useState('');
    const handleChange4 = (event) => {
    setAge4(event.target.value);
    };


    return (
      
    
        <Box>
            <Typography variant="h5" component="div" align="left" display="block" gutterBottom sx={{marginBottom:'4px'}}>
            Add Entrollment  
      </Typography>

            <Stack spacing={3} >
            <Breadcrumbs aria-label="breadcrumb" sx={{fontSize:'15px'}} separator={<NavigateNextIcon fontSize="30px" />}>
       
        <Link
          // underline="hover"
          sx={{ display: 'flex',fontSize:'14px', alignItems: 'center','&:hover': { color: '#1878f3 ' },textDecoration:'none' }}
          color="inherit"
          href="/"
        >
          Entrollments
        </Link>,
        <Typography
          sx={{ display: 'flex', alignItems: 'center',fontSize:'14px' }}
          color="#1878f3 "
        >
         Add Entrollments
        </Typography>
      </Breadcrumbs>
            </Stack>
            <Box  >
            
<Grid container spacing={2} marginTop={1}>
    <Grid item xs={9} >
         <Typography 
            sx={{ background:'#00bcd4 ',
            width: 'max-content',
            borderTopRightRadius:'5px',
            borderTopLeftRadius:'5px',
            height: '26px',
            color:'white',
            padding:'2px 10px',}}>
           Entrollment Details
         </Typography>

        <Item 
          sx={{display:'flex',
          textAlign:'left',
          boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',
          marginBottom:'38px',
          padding:'20px',
          color:'black',
          borderRadius:'0.25rempx'}}
        >
        <Grid  xs={4}>
           <Typography 
              sx={{ 
              padding:'16px',
              fontSize:'14px',
              background: '#f2f6f9',
              fontWeight:'500'}}>
              General
           </Typography>

           <Grid 
              sx={{float:'left',padding:'16px'}} >

        <Box 
            sx={{display:'flex',marginTop:'0px'}} >
              <Grid  xs={6} >
                  <Text  size="small"
                      label=" Date"
                      type="date"
                      InputProps={{ style: { fontSize: '14px',color:'#888888' } }}
                      InputLabelProps={{
                      style:{color:'#888888',fontSize: '14px'},
                      shrink: true,
                      }} fullWidth
                      sx={{".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                        borderColor:'#0077ef'
                       },

                       ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
                        borderColor:'#e6e6e6'
                       },

                      ".MuiInputLabel-root.Mui-focused":
                      {
                        color:'#0077ef !important'
                      },
                      
                      }}
                    /> 
               </Grid>

                   <Grid  xs={6}  sx={{marginLeft:'10px'}}>
                     <Text  size="small"
                        label="Time"
                        type="Time"
                        defaultValue='00:00'
                        InputProps={{ style: { fontSize: '14px',color:'#888888' }}}
                        InputLabelProps={{
                        style:{color:'#888888',fontSize: '14px'},
                        shrink: true,
                        }} fullWidth
                        sx={{".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                          borderColor:'#0077ef'
                         },
                         ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
                          borderColor:'#e6e6e6'
                         },
  
                        ".MuiInputLabel-root.Mui-focused":
                        {
                          color:'#0077ef !important'
                        }
                        }}
                      /> 
                    </Grid>
         </Box>

                  <Grid item  md={12} sx={{marginTop:'14px'}}>
                    <FormControl fullWidth size="small">
                        <InputLabel sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>Payment Status</InputLabel>
                        <Select   
                        value={age1}
                        label="Payment Status"
                        placeholder='type here'
                        onChange={handleChange1}
                        sx={{"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                          borderColor:'#0077ef'
                         },"& .MuiOutlinedInput-notchedOutline":{
                          borderColor:'#e6e6e6'
                         },}}
                        >
                        
                        <MenuItem value={20}>Pending Payment</MenuItem>
                        <MenuItem value={30}>Processing</MenuItem>
                        <MenuItem value={40}>On Hold</MenuItem>
                        <MenuItem value={50}>Completed</MenuItem>
                        <MenuItem value={60}>Cancelled</MenuItem>
                        <MenuItem value={70}>Refunded</MenuItem>
                        <MenuItem value={70}>Failed</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item  md={12} sx={{marginTop:'18px'}}>
                    <FormControl fullWidth size="small">
                        <InputLabel sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>Customer Type</InputLabel>
                        <MySelect 
                        value={age2}
                        label="Customer Type"
                        placeholder='type here'
                        onChange={handleChange2}
                        sx={{"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                          borderColor:'#0077ef'
                         },}}
                        >
                        <MenuItem value={20}>Pending Payment</MenuItem>
                        <MenuItem value={30}>Processing</MenuItem>
                        <MenuItem value={40}>On Hold</MenuItem>
                        <MenuItem value={50}>Completed</MenuItem>
                        <MenuItem value={60}>Cancelled</MenuItem>
                        </MySelect >
                    </FormControl>
                </Grid>
                </Grid>
       </Grid>
                 <Grid  xs={4}>
                   
                   <Typography sx={{ padding:'16px',fontSize:'14px',fontWeight:'500',background: '#f2f6f9'}}>
                     Billing  
                   </Typography>
                   <Grid sx={{float:'left',padding:'16px'}}>
                   <Box sx={{marginBottom:'0px',color:'#888888'}}>
                   <TextField fullWidth sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            borderColor:'#0077ef'
             },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
             borderColor:'#e6e6e6'
               },
               }}
                  label="Address Line 1"
                  id="outlined-size-small"
                  defaultValue="204 North Foxrun DriveBron"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  size="small"

                  
                   />
                   {/* <TextField fullWidth sx={{marginTop:'12px',fontSize:'14px',marginTop:'18px'}}
                  label="Address Line 2"
                  id="outlined-size-small"
                  defaultValue="204 North Foxrun DriveBron"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  size="small"
                   /> */}
                        <TextField fullWidth sx={{marginTop:'12px',fontSize:'14px',marginTop:'18px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
     borderColor:'#0077ef'
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
      borderColor:'#e6e6e6'
     },
  }}
                  label="Phone"
                  id="outlined-size-small"
                  defaultValue="917-809-4514"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  size="small"
                  
                   />

                <TextField fullWidth sx={{marginTop:'12px',fontSize:'14px',marginTop:'18px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
     borderColor:'#0077ef'
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
      borderColor:'#e6e6e6'
     },
  }}
                  label="Email"
                  id="outlined-size-small"
                  defaultValue="techsharpa@gmail.com"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  size="small"
                  
                   />
                   </Box>
                   <Box>
                 
                   </Box>
                   </Grid> 
                 </Grid>
                 <Grid  xs={4}>
                 <Typography sx={{ padding:'16px',fontSize:'14px',fontWeight:'500',background: '#f2f6f9'}}>Shipping</Typography>
                 <Grid sx={{float:'left',padding:'16px',}}>
                 <Box>
                 <TextField fullWidth sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
     borderColor:'#0077ef'
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
      borderColor:'#e6e6e6'
     },
  }} label=" shipping Address Line 1"
                  id="outlined-size-small"
                  defaultValue="204 North Foxrun DriveBron"
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  size="small"
                   />

<TextField fullWidth sx={{marginTop:'12px',fontSize:'14px',marginTop:'18px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
     borderColor:'#0077ef'
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
      borderColor:'#e6e6e6'
     },
  }}
                  label="Mobile"
                  id="outlined-size-small"
                  defaultValue="585-303-4570" 
                  InputProps={{ style: { fontSize: 14,color:'#444444' } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  size="small"
                  
                   />
                 
                    
                   </Box>
                 </Grid>
                 </Grid>
                 </Item> 

{/* 2nd column  */}

              <Typography  sx={{ background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px',marginTop:'-19px'}}>Course Details</Typography>
              <TableContainer component={Paper} sx={{boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',padding:'20px'}}>
      <Table aria-label="spanning table" sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
        <TableHead>
          {/* <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow> */}
          <TableRow sx={{background: '#f2f6f9'}}>
            <TableCell colSpan={5} sx={{fontSize:'14px',fontWeight:'500px'}}>Item</TableCell>
            <TableCell align="right" sx={{fontSize:'14px',fontWeight:'500px'}}>Cost</TableCell>
            <TableCell align="right" sx={{fontSize:'14px',fontWeight:'500px'}}>Qty</TableCell>
            <TableCell align="right" sx={{fontSize:'14px',fontWeight:'500px'}}>Total</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell colSpan={5} sx={{color:'#666666'}}>
              <Link
          // underline="hover"
          sx={{ display: 'flex', alignItems: 'center','&:hover': { color: 'blue' },textDecoration:'none' }}
          color="inherit"
          href="/"
          variant="h6">
         
         Variation Product Name
        </Link>
        <Box sx={{margin:'5px 0px',fontSize:'14px'}}>
        <b sx={{color:'#858585'}}> Variation ID : &nbsp; &nbsp; </b> 362643
        </Box>
        <Box sx={{margin:'5px 0px',fontSize:'14px'}}>
        <b> Attribute 1 : &nbsp; &nbsp; &nbsp; </b> Bundle of All 3
        </Box>
        <Box sx={{margin:'5px 0px',fontSize:'14px'}}>
        <b> Attribute 2 : &nbsp; &nbsp; </b>  Pay Yearly
        </Box>
               
              </TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={6}></TableCell>
            <TableCell align="right" sx={{fontSize:'14px',color:'#444444'}}>Item Subtotal :</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow> */}
          <TableRow>
          <TableCell colSpan={6}></TableCell>
            <TableCell align="right" sx={{fontSize:'14px',color:'#444444'}}>Order Total :</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Box sx={{display:'flex',justifyContent:'space-between',}}>
      <Button variant="outlined" size="small" sx={{textTransform:'capitalize',padding:'6px 9px', fontSize:'14px',backgroundColor:'#0077ef ',color:'white','&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',color:'#0077ef',borderColor:'#0077ef' },}}>
      Add items
      </Button>
      

      <Button variant="outlined" size="small"  sx={{textTransform:'capitalize',padding:'6px 9px', fontSize:'14px',backgroundColor:'#0077ef', color:'white','&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',color:'#0077ef',borderColor:'#0077ef' },}}>
        Recalculate
      </Button>
      </Box>
    </TableContainer>    
   

</Grid>
       
            {/* order action */}
                <Grid item xs={3} >
                <Typography sx={{ background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'#fff',padding:'2px 10px',boxShadow:'none !important'}}>Entroll Action</Typography>
                  <Item sx={{display:'flex',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',marginBottom:'38px',padding:'20px'}}> 
                  <Grid container spacing={1}> 
                  <Grid item  md={12}>
                    <FormControl fullWidth size="small" sx={{color:'#444444',fontSize:'14px'}}> 
                        <InputLabel sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>Choose an Action</InputLabel>
                        <Select 
                        value={age3}
                        label="Choose an Action"
                        placeholder='type here'
                        onChange={handleChange3}

                        sx={{ fontSize:'14px',"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                          borderColor:'#0077ef',
                         },"& .MuiOutlinedInput-notchedOutline":{
                          borderColor:'#e6e6e6'
                         },}}
                        >
                     
                        <MenuItem value={20} sx={{color:'#444444',fontSize:'14px'}}>Email invoice / order detsils to Customer</MenuItem>
                        <MenuItem value={30} sx={{color:'#444444',fontSize:'14px'}}>Resend new order Notification</MenuItem>
                        <MenuItem value={40} sx={{color:'#444444',fontSize:'14px'}}>Regenerate download permission</MenuItem>
                        <MenuItem value={50} sx={{color:'#444444',fontSize:'14px'}}>Completed</MenuItem>
                        <MenuItem value={60} sx={{color:'#444444',fontSize:'14px'}}>Cancelled</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid> 

                    <Grid item  md={12} marginTop={1}>
                    <Button variant="outlined" size="small"  sx={{float:'Right',padding:'6px 9px', fontSize:'14px',textTransform:'capitalize',backgroundColor:'#0077ef ',  color:'white','&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',color:'#0077ef',borderColor:'#0077ef' },}}>
                     Update
                  </Button>
                </Grid>
                </Grid>
                </Item>



               
{/* Course  permission  */}
                  <Typography sx={{ marginTop:'38px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px',marginTop:'-19px'}}>Course Permission</Typography>
                     <Item sx={{ boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',padding:'20px' }}>
                     <Grid container spacing={1} > 
                  <Grid item  md={12}>
                          <Stack fullWidth>
                          <Autocomplete size="small"
                          freeSolo
                          id="free-solo-2-demo"
                          
                          disableClearable
                          options={top100Films.map((option) => option.title)}
                          renderInput={(params) => (
                          <Text 
                          {...params}
                          label="Search for Course Name"
                          InputProps={{ 
                          ...params.InputProps,
                          type: 'search',style: { fontSize: '14px',color:'#444444' }
                          }}
                          sx={{ 
                            ".MuiInputLabel-root":{fontSize:'14px',color:'#888888'},
                            ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{ borderColor:'#0077ef' },
                            ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{ borderColor:'#e6e6e6' },
                            ".MuiInputLabel-root.Mui-focused":{color:'#0077ef'},
                          }}
                          />
                          )}
                          />
                          </Stack>
                          </Grid> 

                       <Grid item  md={12} marginTop={1}>
                          <Button variant="outlined" size="small"  sx={{float:'Right',padding:'6px 9px', fontSize:'14px',textTransform:'capitalize',backgroundColor:'#0077ef ',color:'white','&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',color:'#0077ef',borderColor:'#0077ef' },}}>
                     Grant Access
                     </Button>
                        </Grid>
                        </Grid>
                  </Item>


{/* Add note  */}
                  <Typography sx={{ marginTop:'38px',background:'#00bcd4', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px',marginTop:'20px'}}> Notes</Typography>
                     <Item sx={{ boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',padding:'20px',}}>
                  <Grid container spacing={1}> 
                  <Grid item  md={12}>
                     <Text size="small"
                              id="outlined-multiline-static"
                              label="Add Note"
                              multiline
                              InputProps={{ style: { fontSize: '14px',color:'#444444' } }}
                              sx={{
                                ".MuiInputLabel-root":{color:'#888888'},
                                ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{ borderColor:'#0077ef' },
                                " .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{ borderColor:'#e6e6e6' },
                                ".MuiInputLabel-root.Mui-focused":{color:'#0077ef'},
                              }}
                              rows={4}
                              fullWidth
                            />
                        </Grid> 


                        <Grid item  md={12} marginTop={1}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label"  sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>Choose on Order Notes</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={age4}
                                  label="Choose on Order Notes"
                                  onChange={handleChange4}
                                  sx={{ fontSize:'14px',"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                    borderColor:'#0077ef'
                                   },"& .MuiOutlinedInput-notchedOutline":{
                                    borderColor:'#e6e6e6'
                                   },}}
                                  
                                  inputProps={{style: {fontSize: 14}}}
                                  InputLabelProps={{style: {fontSize: 14}}}
                                >
                                  <MenuItem value={50} sx={{fontSize:'14px',color:'#444444'}}>Private Note</MenuItem>
                                  <MenuItem value={60} sx={{fontSize:'14px',color:'#444444'}}>Note to a Customer</MenuItem>
                                </Select>
                        </FormControl>
                        </Grid> 

                       <Grid item  md={12} marginTop={1}>
                        <Button variant="outlined" size="small"  sx={{float:'Right',fontSize:'14px',padding:'6px 9px',textTransform:'capitalize',backgroundColor:'#0077ef',borderColor:'#0077ef', color:'white','&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',color:'#0077ef',borderColor:'#0077ef' },}}>
                            Submit
                            </Button>
                            </Grid> 
                        </Grid>
                  </Item>
            
                </Grid>
               
</Grid> 
       </Box>

        </Box>
      );
     
    }


