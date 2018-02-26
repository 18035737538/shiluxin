$(function(){

	//banner轮播
	$(".hj-banner>.hj-bannerimg>a").hide().eq(0).show();
	var num=0;
	function move(){
		num++;
		if(num>=$(".hj-bannerimg>a").length){
			num=0;
		}
		$(".hj-bannerimg>a").fadeOut(500).eq(num).fadeIn(500);
		$(".hj-banner>ul>li").removeClass("btn-selected").eq(num).addClass("btn-selected");
	}
	var t=setInterval(move,3000);
	$(".hj-bannerimg>a").mouseover(function(){
		clearInterval(t);
	}).mouseout(function(){
		t=setInterval(move,3000)
	})
	$(".hj-banner>ul>li").mouseover(function(){
		clearInterval(t);
		var index=$(this).index();
		$(".hj-banner>ul>li").removeClass("btn-selected").eq(index).addClass("btn-selected");
		$(".hj-bannerimg>a").hide().eq(index).show();
		num=index;
	}).mouseout(function(){
		t=setInterval(move,3000)
	})



	//响应式效果
	$(".nav-xy").css({
		display:"none"
	})
	$(".nav-btn").click(function(){
		$(".nav-xy").slideToggle(500);
	})
})