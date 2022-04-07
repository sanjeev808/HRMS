import React, { useEffect, useState } from "react";
import "../payrolls/Payrolls.css";
import axios from 'axios';
import { NavLink } from "react-router-dom";

export default function PayRolls() {
    const [user, setgetUser] = useState([])
    //  const [data, setData] = useState([]);

    const [query, setQuery] = useState("")
    // const [searchedCountry, setSearchedCountry] = useState('');

    // const [selected, setSelected] = useState("");
    // const [region, setRegion] = useState('');



    useEffect(() => {
        loadData();
    }, [0])

    const loadData = () => {
        axios.get("http://localhost:3004/users").then((resp) => {
            setgetUser(resp.data)
            console.log(user);
        })
    }

    // const handlerFilter = async (value) =>{
    //     return await axios .get(`http://localhost:3004/users?position=${value}`)
    //     .then((response) =>{
    //         setData(response.data);
    //     })
    //     // .catch(err) =>{console.log("error")}
    // }
   
//    const handleFilter = (e) =>{
//       var values=(e.target.value);  
//           console.log(values);
//    }
   const filterData = user.filter((val) => {
    if (query === "") {
        return val
    } 
    else if (val.name.toLowerCase().includes(query.toLowerCase())) {
        // console.log(val)
        return val
    

    }
    // else if (val.selected == "all")
    // {
    //     return val;
    // }
    // else if (val.selected == "employee")
    // {
    //     return val;
    // }
});

// const filterData1 = user.filter((val) => {
 
// });
    return (
        <div className="Payrolls">
            <div className="employee">

                <h3>Employee Salary</h3>
            </div>
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
                    <button className="btn btn-info" style={{ width:118,padding: 12}}>Search</button>
                </div>
            </form>
            <table className="table" id="myTable">

                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Join Date</th>
                        <th scope="col">Team</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Position</th>
                        <th scope="col">Payslip</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        filterData.map((item, index) => {
                            return (<tr key={index} >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.joinDate}</td>
                                <td>{item.role}</td>
                                <td>{item.salary}</td>
                                <td>{item.position}</td>
                              
                                <td><NavLink to="/payrolls/salaryslip/generate" ><button className="btn btn-info">Genertor Slip </button></NavLink></td>

                            </tr>)
                        })}



                </tbody>
            </table>
        </div>
    );
}
