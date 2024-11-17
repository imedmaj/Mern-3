import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { redirect, useNavigate } from 'react-router-dom'

export const OneProduct = () => {
    const [product,setProduct]= useState([])
    const { id } = useParams()
    const navigate = useNavigate()   

    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${id}`)
        .then(res => {
            console.log(res.data)
            setProduct(res.data)
            
        })
        .catch(err => {
            console.log(err)
            navigate('/')
        })
}, [id])


  return  (
    <div class="text-center fs.1">this product
   
            {/* <p>{JSON.stringify(movies)}</p> */}
          
                 <table class="table caption-top">
                 <thead>
                   <tr>
                     <th>Product</th>
                     <th>Price</th>
                       <th>Description</th>
                     
                   </tr>
                 </thead>
              
                          <tbody>
                            <td>{product.product}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                           
                          </tbody>
                      
             

       
</table>





    </div>
  )
}
export default OneProduct
