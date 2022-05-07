import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://9emvckfkxggp.usemoralis.com:2053/server" appId="hZ0ji4BbRQAiuZOpcuasPhFsl4KSzWAnzthFSWR8">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);