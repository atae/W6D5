import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./tabs";
import Clock from "./clock";
import Weather from "./weather";
import Autocomplete from "./autocomplete";

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  ReactDOM.render(<Tabs tabs={tabs} />, root);
  let clock = document.getElementById("clock");
  ReactDOM.render(<Clock />, clock);
  let weather = document.getElementById("weather");
  ReactDOM.render(<Weather />, weather);
  let autocomplete = document.getElementById("autocomplete");
  ReactDOM.render(<Autocomplete words={words} />, autocomplete);
});

const tabs = [
  {title:"OMG Github is down" ,
    content:"I for one welcome our new robot overlords"},
  {title:"test", content: "test"},
  {title:"Netflix is also down", content:"Life has no meaning."}
];

const words = ['Tea', 'Notebook', 'Pen', 'Mac Mini', 'Monitors(2)',
                'Luke', 'Andrew', 'Cool Ass Teacup'];
