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
	
	var xx_k = $$('.xx_k') , status4_page= $$ ('.status4_page'), up_btn = $$('.up_btn');
	
	for ( var i=0 ; i<xx_k.length; i++ ) {
		xx_k[i].index = i;
		xx_k[i].onclick = function () {
			for (var j=0; j <xx_k.length; j++ ) {
				status4_page[j].style.display ='none';	
				up_btn[j].src ='2_now4/images/down_btn.png';
			}	
			
			status4_page[this.index].style.display ='block';
			up_btn[this.index].src ='2_now4/images/up_btn.png';
		}	
	}
	
	$('.status4_research').onclick = function () {
			window.openPopup($("#design-pop-up"));
	}
	$("#design-pop-up >.close-button").onclick = function () {
		window.closePopup($("#design-pop-up"));
	}
	
	new iScroll($("#design-wrapper"),{momentum:!0,vScroll:!0,hScroll:!1,hScrollbar:!1,vScrollbar:!0,bounce:!0,hideScrollbar:!1})
} ,false );