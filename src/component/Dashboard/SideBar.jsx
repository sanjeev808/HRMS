import React from "react";
import "./SideBar.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom';
import attendance from "../../img/attendance.png";
import document from "../../img/document.png";
import Employee from "../../img/employee.png";
import complaint from "../../img/complaint.png";
import event from "../../img/event.png";
import hiring from "../../img/hiring.png";

export default function SideBar() {

  return (
    <div className="sidebar sidebarContainer p-fixed w-20">
      <div className="sidebar-wrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> DashBoard</h3>
          <ul className="sidebarList">
            <div className="trs">
              <p>
                <a className="btn admin" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  HR Admin
                </a>
              </p>

              <div className="collapse info" id="collapseExample">
                <NavLink to="/hr-attendance">
                  <div className="d-flex align-item">
                    <div className="attendance-img"><img src={attendance} alt="" /></div>
                    <div>
                      <button className="attandence setting">Attendance</button>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="collapse info" id="collapseExample">
                <NavLink to="/hr-employeedocument">
                  <div className="d-flex align-item">
                    <div className="attendance-img"><img src={document} alt="" /></div>
                    <div>
                      <button className="attandence setting">Employee Document</button>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="collapse info" id="collapseExample">
                <NavLink to="/hr-payrolls">

                  <div className="d-flex align-item">
                    <div className="attendance-img"><img src={Employee} alt="" /></div>
                    <div>
                      <button className="attandence setting">PayRolls</button>
                    </div>
                  </div>

                </NavLink>
              </div>
              <div className="collapse info" id="collapseExample">
                <NavLink to="/hr-complaint">
                  <div className="d-flex align-item">
                    <div className="attendance-img"><img src={complaint} alt="" /></div>
                    <div>
                      <button className="attandence setting">Complaint</button>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="collapse info" id="collapseExample">
                <NavLink to="/hr-events">
                  <div className="d-flex align-item">
                    <div className="attendance-img"><img src={event} alt="" /></div>
                    <div>
                      <button className="attandence setting">Events</button>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="collapse info" id="collapseExample">
                <NavLink to="/hr-hiring">
                  <div className="d-flex align-item">
                    <div className="attendance-img"><img src={hiring} alt="" /></div>
                    <div>
                      <button className="attandence setting">New Hiring</button>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </ul>
        </div >
      </div >
    </div >
  );
}
