webpackJsonp([12],{1004:function(e,t,a){var o=a(1005);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(876)("2b5ea3e4",o,!0)},1005:function(e,t,a){t=e.exports=a(875)(!0),t.push([e.i,".login-page h1{padding-left:80px;background-image:url("+a(1006)+");background-repeat:no-repeat;background-position:0;background-size:70px auto;white-space:nowrap}.login-page .card-body .el-form-item__content .element.style{margin-left:0}","",{version:3,sources:["D:/projects/bos/vuejs/src/views/pages/Login.vue"],names:[],mappings:"AACA,eACE,kBAAmB,AACnB,+CAAsD,AACtD,4BAA6B,AAC7B,sBAAiC,AACjC,0BAA2B,AAC3B,kBAAoB,CACrB,AACD,6DACE,aAAiB,CAClB",file:"Login.vue",sourcesContent:['\n.login-page h1 {\n  padding-left: 80px;\n  background-image: url("../../assets/images/logo.png");\n  background-repeat: no-repeat;\n  background-position: center left;\n  background-size: 70px auto;\n  white-space: nowrap;\n}\n.login-page .card-body .el-form-item__content .element.style {\n  margin-left: 0px;\n}\n'],sourceRoot:""}])},1006:function(e,t){e.exports="../../static/img/logo.9ba9289.png"},1007:function(e,t,a){"use strict";(function(e){var o=a(5),s=a.n(o),r=a(8);t.a={name:"Login",data:function(){return{form:{Username:"",password:"",base:"",remember:!1,authenticated:!1,deviceType:"",registrationId:"",uri:""},registrationId:void 0,myDevice:""}},created:function(){r.a.logout(),this.base=this.$appUri.BaseURL},mounted:function(){this.init()},methods:{checkAccountValidate:function(){this.$rootScope.returnURL?this.$router.go(this.$rootScope.returnURL.state.name,this.$rootScope.returnURL.params):this.$router.push(this.$appUri.BaseRedirect),r.a.checkPassExpire(function(e){e&&this.$rootScope.returnURL})},signIn:function(){var e=this;this.$clearStorage(),this.$rootScope.pageType="signIn",e.viewModel={Formtitle:"Đăng nhập tài khoản",showLogin:!0,showExtension:!0,showChangePass:!1},e.pass={},"isMobileApp"===e.myDevice?e.registerPushNotification():e.login()},registerPushNotification:function(){var e=this,t=this,a={android:{icon:"icon",senderID:"68497599090"},ios:{alert:"true",badge:"true",sound:"true"},windows:{}};this.$cordovaPushV5.initialize(a).then(function(){e.$cordovaPushV5.onNotification(),e.$cordovaPushV5.onError(),!0!==window.device.isVirtual?e.$cordovaPushV5.register().then(function(e){t.registrationId=e,t.login()}):t.login()})},login:function(){var e=this,t=this;return r.a.isEmpty(t.form.Username)&&""!=t.form.Username?r.a.isEmpty(t.form.password)&&""!=t.form.password?"isMobileApp"!=t.myDevice||r.a.isEmpty(t.form.base)&&""!=t.form.base?(r.a.isEmpty(t.form.base)&&""!=t.form.base&&(-1==t.form.base.toLowerCase().indexOf("http")?(this.$appUri.BaseURL="http://"+t.form.base+"/",this.$appUri.BaseUri="http://"+t.form.base+"/xRequest.ashx",this.form.uri=this.$appUri.BaseUri):(this.$appUri.BaseURL=t.form.base+"/",this.$appUri.BaseUri=t.form.base+"/xRequest.ashx",this.form.uri=this.$appUri.BaseUri),t.registrationId&&(t.form.registrationId=t.registrationId),"isMobileApp"==t.myDevice&&(t.form.deviceId=window.device.uuid),"isMobileApp"==t.myDevice&&this.$isMobile.Android()?t.form.deviceType="Android":"isMobileApp"==t.myDevice&&this.$isMobile.iOS()?t.form.deviceType="Ios":t.form.deviceType="Web"),void r.a.login(t.form,function(a){if(r.a.isEmpty(a,"success")&&0!=a.success){e.$setItemLocalStorage(e.$localStorageConstant.StoredURI,e.$appUri.BaseUri),r.a.isEmpty(t.form.remember)&&(e.$setItemLocalStorage(e.$localStorageConstant.SaveStatus,t.form.remember),r.a.isEmpty(t.form.base)&&"isMobileApp"==t.myDevice&&e.$setItemLocalStorage(e.$localStorageConstant.AppConfig,t.form.base),r.a.isEmpty(t.form.Username)&&e.$setItemLocalStorage(e.$localStorageConstant.LoginName,t.form.Username),r.a.isEmpty(t.form.password)&&"isMobileApp"==t.myDevice&&e.$setItemLocalStorage(e.$localStorageConstant.Password,t.form.password)),"isMobileApp"==t.myDevice&&e.$setItemLocalStorage(e.$localStorageConstant.appUri,s()(e.$appUri));var o=e.$Lodash.cloneDeep(t.form);o.Data=a.Data,e.$setItemLocalStorage(e.$localStorageConstant.SessionId,a.Data);var i=a.Data;if(r.a.isEmpty(i)){var n={},c={},l={RequestClass:"xBase",RequestAction:"Request",TotalRequests:1,R1_RequestTemplate:"Setting.SearchBase",R1_ParentCode:"xSystem.Setting.xTask.Status",SessionId:i},p={RequestClass:"xBase",RequestAction:"Request",TotalRequests:1,R1_RequestTemplate:"xEdu.TaskPriority",R1_Code:"TaskPriority",SessionId:i};r.a.post(l).then(function(t){r.a.getDataWithRoot(t.R1,"Data.DynamicDS.Setting").forEach(function(e){n[e.Id.toUpperCase()]=e.Color}),e.$rootScope.arrStatusColor=n,e.$setItemLocalStorage(e.$localStorageConstant.settingColor,s()(n))}),r.a.post(p).then(function(t){r.a.getDataWithRoot(t.R1,"Data.DocumentDS.Document").forEach(function(e){c[e.Id.toUpperCase()]=e.Lead}),e.$rootScope.arrPriorityColor=c,e.$setItemLocalStorage(e.$localStorageConstant.arrPriorityColor,s()(c))});var u={RequestClass:"xBase",RequestAction:"Request",TotalRequests:3,R1_RequestTemplate:"SettingNew.SearchSetting",R1_IncludedNestedSetParent:!0,R1_Code:"xSetting.Default.AppInfo",R2_RequestTemplate:"SettingNew.SearchSetting",R2_Code:"MODE_PROJECT",R3_RequestTemplate:"SettingNew.SearchSetting",R3_Code:"xSetting.Default.AppInfo.isoWeekday"};r.a.post(u).then(function(t){var a=r.a.getDataWithRoot(t.R1,"Data.DynamicDS.Setting"),o=r.a.getDataWithRoot(t.R2,"Data.DynamicDS.Setting"),i=r.a.getDataWithRoot(t.R3,"Data.DynamicDS.Setting");if(i.length>0&&e.$setItemLocalStorage("firstDayOfWeekCfg",s()(i[0])),r.a.isEmpty(a)){var n={versionName:a[0].Value};e.$rootScope.application=n,e.$setItemLocalStorage(e.$localStorageConstant.Application,s()(n)),e.$rootScope.application=JSON.parse(e.$getItemLocalStorage(e.$localStorageConstant.Application))}else{var n={versionName:"Professional"};e.$rootScope.application=n,e.$setItemLocalStorage(e.$localStorageConstant.Application,s()(n))}if(r.a.isEmpty(o,"0")){var c={mode:o[0].Value};e.$setItemLocalStorage(e.$localStorageConstant.ModeProject,s()(c)),e.$rootScope.modeProject=c}else{var c={mode:""};e.$setItemLocalStorage(e.$localStorageConstant.ModeProject,s()(c)),e.$rootScope.modeProject=c}})}r.a.loadUserInformation(o,function(a){if(r.a.isEmpty(a))if(e.$rootScope.loggedOnUser=a,"isMobileApp"==t.myDevice){var o={RequestClass:"xBase",RequestAction:"Request",TotalRequests:1,R1_RequestTemplate:"SettingNew.SearchSetting",R1_IncludedNestedSetParent:!0,R1_Code:"xSetting.Default.AppInfo"};r.a.post(o).then(function(t){var a=r.a.getDataWithRoot(t.R1,"Data.DynamicDS.Setting");!a||!a[0]||a&&a[0]&&"Enterprise2"!=a[0].Value?(r.a.showMessage("error","Website đang sử dụng phiên bản cũ!"),e.$router.push("/login")):e.$route.query&&e.$route.query.redirect?(r.a.showMessage("success","Đăng nhập thành công!"),e.$router.push(e.$route.query.redirect)):(r.a.showMessage("success","Đăng nhập thành công!"),e.$router.push(e.$appUri.BaseRedirect))})}else r.a.showMessage("success","Đăng nhập thành công!"),e.$route.query&&e.$route.query.redirect?e.$router.push(e.$route.query.redirect):e.$router.push(e.$appUri.BaseRedirect);else r.a.showMessage("error",e.$toastMessage.loginError)})}else r.a.showMessage("error",e.$toastMessage.loginError)})):(r.a.showMessage("error","Nhập đường dẫn trang"),!1):(r.a.showMessage("error","Nhập mật khẩu"),!1):(r.a.showMessage("error","Nhập tên đăng nhập"),!1)},getTemplateHTML:function(){var t=this,a=$q.defer(),o=r.a.updateParamsSingleRequest(this.$Lodash.cloneDeep(singleRequest),{RequestTemplate:"Setting.SearchBase",ParentCode:"xSetting.Default.TemplateHTML"});return r.a.postCheckResult(o).then(function(o){o=r.a.getDataWithRoot(o,"R1.Data.DynamicDS.Setting");var i={};e.each(o,function(e,t){t.Name&&t.Value&&(i[t.Name.toLowerCase()]=r.a.decodeHtmlEntities(t.Value))}),t.$setItemLocalStorage(t.$localStorageConstant.HTMLTemplateCache,s()(i)),a.resolve()}),a.promise},init:function(){var e=this;e.myDevice=this.$myDevice,e.isIOs=this.$isMobile.iOS(),"true"==this.$getItemLocalStorage(this.$localStorageConstant.SaveStatus)&&(e.form.remember=!0),this.$getItemLocalStorage(this.$localStorageConstant.AppConfig)&&(e.form.base=this.$getItemLocalStorage(this.$localStorageConstant.AppConfig)),this.$getItemLocalStorage(this.$localStorageConstant.LoginName)&&(e.form.Username=this.$getItemLocalStorage(this.$localStorageConstant.LoginName)),this.$getItemLocalStorage(this.$localStorageConstant.Password)&&(e.form.password=this.$getItemLocalStorage(this.$localStorageConstant.Password))}}}}).call(t,a(2))},1008:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app flex-row align-items-center login-page",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.signIn(t)}}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-group"},[a("div",{staticClass:"card p-4"},[a("div",{staticClass:"card-body"},[a("el-form",{ref:"user",staticClass:"demo-ruleForm",attrs:{model:e.form}},[a("h1",[e._v("Đăng nhập")]),e._v(" "),a("el-form-item",{attrs:{prop:"Username",rules:[{required:!0,message:"Vui lòng nhập tài khoản"}]}},[a("div",{staticClass:"input-group mb-2"},[a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"icon-user"})]),e._v(" "),a("el-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Tên đăng nhập"},model:{value:e.form.Username,callback:function(t){e.$set(e.form,"Username",t)},expression:"form.Username"}})],1)]),e._v(" "),a("el-form-item",{attrs:{prop:"password",rules:[{required:!0,message:"Vui lòng nhập mật khẩu"}]}},[a("div",{staticClass:"input-group mb-2"},[a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"icon-lock"})]),e._v(" "),a("el-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Mật khẩu"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)]),e._v(" "),"isMobileApp"==e.myDevice?a("el-form-item",{attrs:{prop:"base",rules:[{required:!0,message:"Vui lòng nhập địa chỉ trang"}]}},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"fa fa-globe"})]),e._v(" "),a("el-input",{staticClass:"form-control",attrs:{placeholder:"Địa chỉ trang chủ"},model:{value:e.form.base,callback:function(t){e.$set(e.form,"base",t)},expression:"form.base"}})],1)]):e._e(),e._v(" "),a("el-form-item",{attrs:{prop:"remember"}},[a("el-checkbox",{attrs:{"true-label":"true","false-label":"false"},model:{value:e.form.remember,callback:function(t){e.$set(e.form,"remember",t)},expression:"form.remember"}},[e._v("Lưu thông tin")])],1),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("button",{staticClass:"btn btn-primary px-4",attrs:{type:"button"},on:{click:e.signIn}},[e._v("Đăng nhập")])]),e._v(" "),a("div",{staticClass:"col-6 text-right"},[a("button",{staticClass:"btn btn-link px-0",attrs:{type:"button"}},[a("router-link",{attrs:{to:"pages/reset-pass"}},[e._v("Quên mật khẩu?")])],1)])])],1)],1)])])])])])])},s=[],r={render:o,staticRenderFns:s};t.a=r},887:function(e,t,a){"use strict";function o(e){a(1004)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(1007),r=a(1008),i=a(1),n=o,c=i(s.a,r.a,!1,n,null,null);t.default=c.exports}});
//# sourceMappingURL=12.31ed2c079c1241ba0a0a.js.map