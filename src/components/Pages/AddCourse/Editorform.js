import React, { Component } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


export default class Uploadform extends Component {
  state ={
    editorState:EditorState.createEmpty(),
  }

  onEditorStateChange =(editorState) => {
    this.setState({
      editorState,
    });
  };
  
  render()
  {
  const {editorState} = this.state;

    return (
      <div>
        <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>;
      </div>
    
    )
  }
}













































// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import {Card,CardMedia} from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import { styled } from '@mui/material/styles';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';


// const Uploadform = () => {
//   const Input = styled('input')({
//     display: 'none',
//   });



//   return (
//     <Box>
//     <Typography sx={{ background:'#6160dc', width: 'max-content',borderTopRightRadius:'5px', borderTopLeftRadius:'5px',height: '25px',color:'white',padding:'2px 10px'}}>Upload New Media</Typography>
// <Card sx={{padding:'50px',height:'400px'}}>               
      
//       <Card sx={{ border: '1px dashed grey', width:'100%',height:'100%',padding:'9% 50%' }}>
//       <label htmlFor="icon-button-file">
//       <Input accept="image/*" id="icon-button-file" type="file" />
//         <IconButton color="primary" aria-label="upload picture" component="span">
//           <PhotoCamera  />
//         </IconButton>
//         </label> 
//          </Card>
         
       
     
    
// </Card>
// </Box>
//   )
// }

// export default Uploadform