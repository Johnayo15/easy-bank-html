const btnHamburger = document.querySelector('#btnhamburger');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade')
const heroImage = document.querySelector('.hero__img')

btnHamburger.addEventListener('click',function(){  
  if (header.classList.contains('open')){// close hamburger menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element){
       element.classList.remove('fade-in')
       element.classList.add('fade-out')

    });

    heroImage.classList.add('fade-in')
    heroImage.classList.remove('fade-out')


  }

  else{ // open hamburger menu
    body.classList.add('noscroll')
    header.classList.add('open');
    fadeElems.forEach(function(element){
       element.classList.remove('fade-out');
       element.classList.add('fade-in');
    });

    heroImage.classList.remove('fade-in')
    heroImage.classList.add('fade-out')

  }
});


