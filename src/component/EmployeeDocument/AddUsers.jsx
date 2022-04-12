import "../EmployeeDocument/EmployeeDocument.css";
import {addUser} from '../EmployeeDocument/Service/api';
import {useNavigate} from 'react-router-dom';
import{FormGroup,FormControl,Input,InputLabel,Button,makeStyles,Typography} from "@material-ui/core";
import React,{useState} from 'react'



const initialValues = {
  name:'',
  email:'',
  status:'',
  joining_date:'',
  appraisal_date:'',
}

function AddUsers() {
  const [user, setUser] = useState(initialValues);
  const {name,email,status,joining_date, appraisal_date} = user;
   const navigate = useNavigate();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({...user,[e.target.name]: e.target.value })
  }

  const addUserDetails =async () => {
    await addUser(user);
    navigate(-1);
  }


  return (
<>
    <form className="form"> <h1 className="head">Add Users</h1><br/>
  <div className="form-group">
    <input type="text"
     className="form-control" 
     placeholder="Enter Name"
     onChange={(e)=> onValueChange(e)} 
     name='name'
      value={name}
     />
  </div> <br/>
  <div className="form-group">
    <input type="email" 
    className="form-control" 
    placeholder="Enter Email"
    onChange={(e)=> onValueChange(e)} 
    name='email' value={email}
    />
  </div> <br/>
  <div className="form-group">
    <input type="text" 
    className="form-control"
     placeholder="Technology"
     onChange={(e)=> onValueChange(e)}
      name='status' value={status}
     />
  </div> <br/>
  <div className="form-group">
    <input type="text" 
    className="form-control"
     placeholder="Joining Date"
     onChange={(e)=> onValueChange(e)} 
     name='joining_date' value={joining_date}
     />
  </div> <br/>
  <div className="form-group">
    <input type="text"
     className="form-control"
      placeholder="Appraisal Date"
      onChange={(e)=> onValueChange(e)} 
      name='appraisal_date' value={appraisal_date}/>
  </div><br/>
  <button type="submit" 
  className="submit"
  onClick={() => addUserDetails()}>Submit</button>
</form>

<button style={{marginLeft:"-3rem",width:"4rem",backgroundColor:"#0dcaf0",border:"#0dcaf0",color:"#fff",marginTop:"6rem",height:"2rem"}} onClick={() => navigate(-2)}>Back</button>

</>

   //<p>Add User</p>
  )
}

export default AddUsers

