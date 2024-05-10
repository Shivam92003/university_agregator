import React, { useEffect, useState } from 'react'
import {Box, Button, Grid, InputAdornment, Pagination, TextField, Typography} from "@mui/material"
import { MagnifyingGlass } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Search from './components/Search';
import { blue } from '@mui/material/colors';
import ReactLoading from 'react-loading';



function FeaturedProducts() {
  
  return (
    <Box sx={{ width: '100%', maxWidth: '960px', margin: '0 auto', padding: '4rem 2rem 8rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography  variant="h1" component="h1"  fontFamily={'Times New Roman'} fontSize={50}>
        Registered Colleges
      </Typography>
      <Box sx={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
        
        <TextField
          fullWidth
          label="Search products..."
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end"   >
                <MagnifyingGlass sx={{ color: 'grey.500'}} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}




const ProductCard = ({ college }) => {
  const navigate = useNavigate();
  return(
    <Grid item>
  <Box sx={{ height: "60vh",width: "20vw",bgcolor: 'background.paper', borderRadius: 2, overflow: 'hidden',boxShadow: 10, my: 2,marginLeft:'38px',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
    <img src={faker.image.avatarGitHub()} alt={"placeholder"} style={{ width: 200, height: 150 ,position:'relative',left:20, top:10,}} />
    <Box p={2}>
      <Typography variant="h6" gutterBottom style={{ fontSize: '18px', fontWeight: 'bold' }}>
        {college.college_name}
      </Typography>
      <Typography variant="body2" color="text.secondary"  style={{ fontFamily:'fantasy',fontSize:'16px', color:'green' }}>
        {`aicte rank :${college.rank}`}
      </Typography>
      <Typography variant="body2" color="text.secondary" style={{ fontFamily:'sans-serif',fontSize:'15px', color:'blue'}}>
        {`${college.city}, ${college.state}`}
      </Typography>
      <Button className='more_info' onClick={()=> navigate(`/college/${college.college_name}`)}  style={{border:2, backgroundColor:'#A0DEFF',color:'#31363F',padding:3,fontFamily:'fantasy'}}>More info..</Button>
      
    
            {/* <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to={"/college"} state= {{collegeName: `${college.name}`}}>
                More info...
            </NavLink> */}
    </Box>
  </Box></Grid>
);}


const Test = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate()

  function goTocollege(){
    navigate("/college", {state: {"name":data.name}})
  }
  useEffect(()=>{
    fetch("https://graphathon-back.onrender.com/college/details")
    .then(response=>response.json())
    .then(json=>{
      console.log(json.details);
      setData(json.details);})
      .catch(error=>console.error(error));
  },[]);

    return (
    <>
    <FeaturedProducts/>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data? data.map(collegeMeta=><ProductCard onClick={goTocollege} college={collegeMeta.data}/>):<ReactLoading/>}
      

      </Grid>
    </Box>
    {/* <Search/> */}
    {/* <Pagination/> */}
  
     
      
    </>
  )
}

export default Test





