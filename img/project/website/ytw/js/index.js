 	//轮播效果
	 $(function(){

		var bannerbox=$(".bannerbox")[0];
		var imgbox=$(".imgbox")[0];
		var imgs=$("a",imgbox);
		var btn=$(".btn")[0];
		var list=$("li",btn);
		var bagColor=["url(img/41.jpg)","url(img/51.jpg)","url(img/61.jpg)","url(img/71.jpg)"];
		var num=0;   //操作自动轮播的下标
		var leftbtn=$(".leftbtn")[0];
		var rightbtn=$(".rightbtn")[0];

		//自动轮播效果
		function chage(type){
			type=type || "right";
			if(type=="right"){
				num++;
				if(num>=imgs.length){
					num=0;
				}
			}else if(type=="left"){
				num--;
				if(num<=-1){
					num=imgs.length-1;
				}
			}
			for (var i = 0; i < imgs.length; i++) {
				imgs[i].style.opacity=0;
				list[i].className="";
				bannerbox.style.backgroundImage=bagColor[num];
			}
			//imgs[num].style.opacity=1;
			animate(imgs[num],{opacity:1});
			list[num].className="yuandian";
		}
		var t=setInterval(chage,3000)

		bannerbox.onmouseover=function(){
			clearInterval(t);
			leftbtn.style.display="block";
			rightbtn.style.display="block";
		}
		bannerbox.onmouseout=function(){
			t=setInterval(chage,3000);
			leftbtn.style.display="none";
			rightbtn.style.display="none";
		}

		rightbtn.onclick=function(){
			chage("right");
		}
		leftbtn.onclick=function(){
			chage("left");
		}


	//点播效果
	for (var i = 0; i < list.length; i++) {
		list[i].aa=i;
		list[i].onmouseover=function(){
			for (var j = 0; j < imgs.length; j++) {
				imgs[j].style.opacity=0;
				list[j].className="";
			}
			bannerbox.style.backgroundImage=bagColor[this.aa];
			animate(imgs[this.aa],{opacity:1});
			this.className="yuandian";
			num=this.aa;
		}
	}

	//滑动
	var banrig=$(".banner_right")[0];
	banrig.onmouseover=function(){
		animate(this,{right:10});
	}
	banrig.onmouseout=function(){
		animate(this,{right:0});
	}


	
	//选项卡
	//获取元素
	var title=getClass("content_info_text");
	var bott=getClass("imags_info");
		//遍历3个title
		for (var i = 0; i < title.length; i++){
			title[i].name=i; // title[0].name=0; title[1].name=1; title[2].name=2;
			//给3个title添加移入事件
			title[i].onmouseover=function(){
				for (var j = 0; j<bott.length; j++) {
					bott[j].className="imags_info";
					title[j].className="content_info_text";
				}
				bott[this.name].className="imags_info imags_info1";   //移入谁指谁
				this.className="content_info_text content_info_text1";
			}
		}
		var rtex=getClass("main_content1_bottom_rtext");
		var rpic=getClass("main_content1_bottom_right_pic");
		for (var i = 0; i < rtex.length; i++){
			rtex[i].aa=i;
			rtex[i].onmouseover=function(){
				for (var j = 0; j<rpic.length; j++) {
					rpic[j].className="main_content1_bottom_right_pic";
					rtex[j].className="main_content1_bottom_rtext";
				}
				rpic[this.aa].className="main_content1_bottom_right_pic main_content1_bottom_right_pic1";   //移入谁指谁
				this.className="main_content1_bottom_rtext main_content1_bottom_rtext1";
			}
		}
		var info=$(".imags_info_box1");
		var tops=$(".linetop");
		var lefts=$(".lineleft");
		var bottom=$(".linebottom");
		var right=$(".lineright");
		//alert(info.length)
		for (var i = 0; i < info.length; i++) {
			info[i].bb=i;
			info[i].onmouseover=function(){
				w=getStyle(this,"width");
				h=getStyle(this,"height");
				animate(tops[this.bb],{width:w+2});
				animate(lefts[this.bb],{height:h+2});
				animate(bottom[this.bb],{width:w+2});
				animate(right[this.bb],{height:h+2});
			}
			info[i].onmouseout=function(){
				w=getStyle(this,"width");
				h=getStyle(this,"height");
				animate(tops[this.bb],{width:0});
				animate(lefts[this.bb],{height:0});
				animate(bottom[this.bb],{width:0});
				animate(right[this.bb],{height:0});
			}
		}
			
})

