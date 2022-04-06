import React from "react";
import "./Content.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import attendance from "../../img/attendance.png";
import document from "../../img/document.png";
import Employee from "../../img/employee.png";
import complaint from "../../img/complaint.png";
import event from "../../img/event.png";
import hiring from "../../img/hiring.png";
import { NavLink } from "react-router-dom";



export default function Content() {
  return (
    <>
      <div className="contentContainer">
        <div className="boxe-1 d-flex justify-evenly">
     <NavLink to="/hr-attendance" style={{textDecoration:"none"}}>
            <div className="contentcard1 padding1">
              <div className="contentIcon ">
                <img src={attendance} alt="" />
              </div>
              <div className="cententHeading">
                <h2>Attendance</h2>
              </div>
              <div className="contentDetails">
                <p>
                  Attendance Management keeps track of your employee hours. It
                  is the system you use to document the time your employees work
                  and the time they take off.
                </p>
              </div>
            </div>
            </NavLink>
            <NavLink to="/hr-employeedocument " style={{textDecoration:'none'}}>
          <div className="contentcard1 padding2">
            <div className="contentIcon">
              <img src={document} alt="" />
            </div>
            <div className="contentHeading">
              <h2>Employee document</h2>
            </div>
            <div className="contentDetails">
              <p>
                Employee documentation describes the history of the relationship
                between an employee and the company- for better or worse.
              </p>{" "}
            </div>
          </div>
          </NavLink>
          <NavLink to="/hr-payrolls" style={{textDecoration:'none'}}>
          <div className="contentcard1 padding3">
            <div className="contentIcon">
              <img src={Employee} alt="" />
            </div>
            <div className="cententHeading">
              <h2>PayRolls</h2>
            </div>
            <div className="contentDetails">
              <p>
                {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, praesentium tempora eos voluptatem asperiores quasi
              </p>{" "}
            </div>
          </div>
          </NavLink>
        </div>
       
        <div className="boxes o-box">
          <div className="boxe-1 d-flex justify-evenly">
          <NavLink to="/hr-complaint" style={{textDecoration:'none'}}>
            <div className="contentcard1 padding4">
              <div className="contentIcon">
                <img src={complaint} alt="" />
              </div>
              <div className="cententHeading">
                <h2>Complaint</h2>
              </div>
              <div className="contentDetails">
                <p>
                  {" "}
                  One can fill up an online form to submit a complaint by
                  selecting an organisation under the department, officer's name
                  against whom a complaint is to be filed, name and address of
                  the complainant
                </p>
              </div>
            </div>
            </NavLink>
            <NavLink to="/hr-events" style={{textDecoration:'none'}}>
            <div className="contentcard1 padding5">
              <div className="contentIcon">
                <img src={event} alt="" />
              </div>
              <div className="contentHeading">
                <h2>Event</h2>
              </div>
              <div className="contentDetails">
                <p>
                  An event organizer is responsible for planning, managing, and
                  organizing sensational events in the most efficient and cost
                  effective way.{" "}
                </p>{" "}
              </div>
            </div>
            </NavLink>
            <NavLink to="/hr-hiring " style={{textDecoration:'none'}}>
            <div className="contentcard1 padding6">
              <div className="contentIcon">
                <img src={hiring} alt="" />
              </div>
              <div className="cententHeading">
                <h2>New Hiring</h2>
              </div>
              <div className="contentDetails">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque ut consectetur architecto repellat, quis, velit debitis
                  tenetur ex mollitia inventore perferendis{" "}
                </p>{" "}
              </div>
            </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
