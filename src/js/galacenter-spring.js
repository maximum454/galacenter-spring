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

function getScrollY()
{
    scrollY = 0;
    if (typeof window.pageYOffset == "number") {
        scrollY = window.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        scrollY = document.documentElement.scrollTop;
    }  else if (document.body && document.body.scrollTop) {
        scrollY = document.body.scrollTop;
    } else if (window.scrollY) {
        scrollY = window.scrollY;
    }
    return scrollY;
}

$(function (){
    const bodyHeight = $('body').outerHeight()/2;
    $(document).on('scroll', function (e){
        if ( $(window).scrollTop() >= bodyHeight ){
            $('body').addClass('parallax')
        }else{
            $('body').removeClass('parallax')
        }
    })
})