(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{172:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return l}));var o=t(2),n=t(6),r=(t(0),t(229)),i=(t(231),{id:"MikWeb",title:"MikWeb",hide_title:!0,sidebar_label:"MikWeb"}),c={id:"SistemasIntegrados/MikWeb",isDocsHomePage:!1,title:"MikWeb",description:"MikWeb",source:"@site/docs\\SistemasIntegrados\\Mikweb.md",permalink:"/docs/SistemasIntegrados/MikWeb",sidebar_label:"MikWeb",sidebar:"someSidebar",previous:{title:"Mapp",permalink:"/docs/SistemasIntegrados/Mapp"},next:{title:"Mk-Auth",permalink:"/docs/SistemasIntegrados/MkAuth"}},b=[{value:"Passos para a Integra\xe7\xe3o",id:"passos-para-a-integra\xe7\xe3o",children:[]},{value:"Como dar baixa autom\xe1tica no MikWeb?",id:"como-dar-baixa-autom\xe1tica-no-mikweb",children:[{value:"Passo a passo para cadastrar a URL de notifica\xe7\xe3o:",id:"passo-a-passo-para-cadastrar-a-url-de-notifica\xe7\xe3o",children:[]}]},{value:"Como verificar se a integra\xe7\xe3o est\xe1 funcionando?",id:"como-verificar-se-a-integra\xe7\xe3o-est\xe1-funcionando",children:[]},{value:"A integra\xe7\xe3o falhou. Como verificar o erro?",id:"a-integra\xe7\xe3o-falhou-como-verificar-o-erro",children:[]}],s={rightToc:b};function l(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{className:"titulo"},"MikWeb"),Object(r.b)("div",{className:"subtitulo"},Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/mikweb.png",alt:"alt text",title:"Mikweb_logo"}))),Object(r.b)("p",null,"Dando sequ\xeancia \xe0 nossa s\xe9rie sobre as integra\xe7\xf5es da Gerencianet, hoje vamos falar sobre o MiKWeb. Veja abaixo como realizar o procedimento:"),Object(r.b)("br",null),Object(r.b)("h2",{id:"passos-para-a-integra\xe7\xe3o"},"Passos para a Integra\xe7\xe3o"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Acesse o menu ",Object(r.b)("code",null,"API > Minhas Aplica\xe7\xf5es > Nova Aplica\xe7\xe3o"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Informe o nome da integra\xe7\xe3o, ",Object(r.b)("strong",{parentName:"p"},"ATIVE")," o Modo de Compatibilidade (",Object(r.b)("a",{href:"https://content.screencast.com/users/tiagogerencianet/folders/Jing/media/f5884b13-141d-484c-99b2-59bfc1b199b5/2018-04-05_1351.png",target:"_blank"},"veja onde"),") e clique em ",Object(r.b)("code",null,"Criar nova aplica\xe7\xe3o"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copie seu token de integra\xe7\xe3o (",Object(r.b)("a",{href:"https://content.screencast.com/users/tiagogerencianet/folders/Jing/media/dedc2d55-2304-4e3b-aaed-224e6ae0487f/2018-04-05_1605.png",target:"_blank"},"veja onde"),") e acesse o portal MikWeb;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"No menu ",Object(r.b)("code",null,"Configura\xe7\xf5es > Forma de Pagamento"),", escolha a op\xe7\xe3o ",Object(r.b)("code",null,"Boleto Gerencianet")," ou ",Object(r.b)("code",null,"Carn\xea Gerencianet")," no campo ",Object(r.b)("code",null,"Forma de Pagamento"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Em seguida, cole o token de integra\xe7\xe3o no campo ",Object(r.b)("code",null,"Chave de Integra\xe7\xe3o"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Para finalizar, clique no bot\xe3o ",Object(r.b)("code",null,"Salvar altera\xe7\xf5es"),"."))),Object(r.b)("p",null,"Pronto! Sua integra\xe7\xe3o j\xe1 est\xe1 funcionando."),Object(r.b)("br",null),Object(r.b)("h2",{id:"como-dar-baixa-autom\xe1tica-no-mikweb"},"Como dar baixa autom\xe1tica no MikWeb?"),Object(r.b)("p",null,"Para que seja dada a baixa autom\xe1tica da cobran\xe7a em seu sistema MikWeb, \xe9 necess\xe1rio cadastrar uma URL de callback na plataforma de emiss\xe3o de boletos e carn\xeas da Gerencianet. Da mesma forma, \xe9 preciso cadastrar uma URL de cancelamento para que o MiKWeb tamb\xe9m realize uma baixa autom\xe1tica sempre que voc\xea fizer o cancelamento de uma cobran\xe7a na Gerencianet."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"ATEN\xc7\xc3O")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Se o cancelamento for realizado no MiKWeb, n\xe3o acontece a baixa autom\xe1tica na conta Gerencianet."))),Object(r.b)("br",null),Object(r.b)("h3",{id:"passo-a-passo-para-cadastrar-a-url-de-notifica\xe7\xe3o"},"Passo a passo para cadastrar a URL de notifica\xe7\xe3o:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Acesse o menu ",Object(r.b)("inlineCode",{parentName:"p"},"Integra\xe7\xf5es")," > ",Object(r.b)("inlineCode",{parentName:"p"},"Callback"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"No campo ",Object(r.b)("inlineCode",{parentName:"p"},"URL de notifica\xe7\xe3o"),", informe o endere\xe7o de acesso de acordo com seu subdom\xednio, conforme modelo abaixo: ",Object(r.b)("inlineCode",{parentName:"p"},"http://demo.mikweb.com.br/confirmar_fatura_gn")," (no lugar da palavra ",Object(r.b)("inlineCode",{parentName:"p"},"demo")," informe seu subdom\xednio);")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Na caixa dispon\xedvel ao lado, escolha a op\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},"Cobran\xe7a Confirmada"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Clique no bot\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},"Cadastrar"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fa\xe7a o mesmo procedimento se desejar cadastrar uma URL de cancelamento."))),Object(r.b)("br",null),Object(r.b)("h2",{id:"como-verificar-se-a-integra\xe7\xe3o-est\xe1-funcionando"},"Como verificar se a integra\xe7\xe3o est\xe1 funcionando?"),Object(r.b)("p",null,"Voc\xea pode realizar testes para verificar se a URL est\xe1 funcionando perfeitamente. Para isto, clique no bot\xe3o ",Object(r.b)("code",null,"Testar")," (",Object(r.b)("a",{href:"https://content.screencast.com/users/tiagogerencianet/folders/Jing/media/125ac343-46cd-4f20-bec3-c1ebe4588c93/2018-04-05_1413.png",target:"_blank"},"veja onde"),"). Ao clicar no bot\xe3o, uma requisi\xe7\xe3o \xe9 enviada para o MiKWeb e voc\xea recebe uma mensagem informando se o callback est\xe1 funcionando ou n\xe3o."),Object(r.b)("br",null),Object(r.b)("h2",{id:"a-integra\xe7\xe3o-falhou-como-verificar-o-erro"},"A integra\xe7\xe3o falhou. Como verificar o erro?"),Object(r.b)("p",null,"Se mesmo ap\xf3s a realiza\xe7\xe3o da integra\xe7\xe3o n\xe3o acontecer a baixa autom\xe1tica de pagamento ou se algum boleto n\xe3o for emitido via integra\xe7\xe3o, voc\xea pode verificar a origem do erro clicando no bot\xe3o ",Object(r.b)("code",null,"Logs"),", dispon\xedvel ao lado da URL cadastrada (",Object(r.b)("a",{href:"https://content.screencast.com/users/tiagogerencianet/folders/Jing/media/0a8c0228-ef9b-44d0-abb5-51d3902c7db7/2018-04-06_0931.png",target:"_blank"},"veja onde"),"). Voc\xea verificar\xe1 todas as requisi\xe7\xf5es e a resposta de cada uma. Assim, analisando a resposta das requisi\xe7\xf5es, ser\xe1 poss\xedvel identificar o poss\xedvel erro."),Object(r.b)("br",null),Object(r.b)("p",null,"Ainda ficou com alguma d\xfavida? Envie um ticket para nossa equipe!")))}l.isMDXComponent=!0},229:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u}));var o=t(0),n=t.n(o);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),l=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=l(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},p=n.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),d=l(t),p=o,u=d["".concat(i,".").concat(p)]||d[p]||m[p]||r;return t?n.a.createElement(u,c(c({ref:a},s),{},{components:t})):n.a.createElement(u,c({ref:a},s))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var b in a)hasOwnProperty.call(a,b)&&(c[b]=a[b]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},230:function(e,a,t){"use strict";var o=t(0),n=t(35);a.a=function(){return Object(o.useContext)(n.a)}},231:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var o=t(230),n=t(232);function r(e,{forcePrependBaseUrl:a=!1,absolute:t=!1}={}){const{siteConfig:{baseUrl:r="/",url:i}={}}=Object(o.a)();if(!e)return e;if(a)return r+e;if(!Object(n.a)(e))return e;const c=r+e.replace(/^\//,"");return t?i+c:c}},232:function(e,a,t){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}t.d(a,"a",(function(){return o}))}}]);