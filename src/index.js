import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

/*
//Exercise for first time Rect App directory

import fruits from "./foods";
import { choice, remove } from "./helper";

let fruit = choice(fruits);
console.log(`I'd line one ${fruit}, please`);
console.log(`Here you go, ${fruit}`);
let remaining = remove(fruits, fruit);

console.log(`Now we have ${remaining}`); */

ReactDOM.render(<App />, document.getElementById("root"));
