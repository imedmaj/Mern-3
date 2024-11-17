import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [Name, setName] = useState("")
  const [Number, setNumber] = useState("")
  const [Open, setOpen] = useState("")

  const [errors,setErrors]=useState(null)

  
  useEffect(() => {
    axios.get(`http://localhost:5000/api/STORE/${id}`)
        .then(res => {
            console.log(res.data)
            setName(res.data.Name)
            setNumber(res.data.Number)
            setOpen(res.data.Open)
           
        })
        .catch(err => {
            console.log(err)
        })
}, [id])

const checkHandler = () => {
  setOpen(!Open)
}


const submitHandler = (e) => {
  e.preventDefault()
    
    const tempObj = {
        Name,
        Number,
        Open,
       
        
    }
    console.log(tempObj)
    axios.patch(`http://localhost:5000/api/STORE/${id}`, tempObj)
   
        .then(res => {
            console.log("✅✅✅✅✅✅✅✅✅✅",id

            )
            
          
           
            navigate('/stores/'+id)
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




  return (
    <div>
       <div>
        <Link class="text-sm-end" to={"/"}>
          <h3>go back home</h3>
        </Link>
      </div>
      <div>
      <div class="text-xl-start"><h1>New Store</h1>
    <h5>add a Store!</h5>
    </div>
<div>
<form class="text-center fs.1" onSubmit={submitHandler} >
            <div >
                <label class="badge bg-light text-dark">Store Name: </label>
                <input type="text"  value={Name} onChange={e => { setName(e.target.value) }}/>
                
            </div>
            <div>
                <label class="badge bg-light text-dark">Store Number </label>
                <input type="number" value={Number} onChange={e => { setNumber(e.target.value) }} />
                
            </div>
            <div>
                <label class="badge bg-light text-dark" >Open </label>
                <input type="checkbox" checked={Open}
        onChange={checkHandler}/>
        
            </div>  
            <button type="submit" class="btn btn-secondary" >Edit Store</button> 
        </form >



</div>


    </div>
      </div>




)
}

export default Edit