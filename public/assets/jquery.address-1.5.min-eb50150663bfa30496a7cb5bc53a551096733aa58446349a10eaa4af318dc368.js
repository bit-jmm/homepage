/*
 * jQuery Address Plugin v1.5
 * http://www.asual.com/jquery/address/
 *
 * Copyright (c) 2009-2010 Rostislav Hristov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2012-11-18 23:51:44 +0200 (Sun, 18 Nov 2012)
 */
!function(t){t.address=function(){var e,r=function(e){return e=t.extend(t.Event(e),function(){for(var e={},r=t.address.parameterNames(),n=0,a=r.length;a>n;n++)e[r[n]]=t.address.parameter(r[n]);return{value:t.address.value(),path:t.address.path(),pathNames:t.address.pathNames(),parameterNames:r,parameters:e,queryString:t.address.queryString()}}.call(t.address)),t(t.address).trigger(e),e},n=function(t){return Array.prototype.slice.call(t)},a=function(){return t().bind.apply(t(t.address),Array.prototype.slice.call(arguments)),t.address},i=function(){return t().unbind.apply(t(t.address),Array.prototype.slice.call(arguments)),t.address},s=function(){return L.pushState&&q.state!==e},o=function(){return("/"+M.pathname.replace(new RegExp(q.state),"")+M.search+(c()?"#"+c():"")).replace(B,"/")},c=function(){var t=M.href.indexOf("#");return-1!=t?p(M.href.substr(t+1),j):""},u=function(){return s()?o():c()},l=function(){return"javascript"},d=function(t){return t=t.toString(),(q.strict&&"/"!=t.substr(0,1)?"/":"")+t},p=function(t,e){return q.crawlable&&e?(""!==t?"!":"")+t:t.replace(/^\!/,"")},h=function(t,e){return parseInt(t.css(e),10)},f=function(){if(!H){var t=u();decodeURI(Y)!=decodeURI(t)&&(O&&7>N?M.reload():(O&&!D&&q.history&&z(y,50),_old=Y,Y=t,g(j)))}},g=function(t){var e=r(I);t=r(t?R:U),z(v,10),(e.isDefaultPrevented()||t.isDefaultPrevented())&&m()},m=function(){Y=_old,s()?L.popState({},"",q.state.replace(/\/$/,"")+(""===Y?"/":Y)):(H=$,T?q.history?M.hash="#"+p(Y,$):M.replace("#"+p(Y,$)):Y!=u()&&(q.history?M.hash="#"+p(Y,$):M.replace("#"+p(Y,$))),O&&!D&&q.history&&z(y,50),T?z(function(){H=j},1):H=j)},v=function(){if("null"!==q.tracker&&q.tracker!==k){var r=t.isFunction(q.tracker)?q.tracker:C[q.tracker],n=(M.pathname+M.search+(t.address&&!s()?t.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,"");t.isFunction(r)?r(n):t.isFunction(C.urchinTracker)?C.urchinTracker(n):C.pageTracker!==e&&t.isFunction(C.pageTracker._trackPageview)?C.pageTracker._trackPageview(n):C._gaq!==e&&t.isFunction(C._gaq.push)&&C._gaq.push(["_trackPageview",decodeURI(n)])}},y=function(){var t=l()+":"+j+";document.open();document.writeln('<html><head><title>"+F.title.replace(/\'/g,"\\'")+"</title><script>var "+E+' = "'+encodeURIComponent(u()).replace(/\'/g,"\\'")+(F.domain!=M.hostname?'";document.domain="'+F.domain:"")+"\";</script></head></html>');document.close();";7>N?P.src=t:P.contentWindow.location.replace(t)},w=function(){if(K&&-1!=Q){var t,e,r=K.substr(Q+1).split("&");for(t=0;t<r.length;t++)e=r[t].split("="),/^(autoUpdate|crawlable|history|strict|wrap)$/.test(e[0])&&(q[e[0]]=isNaN(e[1])?/^(true|yes)$/i.test(e[1]):0!==parseInt(e[1],10)),/^(state|tracker)$/.test(e[0])&&(q[e[0]]=e[1]);K=k}_old=Y,Y=u()},b=function(){if(!J){J=$,w();var n=function(){x.call(this),_.call(this)},a=t("body").ajaxComplete(n);n(),q.wrap&&(t("body > *").wrapAll('<div style="padding:'+(h(a,"marginTop")+h(a,"paddingTop"))+"px "+(h(a,"marginRight")+h(a,"paddingRight"))+"px "+(h(a,"marginBottom")+h(a,"paddingBottom"))+"px "+(h(a,"marginLeft")+h(a,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+E+'" style="height:100%;overflow:auto;position:relative;'+(T&&!window.statusbar.visible?"resize:both;":"")+'" />'),t("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"}),T&&t('<style type="text/css" />').appendTo("head").text("#"+E+"::-webkit-resizer { background-color: #fff; }")),O&&!D&&(n=F.getElementsByTagName("frameset")[0],P=F.createElement((n?"":"i")+"frame"),P.src=l()+":"+j,n?(n.insertAdjacentElement("beforeEnd",P),n[n.cols?"cols":"rows"]+=",0",P.noResize=$,P.frameBorder=P.frameSpacing=0):(P.style.display="none",P.style.width=P.style.height=0,P.tabIndex=-1,F.body.insertAdjacentElement("afterBegin",P)),z(function(){t(P).bind("load",function(){var t=P.contentWindow;_old=Y,Y=t[E]!==e?t[E]:"",Y!=u()&&(g(j),M.hash=p(Y,$))}),P.contentWindow[E]===e&&y()},50)),z(function(){r("init"),g(j)},1),s()||(O&&N>7||!O&&D?C.addEventListener?C.addEventListener(S,f,j):C.attachEvent&&C.attachEvent("on"+S,f):W(f,50)),"state"in window.history&&t(window).trigger("popstate")}},x=function(){var e,r=t("a"),n=r.size(),a=-1,i=function(){++a!=n&&(e=t(r.get(a)),e.is('[rel*="address:"]')&&e.address('[rel*="address:"]'),z(i,1))};z(i,1)},_=function(){if(q.crawlable){var e=M.pathname.replace(/\/$/,"");-1!=t("body").html().indexOf("_escaped_fragment_")&&t('a[href]:not([href^=http]), a[href*="'+document.domain+'"]').each(function(){var r=t(this).attr("href").replace(/^http:/,"").replace(new RegExp(e+"/?$"),"");(""===r||-1!=r.indexOf("_escaped_fragment_"))&&t(this).attr("href","#"+encodeURI(decodeURIComponent(r.replace(/\/(.*)\?_escaped_fragment_=(.*)$/,"!$2"))))})}},k=null,E="jQueryAddress",S="hashchange",I="change",R="internalChange",U="externalChange",$=!0,j=!1,q={autoUpdate:$,crawlable:j,history:$,strict:$,wrap:j},A=t.browser,N=parseFloat(A.version),O=!t.support.opacity,T=A.webkit||A.safari,C=function(){try{return top.document!==e&&top.document.title!==e?top:window}catch(t){return window}}(),F=C.document,L=C.history,M=C.location,W=setInterval,z=setTimeout,B=/\/{2,9}/g;A=navigator.userAgent;var P,D="on"+S in C,K=t("script:last").attr("src"),Q=K?K.indexOf("?"):-1,G=F.title,H=j,J=j,V=$,X=j,Y=u();if(_old=Y,O){N=parseFloat(A.substr(A.indexOf("MSIE")+4)),F.documentMode&&F.documentMode!=N&&(N=8!=F.documentMode?7:8);var Z=F.onpropertychange;F.onpropertychange=function(){Z&&Z.call(F),F.title!=G&&-1!=F.title.indexOf("#"+u())&&(F.title=G)}}if(L.navigationMode&&(L.navigationMode="compatible"),"complete"==document.readyState)var te=setInterval(function(){t.address&&(b(),clearInterval(te))},50);else w(),t(b);return t(window).bind("popstate",function(){decodeURI(Y)!=decodeURI(u())&&(_old=Y,Y=u(),g(j))}).bind("unload",function(){C.removeEventListener?C.removeEventListener(S,f,j):C.detachEvent&&C.detachEvent("on"+S,f)}),{bind:function(){return a.apply(this,n(arguments))},unbind:function(){return i.apply(this,n(arguments))},init:function(){return a.apply(this,["init"].concat(n(arguments)))},change:function(){return a.apply(this,[I].concat(n(arguments)))},internalChange:function(){return a.apply(this,[R].concat(n(arguments)))},externalChange:function(){return a.apply(this,[U].concat(n(arguments)))},baseURL:function(){var t=M.href;return-1!=t.indexOf("#")&&(t=t.substr(0,t.indexOf("#"))),/\/$/.test(t)&&(t=t.substr(0,t.length-1)),t},autoUpdate:function(t){return t!==e?(q.autoUpdate=t,this):q.autoUpdate},crawlable:function(t){return t!==e?(q.crawlable=t,this):q.crawlable},history:function(t){return t!==e?(q.history=t,this):q.history},state:function(t){if(t!==e){q.state=t;var r=o();return q.state!==e&&(L.pushState?"/#/"==r.substr(0,3)&&M.replace(q.state.replace(/^\/$/,"")+r.substr(2)):"/"!=r&&r.replace(/^\/#/,"")!=c()&&z(function(){M.replace(q.state.replace(/^\/$/,"")+"/#"+r)},1)),this}return q.state},strict:function(t){return t!==e?(q.strict=t,this):q.strict},tracker:function(t){return t!==e?(q.tracker=t,this):q.tracker},wrap:function(t){return t!==e?(q.wrap=t,this):q.wrap},update:function(){return X=$,this.value(Y),X=j,this},title:function(t){return t!==e?(z(function(){G=F.title=t,V&&P&&P.contentWindow&&P.contentWindow.document&&(P.contentWindow.document.title=t,V=j)},50),this):F.title},value:function(t){if(t!==e){if(t=d(t),"/"==t&&(t=""),Y==t&&!X)return;return _old=Y,Y=t,(q.autoUpdate||X)&&(g($),s()?L[q.history?"pushState":"replaceState"]({},"",q.state.replace(/\/$/,"")+(""===Y?"/":Y)):(H=$,T?q.history?M.hash="#"+p(Y,$):M.replace("#"+p(Y,$)):Y!=u()&&(q.history?M.hash="#"+p(Y,$):M.replace("#"+p(Y,$))),O&&!D&&q.history&&z(y,50),T?z(function(){H=j},1):H=j)),this}return d(Y)},path:function(t){if(t!==e){var r=this.queryString(),n=this.hash();return this.value(t+(r?"?"+r:"")+(n?"#"+n:"")),this}return d(Y).split("#")[0].split("?")[0]},pathNames:function(){var t=this.path(),e=t.replace(B,"/").split("/");return("/"==t.substr(0,1)||0===t.length)&&e.splice(0,1),"/"==t.substr(t.length-1,1)&&e.splice(e.length-1,1),e},queryString:function(t){if(t!==e){var r=this.hash();return this.value(this.path()+(t?"?"+t:"")+(r?"#"+r:"")),this}return t=Y.split("?"),t.slice(1,t.length).join("?").split("#")[0]},parameter:function(r,n,a){var i,s;if(n!==e){var o=this.parameterNames();for(s=[],n=n===e||n===k?"":n.toString(),i=0;i<o.length;i++){var c=o[i],u=this.parameter(c);"string"==typeof u&&(u=[u]),c==r&&(u=n===k||""===n?[]:a?u.concat([n]):[n]);for(var l=0;l<u.length;l++)s.push(c+"="+u[l])}return-1==t.inArray(r,o)&&n!==k&&""!==n&&s.push(r+"="+n),this.queryString(s.join("&")),this}if(n=this.queryString()){for(a=[],s=n.split("&"),i=0;i<s.length;i++)n=s[i].split("="),n[0]==r&&a.push(n.slice(1).join("="));if(0!==a.length)return 1!=a.length?a:a[0]}},parameterNames:function(){var e=this.queryString(),r=[];if(e&&-1!=e.indexOf("=")){e=e.split("&");for(var n=0;n<e.length;n++){var a=e[n].split("=")[0];-1==t.inArray(a,r)&&r.push(a)}}return r},hash:function(t){return t!==e?(this.value(Y.split("#")[0]+(t?"#"+t:"")),this):(t=Y.split("#"),t.slice(1,t.length).join("#"))}}}(),t.fn.address=function(e){var r;return"string"==typeof e&&(r=e,e=void 0),t(this).attr("address")||t(r?r:this).live("click",function(r){return r.shiftKey||r.ctrlKey||r.metaKey||2==r.which?!0:void(t(this).is("a")&&(r.preventDefault(),r=e?e.call(this):/address:/.test(t(this).attr("rel"))?t(this).attr("rel").split("address:")[1].split(" ")[0]:void 0===t.address.state()||/^\/?$/.test(t.address.state())?t(this).attr("href").replace(/^(#\!?|\.)/,""):t(this).attr("href").replace(new RegExp("^(.*"+t.address.state()+"|\\.)"),""),t.address.value(r)))}).live("submit",function(r){t(this).is("form")&&(r.preventDefault(),r=t(this).attr("action"),r=e?e.call(this):(-1!=r.indexOf("?")?r.replace(/&$/,""):r+"?")+t(this).serialize(),t.address.value(r))}).attr("address",!0),this}}(jQuery);