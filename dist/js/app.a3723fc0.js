(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],p=0,u=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,s=1;s<i.length;s++){var c=i[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},a={app:0},o=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Employee")],1)},o=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",{staticStyle:{margin:"0.5rem","z-index":"999",position:"absolute",top:"0"}},[e._v(" Back-end server URL: "),i("input",{ref:"input",attrs:{type:"text",id:"backend",value:"http://127.0.0.1:3000"}}),i("button",{staticStyle:{"margin-left":"5px",border:"1px solid #333"},on:{click:function(t){return e.backend()}}},[e._v("Connect")])]),i("div",{attrs:{id:"header"}},[i("div",{staticClass:"wrapper"},[e._m(0),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"filter"},[i("li",[i("button",{class:[""===e.dept?"font-weight":""],on:{click:function(t){return e.deptApiCall("")}}},[e._v("All")])]),i("li",[i("button",{class:["Sales"===e.dept?"font-weight":""],on:{click:function(t){return e.deptApiCall("Sales")}}},[e._v("Sales")])]),i("li",[i("button",{class:["Marketing"===e.dept?"font-weight":""],on:{click:function(t){return e.deptApiCall("Marketing")}}},[e._v("Marketing")])]),i("li",[i("button",{class:["IT"===e.dept?"font-weight":""],on:{click:function(t){return e.deptApiCall("IT")}}},[e._v("IT")])]),i("li",[i("button",{class:["HR"===e.dept?"font-weight":""],on:{click:function(t){return e.deptApiCall("HR")}}},[e._v("HR")])])])])]),e.isLoading?i("div",{staticClass:"loading"},[e._m(1)]):e._e(),i("div",{staticClass:"card-carousel",attrs:{id:"employee"}},e._l(e.items,(function(t,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"pcard",class:{on:n===e.activeItem,off:n===e.preActiveItem}},[i("div",{staticClass:"pic"},[i("img",{staticClass:"pprofile",class:[n!==e.activeItem||!0===e.activeProfile?"visible":"invisible"],attrs:{src:t.picture}}),i("img",{staticClass:"pmap",class:[n===e.activeItem&&!1===e.activeProfile?"visible":"invisible"],attrs:{src:"https://maps.googleapis.com/maps/api/staticmap?zoom=12&size=228x228&maptype=roadmap&&markers="+t.name+","+t.name+"&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"}}),i("div",{staticClass:"button"},[i("a",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"bprofile",attrs:{href:"#"},on:{click:function(t){return e.toggle()}}},[i("font-awesome-icon",{attrs:{icon:"user"}})],1),i("a",{directives:[{name:"show",rawName:"v-show",value:!e.isActive,expression:"!isActive"}],staticClass:"bmap",attrs:{href:"#"},on:{click:function(t){return e.toggle()}}},[i("font-awesome-icon",{attrs:{icon:"map-marked-alt"}})],1)])]),i("ul",[i("li",{staticClass:"name"},[i("strong",[e._v(e._s(t.name))])]),i("li",[e._v(e._s(t.dept)+" | "+e._s(t.position)+" ")]),i("li",[e._v(e._s(t.email)+" ")]),i("li",[e._v(e._s(t.desc)+" ")]),i("li",[i("font-awesome-icon",{attrs:{icon:"map-marked-alt"}}),e._v(" "+e._s(t.location.city)+", "+e._s(t.location.state)+", "+e._s(t.location.country))],1)]),i("div",{staticClass:"btn",on:{click:function(t){return e.details(n)}}},[i("a",{attrs:{href:"#"}},[e._v("Detail")])])])])})),0)])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"section-intro"},[i("h2",{staticClass:"font-weight"},[e._v("MEET THE TEAM")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"loadingBox"},[i("div",{staticClass:"dim"}),i("div",{staticClass:"circle"})])}],c=i("2909"),l=(i("2af1"),i("dc02")),d=i("ecee"),p=i("ad3d"),u=i("c074"),m=i("b536");d["c"].add(u["b"],u["a"]),n["a"].component("font-awesome-icon",p["a"]);var f={name:"Employee",data:function(){return{isLoading:!1,isError:!1,dept:"",preActiveItem:null,activeItem:null,activeProfile:!0,isActive:!1,items:m,limit:0,show:!1}},mounted:function(){var e=this,t=document.querySelector("#employee"),i=0;window.addEventListener("wheel",(function(n){i+=60*Math.sign(n.deltaY),i<0?i=0:i>t.scrollWidth-window.innerWidth&&(i=t.scrollWidth-window.innerWidth),t.scrollLeft=i,t.scrollLeft+t.clientWidth>=t.scrollWidth&&!e.isLoading&&e.show&&(t.style.justifyContent="flex-start",e.isLoading=!0,setTimeout(e.infiniteHandler,500))})),t.addEventListener("scroll",(function(){t.scrollLeft+t.clientWidth>=t.scrollWidth&&!e.isLoading&&e.show&&(t.style.justifyContent="flex-start",e.isLoading=!0,setTimeout(e.infiniteHandler,500))}))},methods:{toggle:function(){this.isActive=!this.isActive,this.activeProfile=!this.activeProfile},infiniteHandler:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.host;""!==this.dept&&(t=t+"/dept/"+this.dept),Object(l["a"])(t).then((function(t){var i;t.users.length&&((i=e.items).push.apply(i,Object(c["a"])(t.users)),e.isLoading=!1)}),(function(e){console.log(e)}))},callAPI:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.host;try{""!==this.dept&&(t=t+"/dept/"+this.dept),Object(l["a"])(t).then((function(t){console.log(t),e.activeItem=null,e.items=t.users,e.isLoading=!1}),(function(e){console.log(e),this.isError=!0}))}catch(i){this.isError=!0}finally{this.isLoading=!1}},deptApiCall:function(e){this.dept=e,this.show=!0;var t=document.querySelector("#employee");t.style.justifyContent="center",this.callAPI()},details:function(e){this.preActiveItem=this.activeItem,this.activeItem=e,this.activeProfile=!0},backend:function(){var e=document.getElementById("backend").value;this.host=e,this.isLoading=!0,this.show=!0,this.callAPI()}}},h=f,v=(i("876c"),i("2877")),g=Object(v["a"])(h,r,s,!1,null,"457505de",null),y=g.exports,b={name:"App",metaInfo:{viewport:"width=device-width, initial-scale=1, viewport-fit=cover"},components:{Employee:y}},w=b,M=(i("034f"),Object(v["a"])(w,a,o,!1,null,null,null)),k=M.exports,A=i("58ca");n["a"].config.productionTip=!1,n["a"].use(A["a"]),new n["a"]({render:function(e){return e(k)}}).$mount("#app")},"85ec":function(e,t,i){},"876c":function(e,t,i){"use strict";i("8a46")},"8a46":function(e,t,i){},b536:function(e){e.exports=JSON.parse('[{"name":"Adamantino Jesus","dept":"Marketing","position":"Senior Manager","email":"adamantino.jesus@example.com","picture":"https://randomuser.me/api/portraits/men/39.jpg","location":{"street":{"number":6534,"name":"Rua Dezesseis de Maio"},"city":"Cuiabá","state":"Mato Grosso","country":"Brazil","postcode":77862,"coordinates":{"latitude":"-69.2673","longitude":"-174.1240"},"timezone":{"offset":"-2:00","description":"Mid-Atlantic"}},"desc":"Adamantino Jesusis a Senior Manager of Marketing department. The primary responsibility is to provide the necessary research."},{"name":"Justin Sanders","dept":"IT","position":"Junior Manager","email":"justin.sanders@example.com","picture":"https://randomuser.me/api/portraits/men/91.jpg","location":{"street":{"number":9574,"name":"Washington Ave"},"city":"Albury","state":"Australian Capital Territory","country":"Australia","postcode":5687,"coordinates":{"latitude":"-54.8000","longitude":"103.6089"},"timezone":{"offset":"+3:30","description":"Tehran"}},"desc":"Justin Sandersis a Junior Manager of IT department. The primary responsibility is to provide the infrastructure for automation. "},{"name":"Samuel Tolonen","dept":"IT","position":"Junior Manager","email":"samuel.tolonen@example.com","picture":"https://randomuser.me/api/portraits/men/78.jpg","location":{"street":{"number":9354,"name":"Nordenskiöldinkatu"},"city":"Merikarvia","state":"Kymenlaakso","country":"Finland","postcode":37351,"coordinates":{"latitude":"-71.2688","longitude":"116.2967"},"timezone":{"offset":"+7:00","description":"Bangkok, Hanoi, Jakarta"}},"desc":"Samuel Tolonenis a Junior Manager of IT department. The primary responsibility is to provide the infrastructure for automation. "},{"name":"Leah Justad","dept":"IT","position":"Junior Manager","email":"leah.justad@example.com","picture":"https://randomuser.me/api/portraits/women/37.jpg","location":{"street":{"number":7502,"name":"Treskeveien"},"city":"Uthaug","state":"Hordaland","country":"Norway","postcode":"3525","coordinates":{"latitude":"61.5318","longitude":"146.6482"},"timezone":{"offset":"-1:00","description":"Azores, Cape Verde Islands"}},"desc":"Leah Justadis a Junior Manager of IT department. The primary responsibility is to provide the infrastructure for automation. "},{"name":"Aria Anderson","dept":"IT","position":"Junior Manager","email":"aria.anderson@example.com","picture":"https://randomuser.me/api/portraits/women/15.jpg","location":{"street":{"number":2554,"name":"Brockville Road"},"city":"Hamilton","state":"Otago","country":"New Zealand","postcode":24531,"coordinates":{"latitude":"-89.7472","longitude":"-4.3100"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"desc":"Aria Andersonis a Junior Manager of IT department. The primary responsibility is to provide the infrastructure for automation. "},{"name":"Keira Singh","dept":"IT","position":"Junior Manager","email":"keira.singh@example.com","picture":"https://randomuser.me/api/portraits/women/45.jpg","location":{"street":{"number":299,"name":"Mt Eden Road"},"city":"Upper Hutt","state":"Nelson","country":"New Zealand","postcode":22430,"coordinates":{"latitude":"-20.2106","longitude":"164.4316"},"timezone":{"offset":"+5:30","description":"Bombay, Calcutta, Madras, New Delhi"}},"desc":"Keira Singhis a Junior Manager of IT department. The primary responsibility is to provide the infrastructure for automation. "},{"name":"Mathis Gagné","dept":"Sales","position":"Manager","email":"mathis.gagne@example.com","picture":"https://randomuser.me/api/portraits/men/2.jpg","location":{"street":{"number":3805,"name":"Stanley Way"},"city":"Westport","state":"Saskatchewan","country":"Canada","postcode":"M7A 1D1","coordinates":{"latitude":"63.1088","longitude":"2.5980"},"timezone":{"offset":"-8:00","description":"Pacific Time (US & Canada)"}},"desc":"Mathis Gagnéis a Manager of Sales department. The primary responsibility is to sell an organisation’s services and products."},{"name":"Frederik Mortensen","dept":"IT","position":"Junior Manager","email":"frederik.mortensen@example.com","picture":"https://randomuser.me/api/portraits/men/48.jpg","location":{"street":{"number":8779,"name":"Lundevej"},"city":"Gjerlev","state":"Danmark","country":"Denmark","postcode":35689,"coordinates":{"latitude":"66.7491","longitude":"99.8803"},"timezone":{"offset":"+5:45","description":"Kathmandu"}},"desc":"Frederik Mortensenis a Junior Manager of IT department. The primary responsibility is to provide the infrastructure for automation. "},{"name":"آرمین محمدخان","dept":"Sales","position":"Manager","email":"armyn.mhmdkhn@example.com","picture":"https://randomuser.me/api/portraits/men/78.jpg","location":{"street":{"number":9430,"name":"شورا"},"city":"دزفول","state":"قزوین","country":"Iran","postcode":30590,"coordinates":{"latitude":"-8.4434","longitude":"-144.6560"},"timezone":{"offset":"-1:00","description":"Azores, Cape Verde Islands"}},"desc":"آرمین محمدخانis a Manager of Sales department. The primary responsibility is to sell an organisation’s services and products."},{"name":"Grace Arnold","dept":"Sales","position":"Manager","email":"grace.arnold@example.com","picture":"https://randomuser.me/api/portraits/women/51.jpg","location":{"street":{"number":7055,"name":"Windsor Road"},"city":"Chichester","state":"Leicestershire","country":"United Kingdom","postcode":"D54 3QG","coordinates":{"latitude":"-31.1776","longitude":"123.3075"},"timezone":{"offset":"+1:00","description":"Brussels, Copenhagen, Madrid, Paris"}},"desc":"Grace Arnoldis a Manager of Sales department. The primary responsibility is to sell an organisation’s services and products."}]')}});
//# sourceMappingURL=app.a3723fc0.js.map