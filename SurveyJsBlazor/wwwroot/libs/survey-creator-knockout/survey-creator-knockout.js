/*!
 * SurveyJS Creator v1.9.116
 * (c) 2015-2023 Devsoft Baltic OÜ - http://surveyjs.io/
 * Github: https://github.com/surveyjs/survey-creator
 * License: https://surveyjs.io/Licenses#SurveyCreator
 */
(function webpackUniversalModuleDefinition(root, factory) {
	root = this || (0, eval)("this");
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"), require("survey-core"), require("survey-creator-core"), require("survey-knockout-ui"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyCreator", ["knockout", "survey-core", "survey-creator-core", "survey-knockout-ui"], factory);
	else if(typeof exports === 'object')
		exports["SurveyCreator"] = factory(require("knockout"), require("survey-core"), require("survey-creator-core"), require("survey-knockout-ui"));
	else
		root["SurveyCreator"] = factory(root["ko"], root["Survey"], root["SurveyCreatorCore"], root["SurveyKnockout"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_knockout__, __WEBPACK_EXTERNAL_MODULE_survey_core__, __WEBPACK_EXTERNAL_MODULE_survey_creator_core__, __WEBPACK_EXTERNAL_MODULE_survey_knockout_ui__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/action-button.html":
/*!********************************!*\
  !*** ./src/action-button.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: data.disabled -->\n<span class=\"svc-action-button svc-action-button--disabled\"\n  data-bind=\"text:data.text, class: data.classes, attr: { title: data.title}\"></span>\n<!-- /ko -->\n<!-- ko ifnot: data.disabled -->\n<span role=\"button\" class=\"svc-action-button\"\n  data-bind=\"text:data.text, click: onClick, key2click, attr: { title: data.title, 'aria-label': data.text }, class: data.classes, css:{'svc-action-button--selected':data.selected}\"></span>\n<!-- /ko -->";

/***/ }),

/***/ "./src/action-button.ts":
/*!******************************!*\
  !*** ./src/action-button.ts ***!
  \******************************/
/*! exports provided: ActionButtonViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonViewModel", function() { return ActionButtonViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./action-button.html */ "./src/action-button.html");
var ActionButtonViewModel = /** @class */ (function () {
    function ActionButtonViewModel(data) {
        var _this = this;
        this.data = data;
        this.onClick = function (_, event) {
            _this.data.click(_this.data, event);
            if (_this.data.allowBubble) {
                return true;
            }
            event.stopPropagation();
            return false;
        };
    }
    return ActionButtonViewModel;
}());

knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-action-button", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new ActionButtonViewModel(params);
        }
    },
    template: template
});


/***/ }),

/***/ "./src/adorners/cell-question-dropdown.html":
/*!**************************************************!*\
  !*** ./src/adorners/cell-question-dropdown.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-question__adorner\">\n  <div class=\"svc-question__content svc-question__content--in-popup\">\n\n    <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } -->\n    <!-- /ko -->\n\n    <div class=\"svc-question__dropdown-choices\">\n      <!-- ko foreach: { data: question.visibleChoices, as: 'item' }  -->\n      <div class=\"svc-question__dropdown-choice\">\n        <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: 'survey-radiogroup-item', data: item } } } -->\n        <!-- /ko -->\n      </div>\n      <!-- /ko -->\n    </div>\n\n  </div>\n</div>";

/***/ }),

/***/ "./src/adorners/cell-question-dropdown.ts":
/*!************************************************!*\
  !*** ./src/adorners/cell-question-dropdown.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/adorners/question.ts");


var template = __webpack_require__(/*! ./cell-question-dropdown.html */ "./src/adorners/cell-question-dropdown.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-cell-dropdown-question", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return Object(_question__WEBPACK_IMPORTED_MODULE_1__["createQuestionViewModel"])(params, componentInfo);
        }
    },
    template: template
});


/***/ }),

/***/ "./src/adorners/cell-question.html":
/*!*****************************************!*\
  !*** ./src/adorners/cell-question.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-question__adorner\">\n  <div class=\"svc-question__content svc-question__content--in-popup\">\n\n    <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } -->\n    <!-- /ko -->\n\n  </div>\n</div>";

/***/ }),

/***/ "./src/adorners/cell-question.ts":
/*!***************************************!*\
  !*** ./src/adorners/cell-question.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/adorners/question.ts");


var template = __webpack_require__(/*! ./cell-question.html */ "./src/adorners/cell-question.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-cell-question", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return Object(_question__WEBPACK_IMPORTED_MODULE_1__["createQuestionViewModel"])(params, componentInfo);
        }
    },
    template: template
});


/***/ }),

/***/ "./src/adorners/image-item-value.html":
/*!********************************************!*\
  !*** ./src/adorners/image-item-value.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  data-bind=\"event: { pointerdown: function(model, event) { return onPointerDown(event); } }, attr: attributes, css: getRootCss()\">\n  <div class=\"svc-image-item-value-wrapper__ghost\" data-bind=\"style: getNewItemStyle()\"></div>\n\n  <div class=\"svc-image-item-value-wrapper__content\">\n    <input type=\"file\" aria-hidden=\"true\" tabindex=\"-1\" class=\"svc-choose-file-input\"\n      data-bind=\"attr: { accept: acceptedTypes }\" />\n\n    <!-- ko ifnot: isNew || isUploading -->\n    <div class=\"svc-image-item-value__item\">\n      <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } -->\n      <!-- /ko -->\n    </div>\n\n    <!-- ko if: isDraggable-->\n    <sv-svg-icon class=\"svc-context-button svc-image-item-value-controls__drag-area-indicator\"\n      data-bind=\"event: { pointerdown: function(model, event) { onPointerDown(event); } }\"\n      params=\"iconName: 'icon-drag-area-indicator', size: 24\">\n    </sv-svg-icon>\n    <!-- /ko -->\n\n    <div class=\"svc-context-container svc-image-item-value-controls\" data-bind=\"event: { pointerdown: blockEvent }\">\n      <!-- ko if: allowRemove && !isUploading -->\n      <sv-svg-icon class=\"svc-context-button\" data-bind=\"click: chooseFile, key2click\"\n        params=\"iconName: 'icon-file', size: 24\"></sv-svg-icon>\n      <sv-svg-icon class=\"svc-context-button svc-context-button--danger\" data-bind=\"click: remove, key2click\"\n        params=\"iconName: 'icon-delete', size: 24\"></sv-svg-icon>\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n\n    <!-- ko if: isNew || isUploading -->\n    <div class=\"svc-image-item-value__item\" data-bind=\"event: { dragover: dragover, drop: drop, dragleave: dragleave }\">\n      <div class=\"sd-imagepicker__item sd-imagepicker__item--inline\">\n        <label class=\"sd-imagepicker__label\">\n          <div data-bind=\"style: getNewItemStyle()\" class=\"sd-imagepicker__image\">\n            <!-- ko if: isUploading -->\n            <div class=\"svc-image-item-value__loading\">\n              <!-- ko component: { name: 'sv-loading-indicator' } -->\n              <!-- /ko -->\n            </div>\n            <!-- /ko -->\n          </div>\n        </label>\n      </div>\n    </div>\n\n    <div class=\"svc-image-item-value-controls\" data-bind=\"event: { pointerdown: blockEvent }\">\n      <!-- ko if: allowAdd && !isUploading -->\n      <sv-svg-icon class=\"svc-context-button svc-image-item-value-controls__add\"\n        data-bind=\"click: chooseNewFile, key2click, clickBubble: false\" params=\"iconName: 'icon-add-lg', size: 24\">\n      </sv-svg-icon>\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n</div>";

/***/ }),

/***/ "./src/adorners/image-item-value.ts":
/*!******************************************!*\
  !*** ./src/adorners/image-item-value.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__);




var template = __webpack_require__(/*! ./image-item-value.html */ "./src/adorners/image-item-value.html");
var KnockoutImageItemValueWrapperViewModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KnockoutImageItemValueWrapperViewModel, _super);
    function KnockoutImageItemValueWrapperViewModel(creator, question, item, templateData, itemsRoot) {
        var _this = _super.call(this, creator, question, item, templateData, itemsRoot) || this;
        _this.question = question;
        _this.item = item;
        _this.templateData = templateData;
        _this.dragleave = function (_, event) {
            _this.onDragLeave(event);
        };
        _this.drop = function (_, event) {
            _this.onDrop(event);
        };
        _this.dragover = function (_, event) {
            _this.onDragOver(event);
        };
        return _this;
    }
    Object.defineProperty(KnockoutImageItemValueWrapperViewModel.prototype, "showDragDropGhostOnTop", {
        get: function () {
            return this.ghostPosition === "top";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KnockoutImageItemValueWrapperViewModel.prototype, "showDragDropGhostOnBottom", {
        get: function () {
            return this.ghostPosition === "bottom";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KnockoutImageItemValueWrapperViewModel.prototype, "attributes", {
        get: function () {
            return this.isDraggable
                ? { "data-sv-drop-target-item-value": this.item.value }
                : null;
        },
        enumerable: false,
        configurable: true
    });
    KnockoutImageItemValueWrapperViewModel.prototype.blockEvent = function (_, event) {
        event.stopPropagation();
    };
    KnockoutImageItemValueWrapperViewModel.prototype.getNewItemStyle = function () {
        var needStyle = !this.getIsNewItemSingle();
        return { width: needStyle ? this.question.renderedImageWidth : undefined, height: needStyle ? this.question.renderedImageHeight : undefined };
    };
    return KnockoutImageItemValueWrapperViewModel;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__["ImageItemValueWrapperViewModel"]));
knockout__WEBPACK_IMPORTED_MODULE_1__["components"].register("svc-image-item-value", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var creator = params.componentData.creator;
            var question = params.componentData.question;
            var item = params.templateData.data;
            var model = new KnockoutImageItemValueWrapperViewModel(creator, question, item, params.templateData, componentInfo.element.nextSibling);
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](model);
            return model;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/adorners/item-value.html":
/*!**************************************!*\
  !*** ./src/adorners/item-value.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-item-value-wrapper\"\n  data-bind=\"event: { pointerdown: function (model, event) { onPointerDown(event); return true; } },attr: attributes, css: { 'svc-item-value--new': isNew, 'svc-item-value--dragging': isDragging, 'svc-item-value--ghost': isDragDropGhost, 'svc-item-value--movedown':isDragDropMoveDown, 'svc-item-value--moveup':isDragDropMoveUp }\">\n  <div class=\"svc-item-value__ghost\"></div>\n  <div class=\"svc-item-value-controls\">\n    <!-- ko if: isDraggable -->\n    <span class=\"svc-item-value-controls__button svc-item-value-controls__drag\">\n      <sv-svg-icon class=\"svc-item-value-controls__drag-icon\"\n        params=\"iconName: 'icon-drag-area-indicator', size: 24, title: dragTooltip\"></sv-svg-icon>\n    </span>\n    <!-- /ko -->\n    <!-- ko if: allowAdd -->\n    <sv-svg-icon class=\"svc-item-value-controls__button svc-item-value-controls__add\"\n      data-bind=\"click: add, key2click, attr: { 'aria-label': tooltip }\"\n      params=\"iconName: 'icon-add_16x16', size: 16, title: tooltip\">\n    </sv-svg-icon>\n    <!-- /ko -->\n    <!-- ko if: allowRemove -->\n    <sv-svg-icon class=\"svc-item-value-controls__button svc-item-value-controls__remove\"\n      data-bind=\"click: remove, key2click, attr: { 'aria-label': tooltip }, event: { blur: koOnFocusOut }\"\n      params=\"iconName: 'icon-remove_16x16', size: 16, title: tooltip\">\n    </sv-svg-icon>\n    <!-- /ko -->\n  </div>\n\n  <div class=\"svc-item-value__item\" data-bind=\"click: select\">\n    <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } -->\n    <!-- /ko -->\n  </div>\n</div>";

/***/ }),

/***/ "./src/adorners/item-value.ts":
/*!************************************!*\
  !*** ./src/adorners/item-value.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__);




var template = __webpack_require__(/*! ./item-value.html */ "./src/adorners/item-value.html");
var KnockoutItemValueWrapperViewModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KnockoutItemValueWrapperViewModel, _super);
    function KnockoutItemValueWrapperViewModel(creator, question, item, templateData) {
        var _this = _super.call(this, creator, question, item) || this;
        _this.question = question;
        _this.item = item;
        _this.templateData = templateData;
        return _this;
    }
    KnockoutItemValueWrapperViewModel.prototype.koOnFocusOut = function (sender, event) {
        this.onFocusOut(event);
    };
    Object.defineProperty(KnockoutItemValueWrapperViewModel.prototype, "attributes", {
        get: function () {
            return this.isDraggable
                ? { "data-sv-drop-target-item-value": this.item.value }
                : null;
        },
        enumerable: false,
        configurable: true
    });
    return KnockoutItemValueWrapperViewModel;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__["ItemValueWrapperViewModel"]));
knockout__WEBPACK_IMPORTED_MODULE_1__["components"].register("svc-item-value", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var creator = params.componentData.creator;
            var question = params.componentData.question;
            var item = params.templateData.data;
            var model = new KnockoutItemValueWrapperViewModel(creator, question, item, params.templateData);
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](model);
            return model;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/adorners/matrix-cell.html":
/*!***************************************!*\
  !*** ./src/adorners/matrix-cell.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-matrix-cell\" tabindex=\"-1\"\n  data-bind=\"click: selectContext, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }\">\n  <div class=\"svc-matrix-cell--selected\" data-bind=\"css: { 'svc-visible': isSelected }\"></div>\n\n  <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } -->\n  <!-- /ko -->\n\n  <!-- ko if: $data.isSupportCellEditor -->\n  <div class=\"svc-matrix-cell__question-controls\">\n    <sv-svg-icon class=\"svc-matrix-cell__question-controls-button\" data-bind=\"click: editQuestion, key2click\"\n      params=\"iconName: 'icon-edit', size: 24\"></sv-svg-icon>\n  </div>\n  <!-- /ko -->\n\n</div>";

/***/ }),

/***/ "./src/adorners/matrix-cell.ts":
/*!*************************************!*\
  !*** ./src/adorners/matrix-cell.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);



var template = __webpack_require__(/*! ./matrix-cell.html */ "./src/adorners/matrix-cell.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-matrix-cell", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var _a;
            var creator = params.componentData.creator;
            var question = params.componentData.question;
            var row = params.componentData.row;
            var column = params.componentData.column;
            var element = params.componentData.element;
            params.templateData["nodes"] = componentInfo.templateNodes;
            var model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__["MatrixCellWrapperViewModel"](creator, params.templateData, question, row, column || ((_a = element.cell) === null || _a === void 0 ? void 0 : _a.column));
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](model);
            return model;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/adorners/panel.html":
/*!*********************************!*\
  !*** ./src/adorners/panel.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-question__adorner\"\n  data-bind=\"css: rootCss(), attr: { 'data-sv-drop-target-survey-element': element.name || null }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }\">\n  <div\n    data-bind=\"click: $data.element.isInteractiveDesignElement ? koSelect : null, key2click, clickBubble: false, css: css()\">\n    <!-- ko if: allowDragging && $data.element.isInteractiveDesignElement -->\n    <div class=\"svc-question__drag-area\" data-bind=\"event: {pointerdown: (model, event)=>{onPointerDown(event)}}\">\n      <!-- ko component: { name: 'sv-svg-icon', params: { css: 'svc-question__drag-element', iconName: 'icon-drag-area-indicator_24x16', size: 24 } } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n\n    <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } -->\n    <!-- /ko -->\n\n    <!-- ko if: koIsEmptyElement() -->\n    <div class=\"svc-panel__placeholder_frame\">\n      <div class=\"svc-panel__placeholder\" data-bind=\"text: placeholderText\"></div>\n      <!-- ko if: showAddQuestionButton -->\n      <div class=\"svc-panel__add-new-question svc-action-button\"\n        data-bind=\"click: addNewQuestion, key2click, clickBubble: false\">\n        <span class=\"svc-text svc-text--normal svc-text--bold\" data-bind=\"text: $data.addNewQuestionText\">\n        </span>\n      </div>\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n\n    <!-- ko if: adornerComponent && $data.element.isInteractiveDesignElement -->\n    <!-- ko component: { name: adornerComponent, params: { model: $data } } -->\n    <!-- /ko -->\n    <!-- /ko -->\n\n    <!-- ko if: !koIsEmptyElement() && showAddQuestionButton -->\n    <div class=\"svc-panel__add-new-question-container\">\n      <div class=\"svc-panel__add-new-question svc-action-button\"\n        data-bind=\"click: addNewQuestion, key2click, clickBubble: false\">\n        <span class=\"svc-text svc-text--normal svc-text--bold\" data-bind=\"text: $data.addNewQuestionText\">\n        </span>\n      </div>\n      <!-- ko with: questionTypeSelectorModel -->\n      <button type=\"button\"\n        data-bind=\"click: action, key2click, clickBubble: false, attr: { title: $data.addNewQuestionText }\"\n        class=\"svc-panel__question-type-selector\">\n        <sv-svg-icon class=\"svc-panel__question-type-selector-icon\" params=\"iconName: iconName, size: 24\"></sv-svg-icon>\n        <sv-popup params=\"model: popupModel\"></sv-popup>\n      </button>\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n\n    <!-- ko if: $data.element.isInteractiveDesignElement -->\n    <div class=\"svc-question__content-actions\">\n      <!-- ko component: { name: 'sv-action-bar', params: { model: actionContainer, handleClick: false } } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n</div>";

/***/ }),

/***/ "./src/adorners/panel.ts":
/*!*******************************!*\
  !*** ./src/adorners/panel.ts ***!
  \*******************************/
/*! exports provided: createPanelViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPanelViewModel", function() { return createPanelViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events */ "./src/events.ts");





