(function() {
    window.pageName = "3.0",
    window.previousPageName = "2.2",
    window.nextPageName = "3.1",
    window.swipeDisabled = !0
})(),function(){
	window.addEventListener("load",function(){
		var con = $$('.con');
		TweenMax.to (con[0] , .6 , { opacity: 1 });
		TweenMax.to (con[1] , .6 , { opacity: 1 ,delay : .5 });
		TweenMax.to (con[2] , .6 , { opacity: 1  ,delay : 1});
		TweenMax.to (con[3] , .6 , { opacity: 1  ,delay : 1.5});
		TweenMax.to (con[4] , .6 , { opacity: 1  ,delay : 2});
		TweenMax.to (con[6] , .6 , { opacity: 1  ,delay : 2});
		TweenMax.to (con[5] , .6 , { opacity: 1  ,delay : 2.5 , onComplete: function(){
			//.method_hao{ position:absolute; left:60px; top:207px; opacity:0;} 28 24
			$('.method_zr2').style.opacity='1';
			$('.method_hao2').style.opacity='1';
		}});
	
		TweenMax.to ($('.zhuzi') , 3.5 , { height : 271 });
		
		$('.method_btn').onclick = function () {
			window.openPopup($("#design-pop-up"));
		}
		$("#design-pop-up >.close-button").onclick = function () {
			window.closePopup($("#design-pop-up"));
		}
		
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
		 	window.location.href = '2_now.html';
		}
		navigation[1].onclick = function(){
		 	window.location.href = '2_tj.html';
		}
		navigation[2].onclick = function(){
		 	window.location.href = '2_effect2.html';
		}
		navigation[3].onclick = function(){
		 	window.location.href = '2_safe3.html';
		}
		navigation[4].onclick = function(){
		 	window.location.href = '2_compare2.html';
		}
		navigation[5].onclick = function(){
		 	window.location.href = '2_key.html';
		}			
		
	})
}()