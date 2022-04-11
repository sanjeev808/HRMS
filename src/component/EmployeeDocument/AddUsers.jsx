import "../EmployeeDocument/EmployeeDocument.css";
import {addUser} from '../EmployeeDocument/Service/api';
import {useNavigate} from 'react-router-dom';
import{FormGroup,FormControl,Input,InputLabel,Button,makeStyles,Typography} from "@material-ui/core";
import React,{useState} from 'react'

const useStyle = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 20
    }
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
  status:'',
  joining_date:'',
  appraisal_date:'',
}

function AddUsers() {
  const [user, setUser] = useState(initialValues);
  const {name,email,status,joining_date, appraisal_date} = user;
   const classes = useStyle();
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
    <FormGroup className={classes.container} >
      <Typography variant="h3">Add New Employee</Typography>
     <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='name' value={name}/>
     </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='email' value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Team</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='status' value={status} />
      </FormControl>
      <FormControl>
      <InputLabel>Joining Date</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='joining_date' value={joining_date} />
      </FormControl>
      <FormControl>
      <InputLabel>Appraisal Date</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='appraisal_date' value={appraisal_date} />
      </FormControl>
      
      <Button variant="contained" className={classes.btn} onClick={() => addUserDetails()} >Submit</Button> 
    
    </FormGroup>
   //<p>Add User</p>
  )
}

export default AddUsers