var template = __webpack_require__(/*! ./panel.html */ "./src/adorners/panel.html");
function createPanelViewModel(params, componentInfo, model) {
    if (!model) {
        model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_3__["QuestionAdornerViewModel"](params.componentData, params.templateData.data, params.templateData);
    }
    model["koSelect"] = function (model, event) {
        return model.select(model, new _events__WEBPACK_IMPORTED_MODULE_4__["KnockoutMouseEvent"](event));
    };
    model["koIsEmptyElement"] = knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
        if (model.element instanceof survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionHtmlModel"]) {
            return !model.element.locHtml["koRenderedHtml"]();
        }
        return model.isEmptyElement;
    });
    model["adornerComponent"] = undefined;
    new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](model);
    knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
        model.dispose();
    });
    return model;
}
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-panel", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return createPanelViewModel(params, componentInfo);
        }
    },
    template: template
});


/***/ }),

/***/ "./src/adorners/question-carryforward.html":
/*!*************************************************!*\
  !*** ./src/adorners/question-carryforward.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-carry-forward-panel\">\n  <span data-bind=\"text:text\"></span>\n  <span class=\"svc-carry-forward-panel__link\">\n    <!-- ko component: { name: \"svc-action-button\", params: { text: question.name, click: onClick } }-->\n    <!-- /ko -->\n  </span>\n</div>";

/***/ }),

/***/ "./src/adorners/question-carryforward.ts":
/*!***********************************************!*\
  !*** ./src/adorners/question-carryforward.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./question-carryforward.html */ "./src/adorners/question-carryforward.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-question-carryforward", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.createCarryForwardParams();
        }
    },
    template: template
});


/***/ }),

/***/ "./src/adorners/question-dropdown.html":
/*!*********************************************!*\
  !*** ./src/adorners/question-dropdown.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-question__dropdown-choices--wrapper\">\n  <div class=\"svc-question__dropdown-choices\">\n    <!-- ko foreach: { data: getRenderedItems(), as: 'item' }  -->\n    <div data-bind=\"css: $parent.getChoiceCss()\">\n      <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: $parent.itemComponent, data: item } } } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n  <!-- ko if: needToCollapse -->\n  <svc-action-button params=\"text: getButtonText(), click: switchCollapse, allowBubble: true\">\n  </svc-action-button>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/adorners/question-dropdown.ts":
/*!*******************************************!*\
  !*** ./src/adorners/question-dropdown.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question */ "./src/adorners/question.ts");



var template = __webpack_require__(/*! ./question-dropdown.html */ "./src/adorners/question-dropdown.html");
var questionTemplate = __webpack_require__(/*! ./question.html */ "./src/adorners/question.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-dropdown-question", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__["QuestionDropdownAdornerViewModel"](params.componentData, params.templateData.data, params.templateData);
            Object(_question__WEBPACK_IMPORTED_MODULE_2__["createQuestionViewModel"])(params, componentInfo, model);
            model["adornerComponent"] = "svc-dropdown-question-adorner";
            return model;
        }
    },
    template: questionTemplate
});
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-dropdown-question-adorner", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.model;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/adorners/question-image.html":
/*!******************************************!*\
  !*** ./src/adorners/question-image.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: !isUploading && !$data.koIsEmptyImageLink() -->\n<div class=\"svc-image-question-controls\">\n  <!-- ko if: (allowEdit) -->\n  <input type=\"file\" aria-hidden=\"true\" tabindex=\"-1\" class=\"svc-choose-file-input\"\n    data-bind=\"attr: { accept: acceptedTypes }\" />\n  <sv-svg-icon class=\"svc-context-button\" data-bind=\"click: chooseFile, key2click\"\n    params=\"iconName: 'icon-file', size: 24\"></sv-svg-icon>\n  <!-- /ko -->\n</div>\n<!-- /ko -->\n<!-- ko if: isUploading && !$data.koIsEmptyImageLink() -->\n<div class=\"svc-image-question__loading-placeholder\">\n  <div class=\"svc-image-question__loading\">\n    <!-- ko component: { name: 'sv-loading-indicator' } -->\n    <!-- /ko -->\n  </div>\n</div>\n<!-- /ko -->";

/***/ }),

/***/ "./src/adorners/question-image.ts":
/*!****************************************!*\
  !*** ./src/adorners/question-image.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question */ "./src/adorners/question.ts");



var questionTemplate = __webpack_require__(/*! ./question.html */ "./src/adorners/question.html");
var template = __webpack_require__(/*! ./question-image.html */ "./src/adorners/question-image.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-image-question", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__["QuestionImageAdornerViewModel"](params.componentData, params.templateData.data, params.templateData, componentInfo.element.parentElement);
            Object(_question__WEBPACK_IMPORTED_MODULE_2__["createQuestionViewModel"])(params, componentInfo, model);
            model["adornerComponent"] = "svc-image-question-adorner";
            model["koIsEmptyImageLink"] = knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
                return model.isEmptyImageLink;
            });
            model["koIsEmptyElement"] = knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
                return model.isEmptyImageLink;
            });
            model["placeholderComponentData"] = {
                name: "survey-question-file",
                data: model.filePresentationModel,
                afterRender: function () { }
            };
            return model;
        }
    },
    template: questionTemplate
});
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-image-question-adorner", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.model;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/adorners/question-rating.html":
/*!*******************************************!*\
  !*** ./src/adorners/question-rating.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-rating-question-content\">\n  <div class=\"svc-rating-question-controls svc-item-value-controls\">\n    <!-- ko if: allowRemove -->\n    <sv-svg-icon data-bind=\"class: removeClassNames, click: removeItem, key2click, attr: { 'aria-label': removeTooltip }\"\n      params=\"iconName: 'icon-remove_16x16', size: 16, title: removeTooltip\">\n    </sv-svg-icon>\n    <!-- /ko -->\n    <!-- ko if: allowAdd -->\n    <sv-svg-icon data-bind=\"class: addClassNames, click: addItem, key2click, attr: { 'aria-label': addTooltip }\"\n      params=\"iconName: 'icon-add_16x16', size: 16, title: addTooltip\">\n    </sv-svg-icon>\n    <!-- /ko -->\n  </div>\n  <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } -->\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/adorners/question-rating.ts":
/*!*****************************************!*\
  !*** ./src/adorners/question-rating.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);



var template = __webpack_require__(/*! ./question-rating.html */ "./src/adorners/question-rating.html");
var questionTemplate = __webpack_require__(/*! ./question.html */ "./src/adorners/question.html");
knockout__WEBPACK_IMPORTED_MODULE_1__["components"].register("svc-rating-question", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_0__["QuestionRatingAdornerViewModel"](params.componentData, params.templateData.data, params.templateData);
            // createQuestionViewModel(params, componentInfo, model);
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](model);
            knockout__WEBPACK_IMPORTED_MODULE_1__["utils"].domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                model.dispose();
            });
            //model["adornerComponent"] = "svc-rating-question-adorner";
            return model;
        }
    },
    template: questionTemplate
});
knockout__WEBPACK_IMPORTED_MODULE_1__["components"].register("svc-rating-question-content", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_0__["QuestionRatingAdornerViewModel"](params.componentData, params.templateData.data, params.templateData);
            //createQuestionViewModel(params, componentInfo, model);
            //model["adornerComponent"] = "svc-rating-question-adorner";
            return model;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/adorners/question.html":
/*!************************************!*\
  !*** ./src/adorners/question.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-question__adorner\"\n  data-bind=\"css: rootCss(), attr: { 'data-sv-drop-target-survey-element': element.name || null }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }\">\n  <div data-bind=\"click: koSelect, key2click, clickBubble: false, css: css()\">\n    <!-- ko if: allowDragging -->\n    <div class=\"svc-question__drag-area\" data-bind=\"event: {pointerdown: (model, event)=>{onPointerDown(event)}}\">\n      <!-- ko component: { name: 'sv-svg-icon', params: { css: 'svc-question__drag-element', iconName: 'icon-drag-area-indicator_24x16', size: 24 } } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n\n    <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } -->\n    <!-- /ko -->\n    <!-- ko if: koIsEmptyElement() && !$data.placeholderComponentData -->\n    <div class=\"svc-panel__placeholder_frame\">\n      <div class=\"svc-panel__placeholder\" data-bind=\"text: placeholderText\"></div>\n    </div>\n    <!-- /ko -->\n    <!-- ko if: koIsEmptyElement() && !!$data.placeholderComponentData -->\n    <!-- ko let: { question: placeholderComponentData.data }  -->\n    <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: placeholderComponentData } } -->\n    <!-- /ko -->\n    <!-- /ko -->\n    <!-- /ko -->\n\n    <!-- ko if: adornerComponent -->\n    <!-- ko component: { name: adornerComponent, params: { model: $data } } -->\n    <!-- /ko -->\n    <!-- /ko -->\n\n    <!-- ko if: isUsingCarryForward -->\n    <!-- ko component: { name: 'svc-question-carryforward', params: $data } -->\n    <!-- /ko -->\n    <!-- /ko -->\n    <div class=\"svc-question__content-actions\">\n      <!-- ko component: { name: 'sv-action-bar', params: { model: actionContainer, handleClick: false } } -->\n      <!-- /ko -->\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ "./src/adorners/question.ts":
/*!**********************************!*\
  !*** ./src/adorners/question.ts ***!
  \**********************************/
/*! exports provided: createQuestionViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQuestionViewModel", function() { return createQuestionViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events */ "./src/events.ts");





var template = __webpack_require__(/*! ./question.html */ "./src/adorners/question.html");
function createQuestionViewModel(params, componentInfo, model) {
    if (!model) {
        model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_3__["QuestionAdornerViewModel"](params.componentData, params.templateData.data, params.templateData);
    }
    model["koSelect"] = function (model, event) {
        return model.select(model, new _events__WEBPACK_IMPORTED_MODULE_4__["KnockoutMouseEvent"](event));
    };
    model["koIsEmptyElement"] = knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
        if (model.element instanceof survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionHtmlModel"]) {
            return !model.element.locHtml["koRenderedHtml"]();
        }
        return model.isEmptyElement;
    });
    model["adornerComponent"] = undefined;
    var implementor = new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](model);
    knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
        implementor.dispose();
    });
    return model;
}
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-question", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return createQuestionViewModel(params, componentInfo);
        }
    },
    template: template
});


/***/ }),

/***/ "./src/creator.ts":
/*!************************!*\
  !*** ./src/creator.ts ***!
  \************************/
/*! exports provided: SurveyCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyCreator", function() { return SurveyCreator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);




if (!!knockout__WEBPACK_IMPORTED_MODULE_1__["options"]) {
    knockout__WEBPACK_IMPORTED_MODULE_1__["options"].useOnlyNativeEvents = true;
}
var SurveyCreator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SurveyCreator, _super);
    function SurveyCreator(options, options2) {
        if (options === void 0) { options = {}; }
        return _super.call(this, options, options2) || this;
    }
    SurveyCreator.prototype.createSurveyCore = function (json, reason) {
        if (json === void 0) { json = {}; }
        return new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["Survey"](json);
    };
    SurveyCreator.prototype.onViewTypeChanged = function (newType) {
        var plugin = this.plugins[newType];
        !!plugin && plugin.activate();
    };
    SurveyCreator.prototype.render = function (target) {
        var node = target;
        if (typeof target === "string") {
            node = document.getElementById(target);
        }
        node.innerHTML = "<survey-creator params=\"creator: creator\"></survey-creator>";
        knockout__WEBPACK_IMPORTED_MODULE_1__["cleanNode"](node);
        knockout__WEBPACK_IMPORTED_MODULE_1__["applyBindings"]({ creator: this }, node);
    };
    return SurveyCreator;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__["CreatorBase"]));



/***/ }),

/***/ "./src/custom-questions/color-item.html":
/*!**********************************************!*\
  !*** ./src/custom-questions/color-item.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"spg-color-editor__color-swatch\" data-bind=\"style: getSwatchStyle()\"></span>\n<!-- ko template: { name: 'survey-string', data: item.locTitle } --><!-- /ko -->";

/***/ }),

/***/ "./src/custom-questions/color-item.ts":
/*!********************************************!*\
  !*** ./src/custom-questions/color-item.ts ***!
  \********************************************/
/*! exports provided: ColorItemViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorItemViewModel", function() { return ColorItemViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./color-item.html */ "./src/custom-questions/color-item.html");
var ColorItemViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("color-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return {
                item: params.item,
                getSwatchStyle: function () {
                    return { backgroundColor: params.item.value };
                }
            };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/custom-questions/question-color.html":
/*!**************************************************!*\
  !*** ./src/custom-questions/question-color.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: question.cssClasses.root, event: { keydown: question.koOnKeyDown }\">\n  <label data-bind=\"css: question.getSwatchCss(), style: question.getSwatchStyle()\">\n    <!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.cssClasses.swatchIcon, size: 'auto' } } --><!-- /ko -->\n    <input type=\"color\"\n      data-bind=\"disable: question.isInputReadOnly, css: question.cssClasses.colorInput, value: question.renderedColorValue, event: { change: question.koOnColorInputChange }\">\n  </label>\n  <input autocomplete=\"off\" data-bind=\"disable: question.isInputReadOnly, attr: { id: question.inputId, placeholder: question.renderedPlaceholder, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy }, \n    event: { change: question.koOnChange, blur: question.koOnBlur, keyup: question.koOnKeyUp, beforeinput: question.koOnBeforeInput },\n    value: question.renderedValue,\n    css: question.cssClasses.control\"></input>\n  <!-- ko if: question.showDropdownAction -->\n  <!-- ko component: { name: 'sv-action-bar-item', params: { item: question.koDropdownAction() } } --><!-- /ko -->\n  <sv-popup params=\"model: question.dropdownAction.popupModel\"></sv-popup>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/custom-questions/question-color.ts":
/*!************************************************!*\
  !*** ./src/custom-questions/question-color.ts ***!
  \************************************************/
/*! exports provided: QuestionColorImplementor, QuestionColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionColorImplementor", function() { return QuestionColorImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionColor", function() { return QuestionColor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_4__);





var template = __webpack_require__(/*! ./question-color.html */ "./src/custom-questions/question-color.html");
// import template from "./question-editor-content.html";
var QuestionColorImplementor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuestionColorImplementor, _super);
    function QuestionColorImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.setCallbackFunc("koOnBlur", function (_, event) {
            _this.question.onBlur(event);
            return true;
        });
        _this.setCallbackFunc("koOnChange", function (_, event) {
            _this.question.onChange(event);
            return true;
        });
        _this.setCallbackFunc("koOnBeforeInput", function (_, event) {
            _this.question.onBeforeInput(event);
            return true;
        });
        _this.setCallbackFunc("koOnColorInputChange", function (_, event) {
            _this.question.onColorInputChange(event);
            return true;
        });
        _this.setCallbackFunc("koOnKeyUp", function (_, event) {
            _this.question.onKeyUp(event);
            return true;
        });
        _this.setCallbackFunc("koOnKeyDown", function (_, event) {
            _this.question.onKeyDown(event);
            return true;
        });
        _this.setCallbackFunc("koDropdownAction", function () {
            var dropdownAction = _this.question.dropdownAction;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](dropdownAction);
            return dropdownAction;
        });
        _this.setObservaleObj("koReadOnlyValue", knockout__WEBPACK_IMPORTED_MODULE_4__["computed"](function () { return _this.question.renderedValue; }));
        return _this;
    }
    return QuestionColorImplementor;
}(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__["QuestionImplementor"]));

