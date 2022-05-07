import React, {useEffect, useState} from "react";
import logo from "./adi.png";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMoralis } from "react-moralis";

function App() {
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
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

  return (
    <div className="container"
    style={{ height: "auto", position: "relative" }}>
      <div style={{margin: 0, position: "absolute", top:"50%"}}>
        <header>
          <Card.Img className= "container" variant="top" src={logo} />
        </header>
        <div className="col-md-12 text-center ">
          <Button variant="dark" onClick={login}>
            Connect to Metamask Wallet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
