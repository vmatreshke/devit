$(document).ready(function(){
      $('.js-masonry').masonry({
        itemSelector: '.photogallery__item',

        columnWidth: 10


      });


  var $container = $('.js-masonry');

  $container.imagesLoaded( function(){
    $container.masonry({
      itemSelector : '.photogallery__item'
    });
  });

});