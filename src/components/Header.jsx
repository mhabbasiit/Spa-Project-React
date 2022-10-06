import React from 'react'

import { NavLink } from "react-router-dom";


function Header() {
  return (
    
    <>
      <div className="container " >
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg  navbar-dark bg-primary pl-4">
              <div className="container-fluid">
                My React Project
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Home</NavLink >
                    </li>
                    <li className="nav-item">
                      <NavLink to="/users" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Users</NavLink >
                    </li>
                    
                    <li className="nav-item">
                      <NavLink to="/posts" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Posts</NavLink >
                    </li>
                    
                    
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header