const swiperProducts = new Swiper('.swiper-container-products', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 20,
    freeMode: true,
    mousewheel: false,
    initialSlide: 0,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.articles-next',
        prevEl: '.articles-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 5,
            grid:{
                rows: 2,
                fill: 'row'
            }
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 3,
            slidesPerGroup: 1,
            grid:{
                rows: 1,
                fill: 'column'
            }
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        }
    }

});