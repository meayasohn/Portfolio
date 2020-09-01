'use strict';



// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHegiht = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=> {
  if( window.scrollY > navbarHegiht ){
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark'); 
  }
});

//Scrolliong when menu is click
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', ()=>{
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return;
  }
  scrollIntoView(link);
});

const contactmeBtn = document.querySelector('.home__contact');
contactmeBtn.addEventListener('click', (event) =>{
  scrollIntoView('#contact');
});

// Home opacity change when scrolling is down
const home = document.querySelector('#home');
const scrollHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
  home.style.opacity = 1 - window.scrollY/scrollHeight;
});

function scrollIntoView(selector){
  const strollTo = document.querySelector(selector);
  strollTo.scrollIntoView({behavior: "smooth"});
}