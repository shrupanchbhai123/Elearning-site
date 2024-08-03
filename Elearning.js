const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
      
ScrollReveal().reveal(".header_image img", {
   ...scrollRevealOption,
   origin: "right",
});

ScrollReveal().reveal(".header_content h1", {
   ...scrollRevealOption,
   delay: 500,
});

ScrollReveal().reveal(".header_content p", {
   ...scrollRevealOption,
   delay: 1000,
});

ScrollReveal().reveal(".header_content form", {
   ...scrollRevealOption,
   delay: 1500,
});


var flag = 0;
var helo = document.querySelector("#hello");
helo.addEventListener('click',function(){
   if(flag === 0){
      helo.innerHTML = "Subscribed";
      helo.style.color = "blue";
      flag = 1;
   }else{
      helo.innerHTML = "Subscrib Now";
      helo.style.color = "black";
      flag = 0;
   }

})