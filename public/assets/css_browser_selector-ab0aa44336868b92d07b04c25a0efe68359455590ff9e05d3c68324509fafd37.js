function css_browser_selector(e,n){var t=document.documentElement,i=[];n=n?n:"",uaInfo.ua=e.toLowerCase(),i=i.concat(uaInfo.getBrowser()),i=i.concat(uaInfo.getPlatform()),i=i.concat(uaInfo.getMobile()),i=i.concat(uaInfo.getIpadApp()),i=i.concat(uaInfo.getLang()),i=i.concat(["js"]),i=i.concat(screenInfo.getPixelRatio()),i=i.concat(screenInfo.getInfo());var o=function(){t.className=t.className.replace(/ ?orientation_\w+/g,"").replace(/ [min|max|cl]+[w|h]_\d+/g,""),t.className=t.className+" "+screenInfo.getInfo().join(" ")};window.addEventListener("resize",o),window.addEventListener("orientationchange",o);var a=dataUriInfo.getImg();return a.onload=a.onerror=function(){t.className+=" "+dataUriInfo.checkSupport().join(" ")},i=i.filter(function(e){return e}),i[0]=n?n+i[0]:i[0],t.className=i.join(" "+n),t.className}var uaInfo={ua:"",is:function(e){return RegExp(e,"i").test(uaInfo.ua)},version:function(e,n){n=n.replace(".","_");for(var t=n.indexOf("_"),i="";t>0;)i+=" "+e+n.substring(0,t),t=n.indexOf("_",t+1);return i+=" "+e+n},getBrowser:function(){var e="gecko",n="webkit",t="chrome",i="firefox",o="safari",a="opera",r="android",s="blackberry",d="device_",c=uaInfo.ua,p=uaInfo.is;return[!/opera|webtv/i.test(c)&&/msie\s(\d+)/.test(c)?"ie ie"+(/trident\/4\.0/.test(c)?"8":RegExp.$1):p("firefox/")?e+" "+i+(/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(c)?" "+i+RegExp.$2+" "+i+RegExp.$2+"_"+RegExp.$4:""):p("gecko/")?e:p("opera")?a+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(c)?" "+a+RegExp.$2+" "+a+RegExp.$2+"_"+RegExp.$4:/opera(\s|\/)(\d+)\.(\d+)/.test(c)?" "+a+RegExp.$2+" "+a+RegExp.$2+"_"+RegExp.$3:""):p("konqueror")?"konqueror":p("blackberry")?s+(/Version\/(\d+)(\.(\d+)+)/i.test(c)?" "+s+RegExp.$1+" "+s+RegExp.$1+RegExp.$2.replace(".","_"):/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(c)?" "+s+RegExp.$2+(RegExp.$3?" "+s+RegExp.$2+RegExp.$3:""):""):p("android")?r+(/Version\/(\d+)(\.(\d+))+/i.test(c)?" "+r+RegExp.$1+" "+r+RegExp.$1+RegExp.$2.replace(".","_"):"")+(/Android (.+); (.+) Build/i.test(c)?" "+d+RegExp.$2.replace(/ /g,"_").replace(/-/g,"_"):""):p("chrome")?n+" "+t+(/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(c)?" "+t+RegExp.$2+(RegExp.$4>0?" "+t+RegExp.$2+"_"+RegExp.$4:""):""):p("iron")?n+" iron":p("applewebkit/")?n+" "+o+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(c)?" "+o+RegExp.$2+" "+o+RegExp.$2+RegExp.$3.replace(".","_"):/ Safari\/(\d+)/i.test(c)?"419"==RegExp.$1||"417"==RegExp.$1||"416"==RegExp.$1||"412"==RegExp.$1?" "+o+"2_0":"312"==RegExp.$1?" "+o+"1_3":"125"==RegExp.$1?" "+o+"1_2":"85"==RegExp.$1?" "+o+"1_0":"":""):p("mozilla/")?e:""]},getPlatform:function(){var e=uaInfo.ua,n=uaInfo.version,t=uaInfo.is;return[t("j2me")?"j2me":t("ipad|ipod|iphone")?(/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(e)?"ios"+n("ios",RegExp.$2):"")+" "+(/(ip(ad|od|hone))/gi.test(e)?RegExp.$1:""):t("playbook")?"playbook":t("kindle|silk")?"kindle":t("playbook")?"playbook":t("mac")?"mac"+(/mac os x ((\d+)[.|_](\d+))/.test(e)?" mac"+RegExp.$2+" mac"+RegExp.$1.replace(".","_"):""):t("win")?"win"+(t("windows nt 6.2")?" win8":t("windows nt 6.1")?" win7":t("windows nt 6.0")?" vista":t("windows nt 5.2")||t("windows nt 5.1")?" win_xp":t("windows nt 5.0")?" win_2k":t("windows nt 4.0")||t("WinNT4.0")?" win_nt":""):t("freebsd")?"freebsd":t("x11|linux")?"linux":""]},getMobile:function(){var e=uaInfo.is;return[e("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?"mobile":""]},getIpadApp:function(){var e=uaInfo.is;return[e("ipad|iphone|ipod")&&!e("safari")?"ipad_app":""]},getLang:function(){var e=uaInfo.ua;return[/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(e)?("lang_"+RegExp.$2).replace("-","_")+(""!=RegExp.$3?(" lang_"+RegExp.$1).replace("-","_"):""):""]}},screenInfo={width:(window.outerWidth||html.clientWidth)-15,height:window.outerHeight||html.clientHeight,screens:[0,768,980,1200],screenSize:function(){screenInfo.width=(window.outerWidth||html.clientWidth)-15,screenInfo.height=window.outerHeight||html.clientHeight;for(var e=screenInfo.screens,n=e.length,t=[];n--;)if(screenInfo.width>=e[n]){n&&t.push("minw_"+e[n]),2>=n&&t.push("maxw_"+(e[n+1]-1));break}return t},getOrientation:function(){return screenInfo.width<screenInfo.height?["orientation_portrait"]:["orientation_landscape"]},getInfo:function(){var e=[];return e=e.concat(screenInfo.screenSize()),e=e.concat(screenInfo.getOrientation())},getPixelRatio:function(){var e=[],n=window.devicePixelRatio?window.devicePixelRatio:1;return n>1?(e.push("retina_"+parseInt(n)+"x"),e.push("hidpi")):e.push("no-hidpi"),e}},dataUriInfo={data:new Image,div:document.createElement("div"),isIeLessThan9:!1,getImg:function(){return dataUriInfo.data.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",dataUriInfo.div.innerHTML="<!--[if lt IE 9]><i></i><![endif]-->",dataUriInfo.isIeLessThan9=1==dataUriInfo.div.getElementsByTagName("i").length,dataUriInfo.data},checkSupport:function(){return 1!=dataUriInfo.data.width||1!=dataUriInfo.data.height||dataUriInfo.isIeLessThan9?["no-datauri"]:["datauri"]}},css_browser_selector_ns=css_browser_selector_ns||"";css_browser_selector(navigator.userAgent,css_browser_selector_ns);