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
    <FormGroup className={classes.container} >
      <Typography variant="h3">Update Users</Typography>
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
        <InputLabel>Package</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='CTC' value={CTC} />
      </FormControl>
      <FormControl>
        <InputLabel>Joining Date</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='joining_date' value={joining_date} />
      </FormControl>
      <FormControl>
        <InputLabel>Appraisal Date</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='appraisal_date' value={appraisal_date} />
      </FormControl>
      <FormControl>
        <InputLabel>Documents</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='documents' value={documents} />
      </FormControl>
     <Button variant="contained" className={classes.btn} onClick={() => editUserDetails()} > Submit</Button>
   
    </FormGroup>

    <button className={classes.back}   onClick={() => navigate(-1)}>Back</button>

    </>
    
   //<p>Add User</p>
  )
}

export default EditUsers