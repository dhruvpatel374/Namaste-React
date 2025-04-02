// made new component and their named files in components folder 

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {

  const [btnNameReact,setbtnNameReact] = useState("Login")
  // we cant update a value in const but in react when we do with usestate it is creating new insatance for btnNameReact so no worries to use const 

    return (
        <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Food-app-logo"/>
        </div>
        <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li> 
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
              btnNameReact=="Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
              // whenever this setbtnnamereact is getting called react will re-render whole header component 
              // every time the button is getting clicked react is doing re-consilliation process and diff algo and it also changes the button only not doing on another dom element that's why react is fast bcz it concentrate on the needed element to be updated
            }}>{btnNameReact}</button>
         </ul>
        </div>
        </div>
    )
}

export default Header;
// if you wanna add this header into App4 then you have to first export this file to there and then import to there 