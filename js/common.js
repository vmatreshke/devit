$(document).ready(function(){
      api = $('.slider__bg').cycle();
      $('.content .slider__list a').click(function (e) {
        api.cycle($(this).parent().index())
      });

      $('.js-masonry').masonry({
        itemSelector: '.photogallery__item',

        columnWidth: 25


      });


  var $container = $('.js-masonry');

  $container.imagesLoaded( function(){
    $container.masonry({
      itemSelector : '.photogallery__item'
    });
  });

});