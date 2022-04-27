import {editUser,getUsers } from '../EmployeeDocument/Service/api';
import {useNavigate,useParams} from 'react-router-dom';
import{makeStyles} from "@material-ui/core";
import React,{useEffect, useState} from 'react'


const useStyle = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 20
    }
  },

  back: {

    marginTop: "2rem",
    marginLeft: "25rem",
    width: "5rem",
    borderRadius: "5px",
    color: "#fff",
    background: "#f5ad02",
    border:'2px solid #f5ad02',
    height: '2rem',


  },
head:{

},

  btn: {
    width: '180px',
    marginLeft: '15rem',
    color:'#fff',
    backgroundColor:'#0dcaf0'
  }
})

const initialValues = {
  name:'',
  email:'',
  CTC:'',
  status:'',
  mobile_number:'',
  joining_date:'',
  appraisal_date:'',
  mobile_No:'',
  bank_name:'',
  total_days:'',
  bank_Accountno:'',
  employee_id:'',
  documents:'',


}

function EditUsers() {
  const [user, setUser] = useState(initialValues);
  const {name,email,CTC,status,joining_date,appraisal_date,documents,mobile_No,bank_name, total_days,bank_Accountno,employee_id} = user;
   const classes = useStyle();
   const navigate = useNavigate();
   const {id} = useParams();

   useEffect(() =>{
     loadUserData();
   }, []);

   const loadUserData = async() => {
      const response = await getUsers(id);
      setUser(response.data);
   }
   

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({...user,[e.target.name]: e.target.value })
  }

  const editUserDetails =async () => {
    await editUser(id, user);
    navigate(-1.5);
  }


  return (
    <>

<form className="form"> <h1 className="head">Update Users</h1><br/>
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
     placeholder="CTC"
     onChange={(e)=> onValueChange(e)}
      name='CTC' value={CTC}
     />
  </div> <br/>
  <div className="form-group">
    <input type="text" 
    className="form-control"
     placeholder="Mobile Number"
     onChange={(e)=> onValueChange(e)}
      name='mobile_No' value={mobile_No}
     />
  </div> <br/>
  <div className="form-group">
    <input type="text" 
    className="form-control"
     placeholder="Bank Name"
     onChange={(e)=> onValueChange(e)}
      name='bank_name' value={bank_name}
     />
  </div> <br/>
  <div className="form-group">
    <input type="text" 
    className="form-control"
     placeholder="Total Days"
     onChange={(e)=> onValueChange(e)}
      name='total_days' value={total_days}
     />
  </div> <br/>
  <div className="form-group">
    <input type="text" 
    className="form-control"
     placeholder="Bank Account Number"
     onChange={(e)=> onValueChange(e)}
      name='bank_Accountno' value={bank_Accountno}
     />
  </div> <br/>
  <div className="form-group">
    <input type="text" 
    className="form-control"
     placeholder="PF_No"
     onChange={(e)=> onValueChange(e)}
      name='id' value={id}
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
  <div className="form-group">
    <input type="text" 
    className="form-control"
     placeholder="Documents"
     onChange={(e)=> onValueChange(e)}
      name='documents' value={documents}
     />
  </div> <br/>
  <button type="submit" 
  className="submit"
  onClick={() => editUserDetails()}>Submit</button>
</form>

<button className={classes.back}   onClick={() => navigate(-1)}>Back</button>
    <h1 style={{color:"#fff"}} >hi</h1>
    </>
    
   //<p>Add User</p>
  )
}

export default EditUsers