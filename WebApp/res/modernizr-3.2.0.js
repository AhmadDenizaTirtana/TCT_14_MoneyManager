/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-input-inputtypes !*/
!function(e,t,n){function i(e,t){return typeof e===t}function a(){var e,t,n,a,o,l,u;for(var p in s)if(s.hasOwnProperty(p)){if(e=[],t=s[p],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)l=e[o],u=l.split("."),1===u.length?Modernizr[u[0]]=a:(!Modernizr[u[0]]||Modernizr[u[0]]instanceof Boolean||(Modernizr[u[0]]=new Boolean(Modernizr[u[0]])),Modernizr[u[0]][u[1]]=a),r.push((a?"":"no-")+u.join("-"))}}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):p?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var s=[],l={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var r=[],u=t.documentElement,p="svg"===u.nodeName.toLowerCase(),c=o("input"),f="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),d={};Modernizr.input=function(t){for(var n=0,i=t.length;i>n;n++)d[t[n]]=!!(t[n]in c);return d.list&&(d.list=!(!o("datalist")||!e.HTMLDataListElement)),d}(f);var m="search tel url email datetime date month week time datetime-local number range color".split(" "),h={};Modernizr.inputtypes=function(e){for(var i,a,o,s=e.length,l="1)",r=0;s>r;r++)c.setAttribute("type",i=e[r]),o="text"!==c.type&&"style"in c,o&&(c.value=l,c.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&c.style.WebkitAppearance!==n?(u.appendChild(c),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(c,null).WebkitAppearance&&0!==c.offsetHeight,u.removeChild(c)):/^(search|tel)$/.test(i)||(o=/^(url|email)$/.test(i)?c.checkValidity&&c.checkValidity()===!1:c.value!=l)),h[e[r]]=!!o;return h}(m),a(),delete l.addTest,delete l.addAsyncTest;for(var g=0;g<Modernizr._q.length;g++)Modernizr._q[g]();e.Modernizr=Modernizr}(window,document);