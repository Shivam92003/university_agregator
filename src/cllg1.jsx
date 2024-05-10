import React from 'react'
import { useParams } from 'react-router-dom';
import "./cllg1.css";

const Cllg1 = () => {
  const {name} = useParams();
  
  return (
    
    <section>

  <header className="header">
    <img className='limg' src="./images/graph.jpg" alt="Image is loading" />
    <div className="navbar">
      <h1 >{name}</h1>
    

    </div>
  </header>



<div className="container">
  

<div className="left">

<div className="left1 l">
<h2> <center>RANKINGS</center> </h2>
<ul>
  <li>NIRF</li>
  <li>NAAC A+</li>
  <li>Times Higher Education</li>
</ul>

</div>
<div className="left2 l">
<h2> <center>PLACEMENT</center> </h2>
  <br></br>
    <ul>
      <li>HIGHEST PACKAGE</li>
      <li>AVERAGE PACKAGE</li>
      <li>TOP PLACED STUDENTS</li>
    </ul>
  
</div>
<div className="left3 l">
<h2> <center>INFRASTRUCTURE</center> </h2>
  <ul>
    <li></li>
  </ul>
</div>




</div>


<div className="right ">
<h2><center className='r'>COURSES OFFERED</center></h2>
<div className='right-div'>
<ul>
  <li>Engineering</li>
  <li>Medical</li>
  <li>Agriculture</li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
</div>
</div>
</div>







    </section>

      
   
  )
}

export default Cllg1


