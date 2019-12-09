import React from "react";
import logo from "../yobo_logo.png"
const Main = () => {
  if(window.sessionStorage.getItem('email')==null){
    window.location.assign("/Auth")
  }
  return <div>
    <h1>YOBO</h1>
    <img src={logo}/>
    <h1 >login</h1>
    </div>;
};

export default Main;