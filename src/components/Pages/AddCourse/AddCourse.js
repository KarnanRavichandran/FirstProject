import  React,{ useState } from 'react';
import { styled } from '@mui/material/styles';
import {Paper,Card,CardMedia,Grid,Container,IconButton,Box,Divider,MenuItem,Select,InputLabel,FormControl,Button,TextField,Typography} from '@mui/material';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Link from '@mui/material/Link';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { makeStyles } from "@material-ui/core/styles";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';




const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: '#fff',
    border: `1px solid ${'#007bff'}`,
    // boxShadow:'0px 2px 5px 5px #007bff40',
    color: '#007bff',
    width: 30, height: 30
  }
}));


const myTheme = createTheme({})
const MyBlock = (props) => {
  return (
      <div style={{
          padding: 10,
          backgroundColor: "#ebebeb",          
      }}>
          My Block content is:
          {props.children}
      </div>
  )
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};


const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[800]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;


const Items = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  }));

 const MyTextFeild = styled(TextField)(({theme})=>({
  margin: theme.spacing(2),
  width:'97%',
 })) ;

 const ButtonBox = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    // margin: theme.spacing(1.5),
    
    

 })) ;

 const ButtonType = styled(Button)(({theme})=>({
  background:'rgb(0 109 218)',
  color:'#fff',
  '&:hover': {
    backgroundColor: 'rgb(0 109 218)',
  },
 }));

 const DeleteFab = styled(Fab)(({theme})=>({
        marginTop: theme.spacing(1),
        // marginRight: theme.spacing(2),
        background: '#f34461',
        '&:hover': {
          background: '#f34461',
        color: '#fff',
        },

 }));

export default function AddCourse() {

  const [age10, setAge10] = React.useState('');
  const handleChange10 = (event) => {
    setAge10(event.target.value);
  };

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
   setAge(event.target.value);
  };

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
 const [age5, setAge5] = React.useState('');
 const handleChange5 = (event) => {
 setAge5(event.target.value);
};



 const userTemplate = {date:'', Days:'',Phone:'',Age:'',Status:'', TimeZone:'',Delivery:'',Days:'',time:'',Price:'',};
 const [users,setUsers] = useState([userTemplate]);
 const addUser =() => {
   setUsers([...users, userTemplate]);
 };
const removeUser =(index) =>{
 const filteredUsers = [...users];
 filteredUsers.splice(index, 1);
 setUsers(filteredUsers);

};

// new functiom editor

const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);
const handleEditorChange = (editorState) => {                              
  setEditorState(editorState);
}

const [editorState1, setEditorState1] = useState(() => EditorState.createEmpty(),);
const handleEditorChange1 = (editorState1) => {                              
  setEditorState1(editorState1);
}

const [editorState2, setEditorState2] = useState(() => EditorState.createEmpty(),);
const handleEditorChange2 = (editorState2) => {                              
  setEditorState2(editorState2);
}

const [editorState3, setEditorState3] = useState(() => EditorState.createEmpty(),);
const handleEditorChange3 = (editorState3) => {                              
  setEditorState3(editorState3);
}

const [editorState4, setEditorState4] = useState(() => EditorState.createEmpty(),);
const handleEditorChange4 = (editorState4) => {                              
  setEditorState4(editorState4);
}

