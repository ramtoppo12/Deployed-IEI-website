import React from 'react';
import Logo from "../assets/images/logo (1).png";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PhotoAlbumOutlinedIcon from '@material-ui/icons/PhotoAlbumOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';

function Navbar() {
    return (
         <nav>
                <ul>
                    <li className="Logo__list">
                        <img src={Logo} alt="IEI LOGO" className="IEI__logo"/>
                    </li>
                   
                    <li>
                    <InfoOutlinedIcon className="display"/> About Us
                    </li>
                  <li>
                        <PhotoAlbumOutlinedIcon className="display"/> Gallery
                    </li>
                    <li>
                        <BusinessOutlinedIcon className="display"/> Aarohan
                    </li>
                    <li>
                        <AccountBalanceOutlinedIcon className="display"/>Sponsership
                    </li>
                    <li>
                        <PeopleAltOutlinedIcon className="display"/> Teams
                    </li>
                    <li>
                        <ContactPhoneOutlinedIcon className="display"/> Contact Us
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar
