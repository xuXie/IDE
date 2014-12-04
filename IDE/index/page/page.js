(function() {
    window.pageName = "3.0",
    window.previousPageName = "2.2",
    window.nextPageName = "3.1",
    window.swipeDisabled = !0
})()

window.addEventListener("load",function(){
	
	$('#menu-button-2').onclick = function(){
		window.location.href = 'index.html';
	}
	$('#menu-button-3').onclick = function(){
		window.location.href = 'info.html';
	}
	$('#menu-button-4').onclick = function(){
		window.location.href = 'issi.html';
	}
	
			
	TweenMax.to ($('.hand') , 1.2 , { top : 133 , opacity : 1 , onComplete : function () {
		$('.index_ytu').style.transform = 'scale(1)';
		//$('.index_ytu').style.WebkitTransform = 'scale(1)';
		$('.index_ztu').style.transform = 'scale(1)';	
		//$('.index_ztu').style.WebkitTransform = 'scale(1)';	

		
		TweenMax.to ($('.left_btn') , .8 , { left : 96 , opacity : 1  ,delay : 1.2 } );
		TweenMax.to ($('.right_btn') , .8 , { right : 96 , opacity : 1 ,delay : 1.4} );
	}});
	
	var eventStart = 'ontouchstart' in window ? 'touchstart' : 'mousedown';
	var eventEnd = 'ontouchstart' in window ? 'touchend' : 'mouseup';
	
	$('.right_btn').addEventListener (eventStart , function () {
		this.src = 'index/images/right_btn2.png';	
	} ,false );

	
	$('.right_btn').addEventListener (eventEnd , function () {
		this.src = 'index/images/right_btn.png';	
		
		TweenMax.to ($('.left_btn') , .4, {  opacity : 0, display :'none'} );
		TweenMax.to ($('.index_ztu') , .4 , { opacity : 0, display :'none'} );
		TweenMax.to (this , .4 , { opacity : 0, display :'none'} );
		
		TweenMax.to ($('.hand'), 1 , {left : 10 , delay : .3 });
		
		$('.index_ytu').style.transition = 'none';
		$('.index_ytu').style.WebkitTransition = 'none';
		TweenMax.to ($('.index_ytu'), 1 , { width: 840 , right:0, delay : .3  , onComplete : function () {
			TweenMax.to ($('.btns_right'), .5,  {display : 'block' , opacity : 1 } );
		} } );
		setTimeout ( function () {
			$('.index_p1').src ='index/images/index_p2.png';	
		} , 1000);
		
	} ,false );
	
	
	$('.left_btn').addEventListener (eventStart , function () {
		this.src = 'index/images/left_btn2.png';	
		
	} ,false );
	$('.left_btn').addEventListener (eventEnd , function () {
		this.src = 'index/images/left_btn.png';	
		
		TweenMax.to ($('.right_btn') , .4, {  opacity : 0, display :'none'} );
		TweenMax.to ($('.index_ytu') , .4 , { opacity : 0, display :'none'} );
		TweenMax.to (this , .4 , { opacity : 0, display :'none'} );
		
		TweenMax.to ($('.hand'), 1 , {left : 780 , delay : .3 });
		
		$('.index_ztu').style.transition = 'none';
		$('.index_ztu').style.WebkitTransition = 'none';
		TweenMax.to ($('.index_ztu'), 1 , { width: 840 , left:0, delay : .3  , onComplete : function () {
			TweenMax.to ($('.btns_left'), .5,  {display : 'block' , opacity : 1 } );
		} } );
		
		setTimeout ( function () {
			$('.index_p1').src ='index/images/index_p2.png';	
		} , 1000);
		
		
	} ,false );
})