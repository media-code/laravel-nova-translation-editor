!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=function(t,e,n,a,r,o){var s,i=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(s=t,i=t.default);var c,u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):a&&(c=a),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:s,exports:i,options:u}}},function(t,e,n){n(2),t.exports=n(14)},function(t,e,n){Nova.booting(function(t,e,a){e.addRoutes([{name:"laravel-nova-translation-editor",path:"/laravel-nova-translation-editor",component:n(3)}])})},function(t,e,n){var a=n(0)(n(9),n(13),!1,function(t){n(4)},null,null);t.exports=a.exports},function(t,e,n){var a=n(5);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(7)("5d8c1db4",a,!0,{})},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var r=(s=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(a[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=n(8),o={},s=a&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,c=!1,u=function(){},d=null,f="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t){for(var e=0;e<t.length;e++){var n=t[e],a=o[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(_(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(_(n.parts[r]));o[n.id]={id:n.id,refs:1,parts:s}}}}function h(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function _(t){var e,n,a=document.querySelector("style["+f+'~="'+t.id+'"]');if(a){if(c)return u;a.parentNode.removeChild(a)}if(v){var r=l++;a=i||(i=h()),e=y.bind(null,a,r,!1),n=y.bind(null,a,r,!0)}else a=h(),e=function(t,e){var n=e.css,a=e.media,r=e.sourceMap;a&&t.setAttribute("media",a);d.ssrId&&t.setAttribute(f,e.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}t.exports=function(t,e,n,a){c=n,d=a||{};var s=r(t,e);return p(s),function(e){for(var n=[],a=0;a<s.length;a++){var i=s[a];(l=o[i.id]).refs--,n.push(l)}e?p(s=r(t,e)):s=[];for(a=0;a<n.length;a++){var l;if(0===(l=n[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}};var g,m=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function y(t,e,n,a){var r=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t,e){for(var n=[],a={},r=0;r<e.length;r++){var o=e[r],s=o[0],i={id:t+":"+r,css:o[1],media:o[2],sourceMap:o[3]};a[s]?a[s].parts.push(i):n.push(a[s]={id:s,parts:[i]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(10),r=n.n(a);e.default={components:{ClickToEdit:r.a},data:function(){return{apiURL:"/nova-vendor/laravel-nova-translation-editor/",active_locale:Nova.config.locale,translations:null,active_tab:null}},mounted:function(){this.getTranslations()},methods:{getTranslations:function(){var t=this;Nova.request().get(this.apiURL+"index").then(function(e){t.translations=0!==e.data.length?e.data:null,t.active_tab=0!==e.data.length?Object.keys(e.data)[0]:null})}}}},function(t,e,n){var a=n(0)(n(11),n(12),!1,null,null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["value","group","value_key","locale"],data:function(){return{apiURL:"/nova-vendor/laravel-nova-translation-editor/",edit:!1,groupLocal:this.group,value_keyLocal:this.value_key,localeLocal:this.locale,valueLocal:this.value}},methods:{save:function(){var t=this;this.edit=!1;var e={group:this.groupLocal,key:this.value_keyLocal,locale:this.localeLocal,text:this.valueLocal};Nova.request().post(this.apiURL+"save",e).then(function(e){t.$toasted.show("Saved",{type:"success"})}).catch(function(e){t.$toasted.show(e,{type:"error"})})}},watch:{value:function(){this.valueLocal=this.value,this.groupLocal=this.group,this.value_keyLocal=this.value_key,this.localeLocal=this.locale}},directives:{focus:{inserted:function(t){t.focus()}}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.edit?n("div",{staticClass:"flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.valueLocal,expression:"valueLocal"},{name:"focus",rawName:"v-focus"}],staticClass:"py-2 w-5/6",attrs:{type:"text"},domProps:{value:t.valueLocal},on:{input:function(e){e.target.composing||(t.valueLocal=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-primary w-1/6",on:{click:t.save}},[t._v("Save")])]):n("p",{on:{click:function(e){t.edit=!0}}},[t._v("\n        "+t._s(t.valueLocal)+"\n    ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("heading",{staticClass:"mb-6"},[t._v("Laravel Nova Translation Editor")]),t._v(" "),n("a",{attrs:{href:"?lang=nl"}},[t._v("nl")]),t._v(" "),n("a",{attrs:{href:"?lang=de"}},[t._v("de")]),t._v(" "),n("a",{attrs:{href:"?lang=en"}},[t._v("en")]),t._v(" "),n("a",{attrs:{href:"?lang=es"}},[t._v("es")]),t._v(" "),t.translations?n("card",{staticClass:"flex flex-col my-6"},[n("nav",{staticClass:"flex border-b border-50"},t._l(t.translations,function(e,a){return n("button",{key:a,staticClass:"btn px-4 py-2",class:t.active_tab===a?"btn-primary text-white":"btn-link",on:{click:function(e){t.active_tab=a}}},[t._v(t._s(a)+"\n            ")])}),0),t._v(" "),t._l(t.translations,function(e,a){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.active_tab===a,expression:"active_tab === translation_file"}],key:a+"tab"},[n("h2",{staticClass:"px-3 py-6 text-80"},[t._v("config('"+t._s(a)+"')")]),t._v(" "),n("table",{staticClass:"table w-full",attrs:{cellpadding:"0",cellspacing:"0","data-testid":"resource-table"}},[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Path")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("String")])])]),t._v(" "),t._l(e,function(e,r){return n("tbody",["string"==typeof e?n("tr",[n("td",{staticClass:"text-left"},[t._v(t._s(r))]),t._v(" "),n("td",{staticClass:"text-left"},[n("ClickToEdit",{attrs:{value:e,group:a,value_key:r,locale:t.active_locale}})],1)]):t._l(e,function(e,o){return n("tr",[n("td",{staticClass:"text-left"},[t._v(t._s(r+"."+o))]),t._v(" "),n("td",{staticClass:"text-left"},[n("ClickToEdit",{attrs:{value:e,group:a,value_key:r+"."+o,locale:t.active_locale}})],1)])})],2)})],2)])})],2):t._e()],1)},staticRenderFns:[]}},function(t,e){}]);