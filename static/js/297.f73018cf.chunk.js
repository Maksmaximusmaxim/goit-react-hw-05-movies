"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[297],{6577:function(e,t,n){n.d(t,{Jh:function(){return l},LP:function(){return s},OX:function(){return u},_r:function(){return h},oW:function(){return f}});var r=n(5562),o=n.n(r),i=n(2007),a=n.n(i),c="948166b3059358327aeb7a534b796286";function s(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(c)).then((function(e){return e.ok?e.json():o().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(e){return e.results.map((function(e){return{title:e.original_title,id:e.id,img:e.poster_path}}))}))}function u(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=UK")).then((function(e){return e.ok?e.json():o().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(e){return{title:e.title,rating:e.popularity,releaseDate:e.release_date,genres:e.genres,overview:e.overview,posterPath:e.poster_path}}))}function l(e){return console.log(e,"1234"),fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=UK")).then((function(e){return e.ok?e.json():o().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(e){return e.cast.map((function(e){return{character:e.character,name:e.original_name,photo:e.profile_path,id:e.id}}))}))}function h(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=UK&page=1")).then((function(e){return e.ok?e.json():o().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(e){return{results:e.results}}))}function f(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=UK&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():o().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(e){return e.results.map((function(e){return{id:e.id,title:e.original_title}}))}))}u.propTypes={id:a().number},l.propTypes={id:a().number},h.propTypes={id:a().number},f.propTypes={search:a().string}},297:function(e,t,n){n.r(t),n.d(t,{MoreInfoFilms:function(){return l}});var r=n(885),o=n(6577),i=n(2791),a=n(501),c=n(6871),s="moreinfo_link__m6eFO",u=n(184);function l(){var e,t,n,l,h=(0,i.useState)(null),f=(0,r.Z)(h,2),p=f[0],d=f[1],m=(0,c.UO)().movieId;console.log(m),(0,i.useEffect)((function(){""!==m&&(0,o.OX)(m).then(d)}),[m]);var g=(0,c.TH)();console.log(g);return(0,u.jsxs)(u.Fragment,{children:[p&&(0,u.jsxs)("div",{children:[(0,u.jsx)(a.OL,{className:s,to:null!==(e=null===(t=g.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:"\u043d\u0430\u0437\u0430\u0434"}),(0,u.jsx)("br",{}),(0,u.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(p.posterPath),alt:"\u0444\u043e\u0442\u043e \u0444\u0438\u043b\u044c\u043c\u0430"}),(0,u.jsxs)("h1",{children:[p.title,"(",p.releaseDate,")"]}),(0,u.jsxs)("p",{children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",p.rating]}),(0,u.jsx)("h2",{children:"\u041e\u043f\u0438\u0441:"}),(0,u.jsx)("p",{children:p.overview}),(0,u.jsx)("h2",{children:"\u0416\u0430\u043d\u0440\u0438:"}),(0,u.jsx)("p",{children:p.genres.map((function(e){return e.name})).join()})]}),(0,u.jsx)("hr",{}),(0,u.jsx)(a.OL,{state:{from:null===(n=g.state)||void 0===n?void 0:n.from},to:"cast",children:"\u0410\u043a\u0442\u0435\u0440\u044b"}),(0,u.jsx)(a.OL,{state:{from:null===(l=g.state)||void 0===l?void 0:l.from},to:"reviews",children:"\u041e\u0442\u0437\u044b\u0432\u044b"}),(0,u.jsx)("hr",{}),(0,u.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=297.f73018cf.chunk.js.map