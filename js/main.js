/* Table of Contents
==================================================
# Navigation Height
# Counter
# Progress Bar
# EasyPieChart
# MagnificPopup
# onePageNav
# Sticky Nav
# Mobile Toggle Control

==================================================
*/

// -------------------------------------------------------------
//  Navigation Height 
// -------------------------------------------------------------

(function() {

    var height = $(window).height();
     $(".menu-one .navbar-nav").innerHeight(height);
    
}());    
           
// -------------------------------------------------------------
//Mobile Toggle Control
// -------------------------------------------------------------

menuHide();
function menuHide(){
    var windowWidth = $(window).width();
        if(windowWidth < 991 ){
            $('.navbar-nav a').click(function (e) {
            $('.navbar-collapse').collapse('toggle');
        });
    }  
}    
          
// -------------------------------------------------------------
// Counter
// -------------------------------------------------------------

(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    
    });

}());

// -------------------------------------------------------------
// Progress Bar
// -------------------------------------------------------------

(function () {

    $('.progress-content').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });
    $('.rating-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });

}());


// -------------------------------------------------------------
// EasyPieChart
// -------------------------------------------------------------

(function () {

    $('.language-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                scaleColor: false,
                animate: 2000,
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
        }
    }); 
}());


// -------------------------------------------------------------
// MagnificPopup
// -------------------------------------------------------------

(function () {
    $('.portfolio-info a').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
}());

// -------------------------------------------------------------
// Navigation Scroll
// -------------------------------------------------------------

$(window).scroll(function(event) {
    Scroll();
}); 

$('.navbar-nav li a').click(function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top -1}, 1000);
    return false;
});

// User define function
function Scroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   $(window).scrollTop();
    var rangeTop    =   200;
    var rangeBottom =   500;
    $('.navbar-nav').find('.scroll a').each(function(){
        contentTop.push( $( $(this).attr('href') ).offset().top);
        contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
    })
    $.each( contentTop, function(i){
        if ( winTop > contentTop[i] - rangeTop ){
            $('.navbar-nav li.scroll')
            .removeClass('current')
            .eq(i).addClass('current');          
        }
    })

};
    
// -------------------------------------------------------------
//  Sticky Nav
// -------------------------------------------------------------
(function () {  
    function menuToggle(){
        var windowWidth = $(window).width();
        if(windowWidth > 991 ){
            $(window).on('scroll', function(){
                if( $(window).scrollTop()>735 ){
                    $('.home-two .navbar').addClass('fixed-top animated fadeInDown');
                } else {
                    $('.home-two .navbar').removeClass('fixed-top animated fadeInDown');
                };
            });
        }else{
            
            $('.home-two .navbar').addClass('fixed-top');
                
        };  
    }

    menuToggle();
}()); 



