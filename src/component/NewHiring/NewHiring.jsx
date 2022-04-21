import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
//import {NavLink} from 'react-router-dom'
import Login from './Facebook'
import LinkedInPage from "./linkedin.jsx";
import "./linkedin.css";
import Image from "../../img/man.jpg";
//import axios from "axios";
// import './Hiring.css'

function Hiring() {
//   let navigate = useNavigate();

  
// function Handler() {

//     axios.post("https://api.linkedin.com/v2/ugcPosts",{
//         "author": "urn:li:person:Mw6h_yknV9",
//         "lifecycleState": "PUBLISHED",
//         "specificContent": {
//             "com.linkedin.ugc.ShareContent": {
//                 "shareCommentary": {
//                     "text": "Hello World! This is my first Share on LinkedIn jjjj !"
//                 },
//                 "shareMediaCategory": "NONE"
//             }
//         },
//         "visibility": {
//             "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
//         }
//     },{
//         "Authorization":"Bearer AQUIlZgmcODMFpwd2FrUNk8f1CDcxPdNuDKrJzkqcmxhHnpE_fLk7eYl7v8d1ja7yDiGLgPxlt_AyoLeLunC-_TQxmfSshyYTZTs7NqKYQotC7CDP4D3jfYS4O4bouEbresLgzWC-NsqeoUN-LUVRhsfm57Icq1CnU7KR59EVKMJW1EIPRJJ3t3OKAvgGVyEhCVbF161c2NsFUUaYnO14OvYefBUpv2u7d06GlxyrTuaXDZ29jIYoEJrHeqJ8Xwul_fWBKw0rQ90_kOc47rR6W3PqgCFRf2sCZxHQEF8qZXOap5kFq9pHYEsp_jcLeZM_x81OsgohoLTccnGPc3QuDg30Oo1ow"
//     }).then((res)=>{
//         console.log("Data posted succesfuly")
//     }).catch((err)=>{
//         console.log("Chal ve pehle server create kr ")
//     })
// }

  return (
    <div className="hr-hiring"> 
      <form className="main-hiring">
        <div className="form-container">
          <div className="imgcontainer">
            <img src={Image} alt="Avatar" className="avatar" />
          </div>

          <div className="container">
            <div className="feild-container">
            <label htmlFor="job"className="label-name" >
              <b>Job Title</b>
            </label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Job Tittle"
              name="Job"
              required
              className="name"
            />
            </div>

           <div className="feild-container">
           <label htmlFor="text" className="label-description">
              <b>Description</b>
            </label>
            <br></br>
            <textarea
              type="text-area"
              placeholder="Enter Description"
              name="description"
              rows="4"
              cols="50"
              required
              className="name"
            />

           </div>
          <div className="Social-meadia-buttons">
           <div className="btn1" >
                <button type="submit" >
                <LinkedInPage />
                  
                 </button>
                 
            
           </div>
           
           <div className="facebook-btn" >
                 {/* <button type="submit" > */}
                 <Login className="login"/>
               
                 {/* </button> */}
                 </div>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Hiring;

