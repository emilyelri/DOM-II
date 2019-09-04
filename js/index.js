// Your code goes here
// 10 unique selectors to manipulate:

/*1*/let navbar = document.querySelector('.main-navigation');
/*2*/let navItem = document.querySelector('nav a');
/*3*/let logoHeading = document.querySelector('logo-heading');
/*4*/let funBus = document.querySelector('.intro img');
/*5*/let welcome = document.querySelector('.intro h2');
/*6*/let adventure = document.querySelector('.img-content img');
/*7*/let fun = document.querySelector('.inverse-content img');
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

//changes home button yellow upon click
navItem.addEventListener('click', (event) => {
    navItem.style.color = "yellow";
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

//increases h2 welcome size upon document resize
welcome.addEventListener('resize', (event) => {
    welcome.style.fontSize = "2rem";
});

adventure.addEventListener('copy', (event) =>{
    adventure.style.display = "none";
});