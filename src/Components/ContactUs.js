import React from "react";

function ContactUs(){
    return(
        <div className="contactus">
            <h1 className="text-uppercase text-custum text-gray">Contact us</h1>
            <div className="information">
                <div className="address">
                        <i class="fas fa-map-marker-alt icon-lg"></i>
                        <h3 className="text-gray text-contact">Address</h3>
                        <p>Bit mesra main campus</p>
                </div>
                <div className="phoneNumber">
                    <i class="fas fa-phone icon-lg"></i>
                    <h3 className="text-gray text-contact">Phone Number</h3>
                    <p>+918989898989 <br/>
                        +917656898989
                    </p>

                </div>
                <div className="email ">
                    <i class="fas fa-envelope icon-lg"></i>
                    <h3 className="text-gray text-contact">Email</h3>
                    <p>@mail.com</p>

                </div>
            </div>
        </div>
    )
        
    
    
}

export default ContactUs