var QuestionColor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuestionColor, _super);
    function QuestionColor(name) {
        var _this = _super.call(this, name) || this;
        _this.renderAs = "color";
        return _this;
    }
    QuestionColor.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionColorImplementor(this);
    };
    QuestionColor.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionColor;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__["QuestionColorModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("color", function () {
    return new QuestionColor("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("color", function (name) {
    return new QuestionColor(name);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory"].Instance.registerRenderer("color", "color", "svc-color-question");
knockout__WEBPACK_IMPORTED_MODULE_4__["components"].register("svc-color-question", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/custom-questions/question-file.html":
/*!*************************************************!*\
  !*** ./src/custom-questions/question-file.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  data-bind=\"css: question.cssClasses.root, event: { keydown: question.koOnKeyDown, dragenter: question.ondragenter, dragover: question.ondragover, drop: question.ondrop, dragleave: question.ondragleave }\">\n  <input type=\"text\"\n    data-bind=\"css: question.cssClasses.control, value: question.koReadOnlyValue, disable: question.isInputReadOnly, attr: { placeholder: question.placeholder }, event: { change: question.koOnInputChange, blur: question.koOnInputBlur }\">\n  <input type=\"file\"\n    data-bind=\"css: question.cssClasses.fileInput, disable: question.isInputReadOnly, attr: { id: question.inputId, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy, multiple: question.allowMultiple ? 'multiple' : undefined, title: question.koInputTitle, accept: question.acceptedTypes }, event: { change: question.doFileInputChange }\"\n    tabindex=\"-1\">\n  <div data-bind=\"css: question.cssClasses.buttonsContainer\">\n    <button type=\"button\"\n      data-bind=\"css: question.cssClasses.clearButton, disable: question.getIsClearButtonDisabled(), click: question.doclean\">\n      <!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.cssClasses.clearButtonIcon, size: 'auto', title: question.clearButtonCaption } } --><!-- /ko -->\n    </button>\n    <label role=\"button\"\n      data-bind=\"click: (_, event) => question.chooseFiles(event), key2click, css: question.getChooseButtonCss(), attr: { for: question.inputId, 'aria-label': question.chooseButtonCaption }\"\n      tabindex=\"0\">\n      <!-- ko component: { name: 'sv-svg-icon', params: { title: question.chooseButtonCaption, iconName: question.cssClasses.chooseButtonIcon, size: 'auto' } } --><!-- /ko -->\n    </label>\n  </div>\n</div>";

/***/ }),

/***/ "./src/custom-questions/question-file.ts":
/*!***********************************************!*\
  !*** ./src/custom-questions/question-file.ts ***!
  \***********************************************/
/*! exports provided: QuestionFileEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFileEditor", function() { return QuestionFileEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_4__);





var template = __webpack_require__(/*! ./question-file.html */ "./src/custom-questions/question-file.html");
function getOriginalEvent(event) {
    return event.originalEvent || event;
}
var QuestionFileEditorImplementor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuestionFileEditorImplementor, _super);
    function QuestionFileEditorImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.setObservaleObj("koInputTitle", knockout__WEBPACK_IMPORTED_MODULE_4__["observable"]());
        _this.setCallbackFunc("ondrop", function (data, event) {
            _this.question.onDrop(getOriginalEvent(event));
        });
        _this.setCallbackFunc("ondragover", function (data, event) {
            _this.question.onDragOver(getOriginalEvent(event));
        });
        _this.setCallbackFunc("ondragenter", function (data, event) {
            _this.question.onDragEnter(getOriginalEvent(event));
        });
        _this.setCallbackFunc("ondragleave", function (data, event) {
            _this.question.onDragLeave(getOriginalEvent(event));
        });
        _this.setCallbackFunc("doFileInputChange", function (data, event) {
            _this.question.onFileInputChange(getOriginalEvent(event));
        });
        _this.setCallbackFunc("doclean", function (data, event) {
            _this.question.doClean(getOriginalEvent(event));
        });
        _this.setCallbackFunc("koOnKeyDown", function (_, event) {
            _this.question.onKeyDown(event);
            return true;
        });
        _this.setCallbackFunc("koOnBeforeInput", function (_, event) {
            _this.question.onInputBlur(event);
            return true;
        });
        _this.setCallbackFunc("koOnInputChange", function (_, event) {
            _this.question.onInputChange(event);
            return true;
        });
        _this.setObservaleObj("koReadOnlyValue", knockout__WEBPACK_IMPORTED_MODULE_4__["computed"](function () { return _this.question.renderedValue; }));
        return _this;
    }
    return QuestionFileEditorImplementor;
}(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__["QuestionImplementor"]));
var QuestionFileEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuestionFileEditor, _super);
    function QuestionFileEditor(name) {
        var _this = _super.call(this, name) || this;
        _this.renderAs = "fileedit";
        return _this;
    }
    QuestionFileEditor.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionFileEditorImplementor(this);
    };
    QuestionFileEditor.prototype.dispose = function () {
        this.onUploadStateChanged.remove(this.updateState);
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionFileEditor;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__["QuestionFileEditorModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("fileedit", function () {
    return new QuestionFileEditor("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("fileedit", function (name) {
    return new QuestionFileEditor(name);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory"].Instance.registerRenderer("fileedit", "fileedit", "svc-file-edit-question");
knockout__WEBPACK_IMPORTED_MODULE_4__["components"].register("svc-file-edit-question", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/custom-questions/spin-editor.html":
/*!***********************************************!*\
  !*** ./src/custom-questions/spin-editor.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: question.cssClasses.root, event: { keydown: question.koOnKeyDown }\">\n  <input autocomplete=\"off\" data-bind=\"disable: question.isInputReadOnly, attr: { id: question.inputId, placeholder: question.renderedPlaceholder, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy }, \n    event: { change: question.koOnChange, keydown: question.koOnInputKeyDown, keyup: question.koOnKeyUp, blur: question.koOnBlur, focus: question.koOnFocus, beforeinput: question.koOnBeforeInput },\n    value: question.renderedValue,\n    css: question.cssClasses.control\"></input>\n  <span data-bind=\"css: question.cssClasses.buttonsContainer\">\n    <button\n      data-bind=\"css: question.cssClasses.arrowButton, disable: question.isInputReadOnly, event: { mousedown: question.koOnDownButtonMouseDown, mouseup: question.koOnButtonMouseUp, mouseleave: question.koOnButtonMouseLeave, blur: question.koOnBlur, focus: question.koOnFocus }\">\n      <!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.cssClasses.decreaseButtonIcon, size: 'auto' } } --><!-- /ko -->\n    </button>\n    <button\n      data-bind=\"css: question.cssClasses.arrowButton, disable: question.isInputReadOnly, event: { mousedown:  question.koOnUpButtonMouseDown, mouseup: question.koOnButtonMouseUp, mouseleave: question.koOnButtonMouseLeave, blur: question.koOnBlur, focus: question.koOnFocus }\">\n      <!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.cssClasses.increaseButtonIcon, size: 'auto' } } --><!-- /ko -->\n    </button>\n  </span>\n</div>";

/***/ }),

/***/ "./src/custom-questions/spin-editor.ts":
/*!*********************************************!*\
  !*** ./src/custom-questions/spin-editor.ts ***!
  \*********************************************/
/*! exports provided: QuestionSpinEditorImplementor, QuestionSpinEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSpinEditorImplementor", function() { return QuestionSpinEditorImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSpinEditor", function() { return QuestionSpinEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_4__);





var template = __webpack_require__(/*! ./spin-editor.html */ "./src/custom-questions/spin-editor.html");
// import template from "./question-editor-content.html";
var QuestionSpinEditorImplementor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuestionSpinEditorImplementor, _super);
    function QuestionSpinEditorImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.setCallbackFunc("koOnFocus", function (_, event) {
            _this.question.onFocus(event);
            return true;
        });
        _this.setCallbackFunc("koOnBlur", function (_, event) {
            _this.question.onBlur(event);
            return true;
        });
        _this.setCallbackFunc("koOnKeyDown", function (_, event) {
            _this.question.onKeyDown(event);
            return true;
        });
        _this.setCallbackFunc("koOnInputKeyDown", function (_, event) {
            _this.question.onInputKeyDown(event);
            return true;
        });
        _this.setCallbackFunc("koOnKeyUp", function (_, event) {
            _this.question.onKeyUp(event);
            return true;
        });
        _this.setCallbackFunc("koOnChange", function (_, event) {
            _this.question.onChange(event);
            return true;
        });
        _this.setCallbackFunc("koOnCompositeUpdate", function (_, event) {
            _this.question.onCompositionUpdate(event);
            return true;
        });
        _this.setCallbackFunc("koIncrease", function (_, event) {
            _this.question.increase();
            return true;
        });
        _this.setCallbackFunc("koDecrease", function (_, event) {
            _this.question.decrease();
            return true;
        });
        _this.setCallbackFunc("koOnBeforeInput", function (_, event) {
            _this.question.onBeforeInput(event);
            return true;
        });
        _this.setCallbackFunc("koOnDownButtonMouseDown", function (_, event) {
            _this.question.onDownButtonMouseDown(event);
            return true;
        });
        _this.setCallbackFunc("koOnUpButtonMouseDown", function (_, event) {
            _this.question.onUpButtonMouseDown(event);
            return true;
        });
        _this.setCallbackFunc("koOnDownButtonMouseDown", function (_, event) {
            _this.question.onDownButtonMouseDown(event);
            return true;
        });
        _this.setCallbackFunc("koOnButtonMouseUp", function (_, event) {
            _this.question.onButtonMouseUp(event);
            return true;
        });
        _this.setCallbackFunc("koOnButtonMouseLeave", function (_, event) {
            _this.question.onButtonMouseLeave(event);
            return true;
        });
        _this.setObservaleObj("koReadOnlyValue", knockout__WEBPACK_IMPORTED_MODULE_4__["computed"](function () { return _this.question.renderedValue; }));
        return _this;
    }
    return QuestionSpinEditorImplementor;
}(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__["QuestionImplementor"]));

var QuestionSpinEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuestionSpinEditor, _super);
    function QuestionSpinEditor(name) {
        var _this = _super.call(this, name) || this;
        _this.renderAs = "spinedit";
        return _this;
    }
    QuestionSpinEditor.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionSpinEditorImplementor(this);
    };
    QuestionSpinEditor.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionSpinEditor;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__["QuestionSpinEditorModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("spinedit", function () {
    return new QuestionSpinEditor("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("spinedit", function (name) {
    return new QuestionSpinEditor(name);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory"].Instance.registerRenderer("spinedit", "spinedit", "svc-spin-editor");
knockout__WEBPACK_IMPORTED_MODULE_4__["components"].register("svc-spin-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/custom-questions/text-with-reset.html":
/*!***************************************************!*\
  !*** ./src/custom-questions/text-with-reset.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: question.getRootClass()\">\n  <!-- ko template: { name: \"survey-question-\" + question.wrappedQuestionTemplate, data: question, as: 'question', afterRender: question.koQuestionAfterRender } -->\n  <!-- /ko -->\n  <button type=\"button\"\n    data-bind=\"click: function() { question.resetValueAdorner.resetValue() }, css: question.cssClasses.resetButton, disable: question.resetValueAdorner.isDisabled, attr: { title: question.resetValueAdorner.caption }\">\n    <!-- ko component: { name: 'sv-svg-icon', params: {  iconName: question.cssClasses.resetButtonIcon, size: 'auto' } } --><!-- /ko -->\n  </button>\n</div>";

/***/ }),

/***/ "./src/custom-questions/text-with-reset.ts":
/*!*************************************************!*\
  !*** ./src/custom-questions/text-with-reset.ts ***!
  \*************************************************/
/*! exports provided: QuestionTextWithResetImplementor, QuestionTextWithReset, QuestionCommentWithReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTextWithResetImplementor", function() { return QuestionTextWithResetImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTextWithReset", function() { return QuestionTextWithReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCommentWithReset", function() { return QuestionCommentWithReset; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_4__);





var template = __webpack_require__(/*! ./text-with-reset.html */ "./src/custom-questions/text-with-reset.html");
// import template from "./question-editor-content.html";
var QuestionTextWithResetImplementor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuestionTextWithResetImplementor, _super);
    function QuestionTextWithResetImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.setCallbackFunc("koOnFocus", function (_, event) {
            _this.question.onFocus(event);
            return true;
        });
        _this.setCallbackFunc("koOnBlur", function (_, event) {
            _this.question.onBlur(event);
            return true;
        });
        _this.setCallbackFunc("koOnKeyDown", function (_, event) {
            _this.question.onKeyDown(event);
            return true;
        });
        _this.setCallbackFunc("koOnKeyUp", function (_, event) {
            _this.question.onKeyUp(event);
            return true;
        });
        _this.setCallbackFunc("koOnChange", function (_, event) {
            _this.question.onChange(event);
            return true;
        });
        _this.setCallbackFunc("koOnCompositeUpdate", function (_, event) {
            _this.question.onCompositionUpdate(event);
            return true;
        });
        _this.setObservaleObj("koReadOnlyValue", knockout__WEBPACK_IMPORTED_MODULE_3__["computed"](function () { return _this.question.value; }));
        return _this;
    }
    return QuestionTextWithResetImplementor;
}(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_4__["QuestionImplementor"]));

var QuestionTextWithReset = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuestionTextWithReset, _super);
    function QuestionTextWithReset(name) {
        var _this = _super.call(this, name) || this;
        _this.renderAs = "textwithreset";
        return _this;
    }
    QuestionTextWithReset.prototype.createResetValueAdorner = function () {
        var adorner = new survey_creator_core__WEBPACK_IMPORTED_MODULE_2__["ResetValueAdorner"](this);
        this._adornerImplementor = new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_4__["ImplementorBase"](adorner);
        return adorner;
    };
    QuestionTextWithReset.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionTextWithResetImplementor(this);
    };
    QuestionTextWithReset.prototype.dispose = function () {
        this._implementor.dispose();
        this._adornerImplementor.dispose();
        this._adornerImplementor = undefined;
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionTextWithReset;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__["QuestionTextWithResetModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("textwithreset", function () {
    return new QuestionTextWithReset("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("textwithreset", function (name) {
    return new QuestionTextWithReset(name);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory"].Instance.registerRenderer("textwithreset", "textwithreset", "svc-text-with-reset");
var QuestionCommentWithReset = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuestionCommentWithReset, _super);
    function QuestionCommentWithReset(name) {
        var _this = _super.call(this, name) || this;
        _this.renderAs = "commentwithreset";
        return _this;
    }
    QuestionCommentWithReset.prototype.createResetValueAdorner = function () {
        var adorner = new survey_creator_core__WEBPACK_IMPORTED_MODULE_2__["ResetValueAdorner"](this);
        this._adornerImplementor = new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_4__["ImplementorBase"](adorner);
        return adorner;
    };
    QuestionCommentWithReset.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_4__["QuestionImplementor"](this);
    };
    QuestionCommentWithReset.prototype.dispose = function () {
        this._implementor.dispose();
        this._adornerImplementor.dispose();
        this._adornerImplementor = undefined;
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionCommentWithReset;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__["QuestionCommentWithResetModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("commentwithreset", function () {
    return new QuestionCommentWithReset("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("commentwithreset", function (name) {
    return new QuestionCommentWithReset(name);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory"].Instance.registerRenderer("commentwithreset", "commentwithreset", "svc-text-with-reset");
knockout__WEBPACK_IMPORTED_MODULE_3__["components"].register("svc-text-with-reset", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/entries/helpers.ts":
/*!********************************!*\
  !*** ./src/entries/helpers.ts ***!
  \********************************/
/*! exports provided: __decorate, __assign, __extends, __spreadArrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3
        ? target
        : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __assign = Object["assign"] ||
    function (target) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    target[p] = s[p];
        }
        return target;
    };
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() {
        this.constructor = thisClass;
    }
    thisClass.prototype =
        baseClass === null
            ? Object.create(baseClass)
            : ((__.prototype = baseClass.prototype), new __());
}
var __spreadArrays = function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


/***/ }),

/***/ "./src/entries/index.ts":
/*!******************************!*\
  !*** ./src/entries/index.ts ***!
  \******************************/
/*! exports provided: Version, CreatorViewModel, LogicOperatorViewModel, CreatorSurveyPageComponent, AddNewQuestionViewModel, StringEditorViewModel, createQuestionViewModel, createPanelViewModel, QuestionLinkValue, QuestionEmbeddedSurvey, ActionButtonViewModel, JsonErrorItemViewModel, ColorItemViewModel, QuestionColorImplementor, QuestionColor, QuestionSpinEditorImplementor, QuestionSpinEditor, QuestionFileEditor, QuestionTextWithResetImplementor, QuestionTextWithReset, QuestionCommentWithReset, PageNavigatorView, PageNavigatorItemViewModel, DropdownEditorViewModel, TabbedMenuViewModel, ToolboxViewModel, KnockoutToolboxItemViewModel, KnockoutToolboxToolViewModel, Skeleton, SurveyWidgetBinding, SurveyCreator, editorLocalization, localization, settings, svgBundle, SurveyLogic, SurveyLogicUI, SurveyQuestionEditorDefinition, ToolboxToolViewModel, PropertyGridEditorCollection, StylesManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
/* harmony import */ var _survey_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../survey-creator */ "./src/survey-creator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatorViewModel", function() { return _survey_creator__WEBPACK_IMPORTED_MODULE_0__["CreatorViewModel"]; });

/* harmony import */ var _tabs_designer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabs/designer */ "./src/tabs/designer.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _tabs_json_editor_ace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs/json-editor-ace */ "./src/tabs/json-editor-ace.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _tabs_json_editor_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/json-editor-textarea */ "./src/tabs/json-editor-textarea.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _tabs_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tabs/logic */ "./src/tabs/logic.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _tabs_logic_operator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tabs/logic-operator */ "./src/tabs/logic-operator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogicOperatorViewModel", function() { return _tabs_logic_operator__WEBPACK_IMPORTED_MODULE_5__["LogicOperatorViewModel"]; });

/* harmony import */ var _tabs_translation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tabs/translation */ "./src/tabs/translation.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../page */ "./src/page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatorSurveyPageComponent", function() { return _page__WEBPACK_IMPORTED_MODULE_7__["CreatorSurveyPageComponent"]; });

/* harmony import */ var _page_add_question__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../page-add-question */ "./src/page-add-question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddNewQuestionViewModel", function() { return _page_add_question__WEBPACK_IMPORTED_MODULE_8__["AddNewQuestionViewModel"]; });

/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../row */ "./src/row.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _string_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../string-editor */ "./src/string-editor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringEditorViewModel", function() { return _string_editor__WEBPACK_IMPORTED_MODULE_10__["StringEditorViewModel"]; });

/* harmony import */ var _adorners_question__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../adorners/question */ "./src/adorners/question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createQuestionViewModel", function() { return _adorners_question__WEBPACK_IMPORTED_MODULE_11__["createQuestionViewModel"]; });

/* harmony import */ var _adorners_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../adorners/panel */ "./src/adorners/panel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPanelViewModel", function() { return _adorners_panel__WEBPACK_IMPORTED_MODULE_12__["createPanelViewModel"]; });

/* harmony import */ var _adorners_question_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../adorners/question-dropdown */ "./src/adorners/question-dropdown.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _adorners_question_carryforward__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../adorners/question-carryforward */ "./src/adorners/question-carryforward.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _question_link_value__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../question-link-value */ "./src/question-link-value.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionLinkValue", function() { return _question_link_value__WEBPACK_IMPORTED_MODULE_15__["QuestionLinkValue"]; });

/* harmony import */ var _question_embedded_survey__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../question-embedded-survey */ "./src/question-embedded-survey.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionEmbeddedSurvey", function() { return _question_embedded_survey__WEBPACK_IMPORTED_MODULE_16__["QuestionEmbeddedSurvey"]; });

/* harmony import */ var _adorners_question_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../adorners/question-image */ "./src/adorners/question-image.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _adorners_question_rating__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../adorners/question-rating */ "./src/adorners/question-rating.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _question_widget__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../question-widget */ "./src/question-widget.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _adorners_item_value__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../adorners/item-value */ "./src/adorners/item-value.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _adorners_image_item_value__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../adorners/image-item-value */ "./src/adorners/image-item-value.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _adorners_matrix_cell__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../adorners/matrix-cell */ "./src/adorners/matrix-cell.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _question_editor_content__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../question-editor-content */ "./src/question-editor-content.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _adorners_cell_question__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../adorners/cell-question */ "./src/adorners/cell-question.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _adorners_cell_question_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../adorners/cell-question-dropdown */ "./src/adorners/cell-question-dropdown.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _action_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../action-button */ "./src/action-button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButtonViewModel", function() { return _action_button__WEBPACK_IMPORTED_MODULE_26__["ActionButtonViewModel"]; });

/* harmony import */ var _tabs_json_error_item__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../tabs/json-error-item */ "./src/tabs/json-error-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonErrorItemViewModel", function() { return _tabs_json_error_item__WEBPACK_IMPORTED_MODULE_27__["JsonErrorItemViewModel"]; });

