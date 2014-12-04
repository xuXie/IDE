(function(){var s=Math,y=function(e){return e>>0},t=/webkit/i.test(navigator.appVersion)?"webkit":/firefox/i.test(navigator.userAgent)?"Moz":"opera"in window?"O":"",e=/android/gi.test(navigator.appVersion),p=/iphone|ipad/gi.test(navigator.appVersion),b=/playbook/gi.test(navigator.appVersion),f=/hp-tablet/gi.test(navigator.appVersion),c="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,n="ontouchstart"in window&&!f,g=t+"Transform"in document.documentElement.style,v=p||b,u=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,1)}}(),a=function(){return window.cancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),d="onorientationchange"in window?"orientationchange":"resize",w=n?"touchstart":"mousedown",o=n?"touchmove":"mousemove",m=n?"touchend":"mouseup",r=n?"touchcancel":"mouseup",l=t=="Moz"?"DOMMouseScroll":"mousewheel",E="translate"+(c?"3d(":"("),h=c?",0)":")",i=function(s,u){var i=this,r=document,o;i.wrapper=typeof s=="object"?s:r.getElementById(s),i.wrapper.style.overflow="hidden",i.scroller=i.wrapper.children[0],i.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:e,hideScrollbar:p,fadeScrollbar:p&&c,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(e){},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null},i.zoom&&e&&(E="translate(",h=")");for(o in u)i.options[o]=u[o];i.x=i.options.x,i.y=i.options.y,i.options.useTransform=g?i.options.useTransform:!1,i.options.hScrollbar=i.options.hScroll&&i.options.hScrollbar,i.options.vScrollbar=i.options.vScroll&&i.options.vScrollbar,i.options.zoom=i.options.useTransform&&i.options.zoom,i.options.useTransition=v&&i.options.useTransition,i.scroller.style[t+"TransitionProperty"]=i.options.useTransform?"-"+t.toLowerCase()+"-transform":"top left",i.scroller.style[t+"TransitionDuration"]="0",i.scroller.style[t+"TransformOrigin"]="0 0",i.options.useTransition&&(i.scroller.style[t+"TransitionTimingFunction"]="cubic-bezier(0.33,0.66,0.66,1)"),i.options.useTransform?i.scroller.style[t+"Transform"]=E+i.x+"px,"+i.y+"px"+h:i.scroller.style.cssText+=";position:absolute;top:"+i.y+"px;left:"+i.x+"px",i.options.useTransition&&(i.options.fixedScrollbar=!0),i.refresh(),i._bind(d,window),i._bind(w),n||(i._bind("mouseout",i.wrapper),i.options.wheelAction!="none"&&i._bind(l)),i.options.checkDOMChanges&&(i.checkDOMTime=setInterval(function(){i._checkDOMChanges()},500))};i.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(e){var t=this;switch(e.type){case w:if(!n&&e.button!==0)return;t._start(e);break;case o:t._move(e);break;case m:case r:t._end(e);break;case d:t._resize();break;case l:t._wheel(e);break;case"mouseout":t._mouseout(e);break;case"webkitTransitionEnd":t._transitionEnd(e)}},_checkDOMChanges:function(){if(this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale)return;this.refresh()},_scrollbar:function(i){var n=this,e=document,r;if(!n[i+"Scrollbar"]){n[i+"ScrollbarWrapper"]&&(g&&(n[i+"ScrollbarIndicator"].style[t+"Transform"]=""),n[i+"ScrollbarWrapper"].parentNode.removeChild(n[i+"ScrollbarWrapper"]),n[i+"ScrollbarWrapper"]=null,n[i+"ScrollbarIndicator"]=null);return}n[i+"ScrollbarWrapper"]||(r=e.createElement("div"),n.options.scrollbarClass?r.className=n.options.scrollbarClass+i.toUpperCase():r.style.cssText="position:absolute;"+(i=="h"?"height:7px;bottom:1px;left:2px;right:"+(n.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(n.hScrollbar?"7":"2")+"px;top:2px;right:1px;"),r.style.cssText+=";pointer-events:none;-"+t+"-transition-property:opacity;-"+t+"-transition-duration:"+(n.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(n.options.hideScrollbar?"0":"1"),n.wrapper.appendChild(r),n[i+"ScrollbarWrapper"]=r,r=e.createElement("div"),n.options.scrollbarClass||(r.style.cssText="position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-"+t+"-background-clip:padding-box;-"+t+"-box-sizing:border-box;"+(i=="h"?"height:100%":"width:7px")+";-"+t+"-border-radius:3px;border-radius:3px"),r.style.cssText+=";pointer-events:none;-"+t+"-transition-property:-"+t+"-transform;-"+t+"-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-"+t+"-transition-duration:0;-"+t+"-transform:"+E+"0,0"+h,n.options.useTransition&&(r.style.cssText+=";-"+t+"-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),n[i+"ScrollbarWrapper"].appendChild(r),n[i+"ScrollbarIndicator"]=r),i=="h"?(n.hScrollbarSize=n.hScrollbarWrapper.clientWidth,n.hScrollbarIndicatorSize=s.max(y(n.hScrollbarSize*n.hScrollbarSize/n.scrollerW),8),n.hScrollbarIndicator.style.width=n.hScrollbarIndicatorSize+"px",n.hScrollbarMaxScroll=n.hScrollbarSize-n.hScrollbarIndicatorSize,n.hScrollbarProp=n.hScrollbarMaxScroll/n.maxScrollX):(n.vScrollbarSize=n.vScrollbarWrapper.clientHeight,n.vScrollbarIndicatorSize=s.max(y(n.vScrollbarSize*n.vScrollbarSize/n.scrollerH),8),n.vScrollbarIndicator.style.height=n.vScrollbarIndicatorSize+"px",n.vScrollbarMaxScroll=n.vScrollbarSize-n.vScrollbarIndicatorSize,n.vScrollbarProp=n.vScrollbarMaxScroll/n.maxScrollY),n._scrollbarPos(i,!0)},_resize:function(){var t=this;setTimeout(function(){t.refresh()},e?200:0)},_pos:function(e,n){e=this.hScroll?e:0,n=this.vScroll?n:0,this.options.useTransform?this.scroller.style[t+"Transform"]=E+e+"px,"+n+"px"+h+" scale("+this.scale+")":(e=y(e),n=y(n),this.scroller.style.left=e+"px",this.scroller.style.top=n+"px"),this.x=e,this.y=n,this._scrollbarPos("h"),this._scrollbarPos("v")},_scrollbarPos:function(s,n){var r=this,e=s=="h"?r.x:r.y,i;if(!r[s+"Scrollbar"])return;e=r[s+"ScrollbarProp"]*e,e<0?(r.options.fixedScrollbar||(i=r[s+"ScrollbarIndicatorSize"]+y(e*3),i<8&&(i=8),r[s+"ScrollbarIndicator"].style[s=="h"?"width":"height"]=i+"px"),e=0):e>r[s+"ScrollbarMaxScroll"]&&(r.options.fixedScrollbar?e=r[s+"ScrollbarMaxScroll"]:(i=r[s+"ScrollbarIndicatorSize"]-y((e-r[s+"ScrollbarMaxScroll"])*3),i<8&&(i=8),r[s+"ScrollbarIndicator"].style[s=="h"?"width":"height"]=i+"px",e=r[s+"ScrollbarMaxScroll"]+(r[s+"ScrollbarIndicatorSize"]-i))),r[s+"ScrollbarWrapper"].style[t+"TransitionDelay"]="0",r[s+"ScrollbarWrapper"].style.opacity=n&&r.options.hideScrollbar?"0":"1",r[s+"ScrollbarIndicator"].style[t+"Transform"]=E+(s=="h"?e+"px,0":"0,"+e+"px")+h},_getTouches:function(e,n){var t,r;this.touchIdentefier||(this.touchIdentefier=e.changedTouches[0].identifier),r=this.touchIdentefier,n&&delete this.touchIdentefier;for(t=0;t<e.changedTouches.length;t++)if(r===e.changedTouches[t].identifier)return e.changedTouches[t]},_start:function(i){var s=this,l=n?this._getTouches(i):i,f,e,t,u,a;if(!s.enabled)return;s.options.onBeforeScrollStart&&s.options.onBeforeScrollStart.call(s,i),(s.options.useTransition||s.options.zoom)&&s._transitionTime(0),s.moved=!1,s.animating=!1,s.zoomed=!1,s.distX=0,s.distY=0,s.absDistX=0,s.absDistY=0,s.dirX=0,s.dirY=0,s.absStartX=s.x,s.absStartY=s.y,s.startX=s.x,s.startY=s.y,s.pointX=l.pageX,s.pointY=l.pageY,s.startTime=i.timeStamp||Date.now(),s.options.onScrollStart&&s.options.onScrollStart.call(s,i),s._bind(o),s._bind(m),s._bind(r)},_move:function(r){var i=this,t=n?this._getTouches(r):r,a=t.pageX-i.pointX,f=t.pageY-i.pointY,h=i.x+a,e=i.y+f,u,l,c,o=r.timeStamp||Date.now();i.options.onBeforeScrollMove&&i.options.onBeforeScrollMove.call(i,r),i.pointX=t.pageX,i.pointY=t.pageY;if(h>0||h<i.maxScrollX)h=i.options.bounce?i.x+a/2:h>=0||i.maxScrollX>=0?0:i.maxScrollX;if(e>i.minScrollY||e<i.maxScrollY)e=i.options.bounce?i.y+f/2:e>=i.minScrollY||i.maxScrollY>=0?i.minScrollY:i.maxScrollY;if(i.absDistX<6&&i.absDistY<6){i.distX+=a,i.distY+=f,i.absDistX=s.abs(i.distX),i.absDistY=s.abs(i.distY);return}i.options.lockDirection&&(i.absDistX>i.absDistY+5?(e=i.y,f=0):i.absDistY>i.absDistX+5&&(h=i.x,a=0)),i.moved=!0,i._pos(h,e),i.dirX=a>0?-1:a<0?1:0,i.dirY=f>0?-1:f<0?1:0,o-i.startTime>300&&(i.startTime=o,i.startX=i.x,i.startY=i.y),i.options.onScrollMove&&i.options.onScrollMove.call(i,r)},_end:function(c){var l=this,e=n?this._getTouches(c,!0):c,f,i,w={dist:0,time:0},S={dist:0,time:0},v=(c.timeStamp||Date.now())-l.startTime,a=l.x,p=l.y,u,d,x,g,b;l._unbind(o),l._unbind(m),l._unbind(r),l.options.onBeforeScrollEnd&&l.options.onBeforeScrollEnd.call(l,c);if(l.zoomed){b=l.scale*l.lastScale,b=Math.max(l.options.zoomMin,b),b=Math.min(l.options.zoomMax,b),l.lastScale=b/l.scale,l.scale=b,l.x=l.originX-l.originX*l.lastScale+l.x,l.y=l.originY-l.originY*l.lastScale+l.y,l.scroller.style[t+"TransitionDuration"]="200ms",l.scroller.style[t+"Transform"]=E+l.x+"px,"+l.y+"px"+h+" scale("+l.scale+")",l.zoomed=!1,l.refresh(),l.options.onZoomEnd&&l.options.onZoomEnd.call(l,c);return}if(!l.moved){n&&(l.doubleTapTimer&&l.options.zoom?(clearTimeout(l.doubleTapTimer),l.doubleTapTimer=null,l.options.onZoomStart&&l.options.onZoomStart.call(l,c),l.zoom(l.pointX,l.pointY,l.scale==l.options.zoomMin?l.options.doubleTapZoom:l.options.zoomMin),l.options.onZoomEnd&&setTimeout(function(){l.options.onZoomEnd.call(l,c)},200)):l.doubleTapTimer=setTimeout(function(){l.doubleTapTimer=null,f=e.target;while(f.nodeType!=1)f=f.parentNode;f.tagName!="SELECT"&&f.tagName!="INPUT"&&f.tagName!="TEXTAREA"&&(i=document.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,c.view,1,e.screenX,e.screenY,e.clientX,e.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,0,null),i._fake=!0,f.dispatchEvent(i))},l.options.zoom?250:0)),l._resetPos(200),l.options.onTouchEnd&&l.options.onTouchEnd.call(l,c);return}if(v<300&&l.options.momentum){w=a?l._momentum(a-l.startX,v,-l.x,l.scrollerW-l.wrapperW+l.x,l.options.bounce?l.wrapperW:0):w,S=p?l._momentum(p-l.startY,v,-l.y,l.maxScrollY<0?l.scrollerH-l.wrapperH+l.y-l.minScrollY:0,l.options.bounce?l.wrapperH:0):S,a=l.x+w.dist,p=l.y+S.dist;if(l.x>0&&a>0||l.x<l.maxScrollX&&a<l.maxScrollX)w={dist:0,time:0};if(l.y>l.minScrollY&&p>l.minScrollY||l.y<l.maxScrollY&&p<l.maxScrollY)S={dist:0,time:0}}if(w.dist||S.dist){x=s.max(s.max(w.time,S.time),10),l.options.snap&&(u=a-l.absStartX,d=p-l.absStartY,s.abs(u)<l.options.snapThreshold&&s.abs(d)<l.options.snapThreshold?l.scrollTo(l.absStartX,l.absStartY,200):(g=l._snap(a,p),a=g.x,p=g.y,x=s.max(g.time,x))),l.scrollTo(y(a),y(p),x),l.options.onTouchEnd&&l.options.onTouchEnd.call(l,c);return}if(l.options.snap){u=a-l.absStartX,d=p-l.absStartY,s.abs(u)<l.options.snapThreshold&&s.abs(d)<l.options.snapThreshold?l.scrollTo(l.absStartX,l.absStartY,200):(g=l._snap(l.x,l.y),(g.x!=l.x||g.y!=l.y)&&l.scrollTo(g.x,g.y,g.time)),l.options.onTouchEnd&&l.options.onTouchEnd.call(l,c);return}l._resetPos(200),l.options.onTouchEnd&&l.options.onTouchEnd.call(l,c)},_resetPos:function(n){var i=this,e=i.x>=0?0:i.x<i.maxScrollX?i.maxScrollX:i.x,r=i.y>=i.minScrollY||i.maxScrollY>0?i.minScrollY:i.y<i.maxScrollY?i.maxScrollY:i.y;if(e==i.x&&r==i.y){i.moved&&(i.moved=!1,i.options.onScrollEnd&&i.options.onScrollEnd.call(i)),i.hScrollbar&&i.options.hideScrollbar&&(t=="webkit"&&(i.hScrollbarWrapper.style[t+"TransitionDelay"]="300ms"),i.hScrollbarWrapper.style.opacity="0"),i.vScrollbar&&i.options.hideScrollbar&&(t=="webkit"&&(i.vScrollbarWrapper.style[t+"TransitionDelay"]="300ms"),i.vScrollbarWrapper.style.opacity="0");return}i.scrollTo(e,r,n||0)},_wheel:function(t){var r=this,n,i,s,o,e;"wheelDeltaX"in t?(n=t.wheelDeltaX/12,i=t.wheelDeltaY/12):"detail"in t?n=i=-t.detail*3:n=i=-t.wheelDelta;if(r.options.wheelAction=="zoom"){e=r.scale*Math.pow(2,1/3*(i?i/Math.abs(i):0)),e<r.options.zoomMin&&(e=r.options.zoomMin),e>r.options.zoomMax&&(e=r.options.zoomMax),e!=r.scale&&(!r.wheelZoomCount&&r.options.onZoomStart&&r.options.onZoomStart.call(r,t),r.wheelZoomCount++,r.zoom(t.pageX,t.pageY,e,400),setTimeout(function(){r.wheelZoomCount--,!r.wheelZoomCount&&r.options.onZoomEnd&&r.options.onZoomEnd.call(r,t)},400));return}s=r.x+n,o=r.y+i,s>0?s=0:s<r.maxScrollX&&(s=r.maxScrollX),o>r.minScrollY?o=r.minScrollY:o<r.maxScrollY&&(o=r.maxScrollY),r.scrollTo(s,o,0)},_mouseout:function(e){var t=e.relatedTarget;if(!t){this._end(e);return}while(t=t.parentNode)if(t==this.wrapper)return;this._end(e)},_transitionEnd:function(e){var t=this;if(e.target!=t.scroller)return;t._unbind("webkitTransitionEnd"),t._startAni()},_startAni:function(){var e=this,o=e.x,a=e.y,t=Date.now(),n,r,i;if(e.animating)return;if(!e.steps.length){e._resetPos(400);return}n=e.steps.shift(),n.x==o&&n.y==a&&(n.time=0),e.animating=!0,e.moved=!0;if(e.options.useTransition){e._transitionTime(n.time),e._pos(n.x,n.y),e.animating=!1,n.time?e._bind("webkitTransitionEnd"):e._resetPos(0);return}i=function(){var f=Date.now(),l,c;if(f>=t+n.time){e._pos(n.x,n.y),e.animating=!1,e.options.onAnimationEnd&&e.options.onAnimationEnd.call(e),e._startAni();return}f=(f-t)/n.time-1,r=s.sqrt(1-f*f),l=(n.x-o)*r+o,c=(n.y-a)*r+a,e._pos(l,c),e.animating&&(e.aniTime=u(i))},i()},_transitionTime:function(e){e+="ms",this.scroller.style[t+"TransitionDuration"]=e,this.hScrollbar&&(this.hScrollbarIndicator.style[t+"TransitionDuration"]=e),this.vScrollbar&&(this.vScrollbarIndicator.style[t+"TransitionDuration"]=e)},_momentum:function(n,l,i,f,e){var r=6e-4,a=s.abs(n)/l,u=a*a/(2*r),t=0,o=0;return n>0&&u>i?(o=e/(6/(u/a*r)),i+=o,a=a*i/u,u=i):n<0&&u>f&&(o=e/(6/(u/a*r)),f+=o,a=a*f/u,u=f),u*=n<0?-1:1,t=a/r,{dist:u,time:y(t)}},_offset:function(n){var t=-n.offsetLeft,e=-n.offsetTop;while(n=n.offsetParent)t-=n.offsetLeft,e-=n.offsetTop;return n!=this.wrapper&&(t*=this.scale,e*=this.scale),{left:t,top:e}},_snap:function(e,t){var r=this,i,o,n,u,a,f;n=r.pagesX.length-1;for(i=0,o=r.pagesX.length;i<o;i++)if(e>=r.pagesX[i]){n=i;break}n==r.currPageX&&n>0&&r.dirX<0&&n--,e=r.pagesX[n],a=s.abs(e-r.pagesX[r.currPageX]),a=a?s.abs(r.x-e)/a*500:0,r.currPageX=n,n=r.pagesY.length-1;for(i=0;i<n;i++)if(t>=r.pagesY[i]){n=i;break}return n==r.currPageY&&n>0&&r.dirY<0&&n--,t=r.pagesY[n],f=s.abs(t-r.pagesY[r.currPageY]),f=f?s.abs(r.y-t)/f*500:0,r.currPageY=n,u=y(s.max(a,f))||200,{x:e,y:t,time:u}},_bind:function(e,n,t){(n||this.scroller).addEventListener(e,this,!!t)},_unbind:function(e,n,t){(n||this.scroller).removeEventListener(e,this,!!t)},destroy:function(){var e=this;e.scroller.style[t+"Transform"]="",e.hScrollbar=!1,e.vScrollbar=!1,e._scrollbar("h"),e._scrollbar("v"),e._unbind(d,window),e._unbind(w),e._unbind(o),e._unbind(m),e._unbind(r),e.options.hasTouch&&(e._unbind("mouseout",e.wrapper),e._unbind(l)),e.options.useTransition&&e._unbind("webkitTransitionEnd"),e.options.checkDOMChanges&&clearInterval(e.checkDOMTime),e.options.onDestroy&&e.options.onDestroy.call(e)},refresh:function(){var i=this,n,s,u,o,e=0,r=0;i.scale<i.options.zoomMin&&(i.scale=i.options.zoomMin),i.wrapperW=i.wrapper.clientWidth||1,i.wrapperH=i.wrapper.clientHeight||1,i.minScrollY=-i.options.topOffset||0,i.scrollerW=y(i.scroller.offsetWidth*i.scale),i.scrollerH=y((i.scroller.offsetHeight+i.minScrollY)*i.scale),i.maxScrollX=i.wrapperW-i.scrollerW,i.maxScrollY=i.wrapperH-i.scrollerH+i.minScrollY,i.dirX=0,i.dirY=0,i.options.onRefresh&&i.options.onRefresh.call(i),i.hScroll=i.options.hScroll&&i.maxScrollX<0,i.vScroll=i.options.vScroll&&(!i.options.bounceLock&&!i.hScroll||i.scrollerH>i.wrapperH),i.hScrollbar=i.hScroll&&i.options.hScrollbar,i.vScrollbar=i.vScroll&&i.options.vScrollbar&&i.scrollerH>i.wrapperH,n=i._offset(i.wrapper),i.wrapperOffsetLeft=-n.left,i.wrapperOffsetTop=-n.top;if(typeof i.options.snap=="string"){i.pagesX=[],i.pagesY=[],o=i.scroller.querySelectorAll(i.options.snap);for(s=0,u=o.length;s<u;s++)e=i._offset(o[s]),e.left+=i.wrapperOffsetLeft,e.top+=i.wrapperOffsetTop,i.pagesX[s]=e.left<i.maxScrollX?i.maxScrollX:e.left*i.scale,i.pagesY[s]=e.top<i.maxScrollY?i.maxScrollY:e.top*i.scale}else if(i.options.snap){i.pagesX=[];while(e>=i.maxScrollX)i.pagesX[r]=e,e-=i.wrapperW,r++;i.maxScrollX%i.wrapperW&&(i.pagesX[i.pagesX.length]=i.maxScrollX-i.pagesX[i.pagesX.length-1]+i.pagesX[i.pagesX.length-1]),e=0,r=0,i.pagesY=[];while(e>=i.maxScrollY)i.pagesY[r]=e,e-=i.wrapperH,r++;i.maxScrollY%i.wrapperH&&(i.pagesY[i.pagesY.length]=i.maxScrollY-i.pagesY[i.pagesY.length-1]+i.pagesY[i.pagesY.length-1])}i._scrollbar("h"),i._scrollbar("v"),i.zoomed||(i.scroller.style[t+"TransitionDuration"]="0",i._resetPos(200))},scrollTo:function(u,e,t,n){var r=this,i=u,s,o;r.stop(),i.length||(i=[{x:u,y:e,time:t,relative:n}]);for(s=0,o=i.length;s<o;s++)i[s].relative&&(i[s].x=r.x-i[s].x,i[s].y=r.y-i[s].y),r.steps.push({x:i[s].x,y:i[s].y,time:i[s].time||0});r._startAni()},scrollToElement:function(r,t){var n=this,e;r=r.nodeType?r:n.scroller.querySelector(r);if(!r)return;e=n._offset(r),e.left+=n.wrapperOffsetLeft,e.top+=n.wrapperOffsetTop,e.left=e.left>0?0:e.left<n.maxScrollX?n.maxScrollX:e.left,e.top=e.top>n.minScrollY?n.minScrollY:e.top<n.maxScrollY?n.maxScrollY:e.top,t=t===undefined?s.max(s.abs(e.left)*2,s.abs(e.top)*2):t,n.scrollTo(e.left,e.top,t)},scrollToPage:function(r,i,t){var n=this,s,e;n.options.onScrollStart&&n.options.onScrollStart.call(n),n.options.snap?(r=r=="next"?n.currPageX+1:r=="prev"?n.currPageX-1:r,i=i=="next"?n.currPageY+1:i=="prev"?n.currPageY-1:i,r=r<0?0:r>n.pagesX.length-1?n.pagesX.length-1:r,i=i<0?0:i>n.pagesY.length-1?n.pagesY.length-1:i,n.currPageX=r,n.currPageY=i,s=n.pagesX[r],e=n.pagesY[i]):(s=-n.wrapperW*r,e=-n.wrapperH*i,s<n.maxScrollX&&(s=n.maxScrollX),e<n.maxScrollY&&(e=n.maxScrollY)),n.scrollTo(s,e,t||400)},disable:function(){this.stop(),this._resetPos(0),this.enabled=!1,this._unbind(o),this._unbind(m),this._unbind(r)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind("webkitTransitionEnd"):a(this.aniTime),this.steps=[],this.moved=!1,this.animating=!1},zoom:function(o,e,n,r){var s=this,i=n/s.scale;if(!s.options.useTransform)return;s.zoomed=!0,r=r===undefined?200:r,o=o-s.wrapperOffsetLeft-s.x,e=e-s.wrapperOffsetTop-s.y,s.x=o-o*i+s.x,s.y=e-e*i+s.y,s.scale=n,s.refresh(),s.x=s.x>0?0:s.x<s.maxScrollX?s.maxScrollX:s.x,s.y=s.y>s.minScrollY?s.minScrollY:s.y<s.maxScrollY?s.maxScrollY:s.y,s.scroller.style[t+"TransitionDuration"]=r+"ms",s.scroller.style[t+"Transform"]=E+s.x+"px,"+s.y+"px"+h+" scale("+n+")",s.zoomed=!1},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}},typeof exports!="undefined"?exports.iScroll=i:window.iScroll=i})()