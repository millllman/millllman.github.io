jQuery(document).ready(function(){
   
	
    $(".DeliveryBox li").click(function() {
		// $(".DeliveryBox li").removeClass("open");			
		// $(".DeliveryBox li a.name").removeClass("active");
		$(this).toggleClass("open");
		$(this).find("a.name").toggleClass("active");
		// $(this).find("a.name").addClass("active");
		return false;
	});



    $(".product-tabs").hide();
    $(".product-tabs:first").show(); 
    $(".ProductMenu li:first").addClass("active").show(); 
    $(".ProductMenu li").click(function() {
		$(".ProductMenu li").removeClass("active"); 
		$(this).addClass("active");
		$(".product-tabs").hide(); 
		var activeTab = $(this).find("a").attr("href"); 
		$(activeTab).fadeIn(); 
		return false;
	});	

	$(".DataTable li:even").addClass("two");

	$(".HelpBox").hide();
	$("#help-button").click(function() {
		$(".HelpBox").slideToggle();
		$("#help-button").toggleClass("help-button-open");					
		return false;
	});   
   
});