/* harmony import */ var _custom_questions_color_item__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../custom-questions/color-item */ "./src/custom-questions/color-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorItemViewModel", function() { return _custom_questions_color_item__WEBPACK_IMPORTED_MODULE_28__["ColorItemViewModel"]; });

/* harmony import */ var _custom_questions_question_color__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../custom-questions/question-color */ "./src/custom-questions/question-color.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionColorImplementor", function() { return _custom_questions_question_color__WEBPACK_IMPORTED_MODULE_29__["QuestionColorImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionColor", function() { return _custom_questions_question_color__WEBPACK_IMPORTED_MODULE_29__["QuestionColor"]; });

/* harmony import */ var _custom_questions_spin_editor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../custom-questions/spin-editor */ "./src/custom-questions/spin-editor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionSpinEditorImplementor", function() { return _custom_questions_spin_editor__WEBPACK_IMPORTED_MODULE_30__["QuestionSpinEditorImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionSpinEditor", function() { return _custom_questions_spin_editor__WEBPACK_IMPORTED_MODULE_30__["QuestionSpinEditor"]; });

/* harmony import */ var _custom_questions_question_file__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../custom-questions/question-file */ "./src/custom-questions/question-file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionFileEditor", function() { return _custom_questions_question_file__WEBPACK_IMPORTED_MODULE_31__["QuestionFileEditor"]; });

/* harmony import */ var _custom_questions_text_with_reset__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../custom-questions/text-with-reset */ "./src/custom-questions/text-with-reset.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionTextWithResetImplementor", function() { return _custom_questions_text_with_reset__WEBPACK_IMPORTED_MODULE_32__["QuestionTextWithResetImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionTextWithReset", function() { return _custom_questions_text_with_reset__WEBPACK_IMPORTED_MODULE_32__["QuestionTextWithReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionCommentWithReset", function() { return _custom_questions_text_with_reset__WEBPACK_IMPORTED_MODULE_32__["QuestionCommentWithReset"]; });

/* harmony import */ var _page_navigator_page_navigator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../page-navigator/page-navigator */ "./src/page-navigator/page-navigator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNavigatorView", function() { return _page_navigator_page_navigator__WEBPACK_IMPORTED_MODULE_33__["PageNavigatorView"]; });

/* harmony import */ var _page_navigator_page_navigator_item__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../page-navigator/page-navigator-item */ "./src/page-navigator/page-navigator-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNavigatorItemViewModel", function() { return _page_navigator_page_navigator_item__WEBPACK_IMPORTED_MODULE_34__["PageNavigatorItemViewModel"]; });

/* harmony import */ var _property_panel_object_selector__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../property-panel/object-selector */ "./src/property-panel/object-selector.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _property_panel_property_grid__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../property-panel/property-grid */ "./src/property-panel/property-grid.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _side_bar_side_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../side-bar/side-bar */ "./src/side-bar/side-bar.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _side_bar_side_bar_tab__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../side-bar/side-bar-tab */ "./src/side-bar/side-bar-tab.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../results */ "./src/results.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _simulator__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../simulator */ "./src/simulator.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _svg_bundle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../svg-bundle */ "./src/svg-bundle.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _survey_renderers_dropdown__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../survey-renderers/dropdown */ "./src/survey-renderers/dropdown/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownEditorViewModel", function() { return _survey_renderers_dropdown__WEBPACK_IMPORTED_MODULE_42__["DropdownEditorViewModel"]; });

/* harmony import */ var _tabs_test__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../tabs/test */ "./src/tabs/test.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _tabs_test_complete__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../tabs/test-complete */ "./src/tabs/test-complete.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _tabs_theme__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../tabs/theme */ "./src/tabs/theme.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _tabbed_menu_tabbed_menu__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../tabbed-menu/tabbed-menu */ "./src/tabbed-menu/tabbed-menu.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabbedMenuViewModel", function() { return _tabbed_menu_tabbed_menu__WEBPACK_IMPORTED_MODULE_46__["TabbedMenuViewModel"]; });

/* harmony import */ var _tabbed_menu_tabbed_menu_item__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../tabbed-menu/tabbed-menu-item */ "./src/tabbed-menu/tabbed-menu-item.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _toolbox_toolbox__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../toolbox/toolbox */ "./src/toolbox/toolbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolboxViewModel", function() { return _toolbox_toolbox__WEBPACK_IMPORTED_MODULE_48__["ToolboxViewModel"]; });

/* harmony import */ var _toolbox_adaptive_toolbox__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../toolbox/adaptive-toolbox */ "./src/toolbox/adaptive-toolbox.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _toolbox_toolbox_item__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../toolbox/toolbox-item */ "./src/toolbox/toolbox-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnockoutToolboxItemViewModel", function() { return _toolbox_toolbox_item__WEBPACK_IMPORTED_MODULE_50__["KnockoutToolboxItemViewModel"]; });

/* harmony import */ var _toolbox_toolbox_tool__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../toolbox/toolbox-tool */ "./src/toolbox/toolbox-tool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnockoutToolboxToolViewModel", function() { return _toolbox_toolbox_tool__WEBPACK_IMPORTED_MODULE_51__["KnockoutToolboxToolViewModel"]; });

/* harmony import */ var _header_logo_image__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../header/logo-image */ "./src/header/logo-image.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _tabs_translation_line_skeleton__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../tabs/translation-line-skeleton */ "./src/tabs/translation-line-skeleton.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return _tabs_translation_line_skeleton__WEBPACK_IMPORTED_MODULE_53__["Skeleton"]; });

/* harmony import */ var _utils_survey_widget__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../utils/survey-widget */ "./src/utils/survey-widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyWidgetBinding", function() { return _utils_survey_widget__WEBPACK_IMPORTED_MODULE_54__["SurveyWidgetBinding"]; });

/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../creator */ "./src/creator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyCreator", function() { return _creator__WEBPACK_IMPORTED_MODULE_56__["SurveyCreator"]; });

/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_57__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editorLocalization", function() { return survey_creator_core__WEBPACK_IMPORTED_MODULE_57__["editorLocalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return survey_creator_core__WEBPACK_IMPORTED_MODULE_57__["localization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return survey_creator_core__WEBPACK_IMPORTED_MODULE_57__["settings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svgBundle", function() { return survey_creator_core__WEBPACK_IMPORTED_MODULE_57__["svgBundle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyLogic", function() { return survey_creator_core__WEBPACK_IMPORTED_MODULE_57__["SurveyLogic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyLogicUI", function() { return survey_creator_core__WEBPACK_IMPORTED_MODULE_57__["SurveyLogicUI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorDefinition", function() { return survey_creator_core__WEBPACK_IMPORTED_MODULE_57__["SurveyQuestionEditorDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolboxToolViewModel", function() { return survey_creator_core__WEBPACK_IMPORTED_MODULE_57__["ToolboxToolViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyGridEditorCollection", function() { return survey_creator_core__WEBPACK_IMPORTED_MODULE_57__["PropertyGridEditorCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesManager", function() { return survey_creator_core__WEBPACK_IMPORTED_MODULE_57__["StylesManager"]; });

/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_58__);
var Version;
Version = "".concat("1.9.116");




























//custom questions for property grid





































Object(survey_core__WEBPACK_IMPORTED_MODULE_58__["checkLibraryVersion"])("".concat("1.9.116"), "survey-creator-knockout");


/***/ }),

/***/ "./src/events.ts":
/*!***********************!*\
  !*** ./src/events.ts ***!
  \***********************/
/*! exports provided: KnockoutMouseEvent, KnockoutDragEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnockoutMouseEvent", function() { return KnockoutMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnockoutDragEvent", function() { return KnockoutDragEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");

var KnockoutMouseEvent = /** @class */ (function () {
    function KnockoutMouseEvent(event) {
        this.event = event;
    }
    KnockoutMouseEvent.prototype.stopPropagation = function () {
        this.event.stopPropagation();
    };
    KnockoutMouseEvent.prototype.preventDefault = function () {
        this.event.preventDefault();
    };
    Object.defineProperty(KnockoutMouseEvent.prototype, "cancelBubble", {
        get: function () {
            return this.event.cancelBubble;
        },
        set: function (value) {
            this.event.cancelBubble = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KnockoutMouseEvent.prototype, "target", {
        get: function () {
            return this.event.target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KnockoutMouseEvent.prototype, "currentTarget", {
        get: function () {
            return this.event.currentTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KnockoutMouseEvent.prototype, "clientX", {
        get: function () {
            return this.event.clientX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KnockoutMouseEvent.prototype, "clientY", {
        get: function () {
            return this.event.clientY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KnockoutMouseEvent.prototype, "offsetX", {
        get: function () {
            return this.event.offsetX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KnockoutMouseEvent.prototype, "offsetY", {
        get: function () {
            return this.event.offsetY;
        },
        enumerable: false,
        configurable: true
    });
    return KnockoutMouseEvent;
}());

var KnockoutDragEvent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KnockoutDragEvent, _super);
    function KnockoutDragEvent(event) {
        var _this = _super.call(this, event) || this;
        _this.event = event;
        return _this;
    }
    Object.defineProperty(KnockoutDragEvent.prototype, "dataTransfer", {
        get: function () {
            return this.event.dataTransfer;
        },
        enumerable: false,
        configurable: true
    });
    return KnockoutDragEvent;
}(KnockoutMouseEvent));



/***/ }),

/***/ "./src/header/logo-image.html":
/*!************************************!*\
  !*** ./src/header/logo-image.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-logo-image\" data-bind=\"click: function(m, e) { return true; }, clickBubble: false\">\n  <input type=\"file\" aria-hidden=\"true\" tabindex=\"-1\" class=\"svc-choose-file-input\"\n    data-bind=\"attr: { accept: acceptedTypes }\" />\n  <!-- ko ifnot: survey.locLogo.koRenderedHtml -->\n  <!-- ko if: allowEdit && !isUploading -->\n  <div class=\"svc-logo-image-placeholder\" data-bind=\"click: chooseFile, key2click\">\n    <svg>\n      <use xlink:href=\"#icon-logo\"></use>\n    </svg>\n  </div>\n  <!-- /ko -->\n  <!-- /ko -->\n  <!-- ko if: !isUploading && survey.locLogo.koRenderedHtml -->\n  <div data-bind=\"css: containerCss\">\n    <div class=\"svc-context-container svc-logo-image-controls\">\n      <sv-svg-icon class=\"svc-context-button\" data-bind=\"click: chooseFile, key2click\"\n        params=\"iconName: 'icon-file', size: 24\"></sv-svg-icon>\n      <sv-svg-icon class=\"svc-context-button svc-context-button--danger\" data-bind=\"click: remove, key2click\"\n        params=\"iconName: 'icon-clear', size: 24\"></sv-svg-icon>\n    </div>\n    <!-- ko component: { name: 'sv-logo-image', params: survey } -->\n    <!-- /ko -->\n  </div>\n  <!-- /ko -->\n  <!-- ko if: isUploading -->\n  <div class=\"svc-logo-image__loading\">\n    <!-- ko component: { name: 'sv-loading-indicator' } -->\n    <!-- /ko -->\n  </div>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/header/logo-image.ts":
/*!**********************************!*\
  !*** ./src/header/logo-image.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);



var template = __webpack_require__(/*! ./logo-image.html */ "./src/header/logo-image.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-logo-image", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__["LogoImageViewModel"](params, componentInfo.element.nextElementSibling);
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](model);
            return model;
        },
    },
    template: template
});


/***/ }),

/***/ "./src/page-add-question.html":
/*!************************************!*\
  !*** ./src/page-add-question.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-page__add-new-question svc-btn\"\n  data-bind=\"click: addNewQuestion, key2click, clickBubble: false, event: { mouseover: function(m, e) { hoverStopper(e, $element); }}\">\n  <span class=\"svc-text svc-text--normal svc-text--bold\" data-bind=\"text: $data.addNewQuestionText\">\n  </span>\n  <!-- ko with: questionTypeSelectorModel -->\n  <button type=\"button\"\n    data-bind=\"click: action, key2click, clickBubble: false, attr: { title: title, 'aria-label': title }\"\n    class=\"svc-page__question-type-selector\">\n    <sv-svg-icon class=\"svc-page__question-type-selector-icon\" params=\"iconName: iconName, size: 24, title: title\">\n    </sv-svg-icon>\n    <sv-popup params=\"model: popupModel\"></sv-popup>\n  </button>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/page-add-question.ts":
/*!**********************************!*\
  !*** ./src/page-add-question.ts ***!
  \**********************************/
/*! exports provided: AddNewQuestionViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewQuestionViewModel", function() { return AddNewQuestionViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./page-add-question.html */ "./src/page-add-question.html");
var AddNewQuestionViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-add-new-question-btn", {
    viewModel: {
        createViewModel: function (params) {
            return params.item.data;
        },
    },
    template: template
});


/***/ }),

/***/ "./src/page-navigator/page-navigator-item.html":
/*!*****************************************************!*\
  !*** ./src/page-navigator/page-navigator-item.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-page-navigator-item-content\"\n  data-bind=\"click: action, key2click, css: { 'svc-page-navigator-item--selected': active, 'svc-page-navigator-item--disabled': disabled }\">\n  <div class=\"svc-page-navigator-item__dot\" data-bind=\"attr: { title: text }\"></div>\n\n  <div class=\"svc-page-navigator-item__banner svc-item__banner\">\n    <span class=\"svc-text svc-text--small svc-text--bold\" data-bind=\"text: text\"></span>\n    <span class=\"svc-page-navigator-item__dot\"></span>\n  </div>\n</div>";

/***/ }),

/***/ "./src/page-navigator/page-navigator-item.ts":
/*!***************************************************!*\
  !*** ./src/page-navigator/page-navigator-item.ts ***!
  \***************************************************/
/*! exports provided: PageNavigatorItemViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNavigatorItemViewModel", function() { return PageNavigatorItemViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./page-navigator-item.html */ "./src/page-navigator/page-navigator-item.html");
// import template from "./page-navigator-item.html";
var PageNavigatorItemViewModel = /** @class */ (function () {
    function PageNavigatorItemViewModel(item) {
        var _this = this;
        this.item = item;
        this.action = function (data, event) {
            if (!_this.disabled) {
                _this.item.action();
                event.stopPropagation();
                event.preventDefault();
            }
        };
    }
    Object.defineProperty(PageNavigatorItemViewModel.prototype, "text", {
        get: function () {
            return this.item.title;
        },
        enumerable: false,
        configurable: true
    });
    PageNavigatorItemViewModel.prototype.unwrap = function (value) {
        if (typeof value !== "function") {
            return value;
        }
        else {
            return value();
        }
    };
    Object.defineProperty(PageNavigatorItemViewModel.prototype, "active", {
        get: function () {
            return !!this.unwrap(this.item.active);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageNavigatorItemViewModel.prototype, "disabled", {
        get: function () {
            var isEnabled = this.item.enabled;
            if (isEnabled === undefined)
                return false;
            return !knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](isEnabled);
        },
        enumerable: false,
        configurable: true
    });
    return PageNavigatorItemViewModel;
}());

knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-page-navigator-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new PageNavigatorItemViewModel(params.item);
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/page-navigator/page-navigator.html":
/*!************************************************!*\
  !*** ./src/page-navigator/page-navigator.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: visible -->\n<div class=\"svc-page-navigator\">\n    <div class=\"svc-page-navigator__selector\"\n        data-bind=\"click: togglePageSelector, key2click, attr: { title: pageSelectorCaption }, css: { 'svc-page-navigator__selector--opened': isPopupOpened }\">\n        <sv-svg-icon class=\"svc-page-navigator__navigator-icon\" params=\"iconName: icon, size: 24\"></sv-svg-icon>\n        <sv-popup params=\"model: popupModel, cssClass: 'svc-page-navigator__popup'\"></sv-popup>\n    </div>\n    <div>\n        <!-- ko foreach: visibleItems -->\n        <svc-page-navigator-item params=\"item: $data\"></svc-page-navigator-item>\n        <!-- /ko -->\n    </div>\n</div>\n<!-- /ko -->";

/***/ }),

/***/ "./src/page-navigator/page-navigator.ts":
/*!**********************************************!*\
  !*** ./src/page-navigator/page-navigator.ts ***!
  \**********************************************/
/*! exports provided: PageNavigatorView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNavigatorView", function() { return PageNavigatorView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__);




var template = __webpack_require__(/*! ./page-navigator.html */ "./src/page-navigator/page-navigator.html");
// import template from "./page-navigator.html";
var PageNavigatorView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageNavigatorView, _super);
    function PageNavigatorView(pagesController, pageEditMode) {
        return _super.call(this, pagesController, pageEditMode) || this;
    }
    PageNavigatorView.prototype.createActionBarCore = function (item) {
        var res = _super.prototype.createActionBarCore.call(this, item);
        new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](res);
        return res;
    };
    return PageNavigatorView;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__["PageNavigatorViewModel"]));

knockout__WEBPACK_IMPORTED_MODULE_1__["components"].register("svc-page-navigator", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new PageNavigatorView(params.controller, params.pageEditMode);
            model.setItemsContainer(componentInfo.element.parentElement);
            var implementor = new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](model);
            var scrollableViewPort = componentInfo.element.parentElement.parentElement.parentElement;
            model.setScrollableContainer(scrollableViewPort);
            if (params.pageEditMode !== "bypage") {
                scrollableViewPort.onscroll = function (ev) {
                    return model.onContainerScroll(ev.currentTarget);
                };
            }
            knockout__WEBPACK_IMPORTED_MODULE_1__["utils"].domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                scrollableViewPort.onscroll = undefined;
                model.dispose();
                implementor.dispose();
            });
            return model;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/page.html":
