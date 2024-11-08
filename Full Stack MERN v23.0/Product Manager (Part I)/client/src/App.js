import { Button } from "bootstrap";
import React, { useState } from 'react'
import Creat from "./components/Creat";
import Prodcut, { Product } from "./components/Product";

import { Routes, Route, Link } from "react-router-dom"
import OneProduct from "./components/OneProduct";


function App() {
    return (
        
        <div className="App">
     



      <Routes>
       {/* DASHBOARD */}
        <Route path='/' element={<Creat />} />
        {/* ONE product */}
        <Route path='/product/:id' element={<OneProduct />} />
        {/* CREATE  */}
        <Route path='/product' element={<Product />} />
        {/* UPDATE */}
        {/* <Route path='/movies/:id/update' element={<Update />} /> */}
      </Routes>
        
          
        </div>
        
      );
    


}

export default App;
