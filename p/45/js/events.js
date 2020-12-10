jQuery(document).ready(function(){
   
	$(window).load(function(){
      $(".MainMenu").sticky({ topSpacing: 0 });
    });


	var objects = document.getElementById('inobj');
	var parallax = new Parallax(objects);


   
	jQuery('.scroll-btn-m1').click(function() {
		jQuery.scrollTo('#scroll-m1', 1000);
	});	
	jQuery('.scroll-btn-m2').click(function() {
		jQuery.scrollTo('#scroll-m2', 1000);
	});	
	jQuery('.scroll-btn-m3').click(function() {
		jQuery.scrollTo('#scroll-m3', 1000);
	});	
	jQuery('.scroll-btn-m4').click(function() {
		jQuery.scrollTo('#scroll-m4', 1000);
	});	
	jQuery('.scroll-btn-m5').click(function() {
		jQuery.scrollTo('#scroll-m5', 1000);
	});	
	jQuery('.scroll-btn-m6').click(function() {
		jQuery.scrollTo('#scroll-m6', 1000);
	});	
  

   
   
});