/*!***********************!*\
  !*** ./src/page.html ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: page -->\n<div class=\"svc-page__content\"\n  data-bind=\"click: select, key2click, clickBubble: false, css: css, attr: { id: page.id }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }\">\n  <div class=\"svc-page__content-actions\">\n    <!-- ko component: { name: 'sv-action-bar', params: { model: actionContainer } } -->\n    <!-- /ko -->\n  </div>\n  <!-- ko template: { name: 'survey-page', data: page } -->\n  <!-- /ko -->\n  <!-- ko component: { name: 'sv-action-bar', params: { model: footerActionsBar } } -->\n  <!-- /ko -->\n</div>\n<!-- /ko -->";

/***/ }),

/***/ "./src/page.ts":
/*!*********************!*\
  !*** ./src/page.ts ***!
  \*********************/
/*! exports provided: CreatorSurveyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatorSurveyPageComponent", function() { return CreatorSurveyPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);




var template = __webpack_require__(/*! ./page.html */ "./src/page.html");
var CreatorSurveyPageComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CreatorSurveyPageComponent, _super);
    function CreatorSurveyPageComponent(creator, _page) {
        var _this = _super.call(this, creator, knockout__WEBPACK_IMPORTED_MODULE_1__["unwrap"](_page)) || this;
        _this._page = _page;
        if (knockout__WEBPACK_IMPORTED_MODULE_1__["isSubscribable"](_page)) {
            _this.pageUpdater = _page.subscribe(function (newPage) {
                _this.detachElement(_this.currPage);
                _this.currPage = newPage;
                _this.attachElement(newPage);
            });
        }
        _this.currPage = knockout__WEBPACK_IMPORTED_MODULE_1__["unwrap"](_page);
        _this._page = _page;
        _this.attachElement(_this.page);
        new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](_this);
        return _this;
    }
    CreatorSurveyPageComponent.prototype.getPage = function () {
        return knockout__WEBPACK_IMPORTED_MODULE_1__["unwrap"](this._page);
    };
    CreatorSurveyPageComponent.prototype.fixedDispose = function () {
        this.pageUpdater && this.pageUpdater.dispose();
        _super.prototype.dispose.call(this);
        if (knockout__WEBPACK_IMPORTED_MODULE_1__["isWritableObservable"](this._page)) {
            this._page(undefined);
        }
        this._page = undefined;
    };
    CreatorSurveyPageComponent.prototype.dispose = function () {
    };
    return CreatorSurveyPageComponent;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__["PageAdorner"]));

knockout__WEBPACK_IMPORTED_MODULE_1__["components"].register("svc-page", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var creator = params.creator;
            var pageAdornerViewModel = new CreatorSurveyPageComponent(creator, params.page);
            pageAdornerViewModel.onPageSelectedCallback = function () {
                survey_creator_core__WEBPACK_IMPORTED_MODULE_3__["SurveyHelper"].scrollIntoViewIfNeeded(componentInfo.element);
            };
            knockout__WEBPACK_IMPORTED_MODULE_1__["utils"].domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                pageAdornerViewModel.onPageSelectedCallback = undefined;
                pageAdornerViewModel.fixedDispose();
            });
            return pageAdornerViewModel;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/property-panel/object-selector.html":
/*!*************************************************!*\
  !*** ./src/property-panel/object-selector.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko with: model -->\n<!-- ko if: isVisible -->\n<div class=\"svc-object-selector__content\" data-bind=\"component: { name: 'sv-list', params: { model: list } }\"></div>\n<!-- /ko -->\n<!-- /ko -->";

/***/ }),

/***/ "./src/property-panel/object-selector.ts":
/*!***********************************************!*\
  !*** ./src/property-panel/object-selector.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./object-selector.html */ "./src/property-panel/object-selector.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-object-selector", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = params.model;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](model);
            return { model: model };
        }
    },
    template: template
});


/***/ }),

/***/ "./src/property-panel/property-grid.html":
/*!***********************************************!*\
  !*** ./src/property-panel/property-grid.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko  -->\n    <!-- ko template: { name: 'survey-content', data: model.survey  } -->\n    <!-- /ko -->\n<!-- /ko -->";

/***/ }),

/***/ "./src/property-panel/property-grid.ts":
/*!*********************************************!*\
  !*** ./src/property-panel/property-grid.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);



var template = __webpack_require__(/*! ./property-grid.html */ "./src/property-panel/property-grid.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-property-grid", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var subscrib = knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
                var model = knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.model);
                new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](model);
            });
            knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                subscrib.dispose();
            });
            return params;
        }
    },
    template: template
});
survey_core__WEBPACK_IMPORTED_MODULE_2__["Serializer"].overrideClassCreator("buttongroup", function () {
    return new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["QuestionButtonGroup"]("");
});
survey_core__WEBPACK_IMPORTED_MODULE_2__["QuestionFactory"].Instance.registerQuestion("buttongroup", function (name) {
    var q = new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["QuestionButtonGroup"](name);
    q.choices = survey_core__WEBPACK_IMPORTED_MODULE_2__["QuestionFactory"].DefaultChoices;
    return q;
});


/***/ }),

/***/ "./src/question-editor-content.html":
/*!******************************************!*\
  !*** ./src/question-editor-content.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko let: { question: survey.getAllQuestions()[0] } -->\n  <!-- ko component: { name: survey.getElementWrapperComponentName(question), params: { componentData:  survey.getElementWrapperComponentData(question), templateData: { name: question.koElementType, data: question } } } -->\n  <!-- /ko -->\n<!-- /ko -->";

/***/ }),

/***/ "./src/question-editor-content.ts":
/*!****************************************!*\
  !*** ./src/question-editor-content.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./question-editor-content.html */ "./src/question-editor-content.html");
// import template from "./question-editor-content.html";
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-question-editor-content", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/question-embedded-survey.html":
/*!*******************************************!*\
  !*** ./src/question-embedded-survey.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: (!!embeddedSurvey && !!embeddedSurvey.currentPage) -->\n<div\n  data-bind=\"attr: { id: currentPageId }, template: { name: 'survey-page', data: embeddedSurvey.currentPage }\">\n</div>\n<!-- /ko -->";

/***/ }),

/***/ "./src/question-embedded-survey.ts":
/*!*****************************************!*\
  !*** ./src/question-embedded-survey.ts ***!
  \*****************************************/
/*! exports provided: QuestionEmbeddedSurvey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEmbeddedSurvey", function() { return QuestionEmbeddedSurvey; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);




var questionTemplate = __webpack_require__(/*! ./question-embedded-survey.html */ "./src/question-embedded-survey.html");
var QuestionEmbeddedSurvey = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuestionEmbeddedSurvey, _super);
    function QuestionEmbeddedSurvey(name) {
        return _super.call(this, name) || this;
    }
    Object.defineProperty(QuestionEmbeddedSurvey.prototype, "currentPageId", {
        get: function () {
            return !!this.embeddedSurvey.currentPage ? this.embeddedSurvey.currentPage.id : "";
        },
        enumerable: false,
        configurable: true
    });
    QuestionEmbeddedSurvey.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["QuestionImplementor"](this);
    };
    QuestionEmbeddedSurvey.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionEmbeddedSurvey;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__["QuestionEmbeddedSurveyModel"]));

new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["SurveyTemplateText"]().addText(questionTemplate, "question", "embeddedsurvey");
survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("embeddedsurvey", function () {
    return new QuestionEmbeddedSurvey("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("embeddedsurvey", function (name) {
    return new QuestionEmbeddedSurvey(name);
});


/***/ }),

/***/ "./src/question-link-value.html":
/*!**************************************!*\
  !*** ./src/question-link-value.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svc-action-button\n  params=\"text: linkValueText, click: koClickLink, selected: isSelected, disabled: !isClickable, classes: linkSetButtonCssClasses, title: tooltip\">\n</svc-action-button>\n<!-- ko if: !isReadOnly && showClear -->\n<svc-action-button\n  params=\"text: clearCaption, click: koClearLink, selected: isSelected, disabled: false, classes: linkClearButtonCssClasses\">\n</svc-action-button>\n<!-- /ko -->";

/***/ }),

/***/ "./src/question-link-value.ts":
/*!************************************!*\
  !*** ./src/question-link-value.ts ***!
  \************************************/
/*! exports provided: QuestionLinkValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionLinkValue", function() { return QuestionLinkValue; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);




var questionTemplate = __webpack_require__(/*! ./question-link-value.html */ "./src/question-link-value.html");
var QuestionLinkValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuestionLinkValue, _super);
    function QuestionLinkValue(name, json) {
        if (json === void 0) { json = null; }
        var _this = _super.call(this, name, json) || this;
        _this.clearCaption = survey_creator_core__WEBPACK_IMPORTED_MODULE_3__["editorLocalization"].getString("pe.clear");
        return _this;
    }
    QuestionLinkValue.prototype.onBaseCreating = function () {
        var _this = this;
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["QuestionImplementor"](this);
        this.koClickLink = function (model, event) {
            event.stopPropagation();
            _this.doLinkClick();
        };
        this.koClearLink = function (model, event) {
            event.stopPropagation();
            _this.doClearClick();
        };
    };
    QuestionLinkValue.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionLinkValue;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__["QuestionLinkValueModel"]));

new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["SurveyTemplateText"]().addText(questionTemplate, "question", "linkvalue");
survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("linkvalue", function (json) {
    return new QuestionLinkValue("", json);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("linkvalue", function (name) {
    return new QuestionLinkValue(name);
});


/***/ }),

/***/ "./src/question-widget.html":
/*!**********************************!*\
  !*** ./src/question-widget.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-question__adorner\"\n  data-bind=\"css: rootCss(), attr: { 'data-sv-drop-target-survey-element': element.name }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }\">\n  <!-- ko if: question.isInteractiveDesignElement -->\n  <div class=\"svc-question__content\" data-bind=\"click: koSelect, key2click, clickBubble: false, css: css()\">\n    <!-- ko if: allowDragging -->\n      <div class=\"svc-question__drag-area\"\n        data-bind=\"visible:allowDragging, event: {pointerdown: (model, event)=>{onPointerDown(event)}}\">\n        <div class=\"svc-question__drag-element\"></div>\n      </div>\n    <!-- /ko -->\n    <div class=\"svc-widget__content\">\n      <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } -->\n      <!-- /ko -->\n    </div>\n    <!-- ko if: isEmptyElement -->\n    <div class=\"svc-panel__placeholder_frame\">\n      <div class=\"svc-panel__placeholder\" data-bind=\"text: placeholderText\"></div>\n    </div>\n    <!-- /ko -->\n\n    <div class=\"svc-question__content-actions\">\n      <!-- ko component: { name: 'sv-action-bar', params: { model: actionContainer } } -->\n      <!-- /ko -->\n    </div>\n  </div>\n  <!-- /ko -->\n  <!-- ko ifnot: question.isInteractiveDesignElement -->\n  <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } -->\n  <!-- /ko -->\n  <!-- ko if: isEmptyElement -->\n  <div class=\"svc-panel__placeholder_frame\">\n    <div class=\"svc-panel__placeholder\" data-bind=\"text: placeholderText\"></div>\n  </div>\n  <!-- /ko -->\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/question-widget.ts":
/*!********************************!*\
  !*** ./src/question-widget.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adorners_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adorners/question */ "./src/adorners/question.ts");



var template = __webpack_require__(/*! ./question-widget.html */ "./src/question-widget.html");
knockout__WEBPACK_IMPORTED_MODULE_1__["components"].register("svc-widget-question", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_0__["QuestionAdornerViewModel"](params.componentData, params.templateData.data, params.templateData);
            Object(_adorners_question__WEBPACK_IMPORTED_MODULE_2__["createQuestionViewModel"])(params, componentInfo, model);
            return model;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/results-table-row.html":
/*!************************************!*\
  !*** ./src/results-table-row.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko with: model -->\n<tr data-bind=\"click: toggle, key2click\">\n    <td class=\"svd-dark-border-color\"\n        data-bind=\"style: { paddingLeft: textMargin }\">\n        <!-- ko if: isNode -->\n        <span class=\"svd-test-results__marker\"\n              data-bind=\"css: { 'svd-test-results__marker--expanded': !collapsed },\n                         style: { left: markerMargin }\">\n            <sv-svg-icon params=\"iconName: 'icon-expand_16x16', size: 16\"></sv-svg-icon>\n        </span>\n        <!-- /ko -->\n        <span data-bind=\"text: title\"></span></td>\n    <td data-bind=\"css: (isNode ? 'svd-test-results__node-value' : 'svd-dark-border-color'), text: getString(displayValue)\"></td>\n</tr>\n<!-- ko if: isNode && !collapsed -->\n<!-- ko foreach: data -->\n<!-- ko component: { name: 'survey-results-table-row', params: { model: $data } } -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->";

/***/ }),

/***/ "./src/results.html":
/*!**************************!*\
  !*** ./src/results.html ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svd-test-results\">\n    <div class=\"svd-test-results__header\">\n        <div class=\"svd-test-results__header-text\" data-bind=\"text: surveyResultsText\"></div>\n        <div class=\"svd-test-results__header-types\">\n            <svc-action-button\n                params=\"text: surveyResultsTableText, click: selectTableClick, disabled: false, selected: isTableSelected\">\n            </svc-action-button>\n            <svc-action-button\n                params=\"text: surveyResultsJsonText, click: selectJsonClick, disabled: false, selected: isJsonSelected\">\n            </svc-action-button>\n        </div>\n    </div>\n    <div class=\"svd-test-results__text svd-light-bg-color\" data-bind=\"visible: resultViewType === 'text'\">\n        <div data-bind=\"text: resultText\"></div>\n    </div>\n    <div class=\"svd-test-results__table svd-light-bg-color\" data-bind=\"visible: resultViewType === 'table'\">\n        <table>\n            <thead>\n                <tr class=\"svd-light-background-color\">\n                    <th class=\"svd-dark-border-color\" data-bind=\"text: resultsTitle\"></th>\n                    <th class=\"svd-dark-border-color\" data-bind=\"text: resultsDisplayValue\"></th>\n                </tr>\n            </thead>\n            <tbody>\n                <!-- ko foreach: resultData -->\n                <!-- ko component: { name: 'survey-results-table-row', params: { model: $data } } -->\n                <!-- /ko -->\n                <!-- /ko -->\n            </tbody>\n        </table>\n    </div>\n</div>";

/***/ }),

/***/ "./src/results.ts":
/*!************************!*\
  !*** ./src/results.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);



var templateHtml = __webpack_require__(/*! ./results.html */ "./src/results.html");
var rowTemplateHtml = __webpack_require__(/*! ./results-table-row.html */ "./src/results-table-row.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("survey-results", {
    viewModel: {
        createViewModel: function (params) {
            var model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__["SurveyResultsModel"](knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.survey));
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](model);
            return model;
        }
    },
    template: templateHtml
});
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("survey-results-table-row", {
    viewModel: {
        createViewModel: function (params) {
            var model = params.model;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](model);
            return { model: model };
        }
    },
    template: rowTemplateHtml
});


/***/ }),

/***/ "./src/row.html":
/*!**********************!*\
  !*** ./src/row.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: cssClasses\">\n  <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } -->\n  <!-- /ko -->\n</div>\n";

/***/ }),

/***/ "./src/row.ts":
/*!********************!*\
  !*** ./src/row.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__);




var template = __webpack_require__(/*! ./row.html */ "./src/row.html");
var KnockoutRowViewModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KnockoutRowViewModel, _super);
    function KnockoutRowViewModel(creator, row, templateData) {
        var _this = _super.call(this, creator, row, templateData) || this;
        _this.creator = creator;
        _this.row = row;
        _this.templateData = templateData;
        return _this;
    }
    return KnockoutRowViewModel;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__["RowViewModel"]));
knockout__WEBPACK_IMPORTED_MODULE_1__["components"].register("svc-row", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var creator = params.componentData.creator;
            var row = params.componentData.row;
            var model = new KnockoutRowViewModel(creator, row, params.templateData);
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](model);
            return model;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/side-bar/side-bar-tab.html":
/*!****************************************!*\
  !*** ./src/side-bar/side-bar-tab.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: item.visible -->\n<!-- ko component: { name: item.componentName, params: { model: item.model } } -->\n<!-- /ko -->\n<!-- /ko -->";

/***/ }),

/***/ "./src/side-bar/side-bar-tab.ts":
/*!**************************************!*\
  !*** ./src/side-bar/side-bar-tab.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./side-bar-tab.html */ "./src/side-bar/side-bar-tab.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-side-bar-tab", {
    viewModel: {
        createViewModel: function (params) {
            var item = params.item;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](item);
            return params;
        },
    },
    template: template
});


/***/ }),

/***/ "./src/side-bar/side-bar.html":
/*!************************************!*\
  !*** ./src/side-bar/side-bar.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko using: model -->\n<div class=\"svc-side-bar\" data-bind=\"css: { 'svc-flyout-side-bar' : flyoutPanelMode }, visible: hasVisibleTabs\">\n  <div class=\"svc-side-bar__shadow\" data-bind=\"click: collapseSidebar\"></div>\n  <div class=\"svc-flex-column svc-side-bar__wrapper\">\n    <div class=\"svc-side-bar__container\" data-bind=\"visible: visible\">\n      <div class=\"svc-side-bar__container-header\">\n        <div class=\"svc-side-bar__container-actions\">\n          <!-- ko component: { name: 'sv-action-bar', params: { model: toolbar } } -->\n          <!-- /ko -->\n        </div>\n        <!-- ko if: !!headerText -->\n        <div class=\"svc-side-bar__container-title\" data-bind=\"text: headerText\">\n        </div>\n        <!-- /ko -->\n      </div>\n      <div class=\"svc-side-bar__container-content\">\n        <!-- ko foreach: tabs -->\n        <!-- ko component: { name: 'svc-side-bar-tab', params: { item: $data } } -->\n        <!-- /ko -->\n        <!--/ko-->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /ko -->";

/***/ }),

/***/ "./src/side-bar/side-bar.ts":
/*!**********************************!*\
  !*** ./src/side-bar/side-bar.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./side-bar.html */ "./src/side-bar/side-bar.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-side-bar", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.model);
            model.initResizeManager(componentInfo.element.getElementsByClassName("svc-side-bar__container")[0]);
            var subscrib = knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
                var model = knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.model);
                new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](model);
            });
            knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                subscrib.dispose();
                model.resetResizeManager();
            });
            return params;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/simulator.html":
