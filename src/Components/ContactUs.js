import React from "react";
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';

function ContactUs(){
    return(
        <div id="contact" className="contactus" >
            <h1 className="text-uppercase text-custum text-gray">Contact us</h1>
            <div className="information">
                <div className="address">
                        <RoomOutlinedIcon/>
                        <h3 className="text-gray text-contact">Address</h3>
                        <p>DEPARTMENT OF CIVIL ENGINEERING
                            BIT MESRA
                            RANCHI - 835215
                        </p>
                </div>
                <div className="phoneNumber">
                    <PhoneInTalkOutlinedIcon/>
                    <h3 className="text-gray text-contact">Phone Number</h3>
                    <p>+918989898989 <br/>
                        +917656898989
                    </p>

                </div>
                <div className="email ">
                   <MailOutlineSharpIcon/>
                    <h3 className="text-gray text-contact">Email</h3>
                    <p>bitmesraieicivil@gmail.com</p>
                    <span></span>

                </div>
            </div>
        </div>
    )
        
    
    
}

export default ContactUs