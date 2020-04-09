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
const firstImg = get('.home .intro img')
const textContent = get('.content-section .text-content')
const letsGo = get('.home .content-section .text-section h2')
const letsGoImg = get('.home .content-section .img-content')
const haveFunImg = get('.home .inverse-content .img-content')
const adventureAwaits = get('.home .inverse-content h2')
const pickDestination = get('.home .content-destination h2')
const secondSlideImg = get('.home .content-destination img')

const button = get('.btn')
const h2 = get ('h2')

// creating event listeners

// mouseover**********************
// when mouse hovers on Fun Bus background color changes to gold and text color changes to red then chenges disappear in 300ms
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
// when space kee is pressed navigation bar background color changes to orange
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
// on rolling mouse wheel, "Welcome To Fun Bus" text color and background color  changes to red and gray respectively
function wheeling (event){
    // if(event)
    event.target.style.color = 'red'
    event.target.style.backgroundColor = 'gray'
}

welcomeToFunBus.addEventListener('wheel', wheeling)

// drag / drop*****************
textContent.style.border = '2px solid gray'
textContent.setAttribute('draggable', true)
letsGoImg.setAttribute('draggable', true)
function draggable(event){

}
textContent.addEventListener('drag', draggable)

function dropping(event){
    
}

// load*****************
// on  reloading web page alert box appears and the message is "Hello Hello!!! Welcome to the Fun Bus Adventure Web Site."
function loading(event){
    alert('Hello Hello!!! Welcome to the Fun Bus Adventure Web Site.')
}
window.addEventListener('load', loading)



// focus*****************

function focusing(event){
    navLink.style.border ='2px solid green'    
}
function blurry(event){
    navLink.style.border =''    

}
navLink.addEventListener('focus', focusing)
navLink.addEventListener('blur', blurry)

// resize*****************
function resizing(event){

}
// ... .addEventListener('resize', resizing)

// scroll*****************
function scrolling(event){

}
// ... .addEventListener('scroll', scrolling)

// select*****************
function selecting(event){

}
// ... .addEventListener('select', selecting)

// dblclick*****************
// function dblclickNavLink(event){
    
//     event.target.style.backgroundColor = 'orange'
//     }
    
    // navLink.addEventListener('dblclick', addEventListener)