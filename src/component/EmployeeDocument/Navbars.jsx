import React from 'react'
import {AppBar, Toolbar, Typography,makeStyles,} from '@material-ui/core';
import { NavLink } from 'react-router-dom';



const useStyles = makeStyles({
    header: {
        background:'#0dcaf0',
       
    },
    tabs: {
        color: '#fff',
        textDecoration: 'none',
        marginRight: '100px',
        fontSize: '18px'
    },
    tabs1: {
        color: '#fff',
        textDecoration: 'none',
        marginRight: '90px',
        fontSize: '16px',
        width: '155px',
        padding: '6px',
        border: '2px solid #0dcaf0',
        background: '#f5ad02'
    }
});

function NavBars() {
    const classes = useStyles();
  
  return (<>
   <AppBar className={classes.header} position="static">
       <Toolbar>
        <Typography component="h2" >
         </Typography>
         <NavLink className={classes.tabs} to="/hr-employeedocument/" exact> CLOUD HR </NavLink>
        <NavLink className={classes.tabs} to="/hr-employeedocument/all" exact> ALL EMPLOYEE</NavLink>
        <NavLink className={classes.tabs1} to="/hr-employeedocument/add" exact> Add NEW EMPLOYEE</NavLink>
       </Toolbar>
   </AppBar>
</>
  );
}

export default NavBars;

