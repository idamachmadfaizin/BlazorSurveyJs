/*!
 * surveyjs - Survey JavaScript library v1.9.113
 * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	root = this || (0, eval)("this");
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"), require("survey-core"));
    else if(typeof define === 'function' && define.amd)
		define("survey-knockout-ui", ["knockout", "survey-core"], factory);
	else if(typeof exports === 'object')
		exports["survey-knockout-ui"] = factory(require("knockout"), require("survey-core"));
    else
        root["SurveyKnockout"] = factory(root["ko"], root["Survey"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_knockout__, __WEBPACK_EXTERNAL_MODULE_survey_core__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/knockout-ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/panel/panel.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/components/panel/panel.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko template: { name: 'survey-panel', data: question, as: 'question', afterRender: question.koPanelAfterRender } --><!-- /ko -->";

/***/ }),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/popup/popup.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/components/popup/popup.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- ko with: popupViewModel -->\n  <div class=\"sv-popup\" tabindex=\"-1\"\n    data-bind=\"visible: isVisible, click: function(data, event) { clickOutside(event); return true; }, class: styleClass, event: { keydown: function(data, event) { onKeyDown(event); return true; } }\">\n    <div class=\"sv-popup__container\"\n      data-bind=\"style: { left: left, top: top, height: height, minWidth: minWidth, width: width }, click: function() { return true; }, clickBubble: false\">\n      <div class=\"sv-popup__shadow\">\n        <!-- ko if: $data.showHeader -->\n        <!-- ko template: { name: $data.popupHeaderTemplate, data: $data } -->\n        <!-- /ko -->\n        <!-- /ko -->\n        <div class=\"sv-popup__body-content\">\n          <!-- ko if: !!title  -->\n          <div class=\"sv-popup__body-header\" data-bind=\"text: title\"></div>\n          <!-- /ko -->\n          <div class=\"sv-popup__scrolling-content\">\n            <div class=\"sv-popup__content\"\n              data-bind=\"component: { name: contentComponentName, params: contentComponentData }\"></div>\n          </div>\n          <!-- ko if: showFooter  -->\n          <div class=\"sv-popup__body-footer\">\n            <!-- ko component: { name: \"sv-action-bar\", params: { model: $data.footerToolbar } } -->\n            <!-- /ko -->\n          </div>\n          <!-- /ko -->\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /ko -->\n</div>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/progress/buttons.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/components/progress/buttons.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: survey.css.progressButtonsContainerCenter\">\n    <div data-bind=\"css: survey.css.progressButtonsContainer\">\n        <div data-bind=\"css: getScrollButtonCss(true), click: clickScrollButton.bind($data, $element.nextElementSibling, true)\" role=\"button\"></div>\n        <div data-bind=\"css: survey.css.progressButtonsListContainer\">\n            <ul data-bind=\"foreach: survey.visiblePages, css: survey.css.progressButtonsList\">\n                <li data-bind=\"css: $parent.getListElementCss($index), click: $parent.isListElementClickable($index) ? $parent.clickListElement.bind($parent, $index) : null\">\n                    <div data-bind=\"css: css.progressButtonsPageTitle, text: renderedNavigationTitle, attr: { title: renderedNavigationTitle }\"></div>\n                    <div data-bind=\"css: css.progressButtonsPageDescription, text: locNavigationDescription.koRenderedHtml(), attr: { title: locNavigationDescription.koRenderedHtml() }\"></div>\n                </li>\n            </ul>\n        </div>\n        <div data-bind=\"css: getScrollButtonCss(false), click: clickScrollButton.bind($data, $element.previousElementSibling, false)\" role=\"button\"></div>\n    </div>\n</div>";

/***/ }),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/progress/progress.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/components/progress/progress.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: getProgressCssClasses()\">\n    <div data-bind=\"css: model.css.progressBar, style: { width: model.progressValue + '%' }\"\n        role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-label=\"progress\">\n        <span data-bind=\"text: model.progressText, css: getProgressTextInBarCss(model.css)\"></span>\n    </div>\n    <span data-bind=\"text: model.progressText, css: getProgressTextUnderBarCss(model.css)\"></span>\n</div>";

/***/ }),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/progress/toc.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/components/progress/toc.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: containerCss\">\n    <!-- ko ifnot: isMobile -->\n    <sv-list params=\"model: listModel\"></sv-list>\n    <!-- /ko -->\n    <!-- ko if: isMobile -->\n    <div class=\"\" data-bind=\"click: togglePopup, key2click\">\n        <sv-svg-icon class=\"\" params=\"iconName: icon, size: 24\"></sv-svg-icon>\n        <sv-popup params=\"model: popupModel\"></sv-popup>\n    </div>\n    <!-- /ko -->\n</div>";

/***/ }),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/templates/entry.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/templates/entry.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "" + __webpack_require__(/*! ./comment.html */ "./src/knockout/templates/comment.html") + "\n" + __webpack_require__(/*! ./flowpanel.html */ "./src/knockout/templates/flowpanel.html") + "\n" + __webpack_require__(/*! ./header.html */ "./src/knockout/templates/header.html") + "\n" + __webpack_require__(/*! ./index.html */ "./src/knockout/templates/index.html") + "\n" + __webpack_require__(/*! ./page.html */ "./src/knockout/templates/page.html") + "\n" + __webpack_require__(/*! ./panel.html */ "./src/knockout/templates/panel.html") + "\n" + __webpack_require__(/*! ./rows.html */ "./src/knockout/templates/rows.html") + "\n" + __webpack_require__(/*! ./row.html */ "./src/knockout/templates/row.html") + "\n" + __webpack_require__(/*! ./string.html */ "./src/knockout/templates/string.html") + "\n" + __webpack_require__(/*! ./timerpanel.html */ "./src/knockout/templates/timerpanel.html") + "\n" + __webpack_require__(/*! ./question.html */ "./src/knockout/templates/question.html") + "\n" + __webpack_require__(/*! ./questioncontent.html */ "./src/knockout/templates/questioncontent.html") + "\n" + __webpack_require__(/*! ./questiontitle.html */ "./src/knockout/templates/questiontitle.html") + "\n" + __webpack_require__(/*! ./question-boolean.html */ "./src/knockout/templates/question-boolean.html") + "\n" + __webpack_require__(/*! ./question-checkbox.html */ "./src/knockout/templates/question-checkbox.html") + "\n" + __webpack_require__(/*! ./question-tagbox.html */ "./src/knockout/templates/question-tagbox.html") + "\n" + __webpack_require__(/*! ./question-ranking.html */ "./src/knockout/templates/question-ranking.html") + "\n" + __webpack_require__(/*! ./question-comment.html */ "./src/knockout/templates/question-comment.html") + "\n" + __webpack_require__(/*! ./question-composite.html */ "./src/knockout/templates/question-composite.html") + "\n" + __webpack_require__(/*! ./question-custom.html */ "./src/knockout/templates/question-custom.html") + "\n" + __webpack_require__(/*! ./question-dropdown.html */ "./src/knockout/templates/question-dropdown.html") + "\n" + __webpack_require__(/*! ./question-empty.html */ "./src/knockout/templates/question-empty.html") + "\n" + __webpack_require__(/*! ./question-errors.html */ "./src/knockout/templates/question-errors.html") + "\n" + __webpack_require__(/*! ./question-expression.html */ "./src/knockout/templates/question-expression.html") + "\n" + __webpack_require__(/*! ./question-file.html */ "./src/knockout/templates/question-file.html") + "\n" + __webpack_require__(/*! ./question-html.html */ "./src/knockout/templates/question-html.html") + "\n" + __webpack_require__(/*! ./question-image.html */ "./src/knockout/templates/question-image.html") + "\n" + __webpack_require__(/*! ./question-imagepicker.html */ "./src/knockout/templates/question-imagepicker.html") + "\n" + __webpack_require__(/*! ./question-matrix.html */ "./src/knockout/templates/question-matrix.html") + "\n" + __webpack_require__(/*! ./question-matrixdynamic.html */ "./src/knockout/templates/question-matrixdynamic.html") + "\n" + __webpack_require__(/*! ./question-matrixdropdown.html */ "./src/knockout/templates/question-matrixdropdown.html") + "\n" + __webpack_require__(/*! ./question-multipletext.html */ "./src/knockout/templates/question-multipletext.html") + "\n" + __webpack_require__(/*! ./question-paneldynamic.html */ "./src/knockout/templates/question-paneldynamic.html") + "\n" + __webpack_require__(/*! ./question-paneldynamic-navigator.html */ "./src/knockout/templates/question-paneldynamic-navigator.html") + "\n" + __webpack_require__(/*! ./question-radiogroup.html */ "./src/knockout/templates/question-radiogroup.html") + "\n" + __webpack_require__(/*! ./question-rating.html */ "./src/knockout/templates/question-rating.html") + "\n" + __webpack_require__(/*! ./question-signaturepad.html */ "./src/knockout/templates/question-signaturepad.html") + "\n" + __webpack_require__(/*! ./question-text.html */ "./src/knockout/templates/question-text.html") + "\n" + __webpack_require__(/*! ./question-buttongroup.html */ "./src/knockout/templates/question-buttongroup.html") + "\n" + __webpack_require__(/*! ./popup-pointer.html */ "./src/knockout/templates/popup-pointer.html") + "";

/***/ }),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/templates/window.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/templates/window.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: fixed; bottom: 3px; right: 10px;\" data-bind=\"css: cssRoot, style:{width: renderedWidth, maxWidth: renderedWidth}\">\n    <div data-bind=\"css: cssHeaderRoot\">\n        <span data-bind=\"click:doExpand\" style=\"width: 100%; cursor: pointer;\">\n            <span style=\"padding-right:10px\" data-bind=\"css: cssHeaderTitle, text: locTitle.koRenderedHtml\"></span>\n            <span aria-hidden=\"true\" data-bind=\"css: cssButton\"></span>\n        </span>\n        <!-- ko if: allowClose -->\n        <span data-bind=\"click:doHide, css: cssHeaderButton\" style=\"float: right; cursor: pointer; width: 24px; height: 24px; transform: rotate(45deg);\">\n        <!-- ko component: { name: 'sv-svg-icon', params: { iconName: 'icon-expanddetail', size: '16' } } --><!-- /ko -->\n        </span>\n        <!-- /ko -->\n        <span data-bind=\"visible:isExpanded, click:doExpand, css: cssHeaderButton\" style=\"float: right; cursor: pointer; width: 24px; height: 24px;\">\n        <!-- ko component: { name: 'sv-svg-icon', params: { iconName: 'icon-collapsedetail', size: '16' } } --><!-- /ko -->\n        </span>\n    </div>\n    <div data-bind=\"visible:isExpanded, css: cssBody, event: { scroll: $data.onScroll }\">\n        <survey params=\"survey: survey\"></survey>\n    </div>\n</div>";

/***/ }),

/***/ "./src/entries/core-export.ts":
/*!************************************!*\
  !*** ./src/entries/core-export.ts ***!
  \************************************/
/*! exports provided: SurveyModel, SurveyWindowModel, settings, surveyLocalization, surveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyModel", function() { return survey_core__WEBPACK_IMPORTED_MODULE_0__["SurveyModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyWindowModel", function() { return survey_core__WEBPACK_IMPORTED_MODULE_0__["SurveyWindowModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return survey_core__WEBPACK_IMPORTED_MODULE_0__["settings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyLocalization", function() { return survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyStrings"]; });






/***/ }),

/***/ "./src/entries/knockout-ui-model.ts":
/*!******************************************!*\
  !*** ./src/entries/knockout-ui-model.ts ***!
  \******************************************/
/*! exports provided: Survey, Model, PopupSurvey, SurveyWindow, ImplementorBase, QuestionRow, Page, Panel, FlowPanel, QuestionImplementor, QuestionSelectBaseImplementor, QuestionCheckboxBaseImplementor, QuestionCheckbox, QuestionTagbox, QuestionRanking, QuestionComment, QuestionDropdown, QuestionFile, QuestionHtml, QuestionMatrix, QuestionMatrixDropdown, QuestionMatrixDynamicImplementor, QuestionMatrixDynamic, QuestionPanelDynamic, MultipleTextItem, QuestionMultipleText, QuestionRadiogroup, QuestionRating, QuestionRatingImplementor, QuestionText, QuestionBoolean, QuestionEmpty, QuestionExpression, QuestionImagePicker, PopupSurveyImplementor, SurveyTemplateText, QuestionImage, QuestionSignaturePad, QuestionCustom, QuestionButtonGroup, ActionBarItemViewModel, ActionBarItemDropdownViewModel, ActionBarSeparatorViewModel, ActionContainerImplementor, CheckboxViewModel, BooleanRadioItemViewModel, BooleanRadioViewModel, PanelViewModel, PopupViewModel, showModal, showDialog, ProgressButtonsViewModel, ProgressViewModel, ComponentsContainer, TitleElementViewModel, TitleContentViewModel, TitleActionViewModel, StringEditorViewModel, StringViewerViewModel, LogoImageViewModel, Skeleton, CharacterCounterComponent, RatingDropdownViewModel, RatingItemViewModel, RatingItemStarViewModel, RatingItemSmileyViewModel, DropdownViewModel, DropdownSelectViewModel, TagboxViewComponent, TagboxViewModel, SurveyFilePreview, ListItemViewComponent, ListViewComponent, SvgIconViewModel, SurveyQuestionMatrixDynamicRemoveButton, SurveyQuestionMatrixDetailButton, SurveyQuestionMatrixDynamicDragDropIcon, ButtonGroupItemViewModel, SurveyNavigationButton, SurveyQuestionPaneldynamicActioons, BrandInfoComponent, NotifierViewModel, LoadingIndicatorViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _knockout_kosurvey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../knockout/kosurvey */ "./src/knockout/kosurvey.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return _knockout_kosurvey__WEBPACK_IMPORTED_MODULE_0__["Survey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _knockout_kosurvey__WEBPACK_IMPORTED_MODULE_0__["Survey"]; });

/* harmony import */ var _knockout_koPopupSurvey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../knockout/koPopupSurvey */ "./src/knockout/koPopupSurvey.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupSurvey", function() { return _knockout_koPopupSurvey__WEBPACK_IMPORTED_MODULE_1__["PopupSurvey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyWindow", function() { return _knockout_koPopupSurvey__WEBPACK_IMPORTED_MODULE_1__["SurveyWindow"]; });

/* harmony import */ var _knockout_kobase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../knockout/kobase */ "./src/knockout/kobase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImplementorBase", function() { return _knockout_kobase__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"]; });

/* harmony import */ var _knockout_kopage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../knockout/kopage */ "./src/knockout/kopage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionRow", function() { return _knockout_kopage__WEBPACK_IMPORTED_MODULE_3__["QuestionRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _knockout_kopage__WEBPACK_IMPORTED_MODULE_3__["Page"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _knockout_kopage__WEBPACK_IMPORTED_MODULE_3__["Panel"]; });

/* harmony import */ var _knockout_koflowpanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../knockout/koflowpanel */ "./src/knockout/koflowpanel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowPanel", function() { return _knockout_koflowpanel__WEBPACK_IMPORTED_MODULE_4__["FlowPanel"]; });

/* harmony import */ var _knockout_koquestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../knockout/koquestion */ "./src/knockout/koquestion.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionImplementor", function() { return _knockout_koquestion__WEBPACK_IMPORTED_MODULE_5__["QuestionImplementor"]; });

/* harmony import */ var _knockout_koquestion_baseselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../knockout/koquestion_baseselect */ "./src/knockout/koquestion_baseselect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionSelectBaseImplementor", function() { return _knockout_koquestion_baseselect__WEBPACK_IMPORTED_MODULE_6__["QuestionSelectBaseImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxBaseImplementor", function() { return _knockout_koquestion_baseselect__WEBPACK_IMPORTED_MODULE_6__["QuestionCheckboxBaseImplementor"]; });

/* harmony import */ var _knockout_koquestion_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../knockout/koquestion_checkbox */ "./src/knockout/koquestion_checkbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckbox", function() { return _knockout_koquestion_checkbox__WEBPACK_IMPORTED_MODULE_7__["QuestionCheckbox"]; });

/* harmony import */ var _knockout_koquestion_tagbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../knockout/koquestion_tagbox */ "./src/knockout/koquestion_tagbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionTagbox", function() { return _knockout_koquestion_tagbox__WEBPACK_IMPORTED_MODULE_8__["QuestionTagbox"]; });

/* harmony import */ var _knockout_koquestion_ranking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../knockout/koquestion_ranking */ "./src/knockout/koquestion_ranking.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionRanking", function() { return _knockout_koquestion_ranking__WEBPACK_IMPORTED_MODULE_9__["QuestionRanking"]; });

/* harmony import */ var _knockout_koquestion_comment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../knockout/koquestion_comment */ "./src/knockout/koquestion_comment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionComment", function() { return _knockout_koquestion_comment__WEBPACK_IMPORTED_MODULE_10__["QuestionComment"]; });

/* harmony import */ var _knockout_koquestion_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../knockout/koquestion_dropdown */ "./src/knockout/koquestion_dropdown.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionDropdown", function() { return _knockout_koquestion_dropdown__WEBPACK_IMPORTED_MODULE_11__["QuestionDropdown"]; });

/* harmony import */ var _knockout_koquestion_file__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../knockout/koquestion_file */ "./src/knockout/koquestion_file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionFile", function() { return _knockout_koquestion_file__WEBPACK_IMPORTED_MODULE_12__["QuestionFile"]; });

/* harmony import */ var _knockout_koquestion_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../knockout/koquestion_html */ "./src/knockout/koquestion_html.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionHtml", function() { return _knockout_koquestion_html__WEBPACK_IMPORTED_MODULE_13__["QuestionHtml"]; });

/* harmony import */ var _knockout_koquestion_matrix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../knockout/koquestion_matrix */ "./src/knockout/koquestion_matrix.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrix", function() { return _knockout_koquestion_matrix__WEBPACK_IMPORTED_MODULE_14__["QuestionMatrix"]; });

/* harmony import */ var _knockout_koquestion_matrixdropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../knockout/koquestion_matrixdropdown */ "./src/knockout/koquestion_matrixdropdown.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDropdown", function() { return _knockout_koquestion_matrixdropdown__WEBPACK_IMPORTED_MODULE_15__["QuestionMatrixDropdown"]; });

/* harmony import */ var _knockout_koquestion_matrixdynamic__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../knockout/koquestion_matrixdynamic */ "./src/knockout/koquestion_matrixdynamic.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamicImplementor", function() { return _knockout_koquestion_matrixdynamic__WEBPACK_IMPORTED_MODULE_16__["QuestionMatrixDynamicImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamic", function() { return _knockout_koquestion_matrixdynamic__WEBPACK_IMPORTED_MODULE_16__["QuestionMatrixDynamic"]; });

/* harmony import */ var _knockout_koquestion_paneldynamic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../knockout/koquestion_paneldynamic */ "./src/knockout/koquestion_paneldynamic.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionPanelDynamic", function() { return _knockout_koquestion_paneldynamic__WEBPACK_IMPORTED_MODULE_17__["QuestionPanelDynamic"]; });

/* harmony import */ var _knockout_koquestion_multipletext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../knockout/koquestion_multipletext */ "./src/knockout/koquestion_multipletext.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultipleTextItem", function() { return _knockout_koquestion_multipletext__WEBPACK_IMPORTED_MODULE_18__["MultipleTextItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMultipleText", function() { return _knockout_koquestion_multipletext__WEBPACK_IMPORTED_MODULE_18__["QuestionMultipleText"]; });

/* harmony import */ var _knockout_koquestion_radiogroup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../knockout/koquestion_radiogroup */ "./src/knockout/koquestion_radiogroup.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionRadiogroup", function() { return _knockout_koquestion_radiogroup__WEBPACK_IMPORTED_MODULE_19__["QuestionRadiogroup"]; });

/* harmony import */ var _knockout_koquestion_rating__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../knockout/koquestion_rating */ "./src/knockout/koquestion_rating.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionRating", function() { return _knockout_koquestion_rating__WEBPACK_IMPORTED_MODULE_20__["QuestionRating"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionRatingImplementor", function() { return _knockout_koquestion_rating__WEBPACK_IMPORTED_MODULE_20__["QuestionRatingImplementor"]; });

/* harmony import */ var _knockout_koquestion_text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../knockout/koquestion_text */ "./src/knockout/koquestion_text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionText", function() { return _knockout_koquestion_text__WEBPACK_IMPORTED_MODULE_21__["QuestionText"]; });

/* harmony import */ var _knockout_koquestion_boolean__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../knockout/koquestion_boolean */ "./src/knockout/koquestion_boolean.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionBoolean", function() { return _knockout_koquestion_boolean__WEBPACK_IMPORTED_MODULE_22__["QuestionBoolean"]; });

/* harmony import */ var _knockout_koquestion_empty__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../knockout/koquestion_empty */ "./src/knockout/koquestion_empty.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionEmpty", function() { return _knockout_koquestion_empty__WEBPACK_IMPORTED_MODULE_23__["QuestionEmpty"]; });

/* harmony import */ var _knockout_koquestion_expression__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../knockout/koquestion_expression */ "./src/knockout/koquestion_expression.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionExpression", function() { return _knockout_koquestion_expression__WEBPACK_IMPORTED_MODULE_24__["QuestionExpression"]; });

/* harmony import */ var _knockout_koquestion_imagepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../knockout/koquestion_imagepicker */ "./src/knockout/koquestion_imagepicker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionImagePicker", function() { return _knockout_koquestion_imagepicker__WEBPACK_IMPORTED_MODULE_25__["QuestionImagePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupSurveyImplementor", function() { return _knockout_koPopupSurvey__WEBPACK_IMPORTED_MODULE_1__["PopupSurveyImplementor"]; });

/* harmony import */ var _knockout_templateText__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../knockout/templateText */ "./src/knockout/templateText.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyTemplateText", function() { return _knockout_templateText__WEBPACK_IMPORTED_MODULE_26__["SurveyTemplateText"]; });

/* harmony import */ var _knockout_koquestion_image__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../knockout/koquestion_image */ "./src/knockout/koquestion_image.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionImage", function() { return _knockout_koquestion_image__WEBPACK_IMPORTED_MODULE_27__["QuestionImage"]; });

/* harmony import */ var _knockout_koquestion_signaturepad__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../knockout/koquestion_signaturepad */ "./src/knockout/koquestion_signaturepad.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionSignaturePad", function() { return _knockout_koquestion_signaturepad__WEBPACK_IMPORTED_MODULE_28__["QuestionSignaturePad"]; });

/* harmony import */ var _knockout_koquestion_custom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../knockout/koquestion_custom */ "./src/knockout/koquestion_custom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionCustom", function() { return _knockout_koquestion_custom__WEBPACK_IMPORTED_MODULE_29__["QuestionCustom"]; });

/* harmony import */ var _knockout_koquestion_buttongroup__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../knockout/koquestion_buttongroup */ "./src/knockout/koquestion_buttongroup.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionButtonGroup", function() { return _knockout_koquestion_buttongroup__WEBPACK_IMPORTED_MODULE_30__["QuestionButtonGroup"]; });

/* harmony import */ var _knockout_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../knockout/components/action-bar/action-bar */ "./src/knockout/components/action-bar/action-bar.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionBarItemViewModel", function() { return _knockout_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_31__["ActionBarItemViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionBarItemDropdownViewModel", function() { return _knockout_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_31__["ActionBarItemDropdownViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionBarSeparatorViewModel", function() { return _knockout_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_31__["ActionBarSeparatorViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionContainerImplementor", function() { return _knockout_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_31__["ActionContainerImplementor"]; });

/* harmony import */ var _knockout_components_boolean_checkbox_boolean_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../knockout/components/boolean-checkbox/boolean-checkbox */ "./src/knockout/components/boolean-checkbox/boolean-checkbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxViewModel", function() { return _knockout_components_boolean_checkbox_boolean_checkbox__WEBPACK_IMPORTED_MODULE_32__["CheckboxViewModel"]; });

/* harmony import */ var _knockout_components_boolean_radio_boolean_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../knockout/components/boolean-radio/boolean-radio */ "./src/knockout/components/boolean-radio/boolean-radio.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanRadioItemViewModel", function() { return _knockout_components_boolean_radio_boolean_radio__WEBPACK_IMPORTED_MODULE_33__["BooleanRadioItemViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanRadioViewModel", function() { return _knockout_components_boolean_radio_boolean_radio__WEBPACK_IMPORTED_MODULE_33__["BooleanRadioViewModel"]; });

/* harmony import */ var _knockout_components_panel_panel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../knockout/components/panel/panel */ "./src/knockout/components/panel/panel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelViewModel", function() { return _knockout_components_panel_panel__WEBPACK_IMPORTED_MODULE_34__["PanelViewModel"]; });

/* harmony import */ var _knockout_components_popup_popup__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../knockout/components/popup/popup */ "./src/knockout/components/popup/popup.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupViewModel", function() { return _knockout_components_popup_popup__WEBPACK_IMPORTED_MODULE_35__["PopupViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return _knockout_components_popup_popup__WEBPACK_IMPORTED_MODULE_35__["showModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showDialog", function() { return _knockout_components_popup_popup__WEBPACK_IMPORTED_MODULE_35__["showDialog"]; });

/* harmony import */ var _knockout_components_progress_buttons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../knockout/components/progress/buttons */ "./src/knockout/components/progress/buttons.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressButtonsViewModel", function() { return _knockout_components_progress_buttons__WEBPACK_IMPORTED_MODULE_36__["ProgressButtonsViewModel"]; });

/* harmony import */ var _knockout_components_progress_progress__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../knockout/components/progress/progress */ "./src/knockout/components/progress/progress.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressViewModel", function() { return _knockout_components_progress_progress__WEBPACK_IMPORTED_MODULE_37__["ProgressViewModel"]; });

/* harmony import */ var _knockout_components_progress_toc__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../knockout/components/progress/toc */ "./src/knockout/components/progress/toc.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _knockout_components_components_container_components_container__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../knockout/components/components-container/components-container */ "./src/knockout/components/components-container/components-container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentsContainer", function() { return _knockout_components_components_container_components_container__WEBPACK_IMPORTED_MODULE_39__["ComponentsContainer"]; });

/* harmony import */ var _knockout_components_template_renderer_template_renderer__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../knockout/components/template-renderer/template-renderer */ "./src/knockout/components/template-renderer/template-renderer.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _knockout_components_title_title_element__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../knockout/components/title/title-element */ "./src/knockout/components/title/title-element.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleElementViewModel", function() { return _knockout_components_title_title_element__WEBPACK_IMPORTED_MODULE_41__["TitleElementViewModel"]; });

/* harmony import */ var _knockout_components_title_title_content__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../knockout/components/title/title-content */ "./src/knockout/components/title/title-content.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleContentViewModel", function() { return _knockout_components_title_title_content__WEBPACK_IMPORTED_MODULE_42__["TitleContentViewModel"]; });

/* harmony import */ var _knockout_components_title_title_actions__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../knockout/components/title/title-actions */ "./src/knockout/components/title/title-actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleActionViewModel", function() { return _knockout_components_title_title_actions__WEBPACK_IMPORTED_MODULE_43__["TitleActionViewModel"]; });

/* harmony import */ var _knockout_components_string_editor_string_editor__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../knockout/components/string-editor/string-editor */ "./src/knockout/components/string-editor/string-editor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringEditorViewModel", function() { return _knockout_components_string_editor_string_editor__WEBPACK_IMPORTED_MODULE_44__["StringEditorViewModel"]; });

/* harmony import */ var _knockout_components_string_viewer_string_viewer__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../knockout/components/string-viewer/string-viewer */ "./src/knockout/components/string-viewer/string-viewer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringViewerViewModel", function() { return _knockout_components_string_viewer_string_viewer__WEBPACK_IMPORTED_MODULE_45__["StringViewerViewModel"]; });

/* harmony import */ var _knockout_components_logo_image_logo_image__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../knockout/components/logo-image/logo-image */ "./src/knockout/components/logo-image/logo-image.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoImageViewModel", function() { return _knockout_components_logo_image_logo_image__WEBPACK_IMPORTED_MODULE_46__["LogoImageViewModel"]; });

/* harmony import */ var _knockout_components_skeleton_skeleton__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../knockout/components/skeleton/skeleton */ "./src/knockout/components/skeleton/skeleton.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return _knockout_components_skeleton_skeleton__WEBPACK_IMPORTED_MODULE_47__["Skeleton"]; });

/* harmony import */ var _knockout_components_character_counter_character_counter__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../knockout/components/character-counter/character-counter */ "./src/knockout/components/character-counter/character-counter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterCounterComponent", function() { return _knockout_components_character_counter_character_counter__WEBPACK_IMPORTED_MODULE_48__["CharacterCounterComponent"]; });

/* harmony import */ var _knockout_components_rating_dropdown_rating_dropdown__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../knockout/components/rating-dropdown/rating-dropdown */ "./src/knockout/components/rating-dropdown/rating-dropdown.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingDropdownViewModel", function() { return _knockout_components_rating_dropdown_rating_dropdown__WEBPACK_IMPORTED_MODULE_49__["RatingDropdownViewModel"]; });

/* harmony import */ var _knockout_components_rating_rating_item__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../knockout/components/rating/rating-item */ "./src/knockout/components/rating/rating-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingItemViewModel", function() { return _knockout_components_rating_rating_item__WEBPACK_IMPORTED_MODULE_50__["RatingItemViewModel"]; });

/* harmony import */ var _knockout_components_rating_rating_item_star__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../knockout/components/rating/rating-item-star */ "./src/knockout/components/rating/rating-item-star.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingItemStarViewModel", function() { return _knockout_components_rating_rating_item_star__WEBPACK_IMPORTED_MODULE_51__["RatingItemStarViewModel"]; });

/* harmony import */ var _knockout_components_rating_rating_item_smiley__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../knockout/components/rating/rating-item-smiley */ "./src/knockout/components/rating/rating-item-smiley.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingItemSmileyViewModel", function() { return _knockout_components_rating_rating_item_smiley__WEBPACK_IMPORTED_MODULE_52__["RatingItemSmileyViewModel"]; });

/* harmony import */ var _knockout_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../knockout/components/dropdown/dropdown */ "./src/knockout/components/dropdown/dropdown.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownViewModel", function() { return _knockout_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_53__["DropdownViewModel"]; });

/* harmony import */ var _knockout_components_dropdown_select_dropdown_select__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../knockout/components/dropdown-select/dropdown-select */ "./src/knockout/components/dropdown-select/dropdown-select.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownSelectViewModel", function() { return _knockout_components_dropdown_select_dropdown_select__WEBPACK_IMPORTED_MODULE_54__["DropdownSelectViewModel"]; });

/* harmony import */ var _knockout_components_tagbox_tagbox_item__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../knockout/components/tagbox/tagbox-item */ "./src/knockout/components/tagbox/tagbox-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagboxViewComponent", function() { return _knockout_components_tagbox_tagbox_item__WEBPACK_IMPORTED_MODULE_55__["TagboxViewComponent"]; });

/* harmony import */ var _knockout_components_tagbox_tagbox__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../knockout/components/tagbox/tagbox */ "./src/knockout/components/tagbox/tagbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagboxViewModel", function() { return _knockout_components_tagbox_tagbox__WEBPACK_IMPORTED_MODULE_56__["TagboxViewModel"]; });

/* harmony import */ var _knockout_components_cover_cover__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../knockout/components/cover/cover */ "./src/knockout/components/cover/cover.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _knockout_components_cover_cover_cell__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../knockout/components/cover/cover-cell */ "./src/knockout/components/cover/cover-cell.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _knockout_components_file_choose_file__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../knockout/components/file/choose-file */ "./src/knockout/components/file/choose-file.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _knockout_components_file_file_preview__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../knockout/components/file/file-preview */ "./src/knockout/components/file/file-preview.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyFilePreview", function() { return _knockout_components_file_file_preview__WEBPACK_IMPORTED_MODULE_60__["SurveyFilePreview"]; });

/* harmony import */ var _knockout_components_list_list__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../knockout/components/list/list */ "./src/knockout/components/list/list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemViewComponent", function() { return _knockout_components_list_list__WEBPACK_IMPORTED_MODULE_61__["ListItemViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return _knockout_components_list_list__WEBPACK_IMPORTED_MODULE_61__["ListViewComponent"]; });

/* harmony import */ var _knockout_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../knockout/components/svg-icon/svg-icon */ "./src/knockout/components/svg-icon/svg-icon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgIconViewModel", function() { return _knockout_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_62__["SvgIconViewModel"]; });

/* harmony import */ var _knockout_components_matrix_actions_remove_button_remove_button__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../knockout/components/matrix-actions/remove-button/remove-button */ "./src/knockout/components/matrix-actions/remove-button/remove-button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDynamicRemoveButton", function() { return _knockout_components_matrix_actions_remove_button_remove_button__WEBPACK_IMPORTED_MODULE_63__["SurveyQuestionMatrixDynamicRemoveButton"]; });

/* harmony import */ var _knockout_components_matrix_actions_detail_button_detail_button__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../knockout/components/matrix-actions/detail-button/detail-button */ "./src/knockout/components/matrix-actions/detail-button/detail-button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDetailButton", function() { return _knockout_components_matrix_actions_detail_button_detail_button__WEBPACK_IMPORTED_MODULE_64__["SurveyQuestionMatrixDetailButton"]; });

/* harmony import */ var _knockout_components_matrix_actions_drag_drop_icon_drag_drop_icon__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../knockout/components/matrix-actions/drag-drop-icon/drag-drop-icon */ "./src/knockout/components/matrix-actions/drag-drop-icon/drag-drop-icon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDynamicDragDropIcon", function() { return _knockout_components_matrix_actions_drag_drop_icon_drag_drop_icon__WEBPACK_IMPORTED_MODULE_65__["SurveyQuestionMatrixDynamicDragDropIcon"]; });

/* harmony import */ var _knockout_components_button_group_button_group_item__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../knockout/components/button-group/button-group-item */ "./src/knockout/components/button-group/button-group-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupItemViewModel", function() { return _knockout_components_button_group_button_group_item__WEBPACK_IMPORTED_MODULE_66__["ButtonGroupItemViewModel"]; });

/* harmony import */ var _knockout_components_survey_actions_survey_nav_button__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../knockout/components/survey-actions/survey-nav-button */ "./src/knockout/components/survey-actions/survey-nav-button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyNavigationButton", function() { return _knockout_components_survey_actions_survey_nav_button__WEBPACK_IMPORTED_MODULE_67__["SurveyNavigationButton"]; });

/* harmony import */ var _knockout_components_paneldynamic_actions_paneldynamic_actions__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../knockout/components/paneldynamic-actions/paneldynamic-actions */ "./src/knockout/components/paneldynamic-actions/paneldynamic-actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionPaneldynamicActioons", function() { return _knockout_components_paneldynamic_actions_paneldynamic_actions__WEBPACK_IMPORTED_MODULE_68__["SurveyQuestionPaneldynamicActioons"]; });

