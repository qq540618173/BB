(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-mininginfo"],{"0db9":function(t,e,i){"use strict";i.r(e);var a=i("f37a"),n=i("7b5b");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("8b8b");var r,c=i("f0c5"),d=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5b93cb1e",null,!1,a["a"],r);e["default"]=d.exports},"1c65":function(t,e,i){"use strict";i.r(e);var a=i("4d3a"),n=i("5613");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5738");var r,c=i("f0c5"),d=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"0480c96f",null,!1,a["a"],r);e["default"]=d.exports},"487b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABOklEQVRoQ+3Zuw0CMRAE0JmALggIaIaQkJCMemiBCBFRAJUQEVAGWmTpkC7gI+z9eKUjt28ea5/WZyL5j8nzYwJEV3CqQG0FRGQFYD+M35G81MwVUgERWQM4ApgNoW8kFykAb8KX3HeS8+4BH8I/AGxInroGfAm/JXmoCV/GuOwBq/AuAMvw5gDr8KYAj/BmAK/wJgDP8OoA7/CqgIjwaoCo8CqAyPDNgOjwTYAewlcDhsPIedTPl7lKV9nUmNU0dFXNnIhcASxHDwwJ31KB9IByns27hErpUm/i19rvAVG1icdvi2hEMyB6OakAIhFqgCiEKiACoQ7wRpgAPBFmAC+EKcADYQ6wRrgALBFugB+I/j+v/2gAc1xwfEHkuWIaIfJe8tUc3j+Ncd3EmsFfc00Ai3/1nznTV+AJhuneMSbdAuMAAAAASUVORK5CYII="},"4d3a":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"miningdetails"},[i("header-bar",{attrs:{title:t.i18n.header.header9}}),i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"img",class:"img"+t.millInfo.combo_id}),i("v-uni-view",{staticClass:"name"},[i("v-uni-text",[t._v(t._s(t.i18n.index["mining"+t.millInfo.combo_id]))])],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title"}),i("v-uni-view",{staticClass:"uni-list"},[t.millInfo.endDay>0?i("v-uni-view",{staticClass:"time"},[i("v-uni-text",[t._v(t._s(t.millInfo.create_time)+"（"+t._s(t.i18n.index.mining19)+t._s(t.millInfo.endDay)+t._s(t.i18n.index.mining20)+"）")])],1):t._e(),0==t.millInfo.endDay?i("v-uni-view",{staticClass:"time"},[i("v-uni-text",[t._v(t._s(t.millInfo.create_time)+"（"+t._s(t.i18n.index["mine"+t.millInfo.status])+"）")])],1):t._e(),i("v-uni-view",{staticClass:"list-wrap-content"},[i("v-uni-view",[i("v-uni-view",{staticClass:"contnet-lt"},[i("v-uni-text",[t._v(t._s(t.i18n.index["mining"+t.millInfo.combo_id]))])],1),i("v-uni-view",{staticClass:"contnet-lb"},[i("v-uni-text",[t._v(t._s(t.millInfo.actual_money)+"USDT")])],1)],1),i("v-uni-view",[i("v-uni-view",{staticClass:"contnet-rt"},[i("v-uni-text",[t._v(t._s(t.i18n.index.mining21))])],1),i("v-uni-view",{staticClass:"contnet-rb"},[i("v-uni-text",{staticClass:"active"},[t._v(t._s(t.i18n.index["mine"+t.millInfo.status]))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"profit"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",[t._v(t._s(t.i18n.index.mining11))])],1),i("v-uni-view",{staticClass:"bot"},[i("v-uni-text",[t._v(t._s(t.millInfo.released)+"GCC")])],1)],1)],1),i("v-uni-view",{staticClass:"rule"},[i("v-uni-view",{staticClass:"rule-title"},[i("v-uni-text",[t._v(t._s(t.i18n.index.mining17))])],1),i("v-uni-view",{staticClass:"rule-con"},[i("v-uni-text",{domProps:{innerHTML:t._s(t.rule)}})],1)],1),i("v-uni-view",{staticClass:"start",class:{warning:t.millInfo.status>0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open(t.millInfo.status)}}},[i("v-uni-text",[t._v(t._s(t.i18n.index.mining25))])],1)],1),i("v-uni-view",{staticClass:"modal-mask",class:{current:t.current},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"modal",class:{current:t.current}},[i("v-uni-view",{staticClass:"modal-title"}),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-input",{attrs:{type:"text",password:t.active,placeholder:t.i18n.withdrawal.lang20},model:{value:t.paypass,callback:function(e){t.paypass=e},expression:"paypass"}}),i("v-uni-view",{staticClass:"password",class:{active:!t.active},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addClass("active")}}})],1),i("v-uni-view",{staticClass:"sure",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sureConfirm(t.money)}}},[i("v-uni-text",[t._v(t._s(t.i18n.index.mining26))])],1)],1)],1)},o=[]},"546b":function(t,e,i){t.exports=i.p+"static/img/top.cd8e3ba7.png"},5613:function(t,e,i){"use strict";i.r(e);var a=i("da7f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},5738:function(t,e,i){"use strict";var a=i("d95c"),n=i.n(a);n.a},6310:function(t,e,i){t.exports=i.p+"static/img/m3.40e141a6.png"},"6a71":function(t,e,i){t.exports=i.p+"static/img/m2.6cadf021.png"},"7b5b":function(t,e,i){"use strict";i.r(e);var a=i("8266"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"80d1":function(t,e,i){var a=i("24fb"),n=i("1de5"),o=i("869f"),r=i("6a71"),c=i("6310"),d=i("a9f9"),s=i("c999"),l=i("a038");e=a(!1);var f=n(o),b=n(r),g=n(c),u=n(d),p=n(s),m=n(l);e.push([t.i,'@charset "UTF-8";\n/* Body设置 */\nuni-page-body[data-v-0480c96f]{min-height:100vh;padding-top:%?128?%;box-sizing:border-box}\nuni-image[data-v-0480c96f]{-webkit-flex-shrink:0;flex-shrink:0}\n/* 容器设置 */.container[data-v-0480c96f]{padding:%?30?%}.flex[data-v-0480c96f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-center[data-v-0480c96f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flex-between[data-v-0480c96f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.form-wrap[data-v-0480c96f]{background-color:#262733;box-shadow:0 8px 8px 0 rgba(0,0,0,.05)}.form-wrap-top[data-v-0480c96f]{height:%?148?%;background:url(/static/images/icon19.png) bottom repeat-x;position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?%}.form-wrap-top[data-v-0480c96f]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;left:%?-20?%;bottom:%?-20?%}.form-wrap-top[data-v-0480c96f]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;right:%?-20?%;bottom:%?-20?%}.form-wrap-top .left[data-v-0480c96f]{color:#c4c4c9;font-size:%?28?%}.form-wrap-top .right[data-v-0480c96f]{color:#ffa404;font-size:%?56?%}.form-wrap-bot[data-v-0480c96f]{padding:%?50?% %?30?% %?40?%;position:relative;overflow:hidden}.form-wrap-bot[data-v-0480c96f]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;left:%?-20?%}.form-wrap-bot[data-v-0480c96f]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;right:%?-20?%}\n/* form设置 */.form-label[data-v-0480c96f]{font-size:%?28?%;color:#fff;margin-bottom:%?20?%}.form-item[data-v-0480c96f]{margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.form-item uni-input[data-v-0480c96f]{height:%?92?%;line-height:%?92?%;background:none;border-radius:%?8?%;border:%?1?% solid #999;padding:0 %?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#fff}.form-item .input-placeholder[data-v-0480c96f]{color:#c5c6ca;font-size:%?28?%}.form-item uni-label[data-v-0480c96f]{color:#c4c4c9;font-size:%?28?%;margin-right:%?20?%}.form-item .password[data-v-0480c96f]{width:%?60?%;height:%?60?%;background:url(/static/images/icon16.png) no-repeat;background-size:contain;position:absolute;top:%?20?%;right:%?20?%}.form-item .password.active[data-v-0480c96f]{background:url(/static/images/icon16_1.png) no-repeat;background-size:contain}.form-item .label-yzm[data-v-0480c96f]{height:%?100?%;line-height:%?100?%;position:absolute;right:%?20?%;font-size:%?28?%;color:#ffa404}.form-item .yzm[data-v-0480c96f]{padding-right:%?170?%}.form-submit-wrap[data-v-0480c96f]{margin-top:%?40?%}.form-submit[data-v-0480c96f]{height:%?92?%;line-height:%?92?%;font-size:%?32?%;color:#262733;text-align:center;border-radius:%?8?%}\n/* 线性渐变 */.gradient-blue[data-v-0480c96f]{background:-webkit-linear-gradient(315deg,#93d8fe,#5ab0fc);background:linear-gradient(135deg,#93d8fe,#5ab0fc);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-green[data-v-0480c96f]{background:-webkit-linear-gradient(315deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);background:linear-gradient(135deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-violet[data-v-0480c96f]{background:-webkit-linear-gradient(315deg,#87bdfa,#8c2fee);background:linear-gradient(135deg,#87bdfa,#8c2fee);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-purple[data-v-0480c96f]{background:-webkit-linear-gradient(315deg,#a59bfb,#6c62f5);background:linear-gradient(135deg,#a59bfb,#6c62f5);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-pink[data-v-0480c96f]{background:-webkit-linear-gradient(315deg,#fed2e1,#fca6bf);background:linear-gradient(135deg,#fed2e1,#fca6bf);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-yellow[data-v-0480c96f]{background:-webkit-linear-gradient(315deg,#ffd10a,#ffa404);background:linear-gradient(135deg,#ffd10a,#ffa404);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-red[data-v-0480c96f]{background-color:#d8575a}\n/* 字体设置 */\n/* 颜色设置 */.miningdetails .container .img[data-v-0480c96f]{width:%?160?%;height:%?230?%;margin:0 auto}.miningdetails .container .img.img1[data-v-0480c96f]{background:url('+f+") 50% no-repeat;background-size:contain}.miningdetails .container .img.img2[data-v-0480c96f]{background:url("+b+") no-repeat;background-size:contain}.miningdetails .container .img.img3[data-v-0480c96f]{background:url("+g+") no-repeat;background-size:contain}.miningdetails .container .img.img4[data-v-0480c96f]{background:url("+u+") no-repeat;background-size:contain}.miningdetails .container .info[data-v-0480c96f]{background-color:#34374d;border-radius:%?8?%;padding:%?44?% %?30?%;margin-bottom:%?32?%;margin-top:%?70?%}.miningdetails .container .info .title[data-v-0480c96f]{width:%?156?%;height:%?42?%;background:url("+p+') no-repeat;background-size:contain;position:relative}.miningdetails .container .info .title[data-v-0480c96f]::after{content:"";display:block;width:%?70?%;height:%?6?%;background-color:#59d0cf;position:absolute;bottom:%?-10?%;left:50%;margin-left:%?-35?%}.miningdetails .container .info .uni-list[data-v-0480c96f]{margin-top:%?32?%}.miningdetails .container .info .time[data-v-0480c96f]{font-size:%?24?%;color:#fff;margin-bottom:%?16?%}.miningdetails .container .info .list-wrap-content[data-v-0480c96f]{display:-webkit-box;display:-webkit-flex;display:flex}.miningdetails .container .info .list-wrap-content > uni-view[data-v-0480c96f]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.miningdetails .container .info .list-wrap-content > uni-view .contnet-lt[data-v-0480c96f]{font-size:%?24?%;color:#fff;margin-bottom:%?6?%}.miningdetails .container .info .list-wrap-content > uni-view .contnet-lb[data-v-0480c96f]{font-size:%?32?%;color:#d8575a}.miningdetails .container .info .list-wrap-content > uni-view .contnet-rt[data-v-0480c96f]{text-align:right;font-size:%?24?%;color:#fff;margin-bottom:%?6?%}.miningdetails .container .info .list-wrap-content > uni-view .contnet-rb[data-v-0480c96f]{text-align:right;font-size:%?32?%;color:#fff}.miningdetails .container .info .list-wrap-content > uni-view .contnet-rb .active[data-v-0480c96f]{color:#ffa404}.miningdetails .container .info .profit[data-v-0480c96f]{margin-top:%?44?%;text-align:center}.miningdetails .container .info .profit .top[data-v-0480c96f]{font-size:%?24?%;color:#fff;opacity:.8}.miningdetails .container .info .profit .bot[data-v-0480c96f]{font-size:%?72?%;color:#ffa404;font-weight:700;margin-top:%?16?%}.miningdetails .container .name[data-v-0480c96f]{font-size:%?32?%;color:#fff;line-height:22px;text-align:center;margin-top:%?32?%}.miningdetails .container .price[data-v-0480c96f]{font-size:%?42?%;color:#fff;text-align:center;margin-top:%?14?%}.miningdetails .container .price .number[data-v-0480c96f]{color:#d8575a}.miningdetails .container .rule[data-v-0480c96f]{border-radius:%?8?%;background:#34374d;padding:%?40?% %?30?%;margin-top:%?56?%}.miningdetails .container .rule .rule-title[data-v-0480c96f]{font-size:%?28?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.miningdetails .container .rule .rule-title[data-v-0480c96f]::before{content:"";display:inline-block;width:%?8?%;height:%?32?%;background-color:#59d0cf;border-radius:%?6?%;margin-right:%?10?%}.miningdetails .container .rule .rule-con[data-v-0480c96f]{font-size:%?28?%;color:#fff;margin-top:%?20?%;line-height:%?48?%}.miningdetails .container .start[data-v-0480c96f]{width:100%;height:%?100?%;line-height:%?100?%;background:#d8575a;border-radius:%?50?%;text-align:center;color:#fff;margin-top:%?100?%}.miningdetails .container .start.warning[data-v-0480c96f]{opacity:.5}.miningdetails .modal-mask[data-v-0480c96f]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.45);z-index:8;display:none}.miningdetails .modal-mask.current[data-v-0480c96f]{display:block}.miningdetails .modal[data-v-0480c96f]{position:fixed;left:0;right:0;bottom:0;z-index:9;background-color:#272a3f;border-radius:%?24?% %?24?% 0 0;padding:%?36?% %?30?% %?50?%;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.5s all;transition:.5s all}.miningdetails .modal.current[data-v-0480c96f]{-webkit-transform:translateY(0);transform:translateY(0)}.miningdetails .modal .modal-title[data-v-0480c96f]{width:%?158?%;height:%?42?%;background:url('+m+") no-repeat;background-size:contain;margin:0 auto %?40?%}.miningdetails .modal .sure[data-v-0480c96f]{width:100%;height:%?100?%;line-height:%?100?%;background:#d8575a;border-radius:%?50?%;text-align:center;color:#fff;margin-top:%?50?%}.miningdetails .modal .assets[data-v-0480c96f]{font-size:%?28?%;color:#d8575a;margin-top:%?24?%;margin-left:%?20?%}",""]),t.exports=e},8266:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},props:{title:{type:String,default:""},isBack:{type:[Boolean,String],default:!0},isBg:{type:[Boolean,String],default:!1},isSlot:{type:[Boolean,String],default:!1}},computed:{i18n:function(){return this.$t("index")}},methods:{goBack:function(){uni.navigateBack()}}};e.default=a},"869f":function(t,e,i){t.exports=i.p+"static/img/m1.b6c2d62b.png"},"8b8b":function(t,e,i){"use strict";var a=i("c77e"),n=i.n(a);n.a},"8fdf":function(t,e,i){var a=i("24fb"),n=i("1de5"),o=i("546b"),r=i("487b");e=a(!1);var c=n(o),d=n(r);e.push([t.i,'@charset "UTF-8";\n/* Body设置 */\nuni-page-body[data-v-5b93cb1e]{min-height:100vh;padding-top:%?128?%;box-sizing:border-box}\nuni-image[data-v-5b93cb1e]{-webkit-flex-shrink:0;flex-shrink:0}\n/* 容器设置 */.container[data-v-5b93cb1e]{padding:%?30?%}.flex[data-v-5b93cb1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-center[data-v-5b93cb1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flex-between[data-v-5b93cb1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.form-wrap[data-v-5b93cb1e]{background-color:#262733;box-shadow:0 8px 8px 0 rgba(0,0,0,.05)}.form-wrap-top[data-v-5b93cb1e]{height:%?148?%;background:url(/static/images/icon19.png) bottom repeat-x;position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?%}.form-wrap-top[data-v-5b93cb1e]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;left:%?-20?%;bottom:%?-20?%}.form-wrap-top[data-v-5b93cb1e]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;right:%?-20?%;bottom:%?-20?%}.form-wrap-top .left[data-v-5b93cb1e]{color:#c4c4c9;font-size:%?28?%}.form-wrap-top .right[data-v-5b93cb1e]{color:#ffa404;font-size:%?56?%}.form-wrap-bot[data-v-5b93cb1e]{padding:%?50?% %?30?% %?40?%;position:relative;overflow:hidden}.form-wrap-bot[data-v-5b93cb1e]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;left:%?-20?%}.form-wrap-bot[data-v-5b93cb1e]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;right:%?-20?%}\n/* form设置 */.form-label[data-v-5b93cb1e]{font-size:%?28?%;color:#fff;margin-bottom:%?20?%}.form-item[data-v-5b93cb1e]{margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.form-item uni-input[data-v-5b93cb1e]{height:%?92?%;line-height:%?92?%;background:none;border-radius:%?8?%;border:%?1?% solid #999;padding:0 %?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#fff}.form-item .input-placeholder[data-v-5b93cb1e]{color:#c5c6ca;font-size:%?28?%}.form-item uni-label[data-v-5b93cb1e]{color:#c4c4c9;font-size:%?28?%;margin-right:%?20?%}.form-item .password[data-v-5b93cb1e]{width:%?60?%;height:%?60?%;background:url(/static/images/icon16.png) no-repeat;background-size:contain;position:absolute;top:%?20?%;right:%?20?%}.form-item .password.active[data-v-5b93cb1e]{background:url(/static/images/icon16_1.png) no-repeat;background-size:contain}.form-item .label-yzm[data-v-5b93cb1e]{height:%?100?%;line-height:%?100?%;position:absolute;right:%?20?%;font-size:%?28?%;color:#ffa404}.form-item .yzm[data-v-5b93cb1e]{padding-right:%?170?%}.form-submit-wrap[data-v-5b93cb1e]{margin-top:%?40?%}.form-submit[data-v-5b93cb1e]{height:%?92?%;line-height:%?92?%;font-size:%?32?%;color:#262733;text-align:center;border-radius:%?8?%}\n/* 线性渐变 */.gradient-blue[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#93d8fe,#5ab0fc);background:linear-gradient(135deg,#93d8fe,#5ab0fc);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-green[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);background:linear-gradient(135deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-violet[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#87bdfa,#8c2fee);background:linear-gradient(135deg,#87bdfa,#8c2fee);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-purple[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#a59bfb,#6c62f5);background:linear-gradient(135deg,#a59bfb,#6c62f5);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-pink[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#fed2e1,#fca6bf);background:linear-gradient(135deg,#fed2e1,#fca6bf);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-yellow[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#ffd10a,#ffa404);background:linear-gradient(135deg,#ffd10a,#ffa404);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-red[data-v-5b93cb1e]{background-color:#d8575a}\n/* 字体设置 */\n/* 颜色设置 */.topbar[data-v-5b93cb1e]{padding-top:%?40?%;background-color:#191a23;position:fixed;top:0;left:0;width:100%;height:%?128?%;box-sizing:border-box;z-index:990}.topbar.bgclass[data-v-5b93cb1e]{background:url('+c+") 50% no-repeat;background-size:contain}.topbar .topbar-wrap[data-v-5b93cb1e]{padding:0 %?20?%;height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative}.topbar .topbar-wrap .back-btn[data-v-5b93cb1e]{width:%?52?%;height:%?48?%;background:url("+d+") 50% no-repeat;background-size:contain}.topbar .topbar-wrap .title[data-v-5b93cb1e]{text-align:center;color:#fff;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.topbar .topbar-wrap .right[data-v-5b93cb1e]{width:%?52?%;height:%?48?%}.topbar .topbar-wrap .isslot[data-v-5b93cb1e]{position:absolute;font-size:%?28?%;color:#ffa404;right:%?30?%}",""]),t.exports=e},a038:function(t,e){t.exports="data:image/png;base64,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"},a9f9:function(t,e,i){t.exports=i.p+"static/img/m4.930a2e86.png"},c77e:function(t,e,i){var a=i("8fdf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c849680e",a,!0,{sourceMap:!1,shadowMode:!1})},c999:function(t,e){t.exports="data:image/png;base64,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"},d95c:function(t,e,i){var a=i("80d1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("d3aa2322",a,!0,{sourceMap:!1,shadowMode:!1})},da7f:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("0db9")),o={data:function(){return{active:!0,current:!1,mineId:"",paypass:"",millInfo:[],rule:"",money:""}},components:{HeaderBar:n.default},onLoad:function(t){this.mineId=t.id,this.getData(t.id)},onUnload:function(){},methods:{getData:function(t){var e=this;this.uniRequest({url:"millInfo",method:"GET",data:{id:t}}).then((function(t){e.millInfo=t.result.info,e.rule=t.result.desc,e.money=t.result.money}))},addClass:function(t){this[t]=!this[t]},open:function(t){if(1==t)return!1;this.current=!0},close:function(){this.current=!1},sureConfirm:function(t){var e=this,i=this.paypass;if(!i)return!1;uni.showModal({content:"停止挖矿扣取矿机收益和云矿机服务器占用费用共".concat(t,"USDT"),success:function(t){t.confirm&&e.sure()}})},sure:function(){var t=this,e=this.mineId,i=this.paypass;this.uniRequest({url:"stopMine",data:{id:e,paypass:i}}).then((function(i){uni.showToast({title:"已停止挖矿",icon:"none"}),t.current=!1,t.getData(e)}))}},computed:{i18n:function(){return this.$t("index")}}};e.default=o},f37a:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"topbar",class:{bgclass:t.isBg}},[i("v-uni-view",{staticClass:"topbar-wrap"},[t.isBack?i("v-uni-view",{staticClass:"back-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title))]),t.isBack?i("v-uni-view",{staticClass:"right"}):t._e(),t.isSlot?i("v-uni-view",{staticClass:"isslot"},[t._t("text")],2):t._e()],1),i("v-uni-view",{attrs:{id:"canvas"}})],1)},o=[]}}]);