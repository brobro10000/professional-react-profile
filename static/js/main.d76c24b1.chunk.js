(this["webpackJsonpreact-profile"]=this["webpackJsonpreact-profile"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),c=n.n(i),o=(n(48),n(22)),s=n(6),l=(n(49),n(50),n(68)),d=n(61),j=n(62),b=n(65),h=n.p+"static/media/me.67a6e289.jpg",u=n(1);var m=function(e){return Object(u.jsx)(l.a,{fixed:"top",id:"headerNav",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(u.jsxs)(d.a,{fluid:!0,children:[Object(u.jsx)(j.a,{id:"portrait",alt:"Dev-Image",src:h,rounded:!0}),Object(u.jsx)(l.a.Brand,{className:"myName",children:"Hamzah Ullah"}),Object(u.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(l.a.Collapse,{align:"end",id:"responsive-navbar-nav",children:Object(u.jsx)(b.a,{className:"me-auto",children:["About","Portfolio","Contact","Resume"].map((function(t){return Object(u.jsx)(b.a.Link,{href:"#_"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t},t)}))})})]})})},p=n(63),f=n(39),g=n(70),O=n(67),x=n(69);var v=function(e){var t=e.portfolioData,n=e.images,r=Object(a.useState)([t,0]),i=Object(s.a)(r,2),c=i[0],o=i[1];function l(e){for(var n=e.target.firstChild.data,a=0;a<t.length;a++)if(n===t[a].name){var r=t[a];t[a]=t[0],t[0]=r,o([t,a]);break}}return n.forEach((function(e){var n=e.split("/")[3].split(".")[0];t.forEach((function(t){t.name===n&&(t.img=e)}))})),Object(a.useEffect)((function(){window.scrollTo(0,0)}),[c]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(d.a,{id:"portfolioContainer",children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(f.a,{className:"tocContainer",xs:12,s:12,m:4,lg:4,children:Object(u.jsx)(g.a,{style:{position:"fixed"},variant:"flush",children:Object(u.jsx)(O.a,{defaultActiveKey:"4",children:Object(u.jsxs)(O.a.Item,{eventKey:"4",children:[Object(u.jsx)(O.a.Header,{children:"Table of Contents"}),Object(u.jsx)(O.a.Body,{children:t.length>0&&t.map((function(e){return Object(u.jsx)(g.a.Item,{action:!0,onClick:l,children:e.name},e.name)}))})]})})})}),Object(u.jsx)(f.a,{xs:12,s:12,m:8,lg:8,className:"col-container",children:t.length>0&&t.map((function(e){return Object(u.jsxs)(x.a,{id:e.name,className:"project-card",style:{width:"80%"},children:[Object(u.jsx)(x.a.Header,{children:Object(u.jsx)(x.a.Title,{children:e.name})}),Object(u.jsx)(x.a.Body,{children:Object(u.jsx)(x.a.Img,{className:"image",variant:"middle",src:e.img})}),Object(u.jsx)(x.a.Footer,{children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(f.a,{children:Object(u.jsx)(x.a.Link,{href:e.repo,target:"_blank",children:"Repository"})}),Object(u.jsx)(f.a,{children:Object(u.jsx)(x.a.Link,{href:e.deployment,target:"_blank",children:"Website"})})]})})]},"#"+e.name)}))})]})})})},w=n(23),y=n(66),k=n(64);function I(e){return e.charAt(0).toUpperCase()+e.slice(1)}var C=function(){var e=Object(w.b)("xyylldzy"),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),c=Object(s.a)(i,2),o=c[0],l=c[1];if(n.succeeded)return Object(u.jsx)("p",{id:"returnMessage",children:"We Received your Message!"});function j(e){if(""===e.target.value)return l(I(e.target.name)+" is required");if("email"===e.target.name){var t=(n=e.target.value,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase()));l(t?"":"Email is Invalid")}else if(""===e.target.value)return l(I(e.target.name)+" is required");var n}return Object(u.jsx)(d.a,{id:"formContainer",children:Object(u.jsx)(y.a,{onSubmit:r,children:Object(u.jsxs)(y.a.Group,{children:[Object(u.jsx)(y.a.Label,{className:"form-labels",htmlFor:"name",children:"Full Name"}),Object(u.jsx)(y.a.Control,{placeholder:o&&"Name"===o.split(" ")[0]?o:"",id:"name",type:"name",name:"name",onBlur:j}),Object(u.jsx)(w.a,{prefix:"name",field:"name",errors:n.errors}),Object(u.jsx)(y.a.Label,{className:"form-labels",htmlFor:"email",children:"Email Address"}),Object(u.jsx)(y.a.Control,{placeholder:o&&"Email"===o.split(" ")[0]?o:"",id:"email",type:"email",name:"email",onBlur:j}),Object(u.jsx)(w.a,{prefix:"Email",field:"email",errors:n.errors}),Object(u.jsx)(y.a.Label,{className:"form-labels",htmlFor:"message",children:"Message"}),Object(u.jsx)(y.a.Control,{as:"textarea",placeholder:o&&"Message"===o.split(" ")[0]?o:"",id:"message",name:"message",onBlur:j}),Object(u.jsx)(w.a,{prefix:"Message",field:"message",errors:n.errors}),Object(u.jsx)(d.a,{className:"buttonContainer",children:Object(u.jsx)(k.a,{className:"submitButton",type:"submit",disabled:n.submitting,children:"Submit"})})]})})})},L=n.p+"static/media/m2.f39ee154.jpg";var S=function(e){return Object(u.jsx)(d.a,{id:"aboutContainer",children:Object(u.jsx)(x.a,{id:"aboutCard",children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(f.a,{md:3,children:Object(u.jsx)(j.a,{id:"aboutImage",alt:"Amazingly Handsome Man",src:L,roundedCircle:!0})}),Object(u.jsxs)(f.a,{id:"aboutText",md:9,children:[Object(u.jsx)(x.a.Title,{id:"aboutTitle",children:"My name is Hamzah Ullah, and I love to code!"}),Object(u.jsxs)(x.a.Body,{children:[Object(u.jsx)("p",{children:" I am currently pursuing a Bachelor's Degree in Computer Engineering from the University of Central Florida with an emphasis on machine learning and robotics. I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease."}),Object(u.jsx)("p",{id:"mission",children:' "Life is about the constant pursuit of knowledge, if you stop learning, you stop growing."'}),Object(u.jsx)("p",{children:"  Currently, I am looking for new career opportunities my current job position cannot provide."})]})]})]})})})};var N=function(e){var t=e.resume,n=t;return t+="#zoom=65",Object(u.jsx)(d.a,{id:"resume-container",children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(f.a,{xs:12,s:12,md:4,children:Object(u.jsx)(O.a,{defaultActiveKey:"3",children:Object(u.jsxs)(O.a.Item,{eventKey:"3",children:[Object(u.jsx)(O.a.Header,{children:"Technical Skills"}),Object(u.jsx)(O.a.Body,{children:Object(u.jsxs)(O.a,{flush:!0,children:[Object(u.jsxs)(O.a.Item,{eventKey:"0",children:[Object(u.jsx)(O.a.Header,{children:"Web Development"}),Object(u.jsx)(O.a.Body,{children:Object(u.jsxs)(g.a,{variant:"flush",children:[Object(u.jsx)(g.a.Item,{children:"HTML5 and the Document Object Model"}),Object(u.jsx)(g.a.Item,{children:"CSS and the Box Model"}),Object(u.jsx)(g.a.Item,{children:"JQuery"}),Object(u.jsx)(g.a.Item,{children:"Materialize"}),Object(u.jsx)(g.a.Item,{children:"Bootstrap/React-Bootstrap"}),Object(u.jsx)(g.a.Item,{children:"SQL - mySQL"}),Object(u.jsx)(g.a.Item,{children:"MongoDB "}),Object(u.jsx)(g.a.Item,{children:"Express"}),Object(u.jsx)(g.a.Item,{children:"React"}),Object(u.jsx)(g.a.Item,{children:"NodeJS "}),Object(u.jsx)(g.a.Item,{children:"Visual Studio Code "}),Object(u.jsx)(g.a.Item,{children:"Partials and Layouts with Handlebars "}),Object(u.jsx)(g.a.Item,{children:"API Development and Integration"}),Object(u.jsx)(g.a.Item,{children:"Database Structure and Routing"}),Object(u.jsx)(g.a.Item,{children:"MVC - Model View Controller Model"}),Object(u.jsx)(g.a.Item,{children:"Progressive Web Applications"}),Object(u.jsx)(g.a.Item,{children:"Site Optimization - Compression, Service Workers and IndexedDb "}),Object(u.jsx)(g.a.Item,{children:"Version Control using Git CLI and Github "})]})})]}),Object(u.jsxs)(O.a.Item,{eventKey:"1",children:[Object(u.jsx)(O.a.Header,{children:"Languages"}),Object(u.jsx)(O.a.Body,{children:Object(u.jsxs)(g.a,{variant:"flush",children:[Object(u.jsx)(g.a.Item,{children:"Javascript - Full Stack Web Development"}),Object(u.jsx)(g.a.Item,{children:"Python - Machine Learning, Computer Vision, Mathematical and Data Analysis"}),Object(u.jsx)(g.a.Item,{children:"C, Java - Algorithms"}),Object(u.jsx)(g.a.Item,{children:"C# - Game Development in Unity"}),Object(u.jsx)(g.a.Item,{children:"Verilog and Assembly with TI-MSP Board Family"})]})})]})]})})]})})}),Object(u.jsxs)(f.a,{xs:12,s:12,md:8,lg:8,children:[Object(u.jsx)("a",{id:"resume-download",href:n,download:"UllahHamzah",target:"_blank",rel:"noreferrer",children:"Download Resume"}),Object(u.jsx)("iframe",{title:"resume",id:"resume-iframe",src:t})]})]})})},B=n(31);var M=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=(n[0],n[1]);return Object(a.useEffect)((function(){return r(Object(u.jsx)("svg",{alt:"DataCamp Logo",className:"footerImg",height:"34",width:"25",children:Object(u.jsx)("path",{d:"M14.001 25.028v-7.224l11.393-6.498-2.77-1.588-8.623 4.918V7.391c0-.491-.265-.95-.69-1.194L2.938.245a1.974 1.974 0 00-2.006.06A1.98 1.98 0 000 1.992v20.375c0 .69.35 1.321.934 1.687a1.973 1.973 0 002.002.061l8.317-4.743v6.457c0 .494.266.952.695 1.196l10.658 6.067 2.771-1.589-11.376-6.475zm-2.748-16.84v8.016l-8.504 4.85V3.31l8.504 4.88z",fill:"#03EF62",fillRule:"evenodd"})}))}),[]),Object(u.jsx)(l.a,{id:"footerNav",fixed:"bottom",expand:"lg",bg:"dark",variant:"dark",children:Object(u.jsxs)(d.a,{className:"footer-container",children:[Object(u.jsx)(b.a.Link,{href:"https://github.com/brobro10000",title:"Github Link",alt:"Github Link",rel:"noopener",target:"_blank",children:Object(u.jsx)(B.a,{alt:"Github Logo",className:"footerImg",fill:"#6e5494",size:48})}),Object(u.jsx)(b.a.Link,{href:"https://www.linkedin.com/in/hamzahullah/",title:"LinkedIn Link",alt:"LinkedIn Link",rel:"noopener",target:"_blank",children:Object(u.jsx)(B.b,{alt:"LinkedIn Logo",className:"footerImg",fill:"#0077b5",size:48})}),Object(u.jsx)(b.a.Link,{href:"https://www.troubleshoottinker.com",title:"Youtube Link",rel:"noopener",target:"_blank",alt:"Youtube Link",children:Object(u.jsx)(B.c,{alt:"Youtube Logo",className:"footerImg",fill:"#ff0000",size:48})})]})})},A=n.p+"static/media/budget-analysis-and-visualizer.872d3480.png",z=n.p+"static/media/Crypto-Tycoon.f7a824d8.png",D=n.p+"static/media/potluck-chefs.03fb9fe9.png",E=n.p+"static/media/professional-react-profile.446644ae.png",F=n.p+"static/media/repository-of-thought.05a60190.png",P=n.p+"static/media/weather-dashboard.b03be8f4.png",T=n.p+"static/media/UllahHamzahResume.767805bf.pdf";var W=function(){var e,t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)("About"),l=Object(s.a)(c,2),d=l[0],j=l[1],b=[A,z,D,E,F,P],h=indexedDB.open("apiCalls",1);function p(t){e.transaction(["api"],"readwrite").objectStore("api").add(t)}return h.onupgradeneeded=function(e){e.target.result.createObjectStore("api",{autoIncrement:!0})},h.onerror=function(e){console.log(e.target.errorCode)},Object(a.useEffect)((function(){h.onsuccess=function(t){var n=(e=t.target.result).transaction(["api"],"readwrite").objectStore("api").getAll();n.onsuccess=function(){if(7!==n.result.length)return fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=brobro10000").then((function(e){return e.text()})).then((function(e){var t=[];e.split('"repo":"').forEach((function(e){t.push(e.split('",')[0])})),delete t[0],t.filter((function(){return!0})).forEach((function(e){fetch("https://api.github.com/repos/brobro10000/".concat(e,"/deployments")).then((function(e){return e.json()})).then((function(t){return t.length<1&&"potluck-chefs"===e?(p({name:e,repo:"https://www.github.com/brobro10000/".concat(e),deployment:"https://potluck-chef.herokuapp.com/"}),i((function(t){return[].concat(Object(o.a)(t),[{name:e,repo:"https://www.github.com/brobro10000/".concat(e),deployment:"https://potluck-chef.herokuapp.com/"}])}))):"github-pages"===t[0].environment?"brobro10000.github.io"===e?(p({name:e,repo:"https://www.github.com/brobro10000/".concat(e),deployment:"http://brobro10000.github.io"}),i((function(t){return[].concat(Object(o.a)(t),[{name:e,repo:"https://www.github.com/brobro10000/".concat(e),deployment:"http://brobro10000.github.io"}])}))):(p({name:e,repo:"https://www.github.com/brobro10000/".concat(e),deployment:"http://brobro10000.github.io/".concat(e)}),i((function(t){return[].concat(Object(o.a)(t),[{name:e,repo:"https://www.github.com/brobro10000/".concat(e),deployment:"http://brobro10000.github.io/".concat(e)}])}))):"Heroku"===t[0].description?(p({name:e,repo:"https://www.github.com/brobro10000/".concat(e),deployment:t[0].payload.web_url}),i((function(n){return[].concat(Object(o.a)(n),[{name:e,repo:"https://www.github.com/brobro10000/".concat(e),deployment:t[0].payload.web_url}])}))):void 0}))}))}))}}}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{children:Object(u.jsx)(m,{currentPage:d,handlePageChange:j})}),Object(u.jsx)("main",{children:function(){switch(d){case"Contact":return Object(u.jsx)(C,{});case"Portfolio":return r.length>0?Object(u.jsx)(v,{portfolioData:r,images:b}):Object(u.jsx)(u.Fragment,{});case"Resume":return Object(u.jsx)(N,{resume:T});default:return Object(u.jsx)(S,{})}}()}),Object(u.jsx)("footer",{children:Object(u.jsx)(M,{})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(W,{})}),document.getElementById("root")),H(),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):U(t,e)}))}}()}},[[59,1,2]]]);
//# sourceMappingURL=main.d76c24b1.chunk.js.map