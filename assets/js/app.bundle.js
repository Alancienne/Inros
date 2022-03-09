/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return n={134:function(t,e,n){"use strict";n.d(e,{default:function(){return r}});var e=n(279),i=n.n(e),e=n(370),a=n.n(e),e=n(817),o=n.n(e);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function e(t){!function(t){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.resolveOptions(t),this.initSelection()}var t,n,r;return t=e,(n=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";t=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=o()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==c(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}])&&u(t.prototype,n),r&&u(t,r),e}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=p(n);return t=r?(t=p(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==s(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){t="data-clipboard-".concat(t);if(e.hasAttribute(t))return e.getAttribute(t)}var r=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(o,i());var t,e,n,r=d(o);function o(t,e){var n;return function(t){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(n=r.call(this)).resolveOptions(e),n.listenClick(t),n}return t=o,n=[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof t?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===s(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){t=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){t=y("target",t);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&f(t.prototype,e),n&&f(t,n),o}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var a=n(828);function i(t,e,n,r,o){var i=function(e,n,t,r){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&r.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}t.exports=function(t,e,n,r,o){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,r,o)}))}},879:function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var l=n(879),s=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!l.string(e))throw new TypeError("Second argument must be a String");if(!l.fn(n))throw new TypeError("Third argument must be a Function");if(l.node(t))return c=e,u=n,(a=t).addEventListener(c,u),{destroy:function(){a.removeEventListener(c,u)}};if(l.nodeList(t))return r=t,o=e,i=n,Array.prototype.forEach.call(r,function(t){t.addEventListener(o,i)}),{destroy:function(){Array.prototype.forEach.call(r,function(t){t.removeEventListener(o,i)})}};if(l.string(t))return t=t,e=e,n=n,s(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var r,o,i,a,c,u}},817:function(t){t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},o={},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r(134).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={exports:{}};return n[t](e,e.exports,r),e.exports}var n,o});
/*
	disqusLoader.js v1.0
	A JavaScript plugin for lazy-loading Disqus comments widget.
	-
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

;( function( window, document, index )
{
	'use strict';

	var extendObj = function( defaults, options )
		{
			var prop, extended = {};
			for( prop in defaults )
				if( Object.prototype.hasOwnProperty.call( defaults, prop ))
					extended[ prop ] = defaults[ prop ];

			for( prop in options )
				if( Object.prototype.hasOwnProperty.call( options, prop ))
					extended[ prop ] = options[ prop ];

			return extended;
		},
		getOffset = function( el )
		{
			var rect = el.getBoundingClientRect();
			return { top: rect.top + document.body.scrollTop, left: rect.left + document.body.scrollLeft };
		},
		loadScript = function( url, callback )
		{
			var script	 = document.createElement( 'script' );
			script.src	 = url;
			script.async = true;
			script.setAttribute( 'data-timestamp', +new Date());
			script.addEventListener( 'load', function()
			{
				if( typeof callback === 'function' )
					callback();
			});
			( document.head || document.body ).appendChild( script );
		},
		throttle		= function(a,b){var c,d;return function(){var e=this,f=arguments,g=+new Date;c&&g<c+a?(clearTimeout(d),d=setTimeout(function(){c=g,b.apply(e,f)},a)):(c=g,b.apply(e,f))}},

		throttleTO		= false,
		laziness		= false,
		disqusConfig	= false,
		scriptUrl		= false,

		scriptStatus	= 'unloaded',
		instance		= false,

		init = function()
		{
			if( !instance || !document.body.contains( instance ) || instance.disqusLoaderStatus == 'loaded' )
				return true;

			var winST	= window.pageYOffset,
				offset	= getOffset( instance ).top;

			// if the element is too far below || too far above
			if( offset - winST > window.innerHeight * laziness || winST - offset - instance.offsetHeight - ( window.innerHeight * laziness ) > 0 )
				return true;

			var tmp = document.getElementById( 'disqus_thread' );
			if( tmp ) tmp.removeAttribute( 'id' );
			instance.setAttribute( 'id', 'disqus_thread' );
			instance.disqusLoaderStatus = 'loaded';

			if( scriptStatus == 'loaded' )
			{
				DISQUS.reset({ reload: true, config: disqusConfig });
			}
			else // unloaded | loading
			{
				window.disqus_config = disqusConfig;
				if( scriptStatus == 'unloaded' )
				{
					scriptStatus = 'loading';
					loadScript( scriptUrl, function()
					{
						scriptStatus = 'loaded';
					});
				}
			}
		};

	window.addEventListener( 'scroll', throttle( throttleTO, init ));
	window.addEventListener( 'resize', throttle( throttleTO, init ));

	window.disqusLoader = function( element, options )
	{
		options = extendObj(
		{
			laziness:		1,
			throttle:		250,
			scriptUrl:		false,
			disqusConfig:	false,

		}, options );

		laziness		= options.laziness + 1;
		throttleTO		= options.throttle;
		disqusConfig	= options.disqusConfig;
		scriptUrl		= scriptUrl === false ? options.scriptUrl : scriptUrl; // set it only once

		if( typeof element === 'string' )				instance = document.querySelector( element );
		else if( typeof element.length === 'number' )	instance = element[ 0 ];
		else											instance = element;

		if (instance) instance.disqusLoaderStatus = 'unloaded';

		init();
	};

}( window, document, 0 ));

/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).mediumZoom=t()}(this,(function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t=function(e){return"IMG"===e.tagName},o=function(e){return e&&1===e.nodeType},n=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},i=function(e){try{return Array.isArray(e)?e.filter(t):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(t):o(e)?[e].filter(t):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(t):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},r=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},d=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),m=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,a=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+m+"px",d.style.left=n+a+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},m=function(t,o){var n=e({bubbles:!1,cancelable:!1,detail:void 0},o);if("function"==typeof window.CustomEvent)return new CustomEvent(t,n);var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),i};return function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),function t(a){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=window.Promise||function(e){function t(){}e(t,t)},u=function(e){var t=e.target;t!==N?-1!==O.indexOf(t)&&w({target:t}):E()},s=function(){if(!A&&T.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(k-e)>S.scrollOffset&&setTimeout(E,150)}},f=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||E()},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t;if(t.background&&(N.style.background=t.background),t.container&&t.container instanceof Object&&(n.container=e({},S.container,t.container)),t.template){var i=o(t.template)?t.template:document.querySelector(t.template);n.template=i}return S=e({},S,n),O.forEach((function(e){e.dispatchEvent(m("medium-zoom:update",{detail:{zoom:j}}))})),j},g=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(e({},S,o))},v=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,i(t))}),[]);return n.filter((function(e){return-1===O.indexOf(e)})).forEach((function(e){O.push(e),e.classList.add("medium-zoom-image")})),x.forEach((function(e){var t=e.type,o=e.listener,i=e.options;n.forEach((function(e){e.addEventListener(t,o,i)}))})),j},h=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];T.zoomed&&E();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,i(t))}),[]):O;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(m("medium-zoom:detach",{detail:{zoom:j}}))})),O=O.filter((function(e){return-1===n.indexOf(e)})),j},z=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return O.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),x.push({type:"medium-zoom:"+e,listener:t,options:o}),j},y=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return O.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),x=x.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),j},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.target,r=function(){var t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},i=void 0,r=void 0;if(S.container)if(S.container instanceof Object)i=(t=e({},t,S.container)).width-t.left-t.right-2*S.margin,r=t.height-t.top-t.bottom-2*S.margin;else{var d=(o(S.container)?S.container:document.querySelector(S.container)).getBoundingClientRect(),m=d.width,a=d.height,l=d.left,c=d.top;t=e({},t,{width:m,height:a,left:l,top:c})}i=i||t.width-2*S.margin,r=r||t.height-2*S.margin;var u=T.zoomedHd||T.original,s=n(u)?i:u.naturalWidth||i,f=n(u)?r:u.naturalHeight||r,p=u.getBoundingClientRect(),g=p.top,v=p.left,h=p.width,z=p.height,y=Math.min(s,i)/h,b=Math.min(f,r)/z,E=Math.min(y,b),w="scale("+E+") translate3d("+((i-h)/2-v+S.margin+t.left)/E+"px, "+((r-z)/2-g+S.margin+t.top)/E+"px, 0)";T.zoomed.style.transform=w,T.zoomedHd&&(T.zoomedHd.style.transform=w)};return new c((function(e){if(i&&-1===O.indexOf(i))e(j);else{if(T.zoomed)e(j);else{if(i)T.original=i;else{if(!(O.length>0))return void e(j);var t=O;T.original=t[0]}if(T.original.dispatchEvent(m("medium-zoom:open",{detail:{zoom:j}})),k=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A=!0,T.zoomed=d(T.original),document.body.appendChild(N),S.template){var n=o(S.template)?S.template:document.querySelector(S.template);T.template=document.createElement("div"),T.template.appendChild(n.content.cloneNode(!0)),document.body.appendChild(T.template)}if(document.body.appendChild(T.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),T.original.classList.add("medium-zoom-image--hidden"),T.zoomed.classList.add("medium-zoom-image--opened"),T.zoomed.addEventListener("click",E),T.zoomed.addEventListener("transitionend",(function t(){A=!1,T.zoomed.removeEventListener("transitionend",t),T.original.dispatchEvent(m("medium-zoom:opened",{detail:{zoom:j}})),e(j)})),T.original.getAttribute("data-zoom-src")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("srcset"),T.zoomedHd.removeAttribute("sizes"),T.zoomedHd.src=T.zoomed.getAttribute("data-zoom-src"),T.zoomedHd.onerror=function(){clearInterval(a),console.warn("Unable to reach the zoom image target "+T.zoomedHd.src),T.zoomedHd=null,r()};var a=setInterval((function(){T.zoomedHd.complete&&(clearInterval(a),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",E),document.body.appendChild(T.zoomedHd),r())}),10)}else if(T.original.hasAttribute("srcset")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("sizes"),T.zoomedHd.removeAttribute("loading");var l=T.zoomedHd.addEventListener("load",(function(){T.zoomedHd.removeEventListener("load",l),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",E),document.body.appendChild(T.zoomedHd),r()}))}else r()}}}))},E=function(){return new c((function(e){if(!A&&T.original){A=!0,document.body.classList.remove("medium-zoom--opened"),T.zoomed.style.transform="",T.zoomedHd&&(T.zoomedHd.style.transform=""),T.template&&(T.template.style.transition="opacity 150ms",T.template.style.opacity=0),T.original.dispatchEvent(m("medium-zoom:close",{detail:{zoom:j}})),T.zoomed.addEventListener("transitionend",(function t(){T.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(T.zoomed),T.zoomedHd&&document.body.removeChild(T.zoomedHd),document.body.removeChild(N),T.zoomed.classList.remove("medium-zoom-image--opened"),T.template&&document.body.removeChild(T.template),A=!1,T.zoomed.removeEventListener("transitionend",t),T.original.dispatchEvent(m("medium-zoom:closed",{detail:{zoom:j}})),T.original=null,T.zoomed=null,T.zoomedHd=null,T.template=null,e(j)}))}else e(j)}))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return T.original?E():b({target:t})},L=function(){return S},H=function(){return O},C=function(){return T.original},O=[],x=[],A=!1,k=0,S=l,T={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(a)?S=a:(a||"string"==typeof a)&&v(a),S=e({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},S);var N=r(S.background);document.addEventListener("click",u),document.addEventListener("keyup",f),document.addEventListener("scroll",s),window.addEventListener("resize",E);var j={open:b,close:E,toggle:w,update:p,clone:g,attach:v,detach:h,on:z,off:y,getOptions:L,getImages:H,getZoomedImage:C};return j}}));

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reframe=t()}(this,function(){"use strict";function t(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var i=Array(e),o=0,t=0;t<n;t++)for(var r=arguments[t],f=0,d=r.length;f<d;f++,o++)i[o]=r[f];return i}return function(e,s){return void 0===s&&(s="js-reframe"),("string"==typeof e?t(document.querySelectorAll(e)):"length"in e?t(e):[e]).forEach(function(e){var t,n,i,o,r,f,d,l;-1!==e.className.split(" ").indexOf(s)||-1<e.style.width.indexOf("%")||(i=e.getAttribute("height")||e.offsetHeight,o=e.getAttribute("width")||e.offsetWidth,r=("string"==typeof i?parseInt(i):i)/("string"==typeof o?parseInt(o):o)*100,(f=document.createElement("div")).className=s,(d=f.style).position="relative",d.width="100%",d.paddingTop=r+"%",(l=e.style).position="absolute",l.width="100%",l.height="100%",l.left="0",l.top="0",null!==(t=e.parentNode)&&void 0!==t&&t.insertBefore(f,e),null!==(n=e.parentNode)&&void 0!==n&&n.removeChild(e),f.appendChild(e))})}});

/*! SearchinGhost v1.6.2 (https://github.com/gmfmi/searchinGhost#readme) license MIT */
var SearchinGhost=function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r,s;!function(i,r,s){var o;(o=s.define)&&o.amd?o([],(function(){return r})):(o=s.modules)?o[i.toLowerCase()]=r:"object"===n(e)?t.exports=r:s[i]=r}("FlexSearch",function t(e){function i(t,e){var i=e?e.id:t&&t.id;this.id=i||0===i?i:A++,this.init(t,e),a(this,"index",(function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)})),a(this,"length",(function(){return this.index.length}))}function r(t,e,i,n){return this.u!==this.g&&(this.o=this.o.concat(i),this.u++,n&&this.o.length>=n&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(e,this.o),this.F&&this.F(this.o))),this}function s(t,e){for(var i=t.length,n=x(e),r=[],s=0,o=0;s<i;s++){var a=t[s];(n&&e(a)||!n&&!e[a])&&(r[o++]=a)}return r}function o(t,e,i,n,r,s,o,a,h,c){var l;if(i=y(i,o?0:r,a,s,e,h,c),a&&(a=i.page,l=i.next,i=i.result),o)e=this.where(o,null,r,i);else{for(e=i,i=this.l,r=e.length,s=Array(r),o=0;o<r;o++)s[o]=i[e[o]];e=s}return i=e,n&&(x(n)||(1<(E=n.split(":")).length?n=g:(E=E[0],n=p)),i.sort(n)),i=v(a,l,i),this.cache&&this.j.set(t,i),i}function a(t,e,i){Object.defineProperty(t,e,{get:i})}function h(t){return new RegExp(t,"g")}function c(t,e){for(var i=0;i<e.length;i+=2)t=t.replace(e[i],e[i+1]);return t}function l(t,e,i,n,r,s,o,a){return e[i]?e[i]:(r=r?(a-(o||a/1.5))*s+(o||a/1.5)*r:s,e[i]=r,r>=o&&((t=(t=t[a-(r+.5>>0)])[i]||(t[i]=[]))[t.length]=n),r)}function f(t,e){if(t)for(var i=Object.keys(t),n=0,r=i.length;n<r;n++){var s=i[n],o=t[s];if(o)for(var a=0,h=o.length;a<h;a++){if(o[a]===e){1===h?delete t[s]:o.splice(a,1);break}k(o[a])&&f(o[a],e)}}}function u(t){for(var e="",i="",n="",r=0;r<t.length;r++){var s=t[r];s!==i&&(r&&"h"===s?(n="a"===n||"e"===n||"i"===n||"o"===n||"u"===n||"y"===n,(("a"===i||"e"===i||"i"===i||"o"===i||"u"===i||"y"===i)&&n||" "===i)&&(e+=s)):e+=s),n=r===t.length-1?"":t[r+1],i=s}return e}function d(t,e){return 0>(t=t.length-e.length)?1:t?-1:0}function p(t,e){return(t=t[E])<(e=e[E])?-1:t>e?1:0}function g(t,e){for(var i=E.length,n=0;n<i;n++)t=t[E[n]],e=e[E[n]];return t<e?-1:t>e?1:0}function v(t,e,i){return t?{page:t,next:e?""+e:null,result:i}:i}function y(t,e,i,n,r,s,o){var a,h=[];if(!0===i){i="0";var c=""}else c=i&&i.split(":");var l=t.length;if(1<l){var f,u,d,p,g,y,b,x,k,S,I=O(),j=[],E=0,_=!0,L=0;if(c&&(2===c.length?(x=c,c=!1):c=k=parseInt(c[0],10)),o){for(f=O();E<l;E++)if("not"===r[E])for(p=(u=t[E]).length,d=0;d<p;d++)f["@"+u[d]]=1;else b=E+1;if(w(b))return v(i,a,h);E=0}else y=m(r)&&r;for(;E<l;E++){var C=E===(b||l)-1;if(!y||!E)if((d=y||r&&r[E])&&"and"!==d){if("or"!==d)continue;S=!1}else S=s=!0;if(p=(u=t[E]).length){if(_){if(!g){g=u;continue}var A=g.length;for(d=0;d<A;d++){var F="@"+(_=g[d]);o&&f[F]||(I[F]=1,s||(h[L++]=_))}g=null,_=!1}for(F=!1,d=0;d<p;d++){var P="@"+(A=u[d]),D=s?I[P]||0:E;if(!(!D&&!n||o&&f[P]||!s&&I[P]))if(D===E){if(C){if((!k||--k<L)&&(h[L++]=A,e&&L===e))return v(i,L+(c||0),h)}else I[P]=E+1;F=!0}else n&&((P=j[D]||(j[D]=[]))[P.length]=A)}if(S&&!F&&!n)break}else if(S&&!n)return v(i,a,u)}if(g)if(E=g.length,o)for(d=c?parseInt(c,10):0;d<E;d++)f["@"+(t=g[d])]||(h[L++]=t);else h=g;if(n)for(L=h.length,x?(E=parseInt(x[0],10)+1,d=parseInt(x[1],10)+1):(E=j.length,d=0);E--;)if(A=j[E]){for(p=A.length;d<p;d++)if(n=A[d],(!o||!f["@"+n])&&(h[L++]=n,e&&L===e))return v(i,E+":"+d,h);d=0}}else!l||r&&"not"===r[0]||(h=t[0],c&&(c=parseInt(c[0],10)));return e&&(o=h.length,c&&c>o&&(c=0),(a=(c=c||0)+e)<o?h=h.slice(c,a):(a=0,c&&(h=h.slice(c)))),v(i,a,h)}function m(t){return"string"==typeof t}function b(t){return t.constructor===Array}function x(t){return"function"==typeof t}function k(t){return"object"===n(t)}function w(t){return void 0===t}function S(t){for(var e=Array(t),i=0;i<t;i++)e[i]=O();return e}function O(){return Object.create(null)}function I(){var t,e;self.onmessage=function(i){if(i=i.data)if(i.search){var n=e.search(i.content,i.threshold?{limit:i.limit,threshold:i.threshold,where:i.where}:i.limit);self.postMessage({id:t,content:i.content,limit:i.limit,result:n})}else i.add?e.add(i.id,i.content):i.update?e.update(i.id,i.content):i.remove?e.remove(i.id):i.clear?e.clear():i.info?((i=e.info()).worker=t,console.log(i)):i.register&&(t=i.id,i.options.cache=!1,i.options.async=!1,i.options.worker=!1,e=new(e=new Function(i.register.substring(i.register.indexOf("{")+1,i.register.lastIndexOf("}")))())(i.options))}}function j(i,n,r,s){i=e("flexsearch","id"+i,I,(function(t){(t=t.data)&&t.result&&s(t.id,t.content,t.result,t.limit,t.where,t.cursor,t.suggest)}),n);var o=t.toString();return r.id=n,i.postMessage({register:o,options:r,id:n}),i}var E,_={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},L={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},C=[],A=0,F={},P={};i.create=function(t,e){return new i(t,e)},i.registerMatcher=function(t){for(var e in t)t.hasOwnProperty(e)&&C.push(h(e),t[e]);return this},i.registerEncoder=function(t,e){return N[t]=e.bind(N),this},i.registerLanguage=function(t,e){return F[t]=e.filter,P[t]=e.stemmer,this},i.encode=function(t,e){return N[t](e)},i.prototype.init=function(t,e){if(this.v=[],e){var n=e.preset;t=e}else t||(t=_),n=t.preset;if(e={},m(t)?(e=L[t],t={}):n&&(e=L[n]),n=t.worker)if("undefined"==typeof Worker)t.worker=!1,this.m=null;else{var s=parseInt(n,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(s);for(var o=0;o<s;o++)this.m[o]=j(this.id,o,t,r.bind(this))}if(this.f=t.tokenize||e.f||this.f||_.f,this.split=w(n=t.split)?this.split||_.split:m(n)?h(n):n,this.D=t.rtl||this.D||_.D,this.async="undefined"==typeof Promise||w(n=t.async)?this.async||_.async:n,this.g=w(n=t.worker)?this.g||_.g:n,this.threshold=w(n=t.threshold)?e.threshold||this.threshold||_.threshold:n,this.b=w(n=t.resolution)?n=e.b||this.b||_.b:n,n<=this.threshold&&(this.b=this.threshold+1),this.depth="strict"!==this.f||w(n=t.depth)?e.depth||this.depth||_.depth:n,this.w=(n=w(n=t.encode)?e.encode||_.encode:n)&&N[n]&&N[n].bind(N)||(x(n)?n:this.w||!1),(n=t.matcher)&&this.addMatcher(n),n=(e=t.lang)||t.filter){if(m(n)&&(n=F[n]),b(n)){s=this.w,o=O();for(var a=0;a<n.length;a++){var c=s?s(n[a]):n[a];o[c]=1}n=o}this.filter=n}if(n=e||t.stemmer){var l;for(l in e=m(n)?P[n]:n,s=this.w,o=[],e)e.hasOwnProperty(l)&&(a=s?s(l):l,o.push(h(a+"($|\\W)"),s?s(e[l]):e[l]));this.stemmer=l=o}if(this.a=o=(n=t.doc)?function t(e){var i=O();for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];b(r)?i[n]=r.slice(0):k(r)?i[n]=t(r):i[n]=r}return i}(n):this.a||_.a,this.i=S(this.b-(this.threshold||0)),this.h=O(),this.c=O(),o){if(this.l=O(),t.doc=null,l=o.index={},e=o.keys=[],s=o.field,a=o.tag,c=o.store,b(o.id)||(o.id=o.id.split(":")),c){var f=O();if(m(c))f[c]=1;else if(b(c))for(var u=0;u<c.length;u++)f[c[u]]=1;else k(c)&&(f=c);o.store=f}if(a){if(this.G=O(),c=O(),s)if(m(s))c[s]=t;else if(b(s))for(f=0;f<s.length;f++)c[s[f]]=t;else k(s)&&(c=s);for(b(a)||(o.tag=a=[a]),s=0;s<a.length;s++)this.G[a[s]]=O();this.I=a,s=c}var d;if(s)for(b(s)||(k(s)?(d=s,o.field=s=Object.keys(s)):o.field=s=[s]),o=0;o<s.length;o++)b(a=s[o])||(d&&(t=d[a]),e[o]=a,s[o]=a.split(":")),l[a]=new i(t);t.doc=n}return this.B=!0,this.j=!!(this.cache=n=w(n=t.cache)?this.cache||_.cache:n)&&new R(n),this},i.prototype.encode=function(t){return t&&(C.length&&(t=c(t,C)),this.v.length&&(t=c(t,this.v)),this.w&&(t=this.w(t)),this.stemmer&&(t=c(t,this.stemmer))),t},i.prototype.addMatcher=function(t){var e=this.v;for(var i in t)t.hasOwnProperty(i)&&e.push(h(i),t[i]);return this},i.prototype.add=function(t,e,i,n,r){if(this.a&&k(t))return this.A("add",t,e);if(e&&m(e)&&(t||0===t)){var o="@"+t;if(this.c[o]&&!n)return this.update(t,e);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:t,content:e}),this.c[o]=""+this.C,i&&i(),this;if(!r){if(this.async&&"function"!=typeof importScripts){var a=this;return o=new Promise((function(i){setTimeout((function(){a.add(t,e,null,n,!0),a=null,i()}))})),i?(o.then(i),this):o}if(i)return this.add(t,e,null,n,!0),i(),this}if(!(e=this.encode(e)).length)return this;r=x(i=this.f)?i(e):e.split(this.split),this.filter&&(r=s(r,this.filter));var h=O();h._ctx=O();for(var c=r.length,f=this.threshold,u=this.depth,d=this.b,p=this.i,g=this.D,v=0;v<c;v++){var y=r[v];if(y){var b=y.length,w=(g?v+1:c-v)/c,I="";switch(i){case"reverse":case"both":for(var j=b;--j;)l(p,h,I=y[j]+I,t,g?1:(b-j)/b,w,f,d-1);I="";case"forward":for(j=0;j<b;j++)l(p,h,I+=y[j],t,g?(j+1)/b:1,w,f,d-1);break;case"full":for(j=0;j<b;j++)for(var E=(g?j+1:b-j)/b,_=b;_>j;_--)l(p,h,I=y.substring(j,_),t,E,w,f,d-1);break;default:if(b=l(p,h,y,t,1,w,f,d-1),u&&1<c&&b>=f)for(b=h._ctx[y]||(h._ctx[y]=O()),y=this.h[y]||(this.h[y]=S(d-(f||0))),0>(w=v-u)&&(w=0),(I=v+u+1)>c&&(I=c);w<I;w++)w!==v&&l(y,b,r[w],t,0,d-(w<v?v-w:w-v),f,d-1)}}}this.c[o]=1,this.B=!1}return this},i.prototype.A=function(t,e,i){if(b(e)){var n=e.length;if(n--){for(var r=0;r<n;r++)this.A(t,e[r]);return this.A(t,e[n],i)}}else{var s,o=this.a.index,a=this.a.keys,h=this.a.tag;r=this.a.store;var c=this.a.id;n=e;for(var l=0;l<c.length;l++)n=n[c[l]];if("remove"===t&&(delete this.l[n],c=a.length,c--)){for(e=0;e<c;e++)o[a[e]].remove(n);return o[a[c]].remove(n,i)}if(h){for(s=0;s<h.length;s++){var f=h[s],u=e;for(c=f.split(":"),l=0;l<c.length;l++)u=u[c[l]];u="@"+u}s=(s=this.G[f])[u]||(s[u]=[])}for(var d=0,p=(c=this.a.field).length;d<p;d++){for(f=c[d],h=e,u=0;u<f.length;u++)h=h[f[u]];f=o[a[d]],u="add"===t?f.add:f.update,d===p-1?u.call(f,n,h,i):u.call(f,n,h)}if(r){for(i=Object.keys(r),t=O(),o=0;o<i.length;o++)if(r[a=i[o]]){a=a.split(":");var g=void 0,v=void 0;for(c=0;c<a.length;c++)g=(g||e)[h=a[c]],v=(v||t)[h]=g}e=t}s&&(s[s.length]=e),this.l[n]=e}return this},i.prototype.update=function(t,e,i){return this.a&&k(t)?this.A("update",t,e):(this.c["@"+t]&&m(e)&&(this.remove(t),this.add(t,e,i,!0)),this)},i.prototype.remove=function(t,e,i){if(this.a&&k(t))return this.A("remove",t,e);var n="@"+t;if(this.c[n]){if(this.g)return this.m[this.c[n]].postMessage({remove:!0,id:t}),delete this.c[n],e&&e(),this;if(!i){if(this.async&&"function"!=typeof importScripts){var r=this;return n=new Promise((function(e){setTimeout((function(){r.remove(t,null,!0),r=null,e()}))})),e?(n.then(e),this):n}if(e)return this.remove(t,null,!0),e(),this}for(e=0;e<this.b-(this.threshold||0);e++)f(this.i[e],t);this.depth&&f(this.h,t),delete this.c[n],this.B=!1}return this},i.prototype.search=function(t,e,i,n){if(k(e)){if(b(e))for(var r=0;r<e.length;r++)e[r].query=t;else e.query=t;t=e,e=1e3}else e&&x(e)?(i=e,e=1e3):e||0===e||(e=1e3);if(!this.g){var a=[],h=t;if(k(t)&&!b(t)){i||(i=t.callback)&&(h.callback=null);var c=t.sort,l=t.page;e=t.limit,N=t.threshold;var f=t.suggest;t=t.query}if(this.a){N=this.a.index;var u,p,g=h.where,v=h.bool||"or",w=h.field,S=v;if(w)b(w)||(w=[w]);else if(b(h)){var I=h;w=[],S=[];for(var j=0;j<h.length;j++)r=(n=h[j]).bool||v,w[j]=n.field,S[j]=r,"not"===r?u=!0:"and"===r&&(p=!0)}else w=this.a.keys;for(v=w.length,j=0;j<v;j++)I&&(h=I[j]),l&&!m(h)&&(h.page=null,h.limit=0),a[j]=N[w[j]].search(h,0);if(i)return i(o.call(this,t,S,a,c,e,f,g,l,p,u));if(this.async){var E=this;return new Promise((function(i){Promise.all(a).then((function(n){i(o.call(E,t,S,n,c,e,f,g,l,p,u))}))}))}return o.call(this,t,S,a,c,e,f,g,l,p,u)}if(N||(N=this.threshold||0),!n){if(this.async&&"function"!=typeof importScripts){var _=this;return N=new Promise((function(t){setTimeout((function(){t(_.search(h,e,null,!0)),_=null}))})),i?(N.then(i),this):N}if(i)return i(this.search(h,e,null,!0)),this}if(!t||!m(t))return a;if(h=t,this.cache)if(this.B){if(i=this.j.get(t))return i}else this.j.clear(),this.B=!0;if(!(h=this.encode(h)).length)return a;i=x(i=this.f)?i(h):h.split(this.split),this.filter&&(i=s(i,this.filter)),I=i.length,n=!0,r=[];var L=O(),C=0;if(1<I&&(this.depth&&"strict"===this.f?v=!0:i.sort(d)),!v||(j=this.h))for(var A=this.b;C<I;C++){var F=i[C];if(F){if(v){if(!w)if(j[F])w=F,L[F]=1;else if(!f)return a;if(f&&C===I-1&&!r.length)v=!1,L[F=w||F]=0;else if(!w)continue}if(!L[F]){var P=[],D=!1,M=0,B=v?j[w]:this.i;if(B)for(var T=void 0,U=0;U<A-N;U++)(T=B[U]&&B[U][F])&&(P[M++]=T,D=!0);if(D)w=F,r[r.length]=1<M?P.concat.apply([],P):P[0];else if(!f){n=!1;break}L[F]=1}}}else n=!1;return n&&(a=y(r,e,l,f)),this.cache&&this.j.set(t,a),a}this.F=i,this.u=0,this.o=[];for(var N=0;N<this.g;N++)this.m[N].postMessage({search:!0,limit:e,content:t})},i.prototype.find=function(t,e){return this.where(t,e,1)[0]||null},i.prototype.where=function(t,e,i,n){var r,s,o,a=this.l,h=[],c=0;if(k(t)){i||(i=e);var l=Object.keys(t),f=l.length;if(r=!1,1===f&&"id"===l[0])return[a[t.id]];if((s=this.I)&&!n)for(var u=0;u<s.length;u++){var d=s[u],p=t[d];if(!w(p)){if(o=this.G[d]["@"+p],0==--f)return o;l.splice(l.indexOf(d),1),delete t[d];break}}for(s=Array(f),u=0;u<f;u++)s[u]=l[u].split(":")}else{if(x(t)){for(i=(e=n||Object.keys(a)).length,l=0;l<i;l++)t(f=a[e[l]])&&(h[c++]=f);return h}if(w(e))return[a[t]];if("id"===t)return[a[e]];l=[t],f=1,s=[t.split(":")],r=!0}for(u=(n=o||n||Object.keys(a)).length,d=0;d<u;d++){p=o?n[d]:a[n[d]];for(var g=!0,v=0;v<f;v++){r||(e=t[l[v]]);var y=s[v],m=y.length,b=p;if(1<m)for(var S=0;S<m;S++)b=b[y[S]];else b=b[y[0]];if(b!==e){g=!1;break}}if(g&&(h[c++]=p,i&&c===i))break}return h},i.prototype.info=function(){if(!this.g)return{id:this.id,items:this.length,cache:!(!this.cache||!this.cache.s)&&this.cache.s.length,matcher:C.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f};for(var t=0;t<this.g;t++)this.m[t].postMessage({info:!0,id:this.id})},i.prototype.clear=function(){return this.destroy().init()},i.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){for(var t=this.a.keys,e=0;e<t.length;e++)this.a.index[t[e]].destroy();this.a=this.l=null}return this},i.prototype.export=function(t){var e=!t||w(t.serialize)||t.serialize;if(this.a){var i=!t||w(t.doc)||t.doc,n=!t||w(t.index)||t.index;t=[];var r=0;if(n)for(n=this.a.keys;r<n.length;r++){var s=this.a.index[n[r]];t[r]=[s.i,s.h,Object.keys(s.c)]}i&&(t[r]=this.l)}else t=[this.i,this.h,Object.keys(this.c)];return e&&(t=JSON.stringify(t)),t},i.prototype.import=function(t,e){(!e||w(e.serialize)||e.serialize)&&(t=JSON.parse(t));var i=O();if(this.a){var n=!e||w(e.doc)||e.doc,r=0;if(!e||w(e.index)||e.index){for(var s=(e=this.a.keys).length,o=t[0][2];r<o.length;r++)i[o[r]]=1;for(r=0;r<s;r++){o=this.a.index[e[r]];var a=t[r];a&&(o.i=a[0],o.h=a[1],o.c=i)}}n&&(this.l=k(n)?n:t[r])}else{for(n=t[2],r=0;r<n.length;r++)i[n[r]]=1;this.i=t[0],this.h=t[1],this.c=i}};var D,M,B,T,U=(M=h("\\s+"),B=h("[^a-z0-9 ]"),T=[h("[-/]")," ",B,"",M," "],function(t){return u(c(t.toLowerCase(),T))}),N={icase:function(t){return t.toLowerCase()},simple:function(){var t=h("\\s+"),e=h("[^a-z0-9 ]"),i=h("[-/]"),n=[h("[àáâãäå]"),"a",h("[èéêë]"),"e",h("[ìíîï]"),"i",h("[òóôõöő]"),"o",h("[ùúûüű]"),"u",h("[ýŷÿ]"),"y",h("ñ"),"n",h("[çc]"),"k",h("ß"),"s",h(" & ")," and ",i," ",e,"",t," "];return function(t){return" "===(t=c(t.toLowerCase(),n))?"":t}}(),advanced:function(){var t=h("ae"),e=h("ai"),i=h("ay"),n=h("ey"),r=h("oe"),s=h("ue"),o=h("ie"),a=h("sz"),l=h("zs"),f=h("ck"),d=h("cc"),p=[t,"a",e,"ei",i,"ei",n,"ei",r,"o",s,"u",o,"i",a,"s",l,"s",h("sh"),"s",f,"k",d,"k",h("th"),"t",h("dt"),"t",h("ph"),"f",h("pf"),"f",h("ou"),"o",h("uo"),"u"];return function(t,e){return t?(2<(t=this.simple(t)).length&&(t=c(t,p)),e||1<t.length&&(t=u(t)),t):t}}(),extra:(D=[h("p"),"b",h("z"),"s",h("[cgq]"),"k",h("n"),"m",h("d"),"t",h("[vw]"),"f",h("[aeiouy]"),""],function(t){if(!t)return t;if(1<(t=this.advanced(t,!0)).length){t=t.split(" ");for(var e=0;e<t.length;e++){var i=t[e];1<i.length&&(t[e]=i[0]+c(i.substring(1),D))}t=u(t=t.join(" "))}return t}),balance:U},R=function(){function t(t){this.clear(),this.H=!0!==t&&t}return t.prototype.clear=function(){this.cache=O(),this.count=O(),this.index=O(),this.s=[]},t.prototype.set=function(t,e){if(this.H&&w(this.cache[t])){var i=this.s.length;if(i===this.H){i--;var n=this.s[i];delete this.cache[n],delete this.count[n],delete this.index[n]}this.index[t]=i,this.s[i]=t,this.count[t]=-1,this.cache[t]=e,this.get(t)}else this.cache[t]=e},t.prototype.get=function(t){var e=this.cache[t];if(this.H&&e){var i=++this.count[t],n=this.index,r=n[t];if(0<r){for(var s=this.s,o=r;this.count[s[--r]]<=i&&-1!==r;);if(++r!==o){for(i=o;i>r;i--)o=s[i-1],s[i]=o,n[o]=i;s[r]=t,n[t]=r}}}return e},t}();return i}((r={},s="undefined"!=typeof Blob&&"undefined"!=typeof URL&&URL.createObjectURL,function(t,e,i,n,o){return i=s?URL.createObjectURL(new Blob(["("+i.toString()+")()"],{type:"text/javascript"})):t+".min.js",r[t+="-"+e]||(r[t]=[]),r[t][o]=new Worker(i),r[t][o].onmessage=n,r[t][o]})),this)},function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return h}));var n=i(0),r=i.n(n);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config={url:window.location.origin,key:"",version:"v3",loadOn:"focus",searchOn:"keyup",limit:10,inputId:["search-bar"],outputId:["search-results"],outputChildsType:"li",postsFields:["title","url","excerpt","custom_excerpt","published_at","feature_image"],postsExtraFields:["tags"],postsFormats:["plaintext"],indexedFields:["title","string_tags","excerpt","plaintext"],template:function(t){var e='<a href="'.concat(t.url,'">');return t.feature_image&&(e+='<img src="'.concat(t.feature_image,'">')),e+="<section>",t.tags.length>0?e+='<header>\n                            <span class="head-tags">'.concat(t.tags[0].name,'</span>\n                            <span class="head-date">').concat(t.published_at,"</span>\n                          </header>"):e+='<header>\n                            <span class="head-tags">UNKNOWN</span>\n                            <span class="head-date">'.concat(t.published_at,"</span>\n                          </header>"),e+="<h2>".concat(t.title,"</h2>"),e+="</section></a>"},emptyTemplate:function(){},customProcessing:function(t){return t.tags&&(t.string_tags=t.tags.map((function(t){return t.name})).join(" ").toLowerCase()),t},date:{locale:document.documentElement.lang||"en-US",options:{year:"numeric",month:"short",day:"numeric"}},cacheMaxAge:1800,onFetchStart:function(){},onFetchEnd:function(t){},onIndexBuildStart:function(){},onIndexBuildEnd:function(t){},onSearchStart:function(){},onSearchEnd:function(t){},indexOptions:{},searchOptions:{},debug:!1},this.dataLoaded=!1,this.postsCount=0,this.storage=this.getLocalStorageOption(),this.initConfig(e),this.triggerDataLoad()}var e,i,n;return e=t,(i=[{key:"initConfig",value:function(t){for(var e=this,i=0,n=Object.entries(t);i<n.length;i++){var r=s(n[i],2),o=r[0],a=r[1];this.config[o]=a}Array.isArray(this.config.inputId)||(this.config.inputId=[this.config.inputId]),Array.isArray(this.config.outputId)||(this.config.outputId=[this.config.outputId]),this.config.searchOptions.limit=this.config.limit,this.originalPostsFields=this.config.postsFields,this.config.postsFields.includes("updated_at")||this.config.postsFields.push("updated_at"),this.config.inputId&&this.config.inputId.length>0&&(this.searchBarEls=[],this.config.inputId.forEach((function(t){var i=document.getElementById(t);i?(e.searchBarEls.push(i),e.addSearchListeners(i)):e.error("Enable to find the input element #".concat(t,", please check your configuration"))}))),this.config.outputId&&this.config.outputId.length>0&&(this.searchResultEls=[],this.config.outputId.forEach((function(t){var i=document.getElementById(t);i?e.searchResultEls.push(i):e.error("Enable to find the output element #".concat(t,", please check your configuration"))}))),this.index=this.getNewSearchIndex()}},{key:"addSearchListeners",value:function(t){var e=this,i=t.closest("form");switch(i&&i.addEventListener("submit",(function(t){t.preventDefault()})),this.config.searchOn){case"keyup":t.addEventListener("keyup",(function(){var i=t.value.toLowerCase();e.search(i)}));break;case"submit":i.addEventListener("submit",(function(){var i=t.value.toLowerCase();e.search(i)}));break;case!1:case"none":break;default:this.error('Unknown "searchOn" option: \''.concat(this.config.searchOn,"'"))}}},{key:"triggerDataLoad",value:function(){var t=this;switch(this.config.loadOn){case"focus":this.searchBarEls.forEach((function(e){e.addEventListener("focus",(function(){t.loadData()}))}));break;case"page":window.addEventListener("load",(function(){t.loadData()}));break;case!1:case"none":break;default:this.error('Unknown "loadOn" option: \''.concat(this.config.loadOn,"'"))}}},{key:"loadData",value:function(){if(!this.dataLoaded){if(!this.storage)return this.log("No local storage available, switch to degraded mode"),void this.fetch();var t=this.storage.getItem("SearchinGhost_index");t?(this.log("Found an index stored locally, loads it"),this.config.onIndexBuildStart(),this.index.import(t),this.dataLoaded=!0,this.config.onIndexBuildEnd(this.index),this.validateCache()):(this.log("No already stored index found"),this.fetch())}}},{key:"validateCache",value:function(){var t=this,e=this.storage.getItem("SearchinGhost_cache_info");if(!e)return this.log("No cache info local object found"),void this.fetch();var i=JSON.parse(e),n=new Date(i.lastCacheCheck),r=Math.round((new Date-n)/1e3);if(r<this.config.cacheMaxAge)this.log("Skip cache refreshing, updated less than ".concat(this.config.cacheMaxAge,"s ago (").concat(r,"s)"));else{var s=this.buildUrl({limit:1,fields:["updated_at"],order:"updated_at DESC"});fetch(s).then((function(t){return t.json()})).then((function(e){var n=e.posts[0].updated_at,r=e.meta.pagination.total;n!==i.lastestPostUpdatedAt?(t.log("Posts update found, purge outdated local cache"),t.fetch()):r<i.totalPosts?(t.log("Deleted or unpublished posts found, purge outdated local cache"),t.fetch()):(t.log("Local cached data up to date"),i.lastCacheCheck=(new Date).toISOString(),t.storage.setItem("SearchinGhost_cache_info",JSON.stringify(i)))})).catch((function(t){console.error("Unable to fetch the latest post information to check cache state",t)}))}}},{key:"fetch",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;this.log("Fetching data from Ghost API"),this.config.onFetchStart();var e={limit:"all",fields:this.config.postsFields,order:"updated_at DESC"};this.config.postsExtraFields.length>0&&(e.include=this.config.postsExtraFields),this.config.postsFormats.length>0&&(e.formats=this.config.postsFormats);var i=this.buildUrl(e);fetch(i).then((function(t){return t.json()})).then((function(e){var i=e.posts;if(t.config.onFetchEnd(i),t.config.onIndexBuildStart(),t.index=t.getNewSearchIndex(),i.forEach((function(e){var i=t.format(e);i&&t.index.add(i)})),t.dataLoaded=!0,t.config.onIndexBuildEnd(t.index),t.storage){var n={lastCacheCheck:(new Date).toISOString(),lastestPostUpdatedAt:i[0].updated_at,totalPosts:e.meta.pagination.total};t.storage.setItem("SearchinGhost_index",t.index.export()),t.storage.setItem("SearchinGhost_cache_info",JSON.stringify(n))}t.log("Search index build complete")})).catch((function(e){t.error("Unable to fetch Ghost data.\n",e)}))}))},{key:"format",value:function(t){return t.id=this.postsCount++,t.published_at=this.prettyDate(t.published_at),this.originalPostsFields.includes("updated_at")||delete t.updated_at,t.custom_excerpt&&(t.excerpt=t.custom_excerpt,delete t.custom_excerpt),t=this.config.customProcessing(t)}},{key:"search",value:function(t){this.loadData(),this.config.onSearchStart();var e=this.index.search(t,this.config.searchOptions);return this.searchResultEls&&this.searchResultEls.length>0&&this.display(e),this.config.onSearchEnd(e),e}},{key:"display",value:function(t){var e=this;this.searchResultEls.forEach((function(t){t.innerHTML=""})),t.length<1?this.insertTemplate(this.config.emptyTemplate()):t.forEach((function(t){e.insertTemplate(e.config.template(t))}))}},{key:"insertTemplate",value:function(t){var e=this;t&&this.searchResultEls.forEach((function(i){if(e.config.outputChildsType){var n=document.createElement(e.config.outputChildsType);n.classList.add("".concat(i.id,"-item")),n.innerHTML=t,i.appendChild(n)}else i.insertAdjacentHTML("beforeend",t)}))}},{key:"getNewSearchIndex",value:function(){for(var t={doc:{id:"id",field:this.config.indexedFields},encode:"simple",tokenize:"forward",threshold:0,resolution:4,depth:0},e=0,i=Object.entries(this.config.indexOptions);e<i.length;e++){var n=s(i[e],2),o=n[0],a=n[1];t[o]=a}return new r.a(t)}},{key:"buildUrl",value:function(t){for(var e="".concat(this.config.url,"/ghost/api/").concat(this.config.version,"/content/posts/?key=").concat(this.config.key),i=0,n=Object.entries(t);i<n.length;i++){var r=s(n[i],2),o=r[0],a=r[1];e+="&".concat(o,"=").concat(a)}return encodeURI(e)}},{key:"prettyDate",value:function(t){return new Date(t).toLocaleDateString(this.config.date.locale,this.config.date.options)}},{key:"getLocalStorageOption",value:function(){try{return window.localStorage.setItem("storage-availability-test",""),window.localStorage.removeItem("storage-availability-test"),window.localStorage}catch(t){return}}},{key:"log",value:function(t,e){this.config.debug&&(e?console.log(t,e):console.log(t))}},{key:"error",value:function(t,e){e?console.error(t,e):console.error(t)}}])&&a(e.prototype,i),n&&a(e,n),t}()}]).default;
;"use strict";
document.addEventListener("DOMContentLoaded", function () {
    /*=====================================================
        post loading
    =====================================================*/
    var nextLink, nextPageUrl, loadMoreButton;
    nextLink = document.querySelector('link[rel=next]');
    var paginationWrap = document.getElementById('pagination-wrap');
    loadMoreButton = document.getElementById('load-more');
    if( nextLink !== null) {
        btnText = loadMoreButton.innerText;
        nextPageUrl = nextLink.getAttribute('href');
    }
    if( typeof(nextPageUrl) == 'undefined') {
        if(paginationWrap !== null) {
            loadMoreButton.style.display = 'none';
        }
    }
    else {
        loadMoreButton.addEventListener('click', function (e) {
            e.preventDefault();
            loadMoreButton.classList.add('loading');
            loadMoreButton.disabled = true;
            if(parseInt(nextPage) <= parseInt(totalPages)){
                var url = nextPageUrl.split(/page/)[0] + 'page/' + nextPage + '/';
                fetch(url)
                .then(function (response) {
                    if(response.ok) {
                        return response.text();
                    }
                })
                .then(function(data) {
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = data;
                    var wrapper = document.querySelector('.js-post-list-wrap');
                    var html = tempDiv.querySelectorAll('.js-post-card-wrap');
                    for(var i=0; i < html.length; i++) {
                        wrapper.appendChild(html.item(i));
                    }
                    nextPage++;
                    loadMoreButton.classList.remove('loading');
                    loadMoreButton.disabled = false;
                    if(nextPage> totalPages) {
                        loadMoreButton.style.display = 'none';
                    }
                });
            }
        });
    };
    /*=====================================================
        responsive embed
    =====================================================*/
    reframe('iframe:not([src*="soundcloud"]):not([src*="spotify"]):not(.no-resize)');
    /*=====================================================
    image gallery
    =====================================================*/
    var images = document.querySelectorAll('.kg-gallery-image img');
    images.forEach(function (image) {
        var container = image.closest('.kg-gallery-image');
        var width = image.attributes.width.value;
        var height = image.attributes.height.value;
        var ratio = width / height;
        container.style.flex = ratio + ' 1 0%';
    });
    mediumZoom('.kg-image-card img, .kg-gallery-image img', {
        margin: 30
    });
    /*=====================================================
        Responsive table
    =====================================================*/
    var tables = document.querySelectorAll('table');
    if (tables.length > 0) {
        tables.forEach(function(table) {
            var wrapper = document.createElement('div')
            wrapper.classList.add('table-responsive');
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        })
    };
    /*=====================================================
    Disqus lazy load
    =====================================================*/
    var disqusContainer =document.querySelector('.disqus-comment-wrap');
    if(disqusContainer) {
        var disqusOptions = {
            scriptUrl: '//' + disqus_shortname + '.disqus.com/embed.js',
            laziness: 1,
            throttle: 1000,
            disqusConfig: function(){
                this.page.url = pageUrl;
                this.page.identifier = pageIdentifier;
                this.callbacks.onReady = [function() {
                    var placeholder = document.querySelector( '.comment-placeholder' );
                    placeholder.classList.add( 'is-hidden' );
                }];
            }
        };
        disqusLoader( '.disqus-comment-wrap', disqusOptions );
    }
    /*=====================================================
        Search
    =====================================================*/
    var searchOpen = document.querySelectorAll('.js-search-button');
    var searchPopup = document.querySelector('.js-search-popup');
    var searchClose = document.getElementById('search-close');
    var searchInput = document.getElementById('search-input');
    var searchResult = document.getElementById('search-results');
    var suggestedTags = document.getElementById('suggested-tags');

    if( typeof apiKey !== 'undefined' && apiKey != null && searchInput != null ) {
            searchOpen.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                searchPopup.classList.add('visible');
                document.body.classList.add('search-opened');
                window.setTimeout(function() {
                    searchInput.focus();
                }, 200);
            })
        });
        var searchinGhost = new SearchinGhost({
            url: apiUrl,
            key: apiKey,
            inputId: ['search-input'],
            outputId: ['search-results'],
            outputChildsType: 'div',
            limit: 50,
            postsFields: ['title', 'url', 'excerpt', 'custom_excerpt', 'published_at'],
            postsExtraFields: ['tags'],
            template: function(post) {
                var o = '';
                postUrl = post.url.replace(apiUrl, mainUrl);
                o += '<a href="' + postUrl + '"><div class="content">';
                o += '<h3 class="title h4">' + post.title + '</h3> <div class="meta">';
                o += '<time>' + post.published_at + '</time></div></div></a>';
                return o;
            },
            onSearchEnd: function(posts) {
                if (searchResult.scrollHeight > searchResult.offsetHeight) {
                    searchResult.style.paddingRight = "8px";
                } else {
                    searchResult.style.paddingRight = "0px";
                }
                if (posts.length == 0) {
                    suggestedTags.classList.remove('hidden');
                } else {
                    suggestedTags.classList.add('hidden');

                }
            }
        });
        document.addEventListener('keydown', function(e){
            if (e.key == 'Escape' && searchPopup.classList.contains('visible') && document.body.classList.contains('search-opened')) {
                closeSearch();
            }
        });
        searchInput.addEventListener('keydown', function(e){
            if (e.key == 'Escape') {
                closeSearch();
            }
        });
        searchClose.addEventListener('keydown', function(e){
            if (e.key == 'Enter') {
                closeSearch();
            }
        });
        searchClose.addEventListener('keydown', function(e){
            if (e.key == 'Enter') {
                closeSearch();
            }
        });
        searchPopup.onclick = closeSearch;
        searchClose.onclick = closeSearch;
        function closeSearch(e) {
            if (e !== undefined  && e.target !== e.currentTarget ) {
                return;
            }
            searchPopup.classList.toggle('visible');
            document.body.classList.toggle('search-opened');
            searchInput.value = '';
            searchResult.innerHTML = '';
            suggestedTags.classList.remove('hidden')
        }
    }
    /*=====================================================
    Toggle dark/light
    =====================================================*/
    var toggleBtn = document.querySelectorAll('.js-toggle-dark-light');
    var html = document.documentElement;
    if(toggleBtn) {
        toggleBtn.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var defaultMode = html.getAttribute('data-theme');
                if (defaultMode !== null && defaultMode === 'dark') {
                    html.setAttribute('data-theme', 'light');
                    localStorage.setItem('selected-theme', 'light');
                } else {
                    html.setAttribute('data-theme', 'dark');
                    localStorage.setItem('selected-theme', 'dark');
                }
            });
        });
    }
    /*=====================================================
        A simple throttle function
    =====================================================*/
    function CustomThrottle(func, limit) {
        var lastFunc, lastRan;
        return function () {
            var context = this, args = arguments;
            if (!lastRan) {
                func.apply(context, args)
                lastRan = Date.now()
            } else {
                clearTimeout(lastFunc)
                lastFunc = setTimeout(function () {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args)
                        lastRan = Date.now()
                    }
                }, limit - (Date.now() - lastRan))
            }
        }
    }
    /*=====================================================
        sticky nav
    =====================================================*/
    var scroll = 1;
    var navType = document.body.getAttribute('data-nav');
    var header = document.querySelector('.site-header');
    if(typeof(header) !== undefined && header !== null) {
        if ( navType === 'sticky') {
            window.addEventListener('scroll', CustomThrottle(function(){
                var currScroll = window.pageYOffset;
                if (currScroll > 1) {
                    header.classList.add("small");
                } else {
                    header.classList.remove("small");
                };
            }, 50));
        } else if (navType === 'sticky-hide') {
            window.addEventListener('scroll', CustomThrottle(function(){
                var currScroll = window.pageYOffset;
                if (currScroll > 1) {
                    header.classList.add("small");
                } else {
                    header.classList.remove("small");
                };
                if ( currScroll < scroll) {
                    header.classList.add("show");
                    header.classList.remove("hide");
                    scroll = currScroll;
                } else {
                    header.classList.remove("show");
                    header.classList.add("hide");
                    scroll = currScroll;
                }
                if (currScroll == 0) {
                    header.classList.remove("hide");
                    header.classList.remove("show");
                    header.classList.remove("sticky");
                }
            }, 50));
        }
    }
    /*=====================================================
        subscribe-notifications
    =====================================================*/
    // Parse the URL parameter
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    // Give the parameter a variable name
    var action = getParameterByName('action');
    var stripe = getParameterByName('stripe');
    var success = getParameterByName('success');
    if (action == 'subscribe') {
        showNotification('notification-subscribe');
    }
    if (action == 'signin') {
        if(success == "true") {
            showNotification('notification-signin');
        } else {
            showNotification('notification-signin-error');
        }
    }
    if (action == 'signup') {
        if(success == "true") {
            showNotification('notification-signup');
        } else {
            showNotification('notification-signup-error');
        }
    }
    if (action == 'checkout') {
        showNotification('notification-signup');
    }
    if (stripe == 'success') {
        window.location = '/account/?action=checkout-success';
    }
    if (stripe == 'cancel') {
        showNotification('notification-checkout-cancel');
    }
    if (action == 'checkout-success') {
        showNotification('notification-checkout');
    }
    if (stripe == 'billing-update-success') {
        showNotification('notification-billing-update');
    }
    if (stripe == 'billing-update-cancel') {
        showNotification('notification-billing-update-cancel');
    }

    function showNotification(notificationClass) {
        var notification = document.querySelector('.'+notificationClass);
        notification.classList.add('visible');
        var closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', function() {
            notification.classList.remove('visible');
            cleanTheUri();
        })
    }
    function cleanTheUri() {
        var uri = window.location.toString();
        if (uri.indexOf("?") > 0) {
            var cleanUri = uri.substring(0, uri.indexOf("?"));
            window.history.replaceState({}, document.title, cleanUri);
        }
    }
    // form notifications
    var formNotifications=document.querySelectorAll('.form-notification');
    formNotifications.forEach(function(notification){
        var closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', function() {
            document.querySelectorAll('[data-members-form]').forEach(function(el){
                el.classList.remove('success');
                el.classList.remove('error');
            })
        })
    });
    /*=====================================================
        copy link to clipboard
    =====================================================*/
    var clipboard  = new ClipboardJS('.js-copy-link');
    var copyNotification = document.querySelector('.js-notification-copy-link');
    clipboard.on('success', function(e) {
        copyNotification.classList.add('visible');
        setTimeout(function(){
            copyNotification.classList.remove('visible');
        }, 10000);
    
        e.clearSelection();
    });
});
