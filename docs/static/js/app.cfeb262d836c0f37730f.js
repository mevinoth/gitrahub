webpackJsonp([1],{"2+Bm":function(t,e,s){"use strict";var i=s("FLAC");let a={};var n={name:"octicon",props:{name:{type:String,validator:t=>t?t in a:null},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:t=>"horizontal"===t||"vertical"===t},label:String},data:()=>({x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}),computed:{normalizedScale(){let t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(Object(i.a)('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz(){return{octicon:!0,"octicon-spin":this.spin,"octicon-flip-horizontal":"horizontal"===this.flip,"octicon-flip-vertical":"vertical"===this.flip,"octicon-inverse":this.inverse}},icon(){return this.name?a[this.name]:null},box(){return this.icon?this.icon.viewBox?this.icon.viewBox:`0 0 ${this.icon.width} ${this.icon.height}`:`0 0 ${this.width} ${this.height}`},width(){return this.childrenWidth||this.icon&&this.icon.width*this.normalizedScale||0},height(){return this.childrenHeight||this.icon&&this.icon.height*this.normalizedScale||0},style(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted(){if(this.icon)return;this.$children.forEach(t=>{t.outerScale=this.normalizedScale});let t=0,e=0;this.$children.forEach(s=>{t=Math.max(t,s.width),e=Math.max(e,s.height)}),this.childrenWidth=t,this.childrenHeight=e,this.$children.forEach(s=>{s.x=(t-s.width)/2,s.y=(e-s.height)/2})},register(t){for(let e in t)a[e]=t[e]},icons:a},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon?s("path",{attrs:{d:t.icon.d}}):t._e()])],2)},staticRenderFns:[]};var l=s("VU/8")(n,r,!1,function(t){s("csa/")},null,null);e.a=l.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a=s("mtWM"),n=s.n(a),r=s("8kuj"),l=s.n(r),o=s("2+Bm");s("+ij/"),s("ltfs"),s("YDVL"),s("h1dU"),s("XBTw"),s("17bc");var c=s("vwbq"),u={name:"GitraHub",components:{"vue-simple-spinner":l.a,octicon:o.a},data:()=>({inputone:"",inputtwo:"",mutualStarred:[],userOneUniqueStarred:[],userTwoUniqueStarred:[],showSpinner:!1,errorMessageFieldOne:"",errorMessageFieldTwo:"",flashBanner:"",intersectionPortion:!0,leftSetPortion:!1,rightSetPortion:!1,uniqueLanguages:[],selectedLanguage:"",sortRepos:"Default",searchRepos:""}),computed:{starsResult(){let t,e=this.userOneUniqueStarred,s=this.userTwoUniqueStarred,i=this.mutualStarred,a=[],n=[],r=[];this.leftSetPortion&&(t={arr:e,key:"left"},a.push(t)),this.rightSetPortion&&(t={arr:s,key:"right"},a.push(t)),this.intersectionPortion&&(t={arr:i,key:"center"},a.push(t)),!1===this.leftSetPortion&&-1!==a.map(t=>t.key).indexOf("left")&&a.splice(a.map(t=>t.key).indexOf("left"),1),!1===this.rightSetPortion&&-1!==a.map(t=>t.key).indexOf("right")&&a.splice(a.map(t=>t.key).indexOf("right"),1),!1===this.intersectionPortion&&-1!==a.map(t=>t.key).indexOf("center")&&a.splice(a.map(t=>t.key).indexOf("center"),1);for(let t in a)n.push(a[t].arr);let l=Array.prototype.concat.apply([],n);if("Default"!==this.sortRepos&&(l="Most stars"===this.sortRepos?l.slice().sort(function(t,e){return e.gazerscount-t.gazerscount}):l.slice().sort(function(t,e){return t.gazerscount-e.gazerscount})),""!==this.searchRepos)return l.map(t=>{-1!==t.name.indexOf(this.searchRepos)&&r.push(t)}),r;if(l.forEach(t=>{-1===this.uniqueLanguages.indexOf(t.language)&&null!==t.language&&this.uniqueLanguages.push(t.language)}),""!==this.selectedLanguage){let t=[];return l.map(e=>{null!==e.language&&e.language===this.selectedLanguage&&t.push(e)}),t}return l}},mounted(){let t=[{cx:300,cy:120,id:"cir1",radius:80,color:"#7bc96f",align:"end"},{cx:400,cy:120,id:"cir2",radius:80,color:"#7bc96f",align:"start"}];var e=c.a("#venn").append("svg").attr("width",700).attr("height",250);e.selectAll("circle").data(t).enter().append("circle").attr("cx",function(t){return t.cx}).attr("cy",function(t){return t.cy}).attr("r",function(t){return t.radius}).attr("id",function(t){return t.id}).style("fill",function(t){return t.color}).style("fill-opacity",".9").style("font-size","14px").on("mouseover",function(t){c.a(this).style("cursor","pointer")}).on("click",this.selectCircle),e.selectAll("text").data(t).enter().append("text").attr("x",function(t){return t.cx}).attr("y",function(t){return t.cy}).text(function(t){return t.name}).attr("text-anchor",function(t){return t.align}).attr("font-family","sans-serif").attr("font-size","15px").attr("fill","#FFF");let s=t[0].cx,i=t[0].cy,a=t[1].cx,n=t[1].cy,r=t[0].radius;var l=function(t,e,s,i,a,n){var r,l,o,c,u,h,d,p,m;return l=i-t,o=a-e,!((c=Math.sqrt(o*o+l*l))>s+n)&&!(c<Math.abs(s-n))&&(m=e+o*(r=(s*s-n*n+c*c)/(2*c))/c,[(p=t+l*r/c)+(h=(u=Math.sqrt(s*s-r*r))/c*-o),p-h,m+(d=l*(u/c)),m-d])}(s,i,r,a,n,r);e.append("g").append("path").attr("d",function(){return"M"+l[0]+","+l[2]+"A"+r+","+r+" 0 0,1 "+l[1]+","+l[3]+"A"+r+","+r+" 0 0,1 "+l[0]+","+l[2]}).attr("id","intersec").on("mouseover",function(t){c.a(this).style("cursor","pointer")}).style("fill","#239a3b").on("click",this.selectIntersection)},methods:{selectSort(t){this.sortRepos=t,this.searchRepos=""},selectLang(t){this.selectedLanguage=t,this.searchRepos=""},selectCircle(t){"rgb(123, 201, 111)"==c.a("#"+t.id).style("fill")?(300==t.cx?this.leftSetPortion=!0:this.rightSetPortion=!0,c.a("#"+t.id).style("fill","#239a3b")):(300==t.cx?this.leftSetPortion=!1:this.rightSetPortion=!1,c.a("#"+t.id).style("fill","#7bc96f")),this.uniqueLanguages=[],this.selectedLanguage="",this.searchRepos=""},selectIntersection(t){"rgb(123, 201, 111)"==c.a("#intersec").style("fill")?(this.intersectionPortion=!0,c.a("#intersec").style("fill","#239a3b")):(this.intersectionPortion=!1,c.a("#intersec").style("fill","#7bc96f")),this.uniqueLanguages=[],this.selectedLanguage="",this.searchRepos=""},fetchReposStarred(t,e){let s,i;s=-1!==this.inputone.indexOf("https://github.com/")||-1!==this.inputone.indexOf("https://www.github.com/")?this.inputone.split("/")[3]:this.inputone,i=-1!==this.inputtwo.indexOf("https://github.com/")||-1!==this.inputtwo.indexOf("https://www.github.com/")?this.inputtwo.split("/")[3]:this.inputtwo;let a=[];if(a[0]=s.length>9?s.slice(0,7).concat(".."):s,a[1]=i.length>9?i.slice(0,7).concat(".."):i,c.a("#venn").selectAll("text").text(function(t,e){return a[e]}),""!==s&&""!==i){this.mutualStarred.length>0&&(this.mutualStarred=[],this.userOneUniqueStarred=[],this.userTwoUniqueStarred=[]),this.uniqueLanguages=[],this.selectedLanguage="",this.searchRepos="",this.showSpinner=!0,this.errorMessageFieldOne="",this.errorMessageFieldTwo="";let t=1,e=1,a=[],o=[],c=!1,u=!1;const h=()=>{Promise.all([n.a.get("https://api.github.com/users/"+s+"/starred?page="+t+"&per_page=100")]).then(e=>{e.forEach(e=>{0!==e.data.length?(e.data.forEach(t=>{a.push(t)}),t++,h()):c=!0})}).catch(()=>{this.errorMessageFieldOne="User "+s+" not found"})},d=()=>{Promise.all([n.a.get("https://api.github.com/users/"+i+"/starred?page="+e+"&per_page=100")]).then(t=>{t.forEach(t=>{0!==t.data.length?(t.data.forEach(t=>{o.push(t)}),e++,d()):u=!0})}).catch(()=>{this.errorMessageFieldTwo="User "+i+" not found"})};h(),d();var r=function(){var t,e;c&&u&&(l&&window.clearInterval(l),o.length>a.length?(t=o,e=a):(t=a,e=o),e.map((e,s)=>{if(t.map(t=>t.html_url).indexOf(e.html_url)>-1){let t={};t.name=e.name,t.description=e.description,t.htmlurl=e.html_url,t.gazerscount=e.stargazers_count,t.language=e.language,this.mutualStarred.push(t)}}),a.map((t,e)=>{if(-1===this.mutualStarred.map(t=>t.htmlurl).indexOf(t.html_url)){let e={};e.name=t.name,e.description=t.description,e.htmlurl=t.html_url,e.gazerscount=t.stargazers_count,e.language=t.language,this.userOneUniqueStarred.push(e)}}),o.map((t,e)=>{if(-1===this.mutualStarred.map(t=>t.htmlurl).indexOf(t.html_url)){let e={};e.name=t.name,e.description=t.description,e.htmlurl=t.html_url,e.gazerscount=t.stargazers_count,e.language=t.language,this.userTwoUniqueStarred.push(e)}}),this.showSpinner=!1)}.bind(this),l=window.setInterval(r,300)}else""!==s&&""!==i||(""===s&&(this.errorMessageFieldOne="Input Field should not be empty."),""===i&&(this.errorMessageFieldTwo="Input Field should not be empty."));e.preventDefault()}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("octicon",{attrs:{name:"mark-github",height:"48",width:"48",color:"#95aebb"}}),t._v(" "),t._m(0)],1),t._v(" "),s("form",[s("div",{staticClass:"container-lg clearfix"},[s("div",{staticClass:"flash"},[t._v("\n        Find starred repos between two users.\n      ")]),t._v(" "),s("div",{staticClass:"col-6 float-left border p-6"},[s("dl",{staticClass:"form-group errored"},[s("dd",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputone,expression:"inputone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter github username or profile URL"},domProps:{value:t.inputone},on:{input:function(e){e.target.composing||(t.inputone=e.target.value)}}})]),t._v(" "),""!==t.errorMessageFieldOne?s("dd",{staticClass:"error",attrs:{id:"form-error-text"}},[t._v(" "+t._s(t.errorMessageFieldOne)+" ")]):t._e()])]),t._v(" "),s("div",{staticClass:"col-6 float-left border p-6"},[s("dl",{staticClass:"form-group errored"},[s("dd",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtwo,expression:"inputtwo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter github username or profile URL"},domProps:{value:t.inputtwo},on:{input:function(e){e.target.composing||(t.inputtwo=e.target.value)}}})]),t._v(" "),""!==t.errorMessageFieldTwo?s("dd",{staticClass:"error",attrs:{id:"form-error-text"}},[t._v(" "+t._s(t.errorMessageFieldTwo)+" ")]):t._e()])])])]),t._v(" "),s("div",{staticClass:"container-lg clearfix"},[s("div",{staticClass:"col-11 m-6"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){t.fetchReposStarred("msg",e)}}},[t._v("Get starred repos")])])]),t._v(" "),s("div",{staticClass:"container-lg clearfix"},[void 0!==t.starsResult&&t.starsResult.length<=0&&t.showSpinner?s("vue-simple-spinner",{attrs:{"line-fg-color":"#7bc96f"}}):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.starsResult&&t.starsResult.length>0||t.mutualStarred.length>0||t.userOneUniqueStarred.length>0||t.userTwoUniqueStarred.length>0,expression:"(starsResult !== undefined && starsResult.length > 0 || mutualStarred.length > 0 || userOneUniqueStarred.length > 0 || userTwoUniqueStarred.length > 0)"}],attrs:{id:"venn"}}),t._v(" "),void 0!==t.starsResult&&t.starsResult.length>0||t.mutualStarred.length>0||t.userOneUniqueStarred.length>0||t.userTwoUniqueStarred.length>0?s("div",{staticClass:"container-lg clearfix"},[s("div",{staticClass:"col-3 float-left p-4"}),t._v(" "),s("div",{staticClass:"col-3 float-left p-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRepos,expression:"searchRepos"}],staticClass:"form-control",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"Search starred repositories.."},domProps:{value:t.searchRepos},on:{input:function(e){e.target.composing||(t.searchRepos=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-3 float-left p-4"},[s("div",{staticClass:"select-menu js-menu-container js-select-menu"},[s("button",{staticClass:"btn select-menu-button js-menu-target",staticStyle:{width:"100%"},attrs:{type:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Sort: "+t._s(t.sortRepos)+"\n          ")]),t._v(" "),s("div",{staticClass:"select-menu-modal-holder"},[s("div",{staticClass:"select-menu-modal js-menu-content"},[s("div",{staticClass:"select-menu-header js-navigation-enable",attrs:{tabindex:"-1"}},[s("button",{staticClass:"btn-link close-button js-menu-close",attrs:{type:"button"}},[s("octicon",{attrs:{name:"x","aria-label":"Close menu"}})],1),t._v(" "),s("span",{staticClass:"select-menu-title"},[t._v("Sort options:")])]),t._v(" "),s("div",{staticClass:"select-menu-list js-navigation-container"},[s("a",{staticClass:"select-menu-item selected js-navigation-item",attrs:{href:"#url"},on:{click:function(e){t.selectSort("Default")}}},[s("span",{staticClass:"select-menu-item-text js-select-button-text"},[t._v("Default")])]),t._v(" "),s("a",{staticClass:"select-menu-item selected js-navigation-item",attrs:{href:"#url"},on:{click:function(e){t.selectSort("Most stars")}}},[s("span",{staticClass:"select-menu-item-text js-select-button-text"},[t._v("Most stars")])]),t._v(" "),s("a",{staticClass:"select-menu-item selected js-navigation-item",attrs:{href:"#url"},on:{click:function(e){t.selectSort("Least stars")}}},[s("span",{staticClass:"select-menu-item-text js-select-button-text"},[t._v("Least stars")])])])])])])]),t._v(" "),s("div",{staticClass:"col-3 float-left p-4"},[s("div",{staticClass:"select-menu js-menu-container js-select-menu"},[s("button",{staticClass:"btn select-menu-button js-menu-target",attrs:{type:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Language: "+t._s(""==t.selectedLanguage?"All languages":t.selectedLanguage)+"\n          ")]),t._v(" "),s("div",{staticClass:"select-menu-modal-holder"},[s("div",{staticClass:"select-menu-modal js-menu-content"},[s("div",{staticClass:"select-menu-header js-navigation-enable",attrs:{tabindex:"-1"}},[s("button",{staticClass:"btn-link close-button js-menu-close",attrs:{type:"button"}},[s("octicon",{attrs:{name:"x","aria-label":"Close menu"}})],1),t._v(" "),s("span",{staticClass:"select-menu-title"},[t._v("Select language:")])]),t._v(" "),s("div",{staticClass:"select-menu-list js-navigation-container"},[s("a",{staticClass:"select-menu-item selected js-navigation-item",attrs:{href:"#"},on:{click:function(e){t.selectLang("")}}},[s("span",{staticClass:"select-menu-item-text js-select-button-text"},[t._v("All languages")])]),t._v(" "),t._l(t.uniqueLanguages,function(e,i){return s("a",{key:i,staticClass:"select-menu-item selected js-navigation-item",attrs:{href:"#"},on:{click:function(s){t.selectLang(e)}}},[s("span",{staticClass:"select-menu-item-text js-select-button-text"},[t._v(t._s(e))])])})],2)])])])])]):t._e(),t._v(" "),t._l(t.starsResult,function(e,i){return s("div",{key:i,staticClass:"col-4 float-left p-2"},[s("span",{staticClass:"tooltipped tooltipped-multiline tooltipped-ne tooltipped-align-left-1 p-2 mb-2 mr-2 float-left",attrs:{"aria-label":e.name+":  "+(null!==e.description?e.description:"No Descriptions, Sorry")}},[s("octicon",{attrs:{name:"info"}})],1),t._v(" "),s("div",{staticClass:"Box"},[s("div",{staticClass:"Box-row d-flex flex-wrap flex-items-center"},[s("div",{staticClass:"flex-auto"},[s("strong",[t._v(t._s(e.name.length>16?e.name.slice(0,16).concat(".."):e.name))]),t._v(" "),s("div",{staticClass:"text-small text-gray-light"},[t._v("\n              "+t._s(null!==e.description?e.description.slice(0,20).concat(".."):"--")+"\n            ")])]),t._v(" "),s("div",{staticClass:"clearfix"},[s("a",{staticClass:"btn btn-sm btn-with-count",attrs:{href:"#url",role:"button"}},[s("octicon",{attrs:{name:"star"}}),t._v(" "+t._s(e.gazerscount)+"\n            ")],1),t._v(" "),s("a",{staticClass:"social-count",attrs:{target:"_blank",href:""+e.htmlurl}},[s("octicon",{attrs:{name:"link-external"}})],1)])])])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-2"},[e("p",{staticClass:"h1"},[e("span",{staticStyle:{color:"#95aebb"}},[this._v("Git")]),e("span",{staticStyle:{color:"#1775d0"}},[this._v("ra")]),e("span",{staticStyle:{color:"#95aebb"}},[this._v("hub")])])])}]};var d={name:"App",components:{GitraHub:s("VU/8")(u,h,!1,function(t){s("TKb7")},"data-v-b3376a56",null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("GitraHub")],1)},staticRenderFns:[]};var m=s("VU/8")(d,p,!1,function(t){s("dhaM")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:m},template:"<App/>"})},TKb7:function(t,e){},"csa/":function(t,e){},dhaM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cfeb262d836c0f37730f.js.map