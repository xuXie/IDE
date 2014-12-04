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
		
		$('.fat_btn').onclick = function(){
			$('.safety2_show1').style.opacity='0';
			$('.safety2_show2').style.opacity='0';
			$('.safety2_p2').src='2_safe2/images/safety2_p2.png';
			$('.safety2_p2').style.top='214px';
			$('.Lactose').style.display='none';
			$('.Protein').style.display='none';
			$('.fat').style.display='block';
			$('#safety2_btn').style.backgroundPosition='0 0';
			TweenMax.to ($('.safety2_show1') , .4 , {opacity:1 ,  delay:.4});
			TweenMax.to ($('.safety2_show2') , .6 , {opacity:1 ,  delay:1.0 , onComplete:function(){
				$('.safety2_p2').src='2_safe2/images/safety1_p3_02.png';
				$('.safety2_p2').style.top='204px';
			}});
			
		}
		$('.Protein_btn').onclick = function(){
			$('.safety3_show1').style.opacity='0';
			$('.safety3_show2').style.opacity='0';
			$('.safety2_p2').src='2_safe2/images/safety2_p2.png';
			$('.safety2_p2').style.top='214px';
			$('.fat').style.display='none';
			$('.Lactose').style.display='none';
			$('.Protein').style.display='block';
			$('#safety2_btn').style.backgroundPosition='0 -34px';
			TweenMax.to ($('.safety3_show1') , .4 , {opacity:1 ,  delay:.4});
			TweenMax.to ($('.safety3_show2') , .6 , {opacity:1 ,  delay:1.0 , onComplete:function(){
				$('.safety2_p2').src='2_safe2/images/safety1_p3_02.png';
				$('.safety2_p2').style.top='204px';
			}});
		}
		$('.Lactose_btn').onclick = function(){
			$('.safety4_show1').style.opacity='0';
			$('.safety4_show2').style.opacity='0';
			$('.safety2_p2').src='2_safe2/images/safety2_p2.png';
			$('.safety2_p2').style.top='214px';
			$('.fat').style.display='none';
			$('.Protein').style.display='none';
			$('.Lactose').style.display='block';
			$('#safety2_btn').style.backgroundPosition='0 -68px';
			TweenMax.to ($('.safety4_show1') , .4 , {opacity:1 ,  delay:.4});
			TweenMax.to ($('.safety4_show2') , .6 , {opacity:1 ,  delay:1.0 , onComplete:function(){
				$('.safety2_p2').src='2_safe2/images/safety1_p3_02.png';
				$('.safety2_p2').style.top='204px';
			}});
		}
		$('.fat_btn').onclick();
		
		$('.status4_research').onclick = function () {
			window.openPopup($("#design-pop-up"));
		}
		$("#design-pop-up >.close-button").onclick = function () {
			window.closePopup($("#design-pop-up"));
		}
	})
}()