webpackJsonp([0x67ef26645b2a,60335399758886],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["D:/Programming/cheesegits.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","D:/Programming/cheesegits.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","D:/Programming/cheesegits.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["D:/Programming/cheesegits.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"D:/Programming/cheesegits.github.io/node_modules/babel-preset-stage-0/lib/index.js","D:/Programming/cheesegits.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n("./node_modules/react/react.js"),i=o(a),s=n("./src/layouts/index.js"),u=o(s),l=n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),c=o(l);t.default=function(e){return i.default.createElement(u.default,r({},e,c.default))},e.exports=t.default},"./node_modules/babel-runtime/core-js/object/assign.js":function(e,t,n){e.exports={default:n("./node_modules/core-js/library/fn/object/assign.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/keys.js":function(e,t,n){e.exports={default:n("./node_modules/core-js/library/fn/object/keys.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/extends.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n("./node_modules/babel-runtime/core-js/object/assign.js"),a=o(r);t.default=a.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}},"./node_modules/babel-runtime/helpers/objectWithoutProperties.js":function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}},"./node_modules/core-js/library/fn/object/assign.js":function(e,t,n){n("./node_modules/core-js/library/modules/es6.object.assign.js"),e.exports=n("./node_modules/core-js/library/modules/_core.js").Object.assign},"./node_modules/core-js/library/fn/object/keys.js":function(e,t,n){n("./node_modules/core-js/library/modules/es6.object.keys.js"),e.exports=n("./node_modules/core-js/library/modules/_core.js").Object.keys},"./node_modules/core-js/library/modules/_object-assign.js":function(e,t,n){"use strict";var o=n("./node_modules/core-js/library/modules/_object-keys.js"),r=n("./node_modules/core-js/library/modules/_object-gops.js"),a=n("./node_modules/core-js/library/modules/_object-pie.js"),i=n("./node_modules/core-js/library/modules/_to-object.js"),s=n("./node_modules/core-js/library/modules/_iobject.js"),u=Object.assign;e.exports=!u||n("./node_modules/core-js/library/modules/_fails.js")(function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=o})?function(e,t){for(var n=i(e),u=arguments.length,l=1,c=r.f,d=a.f;u>l;)for(var f,p=s(arguments[l++]),m=c?o(p).concat(c(p)):o(p),T=m.length,b=0;T>b;)d.call(p,f=m[b++])&&(n[f]=p[f]);return n}:u},"./node_modules/core-js/library/modules/_object-sap.js":function(e,t,n){var o=n("./node_modules/core-js/library/modules/_export.js"),r=n("./node_modules/core-js/library/modules/_core.js"),a=n("./node_modules/core-js/library/modules/_fails.js");e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),o(o.S+o.F*a(function(){n(1)}),"Object",i)}},"./node_modules/core-js/library/modules/es6.object.assign.js":function(e,t,n){var o=n("./node_modules/core-js/library/modules/_export.js");o(o.S+o.F,"Object",{assign:n("./node_modules/core-js/library/modules/_object-assign.js")})},"./node_modules/core-js/library/modules/es6.object.keys.js":function(e,t,n){var o=n("./node_modules/core-js/library/modules/_to-object.js"),r=n("./node_modules/core-js/library/modules/_object-keys.js");n("./node_modules/core-js/library/modules/_object-sap.js")("keys",function(){return function(e){return r(o(e))}})},"./node_modules/deep-equal/index.js":function(e,t,n){function o(e){return null===e||void 0===e}function r(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,c;if(o(e)||o(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=i.call(e),t=i.call(t),l(e,t,n));if(r(e)){if(!r(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var d=s(e),f=s(t)}catch(e){return!1}if(d.length!=f.length)return!1;for(d.sort(),f.sort(),a=d.length-1;a>=0;a--)if(d[a]!=f[a])return!1;for(a=d.length-1;a>=0;a--)if(c=d[a],!l(e[c],t[c],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,s=n("./node_modules/deep-equal/lib/keys.js"),u=n("./node_modules/deep-equal/lib/is_arguments.js"),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function o(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var r="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=r?n:o,t.supported=n,t.unsupported=o},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var o;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};o=function(){return a}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))}()},"./node_modules/gatsby-link/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return e.replace(/^\/\//g,"/")}t.__esModule=!0,t.navigateTo=void 0;var a=n("./node_modules/babel-runtime/helpers/extends.js"),i=o(a),s=n("./node_modules/babel-runtime/core-js/object/keys.js"),u=o(s),l=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),c=o(l),d=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),f=o(d),p=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=o(p),T=n("./node_modules/babel-runtime/helpers/inherits.js"),b=o(T),E=n("./node_modules/react/react.js"),y=o(E),_=n("./node_modules/react-router-dom/index.js"),h=n("./node_modules/prop-types/index.js"),A=o(h),j="/",g={activeClassName:A.default.string,activeStyle:A.default.object,exact:A.default.bool,strict:A.default.bool,isActive:A.default.func,location:A.default.object},v=function(e){function t(n){(0,f.default)(this,t);var o=(0,m.default)(this,e.call(this));return o.state={to:r(j+n.to)},o}return(0,b.default)(t,e),t.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:r(j+e.to)}),___loader.enqueue(this.state.to))},t.prototype.componentDidMount=function(){___loader.enqueue(this.state.to)},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,o=(0,c.default)(t,["onClick"]);if((0,u.default)(g).some(function(t){return e.props[t]}))var r=_.NavLink;else var r=_.Link;return y.default.createElement(r,(0,i.default)({onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var o=e.state.to;if(o.split("#").length>1&&(o=o.split("#").slice(0,-1).join("")),o===window.location.pathname){var r=e.state.to.split("#").slice(1).join("#"),a=document.getElementById(r);if(null!==a)return a.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}})},o,{to:this.state.to}))},t}(y.default.Component);v.contextTypes={router:A.default.object},t.default=v;t.navigateTo=function(e){window.___navigateTo(r(j+e))}},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n("./node_modules/react/react.js"),d=o(c),f=n("./node_modules/prop-types/index.js"),p=o(f),m=n("./node_modules/react-side-effect/lib/index.js"),T=o(m),b=n("./node_modules/deep-equal/index.js"),E=o(b),y=n("./node_modules/react-helmet/lib/HelmetUtils.js"),_=n("./node_modules/react-helmet/lib/HelmetConstants.js"),h=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return s(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,E.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case _.TAG_NAMES.SCRIPT:case _.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case _.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,r=e.newChildProps,a=e.nestedChildren;return u({},o,(t={},t[n.type]=[].concat(o[n.type]||[],[u({},r,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,r=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(o.type){case _.TAG_NAMES.TITLE:return u({},r,(t={},t[o.type]=i,t.titleAttributes=u({},a),t));case _.TAG_NAMES.BODY:return u({},r,{bodyAttributes:u({},a)});case _.TAG_NAMES.HTML:return u({},r,{htmlAttributes:u({},a)})}return u({},r,(n={},n[o.type]=u({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var o;n=u({},n,(o={},o[t]=e[t],o))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return d.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,s=r(a,["children"]),u=(0,y.convertReactPropstoHtmlAttributes)(s);switch(n.warnOnInvalidChildren(e,i),e.type){case _.TAG_NAMES.LINK:case _.TAG_NAMES.META:case _.TAG_NAMES.NOSCRIPT:case _.TAG_NAMES.SCRIPT:case _.TAG_NAMES.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(o,t)},n.prototype.render=function(){var t=this.props,n=t.children,o=r(t,["children"]),a=u({},o);return n&&(a=this.mapChildrenToProps(n,a)),d.default.createElement(e,a)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},j=(0,T.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(A),g=h(j);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),o=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce(function(e,t){return e[o[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){(function(e){function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n("./node_modules/react/react.js"),s=o(i),u=n("./node_modules/object-assign/index.js"),l=o(u),c=n("./node_modules/react-helmet/lib/HelmetConstants.js"),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,c.TAG_NAMES.TITLE),n=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var o=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||o||void 0},p=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},T=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var o=Object.keys(n),r=0;r<o.length;r++){var a=o[r],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},b=function(e,t,n){var o={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var r={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],u=s.toLowerCase();t.indexOf(u)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(s)===-1||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(r),i=0;i<a.length;i++){var s=a[i],u=(0,l.default)({},o[s],r[s]);o[s]=u}return e},[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var o=e[n];if(o.hasOwnProperty(t))return o[t]}return null},y=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:m(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(c.ATTRIBUTE_NAMES.HTML,e),linkTags:b(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:b(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:b(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:b(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:b(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:m(c.ATTRIBUTE_NAMES.TITLE,e)}},_=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){_(t)},0)}}(),h=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||_:e.requestAnimationFrame||_,j="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,S=function(e){v&&j(v),e.defer?v=A(function(){O(e,function(){v=null})}):(O(e),v=null)},O=function(e,t){var n=e.baseTag,o=e.bodyAttributes,r=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;R(c.TAG_NAMES.BODY,o),R(c.TAG_NAMES.HTML,r),P(f,p);var m={baseTag:C(c.TAG_NAMES.BASE,n),linkTags:C(c.TAG_NAMES.LINK,a),metaTags:C(c.TAG_NAMES.META,i),noscriptTags:C(c.TAG_NAMES.NOSCRIPT,s),scriptTags:C(c.TAG_NAMES.SCRIPT,l),styleTags:C(c.TAG_NAMES.STYLE,d)},T={},b={};Object.keys(m).forEach(function(e){var t=m[e],n=t.newTags,o=t.oldTags;n.length&&(T[e]=n),o.length&&(b[e]=m[e].oldTags)}),t&&t(),u(e,T,b)},M=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var o=n.getAttribute(c.HELMET_ATTRIBUTE),r=o?o.split(","):[],a=[].concat(r),i=Object.keys(t),s=0;s<i.length;s++){var u=i[s],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),r.indexOf(u)===-1&&r.push(u);var d=a.indexOf(u);d!==-1&&a.splice(d,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);r.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},C=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),o=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),r=Array.prototype.slice.call(o),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var o in t)if(t.hasOwnProperty(o))if(o===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(o===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s="undefined"==typeof t[o]?"":t[o];n.setAttribute(o,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),r.some(function(e,t){return i=t,n.isEqualNode(e)})?r.splice(i,1):a.push(n)}),r.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:r,newTags:a}},w=function(e){return Object.keys(e).reduce(function(t,n){var o="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+o:o},"")},N=function(e,t,n,o){var r=w(n),a=M(t);return r?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+r+">"+d(a,o)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+d(a,o)+"</"+e+">"},x=function(e,t,n){return t.reduce(function(t,o){var r=Object.keys(o).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var r="undefined"==typeof o[t]?t:t+'="'+d(o[t],n)+'"';return e?e+" "+r:r},""),a=o.innerHTML||o.cssText||"",i=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+r+(i?"/>":">"+a+"</"+e+">")},"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var o,r=(o={key:t},o[c.HELMET_ATTRIBUTE]=!0,o),a=I(n,r);return[s.default.createElement(c.TAG_NAMES.TITLE,a,t)]},G=function(e,t){return t.map(function(t,n){var o,r=(o={key:n},o[c.HELMET_ATTRIBUTE]=!0,o);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var o=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:o}}else r[n]=t[e]}),s.default.createElement(e,r)})},H=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return G(e,t)},toString:function(){return x(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,o=e.encode,r=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.scriptTags,l=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:H(c.TAG_NAMES.BASE,t,o),bodyAttributes:H(c.ATTRIBUTE_NAMES.BODY,n,o),htmlAttributes:H(c.ATTRIBUTE_NAMES.HTML,r,o),link:H(c.TAG_NAMES.LINK,a,o),meta:H(c.TAG_NAMES.META,i,o),noscript:H(c.TAG_NAMES.NOSCRIPT,s,o),script:H(c.TAG_NAMES.SCRIPT,u,o),style:H(c.TAG_NAMES.STYLE,l,o),title:H(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},o)}};t.convertReactPropstoHtmlAttributes=L,t.handleClientStateChange=S,t.mapStateOnServer=B,t.reducePropsToState=y,t.requestAnimationFrame=A,t.warn=g}).call(t,function(){return this}())},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n("./node_modules/react/react.js"),u=o(s),l=n("./node_modules/exenv/index.js"),c=o(l),d=n("./node_modules/shallowequal/index.js"),f=o(d);e.exports=function(e,t,n){function o(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function d(){m=e(p.map(function(e){return e.props})),T.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],m=void 0,T=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,f.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return u.default.createElement(l,this.props)},t}(s.Component);return T.displayName="SideEffect("+o(l)+")",T.canUseDOM=c.default.canUseDOM,T}}},"./node_modules/shallowequal/index.js":function(e,t){e.exports=function(e,t,n,o){var r=n?n.call(o,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var l=a[u];if(!s(l))return!1;var c=e[l],d=t[l];if(r=n?n.call(o,c,d,l):void 0,r===!1||void 0===r&&c!==d)return!1}return!0}},"./src/components/navigation/navigation.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n("./node_modules/react/react.js"),u=o(s),l=n("./node_modules/gatsby-link/index.js"),c=o(l),d=n("./src/components/navigation/navigation.module.css"),f=o(d),p=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:f.default.overlay},u.default.createElement("div",{className:f.default.pageLinks},u.default.createElement(c.default,{to:"/",className:f.default.link},"Home"),u.default.createElement(c.default,{to:"/about",className:f.default.link},"About Me"),u.default.createElement(c.default,{to:"/projects",className:f.default.link},"Projects"),u.default.createElement(c.default,{to:"/contact",className:f.default.link},"Contact")))},t}(s.Component),m=function(e){function t(){r(this,t);var n=a(this,e.call(this));return n.state={showMenu:!1},n}return i(t,e),t.prototype.onClick=function(){this.setState({showMenu:!this.state.showMenu})},t.prototype.render=function(){var e=this;return u.default.createElement("div",{className:f.default.menu,onClick:function(){return e.onClick()}},u.default.createElement("button",{style:{backgroundColor:"#292E31"}},u.default.createElement("div",{className:f.default.navBar1}),u.default.createElement("div",{className:f.default.navBar2}),u.default.createElement("div",{className:f.default.navBar3})),this.state.showMenu?u.default.createElement(p,null):null)},t}(s.Component);t.default=m,e.exports=t.default},"./src/components/navigation/navigation.module.css":function(e,t){e.exports={menu:"src-components-navigation----navigation-module---menu---2FbKU",navBar1:"src-components-navigation----navigation-module---navBar1---eVEt1",navBar2:"src-components-navigation----navigation-module---navBar2---1kZvV",navBar3:"src-components-navigation----navigation-module---navBar3---2WcT1",overlay:"src-components-navigation----navigation-module---overlay---2YBI-",pageLinks:"src-components-navigation----navigation-module---pageLinks---1Dwk4",link:"src-components-navigation----navigation-module---link---1TeOf",closeBtn:"src-components-navigation----navigation-module---closeBtn---KERql"}},"./src/layouts/index.css":function(e,t){},"./src/layouts/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n("./node_modules/react/react.js"),a=o(r),i=n("./node_modules/prop-types/index.js"),s=o(i),u=n("./node_modules/gatsby-link/index.js"),l=o(u),c=n("./node_modules/react-helmet/lib/Helmet.js"),d=o(c),f=n("./src/components/navigation/navigation.js"),p=o(f),m=n("./src/layouts/index.css"),T=(o(m),function(){return a.default.createElement("div",null,a.default.createElement("div",{className:"siteHeader",style:{background:"#474644",position:"fixed",top:0,left:0,width:"100%",zIndex:3}},a.default.createElement("div",{style:{display:"inline-block",marginTop:"6px",marginLeft:"6px",marginBottom:"10px",borderLeft:"3px solid red",borderTop:"3px solid red"}},a.default.createElement(l.default,{to:"/",style:{textDecoration:"none"}},a.default.createElement("h1",{style:{color:"white",paddingLeft:"6px",marginBottom:"0px"}},"Matt Mulit"),a.default.createElement("h2",{style:{marginBottom:0,color:"#A6BDD4",paddingLeft:"6px"}}," ","Web Developer")))),a.default.createElement(p.default,null))}),b=function(e){var t=e.children;return a.default.createElement("div",null,a.default.createElement(d.default,{title:"Matt Mulit (cheesegits)",meta:[{name:"description",content:"The professional site of Matt Mulit - Web Developer.  Currently available for hire."},{name:"keywords",content:"Matt, Mulit, Web, App, Developer, JavaScript, React"}]}),a.default.createElement(T,null),a.default.createElement("div",null,a.default.createElement("div",{className:"children"},t())),a.default.createElement("div",{style:{display:"block",position:"fixed",bottom:0,paddingTop:"5px",width:"100%",background:"#474644",zIndex:2}},a.default.createElement("div",{style:{float:"right",color:"white",marginRight:6,marginBottom:6,borderRight:"1.5px solid red",paddingRight:"5px",borderBottom:"1.5px solid red",paddingBottom:"0px"}},a.default.createElement("h3",{style:{marginBottom:5,fontFamily:"Rock Salt"}},"Together",a.default.createElement("span",{style:{color:"#A6BDD4",fontFamily:"Bungee Hairline"}}," ","We Build")))))};b.propTypes={children:s.default.func},t.default=b,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-56bb6348e0647051a68c.js.map