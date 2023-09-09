import React from 'react'
import  ReactDOM  from 'react-dom/client';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Bar from "./bar";
import Card from "./card"

import './index.css'

const UI =()=>{
  return (
    <div className='container'>
      
      <Button variant="contained">Contained</Button>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
     
      <Button variant="outlined" disabled>Outlined</Button>
      <h4>Button color</h4>
      <Button color='primary' variant="contained">primary</Button>
      <Button color='secondary' variant="contained">secondary</Button>
      <Button color='success' variant="contained">success</Button>
      <Button color='error' variant="contained">error</Button>
      <h4>custom style inline</h4>
      <Button sx={{padding:"10px",borderRadius:"20px"}}  color='error' variant="contained">error</Button>
      <Button onClick={()=>console.log("Clicked")} sx={{padding:"10px",borderRadius:"20px"}} color='success' variant="contained">On Click</Button>

      <div>
        <Switch {...label} defaultChecked />
        <Switch {...label} />
        <Switch {...label} disabled defaultChecked />
        <Switch {...label} disabled />
      </div>
    </div>
    
   
  );
}

const ItemBox = ()=>{
  return(
    <div>

<Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    </div>
  );
}
const UseGrid = () => {
  return(<>
     <Grid container spacing={4}>
      <Grid item xs={8} sx={{backgroundColor:"red"}}/>
      <Grid item xs={8} sx={{backgroundColor:"red"}}/>
      <Grid item xs={8} sx={{backgroundColor:"red"}}/>
    </Grid>
  </>
 
  );
}
const App=()=>{
  return(
    <div>
      <Bar/>
      <div>
      <Card/>
      </div>
    </div>
  );
}



ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
