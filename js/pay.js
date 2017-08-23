


// 选择会员类型
 $(" #pay ul li ").click(function(){
     $(this).addClass("active").siblings(".active").removeClass("active");
     var span=$(this).children().find("span").text();
     $("#pay h3 span").text("¥"+span)
 })