import React, { useEffect, useState } from 'react'
import axios from "axios"
import { redirect, useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"



export const Edit = () => {
    const navigate = useNavigate()
   
    const [price,SetPrice]=useState()
    const [description,SetDescription]=useState()
    const [product,setProduct]= useState([])
    const { id } = useParams()
   

    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${id}`)
        .then(res => {
            console.log(res.data)
            setProduct(res.data.product)
            SetPrice(res.data.price)
            SetDescription(res.data.description)
            
        })
        .catch(err => {
            console.log(err)
        })
}, [])


    const submitHandler = (e) => {
        
        e.preventDefault()
        console.log("cool")
        const tempObj = {
            product,
            price,
            description
            
        }
        console.log(tempObj)
        axios.patch(`http://localhost:5000/api/product/${id}`, tempObj)
            .then(res => {
                console.log("✅✅✅✅✅✅✅✅✅✅", res.data)
                alert (" the product is updated succsufuly")
               
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
    const submitHandler2 = (e) => {
        
        e.preventDefault()
        console.log("cool")
        const tempObj = {
            product,
            price,
            description
            
        }
        console.log(tempObj)
        axios.delete(`http://localhost:5000/api/product/${id}`, tempObj)
            .then(res => {
                console.log("✅✅✅✅✅✅✅✅✅✅", res.data)
                alert (" the product is deletted")
                navigate('/')
               
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
           
    
            <form class="text-center fs.1"  >
                <div >
                    <label class="badge bg-light text-dark">Product: </label>
                    <input type="text"  value={product} onChange={e => { setProduct(e.target.value) }}/>
                    
                </div>
                <div>
                    <label class="badge bg-light text-dark">Price </label>
                    <input type="text" value={price} onChange={e => { SetPrice(e.target.value) }} />
                    
                </div>
                <div>
                    <label class="badge bg-light text-dark" >Description </label>
                    <input type="text"  value={description} onChange={e => { SetDescription(e.target.value) }}/>
                        
            
                </div>  
                <br />

                <button type="submit" class="btn btn-secondary" onClick={submitHandler}>update</button> 
                <button type="submit" class="btn btn-danger" onClick={submitHandler2}>dellet</button>            
            </form >
          
    
        </div>
      )
    
}
export default Edit
