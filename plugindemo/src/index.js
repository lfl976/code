import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { add } from "./math";
import App from "./App";

function start() {
  let res = add(2, 3);
  console.log(res);
}
start();
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
