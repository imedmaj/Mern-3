import React from 'react'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Form, } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import NavAddmin from './NavAddmin';
import NavUser from './NavUser';




const Nav = () => {
    const [logged, setLogged] = useState();
    const [userType, setUserType] = useState();
    const navigate = useNavigate();
  
    useEffect(()=>{
        
        const temp2 = localStorage.getItem("isLoggedIn");
        
        const savedStat = JSON.parse(temp2);       
      
        setLogged(savedStat);
        const temp = localStorage.getItem("usertype");
        
        const stat = JSON.parse(temp);       
      
        setUserType(stat);
        


      },);

      const logout = () => {
        alert('Loged out!')      
      
        localStorage.setItem('isLoggedIn',false)
        localStorage.setItem('usertype',JSON.stringify("")  )    
        
        

        navigate('/');
     
      };

    
  return (
   <div>
    {
logged ?  userType=="admin" ? <NavAddmin/> :<NavUser/>  :
<nav className="navbar navbar-expand-lg navbar-light fixed-top">
 <Link className="navbar-brand" id="id" to={'/'}>aramex</Link>
 <div className="nav-item"><Link className="nav-link" to={'/sign-in'}>Sign in</Link></div>
 
</nav>




    }
   </div> 
   
  )
}

export default Nav