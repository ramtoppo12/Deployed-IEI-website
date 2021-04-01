
import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from './Actions/users';
import './App.css';
import Header from './Components/Header';
import Sponsership from './Components/Sponsership';
import EventSection from './Components/EventSection';
import MapLocation from "./Components/MapLocation";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Aarohan21 from './Components/Aarohan21';
import Gallery from './Components/Gallery';

function App() {

  // const [userDetails,setUserDetails] = React.useState({
  //   email:"",
  //   password:""
  // });

  // const dispatch = useDispatch();
  // const handleSubmit =(evt)=>{
  //   evt.preventDefault();

  //   dispatch(createUser(userDetails))
    
  // }

// const backgroundChanger = () =>{
//    var images = [], x = -1;
//       images[0] ='./assets/one.jpeg';
//       images[1] ='./assets/two.jpeg';
//       images[2] ='./assets/three.jpeg';
//       images[3] ='./assets/four.jpeg';
//       images[4] ='./assets/five.jpeg';
//       images[5] ='./assets/six.jpeg';

//       var img = document.getElementById("img");

// function displayImage(x) {
//   img.style.backgroundImage = "url(" + images[x] + ")";
// }
// function startTimer() {
//   var x = 0;
//   displayImage(x);
//   setInterval(function() {
//     x = x + 1 >= images.length ? 0 : x + 1;
//     displayImage(x);
//   }, 5000);
// }
// startTimer();

// }

// loader

// $(window).load(function () {
//         // Animate loader off screen
//         $(".mesh-loader").fadeOut("slow");;
//     });
  
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="/Aarohan21">
          <Aarohan21/>
          </Route>
          <Route path="/">
           {/* <form onSubmit={handleSubmit}>
        <h1>Enter Login Details</h1>
        <input type="email" vale={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
        <input type="password" value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}/>
        <button type="submit">Submit</button>
      </form> */}

          <Header  />
          <About/>
          {/* <EventSection/> */}
          <Gallery/>
          <Sponsership/>
          <MapLocation />
          <Footer/>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
