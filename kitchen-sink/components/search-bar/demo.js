webpackJsonp([30,141],{6:function(n,a,s){"use strict";s(13),s(12)},12:function(n,a){},13:function(n,a){},16:function(n,a,s){"use strict";s(20)},20:function(n,a){},21:function(n,a,s){"use strict";s(6),s(24)},24:function(n,a){},26:function(n,a,s){"use strict";s(6),s(37)},29:function(n,a,s){"use strict";s(6),s(16),s(38)},37:function(n,a){},38:function(n,a){},106:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(n){return Object.keys(n).reduce(function(a,s){return"aria-"!==s.substr(0,5)&&"data-"!==s.substr(0,5)&&"role"!==s||(a[s]=n[s]),a},{})},n.exports=a["default"]},318:function(n,a){"use strict";function s(){}Object.defineProperty(a,"__esModule",{value:!0});a.defaultProps={prefixCls:"am-search",placeholder:"",onSubmit:s,onChange:s,onFocus:s,onBlur:s,onClear:s,showCancelButton:!1,cancelText:"\u53d6\u6d88",disabled:!1}},319:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(2),p=t(e),o=s(7),c=t(o),l=s(3),u=t(l),i=s(5),r=t(i),k=s(4),f=t(k),d="/Users/silentcloud/Desktop/ant-design-mobile/components/search-bar/index.web.tsx",h=s(1),g=t(h),m=s(8),v=t(m),b=s(318),C=s(106),y=t(C),B=function(n){function a(s){(0,u["default"])(this,a);var t=(0,r["default"])(this,n.call(this,s));t.onSubmit=function(n){n.preventDefault(),t.props.onSubmit&&t.props.onSubmit(t.state.value),t.refs.searchInput.blur()},t.onChange=function(n){t.state.focus||t.setState({focus:!0});var a=n.target.value;"value"in t.props||t.setState({value:a}),t.props.onChange&&t.props.onChange(a)},t.onFocus=function(){t.setState({focus:!0}),t.firstFocus=!0,"focused"in t.props||t.setState({focused:!0}),t.props.onFocus&&t.props.onFocus(),"input"===document.activeElement.tagName.toLowerCase()&&(t.scrollIntoViewTimeout=setTimeout(function(){try{document.activeElement.scrollIntoViewIfNeeded()}catch(n){}},100))},t.onBlur=function(){t.onBlurTimeout=setTimeout(function(){t.blurFromOnClear||t.setState({focus:!1}),t.blurFromOnClear=!1},50),"focused"in t.props||t.setState({focused:!1}),t.props.onBlur&&t.props.onBlur()},t.onClear=function(){t.doClear()},t.doClear=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t.blurFromOnClear=n,"value"in t.props||t.setState({value:""}),t.props.onClear&&t.props.onClear(""),t.props.onChange&&t.props.onChange(""),n&&t.refs.searchInput.focus()},t.onCancel=function(){t.props.onCancel?t.props.onCancel(t.state.value):t.doClear(!1)};var e=void 0;return e="value"in s?s.value||"":"defaultValue"in s?s.defaultValue:"",t.state={value:e,focus:!1,focused:s.focused||!1},t}return(0,f["default"])(a,n),a.prototype.componentDidMount=function(){var n=window.getComputedStyle(this.refs.rightBtn);this.rightBtnInitMarginleft=n["margin-left"],(this.props.autoFocus||this.state.focused)&&navigator.userAgent.indexOf("AlipayClient")>0&&this.refs.searchInput.focus(),this.componentDidUpdate()},a.prototype.componentDidUpdate=function(){var n=this.refs.syntheticPhContainer.getBoundingClientRect().width;this.refs.searchInputContainer.className.indexOf(this.props.prefixCls+"-start")>-1?(this.refs.syntheticPh.style.width=Math.ceil(n)+"px",this.props.showCancelButton||(this.refs.rightBtn.style.marginRight=0)):(this.refs.syntheticPh.style.width="100%",this.props.showCancelButton||(this.refs.rightBtn.style.marginRight="-"+(this.refs.rightBtn.offsetWidth+parseInt(this.rightBtnInitMarginleft,10))+"px")),this.state.focused&&this.refs.searchInput.focus()},a.prototype.componentWillReceiveProps=function(n){"value"in n&&this.setState({value:n.value}),"focused"in n&&this.setState({focused:n.focused})},a.prototype.componentWillUnmount=function(){this.scrollIntoViewTimeout&&(clearTimeout(this.scrollIntoViewTimeout),this.scrollIntoViewTimeout=null),this.onBlurTimeout&&(clearTimeout(this.onBlurTimeout),this.onBlurTimeout=null)},a.prototype.render=function(){var n,a,s,t=this.props,e=t.prefixCls,o=t.showCancelButton,l=t.disabled,u=t.placeholder,i=t.cancelText,r=t.className,k=t.style,f=t.maxLength,h=this.state,m=h.value,b=h.focus,C=(0,v["default"])((n={},(0,c["default"])(n,""+e,!0),(0,c["default"])(n,e+"-start",b||m&&m.length>0),(0,c["default"])(n,r,r),n)),B=(0,v["default"])((a={},(0,c["default"])(a,e+"-clear",!0),(0,c["default"])(a,e+"-clear-show",b&&m&&m.length>0),a)),w=(0,v["default"])((s={},(0,c["default"])(s,e+"-cancel",!0),(0,c["default"])(s,e+"-cancel-show",o||b||m&&m.length>0),(0,c["default"])(s,e+"-cancel-anim",this.firstFocus),s));return g["default"].createElement("form",{onSubmit:this.onSubmit,className:C,style:k,ref:"searchInputContainer",action:"#",__source:{fileName:d,lineNumber:179}},g["default"].createElement("div",{className:e+"-input",__source:{fileName:d,lineNumber:180}},g["default"].createElement("div",{className:e+"-synthetic-ph",ref:"syntheticPh",__source:{fileName:d,lineNumber:181}},g["default"].createElement("span",{className:e+"-synthetic-ph-container",ref:"syntheticPhContainer",__source:{fileName:d,lineNumber:182}},g["default"].createElement("i",{className:e+"-synthetic-ph-icon",__source:{fileName:d,lineNumber:183}}),g["default"].createElement("span",{className:e+"-synthetic-ph-placeholder",style:{visibility:u&&!m?"visible":"hidden"},__source:{fileName:d,lineNumber:184}},u))),g["default"].createElement("input",(0,p["default"])({type:"search",className:e+"-value",value:m,disabled:l,placeholder:u,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:"searchInput",maxLength:f},(0,y["default"])(this.props),{__source:{fileName:d,lineNumber:189}})),g["default"].createElement("a",{onClick:this.onClear,className:B,__source:{fileName:d,lineNumber:190}})),g["default"].createElement("div",{className:w,onClick:this.onCancel,ref:"rightBtn",__source:{fileName:d,lineNumber:192}},i))},a}(g["default"].Component);a["default"]=B,B.defaultProps=b.defaultProps,n.exports=a["default"]},320:function(n,a,s){"use strict";s(6),s(350)},350:function(n,a){},644:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/search-bar/demo/basic.md",id:"components-search-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchBar<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SearchBarExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\u7f8e\u98df\'</span><span class="token punctuation">,</span>\n    focused<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onChange<span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(value, \'onChange\');</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  clear <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">\'\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u666e\u901a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u641c\u7d22<span class="token punctuation">"</span></span> <span class="token attr-name">maxLength</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u81ea\u52a8\u83b7\u53d6\u5149\u6807\uff0c\u652f\u4ed8\u5b9d\u5ba2\u6237\u7aef\u6709\u6548<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u52a8\u83b7\u53d6\u5149\u6807\uff0c\u652f\u4ed8\u5b9d\u5ba2\u6237\u7aef\u6709\u6548<span class="token punctuation">"</span></span> <span class="token attr-name">autoFocus</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807<span class="token punctuation">"</span></span>\n        <span class="token attr-name">focused</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>focused<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onFocus</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            focused<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              focused<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n        <span class="token punctuation">></span></span>\u70b9\u51fb\u83b7\u53d6\u5149\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u663e\u793a\u53d6\u6d88\u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u641c\u7d22<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onSubmit\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onClear\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onFocus</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onFocus\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onBlur</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onBlur\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onCancel\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showCancelButton</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):a(n,s))}var o=s(1),c=(s(9),s(29),s(53)),l=n(c),u=(s(21),s(31)),i=n(u),r=(s(320),s(319)),k=n(r),f=(s(26),s(50)),d=n(f),h=function(n){function a(){var s,p,o;t(this,a);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return s=p=e(this,n.call.apply(n,[this].concat(l))),p.state={value:"\u7f8e\u98df",focused:!1},p.onChange=function(n){p.setState({value:n})},p.clear=function(){p.setState({value:""})},o=s,e(p,o)}return p(a,n),a.prototype.render=function(){var n=this;return o.createElement("div",null,o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"\u666e\u901a")),o.createElement(k["default"],{placeholder:"\u641c\u7d22",maxLength:8}),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"\u81ea\u52a8\u83b7\u53d6\u5149\u6807\uff0c\u652f\u4ed8\u5b9d\u5ba2\u6237\u7aef\u6709\u6548")),o.createElement(k["default"],{placeholder:"\u81ea\u52a8\u83b7\u53d6\u5149\u6807\uff0c\u652f\u4ed8\u5b9d\u5ba2\u6237\u7aef\u6709\u6548",autoFocus:!0}),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807")),o.createElement(k["default"],{placeholder:"\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807",focused:this.state.focused,onFocus:function(){n.setState({focused:!1})}}),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement(l["default"],{onClick:function(){n.setState({focused:!0})}},"\u70b9\u51fb\u83b7\u53d6\u5149\u6807")),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"\u663e\u793a\u53d6\u6d88\u6309\u94ae")),o.createElement(k["default"],{value:this.state.value,placeholder:"\u641c\u7d22",onSubmit:function(n){return console.log(n,"onSubmit")},onClear:function(n){return console.log(n,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return console.log("onCancel")},showCancelButton:!0,onChange:this.onChange}))},a}(o.Component);return o.createElement(h,null)},style:".am-search {\n  border-bottom: 1px solid #ddd;\n}\n.sub-title {\n  color: #888;\n  font-size: .28rem;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.am-search</span> </span><span class="token punctuation">{</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token number">1</span>px solid <span class="token hexcode">#ddd</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">.28</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},728:function(n,a,s){n.exports={basic:s(644)}}});