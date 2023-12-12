import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header=()=>{
    const[loggedIn, setLoggedIn]=useState("Login");
    const cartItems=useSelector((store)=>store.cart.items)
    return(
       <div className="header flex justify-between shadow-lg">
        <div className="logo-container">
        <img className="logo w-20 p-3 " src={LOGO_URL}/>
        </div>
        <div className="nav-items flex items-center">
           <ul className="items flex">
            <li className="px-4 "><Link to="/">Home</Link></li>
            <li className="px-4 "><Link to="/about">About Us</Link></li>
            <li className="px-4 "><Link to="/favorite-restuarant">Favorites</Link></li>
            <li className="px-4 "><Link to="/contact">Contact</Link></li>
            <li className="px-4 "><Link to="/cart">
            Cart {cartItems.length}</Link></li>
            <button className="login px-4 " onClick={()=>{loggedIn==="Login"?setLoggedIn("Logout"):setLoggedIn("Login")}}>{loggedIn}</button>
           </ul>
        </div>
        </div>
    )
}

export default Header;