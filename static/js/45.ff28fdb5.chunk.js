"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[45],{6577:function(e,t,n){n.d(t,{Jh:function(){return h},LP:function(){return u},OX:function(){return s},_r:function(){return p},oW:function(){return f}});var r=n(5562),i=n.n(r),o=n(2007),c=n.n(o),a="948166b3059358327aeb7a534b796286";function u(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(a)).then((function(e){return e.ok?e.json():i().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(e){return e.results.map((function(e){return{title:e.original_title,id:e.id,img:e.poster_path}}))}))}function s(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a,"&language=UK")).then((function(e){return e.ok?e.json():i().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(e){return{title:e.title,rating:e.popularity,releaseDate:e.release_date,genres:e.genres,overview:e.overview,posterPath:e.poster_path}}))}function h(e){return console.log(e,"1234"),fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a,"&language=UK")).then((function(e){return e.ok?e.json():i().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(e){return e.cast.map((function(e){return{character:e.character,name:e.original_name,photo:e.profile_path,id:e.id}}))}))}function p(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=UK&page=1")).then((function(e){return e.ok?e.json():i().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(e){return{results:e.results}}))}function f(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=UK&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():i().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(e){return e.results.map((function(e){return{id:e.id,title:e.original_title}}))}))}s.propTypes={id:c().number},h.propTypes={id:c().number},p.propTypes={id:c().number},f.propTypes={search:c().string}},7045:function(e,t,n){n.r(t),n.d(t,{MoreInfoFilms:function(){return s}});var r=n(885),i=n(6577),o=n(2791),c=n(6871),a=n(501),u=n(184);function s(){var e=(0,o.useState)(null),t=(0,r.Z)(e,2),n=t[0],s=t[1],h=(0,c.UO)().movieId;(0,o.useEffect)((function(){""===h&&console.log("123123231"),(0,i.OX)(h).then(s)}),[h]);return(0,u.jsxs)(u.Fragment,{children:[n&&(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(n.posterPath),alt:"\u0444\u043e\u0442\u043e \u0444\u0438\u043b\u044c\u043c\u0430"}),(0,u.jsxs)("h1",{children:[n.title,"(",n.releaseDate,")"]}),(0,u.jsxs)("p",{children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",n.rating]}),(0,u.jsx)("h2",{children:"\u041e\u043f\u0438\u0441:"}),(0,u.jsx)("p",{children:n.overview}),(0,u.jsx)("h2",{children:"\u0416\u0430\u043d\u0440\u0438:"}),(0,u.jsx)("p",{children:n.genres.map((function(e){return e.name})).join()})]}),(0,u.jsx)("hr",{}),(0,u.jsx)(a.OL,{to:"cast",children:"\u0410\u043a\u0442\u0435\u0440\u044b"}),(0,u.jsx)(a.OL,{to:"reviews",children:"\u041e\u0442\u0437\u044b\u0432\u044b"}),(0,u.jsx)("hr",{}),(0,u.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=45.ff28fdb5.chunk.js.map