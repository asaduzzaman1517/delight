//Importing JQuery
import '../../node_modules/jquery/dist/jquery';
//Importing Bootstrap Script
import '../../node_modules/bootstrap/dist/js/bootstrap.min';
// Bootstrap Styles
import "../../node_modules/bootstrap/scss/bootstrap.scss";

// Importing Favicon Image
import '../img/favicon.ico';
import '../img/apple-icon.png';

//Importing SASS File
import '../sass/style.scss';


// Document Ready Function
$(function(){

    //Fixed Header on Scroll
    $(window).scroll(function(){
        const distTop = $('html').scrollTop();
        const headerHeight = $('#header').outerHeight();

        //Apply this condition
        if(distTop > headerHeight) {
            $('#header').addClass('fixed-top');
        }
        else {
            $('#header').removeClass('fixed-top');
        }
    });

    //Full Screen Navigation
    $('.navbar-toggler').on('click', function(){
        $('#full-screen').toggleClass('is-nav-fullscreen');
        $('#full-screen ul').toggleClass('is-align-center');
        $('.nav-item a').toggleClass('h4');
    })
});
