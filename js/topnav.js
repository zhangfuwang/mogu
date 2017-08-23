$.fn.extend({
	selectDown:function(){
		$(this).mouseleave(function(){
			$(this).find("ul").slideUp(200);
		}).find("p").click(function(){
			var $this= $(this);
			$this.addClass("active").next().slideToggle(200).find("li").click(function(){
				$this.find("span").text($(this).text());
				$(this).parent().slideUp(200);
			})
		})
	}
})
$(document).ready(function(){
	$(".topnav form .type").selectDown();
		$(window).scroll(function(){
			if($(window).scrollTop()){
				$(".topnav form").fadeIn();
			}else{
				$(".topnav form").fadeOut();
		}
	});
	$(".topnav .sign_box .sign").hover(function(e){
		$(this).find(".user").fadeToggle();
		e.preventDefault();
	});
})