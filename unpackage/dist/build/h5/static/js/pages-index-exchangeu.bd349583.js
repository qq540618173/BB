(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-exchangeu"],{"15e2":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"exchangeu"},[a("header-bar",{attrs:{isBg:e.isBg,title:e.i18n.header.header6}}),a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"form-wrap"},[a("v-uni-view",{staticClass:"form-wrap-top"},[a("v-uni-view",{staticClass:"left"},[e._v(e._s(e.i18n.exchange.lang23))]),a("v-uni-view",{staticClass:"right"},[e._v(e._s(e.indexData))])],1),a("v-uni-view",{staticClass:"form-wrap-bot"},[a("v-uni-view",{staticClass:"form-item"},[a("v-uni-input",{attrs:{type:"digit",placeholder:e.i18n.exchange.lang24},model:{value:e.current.from_amount,callback:function(t){e.$set(e.current,"from_amount",t)},expression:"current.from_amount"}})],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-label",[e._v(e._s(e.i18n.exchange.lang25)+":")]),a("v-uni-input",{staticClass:"shrink",attrs:{type:"number",placeholder:"0.00",disabled:"true"},model:{value:e.current.from_amount?e.calc:"",callback:function(t){e.$set(e.current,"from_amount?calc:''",t)},expression:"current.from_amount?calc:''"}})],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-input",{attrs:{type:"text",password:e.active,placeholder:e.i18n.exchange.lang26},model:{value:e.current.paypass,callback:function(t){e.$set(e.current,"paypass",t)},expression:"current.paypass"}}),a("v-uni-view",{staticClass:"password",class:{active:!e.active},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addClass("active")}}})],1)],1)],1),a("v-uni-view",{staticClass:"form-submit-wrap"},[a("v-uni-view",{staticClass:"form-submit gradient-blue",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v(e._s(e.i18n.exchange.lang27))])],1)],1)],1)},o=[]},"269a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABOklEQVRoQ+3Zuw0CMRAE0JmALggIaIaQkJCMemiBCBFRAJUQEVAGWmTpkC7gI+z9eKUjt28ea5/WZyL5j8nzYwJEV3CqQG0FRGQFYD+M35G81MwVUgERWQM4ApgNoW8kFykAb8KX3HeS8+4BH8I/AGxInroGfAm/JXmoCV/GuOwBq/AuAMvw5gDr8KYAj/BmAK/wJgDP8OoA7/CqgIjwaoCo8CqAyPDNgOjwTYAewlcDhsPIedTPl7lKV9nUmNU0dFXNnIhcASxHDwwJ31KB9IByns27hErpUm/i19rvAVG1icdvi2hEMyB6OakAIhFqgCiEKiACoQ7wRpgAPBFmAC+EKcADYQ6wRrgALBFugB+I/j+v/2gAc1xwfEHkuWIaIfJe8tUc3j+Ncd3EmsFfc00Ai3/1nznTV+AJhuneMSbdAuMAAAAASUVORK5CYII="},"37cf":function(e,t,a){"use strict";a.r(t);var i=a("15e2"),n=a("fedd");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("3d1b");var r,c=a("f0c5"),d=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"f3742f76",null,!1,i["a"],r);t["default"]=d.exports},"3bfa":function(e,t,a){var i=a("9511");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("69eaf2b9",i,!0,{sourceMap:!1,shadowMode:!1})},"3d1b":function(e,t,a){"use strict";var i=a("5c7c"),n=a.n(i);n.a},"3fb5":function(e,t,a){"use strict";var i=a("3bfa"),n=a.n(i);n.a},"5c7c":function(e,t,a){var i=a("8a27");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("6aeb09ac",i,!0,{sourceMap:!1,shadowMode:!1})},7824:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{}},props:{title:{type:String,default:""},isBack:{type:[Boolean,String],default:!0},isBg:{type:[Boolean,String],default:!1},isSlot:{type:[Boolean,String],default:!1}},computed:{i18n:function(){return this.$t("index")}},methods:{goBack:function(){uni.navigateBack()}}};t.default=i},"8a27":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* Body设置 */\nuni-page-body[data-v-f3742f76]{min-height:100vh;padding-top:%?128?%;box-sizing:border-box}\nuni-image[data-v-f3742f76]{-webkit-flex-shrink:0;flex-shrink:0}\n/* 容器设置 */.container[data-v-f3742f76]{padding:%?30?%}.flex[data-v-f3742f76]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-center[data-v-f3742f76]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flex-between[data-v-f3742f76]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.form-wrap[data-v-f3742f76]{background-color:#262733;box-shadow:0 8px 8px 0 rgba(0,0,0,.05)}.form-wrap-top[data-v-f3742f76]{height:%?148?%;background:url(/static/images/icon19.png) bottom repeat-x;position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?%}.form-wrap-top[data-v-f3742f76]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;left:%?-20?%;bottom:%?-20?%}.form-wrap-top[data-v-f3742f76]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;right:%?-20?%;bottom:%?-20?%}.form-wrap-top .left[data-v-f3742f76]{color:#c4c4c9;font-size:%?28?%}.form-wrap-top .right[data-v-f3742f76]{color:#ffa404;font-size:%?56?%}.form-wrap-bot[data-v-f3742f76]{padding:%?50?% %?30?% %?40?%;position:relative;overflow:hidden}.form-wrap-bot[data-v-f3742f76]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;left:%?-20?%}.form-wrap-bot[data-v-f3742f76]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;right:%?-20?%}\n/* form设置 */.form-label[data-v-f3742f76]{font-size:%?28?%;color:#fff;margin-bottom:%?20?%}.form-item[data-v-f3742f76]{margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.form-item uni-input[data-v-f3742f76]{height:%?92?%;line-height:%?92?%;background:none;border-radius:%?8?%;border:%?1?% solid #999;padding:0 %?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#fff}.form-item .input-placeholder[data-v-f3742f76]{color:#c5c6ca;font-size:%?28?%}.form-item uni-label[data-v-f3742f76]{color:#c4c4c9;font-size:%?28?%;margin-right:%?20?%}.form-item .password[data-v-f3742f76]{width:%?60?%;height:%?60?%;background:url(/static/images/icon16.png) no-repeat;background-size:contain;position:absolute;top:%?20?%;right:%?20?%}.form-item .password.active[data-v-f3742f76]{background:url(/static/images/icon16_1.png) no-repeat;background-size:contain}.form-item .label-yzm[data-v-f3742f76]{height:%?100?%;line-height:%?100?%;position:absolute;right:%?20?%;font-size:%?28?%;color:#ffa404}.form-item .yzm[data-v-f3742f76]{padding-right:%?170?%}.form-submit-wrap[data-v-f3742f76]{margin-top:%?40?%}.form-submit[data-v-f3742f76]{height:%?92?%;line-height:%?92?%;font-size:%?32?%;color:#262733;text-align:center;border-radius:%?8?%}\n/* 线性渐变 */.gradient-blue[data-v-f3742f76]{background:-webkit-linear-gradient(315deg,#93d8fe,#5ab0fc);background:linear-gradient(135deg,#93d8fe,#5ab0fc);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-green[data-v-f3742f76]{background:-webkit-linear-gradient(315deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);background:linear-gradient(135deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-violet[data-v-f3742f76]{background:-webkit-linear-gradient(315deg,#87bdfa,#8c2fee);background:linear-gradient(135deg,#87bdfa,#8c2fee);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-purple[data-v-f3742f76]{background:-webkit-linear-gradient(315deg,#a59bfb,#6c62f5);background:linear-gradient(135deg,#a59bfb,#6c62f5);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-pink[data-v-f3742f76]{background:-webkit-linear-gradient(315deg,#fed2e1,#fca6bf);background:linear-gradient(135deg,#fed2e1,#fca6bf);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-yellow[data-v-f3742f76]{background:-webkit-linear-gradient(315deg,#ffd10a,#ffa404);background:linear-gradient(135deg,#ffd10a,#ffa404);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-red[data-v-f3742f76]{background-color:#d8575a}\n/* 字体设置 */\n/* 颜色设置 */.exchangeu .shrink[data-v-f3742f76]{min-width:%?200?%}',""]),e.exports=t},9511:function(e,t,a){var i=a("24fb"),n=a("1de5"),o=a("c783"),r=a("269a");t=i(!1);var c=n(o),d=n(r);t.push([e.i,'@charset "UTF-8";\n/* Body设置 */\nuni-page-body[data-v-5b93cb1e]{min-height:100vh;padding-top:%?128?%;box-sizing:border-box}\nuni-image[data-v-5b93cb1e]{-webkit-flex-shrink:0;flex-shrink:0}\n/* 容器设置 */.container[data-v-5b93cb1e]{padding:%?30?%}.flex[data-v-5b93cb1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-center[data-v-5b93cb1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flex-between[data-v-5b93cb1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.form-wrap[data-v-5b93cb1e]{background-color:#262733;box-shadow:0 8px 8px 0 rgba(0,0,0,.05)}.form-wrap-top[data-v-5b93cb1e]{height:%?148?%;background:url(/static/images/icon19.png) bottom repeat-x;position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?%}.form-wrap-top[data-v-5b93cb1e]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;left:%?-20?%;bottom:%?-20?%}.form-wrap-top[data-v-5b93cb1e]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;right:%?-20?%;bottom:%?-20?%}.form-wrap-top .left[data-v-5b93cb1e]{color:#c4c4c9;font-size:%?28?%}.form-wrap-top .right[data-v-5b93cb1e]{color:#ffa404;font-size:%?56?%}.form-wrap-bot[data-v-5b93cb1e]{padding:%?50?% %?30?% %?40?%;position:relative;overflow:hidden}.form-wrap-bot[data-v-5b93cb1e]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;left:%?-20?%}.form-wrap-bot[data-v-5b93cb1e]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;right:%?-20?%}\n/* form设置 */.form-label[data-v-5b93cb1e]{font-size:%?28?%;color:#fff;margin-bottom:%?20?%}.form-item[data-v-5b93cb1e]{margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.form-item uni-input[data-v-5b93cb1e]{height:%?92?%;line-height:%?92?%;background:none;border-radius:%?8?%;border:%?1?% solid #999;padding:0 %?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#fff}.form-item .input-placeholder[data-v-5b93cb1e]{color:#c5c6ca;font-size:%?28?%}.form-item uni-label[data-v-5b93cb1e]{color:#c4c4c9;font-size:%?28?%;margin-right:%?20?%}.form-item .password[data-v-5b93cb1e]{width:%?60?%;height:%?60?%;background:url(/static/images/icon16.png) no-repeat;background-size:contain;position:absolute;top:%?20?%;right:%?20?%}.form-item .password.active[data-v-5b93cb1e]{background:url(/static/images/icon16_1.png) no-repeat;background-size:contain}.form-item .label-yzm[data-v-5b93cb1e]{height:%?100?%;line-height:%?100?%;position:absolute;right:%?20?%;font-size:%?28?%;color:#ffa404}.form-item .yzm[data-v-5b93cb1e]{padding-right:%?170?%}.form-submit-wrap[data-v-5b93cb1e]{margin-top:%?40?%}.form-submit[data-v-5b93cb1e]{height:%?92?%;line-height:%?92?%;font-size:%?32?%;color:#262733;text-align:center;border-radius:%?8?%}\n/* 线性渐变 */.gradient-blue[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#93d8fe,#5ab0fc);background:linear-gradient(135deg,#93d8fe,#5ab0fc);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-green[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);background:linear-gradient(135deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-violet[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#87bdfa,#8c2fee);background:linear-gradient(135deg,#87bdfa,#8c2fee);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-purple[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#a59bfb,#6c62f5);background:linear-gradient(135deg,#a59bfb,#6c62f5);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-pink[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#fed2e1,#fca6bf);background:linear-gradient(135deg,#fed2e1,#fca6bf);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-yellow[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#ffd10a,#ffa404);background:linear-gradient(135deg,#ffd10a,#ffa404);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-red[data-v-5b93cb1e]{background-color:#d8575a}\n/* 字体设置 */\n/* 颜色设置 */.topbar[data-v-5b93cb1e]{padding-top:%?40?%;background-color:#191a23;position:fixed;top:0;left:0;width:100%;height:%?128?%;box-sizing:border-box;z-index:990}.topbar.bgclass[data-v-5b93cb1e]{background:url('+c+") 50% no-repeat;background-size:contain}.topbar .topbar-wrap[data-v-5b93cb1e]{padding:0 %?20?%;height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative}.topbar .topbar-wrap .back-btn[data-v-5b93cb1e]{width:%?52?%;height:%?48?%;background:url("+d+") 50% no-repeat;background-size:contain}.topbar .topbar-wrap .title[data-v-5b93cb1e]{text-align:center;color:#fff;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.topbar .topbar-wrap .right[data-v-5b93cb1e]{width:%?52?%;height:%?48?%}.topbar .topbar-wrap .isslot[data-v-5b93cb1e]{position:absolute;font-size:%?28?%;color:#ffa404;right:%?30?%}",""]),e.exports=t},9617:function(e,t,a){"use strict";a.r(t);var i=a("9715"),n=a("a4b1");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("3fb5");var r,c=a("f0c5"),d=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"5b93cb1e",null,!1,i["a"],r);t["default"]=d.exports},9715:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"topbar",class:{bgclass:e.isBg}},[a("v-uni-view",{staticClass:"topbar-wrap"},[e.isBack?a("v-uni-view",{staticClass:"back-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack.apply(void 0,arguments)}}}):e._e(),a("v-uni-view",{staticClass:"title"},[e._v(e._s(e.title))]),e.isBack?a("v-uni-view",{staticClass:"right"}):e._e(),e.isSlot?a("v-uni-view",{staticClass:"isslot"},[e._t("text")],2):e._e()],1),a("v-uni-view",{attrs:{id:"canvas"}})],1)},o=[]},a4b1:function(e,t,a){"use strict";a.r(t);var i=a("7824"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},c783:function(e,t,a){e.exports=a.p+"static/img/top.cd8e3ba7.png"},f9b5:function(e,t,a){"use strict";var i=a("4ea4");a("b680"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("5530")),o=i(a("9617")),r={data:function(){return{active:!0,isBg:!0,current:{from_amount:"",paypass:"",from_coin:"GCC",to_coin:"USDT"},rate:"",indexData:0}},onLoad:function(){this.getData(),this.getRate()},components:{HeaderBar:o.default},methods:{submit:function(){var e=this,t=this.current,a=this.indexData;this.uniRequest({url:"exchange",data:(0,n.default)({},t)}).then((function(i){uni.showToast({title:i.message,icon:"none",success:function(){e.current={from_amount:"",paypass:"",from_coin:"GCC",to_coin:"USDT"},e.indexData=(a-t.from_amount).toFixed(6)}})}))},getData:function(){var e=this;this.uniRequest({url:"wallet",method:"GET"}).then((function(t){e.indexData=t.result.acc.GCC}))},getRate:function(){var e=this;this.uniRequest({url:"getExchangeRatio",method:"GET"}).then((function(t){e.rate=t.result.GCC}))},addClass:function(e){this[e]=!this[e]}},computed:{i18n:function(){return this.$t("index")},calc:function(){return(this.current.from_amount*this.rate).toFixed(6)}}};t.default=r},fedd:function(e,t,a){"use strict";a.r(t);var i=a("f9b5"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a}}]);