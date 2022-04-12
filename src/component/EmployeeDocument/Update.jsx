import {editUser,getUsers } from '../EmployeeDocument/Service/api';
import {useNavigate,useParams} from 'react-router-dom';
import{FormGroup,FormControl,Input,InputLabel,Button,makeStyles,Typography} from "@material-ui/core";
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

    marginTop: "9rem",
    marginLeft: "5px",
    width: "5rem",
    borderRadius: "5px",
    color: "#fff",
    background: "#f5ad02",
    border:'2px solid #f5ad02',
    height: '2rem',


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
  joining_date:'',
  appraisal_date:'',
  documents:'',
}

function EditUsers() {
  const [user, setUser] = useState(initialValues);
  const {name,email,CTC,status,joining_date,appraisal_date,documents} = user;
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
     placeholder="CTC"
     onChange={(e)=> onValueChange(e)}
      name='CTC' value={CTC}
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

<button className={classes.back}   onClick={() => navigate(-1.5)}>Back</button>

    </>
    
   //<p>Add User</p>
  )
}

export default EditUsers