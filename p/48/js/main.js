$(document).ready(function() {

	$('.btn-menu-open').click(function(){
		$('#tabs-content1').slideDown();
		$('.menu-mobile__caption').show();
		$('.menu-mobile__top').hide();
		$('.btn-menu-close').show();
	});

	$('.btn-menu-close').click(function(){
		$('.menu-mobile__dropdown').slideUp();
		$('.menu-mobile__caption').hide();
		$('.menu-mobile__top').show();
		$('.btn-menu-close').hide();
	});

   // Tabs Menu
   $(".tabs-menu li:first").addClass("active"); 
   $(".tabs-menu li").click(function() {
        $(".tabs-menu li").removeClass("active"); 
        $(this).addClass("active");
        $(".menu-mobile__dropdown").hide(); 
        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).slideDown(); 
   return false;
    });

   // Filter
   $('.category-product__filter > li > a:not([data-open])').click(function() {
   		$('.category-filter__dropdown').fadeOut();
   		$(this).next('.category-filter__dropdown, .brands-filter__dropdown').fadeToggle();
   		return false;
   });

   $('.category-filter__dropdown, .brands-filter__dropdown').mouseleave(function() {
   		$(this).fadeOut();
   });

   $('.category-product__item .cpi-open').click(function() {
      $('.category-product__item').removeClass('active');
      $(this).closest('.category-product__item').addClass('active');
      return false;
   });

   $('.btn-filter-open').click(function() {
      $('.category-product__filter').slideToggle();
      return false;
   });

   $('.slider-product').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-product-mini',
   });
   $('.slider-product-mini').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.slider-product',
      focusOnSelect: true
   });


});