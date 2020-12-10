$(document).ready(function(){
	$(".BasketPopup").hide();
	$("#basket-open").hover(function() {
		$(".BasketPopup").fadeIn();
	});
	$(".BasketPopup").mouseleave(function() {
		$(".BasketPopup").fadeOut();
	});

	$(document).ready(function() {
        $('.amount-down').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.amount-up').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });

    $(".SimilarProduct").hide();
    $(".SimilarProduct:first").show();   
   $("#similar-product li:first").addClass("active").show(); 
   $("#similar-product li").click(function() {
        $("#similar-product li").removeClass("active"); 
        $(this).addClass("active");
        $(".SimilarProduct").hide(); 
        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).fadeIn(); 
        return false;
    });

   $(".ProductText .text").hide();
    $(".ProductText .text:first").show();   
   $("#product-descr li:first").addClass("active").show(); 
   $("#product-descr li").click(function() {
        $("#product-descr li").removeClass("active"); 
        $(this).addClass("active");
        $(".ProductText .text").hide(); 
        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).fadeIn(); 
        return false;
    });
			

});