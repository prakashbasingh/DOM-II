// Your code goes here

// CSS selector function
const get = (selector) => {
    return document.querySelector(selector)
  }
// const get = function(selector){
//     document.querySelector(selector);
// }
  
//selecting elements using using get (CSS selector) function

// navigation bar
const logoHeading = get('.logo-heading')
const navLink = get('.nav-link')
const nav = get('nav')
// container home
const welcomeToFunBus = get ('.home .intro h2')
const letsGo = get('.home .content-section .text-section h2')
const letsGoImg = get('.home .content-section .img-content')
const haveFunImg = get('.home .inverse-content .img-content')
const adventureAwaits = get('.home .inverse-content h2')
const pickDestination = get('.home .content-destination h2')
const secondSlideImg = get('.home .content-destination img')

const button = get('.home .destination .btn')

// creating event listeners

// mouseover**********************
function mouseoverFunBush(event){
    
event.target.style.backgroundColor = 'gold';
event.target.style.color = 'red'
setTimeout(function(){
    event.target.style.backgroundColor ='';
}, 200)
setTimeout(function(){
    event.target.style.color ='';
}, 200)

};
logoHeading.addEventListener('mouseover', mouseoverFunBush)


// keydown**************
function navBackColor (event){
    if(event.key === 'Escape'){
    nav.style.backgroundColor = 'orange' 
    }
}
document.addEventListener('keydown', navBackColor)
// document.addEventListener('keydown', event => {
//     if(event.keyCode === '13'){
//         alert('Hello!!! Welcome to the Fun Bus.....') 
//     }
//   });

// wheel*******************s**

function wheeling (event){
    // if(event)
    event.target.style.color = 'red'
    event.target.style.backgroundColor = 'gray'
}

welcomeToFunBus.addEventListener('wheel', wheeling)

// drag / drop*****************



// load*****************


// focus*****************


// resize*****************


// scroll*****************


// select*****************


// dblclick*****************
// function dblclickNavLink(event){
    
//     event.target.style.backgroundColor = 'orange'
//     }
    
    // navLink.addEventListener('dblclick', addEventListener)