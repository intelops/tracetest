"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[7792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={id:"running-test-suites",title:"Running Test Suites From the Command Line Interface (CLI)",description:"Run Tracetest Test Suites from the Command Line Interface (CLI) to integrate it into your CI/CD process or your local development workflow.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},s=void 0,o={unversionedId:"cli/running-test-suites",id:"cli/running-test-suites",title:"Running Test Suites From the Command Line Interface (CLI)",description:"Run Tracetest Test Suites from the Command Line Interface (CLI) to integrate it into your CI/CD process or your local development workflow.",source:"@site/docs/cli/running-test-suites.mdx",sourceDirName:"cli",slug:"/cli/running-test-suites",permalink:"/cli/running-test-suites",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/cli/running-test-suites.mdx",tags:[],version:"current",frontMatter:{id:"running-test-suites",title:"Running Test Suites From the Command Line Interface (CLI)",description:"Run Tracetest Test Suites from the Command Line Interface (CLI) to integrate it into your CI/CD process or your local development workflow.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Defining Test Suites as Text Files",permalink:"/cli/creating-test-suites"},next:{title:"Defining Variable Sets as Text Files",permalink:"/cli/creating-variable-sets"}},l={},u=[{value:"Running Your First Test Suite",id:"running-your-first-test-suite",level:2},{value:"Running a Test Suite That Uses Variable Sets",id:"running-a-test-suite-that-uses-variable-sets",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once you have created a Test Suite, whether from the Tracetest UI or via a text editor, you will need the capability to run it via the Command Line Interface (CLI) to integrate it into your CI/CD process or your local development workflow."),(0,a.kt)("p",null,"The command to run a Test Suite is the same as running a test from the CLI."),(0,a.kt)("p",null,"The documentation for running a test via the CLI can be found here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_run"},"tracetest run"),": This page provides examples of using this command.")),(0,a.kt)("h2",{id:"running-your-first-test-suite"},"Running Your First Test Suite"),(0,a.kt)("p",null,"To run a Test Suite, give the path to the Test Suite definition file with the ",(0,a.kt)("inlineCode",{parentName:"p"},"'-f'")," option. This will launch a Test Suite, providing us with a link to the created Test Suite run."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tracetest run testsuite -f path/to/testsuite.yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output:"',title:'"Output:"'},"\u2714 Pokemon Test Suite (http://localhost:11633/testsuite/xcGqfHl4g/run/3)\n    \u2714 Pokeshop - Import (http://localhost:11633/test/XRHjfH_4R/run/4/test)\n    \u2714 Pokeshop - List (http://localhost:11633/test/QvPjBH_4g/run/4/test)\n")),(0,a.kt)("h2",{id:"running-a-test-suite-that-uses-variable-sets"},"Running a Test Suite That Uses Variable Sets"),(0,a.kt)("p",null,"There are two ways of referencing a variable set when running a Test Suite."),(0,a.kt)("p",null,"You can reference an existing variable set using its id. For example, given this defined variable set with an id of ",(0,a.kt)("inlineCode",{parentName:"p"},"'testenv'"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"testenv",src:n(81754).Z,width:"1736",height:"620"})),(0,a.kt)("p",null,"We can run a Test Suite and specify that variable set with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tracetest run testsuite -f path/to/testsuite.yaml --vars testenv\n")),(0,a.kt)("p",null,"You can also reference a variable set resource file which will be used to create a new variable set or update an existing one. For example, if you have a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"local.env")," with this content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"type: VariableSet\nspec:\n  id: local.env\n  name: local.env\n  values:\n  - key: POKEID\n    value: 45\n  - key: POKENAME\n    value: vileplume\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tracetest run test -f path/to/testsuite.yaml --vars path/to/local.env\n")),(0,a.kt)("p",null,"If you use the variable set resource approach, a new variable set will be created in Tracetest."),(0,a.kt)("p",null,"The second approach is very useful if you are running tests from a CI pipeline."))}m.isMDXComponent=!0},81754:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/show-environment-definition-69ba7aef6b87d684e9e8c311e5197aa0.png"}}]);