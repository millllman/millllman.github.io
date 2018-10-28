$(document).ready(function() {

    // Slider
    $('#slider-id__catalog').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        // adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('#slider-id__abroad').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        // adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });

    // $('.slider-mini').slick({
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     asNavFor: '.slider',
    //     focusOnSelect: true
    // });

    // Mobile Drop Menu
    $('.mobile-dropmenu__button').on('click', function(e) {
        $(this).toggleClass('open');
        $('.mobile-dropmenu__box').toggleClass('open');
        $('body').toggleClass('fade');
        $(".fadeScreenGlobal").toggleClass('with-dropmenu').fadeToggle(300);
        // $('body').toggleClass('md-body');
        e.preventDefault();
    });
    $(".fadeScreenGlobal").on('click', function() {
        $('.mobile-dropmenu__button').removeClass('open');
        $('.mobile-dropmenu__box').removeClass('open');
        $('body').removeClass('fade');
        $(this).fadeOut(300).removeClass('with-dropmenu');
        return false;
    });

    // Drop Down Elements
    var dropClasses = [
        ".dropdown-el__wrap",
        ".dropdown-el__button",
        ".dropdown-el__box"
    ];

    $(dropClasses[1]).on('click', function(e) {
        var dropWrap = $(dropClasses[0]),
            dropContent = $(dropClasses[2]),
            dropContentCurrent = $(this).closest(dropWrap).find(dropContent),
            dropWrapCurrent = $(this).closest(dropWrap);
        dropWrap.not(dropWrapCurrent).find(dropContent).slideUp(70);
        dropContentCurrent.slideToggle(70);
        $(dropClasses[1]).removeClass('db-active');
        $(this).toggleClass('db-active');
        e.preventDefault();
    });

    // Show More Boxes
    var showMoreClasses = [
        ".show-more__wrap",
        ".show-more__button",
        ".show-more__box"
    ];

    $('.show-more__wrap').each(function() {
        $(this).find('.show-more__box > .column:gt(3)').hide();
    });
    // $('.show-more__box > .column:gt(3)').hide();
    $(showMoreClasses[1]).on('click', function(e) {
        $(this).closest(showMoreClasses[0]).find(showMoreClasses[2]).children('.column').slideDown();
        e.preventDefault();
    });

    // $(dropClasses[1]).on('click', function(e) {
    //     $(dropClasses[2]).addClass('db-close');
    //     $(this).closest(dropClasses[0]).find(dropClasses[2]).removeClass('db-close');
    //     if ( $(dropClasses[2]).hasClass('db-close') ) {
    //         $(dropClasses[1]).removeClass('db-active');
    //         $(dropClasses[2]).removeClass('db-open');
    //     };
    //     $(this).toggleClass('db-active').closest(dropClasses[0]).find(dropClasses[2]).toggleClass('db-open');
    //     e.preventDefault();
    // });

    $(document).on('click', function(e) {
      if (!$(e.target).closest(dropClasses[0]).length) {
        $(dropClasses[1]).removeClass('db-active');
        $(dropClasses[2]).slideUp(70);
      }
      e.stopPropagation();
    });

    // Modals Start
    $(".fadeScreen, .popup-close").on('click', function() {
        $('body').removeClass('fade');
        $(".fadeScreen").fadeOut(300);
        $(".popup-wrap").fadeOut(500);
        $(".popup-box").removeClass('open').addClass('close').delay(500).fadeOut();
        return false;
    });
    $(".popup-open").click(function() {
        $(".popup-wrap").show();
        $(".popup-box").removeClass('close');
        // $('body').addClass('fade');
        $('.popup-box.'+$(this).attr('data-open')).fadeIn(200).addClass('open');
        $(".fadeScreen").fadeIn(300);
        return false;
    });

    // $(document).on('click', function(e) {
    //   if (!$(e.target).closest('.popup-box').length) {
    //     $('body').removeClass('fade');
    //     $(".fadeScreen").fadeOut(300);
    //     $(".popup-wrap").fadeOut(500);
    //     $(".popup-box").removeClass('open').addClass('close').delay(500).fadeOut();
    //   }
    //   e.stopPropagation();
    // });
    // Modals END
     
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
    $('.accordion-open').click(function() {
        var wrap = $('.accordion-wrap'),
            text = $('.accordion-text'),
            textCurrent = $(this).closest(wrap).find(text),
            wrapCurrent = $(this).closest(wrap);
        wrap.not(wrapCurrent).find(text).slideUp();
        textCurrent.slideToggle();
        wrap.not(wrapCurrent).find('.accordion-close').hide();
        wrapCurrent.find('.accordion-close').toggle();
    });
    $('.accordion-close').click(function() {
        $(this).prev('.accordion-text').slideUp();
        $(this).hide();
    });

});