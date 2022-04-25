import React from "react";
import "./Content.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import attendance from "../../img/attendance.png";
import document from "../../img/document.png";
import money from "../../img/money.png";
import complaint from "../../img/complaint.png";
import event from "../../img/event.png";
import hiring from "../../img/hiring.png";
import { NavLink } from "react-router-dom";



export default function Content() {
  return (
    <>
<div className=" left mt-5">
<div className="d-flex justify-evenly bg-light text-align-left">
<NavLink to="/hr-attendance" style={{textDecoration:"none"}} className="w-25 text-dark">
  <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={attendance} alt="" className="w-50 " />
    </div>
    <div className="py-3 font-weight-bold">
      <h2 className="font-weight-bold ">Attendance</h2>
    </div>
    <div>
      <p className="text-secondary fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias, eius vitae dolores magni, est quia at hic perferendis accusamus illo! Incidunt pariatur dicta odit qui cupiditate at eius neque.</p>
    </div>
  </div>
</NavLink>
<NavLink to="/hr-employeedocument" style={{textDecoration:"none"}} className="w-25 text-dark">
  <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={document} alt="" className="w-50 " />
    </div>
    <div className="py-3 w-75 fs-1">
      <h2>Employee Document</h2>
    </div>
    <div className="text-secondary fs-5">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias, eius vitae dolores magni, est quia at hic perferendis accusamus illo! Incidunt pariatur dicta odit qui cupiditate at eius neque.</p>
    </div>
  </div>
</NavLink>
<NavLink to="/hr-payrolls" style={{textDecoration:"none"}} className="w-25 text-dark">
  <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={money} alt="" className="w-50 " />
    </div>
    <div className="py-3">
      <h2>Payrolls</h2>
    </div>
    <div className="text-secondary fs-5">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias, eius vitae dolores magni, est quia at hic perferendis accusamus illo! Incidunt pariatur dicta odit qui cupiditate at eius neque.</p>
    </div>
  </div>
</NavLink>
</div>
<div className="d-flex justify-evenly bg-light text-align-left">
<NavLink to="/hr-complaint" style={{textDecoration:"none"}} className="w-25 text-dark">
  <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={complaint} alt="" className="w-50 " />
    </div>
    <div className="py-3">
      <h2>Complaint</h2>
    </div>
    <div className="text-secondary fs-5">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias, eius vitae dolores magni, est quia at hic perferendis accusamus illo! Incidunt pariatur dicta odit qui cupiditate at eius neque.</p>
    </div>
  </div>
</NavLink>
<NavLink to="/hr-events" style={{textDecoration:"none"}} className="w-25 text-dark">
  <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={event} alt="" className="w-50 " />
    </div>
    <div className="py-3">
      <h2> Event</h2>
    </div>
    <div className="text-secondary fs-5">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias, eius vitae dolores magni, est quia at hic perferendis accusamus illo! Incidunt pariatur dicta odit qui cupiditate at eius neque.</p>
    </div>
  </div>
</NavLink>
<NavLink to="/hr-hiring" style={{textDecoration:"none"}} className="w-25 text-dark">
  <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={hiring} alt="" className="w-50 " />
    </div>
    <div className="py-3">
      <h2>New Hiring</h2>
    </div>
    <div className="text-secondary fs-5">
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias, eius vitae dolores magni, est quia at hic perferendis accusamus illo! Incidunt pariatur dicta odit qui cupiditate at eius neque.</p>
    </div>
  </div>
</NavLink>
</div>
</div>
     
    </>
  );
}
