// Get menu and navbar elements
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

// Toggle menu and navbar on menu click
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
// let section = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header .navbar a');

// Remove classes on scroll
// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');

//     section.forEach(sec =>{

//         let top = window.scrollY;
//         let height = sec.offsetHeight;
//         let offset = sec.offsetTop - 150;
//         let id = sec.getAttribute('id');

//         if(top > offset && top < offset + height){
//             navlinks.forEach(links =>links.classList.remove('active'));
//                 let navlinks = document.querySelector('header .navbar a[href*='+id+']').classlist.add('active');
//         };
//      });
    
// };



// Toggle search form visibility on search icon click
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
};

// Remove active class from search form on close button click
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoiont:{
        0:{
            slidesPerView:1,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
        1024:{
            slidesPerView:3,
        },


    }
});
// function loader(){
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut(){
//     setInterval(loader, 3000);
// }
// window.onload = fadeOut;