// Your code goes here

// CSS selector function
const get = (selector) => {
    return document.querySelector(selector)
  }
  
//selecting elements using using get (CSS selector) function

// navigation bar
const logoHeading = get('.logo-heading')
const nalLink = get('.nav-link')

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
function lunch(event){
event.target.style.backgroundColor = 'gold';

}
logoHeading.addEventListener('mouseover', lunch)


