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
<div className="d-flex justify-evenly top nav text-align-left  ">
<NavLink to="/hr-attendance" style={{textDecoration:"none"}} className="w-25 text-dark fltr box">
  
   <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={attendance} alt="" className="w-50 img-atd " />
    </div>
    <div className="py-3 font-weight-bold">
      <h2 className="font-weight-bold ">Attendance</h2>
    </div>
    <div>
      <p className="fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere incidunt unde perferendis modi autem explicabo in suscipit aliquid, sapiente officiis. Harum at possimus magnam, soluta quae iusto voluptatem minima. here comes pane Et..</p>
    </div>
  </div>
</NavLink>
<NavLink to="/hr-employeedocument" style={{textDecoration:"none"}} className="w-25 text-dark fltr box">
  <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={document} alt="" className="w-50 img-atd  " />
    </div>
    <div className="py-3 w-75 fs-1">
      <h2 className="hire">Employee Document</h2>
    </div>
    <div className="fs-5 ">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae omnis natus sapiente cumque assumenda provident placeat perspiciatis esse reprehenderit amet, error quasi, debitis officiis.</p>
    </div>
  </div>
</NavLink>
<NavLink to="/hr-payrolls" style={{textDecoration:"none"}} className="w-25 text-dark fltr box">
  <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={money} alt="" className="w-50 img-atd " />
    </div>
    <div className="py-3">
      <h2 className="pay">Payrolls</h2>
    </div>
    <div className="fs-5">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam quis enim ab consectetur temporibus aliquid perferendis, ut consequatur ipsa quos aliquam ea cupiditate quidem, iste sit reiciendis amet fugiat?</p>
    </div>
  </div>
</NavLink>
</div>
<div className="d-flex justify-evenly color mg text-align-left">
<NavLink to="/hr-complaint" style={{textDecoration:"none"}} className="w-25 text-dark fltr box">
  <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={complaint} alt="" className="w-50 img-atd " />
    </div>
    <div className="py-3">
      <h2  className="hire" >Complaint</h2>
    </div>
    <div className="fs-5">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque vitae adipisci voluptatibus aliquam, delectus cupiditate rerum reprehenderit! Suscipit, hic aut! Distinctio neque voluptatem perferendis.</p>
    </div>
  </div>
</NavLink>
<NavLink to="/hr-events" style={{textDecoration:"none"}} className="w-25 text-dark fltr box">
  <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={event} alt="" className="w-50 img-atd " />
    </div>
    <div className="py-3">
      <h2 className="event_1"> Event</h2>
    </div>
    <div className="fs-5">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas mollitia facilis ea, dolorum praesentium nobis consequuntur nam eos adipisci amet illum, excepturi, consectetur nemo natus! </p>
    </div>
  </div>
</NavLink>
<NavLink to="/hr-hiring" style={{textDecoration:"none"}} className="w-25 text-dark fltr box">
  <div className="w-100 mt-5 text-align-none">
    <div className="w-50 py-2" >
      <img src={hiring} alt="" className="w-50 img-atd " />
    </div>
    <div className="py-3">
      <h2 className="hire">New Hiring</h2>
    </div>
    <div className="fs-5">
      <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore soluta veritatis explicabo dolorem tempora  perferendis temporibus doloribus possimus nisi, necessitatibus amet itaque. Magnam, rem? .</p>
    </div>
  </div>
</NavLink>

</div>
</div>
     
    </>
  );
}
