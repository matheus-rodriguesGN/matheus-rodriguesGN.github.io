(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return m}));var a=t(2),r=t(6),o=(t(0),t(229)),i=t(236),c=t(237),s={id:"DefinirEnderecos",title:"Definir Endere\xe7os",hide_title:!0,sidebar_label:"Definir Endere\xe7os"},l={id:"OutrosRecursos/DefinirEnderecos",isDocsHomePage:!1,title:"Definir Endere\xe7os",description:"Definir Endere\xe7os",source:"@site/docs\\OutrosRecursos\\DefinirEnderecos.md",permalink:"/docs/OutrosRecursos/DefinirEnderecos",sidebar_label:"Definir Endere\xe7os",sidebar:"someSidebar",previous:{title:"Cancelar Transa\xe7\xf5es",permalink:"/docs/OutrosRecursos/CancelarTransacoes"},next:{title:"Detalhar Transa\xe7\xf5es",permalink:"/docs/OutrosRecursos/DetalharTransacoes"}},d=[{value:"Atributos de Envio:",id:"atributos-de-envio",children:[]},{value:"1. Setando endere\xe7o de cobran\xe7a (exemplo de utiliza\xe7\xe3o)",id:"1-setando-endere\xe7o-de-cobran\xe7a-exemplo-de-utiliza\xe7\xe3o",children:[]},{value:"2. Setando endere\xe7o de entrega (exemplo de utiliza\xe7\xe3o)",id:"2-setando-endere\xe7o-de-entrega-exemplo-de-utiliza\xe7\xe3o",children:[]}],b={rightToc:d};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},"Definir Endere\xe7os"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("p",null,"O envio de um endere\xe7o de cobran\xe7a do cliente \xe9 sempre obrigat\xf3rio para pagamento via cart\xe3o de cr\xe9dito, j\xe1 o endere\xe7o de entrega \xe9 opcional."),Object(o.b)("p",null,"O restante desta p\xe1gina apresenta os procedimentos detalhados, mas voc\xea precisa instalar uma de nossas bibliotecas em seu servidor para executar os c\xf3digos de exemplo. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../VisaoGeral/introducao#bibliotecas"}),"Certifique-se de que a SDK da Gerencianet foi instalada"),"."),Object(o.b)("p",null,"Qualquer endere\xe7o possui a seguinte estrutura:"),Object(o.b)("br",null),Object(o.b)("h3",{id:"atributos-de-envio"},"Atributos de Envio:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Atributos"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Obrigat\xf3rio"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Tipo"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"street")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Nome da rua"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sim"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"number")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N\xfamero"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sim"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String/Integer")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"neighborhood")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bairro"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sim"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"complement")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Complemento"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N\xe3o"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String/null")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"city")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cidade"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sim"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sim")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"state")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Estado (2 caracteres)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sim"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"zipcode")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CEP, sem pontos ou h\xedfen"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sim"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String")))),Object(o.b)("br",null),Object(o.b)("h2",{id:"1-setando-endere\xe7o-de-cobran\xe7a-exemplo-de-utiliza\xe7\xe3o"},"1. Setando endere\xe7o de cobran\xe7a (exemplo de utiliza\xe7\xe3o)"),Object(o.b)(i.a,{defaultValue:"php",values:[{label:"PHP",value:"php"},{label:"Python",value:"python"},{label:"NodeJS",value:"js"},{label:".NET",value:"c"},{label:"Java",value:"java"},{label:"GO",value:"go"},{label:"Ruby",value:"ruby"},{label:"Delphi",value:"delphi"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"<?php\n \nrequire __DIR__.'/../../vendor/autoload.php'; // caminho relacionado a SDK\n \nuse Gerencianet\\Exception\\GerencianetException;\nuse Gerencianet\\Gerencianet;\n \n$clientId = 'your_client_id'; // insira seu Client_Id, conforme o ambiente (Des ou Prod)\n$clientSecret = 'your_client_secret'; // insira seu Client_Secret, conforme o ambiente (Des ou Prod)\n \n$options = [\n  'client_id' => $clientId,\n  'client_secret' => $clientSecret,\n  'sandbox' => true // altere conforme o ambiente (true = desenvolvimento e false = producao)\n];\n \n$paymentToken = 'payment_token'; // payment_token obtido na 1\xaa etapa (atrav\xe9s do Javascript \xfanico por conta Gerencianet)\n \n// $charge_id refere-se ao ID da transa\xe7\xe3o gerada anteriormente\n$params = [\n  'id' => $charge_id\n];\n \n$customer = [\n  'name' => 'Gorbadoc Oldbuck', // nome do cliente\n  'cpf' => '94271564656' , // cpf do cliente\n  'phone_number' => '5144916523' // telefone do cliente\n];\n \n$billingAddress = [\n  'street' => 'Street 3',\n  'number' => 10,\n  'neighborhood' => 'Bauxita',\n  'zipcode' => '35400000',\n  'city' => 'Ouro Preto',\n  'state' => 'MG',\n];\n \n$creditCard = [\n  'installments' => 1, // n\xfamero de parcelas em que o pagamento deve ser dividido\n  'billing_address' => $billingAddress,\n  'payment_token' => $paymentToken,\n  'customer' => $customer\n];\n \n$body = [\n  'payment' => $payment\n];\n \n$payment = [\n  'credit_card' => $creditCard\n];\n \ntry {\n    $api = new Gerencianet($options);\n    $charge = $api->payCharge($params, $body);\n \n    print_r($charge);\n} catch (GerencianetException $e) {\n    print_r($e->code);\n    print_r($e->error);\n    print_r($e->errorDescription);\n} catch (Exception $e) {\n    print_r($e->getMessage());\n}\n"))),Object(o.b)(c.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"from gerencianet import Gerencianet\n \noptions = {\n    'client_id': 'client_id',\n    'client_secret': 'client_secret',\n    'sandbox': True\n}\n \ngn = Gerencianet(options)\n \nparams = {\n  'id': 1000\n}\n \nbody = {\n    'payment': {\n        'credit_card': {\n            'installments': 1,\n            'payment_token': \"6426f3abd8688639c6772963669bbb8e0eb3c319\",\n            'billing_address': {\n                'street': \"Av. JK\",\n                'number': 909,\n                'neighborhood': \"Bauxita\",\n                'zipcode': \"35400000\",\n                'city': \"Ouro Preto\",\n                'state': \"MG\"\n            },\n            'customer': {\n                'name': \"Gorbadoc Oldbuck\",\n                'email': \"oldbuck@gerencianet.com.br\",\n                'cpf': \"94271564656\",\n                'birth': \"1977-01-15\",\n                'phone_number': \"5144916523\"\n            }\n        }\n    }\n}\n \ngn.pay_charge(params=params, body=payment)\n"))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"'use strict';\n \nvar Gerencianet = require('gn-api-sdk-node');\n \nvar clientId = 'your_client_id';\nvar clientSecret = 'your_client_secret';\n \nvar options = {\n  client_id: clientId,\n  client_secret: clientSecret,\n  sandbox: true\n}\n \nvar params = {\n  id: 1000\n}\n \nvar body = {\n  payment: {\n    credit_card: {\n      installments: 1,\n      payment_token: '6426f3abd8688639c6772963669bbb8e0eb3c319',\n      billing_address: {\n        street: 'Street 3',\n        number: 10,\n        neighborhood: 'Bauxita',\n        zipcode: '35400000',\n        city: 'Ouro Preto',\n        state: 'MG'\n      },\n      customer: {\n        name: 'Gorbadoc Oldbuck',\n        email: 'oldbuck@gerencianet.com.br',\n        cpf: '94271564656',\n        birth: '1977-01-15',\n        phone_number: '5144916523'\n      }\n    }\n  }\n}\n \nvar gerencianet = new Gerencianet(options);\n \ngerencianet\n  .payCharge(params, body)\n  .then(console.log)\n  .catch(console.log)\n  .done();\n"))),Object(o.b)(c.a,{value:"c",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'dynamic endpoints = new Endpoints("client_id", "client_secret", true);\n \nvar param = new {\n    id = 1000\n};\n \nvar body = new {\n    payment = new {\n        credit_card = new {\n            installments = 1,\n            payment_token = "", // see credit card flow to see how to get this\n            billing_address = new {\n                street = "Av. JK",\n                number = 909,\n                neighborhood = "Bauxita",\n                zipcode = "35400000",\n                city = "Ouro Preto",\n                state = "MG"\n            },\n            customer = new {\n                name = "Gorbadoc Oldbuck",\n                email = "oldbuck@gerencianet.com.br",\n                cpf = "94271564656",\n                birth = "1977-01-15",\n                phone_number = "5144916523"\n            }\n        }\n    }\n};\n \nvar response = endpoints.PayCharge(param, body);\n'))),Object(o.b)(c.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'/* Para que a SDK Java funcione corretamente, \xe9 necess\xe1rio que a instancia\xe7\xe3o do m\xf3dulo seja feita atrav\xe9s da cria\xe7\xe3o de um objeto do tipo Gerencianet.\n\nSempre que quisermos chamar uma fun\xe7\xe3o da API, basta invocar o m\xe9todo call do objeto Gerencianet, passando como par\xe2metro o nome do m\xe9todo, os par\xe2metros da requisi\xe7\xe3o (sempre ser\xe1 um HashMap<String, String>), e o "body", que consiste nas propriedades a serem passadas como argumento na chamada de um fun\xe7\xe3o da SDK. O "body" pode ser declarado de duas formas: um JSONObject ou um Map<String, Object>.\n\nEsta estrutura \xe9 necess\xe1ria para representar o corpo da requisi\xe7\xe3o http que \xe9 enviada \xe0 um determinado endpoint. Se o "body" for um JSONObject, o retorno do m\xe9todo call ser\xe1 um JSONObject, se for um Map<String, Object>, o retorno do m\xe9todo call ser\xe1 um Map<String, Object>\n\nA seguir, disponibilizamos links de nosso Github mostrando duas formas diferentes de retorno: JSONObject\ne Map<String, Object>\n\n\nJSONObject\n\nhttps://github.com/gerencianet/gn-api-sdk-java-examples/blob/master/src/main/java/br/com/gerencianet/charge/json/Card.java\n\n\nMap<String, Object>\n\nhttps://github.com/gerencianet/gn-api-sdk-java-examples/blob/master/src/main/java/br/com/gerencianet/charge/map/Card.java\n\n*/\n'))),Object(o.b)(c.a,{value:"go",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'// No c\xf3digo de exemplo de uso da SDK de Go, definimos as credenciais de acesso \xe0 API (Client_Id e Client_Secret) e o ambiente a ser usado (sandbox como \'true\' ou \'false\') dentro de um arquivo espec\xedfico (configs.go), que est\xe1 localizado no diret\xf3rio "_examples/configs". Essas credenciais s\xe3o exportadas atrav\xe9s da vari\xe1vel \'Credentials\'.\n\npackage main\n\nimport (\n  "fmt"\n  "github.com/gerencianet/gn-api-sdk-go/gerencianet"\n  "github.com/gerencianet/gn-api-sdk-go/_examples/configs"\n)\n\nfunc main(){\n  \n  credentials := configs.Credentials\n  gn := gerencianet.NewGerencianet(credentials)\n\n  paymentToken := "payment_token";\n\n  customer := map[string]interface{}{\n    "name": "Gorbadoc Oldbuck",\n    "cpf": "04267484171",\n    "phone_number": "5144916523",\n    "email": "oldbuck@gerencianet.com.br",\n    "birth": "1977-01-15",\n  }\n\n  billingAddress := map[string]interface{} {\n    "street": "Av JK",\n    "number": 909,\n    "neighborhood": "Bauxita",\n    "zipcode": "35400000",\n    "city": "Ouro Preto",\n    "state": "MG",\n  }\n\n  body := map[string]interface{} {\n    "payment": map[string]interface{} {\n      "credit_card": map[string]interface{} {\n        "installments": 1,\n        "billing_address": billingAddress,\n        "payment_token": paymentToken,\n        "customer": customer,\n      },\n    },\n  }\n\n  res, err := gn.PayCharge(1, body) // no lugar do 1 coloque o charge_id certo\n\n  if err != nil {\n    fmt.Println(err)\n  } else {\n    fmt.Println(res)\n  }\n}\n'))),Object(o.b)(c.a,{value:"ruby",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'require "gerencianet"\n \noptions = {\n  client_id: "client_id",\n  client_secret: "client_secret",\n  sandbox: true\n}\n \nparams = {\n  id: 1000\n}\n \nbody = {\n  payment: {\n    credit_card: {\n      installments: 1,\n      payment_token: "5739b06925244dd1ab8e0afa62389d5fb4ea2945",\n      billing_address: {\n        street: "Av. JK",\n        number: 909,\n        neighborhood: "Bauxita",\n        zipcode: "35400000",\n        city: "Ouro Preto",\n        state: "MG"\n      },\n      customer: {\n        name: "Gorbadoc Oldbuck",\n        email: "oldbuck@gerencianet.com.br",\n        cpf: "94271564656",\n        birth: "1977-01-15",\n        phone_number: "5144916523"\n      }\n    }\n  }\n}\n \ngerencianet = Gerencianet.new(options)\nputs gerencianet.pay_charge(params: params, body: body)\n'))),Object(o.b)(c.a,{value:"delphi",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"interface\nfunction PayChargeWithCard(Id, Token: String): String;\n\nimplementation\nuses uGerenciaClient, uGerenciaNetClientUtilities;\n{... your code ... }\n\nfunction PayChargeWithCard(Id, Token: String): String;\nvar\n    Body: String;\n    PaymentParams: String;\n\nbegin\n  Body :=\n  '{'+\n    '\"payment\": {'+\n      '\"credit_card\": {'+\n        '\"customer\": {'+\n          '\"name\": \"Gorbadoc Oldbuck\",'+\n          '\"cpf\": \"04267484171\",'+\n          '\"phone_number\": \"5144916523\",'+\n          '\"email\": \"oldbuck@gerencianet.com.br\",'+\n          '\"birth\": \"1977-01-15\"'+\n        '},'+\n        '\"installments\": 1,'+\n        '\"payment_token\": \"'+Token+'\",'+\n        '\"billing_address\": {'+\n          '\"street\": \"Av. JK\",'+\n          '\"number\": \"909\",'+\n          '\"neighborhood\": \"Bauxita\",'+\n          '\"zipcode\": \"35400000\",'+\n          '\"city\": \"Ouro Preto\",'+\n          '\"state\": \"MG\"'+\n        '}'+\n      '}'+\n    '}'+\n  '}';\n\n  EnableService( 'GerenciaNet.dll' ); \n  ConfigureService( ToPAnsiChar( 'client_id' ),ToPAnsiChar( 'client_secret' ),'sandbox','config.json',''); \n  GerenciaNetAuthorize();\n  \n  PaymentParams := CreateRequestParams( [ 'id='+Id ] ).Text;\n  Result := ExecuteGerenciaNetRequest( 'payCharge',PaymentParams,'',Body );\nend;\n")))),Object(o.b)("br",null),Object(o.b)("hr",null),Object(o.b)("h2",{id:"2-setando-endere\xe7o-de-entrega-exemplo-de-utiliza\xe7\xe3o"},"2. Setando endere\xe7o de entrega (exemplo de utiliza\xe7\xe3o)"),Object(o.b)(i.a,{defaultValue:"php",values:[{label:"PHP",value:"php"},{label:"Python",value:"python"},{label:"NodeJS",value:"js"},{label:".NET",value:"c"},{label:"Java",value:"java"},{label:"GO",value:"go"},{label:"Ruby",value:"ruby"},{label:"Delphi",value:"delphi"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"<?php\n \nrequire __DIR__.'/../../vendor/autoload.php'; // caminho relacionado a SDK\n \nuse Gerencianet\\Exception\\GerencianetException;\nuse Gerencianet\\Gerencianet;\n \n$clientId = 'your_client_id'; // insira seu Client_Id, conforme o ambiente (Des ou Prod)\n$clientSecret = 'your_client_secret'; // insira seu Client_Secret, conforme o ambiente (Des ou Prod)\n \n$options = [\n  'client_id' => $clientId,\n  'client_secret' => $clientSecret,\n  'sandbox' => true // altere conforme o ambiente (true = desenvolvimento e false = producao)\n];\n \n// $charge_id refere-se ao ID da transa\xe7\xe3o gerada anteriormente\n$params = [\n  'id' => $charge_id\n];\n \n$customerAddress = [\n  'street' => 'Av. JK',\n  'number' => 909,\n  'neighborhood' => 'Bauxita',\n  'zipcode' => '35400000',\n  'city' => 'Ouro Preto',\n  'state' => 'MG',\n];\n \n$customer = [\n  'name' => 'Gorbadoc Oldbuck', // nome do cliente\n  'cpf' => '94271564656', // cpf do cliente\n  'phone_number' => '5144916523', // telefone do cliente\n  'address' => $customerAddress\n];\n \n$banking_billet = [\n  'customer' => $customer\n];\n \n$payment = [\n  'banking_billet' => $banking_billet // forma de pagamento (banking_billet = boleto)\n];\n \n$body = [\n  'payment' => $payment\n];\n \ntry {\n    $api = new Gerencianet($options);\n    $charge = $api->payCharge($params, $body);\n \n    print_r($charge);\n} catch (GerencianetException $e) {\n    print_r($e->code);\n    print_r($e->error);\n    print_r($e->errorDescription);\n} catch (Exception $e) {\n    print_r($e->getMessage());\n}\n"))),Object(o.b)(c.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"from gerencianet import Gerencianet\n \noptions = {\n    'client_id': 'client_id',\n    'client_secret': 'client_secret',\n    'sandbox': True\n}\n \ngn = Gerencianet(options)\n \nparams = {\n  'id': 1000\n}\n \nbody = {\n  'payment': {\n    'banking_billet': {\n        'expire_at': tomorrow,\n        'customer': {\n            'name': \"Gorbadoc Oldbuck\",\n            'cpf': \"94271564656\",\n            'phone_number': \"5144916523\",\n            'billing_address': {\n                'street': \"Av. JK\",\n                'number': 909,\n                'neighborhood': \"Bauxita\",\n                'zipcode': \"35400000\",\n                'city': \"Ouro Preto\",\n                'state': \"MG\"\n            }\n        }\n    }\n  }\n}\n \ngn.pay_charge(params=params, body=payment)\n"))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"'use strict';\n \nvar moment = require('moment');\nvar Gerencianet = require('gn-api-sdk-node');\n \nvar clientId = 'your_client_id';\nvar clientSecret = 'your_client_secret';\n \nvar options = {\n  client_id: clientId,\n  client_secret: clientSecret,\n  sandbox: true\n}\n \nvar params = {\n  id: 1000\n}\n \nvar tomorrow = moment()\n  .add(1, 'days')\n  .format('YYYY-MM-DD');\n \nvar body = {\n  payment: {\n    banking_billet: {\n      expire_at: tomorrow,\n      customer: {\n        name: 'Gorbadoc Oldbuck',\n        cpf: '94271564656',\n        phone_number: '5144916523',\n        address: {\n          street: 'Av. JK',\n          number: 909,\n          neighborhood: 'Bauxita',\n          zipcode: '35400000',\n          city: 'Ouro Preto',\n          state: 'MG'\n        }\n      }\n    }\n  }\n}\n \nvar gerencianet = new Gerencianet(options);\n \ngerencianet\n  .payCharge(params, body)\n  .then(console.log)\n  .catch(console.log)\n  .done();\n"))),Object(o.b)(c.a,{value:"c",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'dynamic endpoints = new Endpoints("client_id", "client_secret", true);\n \nvar params = {\n    id = 1000\n};\n \nvar body = new {\n    payment = new {\n        banking_billet = new {\n            expire_at = "2016-12-12",\n            customer = new {\n                name = "Gorbadoc Oldbuck",\n                email = "oldbuck@gerencianet.com.br",\n                cpf = "94271564656",\n                birth = "1977-01-15",\n                phone_number = "5144916523",\n                address = new {\n                    street = "Av. JK",\n                    number = 909,\n                    neighborhood = "Bauxita",\n                    zipcode = "35400000",\n                    city = "Ouro Preto",\n                    state = "MG"\n                }\n            }\n        }\n    }\n};\n \nvar response = endpoints.PayCharge(params, body);\n'))),Object(o.b)(c.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'/* Para que a SDK Java funcione corretamente, \xe9 necess\xe1rio que a instancia\xe7\xe3o do m\xf3dulo seja feita atrav\xe9s da cria\xe7\xe3o de um objeto do tipo Gerencianet.\n\nSempre que quisermos chamar uma fun\xe7\xe3o da API, basta invocar o m\xe9todo call do objeto Gerencianet, passando como par\xe2metro o nome do m\xe9todo, os par\xe2metros da requisi\xe7\xe3o (sempre ser\xe1 um HashMap<String, String>), e o "body", que consiste nas propriedades a serem passadas como argumento na chamada de um fun\xe7\xe3o da SDK. O "body" pode ser declarado de duas formas: um JSONObject ou um Map<String, Object>.\n\nEsta estrutura \xe9 necess\xe1ria para representar o corpo da requisi\xe7\xe3o http que \xe9 enviada \xe0 um determinado endpoint. Se o "body" for um JSONObject, o retorno do m\xe9todo call ser\xe1 um JSONObject, se for um Map<String, Object>, o retorno do m\xe9todo call ser\xe1 um Map<String, Object>\n\nA seguir, disponibilizamos links de nosso Github mostrando duas formas diferentes de retorno: JSONObject\ne Map<String, Object>\n\n\nJSONObject\n\nhttps://github.com/gerencianet/gn-api-sdk-java-examples/blob/master/src/main/java/br/com/gerencianet/charge/json/Card.java\n\n\nMap<String, Object>\n\nhttps://github.com/gerencianet/gn-api-sdk-java-examples/blob/master/src/main/java/br/com/gerencianet/charge/map/Card.java\n\n*/\n'))),Object(o.b)(c.a,{value:"go",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'// No c\xf3digo de exemplo de uso da SDK de Go, definimos as credenciais de acesso \xe0 API (Client_Id e Client_Secret) e o ambiente a ser usado (sandbox como \'true\' ou \'false\') dentro de um arquivo espec\xedfico (configs.go), que est\xe1 localizado no diret\xf3rio "_examples/configs". Essas credenciais s\xe3o exportadas atrav\xe9s da vari\xe1vel \'Credentials\'.\n\npackage main\n\nimport (\n  "fmt"\n  "github.com/gerencianet/gn-api-sdk-go/gerencianet"\n  "github.com/gerencianet/gn-api-sdk-go/_examples/configs"\n)\n\nfunc main(){\n  \n  credentials := configs.Credentials\n  gn := gerencianet.NewGerencianet(credentials)\n\n  paymentToken := "payment_token";\n\n  customer := map[string]interface{}{\n    "name": "Gorbadoc Oldbuck",\n    "cpf": "04267484171",\n    "phone_number": "5144916523",\n    "email": "oldbuck@gerencianet.com.br",\n    "birth": "1977-01-15",\n  }\n\n  billingAddress := map[string]interface{} {\n    "street": "Av JK",\n    "number": 909,\n    "neighborhood": "Bauxita",\n    "zipcode": "35400000",\n    "city": "Ouro Preto",\n    "state": "MG",\n  }\n\n  body := map[string]interface{} {\n    "payment": map[string]interface{} {\n      "credit_card": map[string]interface{} {\n        "installments": 1,\n        "billing_address": billingAddress,\n        "payment_token": paymentToken,\n        "customer": customer,\n      },\n    },\n  }\n\n  res, err := gn.PayCharge(1, body) // no lugar do 1 coloque o charge_id certo\n\n  if err != nil {\n    fmt.Println(err)\n  } else {\n    fmt.Println(res)\n  }\n}\n'))),Object(o.b)(c.a,{value:"ruby",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'require "gerencianet"\n \noptions = {\n  client_id: "client_id",\n  client_secret: "client_secret",\n  sandbox: true\n}\n \nparams = {\n  id: 1000\n}\n \nbody = {\n  payment: {\n    banking_billet: {\n      expire_at: tomorrow,\n      customer: {\n        name: "Gorbadoc Oldbuck",\n        cpf: "94271564656",\n        phone_number: "5144916523",\n        address: {\n          street: "Av. JK",\n          number: 909,\n          neighborhood: "Bauxita",\n          zipcode: "35400000",\n          city: "Ouro Preto",\n          state: "MG"\n        }\n      }\n    }\n  }\n}\n \ngerencianet = Gerencianet.new(options)\nputs gerencianet.pay_charge(params: params, body: body)\n'))),Object(o.b)(c.a,{value:"delphi",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"interface\nfunction PayChargeWithBillet(Id: String): String;\n\nimplementation\nuses uGerenciaClient, uGerenciaNetClientUtilities;\n{... your code ... }\n\nfunction PayChargeWithBillet(Id: String): String;\nvar \n    Body : String;\n    PaymentParams: String;\n    \nconst \n    BodyText = \n    '{'+\n      '\"payment\": {'+\n        '\"banking_billet\": {'+\n          '\"customer\": {'+\n            '\"email\": \"teste@gmail.com\",'+\n            '\"phone_number\": \"5144916523\",'+\n            '\"birth\": \"1977-07-17\",'+\n            '\"address\": {'+\n              '\"street\": \"Av. JK\",'+\n              '\"number\": 909,'+\n              '\"neighborhood\": \"Bauxita\",'+\n              '\"complement\": \"\",'+\n              '\"city\": \"Ouro Preto\",'+\n              '\"state\": \"MG\",'+\n              '\"zipcode\": \"35400000\"'+\n            '},'+\n            '\"name\": \"Gorbadoc Oldbuck\",'+\n            '\"cpf\": \"04267484171\"'+\n          '},'+\n          '\"message\": \"Test\",'+\n          '\"expire_at\": \"2019-02-21\"'+\n        '}'+\n      '}'+\n    '}';\n\nbegin\n  EnableService( 'GerenciaNet.dll' ); \n  ConfigureService( ToPAnsiChar( 'client_id' ),ToPAnsiChar( 'client_secret' ),'sandbox','config.json',''); \n  GerenciaNetAuthorize(); \n\n  PaymentParams := CreateRequestParams( [ 'id='+Id ] ).Text; // Passa o id da transa\xe7\xe3o\n  Body := BodyText;\n\n  Result := ExecuteGerenciaNetRequest( 'payCharge',PaymentParams,'',Body );\nend;\n"))))))}m.isMDXComponent=!0},229:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return p}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(t),u=a,p=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return t?r.a.createElement(p,c(c({ref:n},l),{},{components:t})):r.a.createElement(p,c({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},233:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},234:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});n.a=r},235:function(e,n,t){"use strict";var a=t(0),r=t(234);n.a=function(){return Object(a.useContext)(r.a)}},236:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(235),i=t(233),c=t(92),s=t.n(c);const l=37,d=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:b,groupId:m}=e,{tabGroupChoices:u,setTabGroupChoices:p}=Object(o.a)(),[g,O]=Object(a.useState)(c);if(null!=m){const e=u[m];null!=e&&e!==g&&b.some(n=>n.value===e)&&O(e)}const j=e=>{O(e),null!=m&&p(m,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n})},b.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,n,t)=>{switch(t.keyCode){case d:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case l:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(y,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===g)[0]))}},237:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);