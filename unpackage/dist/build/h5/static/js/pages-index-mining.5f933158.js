(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-mining"],{"00f4":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"mining"},[i("header-bar",{attrs:{title:e.i18n.header.header9}}),i("v-uni-view",{staticClass:"container"},e._l(e.miningList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"mining-item",class:{hide:1==t.status},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.gotoPage(t.id,t.price,t.status)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"text text1"},[i("v-uni-text",[e._v(e._s(e.i18n.index["mining"+t.id]))])],1),i("v-uni-view",{staticClass:"text text2"},[i("v-uni-text",[e._v(e._s(t.price)+"USDT")])],1),i("v-uni-view",{staticClass:"text text3"},[i("v-uni-text",[e._v(e._s(e.i18n.index.mining15))])],1)],1),i("v-uni-view",{staticClass:"right",class:"right"+a})],1)})),1)],1)},o=[]},1218:function(e,t,i){"use strict";var a=i("2c1c"),n=i.n(a);n.a},"269a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABOklEQVRoQ+3Zuw0CMRAE0JmALggIaIaQkJCMemiBCBFRAJUQEVAGWmTpkC7gI+z9eKUjt28ea5/WZyL5j8nzYwJEV3CqQG0FRGQFYD+M35G81MwVUgERWQM4ApgNoW8kFykAb8KX3HeS8+4BH8I/AGxInroGfAm/JXmoCV/GuOwBq/AuAMvw5gDr8KYAj/BmAK/wJgDP8OoA7/CqgIjwaoCo8CqAyPDNgOjwTYAewlcDhsPIedTPl7lKV9nUmNU0dFXNnIhcASxHDwwJ31KB9IByns27hErpUm/i19rvAVG1icdvi2hEMyB6OakAIhFqgCiEKiACoQ7wRpgAPBFmAC+EKcADYQ6wRrgALBFugB+I/j+v/2gAc1xwfEHkuWIaIfJe8tUc3j+Ncd3EmsFfc00Ai3/1nznTV+AJhuneMSbdAuMAAAAASUVORK5CYII="},"2c1c":function(e,t,i){var a=i("e412");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("8e681c94",a,!0,{sourceMap:!1,shadowMode:!1})},"2d8d":function(e,t,i){"use strict";i.r(t);var a=i("00f4"),n=i("b7a6");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("1218");var r,d=i("f0c5"),b=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"ce9b3ed6",null,!1,a["a"],r);t["default"]=b.exports},"39cc":function(e,t,i){e.exports=i.p+"static/img/m3.40e141a6.png"},"3bfa":function(e,t,i){var a=i("9511");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("69eaf2b9",a,!0,{sourceMap:!1,shadowMode:!1})},"3fb5":function(e,t,i){"use strict";var a=i("3bfa"),n=i.n(a);n.a},"57b8":function(e,t,i){e.exports=i.p+"static/img/m2.6cadf021.png"},7824:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{}},props:{title:{type:String,default:""},isBack:{type:[Boolean,String],default:!0},isBg:{type:[Boolean,String],default:!1},isSlot:{type:[Boolean,String],default:!1}},computed:{i18n:function(){return this.$t("index")}},methods:{goBack:function(){uni.navigateBack()}}};t.default=a},"935b":function(e,t,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("9617")),o={data:function(){return{active:!0,miningList:[],showBuy:!1,id:"",paypass:""}},components:{HeaderBar:n.default},onLoad:function(){this.getData()},methods:{getData:function(){var e=this;this.uniRequest({url:"combo",method:"GET"}).then((function(t){e.miningList=t.result}))},gotoPage:function(e,t,i){if(1==i)return!1;uni.navigateTo({url:"miningdetails?id=".concat(e,"&price=").concat(t)})}},computed:{i18n:function(){return this.$t("index")}}};t.default=o},"93f4":function(e,t,i){e.exports=i.p+"static/img/m1.b6c2d62b.png"},"945b":function(e,t,i){e.exports=i.p+"static/img/m4.930a2e86.png"},9511:function(e,t,i){var a=i("24fb"),n=i("1de5"),o=i("c783"),r=i("269a");t=a(!1);var d=n(o),b=n(r);t.push([e.i,'@charset "UTF-8";\n/* Body设置 */\nuni-page-body[data-v-5b93cb1e]{min-height:100vh;padding-top:%?128?%;box-sizing:border-box}\nuni-image[data-v-5b93cb1e]{-webkit-flex-shrink:0;flex-shrink:0}\n/* 容器设置 */.container[data-v-5b93cb1e]{padding:%?30?%}.flex[data-v-5b93cb1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-center[data-v-5b93cb1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flex-between[data-v-5b93cb1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.form-wrap[data-v-5b93cb1e]{background-color:#262733;box-shadow:0 8px 8px 0 rgba(0,0,0,.05)}.form-wrap-top[data-v-5b93cb1e]{height:%?148?%;background:url(/static/images/icon19.png) bottom repeat-x;position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?%}.form-wrap-top[data-v-5b93cb1e]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;left:%?-20?%;bottom:%?-20?%}.form-wrap-top[data-v-5b93cb1e]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;right:%?-20?%;bottom:%?-20?%}.form-wrap-top .left[data-v-5b93cb1e]{color:#c4c4c9;font-size:%?28?%}.form-wrap-top .right[data-v-5b93cb1e]{color:#ffa404;font-size:%?56?%}.form-wrap-bot[data-v-5b93cb1e]{padding:%?50?% %?30?% %?40?%;position:relative;overflow:hidden}.form-wrap-bot[data-v-5b93cb1e]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;left:%?-20?%}.form-wrap-bot[data-v-5b93cb1e]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;right:%?-20?%}\n/* form设置 */.form-label[data-v-5b93cb1e]{font-size:%?28?%;color:#fff;margin-bottom:%?20?%}.form-item[data-v-5b93cb1e]{margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.form-item uni-input[data-v-5b93cb1e]{height:%?92?%;line-height:%?92?%;background:none;border-radius:%?8?%;border:%?1?% solid #999;padding:0 %?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#fff}.form-item .input-placeholder[data-v-5b93cb1e]{color:#c5c6ca;font-size:%?28?%}.form-item uni-label[data-v-5b93cb1e]{color:#c4c4c9;font-size:%?28?%;margin-right:%?20?%}.form-item .password[data-v-5b93cb1e]{width:%?60?%;height:%?60?%;background:url(/static/images/icon16.png) no-repeat;background-size:contain;position:absolute;top:%?20?%;right:%?20?%}.form-item .password.active[data-v-5b93cb1e]{background:url(/static/images/icon16_1.png) no-repeat;background-size:contain}.form-item .label-yzm[data-v-5b93cb1e]{height:%?100?%;line-height:%?100?%;position:absolute;right:%?20?%;font-size:%?28?%;color:#ffa404}.form-item .yzm[data-v-5b93cb1e]{padding-right:%?170?%}.form-submit-wrap[data-v-5b93cb1e]{margin-top:%?40?%}.form-submit[data-v-5b93cb1e]{height:%?92?%;line-height:%?92?%;font-size:%?32?%;color:#262733;text-align:center;border-radius:%?8?%}\n/* 线性渐变 */.gradient-blue[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#93d8fe,#5ab0fc);background:linear-gradient(135deg,#93d8fe,#5ab0fc);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-green[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);background:linear-gradient(135deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-violet[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#87bdfa,#8c2fee);background:linear-gradient(135deg,#87bdfa,#8c2fee);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-purple[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#a59bfb,#6c62f5);background:linear-gradient(135deg,#a59bfb,#6c62f5);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-pink[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#fed2e1,#fca6bf);background:linear-gradient(135deg,#fed2e1,#fca6bf);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-yellow[data-v-5b93cb1e]{background:-webkit-linear-gradient(315deg,#ffd10a,#ffa404);background:linear-gradient(135deg,#ffd10a,#ffa404);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-red[data-v-5b93cb1e]{background-color:#d8575a}\n/* 字体设置 */\n/* 颜色设置 */.topbar[data-v-5b93cb1e]{padding-top:%?40?%;background-color:#191a23;position:fixed;top:0;left:0;width:100%;height:%?128?%;box-sizing:border-box;z-index:990}.topbar.bgclass[data-v-5b93cb1e]{background:url('+d+") 50% no-repeat;background-size:contain}.topbar .topbar-wrap[data-v-5b93cb1e]{padding:0 %?20?%;height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative}.topbar .topbar-wrap .back-btn[data-v-5b93cb1e]{width:%?52?%;height:%?48?%;background:url("+b+") 50% no-repeat;background-size:contain}.topbar .topbar-wrap .title[data-v-5b93cb1e]{text-align:center;color:#fff;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.topbar .topbar-wrap .right[data-v-5b93cb1e]{width:%?52?%;height:%?48?%}.topbar .topbar-wrap .isslot[data-v-5b93cb1e]{position:absolute;font-size:%?28?%;color:#ffa404;right:%?30?%}",""]),e.exports=t},9617:function(e,t,i){"use strict";i.r(t);var a=i("9715"),n=i("a4b1");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("3fb5");var r,d=i("f0c5"),b=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"5b93cb1e",null,!1,a["a"],r);t["default"]=b.exports},9715:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"topbar",class:{bgclass:e.isBg}},[i("v-uni-view",{staticClass:"topbar-wrap"},[e.isBack?i("v-uni-view",{staticClass:"back-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack.apply(void 0,arguments)}}}):e._e(),i("v-uni-view",{staticClass:"title"},[e._v(e._s(e.title))]),e.isBack?i("v-uni-view",{staticClass:"right"}):e._e(),e.isSlot?i("v-uni-view",{staticClass:"isslot"},[e._t("text")],2):e._e()],1),i("v-uni-view",{attrs:{id:"canvas"}})],1)},o=[]},a4b1:function(e,t,i){"use strict";i.r(t);var a=i("7824"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},b339:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAA8ElEQVRYR+3XMQpDIQwG4PiGHqBH6AlK9Sylp+nS0/QQnTuIo1vv4WgROj4IJn9EqK4h+PErhDia/LjJfbSA2hdaCa4E9xJIKV2JyHnvn9qEuP7uPxhjPG3b9qm1tt5HCOHOXaKpdwNzzodSypuILr+LTZHdwIbKOR9LKS8iOlsjRcCRSDFwFFIFHIFUA62REKAlEga0QkKBFkg4EI00Ae4hnXM3yez+TyByFMITROLaV4EC0Tgo0AIHA1rhIEBLnBpojVMBR+DEwFE4EXD6pWn6tbPFPvXirlnCJb3QUScBcD0LyCXE1VeCXEJcffoEv2rhyCmi/1avAAAAAElFTkSuQmCC"},b7a6:function(e,t,i){"use strict";i.r(t);var a=i("935b"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},c783:function(e,t,i){e.exports=i.p+"static/img/top.cd8e3ba7.png"},e412:function(e,t,i){var a=i("24fb"),n=i("1de5"),o=i("b339"),r=i("93f4"),d=i("57b8"),b=i("39cc"),c=i("945b");t=a(!1);var s=n(o),l=n(r),g=n(d),f=n(b),u=n(c);t.push([e.i,'@charset "UTF-8";\n/* Body设置 */\nuni-page-body[data-v-ce9b3ed6]{min-height:100vh;padding-top:%?128?%;box-sizing:border-box}\nuni-image[data-v-ce9b3ed6]{-webkit-flex-shrink:0;flex-shrink:0}\n/* 容器设置 */.container[data-v-ce9b3ed6]{padding:%?30?%}.flex[data-v-ce9b3ed6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-center[data-v-ce9b3ed6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flex-between[data-v-ce9b3ed6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.form-wrap[data-v-ce9b3ed6]{background-color:#262733;box-shadow:0 8px 8px 0 rgba(0,0,0,.05)}.form-wrap-top[data-v-ce9b3ed6]{height:%?148?%;background:url(/static/images/icon19.png) bottom repeat-x;position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?%}.form-wrap-top[data-v-ce9b3ed6]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;left:%?-20?%;bottom:%?-20?%}.form-wrap-top[data-v-ce9b3ed6]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;right:%?-20?%;bottom:%?-20?%}.form-wrap-top .left[data-v-ce9b3ed6]{color:#c4c4c9;font-size:%?28?%}.form-wrap-top .right[data-v-ce9b3ed6]{color:#ffa404;font-size:%?56?%}.form-wrap-bot[data-v-ce9b3ed6]{padding:%?50?% %?30?% %?40?%;position:relative;overflow:hidden}.form-wrap-bot[data-v-ce9b3ed6]::before{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;left:%?-20?%}.form-wrap-bot[data-v-ce9b3ed6]::after{content:"";display:block;width:%?40?%;height:%?40?%;border-radius:50%;background-color:#191a23;position:absolute;top:%?-20?%;right:%?-20?%}\n/* form设置 */.form-label[data-v-ce9b3ed6]{font-size:%?28?%;color:#fff;margin-bottom:%?20?%}.form-item[data-v-ce9b3ed6]{margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.form-item uni-input[data-v-ce9b3ed6]{height:%?92?%;line-height:%?92?%;background:none;border-radius:%?8?%;border:%?1?% solid #999;padding:0 %?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#fff}.form-item .input-placeholder[data-v-ce9b3ed6]{color:#c5c6ca;font-size:%?28?%}.form-item uni-label[data-v-ce9b3ed6]{color:#c4c4c9;font-size:%?28?%;margin-right:%?20?%}.form-item .password[data-v-ce9b3ed6]{width:%?60?%;height:%?60?%;background:url(/static/images/icon16.png) no-repeat;background-size:contain;position:absolute;top:%?20?%;right:%?20?%}.form-item .password.active[data-v-ce9b3ed6]{background:url(/static/images/icon16_1.png) no-repeat;background-size:contain}.form-item .label-yzm[data-v-ce9b3ed6]{height:%?100?%;line-height:%?100?%;position:absolute;right:%?20?%;font-size:%?28?%;color:#ffa404}.form-item .yzm[data-v-ce9b3ed6]{padding-right:%?170?%}.form-submit-wrap[data-v-ce9b3ed6]{margin-top:%?40?%}.form-submit[data-v-ce9b3ed6]{height:%?92?%;line-height:%?92?%;font-size:%?32?%;color:#262733;text-align:center;border-radius:%?8?%}\n/* 线性渐变 */.gradient-blue[data-v-ce9b3ed6]{background:-webkit-linear-gradient(315deg,#93d8fe,#5ab0fc);background:linear-gradient(135deg,#93d8fe,#5ab0fc);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-green[data-v-ce9b3ed6]{background:-webkit-linear-gradient(315deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);background:linear-gradient(135deg,#18f1c2,#0be091 100%,#0adf8f 0,#0be091 0);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-violet[data-v-ce9b3ed6]{background:-webkit-linear-gradient(315deg,#87bdfa,#8c2fee);background:linear-gradient(135deg,#87bdfa,#8c2fee);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-purple[data-v-ce9b3ed6]{background:-webkit-linear-gradient(315deg,#a59bfb,#6c62f5);background:linear-gradient(135deg,#a59bfb,#6c62f5);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-pink[data-v-ce9b3ed6]{background:-webkit-linear-gradient(315deg,#fed2e1,#fca6bf);background:linear-gradient(135deg,#fed2e1,#fca6bf);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-yellow[data-v-ce9b3ed6]{background:-webkit-linear-gradient(315deg,#ffd10a,#ffa404);background:linear-gradient(135deg,#ffd10a,#ffa404);box-shadow:0 %?8?% %?8?% 0 rgba(0,0,0,.1)}.gradient-red[data-v-ce9b3ed6]{background-color:#d8575a}\n/* 字体设置 */\n/* 颜色设置 */.mining .swiper1[data-v-ce9b3ed6]{margin-top:%?40?%}.mining .swiper1 uni-image[data-v-ce9b3ed6]{width:100%;height:100%}.mining .mining-item[data-v-ce9b3ed6]{border-radius:%?8?%;padding:%?24?% %?54?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?24?%;background-color:#34374d}.mining .mining-item.hide[data-v-ce9b3ed6]{position:relative}.mining .mining-item.hide[data-v-ce9b3ed6]::after{content:"暂未开放";display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#ededed;position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.25)}.mining .mining-item .left .text[data-v-ce9b3ed6]{color:#fff}.mining .mining-item .left .text1[data-v-ce9b3ed6]{font-size:%?60?%;color:#ffa404}.mining .mining-item .left .text2[data-v-ce9b3ed6]{font-size:%?32?%;margin-top:%?20?%;background:rgba(0,0,0,.3);padding:%?4?% %?10?%;border-radius:%?34?%}.mining .mining-item .left .text3[data-v-ce9b3ed6]{font-size:%?28?%;margin-top:%?40?%}.mining .mining-item .left .text3 uni-text[data-v-ce9b3ed6]{position:relative}.mining .mining-item .left .text3 uni-text[data-v-ce9b3ed6]::after{content:"";display:block;width:%?40?%;height:%?40?%;background:url('+s+") no-repeat;background-size:contain;position:absolute;right:%?-40?%;top:50%;margin-top:%?-18?%}.mining .mining-item .right[data-v-ce9b3ed6]{width:%?160?%;height:%?230?%}.mining .mining-item .right.right0[data-v-ce9b3ed6]{background:url("+l+") 50% no-repeat;background-size:contain}.mining .mining-item .right.right1[data-v-ce9b3ed6]{background:url("+g+") no-repeat;background-size:contain}.mining .mining-item .right.right2[data-v-ce9b3ed6]{background:url("+f+") no-repeat;background-size:contain}.mining .mining-item .right.right3[data-v-ce9b3ed6]{background:url("+u+") no-repeat;background-size:contain}.mining .modal[data-v-ce9b3ed6]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:998}.mining .modal .modal-content[data-v-ce9b3ed6]{position:absolute;left:%?30?%;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);background-color:#222636;border-radius:%?8?%;padding:%?40?% %?30?%}.mining .modal .modal-content .modal-btn[data-v-ce9b3ed6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?40?%}.mining .modal .modal-content .modal-btn .cancel[data-v-ce9b3ed6]{margin-right:%?40?%}.mining .modal .modal-content .modal-btn .cancel[data-v-ce9b3ed6],\n.mining .modal .modal-content .modal-btn .sure[data-v-ce9b3ed6]{line-height:%?80?%;border-radius:%?8?%;text-align:center;font-size:%?36?%;color:#fff;-webkit-box-flex:1;-webkit-flex:1;flex:1}",""]),e.exports=t}}]);