const [editorState5, setEditorState5] = useState(() => EditorState.createEmpty(),);
const handleEditorChange5 = (editorState5) => {                              
  setEditorState5(editorState5);
}

         

  return (
<Box > 
<Typography variant="h5" component="div" align="left" display="block" gutterBottom sx={{marginBottom:'4px'}}>
            Add Course
      </Typography>
  {/* Breadcrumbs start  */}
       <Stack spacing={3} >
            <Breadcrumbs aria-label="breadcrumb" sx={{fontSize:'15px'}} separator={<NavigateNextIcon fontSize="30px" />}>
       
        <Link
          // underline="hover"
          sx={{ display: 'flex',fontSize:'14px', alignItems: 'center','&:hover': { color: '#0077ef' },textDecoration:'none' }}
          color="inherit"
          href="/"
        >
          Courses
        </Link>,
        <Typography
          sx={{ display: 'flex', alignItems: 'center',fontSize:'14px' }}
          color="#0077ef"
        >
         Add Course
        </Typography>
      </Breadcrumbs>
            </Stack>
        {/* Breadcrumbs end  */}

  <Grid container spacing={2} marginTop={1}>
        <Grid item xs={9} >
        {/* Course Title */}
                  <Typography sx={{ background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'#fff',padding:'2px 10px',boxShadow:'none !important'}}>Course Title</Typography>
                  <Card sx={{boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',borderRadius:'6px'}}>               
                  <MyTextFeild
                   id="outlined-textarea" 
                   label="Course Title"   
                   sx={{".MuiInputLabel-root":{fontSize:'14px',fontWeight:'500',color:'#888888'},
                   ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
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
                   size ='small'/> 
                  </Card>

                  {/*Course Overview */}

                  <Typography sx={{ marginTop:'30px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Course Overview</Typography>
                  <Grid sx={{backgroundColor:'white',padding:'20px',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',width:'100%',borderRadius:'6px'}}>
                  {/* editor */}
                  <Box sx={{border:'1px solid #ccc',height:'39vh',borderRadius:'6px',width:'100%',overflowY:'auto'}}>
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={handleEditorChange}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"             
                  />
                    
                  </Box>
                 </Grid>
      
                      {/* Course Schedule */}
                  <Typography sx={{ marginTop:'30px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Course Schedule</Typography>
                  <Card sx={{backgroundColor:'white',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',paddingLeft:'1px',borderRadius:'6px',padding:'40px 20px 0px 20px'}}>
               
    {/* < Paper component ={Box} p={6}> */}
     
     {
       users.map((user, index)=>(
        <Grid container spacing={1}  key={index}>
         
        <Grid item  md={2}>
        <TextField  size='small'
                    label="Start Date"
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
                    }
                    }}
                    /> 
        </Grid>
    
        <Grid item  md={1}>
        <TextField  size='small'
              label="Start Time"
              type ='time'
              defaultValue='00:00'
              fullWidth
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
              InputProps={{ style: { fontSize: '14px',color:'#888888' }}}
                    InputLabelProps={{
                    style:{color:'#888888',fontSize: '14px'},
                    shrink: true,
              }}
               /> 
        </Grid>

        <Grid item  md={1}>
        <FormControl fullWidth size='small'>
            <InputLabel sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>Zone</InputLabel>
            <Select
              value={age2}
              label="Zone"
              placeholder='type here'
              onChange={handleChange2}
              sx={{"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                borderColor:'#0077ef'
               },"& .MuiOutlinedInput-notchedOutline":{
                borderColor:'#e6e6e6'
               },}}
              >
               <MenuItem value={20}>ET</MenuItem>
               <MenuItem value={30}>CT</MenuItem>
               <MenuItem value={40}>MT</MenuItem>
               <MenuItem value={40}>PT</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item  md={2}>
         <FormControl fullWidth size='small'>
            <InputLabel sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>Delivery</InputLabel>
            <Select
              value={age}
              label="Delivery"
              placeholder='type here'
              onChange={handleChange}
              sx={{"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                borderColor:'#0077ef'
               },"& .MuiOutlinedInput-notchedOutline":{
                borderColor:'#e6e6e6'
               },}}
              >
              <MenuItem value={10}>Live Virtual Led</MenuItem>
              <MenuItem value={20}>Live Virtual Led with Assistance</MenuItem>
              <MenuItem value={30}>In-Classroom</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item  md={2}>
     <FormControl fullWidth size='small'>
            <InputLabel sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>Location</InputLabel>
            <Select
              value={age5}
              label="Location"
              placeholder='type here'
              onChange={handleChange5}
              sx={{"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                borderColor:'#0077ef'
               },"& .MuiOutlinedInput-notchedOutline":{
                borderColor:'#e6e6e6'
               },}}
              >
              <MenuItem value={10}>USA</MenuItem>
              <MenuItem value={20}>DUBAI</MenuItem>
              <MenuItem value={30}>SINGAPORE</MenuItem>
            </Select>
          </FormControl>
    </Grid>
        <Grid item  md={2} >
        <FormControl fullWidth size='small'>
            <InputLabel sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>Status</InputLabel>
            <Select
              value={age1}
              label="Status"
              placeholder='type here'
              onChange={handleChange1}
              sx={{"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                borderColor:'#0077ef'
               },"& .MuiOutlinedInput-notchedOutline":{
                borderColor:'#e6e6e6'
               },}}
              >
               <MenuItem value={20}>GTR</MenuItem>
               <MenuItem value={30}>Enrolling Now</MenuItem>
               <MenuItem value={40}>Year Subscription</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item  md={2}>
        <TextField  size='small'
        sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
          borderColor:'#0077ef'
           },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
           borderColor:'#e6e6e6'
             },
             ".MuiInputLabel-root.Mui-focused":
             {
               color:'#0077ef !important'
             },
             
             }}
               id="price"
               label="Sales Price"
               placeholder='Price'
               InputProps={{ style: { fontSize: '14px',color:'#888888' } }}
                    InputLabelProps={{
                    style:{color:'#888888',fontSize: '14px'},
                    shrink: true,
               }}
              />
        </Grid>


        
     <Grid item  md={2} my={1} >
     <FormControl fullWidth size='small'>
            <InputLabel sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>Select partner</InputLabel>
            <Select
              value={age3}
              label="Select partner"
              placeholder='type here'
              onChange={handleChange3}
              sx={{"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                borderColor:'#0077ef'
               },"& .MuiOutlinedInput-notchedOutline":{
                borderColor:'#e6e6e6'
               },}}
              >
              <MenuItem value={10}>Live Virtual Led</MenuItem>
              <MenuItem value={20}>Live Virtual Led with Assistance</MenuItem>
              <MenuItem value={30}>In-Classroom</MenuItem>
            </Select>
          </FormControl>
    </Grid>


    <Grid item  md={1}  my={1}>
     <FormControl fullWidth size='small'>
            <InputLabel sx={{fontSize:'14px',color:'#888888',"&.Mui-focused":{color:'#0077ef'},}}>Code</InputLabel>
            <Select
              value={age4}
              label="Code"
              placeholder='type here'
              onChange={handleChange4}
              sx={{"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                borderColor:'#0077ef'
               },"& .MuiOutlinedInput-notchedOutline":{
                borderColor:'#e6e6e6'
               },}}
              >
              <MenuItem value={10}>K1</MenuItem>
              <MenuItem value={20}>T5</MenuItem>
              <MenuItem value={30}>L10</MenuItem>
              <MenuItem value={30}>XY</MenuItem>
            </Select>
          </FormControl>
    </Grid>

    <Grid item  md={1}  my={1}>
    <TextField fullWidth sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            borderColor:'#0077ef'
             },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
             borderColor:'#e6e6e6'
               },
               }}
              size='small'
              label="Days"
              placeholder='type here'
              variant="outlined" 
              
               /> 
        </Grid>

    <Grid item  md={2 }  my={1}>
    <TextField fullWidth sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            borderColor:'#0077ef'
             },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
             borderColor:'#e6e6e6'
               },
               ".MuiInputLabel-root.Mui-focused":
               {
                 color:'#0077ef !important'
               },
               
               }}
              size='small'
               label="Partner Price"
               placeholder='Retail Price'
               InputProps={{ style: { fontSize: '14px',color:'#888888' } }}
                    InputLabelProps={{
                    style:{color:'#888888',fontSize: '14px'},
                    shrink: true,
               }}
              />
        </Grid>


    <Grid item  md={2}  my={1}>
        <TextField  size='small'sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            borderColor:'#0077ef'
             },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
             borderColor:'#e6e6e6'
               },
               ".MuiInputLabel-root.Mui-focused":
               {
                 color:'#0077ef !important'
               },
               
               }}
               label="Zip code"
               placeholder='Code'
               InputProps={{ style: { fontSize: '14px',color:'#858585' } }}
                    InputLabelProps={{
                    style:{color:'#858585',fontSize: '14px'},
                    shrink: true,
               }}
              />
        </Grid>

      
               
        <Grid item  md={2}  my={1}>
        <TextField  size='small'sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            borderColor:'#0077ef'
             },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
             borderColor:'#e6e6e6'
               },
               ".MuiInputLabel-root.Mui-focused":
               {
                 color:'#0077ef !important'
               },
               
               }}
               label="Profit"
               placeholder='price'
               InputProps={{ style: { fontSize: '14px',color:'#858585' } }}
                    InputLabelProps={{
                    style:{color:'#858585',fontSize: '14px'},
                    shrink: true,
               }}
              />
        </Grid>

        <Grid item  md={2}  my={1}>
        <TextField sx={{fontSize:'14px',".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            borderColor:'#0077ef'
             },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{
             borderColor:'#e6e6e6'
               },
               ".MuiInputLabel-root.Mui-focused":
               {
                 color:'#0077ef !important'
               },
               
               }}
            size='small'
               label="Retail price"
               placeholder='price'
               InputProps={{ style: { fontSize: '14px',color:'#858585' } }}
                    InputLabelProps={{
                    style:{color:'#858585',fontSize: '14px'},
                    shrink: true,
               }}
              />
        </Grid>

        <Grid container justifyContent="flex-end">
          {/* <DeleteFab  onClick={() => removeUser(index)} size="small" color="secondary" sx={{marginBottom:'10px'}} > */}
        <Button  size='small' onClick={() => removeUser(index)} sx={{textTransform:'capitalize',textTransform:'capitalize',
              color:'#94979f',
              borderColor:'#f1f5f8',
              fontWeight:'400',
              padding:'3px',
              '&:hover': {color:'#f34461', },}}> 
       
        <RemoveCircleOutlineIcon size='small' />   <Typography sx={{fontSize:'14px',marginLeft:'2px'}}> Remove</Typography>
      
        {/* </DeleteFab> */}
         
        

        </Button>
        </Grid>
        </Grid>


       ))
     }
     <Grid container justifyContent="flex-start" sx={{}}>
       {/* <Fab size="small" color="primary"  onClick={addUser} sx={{backgroundColor:'#0077ef',marginTop:'-50px',}}>
       <AddIcon />
      </Fab>&nbsp; <Typography sx={{marginTop:'-38px',fontSize:'14px'}}> Add New</Typography> */}
      </Grid>
     <Button  size='small'  color="primary" onClick={addUser} sx={{textTransform:'capitalize',marginTop:'-71px',textTransform:'capitalize',
              color:'#94979f',
              borderColor:'#f1f5f8',
              fontWeight:'400',
              padding:'3px',
              marginBottom:'-20px',
              '&:hover': {color:'#0077ef', },
              }}>     <AddCircleOutlinedIcon /> <Typography sx={{fontSize:'14px',marginLeft:'2px'}}> Add New</Typography>

              </Button>
    {/* </Paper> */}

  </Card>

 {/* Who Should Attend */}
