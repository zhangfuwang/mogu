$(document).ready(function(){
	$(".masonry_box .cnt .item").eq(0).show();
	$(".masonry_box .cnt .item>ul").masonry({
        itemSelector: 'li',
        gutter: 0,
        isAnimated: true,
        singleMode:true,
        resizeable: true
    });
})