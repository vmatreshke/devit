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
			var width = $(window).width();
			if (width > 320 && width < 767){
				if ($(this).hasClass("js-active")) {
					$(this).removeClass("js-active");
					$(".kat__nav li").hide();
					$(this).show();
				}
				else {
					$(this).addClass("js-active")
					$(".kat__nav li").show();
				}
			}
	});
	// $('.kat__media').append( $('.kat__descr'));

		// for list
		var firstLink = $(".slider__list li").first();
			firstLink.click(function() {
				var width = $(window).width();
				if (width > 320 && width < 767) {
					if ($(this).hasClass("js-active")) {
						$(this).removeClass("js-active");
						$(".slider__list li").hide();
						$(this).show();
					}
					else {
						$(this).addClass("js-active")
						$(".slider__list li").show();
					}
				};
		});

		// for select selected "post"
		$("#choose-sity").change(function(){
		    var text = $(this).val();
		    $(".js-select-sity").text(text);
		});
		// 
});
