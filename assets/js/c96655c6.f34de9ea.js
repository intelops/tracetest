"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[2881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),g=i,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={id:"creating-test-suites",title:"Creating Test Suites",description:"Tracetest enables creating test suites visually in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},s=void 0,o={unversionedId:"web-ui/creating-test-suites",id:"web-ui/creating-test-suites",title:"Creating Test Suites",description:"Tracetest enables creating test suites visually in the Tracetest Web UI.",source:"@site/docs/web-ui/creating-test-suites.mdx",sourceDirName:"web-ui",slug:"/web-ui/creating-test-suites",permalink:"/web-ui/creating-test-suites",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/web-ui/creating-test-suites.mdx",tags:[],version:"current",frontMatter:{id:"creating-test-suites",title:"Creating Test Suites",description:"Tracetest enables creating test suites visually in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Undefined Variables",permalink:"/web-ui/undefined-variables"},next:{title:"Creating Variable Sets",permalink:"/web-ui/creating-variable-sets"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page showcases how to create and edit Test Suites in the Web UI."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/concepts/test-suites"},"To read more about Test Suites check out Test Suites concepts page."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Main Screen",src:n(96138).Z,width:"2874",height:"1556"})),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"Create")," button and select ",(0,i.kt)("strong",{parentName:"p"},"Create New Test Suite")," in the drop down:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create a Test Button",src:n(52115).Z,width:"2874",height:"1580"})),(0,i.kt)("p",null,"Give your Test Suite a name, and click ",(0,i.kt)("strong",{parentName:"p"},"Next"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1685712802/docs/beta.tracetest.io__page_1_jynf6o.png",alt:"Name the Test Suite"})),(0,i.kt)("p",null,"Next, select which tests to run in the Test Suite and click ",(0,i.kt)("strong",{parentName:"p"},"Create & Run"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1685712954/docs/beta.tracetest.io__page_1_1_agjvg0.png",alt:"Select Tests in Test Suite"})),(0,i.kt)("p",null,"The Test Suite will start:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Running Test Suite",src:n(46432).Z,width:"2874",height:"1576"})),(0,i.kt)("p",null," On the automate tab, you find methods to automate the current Test Suite, including the YAML test file and the CLI command for Tracetest."),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"Automate Tab",src:n(1147).Z,width:"2874",height:"1570"})),(0,i.kt)("p",null," With all of the toggles ",(0,i.kt)("inlineCode",{parentName:"p"},"Off"),", each criteria is tested. Toggle individual criteria ",(0,i.kt)("inlineCode",{parentName:"p"},"On"),", to select on certain checks for the selected test."),(0,i.kt)("p",null,"When the Test Suite is finished, you will get the following result:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1685713712/docs/demo.tracetest.io__x0o1gu.png",alt:"Finished Test Suite"})),(0,i.kt)("p",null,"You can now view individual ",(0,i.kt)("a",{parentName:"p",href:"/web-ui/test-results"},"Test Results")," executed by the Test Suite by clicking on any of the tests in the list."))}d.isMDXComponent=!0},1147:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/automate-tab-66face0bd265d12c5c525c1ba17c753d.png"},52115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-button-0.11-e551a0ebce3bae9cf7392488d776e4db.png"},96138:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/main-screen-0.11-cfb6b328cd6a37a3da4fff264473b8b4.png"},46432:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/running-testsuite-a9ff1bc49f2327f15d27df3b5b59e71e.png"}}]);