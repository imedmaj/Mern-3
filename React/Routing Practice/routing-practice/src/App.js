import logo from './logo.svg';
import './App.css';
import Home from './compoments/Home.jsx';
import { Routes, Route } from "react-router-dom"

import Hello from './compoments/Hello.jsx';
import Number from './compoments/Number.jsx';

function App() {
  return (
    
      <div>
       
      
    
       
       <Routes>
        
        <Route path='/home' element={<Home />} />
        <Route path='/:id' element={<Number />} />
        
        <Route path='/hello/:col1/:col2' element={<Hello />} />
      
      </Routes>


      </div>
   
  );
}
  
 


export default App;