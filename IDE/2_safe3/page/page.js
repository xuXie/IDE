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
		
		$('.safety3_btn1').onclick = function(){
			$('.safety5_show1').style.opacity='0';
			$('.safety5_show2').style.opacity='0';
			$('.safety5_p2').src='2_safe3/images/safety5_p2.png';
			$('.safety5_p2').style.top='214px';
			$('.head').style.display='none';
			$('.height').style.display='block';
			TweenMax.to ($('.safety5_show1') , .8 , {opacity:1 ,  delay:.4});
			TweenMax.to ($('.safety5_show2') , .8 , {opacity:1 ,  delay:1.0 , onComplete:function(){
				$('.safety5_p2').src='2_safe3/images/safety1_p3_02.png';
				$('.safety5_p2').style.top='204px';
			}});
			
		}
		$('.safety3_btn2').onclick = function(){
			$('.safety6_show1').style.opacity='0';
			$('.safety6_show2').style.opacity='0';
			$('.safety5_p2').src='2_safe3/images/safety5_p2.png';
			$('.safety5_p2').style.top='214px';
			$('.height').style.display='none';
			$('.head').style.display='block';
			TweenMax.to ($('.safety6_show1') , .8 , {opacity:1 ,  delay:.4});
			TweenMax.to ($('.safety6_show2') , .8 , {opacity:1 ,  delay:1.0 , onComplete:function(){
				$('.safety5_p2').src='2_safe3/images/safety1_p3_02.png';
				$('.safety5_p2').style.top='204px';
			}});
		}
		$('.safety3_btn1').onclick();
		
		$('.status4_research').onclick = function () {
			window.openPopup($("#design-pop-up"));
		}
		$("#design-pop-up >.close-button").onclick = function () {
			window.closePopup($("#design-pop-up"));
		}
	})
}()