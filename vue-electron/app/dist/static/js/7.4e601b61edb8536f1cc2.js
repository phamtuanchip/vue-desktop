webpackJsonp([7],{

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scrumboard_vue__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dda94e48_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scrumboard_vue__ = __webpack_require__(968);
function injectStyle (ssrContext) {
  __webpack_require__(952)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scrumboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dda94e48_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scrumboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(953);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(876)("6220ba32", content, true);

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(875)(true);
// imports


// module
exports.push([module.i, "@media screen and (max-width:599px){.container-fluid{padding:0 5px!important}}.scrumBoard ul.drag-inner-list,.scrumBoard ul.drag-list{list-style-type:none;margin:0;padding:0}.scrumBoard .drag-container{max-width:1000px}.scrumBoard .drag-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}@media (max-width:690px){.scrumBoard .drag-list{display:block}}.scrumBoard .drag-column{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0 10px;position:relative;background:rgba(0,0,0,.2);overflow:hidden}@media (max-width:690px){.scrumBoard .drag-column{margin-bottom:30px}}.scrumBoard .drag-column h2{font-size:.8rem;text-transform:uppercase}.scrumBoard .drag-column-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px}.scrumBoard .drag-inner-list{min-height:50px;color:#fff}.scrumBoard .drag-item{padding:10px;margin:10px;height:100px;background:rgba(0,0,0,.4);-webkit-transition:all .3s cubic-bezier(.23,1,.32,1);transition:all .3s cubic-bezier(.23,1,.32,1)}.scrumBoard .drag-item.is-moving{-webkit-transform:scale(1);transform:scale(1);background:#f1f1f1}.scrumBoard .drag-header-more{cursor:pointer}.scrumBoard .drag-options{position:absolute;top:44px;left:0;width:100%;height:100%;padding:10px;-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0;-webkit-transition:all .3s cubic-bezier(.23,1,.32,1);transition:all .3s cubic-bezier(.23,1,.32,1)}.scrumBoard .drag-options.active{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.scrumBoard .drag-options-label{display:block;margin:0 0 5px}.scrumBoard .drag-options-label input{opacity:.6}.scrumBoard .drag-options-label span{display:inline-block;font-size:.9rem;font-weight:400;margin-left:5px}.scrumBoard .gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;list-style-type:none}.scrumBoard .gu-hide{display:none!important}.scrumBoard .gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.scrumBoard .gu-transit{opacity:.2}.scrumBoard .drag-column{background-color:#fff}.scrumBoard .kanban{overflow:auto;height:74vh}.scrumBoard .drag-container{min-width:2500px;margin:20px auto}@media (max-width:690px){.scrumBoard .drag-container{min-width:0}}.scrumBoard .drag-inner-list{max-height:61vh;overflow:auto}.scrumBoard .drag-column-header{background:#ff9a54}.scrumBoard .drag-item{background:#f1f1f1;color:#333;height:100%;cursor:pointer}.scrumBoard .formSearch{width:250px}.scrumBoard .nav-link{padding:0;color:#333}.scrumBoard .showDetailScrumboard .el-dialog__header{text-align:left;background-color:#5090c1}.scrumBoard .showDetailScrumboard .el-dialog__header .el-dialog__title{color:#fff}.scrumBoard .showDetailScrumboard .el-dialog__footer{text-align:right}.scrumBoard .showDetailScrumboard .el-dialog__headerbtn .el-dialog__close{color:#fff}.scrumBoard #Filter .modal-dialog{position:fixed;right:0;margin:0;height:100%}.scrumBoard #Filter .modal-dialog .modal-content{height:100%}.scrumBoard .title-box{background-color:#f0f3f5;border:1px solid #c2cfd6}.scrumBoard .selectedWorker{margin:auto}.scrumBoard .drag-column h2{font-size:16px;margin:0;text-transform:none;font-weight:600}", "", {"version":3,"sources":["D:/projects/bos/vuejs/src/components/Scrumboard.vue"],"names":[],"mappings":"AACA,oCACA,iBACI,uBAA4B,CAC/B,CACA,AAID,wDACI,qBAAsB,AACtB,SAAU,AACV,SAAW,CACd,AACD,4BACI,gBAAkB,CAErB,AACD,uBACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CACnC,AACD,yBACA,uBACQ,aAAe,CACtB,CACA,AACD,yBACI,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,cAAe,AACf,kBAAmB,AACnB,0BAA+B,AAC/B,eAAiB,CACpB,AACD,yBACA,yBACQ,kBAAoB,CAC3B,CACA,AACD,4BACM,gBAAkB,AAElB,wBAA0B,CAE/B,AACD,gCACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,YAAc,CACjB,AACD,6BACI,gBAAiB,AACjB,UAAa,CAChB,AACD,uBACI,aAAc,AACd,YAAa,AACb,aAAc,AACd,0BAA+B,AAC/B,qDAA4D,AAC5D,4CAAoD,CACvD,AACD,iCACM,2BAA4B,AACpB,mBAAoB,AAC5B,kBAAoB,CACzB,AACD,8BACI,cAAgB,CACnB,AACD,0BACI,kBAAmB,AACnB,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,aAAc,AACd,mCAAoC,AAC5B,2BAA4B,AACpC,UAAW,AACX,qDAA4D,AAC5D,4CAAoD,CACvD,AACD,iCACM,gCAAiC,AACzB,wBAAyB,AACjC,SAAW,CAChB,AACD,gCACM,cAAe,AACf,cAAkB,CACvB,AACD,sCACQ,UAAa,CACpB,AACD,qCACQ,qBAAsB,AACtB,gBAAkB,AAClB,gBAAiB,AACjB,eAAiB,CACxB,AACD,uBACI,yBAA2B,AAC3B,mBAAqB,AACrB,uBAAyB,AACzB,WAAa,AACb,oBAAsB,CACzB,AACD,qBACI,sBAAyB,CAC5B,AACD,6BACI,mCAAqC,AACrC,gCAAkC,AAClC,+BAAiC,AACjC,0BAA6B,CAChC,AACD,wBACI,UAAa,CAChB,AACD,yBACI,qBAAuB,CAC1B,AACD,oBACI,cAAe,AACf,WAAa,CAChB,AACD,4BACI,iBAAkB,AAClB,gBAAkB,CACrB,AACD,yBACA,4BACQ,WAAe,CACtB,CACA,AACD,6BACI,gBAAiB,AACjB,aAAe,CAClB,AACD,gCACI,kBAAoB,CACvB,AACD,uBACI,mBAAoB,AACpB,WAAY,AACZ,YAAa,AACb,cAAgB,CACnB,AACD,wBACI,WAAa,CAChB,AACD,sBACI,UAAa,AACb,UAAY,CACf,AACD,qDACI,gBAAiB,AACjB,wBAA0B,CAC7B,AACD,uEACM,UAAY,CACjB,AACD,qDACI,gBAAkB,CACrB,AACD,0EACI,UAAY,CACf,AACD,kCACI,eAAgB,AAChB,QAAW,AACX,SAAY,AACZ,WAAa,CAChB,AACD,iDACM,WAAa,CAClB,AACD,uBACI,yBAA0B,AAC1B,wBAA0B,CAC7B,AACD,4BACI,WAAa,CAChB,AACD,4BACI,eAAgB,AAChB,SAAU,AACV,oBAAqB,AACrB,eAAiB,CACpB","file":"Scrumboard.vue","sourcesContent":["\n@media screen and (max-width: 599px) {\n.container-fluid {\n    padding: 0px 5px !important;\n}\n}\n.scrumBoard {\n  /* Dragula CSS  */\n}\n.scrumBoard ul.drag-list, .scrumBoard ul.drag-inner-list {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n.scrumBoard .drag-container {\n    max-width: 1000px;\n    margin: 20px auto;\n}\n.scrumBoard .drag-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n@media (max-width: 690px) {\n.scrumBoard .drag-list {\n        display: block;\n}\n}\n.scrumBoard .drag-column {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 0 10px;\n    position: relative;\n    background: rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n}\n@media (max-width: 690px) {\n.scrumBoard .drag-column {\n        margin-bottom: 30px;\n}\n}\n.scrumBoard .drag-column h2 {\n      font-size: 0.8rem;\n      margin: 0;\n      text-transform: uppercase;\n      font-weight: 600;\n}\n.scrumBoard .drag-column-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 10px;\n}\n.scrumBoard .drag-inner-list {\n    min-height: 50px;\n    color: white;\n}\n.scrumBoard .drag-item {\n    padding: 10px;\n    margin: 10px;\n    height: 100px;\n    background: rgba(0, 0, 0, 0.4);\n    -webkit-transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.scrumBoard .drag-item.is-moving {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      background: #f1f1f1;\n}\n.scrumBoard .drag-header-more {\n    cursor: pointer;\n}\n.scrumBoard .drag-options {\n    position: absolute;\n    top: 44px;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 10px;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n    -webkit-transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.scrumBoard .drag-options.active {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n}\n.scrumBoard .drag-options-label {\n      display: block;\n      margin: 0 0 5px 0;\n}\n.scrumBoard .drag-options-label input {\n        opacity: 0.6;\n}\n.scrumBoard .drag-options-label span {\n        display: inline-block;\n        font-size: 0.9rem;\n        font-weight: 400;\n        margin-left: 5px;\n}\n.scrumBoard .gu-mirror {\n    position: fixed !important;\n    margin: 0 !important;\n    z-index: 9999 !important;\n    opacity: 0.8;\n    list-style-type: none;\n}\n.scrumBoard .gu-hide {\n    display: none !important;\n}\n.scrumBoard .gu-unselectable {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important;\n}\n.scrumBoard .gu-transit {\n    opacity: 0.2;\n}\n.scrumBoard .drag-column {\n    background-color: #fff;\n}\n.scrumBoard .kanban {\n    overflow: auto;\n    height: 74vh;\n}\n.scrumBoard .drag-container {\n    min-width: 2500px;\n    margin: 20px auto;\n}\n@media (max-width: 690px) {\n.scrumBoard .drag-container {\n        min-width: 0px;\n}\n}\n.scrumBoard .drag-inner-list {\n    max-height: 61vh;\n    overflow: auto;\n}\n.scrumBoard .drag-column-header {\n    background: #ff9a54;\n}\n.scrumBoard .drag-item {\n    background: #f1f1f1;\n    color: #333;\n    height: 100%;\n    cursor: pointer;\n}\n.scrumBoard .formSearch {\n    width: 250px;\n}\n.scrumBoard .nav-link {\n    padding: 0px;\n    color: #333;\n}\n.scrumBoard .showDetailScrumboard .el-dialog__header {\n    text-align: left;\n    background-color: #5090c1;\n}\n.scrumBoard .showDetailScrumboard .el-dialog__header .el-dialog__title {\n      color: #fff;\n}\n.scrumBoard .showDetailScrumboard .el-dialog__footer {\n    text-align: right;\n}\n.scrumBoard .showDetailScrumboard .el-dialog__headerbtn .el-dialog__close {\n    color: #fff;\n}\n.scrumBoard #Filter .modal-dialog {\n    position: fixed;\n    right: 0px;\n    margin: 0px;\n    height: 100%;\n}\n.scrumBoard #Filter .modal-dialog .modal-content {\n      height: 100%;\n}\n.scrumBoard .title-box {\n    background-color: #f0f3f5;\n    border: 1px solid #c2cfd6;\n}\n.scrumBoard .selectedWorker {\n    margin: auto;\n}\n.scrumBoard .drag-column h2 {\n    font-size: 16px;\n    margin: 0;\n    text-transform: none;\n    font-weight: 600;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_kanban__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_static_ShowTaskDetail__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dynamic_DynamicPage__ = __webpack_require__(38);









__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_kanban__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      stages: [{
        id: 1,
        Name: "Mới",
        StyleObject: {
          "background-color": "#e3b7eb"
        }
      }],
      worker: [],
      project: [],
      manager: [],
      priority: [],
      viewStatus: [],
      department: [],
      dateStart: "",
      dateEnd: "",
      selectedWorker: [],
      form: {
        keyword: "",
        Project: "",
        worker: "",
        manager: "",
        priority: "",
        viewStatus: "",
        startDate: "",
        endDate: "",
        department: "",
        status: ""
      },
      taskLists: [],
      dataS: {},
      dataSearch: {},
      SettingForm: [],
      arrStatus: [],
      categories: []
    };
  },
  created: function created() {
    var _this = this;

    this.bindDataSearch();
    this.loadSetting();

    var requestStatus = {
      RequestClass: "xBase",
      RequestAction: "Request",
      TotalRequests: 1,
      R1_RequestTemplate: "Setting.SearchBase",
      R1_ParentCode: "xSystem.Setting.xTask.Status"
    };
    this.$Utils.post(requestStatus).then(function (statusList) {
      var statusList = _this.$Utils.getDataWithRoot(statusList, "R1.Data.DynamicDS.Setting");
      var arrTemp = [];
      $.each(statusList, function (k, v) {
        arrTemp[v.Id] = v.Name;
      });
      _this.arrStatus = arrTemp;
      _this.stages = $.makeArray($.map(statusList, function (val, i) {
        return {
          id: val.Id,
          Name: val.Name,
          StyleObject: {
            "background-color": val.Color
          }
        };
      }));
    });
  },

  methods: {
    bindDataSearch: function bindDataSearch() {
      var _this2 = this;

      var userRequest = {
        RequestClass: "BPM",
        RequestAction: "SearchUsers",
        TotalRequests: 1,
        StaticFields: "UserId;Username;LoginName;Status",
        ConditionFields: "Status",
        Status: 1
      };
      this.$Utils.post(userRequest).then(function (data) {
        var data = data.Data.UserDS.User;
        _this2.worker = data;
        _this2.manager = data;
      });

      var priorityRequest = {
        RequestClass: "xBase",
        RequestAction: "Request",
        TotalRequests: 1,
        R1_RequestTemplate: "xEdu.TaskPriority",
        R1_Code: "TaskPriority"
      };
      this.$Utils.post(priorityRequest).then(function (data) {
        var pri = data.R1.Data.DocumentDS.Document;
        _this2.priority = pri;
      });

      var viewStatusRequest = {
        RequestClass: "xBase",
        RequestAction: "Request",
        TotalRequests: 1,
        R1_RequestTemplate: "Setting.SearchBaseTree",
        R1_ParentCode: "xSystem.Setting.xTask.StatusDisplay"
      };
      this.$Utils.post(viewStatusRequest).then(function (data) {
        var viewS = data.R1.Data;
        _this2.viewStatus = viewS;
      });

      var projectsRequest = {
        RequestClass: "xBase",
        RequestAction: "Request",
        TotalRequests: 1,
        R1_RequestTemplate: "xDocument_Document.Search",
        R1_RequestDataGroup: "DataGroup.quan-ly-du-an.053gf",
        R1_RequestFields: "Id;Name;ProjectCode;Code;CreatedBy;State;Status;Type",
        R1_Code: "Project",
        R1_Keyword: ""
      };
      this.$Utils.post(projectsRequest).then(function (data) {
        var projects = data.R1.Data.DocumentDS.Document;
        _this2.project = projects;
      });

      var departmentRequest = {
        RequestClass: "xBase",
        RequestAction: "Request",
        TotalRequests: 1,
        R1_GroupType: 1,
        R1_RequestTemplate: "OrgnizationList"
      };
      this.$Utils.post(departmentRequest).then(function (data) {
        var department = data.R1.Data.UserDS.Group;
        _this2.department = department;
      });
    },
    searchData: function searchData() {
      this.dataSearch.keyword = this.form.keyword;
      this.dataSearch.Project = this.form.Project;
      this.dataSearch.worker = this.form.worker;
      this.dataSearch.manager = this.form.manager;
      this.dataSearch.priority = this.form.priority;
      this.dataSearch.viewStatus = this.form.viewStatus;
      this.dataSearch.startDate = this.form.startDate;
      this.dataSearch.endDate = this.form.endDate;
      this.dataSearch.department = this.form.department;
      this.dataSearch.status = this.form.status;
      this.getTask(this.dataSearch);
    },
    resetForm: function resetForm() {
      this.form.keyword = "";
      this.form.Project = [];
      this.form.worker = [];
      this.form.manager = [];
      this.form.priority = [];
      this.form.viewStatus = [];
      this.form.startDate = "";
      this.form.endDate = "";
      this.form.department = [];
      this.form.status = [];
    },
    loadSetting: function loadSetting() {
      var _this3 = this;

      var vm = this;
      var setFilterSetting = false;
      var request = {
        RequestClass: "xBase",
        RequestAction: "Request",
        TotalRequests: 1,
        R1_RequestTemplate: "Setting.SearchBase",
        R1_ParentCode: "xSetting.Project.Form",
        R1_Code: "Form.task.0d1c1"
      };
      vm.$Utils.post(request).then(function (data) {
        var SettingForm = vm.$Utils.getDataWithRoot(data.R1, "Data.DynamicDS.Setting")[0];
        if (vm.$Utils.isEmpty(SettingForm, "Description") && vm.$Lodash.isString(SettingForm.Description)) SettingForm.Description = JSON.parse(SettingForm.Description);

        $.each(SettingForm.Description, function (fData, fKey) {
          SettingForm[fKey] = fData;
        });
        _this3.SettingForm = SettingForm;
      });
    },
    getTask: function getTask(data) {
      var _this4 = this;

      var dateStart = this.$Utils.getDateTimeByKey("WeekStart");
      var dateEnd = this.$Utils.getDateTimeByKey("WeekEnd");
      var selectedWorker = [];
      var sessionId = this.$getItemLocalStorage(this.$localStorageConstant.SessionId);
      if (data) {
        if (data.start) {
          dateStart = this.$Utils.formatDateTime(data.start, "YYYY-MM-DDT00:00:00");
        } else if (data.startDate) {
          dateStart = this.$Utils.formatDateTime(data.startDate, "YYYY-MM-DDT00:00:00");
        }
        if (data.end) {
          dateEnd = this.$Utils.formatDateTime(data.end, "YYYY-MM-DDT23:59:59");
        } else if (data.endDate) {
          dateEnd = this.$Utils.formatDateTime(data.endDate, "YYYY-MM-DDT23:59:59");
        }
        if (data.selectedWorker) {
          selectedWorker = data.selectedWorker;
        }
      }
      var request = this.$Lodash.cloneDeep(this.$singleRequest);
      request.RequestClass = "xBase";
      request.RequestAction = "Request";
      request.TotalRequests = 1;
      request.R1_RequestTemplate = "AG_Task_Task.Search";
      request.R1_RequestDataGroup = "DataGroup.danh-sach-cong-viec.04b66";
      request.R1_RequestFields = "Id;Name;Index;TotalComment;PlanStartDate;Deadline;Status;Worker;WorkerName;PlanManHour;RemainingManHour;";
      request.R1_GroupType = 1;
      request.R1_PlanStartDateStartValue = this.dateStart;
      request.R1_PlanStartDateEndValue = this.dateEnd;
      request.R1_Worker = this.selectedWorker.join(";");
      request.R1_AssignedUser = sessionId;
      if (data) {
        if (data.keyword && data.keyword != "") {
          request.R1_Keyword = data.keyword;
        }
        if (data.Project && data.Project.length > 0) {
          request.R1_VersionProject = data.Project.join(";");
        }
        if (data.worker && data.worker.length > 0) {
          request.R1_Worker = data.worker.join(";");
        }
        if (data.manager && data.manager.length > 0) {
          request.R1_Manager = data.manager.join(";");
        }
        if (data.priority && data.priority.length > 0) {
          request.R1_PriorityId = data.priority.join(";");
        }
        if (data.viewStatus && data.viewStatus.length > 0) {
          request.R1_StatusDisplay = data.viewStatus.join(";");
        }
        if (data.categories && data.categories.length > 0) {
          request.R1_Categories = data.categories;
        }
        if (data.department && data.department.length > 0) {
          request.R1_Project = data.department.join(";");
        }
        if (data.status && data.status.length > 0) {
          request.R1_Status = data.status.join(";");
        }
      }
      this.$Utils.postCheckResult(request).then(function (taskdata) {
        var taskList = _this4.$Utils.getDataWithRoot(taskdata, "R1.Data.TasksDS.Task");
        _this4.taskLists = $.makeArray($.map(taskList, function (val, i) {
          return {
            id: val.Id,
            Index: val.Index,
            status: val.Status,
            title: val.Name,
            workerName: val.WorkerName,
            dateStart: __WEBPACK_IMPORTED_MODULE_1_vue__["default"].moment(val.PlanStartDate).format("DD/MM/YYYY hh:mm"),
            dateEnd: __WEBPACK_IMPORTED_MODULE_1_vue__["default"].moment(val.Deadline).format("DD/MM/YYYY hh:mm"),
            level: val.PriorityIdName,
            task: val,
            plan: val.PlanManHour,
            real: val.RemainingManHour,
            totalCmt: val.TotalComment
          };
        }));
      });
    },
    updateBlock: function updateBlock(id, status) {
      var _this5 = this;

      var ctrl = this;
      $.each(this.taskLists, function (k, v) {
        var arrChanged = [];
        var obj = {};
        var obj2 = {};
        if (v.id == id) {
          obj.ColumnCaption = "Trạng thái";
          obj.ColumnName = "Status";
          obj.NewDisplayValue = ctrl.arrStatus[status];
          obj.NewValue = status;
          obj.OldDisplayValue = ctrl.arrStatus[v.status];
          obj.OldValue = v.status;
          arrChanged.push(obj);
          obj2.ColumnCaption = "Trạng thái";
          obj2.ColumnName = "StatusName";
          obj2.NewDisplayValue = ctrl.arrStatus[status];
          obj2.NewValue = status;
          obj2.OldDisplayValue = ctrl.arrStatus[v.status];
          obj2.OldValue = v.status;
          arrChanged.push(obj2);
          var request = ctrl.$Lodash.cloneDeep(ctrl.$singleRequest);
          request.R1_RequestTemplate = "AG_Task_Task.Update";
          request.R1_RequestDataGroup = "DataGroup.danh-sach-cong-viec.04b66";
          request.R1_RequestFields = "Id;Status;StatusName;FormSetting;Changed";
          request.R1_Id = id;
          request.R1_Status = status;
          request.R1_StatusName = ctrl.arrStatus[status];
          request.R1_FormSetting = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(ctrl.SettingForm);
          request.R1_Changed = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(arrChanged);
          ctrl.$Utils.post(request).then(function (data) {
            var request = _this5.$Lodash.cloneDeep(_this5.$singleRequest);
            request.RequestClass = "xBase";
            request.RequestAction = "Request";
            request.TotalRequests = 1;
            request.R1_RequestTemplate = "AG_Task_Task.Search";
            request.R1_RequestDataGroup = "DataGroup.danh-sach-cong-viec.04b66";
            request.R1_RequestFields = 'Id;Name;Index;ActualStartDate;ActualFinishDate;PlanStartDate;Deadline;StatusName;WorkerName;' + 'ManagerName;PlanManHour;RemainingManHour;RestTime;VersionProject;Action;Categories;CategoryProjectLevel1;' + 'CategoryProjectLevel2;CategoryProjectLevel3;ChosenOne;Code;CreatedBy;GroupRoot;Manager;Milestone;' + 'ModifiedBy;PriorityId;Project;ProjectType;Quality;Status;TaskQualityResult;TaskRequest;TaskResult;' + 'TaskState;TotalComment;TotalDownload;Type;Version;Worker;TagName;StatusDisplayName;SeverityName;' + 'VersionProjectName;CategoriesLevel1;CategoriesLevel2;CategoriesLevel3;CategoriesLevel4;TargetsLevel1;' + 'TargetsLevel2;TargetsLevel3;TargetsLevel4;TargetsName;ProjectCategoriesLevel1;ProjectCategoriesName;' + 'ProjectCategoriesLevel2;ProjectCategoriesLevel3;';
            request.R1_Id = id;
            ctrl.$Utils.postCheckResult(request).then(function (data) {
              data = _this5.$Utils.getDataWithRoot(data.R1, 'Data.TasksDS.Task');
              var dataToPass = {
                "url": 'task-report-page',
                "RootData": 'AG_Task_Task',
                "DataSource": 'Form.task.0d1c1',
                "DataGroup": 'DataGroup.danh-sach-cong-viec.04b66',
                "ElementType": "Popup",
                "ModuleCode": 'Form.task.0d1c1',
                "parentSetting": {
                  "object": data[0],
                  "set": {
                    "ElementType": "Popup",
                    "GetFullData": "true"
                  },
                  "isCall": true,
                  "loadScrumboard": true,
                  "loadCalendar": true
                },
                "ModuleType": "Form"
              };
              _this5.$hub.$emit("set-modal-data", "Chỉnh sửa công việc", "100%", true, "center", __WEBPACK_IMPORTED_MODULE_4__components_dynamic_DynamicPage__["default"], true, '', {
                Template: 'Modal',
                Module: [dataToPass]
              }, false);
            });
          });
        }
      });
    },
    showDetailScrum: function showDetailScrum(item, flag) {
      if (flag) {
        this.$set(item.task, 'activeName', flag);
        this.$hub.$emit("set-modal-data", 'Chi tiết công việc', "60%", true, "center", __WEBPACK_IMPORTED_MODULE_3__components_static_ShowTaskDetail__["a" /* default */], true, "", item.task);
      } else {
        this.$hub.$emit("set-modal-data", 'Chi tiết công việc', "60%", true, "center", __WEBPACK_IMPORTED_MODULE_3__components_static_ShowTaskDetail__["a" /* default */], true, "", item.task);
      }
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    if (this.$rootScope.dateFilter && this.$rootScope.dateFilter.length > 2) {
      this.dateStart = __WEBPACK_IMPORTED_MODULE_1_vue__["default"].moment(this.$rootScope.dateFilter[0]).format('YYYY-MM-DD') + 'T00:00:00';
      this.dateEnd = __WEBPACK_IMPORTED_MODULE_1_vue__["default"].moment(this.$rootScope.dateFilter[1]).format('YYYY-MM-DD') + 'T23:59:59';
    }
    if (this.$rootScope.selectedWorkerId) {
      this.selectedWorker = this.$rootScope.selectedWorkerId;
    }
    this.getTask();

    this.$hub.$on("datePicked", function (data) {
      _this6.dataS.start = data[0];
      _this6.dataS.end = data[1];
      _this6.dateStart = __WEBPACK_IMPORTED_MODULE_1_vue__["default"].moment(data[0]).format('YYYY-MM-DD') + 'T00:00:00';
      _this6.dateEnd = __WEBPACK_IMPORTED_MODULE_1_vue__["default"].moment(data[1]).format('YYYY-MM-DD') + 'T23:59:59';

      _this6.getTask();
    });
    this.$hub.$on("loadScrumboard", function (data) {
      _this6.searchData();
    });
    this.$hub.$on("workerPicked", function (data) {
      _this6.selectedWorker = data;
      _this6.getTask();
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Kanban__ = __webpack_require__(956);


/* harmony default export */ __webpack_exports__["a"] = ({
  install(vue) {
    vue.component('kanban-board', __WEBPACK_IMPORTED_MODULE_0__components_Kanban__["a" /* default */]);
  },
});


/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_Kanban_vue__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5bdd36db_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_Kanban_vue__ = __webpack_require__(967);
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_Kanban_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5bdd36db_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_Kanban_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragula__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dragula__);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'KanbanBoard',

  props: {
    stages: {},
    blocks: {}
  },

  computed: {
    localBlocks: function localBlocks() {
      return this.blocks;
    }
  },

  methods: {
    getBlocks: function getBlocks(status) {
      return this.localBlocks.filter(function (block) {
        return block.status === status;
      });
    }
  },

  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0_dragula___default()(this.$refs.list).on('drag', function (el) {
      el.classList.add('is-moving');
    }).on('drop', function (block, list) {
      _this.$emit('update-block', block.dataset.blockId, list.dataset.status);
    }).on('dragend', function (el) {
      el.classList.remove('is-moving');

      window.setTimeout(function () {
        el.classList.add('is-moved');
        window.setTimeout(function () {
          el.classList.remove('is-moved');
        }, 600);
      }, 100);
    });
  }
});

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var emitter = __webpack_require__(959);
var crossvent = __webpack_require__(963);
var classes = __webpack_require__(966);
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__(960);
var debounce = __webpack_require__(961);

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};


/***/ }),

/***/ 960:
/***/ (function(module, exports) {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__(962);

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(101).setImmediate))

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var customEvent = __webpack_require__(964);
var eventmap = __webpack_require__(965);
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"drag-container"},[_c('ul',{staticClass:"drag-list"},_vm._l((_vm.stages),function(stage){return _c('li',{staticClass:"drag-column",class:( _obj = {}, _obj['drag-column-' + stage] = true, _obj )},[_c('span',{staticClass:"drag-column-header",style:(stage.StyleObject)},[_c('h2',[_vm._v(_vm._s(stage.Name))])]),_vm._v(" "),_c('div',{staticClass:"drag-options"}),_vm._v(" "),_c('ul',{ref:"list",refInFor:true,staticClass:"drag-inner-list",attrs:{"data-status":stage.id}},_vm._l((_vm.getBlocks(stage.id)),function(block){return _c('li',{key:block.id,staticClass:"drag-item",attrs:{"data-block-id":block.id}},[_vm._t(block.id,[_c('strong',[_vm._v(_vm._s(block.status))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(block.id))])])],2)}))])
var _obj;}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scrumBoard"},[_c('div',{staticClass:"card-header p-0"},[_c('div',{},[_c('div',{staticClass:"row"},[_vm._m(0,false,false),_vm._v(" "),_c('div',{staticClass:"col text-right pr-0"},[_c('div',{staticClass:"row m-0"},[_c('div',{staticClass:"col p-0"},[_c('button',{directives:[{name:"b-modal",rawName:"v-b-modal.Filter",modifiers:{"Filter":true}}],staticClass:"btn btn-link"},[_c('i',{staticClass:"fa fa-filter fa-lg pr-1"})])])])]),_vm._v(" "),_c('b-modal',{ref:"myModalRef",staticClass:"text-primary",attrs:{"id":"Filter","title":"Bộ lọc","header-bg-variant":"primary","hide-footer":""}},[[_c('div',{staticClass:"formSearch"},[_c('el-form',{ref:"form",staticClass:"demo-ruleForm",attrs:{"model":_vm.form,"label-width":"120px"}},[_c('div',{staticClass:"text-center"},[_c('button',{staticClass:"btn btn-secondary bg-white mr-2",on:{"click":_vm.searchData}},[_vm._v("Tìm kiếm")]),_vm._v(" "),_c('button',{staticClass:"btn btn-secondary bg-white",on:{"click":_vm.resetForm}},[_vm._v("Xóa trắng")])]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"text","placeholder":"Nhập từ khóa tìm kiếm"},model:{value:(_vm.form.keyword),callback:function ($$v) {_vm.$set(_vm.form, "keyword", $$v)},expression:"form.keyword"}}),_vm._v(" "),_c('div',{staticClass:"col-12 py-2 px-0"},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"multiple":"","placeholder":"Dự án"},model:{value:(_vm.form.Project),callback:function ($$v) {_vm.$set(_vm.form, "Project", $$v)},expression:"form.Project"}},_vm._l((_vm.project),function(item){return _c('el-option',{key:item.Id,attrs:{"label":item.Name,"value":item.Id}})}))],1),_vm._v(" "),_c('div',{staticClass:"col-12 py-2 px-0"},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"multiple":"","placeholder":"Nhân sự thực hiện"},model:{value:(_vm.form.worker),callback:function ($$v) {_vm.$set(_vm.form, "worker", $$v)},expression:"form.worker"}},_vm._l((_vm.worker),function(item){return _c('el-option',{key:item.UserId,attrs:{"label":item.Username,"value":item.UserId}})}))],1),_vm._v(" "),_c('div',{staticClass:"col-12 py-2 px-0"},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"multiple":"","placeholder":"Quản lí"},model:{value:(_vm.form.manager),callback:function ($$v) {_vm.$set(_vm.form, "manager", $$v)},expression:"form.manager"}},_vm._l((_vm.manager),function(item){return _c('el-option',{key:item.UserId,attrs:{"label":item.Username,"value":item.UserId}})}))],1),_vm._v(" "),_c('div',{staticClass:"col-12 py-2 px-0"},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"multiple":"","placeholder":"Ưu tiên"},model:{value:(_vm.form.priority),callback:function ($$v) {_vm.$set(_vm.form, "priority", $$v)},expression:"form.priority"}},_vm._l((_vm.priority),function(item){return _c('el-option',{key:item.Id,attrs:{"label":item.Name,"value":item.Id}})}))],1),_vm._v(" "),_c('div',{staticClass:"col-12 py-2 px-0"},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"multiple":"","placeholder":"Xem trạng thái"},model:{value:(_vm.form.viewStatus),callback:function ($$v) {_vm.$set(_vm.form, "viewStatus", $$v)},expression:"form.viewStatus"}},_vm._l((_vm.viewStatus),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.text,"value":item.id}})}))],1),_vm._v(" "),_c('div',{staticClass:"col-12 py-2 px-0"},[_c('el-date-picker',{staticStyle:{"width":"100%"},attrs:{"type":"date","format":"dd-MM-yyyy","placeholder":"Từ ngày bắt đầu"},model:{value:(_vm.form.startDate),callback:function ($$v) {_vm.$set(_vm.form, "startDate", $$v)},expression:"form.startDate"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 py-2 px-0"},[_c('el-date-picker',{staticStyle:{"width":"100%"},attrs:{"type":"date","format":"dd-MM-yyyy","placeholder":"Đến ngày bắt đầu"},model:{value:(_vm.form.endDate),callback:function ($$v) {_vm.$set(_vm.form, "endDate", $$v)},expression:"form.endDate"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 py-2 px-0"},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"multiple":"","placeholder":"Phòng ban"},model:{value:(_vm.form.department),callback:function ($$v) {_vm.$set(_vm.form, "department", $$v)},expression:"form.department"}},_vm._l((_vm.department),function(item){return _c('el-option',{key:item.GroupId,attrs:{"label":item.GroupName,"value":item.GroupId}})}))],1),_vm._v(" "),_c('div',{staticClass:"col-12 py-2 px-0"},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"multiple":"","placeholder":"Trạng thái"},model:{value:(_vm.form.status),callback:function ($$v) {_vm.$set(_vm.form, "status", $$v)},expression:"form.status"}},_vm._l((_vm.stages),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.Name,"value":item.id}})}))],1)],1)],1)]],2)],1)])]),_vm._v(" "),_c('div',{staticClass:"kanban"},[_c('kanban-board',{attrs:{"stages":_vm.stages,"blocks":_vm.taskLists},on:{"update-block":_vm.updateBlock}},_vm._l((_vm.taskLists),function(block){return _c('div',{staticClass:"cardContent",attrs:{"slot":block.id},slot:block.id},[_c('div',{on:{"click":function($event){_vm.showDetailScrum(block, false)}}},[_c('div',{staticClass:"text-primary"},[_vm._v(_vm._s(block.title))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(block.workerName)+" | "+_vm._s(block.level))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(block.dateStart)+" | "+_vm._s(block.dateEnd))]),_vm._v(" "),_c('div',[_vm._v("Ước tính: "+_vm._s(block.plan)+" | Thực tế: "+_vm._s(block.real))]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-6 text-left scrumBoard"},[_c('b-nav-item',{staticClass:"d-md-down-none p-0"},[_c('i',{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])],1),_vm._v(" "),_c('div',{staticClass:"col-6 text-right",on:{"click":function($event){$event.stopPropagation();_vm.showDetailScrum(block, true)}}},[_c('i',{staticClass:"fa fa-comments",attrs:{"aria-hidden":"true"}}),_c('span',[_vm._v(" "+_vm._s(block.totalCmt ? block.totalCmt : 0))])])])])])}))],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h5',{staticClass:"col m-auto"},[_c('i',{staticClass:"fa fa-trello pr-1"}),_c('span',[_vm._v("Bảng")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=7.4e601b61edb8536f1cc2.js.map