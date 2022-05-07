import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import profilePic from "../profilePic.png";


const Profile = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();
  if(user != null){
    console.log(user!.get("ethAddress"));
  }
  // const Web3Api = useMoralisWeb3Api();
  const navigate = useNavigate();


  const logOut = async () => {
    await logout();
    navigate('/');

    console.log("logged out");
  };

  
  const fetchTransactions = async () => {
    // get mainnet transactions for the current user
    

  };

  function editProfile () {
    const element = document.getElementById("profileCard")!;
    if(element.style.visibility == "visible"){
      document.getElementById("profileCard")!.style.visibility = "hidden";
      document.getElementById("editProfileCard")!.style.visibility = "visible";
    } else{
      document.getElementById("profileCard")!.style.visibility = "visible";
      document.getElementById("editProfileCard")!.style.visibility = "hidden";
    }
  }

  const [phoneNumber, setPhoneNumber] = useState()
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Card className='w-25 p-3 col-md-12 d-flex container' id="profileCard" style={{width: '20rem' , visibility:"visible", position: "relative", zIndex:1000}}>
        <Button className="col-4 container text-center" variant="outline-dark" onClick={editProfile}>Edit</Button>
        <Card.Img variant="top" className='container' src={profilePic} />
        <Card.Body className="">
          <Card.Text className="text-center">Profile</Card.Text>
          <br></br> 
          <Card.Text>Name: </Card.Text>
          <Card.Text>Phone: </Card.Text>
          <Card.Text>Email: </Card.Text>
          <Card.Text>Address: </Card.Text>
        </Card.Body>
        <Button className="col-md-12 p-3 container" style={{ width: '20rem'}} variant="outline-dark" onClick={logOut}>Logout</Button>
      </Card>

      <Card className='w-25 p-3 col-md-12 d-flex container' id="editProfileCard" style={{width: '20rem', visibility:"hidden", transform: `translate(100 px, 0px)`}}>
        <Card.Body className="">
          <Card.Text className="text-center">Edit Profile</Card.Text>
          <br></br>
          <Card.Text>Edit Phone Number </Card.Text>
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={logOut}/>
          <br></br>
          <br></br>
          <br></br>
        </Card.Body>
        <Button className="col-md-12 p-3 container" style={{ width: '20rem'}} variant="outline-dark" onClick={editProfile}>Save</Button>
      </Card>
      
    </div>
  );
};

export default Profile;