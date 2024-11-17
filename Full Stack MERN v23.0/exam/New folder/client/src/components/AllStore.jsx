
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { redirect, useNavigate } from 'react-router-dom'

const AllStore = () => {
    const [store,setStore]= useState([])
    const navigate = useNavigate()
    const [errors,setErrors]=useState(null)

    useEffect(() => {
      axios.get("http://localhost:5000/api/Store")
          .then(res => {
              console.log(res.data)
              setStore(res.data)
          
           
          })
          .catch(err => {
              console.log(err)
              
          })
  }, [])
  const deleteMe = (storeId) => {
    axios.delete(`http://localhost:5000/api/store/${storeId}`)
        .then(res => {
          console.log("✅✅✅✅✅✅✅✅✅✅", res.data)
          setStore(store.filter(store => store._id != storeId));
              navigate('/')
            
        })
        .catch(err => {
            console.log(err)
        })
}

  return (
    <div>AllStore
         <div class="text-lg-center">Store Finder</div>
         <div class="text-xl-start">Find Stores in your area !</div>
        <table class="table caption-top">
                 <thead>
                   <tr>
                     <th>Store</th>
                     <th>Store Number</th>
                       <th>Open</th>
                       <th>Remove</th>
                   </tr>
                 </thead>
                 { (store) ?
                    store.map((store) => {
                        return (
                       
                          <tbody key={store._id}>
                            <td>{store.Name}</td>
                            <td>{store.Number}</td>
                            <td>{store.Open ? "True" : "False"}</td>
                            <td> <button onClick={() => { deleteMe(store._id) }}>Delete ❌</button>    </td>
                          </tbody>
                      
                        )
                    }) : <h1>Loading ...</h1>
            }

       
</table>
<Link to={"/stores/add" }>
                            <button>Can't fin your store?</button> 
                                </Link>
                                



    </div>
  )
}

export default AllStore