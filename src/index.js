import React from "react";
import ReactDOM from "react-dom";

import App from "./Notes/App.js";

let renderable = document.getElementById("root");

const Main = () => {
  return <App />;
};

ReactDOM.render(
  <>
    <Main />{" "}
  </>,
  renderable
);