/*!****************************!*\
  !*** ./src/simulator.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  data-bind=\"class: getRootCss(), event: { keydown: tryToZoom, mouseover: (device === 'desktop' ? null : activateZoom), mouseout: (device === 'desktop' ? null : deactivateZoom) }\">\n  <!-- ko if: hasFrame -->\n  <div class=\"svd-simulator-wrapper\" id=\"svd-simulator-wrapper\"\n    data-bind=\"style: { width: simulatorFrame.frameWidth + 'px', height: simulatorFrame.frameHeight + 'px' }\">\n    <div class=\"svd-simulator-frame\"\n      data-bind=\"style: { width: simulatorFrame.landscapedFrameWidth + 'px', height: simulatorFrame.landscapedFrameHeight + 'px' }, css: simulatorFrame.cssClass\">\n    </div>\n    <div class=\"svd-simulator\"\n      data-bind=\"style: { width: simulatorFrame.deviceWidth + 'px', height: simulatorFrame.deviceHeight + 'px', transform: 'scale(' + simulatorFrame.scale + ') translate(-50%, -50%)' }\">\n      <survey-widget class=\"svd-simulator-content\" params=\"model: survey\"></survey-widget>\n    </div>\n  </div>\n  <!-- /ko -->\n  <!-- ko ifnot: hasFrame -->\n  <survey-widget class=\"svd-simulator-content\" params=\"model: survey\"></survey-widget>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/simulator.ts":
/*!**************************!*\
  !*** ./src/simulator.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var templateHtml = __webpack_require__(/*! ./simulator.html */ "./src/simulator.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("survey-simulator", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](params.model);
            return params.model;
        },
    },
    template: templateHtml,
});


/***/ }),

/***/ "./src/string-editor.html":
/*!********************************!*\
  !*** ./src/string-editor.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span data-bind=\"class: className\">\n    <span class=\"svc-string-editor__content\">\n        <div class=\"svc-string-editor__border\">\n            <sv-svg-icon class=\"svc-string-editor__button svc-string-editor__button--edit\" data-bind=\"click: edit\"\n                params=\"iconName: 'icon-edit', size: 16\"></sv-svg-icon>\n        </div>\n        <span class=\"svc-string-editor__input\">\n            <!-- ko ifnot: koHasHtml -->\n            <!-- ko template: {afterRender: afterRender} -->\n            <span role=\"textbox\" class=\"sv-string-editor\" spellcheck=\"false\"\n                data-bind=\"text: editValue, event: { focus: onFocus, paste: onPaste, blur: onBlur, input: onInput, keydown: onKeyDown, keyup: onKeyUp, mouseup: onMouseUp, compositionstart: onCompositionStart, compositionend: onCompositionEnd }, click: edit, attr: { 'aria-placeholder': placeholder, 'aria-label': this.placeholder || 'content editable', contenteditable: contentEditable }\"></span>\n            <!-- /ko -->\n            <!-- /ko -->\n            <!-- ko if: koHasHtml -->\n            <span role=\"textbox\" class=\"sv-string-editor sv-string-editor--html\" spellcheck=\"false\"\n                data-bind=\"html: editValue, event: { focus: onFocus, blur: onBlur, keydown: onKeyDown, keyup: onKeyUp, mouseup: onMouseUp, compositionstart: onCompositionStart, compositionend: onCompositionEnd }, click: edit, attr: { 'aria-placeholder': placeholder, 'aria-label': this.placeholder || 'content editable', contenteditable: contentEditable }\"></span>\n            <!-- /ko -->\n            <!-- ko if: showCharacterCounter -->\n            <!-- ko component: { name: 'sv-character-counter', params: { counter: characterCounter, remainingCharacterCounter: getCharacterCounterClass } } -->\n            <!-- /ko -->\n            <!-- /ko -->\n        </span>\n    </span>\n    <!-- ko if: errorText -->\n    <span class=\"svc-string-editor__error\" data-bind=\"text: errorText\"></span>\n    <!-- /ko -->\n</span>";

/***/ }),

/***/ "./src/string-editor.ts":
/*!******************************!*\
  !*** ./src/string-editor.ts ***!
  \******************************/
/*! exports provided: StringEditorViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringEditorViewModel", function() { return StringEditorViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);



var template = __webpack_require__(/*! ./string-editor.html */ "./src/string-editor.html");
function getEditorElement(element) {
    return element.nextSibling.getElementsByClassName("sv-string-editor")[0];
}
var StringEditorViewModel = /** @class */ (function () {
    function StringEditorViewModel(locString, creator, element) {
        var _this = this;
        this.locString = locString;
        this.creator = creator;
        this.implementor = undefined;
        this.afterRender = function () {
            _this.baseModel.afterRender();
        };
        this.errorText = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](null);
        this.baseModel = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__["StringEditorViewModelBase"](locString, creator);
        this.baseModel.getEditorElement = function () { return getEditorElement(element); };
        this.implementor = new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](this.baseModel);
        this.focusEditor = function () {
            getEditorElement(element).focus();
        };
        this.baseModel.blurEditor = function () {
            var editorElement = getEditorElement(element);
            editorElement.blur();
            editorElement.spellcheck = false;
        };
        locString.strChanged();
    }
    StringEditorViewModel.prototype.setLocString = function (locString) {
        this.baseModel.setLocString(locString);
        return locString;
    };
    Object.defineProperty(StringEditorViewModel.prototype, "koHasHtml", {
        get: function () {
            return this.locString.koHasHtml();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringEditorViewModel.prototype, "editValue", {
        get: function () {
            return this.baseModel.focused && this.baseModel.editAsText && this.locString.text || this.locString.koRenderedHtml();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringEditorViewModel.prototype, "className", {
        get: function () {
            return this.baseModel.className(this.locString.koRenderedHtml());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringEditorViewModel.prototype, "placeholder", {
        get: function () {
            return this.baseModel.placeholder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringEditorViewModel.prototype, "contentEditable", {
        get: function () {
            return this.baseModel.contentEditable ? "true" : "false";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringEditorViewModel.prototype, "characterCounter", {
        get: function () {
            return this.baseModel.characterCounter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringEditorViewModel.prototype, "showCharacterCounter", {
        get: function () {
            return this.baseModel.showCharacterCounter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringEditorViewModel.prototype, "getCharacterCounterClass", {
        get: function () {
            return this.baseModel.getCharacterCounterClass;
        },
        enumerable: false,
        configurable: true
    });
    StringEditorViewModel.prototype.onClick = function (sender, event) {
        this.baseModel.onClick(event);
    };
    StringEditorViewModel.prototype.onCompositionStart = function (sender, event) {
        this.baseModel.onCompositionStart(event);
    };
    StringEditorViewModel.prototype.onCompositionEnd = function (sender, event) {
        this.baseModel.onCompositionStart(event);
    };
    StringEditorViewModel.prototype.onInput = function (sender, event) {
        this.baseModel.onInput(event);
    };
    StringEditorViewModel.prototype.onPaste = function (sender, event) {
        this.baseModel.onPaste(event);
    };
    StringEditorViewModel.prototype.onBlur = function (sender, event) {
        event.currentTarget.spellcheck = false;
        this.baseModel.onBlur(event);
        this.errorText(this.baseModel.errorText);
        this.locString.searchElement = undefined;
    };
    StringEditorViewModel.prototype.onFocus = function (sender, event) {
        this.baseModel.onFocus(event);
    };
    StringEditorViewModel.prototype.onKeyUp = function (sender, event) {
        return this.baseModel.onKeyUp(event);
    };
    StringEditorViewModel.prototype.onKeyDown = function (sender, event) {
        var res = this.baseModel.onKeyDown(event);
        this.errorText(this.baseModel.errorText);
        return res;
    };
    StringEditorViewModel.prototype.onMouseUp = function (sender, event) {
        return this.baseModel.onMouseUp(event);
    };
    StringEditorViewModel.prototype.edit = function (model, _) {
        setTimeout(function () {
            model.focusEditor && model.focusEditor();
        }, 100);
        this.baseModel.onClick(_);
    };
    StringEditorViewModel.prototype.done = function (_, event) {
        this.baseModel.done(event);
    };
    StringEditorViewModel.prototype.dispose = function () {
        this.locString.onSearchChanged = undefined;
        if (!!this.implementor) {
            this.implementor.dispose();
            this.implementor = undefined;
        }
        this.focusEditor = undefined;
        this.baseModel.blurEditor = undefined;
        this.baseModel.getEditorElement = undefined;
        this.baseModel.dispose();
    };
    return StringEditorViewModel;
}());

function getSearchElement(element) {
    while (!!element && element.nodeName !== "SPAN") {
        var elements = element.parentElement.
            getElementsByClassName("sv-string-editor");
        element = elements.length > 0 ? elements[0] : undefined;
    }
    if (!!element && element.childNodes.length > 0)
        return element;
    return null;
}
function resetLocalizationSpan(element, locStr) {
    while (element.childNodes.length > 1) {
        element.removeChild(element.childNodes[1]);
    }
    element.childNodes[0].textContent = locStr.renderedHtml;
}
function applyLocStrOnSearchChanged(element, locStr) {
    locStr.onSearchChanged = function () {
        if (locStr.searchElement == undefined) {
            locStr.searchElement = getSearchElement(element);
        }
        if (locStr.searchElement == null)
            return;
        var el = locStr.searchElement;
        if (!locStr.highlightDiv) {
            locStr.highlightDiv = document.createElement("span");
            locStr.highlightDiv.style.backgroundColor = "lightgray";
        }
        if (locStr.searchIndex != undefined) {
            resetLocalizationSpan(el, locStr);
            var rng = document.createRange();
            rng.setStart(el.childNodes[0], locStr.searchIndex);
            rng.setEnd(el.childNodes[0], locStr.searchIndex + locStr.searchText.length);
            rng.surroundContents(locStr.highlightDiv);
        }
        else {
            resetLocalizationSpan(el, locStr);
            locStr.searchElement = undefined;
        }
    };
}
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__["editableStringRendererName"], {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var data = knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.locString);
            var model = new StringEditorViewModel(data.locStr, data.creator, componentInfo.element);
            var subscrib = knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
                var locStr = knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.locString).locStr;
                applyLocStrOnSearchChanged(componentInfo.element, locStr);
                model.setLocString(locStr);
            });
            knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                subscrib.dispose();
                model.dispose();
            });
            return model;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/survey-creator.html":
/*!*********************************!*\
  !*** ./src/survey-creator.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko ifnot: creator.isCreatorDisposed -->\n<div class=\"svc-creator\"\n  data-bind=\"css: {'svc-creator--mobile' : creator.isMobileView, 'svc-creator--touch' : creator.isTouch }\">\n  <div>\n    <!-- ko component: { name: 'svc-svg-bundle'} -->\n    <!-- /ko -->\n  </div>\n  <div class=\"svc-full-container svc-creator__area svc-flex-column\"\n    data-bind=\"css: { 'svc-creator__area--with-banner': !creator.haveCommercialLicense }\">\n    <div class=\"svc-flex-row svc-full-container\"\n      data-bind=\"css : { 'svc-creator__side-bar--left': creator.sidebarLocation == 'left' }\">\n      <div class=\"svc-flex-column svc-flex-row__element svc-flex-row__element--growing\">\n        <div class=\"svc-top-bar\">\n          <div class=\"svc-tabbed-menu-wrapper\" data-bind=\"visible: creator.showTabs\">\n            <!-- ko component: { name: 'svc-tabbed-menu', params: { model: creator.tabbedMenu } } -->\n            <!-- /ko -->\n          </div>\n          <!-- ko if: creator.showToolbar -->\n          <div class=\"svc-toolbar-wrapper\" data-bind=\"visible: creator.showToolbar\">\n            <!-- ko component: { name: 'sv-action-bar', params: { model: creator.toolbar } } -->\n            <!-- /ko -->\n          </div>\n          <!-- /ko -->\n        </div>\n        <div class=\"svc-creator__content-wrapper svc-flex-row\"\n          data-bind=\"css: {'svc-creator__content-wrapper--footer-toolbar' : creator.isMobileView }\">\n          <div class=\"svc-creator__content-holder svc-flex-column\">\n            <!-- ko foreach: creator.tabs -->\n            <!-- ko if: $parent.creator.viewType == id && ($data.visible === undefined || $data.visible) -->\n            <div class=\"svc-creator-tab\"\n              data-bind=\"attr: { id: 'scrollableDiv-' + id }, css: { 'svc-creator__toolbox--right': $parent.creator.toolboxLocation == 'right' }\">\n              <!-- ko component: { name: componentContent, params: { creator: $parent.creator, data: data } } -->\n              <!-- /ko -->\n            </div>\n            <!-- /ko -->\n            <!-- /ko -->\n          </div>\n        </div>\n        <!-- ko if: creator.isMobileView -->\n        <div class=\"svc-footer-bar\">\n          <div class=\"svc-toolbar-wrapper\" data-bind=\"visible: creator.isMobileView\">\n            <!-- ko component: { name: 'sv-action-bar', params: { model: creator.footerToolbar } } -->\n            <!-- /ko -->\n          </div>\n        </div>\n        <!-- /ko -->\n      </div>\n      <div data-bind=\"if: creator.sidebar, css: { 'sv-mobile-side-bar': creator.isMobileView }\">\n        <svc-side-bar params=\"model: creator.sidebar\"> </svc-side-bar>\n      </div>\n    </div>\n    <!-- ko ifnot: creator.haveCommercialLicense -->\n    <div class=\"svc-creator__banner\">\n      <span class=\"svc-creator__non-commercial-text\"><a href=\"https://surveyjs.io/buy\"\n          data-bind=\"text: creator.licenseText\"></a></span>\n    </div>\n    <!-- /ko -->\n    <!-- ko component: { name: 'sv-notifier', params: { notifier: creator.notifier } } -->\n    <!-- /ko -->\n  </div>\n</div>\n<!-- /ko -->";

/***/ }),

/***/ "./src/survey-creator.ts":
/*!*******************************!*\
  !*** ./src/survey-creator.ts ***!
  \*******************************/
/*! exports provided: CreatorViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatorViewModel", function() { return CreatorViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./survey-creator.html */ "./src/survey-creator.html");
// import template from "./creator.html";
var CreatorViewModel = /** @class */ (function () {
    function CreatorViewModel(creator, rootNode) {
        this.creator = creator;
        this.rootNode = rootNode;
        this.creator.setRootElement(this.rootNode);
        new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](this.creator.notifier);
        new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](this.creator.toolbox);
        // new ImplementorBase(this.creator.dragDropSurveyElements);
        // new ImplementorBase(this.creator.dragDropChoices);
        new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](this.creator);
    }
    CreatorViewModel.prototype.dispose = function () {
        this.creator.unsubscribeRootElement();
    };
    return CreatorViewModel;
}());

knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("survey-creator", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var element = componentInfo.element;
            var model = new CreatorViewModel(params.creator, element);
            knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(element, function () {
                model.dispose();
            });
            return model;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/survey-renderers/dropdown/dropdown.html":
/*!*****************************************************!*\
  !*** ./src/survey-renderers/dropdown/dropdown.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-survey-dropdown\">\n  <select\n    data-bind=\"if: true, attr: {id: question.inputId, 'aria-label': question.locTitle.renderedHtml, 'aria-invalid': question.errors.length > 0, 'aria-describedby': question.errors.length > 0 ? question.id + '_errors' : null}, value: question.renderedValue, valueAllowUnset: true, css: 'svc-survey-dropdown__control'\"\n  >\n    <!-- ko if: question.showOptionsCaption -->\n    <option data-bind=\"text:question.optionsCaption, value: null\"></option>\n    <!-- /ko -->\n    <!-- ko foreach: question.visibleChoices -->\n    <option\n      data-bind=\"value: $data.value, text: $data.text, attr: { disabled: !$data.isEnabled }\"\n    ></option>\n    <!-- /ko -->\n  </select>\n  <div class=\"svc-survey-dropdown__container\">\n    <div\n      class=\"svc-survey-dropdown__form\"\n      tabindex=\"0\"\n      data-bind=\"css: { 'svc-survey-dropdown__form--disabled': question.readOnly }, hasFocus: isFocused, event: { blur: onBlur }\"\n    >\n      <span\n        data-bind=\"css: { 'svc-survey-dropdown__placeholder': !question.renderedValue} , text: question.renderedValue || (question.showOptionsCaption ? question.optionsCaption : '') \"\n      ></span>\n      <span\n        class=\"svc-survey-dropdown__button\"\n        data-bind=\"click: toggle, key2click, disable: question.readOnly, css: { 'svc-survey-dropdown__button--active': isExpanded }\"\n      >\n        <sv-svg-icon\n          class=\"svc-survey-dropdown__button-icon\"\n          params=\"iconName: 'icon-dropdownarrow', size: 24\"\n        ></sv-svg-icon>\n      </span>\n    </div>\n\n    <ul\n      class=\"svc-survey-dropdown__list\"\n      data-bind=\"visible: isExpanded, event: { mousedown: function (data, e) { e.preventDefault(); }}\"\n    >\n      <!-- ko if: question.showOptionsCaption -->\n      <li\n        class=\"svc-survey-dropdown__list-item\"\n        data-bind=\"css: { 'svc-survey-dropdown__list-item--disabled': !isEnabled, 'svc-survey-dropdown__list-item--selected': question.koValue() == $data.value }, text:question.optionsCaption\"\n      ></li>\n      <!-- /ko -->\n      <!--ko foreach: question.visibleChoices-->\n      <li\n        class=\"svc-survey-dropdown__list-item\"\n        data-bind=\"css: { 'svc-survey-dropdown__list-item--disabled': !isEnabled, 'svc-survey-dropdown__list-item--selected': question.koValue() == $data.value }, text: $data.text, click: $parent.selectItem, key2click\"\n      ></li>\n      <!-- /ko -->\n    </ul>\n  </div>\n  <!-- ko if: question.hasOther -->\n  <div\n    class=\"form-group\"\n    data-bind=\"template: { name: 'survey-comment', data: {'question': question, 'visible': question.isOtherSelected } }, style: {display: question.isFlowLayout ? 'inline': ''}\"\n  ></div>\n  <!-- /ko -->\n</div>\n";

/***/ }),

