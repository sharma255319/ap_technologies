(function(){var special=$.event.special,uid1='D'+(+new Date()),uid2='D'+(+new Date()+1);special.scrollstart={setup:function(){var timer,handler=function(evt){var _self=this,_args=arguments;if(timer){clearTimeout(timer)}else{evt.type='scrollstart';$.event.handle.apply(_self,_args)}timer=setTimeout(function(){timer=null},special.scrollstop.latency)};$(this).bind('scroll',handler).data(uid1, handler)},teardown:function(){$(this).unbind('scroll',$(this).data(uid1))}};special.scrollstop={latency:300,setup:function(){var timer,handler=function(evt){var _self=this,_args=arguments;if(timer){clearTimeout(timer)}timer=setTimeout(function(){timer=null;evt.type='scrollstop';$.event.handle.apply(_self, _args)},special.scrollstop.latency)};$(this).bind('scroll',handler).data(uid2,handler)},teardown:function(){$(this).unbind('scroll',jQuery(this).data(uid2))}}})()
$(function(){
   $('div.top>a').click(function(e){$('html,body').animate({scrollTop:'0px'},800);return false})
  $(window).scroll(function(){if($(this).scrollTop()>200){$('div.top').fadeIn()}else{$('div.top').fadeOut()}})
	if(($(window).width()<=1250)&&($(window).width()>=1118))$('div.top').stop().animate({marginRight:-548,bottom:313,right:'50%'})
		else if($(window).width()<=1118)$('div.top').stop().css({marginRight:0,bottom:313,right:20})
		else if($(window).width()>1300)$('div.top').stop().css({marginRight:-619,bottom:313,right:'50%'})
		else $('div.top').stop().animate({marginRight:-619,bottom:313,right:'50%'})
	$(window).resize(function(){
		if(($(window).width()<=1250)&&($(window).width()>=1118))$('div.top').stop().animate({marginRight:-548,bottom:313,right:'50%'})
		else if($(window).width()<=1118)$('div.top').stop().css({marginRight:0,bottom:313,right:20})
		else if($(window).width()>1300)$('div.top').stop().css({marginRight:-619,bottom:313,right:'50%'})
		else $('div.top').stop().animate({marginRight:-619,bottom:313,right:'50%'})
	})
})		