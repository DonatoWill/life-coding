(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Uzau:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));a("Z2Ku");var n=a("q1tI"),s=a.n(n),l=a("Wbzz"),o=a("9eSz"),c=a.n(o),r=a("wd/R"),i=a.n(r);var m=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=[];return s.a.createElement("div",{className:"blogs-section section",id:"Blogs"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"section-head"},s.a.createElement("h2",null,"Posts")),s.a.createElement("ul",{className:"blogs-list "+(e.edges.length<5?"few-blogs":"")},e.edges.map((function(e,a){return t.includes(e.node.title)?null:(t.push(e.node.title),s.a.createElement("li",{key:a,className:"item"},s.a.createElement("div",{className:"inner"},s.a.createElement(l.Link,{className:"link",to:e.node.slug}),e.node.featureImage?s.a.createElement(c.a,{fluid:e.node.featureImage.fluid,objectFit:"cover",objectPosition:"50% 50%"}):s.a.createElement("div",{className:"no-image"}),s.a.createElement("div",{className:"details"},s.a.createElement("h3",{className:"title"},e.node.title),s.a.createElement("span",{className:"date"},s.a.createElement("i",{className:"fas fa-calendar-alt"})," ",i()(e.node.updatedAt).format("LL"))))))}))),s.a.createElement("div",{className:"see-more"},s.a.createElement(l.Link,{to:"/blogs"},s.a.createElement("span",null,"Mais Posts")))))},n}(n.Component)}}]);
//# sourceMappingURL=14-6b917b33f360f66f0b79.js.map