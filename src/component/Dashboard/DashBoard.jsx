import React, { useState } from "react";
import "./StyleDashboard.css";
import cloud from "../../img/cloud-hr.png";
import Photo from "../../img/Photo.jpg";
import { NavLink } from "react-router-dom";
import Menu from "@material-ui/core/Menu";

export default function DashBoard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let UserName = "Sanju";
  return (
    <div className="container " style={{ maxWidth: "100%", position: "fixed" }}>
      <div className="row ">
        <div className="col py-3 bg-light d-flex align-items-center justify-content-between">
          <NavLink to="/" className="icon w-20 text-decoration-none text-dark">
            {/* <img className="w-30" src={cloud} alt="" /> */}
            <h2 className="" >HR-Cloud</h2>
          </NavLink>
          <div className="d-flex  align-items-center fs-5">
            <div className="mx-4 d-flex ">
              <div className="mx-1 text-secondary  ">
                <i class="cursor-pointer fa fa-gear mr-5 "></i>
              </div>
              <div className="text-secondary cursor-pointer">setting</div>
            </div>
            <div className="mx-4 cursor-pointer d-flex">
              <div className="mx-1 text-secondary ">
                <i class="mr-2 cursor-pointer fa fa-clock-rotate-left "></i>
              </div>
              <div className="text-secondary cursor-pointer">History</div>
            </div>
            <div>
              <img className="mx-1" 
                src={Photo}
                alt=""
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
            </div>
            <Menu
              id="basic-menu"
              style={{marginTop:"60px",padding:"10px"}}
              // aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-menu",
              }}
            >
              <div className="m-4 cards-details d-flex flex-column justify-content boder-none b-none align-item-center w-50">
                <div className="pt-2 ">Login</div>
                <div className="pt-2">signup</div>
                <div className="pt-2">Logout</div>

              </div>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    // <div className='navContainer p-fixed'>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-between">

    //     <div className="container-fluid">
    //     <NavLink to="/"> <img className='w-10 ms-5 logo' src={cloud} alt="" /></NavLink>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon three" />
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav w-10 mb-2 mb-lg-0">
    //         </ul>

    //       </div>
    //       <div className=' me-3'>Welcome {UserName}</div>

    //       <div className="dropdown me-5" >
    //         <button className=" dropdown-toggle dropdownbtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
    //           <img src={Photo} alt="" />

    //         </button>
    //         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{minWidth:1}}>
    //           <li><a className="dropdown-item" href="#">Log out</a></li>
    //           <li><a className="dropdown-item" href="#">Sign up</a></li>
    //           <li><a className="dropdown-item" href="#">Sign out</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}
