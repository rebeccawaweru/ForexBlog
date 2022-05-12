import React, { useState } from 'react'
import {Box,Grid,Typography} from '@mui/material'
import {
  CustomCard
}from './Components'
import Countdown from 'react-countdown';
import {forexblog,forexnews, dailyanalysis} from '../src/assets'
function App() {
  const [d,setD] = useState(0)
  const [h,setH] = useState(0)
  const [m,setM] = useState(0)
  const [s,setS] = useState(0)
  const deadline = new Date('May 26, 2022 00:00:00 GMT+0200').getTime();
  var x = setInterval(function(){
    var now = new Date().getTime()
    var distance = deadline - now
    const days = Math.floor( distance/(1000*60*60*24) );
    setD(days)
    const hours = Math.floor( (distance % (1000*60*60*24)) / (1000*60*60));
    setH(hours)
    const minutes = Math.floor( (distance % (1000*60*60)) / (1000*60));
    setM(minutes)
    const seconds = Math.floor( (distance % (1000*60)) / (1000));
    setS(seconds)
    if(distance < 0){
      clearInterval();
      setD(0);
      setH(0);
      setM(0);
      setS(0);
    }
  },1000)
  return (
    <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
    overflowX: "hidden"}} className="bg">
     <Grid container sx={{display:"flex", mt:5, justifyContent:"center", alignItems:"center"}}>
      <CustomCard
      image={forexblog}
      title=""
      sx={{display:"none"}}
    />

     <CustomCard
       image={forexnews}
      title=""
      sx={{display:"none"}}
      description={<a href="http://www.forexfactorynews.com" style={{color:"#CCA300"}}>Forex Trading Factory</a>}
      btn="Read More"/>

 
       <CustomCard
        image={dailyanalysis}
      title=""
      sx={{display:"none"}}
      description={<a href="http://www.forexfactorynews.com" style={{color:"#CCA300"}}>Forex Factory News</a>}
      btn="Read More"/>
      </Grid>
      <Box sx={{justifyContent:"center", alignItems:"center",textAlign:"center"}}>
      <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              sx={{ marginTop: "30px",
             }}
              gutterBottom
            >
              COMING SOON
            </Typography>
        <Box sx={{display:{
          lg:'flex',
          md:"flex",
          xs:"block",
          sm:"block"
        },paddingLeft:{
           lg:0,
           md:0,
           sm:20,
           xs:20
        },justifyContent:"center", alignItems:"center",textAlign:"center"}}>
            <Box sx={{display:"block", padding:1,boxShadow:10,backgroundColor:"#CCA300", height:80, width:80, mx:2,mb:{
          lg:0,
          md:0,
          sm:2,
          xs:2
        }}}>
            <Typography variant="h5" component="h4">Days</Typography>
            <Typography variant="h5" component="h4">{d}</Typography>
            </Box>
            <Box sx={{display:"block", padding:1,boxShadow:10,backgroundColor:"#CCA300", height:80, width:80, mx:2,mb:{
          lg:0,
          md:0,
          sm:2,
          xs:2
        }}}>
            <Typography variant="h5" component="h4">Hours</Typography>
            <Typography variant="h5" component="h4">{h}</Typography>
            </Box>
            <Box sx={{display:"block", padding:1,boxShadow:10,backgroundColor:"#CCA300", height:80, width:100, mx:2,mb:{
          lg:0,
          md:0,
          sm:2,
          xs:2
        },}}>
            <Typography variant="h5" component="h4">Minutes</Typography>
            <Typography variant="h5" component="h4">{m}</Typography>
            </Box>
            <Box sx={{display:"block", padding:1,boxShadow:10,backgroundColor:"#CCA300", height:85, width:100, mx:2,mb:{
          lg:0,
          md:0,
          sm:2,
          xs:2
        },}}>
            <Typography variant="h5" component="h4">Seconds</Typography>
            <Typography variant="h5" component="h4">{s}</Typography>
            </Box>
        </Box>
      </Box>
   
    </Box>
  );
}

export default App;
