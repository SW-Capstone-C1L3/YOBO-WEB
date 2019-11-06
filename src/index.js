import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import "./styles/index.css";
import * as ServiceWorker from "./serviceWorker.js"; //defualt export가 없다?

ReactDOM.render(<Root />, document.getElementById("root"));
ServiceWorker.register();