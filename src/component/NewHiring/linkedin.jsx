import React, { useState } from 'react';
//import Image from './linkedin.jpeg';
import { LinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import "./linkedin.css";
  export default function LinkedInPage() {
  return (
    <LinkedIn
      // clientId="783utlpl8u5avl"
   
      // redirectUri="http%3A%2F%2Flocalhost%3A3000%2F"
      clientId="78vjri2p5smjkd"
   
      redirectUri="http%3A%2F%2Flocalhost%3A3000%2FHiringTalent"
      onSuccess={(code) => {
        console.log(code);
      }}
      onError={(error) => {
        console.log(error);
      }}
    >
      {({ linkedInLogin }) => (

        <>
        {console.log(linkedInLogin)}
        <button className="linkedin"
          onClick={linkedInLogin}
          // src={linkedin}
          
          // alt="Sign in with Linked In"
          style={{ maxWidth: '180px', cursor: 'pointer' }}
        >Sign in with Linked In</button>
        </>
      )}
    </LinkedIn>
  );
}