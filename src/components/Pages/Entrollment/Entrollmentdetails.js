import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

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
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} sx={{".MuiDialog-paper":{width: "100%"}}}>
        <DialogTitle >Order Details</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
          <Typography sx={{marginTop:'-5px',marginBottom:'14px',fontSize:'15px',color:'#444444'}}>Billing details</Typography>

          <Box sx={{marginBottom:'10px',color:'#666666'}}>
          <Typography sx={{fontSize:'14px'}}>Briggs burton</Typography>
          <Typography sx={{fontSize:'14px'}}>NAAEE</Typography>
          <Typography sx={{fontSize:'14px'}}>1725 DeSales St NW</Typography>
          <Typography sx={{fontSize:'14px'}}>Washington,DC 20036</Typography>
          </Box>

          <Typography sx={{fontSize:'14px' ,color:'#666666'}}>Email</Typography>
          <Typography sx={{color:'#1878f3',marginBottom:'10px',fontSize:'14px'}}>entroll@oddcounts.com</Typography>
          <Typography sx={{fontSize:'14px',color:'#666666'}}>Phone</Typography>
          <Typography sx={{color:'#1878f3',marginBottom:'10px',fontSize:'14px'}}>9876543210</Typography>

        <Box >
          <Typography sx={{fontSize:'14px',color:'#666666'}}>Payment via</Typography>
          <Typography sx={{fontSize:'14px',color:'#666666'}}>Credit Card(stripe)</Typography>
          <Typography  sx={{color:'#1878f3',marginBottom:'10px',fontSize:'14px'}}>create/debitcard-details</Typography>
       </Box>
         

          {/* <Item 
          sx={{display:'flex',
          textAlign:'left',
          boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',
          marginBottom:'38px',
          padding:'30px',
        //   color:'black', 
          borderRadius:'0.25rempx'}}
        > */}
        <Grid sx={{display:'flex'}}>
        <Grid  xs={6}>
           <Typography 
              sx={{ borderBottom: "1px solid #ccc",
              padding:'10px',
              fontSize:'14px',
              fontWeight:'500'}}>
              Product 
           </Typography>
           <Grid  xs={12} sx={{padding:'16px'}}>
           <Typography sx={{fontSize:'14px',marginBottom:'7px',color:'#666666'}}>MS-700:&nbsp; Managing Microsoft Teams </Typography>
             <Typography sx={{fontSize:'14px',marginBottom:'7px',color:'#666666'}}>Delivery Format : &nbsp;Live Virtual Led</Typography>
             <Typography sx={{fontSize:'14px',marginBottom:'7px',color:'#666666'}}>Start Date :&nbsp;03/02/2022</Typography>
             <Typography sx={{fontSize:'14px',marginBottom:'7px',color:'#666666'}}>Days :&nbsp;5</Typography>
             <Typography sx={{fontSize:'14px',marginBottom:'7px',color:'#666666'}}>Status :&nbsp;GTR</Typography>
       </Grid>
       </Grid>
                 <Grid  xs={3}>
                   <Typography sx={{ borderBottom: "1px solid #ccc",padding:'10px',fontSize:'14px',fontWeight:'500',textAlign:'end'}}>
                   Quantity
                   </Typography>

                   <Grid sx={{padding:'16px'}}>
                   <Box sx={{marginBottom:'10px',color:'#666666'}}>
                     <Typography sx={{fontSize:'14px',textAlign:'end'}}>5</Typography>
                     
                     {/* <Typography sx={{fontSize:'14px'}}>PO Box 187</Typography>
                     <Typography sx={{fontSize:'14px'}}>Enfield, CT 06083</Typography> */}
                   </Box>
                   {/* <Box>
                   <Typography sx={{color:'#666666',marginBottom:'20px',fontSize:'14px'}}>Email address :</Typography>
                   <Typography sx={{color:'#666666',fontSize:'14px'}}>Phone:</Typography>
                   </Box> */}
                   </Grid> 
                 </Grid>
                 <Grid  xs={3} >
                 <Typography sx={{ borderBottom: "1px solid #ccc",padding:'10px',fontSize:'14px',fontWeight:'500',textAlign:'end'}}>Total</Typography>
                 <Grid sx={{padding:'16px'}}>
                 <Box>
                     <Typography sx={{color:'#666666',fontSize:'14px',textAlign:'end'}}>$1,475</Typography>
                     {/* <Typography sx={{color:'#666666',fontSize:'14px'}}>No Shipping address set.</Typography> */}
                    
                   </Box>
                 </Grid>
                 </Grid>
                 </Grid>
                 {/* </Item>  */}

            {/* To subscribe to this website, please enter your email address here. We
            will send updates occasionally. */}
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button variant="outlined" size="small" sx={{textTransform:'capitalize'}}>
         Edit
        </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