/* harmony import */ var _knockout_components_brand_info_brand_info__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../knockout/components/brand-info/brand-info */ "./src/knockout/components/brand-info/brand-info.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandInfoComponent", function() { return _knockout_components_brand_info_brand_info__WEBPACK_IMPORTED_MODULE_69__["BrandInfoComponent"]; });

/* harmony import */ var _knockout_components_notifier_notifier__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../knockout/components/notifier/notifier */ "./src/knockout/components/notifier/notifier.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotifierViewModel", function() { return _knockout_components_notifier_notifier__WEBPACK_IMPORTED_MODULE_70__["NotifierViewModel"]; });

/* harmony import */ var _knockout_components_loading_indicator_loading_indicator__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../knockout/components/loading-indicator/loading-indicator */ "./src/knockout/components/loading-indicator/loading-indicator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorViewModel", function() { return _knockout_components_loading_indicator_loading_indicator__WEBPACK_IMPORTED_MODULE_71__["LoadingIndicatorViewModel"]; });

/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_73__);













































































Object(_knockout_kosurvey__WEBPACK_IMPORTED_MODULE_0__["registerTemplateEngine"])(knockout__WEBPACK_IMPORTED_MODULE_72__, survey_core__WEBPACK_IMPORTED_MODULE_73__["SurveyModel"].platform);


/***/ }),

/***/ "./src/entries/knockout-ui.ts":
/*!************************************!*\
  !*** ./src/entries/knockout-ui.ts ***!
  \************************************/
/*! exports provided: Survey, Model, PopupSurvey, SurveyWindow, ImplementorBase, QuestionRow, Page, Panel, FlowPanel, QuestionImplementor, QuestionSelectBaseImplementor, QuestionCheckboxBaseImplementor, QuestionCheckbox, QuestionTagbox, QuestionRanking, QuestionComment, QuestionDropdown, QuestionFile, QuestionHtml, QuestionMatrix, QuestionMatrixDropdown, QuestionMatrixDynamicImplementor, QuestionMatrixDynamic, QuestionPanelDynamic, MultipleTextItem, QuestionMultipleText, QuestionRadiogroup, QuestionRating, QuestionRatingImplementor, QuestionText, QuestionBoolean, QuestionEmpty, QuestionExpression, QuestionImagePicker, PopupSurveyImplementor, SurveyTemplateText, QuestionImage, QuestionSignaturePad, QuestionCustom, QuestionButtonGroup, ActionBarItemViewModel, ActionBarItemDropdownViewModel, ActionBarSeparatorViewModel, ActionContainerImplementor, CheckboxViewModel, BooleanRadioItemViewModel, BooleanRadioViewModel, PanelViewModel, PopupViewModel, showModal, showDialog, ProgressButtonsViewModel, ProgressViewModel, ComponentsContainer, TitleElementViewModel, TitleContentViewModel, TitleActionViewModel, StringEditorViewModel, StringViewerViewModel, LogoImageViewModel, Skeleton, CharacterCounterComponent, RatingDropdownViewModel, RatingItemViewModel, RatingItemStarViewModel, RatingItemSmileyViewModel, DropdownViewModel, DropdownSelectViewModel, TagboxViewComponent, TagboxViewModel, SurveyFilePreview, ListItemViewComponent, ListViewComponent, SvgIconViewModel, SurveyQuestionMatrixDynamicRemoveButton, SurveyQuestionMatrixDetailButton, SurveyQuestionMatrixDynamicDragDropIcon, ButtonGroupItemViewModel, SurveyNavigationButton, SurveyQuestionPaneldynamicActioons, BrandInfoComponent, NotifierViewModel, LoadingIndicatorViewModel, SurveyModel, SurveyWindowModel, settings, surveyLocalization, surveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knockout-ui-model */ "./src/entries/knockout-ui-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["Survey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["Model"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupSurvey", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["PopupSurvey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyWindow", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["SurveyWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImplementorBase", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["ImplementorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionRow", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["Page"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["Panel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowPanel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["FlowPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionImplementor", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionSelectBaseImplementor", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionSelectBaseImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxBaseImplementor", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionCheckboxBaseImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckbox", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionTagbox", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionTagbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionRanking", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionRanking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionComment", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionDropdown", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionFile", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionHtml", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionHtml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrix", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDropdown", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionMatrixDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamicImplementor", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionMatrixDynamicImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamic", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionMatrixDynamic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionPanelDynamic", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionPanelDynamic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultipleTextItem", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["MultipleTextItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMultipleText", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionMultipleText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionRadiogroup", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionRadiogroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionRating", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionRating"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionRatingImplementor", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionRatingImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionText", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionBoolean", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionEmpty", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionExpression", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionImagePicker", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionImagePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupSurveyImplementor", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["PopupSurveyImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyTemplateText", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["SurveyTemplateText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionImage", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionSignaturePad", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionSignaturePad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionCustom", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionButtonGroup", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["QuestionButtonGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionBarItemViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["ActionBarItemViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionBarItemDropdownViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["ActionBarItemDropdownViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionBarSeparatorViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["ActionBarSeparatorViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionContainerImplementor", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["ActionContainerImplementor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["CheckboxViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanRadioItemViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["BooleanRadioItemViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanRadioViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["BooleanRadioViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["PanelViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["PopupViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["showModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showDialog", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["showDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressButtonsViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["ProgressButtonsViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["ProgressViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentsContainer", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["ComponentsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleElementViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["TitleElementViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleContentViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["TitleContentViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleActionViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["TitleActionViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringEditorViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["StringEditorViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringViewerViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["StringViewerViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoImageViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["LogoImageViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["Skeleton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterCounterComponent", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["CharacterCounterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingDropdownViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["RatingDropdownViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingItemViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["RatingItemViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingItemStarViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["RatingItemStarViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingItemSmileyViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["RatingItemSmileyViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["DropdownViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownSelectViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["DropdownSelectViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagboxViewComponent", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["TagboxViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagboxViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["TagboxViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyFilePreview", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["SurveyFilePreview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemViewComponent", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["ListItemViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["ListViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgIconViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["SvgIconViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDynamicRemoveButton", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["SurveyQuestionMatrixDynamicRemoveButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDetailButton", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["SurveyQuestionMatrixDetailButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDynamicDragDropIcon", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["SurveyQuestionMatrixDynamicDragDropIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupItemViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["ButtonGroupItemViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyNavigationButton", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["SurveyNavigationButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionPaneldynamicActioons", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["SurveyQuestionPaneldynamicActioons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandInfoComponent", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["BrandInfoComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotifierViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["NotifierViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorViewModel", function() { return _knockout_ui_model__WEBPACK_IMPORTED_MODULE_0__["LoadingIndicatorViewModel"]; });

/* harmony import */ var _core_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-export */ "./src/entries/core-export.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyModel", function() { return _core_export__WEBPACK_IMPORTED_MODULE_1__["SurveyModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyWindowModel", function() { return _core_export__WEBPACK_IMPORTED_MODULE_1__["SurveyWindowModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return _core_export__WEBPACK_IMPORTED_MODULE_1__["settings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyLocalization", function() { return _core_export__WEBPACK_IMPORTED_MODULE_1__["surveyLocalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return _core_export__WEBPACK_IMPORTED_MODULE_1__["surveyStrings"]; });

/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);



Object(survey_core__WEBPACK_IMPORTED_MODULE_2__["checkLibraryVersion"])("" + "1.9.113", "survey-knockout-ui");


/***/ }),

/***/ "./src/knockout/components/action-bar/action-bar-item-dropdown.html":
/*!**************************************************************************!*\
  !*** ./src/knockout/components/action-bar/action-bar-item-dropdown.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko with: $data.model.item -->\n<button type=\"button\"\n  data-bind=\"click: function(s, args) { $data.action($data, getIsTrusted(args)); }, key2click: { processEsc: false }, css: getActionBarItemCss(), attr: { disabled: $data.enabled !== undefined && !ko.unwrap($data.enabled), title: $data.tooltip || $data.title, 'role': $data.ariaRole }\">\n  <!-- ko if: $data.iconName -->\n  <!-- ko component: { name: 'sv-svg-icon', params: { iconName: iconName, size: iconSize, title: $data.tooltip || $data.title, css: $data.cssClasses.itemIcon } } -->\n  <!-- /ko -->\n  <!-- /ko -->\n  <!-- ko if: $data.hasTitle -->\n  <span data-bind=\"text: title, css: getActionBarItemTitleCss()\"></span>\n  <!-- /ko -->\n</button>\n<sv-popup params=\"{ model: popupModel, getTarget: $parent.getTarget }\"></sv-popup>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/action-bar/action-bar-item-dropdown.ts":
/*!************************************************************************!*\
  !*** ./src/knockout/components/action-bar/action-bar-item-dropdown.ts ***!
  \************************************************************************/
/*! exports provided: ActionBarItemDropdownViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarItemDropdownViewModel", function() { return ActionBarItemDropdownViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./action-bar-item-dropdown.html */ "./src/knockout/components/action-bar/action-bar-item-dropdown.html");
var ActionBarItemDropdownViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-action-bar-item-dropdown", {
    viewModel: {
        createViewModel: function (params) {
            return {
                model: new survey_core__WEBPACK_IMPORTED_MODULE_1__["ActionDropdownViewModel"](params.item),
                getTarget: survey_core__WEBPACK_IMPORTED_MODULE_1__["getActionDropdownButtonTarget"]
            };
        }
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/action-bar/action-bar-item.html":
/*!*****************************************************************!*\
  !*** ./src/knockout/components/action-bar/action-bar-item.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko with: $data.item -->\n<button\n  type=\"button\"\n  data-bind=\"click: function(s, args) { $data.action($data, getIsTrusted(args)); }, key2click: { processEsc: false }, disable: $data.disabled, css: getActionBarItemCss(), attr: { title: $data.tooltip || $data.title, 'aria-checked': $data.ariaChecked, 'role': $data.ariaRole, 'aria-expanded': typeof $data.ariaExpanded === 'undefined' ? null : ($data.ariaExpanded ? 'true': 'false') }\"\n>\n  <!-- ko if: $data.iconName -->\n  <!-- ko component: { name: 'sv-svg-icon', params: { css: $data.cssClasses.itemIcon, iconName: iconName, size: iconSize, title: $data.tooltip || $data.title } } --><!-- /ko -->\n  <!-- /ko -->\n  <!-- ko if: $data.hasTitle -->\n  <span\n    data-bind=\"text: title, css: getActionBarItemTitleCss()\"\n  ></span>\n  <!-- /ko -->\n</button>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/action-bar/action-bar-item.ts":
/*!***************************************************************!*\
  !*** ./src/knockout/components/action-bar/action-bar-item.ts ***!
  \***************************************************************/
/*! exports provided: ActionBarItemViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarItemViewModel", function() { return ActionBarItemViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./action-bar-item.html */ "./src/knockout/components/action-bar/action-bar-item.html");
var ActionBarItemViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-action-bar-item", {
    viewModel: {
        createViewModel: function (params) {
            return params;
        },
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/action-bar/action-bar-separator.html":
/*!**********************************************************************!*\
  !*** ./src/knockout/components/action-bar/action-bar-separator.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sv-action-bar-separator\" data-bind=\"css: $data.css\"></div>";

/***/ }),

/***/ "./src/knockout/components/action-bar/action-bar-separator.ts":
/*!********************************************************************!*\
  !*** ./src/knockout/components/action-bar/action-bar-separator.ts ***!
  \********************************************************************/
/*! exports provided: ActionBarSeparatorViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarSeparatorViewModel", function() { return ActionBarSeparatorViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./action-bar-separator.html */ "./src/knockout/components/action-bar/action-bar-separator.html");
var ActionBarSeparatorViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-action-bar-separator", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var item = params.item;
            if (!!item) {
                return {
                    css: item.innerCss,
                };
            }
            return {};
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/action-bar/action-bar.html":
/*!************************************************************!*\
  !*** ./src/knockout/components/action-bar/action-bar.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: model.hasActions -->\n<div\n  data-bind=\"css: model.getRootCss(), click: handleClick ? function() { return true; } : undefined, clickBubble: handleClick ? false : undefined\"\n>\n  <!-- ko foreach: model.renderedActions -->\n  <!-- ko component: { name: 'sv-action', params: { item: $data } } -->\n  <!-- /ko -->\n  <!--/ko-->\n</div>\n<!--/ko-->\n";

/***/ }),

/***/ "./src/knockout/components/action-bar/action-bar.ts":
/*!**********************************************************!*\
  !*** ./src/knockout/components/action-bar/action-bar.ts ***!
  \**********************************************************/
/*! exports provided: ActionBarItemViewModel, ActionBarItemDropdownViewModel, ActionBarSeparatorViewModel, ActionContainerImplementor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionContainerImplementor", function() { return ActionContainerImplementor; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/knockout/components/action-bar/action.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _action_bar_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-bar-item */ "./src/knockout/components/action-bar/action-bar-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionBarItemViewModel", function() { return _action_bar_item__WEBPACK_IMPORTED_MODULE_3__["ActionBarItemViewModel"]; });

/* harmony import */ var _action_bar_item_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-bar-item-dropdown */ "./src/knockout/components/action-bar/action-bar-item-dropdown.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionBarItemDropdownViewModel", function() { return _action_bar_item_dropdown__WEBPACK_IMPORTED_MODULE_4__["ActionBarItemDropdownViewModel"]; });

/* harmony import */ var _action_bar_separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-bar-separator */ "./src/knockout/components/action-bar/action-bar-separator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionBarSeparatorViewModel", function() { return _action_bar_separator__WEBPACK_IMPORTED_MODULE_5__["ActionBarSeparatorViewModel"]; });

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var template = __webpack_require__(/*! ./action-bar.html */ "./src/knockout/components/action-bar/action-bar.html");




var ActionContainerImplementor = /** @class */ (function (_super) {
    __extends(ActionContainerImplementor, _super);
    function ActionContainerImplementor(model, handleClick) {
        if (handleClick === void 0) { handleClick = true; }
        var _this = _super.call(this, model) || this;
        _this.model = model;
        _this.handleClick = handleClick;
        _this.itemsSubscription = knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
            (model.renderedActions || model.items || model.actions).forEach(function (item) {
                if (!!item.stateItem) {
                    new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](item.stateItem);
                }
                else {
                    new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](item);
                }
            });
        });
        return _this;
    }
    ActionContainerImplementor.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.itemsSubscription.dispose();
        this.model.resetResponsivityManager();
    };
    return ActionContainerImplementor;
}(_kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"]));

knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-action-bar", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var handleClick = params.handleClick !== undefined ? params.handleClick : true;
            var model = params.model;
            var container = componentInfo.element.nextElementSibling;
            params.model.initResponsivityManager(container);
            return new ActionContainerImplementor(model, handleClick);
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/action-bar/action.html":
/*!********************************************************!*\
  !*** ./src/knockout/components/action-bar/action.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko with: $data.item -->\r\n<div data-bind=\"class: $data.getActionRootCss(), attr: { id: $data.id }\">\r\n    <!-- ko ifnot: $data.isEmpty -->\r\n    <div class=\"sv-action__content\">\r\n        <!-- ko if: $data.needSeparator -->\r\n        <sv-action-bar-separator></sv-action-bar-separator>\r\n        <!-- /ko -->\r\n        <!-- ko ifnot: $data.template-->\r\n        <!-- ko component: { name: $data.component || 'sv-action-bar-item', params: { item: $data } } -->\r\n        <!-- /ko -->\r\n        <!-- /ko -->\r\n        <!-- ko if: $data.template  -->\r\n        <!-- ko template: { name: $data.template, data: $data.data || $data } -->\r\n        <!-- /ko -->\r\n        <!-- /ko -->\r\n    </div>\r\n    <!-- /ko -->\r\n</div>\r\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/action-bar/action.ts":
/*!******************************************************!*\
  !*** ./src/knockout/components/action-bar/action.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");


var template = __webpack_require__(/*! ./action.html */ "./src/knockout/components/action-bar/action.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-action", {
    viewModel: {
        createViewModel: function (params) {
            var item = params.item;
            new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](item);
            return params;
        },
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/boolean-checkbox/boolean-checkbox.html":
/*!************************************************************************!*\
  !*** ./src/knockout/components/boolean-checkbox/boolean-checkbox.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: question.cssClasses.rootCheckbox\">\n  <div data-bind=\"css: question.getCheckboxItemCss()\">\n    <label data-bind=\"css: question.cssClasses.checkboxLabel\">\n      <input\n        type=\"checkbox\"\n        data-bind=\"value: question.booleanValue, css: question.cssClasses.controlCheckbox, attr: {name: question.name, id: question.inputId, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy}, checked: question.booleanValue, surveyProp: {indeterminate: question.isIndeterminate}, enable: !question.isInputReadOnly\"\n      />\n      <span data-bind=\"css: question.cssClasses.checkboxMaterialDecorator\">\n        <!-- ko if: question.svgIcon -->\n        <svg data-bind=\"css:question.cssClasses.checkboxItemDecorator\">\n          <use data-bind=\"attr:{'xlink:href':question.svgIcon}\" xlink:href=''></use>\n        </svg>\n        <!-- /ko -->\n        <span class=\"check\"></span>\n      </span>\n      <span\n        data-bind=\"if: question.isLabelRendered, css: question.cssClasses.checkboxControlLabel, attr: {id: question.labelRenderedAriaID}\"\n      >\n        <!-- ko component: { name: 'sv-title-actions', params: {element: question } } --><!-- /ko -->\n      </span>\n    </label>\n    <!-- ko if: question.canRenderLabelDescription -->\n    <div data-bind=\"css: question.cssDescription\">\n      <!-- ko template: { name: 'survey-string', data: question.locDescription } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n</div>\n";

/***/ }),

/***/ "./src/knockout/components/boolean-checkbox/boolean-checkbox.ts":
/*!**********************************************************************!*\
  !*** ./src/knockout/components/boolean-checkbox/boolean-checkbox.ts ***!
  \**********************************************************************/
/*! exports provided: CheckboxViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxViewModel", function() { return CheckboxViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./boolean-checkbox.html */ "./src/knockout/components/boolean-checkbox/boolean-checkbox.html");
var CheckboxViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-boolean-checkbox", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return { question: params.question };
        },
    },
    template: template,
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory"].Instance.registerRenderer("boolean", "checkbox", "sv-boolean-checkbox");


/***/ }),

/***/ "./src/knockout/components/boolean-radio/boolean-radio-item.html":
/*!***********************************************************************!*\
  !*** ./src/knockout/components/boolean-radio/boolean-radio-item.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div role=\"presentation\" data-bind=\"class: question.getRadioItemClass(question.cssClasses, $data.value)\">\n    <label data-bind=\"css: question.cssClasses.radioLabel\">\n      <input\n        type=\"radio\"\n        data-bind=\"event: { change: handleChange }, attr: { name: question.name, 'aria-describedby': question.ariaDescribedBy, value: ''+$data.value, checked: $data.value === question.booleanValue }, enable: !question.isInputReadOnly, css: question.cssClasses.itemRadioControl\"\n      />\n      <!-- ko if: question.cssClasses.materialRadioDecorator -->\n      <span data-bind=\"css: question.cssClasses.materialRadioDecorator\">\n        <!-- ko if: question.itemSvgIcon -->\n        <svg data-bind=\"css:question.cssClasses.itemRadioDecorator\">\n          <use data-bind=\"attr:{'xlink:href':question.itemSvgIcon}\" xlink:href=''></use>\n        </svg>\n        <!-- /ko -->\n      </span>\n      <!-- /ko -->\n      <span data-bind=\"css: question.cssClasses.radioControlLabel\">\n        <!-- ko template: { name: 'survey-string', data: $data.locText } -->\n        <!-- /ko -->\n      </span>\n    </label>\n  </div>\n\n";

/***/ }),

/***/ "./src/knockout/components/boolean-radio/boolean-radio-item.ts":
/*!*********************************************************************!*\
  !*** ./src/knockout/components/boolean-radio/boolean-radio-item.ts ***!
  \*********************************************************************/
/*! exports provided: BooleanRadioItemViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanRadioItemViewModel", function() { return BooleanRadioItemViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./boolean-radio-item.html */ "./src/knockout/components/boolean-radio/boolean-radio-item.html");
var BooleanRadioItemViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-boolean-radio-item", {
    viewModel: {
        createViewModel: function (params) {
            params.handleChange = function () {
                params.question.booleanValue = params.value;
            };
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/boolean-radio/boolean-radio.html":
/*!******************************************************************!*\
  !*** ./src/knockout/components/boolean-radio/boolean-radio.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: question.cssClasses.rootRadio\">\n  <fieldset role=\"presentation\" data-bind=\"css: question.cssClasses.radioFieldset\">\n    <!-- ko component: { name: 'sv-boolean-radio-item', params: { value: false, locText: question.locLabelFalse, question: question } } --><!-- /ko -->\n    <!-- ko component: { name: 'sv-boolean-radio-item', params: { value: true, locText: question.locLabelTrue, question: question } } --><!-- /ko -->  \n  </fieldset>\n</div>\n";

/***/ }),

/***/ "./src/knockout/components/boolean-radio/boolean-radio.ts":
/*!****************************************************************!*\
  !*** ./src/knockout/components/boolean-radio/boolean-radio.ts ***!
  \****************************************************************/
/*! exports provided: BooleanRadioItemViewModel, BooleanRadioViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanRadioViewModel", function() { return BooleanRadioViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _boolean_radio_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boolean-radio-item */ "./src/knockout/components/boolean-radio/boolean-radio-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanRadioItemViewModel", function() { return _boolean_radio_item__WEBPACK_IMPORTED_MODULE_2__["BooleanRadioItemViewModel"]; });




var template = __webpack_require__(/*! ./boolean-radio.html */ "./src/knockout/components/boolean-radio/boolean-radio.html");
var BooleanRadioViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-boolean-radio", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return { question: params.question };
        },
    },
    template: template,
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory"].Instance.registerRenderer("boolean", "radio", "sv-boolean-radio");


/***/ }),

/***/ "./src/knockout/components/brand-info/brand-info.html":
/*!************************************************************!*\
  !*** ./src/knockout/components/brand-info/brand-info.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sv-brand-info\">\n  <a class=\"sv-brand-info__logo\" href=\"https://surveyjs.io/?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=landing_page\"><img src=\"https://surveyjs.io/Content/Images/poweredby.svg\"/></a>\n  <div class=\"sv-brand-info__text\">Try and see how easy it is to <a href=\"https://surveyjs.io/create-survey?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=create_survey\">create a survey</a></div>\n  <div class=\"sv-brand-info__terms\"><a href=\"https://surveyjs.io/TermsOfUse\">Terms of Use & Privacy Statement</a></div>\n</div>\n";

/***/ }),

/***/ "./src/knockout/components/brand-info/brand-info.ts":
/*!**********************************************************!*\
  !*** ./src/knockout/components/brand-info/brand-info.ts ***!
  \**********************************************************/
/*! exports provided: BrandInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandInfoComponent", function() { return BrandInfoComponent; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./brand-info.html */ "./src/knockout/components/brand-info/brand-info.html");
var BrandInfoComponent;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-brand-info", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return {};
        }
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/button-group/button-group-item.html":
/*!*********************************************************************!*\
  !*** ./src/knockout/components/button-group/button-group-item.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label role=\"radio\" data-bind=\"css: model.css.label, attr: { title: model.caption.koRenderedHtml }\">\r\n  <input type=\"radio\"\r\n    data-bind=\"attr: { name: model.name, id: model.id, 'aria-required': model.isRequired, 'aria-label': model.caption.koRenderedHtml, role: 'radio', 'aria-invalid': model.hasErrors, 'aria-describedby': model.describeBy}, checkedValue: model.value, checked: model.question.renderedValue, disable: model.readOnly, css: model.css.control\" />\r\n  <div data-bind=\"css: model.css.decorator\">\r\n    <!-- ko if: !!model.iconName-->\r\n    <sv-svg-icon data-bind=\"css: model.css.icon\" params=\"iconName: model.iconName, size: model.iconSize\"></sv-svg-icon>\r\n    <!-- /ko -->\r\n    <!-- ko if: model.showCaption -->\r\n    <span data-bind=\"css: model.css.caption, attr: { title: model.caption.koRenderedHtml }\">\r\n      <!-- ko template: { name: 'survey-string', data: model.caption } -->\r\n      <!-- /ko -->\r\n    </span>\r\n    <!-- /ko -->\r\n  </div>\r\n</label>";

/***/ }),

/***/ "./src/knockout/components/button-group/button-group-item.ts":
/*!*******************************************************************!*\
  !*** ./src/knockout/components/button-group/button-group-item.ts ***!
  \*******************************************************************/
/*! exports provided: ButtonGroupItemViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupItemViewModel", function() { return ButtonGroupItemViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./button-group-item.html */ "./src/knockout/components/button-group/button-group-item.html");
var ButtonGroupItemViewModel = /** @class */ (function () {
    function ButtonGroupItemViewModel(model) {
        this.model = model;
    }
    return ButtonGroupItemViewModel;
}());

knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-button-group-item", {
    viewModel: {
        createViewModel: function (params) {
            var model = new survey_core__WEBPACK_IMPORTED_MODULE_1__["ButtonGroupItemModel"](params.question, params.item, params.index());
            var viewModel = new ButtonGroupItemViewModel(model);
            return viewModel;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/character-counter/character-counter.html":
/*!**************************************************************************!*\
  !*** ./src/knockout/components/character-counter/character-counter.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"text: counter.remainingCharacterCounter, css: remainingCharacterCounter\"></div>";

/***/ }),

/***/ "./src/knockout/components/character-counter/character-counter.ts":
/*!************************************************************************!*\
  !*** ./src/knockout/components/character-counter/character-counter.ts ***!
  \************************************************************************/
/*! exports provided: CharacterCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterCounterComponent", function() { return CharacterCounterComponent; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");


var template = __webpack_require__(/*! ./character-counter.html */ "./src/knockout/components/character-counter/character-counter.html");
var CharacterCounterComponent;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-character-counter", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var counter = params.counter;
            var remainingCharacterCounter = params.remainingCharacterCounter;
            new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](counter);
            return { counter: counter, remainingCharacterCounter: remainingCharacterCounter };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/components-container/components-container.html":
/*!********************************************************************************!*\
  !*** ./src/knockout/components/components-container/components-container.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: components.length > 0 -->\n<!-- ko if: $data.needRenderWrapper -->\n<div data-bind=\"css: css\">\n  <!-- ko foreach: components -->\n  <!-- ko if: $data.component && !$data.template -->\n  <!-- ko component: { name: component, params: { survey: $parent.survey, model: $data.data, container: $parent.container } } -->\n  <!-- /ko -->\n  <!-- /ko -->\n  <!-- ko if: $data.template -->\n  <!-- ko template: { name: template, data: $data.data } -->\n  <!-- /ko -->\n  <!-- /ko -->\n  <!-- /ko -->\n</div>\n<!-- /ko -->\n<!-- ko ifnot: $data.needRenderWrapper -->\n  <!-- ko foreach: components -->\n  <!-- ko if: $data.component && !$data.template -->\n  <!-- ko component: { name: component, params: { survey: $parent.survey, model: $data.data, container: $parent.container } } -->\n  <!-- /ko -->\n  <!-- /ko -->\n  <!-- ko if: $data.template -->\n  <!-- ko template: { name: template, data: $data.data } -->\n  <!-- /ko -->\n  <!-- /ko -->\n  <!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/components-container/components-container.ts":
/*!******************************************************************************!*\
  !*** ./src/knockout/components/components-container/components-container.ts ***!
  \******************************************************************************/
/*! exports provided: ComponentsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsContainer", function() { return ComponentsContainer; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./components-container.html */ "./src/knockout/components/components-container/components-container.html");
var ComponentsContainer = /** @class */ (function () {
    function ComponentsContainer(survey, container, needRenderWrapper) {
        if (needRenderWrapper === void 0) { needRenderWrapper = true; }
        this.survey = survey;
        this.container = container;
        this.needRenderWrapper = needRenderWrapper;
        this.css = "sv-components-column";
    }
    Object.defineProperty(ComponentsContainer.prototype, "components", {
        get: function () {
            return this.survey.getContainerContent(this.container);
        },
        enumerable: false,
        configurable: true
    });
    return ComponentsContainer;
}());

knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-components-container", {
    viewModel: {
        createViewModel: function (params) {
            var survey = params.survey;
            return new ComponentsContainer(survey, params.container, params.needRenderWrapper);
        },
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/cover/cover-cell.html":
/*!*******************************************************!*\
  !*** ./src/knockout/components/cover/cover-cell.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: css, style: style\">\n  <div class=\"sv-cover__cell-content\" data-bind=\"style: contentStyle\">\n    <!-- ko if: showLogo -->\n    <div class=\"sv-cover__logo\">\n    <!-- ko component: { name: survey.getElementWrapperComponentName(survey, 'logo-image'), params: survey.getElementWrapperComponentData(survey, 'logo-image') } -->\n    <!-- /ko -->\n    </div>\n    <!-- /ko -->\n    <!-- ko if: showTitle -->\n    <div class=\"sv-cover__title\" data-bind=\"style: { maxWidth: textAreaWidth }\">\n    <!-- ko component: { name: 'survey-element-title', params: { element: survey } } -->\n    <!-- /ko -->\n    </div>\n    <!-- /ko -->\n    <!-- ko if: showDescription -->\n    <div class=\"sv-cover__description\" data-bind=\"style: { maxWidth: textAreaWidth }\">\n      <h5 data-bind=\"css: survey.css.description\">\n        <!-- ko template: { name: 'survey-string', data: survey.locDescription } -->\n        <!-- /ko -->\n      </h5>\n    </div>\n    <!-- /ko -->\n  </div>\n</div>\n";

/***/ }),

/***/ "./src/knockout/components/cover/cover-cell.ts":
/*!*****************************************************!*\
  !*** ./src/knockout/components/cover/cover-cell.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./cover-cell.html */ "./src/knockout/components/cover/cover-cell.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-cover-cell", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            // new ImplementorBase(params.model);
            return params.model;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/cover/cover.html":
/*!**************************************************!*\
  !*** ./src/knockout/components/cover/cover.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: (survey.headerView === 'advanced' && survey.renderedHasHeader) -->\n<div data-bind=\"css: model.coverClasses, style: { height: model.renderedHeight }\">\n  <!-- ko if: !!model.backgroundImage -->\n  <div data-bind=\"style: model.backgroundImageStyle, css: model.backgroundImageClasses\"></div>\n  <!-- /ko -->\n  <div data-bind=\"css: model.contentClasses, style: { maxWidth: model.maxWidth }\">\n  <!-- ko foreach: model.cells -->\n    <!-- ko component: { name: 'sv-cover-cell', params: { model: $data } } -->\n    <!-- /ko -->\n  <!--/ko-->\n  </div>\n</div>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/cover/cover.ts":
/*!************************************************!*\
  !*** ./src/knockout/components/cover/cover.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");


var template = __webpack_require__(/*! ./cover.html */ "./src/knockout/components/cover/cover.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-cover", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            params.model.survey = params.survey;
            new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](params.model);
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/dropdown-select/dropdown-select.html":
/*!**********************************************************************!*\
  !*** ./src/knockout/components/dropdown-select/dropdown-select.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: question.renderCssRoot\">\n  <div data-bind=\"css: question.cssClasses.selectWrapper\">\n    <!-- ko ifnot: question.isReadOnly -->\n    <select data-bind=\"options: question.visibleChoices, \n    optionsValue: 'value', \n    optionsText: 'koText', \n    optionsCaption: question.allowClear ? question.locPlaceholder.koRenderedHtml : undefined, \n    optionsAfterRender: question.koDisableOption, \n    attr: {id: question.inputId, autocomplete: question.autocomplete, required: question.isRequired, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy},\n    click: click,\n    event: { keyup: keyup },\n    disable: question.isInputReadOnly, \n    value: question.renderedValue, \n    valueAllowUnset: true, \n    css: question.getControlClass()\">\n    </select>\n    <!-- /ko -->\n    <!-- ko if: question.isReadOnly -->\n    <div disabled\n      data-bind=\"attr: {id: question.inputId}, text: question.readOnlyText, css: question.getControlClass()\">\n    </div>\n    <!-- /ko -->\n    <!-- ko if: question.cssClasses.chevronButtonIconId -->\n    <div data-bind=\"css: question.cssClasses.chevronButton\">\n      <!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.chevronButtonSvg, iconName: question.cssClasses.chevronButtonIconId, size: 'auto' } } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n  <!-- ko if: question.isOtherSelected -->\n  <div data-bind=\"css: question.getCommentAreaCss(true), template: { name: 'survey-other', data: {'question': question, 'visible': question.isOtherSelected } }, style: {display: question.isFlowLayout ? 'inline': ''}\">\n  </div>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/knockout/components/dropdown-select/dropdown-select.ts":
/*!********************************************************************!*\
  !*** ./src/knockout/components/dropdown-select/dropdown-select.ts ***!
  \********************************************************************/
/*! exports provided: DropdownSelectViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownSelectViewModel", function() { return DropdownSelectViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);



var template = __webpack_require__(/*! ./dropdown-select.html */ "./src/knockout/components/dropdown-select/dropdown-select.html");
var DropdownSelectViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-dropdown-select", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            params.question.choices.forEach(function (choice) {
                new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](choice);
            });
            var keyup = function (_, e) {
                params.question.onKeyUp(e);
            };
            var click = function (_, e) {
                params.question.onClick(e);
            };
            return { question: params.question, click: click, keyup: keyup };
        },
    },
    template: template,
});
survey_core__WEBPACK_IMPORTED_MODULE_2__["RendererFactory"].Instance.registerRenderer("dropdown", "select", "sv-dropdown-select");


/***/ }),

