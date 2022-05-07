import React from "react";
import { Button, Card } from "react-bootstrap";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



const Profile = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();
  const navigate = useNavigate();


  const logOut = async () => {
    await logout();
    navigate('/');

    console.log("logged out");
  };

  function VerifyPhoneNumber() {
    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    const [value, setValue] = useState()
    return (
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={logOut}/>
    )
  }

  return (
    <div>
      <div>Welcome</div>
      <Button variant="dark" onClick={logOut}>
        Sign out
      </Button>
    </div>
  );
};

export default Profile;