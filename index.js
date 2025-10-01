let service = document.querySelector(".service")
let About = document.querySelector(".About")
let content = document.querySelector(".content")

let menu = document.querySelector("#click");
let menubox = document.querySelector(".newmenubox");


menu.addEventListener("click", () => {
    menubox.classList.toggle("active");  
});