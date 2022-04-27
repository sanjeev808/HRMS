import React, { useState } from "react";
import "./SideBar.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom';
// import {  } from "preact/hooks";
import home from "../../img/home.png";
import attendance from "../../img/attendance.png";
import document from "../../img/document.png";
import money from "../../img/money.png";
import complaint from "../../img/complaint.png";
import event from "../../img/event.png";
import hiring from "../../img/hiring.png";

export default function SideBar() {
  let bgcolor ={
    color:"red",
  }
   let color= {
    backGround:"yellow"
   }
  return (
    // <div className="container-fluid bg-danger  ">
    <div className="color height w-100 sidebarContainer ">
      <div className=" align-items-center">
        <NavLink to="/" activeClassName = "active-link"
      //  className={ ((isActive)=>(isActive) ? 'bgcolor' : 'color')} 
      >
          <button  className="btn w-75 mt-3 text-align-left  " >
            <img src={home} alt="" className="w-15 mx-2 fltr " />
           <span className="col-side">Home</span> </button>
        </NavLink>
      </div>

      <div className=" align-items-center">
        <NavLink to="/hr-attendance" className={ ((isActive)=>(isActive) ? 'bgcolor' : 'color')}>
          <button className="btn   mt-3  w-75 text-align-left"><img src={attendance} alt="" className="w-15 mx-2 fltr"/>
          <span className="col-side"> Attendance</span></button>

        </NavLink>
      </div>
      <div className="d-flex align-items-center ">
        <NavLink to="/hr-employeedocument">

          <button className="btn   w-75 mt-3 boder-none  text-align-left"><img src={document} alt="" className="w-15 mx-2 fltr" /><span className="col-side"> Documents</span></button>
        </NavLink>
      </div>
      <NavLink to="/hr-payrolls">
        <button className="btn down w-75 mt-3 text-align-left">
          <img src={money} alt="" className="w-15 mx-2 fltr" /> <span className="col-side">Payrolls</span> </button>
      </NavLink>
      <NavLink to="/hr-complaint">
        <button className="btn   w-75 mt-3 text-align-left"> <img src={complaint} alt="" className="w-15 mx-2 fltr" /><span className="col-side">Complaint</span></button>
      </NavLink>
      <NavLink to="/hr-events">
        <button style={{border:"transparent",background:"transparent"}}className="btn color w-75 mt-3 text-align-left">
          <img src={event} alt="" className="w-15 mx-2 fltr" /> <span className="col-side">Events</span></button>
      </NavLink>
      <NavLink to="/hr-hiring">
        <button  style={{border:"transparent",background:"transparent"}} 
        className="btn color  w-75 mt-3 text-align-left"> <img src={hiring} alt="" className="w-15 mx-2 fltr" /><span className="col-side">Hiring</span></button>
      </NavLink>
    </div >




    // <div className="sidebar sidebarContainer p-fixed w-20">
    //   <div className="sidebar-wrapper">
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle"> DashBoard</h3>
    //       <ul className="sidebarList">

    //       <div className="trs">
    //           <div>HR Admin</div>

    //        < div className="ml-20">  <NavLink to="/hr-attendance">
    //             <div className="d-flex align-item">
    //               <div className="attendance-img"><img src={attendance} alt="" /></div>
    //               <div>
    //                 <button className="attandence setting">Attendance</button>
    //               </div>
    //             </div>
    //           </NavLink>
    //           <NavLink to="/hr-employeedocument">
    //               <div className="d-flex align-item">
    //                 <div className="attendance-img"><img src={document} alt="" /></div>
    //                 <div>
    //                   <button className="attandence setting">Employee Document</button>
    //                 </div>
    //               </div>
    //             </NavLink>
    //             <NavLink to="/hr-payrolls">

    //               <div className="d-flex align-item">
    //                 <div className="attendance-img"><img src={Employee} alt="" /></div>
    //                 <div>
    //                   <button className="attandence setting">PayRolls</button>
    //                 </div>
    //               </div>

    //             </NavLink>
    //             <NavLink to="/hr-complaint">
    //               <div className="d-flex align-item">
    //                 <div className="attendance-img"><img src={complaint} alt="" /></div>
    //                 <div>
    //                   <button className="attandence setting">Complaint</button>
    //                 </div>
    //               </div>
    //             </NavLink>
    //             <NavLink to="/hr-events">
    //               <div className="d-flex align-item">
    //                 <div className="attendance-img"><img src={event} alt="" /></div>
    //                 <div>
    //                   <button className="attandence setting">Events</button>
    //                 </div>
    //               </div>
    //             </NavLink>
    //             <NavLink to="/hr-hiring">
    //               <div className="d-flex align-item">
    //                 <div className="attendance-img"><img src={hiring} alt="" /></div>
    //                 <div>
    //                   <button className="attandence setting">New Hiring</button>
    //                 </div>
    //               </div>
    //             </NavLink>
    //             </div>
    //         </div>


    //         {/* <div className="trs">
    //           <p>
    //             <a className="btn admin" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    //               HR Admin
    //             </a>
    //           </p>

    //           <div className="collapse info" id="collapseExample">
    //             <NavLink to="/hr-attendance">
    //               <div className="d-flex align-item">
    //                 <div className="attendance-img"><img src={attendance} alt="" /></div>
    //                 <div>
    //                   <button className="attandence setting">Attendance</button>
    //                 </div>
    //               </div>
    //             </NavLink>
    //           </div>
    //           <div className="collapse info" id="collapseExample">
    //             <NavLink to="/hr-employeedocument">
    //               <div className="d-flex align-item">
    //                 <div className="attendance-img"><img src={document} alt="" /></div>
    //                 <div>
    //                   <button className="attandence setting">Employee Document</button>
    //                 </div>
    //               </div>
    //             </NavLink>
    //           </div>
    //           <div className="collapse info" id="collapseExample">
    //             <NavLink to="/hr-payrolls">

    //               <div className="d-flex align-item">
    //                 <div className="attendance-img"><img src={Employee} alt="" /></div>
    //                 <div>
    //                   <button className="attandence setting">PayRolls</button>
    //                 </div>
    //               </div>

    //             </NavLink>
    //           </div>
    //           <div className="collapse info" id="collapseExample">
    //             <NavLink to="/hr-complaint">
    //               <div className="d-flex align-item">
    //                 <div className="attendance-img"><img src={complaint} alt="" /></div>
    //                 <div>
    //                   <button className="attandence setting">Complaint</button>
    //                 </div>
    //               </div>
    //             </NavLink>
    //           </div>
    //           <div className="collapse info" id="collapseExample">
    //             <NavLink to="/hr-events">
    //               <div className="d-flex align-item">
    //                 <div className="attendance-img"><img src={event} alt="" /></div>
    //                 <div>
    //                   <button className="attandence setting">Events</button>
    //                 </div>
    //               </div>
    //             </NavLink>
    //           </div>
    //           <div className="collapse info" id="collapseExample">
    //             <NavLink to="/hr-hiring">
    //               <div className="d-flex align-item">
    //                 <div className="attendance-img"><img src={hiring} alt="" /></div>
    //                 <div>
    //                   <button className="attandence setting">New Hiring</button>
    //                 </div>
    //               </div>
    //             </NavLink>
    //           </div>
    //         </div> */}
    //       </ul>
    //     </div >
    //   </div >
    // </div >
  );
}
