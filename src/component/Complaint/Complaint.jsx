import React, { useEffect, useState } from "react";
import "../Complaint/Complaint.css";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import view from '../../img/view.png'


export default function Complaint() {
  const [user, setgetUser] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    loadData()
  }, [0])

  const loadData = () => {
    axios.get("http://localhost:3004/users").then((resp) => {
      setgetUser(resp.data)
      console.log(user);
    })
  }
  const filterData = user.filter((val) => {
    if (query == "") {
      return val
    }
    else if (val.name.toLowerCase().includes(query.toLowerCase())) {
      // console.log(val)
      return val


    }

  });


  return (
    <div className='complaint'>
      <div className='employee-complaint'><h2>Employee Complaint</h2></div>
      <form action="" className="payrolls-form">
                <div className="employee-name">
                    <input type="search" id="name" placeholder="Employee Name"
                        onChange={event => { setQuery(event.target.value) }} />
                </div>
                {/* <div className="employee-role">
                    <select name="role" id="role" onChange={handleFilter} >
                        <option value="select">Select Role</option>
                        <option value="employee">Employee </option>
                        <option value="manager">Manager</option>
                    </select>
                </div> */}
                {/* <div className="leave-status">
                    <select name="status" id="status">
                        <option value="pending">Leave Status</option>
                        <option value="pending">Pending</option>
                        <option value="pending">Approved</option>
                        <option value="pending">Rejected</option>
                    </select>
                </div> */}
                {/* <div className="from">
                    <input type="date" id="from" name="fromsalary" />
                </div>
                <br />
                <div className="to">
                    <input type="date" id="to" name="tosalaray" />
                </div> */}
                <div className="search">
                    <button className="btn btn-info" style={{ width: 118, padding: 12 }}>Search</button>
                </div>
            </form>
            <table className="table" id="myTable">

                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Team</th>
                        <th scope="col">Position</th>
                        <th scope="col">Complaint Related</th>
                        <th scope="col">Compaint Detail</th>


                    </tr>
                </thead>
                <tbody>

                    {
                        filterData.map((item, index) => {
                            return (<tr key={index} >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.role}</td>
                                <td>{item.position}</td>
                                <td>{item.complaintRelated}</td>

                                <td><NavLink to={`/complaint/View_detail/complaint_detail/${item.id}`} ><button className="btn btn1 "><img src={view} alt="" /> </button></NavLink></td>

                            </tr>)
                        })}

{/* <Button
                    variant="contained"
                    className={classes.button_vw}
                    component={Link}
                    to={`/view/${user.id}`}
                  >
                    View
                  </Button> */}

                </tbody>
                </table>
    </div>
  )
}
