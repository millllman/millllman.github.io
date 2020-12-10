jQuery(document).ready(function(){
   
    $(".FadeScreen").hide();
	$(".PriceYachtPopup").hide();
	$(".FadeScreen").click(function() {
		$(".FadeScreen").fadeOut(300);
		$(".PriceYachtPopup").fadeOut(300);
		return false;
	});
	$("#priceyacht-open").click(function() {
		$(".FadeScreen").fadeIn(300);
		$(".PriceYachtPopup").fadeIn(200);
		return false;
	});
	$("#priceyacht-close").click(function() {
		$(".FadeScreen").fadeOut(300);
		$(".PriceYachtPopup").fadeOut(300);
		return false;
	});	
	
	$(".FullFeature ul li:odd").addClass('two');
	$(".FeatureTable ul li:odd").addClass('two');
	$(".MainFeature ul li:odd").addClass('two');
	

	$(".LaunchedYacht li a span").hide();   
    $(".LaunchedYacht li a").hover(function() {		
		$(".LaunchedYacht li a span").slideDown(300);		
	});
	$(".LaunchedYacht li a").mouseleave(function() {		
		$(".LaunchedYacht li a span").slideUp(300);		
	});  
   
   $(".NewsBox").hide(); 
   $(".NewsMenu li:first").addClass("active").show(); 
   $(".NewsBox:first").show();
   $(".NewsMenu li").click(function() {
		$(".NewsMenu li").removeClass("active"); 
		$(this).addClass("active");
		$(".NewsBox").hide(); 
		var activeTab = $(this).find("a").attr("href"); 
		$(activeTab).show(); 
		return false;
	});
   
   $('#up').click(function() {
    $('body,html').animate({scrollTop:0},500);
    return false;
  });
   
});