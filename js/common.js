$(document).ready(function() {
	"use strict";

	// Responsive MENU
	var tinyNav = $("#nav");
	tinyNav.tinyNav({
		active: 'selected',
		header: 'MENU',
		label: ''
	});

	//Scrolling Effect
	$(window).scroll(function() {
		var legalmenu = $(".legalmenu");
		var tiny = 'tiny';
		var backtop = $('#back-top');
		if ($(document).scrollTop() == 0) {
			legalmenu.removeClass(tiny);
		} else {
			legalmenu.addClass(tiny);
		}

		if ($(this).scrollTop() > 600) {
			backtop.fadeIn();
		} else {
			backtop.fadeOut();
		}

	});

	var textItem = $('.textItem');
	textItem.quovolver();


	// E-mail Ajax Send

	var callback = $(".callback");
	callback.on('submit',function() { //Change
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


	var backtop = $("#back-top");
	backtop.hide();

	$('#back-top a').on('click', function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});


	var inputarea = $('input, textarea');
	var animated = $('.animated');
	inputarea.placeholder();
	animated.appear();

	var docBody = $(document.body);
	var appear = 'appear';
	docBody.on(appear, '.fade', function() {
		$(this).each(function() {
			$(this).addClass('anim-fade')
		});
	});
	docBody.on(appear, '.slidea', function() {
		$(this).each(function() {
			$(this).addClass('anim-slide')
		});
	});
	docBody.on(appear, '.hatch', function() {
		$(this).each(function() {
			$(this).addClass('anim-hatch')
		});
	});
	docBody.on(appear, '.entrance', function() {
		$(this).each(function() {
			$(this).addClass('anim-entrance')
		});
	});
	docBody.on(appear, '.fadeInUpNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInUp')
		});
	});
	docBody.on(appear, '.fadeInDownNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInDown')
		});
	});
	docBody.on(appear, '.fadeInLeftNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInLeft')
		});
	});
	docBody.on(appear, '.fadeInRightNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInRight')
		});
	});
	docBody.on(appear, '.fadeInUpBigNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInUpBig')
		});
	});
	docBody.on(appear, '.fadeInDownBigNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInDownBig')
		});
	});
	docBody.on(appear, '.fadeInLeftBigNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInLeftBig')
		});
	});
	docBody.on(appear, '.fadeInRightBigNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeInRightBig')
		});
	});
	docBody.on(appear, '.fadeInNow', function() {
		$(this).each(function() {
			$(this).addClass('fadeIn')
		});
	});
	docBody.on(appear, '.flashNow', function() {
		$(this).each(function() {
			$(this).addClass('flash')
		});
	});
	docBody.on(appear, '.shakeNow', function() {
		$(this).each(function() {
			$(this).addClass('shake')
		});
	});
	docBody.on(appear, '.bounceNow', function() {
		$(this).each(function() {
			$(this).addClass('bounce')
		});
	});
	docBody.on(appear, '.tadaNow', function() {
		$(this).each(function() {
			$(this).addClass('tada')
		});
	});
	docBody.on(appear, '.swingNow', function() {
		$(this).each(function() {
			$(this).addClass('swing')
		});
	});


	//CALL TESTIMONIAL ROTATOR
	var cbpqt = $('#cbp-qtrotator');
	cbpqt.cbpQTRotator();

	//CALL PRETTY PHOTO
	var prettyPhoto = $("a[data-gal^='prettyPhoto']");
	prettyPhoto.prettyPhoto({social_tools:'', animation_speed: 'normal' , theme: 'dark_rounded'});


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

	var selected = 'selected';
	$('#filter a').on('click', function (event) {
		$('a.selected').removeClass(selected);
		var $this = $(this);
		$this.addClass(selected);
		var selector = $this.attr('data-filter');
		$container.isotope({
			filter: selector
		});
		return false;
	});

	//ROLL ON HOVER
	var roll = $(".roll");
	roll.css("opacity","0");
	roll.hover(function () {
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

	var accordionHeader = $('.accordion-header');
	var accordionContent = $('.accordion-content');
	var inactiveHead = 'inactive-header';
	var activeHead = 'active-header';
	var openContent = 'open-content';
	var contentwidth = accordionHeader.width();
	//Add Inactive Class To All Accordion Headers
	accordionHeader.toggleClass(inactiveHead);
	//Set The Accordion Content Width
	accordionHeader.css({'width' : contentwidth });
	//Open The First Accordion Section When Page Loads
	accordionHeader.first().toggleClass(activeHead).toggleClass(inactiveHead);
	accordionContent.first().slideDown().toggleClass(openContent);
	// The Accordion Effect
	accordionHeader.on('click', function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass(activeHead).toggleClass(inactiveHead).next().slideToggle().toggleClass(openContent);
			$(this).toggleClass(activeHead).toggleClass(inactiveHead);
			$(this).next().slideToggle().toggleClass(openContent);
		}
		else {
			$(this).toggleClass(activeHead).toggleClass(inactiveHead);
			$(this).next().slideToggle().toggleClass(openContent);
		}
	});


	//	Accordion 2

	var clickElem = $('#accordion div h4');
	var active = 'active';
	clickElem.on('click', function(){
		var $this = $(this),
			parentCheck = $this.parent('div');
		if( !parentCheck.hasClass(active)) {
			var accordItems = $('#accordion div');
			accordItems.removeClass(active);
			parentCheck.addClass(active);
		}
	});

	//	Tabs1&2

	var horTab = $('#horizontalTab');
	var verTab = $('#verticalTab');
	horTab.easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true   // 100% fit in a container
	});
	verTab.easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true
	});

	//	Tabs3
	var myTab = $('#myTab a');
	myTab.on('click', function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

	//	Toggles

	var dd = $('.faqs dd');
	var dt = $('.faqs dt');
	var hove = 'hover';
	dd.hide(); // Hide all DDs inside .faqs
	dt.hover(function(){$(this).addClass(hove)},function(){$(this).removeClass(hove)}).on('click', function(){ // Add class "hover" on dt when hover
		$(this).next().slideToggle('normal'); // Toggle dd when the respective dt is clicked
	});

	var $body = $('body');
	var onOff = 'on off';
	$(window).load(function(){
		$body.toggleClass(onOff);
		var trigger = $('#trigger');
		trigger.on('click',function() {
			$body.toggleClass(onOff);
			setTimeout(function() {
				$body.toggleClass(onOff);
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


	//	Carousel
	$(window).load(function(){
		var carouselProject = $('#carousel-projects');
		carouselProject.carouFredSel({
			responsive: true,
			items       : {
				width       : 200,
				height      : 295,
				visible     : {
					min         : 1,
					max         : 4
				}
			},
			width: '200px',
			height: '295px',
			auto: true,
			circular	: true,
			infinite	: false,
			prev : {
				button		: "#car_prev",
				key			: "left",
			},
			next : {
				button		: "#car_next",
				key			: "right",
			},
			swipe: {

				onMouse: true,
				onTouch: true
			},
			scroll: {
				easing: "",
				duration: 1200
			}
		});
	});


});