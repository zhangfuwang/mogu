$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>280){  
            $(".sidefix .totop").fadeIn(200);
        }else{  
            $(".sidefix .totop").fadeOut(200);
        }
    });
    $(".sidefix .totop").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;            
   });
});