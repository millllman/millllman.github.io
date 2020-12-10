$(document).ready(function() {

    $('.slider-product').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.most-popular__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 5,
                vertical: true,
                arrows: false,
                adaptiveHeight: true
              }
            }
        ],
    });

    // Category Menu
    $('.category-menu__box > li > a').next('ul').closest('li').children('a').addClass('has-dropdown');

    $('.category-menu__box > li > a.has-dropdown').on('click', function() {
        $(this).closest('li').children('ul').slideToggle();
        return false;
    });

    $('.main-top__menu-open').on('click', function() {
        $('.main-top__menu').slideDown();
        return false;
    });
    $('.main-top__menu-close').on('click', function() {
        $('.main-top__menu').slideUp();
        return false;
    });

    // Header Fixed
    var topHeader = $('.header-top__box'),
        topHeaderIndent = $('.header-top__empty');
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 200 ) {
            topHeader.addClass('fixed');
            topHeaderIndent.addClass('fixed');
        } else {
            topHeader.removeClass('fixed');
            topHeaderIndent.removeClass('fixed');
        }
    });
     
    // Tabs Menu
    $(".tabs-content").hide();
    $(".tabs-content:last").show();   
       $(".tabs-menu li:last").addClass("active").show(); 
       $(".tabs-menu li").click(function() {
            $(".tabs-menu li").removeClass("active"); 
            $(this).addClass("active");
            $(".tabs-content").hide(); 
            var activeTab = $(this).find("a").attr("href"); 
            $(activeTab).fadeIn(); 
       return false;
    });

});