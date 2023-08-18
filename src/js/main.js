import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import '@/styles/style.scss';

/*=============== BURGER ===============*/
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener("click" , e => {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}

/*=============== SLIDER PARTNERS ===============*/
var swiperPartners = new Swiper(".partners__swiper", {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  spaceBetween: 19,
  breakpoints: {
    640: {
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  }
});

/*=============== POPUPCITY ===============*/
const popupBody = document.querySelector(".popup-city__body");
const cityButton = document.querySelector(".menu__city-btn");
const cityList = document.querySelector(".popup-city__list");

  cityButton.addEventListener("click", (e) => {
    popupBody.classList.add("_active");
})
  cityList.addEventListener("click", (e) => {
    popupBody.classList.remove("_active");
  })

/*=============== SLIDER PAYMENT ===============*/
var swiperPayment = new Swiper(".payment__content", {
  slidesPerView: 'auto',
  loop: true,
  centeredSlides: false,
  spaceBetween: 64,
  observer: true,
            observeParents: true,
            parallax:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    720: {
      centeredSlides: true,
      slidesPerView: 4,
      spaceBetween: 90,
    },
    1020: {
      centeredSlides: true,
      slidesPerView: 5,
      spaceBetween: 95,
    },
    1200: {
      centeredSlides: false,
      slidesPerView: 6,
      spaceBetween: 104,
    },
  }
});

/*=============== TEXT BLOCK ===============*/
let more = document.querySelector(".text__hidden")
let btn = document.getElementById("text__btn");

btn.onclick = function ()
{
  more.classList.toggle('_more')   
} 