(function() {
	window.pageName="0.1",
	window.previousPageName=null,
	window.nextPageName=null,
	window.swipeDisabled=!0;
	var e=function(){
		var e=window.location.pathname;
		return e.substring(0,e.lastIndexOf("/"))
	};
	window.saveVariable("resource-path",e()),
	window.history.length<3&&(window.isBottomMenuBarLocked=!0)
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
		
		var e=$("#continue_btn");
		window.history.length<3&&(e.style.opacity=1,addPressListener(e,{onPressEnd:function(e){
			window.switchToPackage("0.2")
			}
		})),
		new iScroll($("#ssi-wrapper"),{momentum:!0,vScroll:!0,hScroll:!1,hScrollbar:!1,vScrollbar:!0,bounce:!0,hideScrollbar:!1})
		})
	}()