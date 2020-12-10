// Can also be used with $(document).ready()


$(document).ready(function(){


    // $(".fancybox").fancybox({
    //     padding : 0,
    //     helpers: {
    //         overlay: {
    //             locked: false
    //         }
    //     }
    // });

    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');
    overlay.hide();
    open_modal.click( function(event){
        event.preventDefault();
        var div = $(this).attr('data-modal');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });
    close.click( function(){
        modal
            .animate({opacity: 0.5, top: '30%'}, 300, function(){
                $('.order-popup').removeClass('popup-active');
                // $(this).css('display', 'block');
                overlay.fadeOut(400);
                $(this).animate({
                    opacity: 1,
                    top: '50%'
                });
            }
        );
    });
    //dynamic content
    $('.open_modal').click(function(e){
        e.preventDefault();
        var h1 = $(this).data('h1');
        var h2 = $(this).data('h2');
        var h3 = $(this).data('h3');
        var btn = $(this).data('btn');
        var dop = $(this).data('dop');
        $('.modal_div').find('p.ttl').html('Оставить заявку');
        $('.modal_div').find('p.change').html('и наш консультант свяжется с Вами');
        $('.modal_div').find('#dop').val(dop);
        $('.modal_div').find('h1').html(h1);
        $('.modal_div').find('.hidden_title').val(h2);
        $('.modal_div').find('.hidden_title').val(h3);
        $('.modal_div').find('p.change').html(h2);
        $('.modal_div').find('button').text(btn);
        $('.modal_div').fadeIn();
    });
    //fixed menu & anchor
    $('.nav__menu a, a.arr-down').on('click', function(e){
        e.preventDefault();
        showSection($(this).attr('href'), true);
    });
    // showSection(window.location.hash, false);
});
$(window).scroll(function(){
    checkSection();
});
function showSection(section, isAnimate){
    var
        direction = section.replace(/#/, ''),
        reqSection = $('.section').filter('[data-section="' + direction + '"]');
    reqSectionPos = reqSection.offset().top - 98;

    if(isAnimate){
        $('body, html').animate({scrollTop: reqSectionPos}, 500);
    }else{
        $('body, html').scrollTop(reqSectionPos);
    }
}
function checkSection(){
    $('.section').each(function(){
        var
            $this = $(this),
            topEdge = $this.offset().top - 99,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
        if($(window).scrollTop() > $('body').offset().top ){
            $('nav.nav').addClass('fix');
        } else{
            $('nav.nav').removeClass('fix');
        }
        if(topEdge < wScroll && bottomEdge > wScroll){
            var
                currentId = $this.data('section'),
                reqLink = $('.nav__menu a').filter('[href="#' + currentId + '"]');


            reqLink.closest('.nav__menu li').addClass('active')
                .siblings().removeClass('active');

            window.location.hash = currentId;
        }
    });
}
function checkform(form, goal_id) {
    var errors = "";
    $(form).find('input.req').each(function(){
        var val = $(this).val();
        if (val == "" || val == " " || val == "  "){
            errors = errors + "Пожалуйста, введите Ваше имя и телефон!";
            $(this).val('');
            $(this).addClass('error-input animated shake');
        }
    });
    if (errors != "") {
        return false;
    } else {
        $.post('./submit.php', $(form).serialize(), function (data) {
            if (data == "1") {
                $(form).find(".success").fadeIn(300).delay(1000).fadeOut(500);
                $(form).find('input.req').each(function() {
                    $(this).val('');
                });
                setTimeout(function(){
                    $('.modal_div') .animate({opacity: 0, top: '45%'}, 200).css('display', 'none');
                    $('#overlay').css('display', 'none').fadeOut(400);
                }, 3000);
            } else {

            }
        });
        return false;
    }
}

