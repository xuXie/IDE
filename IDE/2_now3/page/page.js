(function() {
    window.pageName = "3.0",
    window.previousPageName = "2.2",
    window.nextPageName = "3.1",
    window.swipeDisabled = !0
})();

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
		 	window.location.href = '2_now1.html';
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
		
		$('.return_btn').onclick = function(){
		 	window.location.href = '2_now1.html';
		}	

	TweenMax.from ( $('.status3_p') , .7 , {top: 230,  opacity : 0 });
	TweenMax.from ( $('.status3_page1') , .7 , {left : 30, rotation : 10 , opacity : 0 , delay : .2});
	TweenMax.from ( $('.status3_page2') , .7 , {left :320, rotation : 10 , opacity : 0 , delay : .4});
	TweenMax.from ( $('.status3_page3') , .7 , {left : 690, rotation : -10 , opacity : 0 , delay : .6});
} ,false );