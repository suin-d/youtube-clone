(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__3L4mZ"}},29:function(e,t,a){},3:function(e,t,a){e.exports={container:"video_item_container__1eN4O",grid:"video_item_grid__11FFP",list:"video_item_list__2n89z",video:"video_item_video__2yCQO",thumbnail:"video_item_thumbnail__SmFrU",title:"video_item_title__1U68W",channel:"video_item_channel__2gdap",metadata:"video_item_metadata__fsbQF"}},4:function(e,t,a){e.exports={header:"search_header_header__1CYSB",logo:"search_header_logo__2JCaC",title:"search_header_title__3OOTh",input:"search_header_input__KJSs2",button:"search_header_button__2g8jI",buttonImg:"search_header_buttonImg__-j2DU"}},5:function(e,t,a){e.exports={app:"app_app__2U2Xn",content:"app_content__o3785",detail:"app_detail__3zeMK",list:"app_list__3GbkZ"}},50:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(20),s=a.n(c),r=(a(29),a(10)),o=a(5),l=a.n(o),u=a(4),d=a.n(u),p=a(0);function m(e){var t=e.onSearch,a=e.mostPopular,i=Object(n.useRef)(),c=function(){var e=i.current.value;t(e)};return Object(p.jsxs)("header",{className:d.a.header,children:[Object(p.jsxs)("div",{className:d.a.logo,onClick:function(){a()},children:[Object(p.jsx)("img",{className:d.a.img,src:"/images/logo.png",alt:"logo"}),Object(p.jsx)("h1",{className:d.a.title,children:"YouTube"})]}),Object(p.jsx)("input",{className:d.a.input,type:"search",placeholder:"Search",ref:i,onKeyPress:function(e){"Enter"===e.key&&c()}}),Object(p.jsx)("button",{className:d.a.button,type:"submit",onClick:function(e){c()},children:Object(p.jsx)("img",{className:d.a.buttonImg,src:"/images/search.png",alt:"search"})})]})}var h=Object(n.memo)(m),_=a(7),b=a.n(_);function j(e){var t=e.video,a=e.video.snippet;return Object(p.jsxs)("section",{className:b.a.detail,children:[Object(p.jsx)("iframe",{title:"youtube video player",className:b.a.video,type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(p.jsx)("h2",{children:a.title}),Object(p.jsx)("h3",{children:a.channelTitle}),Object(p.jsx)("pre",{className:b.a.description,children:a.description})]})}var v=a(3),O=a.n(v);function f(e){var t=e.video,a=e.onVideoClick,n="list"===e.display?O.a.list:O.a.grid;return Object(p.jsx)("li",{className:"".concat(O.a.container," ").concat(n),onClick:function(){return a(t)},children:Object(p.jsxs)("div",{className:O.a.video,children:[Object(p.jsx)("img",{className:O.a.thumbnail,src:t.snippet.thumbnails.medium.url,alt:"video thumbnail"}),Object(p.jsxs)("div",{className:O.a.metadata,children:[Object(p.jsx)("p",{className:O.a.title,children:t.snippet.title}),Object(p.jsx)("p",{className:O.a.channel,children:t.snippet.channelTitle})]})]})})}var x=Object(n.memo)(f),g=a(21),y=a.n(g);function N(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(p.jsx)("ul",{className:y.a.videos,children:t.map((function(e){return Object(p.jsx)(x,{video:e,onVideoClick:a,display:n},e.id)}))})}var k=function(e){var t=e.youtube,a=Object(n.useState)([]),i=Object(r.a)(a,2),c=i[0],s=i[1],o=Object(n.useState)(null),u=Object(r.a)(o,2),d=u[0],m=u[1],_=Object(n.useCallback)((function(e){m(null),t.search(e).then((function(e){return s(e)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(p.jsxs)("div",{className:l.a.app,children:[Object(p.jsx)(h,{onSearch:_,mostPopular:function(){t.mostPopular().then((function(e){return s(e)})),m(null)}}),Object(p.jsxs)("section",{className:l.a.content,children:[d&&Object(p.jsx)("div",{className:l.a.detail,children:Object(p.jsx)(j,{video:d})}),Object(p.jsx)("div",{className:l.a.list,children:Object(p.jsx)(N,{videos:c,onVideoClick:function(e){m(e)},display:d?"list":"grid"})})]})]})},C=a(11),S=a(6),w=a.n(S),P=a(9),I=a(22),V=a(23),F=function(){function e(t){Object(I.a)(this,e),this.youtube=t}return Object(V.a)(e,[{key:"mostPopular",value:function(){var e=Object(P.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:24}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(P.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:24,type:"video"}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),U=a(24),z=new F(a.n(U).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyAB1l3ZcXghiPmlDCm1zjkNmLkoSWsVSNc"}}));s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(k,{youtube:z})}),document.getElementById("root"))},7:function(e,t,a){e.exports={detail:"video_detail_detail__17qEQ",description:"video_detail_description__Va1XW"}}},[[50,1,2]]]);
//# sourceMappingURL=main.5d8cea3f.chunk.js.map