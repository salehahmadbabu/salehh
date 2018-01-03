$(function(){
	$(".home-slider").owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 2000,
	});


	$(".review-list").owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 700
	});

	$('.portfolio-filter').isotope({
	  // options
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});
	
});
