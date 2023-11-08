"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[3010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={id:"cli-installation-reference",title:"CLI Installation Reference",description:'Tracetest adds versions to tests by giving the initial version "v1". When something changes in your test it\'s detected and the test increases the version by 1.',keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},s=void 0,o={unversionedId:"cli/cli-installation-reference",id:"cli/cli-installation-reference",title:"CLI Installation Reference",description:'Tracetest adds versions to tests by giving the initial version "v1". When something changes in your test it\'s detected and the test increases the version by 1.',source:"@site/docs/cli/cli-installation-reference.mdx",sourceDirName:"cli",slug:"/cli/cli-installation-reference",permalink:"/cli/cli-installation-reference",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/cli/cli-installation-reference.mdx",tags:[],version:"current",frontMatter:{id:"cli-installation-reference",title:"CLI Installation Reference",description:'Tracetest adds versions to tests by giving the initial version "v1". When something changes in your test it\'s detected and the test increases the version by 1.',keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Creating Variable Sets",permalink:"/web-ui/creating-variable-sets"},next:{title:"Configuring your CLI",permalink:"/cli/configuring-your-cli"}},l={},c=[{value:"Installing the Tracetest CLI in different operating systems",id:"installing-the-tracetest-cli-in-different-operating-systems",level:2},{value:"Linux/MacOS",id:"linuxmacos",level:3},{value:"Homebrew",id:"homebrew",level:4},{value:"APT",id:"apt",level:4},{value:"YUM",id:"yum",level:4},{value:"Windows",id:"windows",level:3},{value:"Chocolatey",id:"chocolatey",level:4},{value:"From source",id:"from-source",level:4},{value:"Installing a specific version of the Tracetest CLI",id:"installing-a-specific-version-of-the-tracetest-cli",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page contains a reference of all options for installing Tracetest CLI."),(0,r.kt)("p",null,"Tracetest has a command line interface (CLI) which includes an ",(0,r.kt)("strong",{parentName:"p"},"install wizard")," that helps to install the Tracetest server into Docker or Kubernetes. The CLI can also be used to run tests, download or upload tests, and manage much of the capability of Tracetest."),(0,r.kt)("admonition",{title:"Want more info?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Read more about the installation guide ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/installation"},"here"),".")),(0,r.kt)("h2",{id:"installing-the-tracetest-cli-in-different-operating-systems"},"Installing the Tracetest CLI in different operating systems"),(0,r.kt)("p",null,"Every time we release a new version of Tracetest, we generate binaries for Linux, MacOS, and Windows. Supporting both amd64, and ARM64 architectures, in ",(0,r.kt)("inlineCode",{parentName:"p"},"tar.gz"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deb"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rpm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exe")," formats."),(0,r.kt)("p",null,"You can find the latest version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/releases/latest"},"here"),"."),(0,r.kt)("h3",{id:"linuxmacos"},"Linux/MacOS"),(0,r.kt)("p",null,"Tracetest CLI can be installed automatically using the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -L https://raw.githubusercontent.com/kubeshop/tracetest/main/install-cli.sh | bash\n")),(0,r.kt)("p",null,"It works for systems with Homebrew, ",(0,r.kt)("inlineCode",{parentName:"p"},"apt-get"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dpkg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yum"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rpm")," installed, and if no package manager is available, it will try to download the build and install it manually."),(0,r.kt)("p",null,"You can also manually install it with one of the following methods."),(0,r.kt)("h4",{id:"homebrew"},"Homebrew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install kubeshop/tracetest/tracetest\n")),(0,r.kt)("h4",{id:"apt"},"APT"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# requirements for our deb repo to work\nsudo apt-get update && sudo apt-get install -y apt-transport-https ca-certificates\n\n# add repo\necho "deb [trusted=yes] https://apt.fury.io/tracetest/ /" | sudo tee /etc/apt/sources.list.d/fury.list\n\n# update and install\nsudo apt-get update\nsudo apt-get install tracetest\n')),(0,r.kt)("h4",{id:"yum"},"YUM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# add repository\ncat <<EOF | sudo tee /etc/yum.repos.d/tracetest.repo\n[tracetest]\nname=Tracetest\nbaseurl=https://yum.fury.io/tracetest/\nenabled=1\ngpgcheck=0\nEOF\n\n# install\nsudo yum install tracetest --refresh\n")),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("h4",{id:"chocolatey"},"Chocolatey"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"choco source add --name=kubeshop_repo --source=https://chocolatey.kubeshop.io/chocolatey ; choco install tracetest\n")),(0,r.kt)("h4",{id:"from-source"},"From source"),(0,r.kt)("p",null,"Download one of the files from the latest tag, extract to your machine, and then ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/41895179"},"add the tracetest binary to your PATH variable"),"."),(0,r.kt)("h2",{id:"installing-a-specific-version-of-the-tracetest-cli"},"Installing a specific version of the Tracetest CLI"),(0,r.kt)("p",null,"You can request to install a specific version by appending ",(0,r.kt)("inlineCode",{parentName:"p"},"-s -- [version]")," to the installation script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://raw.githubusercontent.com/kubeshop/tracetest/main/install-cli.sh | bash -s -- [version]\n")),(0,r.kt)("p",null,"If you would want version ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.13.0")," you would run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://raw.githubusercontent.com/kubeshop/tracetest/main/install-cli.sh | bash -s -- v0.12.1\n")),(0,r.kt)("p",null,"This method skips package managers and directly downloads the build from the release page."),(0,r.kt)("p",null,"Due to this, if the Tracetest CLI was previously installed using a package manager, that version will still exist in the system, so depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH")," environment variable configuration, that version might take precedence over the specific version you installed with the install script."))}d.isMDXComponent=!0}}]);