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

		
		var text = $$('.text'),
		    icon = $$('.icon');
			
		 
		var sss = new TimelineMax ();
		sss.to (text[0] , .5 , {opacity : 1 });
		sss.to (text[1] ,.5 , {opacity : 1 });
		sss.to (text[2] ,.5 , {opacity : 1 });
		sss.to (text[3] , .5 ,{opacity : 1 });
		sss.to (text[4] , .5 ,{opacity : 1 });
		
		sss.to (icon[0] ,.5 , {opacity : 1 });
		sss.to (icon[1] ,.5 , {opacity : 1 });
		sss.to (icon[2] , .5 ,{opacity : 1 });
		sss.to (icon[3] , .5 ,{opacity : 1 });
		
		$('.yjsj_btn').onclick = function () {
			window.openPopup($("#design-pop-up"));
		}
		$("#design-pop-up >.close-button").onclick = function () {
			window.closePopup($("#design-pop-up"));
		}
		
		new iScroll($("#design-wrapper"),{momentum:!0,vScroll:!0,hScroll:!1,hScrollbar:!1,vScrollbar:!0,bounce:!0,hideScrollbar:!1})
		
		
	})
}()