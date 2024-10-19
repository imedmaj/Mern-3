import logo from './logo.svg';
import './App.css';
import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import Error from './compoments/Error';
import Luke from './compoments/Luke';
import Luke2 from './compoments/Luke2'; 

function App() {
  const [list, setList] = useState(["people","planets"])
  const [ids, setIds] = useState([])
  const [target1, setTarget] = useState("people")
  const [target2, setTarget2] = useState()
  const nav = useNavigate()

  
  function targett(event){
    setTarget(event.target.value)
       
  }
  function calls (){
    if (target1==="people"){
      nav('/people/'+target2)

    }
    else if (target1==="planets")
      {
        nav('/planets/'+target2)
  
      }

   

  // const url = 'https://swapi.dev/api/'+target+'/'+target2+'/?format=json'
  // console.log(url)
 
  // axios.get(url)
  // .then(response => { 
   
  //    console.log(response.data) 
  
  // })
  // .catch(err => {
  //   console.log(err)
  // })
}


 

  return (
    <div>
      
      <select name="" id="" onChange={targett}  >
      {
        list.map(list=>(
         <option value={list}>{list}</option>
        ))
            
          }                 
                
              
         
      </select>
        
      <input
          type="text"
          onChange={(e) => {setTarget2(e.target.value);}}value={target2}
        /> 
        <button on onClick={calls}>submit</button>
   


    <Routes>
        
        <Route path='/people/:target2' element={<Luke />} />
        <Route path='/planets/:target2' element={<Luke2 />} />
        <Route path='/error' element={<Error />} />
      
      
      </Routes>


    </div>
  );
}

export default App;
