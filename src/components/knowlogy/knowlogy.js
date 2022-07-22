import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Box, Toolbar, List, ListItemButton, ListItemIcon, ListItemText, Collapse, CssBaseline, Typography, IconButton,Tooltip } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';  //CardMedia
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CategoryIcon from '@mui/icons-material/Category';
import StyleIcon from '@mui/icons-material/Style';
import GroupIcon from '@mui/icons-material/Group';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import {Dashboard, MenuBook, GroupAdd, Collections, ExpandLess, ExpandMore } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {AppBar, Drawer, DrawerHeader,Search,SearchIconWrapper,StyledInputBase } from './knowlogy.style';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Path from '../../components/KnowlogyRoute/path';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [opens, setOpens] = React.useState(false);

  const handleClick = () => {
    setOpens(!opens);
  };

  const [opens1, setOpens1] = React.useState(false);

  const handleClick1 = () => {
    setOpens1(!opens1);
  };

  const [opens2, setOpens2] = React.useState(false);

  const handleClick2 = () => {
    setOpens2(!opens2);
  };


  return (
    <Box sx={{ display: 'flex',background:'#f2f6f9',minWidth:'100%',height: "365vh",border:'none' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{boxShadow:'10px 0 20px 5px #80808080',border:'none'}}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon sx={{color:'#fff',fontWeight:'500'}}/>
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}>
              <ListItemButton component="a" href="/"> Course
         {/* <CardMedia component="img" height="40" image="..\logo1.png" alt="Knowlogy Logo" 
         sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
         /> */}
         </ListItemButton>
          </Typography>
          {/* <Box >
          <ListItemText primary="Tags" sx={{color:'#fff',fontWeight:'500'}}/>
          </Box>
          <Box sx={{ flexGrow: 1}}/>
          <Box/> */}
          <Box sx={{display:'flex'}}>
          <Search sx={{margin:"12px"}}>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'#fff',fontWeight:'500'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{color:'#fff',fontWeight:'500'}}
            />
          </Search>
          </Box>
          <Box sx={{ flexGrow: 1}}></Box>
          <Box sx={{display:'flex'}}>
          <IconButton size="large" aria-label="search" sx={{color:'#fff',fontWeight:'500'}}>
            <Tooltip title="Entrollment" placement="bottom" arrow>
           <SchoolIcon/>
             </Tooltip>
            
          </IconButton>
          <IconButton size="large" aria-label="search" sx={{color:'#fff',fontWeight:'500'}}>
           
            <Tooltip title="Notifications" placement="bottom" arrow>
           <NotificationsIcon/>
             </Tooltip>
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            sx={{color:'#fff',fontWeight:'500'}}
           
          >
             <Tooltip title="User Account" placement="bottom" arrow>
           <AccountCircleIcon/>
             </Tooltip>
           
          </IconButton>  
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ background: '#001e3c',boxShadow:'0 0 0.875rem 0 rgb(41 48 66 / 5%)',border:'none',padding:'0'}}>
        <ListItemButton component="a" href="/">  
        <Typography variant="h6" noWrap component="div" sx={{
              marginRight: 0,
             color:'#fff'
            }}>Course</Typography>
        {/* <CardMedia component="img" height="50" image="..\logo1.png" alt="Knowlogy Logo" 
        sx={{
          marginRight: 5,
          ...(!open && { display: 'none' }),
        }}
        /> */}
        </ListItemButton>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <KeyboardDoubleArrowLeftIcon sx={{
          ...(!open && { display: 'none' }),color:'#fff'}}/>}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List sx={{ background: '#fff' }}>
         
       
         <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,padding:'16px' }} component="a" href="/">
           <SpeedOutlinedIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto',  justifyContent: 'center',color:'black'  }} >
           <Tooltip title="Dashboard" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
             <Dashboard/>
             </Tooltip>
             <Dashboard sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>
           </SpeedOutlinedIcon>

           {/* dashboard menu start */}
           <ListItemText sx={{ opacity: open ? 1 : 0,color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'} }}>Dashboard</ListItemText>
         </ListItemButton>
        

         <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2, }} onClick={handleClick}>
           <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto',  justifyContent: 'center',color:'black'  }} >
           
           <Tooltip title="Course" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <LocalLibraryOutlinedIcon/>
             </Tooltip>
             <LocalLibraryOutlinedIcon sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>
           </ListItemIcon>
           {/* course menu start 07/04/2022 karnan  */}
           <ListItemText sx={{ opacity: open ? 1 : 0,color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'} }} >Courses</ListItemText>
           <IconButton sx={{
              ...(open ? { display: 'block' }:{ display: 'none' })
            }}>  {opens ? <ArrowDropUpIcon sx={{color:'#ccc'}}/> : <ArrowDropDownIcon sx={{color:'#ccc'}}/>}</IconButton> 
         </ListItemButton>
         <Collapse in={opens} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ ...(open ? { pl: 4 }:{ pl: 2.5 }),".MuiTypography-root":{fontSize:"14px"} }} component="a" href="/allcourse">
            <ListItemIcon sx={{color:'black'}}>

            <Tooltip title="All Courses" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <LibraryBooksIcon/>
             </Tooltip>
             <ArrowRightIcon sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>
             
            </ListItemIcon>
            <ListItemText primary="All Courses" sx={{color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'}}}/>
          </ListItemButton>

          <ListItemButton sx={{ ...(open ? { pl: 4 }:{ pl: 2.5 }),".MuiTypography-root":{fontSize:"14px"} }} component="a" href="/addcourse">
            <ListItemIcon sx={{color:'black'}}>

            <Tooltip title="Add Course" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <AddBoxIcon/>
             </Tooltip>
             <ArrowRightIcon sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>
 
            </ListItemIcon>
            <ListItemText primary="Add Course" sx={{color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'}}}/>
          </ListItemButton>

          <ListItemButton sx={{ ...(open ? { pl: 4 }:{ pl: 2.5 }), }} component="a" href="/Categories">
            <ListItemIcon sx={{color:'black'}}>

            <Tooltip title="Categories" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <CategoryIcon/>
             </Tooltip>
             <ArrowRightIcon sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>
 
            </ListItemIcon>
            <ListItemText primary="Categories" sx={{color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'}}}/>
          </ListItemButton>

          <ListItemButton sx={{ ...(open ? { pl: 4 }:{ pl: 2.5 }) }}>
            <ListItemIcon sx={{color:'black'}}>

            <Tooltip title="Tags" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <StyleIcon/>
             </Tooltip>
             <ArrowRightIcon sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>

            </ListItemIcon>
            <ListItemText primary="Tags" sx={{color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'}}}/>
          </ListItemButton>
        </List>
      </Collapse>
         <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2 }} onClick={handleClick1}>
           <PeopleAltOutlinedIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto',  justifyContent: 'center',color:'black'  }} >
          
           <Tooltip title="Partner" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <GroupAdd/>
             </Tooltip>
             <GroupAdd sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>

           </PeopleAltOutlinedIcon>
           {/* partner start  */}
           <ListItemText sx={{ opacity: open ? 1 : 0,color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'} }} >Partners</ListItemText>
           <IconButton sx={{
             
              ...(open ? { display: 'block' }:{ display: 'none' }),
            }}>  {opens1 ? <ArrowDropUpIcon sx={{color:'#ccc'}}/> : <ArrowDropDownIcon sx={{color:'#ccc'}}/>}</IconButton>  
         </ListItemButton>
         <Collapse in={opens1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ ...(open ? { pl: 4 }:{ pl: 2.5 }) }}  component="a" href="/allpartner">
            <ListItemIcon sx={{color:'black'}}>

            <Tooltip title="All Partners" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <GroupIcon/>
             </Tooltip>
             <ArrowRightIcon sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>

            </ListItemIcon>
            <ListItemText primary="All Partners" sx={{color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'}}}/>
          </ListItemButton>

          <ListItemButton sx={{ ...(open ? { pl: 4 }:{ pl: 2.5 }) }} component="a" href="/addPartnernew">
            <ListItemIcon sx={{color:'black'}}>

            <Tooltip title="Add Partner" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <AddBoxIcon/>
             </Tooltip>
             <ArrowRightIcon sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>
 
            </ListItemIcon>
            <ListItemText primary="Add Partner" sx={{color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'}}}/>
          </ListItemButton>

        </List>
      </Collapse>
         <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2 }} onClick={handleClick2}>
           <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto',  justifyContent: 'center',color:'black' }} >
            
           <Tooltip title="Entrollment" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <SchoolOutlinedIcon/> 
             </Tooltip>
             <SchoolOutlinedIcon sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>
            
           </ListItemIcon>
           {/* Entrollment start 07/04/2022 karnan */}
           <ListItemText sx={{ opacity: open ? 1 : 0,color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'} }} >Entrollments</ListItemText>
           <IconButton sx={{
              ...(open ? { display: 'block' }:{ display: 'none' }),
            }}>  {opens2 ?<ArrowDropUpIcon sx={{color:'#ccc'}}/> : <ArrowDropDownIcon sx={{color:'#ccc'}}/>}</IconButton>  
         </ListItemButton>
         <Collapse in={opens2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ ...(open ? { pl: 4 }:{ pl: 2.5 }) }}>
            <ListItemIcon sx={{color:'black'}}>

            <Tooltip title="All Entrollment" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <AddToPhotosIcon />
             </Tooltip>
             <ArrowRightIcon sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>
 
            </ListItemIcon>
            <ListItemText primary="All Entrollments" sx={{color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'}}}/>
          </ListItemButton>

          <ListItemButton sx={{ ...(open ? { pl: 4 }:{ pl: 2.5 }) }}>
            <ListItemIcon sx={{color:'black'}}>

            <Tooltip title="Add Entrollment" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <AddBoxIcon/>
             </Tooltip>
             <ArrowRightIcon sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>
            
            </ListItemIcon>
            <ListItemText primary="Add Entrollment" sx={{color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'}}}/>
          </ListItemButton>

          
        </List>
      </Collapse>
         <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,padding:'16px' }} >
           <PermMediaOutlinedIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto',  justifyContent: 'center',color:'black'  }} >
            
           <Tooltip title="Media Gallery" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <Collections/>
             </Tooltip>
             <Collections sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>
            
           </PermMediaOutlinedIcon>
           {/* meadia gallery menu start 07/04/2022 karna */}
           <ListItemText sx={{ opacity: open ? 1 : 0,color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'} }} >Media </ListItemText>
         </ListItemButton>

         <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,padding:'16px' }} >
           <BadgeOutlinedIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto',  justifyContent: 'center',color:'black'  }} >
            
           <Tooltip title="users" placement="right" sx={{...(!open ? { display: 'block' }:{ display: 'none' }) }} arrow>
           <Collections/>
             </Tooltip>
             <Collections sx={{...(open ? { display: 'block' }:{ display: 'none' }) }}/>
            
           </BadgeOutlinedIcon>
           {/* meadia gallery menu start 07/04/2022 karna */}
           <ListItemText sx={{ opacity: open ? 1 : 0,color:'black',".MuiTypography-root":{fontSize:"15px",fontWeight:'500'} }} >Users</ListItemText>
         </ListItemButton>
     </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <DrawerHeader />
        <Typography paragraph>
       <Path/>
        </Typography>
        {/* <Typography paragraph> </Typography> */}
      </Box>
    </Box>
  );
}