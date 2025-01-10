import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'



export default function EditUsers() {
    let navigate = useNavigate()
    const {id}=useParams()
    const [user,setUsers]=useState({
        name:"",
        username:"",
        email:""
    
    })
    const {name,userName,email}=user
    
    const onInputChange=(e)=>{
        setUsers({...user, [e.target.name]:e.target.value})
      
    }
    useEffect(()=>{
        loadUsers();
    },[]);
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting user:", user); // Debug user object
        await axios.put(`${process.env.REACT_APP_API_URL}/users/${id}`, user);
        navigate("/");
    };
    const loadUsers=async()=>{
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`);
       setUsers(result.data);
    }
  return (
  <div className="container"> 
   <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Register User</h2>
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor='Name' className='form-label'>
                Name
            </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter Your Name '
            name='name'
            value={name}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor='UserName' className='form-label'>
                UserName
            </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter Your UserName '
            name='userName'
            value={userName}
            onChange={(e)=>onInputChange(e)}
          
            />
        </div>
        <div className="mb-3">
            <label htmlFor='Email' className='form-label'>
                E-mail
            </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter Your E-mail Address'
            name='email'
            value={email}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <button type='submit' className='btn btn-outline-success'>Submit</button>
        <Link  className='btn btn-outline-danger mx-2' to="/">Cencel</Link>
        </form>
    </div>
   </div>
  </div>
);
  
} 
