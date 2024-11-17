import React from 'react'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Form, } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



const NavAddmin = () => {

    const [logged, setLogged] = useState();
    const [userType, setUserType] = useState();
    const navigate = useNavigate();
    const [userName, setUserName] = useState();
  
    useEffect(()=>{
        
        const temp2 = localStorage.getItem("isLoggedIn");
        
        const savedStat = JSON.parse(temp2);       
      
        setLogged(savedStat);
        const temp = localStorage.getItem("usertype");
        
        const stat = JSON.parse(temp);       
      
        setUserType(stat);

        const temp3 = localStorage.getItem("user_name");
        
        const stat4 = JSON.parse(temp3);       
      
        setUserName(stat4);
        


      },);

      const logout = () => {
        alert('Loged out!')      
      
        localStorage.setItem('isLoggedIn',false)
        localStorage.setItem('usertype',JSON.stringify(""))  
        localStorage.setItem('logedId',JSON.stringify(""))  
        localStorage.setItem('user_name',JSON.stringify(""))  
        
        

        navigate('/');
     
      };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
<div className="container">

      
  <Link className="navbar-brand" id="id" to={'/dash'}>aramex</Link>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item"><Link className="nav-link " to={'/user'}>User Mangment</Link></li>
      <li className="nav-item"><Link className="nav-link " to={'/dash'}>Dashboard</Link></li>
      <li className="nav-item"><Link className="nav-link " to={'/sign-in'}>Request</Link></li>
      
    </ul>
  </div>
  <div>welcome <br />
  <span class="text-danger">{userName}</span>
  </div>
  <button className="btn btn-primary" on onClick={logout}>logout </button>
  
</div>
</nav>

  )
}

export default NavAddmin