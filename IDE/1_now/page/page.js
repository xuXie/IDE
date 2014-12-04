(function() {
    window.pageName = "3.0",
    window.previousPageName = "2.2",
    window.nextPageName = "3.1",
    window.swipeDisabled = !0;
})(),function(){
	window.addEventListener("load",function(){
		
		TweenMax.to ( $('.now1') , .7 , { top : 255 , opacity : 1 ,ease : Bounce.easeOut});
		TweenMax.to ( $('.now2') , .7 , { top : 255 , opacity : 1 ,ease : Bounce.easeOut ,delay : 1 });
		TweenMax.to ( $('.now3') , .7 , { top : 255 , opacity : 1 ,ease : Bounce.easeOut ,delay : .5});

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
		
		var now = $$('.now');
		for(var i=0; i<now.length; i++ ){
			now[i].index = i+1;
			now[i].onclick = function () {
				$('#now_box').style.backgroundImage='url(1_now/images/bg'+this.index+'.png)';
				$('#now_box').style.display='block';
			}
		}
		$('.close').onclick = function (){
			$('#now_box').style.display='none';
		}
		
		$('.yjsj_btn').onclick = function () {
			window.openPopup($("#design-pop-up"));
		}
		$("#design-pop-up >.close-button").onclick = function () {
			window.closePopup($("#design-pop-up"));
		}
		
		new iScroll($("#design-wrapper"),{momentum:!0,vScroll:!0,hScroll:!1,hScrollbar:!1,vScrollbar:!0,bounce:!0,hideScrollbar:!1})
		
	})
}()