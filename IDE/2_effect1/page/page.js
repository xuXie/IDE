(function() {
    window.pageName = "3.0",
    window.previousPageName = "2.2",
    window.nextPageName = "3.1",
    window.swipeDisabled = !0
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

		
		var onceClicked = !1, bound = $('.pull_bg').offsetWidth ;
		function addDrag ( a  , b  , c  , d ) { 
			var startY ,startX, oldx,oldy,cache ={};
			function downFn ( e ) {
				if ( onceClicked ) return ;
				var e = window.event || e ;
				cache.x = a.offsetLeft ;
				cache.y = a.offsetTop ;
				oldy = a.getBoundingClientRect().top ;
				oldx = a.getBoundingClientRect().left ;
				startY = !('ontouchstart' in window) ? e.clientY - oldy- a.offsetTop : e.touches[0].clientY - oldy - a.offsetTop  ;	
				
				startX = 'ontouchstart' in window ?　e.touches[0].clientX - oldx - a.offsetLeft : e.clientX - oldx- a.offsetLeft ;	
				document.addEventListener ('mousemove' , moveFn , false );
				document.addEventListener ('mouseup' , upFn , false );	
				document.addEventListener ('touchmove' , moveFn , false );
				document.addEventListener ('touchend' , upFn , false );
				
				e.preventDefault();	
			}
			
			function moveFn ( e ) {
				var e = window.event || e ;
				var 
					newX =  !('ontouchstart' in window)  ? e.clientX - startX - oldx  :  e.touches[0].clientX -  startX - oldx  ;

				if ( newX <= 0 ) {
					newX =0; 	
				}else if ( newX >=  bound - a.offsetWidth	 ) {
					newX = bound - a.offsetWidth;
				}
	
				a.style.left = newX  +'px';

				e.preventDefault();	
			}
			
			
			function upFn () {
			
				document.removeEventListener ('mousemove' , moveFn , false );
				document.removeEventListener ('mouseup' , upFn , false );	
				document.removeEventListener ('touchmove' , moveFn , false );
				document.removeEventListener ('touchend' , upFn , false );
			} 
			
			
			a.addEventListener ('mousedown' , downFn ,false );
			a.addEventListener ('touchstart' , downFn ,false );
			
		};
		
		
		addDrag ( $('.pull_btn') ); 
		
		
		TweenMax.to ($('.zhu_h') , 1.5 , { width : 459 });
		
		
		var num = 95.5;
		var result = 99.5 ;
		var left = -2, max = 99.5 , min = 90;
		
		
		$('.see_btn1').onclick = function () {
			if ( this.src.indexOf ('initio_btn.png') != -1 ) {
				onceClicked = !1;	
				this.src ='2_effect1/images/see_btn.png';
				TweenMax.to ($('.pull_btn') , .5 , {left : -5 });	
				$('.icon1').style.display ='none';
			}else {
				$('.icon1').style.display ='block';
				this.src ='2_effect1/images/initio_btn.png';
				onceClicked = !0;
				TweenMax.to ($('.pull_btn') , .6 , {left : left });		
			}
			
		}
		
		
		$('.add_btn').onclick = function () {
			num =Math.min (max, num +.5 ) ;
			var a = String (num.toFixed(1)).replace('.' ,'');
			updateNums (a);
			
		}
		$('.reduction_btn').onclick = function () {
			num =Math.max (min, num - .5 );
			var a = String (num.toFixed(1) ).replace('.' ,'');
			updateNums (a);	
		}
		
		function updateNums (a) {
			
			$('.number1').src = '2_effect1/images/number'+a.charAt(0)+'.png';
			$('.number2').src = '2_effect1/images/number'+a.charAt(1)+'.png';
			$('.number3').src = '2_effect1/images/number'+a.charAt(2)+'.png';	
		}
		$('.see_btn2').onclick = function () {
			
			if ( this.src.indexOf ('initio_btn.png') != -1 ) {
				this.src ='2_effect1/images/see_btn.png';
				num = 95.5;
			}else {
				this.src ='2_effect1/images/initio_btn.png';
				num = result;

			}

			var a = String (num).replace('.' ,'');	
			updateNums (a);
			
			$('.effect_p5_01').src ='2_effect1/images/effect_p5_02.png';
			$('.effect_p5_01').style.top ='611px';
		}
		
		
		$('.status4_research').onclick = function () {
			window.openPopup($("#design-pop-up"));
		}
		$("#design-pop-up >.close-button").onclick = function () {
			window.closePopup($("#design-pop-up"));
		}
	})
}()