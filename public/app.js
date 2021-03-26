// var btn = document.getElementsByClassName(".btn");
// var slider = document.getElementById("#slider");

// btn[0].onclick = function(){
//     slider.style.transform = "translateX(0px)";
// }


// btn[1].onclick = function(){
//     slider.style.transform = "translateX(-800px)";
// }
  
//       var images = [], x = -1;
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


// loader

$(window).load(function () {
        // Animate loader off screen
        $(".mesh-loader").fadeOut("slow");;
    });