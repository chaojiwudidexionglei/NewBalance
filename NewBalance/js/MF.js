"use strict";var _createClass=function(){function s(e,o){for(var t=0;t<o.length;t++){var s=o[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,o,t){return o&&s(e.prototype,o),t&&s(e,t),e}}();function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var MF=function(){function s(e,o,t){_classCallCheck(this,s),this.smallbox=e,this.mask=o,this.bigbox=t}return _createClass(s,[{key:"onmouseover",value:function(){var e=this;this.smallbox.onmouseover=function(){e.mask.style.display="block",e.bigbox.style.display="block"}}},{key:"onmouseout",value:function(){var e=this;this.smallbox.onmouseout=function(){e.mask.style.display="none",e.bigbox.style.display="none"}}},{key:"onmousemove",value:function(){var f=this;this.smallbox.onmousemove=function(e){var o=e||event,t=o.pageX-this.offsetLeft-167.5-f.mask.offsetWidth/2,s=o.pageY-this.offsetTop-52-f.mask.offsetHeight/2;t<0&&(t=0);var i=f.smallbox.offsetWidth-f.mask.offsetWidth;i<t&&(t=i),s<0&&(s=0);var n=f.smallbox.offsetHeight-f.mask.offsetHeight;n<s&&(s=n);var a=t*f.bigbox.offsetWidth/f.mask.offsetWidth,l=s*f.bigbox.offsetHeight/f.mask.offsetHeight;f.mask.style.left=t+"px",f.mask.style.top=s+"px",f.bigbox.style.backgroundPositionX=-a+"px",f.bigbox.style.backgroundPositionY=-l+"px"}}},{key:"eventBind",value:function(){this.onmouseover(),this.onmouseout(),this.onmousemove()}}]),s}();