$(document).ready(function() {

    // Number Animate
    $(function () {
        var target_block1 = $(".pc-number1"),
            target_block2 = $(".pc-number2"),
            target_block3 = $(".pc-number3"),
            target_block4 = $(".pc-number4");
        var blockStatus = true;  
        $(window).scroll(function() {
            var scrollEvent = ($(window).scrollTop() > (target_block1.offset().top && target_block2.offset().top && target_block3.offset().top && target_block4.offset().top - $(window).height())); 
            if(scrollEvent && blockStatus) {  
                blockStatus = false;
                $({numberValue1: 0}).animate({
                numberValue1: target_block1.text() }, {
                    duration: 3500, 
                    easing: "linear", 
                    step: function(val) {  
                        $(".pc-number1").html(Math.ceil(val));
                    } 
                });
                $({numberValue2: 0}).animate({
                numberValue2: target_block2.text()}, {
                    duration: 3500, 
                    easing: "linear", 
                    step: function(val) {  
                        $(".pc-number2").html(Math.ceil(val));
                    } 
                });
                $({numberValue3: 0}).animate({
                numberValue3: target_block3.text()}, {
                    duration: 3500, 
                    easing: "linear", 
                    step: function(val) {  
                        $(".pc-number3").html(Math.ceil(val));
                    } 
                });
                $({numberValue4: 0}).animate({
                numberValue4: target_block4.text()}, {
                    duration: 3500, 
                    easing: "linear", 
                    step: function(val) {  
                        $(".pc-number4").html(Math.ceil(val));
                    } 
                });
            }
        }); 
    });
    // Number Animate END

    // Mobile Drop Menu
    $('.mobile-dropmenu__button').on('click', function(e) {
        $(this).toggleClass('open');
        $('.mobile-dropmenu__box').toggleClass('open');
        // $('body').toggleClass('md-body');
        e.preventDefault();
    });
    // Mobile Drop Menu END

    // Select Menu
    $('.select-menu__wrap').hover(function() {
        $('.select-menu__current').next('.select-menu__box').stop().slideDown(300);
    }, function() {
        $('.select-menu__current').next('.select-menu__box').stop().slideUp(300);
    });

    $('.select-menu__box li').on('click', function() {
        var current = $(this).text();
        $('.select-menu__box li').removeClass('active');
        $(this).addClass('active').closest('.select-menu__wrap')
               .children('.select-menu__current').text(current);
    });
    // Select Menu END

    // Slider
    $('.live-drop__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 4,
        arrows: true,
        nextArrow: $('.btn-rouletter__slider')
        // slickPrev: '.btn.orange',
        // adaptiveHeight: true,
    });

    // Popup
    $(".fadeScreen, .popup-close").on('click', function() {
        $(".fadeScreen").fadeOut(300);
        $(".popup-box").removeClass('open').addClass('close').delay(500).fadeOut();
        // $(".popup-box").fadeOut(300);
        return false;
    });
    $(".popup-open").click(function() {
        $(".popup-box").removeClass('close');
        $('.popup-box.'+$(this).attr('data-open')).fadeIn().addClass('open');
        // $('.popup-box.'+$(this).attr('data-open')).fadeIn(200);
        $(".fadeScreen").fadeIn(300);
        return false;
    });
     
    // Tabs Menu
    $(".tabs-menu").hide();
    $(".tabs-menu:first").show();   
       $(".tabs-content li:first").addClass("active").show(); 
       $(".tabs-content li").click(function() {
            $(".tabs-content li").removeClass("active"); 
            $(this).addClass("active");
            $(".tabs-menu").hide(); 
            var activeTab = $(this).find("a").attr("href"); 
            $(activeTab).fadeIn(); 
       return false;
    });

    // Accordion
    $('.faq-box span.name').click(function() {
        var wrap = $('.faq-box li'),
            text = $('p.text'),
            textCurrent = $(this).closest(wrap).find(text),
            wrapCurrent = $(this).closest(wrap);
        // wrap.not(wrapCurrent).find(text).slideUp();
        $(this).toggleClass('active');
        textCurrent.slideToggle();
    });

});