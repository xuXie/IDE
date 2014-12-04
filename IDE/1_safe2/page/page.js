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
		
		var con = $$('.con'),btn = $$('.btn');
		var show = 0;
		for ( var i=0; i<btn.length; i++ ) {
			btn[i].index = i;
			btn [i].onclick = function () {
				if ( this.moved ) return ;
				this.moved = 1;
				show++;
				TweenMax.to (con [this.index] , .8 , {height :con [this.index].getAttribute ('data-h') , onComplete : function () {
					if ( show === 3 ) {
						$('#btn').className ='re';	
					}	
				}});	
			}	
		}
		
		$('#btn').onclick = function () {
			if ( this.className ==='re' )window.location.reload();
			for ( var i=0; i<btn.length; i++ ) {
				btn [i].onclick();
			}
			this.className ='re';
		}	
		
		$('#yjsj_btn').onclick = function () {
			window.openPopup($("#design-pop-up"));
		}
		$("#design-pop-up >.close-button").onclick = function () {
			window.closePopup($("#design-pop-up"));
		}
	})
}()