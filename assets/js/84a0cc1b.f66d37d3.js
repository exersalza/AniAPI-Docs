"use strict";(self.webpackChunkaniapi_docs=self.webpackChunkaniapi_docs||[]).push([[532],{3597:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(5861),a=n(7757),i=n.n(a),s=n(7294),c=n(3575);function o(){var e;try{(e=JSON.parse(window.localStorage.getItem("AUTH_USER")))||window.location.replace("/login")}catch(a){}(0,s.useEffect)((0,r.Z)(i().mark((function e(){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=location.hash.substring(1).split("=")[1].split("&")[0],e.next=3,t(r);case 3:return a=e.sent,e.next=6,n(r,a);case 6:case"end":return e.stop()}}),e)}))),[]);var t=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://graphql.anilist.co",{method:"POST",headers:{Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:"\n          query {\n            Viewer {\n              id\n              name\n            }\n          }\n          "})});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.data.Viewer.id);case 10:e.prev=10,e.t0=e.catch(0),window.location.replace("/profile#trackers");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),n=function(){var t=(0,r.Z)(i().mark((function t(n,r){var a,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.aniapi.com/v1/user",{method:"POST",headers:{Authorization:"Bearer "+e.access_token,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e.id,anilist_id:r,anilist_token:n})});case 2:return a=t.sent,t.next=5,a.json();case 5:200===(s=t.sent).status_code&&(e.has_anilist=s.data.has_anilist,window.localStorage.setItem("AUTH_USER",JSON.stringify(e))),window.location.replace("/profile#trackers");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return s.createElement(c.Z,{title:"AniList"},s.createElement("main",null,s.createElement("div",{className:"container margin-vert--lg"},s.createElement("h1",null,"Please wait..."))))}}}]);