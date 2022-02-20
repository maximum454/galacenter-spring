$(function (){
    const bodyHeight = $('.main').outerHeight()/2;
    $(document).on('scroll', function (e){
        let scrollT = $(window).scrollTop();

        if ( $(window).scrollTop() >= bodyHeight ){
            $('body').addClass('parallax')
            $('body').css({'background-position': 'bottom'});
        }else{
            $('body').removeClass('parallax')
            $('body').css({'background-position': '0 -'+(scrollT/2.5)+'px'});
        }
    })
})