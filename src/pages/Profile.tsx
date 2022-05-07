import React from "react";
import { Button, Card } from "react-bootstrap";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";


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
