$(document).ready(function(){

      $('.content .slider__list a').click(function (e) {
        api = $('.slider__bg').cycle();
        api.cycle($(this).parent().index())
      });

      // $('.js-masonry').masonry({
      //   itemSelector: '.photogallery__item',

      //   columnWidth: 25


      // });


      // var $container = $('.js-masonry');

      // $container.imagesLoaded( function(){
      //   $container.masonry({
      //     itemSelector : '.photogallery__item'
      //   });
      // });


    // var container = document.querySelector('#container');
    // var msnry = new Masonry( container, {
    //   // options
    //   columnWidth: 200,
    //   itemSelector: '.photogallery__item'
    // });


    // var $container = $('#container');
    // // initialize
    // $container.masonry({
    //   columnWidth: 200,
    //   itemSelector: '.photogallery__item'
    // });

    // var msnry = $container.data('masonry');

});