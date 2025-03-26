// made new component and their named files in components folder 

import { LOGO_URL } from "../utils/constants";

export const Header = () => {
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
         </ul>
        </div>
        </div>
    )
}

export default Header;
// if you wanna add this header into App4 then you have to first export this file to there and then import to there 