$(document).ready(function() {
	"use strict";

	//Header MENU
	$('.navbar .dropdown').hover(function() {
		$(this).addClass('extra-nav-class').find('.dropdown-menu').first().stop(true, true).delay(50).slideDown();
	}, function() {
		var na = $(this)
		na.find('.dropdown-menu').first().stop(true, true).delay(100).slideUp('fast', function() {
			na.removeClass('extra-nav-class')
		})
	});

	// Responsive MENU
	$("#nav").tinyNav({
		active: 'selected',
		header: 'MENU',
		label: ''
	});

	//Scrolling Effect
	$(window).scroll(function() {
		if ($(document).scrollTop() == 0) {
			$('.legalmenu').removeClass('tiny');
		} else {
			$('.legalmenu').addClass('tiny');
		}

		if ($(this).scrollTop() > 600) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}

	});

	$('.textItem').quovolver();


	// E-mail Ajax Send

	$(".callback").on('submit',function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".done").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".done").removeClass("visible");
			}, 3000);
		});
		return false;
	});



	$("#back-top").hide();

	$('#back-top a').on('click', function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});


	$('input, textarea').placeholder();

	$('.animated').appear();
	$(document.body).on('appear', '.fade', function() {
		$(this).each(function() {
			$(this).addClass('anim-fade')
		});
	});
	$(document.body).on('appear', '.slidea', function() {
		$(this).each(function() {
			$(this).addClass('anim-slide')
		});
	});
	$(document.body).on('appear', '.hatch', function() {
		$(this).each(function() {
			$(this).addClass('anim-hatch')
		});
	});
	$(document.body).on('appear', '.entrance', function() {
		$(this).each(function() {
			$(this).addClass('anim-entrance')
		});
	});
	$(document.body).on('appear', '.fadeInUpNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInUp')
		});
	});
	$(document.body).on('appear', '.fadeInDownNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInDown')
		});
	});
	$(document.body).on('appear', '.fadeInLeftNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInLeft')
		});
	});
	$(document.body).on('appear', '.fadeInRightNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInRight')
		});
	});
	$(document.body).on('appear', '.fadeInUpBigNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInUpBig')
		});
	});
	$(document.body).on('appear', '.fadeInDownBigNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInDownBig')
		});
	});
	$(document.body).on('appear', '.fadeInLeftBigNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInLeftBig')
		});
	});
	$(document.body).on('appear', '.fadeInRightBigNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInRightBig')
		});
	});
	$(document.body).on('appear', '.fadeInNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeIn')
		});
	});
	$(document.body).on('appear', '.flashNow', function() {
		$(this).each(function() {
			$(this).addClass('flash')
		});
	});
	$(document.body).on('appear', '.shakeNow', function() {
		$(this).each(function() {
			$(this).addClass('shake')
		});
	});
	$(document.body).on('appear', '.bounceNow', function() {
		$(this).each(function() {
			$(this).addClass('bounce')
		});
	});
	$(document.body).on('appear', '.tadaNow', function() {
		$(this).each(function() {
			$(this).addClass('tada')
		});
	});
	$(document.body).on('appear', '.swingNow', function() {
		$(this).each(function() {
			$(this).addClass('swing')
		});
	});


	//CALL TESTIMONIAL ROTATOR
	$('#cbp-qtrotator').cbpQTRotator();

	//CALL PRETTY PHOTO
	$("a[data-gal^='prettyPhoto']").prettyPhoto({social_tools:'', animation_speed: 'normal' , theme: 'dark_rounded'});


	//MASONRY
	var $container = $('#content');
	$container.imagesLoaded( function(){
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
	});
	$('#filter a').on('click', function (event) {
		$('a.selected').removeClass('selected');
		var $this = $(this);
		$this.addClass('selected');
		var selector = $this.attr('data-filter');
		$container.isotope({
			filter: selector
		});
		return false;
	});

	//ROLL ON HOVER
	$(".roll").css("opacity","0");
	$(".roll").hover(function () {
			$(this).stop().animate({
				opacity: .8
			}, "slow");
		},
		function () {
			$(this).stop().animate({
				opacity: 0
			}, "slow");
		});



	//	Accordion 1

	//Add Inactive Class To All Accordion Headers
	$('.accordion-header').toggleClass('inactive-header');
	//Set The Accordion Content Width
	var contentwidth = $('.accordion-header').width();
	$('.accordion-content').css({'width' : contentwidth });
	//Open The First Accordion Section When Page Loads
	$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	$('.accordion-content').first().slideDown().toggleClass('open-content');
	// The Accordion Effect
	$('.accordion-header').on('click', function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});


	//	Accordion 2

	var clickElem = $('#accordion div h4');
	clickElem.on('click', function(){
		var $this = $(this),
			parentCheck = $this.parent('div');
		if( !parentCheck.hasClass('active')) {
			var accordItems = $('#accordion div');
			accordItems.removeClass('active');
			parentCheck.addClass('active');
		}
	});

	//	Tabs1&2

		$('#horizontalTab').easyResponsiveTabs({
			type: 'default', //Types: default, vertical, accordion
			width: 'auto', //auto or any width like 600px
			fit: true   // 100% fit in a container
		});
		$('#verticalTab').easyResponsiveTabs({
			type: 'vertical',
			width: 'auto',
			fit: true
		});

	//	Tabs3

	$('#myTab a').on('click', function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	//	Toggles

	$('.faqs dd').hide(); // Hide all DDs inside .faqs
	$('.faqs dt').hover(function(){$(this).addClass('hover')},function(){$(this).removeClass('hover')}).on('click', function(){ // Add class "hover" on dt when hover
		$(this).next().slideToggle('normal'); // Toggle dd when the respective dt is clicked
	});

	var $body = $('body');
	$(window).load(function(){
		$body.toggleClass('on off');
		$('#trigger').on('click',function() {
			$body.toggleClass('on off');
			setTimeout(function() {
				$body.toggleClass('on off');
			}, 2000)
		});

		//Grid 2 column
		var $container = $('#content2');
		// initialize Isotope
		$container.isotope({
			// options...
			resizable: false, // disable normal resizing
			// set columnWidth to a percentage of container width
			masonry: { columnWidth: $container.width() / 2 }
		});
		// update columnWidth on window resize
		$(window).smartresize(function(){
			$container.isotope({
				// update columnWidth to a percentage of container width
				masonry: { columnWidth: $container.width() / 2 }
			});
		});

		//Grid 3 column
		var $container = $('#content3');
		// initialize Isotope
		$container.isotope({
			// options...
			resizable: false, // disable normal resizing
			// set columnWidth to a percentage of container width
			masonry: { columnWidth: $container.width() / 3 }
		});
		// update columnWidth on window resize
		$(window).smartresize(function(){
			$container.isotope({
				// update columnWidth to a percentage of container width
				masonry: { columnWidth: $container.width() / 3 }
			});
		});

		//Grid 4 column
		var $container = $('#content4');
		// initialize Isotope
		$container.isotope({
			// options...
			resizable: false, // disable normal resizing
			// set columnWidth to a percentage of container width
			masonry: { columnWidth: $container.width() / 4 }
		});
		// update columnWidth on window resize
		$(window).smartresize(function(){
			$container.isotope({
				// update columnWidth to a percentage of container width
				masonry: { columnWidth: $container.width() / 4 }
			});
		});
	});

});