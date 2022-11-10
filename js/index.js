const swiper = new Swiper('.swiper', {
	spaceBetween: 30,
      effect: "fade",
      lazyloading: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});
$(document).ready(function() {
	$("#chocolate_flavour_button").click(function() {
		$("#some_flavours_items_image_1").attr("src", "some_flavours_items/chocolate/1.jpg");
		$("#some_flavours_items_image_2").attr("src", "some_flavours_items/chocolate/2.jpg");
		$("#some_flavours_items_image_3").attr("src", "some_flavours_items/chocolate/3.jpg");
		$("#some_flavours_items_image_4").attr("src", "some_flavours_items/chocolate/4.jpg");
		$("#some_flavours_items_image_5").attr("src", "some_flavours_items/chocolate/5.jpg");
		$("#some_flavours_items_image_6").attr("src", "some_flavours_items/chocolate/6.jpg");
		$("#some_flavours_items_title_1").text('Double Chocolate');
		$("#some_flavours_items_title_2").text('Death By Chocolate');
		$("#some_flavours_items_title_3").text('Chocolate Gateau Ice Cream');
		$("#some_flavours_items_title_4").text('Magnum Chocolate Truffle');
		$("#some_flavours_items_title_5").text('Belgium Chocolate');
		$("#some_flavours_items_title_6").text('Chocolate Semi Freddo');
		$('.wsk-cp-product').css('background-color', 
			'#F4A460');
		$('.wsk-cp-product').css('color', 
			'#8B4513');
	});
	$("#strawberry_flavour_button").click(function() {
		$("#some_flavours_items_image_1").attr("src", "some_flavours_items/strawberry/1.jpg");
		$("#some_flavours_items_image_2").attr("src", "some_flavours_items/strawberry/2.jpg");
		$("#some_flavours_items_image_3").attr("src", "some_flavours_items/strawberry/3.jpg");
		$("#some_flavours_items_image_4").attr("src", "some_flavours_items/strawberry/4.jpg");
		$("#some_flavours_items_image_5").attr("src", "some_flavours_items/strawberry/5.jpg");
		$("#some_flavours_items_image_6").attr("src", "some_flavours_items/strawberry/6.jpg");
		$("#some_flavours_items_title_1").text('Strawberry Arctic Roll');
		$("#some_flavours_items_title_2").text('Pink Dame blanche');
		$("#some_flavours_items_title_3").text('Parfait');
		$("#some_flavours_items_title_4").text('Strawberry Poire belle Hélène');
		$("#some_flavours_items_title_5").text('Cream Bombe glacée');
		$("#some_flavours_items_title_6").text('Berry Tin roof pie');
		$('.wsk-cp-product').css('background-color', 
			'#FF69B4');
		$('.wsk-cp-product').css('color', 
			'#FFC0CB');
	});
	$("#vanilla_flavour_button").click(function() {
		$("#some_flavours_items_image_1").attr("src", "some_flavours_items/vanilla/1.jpg");
		$("#some_flavours_items_image_2").attr("src", "some_flavours_items/vanilla/2.jpeg");
		$("#some_flavours_items_image_3").attr("src", "some_flavours_items/vanilla/3.jpg");
		$("#some_flavours_items_image_4").attr("src", "some_flavours_items/vanilla/4.jpg");
		$("#some_flavours_items_image_5").attr("src", "some_flavours_items/vanilla/5.jpg");
		$("#some_flavours_items_image_6").attr("src", "some_flavours_items/vanilla/6.jpg");
		$("#some_flavours_items_title_1").text('Mocha Mud Pie');
		$("#some_flavours_items_title_2").text('Caramel Creme');
		$("#some_flavours_items_title_3").text('Vanilla Berry');
		$("#some_flavours_items_title_4").text('Vanilla Flitz');
		$("#some_flavours_items_title_5").text('Vanilla Fudge Swirl');
		$("#some_flavours_items_title_6").text('Rum Raisin');
		$('.wsk-cp-product').css('background-color', 
			'#cd853f');
		$('.wsk-cp-product').css('color', 
			'#FFFDD0');
	});
	$("#coffee_flavour_button").click(function() {
		$("#some_flavours_items_image_1").attr("src", "some_flavours_items/coffee/1.jpg");
		$("#some_flavours_items_image_2").attr("src", "some_flavours_items/coffee/2.jpg");
		$("#some_flavours_items_image_3").attr("src", "some_flavours_items/coffee/3.jpg");
		$("#some_flavours_items_image_4").attr("src", "some_flavours_items/coffee/4.jpg");
		$("#some_flavours_items_image_5").attr("src", "some_flavours_items/coffee/5.jpg");
		$("#some_flavours_items_image_6").attr("src", "some_flavours_items/coffee/6.jpg");
		$("#some_flavours_items_title_1").text('Coffee n Cookies');
		$("#some_flavours_items_title_2").text('Coffee Cone');
		$("#some_flavours_items_title_3").text('Coffee Chips');
		$("#some_flavours_items_title_4").text('Coffee and Creme');
		$("#some_flavours_items_title_5").text('Coffee Dough');
		$("#some_flavours_items_title_6").text('Cocoa Cobbler');
		$('.wsk-cp-product').css('background-color', 
			'#8B4513');
		$('.wsk-cp-product').css('color', 
			'#FFFDD0');
	});
});
// function isElementInViewport(elem) {
// 	var $elem = $(elem);

