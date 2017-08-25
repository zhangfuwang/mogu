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