import React, {useEffect, useState} from "react";
import logo from "../adi.png";
import { Button, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";


const Login = () =>{

  const serverUrl = "https://hs6w0n7iarfq.usemoralis.com:2053/server";
  const appId = "amGv22k3HZiLeccIjI5OKnpSMqmMEzWAx3CWLnWK";

  //Moralis.start({ serverUrl, appId });

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const logIn = async () => {
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Authenticated via ADI" })
        .then(function (user) {
          console.log("Logged in user:", user);
          console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  // const logOut = async () => {

  //   await logout();
    
  //   console.log("logged out");
    
  //   }

  return (
    
    <body style={{height: "865px", width:"800",background: "#000"}}>
      <div className="container" style={{ height: "300px", position: "relative" }}>
        <div style={{margin: 0, position: "absolute", top:"50%"}}>
          <header>
            <Card className='w-25 p-3 col-md-12 d-flex align-items-center text-center container justify-content-center' style={{ width: '20rem'}}>
              <Image className='container' src={logo}/>
              <br></br>
              <br></br>
              <br></br>
              <Card.Body>
                <Card.Text>Welcome to the future of profiling...</Card.Text>
                <br></br>
                <br></br>
                <br></br>
                <Button variant="outline-dark" onClick={logIn}>Sign In</Button>
                <br></br>
                <br></br>
                <Button variant="outline-dark" onClick={logout}>Logout</Button>
              </Card.Body>
            </Card>
          </header>
        </div>
      </div>
    </body>
  );
}

export default Login;