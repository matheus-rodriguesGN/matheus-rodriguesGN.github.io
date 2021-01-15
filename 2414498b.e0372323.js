(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{128:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t(2),o=t(6),r=(t(0),t(229)),i=(t(231),{id:"BoxBilling",title:"Box Billing",hide_title:!0,sidebar_label:"Box Billing"}),c={id:"Modulos/BoxBilling",isDocsHomePage:!1,title:"Box Billing",description:"Box Billing",source:"@site/docs\\Modulos\\BoxBilling.md",permalink:"/docs/Modulos/BoxBilling",sidebar_label:"Box Billing",sidebar:"someSidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/docs/Modulos/IntroducaoModulos"},next:{title:"Joomla (VirtueMart)",permalink:"/docs/Modulos/Joomla"}},l=[{value:"1. Requisitos",id:"1-requisitos",children:[]},{value:"2. Instala\xe7\xe3o",id:"2-instala\xe7\xe3o",children:[{value:"Configura\xe7\xf5es do M\xf3dulo",id:"configura\xe7\xf5es-do-m\xf3dulo",children:[]}]},{value:"3. Erros Comuns de Integra\xe7\xe3o",id:"3-erros-comuns-de-integra\xe7\xe3o",children:[]}],s={rightToc:l};function b(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{className:"titulo"},"Box Billing"),Object(r.b)("div",{className:"subtitulo"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"M\xf3dulo de Integra\xe7\xe3o Gerencianet para Boxbilling Oficial - Vers\xe3o 0.2.1 (Beta)")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"O m\xf3dulo Gerencianet para o Boxbilling permite gerar boletos com registro por meio da nossa API.")," Compat\xedvel com as vers\xf5es superiores a vers\xe3o 4.19 do Boxbilling."),Object(r.b)("p",null,"Este \xe9 uma vers\xe3o Beta do M\xf3dulo Oficial de integra\xe7\xe3o fornecido pela Gerencianet para ",Object(r.b)("strong",{parentName:"p"},"Boxbilling"),". Com ele, o respons\xe1vel pela conta ",Object(r.b)("strong",{parentName:"p"},"Box Billing")," pode receber pagamentos por boleto banc\xe1rio e, assim que a cobran\xe7a tem uma confirma\xe7\xe3o de pagamento ou \xe9 cancelada, a Gerencianet envia uma notifica\xe7\xe3o autom\xe1tica para o Boxbilling."),Object(r.b)("p",null,"Caso voc\xea tenha alguma d\xfavida ou sugest\xe3o, entre em contato conosco pelo site Gerencianet."),Object(r.b)("br",null),Object(r.b)("h2",{id:"1-requisitos"},"1. Requisitos"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Vers\xe3o do PHP: ",Object(r.b)("inlineCode",{parentName:"li"},"5.4.39")," \xe0 ",Object(r.b)("inlineCode",{parentName:"li"},"7.0.3")),Object(r.b)("li",{parentName:"ul"},"Vers\xe3o m\xednima do Boxbilling: ",Object(r.b)("inlineCode",{parentName:"li"},"4.19"))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"2-instala\xe7\xe3o"},"2. Instala\xe7\xe3o"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fa\xe7a o ",Object(r.b)("a",{href:"https://codeload.github.com/gerencianet/gn-api-boxbilling/zip/master",target:"_blank",title:"Efetuar Download"},"download da \xfaltima vers\xe3o do m\xf3dulo"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Descompacte o arquivo baixado;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copie o arquivo ",Object(r.b)("code",null,"gerencianetcharge.php")," e a pasta ",Object(r.b)("code",null,"gerencianet_lib")," (dispon\xedveis na pasta ",Object(r.b)("code",null,"gn-api-boxbilling"),") e cole no diret\xf3rio ",Object(r.b)("code",null,"/bb-library/Payment/Adapter/")," da instala\xe7\xe3o do Box Billing;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copie a imagem ",Object(r.b)("code",null,"gerencianetcharge.png")," (dispon\xedvel no diret\xf3rio ",Object(r.b)("code",null,"gn-api-boxbilling"),") e cole no diret\xf3rio ",Object(r.b)("code",null,"/bb-themes/huraga/assets/img/gateway_logos"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"No final do arquivo ",Object(r.b)("code",null,"logos.css"),", localizado no diret\xf3rio ",Object(r.b)("code",null,"/bb-themes/huraga/assets/css/"),", cole o seguinte trecho de c\xf3digo:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'.logo-gerencianetcharge{\n   background: transparent url("/img/gateway_logos/gerencianetcharge.png") no-repeat scroll 0% 0%;\n    background-size: contain;\n    width:135px;\n    height: 25px;\n    border: 0;\n    margin: 10px;\n}\n')),Object(r.b)("br",null),Object(r.b)("p",null,"Os arquivos do m\xf3dulo Gerencianet devem estar com a seguinte estrutura no Box Billing:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"/bb-library/Payment/Adapter/\n  |  gerencianet_lib/\n  |  gerencianetcharge.php\n")),Object(r.b)("br",null),Object(r.b)("h3",{id:"configura\xe7\xf5es-do-m\xf3dulo"},"Configura\xe7\xf5es do M\xf3dulo"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/boxbilling.png",alt:"alt text",title:"Box Billing configura\xe7\xe3o"}))),Object(r.b)("p",null,"Dentro do painel administrativo do Boxbilling, acesse o menu ",Object(r.b)("code",null,"Configuration > Payment Gateways"),". Clique para editar as configura\xe7\xf5es do m\xf3dulo ",Object(r.b)("code",null,"gerencianetcharge"),". A tela mostrada acima ser\xe1 exibida. Dentro do formul\xe1rio, voc\xea dever\xe1 preencher os seguintes campos:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1. Client_Id Produ\xe7\xe3o:")," Deve ser preenchido com o ",Object(r.b)("code",null,"Client_Id")," de produ\xe7\xe3o de sua conta Gerencianet. Este campo \xe9 obrigat\xf3rio e pode ser encontrado no menu ",Object(r.b)("code",null,"API > Minhas Aplica\xe7\xf5es"),". Em seguida, selecione sua aplica\xe7\xe3o criada, conforme \xe9 mostrado ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/001a47-b9e519bf-b76d-4178-b564-eb8d4981b203.png",target:"_blank"},"neste link"),";"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2. Client_Secret Produ\xe7\xe3o:")," Deve ser preenchido com o ",Object(r.b)("code",null,"Client_Secret")," de produ\xe7\xe3o de sua conta Gerencianet. Este campo \xe9 obrigat\xf3rio e pode ser encontrado no menu ",Object(r.b)("code",null,"API > Minhas Aplica\xe7\xf5es"),". Em seguida, selecione sua aplica\xe7\xe3o criada, conforme \xe9 mostrado ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/a803ce-592ac502-6ead-44c4-bd75-fce1c1ed8637.png",target:"_blank"},"neste link"),";"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3. Client_Id Desenvolvimento:")," Deve ser preenchido com o ",Object(r.b)("code",null,"Client_Id")," de desenvolvimento de sua conta Gerencianet. Este campo \xe9 obrigat\xf3rio e pode ser encontrado no menu ",Object(r.b)("code",null,"API > Minhas Aplica\xe7\xf5es"),". Em seguida, selecione sua aplica\xe7\xe3o criada, conforme \xe9 mostrado ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/622255-9e257a75-4884-4e73-89f5-d7ec7b1f5b4c.png",target:"_blank"},"neste link"),";"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"4. Client_Secret Desenvolvimento:")," Deve ser preenchido com o ",Object(r.b)("code",null,"Client_Secret")," de desenvolvimento de sua conta Gerencianet. Este campo \xe9 obrigat\xf3rio e pode ser encontrado no menu ",Object(r.b)("code",null,"API > Minhas Aplica\xe7\xf5es"),". Em seguida, selecione sua aplica\xe7\xe3o criada, conforme \xe9 mostrado ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/680331-39fadf5b-6807-4ffa-a433-b2f656060984.png",target:"_blank"},"neste link"),";"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"5. Identificador da Conta:")," Deve ser preenchido com o identificador de sua conta Gerencianet. Este campo \xe9 obrigat\xf3rio. Confira onde localiz\xe1-lo em sua plataforma (",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/24/matheus.rodrigues/b66b15-d2201967-d646-4988-8e39-cffae37df203.png",target:"_blank"},"Identificador da Conta"),");"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"6. E-mail de cobran\xe7a - Gerencianet:")," Caso seja de seu interesse, habilite o envio de emails de cobran\xe7a da Gerencianet para o cliente final;"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"7. Sandbox:")," Caso seja de seu interesse, habilite o ambiente de testes da API Gerencianet;"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"8. Moeda:")," Escolha a op\xe7\xe3o ",Object(r.b)("code",null,"R$ Real")," (a mesma deve estar definida no seu Boxbilling);"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"9. Enabled:")," Escolha a op\xe7\xe3o ",Object(r.b)("code",null,"Yes")," para ativar o m\xf3dulo da Gerencianet;"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"10. Allow one time payments:")," Marque a op\xe7\xe3o ",Object(r.b)("code",null,"Yes"),";"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"11. Allow subscription payments:")," Marque a op\xe7\xe3o ",Object(r.b)("code",null,"No")," (o m\xf3dulo Gerencianet n\xe3o suporta transa\xe7\xf5es por assinatura);"),Object(r.b)("p",null,"Por fim, clique em ",Object(r.b)("code",null,"UPDATE"),"."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"ATEN\xc7\xc3O")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Importante salientar que ",Object(r.b)("strong",{parentName:"p"},"os boletos gerados em sandbox n\xe3o s\xe3o v\xe1lidos e n\xe3o podem ser pagos"),', possuem a linha digit\xe1vel "zerada" e uma marca d\'\xe1gua ao fundo informando ser um boleto de teste.'),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},'Os pagamentos de cobran\xe7as de sandbox utilizando cart\xe3o de cr\xe9dito s\xe3o fict\xedcios, mesmo se utilizar um cart\xe3o "real".'),' Todos os pagamentos de cart\xe3o neste ambiente ter\xe3o o pagamento confirmado automaticamente, mas \xe9 apenas uma altera\xe7\xe3o de status para "Pago". Este recurso permite que voc\xea teste a notifica\xe7\xe3o do status ',Object(r.b)("code",null,"paid"),"."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Isso significa que todos os pagamentos realizados em sandbox n\xe3o s\xe3o reais e, portanto, n\xe3o h\xe1 cobran\xe7a de nenhuma import\xe2ncia financeira.")," "),Object(r.b)("p",{parentName:"div"},"\xc9 importante saber que as palavras ",Object(r.b)("strong",{parentName:"p"},"Playground, Sandbox e Ambiente de Desenvolvimento"),", no contexto da Gerencianet, s\xe3o sin\xf4nimos no sentido de fazerem refer\xeancia ao local de testes que oferecemos em que voc\xea pode testar \xe0 vontade sua integra\xe7\xe3o com a API."))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"3-erros-comuns-de-integra\xe7\xe3o"},"3. Erros Comuns de Integra\xe7\xe3o"),Object(r.b)("p",null,'Ainda que nenhum destes erros de valida\xe7\xe3o sejam retornados, a API Gerencianet poder\xe1 retornar erros referentes \xe0 gera\xe7\xe3o da cobran\xe7a. Para interpretar os retornos da API e, claro, corrigir poss\xedveis erros de valida\xe7\xe3o de dados ou outros similares, acesse a p\xe1gina "',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../VisaoGeral/InterpretandoErros"}),"Interpretando Erros da API"),'".')))}b.isMDXComponent=!0},229:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),b=function(e){var a=o.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=b(e.components);return o.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(t),u=n,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||r;return t?o.a.createElement(m,c(c({ref:a},s),{},{components:t})):o.a.createElement(m,c({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},230:function(e,a,t){"use strict";var n=t(0),o=t(35);a.a=function(){return Object(n.useContext)(o.a)}},231:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(230),o=t(232);function r(e,{forcePrependBaseUrl:a=!1,absolute:t=!1}={}){const{siteConfig:{baseUrl:r="/",url:i}={}}=Object(n.a)();if(!e)return e;if(a)return r+e;if(!Object(o.a)(e))return e;const c=r+e.replace(/^\//,"");return t?i+c:c}},232:function(e,a,t){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}t.d(a,"a",(function(){return n}))}}]);