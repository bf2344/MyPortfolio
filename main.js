// Hamburger Menu
// the first function opens up my hamburger menu
$(document).ready(function () {
    $('.menu-toggler').on('click', function (){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

        // this function is for when you click a link in the nav bar that you are able to close the menu 
        $('.top-nav .nav-link').on('click', function (){
            $('.menu-toggler').removeClass('open');
            $('.top-nav').removeClass('open');
        });

    //    this function is going to scroll the page based on which link you click in the menu 
            $('nav a[href*="#"]').on('click', function (){
                $('html, body').animate({
                    scrollTop: $($(this).attr('href')).offset().top - 100
                }, 2000);
            });


            // this is for the bottom button and to scroll back to the top of the page 
            $('#up').on('click', function (){
                $('html, body').animate({
                    scrollTop: 0
                }, 2000);
            });
            
            //  AOS.init({
            //     easing: 'ease'
            //     duration: 1800
            //  })   
});

