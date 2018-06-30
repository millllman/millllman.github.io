$(document).ready(function() {

    // Mobile Drop Menu
    $('.mobile-dropmenu__button').on('click', function(e) {
        $('body').toggleClass('fade');
        $(this).toggleClass('open');
        $('.mobile-dropmenu__box').toggleClass('open');
        $(".fadeScreenGlobal").fadeToggle(300);
        e.preventDefault();
    });
    $(".fadeScreenGlobal").on('click', function() {
        $('.mobile-dropmenu__button').removeClass('open');
        $('.mobile-dropmenu__box').removeClass('open');
        $('body').removeClass('fade');
        $(this).fadeOut(300);
        return false;
    });

    $(".tel-mask").inputmask({"mask": "+7 (999) 999-99-99"});

    $(window).scroll(function() {
        $('.move1').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+370) {
            $(this).addClass('swing');
          } else { $(this).removeClass('swing'); }
        });
        $('.move2').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+370) {
            $(this).addClass('fadeInDown');
          } else { $(this).removeClass('fadeInDown'); }
        });
    });

    // Scroll Button
    $("a.btnScroll").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    //E-mail Ajax Send
    $("#form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "js/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $("#form").slideUp();
            $('#form-success__send').slideDown();
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    // Modals
    $(".fadeScreen, .popup-close").on('click', function() {
        $('body').removeClass('fade');
        $(".fadeScreen").fadeOut(300);
        $(".popup-wrap").fadeOut(500);
        $(".popup-box").removeClass('open').addClass('close').delay(500).fadeOut();
        return false;
    });
    $(".popup-open").click(function() {
        $(".popup-wrap").delay(300).show();
        $(".popup-box").removeClass('close');
        $('body').addClass('fade');
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

});