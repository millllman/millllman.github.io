$(document).ready(function() {

    // Slider
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        asNavFor: '.slider-mini',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2
              }
            }
        ]
    });

    $('.slider-mini').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider',
        focusOnSelect: true
    });

    // Mobile Drop Menu
    $('.mobile-dropmenu__button').on('click', function(e) {
        $('body').toggleClass('body-fade');
        $(this).toggleClass('open');
        $('.mobile-dropmenu__box').toggleClass('open');
        $(".fadeScreenGlobal").fadeToggle(300);
        e.preventDefault();
    });
    $(".fadeScreenGlobal").on('click', function() {
        $('.mobile-dropmenu__button').removeClass('open');
        $('.mobile-dropmenu__box').removeClass('open');
        $('body').removeClass('body-fade');
        $(this).fadeOut(300);
        return false;
    });

    // Modals
    $(".fadeScreen, .popup-close").on('click', function() {
        $('body').removeClass('body-fade');
        $(".fadeScreen").fadeOut(300);
        $(".popup-wrap").fadeOut(500);
        $(".popup-box").removeClass('open').addClass('close').delay(500).fadeOut();
        return false;
    });
    $(".popup-open").click(function() {
        $(".popup-wrap").delay(300).show();
        $(".popup-box").removeClass('close');
        $('body').addClass('body-fade');
        $('.popup-box.'+$(this).attr('data-open')).delay(300).fadeIn(200).addClass('open');
        $(".fadeScreen").fadeIn(300);
        return false;
    });
     
    // Tabs Menu
    var tabsContent = ".tabs-content",
        tabsMenu    = $(".tabs-menu"),
        tabsBtn     = ".tabs-btn";
    $(tabsContent).hide();
    $(tabsContent + ":first").show();
    $(tabsBtn + ":first").addClass("active");
    $(tabsBtn).on('click', function(e) {
        var currentTab = $(this).attr("href"); 
        $(this).closest(tabsMenu).find( $(tabsBtn) ).removeClass("active");
        $(this).addClass("active");
        $(tabsContent + '.' + $(this).attr('data-tabs')).hide(); 
        $(currentTab).fadeIn(); 
        e.preventDefault();
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

    /****Animate On Scroll***/
    AOS.init({
      duration: 1200,
    })


    $('.has-dropdown').hover(
      function() {
        $(this).addClass('hovered');
      }, function() {
        $(this).removeClass('hovered');
      }
    );

    /**********Select********/
    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
    // /**********OWL********/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1.5
            }
        }
    });
    $('.captions').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true
    });
    $('.portfolio-slider').slick({
        dots: false,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        verticalSwiping: true,
        asNavFor: '.captions',
        responsive: [
            {
              breakpoint: 767,
              settings: {
                vertical: false,
                arrows:false,
                verticalSwiping: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 600,
              }
            }
        ]
    });


});