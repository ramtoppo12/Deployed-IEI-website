import React from "react";
import imgone from "../assets/1.jpeg";
import imgtwo from "../assets/2.jpeg";
import imgthree from "../assets/3.jpeg";
import TeamAvatar from "./TeamAvatar";



function TeamSection(){

    const teamdetails =[
     {id:"1",image:imgone,name:"Ram",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
      {id:"2",image:imgtwo,name:"Raj",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
        {id:"3",image:imgthree,name:"Ravi",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
       
       
    ]
    var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];
console.log(teamdetails)
    return (
        
	<section class="section-team">
		<div class="container">
			{/* <!-- Start Header Section --> */}
			<div class="row justify-content-center text-center">
				<div class="col-md-8 col-lg-6">
					<div class="header-section">
						<h3 class="small-title">Our Experts</h3>
						<h2 class="title">Let's meet with our team members</h2>
					</div>
				</div>
			</div>
			{/* <!-- / End Header Section -->
				<!-- Start Single Person --> */}

			<div class="row">
				{
                teamdetails.map(data=>(
                    	
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img key={data.key} src={data.image} alt="" />
							<span class="icon">
								<i class="fab fa-facebook"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">{data.name}</h3>
							<span class="speciality">{data.summery}</span>
						</div>
					</div>
				</div>
				
		
                ))
            }

				{/* <!-- / End Single Person --> */}
			</div>
		</div>
	</section>

    )
}

export default TeamSection;