import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid  d-flex justify-content-center align-items-center w-100">
  <Link
          className="navbar-brand text-center shadow green-border"
        to="/"
          style={{ flex: 1 }}
        >
          User Management Application
        </Link>
    <button className="navbar-toggler"
     type="button"
      data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent" 
       aria-controls="navbarSupportedContent" 
       aria-expanded="false" 
       aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   <Link className="btn btn-outline-light" to="/addusers">Add User</Link>
  </div>
</nav>
    </div>
  )
}
