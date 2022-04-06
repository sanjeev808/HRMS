import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './StyleDashboard.css'
import cloud from '../../img/cloud-hr.png'
import Photo from '../../img/Photo.jpg'
import { NavLink } from 'react-router-dom';
export default function DashBoard() {
  let UserName="Sanju";
  return (

    <div className='navContainer p-fixed'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-between">
       
        <div className="container-fluid">
        <NavLink to="/home"> <img className='w-10 ms-5 logo' src={cloud} alt="" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon three" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-10 mb-2 mb-lg-0">
            </ul>

          </div>
          <div className=' me-3'>Welcome {UserName}</div>
         
          <div className="dropdown me-5" >
            <button className=" dropdown-toggle dropdownbtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
              <img src={Photo} alt="" />

            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{minWidth:1}}>
              <li><a className="dropdown-item" href="#">Log out</a></li>
              <li><a className="dropdown-item" href="#">Sign up</a></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}