// 	// Get the scroll position of the page.
// 	var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
// 	var viewportTop = $(scrollElem).scrollTop();
// 	var viewportBottom = viewportTop + $(window).height();

// 	// Get the position of the element on the page.
// 	var elemTop = Math.round( $elem.offset().top );
// 	var elemBottom = elemTop + $elem.height();

// 	return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
// }
// function checkAnimation() {
//     var $elem = $('#video-section-left');
//     if (isElementInViewport($elem)) {
//     	alert($elem);
//         // Start the animation
//         $elem.addClass('appearLeftAnimation');
//     } else {
//         $elem.removeClass('appearLeftAnimation');
//     }
// }
// $(window).scroll(function(){
//     checkAnimation();
// });
var instance = $(".hs__wrapper");
$.each( instance, function(key, value) {
    
  var arrows = $(instance[key]).find(".arrow"),
      prevArrow = arrows.filter('.arrow-prev'),
      nextArrow = arrows.filter('.arrow-next'),
      box = $(instance[key]).find(".hs"), 
      x = 0,
      mx = 0,
      maxScrollWidth = box[0].scrollWidth - (box[0].clientWidth / 2) - (box.width() / 2);

  $(arrows).on('click', function() {
      
    if ($(this).hasClass("arrow-next")) {
      x = ((box.width() / 2)) + box.scrollLeft() - 10;
      box.animate({
        scrollLeft: x,
      })
    } else {
      x = ((box.width() / 2)) - box.scrollLeft() -10;
      box.animate({
        scrollLeft: -x,
      })
    }
      
  });
    
  $(box).on({
    mousemove: function(e) {
      var mx2 = e.pageX - this.offsetLeft;
      if(mx) this.scrollLeft = this.sx + mx - mx2;
    },
    mousedown: function(e) {
      this.sx = this.scrollLeft;
      mx = e.pageX - this.offsetLeft;
    },
    scroll: function() {
      toggleArrows();
    }
  });

  $(document).on("mouseup", function(){
    mx = 0;
  });
  
  function toggleArrows() {
    if(box.scrollLeft() > maxScrollWidth - 10) {
        // disable next button when right end has reached 
        nextArrow.addClass('disabled');
      } else if(box.scrollLeft() < 10) {
        // disable prev button when left end has reached 
        prevArrow.addClass('disabled')
      } else{
        // both are enabled
        nextArrow.removeClass('disabled');
        prevArrow.removeClass('disabled');
      }
  }
});

const inViewport = (entries, observer) => {
	entries.forEach(entry => {
	entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
	});
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
	Obs.observe(EL, obsOptions);
});