/***/ "./src/knockout/components/dropdown/dropdown.html":
/*!********************************************************!*\
  !*** ./src/knockout/components/dropdown/dropdown.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: question.cssClasses.selectWrapper, click: click\">\n  <!-- ko ifnot: question.isReadOnly -->\n  <div data-bind=\"css: question.getControlClass(),\n    event: { keydown: keyhandler, blur: blur },\n    attr: { \n      id: question.inputId, \n      required: question.isRequired, \n      tabindex: model.inputReadOnly ? undefined : 0,\n      disabled: question.isInputReadOnly,\n      role: question.ariaRole,\n      'aria-required': question.ariaRequired, \n      'aria-label': question.ariaLabel, \n      'aria-invalid': question.ariaInvalid, \n      'aria-describedby': question.ariaDescribedBy,\n      'aria-expanded': question.ariaExpanded,\n      'aria-controls': model.listElementId,\n      'aria-activedescendant': model.ariaActivedescendant,\n    },\">\n    <!-- ko if: model.showHintPrefix -->\n    <div data-bind=\"css: question.cssClasses.hintPrefix\">\n      <span data-bind=\"text: model.hintStringPrefix\"></span>\n    </div>\n    <!-- /ko -->\n    <div data-bind=\"css: question.cssClasses.controlValue\">\n      <!-- ko if: model.showHintString -->\n      <div data-bind=\"css: question.cssClasses.hintSuffix\">\n      <span style=\"visibility: hidden\" data-bind=\"text: model.inputStringRendered\"></span>\n      <span data-bind=\"text: model.hintStringSuffix\"></span>\n      </div>\n      <!-- /ko -->\n      <!-- ko if: question.showInputFieldComponent -->\n      <!-- ko component: { name: question.inputFieldComponentName, params: { item: model.getSelectedAction(), question: question } } -->\n      <!-- /ko -->\n      <!-- /ko -->\n      <!-- ko if: question.showSelectedItemLocText -->\n      <!-- ko template: { name: 'survey-string', data: question.selectedItemLocText } -->\n      <!-- /ko -->\n      <!-- /ko -->\n      <input type=\"text\" autocomplete=\"off\" data-bind=\"\n      textInput: model.inputStringRendered, \n      css: question.cssClasses.filterStringInput, \n      attr: {\n        'aria-expanded': question.ariaExpanded,\n        'aria-controls': model.listElementId,\n        'aria-activedescendant': model.ariaActivedescendant,\n        placeholder: model.placeholderRendered, \n        readonly: !model.searchEnabled, \n        role: model.filterStringEnabled ? question.ariaRole : undefined,\n        tabindex: model.inputReadOnly ? undefined : -1,\n        disabled: question.isInputReadOnly,\n        id: question.getInputId(), \n        inputmode: model.inputMode\n      },\n      event: { blur: blur, focus: focus }\"></input>\n    </div>\n    <!-- ko if: (question.allowClear && question.cssClasses.cleanButtonIconId) -->\n    <div data-bind=\"css: question.cssClasses.cleanButton, click: clear, visible: question.showClearButton \">\n      <!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.cleanButtonSvg, iconName: question.cssClasses.cleanButtonIconId, size: 'auto', title: question.clearCaption } } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n  <!-- ko component: { name: \"sv-popup\", params: { model: model.popupModel }} -->\n  <!-- /ko -->\n  <!-- /ko -->\n  <!-- ko if: question.isReadOnly -->\n  <div disabled data-bind=\"css: question.getControlClass(), attr: { id: question.inputId }, \">\n    <!-- ko if: question.selectedItemLocText -->\n    <!-- ko template: { name: 'survey-string', data: question.selectedItemLocText } -->\n    <!-- /ko -->\n    <!-- /ko -->\n    <div data-bind=\"text: question.readOnlyText\"></div>\n  </div>\n  <!-- /ko -->\n  <!-- ko if: question.cssClasses.chevronButtonIconId -->\n  <div data-bind=\"css: question.cssClasses.chevronButton, event: {pointerdown: chevronPointerDown}\">\n    <!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.chevronButtonSvg, iconName: question.cssClasses.chevronButtonIconId, size: 'auto' } } -->\n    <!-- /ko -->\n  </div>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/knockout/components/dropdown/dropdown.ts":
/*!******************************************************!*\
  !*** ./src/knockout/components/dropdown/dropdown.ts ***!
  \******************************************************/
/*! exports provided: DropdownViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownViewModel", function() { return DropdownViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);



var template = __webpack_require__(/*! ./dropdown.html */ "./src/knockout/components/dropdown/dropdown.html");
var DropdownViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-dropdown", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var q = params.question;
            var click = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClick(e);
            };
            var chevronPointerDown = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.chevronPointerDown(e);
            };
            var clear = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClear(e);
            };
            var keyhandler = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.keyHandler(e);
                return true;
            };
            var blur = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onBlur(e);
            };
            var focus = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onFocus(e);
            };
            if (!q.dropdownListModel) {
                q.dropdownListModel = new survey_core__WEBPACK_IMPORTED_MODULE_2__["DropdownListModel"](params.question);
            }
            new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](q.dropdownListModel);
            return { question: q, model: q.dropdownListModel, click: click, clear: clear, keyhandler: keyhandler, blur: blur, focus: focus, chevronPointerDown: chevronPointerDown };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/file/choose-file.html":
/*!*******************************************************!*\
  !*** ./src/knockout/components/file/choose-file.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label tabindex=\"0\" role=\"button\" data-bind=\"css: question.koChooseFileCss, key2click, attr: { for: question.inputId, 'aria-label': question.koGetChooseButtonText() }\">\n  <!-- ko if: question.cssClasses.chooseFileIconId -->\n    <!-- ko component: { name: 'sv-svg-icon', params: { title: question.koGetChooseButtonText(), iconName: question.cssClasses.chooseFileIconId, size: 'auto' } } --><!-- /ko -->\n  <!-- /ko -->\n  <span data-bind=\"text: question.koGetChooseButtonText()\"></span>\n</label>";

/***/ }),

/***/ "./src/knockout/components/file/choose-file.ts":
/*!*****************************************************!*\
  !*** ./src/knockout/components/file/choose-file.ts ***!
  \*****************************************************/
/*! exports provided: SurveyNavigationButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNavigationButton", function() { return SurveyNavigationButton; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./choose-file.html */ "./src/knockout/components/file/choose-file.html");
var SurveyNavigationButton;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-file-choose-btn", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/file/file-preview.html":
/*!********************************************************!*\
  !*** ./src/knockout/components/file/file-preview.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: question.koHasValue && question.showPreviewContainer -->\n<div data-bind=\"css: question.cssClasses.fileList, foreach: question.koData, visible: question.koHasValue\">\n  <span data-bind=\"visible: question.isPreviewVisible($index()), css: question.cssClasses.preview\">\n    <!-- ko template: { name: 'survey-question-file-sign', data: {question: question, item: $data, fileSignCss: question.cssClasses.fileSign} } --><!-- /ko -->\n    <div data-bind=\"css: question.cssClasses.imageWrapper\">\n      <!-- ko if: question.canPreviewImage($data) -->\n      <img data-bind=\"attr: { src: $data.content }, style : { height: question.imageHeight, width: question.imageWidth }\" alt=\"File preview\">\n      <!-- /ko -->\n      <!-- ko if: question.defaultImage($data) -->\n      <!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.defaultImage, iconName: question.cssClasses.defaultImageIconId, size: 'auto' } } --><!-- /ko -->\n      <!-- /ko -->\n      <!-- ko if: $data.name -->\n      <!-- ko ifnot: question.isReadOnly -->\n      <div data-bind=\"click: question.doremovefile, css: question.getRemoveButtonCss()\">\n          <span data-bind=\"css: question.cssClasses.removeFile, text: question.removeFileCaption\"></span>\n          <!-- ko if: question.cssClasses.removeFileSvgIconId -->\n            <!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.removeFileSvg, title: question.removeFileCaption, iconName: question.cssClasses.removeFileSvgIconId, size: 'auto' } } --><!-- /ko -->\n          <!-- /ko -->\n      </div>\n      <!-- /ko -->\n      <!-- /ko -->\n    </div>\n    <!-- ko template: { name: 'survey-question-file-sign', data: {question: question, item: $data, fileSignCss: question.cssClasses.fileSignBottom} } --><!-- /ko -->\n  </span>\n</div>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/file/file-preview.ts":
/*!******************************************************!*\
  !*** ./src/knockout/components/file/file-preview.ts ***!
  \******************************************************/
/*! exports provided: SurveyFilePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyFilePreview", function() { return SurveyFilePreview; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./file-preview.html */ "./src/knockout/components/file/file-preview.html");
var SurveyFilePreview;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-file-preview", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/list/list-item.html":
/*!*****************************************************!*\
  !*** ./src/knockout/components/list/list-item.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<li role=\"option\"\r\ndata-bind=\"css: $data.model.getItemClass($data.item), attr: { id: $data.item.elementId, 'aria-selected': $data.model.isItemSelected($data.item) ? 'true' : 'false' }, click: itemClick, key2click, visible: $data.model.isItemVisible($data.item), event: { pointerdown: function (model, event) { $data.model.onPointerDown(event, $data.item); } }\">  <!-- ko if: $data.item.needSeparator -->\r\n  <div data-bind=\"css: $data.model.cssClasses.itemSeparator\"></div>\r\n  <!-- /ko -->\r\n  <div data-bind=\"style: { paddingInlineStart: $data.model.getItemIndent($data.item) }, css: $data.model.cssClasses.itemBody\">\r\n  <!-- ko ifnot: $data.item.component -->\r\n  <!-- ko if: $data.item.iconName -->\r\n  <!-- ko component: { name: \"sv-svg-icon\", params: { iconName: $data.item.iconName, size: $data.item.iconSize, css: $data.model.cssClasses.itemIcon } }-->\r\n  <!-- /ko -->\r\n  <!-- /ko -->\r\n  <!-- ko template: { name: 'survey-string', data: $data.item.locTitle } --><!-- /ko -->\r\n  <!-- /ko -->\r\n  <!-- ko if: $data.item.component -->\r\n  <!-- ko component: { name: $data.item.component, params: { item: $data.item } } -->\r\n  <!-- /ko -->\r\n  <!-- /ko -->\r\n  </div>\r\n</li>";

/***/ }),

/***/ "./src/knockout/components/list/list-item.ts":
/*!***************************************************!*\
  !*** ./src/knockout/components/list/list-item.ts ***!
  \***************************************************/
/*! exports provided: ListItemViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemViewComponent", function() { return ListItemViewComponent; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");


var template = __webpack_require__(/*! ./list-item.html */ "./src/knockout/components/list/list-item.html");
var ListItemViewComponent;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-list-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](params.item);
            return {
                item: params.item,
                model: params.model,
                itemClick: function (data, event) {
                    data.model.onItemClick(data.item);
                    event.stopPropagation();
                }
            };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/list/list.html":
/*!************************************************!*\
  !*** ./src/knockout/components/list/list.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: model.cssClasses.root\">\n  <!-- ko if: $data.model.showFilter -->\n  <div data-bind=\"css: model.cssClasses.filter\">\n    <div data-bind=\"css: model.cssClasses.filterIcon\">\n      <!-- ko component: { name: 'sv-svg-icon', params: { iconName: 'icon-search', size: 'auto' }  } -->\n      <!-- /ko -->\n    </div>\n    <input type=\"text\" \n      data-bind=\"css: model.cssClasses.filterInput, textInput: model.filterString, attr: { placeholder: model.filterStringPlaceholder, 'aria-label': model.filterStringPlaceholder }, event: { keyup: function (model, event) { $data.model.goToItems(event); } }\"></input>\n    <!-- ko if: $data.model.showSearchClearButton && !!$data.model.filterString -->\n    <button data-bind=\"event: { click: (_, event) => { model.onClickSearchClearButton(event); } }, css: model.cssClasses.searchClearButtonIcon\">\n      <!-- ko component: { name: 'sv-svg-icon', params: { iconName: 'icon-searchclear', size: 'auto' }  } -->\n      <!-- /ko -->\n    </button>\n    <!-- /ko -->\n  </div>\n  <!-- /ko -->\n  <div data-bind=\"css: model.cssClasses.emptyContainer, visible: $data.model.isEmpty\">\n    <div data-bind=\"css: model.cssClasses.emptyText, text: model.emptyMessage, attr: { 'aria-label': model.emptyMessage }\"></div>\n  </div>\n  <!-- ko if: $data.model.renderElements -->\n  <ul role=\"listbox\"\n    data-bind=\"css: model.getListClass(), visible: !$data.model.isEmpty, attr: { id: model.elementId },\n    event: { mousedown: function (data, e) { e.preventDefault(); }, keydown: function(data, e) { $data.model.onKeyDown(event); return true; }, mousemove: function(data, e) { $data.model.onMouseMove(event); return true; } }\">\n    <!-- ko template: { foreach: model.renderedActions, afterRender: $data.afterItemRender } -->\n    <!-- ko component: { name: 'sv-list-item', params: { item: $data, model: $parent.model } } -->\n    <!-- /ko -->\n    <!-- /ko -->\n  </ul>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/knockout/components/list/list.ts":
/*!**********************************************!*\
  !*** ./src/knockout/components/list/list.ts ***!
  \**********************************************/
/*! exports provided: ListItemViewComponent, ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_bar_action_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-bar/action-bar */ "./src/knockout/components/action-bar/action-bar.ts");
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item */ "./src/knockout/components/list/list-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemViewComponent", function() { return _list_item__WEBPACK_IMPORTED_MODULE_2__["ListItemViewComponent"]; });



var template = __webpack_require__(/*! ./list.html */ "./src/knockout/components/list/list.html");

var ListViewComponent;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-list", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = params.model;
            var _implementor = new _action_bar_action_bar__WEBPACK_IMPORTED_MODULE_1__["ActionContainerImplementor"](model);
            model.initListContainerHtmlElement(componentInfo.element);
            return {
                model: model,
                dispose: function () {
                    _implementor.dispose();
                    model.initListContainerHtmlElement(undefined);
                },
                afterItemRender: function (_, action) {
                    !!knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"] && knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"].runEarly();
                    model.onLastItemRended(action);
                }
            };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/loading-indicator/loading-indicator.html":
/*!**************************************************************************!*\
  !*** ./src/knockout/components/loading-indicator/loading-indicator.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sd-loading-indicator\">\n  <!-- ko component: { name: \"sv-svg-icon\", params: { iconName: 'icon-loading', size: 'auto' }  } -->\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/knockout/components/loading-indicator/loading-indicator.ts":
/*!************************************************************************!*\
  !*** ./src/knockout/components/loading-indicator/loading-indicator.ts ***!
  \************************************************************************/
/*! exports provided: LoadingIndicatorViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorViewModel", function() { return LoadingIndicatorViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./loading-indicator.html */ "./src/knockout/components/loading-indicator/loading-indicator.html");
var LoadingIndicatorViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-loading-indicator", {
    viewModel: {
        createViewModel: function (params, componentInfo) { }
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/logo-image/logo-image.html":
/*!************************************************************!*\
  !*** ./src/knockout/components/logo-image/logo-image.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko with: survey -->\n<div data-bind=\"css: logoClassNames\">\n  <img data-bind=\"css: css.logoImage, attr: { src: locLogo.koRenderedHtml, width: renderedLogoWidth, height: renderedLogoHeight, alt: locTitle.renderedHtml }, style: { objectFit: logoFit, width: renderedStyleLogoWidth, height: renderedStyleLogoHeight }\">\n</div>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/logo-image/logo-image.ts":
/*!**********************************************************!*\
  !*** ./src/knockout/components/logo-image/logo-image.ts ***!
  \**********************************************************/
/*! exports provided: LogoImageViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImageViewModel", function() { return LogoImageViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./logo-image.html */ "./src/knockout/components/logo-image/logo-image.html");
var LogoImageViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-logo-image", {
    viewModel: {
        createViewModel: function (params) {
            return { survey: params };
        },
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/matrix-actions/detail-button/detail-button.html":
/*!*********************************************************************************!*\
  !*** ./src/knockout/components/matrix-actions/detail-button/detail-button.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\ntype=\"button\"\ndata-bind=\"css:question.getDetailPanelButtonCss(row), click:row.showHideDetailPanelClick, attr:{ 'aria-expanded': question.getIsDetailPanelShowing($data.row) ? 'true': 'false', 'aria-controls': question.getIsDetailPanelShowing($data.row) ? row.detailPanelId: false}\"\n>\n<!-- ko component: { name: 'sv-svg-icon', params: { css: question.getDetailPanelIconCss(row), iconName: question.getDetailPanelIconId(row), size: 'auto' } } -->\n<!-- /ko -->\n</button>\n<!-- ko if: question.detailPanelMode === \"popup\" && question.getKoPopupIsVisible(row) -->\n<sv-popup\nparams=\"contentComponentName: 'sv-panel', contentComponentData: { question: row.detailPanel, onItemSelect: function(){} }, isVisible: question.getKoPopupIsVisible(row), isModal: true, onHide: function() { row.hideDetailPanel() }, verticalPosition: 'top', horizontalPosition: 'right'\"\n></sv-popup>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/matrix-actions/detail-button/detail-button.ts":
/*!*******************************************************************************!*\
  !*** ./src/knockout/components/matrix-actions/detail-button/detail-button.ts ***!
  \*******************************************************************************/
/*! exports provided: SurveyQuestionMatrixDetailButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDetailButton", function() { return SurveyQuestionMatrixDetailButton; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./detail-button.html */ "./src/knockout/components/matrix-actions/detail-button/detail-button.html");
var SurveyQuestionMatrixDetailButton;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-matrix-detail-button", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.item.data;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/matrix-actions/drag-drop-icon/drag-drop-icon.html":
/*!***********************************************************************************!*\
  !*** ./src/knockout/components/matrix-actions/drag-drop-icon/drag-drop-icon.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: question.iconDragElement -->\n<svg data-bind=\"css: question.cssClasses.dragElementDecorator\">\n  <use data-bind=\"attr: { 'xlink:href': question.iconDragElement }\" xlink:href=''></use>\n</svg>\n<!-- /ko -->\n<!-- ko ifnot: question.iconDragElement -->\n<span data-bind=\"css: question.cssClasses.iconDrag\"></span>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/matrix-actions/drag-drop-icon/drag-drop-icon.ts":
/*!*********************************************************************************!*\
  !*** ./src/knockout/components/matrix-actions/drag-drop-icon/drag-drop-icon.ts ***!
  \*********************************************************************************/
/*! exports provided: SurveyQuestionMatrixDynamicDragDropIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDynamicDragDropIcon", function() { return SurveyQuestionMatrixDynamicDragDropIcon; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./drag-drop-icon.html */ "./src/knockout/components/matrix-actions/drag-drop-icon/drag-drop-icon.html");
var SurveyQuestionMatrixDynamicDragDropIcon;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-matrix-drag-drop-icon", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.item.data;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/matrix-actions/remove-button/remove-button.html":
/*!*********************************************************************************!*\
  !*** ./src/knockout/components/matrix-actions/remove-button/remove-button.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  type=\"button\"\n  data-bind=\"click: question.koRemoveRowClick, disable: question.isInputReadOnly, css: question.getRemoveRowButtonCss()\"\n>\n  <!-- ko template: { name: 'survey-string', data: question.locRemoveRowText } --><!-- /ko -->\n  <span data-bind=\"css: question.cssClasses.iconRemove\"></span>\n</button>\n";

/***/ }),

/***/ "./src/knockout/components/matrix-actions/remove-button/remove-button.ts":
/*!*******************************************************************************!*\
  !*** ./src/knockout/components/matrix-actions/remove-button/remove-button.ts ***!
  \*******************************************************************************/
/*! exports provided: SurveyQuestionMatrixDynamicRemoveButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDynamicRemoveButton", function() { return SurveyQuestionMatrixDynamicRemoveButton; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./remove-button.html */ "./src/knockout/components/matrix-actions/remove-button/remove-button.html");
var SurveyQuestionMatrixDynamicRemoveButton;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-matrix-remove-button", {
    viewModel: {
        createViewModel: function (params) {
            return params.item.data;
        },
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/notifier/notifier.html":
/*!********************************************************!*\
  !*** ./src/knockout/components/notifier/notifier.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: notifier.isDisplayed -->\n<div data-bind=\"css: notifier.css, style: { visibility: notifier.active ? 'visible' : 'hidden' }\" role=\"alert\" aria-live=\"polite\">\n  <span data-bind=\"text: notifier.message\"></span>\n  <!-- ko component: { name: \"sv-action-bar\", params: { model: notifier.actionBar } } -->\n  <!-- /ko -->\n</div>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/notifier/notifier.ts":
/*!******************************************************!*\
  !*** ./src/knockout/components/notifier/notifier.ts ***!
  \******************************************************/
/*! exports provided: NotifierViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierViewModel", function() { return NotifierViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");


var template = __webpack_require__(/*! ./notifier.html */ "./src/knockout/components/notifier/notifier.html");
var NotifierViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-notifier", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](params.notifier);
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/panel/panel.ts":
/*!************************************************!*\
  !*** ./src/knockout/components/panel/panel.ts ***!
  \************************************************/
/*! exports provided: PanelViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelViewModel", function() { return PanelViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! html-loader?interpolate!val-loader!./panel.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/panel/panel.html");
var PanelViewModel = /** @class */ (function () {
    function PanelViewModel(question, targetElement) {
        this.question = question;
        this.targetElement = targetElement;
    }
    return PanelViewModel;
}());

knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-panel", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var viewModel = new PanelViewModel(params.question, componentInfo.element.parentElement);
            return viewModel;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/paneldynamic-actions/paneldynamic-actions.ts":
/*!******************************************************************************!*\
  !*** ./src/knockout/components/paneldynamic-actions/paneldynamic-actions.ts ***!
  \******************************************************************************/
/*! exports provided: SurveyQuestionPaneldynamicActioons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionPaneldynamicActioons", function() { return SurveyQuestionPaneldynamicActioons; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var addBtnTemplate = __webpack_require__(/*! ./paneldynamic-add-btn.html */ "./src/knockout/components/paneldynamic-actions/paneldynamic-add-btn.html");
var nextBtnTemplate = __webpack_require__(/*! ./paneldynamic-next-btn.html */ "./src/knockout/components/paneldynamic-actions/paneldynamic-next-btn.html");
var prevBtnTemplate = __webpack_require__(/*! ./paneldynamic-prev-btn.html */ "./src/knockout/components/paneldynamic-actions/paneldynamic-prev-btn.html");
var progressTextTemplate = __webpack_require__(/*! ./paneldynamic-progress-text.html */ "./src/knockout/components/paneldynamic-actions/paneldynamic-progress-text.html");
var removeBtnTemplate = __webpack_require__(/*! ./paneldynamic-remove-btn.html */ "./src/knockout/components/paneldynamic-actions/paneldynamic-remove-btn.html");
var SurveyQuestionPaneldynamicActioons;
function getPaneldynamicActionViewModel() {
    return {
        createViewModel: function (params, componentInfo) {
            return (!!params.item && params.item.data) || params;
        },
    };
}
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-paneldynamic-add-btn", {
    viewModel: getPaneldynamicActionViewModel(),
    template: addBtnTemplate,
});
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-paneldynamic-next-btn", {
    viewModel: getPaneldynamicActionViewModel(),
    template: nextBtnTemplate,
});
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-paneldynamic-prev-btn", {
    viewModel: getPaneldynamicActionViewModel(),
    template: prevBtnTemplate,
});
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-paneldynamic-progress-text", {
    viewModel: getPaneldynamicActionViewModel(),
    template: progressTextTemplate,
});
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-paneldynamic-remove-btn", {
    viewModel: getPaneldynamicActionViewModel(),
    template: removeBtnTemplate,
});


/***/ }),

/***/ "./src/knockout/components/paneldynamic-actions/paneldynamic-add-btn.html":
/*!********************************************************************************!*\
  !*** ./src/knockout/components/paneldynamic-actions/paneldynamic-add-btn.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: question.koCanAddPanel -->\n<button type=\"button\" data-bind=\"click: question.koAddPanelClick, css: question.koAddButtonCss, visible: question.koCanAddPanel\">\n  <span data-bind=\"css: question.cssClasses.buttonAddText, text: question.panelAddText\"></span>\n</button>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/paneldynamic-actions/paneldynamic-next-btn.html":
/*!*********************************************************************************!*\
  !*** ./src/knockout/components/paneldynamic-actions/paneldynamic-next-btn.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"attr: { title: question.panelNextText }, click: question.koNextPanelClick, css: question.koNextButtonCss\">\n    <!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.cssClasses.progressBtnIcon, size: 'auto' } } --><!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/knockout/components/paneldynamic-actions/paneldynamic-prev-btn.html":
/*!*********************************************************************************!*\
  !*** ./src/knockout/components/paneldynamic-actions/paneldynamic-prev-btn.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"attr: { title: question.panelPrevText }, click: question.koPrevPanelClick, css: question.koPrevButtonCss\">\n    <!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.cssClasses.progressBtnIcon, size: 'auto' } } --><!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/knockout/components/paneldynamic-actions/paneldynamic-progress-text.html":
/*!**************************************************************************************!*\
  !*** ./src/knockout/components/paneldynamic-actions/paneldynamic-progress-text.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"text: question.koProgressText, css: question.cssClasses.progressText\"></div>";

/***/ }),

/***/ "./src/knockout/components/paneldynamic-actions/paneldynamic-remove-btn.html":
/*!***********************************************************************************!*\
  !*** ./src/knockout/components/paneldynamic-actions/paneldynamic-remove-btn.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" data-bind=\"click: function() { question.koRemovePanelClick(panel); }, css: question.getPanelRemoveButtonCss()\">\n  <span data-bind=\"css: question.cssClasses.buttonRemoveText, text: question.panelRemoveText\"></span>\n  <span data-bind=\"css: question.cssClasses.iconRemove\"></span>\n</button>";

/***/ }),

/***/ "./src/knockout/components/popup/popup.ts":
/*!************************************************!*\
  !*** ./src/knockout/components/popup/popup.ts ***!
  \************************************************/
/*! exports provided: PopupViewModel, showModal, showDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupViewModel", function() { return PopupViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDialog", function() { return showDialog; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");



var template = __webpack_require__(/*! html-loader?interpolate!val-loader!./popup.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/popup/popup.html");
var PopupViewModel = /** @class */ (function () {
    function PopupViewModel(popupViewModel) {
        var _this = this;
        this.popupViewModel = popupViewModel;
        this.visibilityChangedHandler = function (s, option) {
            if (option.isVisible) {
                knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"].runEarly();
                _this.popupViewModel.updateOnShowing();
            }
        };
        this._popupModelImplementor = new _kobase__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](popupViewModel.model);
        this._popupImplementor = new _kobase__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](popupViewModel);
        popupViewModel.model.onVisibilityChanged.add(this.visibilityChangedHandler);
    }
    PopupViewModel.prototype.dispose = function () {
        this._popupModelImplementor.dispose();
        this._popupModelImplementor = undefined;
        this._popupImplementor.dispose();
        this._popupImplementor = undefined;
        this.popupViewModel.resetComponentElement();
        this.popupViewModel.model.onVisibilityChanged.remove(this.visibilityChangedHandler);
        this.popupViewModel.dispose();
        this.visibilityChangedHandler = undefined;
    };
    return PopupViewModel;
}());

// replace to showDialog then delete
function showModal(componentName, data, onApply, onCancel, cssClass, title, displayMode, container) {
    if (displayMode === void 0) { displayMode = "popup"; }
    var options = Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["createDialogOptions"])(componentName, data, onApply, onCancel, undefined, undefined, cssClass, title, displayMode);
    return showDialog(options, container);
}
function showDialog(dialogOptions, rootElement) {
    dialogOptions.onHide = function () {
        knockout__WEBPACK_IMPORTED_MODULE_0__["cleanNode"](popupViewModel.container);
        popupViewModel.container.remove();
        popupViewModel.dispose();
        viewModel.dispose();
    };
    var popupViewModel = Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["createPopupModalViewModel"])(dialogOptions, rootElement);
    var viewModel = new PopupViewModel(popupViewModel);
    popupViewModel.container.innerHTML = template;
    knockout__WEBPACK_IMPORTED_MODULE_0__["applyBindings"](viewModel, popupViewModel.container);
    popupViewModel.model.isVisible = true;
    return popupViewModel;
}
survey_core__WEBPACK_IMPORTED_MODULE_1__["settings"].showModal = showModal;
survey_core__WEBPACK_IMPORTED_MODULE_1__["settings"].showDialog = showDialog;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-popup", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var container = componentInfo.element.nodeType === Node.COMMENT_NODE ? componentInfo.element.nextElementSibling : componentInfo.element;
            var viewModel = Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["createPopupViewModel"])(knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.model));
            viewModel.setComponentElement(container, params.getTarget ? params.getTarget(container) : undefined);
            return new PopupViewModel(viewModel);
        },
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/progress/buttons.ts":
/*!*****************************************************!*\
  !*** ./src/knockout/components/progress/buttons.ts ***!
  \*****************************************************/
/*! exports provided: ProgressButtonsViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressButtonsViewModel", function() { return ProgressButtonsViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! html-loader?interpolate!val-loader!./buttons.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/progress/buttons.html");
var ProgressButtonsViewModel = /** @class */ (function () {
    function ProgressButtonsViewModel(survey, element) {
        var _this = this;
        this.survey = survey;
        this.scrollButtonCssKo = undefined;
        this.hasScroller = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](false);
        this.updateScroller = undefined;
        this.progressButtonsModel = new survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyProgressButtonsModel"](survey);
        this.updateScroller = setInterval(function () {
            var listContainerElement = element.querySelector("." + survey.css.progressButtonsListContainer);
            if (!!listContainerElement) {
                _this.hasScroller(listContainerElement.scrollWidth > listContainerElement.offsetWidth);
            }
        }, 100);
    }
    ProgressButtonsViewModel.prototype.isListElementClickable = function (index) {
        return this.progressButtonsModel.isListElementClickable(index());
    };
    ProgressButtonsViewModel.prototype.getListElementCss = function (index) {
        return this.progressButtonsModel.getListElementCss(index());
    };
    ProgressButtonsViewModel.prototype.clickListElement = function (index) {
        this.progressButtonsModel.clickListElement(index());
    };
    ProgressButtonsViewModel.prototype.getScrollButtonCss = function (isLeftScroll) {
        var _this = this;
        this.scrollButtonCssKo = knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
            return _this.progressButtonsModel.getScrollButtonCss(_this.hasScroller(), isLeftScroll);
        }, this);
        return this.scrollButtonCssKo;
    };
    ProgressButtonsViewModel.prototype.clickScrollButton = function (listContainerElement, isLeftScroll) {
        listContainerElement.scrollLeft += (isLeftScroll ? -1 : 1) * 70;
    };
    ProgressButtonsViewModel.prototype.dispose = function () {
        if (typeof this.updateScroller !== "undefined") {
            clearInterval(this.updateScroller);
            this.updateScroller = undefined;
        }
        if (typeof this.scrollButtonCssKo !== "undefined") {
            this.scrollButtonCssKo.dispose();
            this.scrollButtonCssKo = undefined;
        }
    };
    return ProgressButtonsViewModel;
}());

knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-progress-buttons", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new ProgressButtonsViewModel(params.model, componentInfo.element.nextElementSibling);
        },
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/progress/progress.ts":
/*!******************************************************!*\
  !*** ./src/knockout/components/progress/progress.ts ***!
  \******************************************************/
/*! exports provided: ProgressViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressViewModel", function() { return ProgressViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! html-loader?interpolate!val-loader!./progress.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/progress/progress.html");
var ProgressViewModel = /** @class */ (function () {
    function ProgressViewModel(model, container) {
        if (container === void 0) { container = "header"; }
        this.model = model;
        this.container = container;
    }
    ProgressViewModel.prototype.getProgressTextInBarCss = function (css) {
        return survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyProgressModel"].getProgressTextInBarCss(css);
    };
    ProgressViewModel.prototype.getProgressTextUnderBarCss = function (css) {
        return survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyProgressModel"].getProgressTextUnderBarCss(css);
    };
    ProgressViewModel.prototype.getProgressCssClasses = function () {
        return this.model.getProgressCssClasses(this.container);
    };
    return ProgressViewModel;
}());

knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-progress-progress", {
    viewModel: {
        createViewModel: function (params) {
            return new ProgressViewModel(params.model, params.container);
        }
    },
    template: template
});
var templateBridge = "<!-- ko component: { name: 'sv-progress-progress', params: $data } --><!-- /ko -->";
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-progress-pages", {
    viewModel: {
        createViewModel: function (params) {
            return new ProgressViewModel(params.model, params.container);
        }
    },
    template: templateBridge
});
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-progress-questions", {
    viewModel: {
        createViewModel: function (params) {
            return new ProgressViewModel(params.model, params.container);
        }
    },
    template: templateBridge
});
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-progress-correctquestions", {
    viewModel: {
        createViewModel: function (params) {
            return new ProgressViewModel(params.model, params.container);
        }
    },
    template: templateBridge
});
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-progress-requiredquestions", {
    viewModel: {
        createViewModel: function (params) {
            return new ProgressViewModel(params.model, params.container);
        }
    },
    template: templateBridge
});


/***/ }),

/***/ "./src/knockout/components/progress/toc.ts":
/*!*************************************************!*\
  !*** ./src/knockout/components/progress/toc.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! html-loader?interpolate!val-loader!./toc.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/progress/toc.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-progress-toc", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new survey_core__WEBPACK_IMPORTED_MODULE_1__["TOCModel"](params.model);
        },
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/rating-dropdown/rating-dropdown.html":
/*!**********************************************************************!*\
  !*** ./src/knockout/components/rating-dropdown/rating-dropdown.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: question.cssClasses.rootDropdown\">\n  <!-- ko component: { name: 'sv-dropdown', params: { question: question } } -->\n  <!-- /ko -->\n</div>\n";

/***/ }),

/***/ "./src/knockout/components/rating-dropdown/rating-dropdown.ts":
/*!********************************************************************!*\
  !*** ./src/knockout/components/rating-dropdown/rating-dropdown.ts ***!
  \********************************************************************/
/*! exports provided: RatingDropdownViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingDropdownViewModel", function() { return RatingDropdownViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./rating-dropdown.html */ "./src/knockout/components/rating-dropdown/rating-dropdown.html");
var RatingDropdownViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-rating-dropdown", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return { question: params.question };
        },
    },
    template: template,
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory"].Instance.registerRenderer("rating", "dropdown", "sv-rating-dropdown");


/***/ }),

/***/ "./src/knockout/components/rating/rating-item-smiley.html":
/*!****************************************************************!*\
  !*** ./src/knockout/components/rating/rating-item-smiley.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label data-bind=\"style: question.getItemStyle(item.itemValue, item.highlight), css: question.getItemClass(item.itemValue, item.highlight), event: { mouseover: function () { question.onItemMouseIn(item); }, mouseleave: function () { question.onItemMouseOut(item);}, mousedown: question.koMouseDown }\">\n  <input\n  type=\"radio\"\n  class=\"sv-visuallyhidden\"\n  data-bind=\"attr: { name: question.name, id: question.getInputId(index), value: item.value, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy }, checkedValue: item.value, enable: !question.isInputReadOnly, event: { click: function(data, event) { question.setValueFromClick(event.target.value); return true; } }\"\n  />\n  <!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.getItemSmileyIconName(item.itemValue), size: 'auto', title: item.text } } --><!-- /ko -->\n</label>";

/***/ }),

/***/ "./src/knockout/components/rating/rating-item-smiley.ts":
/*!**************************************************************!*\
  !*** ./src/knockout/components/rating/rating-item-smiley.ts ***!
  \**************************************************************/
/*! exports provided: RatingItemSmileyViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingItemSmileyViewModel", function() { return RatingItemSmileyViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");


var template = __webpack_require__(/*! ./rating-item-smiley.html */ "./src/knockout/components/rating/rating-item-smiley.html");
var RatingItemSmileyViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-rating-item-smiley", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](params.item);
            return { question: params.question, item: params.item, index: params.index };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/rating/rating-item-star.html":
