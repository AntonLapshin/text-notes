import React from "react";
import App from "./components/App";
import { render } from "react-dom";

const store = {};

render(<App store={store} />, document.getElementById("app"));
