"use strict";(self.webpackChunkaniapi_docs=self.webpackChunkaniapi_docs||[]).push([[206],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),i=n(9443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),s="tabItem_vU9c",l="tabItemActive_cw6a";var c=37,u=39;var d=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,d=e.values,m=e.groupId,p=e.className,f=r(),h=f.tabGroupChoices,v=f.setTabGroupChoices,g=(0,a.useState)(i),k=g[0],b=g[1],N=a.Children.toArray(e.children),w=[];if(null!=m){var A=h[m];null!=A&&A!==k&&d.some((function(e){return e.value===A}))&&b(A)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),a=d[n].value;b(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,i,r,o,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&r<=c&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case c:var i=w.indexOf(e.target)-1;n=w[i]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:E,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},1046:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(5064),s=n(8215),l=["components"],c={sidebar_position:1,slug:"/"},u="Introduction",d={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Welcome to AniAPI official documentation.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/AniAPI-Team/AniAPI-Docs/edit/main/docs/intro.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Authentication",permalink:"/docs/authentication"}},m=[{value:"Official client libraries",id:"official-client-libraries",children:[]}],p={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Welcome to AniAPI official documentation.\nOur API follows ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST"))," architecture, returns ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.json.org/json-en.html"},"JSON-Encoded"))," responses using standard HTTP response codes.\nEach response will be formatted like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n    "status_code": 200,         // The response HTTP status code\n    "message": "Anime found",   // An arbitrary message indicating response content\n    "data": {                   // The response JSON-Encoded content\n        "anilist_id": 1,\n        "mal_id": 1,\n        "format": 0,\n        "status:": 0,\n        "titles": {\n            "en": "Cowboy Bebop",\n            "jp": "\u30ab\u30a6\u30dc\u30fc\u30a4\u30d3\u30d0\u30c3\u30d7"\n        },\n        // ...\n        "id": 0\n    },\n    "version": "1"              // The response API version\n}\n')),(0,r.kt)("p",null,"We also support ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/OAuth"},"OAuth"))," as the main authentication system.\nYou can find more information in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"authentication#oauth"},"Authentication")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:'title="BASE URL"',title:'"BASE','URL"':!0},"https://api.aniapi.com\n")),(0,r.kt)("h2",{id:"official-client-libraries"},"Official client libraries"),(0,r.kt)(o.Z,{defaultValue:"dotnet",values:[{label:".NET",value:"dotnet"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"dotnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{className:"language-bash"},"dotnet add package AniAPI.NET")))))}f.isMDXComponent=!0}}]);