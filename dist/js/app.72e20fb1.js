(function(t){function e(e){for(var n,r,s=e[0],l=e[1],u=e[2],d=0,f=[];d<s.length;d++)r=s[d],o[r]&&f.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-todoapp/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar",{attrs:{title:"Ming Labs"}}),a("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[a("b-row",[a("b-col",{staticClass:"sideClass"},[a("div",[a("b-button",{staticClass:"buttonAligner",attrs:{pill:"",variant:"info"},on:{click:t.createNewTask}},[t._v("Open New Task")]),a("hr",{staticClass:"dropdown-divider",attrs:{role:"separator","aria-orientation":"horizontal"}}),a("b-form-group",[a("h4",[t._v(" Open Tasks ")]),a("b-row",t._l(t.activeTasks,function(e){return a("div",{key:e.value,staticClass:"d-flex taskItem",on:{click:function(a){return t.switchDetail(e.value)}}},[a("div",{staticClass:"checkbox",on:{click:function(a){return t.switchCheck(e.value)}}}),a("p",[t._v(" "+t._s(e.title)+" ")])])}),0)],1),a("hr",{staticClass:"dropdown-divider",attrs:{role:"separator","aria-orientation":"horizontal"}}),a("b-form-group",[a("h4",[t._v(" Finished Tasks ")]),a("b-row",t._l(t.closedTasks,function(e){return a("div",{key:e.value,staticClass:"d-flex taskItem",on:{click:function(a){return t.switchDetail(e.value)}}},[a("div",{staticClass:"checkbox checked",on:{click:function(a){return t.switchCheck(e.value)}}},[a("span",[t._v("✓")])]),a("p",[t._v(" "+t._s(e.title)+" ")])])}),0)],1)],1)]),a("b-col",{attrs:{cols:"9"}},[a("TaskDetails",{attrs:{data:t.selectedTaskDetails,saveData:t.saveData,deletePerma:t.deletePerma}})],1)],1)],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{staticClass:"navColor",attrs:{toggleable:"lg",type:"dark"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("img",{attrs:{src:t.img,width:"50"}})]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}})],1)],1)},s=[],l=a("cf05"),u={name:"Navbar",props:{title:String},data:function(){return{img:l}}},c=u,d=(a("9da8"),a("2877")),f=Object(d["a"])(c,r,s,!1,null,"4aec70c2",null),p=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"titleFixer"},[t._v("Details ")]),a("div",{staticClass:"mainCard"},[a("b-modal",{attrs:{"header-bg-variant":"danger",headerTextVariant:"light",okTitle:"Yes",cancelTitle:"Cancel",okVariant:"danger",title:"Delete Task"},on:{ok:t.onDelete},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[t._v("Are you sure? You cannot undo this!")]),t.show?a("b-form",{on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{id:"input-group-2",label:"Task Title:","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter task title"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Task Details:","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter task details"},model:{value:t.form.details,callback:function(e){t.$set(t.form,"details",e)},expression:"form.details"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Task Date:","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"date",required:"",placeholder:"Enter task date"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),a("div",{staticClass:"buttonGroup"},[a("b-row",{attrs:{"align-h":"around"}},[a("b-col",{attrs:{cols:"4"}},[a("b-button",{attrs:{variant:"danger"},on:{click:function(e){t.modalShow=!t.modalShow}}},[t._v("Delete Task")])],1)],1)],1)],1):t._e()],1)])},v=[],b={name:"TaskDetails",data:function(){return{modalShow:!1,form:{title:"",value:1,details:"",date:""},show:!0}},props:{deletePerma:{type:Function},saveData:{type:Function},data:{type:Object}},mounted:function(){console.log(this.data),this.form=this.data},watch:{data:function(t,e){console.log("Prop changed: ",e),t!==e&&(this.data=t,this.form=this.data)}},methods:{onSubmit:function(t){t.preventDefault(),this.saveData(this.form)},onDelete:function(t){t.preventDefault(),this.modalShow=!1,console.log("Deleting"),this.deletePerma(this.form.value)}}},m=b,k=(a("5f47"),Object(d["a"])(m,h,v,!1,null,"4f4ddbe2",null)),g=k.exports,w={name:"app",components:{Navbar:p,TaskDetails:g},data:function(){return{selected:[],options:[{title:"Very important task",value:1,details:"Important details",date:"2019-06-19",isDone:!1},{title:"BBB",value:2,details:"Important details 2",date:"2019-06-18",isDone:!0},{title:"Not so important task",value:3,details:"Important details 2",date:"2019-06-20",isDone:!1}],showDetails:1}},methods:{deletePerma:function(t){for(var e=0;e<this.options.length;e++)if(this.options[e].value==t){this.options.splice(e,1);break}this.switchDetail(this.options[0].value)},switchDetail:function(t){this.showDetails=t},createNewTask:function(){var t=this.options.length+1,e={title:"Template Title",value:t,details:"",date:"",isDone:!1};this.options.push(e),this.switchDetail(t)},saveData:function(t){for(var e=0;e<this.options.length;e++)if(this.options[e].value==t.value){this.options[e]=t;break}},switchCheck:function(t){for(var e=0;e<this.options.length;e++)if(this.options[e].value==t){console.log(this.options[e].title),this.options[e].isDone=!this.options[e].isDone,console.log("NOW ",this.options);break}}},computed:{activeTasks:function(){return this.options.filter(function(t){return!t.isDone})},closedTasks:function(){return this.options.filter(function(t){return t.isDone})},selectedTaskDetails:function(){for(var t=0;t<this.options.length;t++)if(this.options[t].value===this.showDetails)return this.options[t];return null}}},D=w,T=(a("034f"),Object(d["a"])(D,o,i,!1,null,null,null)),_=T.exports,y=a("5f5b");a("f9e3"),a("2dd8");n["default"].use(y["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(_)}}).$mount("#app")},"5f47":function(t,e,a){"use strict";var n=a("be15"),o=a.n(n);o.a},"60ac":function(t,e,a){},"64a9":function(t,e,a){},"9da8":function(t,e,a){"use strict";var n=a("60ac"),o=a.n(n);o.a},be15:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.63fa9d90.png"}});
//# sourceMappingURL=app.72e20fb1.js.map