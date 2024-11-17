import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Form, } from 'react-router-dom'

const ModifiedUser = () => {
    const { id } = useParams();
    const [logged, setLogged] = useState();
    const [userType, setUserType] = useState();
    const navigate = useNavigate();
    const [userName, setUserName] = useState({
        user:'',
        password:'',
        type:'',
        
    })
    const [errors, setErrors] = useState({
        title: '',
        content: '',
        priority: '',
    })
    useEffect(()=>{
        const temp2 = localStorage.getItem("isLoggedIn");        
        const savedStat = JSON.parse(temp2);  
        setLogged(savedStat);
        const temp = localStorage.getItem("usertype");
        const stat = JSON.parse(temp);       
        setUserType(stat);   
        axios.get(`http://localhost:5000/api/regist/${id}`)
        .then(res => {
          
            setUserName(res.data);
        })
        .catch(err => {
          console.error(err);
        })


      },[id]);

      
    const handleUser = (e) => {
        e.preventDefault();
        setUserName({ ...userName, user: e.target.value })
        if(e.target.value.length < 5){
            setErrors({ ...errors, title: "User Name least than 5 characters!!!" })
        }
        else{
            setErrors({...errors, title: "" })
        }
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setUserName({ ...userName, password: e.target.value })
        if(e.target.value.length < 8){
            setErrors({ ...errors, content: "Password must be least than 8 characters!!!" })
        }
        else{
            setErrors({...errors, content: "" })
        }
    }

    const handleType = (e) => {
        e.preventDefault();
        setUserName({ ...userName, type: e.target.value })
    }
        //! Handle Submission Form
        const handleSubmit = (event) => {
            event.preventDefault();
        
            axios.patch(`http://localhost:5000/api/regist/${id}`, userName)
            .then(res => {          
                if(res.data.stat === "Success"){
                alert("done")
     
         navigate('/user');
     }
     else{
         alert('the user did not created .');
       
        
         
     }
 })
 .catch(err => console.log(err));
}



  return (
    <div>
    {
        logged ? userType=="admin" ?
    <div className="auth-inner1">
        <h1 className='text-center fs.1'>Add User</h1>
    <form  >
        <div className='form-group row mb-3'>
        { <span className='text-danger h6'> {errors.title}</span>}
            <label className="col-sm-2 col-form-label" >User Name: </label>
            <div className='col-sm-10'>
                <input type="text" className='form-control'  value={userName.user} onChange={handleUser} />
            </div>
        </div>

        <div className='form-group row mb-3'>
        { <span className='text-danger h5'> {errors.content}</span>}
            <label className="col-sm-2 col-form-label" >Password: </label>
            <div className='col-sm-10'>
            <input type="text" className='form-control'  value={userName.password} onChange={handlePassword} />
            </div>
        </div>

        <div className='form-group row mb-3'>
            <label className="col-sm-2 col-form-label">Type: </label>
            <div className='col-sm-10'>
                <select class="form-select form-select-lg"   onChange={handleType} value={userName.type} >
                    <option value="admin">admin</option>
                    <option value="moderator">moderator</option>
                    <option value="user">user</option>
                </select>
            </div>
        </div>

        

        <button className='btn btn-success mt-5'onClick={handleSubmit}>Update User</button>

    </form>
</div>
:navigate('/dash'):navigate('/sign-in')}
</div>

  )
}

export default ModifiedUser