/*!**************************************************************!*\
  !*** ./src/knockout/components/rating/rating-item-star.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label data-bind=\"css: question.getItemClass(item.itemValue, item.highlight), event: { mouseover: function () { question.onItemMouseIn(item); }, mouseleave: function () { question.onItemMouseOut(item);}, mousedown: question.koMouseDown }\">\n  <input\n  type=\"radio\"\n  class=\"sv-visuallyhidden\"\n  data-bind=\"attr: { name: question.name, id: question.getInputId(index), value: item.value, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy }, checkedValue: item.value, enable: !question.isInputReadOnly, event: { click: function(data, event) { question.setValueFromClick(event.target.value); return true; } }\"\n  />\n  <!-- ko component: { name: 'sv-svg-icon', params: { css: 'sv-star', iconName: question.itemStarIcon, size: 'auto', title: item.text } } --><!-- /ko -->\n  <!-- ko component: { name: 'sv-svg-icon', params: { css: 'sv-star-2', iconName: question.itemStarIconAlt, size: 'auto', title: item.text } } --><!-- /ko -->\n</label>";

/***/ }),

/***/ "./src/knockout/components/rating/rating-item-star.ts":
/*!************************************************************!*\
  !*** ./src/knockout/components/rating/rating-item-star.ts ***!
  \************************************************************/
/*! exports provided: RatingItemStarViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingItemStarViewModel", function() { return RatingItemStarViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");


var template = __webpack_require__(/*! ./rating-item-star.html */ "./src/knockout/components/rating/rating-item-star.html");
var RatingItemStarViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-rating-item-star", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](params.item);
            return { question: params.question, item: params.item, index: params.index };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/rating/rating-item.html":
/*!*********************************************************!*\
  !*** ./src/knockout/components/rating/rating-item.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label data-bind=\"css: question.getItemClassByText(item.itemValue, item.text),  event: { mousedown: question.koMouseDown }\">\n  <input\n  type=\"radio\"\n  class=\"sv-visuallyhidden\"\n  data-bind=\"attr: { name: question.name, id: question.getInputId(index), value: item.value, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy }, checkedValue: item.value, enable: !question.isInputReadOnly, event: { click: function(data, event) { question.setValueFromClick(event.target.value); return true; } }\"\n  />\n  <span data-bind=\"css: question.cssClasses.itemText\">\n  <!-- ko template: { name: 'survey-string', data: item.locText } -->\n  <!-- /ko -->\n  </span>\n</label>\n";

/***/ }),

/***/ "./src/knockout/components/rating/rating-item.ts":
/*!*******************************************************!*\
  !*** ./src/knockout/components/rating/rating-item.ts ***!
  \*******************************************************/
/*! exports provided: RatingItemViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingItemViewModel", function() { return RatingItemViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");


var template = __webpack_require__(/*! ./rating-item.html */ "./src/knockout/components/rating/rating-item.html");
var RatingItemViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-rating-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](params.item);
            return { question: params.question, item: params.item, index: params.index };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/skeleton/skeleton.html":
/*!********************************************************!*\
  !*** ./src/knockout/components/skeleton/skeleton.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sv-skeleton-element\" data-bind=\"attr: { id: element.id }\">\n</div>";

/***/ }),

/***/ "./src/knockout/components/skeleton/skeleton.ts":
/*!******************************************************!*\
  !*** ./src/knockout/components/skeleton/skeleton.ts ***!
  \******************************************************/
/*! exports provided: Skeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return Skeleton; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./skeleton.html */ "./src/knockout/components/skeleton/skeleton.html");
var Skeleton;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-skeleton", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return { element: params.element };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/string-editor/string-editor.html":
/*!******************************************************************!*\
  !*** ./src/knockout/components/string-editor/string-editor.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <input class=\"sv-string-editor\" data-bind=\"value: editValue\" /> -->\n\n<!-- ko ifnot: koHasHtml -->\n<span class=\"sv-string-editor\" data-bind=\"text: editValue, event: { blur: onInput, click: onClick, clickBubble: false }\" contenteditable=\"true\"></span>\n<!-- /ko -->\n<!-- ko if: koHasHtml -->\n<span class=\"sv-string-editor\" data-bind=\"html: editValue, event: { blur: onInput, click: onClick, clickBubble: false }\" contenteditable=\"true\"></span>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/string-editor/string-editor.ts":
/*!****************************************************************!*\
  !*** ./src/knockout/components/string-editor/string-editor.ts ***!
  \****************************************************************/
/*! exports provided: StringEditorViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringEditorViewModel", function() { return StringEditorViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./string-editor.html */ "./src/knockout/components/string-editor/string-editor.html");
var StringEditorViewModel = /** @class */ (function () {
    function StringEditorViewModel(locString) {
        this.locString = locString;
    }
    Object.defineProperty(StringEditorViewModel.prototype, "koHasHtml", {
        get: function () {
            return this.locString.koHasHtml();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringEditorViewModel.prototype, "editValue", {
        get: function () {
            return this.locString.koRenderedHtml();
        },
        set: function (value) {
            this.locString.searchElement = undefined;
            this.locString.text = value;
        },
        enumerable: false,
        configurable: true
    });
    StringEditorViewModel.prototype.onInput = function (sender, event) {
        sender.editValue = event.target.innerText;
    };
    StringEditorViewModel.prototype.onClick = function (sender, event) {
        event.stopPropagation();
    };
    StringEditorViewModel.prototype.dispose = function () {
        this.locString.onSearchChanged = undefined;
    };
    return StringEditorViewModel;
}());

function getSearchElement(element) {
    while (!!element && element.nodeName !== "SPAN") {
        var elements = element.parentElement.getElementsByClassName("sv-string-editor");
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
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register(survey_core__WEBPACK_IMPORTED_MODULE_1__["LocalizableString"].editableRenderer, {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var locStr = params.locString;
            applyLocStrOnSearchChanged(componentInfo.element, locStr);
            return new StringEditorViewModel(locStr);
        },
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/string-viewer/string-viewer.html":
/*!******************************************************************!*\
  !*** ./src/knockout/components/string-viewer/string-viewer.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko ifnot: locString.koHasHtml -->\n<span class=\"sv-string-viewer\" data-bind=\"text: locString.koRenderedHtml\"></span>\n<!-- /ko -->\n<!-- ko if: locString.koHasHtml -->\n<span class=\"sv-string-viewer\" data-bind=\"html: locString.koRenderedHtml\"></span>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/string-viewer/string-viewer.ts":
/*!****************************************************************!*\
  !*** ./src/knockout/components/string-viewer/string-viewer.ts ***!
  \****************************************************************/
/*! exports provided: StringViewerViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringViewerViewModel", function() { return StringViewerViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./string-viewer.html */ "./src/knockout/components/string-viewer/string-viewer.html");
var StringViewerViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-string-viewer", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return {
                locString: params.locString
            };
        },
    },
    template: template
});


/***/ }),

/***/ "./src/knockout/components/survey-actions/survey-nav-button.html":
/*!***********************************************************************!*\
  !*** ./src/knockout/components/survey-actions/survey-nav-button.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko with: $data.item  -->\n  <input type=\"button\" data-bind=\"event: { mousedown: $data.data && $data.data.mouseDown }, value: $data.title, click: $data.action, visible: $data.visible, css: $data.innerCss, disable: $data.disabled, attr: { title: $data.getTooltip() }\"/>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/survey-actions/survey-nav-button.ts":
/*!*********************************************************************!*\
  !*** ./src/knockout/components/survey-actions/survey-nav-button.ts ***!
  \*********************************************************************/
/*! exports provided: SurveyNavigationButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNavigationButton", function() { return SurveyNavigationButton; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./survey-nav-button.html */ "./src/knockout/components/survey-actions/survey-nav-button.html");
var SurveyNavigationButton;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-nav-btn", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/svg-icon/svg-icon.html":
/*!********************************************************!*\
  !*** ./src/knockout/components/svg-icon/svg-icon.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: hasIcon -->\n<svg class=\"sv-svg-icon\" data-bind=\"css: css, attr: { 'aria-label': title }\" role=\"img\"><use></use></svg>\n<!-- /ko -->\n";

/***/ }),

/***/ "./src/knockout/components/svg-icon/svg-icon.ts":
/*!******************************************************!*\
  !*** ./src/knockout/components/svg-icon/svg-icon.ts ***!
  \******************************************************/
/*! exports provided: SvgIconViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconViewModel", function() { return SvgIconViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./svg-icon.html */ "./src/knockout/components/svg-icon/svg-icon.html");
var SvgIconViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-svg-icon", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
                var iconName = knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.iconName);
                var element = componentInfo.element.querySelector && componentInfo.element.querySelector("svg") || componentInfo.element.nextElementSibling;
                if (iconName) {
                    Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["createSvg"])(knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.size), knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.width), knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.height), iconName, element, knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.title));
                }
            });
            return {
                hasIcon: params.iconName,
                css: params.css,
                title: params.title
            };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/tagbox/tagbox-item.html":
/*!*********************************************************!*\
  !*** ./src/knockout/components/tagbox/tagbox-item.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sv-tagbox__item\">\n  <div class=\"sv-tagbox__item-text\">\n    <!-- ko template: { name: 'survey-string', data: item.locText } -->\n    <!-- /ko -->\n  </div>\n  <div data-bind=\"css: question.cssClasses.cleanItemButton, click: removeItem\">\n    <sv-svg-icon params=\"iconName: question.cssClasses.cleanItemButtonIconId, css: question.cssClasses.cleanItemButtonSvg, size:'auto' \"></sv-svg-icon>\n  </div>\n</div>";

/***/ }),

/***/ "./src/knockout/components/tagbox/tagbox-item.ts":
/*!*******************************************************!*\
  !*** ./src/knockout/components/tagbox/tagbox-item.ts ***!
  \*******************************************************/
/*! exports provided: TagboxViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagboxViewComponent", function() { return TagboxViewComponent; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");


var template = __webpack_require__(/*! ./tagbox-item.html */ "./src/knockout/components/tagbox/tagbox-item.html");
var TagboxViewComponent;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-tagbox-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var item = params.item;
            new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](item);
            return {
                item: item,
                question: params.question,
                removeItem: function (data, event) {
                    data.question.dropdownListModel.deselectItem(data.item.value);
                    event.stopPropagation();
                }
            };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/tagbox/tagbox.html":
/*!****************************************************!*\
  !*** ./src/knockout/components/tagbox/tagbox.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"css: question.cssClasses.selectWrapper, click: click\">\n  <!-- ko ifnot: question.isReadOnly -->\n  <div data-bind=\"css: question.getControlClass(),\n    event: { keydown: keyhandler, blur: blur },\n    attr: { \n      id: question.inputId, \n      required: question.isRequired, \n      tabindex: model.inputReadOnly ? undefined : 0,\n      disabled: question.isInputReadOnly,\n      role: question.ariaRole,\n      'aria-required': question.ariaRequired, \n      'aria-label': question.ariaLabel, \n      'aria-invalid': question.ariaInvalid, \n      'aria-describedby': question.ariaDescribedBy,\n      'aria-expanded': question.ariaExpanded,\n      'aria-controls': model.listElementId,\n      'aria-activedescendant': model.ariaActivedescendant, \n    },\">\n    <div data-bind=\"css: question.cssClasses.controlValue\">\n      <!-- ko foreach: question.selectedChoices -->\n      <!-- ko component: { name: 'sv-tagbox-item', params: { item: $data, question: question } } -->\n      <!-- /ko -->\n      <!-- /ko -->\n      <div data-bind=\"css: question.cssClasses.hint\">\n        <!-- ko if: model.showHintPrefix -->\n        <div data-bind=\"css: question.cssClasses.hintPrefix\">\n          <span data-bind=\"text: model.hintStringPrefix\"></span>\n        </div>\n        <!-- /ko -->\n        <div data-bind=\"css: question.cssClasses.hintSuffixWrapper\">\n          <!-- ko if: model.showHintString -->\n          <div data-bind=\"css: question.cssClasses.hintSuffix\">\n            <span style=\"visibility: hidden\" data-bind=\"text: model.inputStringRendered\"></span>\n            <span data-bind=\"text: model.hintStringSuffix\"></span>\n            </div>\n          <!-- /ko -->\n          <input type=\"text\" autocomplete=\"off\" data-bind=\"textInput: model.inputStringRendered, \n          css: question.cssClasses.filterStringInput, \n          attr: { \n            inputmode: model.inputMode,\n            size: !model.inputStringRendered ? 1 : null, \n            id: question.getInputId(), \n            role: model.filterStringEnabled ? question.ariaRole : undefined,\n            'aria-expanded': question.ariaExpanded,\n            'aria-controls': model.listElementId,\n            'aria-activedescendant': model.ariaActivedescendant,\n            placeholder: model.filterStringPlaceholder, \n            disabled: question.isInputReadOnly,\n            readonly: !model.searchEnabled \n          },\n          event: { keydown: inputKeyHandler, blur: blur, focus: focus }\"></input>\n        </div>\n      </div>\n    </div>\n    <!-- ko if: (question.allowClear && question.cssClasses.cleanButtonIconId) -->\n    <div data-bind=\"css: question.cssClasses.cleanButton, click: clear, visible: question.showClearButton \">\n      <!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.cleanButtonSvg, iconName: question.cssClasses.cleanButtonIconId, size: 'auto', title: question.clearCaption } } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n  <!-- ko component: { name: \"sv-popup\", params: { model: model.popupModel }} -->\n  <!-- /ko -->\n  <!-- /ko -->\n  <!-- ko if: question.isReadOnly -->\n  <div disabled data-bind=\"css: question.getControlClass(), attr: { id: question.inputId }, \">\n    <div data-bind=\"text: question.readOnlyText\"></div>\n  </div>\n  <!-- /ko -->\n  <!-- ko if: question.cssClasses.chevronButtonIconId -->\n  <div data-bind=\"css: question.cssClasses.chevronButton, event: {pointerdown: chevronPointerDown}\">\n    <!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.chevronButtonSvg, iconName: question.cssClasses.chevronButtonIconId, size: 'auto' } } -->\n    <!-- /ko -->\n  </div>\n  <!-- /ko -->\n</div>";

/***/ }),

/***/ "./src/knockout/components/tagbox/tagbox.ts":
/*!**************************************************!*\
  !*** ./src/knockout/components/tagbox/tagbox.ts ***!
  \**************************************************/
/*! exports provided: TagboxViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagboxViewModel", function() { return TagboxViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kobase */ "./src/knockout/kobase.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);



var template = __webpack_require__(/*! ./tagbox.html */ "./src/knockout/components/tagbox/tagbox.html");
var TagboxViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-tagbox", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var q = params.question;
            var click = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClick(e);
            };
            var chevronPointerDown = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.chevronPointerDown(e);
            };
            var clear = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClear(e);
            };
            var keyhandler = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.keyHandler(e);
                return true;
            };
            var blur = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onBlur(e);
            };
            var focus = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onFocus(e);
            };
            var inputKeyHandler = function (_, e) {
                var _a;
                (_a = q.dropdownListModel) === null || _a === void 0 ? void 0 : _a.inputKeyHandler(e);
                return true;
            };
            if (!q.dropdownListModel) {
                q.dropdownListModel = new survey_core__WEBPACK_IMPORTED_MODULE_2__["DropdownMultiSelectListModel"](q);
            }
            new _kobase__WEBPACK_IMPORTED_MODULE_1__["ImplementorBase"](q.dropdownListModel);
            return { question: q, model: q.dropdownListModel, click: click, clear: clear, keyhandler: keyhandler, blur: blur, focus: focus, inputKeyHandler: inputKeyHandler, chevronPointerDown: chevronPointerDown };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/template-renderer/template-renderer.html":
/*!**************************************************************************!*\
  !*** ./src/knockout/components/template-renderer/template-renderer.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: templateData.name -->\n  <!-- ko template: { name: templateData.name, data: templateData.data, afterRender: templateData.afterRender } -->\n  <!-- /ko -->\n<!-- /ko -->\n<!-- ko ifnot: templateData.name -->\n  <!-- ko template: { nodes: templateData.nodes || $componentTemplateNodes, data: templateData.data, afterRender: templateData.afterRender } -->\n  <!-- /ko -->\n<!-- /ko -->\n";

/***/ }),

/***/ "./src/knockout/components/template-renderer/template-renderer.ts":
/*!************************************************************************!*\
  !*** ./src/knockout/components/template-renderer/template-renderer.ts ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./template-renderer.html */ "./src/knockout/components/template-renderer/template-renderer.html");
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register(survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyModel"].TemplateRendererComponentName, {
    viewModel: {
        createViewModel: function (params) {
            return params;
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/title/title-actions.html":
/*!**********************************************************!*\
  !*** ./src/knockout/components/title/title-actions.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko ifnot: element.hasTitleActions -->\n  <!-- ko component: { name: 'survey-element-title-content', params: {element: element } } --><!-- /ko -->\n<!-- /ko -->\n<!-- ko if: element.hasTitleActions -->\n<div class=\"sv-title-actions\">\n  <span class=\"sv-title-actions__title\">\n    <!-- ko component: { name: 'survey-element-title-content', params: {element: element } } --><!-- /ko -->\n  </span>\n  <!-- ko component: { name: 'sv-action-bar', params: { model: toolbar } } -->\n  <!-- /ko -->\n</div>\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/title/title-actions.ts":
/*!********************************************************!*\
  !*** ./src/knockout/components/title/title-actions.ts ***!
  \********************************************************/
/*! exports provided: TitleActionViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleActionViewModel", function() { return TitleActionViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);


var template = __webpack_require__(/*! ./title-actions.html */ "./src/knockout/components/title/title-actions.html");
var TitleActionViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("sv-title-actions", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var element = params.element;
            return {
                element: element,
                toolbar: element.getTitleToolbar(),
            };
        },
    },
    template: template,
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory"].Instance.registerRenderer("element", "title-actions", "sv-title-actions");


/***/ }),

/***/ "./src/knockout/components/title/title-content.html":
/*!**********************************************************!*\
  !*** ./src/knockout/components/title/title-content.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: element.isTitleRenderedAsString -->\n  <!-- ko template: { name: 'survey-string', data: element.locTitle } --><!-- /ko -->\n<!-- /ko -->\n<!-- ko ifnot: element.isTitleRenderedAsString -->\n  <!-- ko if: element.isRequireTextOnStart -->\n  <span\n    data-bind=\"css: element.cssClasses.requiredText || (element.cssClasses.panel && element.cssClasses.panel.requiredText), text: element.requiredText, attr: { 'aria-hidden': true }\"\n  ></span>\n  <!-- /ko -->\n  <!-- ko if: element.no -->\n  <span\n    style=\"position: static;\"\n    data-bind=\"css: element.cssClasses.number || (element.cssClasses.panel && element.cssClasses.panel.number), text: element.no, attr: { 'aria-hidden': true }\"\n  ></span>\n  <span>&nbsp</span>\n  <!-- /ko -->\n  <!-- ko if: element.isRequireTextBeforeTitle -->\n  <span\n    data-bind=\"css: element.cssClasses.requiredText || (element.cssClasses.panel && element.cssClasses.panel.requiredText), text: element.requiredText, attr: { 'aria-hidden': true }\"\n  ></span>\n  <span>&nbsp</span>\n  <!-- /ko -->\n  <!-- ko template: { name: 'survey-string', data: element.locTitle } --><!-- /ko -->\n  <!-- ko if: element.isRequireTextAfterTitle -->\n  <span>&nbsp</span>\n  <span\n    data-bind=\"css: element.cssClasses.requiredText || (element.cssClasses.panel && element.cssClasses.panel.requiredText), text: element.requiredText, attr: { 'aria-hidden': true }\"\n  ></span>\n  <!-- /ko -->\n<!-- /ko -->";

/***/ }),

/***/ "./src/knockout/components/title/title-content.ts":
/*!********************************************************!*\
  !*** ./src/knockout/components/title/title-content.ts ***!
  \********************************************************/
/*! exports provided: TitleContentViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleContentViewModel", function() { return TitleContentViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var template = __webpack_require__(/*! ./title-content.html */ "./src/knockout/components/title/title-content.html");
var TitleContentViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("survey-element-title-content", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var element = params.element;
            return { element: element };
        },
    },
    template: template,
});


/***/ }),

/***/ "./src/knockout/components/title/title-element.ts":
/*!********************************************************!*\
  !*** ./src/knockout/components/title/title-element.ts ***!
  \********************************************************/
/*! exports provided: TitleElementViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleElementViewModel", function() { return TitleElementViewModel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var TitleElementViewModel;
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("survey-element-title", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var element = params.element;
            var rootEl = componentInfo.element;
            var titleEl = document.createElement(element.titleTagName);
            var ariaLabelAttr = !element.titleAriaLabel ? "" : "'aria-label': element.titleAriaLabel,";
            var bindings = "css: element.cssTitle, attr: { " + ariaLabelAttr + " id: element.ariaTitleId, tabindex: element.titleTabIndex, 'aria-expanded': element.titleAriaExpanded, role: element.titleAriaRole }";
            if (element.hasTitleEvents) {
                bindings += ", key2click";
            }
            titleEl.setAttribute("data-bind", bindings);
            titleEl.innerHTML = "<!-- ko component: { name: 'sv-title-actions', params: {element: element } } --><!-- /ko -->";
            var dummyNode = rootEl.nextSibling;
            rootEl.parentNode.insertBefore(document.createComment(" ko if: element.hasTitle "), dummyNode);
            rootEl.parentNode.insertBefore(titleEl, dummyNode);
            rootEl.parentNode.insertBefore(document.createComment(" /ko "), dummyNode);
            rootEl.parentNode.removeChild(dummyNode);
            return { element: element };
        },
    },
    template: "<span></span>",
});


/***/ }),

/***/ "./src/knockout/koPopupSurvey.ts":
/*!***************************************!*\
  !*** ./src/knockout/koPopupSurvey.ts ***!
  \***************************************/
/*! exports provided: PopupSurveyImplementor, PopupSurvey, SurveyWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupSurveyImplementor", function() { return PopupSurveyImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupSurvey", function() { return PopupSurvey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyWindow", function() { return SurveyWindow; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kobase */ "./src/knockout/kobase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var koTemplate = __webpack_require__(/*! html-loader?interpolate!val-loader!./templates/window.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/templates/window.html");
var PopupSurveyImplementor = /** @class */ (function (_super) {
    __extends(PopupSurveyImplementor, _super);
    function PopupSurveyImplementor(window) {
        var _this = _super.call(this, window) || this;
        _this.window = window;
        _this.window.showingChangedCallback = function () {
            _this.doShowingChanged();
        };
        _this.window["doExpand"] = function () {
            _this.window.changeExpandCollapse();
        };
        _this.window["doHide"] = function () {
            _this.window.hide();
        };
        return _this;
    }
    PopupSurveyImplementor.prototype.doShowingChanged = function () {
        var windowElement = this.window.windowElement;
        var rootElement = survey_core__WEBPACK_IMPORTED_MODULE_1__["settings"].environment.rootElement;
        if (this.window.isShowing) {
            windowElement.innerHTML = this.template;
            knockout__WEBPACK_IMPORTED_MODULE_0__["cleanNode"](windowElement);
            knockout__WEBPACK_IMPORTED_MODULE_0__["applyBindings"](this.window, windowElement);
            rootElement.appendChild(windowElement);
        }
        else {
            rootElement.removeChild(windowElement);
            windowElement.innerHTML = "";
        }
    };
    Object.defineProperty(PopupSurveyImplementor.prototype, "template", {
        get: function () {
            return this.window.templateValue ? this.window.templateValue : koTemplate;
        },
        enumerable: false,
        configurable: true
    });
    return PopupSurveyImplementor;
}(_kobase__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["PopupSurveyModel"].prototype["onCreating"] = function () {
    this.implementor = new PopupSurveyImplementor(this);
};
var PopupSurvey = /** @class */ (function (_super) {
    __extends(PopupSurvey, _super);
    function PopupSurvey(jsonObj, initialModel) {
        if (initialModel === void 0) { initialModel = null; }
        return _super.call(this, jsonObj, initialModel) || this;
    }
    return PopupSurvey;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["PopupSurveyModel"]));

var SurveyWindow = /** @class */ (function (_super) {
    __extends(SurveyWindow, _super);
    function SurveyWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SurveyWindow;
}(PopupSurvey));



/***/ }),

/***/ "./src/knockout/kobase.ts":
/*!********************************!*\
  !*** ./src/knockout/kobase.ts ***!
  \********************************/
/*! exports provided: ImplementorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImplementorBase", function() { return ImplementorBase; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

var ImplementorBase = /** @class */ (function () {
    function ImplementorBase(element) {
        this.element = element;
        this.implementedMark = "__surveyImplementedKo";
        if (element[this.implementedMark]) {
            return;
        }
        element.iteratePropertiesHash(function (hash, key) {
            ImplementorBase.doIterateProperties(element, hash, key);
        });
        element.createArrayCoreHandler = function (hash, key) {
            var res = knockout__WEBPACK_IMPORTED_MODULE_0__["observableArray"]();
            res()["onArrayChanged"] = function () {
                if (element.isLoadingFromJson || element.isDisposed)
                    return;
                res.notifySubscribers();
            };
            hash[key] = res;
            return res();
        };
        element.getPropertyValueCoreHandler = function (hash, key) {
            if (hash[key] === undefined) {
                hash[key] = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"]();
            }
            return typeof hash[key] === "function" ? hash[key]() : hash[key];
        };
        element.setPropertyValueCoreHandler = function (hash, key, val) {
            if (hash[key] !== undefined) {
                // if(hash[key]() === val) {
                //   hash[key].notifySubscribers();
                // }
                hash[key](val);
            }
            else {
                hash[key] = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](val);
            }
        };
        element[this.implementedMark] = true;
    }
    ImplementorBase.doIterateProperties = function (element, hash, key) {
        var val = hash[key];
        if (val === "function")
            return;
        if (Array.isArray(val)) {
            hash[key] = knockout__WEBPACK_IMPORTED_MODULE_0__["observableArray"](val);
            val["onArrayChanged"] = function () {
                if (element.isLoadingFromJson || element.isDisposed)
                    return;
                hash[key].notifySubscribers();
            };
        }
        else {
            hash[key] = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](val);
        }
    };
    ImplementorBase.prototype.dispose = function () {
        this.element.iteratePropertiesHash(function (hash, key) {
            hash[key] = knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](hash[key]);
            if (Array.isArray(hash[key])) {
                hash[key]["onArrayChanged"] = undefined;
            }
        });
        this.element.createArrayCoreHandler = undefined;
        this.element.getPropertyValueCoreHandler = undefined;
        this.element.setPropertyValueCoreHandler = undefined;
        delete this.element[this.implementedMark];
    };
    return ImplementorBase;
}());



/***/ }),

/***/ "./src/knockout/koflowpanel.ts":
/*!*************************************!*\
  !*** ./src/knockout/koflowpanel.ts ***!
  \*************************************/
/*! exports provided: FlowPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowPanel", function() { return FlowPanel; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kobase */ "./src/knockout/kobase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var FlowPanel = /** @class */ (function (_super) {
    __extends(FlowPanel, _super);
    function FlowPanel(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this.koElementType = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"]("survey-flowpanel");
        new _kobase__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](_this);
        _this.onCreating();
        var self = _this;
        _this.koElementAfterRender = function (el, con) {
            return self.elementAfterRender(el, con);
        };
        return _this;
    }
    FlowPanel.prototype.onCreating = function () { };
    FlowPanel.prototype.getHtmlForQuestion = function (question) {
        return ('<span question="true" contenteditable="false" id="flowpanel_' +
            question.name +
            '"><!-- ko template: { name: "survey-flowpanel-question", data: "' +
            question.name +
            '"} --><!-- /ko --></span>');
    };
    FlowPanel.prototype.elementAfterRender = function (elements, con) {
        if (!this.survey)
            return;
        var el = survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyElement"].GetFirstNonTextElement(elements);
        if (!!el) {
            this.survey.afterRenderQuestion(con, el);
        }
    };
    return FlowPanel;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["FlowPanelModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("flowpanel", function () {
    return new FlowPanel();
});
/*
ElementFactory.Instance.registerElement("flowpanel", name => {
  return new FlowPanel(name);
});
*/
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("f-panel", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var self = this;
            var question = knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.question);
            self.element = componentInfo.element;
            self.element.innerHTML = question.html;
            self.isOnFocus = false;
            self.wasChanged = false;
            self.isContentUpdating = false;
            question.contentChangedCallback = function () {
                if (self.isContentUpdating)
                    return;
                knockout__WEBPACK_IMPORTED_MODULE_0__["cleanNode"](self.element);
                self.element.innerHTML = question.html;
                knockout__WEBPACK_IMPORTED_MODULE_0__["applyBindings"]({ question: question }, self.element);
                !!knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"] && knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"].runEarly();
            };
            self.element.onfocus = function () {
                self.isOnFocus = true;
            };
            self.element.onblur = function () {
                if (self.wasChanged)
                    self.updateContent();
                self.isOnFocus = false;
                self.wasChanged = false;
            };
            self.element.ondragend = function (event) {
                var regEx = /{(.*?(element:)[^$].*?)}/g;
                var str = self.element.innerHTML;
                var res = regEx.exec(str);
                if (res !== null) {
                    var q = question.getQuestionFromText(res[0]);
                    if (!!q) {
                        question.content = self.getContent(q.name);
                    }
                }
            };
            self.updateContent = function () {
                self.isContentUpdating = true;
                question.content = self.getContent();
                self.isContentUpdating = false;
            };
            question.getContent = self.getContent = function (deletedName) {
                var content = document.createElement("DIV");
                content.innerHTML = self.element.innerHTML;
                var cps = content.querySelectorAll('span[question="true"]');
                for (var i = 0; i < cps.length; i++) {
                    var name = cps[i].id.replace("flowpanel_", "");
                    var html = "";
                    if (name !== deletedName) {
                        var el = question.getQuestionByName(name);
                        html = !!el ? question.getElementContentText(el) : "";
                    }
                    cps[i].outerHTML = html;
                }
                return content.innerHTML;
            };
            var config = {
                characterData: true,
                attributes: true,
                childList: true,
                subtree: true,
            };
            var callback = function (mutationsList, observer) {
                if (!self.isOnFocus)
                    return;
                self.wasChanged = true;
            };
            var observer = new MutationObserver(callback);
            observer.observe(self.element, config);
            return { question: question };
        },
    },
    template: "<div></div>",
});


/***/ }),

/***/ "./src/knockout/kopage.ts":
/*!********************************!*\
  !*** ./src/knockout/kopage.ts ***!
  \********************************/
/*! exports provided: QuestionRow, PanelImplementorBase, Panel, Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRow", function() { return QuestionRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelImplementorBase", function() { return PanelImplementorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kobase */ "./src/knockout/kobase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var QuestionRow = /** @class */ (function (_super) {
    __extends(QuestionRow, _super);
    function QuestionRow(panel) {
        var _this = _super.call(this, panel) || this;
        _this.panel = panel;
        new _kobase__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](_this);
        var self = _this;
        _this.koElementAfterRender = function (el, con) {
            return self.elementAfterRender(el, con);
        };
        return _this;
    }
    QuestionRow.prototype.getElementType = function (el) {
        return el.isPanel ? "survey-panel" : "survey-question";
    };
    QuestionRow.prototype.koAfterRender = function (el, con) {
        for (var i = 0; i < el.length; i++) {
            var tEl = el[i];
            var nName = tEl.nodeName;
            if (nName == "#text")
                tEl.data = "";
        }
    };
    QuestionRow.prototype.elementAfterRender = function (elements, con) {
        var _this = this;
        if (!this.panel || !this.panel.survey)
            return;
        setTimeout(function () {
            !!knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"] && knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"].runEarly();
            var el = survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyElement"].GetFirstNonTextElement(elements);
            if (!el)
                return;
            var element = con;
            if (element.isDisposed)
                return;
            if (element.isPanel && _this.panel.survey) {
                _this.panel.survey.afterRenderPanel(con, el);
            }
            else {
                element.afterRender(el);
            }
        }, 0);
    };
    QuestionRow.prototype.rowAfterRender = function (elements, model) {
        if (!model.isNeedRender) {
            var rowContainerDiv_1 = elements[0].parentElement;
            var timer_1 = setTimeout(function () { return model.startLazyRendering(rowContainerDiv_1); }, 1);
            knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(rowContainerDiv_1, function () {
                clearTimeout(timer_1);
                model.stopLazyRendering();
                model.isNeedRender = !model.isLazyRendering();
            });
        }
    };
    QuestionRow.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.koElementAfterRender = undefined;
    };
    return QuestionRow;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionRowModel"]));

var PanelImplementorBase = /** @class */ (function (_super) {
    __extends(PanelImplementorBase, _super);
    function PanelImplementorBase(panel) {
        var _this = _super.call(this, panel) || this;
        _this.panel = panel;
        return _this;
    }
    return PanelImplementorBase;
}(_kobase__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"]));

var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this.onCreating();
        var self = _this;
        _this.koElementType = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"]("survey-panel");
        return _this;
    }
    Panel.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new PanelImplementorBase(this);
    };
    Panel.prototype.createRow = function () {
        return new QuestionRow(this);
    };
    Panel.prototype.onCreating = function () { };
    Panel.prototype.onNumChanged = function (value) {
        this.locTitle.strChanged();
    };
    Panel.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return Panel;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["PanelModel"]));

