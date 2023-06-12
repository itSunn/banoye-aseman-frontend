var swiperProducts = new Swiper('.swiper-products', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        390: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});
var swiperProducts = new Swiper('.swiper-plans', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        390: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

// For Desktop Preview Products Images
const swiperThumb = new Swiper('.swiper-details-thumb', {
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
        250: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});
const swiperImagePreview = new Swiper('.swiper-details-preview', {
    slidesPerView: 1,
    spaceBetween: 15,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    thumbs: {
        swiper: swiperThumb
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});
