import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Form, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'

const User = () =>  {

  const [logged, setLogged] = useState();
  const [userType, setUserType] = useState();
  const [logedId, setLogedId] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
      
      const temp2 = localStorage.getItem("isLoggedIn");
     
      const savedStat = JSON.parse(temp2);           
    
      setLogged(savedStat);  

      const temp3 = localStorage.getItem("usertype");
      const Stat = JSON.parse(temp3);
     
      setUserType (Stat)   
      const temp4 = localStorage.getItem("logedId");
      const Statt = JSON.parse(temp4);
     
      setLogedId (Statt)   



    },);

   


  const [user, setUser] = useState([])
  const [errors, setErrors] = useState(null);

  useEffect(() => {
      axios.get("http://localhost:5000/api/regist/")
      .then(res => {
          console.log("Back-End API Response: ",res.data)
          if(res.data && Array.isArray(res.data)){
              setUser(res.data);
          }
      })
      .catch(err => {
          console.error(err);
          setErrors("Failed to fetch tasks.")
      });
  }, [])

  const handleDeleteTask = (id) => {
    if (id===logedId){
      alert('you can not delet the logged in admin');
    }
    else{
      axios.delete(`http://localhost:5000/api/regist/${id}`)
      .then(() => {
          setUser(user.filter(user => user._id !== id));
      })
      .catch(err => {
          console.error(err);
          setErrors("Failed to delete User.")
      })
    }
  }

  const clicked =()=>{
    navigate('/addUser');
  }
  const handleModifiedUser=(id)=>
    {
    navigate(`/modifeduser/${id}`);
  }

 
return (

  <div>
 {
  
logged ? <div  className="auth-inner1">

      
<h1 className='text-center fs.1'>User Manager</h1>
<div className='text-center fs.1'> <button type="button" class="btn btn-success" onClick={(clicked)}>
                            Add User
                        </button></div>

{errors && <div className='alert text-danger'>{errors}</div>}
<table className='table table-striped'>
  <tr>
      <th className='text-center fs.1'>User Name</th>
      <th className='text-center fs.1'>Password</th>
      <th className='text-center fs.1'>Type</th>     
      <th className='text-center fs.1'>Action</th>
     
  </tr>

  <tbody>
      {
          user.map(user => (
              <tr key={user._id}>
                  <td className='text-center fs.1' value={user.user}>{user.user}</td>
                  <td className='text-center fs.1' >{user.password}</td>  
                  <td className='text-center fs.1' >{user.type}</td>         
                    <td className='text-center fs.1' >

                    <div>  
                    <button   type="button" class="btn btn-info" onClick={() => handleModifiedUser(user._id)}   >
                          Modifed
                      </button>
                      <span>   </span>

                      <button onClick={() => handleDeleteTask(user._id)} className='btn btn-danger'>
                          Delete
                      </button>
                      </div>

                  </td>

              </tr>
          ))
      }
  </tbody>
</table>
</div>
:
navigate('/')








}



  </div>
  
)
}

export default User