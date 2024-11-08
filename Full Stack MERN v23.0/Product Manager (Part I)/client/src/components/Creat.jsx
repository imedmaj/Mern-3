import React, { useState } from 'react'
import axios from "axios"
import { redirect, useNavigate } from 'react-router-dom'
import Product from './Product'


export const Creat = () => {
    const navigate = useNavigate()
    const [product,SetProduct]=useState()
    const [price,SetPrice]=useState()
    const [description,SetDescription]=useState()

    const submitHandler = (e) => {
        
        console.log("cool")
        const tempObj = {
            product,
            price,
            description
            
        }
        console.log(tempObj)
        axios.post("http://localhost:5000/api/product/", tempObj)
            .then(res => {
                console.log("✅✅✅✅✅✅✅✅✅✅", res.data)
                navigate("/")
            })
            .catch(err => {
                console.log("❌❌❌❌", err.response.data.errors.title.message)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }



  return (
    <div>
       

        <form class="text-center fs.1" onSubmit={submitHandler} >
            <div >
                <label class="badge bg-light text-dark">Product: </label>
                <input type="text"  value={product} onChange={e => { SetProduct(e.target.value) }}/>
                
            </div>
            <div>
                <label class="badge bg-light text-dark">Price </label>
                <input type="text" value={price} onChange={e => { SetPrice(e.target.value) }} />
                
            </div>
            <div>
                <label class="badge bg-light text-dark" >Description </label>
                <input type="text"  value={description} onChange={e => { SetDescription(e.target.value) }}/>
                    
        
            </div>  
            <button type="submit" class="btn btn-secondary" >Creation</button> 
        </form >
        <Product/>
   

    </div>
  )


}
export default Creat