<Typography sx={{ marginTop:'30px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Who Should Attend</Typography>
<Card sx={{backgroundColor:'white', padding:'20px',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',borderRadius:'6px'}}>
<Box sx={{border:'1px solid #ccc',height:'39vh',borderRadius:'6px',width:'100%'}}>
<Editor
    editorState={editorState1}
    onEditorStateChange={handleEditorChange1}
    wrapperClassName="wrapper-class"
    editorClassName="editor-class"
    toolbarClassName="toolbar-class"
  />
</Box>
</Card>
                                  
{/* Prerequisites */}
<Typography sx={{ marginTop:'30px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Prerequisites</Typography>
<Card sx={{backgroundColor:'white', padding:'20px',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',borderRadius:'6px'}}>
<Box sx={{border:'1px solid #ccc',height:'39vh',borderRadius:'6px',width:'100%'}}>
<Editor
    editorState={editorState2}
    onEditorStateChange={handleEditorChange2}
    wrapperClassName="wrapper-class"
    editorClassName="editor-class"
    toolbarClassName="toolbar-class"
  />
</Box>
</Card>

 {/*objectives */}
<Typography sx={{ marginTop:'30px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>objectives</Typography>
<Card sx={{backgroundColor:'white', padding:'20px',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',borderRadius:'6px'}}>
  <Box sx={{border:'1px solid #ccc',height:'39vh',borderRadius:'6px',width:'100%'}}>
  <Editor
    editorState={editorState3}
    onEditorStateChange={handleEditorChange3}
    wrapperClassName="wrapper-class"
    editorClassName="editor-class"
    toolbarClassName="toolbar-class"
  />
</Box>
</Card>

 {/* Course Outline */}
<Typography sx={{ marginTop:'30px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Course Outline</Typography>
<Card sx={{backgroundColor:'white', padding:'20px',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',borderRadius:'6px'}}>
<Box sx={{border:'1px solid #ccc',height:'39vh',borderRadius:'6px',width:'100%'}}>
<Editor
    editorState={editorState4}
    onEditorStateChange={handleEditorChange4}
    wrapperClassName="wrapper-class"
    editorClassName="editor-class"
    toolbarClassName="toolbar-class"
  />
</Box>
</Card>

 {/*Course Short Discription  */}
<Typography sx={{ marginTop:'30px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Course Short Discription</Typography>
<Card sx={{backgroundColor:'white', padding:'20px',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',borderRadius:'6px'}}>
<Box sx={{border:'1px solid #ccc',height:'39vh',borderRadius:'6px',width:'100%'}}>
<Editor
    editorState={editorState5}
    onEditorStateChange={handleEditorChange5}
    wrapperClassName="wrapper-class"
    editorClassName="editor-class"
    toolbarClassName="toolbar-class"
  />
</Box>

</Card>
</Grid>


                <Grid xs={3} sx={{paddingLeft:'30px',}}>
                <Typography sx={{ background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Publish</Typography>
                   <Items sx={{boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',borderRadius:'6px'}}>
                          <Typography sx={{paddingBottom:'20px',marginTop:'20px',fontSize:'14px'}} >
                          <Box sx={{display:'flex',justifyContent:'space-between'}}>
                            <Box sx={{display:'flex'}}>
                            <KeyIcon sx={{transform:'rotate(90deg)',marginRight:'7px',color:'#888888'}}/>
                          <Box> Status &nbsp; &nbsp; &nbsp;: Draft <Link href="#" sx={{marginLeft:'10px',color:'#0077ef',}}>Edit</Link></Box> </Box>
                           <Box >
                           <Button variant="outlined"  sx={{textTransform:'capitalize',fontSize:'14px',padding:'6px 9px',backgroundColor:'#0077ef',marginTop:'-10px', color:'white','&:hover': {backgroundColor: '#5ec797',
                    color:'white',border:'#5ec797' },}}>
                            Publish
                            </Button>
                            </Box>
                           </Box>  
                          </Typography>

                          <Typography sx={{paddingRight:'100px',paddingBottom:'30px',fontSize:'14px'}} >
                          <Box sx={{display:'flex'}}>
                            <VisibilityOutlinedIcon sx={{marginRight:'7px',color:'#888888'}}/>
                            Visibility &nbsp;:  Public <Link href="#" sx={{marginLeft:'10px',color:'#0077ef'}}>Edit</Link></Box>  
                          </Typography>

                          <Typography sx={{paddingRight:'50px',fontSize:'14px'}} >
                          <Box sx={{display:'flex'}}>
                          <CalendarMonthOutlinedIcon sx={{marginRight:'7px',color:'#888888'}}/>
                          Publish &nbsp;&nbsp;&nbsp;: Immediately <Link href="#" sx={{marginLeft:'10px',color:'#0077ef'}}>Edit</Link></Box>                
                          </Typography>
                          <Divider sx={{marginTop:'20px',marginBottom:'20px'}}/>



            {/* Right-side button groups functional start */}
            <ButtonBox>
            {/* <ButtonType variant="outlined"  size="small" sx={{textTransform:'capitalize !important','&:hover': {backgroundColor: '#1878f3',color:'#fff'}}}> Save Draft</ButtonType> 
            <ButtonType variant="outlined"  size="small" sx={{textTransform:'capitalize !important','&:hover': {backgroundColor: '#1878f3',color:'#fff'}}}> Preview</ButtonType> 
            <ButtonType variant="outlined" size="small" sx={{textTransform:'capitalize !important','&:hover': {backgroundColor: '#1878f3',color:'#fff'}}}> Publish</ButtonType>  */}
             <Button variant="outlined" size="small"  sx={{textTransform:'capitalize',fontSize:'14px', padding:'6px 9px',borderColor:' #0077ef',
        color: '#0077ef', '&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',borderColor:'#0077ef',color:'0077ef' },}}>
             Save Draft
      </Button>
      <Button variant="outlined" size="small"  sx={{textTransform:'capitalize', fontSize:'14px',padding:'6px 9px',borderColor:' #0077ef',
        color: '#0077ef',  '&:hover': {backgroundColor: 'rgba(25, 118, 210, 0.04)',borderColor:'#0077ef',color:'0077ef' },}}>
      Preview
      </Button>
     
            
            </ButtonBox>

            </Items>


                     <Typography sx={{ marginTop:'30px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Categories</Typography>
                     <Items sx={{height:'170px',boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',borderRadius:'6px'}}>
                            <TabsUnstyled defaultValue={0} sx={{color:'red'}} >
                                  <TabsList sx={{backgroundColor:'#e9edf0'}}>
                                      <Tab sx={{fontSize:'14px',  '&:hover': {backgroundColor: '#0077ef',color:'#fff '}}}>All Categories</Tab>
                                      <Tab sx={{fontSize:'14px','&:hover': {backgroundColor: '#0077ef',color:'#fff '}}}>Most used</Tab>
                                  </TabsList>
                                    <TabPanel value={0} sx={{fontSize:'14px'}}>All Categories</TabPanel>
                                    <TabPanel value={1} sx={{fontSize:'14px'}}>Most Used</TabPanel>
                            </TabsUnstyled>
                     </Items>

                          {/* Course Images */}
                     <Typography sx={{ marginTop:'30px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Feature Images</Typography>
                       <Items sx={{boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',borderRadius:'6px'}}>

                           <Card sx={{boxShadow:'none'}} >
                              <CardMedia 
                                      component="img"
                                      image="https://images.unsplash.com/photo-1655184823940-6f83083b3266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" sx={{width:'100%',height:'90%',objectFit:'cover'}} />
          <Button 
              size="small"
              href="#outlined-buttons"
              sx={{textTransform:'capitalize',
              color:'#94979f',
              marginLeft:'153px',
              borderColor:'#f1f5f8',
              fontWeight:'400',
              padding:'3px',
              '&:hover': {color:'#0077ef', },
              }}>
            <CameraAltOutlinedIcon  />
            <Typography sx={{marginLeft:'2px',fontSize:'14px'}}> Add New</Typography>
          </Button>
          
            {/* <Fab  variant="contained"
            component="label"
            size='small'
            sx={{
             marginLeft:'153px',
            border:'1px solid #0077ef',
            marginTop:'10px',
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
                          </Card>
                     </Items>

                     {/* Course Tag */}
                     <Typography sx={{ marginTop:'30px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Course Tags</Typography>
                     <Items sx={{boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',borderRadius:'6px'}}>
                            <FormControl  sx={{ width:'100%' }} size='small'>
                                <InputLabel id="demo-simple-select-label" sx={{fontSize:'14px'}}>Course Tags</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={age10}
                                  label="Course Tags"
                                  onChange={handleChange10}
                                  sx={{"&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                    borderColor:'#0077ef'
                                   },"& .MuiOutlinedInput-notchedOutline":{
                                    borderColor:'#e6e6e6'
                                   },}}
                                  >
                                  <MenuItem value={50}>Eastern Time</MenuItem>
                                  <MenuItem value={60}>Central Time</MenuItem>
                                  <MenuItem value={70}>Mountain Time</MenuItem>
                                  <MenuItem value={80}>Pacific Time</MenuItem>
                                </Select>
                        </FormControl>
                  </Items>
        
            {/* Add Product Gallery images */}
                     <Typography sx={{ marginTop:'30px',background:'#00bcd4 ', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '26px',color:'white',padding:'2px 10px'}}>Course Gallery</Typography>
                     <Items sx={{boxShadow:'0 1rem 3rem rgb(0 0 0 / 8%)',borderRadius:'6px'}}>
                      <Button variant ="outlined"  sx={{width:'100%',height:'60px',fontSize:'14px'}}>Add Product Gallery images</Button>   
                     </Items>
                 </Grid> 
      </Grid>
      </Box>
        );
        }

