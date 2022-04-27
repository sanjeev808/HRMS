import { useEffect, useState } from "react";
import { makeStyles, } from "@material-ui/core";
import { getUsers, deleteUser } from "../EmployeeDocument/Service/api";
import { NavLink } from "react-router-dom";
import "../../App.css"
import "./EmployeeDocument.css"

const useStyle = makeStyles({
  table: {
    width: "100%",
    margin: "50px 0px 0px 0px",
  },
  allUser: {
    width: "100%",
    // marginLeft: "20%",
    marginTop: "10rem",
    marginLeft: "19rem"
  },
  button: {
    marginRight: "10px",
    color: "white",
    background: "#f5ad02",
    fontWeight: "bold",
  },
  button_vw: {
    marginRight: "10px",
    color: "white",
    background: "#6363f1;",
    fontWeight: "bold",
  },
  buttonDel: {
    color: "white",
    background: "#c7c0c0",
    fontWeight: "bold",
  },
  nav: {
    fontSize: "1.5rem",
    marginTop: "2rem",
    border: "2px solid #0dcaf0",
    marginRight: "50%",
    borderRadius: "10px",
    textAlign: "center",
  },
  thead: {
    "& > *": {
      background: "#0dcaf0",
      color: "white",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },
  tabs1: {
    color: "#fff",
    textDecoration: "none",
    marginRight: "90px",
    fontSize: "16px",
    width: "155px",
    padding: "6px",
    border: "2px solid #0dcaf0",
    background: "#0dcaf0",
    padding: "1.9%",
    borderRadius: "10px",
  },

});
const AllUsers = (user) => {
  const [users, setUsers] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  const [query, setQuery] = useState("");
  return (

    <div className={classes.allUser}>
     <div style={{marginLeft:"-6rem"}} className="bg- w-100 ">
      <form action="">
        <input
          type="search"
          id="name"
          className="border-info rounded outline-style-none"
          placeholder="Employee Name "
          onChange={(event) => {
            setQuery(event.target.value);
          }} />
        <NavLink className="bg-info p-3 text-decoration-none text-dark  rounded "  to="/hr-employeedocument/add" exact>
          Add NEW EMPLOYEE
        </NavLink>
      </form>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Team</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((val) => {
              if (query == "") {
                return val;
              } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
                return val;
              }
            })
            .map((user) => (
              <tr>
                {/* <th scope="row">1</th> */}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                {/* <td>{user.action}</td> */}
               <NavLink to={`/hr-employeedocument/edit/${user.id}`}><button
                  type="button"
                 className="btn-info"
                >
                  Update
                </button>
                </NavLink>
                <NavLink to={`/hr-employeedocument/View/${user.id}`}><button
                  type="button"
                 className="btn-warning"
                >
                  View
                </button>
                </NavLink>

               <button type="button" className="btn-delete " onClick={() => deleteUserData(user.id)}> Remove  </button>

              </tr>
            ))}
        </tbody>
      </table>

     </div>
     </div>     
  );
            };
            export default AllUsers;    

     {/* <div className={classes.allUser}>
      <form action="" className="payrolls-form">
        <div className="employee-name">
          <input
            type="search"
            id="name"
            placeholder="Employee Name"
            className={classes.nav}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
          <NavLink className={classes.tabs1} to="/hr-employeedocument/add" exact>
            {" "}
            Add NEW EMPLOYEE
          </NavLink>
        </div>
      </form>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Team</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((val) => {
              if (query == "") {
                return val;
              } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
                return val;
              }
            })
            .map((user) => (
              <tr>
                {/* <th scope="row">1</th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                {/* <td>{user.action}</td> 
               <NavLink to={`/hr-employeedocument/edit/${user.id}`}><button
                  type="button"
                 className="btn btn-info"
                >
                  Update
                </button>
                </NavLink>
                <NavLink to={`/hr-employeedocument/View/${user.id}`}><button
                  type="button"
                 className="btn btn-warning"
                >
                  View
                </button>
                </NavLink>

               <button
                  type="button"
                  className ="btn-delete"
                 onClick={() => deleteUserData(user.id)}
                >
                  Remove
                </button>

              </tr>
            ))}
        </tbody>
      </table>






            </div> */}
    