var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this.onCreating();
        return _this;
    }
    Page.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _kobase__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"](this);
    };
    Page.prototype.createRow = function () {
        return new QuestionRow(this);
    };
    Page.prototype.onCreating = function () { };
    Page.prototype.onNumChanged = function (value) {
        this.locTitle.strChanged();
    };
    Page.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._implementor.dispose();
        this._implementor = undefined;
    };
    return Page;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["PageModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("panel", function () {
    return new Panel();
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("page", function () {
    return new Page();
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["ElementFactory"].Instance.registerElement("panel", function (name) {
    return new Panel(name);
});


/***/ }),

/***/ "./src/knockout/koquestion.ts":
/*!************************************!*\
  !*** ./src/knockout/koquestion.ts ***!
  \************************************/
/*! exports provided: QuestionImplementor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionImplementor", function() { return QuestionImplementor; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kobase */ "./src/knockout/kobase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var QuestionImplementor = /** @class */ (function (_super) {
    __extends(QuestionImplementor, _super);
    function QuestionImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.question = question;
        _this._koValue = knockout__WEBPACK_IMPORTED_MODULE_0__["observableArray"]();
        _this.disposedObjects = [];
        _this.callBackFunctions = [];
        var isSynchronizing = false;
        _this._koValue.subscribe(function (newValue) {
            if (!isSynchronizing) {
                _this.setKoValue(newValue);
            }
        });
        Object.defineProperty(_this.question, "koValue", {
            get: function () {
                if (!survey_core__WEBPACK_IMPORTED_MODULE_1__["Helpers"].isTwoValueEquals(_this._koValue(), _this.getKoValue(), false, true, false)) {
                    try {
                        isSynchronizing = true;
                        _this._koValue(_this.getKoValue());
                    }
                    finally {
                        isSynchronizing = false;
                    }
                }
                return _this._koValue;
            },
            enumerable: true,
            configurable: true,
        });
        question.surveyLoadCallback = function () {
            _this.onSurveyLoad();
        };
        _this.setObservaleObj("koTemplateName", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            return _this.getTemplateName();
        }));
        _this.setObservaleObj("koElementType", knockout__WEBPACK_IMPORTED_MODULE_0__["observable"]("survey-question"));
        _this.koDummy = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](0);
        _this.setCallbackFunc("koQuestionAfterRender", function (el, con) {
            _this.koQuestionAfterRender(el, con);
        });
        _this.setCallbackFunc("koMouseDown", function () {
            _this.question.onMouseDown();
            return true;
        });
        return _this;
    }
    QuestionImplementor.prototype.setObservaleObj = function (name, obj, addToQuestion) {
        if (addToQuestion === void 0) { addToQuestion = true; }
        this.disposedObjects.push(name);
        if (addToQuestion) {
            this.question[name] = obj;
        }
        return obj;
    };
    QuestionImplementor.prototype.setCallbackFunc = function (name, func) {
        this.callBackFunctions.push(name);
        this.question[name] = func;
    };
    QuestionImplementor.prototype.getKoValue = function () {
        return this.question.value;
    };
    QuestionImplementor.prototype.setKoValue = function (val) {
        this.question.value = val;
    };
    QuestionImplementor.prototype.onSurveyLoad = function () { };
    QuestionImplementor.prototype.getQuestionTemplate = function () {
        return this.question.getTemplate();
    };
    QuestionImplementor.prototype.getTemplateName = function () {
        if (!!this.question &&
            this.question.customWidget &&
            !this.question.customWidget.widgetJson.isDefaultRender)
            return "survey-widget-" + this.question.customWidget.name;
        return "survey-question-" + this.getQuestionTemplate();
    };
    QuestionImplementor.prototype.getNo = function () {
        return this.question.visibleIndex > -1
            ? this.question.visibleIndex + 1 + ". "
            : "";
    };
    QuestionImplementor.prototype.updateKoDummy = function () {
        if (this.question.isDisposed)
            return;
        this.koDummy(this.koDummy() + 1);
        this.question.locTitle.strChanged();
    };
    QuestionImplementor.prototype.koQuestionAfterRender = function (elements, con) {
        var _this = this;
        setTimeout(function () {
            !!knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"] && knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"].runEarly();
            var el = survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyElement"].GetFirstNonTextElement(elements, true);
            if (!!el) {
                _this.question.afterRenderQuestionElement(el);
                if (!!_this.question && !!_this.question.customWidget) {
                    _this.question.customWidget.afterRender(_this.question, el);
                }
                knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(el, function () {
                    _this.question.beforeDestroyQuestionElement(el);
                    if (!!_this.question && !!_this.question.customWidget) {
                        try {
                            _this.question.customWidget.willUnmount(_this.question, el);
                        }
                        catch (_a) {
                            // eslint-disable-next-line no-console
                            console.warn("Custom widget will unmount failed");
                        }
                    }
                });
            }
        }, 0);
    };
    QuestionImplementor.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        for (var i_1 = 0; i_1 < this.disposedObjects.length; i_1++) {
            var name_1 = this.disposedObjects[i_1];
            var obj = this[name_1] || this.question[name_1];
            if (!obj)
                continue;
            if (this[name_1])
                this[name_1] = undefined;
            if (this.question[name_1])
                this.question[name_1] = undefined;
            if (obj["dispose"])
                obj.dispose();
        }
        this.disposedObjects = [];
        for (var i = 0; i < this.callBackFunctions.length; i++) {
            this.question[this.callBackFunctions[i]] = undefined;
        }
        this.callBackFunctions = [];
        this.question.unregisterPropertyChangedHandlers(["visibleIndex"]);
    };
    return QuestionImplementor;
}(_kobase__WEBPACK_IMPORTED_MODULE_2__["ImplementorBase"]));



/***/ }),

/***/ "./src/knockout/koquestion_baseselect.ts":
/*!***********************************************!*\
  !*** ./src/knockout/koquestion_baseselect.ts ***!
  \***********************************************/
/*! exports provided: QuestionSelectBaseImplementor, QuestionCheckboxBaseImplementor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSelectBaseImplementor", function() { return QuestionSelectBaseImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxBaseImplementor", function() { return QuestionCheckboxBaseImplementor; });
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var QuestionSelectBaseImplementor = /** @class */ (function (_super) {
    __extends(QuestionSelectBaseImplementor, _super);
    function QuestionSelectBaseImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.onCreated();
        return _this;
    }
    QuestionSelectBaseImplementor.prototype.onCreated = function () { };
    Object.defineProperty(QuestionSelectBaseImplementor.prototype, "isOtherSelected", {
        get: function () {
            return this.question.isOtherSelected;
        },
        enumerable: false,
        configurable: true
    });
    return QuestionSelectBaseImplementor;
}(_koquestion__WEBPACK_IMPORTED_MODULE_0__["QuestionImplementor"]));

var QuestionCheckboxBaseImplementor = /** @class */ (function (_super) {
    __extends(QuestionCheckboxBaseImplementor, _super);
    function QuestionCheckboxBaseImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.setCallbackFunc("koAfterRender", _this.koAfterRender);
        return _this;
    }
    QuestionCheckboxBaseImplementor.prototype.koAfterRender = function (el, con) {
        var tEl = el[0];
        if (tEl.nodeName == "#text")
            tEl.data = "";
        tEl = el[el.length - 1];
        if (tEl.nodeName == "#text")
            tEl.data = "";
    };
    return QuestionCheckboxBaseImplementor;
}(QuestionSelectBaseImplementor));



/***/ }),

/***/ "./src/knockout/koquestion_boolean.ts":
/*!********************************************!*\
  !*** ./src/knockout/koquestion_boolean.ts ***!
  \********************************************/
/*! exports provided: QuestionBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBoolean", function() { return QuestionBoolean; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var QuestionBoolean = /** @class */ (function (_super) {
    __extends(QuestionBoolean, _super);
    function QuestionBoolean(name) {
        return _super.call(this, name) || this;
    }
    QuestionBoolean.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion__WEBPACK_IMPORTED_MODULE_1__["QuestionImplementor"](this);
    };
    QuestionBoolean.prototype.onSwitchClick = function (data, event) {
        return _super.prototype.onSwitchClickModel.call(this, Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["getOriginalEvent"])(event));
    };
    QuestionBoolean.prototype.onTrueLabelClick = function (data, event) {
        return this.onLabelClick(event, true);
    };
    QuestionBoolean.prototype.onFalseLabelClick = function (data, event) {
        return this.onLabelClick(event, false);
    };
    QuestionBoolean.prototype.onKeyDown = function (data, event) {
        return this.onKeyDownCore(event);
    };
    QuestionBoolean.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionBoolean;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionBooleanModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_0__["Serializer"].overrideClassCreator("boolean", function () {
    return new QuestionBoolean("");
});
survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionFactory"].Instance.registerQuestion("boolean", function (name) {
    return new QuestionBoolean(name);
});


/***/ }),

/***/ "./src/knockout/koquestion_buttongroup.ts":
/*!************************************************!*\
  !*** ./src/knockout/koquestion_buttongroup.ts ***!
  \************************************************/
/*! exports provided: QuestionButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionButtonGroup", function() { return QuestionButtonGroup; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion_baseselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion_baseselect */ "./src/knockout/koquestion_baseselect.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var QuestionButtonGroup = /** @class */ (function (_super) {
    __extends(QuestionButtonGroup, _super);
    function QuestionButtonGroup(name) {
        return _super.call(this, name) || this;
    }
    QuestionButtonGroup.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion_baseselect__WEBPACK_IMPORTED_MODULE_1__["QuestionCheckboxBaseImplementor"](this);
    };
    QuestionButtonGroup.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionButtonGroup;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionButtonGroupModel"]));

// Serializer.overrideClassCreator("buttongroup", function() {
//   return new QuestionButtonGroup("");
// });
// QuestionFactory.Instance.registerQuestion("buttongroup", name => {
//   var q = new QuestionButtonGroup(name);
//   q.choices = QuestionFactory.DefaultChoices;
//   return q;
// });


/***/ }),

/***/ "./src/knockout/koquestion_checkbox.ts":
/*!*********************************************!*\
  !*** ./src/knockout/koquestion_checkbox.ts ***!
  \*********************************************/
/*! exports provided: QuestionCheckboxImplementor, QuestionCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxImplementor", function() { return QuestionCheckboxImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckbox", function() { return QuestionCheckbox; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion_baseselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion_baseselect */ "./src/knockout/koquestion_baseselect.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kobase */ "./src/knockout/kobase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var QuestionCheckboxImplementor = /** @class */ (function (_super) {
    __extends(QuestionCheckboxImplementor, _super);
    function QuestionCheckboxImplementor(question) {
        return _super.call(this, question) || this;
    }
    QuestionCheckboxImplementor.prototype.getKoValue = function () {
        return this.question.renderedValue;
    };
    QuestionCheckboxImplementor.prototype.setKoValue = function (val) {
        this.question.renderedValue = val;
    };
    return QuestionCheckboxImplementor;
}(_koquestion_baseselect__WEBPACK_IMPORTED_MODULE_1__["QuestionCheckboxBaseImplementor"]));

var QuestionCheckbox = /** @class */ (function (_super) {
    __extends(QuestionCheckbox, _super);
    function QuestionCheckbox(name) {
        var _this = _super.call(this, name) || this;
        _this.isAllSelectedUpdating = false;
        _this._selectAllItemImpl = undefined;
        _this._otherItemImpl = undefined;
        _this.koAllSelected = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](_this.isAllSelected);
        _this.koAllSelected.subscribe(function (newValue) {
            if (_this.isAllSelectedUpdating)
                return;
            if (newValue)
                _this.selectAll();
            else
                _this.clearValue();
        });
        _this._selectAllItemImpl = new _kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](_this.selectAllItem);
        _this._otherItemImpl = new _kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](_this.otherItem);
        return _this;
    }
    QuestionCheckbox.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionCheckboxImplementor(this);
    };
    QuestionCheckbox.prototype.onSurveyValueChanged = function (newValue) {
        _super.prototype.onSurveyValueChanged.call(this, newValue);
        this.updateAllSelected();
    };
    QuestionCheckbox.prototype.onVisibleChoicesChanged = function () {
        _super.prototype.onVisibleChoicesChanged.call(this);
        this.updateAllSelected();
    };
    QuestionCheckbox.prototype.updateAllSelected = function () {
        this.isAllSelectedUpdating = true;
        this.koAllSelected(this.isAllSelected);
        this.isAllSelectedUpdating = false;
    };
    QuestionCheckbox.prototype.dispose = function () {
        if (this._selectAllItemImpl) {
            this._selectAllItemImpl.dispose();
            this._selectAllItemImpl = undefined;
        }
        if (this._otherItemImpl) {
            this._otherItemImpl.dispose();
            this._otherItemImpl = undefined;
        }
        this._implementor.dispose();
        this._implementor = undefined;
        this.koAllSelected = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionCheckbox;
}(survey_core__WEBPACK_IMPORTED_MODULE_2__["QuestionCheckboxModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_2__["Serializer"].overrideClassCreator("checkbox", function () {
    return new QuestionCheckbox("");
});
survey_core__WEBPACK_IMPORTED_MODULE_2__["QuestionFactory"].Instance.registerQuestion("checkbox", function (name) {
    var q = new QuestionCheckbox(name);
    q.choices = survey_core__WEBPACK_IMPORTED_MODULE_2__["QuestionFactory"].DefaultChoices;
    return q;
});


/***/ }),

/***/ "./src/knockout/koquestion_comment.ts":
/*!********************************************!*\
  !*** ./src/knockout/koquestion_comment.ts ***!
  \********************************************/
/*! exports provided: QuestionComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComment", function() { return QuestionComment; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var QuestionComment = /** @class */ (function (_super) {
    __extends(QuestionComment, _super);
    function QuestionComment(name) {
        return _super.call(this, name) || this;
    }
    QuestionComment.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion__WEBPACK_IMPORTED_MODULE_1__["QuestionImplementor"](this);
    };
    QuestionComment.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionComment;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionCommentModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_0__["Serializer"].overrideClassCreator("comment", function () {
    return new QuestionComment("");
});
survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionFactory"].Instance.registerQuestion("comment", function (name) {
    return new QuestionComment(name);
});


/***/ }),

/***/ "./src/knockout/koquestion_custom.ts":
/*!*******************************************!*\
  !*** ./src/knockout/koquestion_custom.ts ***!
  \*******************************************/
/*! exports provided: QuestionCustom, QuestionComposite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCustom", function() { return QuestionCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComposite", function() { return QuestionComposite; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var QuestionCustom = /** @class */ (function (_super) {
    __extends(QuestionCustom, _super);
    function QuestionCustom(name, questionJSON) {
        return _super.call(this, name, questionJSON) || this;
    }
    QuestionCustom.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion__WEBPACK_IMPORTED_MODULE_1__["QuestionImplementor"](this);
    };
    QuestionCustom.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionCustom;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionCustomModel"]));

var QuestionComposite = /** @class */ (function (_super) {
    __extends(QuestionComposite, _super);
    function QuestionComposite(name, questionJSON) {
        return _super.call(this, name, questionJSON) || this;
    }
    QuestionComposite.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion__WEBPACK_IMPORTED_MODULE_1__["QuestionImplementor"](this);
    };
    QuestionComposite.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionComposite;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionCompositeModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_0__["ComponentCollection"].Instance.onCreateCustom = function (name, questionJSON) {
    return new QuestionCustom(name, questionJSON);
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["ComponentCollection"].Instance.onCreateComposite = function (name, questionJSON) {
    return new QuestionComposite(name, questionJSON);
};


/***/ }),

/***/ "./src/knockout/koquestion_dropdown.ts":
/*!*********************************************!*\
  !*** ./src/knockout/koquestion_dropdown.ts ***!
  \*********************************************/
/*! exports provided: QuestionDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDropdown", function() { return QuestionDropdown; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _koquestion_baseselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./koquestion_baseselect */ "./src/knockout/koquestion_baseselect.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var QuestionDropdownImplementor = /** @class */ (function (_super) {
    __extends(QuestionDropdownImplementor, _super);
    function QuestionDropdownImplementor(question) {
        return _super.call(this, question) || this;
    }
    return QuestionDropdownImplementor;
}(_koquestion_baseselect__WEBPACK_IMPORTED_MODULE_2__["QuestionSelectBaseImplementor"]));
var QuestionDropdown = /** @class */ (function (_super) {
    __extends(QuestionDropdown, _super);
    function QuestionDropdown(name) {
        var _this = _super.call(this, name) || this;
        _this.koDisableOption = function (option, item) {
            if (!item)
                return;
            knockout__WEBPACK_IMPORTED_MODULE_0__["applyBindingsToNode"](option, { disable: knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () { return !item.isEnabled; }) }, item);
        };
        return _this;
    }
    QuestionDropdown.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionDropdownImplementor(this);
    };
    QuestionDropdown.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionDropdown;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionDropdownModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("dropdown", function () {
    return new QuestionDropdown("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("dropdown", function (name) {
    var q = new QuestionDropdown(name);
    q.choices = survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].DefaultChoices;
    return q;
});


/***/ }),

/***/ "./src/knockout/koquestion_empty.ts":
/*!******************************************!*\
  !*** ./src/knockout/koquestion_empty.ts ***!
  \******************************************/
/*! exports provided: QuestionEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEmpty", function() { return QuestionEmpty; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var QuestionEmpty = /** @class */ (function (_super) {
    __extends(QuestionEmpty, _super);
    function QuestionEmpty(name) {
        return _super.call(this, name) || this;
    }
    QuestionEmpty.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion__WEBPACK_IMPORTED_MODULE_1__["QuestionImplementor"](this);
    };
    QuestionEmpty.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionEmpty;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionEmptyModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_0__["Serializer"].overrideClassCreator("empty", function () {
    return new QuestionEmpty("");
});


/***/ }),

/***/ "./src/knockout/koquestion_expression.ts":
/*!***********************************************!*\
  !*** ./src/knockout/koquestion_expression.ts ***!
  \***********************************************/
/*! exports provided: QuestionExpression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionExpression", function() { return QuestionExpression; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var QuestionExpression = /** @class */ (function (_super) {
    __extends(QuestionExpression, _super);
    function QuestionExpression(name) {
        return _super.call(this, name) || this;
    }
    QuestionExpression.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion__WEBPACK_IMPORTED_MODULE_1__["QuestionImplementor"](this);
    };
    QuestionExpression.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionExpression;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionExpressionModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_0__["Serializer"].overrideClassCreator("expression", function () {
    return new QuestionExpression("");
});
survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionFactory"].Instance.registerQuestion("expression", function (name) {
    return new QuestionExpression(name);
});


/***/ }),

/***/ "./src/knockout/koquestion_file.ts":
/*!*****************************************!*\
  !*** ./src/knockout/koquestion_file.ts ***!
  \*****************************************/
/*! exports provided: QuestionFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFile", function() { return QuestionFile; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var QuestionFileImplementor = /** @class */ (function (_super) {
    __extends(QuestionFileImplementor, _super);
    function QuestionFileImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koRecalc = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](0);
        _this.setObservaleObj("koState", knockout__WEBPACK_IMPORTED_MODULE_0__["observable"]("empty"));
        _this.setObservaleObj("koHasValue", knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () { return _this.question.koState() === "loaded"; }));
        _this.setObservaleObj("koData", knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
            if (_this.question.koHasValue()) {
                return _this.question.previewValue;
            }
            return [];
        }));
        _this.setObservaleObj("ko", knockout__WEBPACK_IMPORTED_MODULE_0__["observable"]());
        _this.setObservaleObj("koInputTitle", knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () {
            _this.koRecalc();
            return _this.question.inputTitle;
        }));
        _this.setObservaleObj("koChooseFileCss", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            return _this.question.getChooseFileCss();
        }));
        _this.setCallbackFunc("koGetChooseButtonText", function () {
            _this.question.koState();
            return _this.question.chooseButtonText;
        });
        _this.setCallbackFunc("ondrop", function (data, event) {
            _this.question.onDrop(Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["getOriginalEvent"])(event));
        });
        _this.setCallbackFunc("ondragover", function (data, event) {
            _this.question.onDragOver(Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["getOriginalEvent"])(event));
        });
        _this.setCallbackFunc("ondragenter", function (data, event) {
            _this.question.onDragEnter(Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["getOriginalEvent"])(event));
        });
        _this.setCallbackFunc("ondragleave", function (data, event) {
            _this.question.onDragLeave(Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["getOriginalEvent"])(event));
        });
        _this.setCallbackFunc("dochange", function (data, event) {
            _this.question.doChange(Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["getOriginalEvent"])(event));
        });
        _this.setCallbackFunc("doclean", function (data, event) {
            _this.question.doClean(Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["getOriginalEvent"])(event));
        });
        _this.setCallbackFunc("doremovefile", function (data, event) {
            _this.question.doRemoveFile(data);
        });
        _this.setCallbackFunc("dodownload", function (data, event) {
            _this.question.doDownloadFile(Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["getOriginalEvent"])(event), data);
            return true;
        });
        return _this;
    }
    return QuestionFileImplementor;
}(_koquestion__WEBPACK_IMPORTED_MODULE_2__["QuestionImplementor"]));
var QuestionFile = /** @class */ (function (_super) {
    __extends(QuestionFile, _super);
    function QuestionFile(name) {
        var _this = _super.call(this, name) || this;
        _this.updateState = function (sender, options) {
            _this.koState(options.state);
            _this._implementor.koRecalc(_this._implementor.koRecalc() + 1);
        };
        _this.onUploadStateChanged.add(_this.updateState);
        _this.updateState(_this, { state: _this.currentState });
        return _this;
    }
    QuestionFile.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionFileImplementor(this);
    };
    QuestionFile.prototype.dispose = function () {
        this.onUploadStateChanged.remove(this.updateState);
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionFile;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFileModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("file", function () {
    return new QuestionFile("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("file", function (name) {
    return new QuestionFile(name);
});


/***/ }),

/***/ "./src/knockout/koquestion_html.ts":
/*!*****************************************!*\
  !*** ./src/knockout/koquestion_html.ts ***!
  \*****************************************/
/*! exports provided: QuestionHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionHtml", function() { return QuestionHtml; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var QuestionHtml = /** @class */ (function (_super) {
    __extends(QuestionHtml, _super);
    function QuestionHtml(name) {
        return _super.call(this, name) || this;
    }
    QuestionHtml.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion__WEBPACK_IMPORTED_MODULE_1__["QuestionImplementor"](this);
    };
    QuestionHtml.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionHtml;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionHtmlModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_0__["Serializer"].overrideClassCreator("html", function () {
    return new QuestionHtml("");
});
survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionFactory"].Instance.registerQuestion("html", function (name) {
    return new QuestionHtml(name);
});


/***/ }),

/***/ "./src/knockout/koquestion_image.ts":
/*!******************************************!*\
  !*** ./src/knockout/koquestion_image.ts ***!
  \******************************************/
/*! exports provided: QuestionImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionImage", function() { return QuestionImage; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var QuestionImage = /** @class */ (function (_super) {
    __extends(QuestionImage, _super);
    function QuestionImage(name) {
        return _super.call(this, name) || this;
    }
    QuestionImage.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion__WEBPACK_IMPORTED_MODULE_1__["QuestionImplementor"](this);
    };
    QuestionImage.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionImage;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionImageModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_0__["Serializer"].overrideClassCreator("image", function () {
    return new QuestionImage("");
});
survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionFactory"].Instance.registerQuestion("image", function (name) {
    return new QuestionImage(name);
});


/***/ }),

/***/ "./src/knockout/koquestion_imagepicker.ts":
/*!************************************************!*\
  !*** ./src/knockout/koquestion_imagepicker.ts ***!
  \************************************************/
/*! exports provided: QuestionImagePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionImagePicker", function() { return QuestionImagePicker; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _koquestion_baseselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./koquestion_baseselect */ "./src/knockout/koquestion_baseselect.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var QuestionImagePickerImplementor = /** @class */ (function (_super) {
    __extends(QuestionImagePickerImplementor, _super);
    function QuestionImagePickerImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.question = question;
        _this.koRecalc = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](0);
        _this.setCallbackFunc("koGetItemClass", function (item) {
            _this.koRecalc();
            return question.getItemClass(item);
        });
        _this.question.registerFunctionOnPropertyValueChanged("value", function () {
            if (_this.question.multiSelect && _this.question.isDesignMode) {
                _this.koRecalc(_this.koRecalc() + 1);
            }
        }, "__koOnValueChangeTrigger");
        return _this;
    }
    QuestionImagePickerImplementor.prototype.getKoValue = function () {
        return this.question.renderedValue;
    };
    QuestionImagePickerImplementor.prototype.dispose = function () {
        this.question.unRegisterFunctionOnPropertyValueChanged("value", "__koOnValueChangeTrigger");
        _super.prototype.dispose.call(this);
    };
    return QuestionImagePickerImplementor;
}(_koquestion_baseselect__WEBPACK_IMPORTED_MODULE_2__["QuestionCheckboxBaseImplementor"]));
var QuestionImagePicker = /** @class */ (function (_super) {
    __extends(QuestionImagePicker, _super);
    function QuestionImagePicker(name) {
        return _super.call(this, name) || this;
    }
    QuestionImagePicker.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionImagePickerImplementor(this);
    };
    QuestionImagePicker.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionImagePicker;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionImagePickerModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("imagepicker", function () {
    return new QuestionImagePicker("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("imagepicker", function (name) {
    var q = new QuestionImagePicker(name);
    //q.choices = QuestionFactory.DefaultChoices;
    return q;
});


/***/ }),

/***/ "./src/knockout/koquestion_matrix.ts":
/*!*******************************************!*\
  !*** ./src/knockout/koquestion_matrix.ts ***!
  \*******************************************/
/*! exports provided: QuestionMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrix", function() { return QuestionMatrix; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kobase */ "./src/knockout/kobase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var QuestionMatrix = /** @class */ (function (_super) {
    __extends(QuestionMatrix, _super);
    function QuestionMatrix(name) {
        var _this = _super.call(this, name) || this;
        _this.koVisibleRows = knockout__WEBPACK_IMPORTED_MODULE_0__["observableArray"]();
        _this.koVisibleColumns = knockout__WEBPACK_IMPORTED_MODULE_0__["observableArray"]();
        _this.koVisibleRows(_this.visibleRows);
        _this.koVisibleColumns(_this.visibleColumns);
        return _this;
    }
    QuestionMatrix.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion__WEBPACK_IMPORTED_MODULE_2__["QuestionImplementor"](this);
    };
    QuestionMatrix.prototype.onColumnsChanged = function () {
        _super.prototype.onColumnsChanged.call(this);
        this.koVisibleColumns(this.visibleColumns);
    };
    QuestionMatrix.prototype.onRowsChanged = function () {
        _super.prototype.onRowsChanged.call(this);
        this.koVisibleRows(this.visibleRows);
    };
    QuestionMatrix.prototype.onSurveyLoad = function () {
        _super.prototype.onSurveyLoad.call(this);
        this.onRowsChanged();
    };
    QuestionMatrix.prototype.onMatrixRowCreated = function (row) {
        new _kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](row);
    };
    QuestionMatrix.prototype.getVisibleRows = function () {
        var rows = _super.prototype.getVisibleRows.call(this);
        this.koVisibleRows(rows);
        return rows;
    };
    QuestionMatrix.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        this.koVisibleRows = undefined;
        this.koVisibleColumns = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionMatrix;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionMatrixModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("matrix", function () {
    return new QuestionMatrix("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("matrix", function (name) {
    var q = new QuestionMatrix(name);
    q.rows = survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].DefaultRows;
    q.columns = survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].DefaultColums;
    return q;
});


/***/ }),

/***/ "./src/knockout/koquestion_matrixdropdown.ts":
/*!***************************************************!*\
  !*** ./src/knockout/koquestion_matrixdropdown.ts ***!
  \***************************************************/
/*! exports provided: QuestionMatrixBaseImplementor, QuestionMatrixDropdown, KoQuestionMatrixDropdownRenderedTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixBaseImplementor", function() { return QuestionMatrixBaseImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDropdown", function() { return QuestionMatrixDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KoQuestionMatrixDropdownRenderedTable", function() { return KoQuestionMatrixDropdownRenderedTable; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kobase */ "./src/knockout/kobase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var QuestionMatrixBaseImplementor = /** @class */ (function (_super) {
    __extends(QuestionMatrixBaseImplementor, _super);
    function QuestionMatrixBaseImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koRecalc = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](0);
        _this.matrix.onRenderedTableCreatedCallback = function (table) {
            if (!!_this._tableImplementor) {
                _this._tableImplementor.dispose();
            }
            _this._tableImplementor = new _kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](table);
        };
        _this.matrix.onRenderedTableResetCallback = function () {
            if (_this.question.isDisposed)
                return;
            _this.koRecalc(_this.koRecalc() + 1);
        };
        _this.matrix.onAddColumn = function (column) {
            new _kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](column);
        };
        _this.setObservaleObj("koTable", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.matrix.renderedTable;
        }));
        _this.setCallbackFunc("koCellAfterRender", function (el, con) {
            return _this.cellAfterRender(el, con);
        });
        _this.setCallbackFunc("koCellQuestionAfterRender", function (el, con) {
            return _this.cellQuestionAfterRender(el, con);
        });
        _this.setCallbackFunc("koAddRowClick", function () {
            _this.addRow();
        });
        _this.setCallbackFunc("koRemoveRowClick", function (data) {
            _this.removeRow(data.row);
        });
        _this.setCallbackFunc("koPanelAfterRender", function (el, con) {
            _this.panelAfterRender(el, con);
        });
        return _this;
    }
    Object.defineProperty(QuestionMatrixBaseImplementor.prototype, "matrix", {
        get: function () { return this.question; },
        enumerable: false,
        configurable: true
    });
    QuestionMatrixBaseImplementor.prototype.cellAfterRender = function (elements, con) {
        var _this = this;
        if (!this.question.survey)
            return;
        setTimeout(function () {
            !!knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"] && knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"].runEarly();
            var el = survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyElement"].GetFirstNonTextElement(elements);
            if (!el)
                return;
            var cell = con;
            if (!cell || !_this.question || !_this.question.survey || _this.question.isDisposed)
                return;
            var options = {
                cell: cell.cell,
                cellQuestion: cell.question,
                htmlElement: el,
                row: cell.row,
                column: !!cell.cell ? cell.cell.column : null,
            };
            _this.question.survey.matrixAfterCellRender(_this.question, options);
            if (cell.question) {
                cell.question.afterRenderCore(el);
            }
        }, 0);
    };
    QuestionMatrixBaseImplementor.prototype.cellQuestionAfterRender = function (elements, con) {
        if (!this.question || !this.question.survey)
            return;
        setTimeout(function () {
            !!knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"] && knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"].runEarly();
            var el = survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyElement"].GetFirstNonTextElement(elements);
            if (!el)
                return;
            var cell = con;
            if (!cell)
                return;
            var question = cell.question;
            if (!question || !question.survey || question.isDisposed)
                return;
            if (question.customWidget) {
                question.customWidget.afterRender(cell.question, el);
                knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(el, function () {
                    question.customWidget.willUnmount(cell.question, el);
                });
            }
            knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].domNodeDisposal.addDisposeCallback(el, function () {
                question.beforeDestroyQuestionElement(el);
            });
            question.afterRenderQuestionElement(el);
        }, 0);
    };
    QuestionMatrixBaseImplementor.prototype.isAddRowTop = function () {
        return false;
    };
    QuestionMatrixBaseImplementor.prototype.isAddRowBottom = function () {
        return false;
    };
    QuestionMatrixBaseImplementor.prototype.addRow = function () { };
    QuestionMatrixBaseImplementor.prototype.removeRow = function (row) { };
    QuestionMatrixBaseImplementor.prototype.panelAfterRender = function (elements, con) {
        if (!this.question || !this.question.survey)
            return;
        var el = survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyElement"].GetFirstNonTextElement(elements);
        this.question.survey.afterRenderPanel(con, el);
    };
    QuestionMatrixBaseImplementor.prototype.dispose = function () {
        if (!!this._tableImplementor) {
            this._tableImplementor.dispose();
        }
        this.matrix.onRenderedTableCreatedCallback = undefined;
        this.matrix.onRenderedTableResetCallback = undefined;
        this.matrix.onAddColumn = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionMatrixBaseImplementor;
}(_koquestion__WEBPACK_IMPORTED_MODULE_2__["QuestionImplementor"]));

var QuestionMatrixDropdown = /** @class */ (function (_super) {
    __extends(QuestionMatrixDropdown, _super);
    function QuestionMatrixDropdown(name) {
        return _super.call(this, name) || this;
    }
    QuestionMatrixDropdown.prototype.createRenderedTable = function () {
        return new KoQuestionMatrixDropdownRenderedTable(this);
    };
    QuestionMatrixDropdown.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionMatrixBaseImplementor(this);
    };
    QuestionMatrixDropdown.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._implementor.dispose();
        this._implementor = undefined;
    };
    return QuestionMatrixDropdown;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionMatrixDropdownModel"]));

var KoQuestionMatrixDropdownRenderedTable = /** @class */ (function (_super) {
    __extends(KoQuestionMatrixDropdownRenderedTable, _super);
    function KoQuestionMatrixDropdownRenderedTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KoQuestionMatrixDropdownRenderedTable.prototype.createRenderedRow = function (cssClasses, isDetailRow) {
        if (isDetailRow === void 0) { isDetailRow = false; }
        var renderedRow = new survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionMatrixDropdownRenderedRow"](cssClasses, isDetailRow);
        new _kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](renderedRow);
        return renderedRow;
    };
    KoQuestionMatrixDropdownRenderedTable.prototype.createErrorRenderedRow = function (cssClasses) {
        var res = _super.prototype.createErrorRenderedRow.call(this, cssClasses);
        new _kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](res);
        return res;
    };
    return KoQuestionMatrixDropdownRenderedTable;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionMatrixDropdownRenderedTable"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("matrixdropdown", function () {
    return new QuestionMatrixDropdown("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("matrixdropdown", function (name) {
    var q = new QuestionMatrixDropdown(name);
    q.choices = [1, 2, 3, 4, 5];
    q.rows = survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].DefaultRows;
    survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionMatrixDropdownModelBase"].addDefaultColumns(q);
    return q;
});


/***/ }),

/***/ "./src/knockout/koquestion_matrixdynamic.ts":
/*!**************************************************!*\
  !*** ./src/knockout/koquestion_matrixdynamic.ts ***!
  \**************************************************/
/*! exports provided: QuestionMatrixDynamicImplementor, QuestionMatrixDynamic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamicImplementor", function() { return QuestionMatrixDynamicImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamic", function() { return QuestionMatrixDynamic; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _koquestion_matrixdropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./koquestion_matrixdropdown */ "./src/knockout/koquestion_matrixdropdown.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var QuestionMatrixDynamicImplementor = /** @class */ (function (_super) {
    __extends(QuestionMatrixDynamicImplementor, _super);
    function QuestionMatrixDynamicImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.question["getKoPopupIsVisible"] = _this.getKoPopupIsVisible;
        return _this;
    }
    QuestionMatrixDynamicImplementor.prototype.addRow = function () {
        this.question.addRowUI();
    };
    QuestionMatrixDynamicImplementor.prototype.removeRow = function (row) {
        this.question.removeRowUI(row);
    };
    QuestionMatrixDynamicImplementor.prototype.getKoPopupIsVisible = function (row) {
        return knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](row.isDetailPanelShowing);
    };
    QuestionMatrixDynamicImplementor.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.question["getKoPopupIsVisible"] = undefined;
    };
    return QuestionMatrixDynamicImplementor;
}(_koquestion_matrixdropdown__WEBPACK_IMPORTED_MODULE_2__["QuestionMatrixBaseImplementor"]));

var QuestionMatrixDynamic = /** @class */ (function (_super) {
    __extends(QuestionMatrixDynamic, _super);
    function QuestionMatrixDynamic(name) {
        return _super.call(this, name) || this;
    }
    QuestionMatrixDynamic.prototype.createRenderedTable = function () {
        return new _koquestion_matrixdropdown__WEBPACK_IMPORTED_MODULE_2__["KoQuestionMatrixDropdownRenderedTable"](this);
    };
    QuestionMatrixDynamic.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionMatrixDynamicImplementor(this);
    };
    QuestionMatrixDynamic.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionMatrixDynamic;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionMatrixDynamicModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("matrixdynamic", function () {
    return new QuestionMatrixDynamic("");
});
// QuestionMatrixDropdownRenderedRow.prototype["onCreating"] = function() {
//   new ImplementorBase(this);
// };
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("matrixdynamic", function (name) {
    var q = new QuestionMatrixDynamic(name);
    q.choices = [1, 2, 3, 4, 5];
    q.rowCount = 2;
    survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionMatrixDropdownModelBase"].addDefaultColumns(q);
    return q;
});


/***/ }),

