jQuery(document).ready(function(){   
    
	$(".NewsBox").hide();
   $(".NewsBox:first").show(); 
   $(".NewsTabs li:first").addClass("active").show(); 
   $(".NewsTabs li").click(function() {
		$(".NewsTabs li").removeClass("active"); 
		$(this).addClass("active");
		$(".NewsBox").hide(); 
		var activeTab = $(this).find("a").attr("href"); 
		$(activeTab).fadeIn(); 
		return false;
	});	
   
   $(".tt1-text").hide();
   $("#tour-2").show(); 
   $("#tt1 li:odd").addClass("active").show(); 
   $("#tt1 li").click(function() {
		$("#tt1 li").removeClass("active"); 
		$(this).addClass("active");
		$(".tt1-text").hide(); 
		var activeTab = $(this).find("a").attr("href"); 
		$(activeTab).fadeIn(); 
		return false;
	});

   $(".tt11-text").hide();
   $(".tt11-text:first").show(); 
   $("#tt2 li:first").addClass("active").show(); 
   $("#tt2 li").click(function() {
		$("#tt2 li").removeClass("active"); 
		$(this).addClass("active");
		$(".tt11-text").hide(); 
		var activeTab = $(this).find("a").attr("href"); 
		$(activeTab).fadeIn(); 
		return false;
	});
   
   
   
});