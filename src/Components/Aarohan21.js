import React from "react";
import AarohanLogo from "../assets/images/AR Logo.png";



function Aarohan21(){
    return(
        <>
            <nav className="navbar">
                <div className="wrapper__nav">
                    
                        <img className="logo" src={AarohanLogo} alt="Logo"/>
                    
                    <ul className="navLinks">
                         <li>
                             <a href="#arohanHome">Events/Register</a>
                         </li>
                         <li>
                             <a href="#">Help & FAQ</a>
                         </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Aarohan21;