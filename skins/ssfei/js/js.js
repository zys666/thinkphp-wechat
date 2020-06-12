$(function() {	
	

	
	/*本科生*/
	var swiper2 = new Swiper('.con4 .swiper2', {
		slidesPerView: 5,loopedSlides: 5,spaceBetween: 25,nextButton: '.con4 .swiper2 .swiper-button-next',prevButton: '.con4 .swiper2 .swiper-button-prev',loop: true,autoplay: 2500,speed: 800,autoplayDisableOnInteraction: false
	});
	
	$('.con4 .tabs li').click(function() {
		var i = $(this).index();
		$('.con4 .tabs li').removeClass('active');
		$(this).addClass('active');$('.con4 .tabLi li').removeClass('active');
		$('.con4 .tabLi li').eq(i).addClass('active');
	})
	
	/*研究生*/
	var swiper3 = new Swiper('.con4 .swiper3', {
		slidesPerView: 5,loopedSlides: 5,spaceBetween: 25,nextButton: '.con4 .swiper3 .swiper-button-next',prevButton: '.con4 .swiper3 .swiper-button-prev',loop: true,autoplay: 2500,speed: 800,autoplayDisableOnInteraction: false
	});
	
	$('.con4 .swiper-container').hover(function(){
		swiper2.stopAutoplay();swiper10.stopAutoplay();
	},function(){
		swiper2.startAutoplay();swiper10.startAutoplay();
	});
	
	
	/*优势数字滚动效果*/
	function numtoggle(){
		var num1 = 0;var timer1;$('.con1 h5 em').html(0);	
		timer1 = setInterval(function(){
			if($('.con1 li:nth-child(1) h5 em').html()<13){
				$('.con1 li:nth-child(1) h5 em').html(num1);num1 = num1+ 1 ;
			}else{
				clearInterval(timer1);
			}
		},100);
		
		var num2 = 0;var timer2;
		timer2 = setInterval(function(){
			if($('.con1 li:nth-child(2) h5 em').html()<99){
				$('.con1 li:nth-child(2) h5 em').html(num2);num2 = num2+9;
			}else{
				clearInterval(timer2);
			}
		},100);
		
		var num3 = 0;var timer3;
		timer3 = setInterval(function(){
			if($('.con1 li:nth-child(3) h5 em').html()<10000){
				$('.con1 li:nth-child(3) h5 em').html(num3);num3 = num3+1000;
			}else{
				clearInterval(timer3);
			}
		},100);
		
		var num4 = 0;var timer4;
		timer4 = setInterval(function(){
			if($('.con1 li:nth-child(4) h5 em').html()<2000){
				$('.con1 li:nth-child(4) h5 em').html(num4);num4 = num4+200;
			}else{
				clearInterval(timer4);
			}
		},100);
		
		var num5 = 0;var timer5;
		timer5 = setInterval(function(){
			if($('.con1 li:nth-child(5) h5 em').html()<85){
				$('.con1 li:nth-child(5) h5 em').html(num5);num5 = num5+5;
			}else{
				clearInterval(timer5);
			}
		},60);
		
		var num6 = 0;var timer6;
		timer6 = setInterval(function(){
			if($('.con1 li:nth-child(6) h5 em').html()<80){
				$('.con1 li:nth-child(6) h5 em').html(num6);num6 = num6+8;
			}else{
				clearInterval(timer6);
			}
		},100);
	}
	numtoggle();
	
	$('.con12 .course-type section:last-of-type ul').height($('.con12 .course-type section:first-of-type ul').height())
})