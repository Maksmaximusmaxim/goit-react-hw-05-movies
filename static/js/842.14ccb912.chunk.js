"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{6577:function(t,e,n){n.d(e,{Jh:function(){return s},LP:function(){return c},OX:function(){return f},_r:function(){return p},oW:function(){return h}});var r=n(5562),i=n.n(r),o=n(2007),u=n.n(o),a="948166b3059358327aeb7a534b796286";function c(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(a)).then((function(t){return t.ok?t.json():i().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(t){return t.results.map((function(t){return{title:t.original_title,id:t.id,img:t.poster_path}}))}))}function f(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(a,"&language=UK")).then((function(t){return t.ok?t.json():i().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(t){return{title:t.title,rating:t.popularity,releaseDate:t.release_date,genres:t.genres,overview:t.overview,posterPath:t.poster_path}}))}function s(t){return console.log(t,"1234"),fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(a,"&language=UK")).then((function(t){return t.ok?t.json():i().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(t){return t.cast.map((function(t){return{character:t.character,name:t.original_name,photo:t.profile_path,id:t.id}}))}))}function p(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(a,"&language=UK&page=1")).then((function(t){return t.ok?t.json():i().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(t){return{results:t.results}}))}function h(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=UK&query=").concat(t,"&page=1&include_adult=false")).then((function(t){return t.ok?t.json():i().Notify.info("\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})).then((function(t){return t.results.map((function(t){return{id:t.id,title:t.original_title}}))}))}f.propTypes={id:u().number},s.propTypes={id:u().number},p.propTypes={id:u().number},h.propTypes={search:u().string}},5842:function(t,e,n){n.r(e),n.d(e,{Home:function(){return p}});var r=n(885),i=n(6577),o=n(2791),u=n(501),a=n(6871),c="home_Link__YADt+",f=n(184);function s(t){var e=t.title,n=t.id,r=(0,a.TH)();return(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{className:c,to:"films/".concat(n),state:{from:r.pathname},children:e})})}function p(){var t=(0,o.useState)([]),e=(0,r.Z)(t,2),n=e[0],u=e[1];return(0,o.useEffect)((function(){(0,i.LP)().then(u)}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{children:n&&n.map((function(t){return(0,f.jsx)(s,{id:t.id,img:t.img,title:t.title},t.id)}))})})}}}]);
//# sourceMappingURL=842.14ccb912.chunk.js.map