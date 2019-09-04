// Your code goes here
// 10 unique selectors to manipulate:

/*1*/let navbar = document.querySelector('.main-navigation');
/*2*/let navItem = document.querySelector('nav a');
/*3*/let logoHeading = document.querySelector('logo-heading');
/*4*/let funBus = document.querySelector('.intro img');
/*5*/let welcome = document.querySelector('.intro h2');
/*6*/let adventure = document.querySelector('.img-content img');
/*7*/let fun = document.querySelector('.inverse-content .text-content');
/*8*/let destination = document.querySelector('.content-destination img');
/*9*/let buttons = document.querySelectorAll('.btn');
/*10*/let footer = document.querySelector('footer');

//changes topbar grey upon hover
navbar.addEventListener('mouseover', (event) => {
    navbar.style.backgroundColor = "grey";
    navbar.style.color = "white";
});

//back to normal
navbar.addEventListener('mouseleave', (event) => {
    navbar.style.backgroundColor = "white";
    navbar.style.color = "black";
});

document.addEventListener('load', (event) => {
    logoHeading.style.color = "yellow";
    
});

//changes home button yellow upon click
navItem.addEventListener('click', (event) => {
    navItem.style.color = "yellow";
    preventDefault();
    event.stopPropagation();
});

//changes home button back to black
navItem.addEventListener('mouseleave', (event) => {
    navItem.style.color = "black";
    event.stopPropagation();
});

//double clicking removes image
funBus.addEventListener('dblclick', (event)=>{
    funBus.style.display = "none";
});

//changes "welcome" color upon document scroll
document.addEventListener('scroll', (event) => {
    welcome.style.color = "red";
});

//scrolling the page removes the adventure image!
document.addEventListener('wheel', (event) =>{
    adventure.style.display = "none";
});

//copying anything in "Adventure Awaits" changes the whole font
fun.addEventListener('copy', (event) => {
    fun.style.fontFamily = "Verdana";
});

//changes width of image on dbl click
destination.addEventListener('dblclick',(event)=> {
    destination.width = "50%";
    event.stopPropagation();
});