import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import "../Complaint/Complaint.css";



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
  

  useEffect(() =>{
    loadUserData();
  }, []);

  const loadUserData = async() => {
    const response = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(response.data);
    console.log(setUser)
 }

 

  return (

    // <div className=" employee-complaint" >
    //   <div >
    //  
    //   </div>
    // </div>
    <div className='employee-complaint'>
        <ul className=' view-order ' >
       <li className='employee-id'><span> ID:</span> {user.id}</li>
        <li className='employee-id ccc5c5' > Name: {user.name}</li>
       <li className='employee-id'> Email: {user.email}</li>
       <li className='employee-id ccc5c5'> Complaint type: {user.complaintRelated}</li>
       <li className='employee-id'> complaint description: {user.complaintDetail}</li>
      </ul>
    </div>
    
  
  )
}

export default View