import React from "react";
import ReactDOM from "react-dom";

const fName = "Zsolt";
const lName = "Márku";

const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {`${fName} ${lName}`}</p>
    <p>Copyright {currentYear}.</p>
  </div>,
  document.getElementById("root")
);
