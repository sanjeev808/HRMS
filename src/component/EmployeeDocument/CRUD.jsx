import React from 'react'
//import '/App.css'
import {makeStyles} from '@material-ui/core';



const useStyles = makeStyles({
   crud:{
       fontSize:'8rem',
       marginTop:'12rem',
       fontWeight:'500',
       color:'#2b3838',
       marginLeft: "20%",
       marginTop: "10%",
       paddingLeft: "1%"
   }
})



function CRUD() {
    const classes = useStyles();
  return (
  
        <div className={classes.crud} >CLOUD HR</div>

  )
}

export default CRUD;