/***/ "./src/knockout/koquestion_multipletext.ts":
/*!*************************************************!*\
  !*** ./src/knockout/koquestion_multipletext.ts ***!
  \*************************************************/
/*! exports provided: koMultipleTextEditorModel, MultipleTextItem, QuestionMultipleTextImplementor, QuestionMultipleText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "koMultipleTextEditorModel", function() { return koMultipleTextEditorModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleTextItem", function() { return MultipleTextItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMultipleTextImplementor", function() { return QuestionMultipleTextImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMultipleText", function() { return QuestionMultipleText; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
/* harmony import */ var _koquestion_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./koquestion_text */ "./src/knockout/koquestion_text.ts");
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kobase */ "./src/knockout/kobase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var koMultipleTextEditorModel = /** @class */ (function (_super) {
    __extends(koMultipleTextEditorModel, _super);
    function koMultipleTextEditorModel(name) {
        return _super.call(this, name) || this;
    }
    koMultipleTextEditorModel.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion_text__WEBPACK_IMPORTED_MODULE_3__["QuestionTextImplementor"](this);
    };
    koMultipleTextEditorModel.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return koMultipleTextEditorModel;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["MultipleTextEditorModel"]));

var MultipleTextItem = /** @class */ (function (_super) {
    __extends(MultipleTextItem, _super);
    function MultipleTextItem(name, title) {
        if (name === void 0) { name = null; }
        if (title === void 0) { title = null; }
        return _super.call(this, name, title) || this;
    }
    MultipleTextItem.prototype.createEditor = function (name) {
        return new koMultipleTextEditorModel(name);
    };
    return MultipleTextItem;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["MultipleTextItemModel"]));

var QuestionMultipleTextImplementor = /** @class */ (function (_super) {
    __extends(QuestionMultipleTextImplementor, _super);
    function QuestionMultipleTextImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koRecalc = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](0);
        _this.setObservaleObj("koItemCss", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.getItemCss();
        }));
        _this.setObservaleObj("koItemTitleCss", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.getItemTitleCss();
        }));
        return _this;
    }
    return QuestionMultipleTextImplementor;
}(_koquestion__WEBPACK_IMPORTED_MODULE_2__["QuestionImplementor"]));

var QuestionMultipleText = /** @class */ (function (_super) {
    __extends(QuestionMultipleText, _super);
    function QuestionMultipleText(name) {
        return _super.call(this, name) || this;
    }
    QuestionMultipleText.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionMultipleTextImplementor(this);
    };
    QuestionMultipleText.prototype.onRowCreated = function (row) {
        new _kobase__WEBPACK_IMPORTED_MODULE_4__["ImplementorBase"](row);
        return row;
    };
    QuestionMultipleText.prototype.createTextItem = function (name, title) {
        return new MultipleTextItem(name, title);
    };
    QuestionMultipleText.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        this.koRows = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionMultipleText;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionMultipleTextModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("multipletextitem", function () {
    return new MultipleTextItem("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("multipletext", function () {
    return new QuestionMultipleText("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("multipletext", function (name) {
    var q = new QuestionMultipleText(name);
    survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionMultipleTextModel"].addDefaultItems(q);
    return q;
});


/***/ }),

/***/ "./src/knockout/koquestion_paneldynamic.ts":
/*!*************************************************!*\
  !*** ./src/knockout/koquestion_paneldynamic.ts ***!
  \*************************************************/
/*! exports provided: QuestionPanelDynamicImplementor, QuestionPanelDynamic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionPanelDynamicImplementor", function() { return QuestionPanelDynamicImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionPanelDynamic", function() { return QuestionPanelDynamic; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var QuestionPanelDynamicImplementor = /** @class */ (function (_super) {
    __extends(QuestionPanelDynamicImplementor, _super);
    function QuestionPanelDynamicImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koRecalc = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](0);
        _this.setCallbackFunc("koAddPanelClick", function () {
            _this.addPanel();
        });
        _this.setCallbackFunc("koRemovePanelClick", function (data) {
            _this.removePanel(data);
        });
        _this.setCallbackFunc("koPrevPanelClick", function () {
            _this.question.goToPrevPanel();
        });
        _this.setCallbackFunc("koNextPanelClick", function () {
            _this.question.goToNextPanel();
        });
        _this.setObservaleObj("koCanAddPanel", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.canAddPanel;
        }));
        _this.setObservaleObj("koCanRemovePanel", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.canRemovePanel;
        }));
        _this.setObservaleObj("koIsPrevButton", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.isPrevButtonVisible;
        }));
        _this.setObservaleObj("koIsNextButton", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.isNextButtonVisible;
        }));
        _this.setObservaleObj("koIsRange", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.isRangeShowing;
        }));
        _this.setObservaleObj("koPanel", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.currentPanel;
        }));
        _this.setObservaleObj("koIsList", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.isRenderModeList;
        }));
        _this.setObservaleObj("koIsProgressTop", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.isProgressTopShowing;
        }));
        _this.setObservaleObj("koIsProgressBottom", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.isProgressBottomShowing;
        }));
        var koRangeValue = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](_this.question.currentIndex);
        koRangeValue.subscribe(function (newValue) {
            _this.question.currentIndex = newValue;
        });
        _this.setObservaleObj("koRangeValue", koRangeValue);
        _this.setObservaleObj("koRangeMax", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.visiblePanelCount - 1;
        }));
        _this.setObservaleObj("koAddButtonCss", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.getAddButtonCss();
        }));
        _this.setObservaleObj("koPrevButtonCss", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.getPrevButtonCss();
        }));
        _this.setObservaleObj("koNextButtonCss", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.getNextButtonCss();
        }));
        _this.setObservaleObj("koProgressText", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.progressText;
        }));
        _this.setObservaleObj("koProgress", knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () {
            _this.koRecalc();
            return _this.question.progress;
        }));
        _this.setCallbackFunc("koPanelAfterRender", function (el, con) {
            _this.panelAfterRender(el, con);
        });
        _this.question.panelCountChangedCallback = function () {
            _this.onPanelCountChanged();
        };
        _this.question.renderModeChangedCallback = function () {
            _this.onRenderModeChanged();
        };
        _this.question.currentIndexChangedCallback = function () {
            _this.onCurrentIndexChanged();
        };
        return _this;
    }
    QuestionPanelDynamicImplementor.prototype.onPanelCountChanged = function () {
        this.onCurrentIndexChanged();
    };
    QuestionPanelDynamicImplementor.prototype.onRenderModeChanged = function () {
        this.onCurrentIndexChanged();
    };
    QuestionPanelDynamicImplementor.prototype.onCurrentIndexChanged = function () {
        if (this.question.isDisposed)
            return;
        this.koRecalc(this.koRecalc() + 1);
        this.question.koRangeValue(this.question.currentIndex);
    };
    QuestionPanelDynamicImplementor.prototype.addPanel = function () {
        this.question.addPanelUI();
    };
    QuestionPanelDynamicImplementor.prototype.removePanel = function (val) {
        if (!this.question.isRenderModeList) {
            val = this.question.currentPanel;
        }
        this.question.removePanelUI(val);
    };
    QuestionPanelDynamicImplementor.prototype.panelAfterRender = function (elements, con) {
        if (!this.question || !this.question.survey)
            return;
        var el = survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyElement"].GetFirstNonTextElement(elements);
        this.question.survey.afterRenderPanel(con, el);
    };
    QuestionPanelDynamicImplementor.prototype.dispose = function () {
        this.question.panelCountChangedCallback = undefined;
        this.question.renderModeChangedCallback = undefined;
        this.question.currentIndexChangedCallback = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionPanelDynamicImplementor;
}(_koquestion__WEBPACK_IMPORTED_MODULE_2__["QuestionImplementor"]));

var QuestionPanelDynamic = /** @class */ (function (_super) {
    __extends(QuestionPanelDynamic, _super);
    function QuestionPanelDynamic(name) {
        return _super.call(this, name) || this;
    }
    QuestionPanelDynamic.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionPanelDynamicImplementor(this);
    };
    QuestionPanelDynamic.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionPanelDynamic;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionPanelDynamicModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("paneldynamic", function () {
    return new QuestionPanelDynamic("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("paneldynamic", function (name) {
    return new QuestionPanelDynamic(name);
});


/***/ }),

/***/ "./src/knockout/koquestion_radiogroup.ts":
/*!***********************************************!*\
  !*** ./src/knockout/koquestion_radiogroup.ts ***!
  \***********************************************/
/*! exports provided: QuestionRadiogroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRadiogroup", function() { return QuestionRadiogroup; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion_baseselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion_baseselect */ "./src/knockout/koquestion_baseselect.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var QuestionRadiogroup = /** @class */ (function (_super) {
    __extends(QuestionRadiogroup, _super);
    function QuestionRadiogroup(name) {
        return _super.call(this, name) || this;
    }
    QuestionRadiogroup.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion_baseselect__WEBPACK_IMPORTED_MODULE_1__["QuestionCheckboxBaseImplementor"](this);
    };
    QuestionRadiogroup.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionRadiogroup;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionRadiogroupModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_0__["Serializer"].overrideClassCreator("radiogroup", function () {
    return new QuestionRadiogroup("");
});
survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionFactory"].Instance.registerQuestion("radiogroup", function (name) {
    var q = new QuestionRadiogroup(name);
    q.choices = survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionFactory"].DefaultChoices;
    return q;
});


/***/ }),

/***/ "./src/knockout/koquestion_ranking.ts":
/*!********************************************!*\
  !*** ./src/knockout/koquestion_ranking.ts ***!
  \********************************************/
/*! exports provided: QuestionRanking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRanking", function() { return QuestionRanking; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var QuestionRanking = /** @class */ (function (_super) {
    __extends(QuestionRanking, _super);
    function QuestionRanking() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.koHandleKeydown = function (data, event) {
            _this.handleKeydown(event, data);
            return true;
        };
        _this.koHandlePointerDown = function (data, event) {
            if (!_this.survey.isDesignMode)
                event.preventDefault();
            _this.handlePointerDown(event, data, event.currentTarget);
            return true;
        };
        return _this;
    }
    QuestionRanking.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion__WEBPACK_IMPORTED_MODULE_1__["QuestionImplementor"](this);
    };
    QuestionRanking.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionRanking;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionRankingModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_0__["Serializer"].overrideClassCreator("ranking", function () {
    return new QuestionRanking("");
});
survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionFactory"].Instance.registerQuestion("ranking", function (name) {
    var q = new QuestionRanking(name);
    q.choices = survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionFactory"].DefaultChoices;
    return q;
});


/***/ }),

/***/ "./src/knockout/koquestion_rating.ts":
/*!*******************************************!*\
  !*** ./src/knockout/koquestion_rating.ts ***!
  \*******************************************/
/*! exports provided: QuestionRatingImplementor, QuestionRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRatingImplementor", function() { return QuestionRatingImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRating", function() { return QuestionRating; });
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var QuestionRatingImplementor = /** @class */ (function (_super) {
    __extends(QuestionRatingImplementor, _super);
    function QuestionRatingImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.onCreated();
        return _this;
    }
    QuestionRatingImplementor.prototype.onCreated = function () { };
    return QuestionRatingImplementor;
}(_koquestion__WEBPACK_IMPORTED_MODULE_0__["QuestionImplementor"]));

var QuestionRating = /** @class */ (function (_super) {
    __extends(QuestionRating, _super);
    function QuestionRating(name) {
        return _super.call(this, name) || this;
    }
    QuestionRating.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionRatingImplementor(this);
    };
    QuestionRating.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionRating;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionRatingModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("rating", function () {
    return new QuestionRating("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("rating", function (name) {
    return new QuestionRating(name);
});


/***/ }),

/***/ "./src/knockout/koquestion_signaturepad.ts":
/*!*************************************************!*\
  !*** ./src/knockout/koquestion_signaturepad.ts ***!
  \*************************************************/
/*! exports provided: QuestionSignaturePad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSignaturePad", function() { return QuestionSignaturePad; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var QuestionSignaturePad = /** @class */ (function (_super) {
    __extends(QuestionSignaturePad, _super);
    function QuestionSignaturePad(name) {
        return _super.call(this, name) || this;
    }
    QuestionSignaturePad.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion__WEBPACK_IMPORTED_MODULE_1__["QuestionImplementor"](this);
    };
    QuestionSignaturePad.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionSignaturePad;
}(survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionSignaturePadModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_0__["Serializer"].overrideClassCreator("signaturepad", function () {
    return new QuestionSignaturePad("");
});
survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionFactory"].Instance.registerQuestion("signaturepad", function (name) {
    return new QuestionSignaturePad(name);
});


/***/ }),

/***/ "./src/knockout/koquestion_tagbox.ts":
/*!*******************************************!*\
  !*** ./src/knockout/koquestion_tagbox.ts ***!
  \*******************************************/
/*! exports provided: QuestionTagbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTagbox", function() { return QuestionTagbox; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _koquestion_baseselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./koquestion_baseselect */ "./src/knockout/koquestion_baseselect.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





/*
export class QuestionCheckboxImplementor extends QuestionCheckboxBaseImplementor {
  constructor(question: Question) {
    super(question);
  }
  protected getKoValue() {
    return this.question.renderedValue;
  }
}
 */
var QuestionTagbox = /** @class */ (function (_super) {
    __extends(QuestionTagbox, _super);
    function QuestionTagbox(name) {
        var _this = _super.call(this, name) || this;
        _this.isAllSelectedUpdating = false;
        _this.koAllSelected = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](_this.isAllSelected);
        _this.koAllSelected.subscribe(function (newValue) {
            if (_this.isAllSelectedUpdating)
                return;
            if (newValue)
                _this.selectAll();
            else
                _this.clearValue();
        });
        return _this;
    }
    QuestionTagbox.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new _koquestion_baseselect__WEBPACK_IMPORTED_MODULE_2__["QuestionCheckboxBaseImplementor"](this);
    };
    QuestionTagbox.prototype.onSurveyValueChanged = function (newValue) {
        _super.prototype.onSurveyValueChanged.call(this, newValue);
        this.updateAllSelected();
    };
    QuestionTagbox.prototype.onVisibleChoicesChanged = function () {
        _super.prototype.onVisibleChoicesChanged.call(this);
        this.updateAllSelected();
    };
    QuestionTagbox.prototype.updateAllSelected = function () {
        this.isAllSelectedUpdating = true;
        this.koAllSelected(this.isAllSelected);
        this.isAllSelectedUpdating = false;
    };
    QuestionTagbox.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        this.koAllSelected = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionTagbox;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionTagboxModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("tagbox", function () {
    return new QuestionTagbox("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("tagbox", function (name) {
    var q = new QuestionTagbox(name);
    q.choices = survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].DefaultChoices;
    return q;
});


/***/ }),

/***/ "./src/knockout/koquestion_text.ts":
/*!*****************************************!*\
  !*** ./src/knockout/koquestion_text.ts ***!
  \*****************************************/
/*! exports provided: QuestionTextImplementor, QuestionText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTextImplementor", function() { return QuestionTextImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionText", function() { return QuestionText; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _koquestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./koquestion */ "./src/knockout/koquestion.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var QuestionTextImplementor = /** @class */ (function (_super) {
    __extends(QuestionTextImplementor, _super);
    function QuestionTextImplementor(question) {
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
        _this.setObservaleObj("koReadOnlyValue", knockout__WEBPACK_IMPORTED_MODULE_0__["computed"](function () { return _this.question.value; }));
        return _this;
    }
    return QuestionTextImplementor;
}(_koquestion__WEBPACK_IMPORTED_MODULE_2__["QuestionImplementor"]));

var QuestionText = /** @class */ (function (_super) {
    __extends(QuestionText, _super);
    function QuestionText(name) {
        return _super.call(this, name) || this;
    }
    QuestionText.prototype.onBaseCreating = function () {
        _super.prototype.onBaseCreating.call(this);
        this._implementor = new QuestionTextImplementor(this);
    };
    QuestionText.prototype.dispose = function () {
        this._implementor.dispose();
        this._implementor = undefined;
        _super.prototype.dispose.call(this);
    };
    return QuestionText;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionTextModel"]));

survey_core__WEBPACK_IMPORTED_MODULE_1__["Serializer"].overrideClassCreator("text", function () {
    return new QuestionText("");
});
survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionFactory"].Instance.registerQuestion("text", function (name) {
    return new QuestionText(name);
});


/***/ }),

/***/ "./src/knockout/kosurvey.ts":
/*!**********************************!*\
  !*** ./src/knockout/kosurvey.ts ***!
  \**********************************/
/*! exports provided: SurveyImplementor, Survey, registerTemplateEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyImplementor", function() { return SurveyImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return Survey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerTemplateEngine", function() { return registerTemplateEngine; });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "knockout");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templateText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templateText */ "./src/knockout/templateText.ts");
/* harmony import */ var _kobase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kobase */ "./src/knockout/kobase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};









survey_core__WEBPACK_IMPORTED_MODULE_1__["CustomWidgetCollection"].Instance.onCustomWidgetAdded.add(function (customWidget) {
    if (customWidget.widgetJson.isDefaultRender)
        return;
    if (!customWidget.htmlTemplate)
        customWidget.htmlTemplate =
            "<div>'htmlTemplate' attribute is missed.</div>";
    new _templateText__WEBPACK_IMPORTED_MODULE_2__["SurveyTemplateText"]().replaceText(customWidget.htmlTemplate, "widget", customWidget.name);
});
var SurveyImplementor = /** @class */ (function (_super) {
    __extends(SurveyImplementor, _super);
    function SurveyImplementor(survey) {
        var _this = _super.call(this, survey) || this;
        _this.survey = survey;
        _this.survey.valueHashGetDataCallback = function (valuesHash, key) {
            if (valuesHash[key] === undefined) {
                valuesHash[key] = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"]();
            }
            return knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](valuesHash[key]);
        };
        _this.survey.valueHashSetDataCallback = function (valuesHash, key, value) {
            if (knockout__WEBPACK_IMPORTED_MODULE_0__["isWriteableObservable"](valuesHash[key])) {
                valuesHash[key](value);
            }
            else {
                valuesHash[key] = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](value);
            }
        };
        _this.survey.valueHashDeleteDataCallback = function (valuesHash, key) {
            if (knockout__WEBPACK_IMPORTED_MODULE_0__["isWriteableObservable"](valuesHash[key])) {
                valuesHash[key](undefined);
            }
            else {
                delete valuesHash[key];
            }
        };
        _this.survey["koTitleTemplate"] = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"]("survey-header");
        _this.survey["koAfterRenderPage"] = function (elements, con) {
            var el = survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyElement"].GetFirstNonTextElement(elements);
            if (!el)
                return;
            setTimeout(function () {
                !!knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"] && knockout__WEBPACK_IMPORTED_MODULE_0__["tasks"].runEarly();
                _this.survey.afterRenderPage(el);
            }, 0);
        };
        _this.survey["koAfterRenderHeader"] = function (elements, con) {
            var el = survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyElement"].GetFirstNonTextElement(elements);
            if (el)
                _this.survey.afterRenderHeader(el);
        };
        _this.survey.disposeCallback = function () {
            _this.dispose();
        };
        new _kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](_this.survey.timerModel);
        return _this;
    }
    SurveyImplementor.prototype.render = function (element) {
        if (element === void 0) { element = null; }
        if (typeof knockout__WEBPACK_IMPORTED_MODULE_0__ === "undefined")
            throw new Error("knockoutjs library is not loaded.");
        var page = this.survey.activePage;
        if (!!page) {
            page.updateCustomWidgets();
        }
        this.survey.updateElementCss(false);
        if (element && typeof element === "string") {
            element = Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["getElement"])(element);
        }
        if (element) {
            this.renderedElement = element;
        }
        this.survey.startTimerFromUI();
        this.applyBinding();
    };
    SurveyImplementor.prototype.applyBinding = function () {
        if (!this.renderedElement)
            return;
        knockout__WEBPACK_IMPORTED_MODULE_0__["cleanNode"](this.renderedElement);
        knockout__WEBPACK_IMPORTED_MODULE_0__["renderTemplate"]("survey-content", this.survey, {}, this.renderedElement);
    };
    SurveyImplementor.prototype.koEventAfterRender = function (element, survey) {
        if (survey["needRenderIcons"]) {
            survey_core__WEBPACK_IMPORTED_MODULE_1__["SvgRegistry"].renderIcons();
        }
        survey.afterRenderSurvey(element);
    };
    SurveyImplementor.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (!!this.renderedElement) {
            knockout__WEBPACK_IMPORTED_MODULE_0__["cleanNode"](this.renderedElement);
            this.renderedElement.innerHTML = "";
            this.renderedElement = undefined;
        }
        this.survey["koAfterRenderPage"] = undefined;
        this.survey["koAfterRenderHeader"] = undefined;
        this.survey.iteratePropertiesHash(function (hash, key) {
            delete hash[key];
        });
    };
    return SurveyImplementor;
}(_kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"]));

// SurveyModel.prototype["onCreating"] = function() {
//   this.implementor = new SurveyImplementor(this);
// };
// SurveyModel.prototype["render"] = function(element: any = null) {
//   this.implementor.render(element);
// };
// SurveyModel.prototype["getHtmlTemplate"] = function(): string {
//   return koTemplate;t
// };
var Survey = /** @class */ (function (_super) {
    __extends(Survey, _super);
    function Survey(jsonObj, renderedElement) {
        if (jsonObj === void 0) { jsonObj = null; }
        if (renderedElement === void 0) { renderedElement = null; }
        var _this = _super.call(this, jsonObj, renderedElement) || this;
        _this.implementor = new SurveyImplementor(_this);
        return _this;
    }
    Survey.prototype.render = function (element) {
        if (element === void 0) { element = null; }
        this.implementor.render(element);
    };
    Survey.prototype.getHtmlTemplate = function () {
        return _templateText__WEBPACK_IMPORTED_MODULE_2__["koTemplate"];
    };
    Survey.prototype.makeReactive = function (obj) {
        new _kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](obj);
    };
    Survey.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this.implementor) {
            this.implementor.dispose();
            this.implementor = undefined;
        }
    };
    return Survey;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyModel"]));

function ensureSurvey(survey) {
    if (!survey.implementor) {
        survey.implementor = new SurveyImplementor(survey);
        survey.render = function (element) {
            if (element === void 0) { element = null; }
            survey.implementor.render(element);
        };
        survey.getHtmlTemplate = function () {
            return _templateText__WEBPACK_IMPORTED_MODULE_2__["koTemplate"];
        };
        survey.makeReactive = function (obj) {
            new _kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](obj);
        };
    }
}
survey_core__WEBPACK_IMPORTED_MODULE_1__["LocalizableString"].prototype["onCreating"] = function () {
    var self = this;
    this.koHasHtml = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](this.hasHtml);
    this.koRenderedHtml = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"](this.renderedHtml);
    this.onStringChanged.add(function () {
        var hasHtml = self.hasHtml;
        self.koHasHtml(hasHtml);
        self.koRenderedHtml(hasHtml ? self.getHtmlValue() : self.calculatedText);
    });
};
survey_core__WEBPACK_IMPORTED_MODULE_1__["ItemValue"].prototype["onCreating"] = function () {
    var _this = this;
    new _kobase__WEBPACK_IMPORTED_MODULE_3__["ImplementorBase"](this);
    this.koText = knockout__WEBPACK_IMPORTED_MODULE_0__["pureComputed"](function () { return _this.locText.koRenderedHtml(); });
};
knockout__WEBPACK_IMPORTED_MODULE_0__["components"].register("survey", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var survey = knockout__WEBPACK_IMPORTED_MODULE_0__["unwrap"](params.survey);
            ensureSurvey(survey);
            setTimeout(function () {
                var surveyRoot = document.createElement("div");
                surveyRoot.style.width = "100%";
                surveyRoot.style.height = "100%";
                componentInfo.element.appendChild(surveyRoot);
                survey.render(surveyRoot);
            }, 1);
            // !!ko.tasks && ko.tasks.runEarly();
            return params.survey;
        },
    },
    template: _templateText__WEBPACK_IMPORTED_MODULE_2__["koTemplate"],
});
knockout__WEBPACK_IMPORTED_MODULE_0__["bindingHandlers"]["surveyProp"] = {
    update: function (element, valueAccessor, allBindingsAccessor) {
        var value = knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].unwrapObservable(valueAccessor()) || {};
        for (var propName in value) {
            if (typeof propName == "string") {
                var propValue = knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].unwrapObservable(value[propName]);
                element[propName] = propValue;
            }
        }
    },
};
survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyModel"].platform = "knockout";
var registerTemplateEngine = function (ko, platform) {
    ko.surveyTemplateEngine = function () { };
    ko.surveyTemplateEngine.prototype = new ko.nativeTemplateEngine();
    ko.surveyTemplateEngine.prototype.makeTemplateSource = function (template, templateDocument) {
        if (typeof template === "string") {
            templateDocument = templateDocument || document;
            var templateElementRoot = templateDocument.getElementById("survey-content-" + platform);
            if (!templateElementRoot) {
                var rootElement = survey_core__WEBPACK_IMPORTED_MODULE_1__["settings"].environment.rootElement;
                templateElementRoot = document.createElement("div");
                templateElementRoot.id = "survey-content-" + survey_core__WEBPACK_IMPORTED_MODULE_1__["SurveyModel"].platform;
                templateElementRoot.style.display = "none";
                templateElementRoot.innerHTML = _templateText__WEBPACK_IMPORTED_MODULE_2__["koTemplate"];
                rootElement.appendChild(templateElementRoot);
            }
            var elem;
            for (var i = 0; i < templateElementRoot.children.length; i++) {
                if (templateElementRoot.children[i].id === template) {
                    elem = templateElementRoot.children[i];
                    break;
                }
            }
            if (!elem) {
                elem = templateDocument.getElementById(template);
            }
            if (!elem) {
                return new ko.nativeTemplateEngine().makeTemplateSource(template, templateDocument);
            }
            return new ko.templateSources.domElement(elem);
        }
        else if (template.nodeType === 1 || template.nodeType === 8) {
            return new ko.templateSources.anonymousTemplate(template);
        }
        else {
            throw new Error("Unknown template type: " + template);
        }
    };
    // (<any>ko).surveyTemplateEngine.prototype.renderTemplateSource = function (templateSource: any, bindingContext: any, options: any, templateDocument: any) {
    //   var useNodesIfAvailable = !((<any>ko.utils).ieVersion < 9),
    //     templateNodesFunc = useNodesIfAvailable ? templateSource["nodes"] : null,
    //     templateNodes = templateNodesFunc ? templateSource["nodes"]() : null;
    //   if (templateNodes) {
    //     return (<any>ko.utils).makeArray(templateNodes.cloneNode(true).childNodes);
    //   } else {
    //     var templateText = templateSource["text"]();
    //     return (<any>ko.utils).parseHtmlFragment(templateText, templateDocument);
    //   }
    // };
    var surveyTemplateEngineInstance = new ko.surveyTemplateEngine();
    ko.setTemplateEngine(surveyTemplateEngineInstance);
};
knockout__WEBPACK_IMPORTED_MODULE_0__["bindingHandlers"]["elementStyle"] = {
    update: function (element, valueAccessor, allBindings) {
        if (element && element.style.length) {
            for (var index = element.style.length - 1; index >= 0; index--) {
                var style = element.style[index];
                if (style && style.indexOf("--sjs-") === 0) {
                    element.style.removeProperty(style);
                }
            }
        }
        var value = knockout__WEBPACK_IMPORTED_MODULE_0__["utils"].unwrapObservable(valueAccessor()) || {};
        Object.keys(value).forEach(function (key) {
            if (key.indexOf("--") === 0) {
                element.style.setProperty(key, value[key]);
            }
            else {
                element.style[key] = value[key];
            }
        });
    }
};
knockout__WEBPACK_IMPORTED_MODULE_0__["bindingHandlers"]["key2click"] = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var options = __assign({}, valueAccessor()) || {
            processEsc: true,
            disableTabStop: false
        };
        if ((!!viewModel && viewModel.disableTabStop) || (!!options && options.disableTabStop)) {
            element.tabIndex = -1;
            return;
        }
        element.tabIndex = 0;
        element.onkeyup = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["doKey2ClickUp"])(evt, options);
            return false;
        };
        element.onkeydown = function (evt) { return Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["doKey2ClickDown"])(evt, options); };
        element.onblur = function (evt) { return Object(survey_core__WEBPACK_IMPORTED_MODULE_1__["doKey2ClickBlur"])(evt); };
    },
};


/***/ }),

/***/ "./src/knockout/templateText.ts":
/*!**************************************!*\
  !*** ./src/knockout/templateText.ts ***!
  \**************************************/
/*! exports provided: koTemplate, SurveyTemplateText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "koTemplate", function() { return koTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTemplateText", function() { return SurveyTemplateText; });
var koTemplate = __webpack_require__(/*! html-loader?interpolate!val-loader!./templates/entry.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/templates/entry.html");
var SurveyTemplateText = /** @class */ (function () {
    function SurveyTemplateText() {
    }
    SurveyTemplateText.prototype.addText = function (newText, id, name) {
        id = this.getId(id, name);
        this.text =
            this.text +
                '<script type="text/html" ' +
                id +
                ">" +
                newText +
                "</script>";
    };
    SurveyTemplateText.prototype.replaceText = function (replaceText, id, questionType) {
        if (questionType === void 0) { questionType = null; }
        var posId = this.getId(id, questionType);
        var pos = this.text.indexOf(posId);
        if (pos < 0) {
            this.addText(replaceText, id, questionType);
            return;
        }
        pos = this.text.indexOf(">", pos);
        if (pos < 0)
            return;
        var startPos = pos + 1;
        var endString = "</script>";
        pos = this.text.indexOf(endString, startPos);
        if (pos < 0)
            return;
        this.text =
            this.text.substring(0, startPos) + replaceText + this.text.substring(pos);
    };
    SurveyTemplateText.prototype.getId = function (id, questionType) {
        var result = 'id="survey-' + id;
        if (questionType) {
            result += "-" + questionType;
        }
        return result + '"';
    };
    Object.defineProperty(SurveyTemplateText.prototype, "text", {
        get: function () {
            return koTemplate;
        },
        set: function (value) {
            koTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    return SurveyTemplateText;
}());



/***/ }),

/***/ "./src/knockout/templates/comment.html":
/*!*********************************************!*\
  !*** ./src/knockout/templates/comment.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-comment\">\n  <!--ko if: !question.isReadOnlyRenderDiv() -->\n<textarea data-bind=\"attr: { id: question.commentId, maxLength: question.getOthersMaxLength(), 'aria-required': question.ariaRequired || question.a11y_input_ariaRequired, 'aria-label': question.ariaLabel || question.a11y_input_ariaLabel, placeholder: question.renderedCommentPlaceholder }, \n        event: { input: function(s, e) { $data.question.onCommentInput(s, e); } }, \n        value: $data.question.comment, \n        visible: $data.visible,\n        disable: $data.question.isInputReadOnly,\n        style: { resize: question.resizeStyle },\n        css: $data.question.cssClasses.other\"></textarea>\n<!--/ko-->\n\n<!--ko if: question.isReadOnlyRenderDiv() -->\n<div data-bind=\"text: question.comment\"></div>\n<!--/ko-->\n</script>\n<script type=\"text/html\" id=\"survey-other\">\n  <!--ko if: !question.isReadOnlyRenderDiv() -->\n<textarea data-bind=\"attr: { id: question.otherId, maxLength: question.getOthersMaxLength(), 'aria-required': question.ariaRequired || question.a11y_input_ariaRequired, 'aria-label': question.ariaLabel || question.a11y_input_ariaLabel, placeholder: question.otherPlaceholder }, \n        event: { input: function(s, e) { $data.question.onOtherValueInput(s, e); } }, \n        value: $data.question.otherValue, \n        visible: $data.visible,\n        disable: $data.question.isInputReadOnly,\n        style: { resize: question.resizeStyle },\n        css: $data.question.cssClasses.other\"></textarea>\n<!--/ko-->\n\n<!--ko if: question.isReadOnlyRenderDiv() -->\n<div data-bind=\"text: question.otherValue\"></div>\n<!--/ko-->\n</script>";

/***/ }),

/***/ "./src/knockout/templates/flowpanel.html":
/*!***********************************************!*\
  !*** ./src/knockout/templates/flowpanel.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-flowpanel\">\n  <div data-bind=\"style: { flexBasis: renderWidth, flexGrow: 1, flexShrink: 1, width: renderWidth, minWidth: $data.minWidth, maxWidth: $data.maxWidth }, attr: { id: id }, css: cssClasses.panel.container\">\n      <h4 data-bind=\"visible: (processedTitle.length > 0), css: question.cssTitle\">\n          <!-- ko template: { name: 'survey-string', data: locTitle } -->\n          <!-- /ko -->\n      </h4>\n      <div data-bind=\"css: cssClasses.panel.description\">\n          <!-- ko template: { name: 'survey-string', data: locDescription } -->\n          <!-- /ko -->\n      </div>\n      <div data-bind=\"style: { paddingLeft: innerPaddingLeft }\"></div>\n      <f-panel params=\"question: question\" data-bind=\"attr: { contenteditable : question.isDesignMode, placeHolder: question.placeHolder }\"></f-panel>\n  </div>\n</script>\n<script type=\"text/html\" id=\"survey-flowpanel-question\">\n  <!-- ko with: $parent.question.getQuestionByName($data) -->\n    <!-- ko template: { name: koElementType(), data: $data, as: 'question', afterRender: parent.koElementAfterRender } --><!-- /ko -->\n  <!-- /ko -->\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/header.html":
/*!********************************************!*\
  !*** ./src/knockout/templates/header.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-header\">\n  <!-- ko if: renderedHasHeader -->\n<div data-bind=\"css: css.header\">\n  <!-- ko if: isLogoBefore -->\n  <!-- ko component: { name: getElementWrapperComponentName($data, 'logo-image'), params: getElementWrapperComponentData($data, 'logo-image') } -->\n  <!-- /ko -->\n  <!-- /ko -->\n\n  <!-- ko if: renderedHasTitle -->\n  <div data-bind=\"css: css.headerText, style: { maxWidth: titleMaxWidth }\">\n    <!-- ko component: { name: 'survey-element-title', params: {element: $data } } -->\n    <!-- /ko -->\n    <!-- ko if: renderedHasDescription -->\n    <h5 data-bind=\"css: css.description\">\n      <!-- ko template: { name: 'survey-string', data: locDescription } -->\n      <!-- /ko -->\n    </h5>\n    <!-- /ko -->\n  </div>\n  <!-- /ko -->\n\n  <!-- ko if: isLogoAfter -->\n  <!-- ko component: { name: getElementWrapperComponentName($data, 'logo-image'), params: getElementWrapperComponentData($data, 'logo-image') } -->\n  <!-- /ko -->\n  <!-- /ko -->\n  <div data-bind=\"css: css.headerClose\"></div>\n</div>\n<!-- /ko -->\n</script>";

/***/ }),

