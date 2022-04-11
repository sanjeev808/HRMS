import React from 'react';
// import DashBoard from './component/Dashboard/DashBoard';
// import SideBar from './component/Dashboard/SideBar';
import './App.css';
import NavBars from './component/EmployeeDocument/Navbars';
import CRUD from './component/EmployeeDocument/CRUD';
import AllUsers from './component/EmployeeDocument/AllUsers';
import AddUsers from './component/EmployeeDocument/AddUsers';
import Notfound from './component/EmployeeDocument/Notfound';
import EditUsers from './component/EmployeeDocument/Update';
import View from './component/EmployeeDocument/View';
import Routing from './component/Routing';
// import PayRolls from './component/payrolls/PayRolls';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import api from './component/EmployeeDocument/Service/api';



function App() {
  return (
  <>
<Routing/>
{/* <NavBars/>
<Routes>
  <Route exact path="/hr-employeedocument" element = {<CRUD/>} />
  <Route exact path="/hr-employeedocument" element = {<AllUsers/>} />
  <Route exact path="/hr-employeedocument" element = {<EditUsers/>} />
  <Route exact path="/hr-employeedocument" element = {<AddUsers/>} />
  <Route exact path="/hr-employeedocument" element = {<View/>} />
  <Route  element = {<Notfound/>} />
</Routes> */}

  </>
  );
}

export default App;
