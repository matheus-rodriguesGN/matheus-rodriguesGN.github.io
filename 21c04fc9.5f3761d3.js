(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return b}));var o=t(2),n=t(6),r=(t(0),t(229)),s={id:"IntroducaoPlayground",title:"Introdu\xe7\xe3o ao Playground",hide_title:!0,sidebar_label:"Introdu\xe7\xe3o ao Playground"},i={id:"AmbienteTestes/IntroducaoPlayground",isDocsHomePage:!1,title:"Introdu\xe7\xe3o ao Playground",description:"Introdu\xe7\xe3o ao Playground",source:"@site/docs\\AmbienteTestes\\IntroducaoPlayground.md",permalink:"/docs/AmbienteTestes/IntroducaoPlayground",sidebar_label:"Introdu\xe7\xe3o ao Playground",sidebar:"someSidebar",previous:{title:"Atualiza\xe7\xe3o do protocolo de seguran\xe7a TLS 1.2",permalink:"/docs/TLS/verificacaoTLS"},next:{title:"Playground Transa\xe7\xf5es",permalink:"/docs/AmbienteTestes/PlaygroundTransacoes"}},c=[{value:"Explore nosso ambiente de testes",id:"explore-nosso-ambiente-de-testes",children:[]},{value:"GET, POST, PUT e DELETE",id:"get-post-put-e-delete",children:[]},{value:"Interpretando as Respostas da API",id:"interpretando-as-respostas-da-api",children:[]},{value:"V\xeddeos Explicativos: Playground",id:"v\xeddeos-explicativos-playground",children:[{value:"M\xe9todos do Playground (ambiente de testes/sandbox da Gerencianet)",id:"m\xe9todos-do-playground-ambiente-de-testessandbox-da-gerencianet",children:[]},{value:"Criando uma transa\xe7\xe3o via Playground (ambiente de testes/sandbox da Gerencianet)",id:"criando-uma-transa\xe7\xe3o-via-playground-ambiente-de-testessandbox-da-gerencianet",children:[]}]},{value:"Pr\xf3ximos Passos",id:"pr\xf3ximos-passos",children:[]}],d={rightToc:c};function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{className:"titulo"},"Introdu\xe7\xe3o ao Playground"),Object(r.b)("div",{className:"subtitulo"},Object(r.b)("p",null,"Para acessar o ambiente de testes voc\xea precisa de uma conta Gerencianet. ",Object(r.b)("a",{href:"https://gerencianet.com.br/#abrirconta",title:"Cadastro ao nosso sistema, seja nosso cliente",target:"_blank"},"Crie sua conta"),"."),Object(r.b)("p",null,"Antes de colocar uma aplica\xe7\xe3o em produ\xe7\xe3o, \xe9 muito importante certificar-se que sua implementa\xe7\xe3o est\xe1 correta e suas integra\xe7\xf5es est\xe3o comunicando da forma como deveriam."),Object(r.b)("p",null,"Para evitar que os integradores tenham que fazer testes em produ\xe7\xe3o, a Gerencianet oferece um ambiente de desenvolvimento/testes (sandbox), no qual chamamos de ",Object(r.b)("em",{parentName:"p"},"\u201cPlayground\u201d"),". Este \xe9 um local no qual o integrador pode utilizar para conhecer o mecanismo e o fluxo de pagamento em um ambiente 100% de teste e descomplicado. "),Object(r.b)("p",null,"Neste ambiente, por oferecer uma semelhan\xe7a com os recursos suportados pela API no ambiente de produ\xe7\xe3o, \xe9 poss\xedvel efetuar testes de integra\xe7\xe3o antes de ir para produ\xe7\xe3o, podendo assim fazer uma experi\xeancia com nossa API sem fazer altera\xe7\xf5es em sua conta Gerencianet."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Playground... Sandbox... Ambiente de Desenvolvimento, o que significa?")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\xc9 importante saber que as palavras ",Object(r.b)("strong",{parentName:"p"},"Playground, Sandbox e Ambiente de Desenvolvimento"),", no contexto da Gerencianet, s\xe3o sin\xf4nimos no sentido de fazerem refer\xeancia ao local de testes que oferecemos em que voc\xea pode testar \xe0 vontade sua integra\xe7\xe3o com a API."),Object(r.b)("p",{parentName:"div"},"Especificamente no caso do Playground, trata-se de um sandbox online que a Gerencianet disponibiliza, de forma que o integrador possa testar, de forma r\xe1pida e f\xe1cil, se os dados que pretende enviar para a API est\xe3o corretos e seguem o padr\xe3o exigido."),Object(r.b)("p",{parentName:"div"},"Usando o Playground, o integrador n\xe3o precisa sequer escrever linhas de c\xf3digos, basta estar conectado \xe0 Internet e logado em sua conta Gerencianet, copiando e colando os c\xf3digos que disponibilizamos nos links a seguir: Transa\xe7\xf5es, Carn\xeas, Notifica\xe7\xf5es, Assinaturas e Outros."))),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Aten\xe7\xe3o")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Importante salientar que ",Object(r.b)("strong",{parentName:"p"},"os boletos gerados em sandbox n\xe3o s\xe3o v\xe1lidos e n\xe3o podem ser pagos"),', possuem a linha digit\xe1vel "zerada" e uma marca d\'\xe1gua ao fundo informando ser um boleto de teste.'),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},'Os pagamentos de cobran\xe7as de sandbox utilizando cart\xe3o de cr\xe9dito s\xe3o fict\xedcios, mesmo se utilizar um cart\xe3o "real".'),' Todos os pagamentos de cart\xe3o neste ambiente ter\xe3o o pagamento confirmado automaticamente, mas \xe9 apenas uma altera\xe7\xe3o de status para "Pago". Este recurso permite que voc\xea teste a notifica\xe7\xe3o do status ',Object(r.b)("code",null,"paid"),"."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Isso significa que todos os pagamentos realizados em sandbox n\xe3o s\xe3o reais e, portanto, n\xe3o h\xe1 cobran\xe7a de nenhuma import\xe2ncia financeira.")," "))),Object(r.b)("p",null,"Para iniciar a utiliza\xe7\xe3o do Playground, siga as instru\xe7\xf5es:"),Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("p",null,"Acesse ",Object(r.b)("a",{href:"http://www.gerencianet.com.br",target:"_blank",title:"Link Externo"},"nosso site"),", clique em ",Object(r.b)("a",{href:"https://gerencianet.com.br/#login",target:"_blank",title:"Link Externo"},"Entrar")," (menu superior) e efetue login em sua conta;")),Object(r.b)("li",null,Object(r.b)("p",null,"Clique em ",Object(r.b)("code",null,"API"),", depois ",Object(r.b)("code",null,"Minhas Aplica\xe7\xf5es > Nova aplica\xe7\xe3o")," (",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/10/20/matheus.rodrigues/c62031-858e9d90-4a53-42d4-8b53-8a1e6de6be17.png",target:"_blank",title:"Link Externo"},"?"),"), definindo um nome para a sua aplica\xe7\xe3o."))),Object(r.b)("p",null,"Estando dentro da aplica\xe7\xe3o criada, \xe9 poss\xedvel observar todos os endpoints disponibilizados pela API, ou seja, tudo que \xe9 poss\xedvel fazer via integra\xe7\xe3o. Atrav\xe9s do Playground, o integrador pode conhecer as informa\xe7\xf5es que podem ser enviadas em cada situa\xe7\xe3o, quais s\xe3o obrigat\xf3rias, em quais formatos devem ser enviadas, etc."),Object(r.b)("p",null,"Para acompanhar os procedimentos realizados no Playground, utilize a aba ",Object(r.b)("code",null,"Desenvolvimento"),", especificamente nas subabas ",Object(r.b)("abbr",{title:"Toda cobran\xe7a que for criada poder\xe1 ser vista nesta aba"},"Transa\xe7\xf5es"),", ",Object(r.b)("abbr",{title:"Lista todas as assinaturas criadas"},"Assinaturas"),", ",Object(r.b)("abbr",{title:"Lista todos os carn\xeas criados"},"Carn\xeas"),", ",Object(r.b)("abbr",{title:"Mostra todas as requisi\xe7\xf5es do seu sistema, tenha tido sucesso ou falha"},"Hist\xf3rico de Requisi\xe7\xf5es")," e ",Object(r.b)("abbr",{title:"Mostra toda notifica\xe7\xe3o enviada pelo sistema Gerencianet e a resposta da URL que recebeu o POST"},"Hist\xf3rico de Notifica\xe7\xf5es"),"."),Object(r.b)("p",null,"Cada ",Object(r.b)("em",null,"endpoint")," possui um campo edit\xe1vel para informar os ",Object(r.b)("abbr",{title:"JSON com as informa\xe7\xf5es que o endpoint deve receber para realizar a a\xe7\xe3o"},"dados de entrada")," e um campo n\xe3o-edit\xe1vel para mostrar o ",Object(r.b)("abbr",{title:"JSON que descreve a estrutura dos dados, incluindo todas as informa\xe7\xf5es que podem ser enviadas e as especificidades de cada uma"},"Schema"),". Os ",Object(r.b)("em",null,"endpoints")," est\xe3o divididos em 5 (cinco) grupos principais: ",Object(r.b)("code",null,"Transa\xe7\xf5es"),", ",Object(r.b)("code",null,"Carn\xeas"),", ",Object(r.b)("code",null,"Notifica\xe7\xf5es"),", ",Object(r.b)("code",null,"Assinaturas")," e ",Object(r.b)("code",null,"Outros"),"."),Object(r.b)("br",null),Object(r.b)("h2",{id:"explore-nosso-ambiente-de-testes"},"Explore nosso ambiente de testes"),Object(r.b)("p",null,"A Gerencianet oferece duas formas de utilizar o ambiente de testes (sandbox): (a) dentro de sua conta Gerencianet atrav\xe9s do Playground ou (b) utilizando suas chaves ",Object(r.b)("code",null,"Client_Id")," e ",Object(r.b)("code",null,"Client_Secret")," de desenvolvimento:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"(a) O Playground \xe9 um ambiente isolado, semelhante ao ambiente de produ\xe7\xe3o - \xe9 o local dentro de sua conta Gerencianet que voc\xea pode testar os recursos da API de forma online, sem precisar programar. Veja:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://gerencianet.com.br/#login",target:"_blank",title:"Link Externo"},"Fa\xe7a login")," em sua conta Gerencianet, acesse o menu ",Object(r.b)("code",null,"API"),", depois ",Object(r.b)("code",null,"Minhas Aplica\xe7\xf5es > Nova aplica\xe7\xe3o")," (",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/10/20/matheus.rodrigues/c62031-858e9d90-4a53-42d4-8b53-8a1e6de6be17.png",target:"_blank",title:"Link Externo"},"?"),"), definindo um nome para a sua aplica\xe7\xe3o; e"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A partir de agora, veja como usar nosso ",Object(r.b)("a",{href:"../AmbienteTestes/IntroducaoPlayground",target:"_blank",title:"Link Interno"},"Playground")," e copie os c\xf3digos disponibilizados na se\xe7\xe3o ",Object(r.b)("a",{href:"../AmbienteTestes/AmbienteTeste",target:"_blank",title:"Link Interno"},"Ambiente de Testes")," da documenta\xe7\xe3o e explore o Playground.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"(b) Voc\xea tamb\xe9m pode realizar testes de integra\xe7\xe3o direto em sua aplica\xe7\xe3o/sistema antes de ir para ambiente de produ\xe7\xe3o. Para isso, utilize suas chaves ",Object(r.b)("code",null,"Client_Id")," e ",Object(r.b)("code",null,"Client_Secret")," da aba ",Object(r.b)("code",null,"Desenvolvimento")," (",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/10/20/matheus.rodrigues/1985d9-6c864d8f-4ba3-4584-b9e7-df4510c189e2.png",target:"_blank",title:"Link Externo"},"?"),"), al\xe9m de definir ",Object(r.b)("code",null,"sandbox => true"),"."))),Object(r.b)("p",null,"Adicionalmente, oferecemos v\xeddeos ensinando mais sobre a API e nosso Playground:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"V\xeddeo: ",Object(r.b)("a",{href:"https://www.youtube.com/watch?v=oy4aydoLUZA&index=5&list=PLRqvcUTH2VsWKL03a0dUMaPobAKUSXyxt",target:"_blank",title:"Link Externo"},"API Gerencianet"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"V\xeddeo: ",Object(r.b)("a",{href:"https://www.youtube.com/watch?v=nKPb0rU8j4Q&index=6&list=PLRqvcUTH2VsWKL03a0dUMaPobAKUSXyxt",target:"_blank",title:"Link Externo"},"M\xe9todos do Playground (ambiente de testes/sandbox da Gerencianet)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"V\xeddeo: ",Object(r.b)("a",{href:"https://www.youtube.com/watch?v=ylqJUpHqwfY&index=7&list=PLRqvcUTH2VsWKL03a0dUMaPobAKUSXyxt",target:"_blank",title:"Link Externo"},"Criando uma transa\xe7\xe3o via Playground (ambiente de testes/sandbox da Gerencianet)")))),Object(r.b)("br",null),Object(r.b)("h2",{id:"get-post-put-e-delete"},"GET, POST, PUT e DELETE"),Object(r.b)("p",null,"A API \xe9 RESTful, isso significa que os ",Object(r.b)("em",{parentName:"p"},"endpoints"),' criados seguem pr\xe1ticas espec\xedficas para que sejam intuitivos para os integradores que a utilizam. Essas op\xe7\xf5es (GET, POST, PUT e DELETE) s\xe3o "m\xe9todos" (verbo) que voc\xea usar\xe1 para interagir com o recurso.'),Object(r.b)("p",null,"Todo ",Object(r.b)("em",{parentName:"p"},"endpoint")," do tipo ",Object(r.b)("strong",{parentName:"p"},"GET")," \xe9 um ",Object(r.b)("em",{parentName:"p"},"endpoint")," de consulta, ou seja, o integrador nunca estar\xe1 criando ou alterando um registro quando fizer um consumo desse tipo."),Object(r.b)("p",null,"Os ",Object(r.b)("em",{parentName:"p"},"endpoints")," do tipo ",Object(r.b)("strong",{parentName:"p"},"POST")," sempre est\xe3o relacionados \xe0 cria\xe7\xe3o de algum registro. O ",Object(r.b)("code",null,"POST /v1/charge")," cria uma cobran\xe7a; o ",Object(r.b)("code",null,"POST /v1/charge/:id/pay")," cria um pagamento para uma determinada cobran\xe7a, e assim por diante."),Object(r.b)("p",null,"Os ",Object(r.b)("em",{parentName:"p"},"endpoints")," do tipo ",Object(r.b)("strong",{parentName:"p"},"PUT")," realizam a altera\xe7\xe3o de algum registro j\xe1 existente. Quando o integrador utiliza ",Object(r.b)("code",null,"PUT /v1/charge/:id/cancel"),", por exemplo, ele est\xe1 alterando o status de uma cobran\xe7a para ",Object(r.b)("code",null,"canceled"),"."),Object(r.b)("p",null,"Por fim, os ",Object(r.b)("em",{parentName:"p"},"endpoints")," do tipo ",Object(r.b)("strong",{parentName:"p"},"DELETE")," s\xe3o respons\xe1veis por deletar um registro. Esse tipo de consumo sempre vai solicitar um identificador para dele\xe7\xe3o. Na API, apenas planos de assinaturas podem ser deletados."),Object(r.b)("br",null),Object(r.b)("h2",{id:"interpretando-as-respostas-da-api"},"Interpretando as Respostas da API"),Object(r.b)("p",null,"A Gerencianet utiliza respostas HTTP para indicar sucesso ou falha nas requisi\xe7\xf5es. Comumente, quando retornamos respostas com status ",Object(r.b)("code",null,"2xx")," significa que houve sucesso na requisi\xe7\xe3o; status ",Object(r.b)("code",null,"4xx")," indicam falhas no envio de dados por parte do cliente; status ",Object(r.b)("code",null,"5xx")," indicam erros internos de servidor."),Object(r.b)("p",null,"Para mais detalhes, preparamos uma se\xe7\xe3o especial mostrando ",Object(r.b)("a",{href:"../VisaoGeral/InterpretandoErros",title:"Link Interno"},"como interpretar as respostas da nossa API"),", com exemplos reais e pr\xe1ticos. Para facilitar ainda mais, tamb\xe9m gravamos um v\xeddeo bem curto e objetivo. ",Object(r.b)("a",{href:"https://www.youtube.com/watch?v=ad0SYoeGAZs",title:"Link Interno"},"N\xe3o deixe de acessar e conferir"),"."),Object(r.b)("br",null),Object(r.b)("h2",{id:"v\xeddeos-explicativos-playground"},"V\xeddeos Explicativos: Playground"),Object(r.b)("p",null,"Pensando em oferecer novos meios de transmitir informa\xe7\xf5es, a Gerencianet disponibiliza os v\xeddeos a seguir com o objetivo de explicar, de maneira clara e objetiva, como utilizar o nosso Playground (sandbox)."),Object(r.b)("h3",{id:"m\xe9todos-do-playground-ambiente-de-testessandbox-da-gerencianet"},"M\xe9todos do Playground (ambiente de testes/sandbox da Gerencianet)"),Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/nKPb0rU8j4Q",frameborder:"0",allowfullscreen:!0}),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("h3",{id:"criando-uma-transa\xe7\xe3o-via-playground-ambiente-de-testessandbox-da-gerencianet"},"Criando uma transa\xe7\xe3o via Playground (ambiente de testes/sandbox da Gerencianet)"),Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ylqJUpHqwfY",frameborder:"0",allowfullscreen:!0}),Object(r.b)("p",null,'Para acesso \xe0s demais aulas, de outros assuntos, acesse a se\xe7\xe3o "Curso Online de Integra\xe7\xf5es".'),Object(r.b)("br",null),Object(r.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos Passos"),Object(r.b)("p",null,"Agora que voc\xea conheceu sobre nosso Playground, \xe9 interessante que conhe\xe7a mais sobre os 5 (cinco) endpoints dispon\xedveis em nossa \xe1rea de testes:"),Object(r.b)("a",{href:"./PlaygroundTransacoes",target:"_blank",title:"Link Interno"},Object(r.b)("button",{type:"button",className:"buttonModify button1"},"Transa\xe7\xf5es")),Object(r.b)("a",{href:"./PlaygroundCarne",target:"_blank",title:"Link Interno"},Object(r.b)("button",{type:"button",className:"buttonModify button1"},"Carn\xeas")),Object(r.b)("a",{href:"./PlaygroundNotification",target:"_blank",title:"Link Interno"},Object(r.b)("button",{type:"button",className:"buttonModify button1"},"Notifica\xe7\xf5es")),Object(r.b)("a",{href:"./PlaygroundAssinaturas",target:"_blank",title:"Link Interno"},Object(r.b)("button",{type:"button",className:"buttonModify button1"},"Assinaturas")),Object(r.b)("a",{href:"./PlaygroundOutros",target:"_blank",title:"Link Interno"},Object(r.b)("button",{type:"button",className:"buttonModify button1"},"Outros"))))}b.isMDXComponent=!0},229:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return m}));var o=t(0),n=t.n(o);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=n.a.createContext({}),b=function(e){var a=n.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=b(e.components);return n.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},p=n.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=b(t),p=o,m=l["".concat(s,".").concat(p)]||l[p]||u[p]||r;return t?n.a.createElement(m,i(i({ref:a},d),{},{components:t})):n.a.createElement(m,i({ref:a},d))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=t[d];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);