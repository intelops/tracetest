"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[7342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"required-attributes",title:"required-attributes",description:"Enforce required attributes by span type | The Tracetest Analyzer analyzes OpenTelemetry traces",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},s=void 0,l={unversionedId:"analyzer/rules/required-attributes",id:"analyzer/rules/required-attributes",title:"required-attributes",description:"Enforce required attributes by span type | The Tracetest Analyzer analyzes OpenTelemetry traces",source:"@site/docs/analyzer/rules/required-attributes.mdx",sourceDirName:"analyzer/rules",slug:"/analyzer/rules/required-attributes",permalink:"/analyzer/rules/required-attributes",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/analyzer/rules/required-attributes.mdx",tags:[],version:"current",frontMatter:{id:"required-attributes",title:"required-attributes",description:"Enforce required attributes by span type | The Tracetest Analyzer analyzes OpenTelemetry traces",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"attribute-naming",permalink:"/analyzer/rules/attribute-naming"},next:{title:"no-empty-attributes",permalink:"/analyzer/rules/no-empty-attributes"}},o={},p=[{value:"Rule Details",id:"rule-details",level:2},{value:"HTTP spans:",id:"http-spans",level:3},{value:"Database spans:",id:"database-spans",level:3},{value:"RPC spans:",id:"rpc-spans",level:3},{value:"Messaging spans:",id:"messaging-spans",level:3},{value:"FaaS spans:",id:"faas-spans",level:3},{value:"Options",id:"options",level:2},{value:"When Not To Use It",id:"when-not-to-use-it",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Enforce required attributes by span type."),(0,a.kt)("h2",{id:"rule-details"},"Rule Details"),(0,a.kt)("p",null,"All instrumentations must populate the required attributes by span type based on the semantic conventions."),(0,a.kt)("p",null,"The following OTel semantic conventions for span required attributes are defined:"),(0,a.kt)("h3",{id:"http-spans"},"HTTP spans:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- http.method\n")),(0,a.kt)("p",null,"If span kind is ",(0,a.kt)("inlineCode",{parentName:"p"},'"server"'),", the required attributes include:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- http.target\n- http.scheme\n- net.host.name\n")),(0,a.kt)("p",null,"If span kind is ",(0,a.kt)("inlineCode",{parentName:"p"},'"client"'),", the required attributes include:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- http.url\n- net.peer.name\n")),(0,a.kt)("h3",{id:"database-spans"},"Database spans:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- db.system\n")),(0,a.kt)("h3",{id:"rpc-spans"},"RPC spans:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- rpc.system\n- neet.peer.name\n")),(0,a.kt)("h3",{id:"messaging-spans"},"Messaging spans:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- messaging.system\n- messaging.operation\n")),(0,a.kt)("h3",{id:"faas-spans"},"FaaS spans:"),(0,a.kt)("p",null,"If span kind is ",(0,a.kt)("inlineCode",{parentName:"p"},'"server"'),", the required attributes include:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- faas.trigger\n")),(0,a.kt)("p",null,"If span kind is ",(0,a.kt)("inlineCode",{parentName:"p"},'"client"'),", the required attributes include:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- faas.invoked_name\n- faas.invoked_provider\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"This rule has the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"error"')," requires span attributes to follow the OTel semantic convention"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"disabled"')," disables the span required attributes verification"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"warning"')," verifies required attributes to follow the OTel semantic convention but does not impact the analyzer score")),(0,a.kt)("h2",{id:"when-not-to-use-it"},"When Not To Use It"),(0,a.kt)("p",null,"If you don\u2019t want to enforce OTel span required attributes, don\u2019t enable this rule."))}c.isMDXComponent=!0}}]);