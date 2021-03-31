import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import IcedecApp from "./Components/Assign1";
import CurrencyCon from "./Components/Assign2_1";
import TempCon from "./Components/Assign2_2";

ReactDOM.render(
  <React.StrictMode>
    
    <IcedecApp />,
    <CurrencyCon />,
    <TempCon />,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
