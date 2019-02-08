$(document).ready(function(){
    //hero slider
    $('#slider').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop:true,
        margin:10,
        autoplay: true,
        responsiveClass:true,
        nav:false,
        dots:true,
        mouseDrag:false,
        touchDrag: false,
        responsive:{
            0:{
                items:1,
                dots:true
            },
            600:{
                items:1,
                dots:true
            },
            1000:{
                items:1,
                dots:true,
                loop:true
            }
        }
    });
    //slider animation
    $('#slider').on('translate.owl.carousel',function () {
        $('.item-content h1, .item-content p').removeClass('animated fadeInUp').css('opacity','0');
        $('.hero-cont-btn a').removeClass('animated slideInLeft').css('opacity','0');
        $('.hero-more-link a').removeClass('animated slideInRight').css('opacity','0');
    });
    $('#slider').on('translated.owl.carousel',function () {
        $('.item-content h1, .item-content p').addClass('animated fadeInUp').css('opacity','0');
        $('.hero-cont-btn a').addClass('animated slideInLeft').css('opacity','1');
        $('.hero-more-link a').addClass('animated slideInRight').css('opacity','1');
    });
    //events slider
    $('#events-slide').owlCarousel({
        loop:true,
        margin:20,
        autoplay: true,
        responsiveClass:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                loop:true
            },
            600:{
                items:2,
                loop:true
            },
            1000:{
                items:3,
                loop:true
            }
        }
    });
    //overview video slider
    $('#overview-video-slide').owlCarousel({
        loop:true,
        margin:20,
        autoplay: true,
        responsiveClass:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                loop:true
            },
            600:{
                items:1,
                loop:true
            },
            1000:{
                items:1,
                loop:true
            }
        }
    });
    //sponsors slider
    $('#sponsor-slide').owlCarousel({
        loop:true,
        margin:20,
        autoplay: true,
        responsiveClass:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2,
                loop:true,
                nav:true
            },
            600:{
                items:4,
                loop:true,
                nav: true
            },
            1000:{
                items:6,
                loop:true,
                nav:true
            }
        }
    });

    //WoW js activation
    new WOW().init();

    //responsive slick nav menu activation
    $('#nav').slicknav({
        prependTo:'.responsive-mobile-menu',
    });

    // magnific popup activation
    $('.popup-img').magnificPopup({
        gallery: {
            enabled: true
        },
        type: 'image'
    });

    //back to top show when scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".back_to_top i.fa").css("display", "none");
        } else {
            $(".back_to_top i.fa").css("display", "block");
        }
    });
    $(".back_to_top i.fa").on("click",function () {
        $("html").animate({
            scrollTop: 0
        }, 800);
    });

    /*countdown timer*/
    $('.countdown').countdown('03/30/2019', function (event) {
        $('#count-days').html(event.strftime('%D'));
        $('#count-hours').html(event.strftime('%H'));
        $('#count-minutes').html(event.strftime('%M'));
        $('#count-seconds').html(event.strftime('%S'));
    });

    //sticky menu when scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("#race-header").addClass("sticky_menu");
        } else {
            $("#race-header").removeClass("sticky_menu");
        }
    });

//smooth scrolling
    $("#nav a").click(function (e) {
        e.preventDefault();
        var hash = this.hash;
        var position = $(hash).offset().top;
        $("html").animate({
            scrollTop: position - 100
        }, 800);
    });

});