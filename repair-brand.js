var windowInnerWidth = document.documentElement.clientWidth;
var SwiperElementViews = windowInnerWidth/240;

var brandsGallery = document.querySelector('.repair-brands__gallery');
var openBrandsGalleryButton = document.querySelector('.repair-brands__button-full-open');
var closeBrandsGalleryButton = document.querySelector('.repair-brands__button-full-close');
var brandsGalleryBrands = document.querySelectorAll('.repair-brands__brand');
var brandsContainer = document.querySelector('.repair-brands-container');

openBrandsGalleryButton.addEventListener('click', function (evt) {
    brandsGallery.classList.add('repair-brands__gallery__full');
    openBrandsGalleryButton.classList.add('repair-brands__button-full-open--hidden');
    closeBrandsGalleryButton.classList.remove('repair-brands__button-full-close--hidden');
});

closeBrandsGalleryButton.addEventListener('click', function () {
    brandsGallery.classList.remove('repair-brands__gallery__full');
    openBrandsGalleryButton.classList.remove('repair-brands__button-full-open--hidden');
    closeBrandsGalleryButton.classList.add('repair-brands__button-full-close--hidden');
});

if (windowInnerWidth < 671.98) {
        brandsGallery.classList.add('swiper-wrapper');
        brandsContainer.classList.add('swiper-container');
        for (var i=0; i < brandsGalleryBrands.length; i++) {
            brandsGalleryBrands[i].classList.add('swiper-slide');
            console.log(brandsGalleryBrands);
        }
}

const swiper = new Swiper('.repair-brands-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    slideToClickedSlide: true,
    slidesPerView: SwiperElementViews,
    spaceBetween: 16,
    mousewheel: {},
    keyboard: {
    enabled: true,

    },
  });