/***/ "./src/knockout/templates/index.html":
/*!*******************************************!*\
  !*** ./src/knockout/templates/index.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-content\">\n    <!-- ko template: { name: \"survey-content-template\", afterRender: $data.implementor.koEventAfterRender } -->\n    <!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"survey-content-template\">\n  <div data-bind=\"css: rootCss, elementStyle: themeVariables\">\n    <div data-bind=\"css: wrapperFormCss\">\n      <!-- ko if: !!renderBackgroundImage -->\n      <div data-bind=\"css: css.rootBackgroundImage, elementStyle: backgroundImageStyle\"></div>\n      <!-- /ko -->\n      <form onsubmit=\"return false;\">\n          <div class=\"sv_custom_header\" data-bind=\"visible: !hasLogo\"></div>\n          <div data-bind=\"css: containerCss\">\n              <!-- ko if: headerView === 'basic' -->\n              <!-- ko template: { name: koTitleTemplate, afterRender: koAfterRenderHeader } -->\n              <!-- /ko -->\n              <!-- /ko -->\n              <!-- ko if: isShowingPage -->\n              <!-- ko component: { name: \"sv-components-container\", params: { survey: $data, container: \"header\", needRenderWrapper: false } } --><!-- /ko -->\n              <div data-bind=\"css: $data.bodyContainerCss\">\n                  <!-- ko component: { name: \"sv-components-container\", params: { survey: $data, container: \"left\" } } --><!-- /ko -->\n                  <div data-bind=\"css: bodyCss, style:{maxWidth: renderedWidth}, attr: { id: activePage ? activePage.id : '' }\">\n                        <!-- ko component: { name: \"sv-components-container\", params: { survey: $data, container: \"contentTop\" } } --><!-- /ko -->\n                        <!-- ko if: activePage -->\n                        <!-- ko template: { name: 'survey-page', data: activePage, afterRender: koAfterRenderPage } -->\n                        <!-- /ko -->\n                        <!-- ko if: activePage.rows.length == 0 && $data.emptyPageTemplate -->\n                        <!-- ko template: { name: emptyPageTemplate, data: $data.emptyPageTemplateData || $data } -->\n                        <!-- /ko -->\n                        <!-- /ko -->\n                        <!-- /ko -->\n                        <!-- ko component: { name: \"sv-components-container\", params: { survey: $data, container: \"contentBottom\" } } --><!-- /ko -->\n                  </div>\n                  <!-- ko component: { name: \"sv-components-container\", params: { survey: $data, container: \"right\" } } --><!-- /ko -->\n              </div>\n              <!-- ko component: { name: \"sv-components-container\", params: { survey: $data, container: \"footer\", needRenderWrapper: false } } --><!-- /ko -->\n              <!-- /ko -->\n              <!-- ko if: state == \"completed\" && showCompletedPage -->\n              <div data-bind=\"html: processedCompletedHtml, css: completedCss\"></div>\n              <!-- ko component: { name: \"sv-components-container\", params: { survey: $data, container: \"completePage\", needRenderWrapper: false } } --><!-- /ko -->\n              <!-- /ko -->\n              <!-- ko if: state == \"completedbefore\" -->\n              <div data-bind=\"html: locCompletedBeforeHtml.koRenderedHtml, css: completedBeforeCss\"></div>\n              <!-- /ko -->\n              <!-- ko if: state == \"loading\" -->\n              <div data-bind=\"html: locLoadingHtml.koRenderedHtml, css: loadingBodyCss\"></div>\n              <!-- /ko -->\n              <!-- ko if: state == \"empty\" -->\n              <div data-bind=\"text:emptySurveyText, css: css.bodyEmpty\"></div>\n              <!-- /ko -->\n          </div>\n      </form>\n      <!-- ko if: showBrandInfo -->\n      <sv-brand-info></sv-brand-info>\n      <!-- /ko -->\n      <!-- ko component: { name: 'sv-notifier', params: { notifier: notifier } } -->\n      <!-- /ko -->\n    </div>\n  </div>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/page.html":
/*!******************************************!*\
  !*** ./src/knockout/templates/page.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-page\">\n  <div data-bind=\"css: cssRoot\">\n    <!-- ko component: { name: 'survey-element-title', params: {element: $data } } --><!-- /ko -->\n    <!-- ko if: _showDescription-->\n    <div\n      data-bind=\"visible: data.showPageTitles, css: cssClasses.page.description\"\n    >\n      <!-- ko template: { name: 'survey-string', data: locDescription } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n    <!-- ko template: { name: 'survey-rows', data: $data} -->\n    <!-- /ko -->\n  </div>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/panel.html":
/*!*******************************************!*\
  !*** ./src/knockout/templates/panel.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-panel\">\n  <!-- ko if: $data.isVisible -->\n  <div\n    data-bind=\"attr: { id: id }, css: $data.getContainerCss(), event: {focusin: focusIn}\"\n  >\n    <!-- ko if: showErrorsAbovePanel-->\n      <!-- ko template: { name: 'survey-question-errors', data: $data } -->\n      <!-- /ko -->\n    <!-- /ko -->\n    <!-- ko if: hasDescription || hasTitle  -->\n        <!--ko template: { name: 'survey-question-title', data: $data  } --><!-- /ko -->\n    <!-- /ko -->\n    <!-- ko ifnot: showErrorsAbovePanel-->\n      <!-- ko template: { name: 'survey-question-errors', data: $data } -->\n      <!-- /ko -->\n    <!-- /ko -->\n    <!-- ko if: state != \"collapsed\" -->\n    <div\n      data-bind=\"style: { paddingLeft: innerPaddingLeft }, css: cssClasses.panel.content, attr: {id:contentId}\"\n    >\n      <!-- ko template: { name: 'survey-rows', data: $data} -->\n      <!-- /ko -->\n      <!-- ko component: { name: 'sv-action-bar', params: { model: getFooterToolbar() } } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n  <!-- /ko -->\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/popup-pointer.html":
/*!***************************************************!*\
  !*** ./src/knockout/templates/popup-pointer.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"popup-pointer\">\n  <span class=\"sv-popup__pointer\" data-bind=\"style: { left: pointerTarget.left, top: pointerTarget.top }\"></span>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-boolean.html":
/*!******************************************************!*\
  !*** ./src/knockout/templates/question-boolean.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-boolean\">\n  <div data-bind=\"css: question.cssClasses.root, event: { keydown: question.onKeyDown}\">\n    <label data-bind=\"css: question.getItemCss()\">\n      <input\n        type=\"checkbox\"\n        data-bind=\"value: question.booleanValue, css: question.cssClasses.control, attr: {name: question.name, id: question.inputId, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy}, checked: question.booleanValue, surveyProp: {indeterminate: question.isIndeterminate}, enable: !question.isInputReadOnly\"\n      />\n      <div data-bind=\"css: question.cssClasses.sliderGhost, click: onFalseLabelClick\">\n        <span data-bind=\"css: question.getLabelCss(false)\">\n          <!-- ko template: { name: 'survey-string', data: locLabelFalse } --><!-- /ko -->\n        </span>\n      </div>\n      <div data-bind=\"css: question.cssClasses.switch, click: onSwitchClick\">\n        <span data-bind=\"css: question.cssClasses.slider\">\n            <!-- ko if: question.cssClasses.sliderText && question.isDeterminated -->\n            <span data-bind=\"css: question.cssClasses.sliderText\">\n              <!-- ko template: { name: 'survey-string', data: question.getCheckedLabel() } --><!-- /ko -->\n            </span>\n            <!-- /ko -->\n        </span>\n      </div>\n      <div data-bind=\"css: question.cssClasses.sliderGhost, click: onTrueLabelClick\">\n        <span data-bind=\"css: question.getLabelCss(true)\">\n          <!-- ko template: { name: 'survey-string', data: locLabelTrue } --><!-- /ko -->\n        </span>\n      </div>\n    </label>\n  </div>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-buttongroup.html":
/*!**********************************************************!*\
  !*** ./src/knockout/templates/question-buttongroup.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-buttongroup\">\n  <div role=\"group\" data-bind=\"css: question.cssClasses.root\">\n      <!-- ko foreach: question.visibleChoices -->\n        <!-- ko component: { name: 'sv-button-group-item', params: { question: question, item: $data, index: $index } } -->\n        <!-- /ko -->\n      <!-- /ko -->\n    </div>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-checkbox.html":
/*!*******************************************************!*\
  !*** ./src/knockout/templates/question-checkbox.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-checkbox\">\n  <fieldset data-bind=\"css: question.getSelectBaseRootCss(), attr: { 'role': question.a11y_input_ariaRole, 'aria-required': question.a11y_input_ariaRequired, 'aria-labelledby': question.a11y_input_ariaLabelledBy, 'aria-invalid': question.a11y_input_ariaInvalid, 'aria-describedby': question.a11y_input_ariaDescribedBy, 'aria-label': question.a11y_input_ariaLabel }\">\n      <legend role=\"presentation\" class=\"sv-hidden\"></legend>\n      <!-- ko if: question.hasHeadItems  -->\n        <!-- ko foreach: { data: question.headItems, as: 'item', afterRender: question.koAfterRender }  -->\n          <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } -->\n          <!-- /ko -->\n        <!-- /ko -->\n      <!-- /ko -->\n      <!-- ko ifnot: question.hasColumns  -->\n        <!-- ko if: question.blockedRow -->\n        <div data-bind=\"css: question.cssClasses.rootRow\">\n          <!-- ko foreach: { data: question.dataChoices, as: 'item', afterRender: question.koAfterRender }  -->\n          <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } -->\n          <!-- /ko -->\n          <!-- /ko -->\n        </div>\n        <!-- /ko -->\n        <!-- ko ifnot: question.blockedRow -->\n        <!-- ko foreach: { data: question.bodyItems, as: 'item', afterRender: question.koAfterRender }  -->\n          <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } -->\n          <!-- /ko -->\n        <!-- /ko -->\n        <!-- /ko -->\n      <!-- /ko -->\n      <!-- ko if: question.hasColumns  -->\n        <div data-bind=\"css: question.cssClasses.rootMultiColumn\">\n        <!-- ko foreach: question.columns -->\n            <div data-bind=\"css: question.getColumnClass()\" role=\"presentation\">\n            <!-- ko foreach: { data: $data, as: 'item', afterRender: question.koAfterRender }  -->\n              <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } -->\n              <!-- /ko -->\n            <!-- /ko -->\n            </div>\n        <!-- /ko -->\n        </div>\n      <!-- /ko -->\n      <!-- ko if: question.hasFootItems  -->\n        <!-- ko foreach: { data: question.footItems, as: 'item', afterRender: question.koAfterRender }  -->\n          <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } -->\n          <!-- /ko -->\n        <!-- /ko -->\n      <!-- /ko -->\n      <!-- ko if: question.hasOther && question.isOtherSelected -->\n      <div data-bind=\"css: question.getCommentAreaCss(true), template: { name: 'survey-other', data: {'question': question, 'visible': question.isOtherSelected } }\"></div>\n      <!-- /ko -->\n    </fieldset>\n</script>\n<script type=\"text/html\" id=\"survey-checkbox-item\">\n  <div role=\"presentation\" data-bind=\"css: question.getItemClass($data)\">\n      <label data-bind=\"css: question.getLabelClass($data)\">\n          <!-- ko if: $data == question.selectAllItem -->\n          <input type=\"checkbox\" value=\"\" data-bind=\"attr: {name: question.name, id: question.getItemId($data)}, checked: question.koAllSelected, enable: question.getItemEnabled($data), css: question.cssClasses.itemControl\"/>\n          <!-- /ko -->\n          <!-- ko if: $data != question.selectAllItem -->\n          <input type=\"checkbox\" data-bind=\"attr: {name: question.name, id: question.getItemId($data)}, checkedValue: $data.value, checked: question.koValue, enable: question.getItemEnabled($data), css: question.cssClasses.itemControl\"/>\n          <!-- /ko -->\n              <!-- ko if: question.cssClasses.materialDecorator -->\n              <span data-bind=\"css: question.cssClasses.materialDecorator\">\n                <!-- ko if: question.itemSvgIcon -->\n                <svg data-bind=\"css:question.cssClasses.itemDecorator\">\n                  <use data-bind=\"attr:{'xlink:href':question.itemSvgIcon}\" xlink:href=''></use>\n                </svg>\n                <!-- /ko -->\n              </span>\n              <!-- /ko -->\n          <!-- ko if: !$data.hideCaption -->\n          <span data-bind=\"css: question.cssClasses.controlLabel\">\n          <!-- ko template: { name: 'survey-string', data: $data.locText } -->\n          <!-- /ko -->\n          </span>\n          <!-- /ko -->\n      </label>\n  </div>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-comment.html":
/*!******************************************************!*\
  !*** ./src/knockout/templates/question-comment.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-comment\">\n<!--ko if: !question.isReadOnlyRenderDiv() -->\n<textarea data-bind=\"attr: {'readonly': question.renderedInputReadOnly, 'disabled': question.renderedInputDisabled, maxLength: question.getMaxLength(), cols: question.cols, rows: question.rows, id: question.inputId, placeholder: question.renderedPlaceholder, 'aria-required': question.a11y_input_ariaRequired, 'aria-label': question.a11y_input_ariaLabel, 'aria-labelledby': question.a11y_input_ariaLabelledBy, 'aria-invalid': question.a11y_input_ariaInvalid, 'aria-describedby': question.a11y_input_ariaDescribedBy}, \n  event: { input: function(s, e) { question.onInput(e); }, keydown: function(s, e) { question.onKeyDown(e); return true; } }, \n  value: question.value, \n  style: { resize: question.resizeStyle },\n  css: question.className\"></textarea>\n  <!--ko if: question.getMaxLength() -->\n  <!-- ko component: { name: 'sv-character-counter', params: { counter: question.characterCounter, remainingCharacterCounter: question.cssClasses.remainingCharacterCounter } } -->\n  <!-- /ko -->\n  <!--/ko-->\n<!--/ko-->\n\n<!--ko if: question.isReadOnlyRenderDiv() -->\n<div data-bind=\"text: question.value\"></div>\n<!--/ko-->\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-composite.html":
/*!********************************************************!*\
  !*** ./src/knockout/templates/question-composite.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-composite\">\n  <!-- ko template: { name: 'survey-panel', data: question.contentPanel, as: 'question', afterRender: question.contentPanel.koPanelAfterRender } -->\n  <!-- /ko -->\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-custom.html":
/*!*****************************************************!*\
  !*** ./src/knockout/templates/question-custom.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-custom\">\n    <!-- ko if: question.contentQuestion.isDefaultRendering() -->\n      <!-- ko template: { name: question.contentQuestion.koTemplateName(), data: question.contentQuestion, as: 'question', afterRender: question.contentQuestion.koQuestionAfterRender } -->\n      <!-- /ko -->\n    <!-- /ko -->\n    <!-- ko ifnot: question.contentQuestion.isDefaultRendering() -->\n      <!-- ko component: { name: question.contentQuestion.getComponentName(), params: { question: question.contentQuestion } } -->\n      <!-- /ko -->\n    <!-- /ko -->\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-dropdown.html":
/*!*******************************************************!*\
  !*** ./src/knockout/templates/question-dropdown.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-dropdown\">\n  <div data-bind=\"css: question.renderCssRoot\">\n    <!-- ko component: { name: 'sv-dropdown', params: { question: question } } -->\n    <!-- /ko -->\n  <!-- ko if: question.isOtherSelected -->\n  <div data-bind=\"css: question.getCommentAreaCss(true), template: { name: 'survey-other', data: {'question': question, 'visible': question.isOtherSelected } }, style: {display: question.isFlowLayout ? 'inline': ''}\">\n  </div>\n  <!-- /ko -->\n  </div>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-empty.html":
/*!****************************************************!*\
  !*** ./src/knockout/templates/question-empty.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-empty\">\n    <div></div>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-errors.html":
/*!*****************************************************!*\
  !*** ./src/knockout/templates/question-errors.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-errors\">\n        <!-- ko if: hasVisibleErrors -->\n            <div role=\"alert\" aria-live=\"polite\" data-bind=\"visible: hasVisibleErrors, foreach: { data: errors, as: 'error' }, css: cssError, attr: { id: question.id + '_errors' }\">\n            <!-- ko if: error.visible -->\n            <div>   \n                <span aria-hidden=\"true\" data-bind=\"css: question.cssClasses.error.icon\"></span>\n                <span data-bind=\"css: question.cssClasses.error.item\">\n                    <!-- ko template: { name: 'survey-string', data: error.locText } --><!-- /ko -->\n                </span>\n            </div>\n            <!-- /ko -->\n        </div>\n        <!-- /ko -->\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-expression.html":
/*!*********************************************************!*\
  !*** ./src/knockout/templates/question-expression.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-expression\">\n  <div data-bind=\"text:question.formatedValue, css: question.cssClasses.root\"></div>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-file.html":
/*!***************************************************!*\
  !*** ./src/knockout/templates/question-file.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-file\">\n  <div data-bind=\"css: question.fileRootCss\">\n        <!-- ko ifnot: question.isInputReadOnly -->\n          <!-- ko if: question.hasFileUI -->\n          <input type=\"file\" tabindex=\"-1\" data-bind=\"css: question.cssClasses.fileInput, attr: { id: question.inputId, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy, multiple: question.allowMultiple ? 'multiple' : undefined, title: koInputTitle, accept: question.acceptedTypes, capture: question.renderCapture }, event: { change: question.dochange }\">\n          <!-- /ko -->\n        <!-- /ko -->\n        <!-- ko if: question.isReadOnly -->\n        <input type=\"file\" disabled data-bind=\"css: question.getReadOnlyFileCss(), attr: { id: question.inputId, placeholder: question.title, multiple: question.allowMultiple ? 'multiple' : undefined }\" style=\"color: transparent;\"/>\n        <!-- /ko -->\n        <div data-bind=\"css: question.cssClasses.dragArea, event: { dragenter: question.ondragenter, dragover: question.ondragover, drop: question.ondrop, dragleave: question.ondragleave }\">     \n          <!-- ko if: question.showFileDecorator -->\n          <div data-bind=\"css: question.getFileDecoratorCss()\">\n            <span data-bind=\"css: question.cssClasses.dragAreaPlaceholder, text: question.renderedPlaceholder\"></span>\n            <div data-bind=\"css: question.cssClasses.wrapper\">\n              <!-- ko if: question.showChooseButton -->\n                <!-- ko component: { name: 'sv-file-choose-btn' } -->\n                <!-- /ko -->\n              <!-- /ko -->\n              <!-- ko if: question.actionsContainerVisible -->\n              <!-- ko component: { name: 'sv-action-bar', params: { model: question.actionsContainer } } -->\n              <!-- /ko -->\n              <!-- /ko -->\n              <!-- ko if: !question.koHasValue() -->\n              <span data-bind=\"css: question.cssClasses.noFileChosen, text: question.noFileChosenCaption\"></span>\n              <!-- /ko -->\n            </div>\n          </div>\n          <!-- /ko -->\n          <!-- ko if: question.showLoadingIndicator -->\n          <div data-bind=\"css: question.cssClasses.loadingIndicator\">\n            <!-- ko component: { name: \"sv-loading-indicator\" } -->\n            <!-- /ko -->\n          </div>\n          <!-- /ko -->\n          <!-- ko if: question.isPlayingVideo -->\n          <!-- ko template: { name: 'survey-question-file-video', data: { question: question } } --><!-- /ko -->          \n          <!-- /ko -->\n          <!-- ko template: { name: 'survey-question-file-clean-button', data: {question: question, showRemoveButton: question.showRemoveButton} } --><!-- /ko -->\n          <!-- ko if: question.allowShowPreview -->\n          <!-- ko component: { name: 'sv-file-preview', data: { question: question } } --><!-- /ko -->          \n          <!-- /ko -->\n          <!-- ko template: { name: 'survey-question-file-clean-button', data: {question: question, showRemoveButton: question.showRemoveButtonBottom} } --><!-- /ko -->\n          <!-- ko if: question.fileNavigatorVisible -->\n          <!-- ko component: { name: 'sv-action-bar', params: { model: question.fileNavigator } } -->\n          <!-- /ko -->\n          <!-- /ko -->\n        </div>\n  </div>\n</script>\n<script type=\"text/html\" id=\"survey-question-file-clean-button\">\n  <!-- ko if: question.koHasValue() && !question.isReadOnly && $data.showRemoveButton-->\n  <button type=\"button\" data-bind=\"css: showRemoveButton, enabled: !question.isInputReadOnly, click: question.doclean\">\n      <span data-bind=\"text: question.clearButtonCaption\"></span>\n  </button>\n  <!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"survey-question-file-video\">\n  <div data-bind=\"css: question.cssClasses.videoContainer\">\n    <!-- ko component: { name: 'sv-action', params: { item: question.changeCameraAction } } --><!-- /ko -->\n    <!-- ko component: { name: 'sv-action', params: { item: question.closeCameraAction } } --><!-- /ko -->\n    <video autoplay playsinline data-bind=\"attr: { id: question.videoId },  css: question.cssClasses.video\"></video>\n    <!-- ko component: { name: 'sv-action', params: { item: question.takePictureAction } } --><!-- /ko -->\n  </div>\n</script>\n<script type=\"text/html\" id=\"survey-question-file-sign\">\n  <!-- ko if: item.name && fileSignCss -->\n  <div data-bind=\"css: fileSignCss\">\n    <a data-bind=\"style: { width: question.imageWidth }, click: question.dodownload, text: item.name, attr: { href: item.content, title: item.name, download: item.name }\"></a>\n  </div>\n  <!-- /ko -->\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-html.html":
/*!***************************************************!*\
  !*** ./src/knockout/templates/question-html.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-html\">\n  <div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.cssClasses.root\"></div>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-image.html":
/*!****************************************************!*\
  !*** ./src/knockout/templates/question-image.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-image\">\n  <div data-bind=\"css: question.cssClasses.root\">\n    <!-- ko if: question.renderedMode === \"image\" -->\n    <img data-bind=\"event: { load: question.onLoadHandler, error: question.onErrorHandler }, css: question.getImageCss(), attr: { src: $data.locImageLink.koRenderedHtml() || null, width: question.renderedWidth, height: question.renderedHeight, alt: question.altText || question.title }, style: { objectFit: question.imageFit,  width: question.renderedStyleWidth, height: question.renderedStyleHeight }, visible: $data.locImageLink.koRenderedHtml() && !question.contentNotLoaded\"/>\n    <!-- /ko -->\n    <!-- ko if: question.renderedMode === \"video\" -->\n    <video controls data-bind=\"event: { load: question.onLoadHandler, error: question.onErrorHandler }, css: question.getImageCss(), attr: { src: $data.locImageLink.koRenderedHtml(), width: question.renderedWidth, height: question.renderedHeight }, style: { objectFit: question.imageFit,  width: question.renderedStyleWidth, height: question.renderedStyleHeight }, visible: $data.locImageLink.koRenderedHtml() && !question.contentNotLoaded\"></video>\n    <!-- /ko -->\n    <!-- ko if: question.renderedMode === \"youtube\" -->\n    <iframe data-bind=\" css: question.getImageCss(), attr: { src: $data.locImageLink.koRenderedHtml(), width: question.renderedWidth, height: question.renderedHeight }, style: { objectFit: question.imageFit,  width: question.renderedStyleWidth, height: question.renderedStyleHeight }\"></iframe>\n    <!-- /ko -->\n    <!-- ko if: !$data.locImageLink.koRenderedHtml() || question.contentNotLoaded  -->\n    <div data-bind=\"css: question.cssClasses.noImage\">\n      <!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.cssClasses.noImageSvgIconId, size: 48 } } --><!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-imagepicker.html":
/*!**********************************************************!*\
  !*** ./src/knockout/templates/question-imagepicker.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-imagepicker\">\n    <fieldset data-bind=\"css: question.getSelectBaseRootCss()\">\n        <legend data-bind=\"attr: { 'aria-label': question.locTitle.renderedHtml }\" role=\"radio\"></legend>\n        <!-- ko ifnot: question.hasColumns -->\n        <!-- ko foreach: { data: question.visibleChoices, as: 'item', afterRender: question.koAfterRender}  -->\n        <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: 'survey-imagepicker-item', data: item } } } -->\n        <!-- /ko -->\n        <!-- /ko -->\n        <!-- /ko -->\n        <!-- ko if: question.hasColumns -->\n        <!-- ko foreach: question.columns -->\n        <div data-bind=\"css: question.getColumnClass()\" role=\"presentation\">\n            <!-- ko foreach: { data: $data, as: 'item', afterRender: question.koAfterRender }  -->\n            <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: 'survey-imagepicker-item', data: item } } } -->\n            <!-- /ko -->\n            <!-- /ko -->\n        </div>\n        <!-- /ko -->\n        <!-- /ko -->\n    </fieldset>\n</script>\n<script type=\"text/html\" id=\"survey-imagepicker-item\">\n    <div data-bind=\"css: question.koGetItemClass(item)\">\n        <label data-bind=\"css: question.cssClasses.label\">\n            <input data-bind=\"attr: {type: question.inputType, name: question.questionName, value: item.value, id: question.getItemId(item), 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy}, checked: question.koValue, enable: question.getItemEnabled(item), css: question.cssClasses.itemControl\"\n            />\n            <div data-bind=\"css: question.cssClasses.itemDecorator\">\n                <div data-bind=\"css: question.cssClasses.imageContainer\">\n                  <!-- ko if: question.cssClasses.checkedItemDecorator -->\n                  <span data-bind=\"css: question.cssClasses.checkedItemDecorator\">\n                    <!-- ko if: question.cssClasses.checkedItemSvgIconId -->\n                    <!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.checkedItemSvgIcon, iconName: question.cssClasses.checkedItemSvgIconId, size: 'auto' } } -->\n                    <!-- /ko -->\n                    <!-- /ko -->\n                   </span>\n                  <!-- /ko -->\n                  <!-- ko if: ($data.locImageLink.koRenderedHtml() && !$data.contentNotLoaded && question.contentMode === \"image\") -->\n                  <img data-bind=\"css: question.cssClasses.image, attr: { src: $data.locImageLink.koRenderedHtml, width: question.renderedImageWidth, height: question.renderedImageHeight, alt: item.locText.koRenderedHtml }, style: { objectFit: question.imageFit }, event: { load: question.onContentLoaded, error: $data.onErrorHandler }\"/>\n                  <!-- /ko -->\n                  <!-- ko if: ($data.locImageLink.koRenderedHtml() && !$data.contentNotLoaded && question.contentMode === \"video\") -->\n                  <video controls data-bind=\"css: question.cssClasses.image, attr: { src: $data.locImageLink.koRenderedHtml, width: question.renderedImageWidth, height: question.renderedImageHeight }, style: { objectFit: question.imageFit }, event: { loadedmetadata: question.onContentLoaded, error: $data.onErrorHandler }\"></video>\n                  <!-- /ko -->\n                  <!-- ko if: !$data.imageLink || $data.contentNotLoaded -->\n                  <div data-bind=\"css: question.cssClasses.itemNoImage, style: { width: question.renderedImageWidth, height: question.renderedImageHeight, objectFit: question.imageFit}\">\n                    <!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.itemNoImageSvgIcon, iconName: question.cssClasses.itemNoImageSvgIconId, size: 48 } } --><!-- /ko -->\n                  </div>\n                  <!-- /ko -->\n                  \n                </div>\n                <!-- ko if: question.showLabel -->\n                <span data-bind=\"css: question.cssClasses.itemText\">\n                  <!-- ko template: { name: 'survey-string', data: item.locText } -->\n                  <!-- /ko -->\n                </span>\n                <!-- /ko -->\n            </div>\n        </label>\n    </div>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-matrix.html":
/*!*****************************************************!*\
  !*** ./src/knockout/templates/question-matrix.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-matrix\">\n  <div data-bind=\"css: question.cssClasses.tableWrapper\">\n    <fieldset>\n      <legend\n        data-bind=\"attr: { 'aria-label': question.locTitle.renderedHtml }\"\n      ></legend>\n      <table data-bind=\"css: question.getTableCss()\">\n        <!-- ko if: question.showHeader -->\n        <thead>\n          <tr>\n            <!-- ko if: question.hasRows -->\n            <td data-bind=\"visible: question.hasRows\"></td>\n            <!-- /ko -->\n            <!-- ko foreach: question.koVisibleColumns -->\n            <th data-bind=\"css: question.cssClasses.headerCell, style: { minWidth: question.columnMinWidth, width: question.columnMinWidth }\">\n              <!-- ko component: { name: question.getColumnHeaderWrapperComponentName($data), params: { componentData:  question.getColumnHeaderWrapperComponentData($data), templateData: { data: $data } } } -->\n                <!-- ko template: { name: 'survey-string', data: $data.locText } --><!-- /ko -->\n              <!-- /ko -->\n            </th>\n            <!-- /ko -->\n          </tr>\n        </thead>\n        <!-- /ko -->\n        <tbody>\n          <!-- ko foreach: { data: question.koVisibleRows, as: 'row' } -->\n          <tr data-bind=\"css: row.rowClasses\">\n            <td\n              data-bind=\"visible: question.hasRows, css: question.cssClasses.rowTextCell, style: {  minWidth: question.rowTitleWidth, width: question.rowTitleWidth }\"\n            >\n              <!-- ko component: { name: question.getRowHeaderWrapperComponentName($data), params: { componentData:  question.getRowHeaderWrapperComponentData($data), templateData: { data: $data } } } -->\n                <!-- ko template: { name: 'survey-string', data: row.locText } -->\n                <!-- /ko -->\n              <!-- /ko -->\n            </td>\n            <!-- ko foreach: question.koVisibleColumns -->\n            <!-- ko if: question.hasCellText -->\n            <td\n              data-bind=\"css: question.getItemClass(row, $data), click: function() { if (!question.isInputReadOnly) { row.cellClick($data); } }\"\n            >\n              <!-- ko template: { name: 'survey-string', data: question.getCellDisplayLocText(row.name, $data) } -->\n              <!-- /ko -->\n            </td>\n            <!-- /ko -->\n            <!-- ko if: !question.hasCellText -->\n            <td\n              data-bind=\"attr: { 'data-responsive-title': $data.locText.renderedHtml }, css: question.cssClasses.cell\"\n            >\n              <label data-bind=\"css: question.getItemClass(row, $data), event: { mousedown: question.koMouseDown }\" >\n                <input\n                  type=\"radio\"\n                  data-bind=\"css: question.cssClasses.itemValue, attr: { name: row.fullName, 'aria-required': question.ariaRequired, 'aria-label': $data.locText.renderedHtml, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy, id: question.inputId + '_' + row.name + '_' + $index() }, checkedValue: $data.value, checked: row.value, enable: !question.isInputReadOnly\"\n                />\n                <span data-bind=\"css: question.cssClasses.materialDecorator\">\n                    <!-- ko if: question.itemSvgIcon -->\n                      <svg data-bind=\"css:question.cssClasses.itemDecorator\">\n                        <use data-bind=\"attr:{'xlink:href':question.itemSvgIcon}\" xlink:href=''></use>\n                      </svg>  \n                    <!-- /ko -->\n                </span>\n                <span data-bind=\"visible: question.isMobile, css: question.cssClasses.cellResponsiveTitle\">\n                  <!-- ko template: { name: 'survey-string', data: $data.locText } --><!-- /ko -->\n                </span>\n              </label>\n            </td>\n            <!-- /ko -->\n            <!-- /ko -->\n          </tr>\n          <!-- /ko -->\n        </tbody>\n      </table>\n    </fieldset>\n  </div>\n</script>\n<script type=\"text/html\" id=\"survey-text\">\n  <span data-bind=\"text:$data.renderedHtml\"></span>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-matrixdropdown.html":
/*!*************************************************************!*\
  !*** ./src/knockout/templates/question-matrixdropdown.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-matrixdropdown\">\n  <!-- ko template: { name: 'survey-matrixtable' } --><!--/ko-->\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-matrixdynamic.html":
/*!************************************************************!*\
  !*** ./src/knockout/templates/question-matrixdynamic.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-matrixdynamic\">\n    <div>\n      <!-- ko if: question.koTable().showAddRowOnTop -->\n      <div\n        data-bind=\"css: question.cssClasses.footer\"\n      >\n        <button\n          type=\"button\"\n          data-bind=\"click: question.isDesignMode ? undefined : question.koAddRowClick, css: question.getAddRowButtonCss(), disable: question.isInputReadOnly\"\n        >\n          <!-- ko template: { name: 'survey-string', data: question.locAddRowText } --><!-- /ko -->\n          <span data-bind=\"css: question.cssClasses.iconAdd\"></span>\n        </button>\n      </div>\n      <!-- /ko -->\n      <!-- ko template: { name: 'survey-matrixtable' } -->\n      <!--/ko-->\n      <!-- ko ifnot: question.koTable().showTable -->\n      <div data-bind=\"css: question.cssClasses.emptyRowsSection\">\n        <div data-bind=\"css: question.cssClasses.emptyRowsText\">\n          <!-- ko template: { name: 'survey-string', data: question.locEmptyRowsText } --><!-- /ko -->\n        </div>\n        <!-- ko if: question.koTable().showAddRow -->  \n        <button\n          type=\"button\"\n          data-bind=\"click:question.koAddRowClick, css: question.getAddRowButtonCss(true), disable: question.isInputReadOnly\"\n        >\n          <!-- ko template: { name: 'survey-string', data: question.locAddRowText } --><!-- /ko -->\n          <span data-bind=\"css: question.cssClasses.iconAdd\"></span>\n        </button>\n        <!-- /ko -->\n      </div>\n      <!-- /ko -->\n      <!-- ko if: question.koTable().showAddRowOnBottom -->\n      <div\n        data-bind=\"css: question.cssClasses.footer\"\n      >\n        <button\n          type=\"button\"\n          data-bind=\"click: question.koAddRowClick, css: question.getAddRowButtonCss(), disable: question.isInputReadOnly\"\n        >\n          <!-- ko template: { name: 'survey-string', data: question.locAddRowText } --><!-- /ko -->\n          <span data-bind=\"css: question.cssClasses.iconAdd\"></span>\n        </button>\n      </div>\n      <!-- /ko -->\n  </div>\n</script>\n<script type=\"text/html\" id=\"survey-matrixcell\">\n  <td\n    data-bind=\"css: $data.className, style: { minWidth: $data.minWidth, width: $data.width }, attr: { 'data-responsive-title': headers, title: $data.getTitle(), colspan: $data.colSpans }, event: {focusin: $data.focusIn }\"\n  >\n    <div data-bind=\"visible: question.isVisible, css: $parentContext.question.cssClasses.cellQuestionWrapper\">\n      <!-- ko if: $data.isOtherChoice -->\n        <div data-bind=\"css: question.getCommentAreaCss(true), template: { name: 'survey-other', data: {'question': question, 'visible': true } }\"></div>\n      <!-- /ko -->\n      <!-- ko if: $data.isCheckbox -->\n        <!-- ko let: { question: $data.matrix.getCellTemplateData($data) } -->\n          <!-- ko component: { name: $data.matrix.getCellWrapperComponentName($data), params: { componentData:  $data.matrix.getCellWrapperComponentData($data), templateData: { name:  'survey-checkbox-item', data: item } } } -->\n          <!-- /ko -->\n        <!-- /ko -->\n      <!-- /ko -->\n      <!-- ko if: $data.isRadio -->\n        <!-- ko let: { question: $data.matrix.getCellTemplateData($data) } -->\n          <!-- ko component: { name: $data.matrix.getCellWrapperComponentName($data), params: { componentData:  $data.matrix.getCellWrapperComponentData($data), templateData: { name:  'survey-radiogroup-item', data: item } } } -->\n          <!-- /ko -->  \n        <!-- /ko -->   \n      <!-- /ko -->\n      <!-- ko ifnot: $data.isChoice -->\n      <!-- ko if: question.isDefaultRendering() -->\n        <!-- ko let: { question: $data.matrix.getCellTemplateData($data) } -->\n        <!-- ko component: { name: $data.matrix.getCellWrapperComponentName($data), params: { componentData:  $data.matrix.getCellWrapperComponentData($data), templateData: { name: question.koTemplateName(), data: question, afterRender: function(el) { $data.matrix.koCellQuestionAfterRender(el, $data); } } } } -->\n        <!-- /ko -->\n        <!-- /ko -->\n      <!-- /ko -->\n      <!-- ko ifnot: question.isDefaultRendering() -->\n        <!-- ko component: { name: question.getComponentName(), params: { question: question } } -->\n        <!-- /ko -->\n      <!-- /ko -->\n      <!-- /ko -->\n    </div>\n  </td>\n</script>\n<script type=\"text/html\" id=\"survey-matrixtable\">\n<div\n  data-bind=\"visible: question.koTable().showTable, css: question.cssClasses.tableWrapper, style: { overflowX: question.showHorizontalScroll ? 'scroll': '' }\"\n>\n  <table data-bind=\"css: question.getTableCss()\">\n    <!-- ko if: question.koTable().showHeader -->\n    <thead>\n      <tr>\n        <!-- ko foreach: question.koTable().headerRow.cells -->\n          <!-- ko if: $data.hasTitle -->\n            <th\n              data-bind=\"style: { minWidth: $data.minWidth, width: $data.width }, css: $data.className\"\n            >\n              <!-- ko component: { name: question.getColumnHeaderWrapperComponentName($data), params: { componentData:  question.getColumnHeaderWrapperComponentData($data), templateData: { data: $data } } } -->\n                <!-- ko template: { name: 'survey-string', data: $data.locTitle } --><!-- /ko -->\n                <!-- ko if: $data.column && $data.column.isRenderedRequired -->\n                <span>&nbsp</span>\n                <span data-bind=\"css: question.cssClasses.cellRequiredText, text: $data.column.requiredText\"></span>\n                <!-- /ko -->\n              <!-- /ko -->\n            </th>\n          <!-- /ko -->\n          <!-- ko ifnot: $data.hasTitle -->\n            <td data-bind=\"style: { minWidth: $data.minWidth, width: $data.width }, css: $data.className\"></td>\n          <!-- /ko -->\n        <!-- /ko -->\n      </tr>\n    </thead>\n    <!-- /ko -->\n    <tbody>\n      <!-- ko foreach: question.koTable().rows -->\n      <!-- ko ifnot: ($parent.detailPanelMode === \"popup\" && $data.isDetailRow) || !$data.visible-->\n      <tr data-bind=\"css: $data.className, attr: attributes, event: { pointerdown: function (model, event) { question.onPointerDown(event, row); return true;} }\">\n        <!-- ko foreach: $data.cells -->\n        <!-- ko if: $data.isDragHandlerCell -->\n        <td data-bind=\"css:$data.className, attr: {colspan: $data.colSpans}\">\n          <!-- ko component: { name: 'sv-matrix-drag-drop-icon', params: { item: { data: { row: row, question: question } } }} -->\n          <!-- /ko -->\n        </td>\n        <!-- /ko -->\n        <!-- ko if: $data.isActionsCell -->\n        <td data-bind=\"css: $data.className, attr: { colspan: $data.colSpans, 'data-responsive-title': headers, title: $data.getTitle() }\">\n          <!-- ko component: { name: 'sv-action-bar', params: { model: $data.item.getData(), handleClick: false } } -->\n          <!-- /ko -->\n        </td>\n        <!-- /ko -->\n        <!-- ko if: $data.isEmpty -->\n        <td data-bind=\"css: $data.className, attr: { colspan: $data.colSpans, 'data-responsive-title': headers, title: $data.getTitle() }\"></td>\n        <!-- /ko -->\n        <!-- ko if: $data.hasPanel -->\n        <td data-bind=\"css: $data.className, attr: { colspan: $data.colSpans }\">\n          <!-- ko component: { name: $data.panel.survey.getElementWrapperComponentName($data.panel), \n            params: { componentData:  $data.panel.survey.getElementWrapperComponentData($data.panel), \n            templateData: { name: $data.panel.koElementType, data: $data.panel, afterRender: question.koPanelAfterRender } } } \n          -->\n          <!-- /ko -->\n        </td>\n        <!-- /ko -->\n        <!-- ko if: $data.isErrorsCell -->\n        <td data-bind=\"css: $data.className, attr: { colspan: $data.colSpans, 'data-responsive-title': headers, title: $data.getTitle() }\">\n            <!-- ko template: { name: 'survey-question-errors', data: $data.question, as: 'question' } -->\n            <!-- /ko -->\n        </td>\n        <!-- /ko -->\n        <!-- ko if: $data.hasQuestion -->\n        <!-- ko template: { name: 'survey-matrixcell', afterRender: function(els) { $data.matrix.koCellAfterRender(els, $data); } } --><!-- /ko -->\n        <!-- /ko -->\n        <!-- ko if: $data.hasTitle -->\n        <td\n          data-bind=\"css: $data.className, style: { minWidth: $data.minWidth, width: $data.width }, attr: { colspan: $data.colSpans, 'data-responsive-title': headers, title: $data.getTitle() }\"\n        >\n          <!-- ko component: { name: question.getRowHeaderWrapperComponentName($data), params: { componentData:  question.getRowHeaderWrapperComponentData($data), templateData: { data: $data } } } -->\n          <!-- ko template: { name: 'survey-string', data: $data.locTitle } --><!-- /ko -->\n          <!-- ko if: $data.requiredText -->\n          <span data-bind=\"css: question.cssClasses.cellRequiredText, text: $data.requiredText\"></span>\n          <!-- /ko -->\n          <!-- /ko -->\n        </td>\n        <!-- /ko -->\n        <!-- /ko -->\n      </tr>\n\n      <!-- /ko -->\n      <!-- /ko -->\n    </tbody>\n    <!-- ko if:question.koTable().hasFooter -->\n    <tfoot>\n      <tr>\n        <!-- ko foreach: question.koTable().footerRow.cells -->\n          <!-- ko if: $data.hasQuestion -->\n            <!-- ko template: { name: 'survey-matrixcell', afterRender: function(els) { $data.matrix.koCellAfterRender(els, $data); } } --><!-- /ko -->\n          <!-- /ko -->\n          <!-- ko if: $data.hasTitle -->\n          <td>\n            <!-- ko template: { name: 'survey-string', data: $data.locTitle } --><!-- /ko -->\n          </td>\n          <!-- /ko -->\n        <!-- /ko -->\n      </tr>\n    </tfoot>\n    <!-- /ko -->\n  </table>\n</div>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-multipletext.html":
/*!***********************************************************!*\
  !*** ./src/knockout/templates/question-multipletext.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-multipletext\">\n  <table data-bind=\"css: question.getQuestionRootCss()\">\n    <tbody data-bind=\"foreach: { data:  question.getRows(), as: 'row' }\">\n      <!-- ko if: row.isVisible -->\n      <tr data-bind=\"foreach: { data: row.cells, as: 'cell' }, css: question.cssClasses.row\">\n        <td data-bind=\"css: cell.className\">  \n          <!-- ko ifnot: cell.isErrorsCell -->\n          <label data-bind=\"css: question.getItemLabelCss(item)\">\n              <span data-bind=\"css: question.koItemTitleCss\">\n                <!-- ko component: { name: 'survey-element-title-content', params: {element: cell.item.editor} } --><!-- /ko -->\n              </span>\n              <div data-bind=\"css: question.koItemCss, event: {focusin: cell.item.focusIn }\">\n                <!-- ko template: { name: item.editor.koTemplateName(), data: cell.item.editor, as: 'question', afterRender: cell.item.editor.koQuestionAfterRender } -->\n                <!-- /ko -->\n              </div>\n          </label>\n          <!-- /ko -->\n          <!-- ko if: cell.isErrorsCell -->\n            <!-- ko template: { name: 'survey-question-errors', data: cell.item.editor, as: 'question' } -->\n            <!-- /ko -->\n          <!-- /ko -->\n        </td>\n      </tr>\n      <!-- /ko -->\n    </tbody>\n  </table>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-paneldynamic-navigator.html":
/*!*********************************************************************!*\
  !*** ./src/knockout/templates/question-paneldynamic-navigator.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-paneldynamic-navigator\">\n  <div style=\"clear: both;\">\n        <div data-bind=\"css: question.cssClasses.progressContainer\">\n          <!-- ko component: { name: 'sv-paneldynamic-prev-btn', params: { question: question }} --><!-- /ko -->\n          <!-- ko if: question.koIsRange -->\n            <!-- ko template: { name: 'survey-question-paneldynamic-progress', data: question, as: 'question'} --><!-- /ko -->\n          <!-- /ko -->\n          <!-- ko component: { name: 'sv-paneldynamic-next-btn', params: { question: question }} --><!-- /ko -->\n        </div>\n          <!-- ko component: { name: 'sv-paneldynamic-add-btn', params: { question: question }} --><!-- /ko -->\n        <div data-bind=\"text: question.koProgressText, css: question.cssClasses.progressText\"></div>\n      </div>\n</script>\n<script type=\"text/html\" id=\"survey-question-paneldynamic-progress\">\n  <div data-bind=\"css: question.cssClasses.progress\">\n    <div\n      data-bind=\"css: question.cssClasses.progressBar, style: { width: question.koProgress }\"\n      role=\"progressbar\"\n    ></div>\n  </div>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-paneldynamic.html":
/*!***********************************************************!*\
  !*** ./src/knockout/templates/question-paneldynamic.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-paneldynamic\">\n  <div data-bind=\"css: question.cssClasses.root\">\n    <!-- ko if: question.getShowNoEntriesPlaceholder() -->\n      <div data-bind=\"css: question.cssClasses.noEntriesPlaceholder\">\n        <span>\n          <!-- ko template: { name: 'survey-string', data: locNoEntriesText } --><!-- /ko -->\n        </span>\n          <!-- ko component: { name: 'sv-paneldynamic-add-btn', params: { question: question }} -->\n          <!-- /ko -->\n        </div>\n    <!-- /ko -->\n    <!-- ko if: question.koIsList() -->\n      <!-- ko foreach: { data: question.panels } -->\n        <div data-bind=\"css: question.getPanelWrapperCss()\">\n          <!-- ko let: { question: $data } -->\n            <!-- ko component: { name: survey.getElementWrapperComponentName(question), params: { componentData:  survey.getElementWrapperComponentData(question), templateData: { name: question.koElementType, data: question, afterRender: $parent.koPanelAfterRender } } } -->\n            <!-- /ko -->\n          <!-- /ko -->\n          <!-- ko if: question.panelRemoveButtonLocation === 'right' && question.koCanRemovePanel() && $data.state != 'collapsed'-->\n            <!-- ko component: { name: 'sv-paneldynamic-remove-btn', params: { question: question, panel: $data } } -->\n            <!-- /ko -->\n          <!-- /ko -->\n          \n        </div>\n        <!-- ko if: question.showSeparator($index()) -->\n        <hr data-bind=\"css: question.cssClasses.separator\"/>\n        <!-- /ko -->\n      <!-- /ko -->\n      <!-- ko if: question.showLegacyNavigation -->\n        <!-- ko component: { name: 'sv-paneldynamic-add-btn', params: { question: question }} --><!-- /ko -->\n      <!-- /ko -->\n    <!-- /ko -->\n    <!-- ko ifnot: question.koIsList()  -->\n      <!-- ko if: question.koIsProgressTop-->\n        <!-- ko if: !question.showLegacyNavigation && question.koIsRange -->\n          <!-- ko template: { name: 'survey-question-paneldynamic-progress', data: question, as: 'question'} -->\n          <!-- /ko -->\n        <!-- /ko -->\n        <!-- ko if: question.showLegacyNavigation -->\n        <div data-bind=\"css: question.cssClasses.progressTop\">\n          <!-- ko template: { name: 'survey-question-paneldynamic-navigator', data: question, as: 'question'} -->\n          <!-- /ko -->\n        </div>\n        <!-- /ko -->\n      <!-- /ko -->\n      <!-- ko if: question.koPanel() -->\n      <div data-bind=\"css: question.getPanelWrapperCss()\">\n        <!-- ko let: { question: question.koPanel() } -->\n          <!-- ko component: { name: question.survey.getElementWrapperComponentName(question), params: { componentData:  question.survey.getElementWrapperComponentData(question), templateData: { name: question.koElementType, data: question, afterRender: $parent.koPanelAfterRender } } } -->\n          <!-- /ko -->\n        <!-- /ko -->\n        <!-- ko if: question.panelRemoveButtonLocation === 'right'-->\n          <!-- ko template: { name: 'survey-question-paneldynamic-remove-btn', data: { question: question, panel: question.koPanel() }, as: 'question'} -->\n          <!-- /ko -->\n        <!-- /ko-->\n      </div>\n      <!-- /ko -->\n      <!-- ko if: question.showLegacyNavigation && question.koIsProgressBottom--> \n      <div data-bind=\"css: question.cssClasses.progressBottom\">\n        <!-- ko template: { name: 'survey-question-paneldynamic-navigator', data: question, as: 'question'} -->\n        <!-- /ko -->\n      </div>\n      <!-- /ko -->\n    <!-- /ko -->\n    <!-- ko if: question.showNavigation -->\n    <div data-bind=\"css: question.cssClasses.footer\">\n      <hr data-bind=\"css: question.cssClasses.separator\"/>\n      <!-- ko if: question.koIsRange() && question.koIsProgressBottom -->\n         <!-- ko template: { name: 'survey-question-paneldynamic-progress', data: question, as: 'question'} -->\n         <!-- /ko -->\n      <!-- /ko -->\n      <!-- ko if: question.footerToolbar.visibleActions.length -->\n      <div data-bind=\"css: question.cssClasses.footerButtonsContainer\">\n        <!-- ko component: { name: \"sv-action-bar\", params: { model: question.footerToolbar } } -->\n        <!-- /ko -->\n      </div>\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-radiogroup.html":
/*!*********************************************************!*\
  !*** ./src/knockout/templates/question-radiogroup.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-radiogroup\">\n\n  <fieldset data-bind=\"css: question.getSelectBaseRootCss(), attr: { 'role': question.a11y_input_ariaRole, 'aria-required': question.a11y_input_ariaRequired, 'aria-labelledby': question.a11y_input_ariaLabelledBy, 'aria-invalid': question.a11y_input_ariaInvalid, 'aria-describedby': question.a11y_input_ariaDescribedBy, 'aria-label': question.a11y_input_ariaLabel }\">\n    <!-- ko ifnot: question.hasColumns -->\n      <!-- ko if: question.blockedRow -->\n      <div data-bind=\"css: question.cssClasses.rootRow\">\n        <!-- ko foreach: { data: question.dataChoices, as: 'item', afterRender: question.koAfterRender }  -->\n        <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } -->\n        <!-- /ko -->\n        <!-- /ko -->\n      </div>\n      <!-- /ko -->\n      <!-- ko ifnot: question.blockedRow -->\n      <!-- ko foreach: { data: question.bodyItems, as: 'item', afterRender: question.koAfterRender }  -->\n        <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } -->\n        <!-- /ko -->\n      <!-- /ko -->\n      <!-- /ko -->\n    <!-- /ko -->\n    <!-- ko if: question.hasColumns -->\n      <div data-bind=\"css: question.cssClasses.rootMultiColumn\">\n\n        <!-- ko foreach: question.columns -->\n        <div data-bind=\"css: question.getColumnClass()\" role=\"presentation\">\n          <!-- ko foreach: { data: $data, as: 'item', afterRender: question.koAfterRender } -->\n            <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } -->\n            <!-- /ko -->\n          <!-- /ko -->\n        </div>\n        <!-- /ko -->\n      </div>\n    <!-- /ko -->\n    <!-- ko if: question.hasFootItems  -->\n      <!-- ko foreach: { data: question.footItems, as: 'item', afterRender: question.koAfterRender }  -->\n        <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } -->\n        <!-- /ko -->\n      <!-- /ko -->\n    <!-- /ko -->\n\n    <!-- ko if: question.hasOther && question.isOtherSelected -->\n      <div data-bind=\"css: question.getCommentAreaCss(true), template: { name: 'survey-other', data: {'question': question, 'visible': question.isOtherSelected } }\"></div>\n    <!-- /ko -->\n    <!-- ko if: question.showClearButtonInContent -->\n    <div>\n      <input\n        type=\"button\"\n        data-bind=\"click:question.clearValue, css: question.cssClasses.clearButton, value: question.clearButtonCaption\"\n      />\n    </div>\n    <!-- /ko -->\n  </fieldset>\n</script>\n<script type=\"text/html\" id=\"survey-radiogroup-item\">\n  <div role=\"presentation\" data-bind=\"css: question.getItemClass($data)\">\n    <label data-bind=\"css: question.getLabelClass($data), event: { mousedown: question.koMouseDown }\">\n      <input\n        type=\"radio\"\n        data-bind=\"attr: { name: question.questionName, id: question.getItemId($data), 'aria-describedby': question.ariaDescribedBy }, checkedValue: $data.value, checked: question.renderedValue, enable: question.getItemEnabled($data), css: question.cssClasses.itemControl\"\n      />\n      <!-- ko if: question.cssClasses.materialDecorator -->\n      <span data-bind=\"css: question.cssClasses.materialDecorator\">\n        <!-- ko if: question.itemSvgIcon -->\n        <svg data-bind=\"css:question.cssClasses.itemDecorator\">\n          <use data-bind=\"attr:{'xlink:href':question.itemSvgIcon}\" xlink:href=''></use>\n        </svg>\n        <!-- /ko -->\n      </span>\n      <!-- /ko -->\n      <!-- ko if: !$data.hideCaption -->\n      <span data-bind=\"css: question.getControlLabelClass($data)\">\n        <!-- ko template: { name: 'survey-string', data: $data.locText } -->\n        <!-- /ko -->\n      </span>\n      <!-- /ko -->\n    </label>\n  </div>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-ranking.html":
/*!******************************************************!*\
  !*** ./src/knockout/templates/question-ranking.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-ranking\">\n   <!-- ko ifnot: question.selectToRankEnabled -->\n  <div data-bind=\"css: question.rootClass\">\n    <!-- ko foreach: { data: question.rankingChoices, as: 'item', afterRender: question.koAfterRender } -->\n      <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: 'survey-ranking-item', data: item } } } -->\n      <!-- /ko -->\n    <!-- /ko -->\n  </div>\n  <!-- /ko -->\n\n  <!-- ko if: question.selectToRankEnabled -->\n  <div data-bind=\"css: question.rootClass\">\n    <div data-bind=\"css: question.getContainerClasses('from')\" data-ranking=\"from-container\">\n      <!-- ko foreach: { data: question.unRankingChoices, as: 'item', afterRender: question.koAfterRender } -->\n        <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { unrankedItem: true, componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: 'survey-ranking-item', data: item } } } -->\n        <!-- /ko -->\n      <!-- /ko -->\n      <!-- ko if: question.unRankingChoices.length === 0 -->\n        <div data-bind=\"css: cssClasses.containerPlaceholder, text: question.selectToRankEmptyRankedAreaText\"></div>\n      <!-- /ko -->\n    </div>\n    <div data-bind=\"css: cssClasses.containersDivider\"></div>\n    <div data-bind=\"css: question.getContainerClasses('to')\" data-ranking=\"to-container\">\n      <!-- ko foreach: { data: question.rankingChoices, as: 'item', afterRender: question.koAfterRender } -->\n        <!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: 'survey-ranking-item', data: item } } } -->\n        <!-- /ko -->\n      <!-- /ko -->\n      <!-- ko if: question.rankingChoices.length === 0 -->\n      <div data-bind=\"css: cssClasses.containerPlaceholder, text: question.selectToRankEmptyUnrankedAreaText\"></div>\n      <!-- /ko -->\n    </div>\n  </div>\n\n  <!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"survey-ranking-item\">\n  <div\n    data-bind=\"event: { keydown: question.koHandleKeydown, pointerdown: question.koHandlePointerDown}, css: question.getItemClass($data), attr: {tabindex: question.getItemTabIndex($data), 'data-sv-drop-target-ranking-item': $index() }\"\n  >\n    <div tabindex=\"-1\" style=\"outline: none;\">\n      <div data-bind=\"css: question.cssClasses.itemGhostNode\"></div>\n      <div data-bind=\"css: question.cssClasses.itemContent\">\n        <div data-bind=\"css: question.cssClasses.itemIconContainer\">\n          <svg\n            width=\"10\"\n            height=\"16\"\n            viewBox=\"0 0 10 16\"\n            data-bind=\"css: question.getIconHoverCss()\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              d=\"M6 2C6 0.9 6.9 0 8 0C9.1 0 10 0.9 10 2C10 3.1 9.1 4 8 4C6.9 4 6 3.1 6 2ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z\"\n            />\n          </svg>\n          <svg\n            width=\"10\"\n            height=\"24\"\n            viewBox=\"0 0 10 24\"\n            data-bind=\"css: question.getIconFocusCss()\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path d=\"M10 5L5 0L0 5H4V9H6V5H10Z\" />\n            <path d=\"M6 19V15H4V19H0L5 24L10 19H6Z\" />\n          </svg>\n        </div>\n        <div\n          data-bind=\"css: question.getItemIndexClasses(item), text: $parent.unrankedItem ? '' : question.getNumberByIndex($index())\"\n        ></div>\n        <div data-bind=\"css: question.cssClasses.controlLabel\">\n          <!-- ko template: { name: 'survey-string', data: $data.locText } -->\n          <!-- /ko -->\n        </div>\n      </div>\n    </div>\n  </div>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-rating.html":
/*!*****************************************************!*\
  !*** ./src/knockout/templates/question-rating.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-rating\">\n    <div data-bind=\"css: question.ratingRootCss\">\n        <fieldset role=\"radiogroup\">\n            <legend role=\"presentation\" class=\"sv-hidden\"></legend>\n            <!-- ko if: question.hasMinLabel-->\n            <span data-bind=\"css: question.cssClasses.minText\">\n              <!-- ko template: { name: 'survey-string', data: question.locMinRateDescription } -->\n              <!-- /ko -->\n              </span>\n            <!-- /ko -->\n            <!-- ko foreach: question.renderedRateItems -->\n              <!-- ko component: { name: question.itemComponent, params: { question: question, item: $data, index: $index() } } -->\n              <!-- /ko -->\n              \n            <!-- /ko -->\n            <!-- ko if: question.hasMaxLabel-->\n            <span data-bind=\"css: question.cssClasses.maxText\">\n              <!-- ko template: { name: 'survey-string', data: question.locMaxRateDescription } -->\n              <!-- /ko -->\n              </span>\n            <!-- /ko -->\n\n        </fieldset>\n    </div>\n  </fieldset>\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/question-signaturepad.html":
/*!***********************************************************!*\
  !*** ./src/knockout/templates/question-signaturepad.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-signaturepad\">\n    <div data-bind=\"css: question.cssClasses.root, style: { height: signatureHeight, width: signatureWidth }\">\n        <div \n            data-bind=\"text: placeHolderText, css: question.cssClasses.placeholder, visible: $data.needShowPlaceholder()\">\n        </div>\n        <div>\n            <!-- ko if: question.backgroundImage -->\n            <img data-bind=\"attr: { src: question.backgroundImage, width: question.signatureWidth, height: question.signatureHeight }, css: question.cssClasses.backgroundImage\">\n            <!-- /ko -->\n            <canvas tabindex='0' data-bind=\"css: question.cssClasses.canvas\"></canvas>\n        </div>\n        <!-- ko if: question.canShowClearButton -->\n        <div data-bind=\"css: question.cssClasses.controls\">\n            <button type='button'\n                data-bind=\"click: question.clearValue, css: question.cssClasses.clearButton, attr: { title: question.clearButtonCaption }\">\n                    <!-- ko ifnot: question.cssClasses.clearButtonIconId -->\n                        <span>✖</span>\n                    <!-- /ko -->\n                    <!-- ko if: question.cssClasses.clearButtonIconId -->\n                        <sv-svg-icon params=\"iconName: question.cssClasses.clearButtonIconId, size: 'auto'\"></sv-svg-icon>\n                    <!-- /ko -->\n            </button>\n        </div>\n        <!-- /ko -->\n    </div>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-tagbox.html":
/*!*****************************************************!*\
  !*** ./src/knockout/templates/question-tagbox.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-tagbox\">\n  <div data-bind=\"css: question.renderCssRoot\">\n    <!-- ko component: { name: 'sv-tagbox', params: { question: question } } -->\n    <!-- /ko -->\n  <!-- ko if: question.isOtherSelected -->\n  <div\n    data-bind=\"css: question.getCommentAreaCss(true), template: { name: 'survey-other', data: {'question': question, 'visible': question.isOtherSelected } }, style: {display: question.isFlowLayout ? 'inline': ''}\">\n  </div>\n  <!-- /ko -->\n  </div>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question-text.html":
/*!***************************************************!*\
  !*** ./src/knockout/templates/question-text.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-text\">\n  <!--ko if: !question.dataListId && !question.isReadOnlyRenderDiv()-->\n    <!-- ko template: { name: 'survey-question-text-input' } --><!-- /ko -->\n  <!--/ko-->\n  <!--ko if: question.dataListId && !question.isReadOnlyRenderDiv()-->\n  <div>\n    <!-- ko template: { name: 'survey-question-text-input' } --><!-- /ko -->\n    <datalist data-bind=\"attr: {id: question.dataListId}\">\n    <!-- ko foreach: question.dataList -->\n      <option data-bind=\"value:$data\"></option>\n    <!--/ko-->\n    </datalist>\n  </div>\n  <!--/ko-->\n  <!--ko if: question.isReadOnlyRenderDiv() -->\n  <div data-bind=\"text: question.value\"></div>\n  <!--/ko-->\n</script>\n<script type=\"text/html\" id=\"survey-question-text-input\">\n  <input\n  data-bind=\"disable: question.isInputReadOnly, \n    style: question.inputStyle, \n    attr: { type: question.inputType, size: question.renderedInputSize, id: question.inputId, placeholder: question.renderedPlaceholder, maxLength: question.getMaxLength(), min: question.renderedMin, max: question.renderedMax, step: question.renderedStep, 'aria-required': question.a11y_input_ariaRequired, 'aria-invalid': question.ariaInvalid, 'aria-label': question.a11y_input_ariaLabel, 'aria-labelledby': question.a11y_input_ariaLabelledBy, 'aria-invalid': question.a11y_input_ariaInvalid, 'aria-describedby': question.a11y_input_ariaDescribedBy, autocomplete: question.autocomplete, list:question.dataListId }, \n    event: { keydown: koOnKeyDown, keyup: koOnKeyUp, change: koOnChange, compositionupdate: koOnCompositeUpdate, blur: koOnBlur, focus: koOnFocus },\n    value: question.koReadOnlyValue,\n    css: question.getControlClass()\"/>\n  <!--ko if: question.getMaxLength() -->\n  <!-- ko component: { name: 'sv-character-counter', params: { counter: question.characterCounter, remainingCharacterCounter: question.cssClasses.remainingCharacterCounter } } -->\n  <!-- /ko -->\n  <!--/ko-->\n</script>";

/***/ }),

