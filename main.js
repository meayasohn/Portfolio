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

// Navbar toogle for mininum screen
const navbarToogleBtn = document.querySelector('navbar__toggle-btn');
navbarToogleBtn.addEventListener('click', ()=>{
  navbarMenu.classList.toggle('open');
});


const contactmeBtn = document.querySelector('.home__contact');
contactmeBtn.addEventListener('click', (event) =>{
  scrollIntoView('#contact');
});

// Home opacity change when scrolling is down
const home = document.querySelector('#home');
const scrollHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow__up');

document.addEventListener('scroll', ()=>{
home.style.opacity = 1 - window.scrollY/scrollHeight;

console.log(home.style.opacity);

  if(home.style.opacity <0){
    arrowUp.classList.add('visible');
  }else{
    arrowUp.classList.remove('visible'); 
  }
});

arrowUp.addEventListener('click', ()=>{
  scrollIntoView('#home');
});


const workCategory = document.querySelector('.work__categories');
const workProjects = document.querySelector('.work__projects');
const projectFilter = document.querySelectorAll('.project');
const categoryBtn = document.querySelectorAll('category__btn');
workCategory.addEventListener('click', (event)=>{
  const  filter = event.target.dataset.job || event.target.parentNode.dataset.job;

  if(filter == null){
    return;
  }

  // Button Select mark change
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
  target.classList.add('selected');

  // console.group();
  workProjects.classList.add('anim-out');

  setTimeout(() => {
    projectFilter.forEach((project)=>{
      if(filter==='*' || filter === project.dataset.job){
        project.classList.remove('invisible');
      }else{
        project.classList.add('invisible');
      }
    });
    workProjects.classList.remove('anim-out');
  }, 300);
  // console.groupEnd();
});

function scrollIntoView(selector){
  const strollTo = document.querySelector(selector);
  strollTo.scrollIntoView({behavior: "smooth"});
}