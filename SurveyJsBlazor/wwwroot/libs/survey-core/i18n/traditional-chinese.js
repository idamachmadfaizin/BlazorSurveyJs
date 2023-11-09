/*!
 * surveyjs - Survey JavaScript library v1.9.116
 * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("traditional-chinese", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["traditional-chinese"] = factory(require("survey-core"));
	else
		root["SurveyLocales"] = factory(root["Survey"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_survey_core__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/localization/traditional-chinese.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/localization/traditional-chinese.ts":
/*!*************************************************!*\
  !*** ./src/localization/traditional-chinese.ts ***!
  \*************************************************/
/*! exports provided: traditionalChineseSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traditionalChineseSurveyStrings", function() { return traditionalChineseSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var traditionalChineseSurveyStrings = {
    pagePrevText: "上一頁",
    pageNextText: "下一頁",
    completeText: "提交問卷",
    previewText: "預覽",
    editText: "編輯",
    startSurveyText: "開始",
    otherItemText: "填寫其他答案",
    noneItemText: "沒有",
    selectAllItemText: "全選",
    progressText: "第 {0} 頁, 共 {1} 頁",
    indexText: "{1}{0}",
    panelDynamicProgressText: "{1}{0}",
    panelDynamicTabTextFormat: "面板 {面板索引}",
    questionsProgressText: "回答了{0}/{1}問題",
    emptySurvey: "問卷中沒有問題或頁面",
    completingSurvey: "感謝您的參與!",
    completingSurveyBefore: "我們的記錄顯示您已經完成了此調查。",
    loadingSurvey: "問卷載入中...",
    placeholder: "請選擇...",
    ratingOptionsCaption: "選擇。。。",
    value: "價值",
    requiredError: "請填寫此問題",
    requiredErrorInPanel: "需要回答：至少回答一個問題。",
    requiredInAllRowsError: "請填寫所有行中問題",
    numericError: "答案必須是個數字",
    minError: "該值不應小於 {0}",
    maxError: "該值不應大於 {0}",
    textMinLength: "答案長度至少 {0} 個字元",
    textMaxLength: "答案長度不能超過 {0} 個字元",
    textMinMaxLength: "答案長度必須在 {0} - {1} 個字元之間",
    minRowCountError: "最少需要填寫 {0} 行答案",
    minSelectError: "最少需要選擇 {0} 項答案",
    maxSelectError: "最多只能選擇 {0} 項答案",
    numericMinMax: "答案 '{0}' 必須大於等於 {1} 且小於等於 {2}",
    numericMin: "答案 '{0}' 必須大於等於 {1}",
    numericMax: "答案 '{0}' 必須小於等於 {1}",
    invalidEmail: "請輸入有效的 Email 地址",
    invalidExpression: "表達式：{0}應返回「true」。",
    urlRequestError: "載入選項時發生錯誤 '{0}': {1}",
    urlGetChoicesError: "未能載入有效的選項或請求參數路徑有誤",
    exceedMaxSize: "文件大小不能超過 {0}",
    otherRequiredError: "請完成其他問題",
    uploadingFile: "文件上傳中... 請耐心等待幾秒後重試",
    loadingFile: "裝載。。。",
    chooseFile: "選擇檔案...",
    noFileChosen: "未選擇任何檔",
    filePlaceholder: "將檔案拖放到此處或按下下面的按鈕並選擇要上傳的檔。",
    confirmDelete: "是否要刪除記錄？",
    keyDuplicationError: "此值應該是唯一的。",
    addColumn: "添加列",
    addRow: "添加答案",
    removeRow: "刪除答案",
    emptyRowsText: "沒有行。",
    addPanel: "新增",
    removePanel: "刪除",
    choices_Item: "選項",
    matrix_column: "列",
    matrix_row: "行",
    multipletext_itemname: "發簡訊",
    savingData: "正在將結果保存到服務器...",
    savingDataError: "在保存結果過程中發生了錯誤，結果未能保存",
    savingDataSuccess: "結果保存成功!",
    saveAgainButton: "請重試",
    timerMin: "最小",
    timerSec: "秒",
    timerSpentAll: "您在此頁面上花費了{0}，總共{1}。",
    timerSpentPage: "您在此頁面上花費了{0}。",
    timerSpentSurvey: "你總共花了{0}。",
    timerLimitAll: "您在此頁面上花費了{0}{1}，總共花費了{2}{3}。",
    timerLimitPage: "您在此頁面上花費了{0}{1}。",
    timerLimitSurvey: "您總共花費了{1}的{0}。",
    clearCaption: "清楚",
    signaturePlaceHolder: "在此簽名",
    chooseFileCaption: "選擇檔案",
    takePhotoCaption: "拍照",
    photoPlaceholder: "按下下面的按鈕使用相機拍照。",
    fileOrPhotoPlaceholder: "拖放或選擇要上傳的檔或使用相機拍攝照片。",
    replaceFileCaption: "替換檔",
    removeFileCaption: "刪除此檔",
    booleanCheckedLabel: "是的",
    booleanUncheckedLabel: "不",
    confirmRemoveFile: "是否確實要刪除此檔：{0}？",
    confirmRemoveAllFiles: "是否確實要刪除所有檔？",
    questionTitlePatternText: "問題標題",
    modalCancelButtonText: "取消",
    modalApplyButtonText: "應用",
    filterStringPlaceholder: "鍵入以搜尋...",
    emptyMessage: "沒有要顯示的數據",
    noEntriesText: "尚無條目。\n按下下面的按鈕以添加新條目。",
    noEntriesReadonlyText: "沒有條目。",
    more: "更多",
    tagboxDoneButtonCaption: "還行",
    selectToRankEmptyRankedAreaText: "所有選擇均已排名",
    selectToRankEmptyUnrankedAreaText: "將選項拖放到此處進行排名"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["zh-tw"] = traditionalChineseSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["zh-tw"] = "繁體中文";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// previewText: "Preview" => "預覽"
// editText: "Edit" => "編輯"
// startSurveyText: "Start" => "開始"
// noneItemText: "None" => "沒有"
// selectAllItemText: "Select All" => "全選"
// indexText: "{0} of {1}" => "{1}{0}"
// panelDynamicProgressText: "{0} of {1}" => "{1}{0}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "面板 {面板索引}"
// questionsProgressText: "Answered {0}/{1} questions" => "回答了{0}/{1}問題"
// completingSurveyBefore: "Our records show that you have already completed this survey." => "我們的記錄顯示您已經完成了此調查。"
// ratingOptionsCaption: "Select..." => "選擇。。。"
// value: "value" => "價值"
// requiredErrorInPanel: "Response required: answer at least one question." => "需要回答：至少回答一個問題。"
// minError: "The value should not be less than {0}" => "該值不應小於 {0}"
// maxError: "The value should not be greater than {0}" => "該值不應大於 {0}"
// invalidExpression: "The expression: {0} should return 'true'." => "表達式：{0}應返回「true」。"
// loadingFile: "Loading..." => "裝載。。。"
// chooseFile: "Choose file(s)..." => "選擇檔案..."
// noFileChosen: "No file chosen" => "未選擇任何檔"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "將檔案拖放到此處或按下下面的按鈕並選擇要上傳的檔。"
// confirmDelete: "Do you want to delete the record?" => "是否要刪除記錄？"
// keyDuplicationError: "This value should be unique." => "此值應該是唯一的。"
// addColumn: "Add Column" => "添加列"
// emptyRowsText: "There are no rows." => "沒有行。"
// addPanel: "Add new" => "新增"
// removePanel: "Remove" => "刪除"
// multipletext_itemname: "text" => "發簡訊"
// timerMin: "min" => "最小"
// timerSec: "sec" => "秒"
// timerSpentAll: "You have spent {0} on this page and {1} in total." => "您在此頁面上花費了{0}，總共{1}。"
// timerSpentPage: "You have spent {0} on this page." => "您在此頁面上花費了{0}。"
// timerSpentSurvey: "You have spent {0} in total." => "你總共花了{0}。"
// timerLimitAll: "You have spent {0} of {1} on this page and {2} of {3} in total." => "您在此頁面上花費了{0}{1}，總共花費了{2}{3}。"
// timerLimitPage: "You have spent {0} of {1} on this page." => "您在此頁面上花費了{0}{1}。"
// timerLimitSurvey: "You have spent {0} of {1} in total." => "您總共花費了{1}的{0}。"
// clearCaption: "Clear" => "清楚"
// signaturePlaceHolder: "Sign here" => "在此簽名"
// chooseFileCaption: "Choose file" => "選擇檔案"
// removeFileCaption: "Remove this file" => "刪除此檔"
// booleanCheckedLabel: "Yes" => "是的"
// booleanUncheckedLabel: "No" => "不"
// confirmRemoveFile: "Are you sure that you want to remove this file: {0}?" => "是否確實要刪除此檔：{0}？"
// confirmRemoveAllFiles: "Are you sure that you want to remove all files?" => "是否確實要刪除所有檔？"
// questionTitlePatternText: "Question Title" => "問題標題"
// modalCancelButtonText: "Cancel" => "取消"
// modalApplyButtonText: "Apply" => "應用"
// filterStringPlaceholder: "Type to search..." => "鍵入以搜尋..."
// emptyMessage: "No data to display" => "沒有要顯示的數據"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "尚無條目。\n按下下面的按鈕以添加新條目。"
// noEntriesReadonlyText: "There are no entries." => "沒有條目。"
// more: "More" => "更多"
// tagboxDoneButtonCaption: "OK" => "還行"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "所有選擇均已排名"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "將選項拖放到此處進行排名"// takePhotoCaption: "Take Photo" => "拍照"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "按下下面的按鈕使用相機拍照。"
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "拖放或選擇要上傳的檔或使用相機拍攝照片。"
// replaceFileCaption: "Replace file" => "替換檔"


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
//# sourceMappingURL=traditional-chinese.js.map