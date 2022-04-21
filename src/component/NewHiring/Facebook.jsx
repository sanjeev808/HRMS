import React from "react";
//import ReactDOM from 'react-dom';
import FacebookLogin from "react-facebook-login";


export default function Login() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  //       function componentClicked(res){
  // console.log("res",res)
  //       }
  return (
    <div className="facebook">
      <FacebookLogin className="facebook"
        appId="648908642839473"
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
}

/******************
 

 
 
EAAJOLdEl67EBABtBAkBi4cwshoEh9TbBUO4a2V8iTLRZBlazIXfuix6zpF26vkZBp2OR3yLl5B4eOuZCutxVKAKmGAoJ455VcMuObyrTuTvJXGsLZAfZA4evZChhu2TQvYZCwN4O99NPV7fNXWbIEiXhTZBdQXFn57zfQI2ZAEoPjOQZDZD


*********************/
