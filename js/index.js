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
const pickDestination = get('.home .content-destination')
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

function draggable(event){
    event.target.style.transform = 'scale(0.5)'
    event.target.style.border = '2px solid red'
}
firstImg.addEventListener('drag', draggable)
    
// function dropDrop(event){
//     event.target.style.transform = 'scale(1)'
//     event.target.style.border = ''
// }
// firstImg.addEventListener('drop', dropDrop)



// load*****************
// on  reloading web page alert box appears and the message is "Hello Hello!!! Welcome to the Fun Bus Adventure Web Site."
function loading(event){
    alert('Hello Hello!!! Welcome to the Fun Bus Adventure Web Site.')
}
window.addEventListener('load', loading)



// focus*****************
// clicking on navigation item green border appear and disappear if clicked some where on the page
// const navLink = document.querySelectorAll('.nav-link')

function focusing(event){
    navLink.style.border ='2px solid green'    
}
function blurry(event){
    navLink.style.border =''    
}
navLink.addEventListener('focus', focusing)
navLink.addEventListener('blur', blurry)


// resize*****************
// when browser window size changes popup window message appears.
function resizing(event){
    alert('Making larger and smaller browser size success')
}
window.addEventListener('resize', resizing)


// scroll*****************
// scrolling mouse wheel causes popup box appears with 'Well Done!!!! Scroll is working.'

const mainNavigation = get('.main-navigation')
function scrolling(event){
       alert('Well Done!!!! Scroll is working.')
    // body.style.backgroundColor = 'light-grey'
}
window.addEventListener('scroll', scrolling)

// select*****************
// const footerNew = document.querySelector('.footer')
// const input = document.newElement('input')
// input.setAttribute('value', Fun-Bus-Adventure)
// footerNew.appendChild(input)
// const emptyPara = document.newElement('p')
// footerNew.appendChild(emptyPara)

function logSelection(event){
    const log = document.querySelector('#log')
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
}
const input = document.querySelector('input')
input.addEventListener('select', logSelection)


// dblclick*****************
// on double click class='content-destination' background color changes to orange 
function doubleClick(event){
     pickDestination.style.backgroundColor = 'orange'
}
pickDestination.addEventListener('dblclick', doubleClick)