import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Form, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'





const Dashboard = () => {

    const [logged, setLogged] = useState();
    const [userType, setUserType] = useState();
    const navigate = useNavigate();
  
    useEffect(()=>{
        
        const temp2 = localStorage.getItem("isLoggedIn");
       
        const savedStat = JSON.parse(temp2);           
      
        setLogged(savedStat);  

        const temp3 = localStorage.getItem("usertype");
        const Stat = JSON.parse(temp3);
       
        setUserType (Stat)      



      },);

     


    const [tasks, setTasks] = useState([])
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/tasks")
        .then(res => {
            console.log("Back-End API Response: ",res.data)
            if(res.data.tasks && Array.isArray(res.data.tasks)){
                setTasks(res.data.tasks);
            }
        })
        .catch(err => {
            console.error(err);
            setErrors("Failed to fetch tasks.")
        });
    }, [])

    const handleDeleteTask = (id) => {
        axios.delete(`http://localhost:8000/api/tasks/delete/${id}`)
        .then(() => {
            setTasks(tasks.filter(task => task._id !== id));
        })
        .catch(err => {
            console.error(err);
            setErrors("Failed to delete task.")
        })
    }


  return (

    <div>
   {
    
logged ? <div  className="auth-inner1">

        
<h1 className='text-center fs.1'>SIM User Manager</h1>
{errors && <div className='alert text-danger'>{errors}</div>}
<table className='table table-striped'>
    <tr>
        <th className='text-center fs.1'>SF-ID</th>
        <th className='text-center fs.1'>Name</th>
        <th className='text-center fs.1'>Service</th>
        <th className='text-center fs.1'> Position</th>
        <th className='text-center fs.1'>Location</th>
        <th className='text-center fs.1'>Number</th>
        <th className='text-center fs.1'>Operator</th>
        <th className='text-center fs.1'>Forfait</th>
        <th className='text-center fs.1'>Action</th>
    </tr>

    <tbody>
    <tr >
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td className='text-center fs.1'>
                        <div>  <button className='btn btn-danger'>
                            Delete
                        </button>
                        <span>      </span>
                        <button type="button" class="btn btn-success">
                            Active
                        </button>
                        <span>      </span>
                        <button type="button" class="btn btn-info">
                            Modifed
                        </button>
                        
                        </div>

                      
                        <br />
                       
                      

                    </td>

                </tr>
        {/* {
            tasks.map(task => (
                <tr key={task._id}>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>

                        <Link to={`/api/tasks/${task._id}`} className='btn btn-info'>View</Link> | 
                        <Link to={`/api/tasks/edit/${task._id}`} className='btn btn-warning'>Edit</Link> | 

                        <button onClick={() => handleDeleteTask(task._id)} className='btn btn-danger'>
                            Delete
                        </button>

                    </td>

                </tr>
            ))
        } */}
    </tbody>
</table>
</div>
:
navigate('/sign-in')








}



    </div>
    
  )
}

export default Dashboard

// [
//     {"_id": "66fezjrjfnjrbfjr2", "title":"task1", "content": "content1", "priority": "Important", "dueDate":"2024-10-02" },
//     {"_id": "66fezjrjfnjrbfmmoi1", "title":"task2", "content": "content2", "priority": "Normal", "dueDate":"2024-10-03" },
// ]