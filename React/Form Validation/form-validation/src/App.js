import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [Firstname, setFirstname] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState("invalid mail address");
  useEffect(() => {
    const Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
 

    
    if (Regex.test(email)) {
        setMess("valid address")

    }

}, [email])

  return (
   
      <div>
       

          <form >
              <div>
                  <label>Firstname: </label>
                  <input type="text" value={Firstname} onChange={(e) => (setFirstname(e.target.value))} />
                  
              </div>
              <div>
                  <label>Last Name: </label>
                  <input type="text" value={LastName} onChange={(e) => (setLastName(e.target.value))} />
                 
              </div>
              <div>
                  <label>Email Address: </label>
                  <input type="text" value={email} onChange={(e) => (setEmail(e.target.value))} />
                  <h6 className="red" >{mess} </h6>
               
              </div>
            







          </form >


      </div>

  );
}

export default App;
