(function ($) {
	"use strict";

// data - background
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

$("[data-bg-color]").each(function () {
	$(this).css("background", $(this).attr("data-bg-color"))
})


// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991",
	meanExpand: ['<i class="fal fa-plus"></i>'],
});

////////////////////////////////////////////////////
// Sticky Header Js
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

////////////////////////////////////////////////////
//  Sidebar Js
$(".sidebar-toggle-btn").on("click", function () {
	$(".sidebar__area").addClass("sidebar-opened");
	$(".body-overlay").addClass("opened");
});
$(".sidebar__close-btn").on("click", function () {
	$(".sidebar__area").removeClass("sidebar-opened");
	$(".body-overlay").removeClass("opened");
});

$(".body-overlay").on("click", function () {
	$(".sidebar__area").removeClass("sidebar-opened");
	$(".body-overlay").removeClass("opened");
});

// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

// testimonial
$('.testimonial-active').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.test-thumb'
});

  $('.test-thumb').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial-active',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0',
});


// calender slider
$('.calendar-slider').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})

// sm testimonial
$('.sm_testimonial-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:false,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})

// causes slider
$('.causes-slider').owlCarousel({
    loop:true,
    margin:30,
	items:1,
	navText:['<i class="fal fa-long-arrow-left"></i>','<i class="fal fa-long-arrow-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:2
        },
		1200:{
            items:2
        },
		1400:{
            items:3
        }
    }
})

/* magnificPopup img view */
$('.image-popups').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

////////////////////////////////////////////////////
//  Counter Js
$('.counter').counterUp({
	delay: 10,
	time: 1000
});

// PreLoader Js
$(window).on('load', function(event) {
	$('#preloader').delay(500).fadeOut(500);
});

// WOW active
new WOW().init();


// Jquery Appear raidal
if (typeof ($.fn.knob) != 'undefined') {
	$('.knob').each(function () {
	var $this = $(this),
	knobVal = $this.attr('data-rel');

	$this.knob({
	'draw': function () {
		$(this.i).val(this.cv + '%')
	}
	});

	$this.appear(function () {
	$({
		value: 0
	}).animate({
		value: knobVal
	}, {
		duration: 2000,
		easing: 'swing',
		step: function () {
		$this.val(Math.ceil(this.value)).trigger('change');
		}
	});
	}, {
	accX: 0,
	accY: -150
	});
});
}

// Jquery Appear
//----------------------------------------------------------------------------------------
// if ($('.progress-bar').length) {
// 	$('.progress-bar').appear(function () {
// 		var el = $(this);
// 		var percent = el.data('width');
// 		$(el).css('width', percent + '%');
// 	}, {
// 		accY: 0
// 	});
// }

    ///===== Progress Bar

    if ($('.progress_line').length) {
        $('.progress_line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }

	// Search Js
	//----------------------------------------------------------------------------------------
	var $searchWrap = $('.search-wrap');
	var $navSearch = $('.search-btn');
	var $searchClose = $('#search-close');

	$('.search-btn').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on('click', function (e) {
		closeSearch();
	});

	$(".search-btn, .main-search-input").on('click', function (e) {
		e.stopPropagation();
	});




})(jQuery);