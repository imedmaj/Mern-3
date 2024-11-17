import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom'
import Form from './components/Form'
import Dashbord from './components/Dashboard'


// import Login from './components/login'
import SignUp from './components/signup'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import User from './components/User'
import Home from './components/Home'
import AddUser from './components/AddUser'
import ModifiedUser from './components/ModifiedUser'


function App() {
  return (
    // <div>
    //   <Nav/>
    // </div>
  
    <Router  className="App">
 <Nav/>
      <div className="App">
        
        
     
      
        <div className="auth-wrapper">
          <div >
            <Routes>
              <Route  path="/" element={<Home/>} />
              <Route path="/sign-in" element={<Form />} />
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/user" element={<User />} />
              <Route path="/addUser" element={<AddUser />} />
              <Route path="/modifeduser/:id" element={<ModifiedUser />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App