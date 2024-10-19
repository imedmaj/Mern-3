import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

export const Luke = () => {
    const { target2 } = useParams()
   
    
    const [resullt, setResult] = useState(null)
    const nav = useNavigate()

    
    useEffect(() => {
         const url = 'https://swapi.dev/api/planets'+'/'+target2+'/?format=json'
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
                         <h1>{resullt.name}</h1>
                        <h2>climate :{resullt.climate}</h2>
                        <h2>terrain : {resullt.terrain}</h2>
                        <h2>Surface Water :{resullt.surface_water}</h2>
                        <h2>Population :{resullt.population}</h2>


                       
                    </div>

                ) : <h2>Loading ....</h2>
            }
      
      
    </div>
  )
}
export default Luke