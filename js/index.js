
$(window).load(function(){
		$(".masonry_box .cnt .item>ul").masonry({
			itemSelector: 'li',
			gutter: 0,
			isAnimated: true,
			singleMode:true,
			resizeable: true
		});
})
$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
		loop : true,
		speed:500,
		autoplay:4000,
		grabCursor: true,
		autoplayDisableOnInteraction:false, 
		pagination: '.swiper-pagination',
		effect: 'coverflow',
		paginationClickable:true,
		centeredSlides: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 'auto',
		coverflow: {
			rotate: 0,
			stretch: 200,
			depth: 80,
			modifier: 1,
			slideShadows : true
		}
	});
	$(".swiper-container form .type").selectDown();
	$('.masonry_box .sel li').eq(0).addClass("active");
	$(".masonry_box .cnt .item").eq(0).show();
	$('.masonry_box .sel li').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".masonry_box .cnt .item").eq($(this).index()).show().siblings().hide();
		$(".masonry_box .cnt .item>ul").masonry({
	        itemSelector: 'li',
	        gutter: 0,
	        isAnimated: true,
	        singleMode:true,
	        resizeable: true
	     });
	})

})
$(".masonry_box .cnt .item ul li .btm .span2 i").each(function(){
	$(this).click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).closest("li").find(".img .p1 p a:first-child").addClass("towindow3").html("<i></i>添加收藏");
		}else{
			$(this).addClass("active");
			$(this).closest("li").find(".img .p1 p a:first-child").removeClass("towindow3").html("<i class=\"active\"></i>取消收藏");
		}
	})
})

$(".masonry_box .cnt .item ul li .img .p1 p a:first-child").each(function(){
	//$this= e.target();
	//if($(this).hasClass("towindow3")){
    //
	//}else{
	//
	//}
	$(this).click(function(){
		if($(this).hasClass("towindow3")){

			$(".windowfix_box .windowfix3").show().siblings().hide().parent().show().find(".shadow").show();

			$(".windowfix_box .windowfix3").parent().find(".shadow").click(function(){
				$(this).parent().hide()
			})
			$(".windowfix_box .windowfix3").find("i.del").click(function(){
				$(this).closest(".windowfix_box").hide()
			})
			$(".windowfix_box .windowfix3").find("div.link a:first-child").click(function(){
				$(this).closest(".windowfix_box").hide()
			})
		}else{

		}
		if($(this).find("i").hasClass("active")){

			$(this).addClass("towindow3").html("<i></i>添加收藏");
			//$(this).html("<i></i>添加收藏");
			$(this).closest("li").find(".btm .span2 i").removeClass("active");

		}else{
			//$(this).addClass("towindow3").html("<i></i>添加收藏");
			//$(this).closest("li").find(".btm .span2 i").removeClass("active");
			$(this).removeClass("towindow3").html("<i class=\"active\"></i>取消收藏");
			//$(this).html("<i class=\"active\"></i>取消收藏");
			$(this).closest("li").find(".btm .span2 i").addClass("active");
		}

		if($(this).hasClass()){}
	})
})