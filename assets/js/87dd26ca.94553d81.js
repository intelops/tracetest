"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[3558],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),h=s,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:s,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},72902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(87462),s=(a(67294),a(3905));const r={id:"what-is-trace-based-testing",title:"What is Trace-Based Testing",description:"Trace-based testing is a means of conducting deep integration or system tests by utilizing the rich data contained in a distributed system trace.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},i=void 0,c={unversionedId:"concepts/what-is-trace-based-testing",id:"concepts/what-is-trace-based-testing",title:"What is Trace-Based Testing",description:"Trace-based testing is a means of conducting deep integration or system tests by utilizing the rich data contained in a distributed system trace.",source:"@site/docs/concepts/what-is-trace-based-testing.mdx",sourceDirName:"concepts",slug:"/concepts/what-is-trace-based-testing",permalink:"/concepts/what-is-trace-based-testing",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/concepts/what-is-trace-based-testing.mdx",tags:[],version:"current",frontMatter:{id:"what-is-trace-based-testing",title:"What is Trace-Based Testing",description:"Trace-based testing is a means of conducting deep integration or system tests by utilizing the rich data contained in a distributed system trace.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Sampling Tracetest Spans",permalink:"/configuration/sampling-tracetest-spans"},next:{title:"Tracetest Agent",permalink:"/concepts/agent"}},o={},l=[{value:"What is a Distributed Trace?",id:"what-is-a-distributed-trace",level:2},{value:"What is a Span?",id:"what-is-a-span",level:3},{value:"What Data do Spans Contain?",id:"what-data-do-spans-contain",level:3},{value:"What are Attributes?",id:"what-are-attributes",level:3},{value:"What is a Test Spec?",id:"what-is-a-test-spec",level:2},{value:"What is a Selector?",id:"what-is-a-selector",level:3},{value:"What is a Check?",id:"what-is-a-check",level:3},{value:"What is a Span Signature?",id:"what-is-a-span-signature",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Trace-based testing")," is a means of conducting deep integration or system tests by utilizing the rich data contained in a distributed system trace."),(0,s.kt)("h2",{id:"what-is-a-distributed-trace"},"What is a Distributed Trace?"),(0,s.kt)("p",null,"A Distributed Trace, more commonly known as a Trace, records the paths taken by requests (made by an application or end-user) take as they propagate through multi-service architectures, like microservice and serverless applications. ",(0,s.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/concepts/observability-primer/"},"Source - OpenTelemetry.io")),(0,s.kt)("p",null,"In Tracetest, after selecting a test from the first screen and clicking on the ",(0,s.kt)("strong",{parentName:"p"},"Trace")," tab, you will see the distributed trace for the selected test:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Trace Example",src:a(10678).Z,width:"2868",height:"1582"})),(0,s.kt)("h3",{id:"what-is-a-span"},"What is a Span?"),(0,s.kt)("p",null,"Traces are comprised of spans. A span represents a single operation in a trace. Spans are nested, typically with a parent child relationship to form a deeply nested tree."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Span Example",src:a(70556).Z,width:"2874",height:"1592"})),(0,s.kt)("h3",{id:"what-data-do-spans-contain"},"What Data do Spans Contain?"),(0,s.kt)("p",null,"A span contains the data about the operation it represents. This data includes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The span name."),(0,s.kt)("li",{parentName:"ul"},"Start and end timestamp."),(0,s.kt)("li",{parentName:"ul"},"List of events (if instrumented)."),(0,s.kt)("li",{parentName:"ul"},"Attributes")),(0,s.kt)("h3",{id:"what-are-attributes"},"What are Attributes?"),(0,s.kt)("p",null,"Attributes are a key-value pair, and they contain information about the operation. A developer can manually add additional attributes to a span, enriching the data. There are ",(0,s.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/reference/specification/trace/semantic_conventions/"},"Semantic Conventions")," that provide recommended names for the attributes for common types of calls such as database, http, messaging, etc."),(0,s.kt)("h2",{id:"what-is-a-test-spec"},"What is a Test Spec?"),(0,s.kt)("p",null,"In Tracetest, a Test Spec is comprised of two parts:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Selectors"),(0,s.kt)("li",{parentName:"ul"},"Checks")),(0,s.kt)("h3",{id:"what-is-a-selector"},"What is a Selector?"),(0,s.kt)("p",null,"A selector contains criteria to limit the scope of the spans from a trace that we wish to assert against. A selector can be very narrow, only selecting on one span, or very wide, selecting all spans or all spans of a certain type or other characteristics. Underlying this capability is a ",(0,s.kt)("a",{parentName:"p",href:"./selectors"},"selector language"),"."),(0,s.kt)("h3",{id:"what-is-a-check"},"What is a Check?"),(0,s.kt)("p",null,"A check is a logical verification that will be performed on all spans that match the selector. It is comprised of an attribute, a comparison operator and a value."),(0,s.kt)("h3",{id:"what-is-a-span-signature"},"What is a Span Signature?"),(0,s.kt)("p",null,"A span signature is an automatically computed selector that has enough elements to specify a single span. It uses a combination of attributes in the selected span to automatically build the selector. If a trace has multiple spans that are almost identical, the span signature may still match more than one span. You can alter the selector in this case to be more specific by adding other attributes or specifying an ancestor span."))}u.isMDXComponent=!0},70556:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/span-example-e71e6c690b7c85e91ccceb47d53891ea.png"},10678:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trace-example-4b8e9df276d5909dac8809ba620b5d1c.png"}}]);