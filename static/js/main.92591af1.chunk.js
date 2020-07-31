(this.webpackJsonpghio_react=this.webpackJsonpghio_react||[]).push([[0],{315:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=a(368),c=a(364),s=a(367),m=a(365),u=a(366),p=a(11),d=a(80),h=a(348),g=a(317),f=a(86),y=a(350),v=a(29),b=a(351),E="\n  My name is **Marc Abou Anoma**. I'm a data science and renewable energy enthusiast living in **Tokyo**. \n  My educational background is in numerical modeling and optimization applied to advanced energy systems, \n  and I currently do performance research and software development in the solar industry.  \n  In my spare time I enjoy learning about new technical subjects, and above all I like to build things using what I learn. \n  So the goal here is to share these projects and my thoughts with people with similar interests. \n  I may also occasionally post about non-technical subjects!  \n  Please don't hesitate to reach out via comments or using the social medial links.  \n  \n  Thank you for your visit!\n  ",w=Object(h.a)((function(e){return{content:{padding:e.spacing(2)}}})),x={overrides:{p:{component:g.a,props:{variant:"body2",align:"justify"}}}};var k=function(){var e=w();return r.a.createElement(y.a,{container:!0,spacing:3,direction:"column",alignItems:"center"},r.a.createElement(y.a,{item:!0,xs:12,sm:10,md:8},r.a.createElement(f.a,null,r.a.createElement("div",{className:e.content},r.a.createElement(g.a,{variant:"h4"},"Bio")),r.a.createElement(b.a,null),r.a.createElement("div",{className:e.content},r.a.createElement(v.a,{options:x},E)))))},j=a(352),I=a(353),O=a(356),P=a(355),N=a(354),S=a(357),T=Object(h.a)({card:{maxHeight:"400px"},media:{maxWidth:"100%",height:"140px"}}),A={overrides:{p:{component:g.a,props:{variant:"body2",align:"justify",color:"textSecondary"}}}};function B(e){var t=e.project,a=T(),n="  ".concat(t.summary);return r.a.createElement(j.a,{className:a.card},r.a.createElement(I.a,null,r.a.createElement(N.a,{component:"img",alt:t.image.caption,className:a.media,image:t.image.src,title:t.title}),r.a.createElement(P.a,null,r.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(v.a,{options:A},n))),r.a.createElement(O.a,null,r.a.createElement(S.a,{size:"small",color:"secondary",href:t.url},"Link")))}var D=a(65),M=a.n(D),F=a(66),R=a.n(F),_=a(67),C=a.n(_),G=a(68),H=a.n(G),L=a(54),z=a.n(L),J=[{title:"pvfactors",summary:"Irradiance modeling made simple: open-source Python model for bifacial irradiance modeling, published at IEEE PVSC 44 (2017).",description:"\n        This is a Python package I developed at SunPower that originated from a mathematical model we validated experimentally, and which calculates bifacial irradiance and diffuse shading on photovoltaic (PV) arrays. I gave an oral presentation of this model at the IEEE PVSC 44 conference.\npvfactors makes that model open-source on Github, but the package has turned into something closer to a framework now, where users can plug in their own irradiance models, view factor calculations and even geometries.\npvfactors is also now used in the industry-standard and much larger open-source photovoltaic modeling package called pvlib (as of pvlib v0.6.1).\n        ",tags:["python","renewable","energy","solar","research"],date:new Date,image:{src:M.a,caption:"pvfactors"},url:"https://sunpower.github.io/pvfactors/"},{title:"Neural Style Transfer",summary:"Streamlit application for Neural Style Transfer using Keras and Tensorflow.",description:"",tags:["deep-learning","python","AI"],date:new Date,image:{src:"https://github.com/anomam/nst/raw/master/outputs/example/starry_tokyo_tower.gif",caption:"NST"},url:"https://github.com/anomam/nst"},{title:"Passive radiative cooling",summary:"Nature paper on first-time in the world daytime passive radiative cooling using a nanophotonics device.",description:"",tags:["energy","renewable","research"],date:new Date,image:{src:R.a,caption:"Passive radiative cooling"},url:"https://www.nature.com/articles/nature13883"},{title:"Paris Real Estate Map",summary:"Interactive map on Paris real estate prices using DVF data.",description:"",tags:["angularjs","python","real-estate"],date:new Date,image:{src:C.a,caption:"Paris real estate"},url:"https://www.marcanoma.com/dvf/index"},{title:"Pendulum RL",summary:"Reinforcement Learning for pendulum equilibrium using numpy and value function approximation.",description:"",tags:["reinforcement learning","deep learning","numpy"],date:new Date,image:{src:z.a,caption:"Pendulum RL"},url:z.a},{title:"El Toro Bravo",summary:"Fun mechatronics project where we built an autonomous robot for sumo battling during grad school at Stanford.",description:"",tags:["mechatronics","grad school","stanford"],date:new Date,image:{src:H.a,caption:"El Toro Bravo"},url:"https://me210team10torobravo.weebly.com/index.html"}];var V=function(){return r.a.createElement(y.a,{container:!0,spacing:3},J.map((function(e){return r.a.createElement(y.a,{item:!0,key:e.title,xs:12,sm:6,md:3},r.a.createElement(B,{project:e}))})))};var q=function(){var e=Object(p.f)();return r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement("h3",null,"No match found for",r.a.createElement("code",null,e.pathname)))},U=a(82),W=a(4),Y=a(358),K=a(69),Q=a.n(K),Z=(a(313),{width:"100%"});function X(e){var t=e.src,a=e.alt,n=e.width,o=void 0===n?Z.width:n,i=Object(h.a)({image:{display:"block",marginLeft:"auto",marginRight:"auto",width:o}})();return r.a.createElement("img",{src:t,alt:a,className:i.image})}X.defaultProps=Z;var $={overrides:{img:{component:X},h1:{component:g.a,props:{gutterBottom:!0,variant:"h5"}},h2:{component:g.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:g.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:g.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:g.a,props:{paragraph:!0}},a:{component:Y.a,props:{color:"secondary"}},li:{component:Object(W.a)((function(){return{}}))((function(e){var t=e.classes,a=Object(U.a)(e,["classes"]);return r.a.createElement("li",{className:t.listItem},r.a.createElement(g.a,Object.assign({component:"span"},a)))}))}}};function ee(e){var t=e.children,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){a.current&&a.current.querySelectorAll("pre code").forEach((function(e){Q.a.highlightBlock(e)}))}),[t]),r.a.createElement("div",{ref:a},r.a.createElement(v.a,{options:$},t))}var te=a(43),ae=Object(h.a)((function(e){return{content:{padding:e.spacing(3)},grid:{width:"100%"}}}));function ne(){var e=ae(),t=Object(p.g)().blogPostId;if(!Object.prototype.hasOwnProperty.call(te,t))return r.a.createElement(q,null);var a=te[t],n="# ".concat(a.title,"\n#### ").concat(a.date.toString()),o="".concat(n,"\n\n").concat(a.content);return r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,sm:!1,md:1,lg:2}),r.a.createElement(y.a,{item:!0,sm:12,md:10,lg:8},r.a.createElement(f.a,{elevation:3,className:e.content},r.a.createElement(ee,null,o))),r.a.createElement(y.a,{item:!0,sm:!1,md:1,lg:2}))}var re=a(23);function oe(e){var t=e.post;return r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(I.a,{component:re.a,to:"blog/".concat(t.id)},r.a.createElement(j.a,null,r.a.createElement("div",null,r.a.createElement(P.a,null,r.a.createElement(g.a,{component:"h2",variant:"h5"},t.title),r.a.createElement(g.a,{variant:"subtitle1",color:"textSecondary"},t.date),r.a.createElement(g.a,{variant:"subtitle1",paragraph:!0},t.summary),r.a.createElement(g.a,{variant:"subtitle1",color:"secondary"},"Continue reading..."))))))}function ie(){var e,t=(e=te,Object.keys(e).map((function(t){return e[t]})).sort((function(e,t){return e.id<t.id?1:-1})));return r.a.createElement(y.a,{container:!0,spacing:4},t.map((function(e){return r.a.createElement(oe,{key:e.id,post:e})})))}function le(){return r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:k}),r.a.createElement(p.a,{path:"/projects",exact:!0,component:V}),r.a.createElement(p.a,{path:"/blog",exact:!0,component:ie}),r.a.createElement(p.a,{path:"/blog/:blogPostId",exact:!0,component:ne}),r.a.createElement(p.a,{path:"*"},r.a.createElement(q,null)))}var ce,se,me=a(363),ue=a(369),pe=a(81),de=a(16),he=a(361),ge=a(362),fe=a(370),ye=a(373),ve=a(77),be=a.n(ve),Ee=a(360),we=a(74),xe=a.n(we),ke=a(75),je=a.n(ke),Ie=a(76),Oe=a.n(Ie),Pe=a(371),Ne=a(79),Se=a.n(Ne),Te=[{type:"LinkedIn",url:"https://www.linkedin.com/in/marc-anoma-20b74940/"},{type:"Twitter",url:"https://twitter.com/anomamarc"},{type:"Google Scholar",url:"https://scholar.google.co.jp/citations?user=RrWWCvQAAAAJ&hl=en&oi=sra"},{type:"GitHub",url:"https://github.com/anomam"}],Ae=a(72),Be=a.n(Ae),De=a(71),Me=a.n(De),Fe=a(73),Re=a.n(Fe),_e=a(70),Ce=a.n(_e),Ge="github",He="linkedin",Le="twitter",ze="scholar",Je=(ce={},Object(de.a)(ce,Ge,{component:Ce.a}),Object(de.a)(ce,He,{component:Me.a}),Object(de.a)(ce,Le,{component:Be.a}),Object(de.a)(ce,ze,{component:Re.a}),ce),Ve="GitHub",qe="LinkedIn",Ue="Twitter",We="Google Scholar",Ye=(se={},Object(de.a)(se,Ve,Ge),Object(de.a)(se,qe,He),Object(de.a)(se,Ue,Le),Object(de.a)(se,We,ze),se),Ke={color:"inherit"};function Qe(e){var t=e.type,a=e.color,n=void 0===a?Ke.color:a;if(!Object.prototype.hasOwnProperty.call(Ye,t))return t;var o=Je[Ye[t]];return r.a.createElement(o.component,{color:n})}Qe.defaultProps=Ke;var Ze=Qe,Xe=Object(h.a)((function(e){return{root:{flexGrow:1},usrIcon:{marginRight:e.spacing(2)},link:{"&:hover":{textDecoration:"none"},color:"inherit"},title:{flexGrow:1},sectionDesktop:Object(de.a)({display:"none"},e.breakpoints.up("sm"),{display:"flex"}),sectionMobile:Object(de.a)({display:"flex"},e.breakpoints.up("sm"),{display:"none"})}})),$e=[{name:"Home",link:"/",Icon:xe.a},{name:"Projects",link:"/projects",Icon:je.a},{name:"Blog",link:"/blog",Icon:Oe.a}];function et(){var e=Xe(),t=r.a.useState(null),a=Object(pe.a)(t,2),n=a[0],o=a[1],i=Boolean(n),l=r.a.createElement(fe.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:function(){o(null)}},$e.map((function(e){return r.a.createElement(ye.a,{key:e.name,component:re.a,to:e.link,replace:!0},r.a.createElement(Ee.a,{color:"inherit"},r.a.createElement(e.Icon,{color:"primary"})),e.name)})),Te.map((function(t){return r.a.createElement(ye.a,{key:t.type,component:Y.a,href:t.url,className:e.link},r.a.createElement(Ee.a,{color:"inherit"},r.a.createElement(Ze,{type:t.type,color:"primary"})),t.type)})));return r.a.createElement("div",{className:e.root},r.a.createElement(he.a,{position:"static"},r.a.createElement(ge.a,null,r.a.createElement(be.a,{edge:"start",className:e.usrIcon,color:"inherit","aria-label":"menu"}),r.a.createElement(g.a,{variant:"h6",className:e.title},"anomam.github.io"),r.a.createElement("div",{className:e.sectionDesktop},$e.map((function(t){return r.a.createElement(Pe.a,{key:t.name,title:t.name},r.a.createElement(re.a,{to:t.link,className:e.link,replace:!0},r.a.createElement(Ee.a,{color:"inherit"},r.a.createElement(t.Icon,null))))})),Te.map((function(e){return r.a.createElement(Pe.a,{key:e.type,title:e.type},r.a.createElement(Ee.a,{color:"inherit",href:e.url},r.a.createElement(Ze,{type:e.type})))}))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(Ee.a,{"aria-label":"show more","aria-controls":"menu-mobile","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit"},r.a.createElement(Se.a,null))))),l)}function tt(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(Y.a,{color:"inherit",href:"https://anomam.github.io/"},"anomam.github.io")," ",(new Date).getFullYear(),".")}var at=Object(h.a)((function(e){return{container:{paddingTop:e.spacing(4)}}})),nt=function(e){var t=e.children,a=at();return r.a.createElement("main",null,r.a.createElement("header",null,r.a.createElement(et,null)),r.a.createElement("section",null,r.a.createElement(me.a,{className:a.container},t)),r.a.createElement("footer",null,r.a.createElement(ue.a,{pt:4},r.a.createElement(tt,null))))},rt=Object(d.a)();function ot(){return r.a.createElement(p.b,{history:rt},r.a.createElement(nt,null,r.a.createElement(le,null)))}rt.listen((function(e){!function(e){window.gtag&&window.gtag("config","UA-133656858-2",{page_path:"".concat(e.pathname).concat(e.search).concat(e.hash)})}(e)}));var it=Object(c.a)({palette:{primary:{main:m.a[600]},secondary:{main:u.a[700]}}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{theme:it},r.a.createElement(l.a,null),r.a.createElement(ot,null))),document.getElementById("root"))},43:function(e){e.exports=JSON.parse('{"1593561600":{"id":1593561600,"title":"Python argmax","author":"Marc Anoma","date":"2020-07-01","summary":"Native `argmax()` function in Python without numpy or Tensorflow","content":"\\nThere\'s no native `argmax` function in Python... and installing numpy or Tensorflow just for this would be like hunting snails with a rifle.\\n\\nHere\'s one option:\\n\\n```python\\ndef argmax(x: list) -> int: return max(range(len(x)), key=lambda i: x[i])\\n```\\n\\nYou can also define `argmin` in a similar fashion.\\n"},"1594771200":{"id":1594771200,"title":"I love FastAPI","author":"Marc Anoma","date":"2020-07-15","summary":"A small summary of all the reasons why I love FastAPI","content":"\\nI love [FastAPI](https://fastapi.tiangolo.com/) for multiple reasons\\n\\n1. the documentation is pure gold: it teaches about not only fastapi, but web development in general. And you can tell that [Tiangolo](https://github.com/tiangolo/) knows what he\'s talking about\\n2. it\'s lightweight\\n3. types are strongly enforced on all views: and in the process I\'m learning about how powerful [Pydantic](https://pydantic-docs.helpmanual.io/) is\\n4. it auto-documents and creates UI with forms to test all endpoints (~swagger)\\n5. it uses elegant dependency injection and makes things like OAuth2 relatively painless\\n6. python asyncio is native\\n7. the repo has 100% test coverage...\\n\\nFor me, it\'s one of those modern packages that I\'ll definitely use as inspiration in future work.\\nHopefully the Python community will pick it up and make sure the project has a long life.\\n"},"1594857600":{"id":1594857600,"title":"Understanding try/except/else/finally once and for all","author":"Marc Anoma","date":"2020-07-16","summary":"try/except is quite intuitive, but I always had to search again the else/finally clauses whenever I would stumble on it. Here is a simple example from the Python official documentation to put it to rest","content":"\\nFrom the [Python 3 documentation](https://docs.python.org/3/tutorial/errors.html#defining-clean-up-actions):\\n\\n```python\\n>>> def divide(x, y):\\n...     try:\\n...         result = x / y\\n...     except ZeroDivisionError:\\n...         print(\\"division by zero!\\")\\n...     else:\\n...         print(\\"result is\\", result)\\n...     finally:\\n...         print(\\"executing finally clause\\")\\n...\\n>>> divide(2, 1)\\nresult is 2.0\\nexecuting finally clause\\n>>> divide(2, 0)\\ndivision by zero!\\nexecuting finally clause\\n>>> divide(\\"2\\", \\"1\\")\\nexecuting finally clause\\nTraceback (most recent call last):\\n  File \\"<stdin>\\", line 1, in <module>\\n  File \\"<stdin>\\", line 3, in divide\\nTypeError: unsupported operand type(s) for /: \'str\' and \'str\'\\n```\\n\\nIn conclusion:\\n\\n- `finally` is always executed\\n- `else` is executed only if no exception is raised\\n"}}')},54:function(e,t,a){e.exports=a.p+"static/media/pendulum.515eeb0d.gif"},65:function(e,t,a){e.exports=a.p+"static/media/bifacial.dc78e8f4.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/passive_rad_cooling.69cdb4d4.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/Paris_map.5c4ba849.png"},68:function(e,t,a){e.exports=a.p+"static/media/eltorobravo.d3f0bb4a.jpg"},96:function(e,t,a){e.exports=a(315)}},[[96,1,2]]]);
//# sourceMappingURL=main.92591af1.chunk.js.map