//楼层跳转
$(function(){
	var content=$(".main_content")[0];
	var jump=$(".jump")[0];
	var floor=$(".floor");
	var lis=$("li",jump);
	var div=$("div",jump);
	var back=$(".back")[0];
	document.documentElement.scrollTop=1;
	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	var now=0;
	window.onscroll=function(){
		if(obj.scrollTop+5 >=content.offsetTop){
			jump.style.display="block";
		}else{
			jump.style.display="none";
		}
		for (var i = 0; i < floor.length; i++) {
			if(obj.scrollTop+200 >=floor[i].offsetTop){
				now=i;
				for (var j = 0; j < div.length; j++) {
					div[j].style.display="none";
				}
				div[i].style.display="block"
			}
		}if(obj.scrollTop <floor[0].offsetTop){
			for (var j = 0; j < lis.length; j++) {
					div[j].style.display="none";
				}
			}
	}

	for (var i = 0; i < lis.length; i++) {
		lis[i].aa=i;
		lis[i].onclick=function(){
			animate(obj,{scrollTop:floor[this.aa].offsetTop});
		}
		lis[i].onmouseover=function(){
			div[this.aa].style.display="block";
		}
		lis[i].onmouseout=function(){
			if(now!=this.aa){
				div[this.aa].style.display="none";
			}
		}
	}
	back.onclick=function(){
		animate(obj,{scrollTop:0});
	}
})



// 向左向右滑动
$(function(){
	function moveLeri(num){
	var bannerbox=$(".content_area_center")[num];
	var imgbox=$(".content_area_center_box")[num];
	var imgs=$("a",imgbox);
	var btn=$(".allpoint")[num];
	var list=$("li",btn);
	var leftbtn=$(".leftbutton")[num];
	var rightbtn=$(".rightbutton")[num];
	for (var i = 1; i < imgs.length; i++) {
		imgs[i].style.left="390px";
	}
	var now=0; //在视图窗口中的图片
	var next=0; //在右侧的图片
	var flag=true;
	function move(type){
		type=type || "right";
		if(type=="right"){
			next++;
			if(next>=imgs.length){
				next=0;
			}
			imgs[next].style.left="390px";
			animate(imgs[now],{left:-390});
			animate(imgs[next],{left:0});
			list[now].className="";
			list[next].className="leftpoint";
			now=next;
		}else if(type=="left"){
			next--;
			if(next<=-1){
				next=imgs.length-1;
			}
			imgs[next].style.left="-390px";
			animate(imgs[now],{left:390});
			animate(imgs[next],{left:0});
			list[now].className="";
			list[next].className="leftpoint";
			now=next;
		}
		if(next>=imgs.length){
			next=0;
		}
	}
		bannerbox.onmouseover=function(){
			leftbtn.style.display="block";
			rightbtn.style.display="block";
		}
		bannerbox.onmouseout=function(){
			leftbtn.style.display="none";
			rightbtn.style.display="none";
		}
		rightbtn.onclick=function(){
			move("right");
		}
		leftbtn.onclick=function(){
			move("left");
		}
		list[0].onclick=function(){
			move("left");
		}
		list[1].onclick=function(){
			move("right");
		}
	}
	for (var i = 0; i < 6; i++) {
		moveLeri(i);
	}
})

//跑马灯
// $(function(){
// 		function nodeLunbo(index){
// 		var imabox=$(".content_area_left_dibu_over");
// 		var bannerbox=$(".content_area_left_dibu_pic")[index];
// 		var leftbtn=$(".leftsanjiao")[index];
// 		var rightbtn=$(".rightsanjiao")[index];
// 		var len=getChild(imabox).length;
// 		var w=getStyle(getFirst(imabox),"width")+10;
// 		imabox.style.width=len*w+"px";
// 		function moveLeft(){
// 			//获取第一个
// 			var first=getFirst(imabox);
// 			//变宽度为0
// 			animate(first,{width:0},500,function(){
// 				//放到后面
// 				imabox.appendChild(first);
// 				first.style.width="250px";
// 			})
// 		}
// 		var t3=setInterval(moveLeft,2000);
// 		bannerbox.onmouseover=function(){
// 			clearInterval(t3);
// 		}
// 		bannerbox.onmouseout=function(){
// 			t3=setInterval(moveLeft,2000);
// 		}
// 		leftbtn.onclick=function(){
// 			moveLeft();
// 		}
// 		rightbtn.onclick=function(){
// 			var last=getLast(imabox);
// 			last.style.width=0;
// 			imabox.insertBefore(last,getFirst(imabox));
// 			animate(last,{width:250});

// 		}
// 	}
// 	for (var i = 0; i < 4; i++) {
// 		nodeLunbo(i);
// 	}
// })