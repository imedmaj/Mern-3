import React, { useEffect, useState } from 'react'
import Axios from "axios"
import { Link } from "react-router-dom"

export const Product = () => {
  const [product,setProduct]= useState([])
  useEffect(() => {
    Axios.get("http://localhost:5000/api/product/")
        .then(res => {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}, [])





  return (
    <div class="text-center fs.1">all Product
   
            {/* <p>{JSON.stringify(movies)}</p> */}
          
                 <table class="table table-bordered">
                 <thead>
                   <tr>
                     <th>Product</th>
                     <th>Price</th>
                       <th>Description</th>
                       <th>link</th>
                   </tr>
                 </thead>
                 { (product) ?
                    product.map((product) => {
                        return (
                       
                          <tbody>
                            <td>{product.product}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td><Link to={"/product/" + product._id}>
                                    <h3>open</h3>
                                </Link></td>
                          </tbody>
                      
                        )
                    }) : <h1>Loading ...</h1>
            }

       
</table>





    </div>
  )
}
export default Product
