(function() {
    window.pageName = "3.0",
    window.previousPageName = "2.2",
    window.nextPageName = "3.1",
    window.swipeDisabled = !0;
})(),function(){
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
		
		var navigation = $$('.navigation-button'); 
		navigation[0].onclick = function(){
		 	window.location.href = '1_now.html';
		}
		navigation[1].onclick = function(){
		 	window.location.href = '1_tj.html';
		}
		navigation[2].onclick = function(){
		 	window.location.href = '1_effect2.html';
		}
		navigation[3].onclick = function(){
		 	window.location.href = '1_safe3.html';
		}
		navigation[4].onclick = function(){
		 	window.location.href = '1_compare2.html';
		}
		navigation[5].onclick = function(){
		 	window.location.href = '1_key.html';
		}
		
		
		var line = $$('.line');
		
		
		TweenMax.to (line[0] , .5 , {opacity:1 });	
		TweenMax.to (line[1] , .5 , {opacity:1  ,delay : .4 });	
		TweenMax.to (line[2] , .5 , {opacity:1 ,delay : .8 });	
		TweenMax.to (line[3] , .5 , {opacity:1 ,delay : 1.2 });	
		
		$('#btn').onclick = function () {window.location.reload();}
		
		$('.yjsj_btn').onclick = function () {
			window.openPopup($("#design-pop-up"));
		}
		$("#design-pop-up >.close-button").onclick = function () {
			window.closePopup($("#design-pop-up"));
		}
	})
}()