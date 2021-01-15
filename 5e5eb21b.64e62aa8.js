(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{155:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return s}));var o=t(2),n=t(6),r=(t(0),t(229)),i=(t(231),{id:"Joomla",title:"Joomla (VirtueMart)",hide_title:!0,sidebar_label:"Joomla (VirtueMart)"}),c={id:"Modulos/Joomla",isDocsHomePage:!1,title:"Joomla (VirtueMart)",description:"Joomla (VirtueMart)",source:"@site/docs\\Modulos\\Joomla.md",permalink:"/docs/Modulos/Joomla",sidebar_label:"Joomla (VirtueMart)",sidebar:"someSidebar",previous:{title:"Box Billing",permalink:"/docs/Modulos/BoxBilling"},next:{title:"Magento",permalink:"/docs/Modulos/Magento"}},l=[{value:"1. Requisitos",id:"1-requisitos",children:[]},{value:"2. Instala\xe7\xe3o",id:"2-instala\xe7\xe3o",children:[]},{value:"3. Configura\xe7\xe3o",id:"3-configura\xe7\xe3o",children:[{value:"Configura\xe7\xf5es do Plugin de Pagamento",id:"configura\xe7\xf5es-do-plugin-de-pagamento",children:[]},{value:"Campos Extras Obrigat\xf3rios",id:"campos-extras-obrigat\xf3rios",children:[]},{value:"Configura\xe7\xf5es do Boleto Banc\xe1rio",id:"configura\xe7\xf5es-do-boleto-banc\xe1rio",children:[]}]},{value:"4. Erros Comuns de Integra\xe7\xe3o:",id:"4-erros-comuns-de-integra\xe7\xe3o",children:[]}],b={rightToc:l};function s(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{className:"titulo"},"Joomla (VirtueMart)"),Object(r.b)("div",{className:"subtitulo"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"M\xf3dulo de Integra\xe7\xe3o Gerencianet para VirtueMart Oficial - Vers\xe3o 0.2.1")),Object(r.b)("p",null,"O m\xf3dulo Gerencianet para Joomla (VirtueMart) permite receber pagamentos por meio do ",Object(r.b)("strong",null,"checkout transparente da nossa API"),". Compat\xedvel com o Virtuemart 3 e Joomla! 2.5."),Object(r.b)("p",null,"Este \xe9 o M\xf3dulo Oficial de integra\xe7\xe3o fornecido pela Gerencianet para VirtueMart. Com ele, o propriet\xe1rio da loja pode optar por receber pagamentos por boleto banc\xe1rio e/ou cart\xe3o de cr\xe9dito. Todo processo \xe9 realizado por meio do checkout transparente. Com isso, o comprador n\xe3o precisa sair do site da loja para efetuar o pagamento."),Object(r.b)("p",null,'Algumas informa\xe7\xf5es como "CPF", "n\xfamero do endere\xe7o", "bairro" e "data de nascimento" poder\xe3o ser solicitados no momento do pagamento, caso os campos n\xe3o sejam configurados conforme indicado.'),Object(r.b)("br",null),Object(r.b)("h2",{id:"1-requisitos"},"1. Requisitos"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Vers\xe3o do PHP: ",Object(r.b)("inlineCode",{parentName:"li"},"5.4.0")," \xe0 ",Object(r.b)("inlineCode",{parentName:"li"},"7.0.3")),Object(r.b)("li",{parentName:"ul"},"Vers\xe3o m\xednima do VirtueMart: ",Object(r.b)("inlineCode",{parentName:"li"},"3.0")),Object(r.b)("li",{parentName:"ul"},"Vers\xe3o m\xednima do Joomla!: ",Object(r.b)("inlineCode",{parentName:"li"},"2.5"))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"2-instala\xe7\xe3o"},"2. Instala\xe7\xe3o"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fa\xe7a o download da ",Object(r.b)("a",{href:"https://github.com/gerencianet/gn-api-virtuemart/archive/master.zip",target:"_blank"},"\xfaltima vers\xe3o do plugin"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Acesse o link em sua loja ",Object(r.b)("code",null,"Extensions > Manage > Install")," e envie o arquivo ",Object(r.b)("code",null,"gn-api-virtuemart.zip")," ou extraia o conte\xfado do arquivo dentro do diret\xf3rio de plugins da loja;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Configure o plugin conforme instru\xe7\xf5es abaixo e comece a receber pagamentos com a Gerencianet."))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"3-configura\xe7\xe3o"},"3. Configura\xe7\xe3o"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Primeiramente, ",Object(r.b)("a",{href:"https://gerencianet.com.br/#abrirconta",target:"_blank",title:"Cadastro ao nosso sistema, seja nosso cliente"},"crie gratuitamente sua conta Gerencianet"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Crie 3 campos extras no Virtuemart: ",Object(r.b)("code",null,"numero"),", ",Object(r.b)("code",null,"bairro")," e ",Object(r.b)("code",null,"data_nascimento"),". O n\xfamero da resid\xeancia, bairro e data de nascimento s\xe3o dados obrigat\xf3rios para pagamento com cart\xe3o de cr\xe9dito. Se n\xe3o for informado no formul\xe1rio de cadastro ou no carrinho, ser\xe1 solicitado no ato do pagamento;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Habilite o plugin em ",Object(r.b)("code",null,"Administrar Plugins"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Instale nosso plugin atrav\xe9s da tela ",Object(r.b)("code",null,"M\xe9todos de pagamento"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Clique em ",Object(r.b)("code",null,"Novo M\xe9todo de Pagamento")," e preencha as seguintes informa\xe7\xf5es:"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"Nome do Pagamento:")," Cart\xf5es de cr\xe9dito ou Boleto Banc\xe1rio ( Gerencianet );"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"Publicado:")," Sim;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"Descri\xe7\xe3o do pagamento:")," Pague com Cart\xe3o de Cr\xe9dito ou Boleto Banc\xe1rio;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"M\xe9todo de pagamento:")," Gerencianet;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"Grupo de Compradores:")," -default-")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Clique em ",Object(r.b)("inlineCode",{parentName:"p"},"Salvar"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Na aba ",Object(r.b)("inlineCode",{parentName:"p"},"Configura\xe7\xf5es"),", preencha os seguintes dados:"))),Object(r.b)("br",null),Object(r.b)("h3",{id:"configura\xe7\xf5es-do-plugin-de-pagamento"},"Configura\xe7\xf5es do Plugin de Pagamento"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"Modo de teste:")," Sim ou N\xe3o;")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"Client ID Desenvolvimento"),": em sua conta Gerencianet, acesse ",Object(r.b)("code",null,"API > Minhas Aplica\xe7\xf5es"),", selecione sua aplica\xe7\xe3o e clique na aba ",Object(r.b)("code",null,"Desenvolvimento"),";")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"Client Secret Desenvolvimento")," Conta Gerencianet > API > Aplica\xe7\xf5es > Sua Aplica\xe7\xe3o > Client Secret Desenvolvimento")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"Client ID Produ\xe7\xe3o")," Conta Gerencianet > API > Aplica\xe7\xf5es > Sua Aplica\xe7\xe3o > Client ID Produ\xe7\xe3o")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"Client Secret Produ\xe7\xe3o"),' Conta Gerencianet > API > Aplica\xe7\xf5es > Sua Aplica\xe7\xe3o > Client Secret Produ\xe7\xe3o As credenciais devem ser da sua Aplica\xe7\xe3o na Gerencianet. Para criar uma nova Aplica\xe7\xe3o, entre em sua conta Gerencianet, acesse o menu "API" e clique em "Minhas Aplica\xe7\xf5es" -> "Nova aplica\xe7\xe3o".')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Observa\xe7\xe3o:")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'Para criar sua aplica\xe7\xe3o, logue em sua conta Gerencianet, acesse o menu superior "API", depois clique em "',Object(r.b)("em",{parentName:"p"},"Minhas Aplica\xe7\xf5es > Nova Aplica\xe7\xe3o"),'" e defina um nome para a sua aplica\xe7\xe3o.'))),Object(r.b)("br",null),Object(r.b)("h3",{id:"campos-extras-obrigat\xf3rios"},"Campos Extras Obrigat\xf3rios"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Campo Logradouro (do endere\xe7o)"),Object(r.b)("li",{parentName:"ul"},"Campo Bairro"),Object(r.b)("li",{parentName:"ul"},"Campo N\xfamero (do endere\xe7o)"),Object(r.b)("li",{parentName:"ul"},"Campo Complemento (do endere\xe7o)"),Object(r.b)("li",{parentName:"ul"},"Campo Telefone (do cliente)"),Object(r.b)("li",{parentName:"ul"},"Campo CPF (do cliente)"),Object(r.b)("li",{parentName:"ul"},"Campo Data de Nascimento (do cliente)")),Object(r.b)("br",null),Object(r.b)("h3",{id:"configura\xe7\xf5es-do-boleto-banc\xe1rio"},"Configura\xe7\xf5es do Boleto Banc\xe1rio"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Dias para vencimento"),Object(r.b)("li",{parentName:"ul"},"Desconto para pagamento no Boleto")),Object(r.b)("p",null,"Recomendamos que antes de disponibilizar pagamentos pela Gerencianet, o lojista realize testes de cobran\xe7a com o sandbox (ambiente de testes) ativado para verificar se o procedimento de pagamento est\xe1 acontecendo conforme esperado."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"ATEN\xc7\xc3O")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Importante salientar que ",Object(r.b)("strong",{parentName:"p"},"os boletos gerados em sandbox n\xe3o s\xe3o v\xe1lidos e n\xe3o podem ser pagos"),', possuem a linha digit\xe1vel "zerada" e uma marca d\'\xe1gua ao fundo informando ser um boleto de teste.'),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},'Os pagamentos de cobran\xe7as de sandbox utilizando cart\xe3o de cr\xe9dito s\xe3o fict\xedcios, mesmo se utilizar um cart\xe3o "real".'),' Todos os pagamentos de cart\xe3o neste ambiente ter\xe3o o pagamento confirmado automaticamente, mas \xe9 apenas uma altera\xe7\xe3o de status para "Pago". Este recurso permite que voc\xea teste a notifica\xe7\xe3o do status ',Object(r.b)("code",null,"paid"),"."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Isso significa que todos os pagamentos realizados em sandbox n\xe3o s\xe3o reais e, portanto, n\xe3o h\xe1 cobran\xe7a de nenhuma import\xe2ncia financeira.")," "),Object(r.b)("p",{parentName:"div"},"\xc9 importante saber que as palavras ",Object(r.b)("strong",{parentName:"p"},"Playground, Sandbox e Ambiente de Desenvolvimento"),", no contexto da Gerencianet, s\xe3o sin\xf4nimos no sentido de fazerem refer\xeancia ao local de testes que oferecemos em que voc\xea pode testar \xe0 vontade sua integra\xe7\xe3o com a API."))),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"4-erros-comuns-de-integra\xe7\xe3o"},"4. Erros Comuns de Integra\xe7\xe3o:"),Object(r.b)("p",null,'Ainda que nenhum destes erros de valida\xe7\xe3o sejam retornados, a API Gerencianet poder\xe1 retornar erros referentes \xe0 gera\xe7\xe3o da cobran\xe7a. Para interpretar os retornos da API e, claro, corrigir poss\xedveis erros de valida\xe7\xe3o de dados ou outros similares, acesse a p\xe1gina "',Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../VisaoGeral/InterpretandoErros"}),"Interpretando Erros da API"),'".')))}s.isMDXComponent=!0},229:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return p}));var o=t(0),n=t.n(o);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var b=n.a.createContext({}),s=function(e){var a=n.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=s(e.components);return n.a.createElement(b.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,p=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return t?n.a.createElement(p,c(c({ref:a},b),{},{components:t})):n.a.createElement(p,c({ref:a},b))}));function p(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var b=2;b<r;b++)i[b]=t[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},230:function(e,a,t){"use strict";var o=t(0),n=t(35);a.a=function(){return Object(o.useContext)(n.a)}},231:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var o=t(230),n=t(232);function r(e,{forcePrependBaseUrl:a=!1,absolute:t=!1}={}){const{siteConfig:{baseUrl:r="/",url:i}={}}=Object(o.a)();if(!e)return e;if(a)return r+e;if(!Object(n.a)(e))return e;const c=r+e.replace(/^\//,"");return t?i+c:c}},232:function(e,a,t){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}t.d(a,"a",(function(){return o}))}}]);