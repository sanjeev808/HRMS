import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Dashboard/DashBoard.jsx";
import SideBar from "./Dashboard/SideBar.jsx";
import Content from "./Dashboard/Content.jsx";
import Attendance from './Attendance/Attendance.jsx';
import PayRolls from "./payrolls/PayRolls.jsx";
// import PayRolls  from './payRolls/PayRolls.jsx';
import SalarySlip from "./payrolls/SalarySlip.jsx";
import EmployeeDocument from "./EmployeeDocument/EmployeeDocument.jsx";
import Complaint from "./Complaint/Complaint.jsx";
import Events from "./Event/Events.jsx";
import NewHiring from "./NewHiring/NewHiring.jsx";


export default function Routing() {
  return (
    <div>


      <BrowserRouter>
        <DashBoard />
        <div style={{ display: "flex" }}>
          <SideBar />
          <Routes>
            <Route path="/home" element={<Content />} />
            <Route path="/hr-attendance" element={<Attendance />} />
            <Route path="/hr-employeedocument" element={<EmployeeDocument />} /> 
            <Route path="/hr-payrolls" element={<PayRolls />} />
            <Route path="/payrolls/salaryslip" element={<SalarySlip />} />
            <Route path="/payrolls/salaryslip/generate" element={<SalarySlip />} />
            <Route path="/hr-complaint" element={<Complaint />} />
            <Route path="/hr-events" element={<Events />} />
            <Route path="/hr-hiring" element={<NewHiring />} />


          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}
