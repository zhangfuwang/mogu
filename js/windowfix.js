jQuery.extend({ 
	windowfix:function(sel,cnt){
		$(sel).click(function(){
			$(cnt).show().siblings().hide().parent().show().find(".shadow").show();
		})
		$(cnt).parent().find(".shadow").click(function(){
			$(this).parent().hide()
		})
		$(cnt).find("i.del").click(function(){
			$(this).closest(".windowfix_box").hide()
		})
		$(cnt).find("div.link a:first-child").click(function(){
			$(this).closest(".windowfix_box").hide()
		})
	}
});
$.windowfix(".towindow1",".windowfix_box .windowfix1");
$.windowfix(".towindow2",".windowfix_box .windowfix2");
$.windowfix(".towindow3",".windowfix_box .windowfix3");
$.windowfix(".towindow4",".windowfix_box .windowfix4");