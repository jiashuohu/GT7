
$(document).ready(function() {
    $('.container-media').click(function() {
      $('.carouselbackground' ).css("display","block");
    });
    $('.container-media1').click(function() {
      $('.hiddenimage1' ).css("display","block");
     
    });
    $('.container-media2').click(function() {
      $('.hiddenimage2' ).css("display","block");
     
    });
  $('.container-media3').click(function() {
    $('.hiddenimage3' ).css("display","block");
   
  });
  $('.container-media4').click(function() {
    $('.hiddenimage4' ).css("display","block");
   
  });
  $('.container-media5').click(function() {
    $('.hiddenimage5' ).css("display","block");
   
  }); 
  $('.container-media6').click(function() {
    $('.hiddenimage6' ).css("display","block");
   
  }); 
  $('.container-media7').click(function() {
    $('.hiddenimage7' ).css("display","block");
   
  });
  $('.container-media8').click(function() {
    $('.hiddenimage8' ).css("display","block");
   
  }); 
  $('#carouselbackground').click(function() {
    $(this).css("display","none");
  });
  $('#carouselbackground').click(function() {
      $(".carouselborder img").css("display","none");
    });

    $('.hiddenimage1').click(function() {
      $(this).toggleClass("animated slideOutLeft");
      $(".hiddenimage2").css("display","block").toggleClass("animated slideInRight");
     
      var wait = window.setTimeout( function(){
        $(".hiddenimage2").removeClass("animated slideInRight"); },
      
        1300 );

        var wait = window.setTimeout( function(){
          $(".hiddenimage1").css("display","none").removeClass("animated slideOutLeft"); },
          
          1300);
   
    });

    $('.hiddenimage2').click(function() {
      $(this).toggleClass("animated slideOutLeft");
      $(".hiddenimage3").css("display","block").toggleClass("animated slideInRight");
     
      var wait = window.setTimeout( function(){
        $(".hiddenimage3").removeClass("animated slideInRight"); },
        
        1300 );

        var wait = window.setTimeout( function(){
          $(".hiddenimage2").css("display","none").removeClass("animated slideOutLeft"); },
          
          1300);
   
    });

    $('.hiddenimage3').click(function() {
      $(this).toggleClass("animated slideOutLeft");
      $(".hiddenimage4").css("display","block").toggleClass("animated slideInRight");
     
      var wait = window.setTimeout( function(){
        $(".hiddenimage4").removeClass("animated slideInRight"); },
        
        1300 );

        var wait = window.setTimeout( function(){
          $(".hiddenimage3").css("display","none").removeClass("animated slideOutLeft"); },
          
          1300);
   
    });

    $('.hiddenimage4').click(function() {
      $(this).toggleClass("animated slideOutLeft");
      $(".hiddenimage5").css("display","block").toggleClass("animated slideInRight");
     
      var wait = window.setTimeout( function(){
        $(".hiddenimage5").removeClass("animated slideInRight"); },
        
        1300 );

        var wait = window.setTimeout( function(){
          $(".hiddenimage4").css("display","none").removeClass("animated slideOutLeft"); },
          
          1300);
   
    });
  
    $('.hiddenimage5').click(function() {
      $(this).toggleClass("animated slideOutLeft");
      $(".hiddenimage6").css("display","block").toggleClass("animated slideInRight");
     
      var wait = window.setTimeout( function(){
        $(".hiddenimage6").removeClass("animated slideInRight"); },
        
        1300 );

        var wait = window.setTimeout( function(){
          $(".hiddenimage5").css("display","none").removeClass("animated slideOutLeft"); },
          
          1300);
   
    });
    $('.hiddenimage6').click(function() {
      $(this).toggleClass("animated slideOutLeft");
      $(".hiddenimage7").css("display","block").toggleClass("animated slideInRight");
     
      var wait = window.setTimeout( function(){
        $(".hiddenimage7").removeClass("animated slideInRight"); },
        
        1300 );

        var wait = window.setTimeout( function(){
          $(".hiddenimage6").css("display","none").removeClass("animated slideOutLeft"); },
          
          1300);
   
    });
    $('.hiddenimage7').click(function() {
      $(this).toggleClass("animated slideOutLeft");
      $(".hiddenimage8").css("display","block").toggleClass("animated slideInRight");
     
      var wait = window.setTimeout( function(){
        $(".hiddenimage8").removeClass("animated slideInRight"); },
        
        1300 );

        var wait = window.setTimeout( function(){
          $(".hiddenimage7").css("display","none").removeClass("animated slideOutLeft"); },
          
          1300);
  });   
           $('.hiddenimage8').click(function() {
            $(this).toggleClass("animated slideOutLeft");
            $(".hiddenimage1").css("display","block").toggleClass("animated slideInRight");
           
            var wait = window.setTimeout( function(){
              $(".hiddenimage1").removeClass("animated slideInRight"); },
              
              1300 );
      
              var wait = window.setTimeout( function(){
                $(".hiddenimage8").css("display","none").removeClass("animated slideOutLeft"); },
                
                1300);
         
               
   
    });
});