/***/ "./src/knockout/templates/question.html":
/*!**********************************************!*\
  !*** ./src/knockout/templates/question.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question\">\n<div data-bind=\"css: question.getRootCss(), style: question.getRootStyle(), attr: { id: question.id, 'data-name': question.name, role: question.ariaRole, 'aria-required': question.ariaRequired, 'aria-invalid': question.ariaInvalid, 'aria-labelledby': question.ariaLabelledBy, 'aria-expanded': question.ariaExpanded}\">\n  <!-- ko if: question.showErrorsAboveQuestion -->\n    <!-- ko template: { name: 'survey-question-errors', data: question } -->\n    <!-- /ko -->\n  <!-- /ko -->\n  <!-- ko if: question.hasTitleOnLeftTop -->\n    <!--ko template: { name: 'survey-question-title', data: question  } -->\n    <!-- /ko -->\n  <!-- /ko -->\n  <!-- ko component: { name: question.survey.getQuestionContentWrapperComponentName(question), params: { componentData:  question.survey.getElementWrapperComponentData(question), templateData: { name: 'survey-question-content', data: question } } } -->\n  <!-- /ko -->\n  <!-- ko if: question.showErrorsBelowQuestion -->\n    <!-- ko template: { name: 'survey-question-errors', data: question } -->\n    <!-- /ko -->\n  <!-- /ko -->\n  </script>\n";

/***/ }),

/***/ "./src/knockout/templates/questioncontent.html":
/*!*****************************************************!*\
  !*** ./src/knockout/templates/questioncontent.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-content\">\n<div data-bind=\"visible: !question.isCollapsed, css: question.cssContent, event: {focusin: question.focusIn }\" role=\"presentation\">\n    <!-- ko if: question.showErrorOnTop -->\n      <!-- ko template: { name: 'survey-question-errors', data: question } -->\n      <!-- /ko -->\n    <!-- /ko -->\n    <!-- ko if: question.isDefaultRendering() -->\n      <!-- ko template: { name: question.koTemplateName(), data: question, afterRender: question.koQuestionAfterRender } -->\n      <!-- /ko -->\n    <!-- /ko -->\n    <!-- ko ifnot: question.isDefaultRendering() -->\n      <!-- ko component: { name: getComponentName(), params: { question: question } } -->\n      <!-- /ko -->\n    <!-- /ko -->\n    <!-- ko if: question.hasComment -->\n    <div data-bind=\"css: question.getCommentAreaCss()\">\n      <div>\n        <!-- ko template: { name: 'survey-string', data: question.locCommentText } -->\n        <!-- /ko -->\n      </div>\n      <!-- ko template: { name: 'survey-comment',  data: {'question': question, 'visible': true } } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n    <!-- ko if: question.showErrorOnBottom -->\n      <!-- ko template: { name: 'survey-question-errors', data: question } -->\n      <!-- /ko -->\n    <!-- /ko -->\n    <!-- ko if: question.hasDescriptionUnderInput -->\n    <div data-bind=\"css: cssClasses.descriptionUnderInput\">\n      <!-- ko template: { name: 'survey-string', data: locDescription } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n    <!-- ko if: question.hasTitleOnBottom -->\n      <!--ko template: { name: 'survey-question-title', data: question  } -->\n      <!-- /ko -->\n    <!-- /ko -->\n  </div>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/questiontitle.html":
/*!***************************************************!*\
  !*** ./src/knockout/templates/questiontitle.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-title\">\n  <div data-bind=\"css: question.cssHeader, click: function(m, e) { question.clickTitleFunction && question.clickTitleFunction(e); }\">\n    <!-- ko component: { name: 'survey-element-title', params: { element: $data } } --><!-- /ko -->\n    <!-- ko if: $data.hasDescriptionUnderTitle -->\n    <div data-bind=\"css: $data.cssDescription, visible: $data.hasDescription\">\n      <!-- ko template: { name: 'survey-string', data: $data.locDescription } --><!-- /ko -->\n    </div>\n    <!-- /ko -->\n    <!-- ko if: !!$data.additionalTitleToolbar -->\n    <!-- ko component: { name: 'sv-action-bar', params: { model: $data.additionalTitleToolbar } } --><!-- /ko -->\n    <!-- /ko -->\n  </div>\n</script>";

/***/ }),

/***/ "./src/knockout/templates/row.html":
/*!*****************************************!*\
  !*** ./src/knockout/templates/row.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-row\">\n  <div data-bind=\"css: row.getRowCss()\">\n    <!-- ko template: { name: \"survey-row-content\", afterRender: row.rowAfterRender } -->\n    <!-- /ko -->\n  </div>\n</script>\n<script type=\"text/html\" id=\"survey-row-content\">\n<!-- ko foreach: { data: row.visibleElements, as: 'question', afterRender: row.koAfterRender } -->\n  <div data-bind=\"css: question.cssClasses.questionWrapper, style: $data.rootStyle\">\n  <!-- ko if: row.isNeedRender -->\n    <!-- ko component: { name: row.panel.survey.getElementWrapperComponentName(question), params: { componentData:  row.panel.survey.getElementWrapperComponentData(question), templateData: { name: question.koElementType, data: question, afterRender: $parent.koElementAfterRender } } } -->\n    <!-- /ko -->\n  <!-- /ko -->\n  <!-- ko if: !row.isNeedRender && question.skeletonComponentName -->\n    <!-- ko component: { name: question.skeletonComponentName, params: { element: question } } -->\n    <!-- /ko -->\n  <!-- /ko -->\n  </div>\n<!-- /ko -->\n</script>";

/***/ }),

/***/ "./src/knockout/templates/rows.html":
/*!******************************************!*\
  !*** ./src/knockout/templates/rows.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-rows\">\n  <!-- ko foreach: { data: rows, as: 'row'} -->\n    <!-- ko if: row.visible -->\n      <!-- ko component: { name: $parent.survey.getRowWrapperComponentName(row), params: { componentData:  $parent.survey.getRowWrapperComponentData(row), templateData: { name: 'survey-row', data: row } } } -->\n      <!-- /ko -->\n    <!-- /ko -->\n  <!-- /ko -->\n</script>";

/***/ }),

/***/ "./src/knockout/templates/string.html":
/*!********************************************!*\
  !*** ./src/knockout/templates/string.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-string\">\n    <!-- ko component: { name: renderAs, params: { locString: renderAsData } } -->\n    <!-- /ko -->\n</script>\n";

/***/ }),

/***/ "./src/knockout/templates/timerpanel.html":
/*!************************************************!*\
  !*** ./src/knockout/templates/timerpanel.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-timerpanel\">\n    <!-- ko if: isRunning && showTimerAsClock -->\n    <div data-bind=\"css: rootCss\">\n        <!-- ko if: showProgress -->\n        <svg data-bind=\"css: getProgressCss(), style: { strokeDasharray: 440, strokeDashoffset: -440 * progress }\">\n            <use data-bind=\"attr:{'xlink:href': '#icon-timercircle'}\" xlink:href=''></use>\n        </svg>\n        <!-- /ko -->\n        <div data-bind=\"css: textContainerCss\">\n            <span data-bind=\"css: majorTextCss, text: clockMajorText\"></span>\n            <!-- ko if: !!minorTextCss -->\n            <span data-bind=\"css: minorTextCss, text: clockMinorText\"></span>\n            <!-- /ko -->\n        </div>\n    </div>\n    <!-- /ko -->\n    <!-- ko if: isRunning && !showTimerAsClock -->\n    <div data-bind=\"css: survey.getCss().timerRoot, text: text\"></div>\n    <!--/ko -->\n</script>\n";

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

/***/ })

/******/ });
});
//# sourceMappingURL=survey-knockout-ui.js.map