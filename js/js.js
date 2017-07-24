$(".swiper-wrapper").css({
	width:$(window).width() - 85,
	height:$(window).height()
});
$(".priamry-l").css({
	height:$(window).height()
})
$(document).ready(function(){
	var myswiper = new Swiper(".swiper-container",{
		mousewheelControl:true,
		speed:400,
		direction : 'vertical',
		pagination: '.swiper-pagination',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 
	})
})



