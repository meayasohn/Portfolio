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