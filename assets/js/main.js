$(document).ready(function () {
  // Counter up
  $("#counter-up").countMe(40, 2);

  // Logo carousel
  $(".logo_carousel").owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    slideSpeed: 300,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      600: {
        items: 3,
        loop: true,
      },
      1000: {
        items: 5,
        loop: true,
      },
    },
  });

  // Gallery carousel
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    slideSpeed: 300,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      600: {
        items: 2,
        loop: true,
      },
      1000: {
        items: 3,
        loop: true,
      },
    },
  })

  // Gallery carousel
  $(".home2-testimonial-quote-wrapper").owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    slideSpeed: 300,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      600: {
        items: 1,
        loop: true,
      },
      1000: {
        items: 1,
        loop: true,
      },
    },
  })


  // Customer feedback carousel
  const owl = $(".customers-feedback-carousel");
  owl.owlCarousel({
    autoPlay: true,
    loop: true,
    items: 2,
    dots: false,
    slideSpeed: 300,
    margin: 20,
    responsive: {
      0: {
        loop: true,
        items: 1,
      },
      600: {
        loop: true,
        items: 1,
      },
      1000: {
        items: 2,
        loop: true,
      },
    },
  });

  //   Owl prev slider
  $(".prev-customer-feedback").click(function () {
    owl.trigger("prev.owl.carousel");
    $(".home2-testimonial-quote-wrapper").trigger('prev.owl.carousel');
  });

  //   Owl next slider
  $(".next-customer-feedback").click(function () {
    owl.trigger("next.owl.carousel");
    $(".home2-testimonial-quote-wrapper").trigger("next.owl.carousel");
  });

  // Init AOS
  AOS.init();

  // More & less
	$(".more-less").click(function () {
		$(this).toggleClass("active");
		if ($(this).hasClass("active")) {
		  $(this).text("Show less");
		} else {
		  $(this).text("Show more");
		}
	});
});
