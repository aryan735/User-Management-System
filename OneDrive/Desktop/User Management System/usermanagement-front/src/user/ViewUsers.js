import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUsers() {
    const [user,setUsers]=useState({
        name:"",
        userName:"",
        email:""
    
    })

    const {id}=useParams()

    useEffect(()=>{
loadUsers();
    },[])
    const loadUsers=async()=>{
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`);
        setUsers(result.data);
    };
  return (
    <div className="container"> 
   <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">User Details</h2>
        <div className="card">
            <div className="card-header">
                Details Of User Id :{user.id}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Name :</b>
                        {user.name}
                    </li>
                    <li className="list-group-item">
                        <b>UserName :</b>
                        {user.userName}
                    </li>
                    <li className="list-group-item">
                        <b>Email :</b>
                        {user.email}
                    </li>
                </ul>
            </div>
        </div>
        <Link className="btn btn-outline-success my-2 " to="/">Back To Home</Link>
        </div>
        </div>
        </div>
  );
}