webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i="https://api.themoviedb.org/3/",r="api_key=6f875d4fba2e999f480afa6275a08f75",o={configuration:i+"configuration?"+r,imageAttribution:"https://www.themoviedb.org/static_cache/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png",moviesNowPlaying:function(t){return i+"movie/now_playing?"+r+"&region="+t},moviesUpcoming:function(t){return i+"movie/upcoming?"+r+"&region="+t},searchMulti:function(t){return i+"search/multi?"+r+"&query="+t}},a={name:"AppDisclaimer",data:function(){return{imageAttribution:o.imageAttribution}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border-secondary border-top py-3 small text-center"},[e("img",{staticClass:"mr-1",attrs:{alt:"Powered by TMDb",height:"32",src:this.imageAttribution}}),e("br"),this._v("This product uses the TMDb API but is not endorsed or certified by TMDb.")])},staticRenderFns:[]},u=n("VU/8")(a,c,!1,null,null,null).exports,l={name:"AppFooter",data:function(){return{year:(new Date).getFullYear()}}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"border-secondary border-top mb-3 pt-3 small text-center"},[this._v("© 2018-"+this._s(this.year)),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"ml-1 text-danger",attrs:{href:"http://saviomd.com/",rel:"noopener noreferrer",target:"_blank"}},[e("img",{staticClass:"mr-1",attrs:{alt:"saviomd.com",src:"https://saviomd.com/img/favicon.png",height:"15",width:"15"}}),this._v("Sávio Mendes")])}]},p=n("VU/8")(l,m,!1,null,null,null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"border-bottom border-secondary mb-3 py-2"},[e("router-link",{staticClass:"h5 text-white",attrs:{to:"/"}},[this._v("Movie Search")])],1)},staticRenderFns:[]},f=n("VU/8")({name:"AppHeader"},h,!1,null,null,null).exports,d=n("NYxO"),g=n("fZjL"),v=n.n(g),_=n("//Fk"),b=n.n(_),w={namespaced:!0,state:{images:{}},mutations:{updateImages:function(t,e){t.images=e.images}},actions:{fetchApiData:function(t){return new b.a(function(e,n){fetch(o.configuration).then(function(t){if(!t.ok)throw Error(t.statusText);return t.json()}).then(function(n){var s={images:n.images};t.commit("updateImages",s),e()}).catch(function(t){console.log(t.message),n(t)})})},getConfiguration:function(t){return new b.a(function(e,n){v()(t.state.images).length?e():t.dispatch("fetchApiData").then(function(){e()}).catch(function(t){console.log(t.message),n(t)})})}}},y=n("Dd8w"),R=n.n(y),C={namespaced:!0,state:{BR:[],US:[]},getters:{inRegion:function(t){return function(e){return t[e]}}},mutations:{populateRegion:function(t,e){t[e.region]=e.results}},actions:{fetchApiData:function(t,e){return new b.a(function(n,s){fetch(o.moviesNowPlaying(e)).then(function(t){if(!t.ok)throw Error(t.statusText);return t.json()}).then(function(s){var i={results:s.results.map(function(t){return R()({},t,{url:"https://www.themoviedb.org/movie/"+t.id+"/"})}),region:e};t.commit("populateRegion",i),n()}).catch(function(t){console.log(t.message),s(t)})})},getMovies:function(t,e){return new b.a(function(n,s){t.state[e].length?n():t.dispatch("fetchApiData",e).then(function(){n()}).catch(function(t){console.log(t.message),s(t)})})}}},x={namespaced:!0,state:{BR:[],US:[]},getters:{inRegion:function(t){return function(e){return t[e]}}},mutations:{populateRegion:function(t,e){t[e.region]=e.results}},actions:{fetchApiData:function(t,e){return new b.a(function(n,s){fetch(o.moviesUpcoming(e)).then(function(t){if(!t.ok)throw Error(t.statusText);return t.json()}).then(function(s){var i={results:s.results.map(function(t){return R()({},t,{url:"https://www.themoviedb.org/movie/"+t.id+"/"})}),region:e};t.commit("populateRegion",i),n()}).catch(function(t){console.log(t.message),s(t)})})},getMovies:function(t,e){return new b.a(function(n,s){t.state[e].length?n():t.dispatch("fetchApiData",e).then(function(){n()}).catch(function(t){console.log(t.message),s(t)})})}}},S=n("bOdI"),U=n.n(S),E={namespaced:!0,state:{list:{}},getters:{resultBySearchString:function(t){return function(e){return t.list[e]}}},mutations:{addToList:function(t,e){var n=R()({},t.list,U()({},e.query,e.results));t.list=n}},actions:{fetchApiData:function(t,e){return new b.a(function(n,s){fetch(o.searchMulti(e)).then(function(t){if(!t.ok)throw Error(t.statusText);return t.json()}).then(function(s){var i={results:s.results.map(function(t){return R()({},t,{image_path:"person"===t.media_type?t.profile_path:t.poster_path,name:"movie"===t.media_type?t.title:t.name,url:"https://www.themoviedb.org/"+t.media_type+"/"+t.id+"/"})}),query:e};t.commit("addToList",i),n()}).catch(function(t){console.log(t.message),s(t)})})},getResult:function(t,e){return new b.a(function(n,s){e in t.state.list?n():t.dispatch("fetchApiData",e).then(function(){n()}).catch(function(t){console.log(t.message),s(t)})})}}};s.a.use(d.a);var F=new d.a.Store({modules:{configuration:w,moviesNowPlaying:C,moviesUpcoming:x,searchResult:E}}),$={name:"App",components:{"app-disclaimer":u,"app-footer":p,"app-header":f},mounted:function(){F.dispatch("configuration/getConfiguration")}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e("div",{staticClass:"justify-content-center row"},[e("div",{staticClass:"col-12 col-md-10"},[e("app-header"),e("router-view"),e("app-disclaimer"),e("app-footer")],1)])])},staticRenderFns:[]},M=n("VU/8")($,A,!1,null,null,null).exports,P=n("/ocq"),k={name:"FormSearch",data:function(){return{searchString:this.$route.query.q||""}},methods:{submitSearch:function(t){t.preventDefault();var e=this.searchString.trim().toLowerCase();F.dispatch("searchResult/getResult",e).then(function(){ot.push({name:"PageSearchResult",query:{q:e}})})}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"mb-3",on:{submit:t.submitSearch}},[n("div",{staticClass:"input-group input-group-lg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],staticClass:"form-control",attrs:{required:"required",placeholder:"Movies, people and tv series...",type:"search"},domProps:{value:t.searchString},on:{input:function(e){e.target.composing||(t.searchString=e.target.value)}}}),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[this._v("Search")])])}]},D=n("VU/8")(k,V,!1,null,null,null).exports,q={name:"ResponsiveImage",props:["alt","path","type"],computed:{src:function(){var t=F.state.configuration.images,e="person"===this.type?t.profile_sizes[0]:t.poster_sizes[0];return""+t.secure_base_url+e+this.path},srcset:function(){var t=this,e=F.state.configuration.images,n=[];return("person"===this.type?e.profile_sizes:e.poster_sizes).forEach(function(s){if("original"!==s){var i=""+e.secure_base_url+s+t.path,r=s.split("w")[1]+"w";n.push(i+" "+r)}}),n.toString()}}},N={render:function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"bg-secondary w-100",attrs:{alt:this.alt,src:this.src,srcset:this.srcset}})},staticRenderFns:[]},T=n("VU/8")(q,N,!1,null,null,null).exports,B={name:"ListMovies",props:["movie"],components:{"responsive-image":T}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"text-white",attrs:{href:t.movie.url,target:"_blank"}},[n("responsive-image",{attrs:{alt:t.movie.title,path:t.movie.poster_path,type:"movie"}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[t._v(t._s(t.movie.release_date))]),n("div",{staticClass:"col-auto"},[t._v(t._s(t.movie.vote_average))])])],1)},staticRenderFns:[]},L={name:"ListMovies",props:["movies"],components:{"link-movie":n("VU/8")(B,j,!1,null,null,null).exports}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"flex-nowrap list-unstyled mb-0 overflow-x-scroll row"},this._l(this.movies,function(t){return e("li",{key:t.id,staticClass:"col-7 col-sm-5 col-md-4 col-lg-3",attrs:{value:t.id}},[e("link-movie",{attrs:{movie:t}})],1)}))},staticRenderFns:[]},I=n("VU/8")(L,H,!1,null,null,null).exports,z={name:"MoviesNowPlaying",components:{"list-movies":I},computed:{movies:function(){return F.getters["moviesNowPlaying/inRegion"]("BR")}},mounted:function(){F.dispatch("moviesNowPlaying/getMovies","BR")}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border border-secondary mb-3 p-3 rounded"},[e("h1",{staticClass:"h3"},[this._v("Movies now playing")]),e("list-movies",{attrs:{movies:this.movies}})],1)},staticRenderFns:[]},Y={name:"MoviesUpcoming",components:{"list-movies":I},computed:{movies:function(){return F.getters["moviesUpcoming/inRegion"]("BR")}},mounted:function(){F.dispatch("moviesUpcoming/getMovies","BR")}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border border-secondary mb-3 p-3 rounded"},[e("h1",{staticClass:"h3"},[this._v("Upcoming movies")]),e("list-movies",{attrs:{movies:this.movies}})],1)},staticRenderFns:[]},J={name:"PageHome",components:{"form-search":D,"movies-now-playing":n("VU/8")(z,O,!1,null,null,null).exports,"movies-upcoming":n("VU/8")(Y,G,!1,null,null,null).exports}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("form-search"),e("movies-now-playing"),e("movies-upcoming")],1)},staticRenderFns:[]},Z=n("VU/8")(J,W,!1,null,null,null).exports,K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-3 text-center"},[e("h1",{staticClass:"h3"},[this._v("Page not found")]),e("p",[this._v("This page doesn't exist!")]),e("router-link",{staticClass:"btn btn-danger",attrs:{to:"/"}},[this._v("Go to homepage")])],1)},staticRenderFns:[]},Q=n("VU/8")({name:"PageNotFound"},K,!1,null,null,null).exports,X={name:"ButtonResult",props:["item"],components:{"responsive-image":T}},tt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-secondary btn-block",attrs:{href:this.item.url,target:"_blank"}},[e("div",{staticClass:"no-gutters row"},[e("div",{staticClass:"col-4 pr-3"},[e("responsive-image",{attrs:{alt:this.item.name,path:this.item.image_path,type:this.item.item_type}})],1),e("div",{staticClass:"col-8 text-left text-truncate"},[this._v(this._s(this.item.name))])])])},staticRenderFns:[]},et={name:"SearchResult",components:{"button-result":n("VU/8")(X,tt,!1,null,null,null).exports},computed:{result:function(){return F.getters["searchResult/resultBySearchString"](this.$route.query.q)}},mounted:function(){F.dispatch("searchResult/getResult",this.$route.query.q)}},nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"list-unstyled"},this._l(this.result,function(t){return e("li",{key:t.id,attrs:{value:t.id}},[e("button-result",{staticClass:"mb-3",attrs:{item:t}})],1)}))},staticRenderFns:[]},st={name:"PageSearchResult",components:{"form-search":D,"search-result":n("VU/8")(et,nt,!1,null,null,null).exports}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("form-search"),e("search-result")],1)},staticRenderFns:[]},rt=n("VU/8")(st,it,!1,null,null,null).exports;s.a.use(P.a);var ot=new P.a({routes:[{path:"/",name:"PageHome",component:Z},{path:"/search",name:"PageSearchResult",component:rt},{path:"*",name:"PageNotFound",component:Q}]});n("iocV");s.a.config.productionTip=!1,new s.a({el:"#app",router:ot,components:{App:M},template:"<App/>"})},iocV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.512cde8e971f20beb1e0.js.map