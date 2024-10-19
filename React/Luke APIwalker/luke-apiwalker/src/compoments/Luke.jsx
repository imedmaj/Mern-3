import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

export const Luke = () => {
    const { target2 } = useParams()
   
    
    const [resullt, setResult] = useState(null)
    const nav = useNavigate()

    
    useEffect(() => {
         const url = 'https://swapi.dev/api/people'+'/'+target2+'/?format=json'
  console.log(url)
 
  axios.get(url)
  .then(response => { 
   
     console.log(response.data) 
     setResult(response.data)
  
  })
  .catch(err => {
    console.log(err)
    nav('/error')
  })
    }, [])
  return (
    <div> 

{
                resullt ? (
                    <div>
                        <h1>Name :{resullt.name}</h1>
                        <h2>Height :{resullt.height}</h2>
                        <h2>Mass : {resullt.mass}</h2>
                        <h2>Hair Color :{resullt.hair_color}</h2>
                        <h2>skin Color :{resullt.skin_color}</h2>
                    
                       


                       
                    </div>

                ) : <h2>Loading ....</h2>
            }
      
      
    </div>
  )
}
export default Luke