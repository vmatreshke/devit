<?php get_header(); ?>

  <!-- BEGIN conteiner -->
  <div class="conteiner l">
    <div class="tower"></div>
    <div class="l-col1">
      <div class="lang">
        <a class="lang__1" href="#">Rus</a>
        <a class="lang__2" href="#">Eng</a>
      </div>
      <ul class="nav">
        <li><a href="#">videos</a></li>
        <li><a href="#">forums</a></li>
        <li><a href="#">music</a></li>
      </ul>
    </div>

    <a href="#" class="arr-top"></a>
    <!-- BEGIN news -->
    <div class="news l-col2">

  <?php if(have_posts()): ?>
<?php while(have_posts()): the_post(); ?>
<article class="entry_page">
  <h3 class="h3"><?php the_title();?></h3>
  <?php the_content();?>
</article>

<?php endwhile; ?>
<?php else: ?> <p>Ничего не найдено</p>
<?php endif; ?>    
      
      
      
      
    </div>
    <!-- END news -->
    <a href="#" class="arr-bottom"></a>
    <?php get_sidebar(); ?>
  </div>
  <!-- END conteiner -->
  <div class="conteiner__bottom"></div>
  <div class="border"><div class="border__bg"></div></div>
<?php get_footer(); ?>
