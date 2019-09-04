// Your code goes here
// 10 unique selectors to manipulate:

let navbar = document.querySelector('.main-navigation');
let navItems = document.querySelectorAll('nav-link');
let funBus = document.querySelector('.intro img');
let welcome = document.querySelector('.intro h2');
let adventure = document.querySelector('.img-content img');
let advText = document.querySelector('.content-section .text-content');
let fun = document.querySelector('.inverse-content .text-content');
let destination = document.querySelector('.content-destination img');
let footer = document.querySelector('footer');

//changes topbar grey upon hover
navbar.addEventListener('mouseover', (event) => {
    navbar.style.backgroundColor = "grey";
    navbar.style.color = "white";
    event.stopPropagation();
});

//back to normal
navbar.addEventListener('mouseleave', (event) => {
    navbar.style.backgroundColor = "white";
    navbar.style.color = "black";
    event.stopPropagation();
});

//double clicking removes image
funBus.addEventListener('dblclick', (event)=>{
    funBus.style.display = "none";
    event.stopPropagation();
});

//changes nav items yellow upon click
navItems.forEach((navItem) => {
    navItem.addEventListener('click', (event) => {
        navItem.style.color = "yellow";
        preventDefault();
        event.stopPropagation();
    });
});

//changes nav items back to black                    
navItems.forEach((navItem) => {
    navItem.addEventListener('mouseleave', (event) => {
        navItem.style.color = "black";
        preventDefault();
        event.stopPropagation();
    });
});

//changes "welcome" color upon document scroll
document.addEventListener('scroll', (event) => {
    welcome.style.color = "red";
});

//dragging removes the adventure image!
adventure.addEventListener('drag', (event) =>{
    adventure.style.display = "none";
    advText.style.width = "100%";

});

//copying anything in "Adventure Awaits" changes the whole font
fun.addEventListener('copy', (event) => {
    fun.style.fontFamily = "Verdana";
});

//adds border to destination image on wheel scroll
document.addEventListener('wheel',(event)=> {
    destination.style.border = "3px dotted green";
});

//hitting any key strikes through footer dd
document.addEventListener('keydown', (event) => {
    footer.style.textDecoration = "line-through";
});