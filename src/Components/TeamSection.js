import React from "react";
import Trishant from "../assets/trishantnewedit.jpeg";
import Lavish from "../assets/Lavish.jpeg"
import Ujjwal from "../assets/Ujjwal.jpg";
import Shrique from "../assets/sharik.jpg";
import Rupesh from "../assets/rupesh.jpeg";
import Anubhaw from "../assets/Anubhaw.JPG";



function TeamSection(){

    const teamDetails = [
        {image:Anubhaw,name:"Anubhaw kr. Sinha",desgination:"President"},
        {image:Shrique,name:"Sharique",desgination:"Vice-President"},

        {image:Trishant,name:"Trishant Agarwal",desgination:"Joint president"},
        {image:Lavish,name:"Lavish Kavdla",desgination:"Media & Publicity Director"},
        {image:Ujjwal,name:"Ujjwal Prakash",desgination:"Events Director"},
        {image:Rupesh,name:"Rupesh Kumar",desgination:"Technical Director"},


    ]

    return (
              <>
              
<div class="team" id="team">
  <h2>Meet The Team</h2>
  <div class="list">

      {
          teamDetails.map(data=>(
                 <div class="member"><img class="member__img" src={data.image} alt="a doggo"/>
      <div class="member__info"><strong class="member__name">{data.name}</strong><em class="member__desig">{data.desgination}
      
      </em></div>
    </div>
          ))
      }
   
    
    <div class="member join">
      <p>We attach</p>
      <p>We protech</p><small>but most importantly...</small><strong>We want our bone beck!</strong><a href="https://www.instagram.com/iei_civil_bitmesra/">Join Us</a>
    </div>
  </div>
</div>
              </>
    )
} 

export default TeamSection;