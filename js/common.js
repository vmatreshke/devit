$(document).ready(function(){
	$('.content .slider__list a').click(function (e) {
		api = $('.slider__bg').cycle();
		api.cycle($(this).parent().index())
	});


	$(".navMobile").click(function () {
		$(".nav").slideToggle("slow");
		$(".search").slideToggle("fast");
		$(".h33").toggleClass("btNone");
	});

  	// for list
	var firstLink = $(".kat__nav li").first();
		firstLink.click(function() {
			if ($(this).hasClass("js-active")) {
				$(this).removeClass("js-active");
				$(".kat__nav li").hide();
				$(this).show();
			}
			else {
				$(this).addClass("js-active")
				$(".kat__nav li").show();
			}
	});
	// $('.kat__media').append( $('.kat__descr'));



});
