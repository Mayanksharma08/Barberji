$(document).ready(function() {
    
            var obj1=$('.home-main-section-video-container');
        
        var layer=$('.home-main-section-video-container');
        
        layer.mousemove(function(e){
           var valueX=(e.pageX * -1 / 15)%10; 
           var valueY=(e.pageY * -1 / 20)%10;
            
            obj1.css({ 'transform': 'translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(' + valueX + 'deg) rotateY(' + valueY + 'deg) rotateZ('+0+'deg) skew(0deg,0deg)'});
        });
    
    /*for sticky nav */
    $('nav').removeClass('sticky');
    $('.js-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'60px;'
    });
    
    /*scroll button*/
    $('.js-scrollfull').click(function(){
       $('html,body').animate({scrollTop:$('.js-plans').offset().top},1000); 
    });
    $('.js-scrollghost').click(function(){
       $('html,body').animate({scrollTop:$('.js-features').offset().top},1000); 
    });
    
    /*navigation scroll*/
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        }); 
      }
    }
  });
    
    /*animation scroll*/
    $('.js-wp1').waypoint(function(direction){
        $('.js-wp1').addClass('animated fadeIn');
    },{
        offset:'50%'
    });
    
        $('.js-wp2').waypoint(function(direction){
        $('.js-wp2').addClass('animated fadeInUp');
    },{
        offset:'50%'
    });
    
        $('.js-wp3').waypoint(function(direction){
        $('.js-wp3').addClass('animated fadeIn');
    },{
        offset:'50%'
    });
    
        $('.js-wp4').waypoint(function(direction){
        $('.js-wp4').addClass('animated pulse');
    },{
        offset:'50%'
    });
    
    /*Mob nav*/
    $('.js-nav-icon').click(function(){
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
});


