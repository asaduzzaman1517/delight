
//Importing JQuery
import '../../node_modules/jquery/dist/jquery';

//Bootstrap 4
import '../../node_modules/bootstrap/dist/js/bootstrap.min';
import "../../node_modules/bootstrap/scss/bootstrap.scss";

//Owl.carousel
import 'owl.carousel';
import '../../node_modules/owl.carousel/src/scss/owl.carousel.scss';


// Importing Favicon Image
import '../img/favicon.ico';
import '../img/apple-icon.png';
import '../img/f-1.png';
import '../img/f-2.jpeg';
import '../img/f-3.jpeg';
import '../img/f-5.jpeg';

//Importing SASS File
import '../sass/style.scss';


// Document Ready Function
$(function(){

    //Fixed Header on Scroll
    $(window).scroll(function(){
        const distTop = $('html').scrollTop();
        const headerHeight = $('.header').outerHeight();

        //Fixed header if this condition true
        if(distTop > headerHeight) {
            $('.header').addClass('fixed-top');
        }
        else {
            $('.header').removeClass('fixed-top');
        }
    });

    //Full Screen Navigation
    $('.navbar-toggler').on('click', function(){
        $('#full-screen').toggleClass('is-nav-fullscreen');
        $('#full-screen ul').toggleClass('is-align-center');
    });
    //owl carousel for deal section
    $('.deal--slide').owlCarousel({
        loop: true,
        nav: false,
        margin: 14,
        responsive: {
            0:{
                items: 1
            },
            768: {
                items: 2,
                dots: false,
                autoplay: true,
                autoplayHoverPause: true
            }
        }
    });
    //owl carousel for testimonial
    $('.testimonial--slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        items: 1,
        autoplay: true
    });
    //Menu active on click
    $('.menu--text').on('click', function(){
        if (!$(this).hasClass('menu--active')) {
            $('.menu--active').removeClass('menu--active');
            $(this).addClass('menu--active');
        }
    });
});
