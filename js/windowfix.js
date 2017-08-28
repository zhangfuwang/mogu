//jQuery.extend({
//	windowfix:function(sel,cnt){
//		$(sel).click(function(){
//			$(cnt).show().siblings().hide().parent().show().find(".shadow").show();
//		})
//		$(cnt).parent().find(".shadow").click(function(){
//			$(this).parent().hide()
//		})
//		$(cnt).find("i.del").click(function(){
//			$(this).closest(".windowfix_box").hide()
//		})
//		$(cnt).find("div.link a:first-child").click(function(){
//			$(this).closest(".windowfix_box").hide()
//		})
//	}
//});
//$.windowfix(".towindow1",".windowfix_box .windowfix1");
//$.windowfix(".towindow2",".windowfix_box .windowfix2");
//$.windowfix(".towindow3",".windowfix_box .windowfix3");
//$.windowfix(".towindow4",".windowfix_box .windowfix4");




$(".towindow1").click(function(){
	$(".windowfix_box .windowfix1").show().siblings().hide().parent().show().find(".shadow").show();
})
$(".windowfix_box .windowfix1").parent().find(".shadow").click(function(){
	$(this).parent().hide()
})
$(".windowfix_box .windowfix1").find("i.del").click(function(){
	$(this).closest(".windowfix_box").hide()
})
$(".windowfix_box .windowfix1").find("div.link a:first-child").click(function(){
	$(this).closest(".windowfix_box").hide()
})

$(".towindow2").click(function(){
	$(".windowfix_box .windowfix2").show().siblings().hide().parent().show().find(".shadow").show();
})
$(".windowfix_box .windowfix2").parent().find(".shadow").click(function(){
	$(this).parent().hide()
})
$(".windowfix_box .windowfix2").find("i.del").click(function(){
	$(this).closest(".windowfix_box").hide()
})
$(".windowfix_box .windowfix2").find("div.link a:first-child").click(function(){
	$(this).closest(".windowfix_box").hide()
})
//$(".towindow3").click(function(){
//	$(".windowfix_box .windowfix3").show().siblings().hide().parent().show().find(".shadow").show();
//})
//$(".windowfix_box .windowfix3").parent().find(".shadow").click(function(){
//	$(this).parent().hide()
//})
//$(".windowfix_box .windowfix3").find("i.del").click(function(){
//	$(this).closest(".windowfix_box").hide()
//})
//$(".windowfix_box .windowfix3").find("div.link a:first-child").click(function(){
//	$(this).closest(".windowfix_box").hide()
//})
$(".towindow4").click(function(){
	$(".windowfix_box .windowfix4").show().siblings().hide().parent().show().find(".shadow").show();
})
$(".windowfix_box .windowfix4").parent().find(".shadow").click(function(){
	$(this).parent().hide()
})
$(".windowfix_box .windowfix4").find("i.del").click(function(){
	$(this).closest(".windowfix_box").hide()
})
$(".windowfix_box .windowfix4").find("div.link a:first-child").click(function(){
	$(this).closest(".windowfix_box").hide()
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
$(".content-right-list1 div:first-child span").click(function() {
	if ($(this).hasClass("towindow3")) {

		$(".windowfix_box .windowfix3").show().siblings().hide().parent().show().find(".shadow").show();

		$(".windowfix_box .windowfix3").parent().find(".shadow").click(function () {
			$(this).parent().hide()
		})
		$(".windowfix_box .windowfix3").find("i.del").click(function () {
			$(this).closest(".windowfix_box").hide()
		})
		$(".windowfix_box .windowfix3").find("div.link a:first-child").click(function () {
			$(this).closest(".windowfix_box").hide()
		})
		$(this).css({"background-color":"#dd5920"}).removeClass("towindow3");
	} else {
		$(this).css({"background-color":"#e7e7e7"}).addClass("towindow3");
	}
})