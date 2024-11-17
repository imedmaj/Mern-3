import React, { useEffect, useState } from 'react';
import axios from "axios"
import { redirect, useNavigate } from 'react-router-dom'

const Add = () => {
  const navigate = useNavigate()
  const [Name,SetName]=useState()
  const [Number,SetNumber]=useState()
  const [Open,SetOpen]=useState(false)
  const [errors,setErrors]=useState(null)
 


  const checkHandler = () => {
    SetOpen(!Open)
  }

 

  const submitHandler = (e) => {
    e.preventDefault()
      
      const tempObj = {
          Name,
          Number,
          Open,
         
          
      }
      console.log(tempObj)
      axios.post("http://localhost:5000/api/Store/", tempObj)
     
          .then(res => {
              console.log("✅✅✅✅✅✅✅✅✅✅", res.data.newlyCreatedstore._id

              )
              console.log(Open)
            
             
              navigate('/stores/'+res.data.newlyCreatedstore._id)
          }
        )
          .catch(err => {
              console.log("❌❌❌❌", err.response.data.errors.title.message)
              const errorResponse = err.response.data.errors; // Get the errors from err.response.data
              const errorArr = []; // Define a temp error array to push the messages in
              for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                  errorArr.push(errorResponse[key].message)
              }
              // Set Errors
              setErrors(errorArr);
              navigate('/erri')
              
          })

  }




  return (<div>
    <div class="text-xl-start"><h1>New Store</h1>
    <h5>add a Store!</h5>
    </div>
<div>
<form class="text-center fs.1" onSubmit={submitHandler} >
            <div >
                <label class="badge bg-light text-dark">Store Name: </label>
                <input type="text"  value={Name} onChange={e => { SetName(e.target.value) }}/>
                
            </div>
            <div>
                <label class="badge bg-light text-dark">Store Number </label>
                <input type="number" value={Number} onChange={e => { SetNumber(e.target.value) }} />
                
            </div>
            <div>
                <label class="badge bg-light text-dark" >Open </label>
                <input type="checkbox" checked={Open}
        onChange={checkHandler}/>
        
            </div>  
            <button type="submit" class="btn btn-secondary" >Creation</button> 
        </form >



</div>


    </div>
  )
}

export default Add