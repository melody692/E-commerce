/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener("click", () =>{
    navMenu.classList.add('show-menu')
  })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-menu');
  });
}
/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartclose = document.getElementById('cart-close')
/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop) {
  cartShop.addEventListener("click", () =>{
    cart.classList.add('show-cart')
  })
}
/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartclose) {
  cartclose.addEventListener("click", () =>{
    cart.classList.remove('show-cart')
  })
}
/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login_close')
/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton) {
  loginButton.addEventListener("click", () =>{
    login.classList.add('show-login')
  })
}
/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose) {
  loginClose.addEventListener("click", () =>{
    login.classList.remove('show-login')
  })
}
/*=============== HOME SWIPER ===============*/
 homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    loop: 'true',
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },  
  });
/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
  const scrollup = document.getElementById('scroll-up');
  //when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top class
  if(this.scrollY >= 350)  scrollup.classList.add('show-scroll'); else scrollup.classList.remove('ahow-scroll')
}
window.addEventListener('scroll' ,scrollUp)
/*=============== QUESTIONS ACCORDION ===============*/
const accordionItem = document.querySelectorAll('.questions_item')

accordionItem.forEach((item) =>{
  const accordionHeader = item.querySelector('.questions_header')

  accordionHeader.addEventListener('click', () =>{
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if(openItem && openItem !== item) {
      toggleItem(openItem)
    }
  })
})
const toggleItem =(item) =>{
  const accordionContent = item.querySelector('.questions_content')

if(item.classList.contains('accordion-open')){
  accordionContent.removeAttribute('style')
  item.classList.remove('accordion-open')
}
else{
  accordionContent.style.height = accordionContent.scrollHeight + 'px'
  item.classList.add('accordion-open')
}
}
