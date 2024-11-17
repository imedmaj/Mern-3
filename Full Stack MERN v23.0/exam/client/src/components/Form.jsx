import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';




const Form = () => {
    const [user, setuser] = useState();
    const [password, setPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const navigate = useNavigate();



    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:5000/api/login', {user, password})
        .then(res => {          
                       if(res.data.stat === "Success"){
               
               
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn',true)
                localStorage.setItem('usertype',JSON.stringify(res.data.type))
                localStorage.setItem('logedId',JSON.stringify(res.data._id))
                localStorage.setItem('user_name',JSON.stringify(res.data.user))
        
            
                navigate('/dash');
            }
            else{
                alert('Incorrect password! Please try again.');
               
                
            }
        })
        .catch(err => console.log(err));
    }



  return (
    <div  className="auth-inner">
    <form>
                <h3>Sign In</h3>
            

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter user ID"
                        onChange={(event) => setuser(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <Nav isLoggedIn={isLoggedIn}/>
            </form>
            </div>
  )
}

export default Form