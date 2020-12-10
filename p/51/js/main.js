$(document).ready(function() {


    // Header Fixed
    var topHeader = $('.top-header');
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 200 ) {
            topHeader.addClass('fixed');
        } else {
            topHeader.removeClass('fixed');
        }
    });

    // Scroll Button
    $("a.btnScroll").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });


    // Hire Send Popup
    var hirePopup = $('.hire-send__popup'),
        hireTarget = $('.hire-send__target'),
        hireOpen = $('.hire-send__open'),
        hireClose = $('.hire-send__close'),
        hireWrap = $('.hire-send__wrapper');
    hireOpen.on('click', function() {
        hirePopup.appendTo( $(this).closest(hireWrap).find(hireTarget) ).fadeIn(200);
        hirePopup.removeClass('junior senior');
        hirePopup.find(".form-data").show();
        hirePopup.find("p.successfully").hide();
        return false;
    });

    hireClose.on('click', function() {
        hirePopup.fadeOut(200);
    });

    $('.hire-send__junior').on('click', function() {
        hirePopup.addClass('junior').removeClass('senior');
    });

    $('.hire-send__senior').on('click', function() {
        hirePopup.addClass('senior').removeClass('junior');
    });


    //E-mail Ajax Send
    $("#form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "js/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            // alert("Thank you!");
            // $('.popup-sale__success').fadeIn().delay(1000).fadeOut();
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    // Form Bottom
    $("#form1").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "js/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            // alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


    // Form Validation
    $(".hire-send__popup button").click(function (){  
      var name = $("#send-name").val().trim(),
          mail = $("#send-mail").val().trim(),
          popup = $(".hire-send__popup"),
          validate = $('.hire-send__validate'),
          validateName = $('.hire-send__validate.v1'),
          validateMail = $('.hire-send__validate.v2');
      if (name.length == 0) {
        validateName.addClass('error');
      } else {
        validateName.removeClass('error');
      };
      if (mail.length == 0) {
        validateMail.addClass('error');
      } else {
        validateMail.removeClass('error');
      };      
      if (validate.hasClass('error')){      
        return false;
      } else {
        popup.find('.form-data').hide();
        popup.find('p.successfully').fadeIn();
        validate.removeClass('error');
        $(".hire-send__validate input[type=text]").val('');
        popup.delay(2000).fadeOut();
      };
    });

    // Form Message Validation
    $('.form-message__box button').click(function() {
        var name = $('#form-name').val().trim(),
            mail = $('#form-mail').val().trim(),
            message = $('#form-message').val().trim(),
            form = $('.form-message__box'),
            validate = $('.form-message__validate'),
            validateName = $('.form-message__validate.v1'),
            validateMail = $('.form-message__validate.v2'),
            validateMessage = $('.form-message__validate.v3');
        if (name.length == 0) validateName.addClass('error')
            else validateName.removeClass('error');
        if (mail.length == 0) validateMail.addClass('error')
            else validateMail.removeClass('error');
        if (message.length == 0) validateMessage.addClass('error')
        else validateMessage.removeClass('error');
            if (validate.hasClass('error')) return false
        else {
            $('#form1').slideUp();
            $('.success-message__box').slideDown();
        };

    });


    // E-mail validation
    $('.mail-validation').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $('.form-message__validate.v2').removeClass('error');
            } else {
                $('.form-message__validate.v2').addClass('error');
            }
        } else {
            $('.form-message__validate.v2').addClass('error');
        }
    });

    // Vimeo Pause
    var iframe = document.getElementById('video');
    var player = $f(iframe);
    // bind events
    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function() {
      player.api("pause");
    });
    var pauseButton = document.getElementById("pause-area");
    pauseButton.addEventListener("click", function() {
      player.api("pause");
    });

    // Mobile Drop Menu
    $('.main-menu__mobile a').on('click', function(e) {
        $('.main-menu').slideToggle(300);
        $(this).toggleClass('open');
        e.preventDefault();
    });


    // Popup
    $(".fadeScreen").click(function() {
        $(".fadeScreen").fadeOut(300);
        $(".popup-box").fadeOut(300);       
        return false;
    });
    $(".popup-open").click(function() {
        $(".fadeScreen").fadeIn(300);
        $(".popup-box").fadeIn(200);
        return false;
    });
    $(".popup-close").click(function() {
        $(".fadeScreen").fadeOut(300);
        $(".popup-box").fadeOut(300);       
        return false;
    });


});