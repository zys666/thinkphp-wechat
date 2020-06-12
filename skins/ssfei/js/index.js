$(function(){
	 "use strict";
	 var userAgentInfo = navigator.userAgent;
	 var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];
	 var mobile_flag = false;
	 for (var v = 0; v < mobileAgents.length; v++) {
		if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
			mobile_flag = true;
			break;
		}
	 }
	 var screen_width = window.screen.width;
	 var screen_height = window.screen.height;   
	 if(screen_width < 500 && screen_height < 800){
		 mobile_flag = true;
	 }else{
		  $(".sp_div").hover(function(){
			 $(this).find(".bg_black").fadeIn("2000");
		 });
		 $(".sp_div").mouseleave(function(){
			 $(this).find(".bg_black").fadeOut("2000");
		 }); 
	 }
});