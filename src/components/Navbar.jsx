// import {NavLink } from "react";
import "./Navbar.css";

const Navbar =()=>{

    return(
  

<nav class="navbar navbar-expand-lg navbar-bold bg-light sticky-top">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <img src="https://addvic.com/Images/logo%20addvic_Reg.png"height={25} alt="remote" />
  {/* <img src="https://www.vitesco-technologies.com/getmedia/fa8f8315-347a-4c66-9cc7-e2c2f2d5890d/Vitesco_Logo.svg"height={25} alt="remote" /> */}
  
  <div>
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a class="nav-link" href="/">Home</a>

      </li>
      <li className="nav-item">
        <a class="nav-link" href="/AboutUs">About Us</a>
      </li>
      <li className="nav-item">
        <a class="nav-link" href="">Services</a>
      </li>
      <li className="nav-item">
        <a class="nav-link " href="/contactus">Contact Us</a>
      </li>
 
    </ul>
  </div>
</nav>


        )
}

export default Navbar;