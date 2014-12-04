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
		var btn = $$ ('.btn') , info = $$ ('.info'),xx = $$('.xx')[0],show =0;
		for ( var i=0; i<btn.length; i++ ) {
			btn [i].index = i;
			btn[i].onclick = function () {
				TweenMax.to (info [this.index] , .6 , { display :'block' , opacity : 1 });	
				xx.style.display ='block';
				xx.style.right = this.getAttribute ('data-r')+'px';
				xx.style.top = this.getAttribute ('data-t')+'px';
				show = this.index ;
			}
		}
		xx.onclick = function () {
			this.style.display ='none';
			TweenMax.to (info [show] , .6 , { display :'none' , opacity : 0 });	
		}
		
		
		$('#btn').onclick = function () {
			if (this.className === 're' )window.location.reload ();
			this.className = 're';
			$('#page').style.background='url("1_safe3/images/bg2.png")';	
		}
		
		$('#yjsj_btn').onclick = function () {
			window.openPopup($("#design-pop-up"));
		}
		$("#design-pop-up >.close-button").onclick = function () {
			window.closePopup($("#design-pop-up"));
		}
	})
}()