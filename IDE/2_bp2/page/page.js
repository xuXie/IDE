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
		
		///
		var show = 0;
		var isHitDiv = function(a,b,c){var d,e,f,g,h,i,j,k;return c=c?c:0,d=a.offsetLeft+c,e=a.offsetLeft+a.offsetWidth-c,f=a.offsetTop+c,g=a.offsetTop+a.offsetHeight-c,h=b.offsetLeft+c,i=b.offsetLeft+b.offsetWidth-c,j=b.offsetTop+c,k=b.offsetTop+b.offsetHeight-c,!(h>e||f>k||j>g||d>i)}
		
		var method2_pop = $$ ('.method2_pop');
		var pop_btn = $$('.pop_btn');
		
		for ( var i=0; i<pop_btn.length; i++ ) {
			pop_btn[i].onclick = function () {
				window.location.reload ();	
			}	
		}
		function addDrag ( a  , b  , c  , d ) { 
			var startY ,startX, oldx,oldy,onceClicked = !1,cache ={};
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
				var newY =  !('ontouchstart' in window)  ? e.clientY - startY - oldy  :  e.touches[0].clientY -  startY - oldy  ,
					newX =  !('ontouchstart' in window)  ? e.clientX - startX - oldx  :  e.touches[0].clientX -  startX - oldx  ;
			
				if ( newY <= 0 ) {
					newY =0; 	
				}else if ( newY >=  window.innerHeight - a.offsetHeight	 ) {
					newY = window.innerHeight - a.offsetHeight ;
				}
				
				if ( newX <= 0 ) {
					newX =0; 	
				}else if ( newX >=  window.innerWidth - a.offsetWidth	 ) {
					newX =window.innerWidth - a.offsetWidth;
				}
				
				a.style.top = newY  +'px';
				a.style.left = newX  +'px';
				
				if ( isHitDiv ( a , b ,20 ) ){
					// && c () ;	
					method2_pop[show].style.display ='none';
					method2_pop[show].style.opacity ='0';
					show = d;
					 $('.huantu').className = 'huantu show'+d ;
					  TweenMax.from ( $('.huantu') ,.5 , {opacity : 0 ,onComplete : function () {
						TweenMax.to ( $('.method2_vs') ,.3 , {transform : 'scale(1.2)' ,onComplete : function () {
							TweenMax.to ( $('.method2_vs') ,.2 , {transform : 'scale(1)' ,onComplete : function () {
								TweenMax.to (method2_pop[show] , .5 , {display : 'block' , opacity : 1 });
							}});	
						}});  
					  } } );
					
					a.style.display ='none';
				}
				

				e.preventDefault();	
			}
			
			
			function upFn () {
				if ( !isHitDiv ( a , b ,20 ) ){
					TweenMax.to (a , .6 , {left : cache.x , top : cache. y ,ease : Back.easeOut });	
				}
				document.removeEventListener ('mousemove' , moveFn , false );
				document.removeEventListener ('mouseup' , upFn , false );	
				document.removeEventListener ('touchmove' , moveFn , false );
				document.removeEventListener ('touchend' , upFn , false );
			} 
			
			
			a.addEventListener ('mousedown' , downFn ,false );
			a.addEventListener ('touchstart' , downFn ,false );
			
		};
		
		
		addDrag ( $ ('.method2_tu1_y') , $('.huantu') , null  , 0);	
		addDrag ( $ ('.method2_tu2_y') , $('.huantu') , null , 1);	
		addDrag ( $ ('.method2_tu3_y') , $('.huantu') , null , 2);	
		addDrag ( $ ('.method2_tu4_y') , $('.huantu') , null  ,3 );	
		
		
		$('.method_btn').onclick = function () {
			window.openPopup($("#design-pop-up"));
		}
		$("#design-pop-up >.close-button").onclick = function () {
			window.closePopup($("#design-pop-up"));
		}
	})
}()