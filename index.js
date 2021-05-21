


const btnMenu = document.querySelector(".menu-btn");
const btnClose = document.querySelector(".cancel-btn");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");

btnMenu.addEventListener("click", function(){
    btnMenu.style.opacity ="0"
    btnMenu.style.pointerEvents = "none"
    navbar.classList.add("active")
    body.style.overflow = "hidden"
})

btnClose.addEventListener("click", function(){
        navbar.classList.remove("active")
    btnMenu.style.opacity ="1"
    btnMenu.style.pointerEvents = "auto"
    body.style.overflow = "auto"
})


const nav = document.querySelector("nav")

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
  
        nav.classList.add("styki")
    }else{
        nav.classList.remove("styki")
    }
}


let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navbar.classList.remove("active");
    btnMenu.style.opacity = "1";
    btnMenu.style.pointerEvents = "auto";
    body.style.overflow = "auto"
  });
}