/***/ "./src/survey-renderers/dropdown/index.ts":
/*!************************************************!*\
  !*** ./src/survey-renderers/dropdown/index.ts ***!
  \************************************************/
/*! exports provided: DropdownEditorViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownEditorViewModel", function() { return DropdownEditorViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./dropdown.html */ "./src/survey-renderers/dropdown/dropdown.html");
var DropdownEditorViewModel = /** @class */ (function () {
    function DropdownEditorViewModel(question) {
        var _this = this;
        this.question = question;
        this.isExpanded = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](false);
        this.isFocused = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](false);
        this.selectItem = function (itemValue) {
            _this.question.value = itemValue.value;
            _this.isExpanded(false);
            _this.isFocused(true);
        };
    }
    DropdownEditorViewModel.prototype.toggle = function () {
        this.isExpanded(!this.isExpanded());
    };
    DropdownEditorViewModel.prototype.onBlur = function () {
        this.isExpanded(false);
    };
    return DropdownEditorViewModel;
}());

knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sjs-dropdown", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new DropdownEditorViewModel(params.question);
        },
    },
    template: template,
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory"].Instance.registerRenderer("dropdown", "dropdown", "sjs-dropdown");


/***/ }),

/***/ "./src/svg-bundle.ts":
/*!***************************!*\
  !*** ./src/svg-bundle.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-svg-bundle", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var element = componentInfo.element.querySelector && componentInfo.element.querySelector("svg") || componentInfo.element.nextElementSibling;
            element.innerHTML = survey_core__WEBPACK_IMPORTED_MODULE_1__["SvgRegistry"].iconsRenderedHtml();
            return params;
        }
    },
    template: "<svg id='sv-icon-holder-global-container' style=\"display:none\"></svg>"
});


/***/ }),

/***/ "./src/tabbed-menu/tabbed-menu-item.html":
/*!***********************************************!*\
  !*** ./src/tabbed-menu/tabbed-menu-item.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"svc-tabbed-menu-item\"\n  data-bind=\"click: action, key2click, css: { 'svc-tabbed-menu-item--selected': active, 'svc-tabbed-menu-item--disabled': disabled }\"\n>\n  <span\n    class=\"svc-text svc-text--normal svc-tabbed-menu-item__text\"\n    data-bind=\"text: title, css: { 'svc-text--bold': active }\"\n  ></span>\n</div>\n";

/***/ }),

/***/ "./src/tabbed-menu/tabbed-menu-item.ts":
/*!*********************************************!*\
  !*** ./src/tabbed-menu/tabbed-menu-item.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./tabbed-menu-item.html */ "./src/tabbed-menu/tabbed-menu-item.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-tabbed-menu-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.item;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/tabbed-menu/tabbed-menu.html":
/*!******************************************!*\
  !*** ./src/tabbed-menu/tabbed-menu.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-tabbed-menu\">\n  <!-- ko foreach: renderedActions -->\n  <span\n    class=\"svc-tabbed-menu-item-container\"\n    data-bind=\"css: { 'sv-action--hidden': !isVisible }, class: $data.css\"\n  >\n    <div class=\"sv-action__content\">\n    <!-- ko component: { name: $data.component || 'svc-tabbed-menu-item', params: { item: $data } } -->\n    <!-- /ko -->\n    </div>\n  </span>\n  <!-- /ko -->\n</div>\n";

/***/ }),

/***/ "./src/tabbed-menu/tabbed-menu.ts":
/*!****************************************!*\
  !*** ./src/tabbed-menu/tabbed-menu.ts ***!
  \****************************************/
/*! exports provided: TabbedMenuViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbedMenuViewModel", function() { return TabbedMenuViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);



var template = __webpack_require__(/*! ./tabbed-menu.html */ "./src/tabbed-menu/tabbed-menu.html");
// import template from "./tabbed-menu.html";
var TabbedMenuViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-tabbed-menu", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = params.model;
            var container = componentInfo.element.nextElementSibling;
            var reactivityImplementor = new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ActionContainerImplementor"](model);
            var manager = new survey_core__WEBPACK_IMPORTED_MODULE_2__["ResponsivityManager"](container, model, ".svc-tabbed-menu-item-container:not(.sv-dots)>.sv-action__content");
            knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(container, function () {
                manager.dispose();
                reactivityImplementor.dispose();
            });
            return model;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/tabs/designer.html":
/*!********************************!*\
  !*** ./src/tabs/designer.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: isToolboxVisible -->\n<svc-adaptive-toolbox params=\"model: creator\"></svc-adaptive-toolbox>\n<!-- /ko -->\n<div class=\"svc-tab-designer\" data-bind=\"css: getRootCss(), click: clickDesigner\">\n  <div class=\"svc-tab-designer_content\">\n    <!-- ko if: showPlaceholder -->\n    <!-- ko if: (creator.showHeaderInEmptySurvey && creator.allowEditSurveyTitle) -->\n    <div class=\"svc-designer-header\">\n      <!-- ko template: { name: 'survey-header', data: survey } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n    <div class=\"svc-designer__placeholder-container\"\n      data-bind=\"attr: { 'data-sv-drop-target-survey-element': 'newGhostPage' }\">\n      <span class=\"svc-designer-placeholder-text svc-text svc-text--normal\" data-bind=\"text: placeholderText\"> </span>\n      <svc-page class=\"svc-designer-placeholder-page\" params=\"survey: survey, creator: creator, page: newPage\">\n      </svc-page>\n    </div>\n    <!-- /ko -->\n\n    <!-- ko if: !showPlaceholder -->\n\n    <div data-bind=\"css: designerCss, style:{maxWidth: survey.renderedWidth}\">\n      <!-- ko if: creator.allowEditSurveyTitle -->\n      <div class=\"svc-designer-header\">\n        <!-- ko template: { name: 'survey-header', data: survey } -->\n        <!-- /ko -->\n      </div>\n      <!-- /ko -->\n\n      <!-- ko if: survey.isShowProgressBarOnTop -->\n      <!-- ko component: { name: survey.getProgressTypeComponent(), params: { model: survey } } -->\n      <!-- /ko -->\n      <!-- /ko -->\n\n      <!-- ko ifnot: creator.pageEditMode === 'bypage' -->\n      <!-- ko foreach: survey.pages -->\n      <svc-page class=\"svc-page\"\n        data-bind=\"attr: { 'data-sv-drop-target-survey-element': $data.name, 'data-sv-drop-target-page': $data.name }\"\n        params=\"survey: $parent.survey, page: $data, creator: $parent.creator\"></svc-page>\n      <!-- /ko -->\n      <!-- ko if: showNewPage -->\n      <svc-page class=\"svc-page\" data-bind=\"attr: { 'data-sv-drop-target-survey-element': 'newGhostPage' }\"\n        params=\"survey: survey, creator: creator, page: newPage\"></svc-page>\n      <!-- /ko -->\n      <!-- /ko -->\n\n      <!-- ko if: pagesController.page2Display && creator.pageEditMode === 'bypage' -->\n      <svc-page class=\"svc-page\"\n        data-bind=\"attr: { 'data-sv-drop-target-survey-element': 'newGhostPage', 'data-sv-drop-target-page': pagesController.page2Display.name }\"\n        params=\"survey: survey, page: pagesController.page2Display, creator: creator\"></svc-page>\n      <!-- /ko -->\n\n      <!-- ko if: survey.isShowProgressBarOnBottom -->\n      <!-- ko component: { name: survey.getProgressTypeComponent(), params: { model: survey } } -->\n      <!-- /ko -->\n      <!-- /ko -->\n    </div>\n\n    <!-- ko if: creator.showPageNavigator -->\n    <div class=\"svc-tab-designer__page-navigator\">\n      <svc-page-navigator params=\"controller: pagesController, pageEditMode: creator.pageEditMode\">\n      </svc-page-navigator>\n    </div>\n    <!-- /ko -->\n    <!-- /ko -->\n  </div>\n</div>";

/***/ }),

/***/ "./src/tabs/designer.ts":
/*!******************************!*\
  !*** ./src/tabs/designer.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./designer.html */ "./src/tabs/designer.html");
// import template from "./designer.html";
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-tab-designer", {
    viewModel: {
        createViewModel: function (params) {
            var model = params.data.model;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](model);
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](model.pagesController);
            return model;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/tabs/json-editor-ace.html":
/*!***************************************!*\
  !*** ./src/tabs/json-editor-ace.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-creator-tab__content\">\n    <div class=\"svc-json-editor-tab__content\">\n        <div class=\"svc-json-editor-tab__ace-editor\"></div>\n        <div class=\"svc-json-editor-tab__errros_list\" data-bind=\"visible: hasErrors\">\n            <!-- ko component: { name: \"sv-list\", params: { model: errorList } } -->\n            <!-- /ko -->\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ "./src/tabs/json-editor-ace.ts":
/*!*************************************!*\
  !*** ./src/tabs/json-editor-ace.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./json-editor-ace.html */ "./src/tabs/json-editor-ace.html");
// import template from "./json-editor-ace.html";
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-tab-json-editor-ace", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var aceEditor = ace.edit((componentInfo.element.nextElementSibling.querySelector(".svc-json-editor-tab__ace-editor")));
            var plugin = params.data;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](plugin.model);
            plugin.model.init(aceEditor);
            return plugin.model;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/tabs/json-editor-textarea.html":
/*!********************************************!*\
  !*** ./src/tabs/json-editor-textarea.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-creator-tab__content\">\n  <div class=\"svc-json-editor-tab__content\">\n    <textarea class=\"svc-json-editor-tab__content-area\"\n      data-bind=\"textInput: text, disable: readOnly, attr: { 'aria-label': ariaLabel }, event: { keydown: checkKey}\">\n    </textarea>\n    <div class=\"svc-json-editor-tab__errros_list\" data-bind=\"visible: hasErrors\">\n      <!-- ko component: { name: \"sv-list\", params: { model: errorList } } -->\n      <!-- /ko -->\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ "./src/tabs/json-editor-textarea.ts":
/*!******************************************!*\
  !*** ./src/tabs/json-editor-textarea.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./json-editor-textarea.html */ "./src/tabs/json-editor-textarea.html");
// import template from "./json-editor-textarea.html";
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-tab-json-editor-textarea", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var plugin = params.data;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](plugin.model);
            var model = plugin.model;
            model.canShowErrors = false;
            var el = componentInfo.element.parentElement;
            if (!!el) {
                var els = el.getElementsByClassName("svc-json-editor-tab__content-area");
                if (els.length > 0) {
                    model.textElement = els[0];
                }
            }
            return model;
        }
    },
    template: template
});


/***/ }),

/***/ "./src/tabs/json-error-item.html":
/*!***************************************!*\
  !*** ./src/tabs/json-error-item.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: $data.item.iconName -->\n<!-- ko component: { name: \"sv-svg-icon\", params: { iconName: $data.item.iconName, size: $data.item.iconSize, css: 'svc-json-error__icon' } }-->\n<!-- /ko -->\n<!-- /ko -->\n<div class=\"svc-json-error__container\">\n  <div class=\"svc-json-error__title\">\n    <!-- ko template: { name: 'survey-string', data: item.locTitle } --><!-- /ko -->\n  </div>\n  <!-- ko if: item.data.showFixButton -->\n  <button type=\"button\"\n    data-bind=\"click: item.data.fixError, key2click, clickBubble: false, attr: { title: item.data.fixButtonTitle, 'aria-label': item.data.fixButtonTitle }\"\n    class=\"svc-json-error__fix-button\">\n    <!-- ko component: { name: \"sv-svg-icon\", params: { iconName: item.data.fixButtonIcon, size: \"auto\" } } -->\n    <!-- /ko -->\n  </button>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/tabs/json-error-item.ts":
/*!*************************************!*\
  !*** ./src/tabs/json-error-item.ts ***!
  \*************************************/
/*! exports provided: JsonErrorItemViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonErrorItemViewModel", function() { return JsonErrorItemViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./json-error-item.html */ "./src/tabs/json-error-item.html");
var JsonErrorItemViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("json-error-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return {
                item: params.item,
            };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/tabs/logic-operator.html":
/*!**************************************!*\
  !*** ./src/tabs/logic-operator.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: question.cssClasses.selectWrapper\">\n  <!-- ko ifnot: question.isReadOnly -->\n  <div data-bind=\"css: question.getControlClass(),\n  click: click, \n  event: { keyup: keyup },\n  attr: { \n    id: question.inputId, \n    required: question.isRequired, \n    tabindex: question.isInputReadOnly ? undefined : 0,\n    disabled: question.isInputReadOnly,\n    role: question.ariaRole,\n    'aria-required': question.ariaRequired, \n    'aria-label': question.ariaLabel, \n    'aria-invalid': question.ariaInvalid, \n    'aria-describedby': question.ariaDescribedBy \n  },\">\n    <div data-bind=\"css: question.cssClasses.controlValue\">\n      <!-- ko if: question.selectedItemLocText -->\n      <!-- ko template: { name: 'survey-string', data: question.selectedItemLocText } -->\n      <!-- /ko -->\n      <!-- /ko -->\n      <div data-bind=\"text: question.readOnlyText\"></div>\n    </div>\n    <!-- ko if: (question.allowClear && question.cssClasses.cleanButtonIconId) -->\n    <div data-bind=\"css: question.cssClasses.cleanButton, click: clear, visible: !question.isEmpty() \">\n      <!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.cleanButtonSvg, iconName: question.cssClasses.cleanButtonIconId, size: 'auto', title: question.clearCaption } } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n  <!-- ko component: { name: \"sv-popup\", params: { model: model.popupModel }} -->\n  <!-- /ko -->\n  <!-- /ko -->\n  <!-- ko if: question.isReadOnly -->\n  <div disabled data-bind=\"css: question.getControlClass(), attr: { id: question.inputId }, \">\n    <!-- ko if: question.selectedItemLocText -->\n    <!-- ko template: { name: 'survey-string', data: question.selectedItemLocText } -->\n    <!-- /ko -->\n    <!-- /ko -->\n    <div data-bind=\"text: question.readOnlyText\"></div>\n  </div>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/tabs/logic-operator.ts":
/*!************************************!*\
  !*** ./src/tabs/logic-operator.ts ***!
  \************************************/
/*! exports provided: LogicOperatorViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicOperatorViewModel", function() { return LogicOperatorViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);




var template = __webpack_require__(/*! ./logic-operator.html */ "./src/tabs/logic-operator.html");
var LogicOperatorViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-logic-operator", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var q = params.question;
            var click = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClick(e);
            };
            var clear = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClear(e);
            };
            var keyup = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.keyHandler(e);
            };
            if (!q.dropdownListModel) {
                q.dropdownListModel = new survey_core__WEBPACK_IMPORTED_MODULE_2__["DropdownListModel"](params.question);
            }
            Object(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__["initLogicOperator"])(q);
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](q.dropdownListModel);
            return { question: q, model: q.dropdownListModel, click: click, clear: clear, keyup: keyup };
        },
    },
    template: template,
});
survey_core__WEBPACK_IMPORTED_MODULE_2__["RendererFactory"].Instance.registerRenderer("dropdown", "logicoperator", "sv-logic-operator");


/***/ }),

/***/ "./src/tabs/logic.html":
/*!*****************************!*\
  !*** ./src/tabs/logic.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-creator-tab__content\">\n  <div class=\"svc-plugin-tab__content svc-logic-tab__content\" data-bind=\"css: { 'svc-logic-tab__empty': !hasItems }\">\n    <!-- ko template: { name: 'survey-content', data: itemsSurvey  } -->\n    <!-- /ko -->\n    <!-- ko if: !hasItems -->\n    <div class=\"svc-logic-tab__content-empty\">\n      <span class=\"svc-text\" data-bind=\"text: $data.emptyTabPlaceholder\"></span>\n    </div>\n    <!-- /ko -->\n    <!-- ko if: !readOnly -->\n    <div role=\"button\" class=\"svc-logic-tab__content-action svc-btn\"\n      data-bind=\"click: addNewButton.action, key2click, clickBubble: false, css: {'svc-logic-tab__content-action--disabled': (addNewButton.enabled !== undefined && !addNewButton.enabled) }\">\n      <span class=\"svc-text svc-text--normal svc-text--bold\" data-bind=\"text: addNewButton.title\">\n      </span>\n    </div>\n    <!-- /ko -->\n  </div>\n</div>";

/***/ }),

/***/ "./src/tabs/logic.ts":
/*!***************************!*\
  !*** ./src/tabs/logic.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var templateHtml = __webpack_require__(/*! ./logic.html */ "./src/tabs/logic.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-tab-logic", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var plugin = params.data;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](plugin.model);
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](plugin.model.addNewButton);
            return plugin.model;
        }
    },
    template: templateHtml
});


/***/ }),

/***/ "./src/tabs/test-complete.html":
/*!*************************************!*\
  !*** ./src/tabs/test-complete.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div role=\"button\" class=\"svc-preview__test-again svc-btn\"\n  data-bind=\"click: testAgainAction.action, key2click, clickBubble: false\">\n  <span class=\"svc-text svc-text--normal svc-text--bold\" data-bind=\"text: testAgainAction.title\">\n  </span>\n</div>";

/***/ }),

/***/ "./src/tabs/test-complete.ts":
/*!***********************************!*\
  !*** ./src/tabs/test-complete.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./test-complete.html */ "./src/tabs/test-complete.html");
// import template from "./test-complete.html";
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-complete-page", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = params.model;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](model.testAgainAction);
            return {
                testAgainAction: model.testAgainAction
            };
        },
    },
    template: template
});


/***/ }),

