$(document).ready(function(){
  $('.content .slider__list a').click(function (e) {
    api = $('.slider__bg').cycle();
    api.cycle($(this).parent().index())
  });
});