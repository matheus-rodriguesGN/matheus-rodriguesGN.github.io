(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(229)),c=n(236),l=n(237),s={id:"node",title:"NodeJS",hide_title:!0,sidebar_label:"NodeJS"},i={id:"Instalacao/node",isDocsHomePage:!1,title:"NodeJS",description:"NodeJS",source:"@site/docs\\Instalacao\\Node.md",permalink:"/docs/Instalacao/node",sidebar_label:"NodeJS",sidebar:"someSidebar",previous:{title:"PHP",permalink:"/docs/Instalacao/php"},next:{title:"Python",permalink:"/docs/Instalacao/python"}},u=[{value:"Instalando via NPM",id:"instalando-via-npm",children:[]},{value:"Testado com",id:"testado-com",children:[]},{value:"Uso B\xe1sico",id:"uso-b\xe1sico",children:[]},{value:"Exemplos",id:"exemplos",children:[]},{value:"Testes",id:"testes",children:[]}],b={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},"NodeJS"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("p",null,"Nossa API \xe9 ",Object(o.b)("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\ne responde em ",Object(o.b)("a",{href:"https://www.json.org/json-en.html"},"JSON"),". A Gerencianet utiliza ",Object(o.b)("a",{href:"https://oauth.net/"},"OAuth")," para fornecer acesso autorizado \xe0 API. Nossa SDK de NodeJS j\xe1 est\xe1 preparada para realizar essa autentica\xe7\xe3o automaticamente."),Object(o.b)("p",null,"A seguir, confira os procedimentos para instala\xe7\xe3o da SDK da Gerencianet em NodeJS:"),Object(o.b)("h2",{id:"instalando-via-npm"},"Instalando via NPM"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ npm install gn-api-sdk-node\n")),Object(o.b)("h2",{id:"testado-com"},"Testado com"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Node ",Object(o.b)("inlineCode",{parentName:"li"},"0.12.7"),", ",Object(o.b)("inlineCode",{parentName:"li"},"4.4.0")," , e ",Object(o.b)("inlineCode",{parentName:"li"},"4.4.4"))),Object(o.b)("h2",{id:"uso-b\xe1sico"},"Uso B\xe1sico"),Object(o.b)("p",null,"Referencie o m\xf3dulo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"var Gerencianet = require('gn-api-sdk-node');\n")),Object(o.b)("p",null,"Defina suas credenciais e se voc\xea deseja usar sandbox ou n\xe3o:"),Object(o.b)(c.a,{defaultValue:"Nodejs",values:[{label:"NodeJS",value:"Nodejs"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"Nodejs",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var options = {\n  client_id: 'informe_seu_client_id',\n  client_secret: 'informe_seu_client_secret',\n  sandbox: true\n}\n")))),Object(o.b)("p",null,"Instancie o m\xf3dulo passando suas op\xe7\xf5es:"),Object(o.b)(c.a,{defaultValue:"Nodejs",values:[{label:"NodeJS",value:"Nodejs"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"Nodejs",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var gerencianet = new Gerencianet(options);\n")))),Object(o.b)("p",null,"Crie a charge (transa\xe7\xe3o):"),Object(o.b)(c.a,{defaultValue:"Nodejs",values:[{label:"NodeJS",value:"Nodejs"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"Nodejs",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var chargeInput = {\n  items: [{\n    name: 'Product A',\n    value: 1000,\n    amount: 2\n  }]\n}\n\ngerencianet\n  .createCharge({}, chargeInput)\n  .then(console.log)\n  .catch(console.log)\n  .done();\n")))),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)("p",null,"Para executar os exemplos, clone este reposit\xf3rio e instale as depend\xeancias:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ git clone git@github.com:gerencianet/gn-api-sdk-node.git\n$ cd gn-api-sdk-node/examples\n$ npm install\n")),Object(o.b)("p",null,"Defina suas chaves oauth no arquivo ",Object(o.b)("inlineCode",{parentName:"p"},"credentials.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"module.exports = {\n  client_id: 'your_client_id',\n  client_secret: 'your_client_secret'\n}\n")),Object(o.b)("p",null,"Em seguida, execute o exemplo desejado:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ node createCharge.js\n")),Object(o.b)("h2",{id:"testes"},"Testes"),Object(o.b)("p",null,"Para executar o conjunto de testes, primeiro instale as depend\xeancias e, em seguida, execute o teste npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ cd gn-api-sdk-node/\n$ npm install\n$ npm test\n"))))}d.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(c,".").concat(p)]||b[p]||d[p]||o;return n?r.a.createElement(m,l(l({ref:t},i),{},{components:n})):r.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},233:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},234:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},235:function(e,t,n){"use strict";var a=n(0),r=n(234);t.a=function(){return Object(a.useContext)(r.a)}},236:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(235),c=n(233),l=n(92),s=n.n(l);const i=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:b,groupId:d}=e,{tabGroupChoices:p,setTabGroupChoices:m}=Object(o.a)(),[j,O]=Object(a.useState)(l);if(null!=d){const e=p[d];null!=e&&e!==j&&b.some(t=>t.value===e)&&O(e)}const f=e=>{O(e),null!=d&&m(d,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":j===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>f(e),onClick:()=>f(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===j)[0]))}},237:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);