/***/ "./src/tabs/test.html":
/*!****************************!*\
  !*** ./src/tabs/test.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-creator-tab__content svc-test-tab__content\"\n  data-bind=\"css: { 'svc-creator-tab__content--with-toolbar' : isPageToolbarVisible }\">\n  <div class=\"svc-plugin-tab__content\">\n    <survey-simulator params=\"model: simulator\"></survey-simulator>\n    <!-- ko if: showResults -->\n    <survey-results params=\"survey: survey\"></survey-results>\n    <!-- /ko -->\n  </div>\n  <!-- ko if: isPageToolbarVisible -->\n  <div class=\"svc-plugin-tab__content-actions svc-test-tab__content-actions\">\n    <!-- ko component: { name: 'sv-action-bar', params: { model: pages } } -->\n    <!-- /ko -->\n  </div>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/tabs/test.ts":
/*!**************************!*\
  !*** ./src/tabs/test.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./test.html */ "./src/tabs/test.html");
// import template from "./test.html";
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-tab-test", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var plugin = params.data;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](plugin.model.simulator);
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](plugin.model);
            return plugin.model;
        },
    },
    template: template
});


/***/ }),

/***/ "./src/tabs/theme.html":
/*!*****************************!*\
  !*** ./src/tabs/theme.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-creator-tab__content svc-test-tab__content\"\n  data-bind=\"css: { 'svc-creator-tab__content--with-toolbar' : isPageToolbarVisible }\">\n  <div class=\"svc-plugin-tab__content\">\n    <survey-simulator params=\"model: simulator\"></survey-simulator>\n    <!-- ko if: showResults -->\n    <survey-results params=\"survey: survey\"></survey-results>\n    <!-- /ko -->\n  </div>\n  <!-- ko if: isPageToolbarVisible -->\n  <div class=\"svc-plugin-tab__content-actions svc-test-tab__content-actions\">\n    <!-- ko component: { name: 'sv-action-bar', params: { model: pages } } -->\n    <!-- /ko -->\n  </div>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/tabs/theme.ts":
/*!***************************!*\
  !*** ./src/tabs/theme.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./theme.html */ "./src/tabs/theme.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-tab-theme", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var plugin = params.data;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](plugin.model.simulator);
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](plugin.model.testAgainAction);
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](plugin.model);
            return plugin.model;
        },
    },
    template: template
});


/***/ }),

/***/ "./src/tabs/translation-line-skeleton.html":
/*!*************************************************!*\
  !*** ./src/tabs/translation-line-skeleton.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sd-translation-line-skeleton\">\n</div>\n";

/***/ }),

/***/ "./src/tabs/translation-line-skeleton.ts":
/*!***********************************************!*\
  !*** ./src/tabs/translation-line-skeleton.ts ***!
  \***********************************************/
/*! exports provided: Skeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return Skeleton; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./translation-line-skeleton.html */ "./src/tabs/translation-line-skeleton.html");
var Skeleton;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sd-translation-line-skeleton", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return { question: params.question };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/tabs/translation.html":
/*!***********************************!*\
  !*** ./src/tabs/translation.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-creator-tab__content svc-translation-tab\">\n  <div class=\"st-content\">\n    <!-- ko if: $data.isEmpty -->\n    <div class=\"st-no-strings\">\n      <span data-bind=\"text: $data.noStringsText\"></span>\n    </div>\n    <!-- /ko -->\n    <!-- ko ifnot: $data.isEmpty -->\n    <div class=\"svc-flex-column st-strings-wrapper\">\n      <div class=\"svc-flex-row st-strings-header\">\n        <!-- ko template: { name: 'survey-content', data: $data.stringsHeaderSurvey  } --><!-- /ko -->\n      </div>\n      <div class=\"svc-flex-row svc-plugin-tab__content st-strings\">\n        <!-- ko template: { name: 'survey-content', data: $data.stringsSurvey  } --><!-- /ko -->\n      </div>\n    </div>\n    <!-- /ko -->\n  </div>\n</div>\n";

/***/ }),

/***/ "./src/tabs/translation.ts":
/*!*********************************!*\
  !*** ./src/tabs/translation.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__);


var templateHtml = __webpack_require__(/*! ./translation.html */ "./src/tabs/translation.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-tab-translation", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var plugin = params.data;
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](plugin.model);
            plugin.model.makeObservable(function (obj) {
                new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](obj);
            });
            return plugin.model;
        }
    },
    template: templateHtml
});


/***/ }),

/***/ "./src/toolbox/adaptive-toolbox.html":
/*!*******************************************!*\
  !*** ./src/toolbox/adaptive-toolbox.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-toolbox\" data-bind=\"css: { 'svc-toolbox--compact': $data.toolbox.isCompact }\">\n  <div class=\"svc-toolbox__container\">\n    <!-- ko ifnot: $data.toolbox.isCompact || categories().length == 1 || !$data.toolbox.showCategoryTitles -->\n    <!-- ko foreach: categories -->\n    <div class=\"svc-toolbox__category\" data-bind=\"css: { 'svc-toolbox__category--collapsed': $data.collapsed }\">\n      <!-- ko if: $parent.categories().length > 1 -->\n      <div class=\"svc-toolbox__category-header\"\n        data-bind=\"click: toggleState, key2click, css: { 'svc-toolbox__category-header--collapsed': $data.toolbox.canCollapseCategories }\">\n        <span class=\"svc-toolbox__category-title\" data-bind=\"text: name\"></span>\n        <!-- ko if: $data.toolbox.canCollapseCategories -->\n        <div class=\"svc-toolbox__category-header__controls\">\n          <sv-svg-icon class=\"svc-toolbox__category-header__button svc-string-editor__button--expand\"\n            data-bind=\"visible: collapsed\" params=\"iconName: 'icon-arrow-down', size: 24\"></sv-svg-icon>\n          <sv-svg-icon class=\"svc-toolbox__category-header__button svc-string-editor__button--collapse\"\n            data-bind=\"visible: !collapsed\" params=\"iconName: 'icon-arrow-up', size: 24\"></sv-svg-icon>\n        </div>\n        <!-- /ko -->\n      </div>\n      <!-- /ko -->\n      <!-- ko foreach: items -->\n      <!-- ko component: { name: $data.component || 'svc-toolbox-tool', params: { item: $data, creator: $parents[1].creator, isCompact: false } } -->\n      <!-- /ko -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n    <!-- /ko -->\n\n    <!-- ko if: $data.toolbox.isCompact || categories().length == 1 || !$data.toolbox.showCategoryTitles -->\n    <div class=\"svc-toolbox__category\">\n      <!-- ko foreach: $data.toolbox.renderedActions -->\n      <!-- ko component: { name: 'svc-toolbox-tool', params: { item: $data, creator: $parent.creator, isCompact: $parent.toolbox.isCompact } } -->\n      <!-- /ko -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n</div>";

/***/ }),

/***/ "./src/toolbox/adaptive-toolbox.ts":
/*!*****************************************!*\
  !*** ./src/toolbox/adaptive-toolbox.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbox */ "./src/toolbox/toolbox.ts");



var template = __webpack_require__(/*! ./adaptive-toolbox.html */ "./src/toolbox/adaptive-toolbox.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-adaptive-toolbox", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new _toolbox__WEBPACK_IMPORTED_MODULE_2__["ToolboxViewModel"](params.model);
            var container = componentInfo.element.querySelector(".svc-toolbox");
            var manager = new survey_core__WEBPACK_IMPORTED_MODULE_1__["VerticalResponsivityManager"](container, params.model.toolbox, ".svc-toolbox__tool:not(.sv-dots)");
            knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                manager.dispose();
                model.dispose();
            });
            return model;
        },
    },
    template: template
});


/***/ }),

/***/ "./src/toolbox/toolbox-item.html":
/*!***************************************!*\
  !*** ./src/toolbox/toolbox-item.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-toolbox__item\"\n  data-bind=\"attr: { role: 'button', 'aria-label': item.tooltip, title: item.tooltip }, css: item.className, click: (model, event)=>{ $parent.click(event); return true;}, key2click\">\n  <span class=\"svc-toolbox__item-container\">\n    <sv-svg-icon params=\"iconName: iconName, size: 24, title: item.tooltip\"></sv-svg-icon>\n  </span>\n  <!-- ko if: isCompact -->\n  <span class=\"svc-toolbox__item-banner svc-item__banner\">\n    <sv-svg-icon params=\"iconName: iconName, size: 24, title: item.tooltip\" class=\"svc-toolbox__item-icon\"></sv-svg-icon>\n    <span class=\"svc-toolbox__item-title\" data-bind=\"text: title\"></span>\n  </span>\n  <!-- /ko -->\n  <!-- ko ifnot: isCompact -->\n  <span class=\"svc-toolbox__item-title\" data-bind=\"text: title\"></span>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/toolbox/toolbox-item.ts":
/*!*************************************!*\
  !*** ./src/toolbox/toolbox-item.ts ***!
  \*************************************/
/*! exports provided: KnockoutToolboxItemViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnockoutToolboxItemViewModel", function() { return KnockoutToolboxItemViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./toolbox-item.html */ "./src/toolbox/toolbox-item.html");
var KnockoutToolboxItemViewModel = /** @class */ (function () {
    function KnockoutToolboxItemViewModel(item, creator, isCompact) {
        if (isCompact === void 0) { isCompact = true; }
        this.item = item;
        this.creator = creator;
        this.isCompact = isCompact;
        this.title = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"]("");
        this.iconName = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"]("");
        var icon = item.iconName;
        if (item.iconName.indexOf("icon-") === -1) {
            icon = "icon-" + icon;
        }
        this.iconName(icon);
        this.title(item.title);
    }
    return KnockoutToolboxItemViewModel;
}());

knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("svc-toolbox-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new KnockoutToolboxItemViewModel(params.item, params.creator, params.isCompact);
        }
    },
    template: template
});


/***/ }),

/***/ "./src/toolbox/toolbox-tool.html":
/*!***************************************!*\
  !*** ./src/toolbox/toolbox-tool.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-toolbox__tool\"\n    data-bind=\"css: { 'sv-action--hidden': !$data.item.isVisible }, class: $data.item.css, event: { pointerdown: (model, event)=>{onPointerDown(event); return true;} }\">\n    <div class=\"sv-action__content\">\n        <!-- ko if: $data.item.needSeparator && !$data.creator.toolbox.showCategoryTitles-->\n        <div class=\"svc-toolbox__category-separator\"></div>\n        <!-- /ko -->\n        <!-- ko component: { name: $data.item.component || 'svc-toolbox-item', params: { item: $data.item, creator: $data.creator, isCompact: $data.isCompact } } -->\n        <!-- /ko -->\n    </div>\n</div>";

/***/ }),

/***/ "./src/toolbox/toolbox-tool.ts":
/*!*************************************!*\
  !*** ./src/toolbox/toolbox-tool.ts ***!
  \*************************************/
/*! exports provided: KnockoutToolboxToolViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnockoutToolboxToolViewModel", function() { return KnockoutToolboxToolViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);




var template = __webpack_require__(/*! ./toolbox-tool.html */ "./src/toolbox/toolbox-tool.html");
var KnockoutToolboxToolViewModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KnockoutToolboxToolViewModel, _super);
    function KnockoutToolboxToolViewModel(item, creator, isCompact) {
        if (isCompact === void 0) { isCompact = true; }
        var _this = _super.call(this, item, creator) || this;
        _this.item = item;
        _this.creator = creator;
        _this.isCompact = isCompact;
        _this.title = knockout__WEBPACK_IMPORTED_MODULE_1__["observable"]("");
        _this.iconName = knockout__WEBPACK_IMPORTED_MODULE_1__["observable"]("");
        return _this;
    }
    return KnockoutToolboxToolViewModel;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__["ToolboxToolViewModel"]));

knockout__WEBPACK_IMPORTED_MODULE_1__["components"].register("svc-toolbox-tool", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](params.item);
            return new KnockoutToolboxToolViewModel(params.item, params.creator, params.isCompact);
        }
    },
    template: template
});


/***/ }),

/***/ "./src/toolbox/toolbox.html":
/*!**********************************!*\
  !*** ./src/toolbox/toolbox.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svc-toolbox\">\n  <div class=\"svc-toolbox__container\">\n    <!-- ko ifnot: categories().length == 1 || !$data.toolbox.showCategoryTitles -->\n    <!-- ko foreach: categories -->\n    <div class=\"svc-toolbox__category\">\n      <div class=\"svc-toolbox__category-header\"\n        data-bind=\"click: toggleState, key2click, css: { 'svc-toolbox__category-header--collapsed': $data.toolbox.canCollapseCategories }\">\n        <span class=\"svc-toolbox__category-title\" data-bind=\"text: name\"></span>\n        <!-- ko if: $data.toolbox.canCollapseCategories -->\n        <div class=\"svc-toolbox__category-header__controls\">\n          <sv-svg-icon class=\"svc-toolbox__category-header__button svc-string-editor__button--expand\"\n            data-bind=\"visible: collapsed\" params=\"iconName: 'icon-arrow-down', size: 24\"></sv-svg-icon>\n          <sv-svg-icon class=\"svc-toolbox__category-header__button svc-string-editor__button--collapse\"\n            data-bind=\"visible: !collapsed\" params=\"iconName: 'icon-arrow-up', size: 24\"></sv-svg-icon>\n        </div>\n        <!-- /ko -->\n      </div>\n      <!-- ko ifnot: collapsed -->\n      <!-- ko foreach: items -->\n      <!-- ko component: { name: $data.component || 'svc-toolbox-tool', params: { item: $data, creator: $parents[1].creator, isCompact: false } } -->\n      <!-- /ko -->\n      <!-- /ko -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n    <!-- /ko -->\n\n    <!-- ko if: categories().length == 1 || !$data.toolbox.showCategoryTitles -->\n    <div class=\"svc-toolbox__category\">\n      <!-- ko foreach: $data.toolbox.visibleActions -->\n      <!-- ko component: { name: 'svc-toolbox-tool', params: { item: $data, creator: $parent.creator, isCompact: false } } -->\n      <!-- /ko -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n</div>";

/***/ }),

/***/ "./src/toolbox/toolbox.ts":
/*!********************************!*\
  !*** ./src/toolbox/toolbox.ts ***!
  \********************************/
/*! exports provided: ToolboxViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxViewModel", function() { return ToolboxViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout-ui */ "survey-knockout-ui");
/* harmony import */ var survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_3__);




var template = __webpack_require__(/*! ./toolbox.html */ "./src/toolbox/toolbox.html");
var ToolboxViewModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToolboxViewModel, _super);
    // private _isCompact = ko.observable(true);
    // private _isCompactSubscription: ko.Computed;
    // public get isCompact() {
    //   return this._isCompact();
    // }
    // public set isCompact(val: boolean) {
    //   this._isCompact(val);
    // }
    function ToolboxViewModel(creator) {
        var _this = _super.call(this) || this;
        _this.categories = knockout__WEBPACK_IMPORTED_MODULE_1__["observableArray"]();
        _this.creator = creator;
        new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](_this.toolbox);
        _this._categoriesSubscription = knockout__WEBPACK_IMPORTED_MODULE_1__["computed"](function () {
            var categories = knockout__WEBPACK_IMPORTED_MODULE_1__["unwrap"](_this.toolbox.categories);
            categories.forEach(function (category, categoryIndex) {
                new survey_knockout_ui__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](category);
            });
            // this._isCompactSubscription = ko.computed(() => this.isCompact = ko.unwrap(this.toolbox.isCompact));
            _this.categories(categories);
        });
        return _this;
    }
    Object.defineProperty(ToolboxViewModel.prototype, "toolbox", {
        get: function () {
            return this.creator.toolbox;
        },
        enumerable: false,
        configurable: true
    });
    ToolboxViewModel.prototype.dispose = function () {
        this._categoriesSubscription.dispose();
        // this._isCompactSubscription.dispose();
    };
    return ToolboxViewModel;
}(survey_core__WEBPACK_IMPORTED_MODULE_3__["Base"]));

knockout__WEBPACK_IMPORTED_MODULE_1__["components"].register("svc-toolbox", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new ToolboxViewModel(params.model);
            return model;
        },
    },
    template: template
});


/***/ }),

/***/ "./src/utils/survey-widget.ts":
/*!************************************!*\
  !*** ./src/utils/survey-widget.ts ***!
  \************************************/
/*! exports provided: SurveyWidgetBinding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyWidgetBinding", function() { return SurveyWidgetBinding; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var SurveyWidgetBinding;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("survey-widget", {
    viewModel: function (params) {
        this.survey = params.model;
    },
    template: "<!-- ko if: $data.survey --><!-- ko template: { name: 'survey-content', data: survey, afterRender: $parent.koEventAfterRender } --><!-- /ko --><!-- /ko -->",
});


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

knockout__WEBPACK_IMPORTED_MODULE_0__["bindingHandlers"]["trueclick"] = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        element.onclick = function () { return true; };
    },
};
knockout__WEBPACK_IMPORTED_MODULE_0__["bindingHandlers"]["clickNoFocus"] = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        element.onclick = function (ev) {
            valueAccessor().call(viewModel, viewModel, ev);
        };
    },
};
knockout__WEBPACK_IMPORTED_MODULE_0__["bindingHandlers"]["afterRenderParent"] = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        element.style.display = "none";
        valueAccessor() && valueAccessor()([element.parentElement]);
    },
};


/***/ }),

/***/ "knockout":
/*!********************************************************************************************!*\
  !*** external {"root":"ko","commonjs2":"knockout","commonjs":"knockout","amd":"knockout"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_knockout__;

/***/ }),

/***/ "survey-core":
/*!*********************************************************************************************************!*\
  !*** external {"root":"Survey","commonjs2":"survey-core","commonjs":"survey-core","amd":"survey-core"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_core__;

/***/ }),

/***/ "survey-creator-core":
/*!********************************************************************************************************************************************!*\
  !*** external {"root":"SurveyCreatorCore","commonjs2":"survey-creator-core","commonjs":"survey-creator-core","amd":"survey-creator-core"} ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_creator_core__;

/***/ }),

/***/ "survey-knockout-ui":
/*!**************************************************************************************************************************************!*\
  !*** external {"root":"SurveyKnockout","commonjs2":"survey-knockout-ui","commonjs":"survey-knockout-ui","amd":"survey-knockout-ui"} ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_knockout_ui__;

/***/ })

/******/ });
});
//# sourceMappingURL=survey-creator-knockout.js.map