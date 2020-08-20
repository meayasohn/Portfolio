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
  console.log(event.target.dataset.link);

  const strollTo = document.querySelector(link);
  strollTo.scrollIntoView({behavior: "smooth"});
});