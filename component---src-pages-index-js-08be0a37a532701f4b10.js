(self.webpackChunkokp4_website=self.webpackChunkokp4_website||[]).push([[678],{2899:function(e,t,a){"use strict";var n=a(7294),r=a(7732),i=a(9211),s=a(9812);t.Z=e=>{let{children:t,location:a,files:c,breadcrumbs:l,isStatic:o=!1,withDocs:d=!0,withAssociates:m=!0,withPartners:u=!0}=e;return n.createElement(n.Fragment,null,n.createElement(r.Z,null),n.createElement(i.Z,{isPositionFixed:o,breadcrumbs:l}),n.createElement("main",{className:a},t),n.createElement(s.Z,{files:c,withDocs:d,withAssociates:m,withPartners:u}))}},2424:function(e,t,a){"use strict";var n=a(7294),r=a(6355),i=a(9306);t.Z=e=>{let{children:t,classContainer:a,parallaxStart:s,parallaxEnd:c,parallaxMiddle:l,size:o="md"}=e;const d=(0,n.useRef)(null),m=()=>{if(d.current){if(r.S8(d.current)){var e,t,a=r.L6(d.current);a>.3334&&(t=(e=1.5*(a-.3334)).toFixed(4)*c),a<.3334&&(.9999===(e=1-3*a)&&(e=1),t=e.toFixed(4)*s);var n="translate3d(0, "+t+"px, 0)";d.current.style.transform=n}d.current.rafId=requestAnimationFrame(m)}};return(0,n.useEffect)((()=>{i.TR(o)&&setTimeout((function(){if(d.current)return d.current.rafId=0,(()=>{if(d.current){var e="translate3d(0, "+s+"px, 0)";d.current.style.transform=e}})(),d.current.rafId=requestAnimationFrame(m),()=>{cancelAnimationFrame(d.current.rafId)}}),1e3)})),n.createElement("div",{ref:d,className:a},t)}},9596:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return W},default:function(){return I}});var n=a(7294),r=a(2899),i=a(5023),s=a(8032),c=a(6355),l=a(9306),o=JSON.parse('{"TN":{"v":"The open","h":"Knowledge protocol"},"Oc":"OKP4 is an ever-expanding universe of applications powered by shared digital resources."}');var d=()=>{const e=(0,n.useRef)(null),t=(0,n.useRef)(null),r=(0,n.useRef)(null),d=()=>{if(window.scrollY<410&&r.current){let e=window.scrollY/400;e>1&&(e=1),e<0&&(e=0),r.current.style.opacity=e}},m=()=>{if(e.current){let a=e.current.dataset.start,n=e.current.dataset.end;if(window.scrollY>=a&&window.scrollY<=n){let e=c.Ru({startScale:a,endScale:n}),r=(1-e/10).toFixed(4);if(t.current){let a="scale3d("+r+","+r+","+r+")";t.current.style.transform=a;let n=(1-2*e).toFixed(4);t.current.style.opacity=n}}e.current.querySelectorAll("[data-parallax]").forEach((e=>{if(c.S8(r.current)){var t=c.L6(r.current),a=parseInt(e.dataset.parallaxend);l.It("lg")&&(a/=2);var n="translate3d(0, "+(t.toFixed(4)*a).toFixed(4)+"px, 0)";e.style.transform=n}})),e.current.rafId=requestAnimationFrame(m)}};return(0,n.useEffect)((()=>{if(e.current){e.current.rafId=0;var t=e.current.getBoundingClientRect().top+window.scrollY;var a=window.innerHeight||document.documentElement.clientHeight;e.current.dataset.top=t,e.current.dataset.start=0,e.current.dataset.end=a,e.current.dataset.raf=0,setTimeout((function(){if(e.current)return e.current.rafId=requestAnimationFrame(m),window.addEventListener("scroll",d),()=>{cancelAnimationFrame(e.current.rafId),window.removeEventListener("scroll",d)}}),1e3)}})),n.createElement("section",{className:"landing",ref:e},n.createElement(i.Z,null),n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"landing__fade",ref:t},n.createElement("h1",null,o.TN.v.split(" ").map(((e,t)=>n.createElement("span",{className:"title-wrap",key:t},n.createElement("span",null,e)))),n.createElement("br",null),o.TN.h.split(" ").map(((e,t)=>n.createElement("span",{className:"title-wrap",key:t},n.createElement("span",null,e))))),n.createElement("p",{className:"subtitle"},n.createElement("span",{dangerouslySetInnerHTML:{__html:o.Oc}}))),n.createElement("div",{className:"landing__illus",ref:r},n.createElement(s.S,{className:"imgWrapper--base",src:"../../../assets/images/illus/index_landing.webp",alt:"OKP4 hero image",loading:"eager",__imageData:a(5997)}),n.createElement("div",{className:"landing__illus__wrapper"},n.createElement("div",{className:"parallaxWrapper","data-parallax":"1","data-parallaxend":"200"},n.createElement(s.S,{className:"imgWrapper",src:"../../../assets/images/illus/index_landing_sprites/calque-1.webp",alt:"OKP4 hero image",loading:"eager",__imageData:a(1905)})),n.createElement("div",{className:"parallaxWrapper"},n.createElement(s.S,{className:"imgWrapper",src:"../../../assets/images/illus/index_landing_sprites/calque-2.webp",alt:"OKP4 hero image",loading:"eager",__imageData:a(8144)})),n.createElement("div",{className:"parallaxWrapper","data-parallax":"1","data-parallaxend":"200"},n.createElement(s.S,{className:"imgWrapper",src:"../../../assets/images/illus/index_landing_sprites/calque-3.webp",alt:"OKP4 hero image",loading:"eager",__imageData:a(1323)})),n.createElement("div",{className:"parallaxWrapper","data-parallax":"1","data-parallaxend":"350"},n.createElement(s.S,{className:"imgWrapper",src:"../../../assets/images/illus/index_landing_sprites/calque-4.webp",alt:"OKP4 hero image",loading:"eager",__imageData:a(2281)}))))))},m=a(5607);var u=e=>{let{children:t,classContainer:a}=e;const r=(0,n.useRef)(null),i=(0,n.useRef)(null),s=()=>{if(r.current){const e=r.current.dataset.start,t=r.current.dataset.end;if(window.scrollY>=e&&window.scrollY<=t){const a=c.Ru({startScale:e,endScale:t}),n=(1-a/10).toFixed(4),i="scale3d("+n+","+n+","+n+")";r.current.style.transform=i;const s=(a/2).toFixed(4);r.current.querySelector(".strate__layer").style.opacity=s}r.current.rafId=requestAnimationFrame(s)}};return(0,n.useEffect)((()=>{l.TR("lg")&&setTimeout((function(){if(r.current){const e=window.innerHeight||document.documentElement.clientHeight,t=r.current.getBoundingClientRect(),a=t.top+window.scrollY;let n=a+t.height-e+150;t.height<e&&(n=a);const c=a+t.height;return r.current.dataset.top=a,r.current.dataset.start=n,r.current.dataset.end=c,(()=>{if(r.current){const e=window.innerHeight||document.documentElement.clientHeight,t=r.current.getBoundingClientRect();let a=-150;t.height>e&&(a=-(t.height-e+150));const n=a+"px";r.current.style.top=n;const s=parseFloat(r.current.dataset.end)-parseFloat(r.current.dataset.start);i.current.style.top=parseFloat(r.current.dataset.start)+"px",i.current.style.height=s+"px"}})(),r.current.rafId=0,r.current.rafId=requestAnimationFrame(s),()=>{cancelAnimationFrame(r.current.rafId)}}}),3e3)})),n.createElement(n.Fragment,null,n.createElement("section",{className:"strate "+a,ref:r},n.createElement("div",{className:"strate__inner"},n.createElement("div",{className:"strate__layer"}),t)),n.createElement("div",{className:"strate__monitoring",ref:i}))},p=a(2424),_=JSON.parse('{"TN":"NEW OPPORTUNITIES FOR EVERY DIGITAL RESSOURCE","WL":["OKP4 is the only public <b>layer-1 blockchain</b> designed for coordination of digital assets such as datasets, algorithms, software, storage or computation. Anyone can build and join custom","Data Spaces","where rules are shared and value flows between participants."],"wk":"Let’s build amazing things together!","nd":{"TN":"Easy to build","WL":"Data Spaces and Applications","BH":"index_intro_card_1.webp"},"ax":{"TN":"Built in Trust","WL":"and custom governance","BH":"index_intro_card_2.webp"},"cM":{"TN":"Optimal incentives","WL":"for collaboration","BH":"index_intro_card_3.webp"},"yb":{"TN":"Powered by the $KNOW token","WL":"Incentives & value flows for the many use cases are enabled by the $KNOW. Many B2B use cases are ready to be launched, more community use cases will be built when the Testnet launches.","BH":"index_intro_know.webp","LI":"What is $KNOW?","HQ":"/learn/know"},"$0":{"TN":"Built on the Cosmos SDK","WL":"A smart contract hub specifically designed for Data Spaces.","BH":"index_intro_cosmos.webp"},"KX":{"T":"Simplicity and transparency","W":"Decentralization guarantees sovereignity of shared data and services, trustlessness, transparency, easy managment and customization of governance rules."}}'),h=a(1883),g=a(197),f=a.n(g);var b=e=>{let{files:t}=e;return n.createElement(u,{classContainer:"introduction"},n.createElement(i.Z,{classContainer:"halo--big"}),n.createElement("div",{className:"gradient"},n.createElement("div",{className:"gradient__layer"})),n.createElement("div",{className:"wrapper"},n.createElement("h2",{className:"introduction__title"},_.TN),n.createElement("p",{className:"introduction__text"},n.createElement("span",{dangerouslySetInnerHTML:{__html:_.WL[0]}}),n.createElement(h.Link,{to:"/learn/dataspace/"},n.createElement("span",{dangerouslySetInnerHTML:{__html:_.WL[1]}}),n.createElement(f(),null)),n.createElement("span",{dangerouslySetInnerHTML:{__html:_.WL[2]}})),n.createElement("p",{className:"introduction__catch"},_.wk),n.createElement("div",{className:"grid introduction__cards"},n.createElement(p.Z,{classContainer:"introduction__cards__item",parallaxStart:"100",parallaxEnd:"-100",parallaxMiddle:"0.5"},n.createElement("div",{className:"introduction__cards__item__illus","data-infinite":"1"},n.createElement(s.G,{className:"imgWrapper",image:m.h(_.nd.BH,t),alt:"Easy to build data spaces and applications"})),n.createElement("p",{className:"title"},_.nd.TN),n.createElement("p",{className:"text"},_.nd.WL)),n.createElement(p.Z,{classContainer:"introduction__cards__item",parallaxStart:"50",parallaxEnd:"-50",parallaxMiddle:"0.5"},n.createElement("div",{className:"introduction__cards__item__illus","data-infinite":"1"},n.createElement(s.G,{className:"imgWrapper",image:m.h(_.ax.BH,t),alt:"Built in Trust and custom governance"})),n.createElement("p",{className:"title"},_.ax.TN),n.createElement("p",{className:"text"},_.ax.WL)),n.createElement(p.Z,{classContainer:"introduction__cards__item",parallaxStart:"150",parallaxEnd:"-150",parallaxMiddle:"0.5"},n.createElement("div",{className:"introduction__cards__item__illus","data-infinite":"1"},n.createElement(s.G,{className:"imgWrapper",image:m.h(_.cM.BH,t),alt:"Built in Trust and custom governance"})),n.createElement("p",{className:"title"},_.cM.TN),n.createElement("p",{className:"text"},_.cM.WL))),n.createElement("div",{className:"grid introduction__pushs"},n.createElement("div",{className:"introduction__pushs__item introduction__pushs__item--left"},n.createElement("div",{className:"introduction__pushs__item__illus","data-infinite":"1"},n.createElement(s.G,{className:"imgWrapper",image:m.h(_.yb.BH,t),alt:_.yb.TN})),n.createElement("div",{className:"introduction__pushs__item__texts"},n.createElement("p",{className:"title"},_.yb.TN),n.createElement("p",{className:"text"},_.yb.WL)),n.createElement(h.Link,{to:_.yb.HQ,className:"cta__button"},n.createElement("span",{className:"cta__button__text"},_.yb.LI))),n.createElement("div",{className:"introduction__pushs__item introduction__pushs__item--right"},n.createElement("div",{className:"introduction__pushs__item__illus","data-infinite":"1"},n.createElement(s.G,{className:"imgWrapper",image:m.h(_.$0.BH,t),alt:_.$0.TN})),n.createElement("div",{className:"introduction__pushs__item__texts"},n.createElement("p",{className:"title"},_.$0.TN),n.createElement("p",{className:"text"},_.$0.WL))),n.createElement("div",{className:"introduction__pushs__item introduction__pushs__item--right"},n.createElement("div",{className:"introduction__pushs__item__texts"},n.createElement("p",{className:"title"},_.KX.T),n.createElement("p",{className:"text"},_.KX.W))))))},v=a(6598),w=a.n(v);var E=e=>{let{files:t,mp4:a,webm:r}=e;const i=(0,n.useRef)(null),s=(e,t)=>{e.forEach((e=>{e.isIntersecting&&i.current&&(i.current.play(),t.unobserve(e.target))}))};return(0,n.useEffect)((()=>{setTimeout((()=>{var e;e=new IntersectionObserver(s,{root:null,rootMargin:"100px",threshold:0}),i.current&&e.observe(i.current)}),1e3)})),n.createElement("div",{className:"videoWrapper"},n.createElement("video",{preload:"none",loop:!0,muted:!0,playsInline:!0,controls:!0,ref:i},n.createElement("source",{src:m.p(a,t),type:"video/mp4"}),n.createElement("source",{src:m.p(r,t),type:"video/webm"})))},N=JSON.parse('{"Rk":{"c":"okp4-720p.mp4","$":"okp4-720p.webm"}}');var y=e=>{let{files:t}=e;return n.createElement(u,{classContainer:"video"},n.createElement("div",{className:"video__player","data-reveal":"1"},n.createElement(E,{files:t,mp4:N.Rk.c,webm:N.Rk.$}),n.createElement(w(),null)))};var x=e=>{let{children:t,classContainer:a}=e;const r=(0,n.useRef)(null);var i=0,s="down";const c=e=>{if(r.current){s=document.body.getBoundingClientRect().top>i?"up":"down",i=document.body.getBoundingClientRect().top;var t=r.current.querySelector(".universe__item.is-first-active");const e=window.innerHeight||document.documentElement.clientHeight;let a=.6*e;if("up"===s&&(a=.4*e),t){if(t.getBoundingClientRect().top<a){t.classList.remove("is-first-active"),t.classList.add("is-active");let e=".universe__illus__item[data-item='"+t.dataset.item+"']";r.current.querySelector(e).classList.add("is-active"),r.current.querySelector(e).classList.remove("is-first-active")}}else{const e=r.current.querySelectorAll(".universe__item");e.forEach((t=>{if(t.classList.contains("is-active"))return;let n=t.getBoundingClientRect();if(n.top<a&&n.top>a-100){e.forEach((e=>{if(e.classList.contains("is-active")){e.classList.remove("is-active");let t=".universe__illus__item[data-item='"+e.dataset.item+"']";r.current.querySelector(t).classList.remove("is-active")}})),t.classList.add("is-active");let a=".universe__illus__item[data-item='"+t.dataset.item+"']";r.current.querySelector(a).classList.add("is-active")}}))}}};return(0,n.useEffect)((()=>(l.It("lg")&&r.current&&r.current.querySelectorAll(".universe__illus__item").forEach((e=>{let t="div.universe__item[data-item='"+e.dataset.item+"']";r.current.querySelector(t).append(e)})),window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}))),n.createElement("div",{className:a,ref:r},t)};var k=e=>{let{children:t,classContainer:a,scaleTopSticky:r,scaleMax:i,isLastItem:s}=e;const o=(0,n.useRef)(null),d=()=>{if(o.current){var e,t;const a=null===(e=o.current)||void 0===e?void 0:e.dataset.start,n=null===(t=o.current)||void 0===t?void 0:t.dataset.end;if(window.scrollY>=a&&window.scrollY<=n){const e=c.Ru({startScale:a,endScale:n}),t=(1-e*i).toFixed(4),r="scale3d("+t+","+t+","+t+")";o.current.style.transform=r;const s=(e/4).toFixed(4);o.current.querySelector(".homepage__roadmap__item__layer").style.opacity=s}o.current.rafId=requestAnimationFrame(d)}};return(0,n.useEffect)((()=>{s||setTimeout((function(){if(o.current){const e=o.current.getBoundingClientRect(),t=e.top+window.scrollY,a=t-r,n=t-r+e.height;return o.current.dataset.top=t,o.current.dataset.start=a,o.current.dataset.end=n,o.current.dataset.height=e.height,(()=>{if(o.current){let e=parseInt(r);l.It("md")&&(e/=2);let t=e+"px";o.current.style.top=t}})(),o.current.rafId=0,o.current.rafId=requestAnimationFrame(d),()=>{cancelAnimationFrame(o.current.rafId)}}}),3e3)})),n.createElement("div",{className:a,ref:o},t)},S=JSON.parse('{"TN":"ENTER IN THE OKP4 UNIVERSE","ev":[{"title":"Blockchain","identifiant":"blockchain","description":"The first blockchain designed for digital assets sharing & coordination.","tag":"OKP4","image":"index_universe_blockchain.webp","button":"About OKP4","link":"/learn/okp4/"},{"title":"Dataverse","identifiant":"dataverse","description":"The ever-extanding universe comprised of all the Datasets, Algorithms, Softwares, Infrastructures and other resources referenced in the Blockchain and shared within multiple Data Spaces.","tag":"OKP4","image":"index_universe_dataverse.webp","button":"Discover more","link":"/learn/dataverse"},{"title":"Development kit","identifiant":"dk","description":"Tools and services dedicated to developers to create their own apps using the OKP4 protocol.","tag":"OKP4","image":"index_universe_dk_cropped.webp","button":"Learn more","link":"/develop/okp4developmentkit"},{"title":"Dataverse Gateways","identifiant":"dg","description":"OKP4 Dataverse Gateways enable anyone to interact with, build into, share and contribute and earn from the Dataverse.","tag":"OKP4","image":"index_universe_dg.webp","button":"Discover","link":"/explore/dataverse-gateways"}]}'),T=JSON.parse('{"TN":"ROADMAP","Oc":"The next era for the knowledge economy","WL":"OKP4 is a blockchain built for the coordination of digital resources. <br /> This is is the only blockchain where <b> developers can find the perfect environment</b> to build a new generation of applications based on digital resources (datasets, algorithms, storage, computation…) <b>shared by participants </b> (communities and businesses).","LI":"Discover the detailed roadmap","p4":"/learn/roadmap","ev":[{"title":"Genesis","subtitle":"The story began in 2018 with a vision of addressing the two main issues relating to data sharing: lack of trust and lack of interest alignment between participants.","description":"It led to the first B2B use cases with OKP4 Company as a centralized coordinator to experiment with the many governance rules and refine our value proposition. After two years of experimentation, we were ready to work on decentralization. Realizing there was no decentralized network specifically designed for such use cases, we quickly concluded that we needed to create our own specific and sovereign blockchain. We then chose the Cosmos SDK to build it.<br /><br />After two more years of research and development using the Cosmos SDK as a starting point, OKP4 was ready for the Nemeton era.","tag":"2018 - 2022","imageDesktop":"index_roadmap_1.webp","imageMobile":"index_roadmap_1_mobile.webp"},{"title":"Nemeton","subtitle":"OKP4 launched its Nemeton Public Testnet on the 17th of October, 2022.","description":"The Nemeton era is the bootstrapping era. This is when the ideas & concepts are expressed to the public.This is when the first validators join together to power the network, test its limits and contribute to its developments. <br /> <br />This is when the first builders come to explore Data Space possibilities and opportunities for them and their communities, resulting in the first OKP4-powered decentralized use cases operated by communities of pioneers. This is where the community unites around the vision of a new generation of applications enabled by trust-minimized sharing of digital resources. Nemeton becomes the host for existing use cases. <br /> <br />The Nemeton era results in a stable, battle-tested environment and gives birth to the OKP4 mainnet.","tag":"Q4 2022 – Q2 2023","imageDesktop":"index_roadmap_2.webp","imageMobile":"index_roadmap_2_mobile.webp"},{"title":"Myrddin","subtitle":"Get ready for the Myrddin era, where OKP4 mainnet is unleashed and the decentralized network come to life.","description":"The main focus is making OKP4 easy to use and highly customizable, hosted on a community-operated network secured by the scarce, publicly traded $KNOW token. Watch as the community of builders deploys new governance rules for Data Spaces and participants find new designs to coordinate themselves and build epic innovative applications. Token holders and validators take control through governance proposals and votes, creating an involved and diverse community.<br /><br />IBC channels enable token flow between chains and pave the way for the first proto-interchain apps. By the end of the Myrddin era, we\'ll see impactful businesses and community-powered applications enabled by OKP4. The powerful OKP4 SDK and Dataverse Gateways releases take us into the Duir era...","tag":"Q3 2023","imageDesktop":"index_roadmap_3.webp","imageMobile":"index_roadmap_3_mobile.webp"},{"title":"Duir","subtitle":"Unlike the Myrddin era, which starts at a single point in time when the mainnet launched, the transition to Duir happen gradually.","description":"While Myrddin is focused on building the infrastructure, the Duir era is focused on adoption. With each release relating to the SDK, the Dataverse Gateways or the governance templates, new opportunities emerge for builders, data & service providers and users. The Duir era is the climax of adoption due to the easiness and straightforwardness of building and onboarding communities.<br /><br />The Dataverse reaches a critical network effect: the many datasets and services available provide unprecedented opportunities for builders and becomes a significant go-to-market fo data & services providers. An ecosystem of Data Space governance tokens emerges, providing healthy competition between them and steering open innovation to the next level. Real-life use cases and value flows into the network and the OKP4 public good continues to grow.","tag":"Q2 2024","imageDesktop":"index_roadmap_4.webp","imageMobile":"index_roadmap_4_mobile.webp"},{"title":"Lugh","subtitle":"The Lugh era is the expression of the unstoppable nature of OKP4s design.","description":"Inter-blockchain communication is now the norm and OKP4 is interoperable with every meaningful network to access any kind of datasets and services (decentralized storage, decentralized computation...), onboard communities from other chains easily, and seamless interchain applications.<br /><br /> Due to OKP4 first-mover advantage and significant network effect reached, OKP4 becomes the default coordination layer for most applications based on distributed resources.<br /><br />Thousands of projects and teams across the web2 and web3 worlds are building on OKP4: it has reached mass adoption.","tag":"Q1 2025","imageDesktop":"index_roadmap_5.webp","imageMobile":"index_roadmap_5_mobile.webp"}]}');var L=e=>{let{files:t}=e;const a=(0,n.useRef)(null),r=e=>{let t=e.target.parentNode.parentNode;t.classList.contains("show-more")&&t.scroll(0,0),t.classList.toggle("show-more")};return(0,n.useEffect)((()=>{if(l.It("sm")){a.current.querySelectorAll(".homepage__roadmap__item__readMore").forEach((e=>{e.addEventListener("click",r)}))}else a.current.querySelectorAll(".homepage__roadmap__item__text").forEach((e=>{let t=e.getBoundingClientRect().height;t-=40,e.querySelector(".title").getBoundingClientRect().height+e.querySelector(".excerpt").getBoundingClientRect().height+e.querySelector(".description").getBoundingClientRect().height>t&&(e.classList.add("togglable"),e.addEventListener("click",r))}))})),n.createElement("section",{className:"universe strate"},n.createElement("div",{className:"strate__inner"},n.createElement("div",{className:"wrapper"},n.createElement(x,{classContainer:"universe__wrapper"},n.createElement(i.Z,null),n.createElement("div",{className:"universe__sticky"},n.createElement("h2",{className:"universe__title"},S.TN),n.createElement("div",{className:"universe__illus"},S.ev.reverse().map(((e,a)=>{let r="";return 0===a&&(r=" is-active"),n.createElement("div",{className:"universe__illus__item"+r,"data-infinite":"1",key:a,"data-item":e.identifiant,"data-key":a},n.createElement(s.G,{className:"imgWrapper",image:m.h(e.image,t),alt:e.description}))})))),n.createElement("div",{className:"universe__items"},S.ev.map(((e,t)=>{let a="";return 0===t&&(a=" is-active"),n.createElement("div",{className:"universe__item"+a,"data-item":e.identifiant,"data-key":t,key:t},n.createElement("div",{className:"tag"},n.createElement("span",null,e.tag)),n.createElement("p",{className:"title"},e.title),n.createElement("p",{className:"text"},e.description),e.link&&n.createElement(h.Link,{to:e.link,className:"cta__button"},n.createElement("span",{className:"cta__button__text"},e.button)))})))),n.createElement("div",{className:"homepage__roadmap"},n.createElement("div",{className:"homepage__roadmap__intro"},n.createElement("h2",{className:"homepage__roadmap__title"},T.TN),n.createElement("p",{className:"title"},T.Oc),n.createElement("p",{className:"text",dangerouslySetInnerHTML:{__html:T.WL}}),n.createElement(h.Link,{to:T.p4,className:"cta__button"},n.createElement("span",{className:"cta__button__text"},T.LI))),n.createElement("div",{className:"homepage__roadmap__items",ref:a},T.ev.map(((e,a)=>{let r=20+30*a;const i=T.ev.length-1,c=a===i;let l=.2-.2/i*a;return n.createElement(k,{classContainer:"homepage__roadmap__item",scaleTopSticky:r,scaleMax:l,key:a,isLastItem:c},n.createElement("div",{className:"homepage__roadmap__item__layer"}),n.createElement("div",{className:"homepage__roadmap__item__container"},n.createElement("span",{className:"homepage__roadmap__item__text--mobile"},"— ",e.title),n.createElement("div",{className:"homepage__roadmap__item__text"},n.createElement("span",{className:"title"},"— ",e.title),n.createElement("p",{className:"excerpt"},e.subtitle),n.createElement("p",{className:"description"},n.createElement("span",{className:"text__content",dangerouslySetInnerHTML:{__html:e.description}}),n.createElement("span",{className:"homepage__roadmap__item__readMore"},n.createElement("span",{className:"readMore--closed"},"Read more"),n.createElement("span",{className:"readMore--opened"},"Read less")))),n.createElement("div",{className:"homepage__roadmap__item__illus"},n.createElement("div",{className:"homepage__roadmap__item__date"},n.createElement("span",null,e.tag)),n.createElement(s.G,{className:"imgWrapper imgWrapper--desktop",image:m.h(e.imageDesktop,t),alt:e.subtitle}),n.createElement(s.G,{className:"imgWrapper imgWrapper--mobile",image:m.h(e.imageMobile,t),alt:e.subtitle}))))})))))))},C=a(8454),O=a(8183);function I(e){let{data:t}=e;return n.createElement(r.Z,{location:"homepage",files:t},n.createElement(d,{files:t}),n.createElement(b,{files:t}),n.createElement(y,{files:t}),n.createElement(L,{files:t}))}const W=()=>n.createElement(C.Z,{content:O.uY})},6598:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M75 37.5C75 47.4456 71.0491 56.9839 64.0165 64.0165C56.9839 71.0491 47.4456 75 37.5 75C27.5544 75 18.0161 71.0491 10.9835 64.0165C3.95088 56.9839 0 47.4456 0 37.5C0 27.5544 3.95088 18.0161 10.9835 10.9835C18.0161 3.95088 27.5544 0 37.5 0C47.4456 0 56.9839 3.95088 64.0165 10.9835C71.0491 18.0161 75 27.5544 75 37.5ZM31.8281 23.8734C31.4777 23.6239 31.0653 23.4757 30.6362 23.4449C30.2071 23.4142 29.7778 23.5022 29.3953 23.6992C29.0129 23.8962 28.6921 24.1947 28.468 24.562C28.2439 24.9292 28.1253 25.351 28.125 25.7812V49.2188C28.1253 49.649 28.2439 50.0708 28.468 50.438C28.6921 50.8053 29.0129 51.1038 29.3953 51.3008C29.7778 51.4978 30.2071 51.5858 30.6362 51.5551C31.0653 51.5243 31.4777 51.3761 31.8281 51.1266L48.2344 39.4078C48.5382 39.191 48.7858 38.9048 48.9567 38.5729C49.1276 38.2411 49.2167 37.8732 49.2167 37.5C49.2167 37.1268 49.1276 36.7589 48.9567 36.4271C48.7858 36.0952 48.5382 35.809 48.2344 35.5922L31.8281 23.8734Z",fill:"white"}))}r.defaultProps={width:"75",height:"75",viewBox:"0 0 75 75",fill:"none"},e.exports=r,r.default=r},2281:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/3ee8e61ca58cb3ec979bb92729e15f1a/67ab3/calque-4.webp","srcSet":"/static/3ee8e61ca58cb3ec979bb92729e15f1a/900ec/calque-4.webp 318w,\\n/static/3ee8e61ca58cb3ec979bb92729e15f1a/740f5/calque-4.webp 635w,\\n/static/3ee8e61ca58cb3ec979bb92729e15f1a/67ab3/calque-4.webp 1270w","sizes":"(min-width: 1270px) 1270px, 100vw"},"sources":[]},"width":1270,"height":894}')},1905:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5a8e1a36888ac7921de0c68b8b9add0f/67ab3/calque-1.webp","srcSet":"/static/5a8e1a36888ac7921de0c68b8b9add0f/900ec/calque-1.webp 318w,\\n/static/5a8e1a36888ac7921de0c68b8b9add0f/740f5/calque-1.webp 635w,\\n/static/5a8e1a36888ac7921de0c68b8b9add0f/67ab3/calque-1.webp 1270w","sizes":"(min-width: 1270px) 1270px, 100vw"},"sources":[]},"width":1270,"height":894}')},5997:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/7956fb34c8925485fc491ad19760c82e/849f0/index_landing.webp","srcSet":"/static/7956fb34c8925485fc491ad19760c82e/96283/index_landing.webp 636w,\\n/static/7956fb34c8925485fc491ad19760c82e/2fb62/index_landing.webp 1272w,\\n/static/7956fb34c8925485fc491ad19760c82e/849f0/index_landing.webp 2544w","sizes":"(min-width: 2544px) 2544px, 100vw"},"sources":[]},"width":2544,"height":1792}')},8144:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8979e52913c43b6c9ac14857036400ad/67ab3/calque-2.webp","srcSet":"/static/8979e52913c43b6c9ac14857036400ad/900ec/calque-2.webp 318w,\\n/static/8979e52913c43b6c9ac14857036400ad/740f5/calque-2.webp 635w,\\n/static/8979e52913c43b6c9ac14857036400ad/67ab3/calque-2.webp 1270w","sizes":"(min-width: 1270px) 1270px, 100vw"},"sources":[]},"width":1270,"height":894}')},1323:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/87d247909cb1df2ca33840d876163914/67ab3/calque-3.webp","srcSet":"/static/87d247909cb1df2ca33840d876163914/900ec/calque-3.webp 318w,\\n/static/87d247909cb1df2ca33840d876163914/740f5/calque-3.webp 635w,\\n/static/87d247909cb1df2ca33840d876163914/67ab3/calque-3.webp 1270w","sizes":"(min-width: 1270px) 1270px, 100vw"},"sources":[]},"width":1270,"height":894}')}}]);