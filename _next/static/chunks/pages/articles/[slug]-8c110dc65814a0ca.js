(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{2802:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[slug]",function(){return n(1587)}])},8882:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(5893),i=n(512);function a(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.Z)(t,"prose dark:prose-invert"),...n})}},4232:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var r=n(5893),i=n(9008),a=n.n(i);function o(e){let{data:t,schema:n}=e;return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:t.pageTitle}),n&&(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n)}}),(0,r.jsx)("meta",{name:"description",content:t.pageDescription}),(0,r.jsx)("link",{rel:"canonical",href:`https://www.michelmurabito.com${t.pageLink}`}),(0,r.jsx)("meta",{property:"og:title",content:`${t.pageTitle}`}),(0,r.jsx)("meta",{property:"og:description",content:t.pageDescription}),(0,r.jsx)("meta",{property:"og:url",content:`https://www.michelmurabito.com${t.pageLink}`}),(0,r.jsx)("meta",{property:"og:image",content:t.pageImage}),(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:`${t.pageTitle}`}),(0,r.jsx)("meta",{name:"twitter:description",content:t.pageDescription}),(0,r.jsx)("meta",{name:"twitter:image",content:t.pageImage}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}},7330:function(e,t,n){"use strict";function r(e){return e.includes(":00Z")?new Date(e).toLocaleDateString("en-EN",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}):new Date(`${e}T00:00:00Z`).toLocaleDateString("en-EN",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}n.d(t,{p6:function(){return r}})},1587:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return f}});var r=n(5893),i=n(7294),a=n(9332),o=n(2329),l=n(3223),c=n(8882),s=n(7330);n(1864);var h=n(4232);function u(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",...e,children:(0,r.jsx)("path",{d:"M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}var d=!0;function f(e){let{data:t,schema:n}=e,d=(0,a.useRouter)(),{previousPathname:f}=(0,i.useContext)(o.I);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.p,{data:t,schema:n}),(0,r.jsx)(l.W2,{className:"mt-16 lg:mt-32",children:(0,r.jsx)("div",{className:"xl:relative",children:(0,r.jsxs)("div",{className:"mx-auto max-w-2xl",children:[f&&(0,r.jsx)("button",{type:"button",onClick:()=>d.back(),"aria-label":"Go back to articles",className:"group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20",children:(0,r.jsx)(u,{className:"h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"})}),(0,r.jsxs)("article",{children:[(0,r.jsxs)("header",{className:"flex flex-col",children:[(0,r.jsx)("h1",{className:"mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100",children:t.article.title}),(0,r.jsxs)("time",{dateTime:t.article.date,className:"order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",children:[(0,r.jsx)("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"}),(0,r.jsx)("span",{className:"ml-3",children:(0,s.p6)(t.article.date)})]})]}),(0,r.jsx)(c.M,{className:"mt-8","data-mdx-content":!0,children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:t.children}})})]})]})})})]})}},1864:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",i=0,a=-1,o=0,l=0;l<=e.length;++l){if(l<e.length)n=e.charCodeAt(l);else if(47===n)break;else n=47;if(47===n){if(a===l-1||1===o);else if(a!==l-1&&2===o){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){-1===c?(r="",i=0):i=(r=r.slice(0,c)).length-1-r.lastIndexOf("/"),a=l,o=0;continue}}else if(2===r.length||1===r.length){r="",i=0,a=l,o=0;continue}}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(a+1,l):r=e.slice(a+1,l),i=l-a-1;a=l,o=0}else 46===n&&-1!==o?++o:o=-1}return r}var r={resolve:function(){for(var e,r,i="",a=!1,o=arguments.length-1;o>=-1&&!a;o--)o>=0?r=arguments[o]:(void 0===e&&(e=""),r=e),t(r),0!==r.length&&(i=r+"/"+i,a=47===r.charCodeAt(0));return(i=n(i,!a),a)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var i=arguments[n];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=r.resolve(e))===(n=r.resolve(n)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var a=e.length,o=a-i,l=1;l<n.length&&47===n.charCodeAt(l);++l);for(var c=n.length-l,s=o<c?o:c,h=-1,u=0;u<=s;++u){if(u===s){if(c>s){if(47===n.charCodeAt(l+u))return n.slice(l+u+1);if(0===u)return n.slice(l+u)}else o>s&&(47===e.charCodeAt(i+u)?h=u:0===u&&(h=0));break}var d=e.charCodeAt(i+u);if(d!==n.charCodeAt(l+u))break;47===d&&(h=u)}var f="";for(u=i+h+1;u<=a;++u)(u===a||47===e.charCodeAt(u))&&(0===f.length?f+="..":f+="/..");return f.length>0?f+n.slice(l+h):(l+=h,47===n.charCodeAt(l)&&++l,n.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,i=-1,a=!0,o=e.length-1;o>=1;--o)if(47===(n=e.charCodeAt(o))){if(!a){i=o;break}}else a=!1;return -1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var r,i=0,a=-1,o=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var l=n.length-1,c=-1;for(r=e.length-1;r>=0;--r){var s=e.charCodeAt(r);if(47===s){if(!o){i=r+1;break}}else -1===c&&(o=!1,c=r+1),l>=0&&(s===n.charCodeAt(l)?-1==--l&&(a=r):(l=-1,a=c))}return i===a?a=c:-1===a&&(a=e.length),e.slice(i,a)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!o){i=r+1;break}}else -1===a&&(o=!1,a=r+1);return -1===a?"":e.slice(i,a)},extname:function(e){t(e);for(var n=-1,r=0,i=-1,a=!0,o=0,l=e.length-1;l>=0;--l){var c=e.charCodeAt(l);if(47===c){if(!a){r=l+1;break}continue}-1===i&&(a=!1,i=l+1),46===c?-1===n?n=l:1!==o&&(o=1):-1!==n&&(o=-1)}return -1===n||-1===i||0===o||1===o&&n===i-1&&n===r+1?"":e.slice(n,i)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var i=e.charCodeAt(0),a=47===i;a?(r.root="/",n=1):n=0;for(var o=-1,l=0,c=-1,s=!0,h=e.length-1,u=0;h>=n;--h){if(47===(i=e.charCodeAt(h))){if(!s){l=h+1;break}continue}-1===c&&(s=!1,c=h+1),46===i?-1===o?o=h:1!==u&&(u=1):-1!==o&&(u=-1)}return -1===o||-1===c||0===u||1===u&&o===c-1&&o===l+1?-1!==c&&(0===l&&a?r.base=r.name=e.slice(1,c):r.base=r.name=e.slice(l,c)):(0===l&&a?(r.name=e.slice(1,o),r.base=e.slice(1,c)):(r.name=e.slice(l,o),r.base=e.slice(l,c)),r.ext=e.slice(o,c)),l>0?r.dir=e.slice(0,l-1):a&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}},o=!0;try{t[e](a,a.exports,r),o=!1}finally{o&&delete n[e]}return a.exports}r.ab="//";var i=r(114);e.exports=i}()},9008:function(e,t,n){e.exports=n(7828)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=2802)}),_N_E=e.O()}]);