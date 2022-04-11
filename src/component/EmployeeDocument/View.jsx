import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {makeStyles} from "@material-ui/core";
 import './EmployeeDocument.css'

const useStyle = makeStyles({


})



const initialValues = {
  id: '',
  name:'',
  email:'',
  status:'',
  CTC:'',
  documents:'',
  joining_date:'',
  appraisal_date:'',
}

function View() {
  const [user, setUser] = useState(initialValues);
  //const {name, email,status} = user;
  const {id} = useParams();
  const navigate = useNavigate();
  const classes = useStyle();

  

  useEffect(() =>{
    loadUserData();
  }, []);

  const loadUserData = async() => {
    const response = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(response.data);
 }
  return (
    <>
    <div  style={{marginTop: "8rem"}} >
      <h1>User Id: {id}</h1>
      
      <div style={{marginLeft: "35rem",width:"40rem"}}>
      <ul className="">
      <li className="list-item"> ID: {user.id}</li>
        <li className="list-item"> Name: {user.name}</li>
        <li className="list-item"> Email: {user.email}</li>
        <li className="list-item"> Team: {user.status}</li>
        <li className="list-item"> Package: {user.CTC}</li>
        <li className="list-item"> Joining Date: {user.joining_date}</li>
        <li className="list-item"> AppraisalDate: {user.appraisal_date}</li>
        <li className="list-item"> Submitted Documents: {user.documents}
        
        </li>
      </ul>
      </div>
   
    </div>

 <br></br>
    <>
    <button style={{marginLeft:"-32rem",width:"4rem",backgroundColor:"#0dcaf0",border:"#0dcaf0",color:"#fff",marginTop:"34rem",height:"2rem"}} onClick={() => navigate(-1)}>Back</button>
    </>
     
     </>
  )
}

export default View