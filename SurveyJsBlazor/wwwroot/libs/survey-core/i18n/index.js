/*!
 * surveyjs - Survey JavaScript library v1.9.116
 * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("index", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/i18n.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entries/chunks/localization.ts":
/*!********************************************!*\
  !*** ./src/entries/chunks/localization.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localization_arabic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../localization/arabic */ "./src/localization/arabic.ts");
/* harmony import */ var _localization_basque__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../localization/basque */ "./src/localization/basque.ts");
/* harmony import */ var _localization_bulgarian__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../localization/bulgarian */ "./src/localization/bulgarian.ts");
/* harmony import */ var _localization_catalan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../localization/catalan */ "./src/localization/catalan.ts");
/* harmony import */ var _localization_croatian__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../localization/croatian */ "./src/localization/croatian.ts");
/* harmony import */ var _localization_czech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../localization/czech */ "./src/localization/czech.ts");
/* harmony import */ var _localization_danish__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../localization/danish */ "./src/localization/danish.ts");
/* harmony import */ var _localization_dutch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../localization/dutch */ "./src/localization/dutch.ts");
/* harmony import */ var _localization_nl_BE__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../localization/nl-BE */ "./src/localization/nl-BE.ts");
/* harmony import */ var _localization_estonian__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../localization/estonian */ "./src/localization/estonian.ts");
/* harmony import */ var _localization_finnish__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../localization/finnish */ "./src/localization/finnish.ts");
/* harmony import */ var _localization_french__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../localization/french */ "./src/localization/french.ts");
/* harmony import */ var _localization_georgian__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../localization/georgian */ "./src/localization/georgian.ts");
/* harmony import */ var _localization_german__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../localization/german */ "./src/localization/german.ts");
/* harmony import */ var _localization_greek__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../localization/greek */ "./src/localization/greek.ts");
/* harmony import */ var _localization_hebrew__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../localization/hebrew */ "./src/localization/hebrew.ts");
/* harmony import */ var _localization_hindi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../localization/hindi */ "./src/localization/hindi.ts");
/* harmony import */ var _localization_hungarian__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../localization/hungarian */ "./src/localization/hungarian.ts");
/* harmony import */ var _localization_icelandic__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../localization/icelandic */ "./src/localization/icelandic.ts");
/* harmony import */ var _localization_indonesian__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../localization/indonesian */ "./src/localization/indonesian.ts");
/* harmony import */ var _localization_italian__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../localization/italian */ "./src/localization/italian.ts");
/* harmony import */ var _localization_japanese__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../localization/japanese */ "./src/localization/japanese.ts");
/* harmony import */ var _localization_kazakh__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../localization/kazakh */ "./src/localization/kazakh.ts");
/* harmony import */ var _localization_korean__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../localization/korean */ "./src/localization/korean.ts");
/* harmony import */ var _localization_latvian__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../localization/latvian */ "./src/localization/latvian.ts");
/* harmony import */ var _localization_lithuanian__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../localization/lithuanian */ "./src/localization/lithuanian.ts");
/* harmony import */ var _localization_macedonian__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../localization/macedonian */ "./src/localization/macedonian.ts");
/* harmony import */ var _localization_malay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../localization/malay */ "./src/localization/malay.ts");
/* harmony import */ var _localization_norwegian__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../localization/norwegian */ "./src/localization/norwegian.ts");
/* harmony import */ var _localization_persian__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../localization/persian */ "./src/localization/persian.ts");
/* harmony import */ var _localization_polish__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../localization/polish */ "./src/localization/polish.ts");
/* harmony import */ var _localization_portuguese__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../localization/portuguese */ "./src/localization/portuguese.ts");
/* harmony import */ var _localization_portuguese_br__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../localization/portuguese-br */ "./src/localization/portuguese-br.ts");
/* harmony import */ var _localization_romanian__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../localization/romanian */ "./src/localization/romanian.ts");
/* harmony import */ var _localization_russian__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../localization/russian */ "./src/localization/russian.ts");
/* harmony import */ var _localization_serbian__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../localization/serbian */ "./src/localization/serbian.ts");
/* harmony import */ var _localization_simplified_chinese__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../localization/simplified-chinese */ "./src/localization/simplified-chinese.ts");
/* harmony import */ var _localization_slovak__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../localization/slovak */ "./src/localization/slovak.ts");
/* harmony import */ var _localization_spanish__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../localization/spanish */ "./src/localization/spanish.ts");
/* harmony import */ var _localization_swahili__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../localization/swahili */ "./src/localization/swahili.ts");
/* harmony import */ var _localization_swedish__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../localization/swedish */ "./src/localization/swedish.ts");
/* harmony import */ var _localization_tajik__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../localization/tajik */ "./src/localization/tajik.ts");
/* harmony import */ var _localization_thai__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../localization/thai */ "./src/localization/thai.ts");
/* harmony import */ var _localization_traditional_chinese__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../localization/traditional-chinese */ "./src/localization/traditional-chinese.ts");
/* harmony import */ var _localization_turkish__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../localization/turkish */ "./src/localization/turkish.ts");
/* harmony import */ var _localization_ukrainian__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../localization/ukrainian */ "./src/localization/ukrainian.ts");
/* harmony import */ var _localization_vietnamese__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../localization/vietnamese */ "./src/localization/vietnamese.ts");
/* harmony import */ var _localization_welsh__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../localization/welsh */ "./src/localization/welsh.ts");
/* harmony import */ var _localization_telugu__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../localization/telugu */ "./src/localization/telugu.ts");



















































/***/ }),

/***/ "./src/entries/i18n.ts":
/*!*****************************!*\
  !*** ./src/entries/i18n.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/localization */ "./src/entries/chunks/localization.ts");
/* empty/unused harmony star reexport */// localization



/***/ }),

/***/ "./src/localization/arabic.ts":
/*!************************************!*\
  !*** ./src/localization/arabic.ts ***!
  \************************************/
/*! exports provided: arabicSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arabicSurveyStrings", function() { return arabicSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var arabicSurveyStrings = {
    pagePrevText: "السابق",
    pageNextText: "التالي",
    completeText: "إرسال البيانات",
    previewText: "معاينة",
    editText: "تعديل",
    startSurveyText: "بداية",
    otherItemText: "نص آخر",
    noneItemText: "لا شيء",
    selectAllItemText: "اختر الكل",
    progressText: "{1} صفحة {0} من",
    indexText: "{0} من {1}",
    panelDynamicProgressText: "سجل {0} من {1}",
    panelDynamicTabTextFormat: "لوحة {بانل إندكس}",
    questionsProgressText: "تمت الإجابة على أسئلة {0} / {1}",
    emptySurvey: "لا توجد صفحة مرئية أو سؤال في النموذج",
    completingSurvey: "شكرا لكم لاستكمال النموذج!",
    completingSurveyBefore: "تظهر سجلاتنا أنك قد أكملت هذا الاستطلاع بالفعل.",
    loadingSurvey: "...يتم تحميل النموذج",
    placeholder: "...اختر",
    ratingOptionsCaption: "اختار...",
    value: "القيمة",
    requiredError: ".يرجى الإجابة على السؤال",
    requiredErrorInPanel: "الرجاء الإجابة على سؤال واحد على الأقل.",
    requiredInAllRowsError: "يرجى الإجابة على الأسئلة في جميع الصفوف",
    numericError: "يجب أن تكون القيمة رقمية.",
    minError: "يجب ألا تقل القيمة عن {0}",
    maxError: "يجب ألا تزيد القيمة عن {0}",
    textMinLength: "الرجاء إدخال ما لا يقل عن {0} حروف",
    textMaxLength: "الرجاء إدخال أقل من {0} حروف",
    textMinMaxLength: "يرجى إدخال أكثر من {0} وأقل من {1} حروف",
    minRowCountError: "يرجى ملء ما لا يقل عن {0} الصفوف",
    minSelectError: "يرجى تحديد ما لا يقل عن {0} المتغيرات",
    maxSelectError: "يرجى تحديد ما لا يزيد عن {0} المتغيرات",
    numericMinMax: "و'{0}' يجب أن تكون مساوية أو أكثر من {1} وتساوي أو أقل من {2}ا",
    numericMin: "و'{0}' يجب أن تكون مساوية أو أكثر من {1}ا",
    numericMax: "و'{0}' يجب أن تكون مساوية أو أقل من {1}ا",
    invalidEmail: "الرجاء إدخال بريد الكتروني صحيح",
    invalidExpression: "يجب أن يعرض التعبير: {0} 'صواب'.",
    urlRequestError: "طلب إرجاع خطأ '{0}'. {1}ا",
    urlGetChoicesError: "عاد طلب البيانات فارغ أو 'المسار' غير صحيح ",
    exceedMaxSize: "ينبغي ألا يتجاوز حجم الملف {0}ا",
    otherRequiredError: "الرجاء إدخال قيمة أخرى",
    uploadingFile: "تحميل الملف الخاص بك. يرجى الانتظار عدة ثوان والمحاولة لاحقًا",
    loadingFile: "جار التحميل...",
    chooseFile: "اختر الملفات...",
    noFileChosen: "لم تقم باختيار ملف",
    filePlaceholder: "اسحب ملفا وأفلته هنا أو انقر فوق الزر أدناه واختر ملفا لتحميله.",
    confirmDelete: "هل تريد حذف السجل؟",
    keyDuplicationError: "يجب أن تكون هذه القيمة فريدة.",
    addColumn: "أضف العمود",
    addRow: "اضافة صف",
    removeRow: "إزالة صف",
    emptyRowsText: "لا توجد صفوف.",
    addPanel: "اضف جديد",
    removePanel: "إزالة",
    choices_Item: "بند",
    matrix_column: "عمود",
    matrix_row: "صف",
    multipletext_itemname: "نص",
    savingData: "يتم حفظ النتائج على الخادم ...",
    savingDataError: "حدث خطأ ولم نتمكن من حفظ النتائج.",
    savingDataSuccess: "تم حفظ النتائج بنجاح!",
    saveAgainButton: "حاول مجددا",
    timerMin: "دقيقة",
    timerSec: "ثانية",
    timerSpentAll: "لقد أنفقت {0} على هذه الصفحة و {1} إجمالاً.",
    timerSpentPage: "لقد أنفقت {0} على هذه الصفحة.",
    timerSpentSurvey: "لقد أنفقت {0} إجمالاً.",
    timerLimitAll: "لقد أنفقت {0} من {1} في هذه الصفحة و {2} من إجمالي {3}.",
    timerLimitPage: "لقد أنفقت {0} من {1} في هذه الصفحة.",
    timerLimitSurvey: "لقد أنفقت {0} من إجمالي {1}.",
    clearCaption: "واضح",
    signaturePlaceHolder: "وقع هنا",
    chooseFileCaption: "اختر ملف",
    takePhotoCaption: "التقاط صورة",
    photoPlaceholder: "انقر فوق الزر أدناه لالتقاط صورة باستخدام الكاميرا.",
    fileOrPhotoPlaceholder: "قم بسحب ملف وإفلاته أو تحديده لتحميله أو التقاط صورة باستخدام الكاميرا.",
    replaceFileCaption: "استبدال الملف",
    removeFileCaption: "قم بإزالة هذا الملف",
    booleanCheckedLabel: "نعم",
    booleanUncheckedLabel: "لا",
    confirmRemoveFile: "هل أنت متأكد أنك تريد إزالة هذا الملف: {0}؟",
    confirmRemoveAllFiles: "هل أنت متأكد أنك تريد إزالة كافة الملفات؟",
    questionTitlePatternText: "عنوان السؤال",
    modalCancelButtonText: "إلغاء الأمر",
    modalApplyButtonText: "طبق",
    filterStringPlaceholder: "اكتب للبحث...",
    emptyMessage: "لا توجد بيانات للعرض",
    noEntriesText: "لا توجد إدخالات حتى الآن.\nانقر فوق الزر أدناه لإضافة إدخال جديد.",
    noEntriesReadonlyText: "لا توجد إدخالات.",
    more: "أكثر",
    tagboxDoneButtonCaption: "موافق",
    selectToRankEmptyRankedAreaText: "يتم ترتيب جميع الخيارات",
    selectToRankEmptyUnrankedAreaText: "قم بسحب وإسقاط الخيارات هنا لترتيبها"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["ar"] = arabicSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["ar"] = "العربية";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} من {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "لوحة {بانل إندكس}"
// ratingOptionsCaption: "Select..." => "اختار..."
// minError: "The value should not be less than {0}" => "يجب ألا تقل القيمة عن {0}"
// maxError: "The value should not be greater than {0}" => "يجب ألا تزيد القيمة عن {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "اسحب ملفا وأفلته هنا أو انقر فوق الزر أدناه واختر ملفا لتحميله."
// emptyRowsText: "There are no rows." => "لا توجد صفوف."
// multipletext_itemname: "text" => "نص"
// signaturePlaceHolder: "Sign here" => "وقع هنا"
// modalCancelButtonText: "Cancel" => "إلغاء الأمر"
// modalApplyButtonText: "Apply" => "طبق"
// filterStringPlaceholder: "Type to search..." => "اكتب للبحث..."
// emptyMessage: "No data to display" => "لا توجد بيانات للعرض"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "لا توجد إدخالات حتى الآن.\nانقر فوق الزر أدناه لإضافة إدخال جديد."
// noEntriesReadonlyText: "There are no entries." => "لا توجد إدخالات."
// more: "More" => "أكثر"
// tagboxDoneButtonCaption: "OK" => "موافق"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "يتم ترتيب جميع الخيارات"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "قم بسحب وإسقاط الخيارات هنا لترتيبها"// takePhotoCaption: "Take Photo" => "التقاط صورة"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "انقر فوق الزر أدناه لالتقاط صورة باستخدام الكاميرا."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "قم بسحب ملف وإفلاته أو تحديده لتحميله أو التقاط صورة باستخدام الكاميرا."
// replaceFileCaption: "Replace file" => "استبدال الملف"


/***/ }),

/***/ "./src/localization/basque.ts":
/*!************************************!*\
  !*** ./src/localization/basque.ts ***!
  \************************************/
/*! exports provided: basqueSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basqueSurveyStrings", function() { return basqueSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var basqueSurveyStrings = {
    pagePrevText: "Aurrekoa",
    pageNextText: "Hurrengoa",
    completeText: "Bukatu",
    previewText: "Aurrebista",
    editText: "Editatu",
    startSurveyText: "Hasi",
    otherItemText: "Beste bat (zehaztu)",
    noneItemText: "Bat ere ez",
    selectAllItemText: "Guztia hautatu",
    progressText: "{1}-(e)tik {0} orrialde",
    indexText: "{1} {0}",
    panelDynamicProgressText: "{0} errigistro {1}-(e)tik",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Erantzundako galderak {0}/{1}",
    emptySurvey: "Ez dago orrialde bistaragarririk edo ez dago galderarik.",
    completingSurvey: "Eskerrik asko galdetegia erantzuteagatik!",
    completingSurveyBefore: "Gure datuek diote dagoeneko galdetegia erantzun duzula.",
    loadingSurvey: "Galdetegia kargatzen...",
    placeholder: "Hautatu...",
    ratingOptionsCaption: "Aukeratu...",
    value: "balioa",
    requiredError: "Mesedez, galdera erantzun.",
    requiredErrorInPanel: "Mesedez, gutxienez galdera bat erantzun.",
    requiredInAllRowsError: "Mesedez, errenkadako galdera guztiak erantzun.",
    numericError: "Estimazioa zenbakizkoa izan behar du.",
    minError: "Balioa ez da {0} baino txikiagoa izan behar",
    maxError: "Balioa ez da {0} baino handiagoa izan behar",
    textMinLength: "Mesedez, gutxienez {0} karaktere erabili behar dira.",
    textMaxLength: "Mesedez, gehienez {0} karaktere erabili behar dira.",
    textMinMaxLength: "Mesedez, gehienez {0} eta gutxienez {1} karaktere erabili behar dira.",
    minRowCountError: "Mesedez, gutxienez {0} errenkada bete.",
    minSelectError: "Mesedez, gutxienez {0} aukera hautatu.",
    maxSelectError: "Mesedez, {0} aukera baino gehiago ez hautatu.",
    numericMinMax: "El '{0}' debe de ser igual o más de {1} y igual o menos de {2}",
    numericMin: "'{0}' {1} baino handiagoa edo berdin izan behar da",
    numericMax: "'{0}' {1} baino txikiago edo berdin izan behar da",
    invalidEmail: "Mesedez, baliozko emaila idatz ezazu.",
    invalidExpression: "{0} adierazpenak 'egiazkoa' itzuli beharko luke.",
    urlRequestError: "Eskaerak '{0}' errorea itzuli du. {1}",
    urlGetChoicesError: "La solicitud regresó vacío de data o la propiedad 'trayectoria' no es correcta",
    exceedMaxSize: "Fitxategiaren tamaina ez da {0} baino handiagoa izan behar.",
    otherRequiredError: "Mesedez, beste estimazioa gehitu.",
    uploadingFile: "Zure fitxategia igotzen ari da. Mesedez, segundo batzuk itxaron eta saiatu berriro.",
    loadingFile: "Kargatzen...",
    chooseFile: "Fitxategia(k) hautatu...",
    noFileChosen: "Ez da inolako fitxategirik hautatu",
    filePlaceholder: "Arrastatu eta askatu artxibo bat hemen edo klik egin beheko botoian eta aukeratu artxibo bat kargatzeko.",
    confirmDelete: "¿Erregistroa borratu nahi al duzu?",
    keyDuplicationError: "Balio hau bakarra izan behar du.",
    addColumn: "Zutabe bat gehitu",
    addRow: "Errenkada bat gehitu",
    removeRow: "Errenkada bat kendu",
    emptyRowsText: "Ez dago errenkadarik.",
    addPanel: "Berria gehitu",
    removePanel: "Kendu",
    choices_Item: "artikulua",
    matrix_column: "Zutabea",
    matrix_row: "Errenkada",
    multipletext_itemname: "testua",
    savingData: "Erantzunak zerbitzarian gordetzen ari dira...",
    savingDataError: "Erroreren bat gertatu eta erantzunak ez dira zerbitzarian gorde ahal izan.",
    savingDataSuccess: "Erantzunak egoki gorde dira!",
    saveAgainButton: "Berriro saiatu.",
    timerMin: "min",
    timerSec: "seg",
    timerSpentAll: "{0} erabili duzu orrialde honetan eta orotara {1}.",
    timerSpentPage: "Zuk {0} erabili duzu.",
    timerSpentSurvey: "Orotara gastatu duzu.",
    timerLimitAll: "{0} gastatu duzu {1}-(e)tik orrialde honetan eta orotara {2} {3}-(e)tik.",
    timerLimitPage: "{0} gastatu duzu orrialde honetan {1}-(e)tik.",
    timerLimitSurvey: "Zuk orotara {0} gastatu duzu {1}-(e)tik.",
    clearCaption: "Hustu",
    signaturePlaceHolder: "Sinatu hemen",
    chooseFileCaption: "Fitxategia hautatu",
    takePhotoCaption: "Argazkia hartu",
    photoPlaceholder: "Egin klik beheko botoian, kamerarekin argazki bat hartzeko.",
    fileOrPhotoPlaceholder: "Arrastatu eta askatu artxibo bat kamerarekin argazki bat kargatzeko edo hartzeko.",
    replaceFileCaption: "Artxiboa ordeztu",
    removeFileCaption: "Fitxategi hau ezabatu",
    booleanCheckedLabel: "Bai",
    booleanUncheckedLabel: "Ez",
    confirmRemoveFile: "Ziur zaude hurrengo fitxategia ezabatu nahi duzula: {0}?",
    confirmRemoveAllFiles: "Ziur al zaude fitxategi guztiak ezabatu nahi dituzula?",
    questionTitlePatternText: "Galderaren izenburua",
    modalCancelButtonText: "Ezeztatu",
    modalApplyButtonText: "Ezarri",
    filterStringPlaceholder: "Idatzi bila...",
    emptyMessage: "Ez daturik erakusteko",
    noEntriesText: "Oraindik ez sarrerarik.\nKlik beheko botoian klik egin sarrera berri bat eransteko.",
    noEntriesReadonlyText: "Ez sarrerarik.",
    more: "Gehiago",
    tagboxDoneButtonCaption: "Ados",
    selectToRankEmptyRankedAreaText: "Aukera guztiak sailkatuta daude",
    selectToRankEmptyUnrankedAreaText: "Arrastaka eta askatzen ditu hemen sailkatzeko"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["eu"] = basqueSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["eu"] = "Euskara";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{1} {0}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Aukeratu..."
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Arrastatu eta askatu artxibo bat hemen edo klik egin beheko botoian eta aukeratu artxibo bat kargatzeko."
// filterStringPlaceholder: "Type to search..." => "Idatzi bila..."
// emptyMessage: "No data to display" => "Ez daturik erakusteko"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Oraindik ez sarrerarik.\nKlik beheko botoian klik egin sarrera berri bat eransteko."
// noEntriesReadonlyText: "There are no entries." => "Ez sarrerarik."
// more: "More" => "Gehiago"
// tagboxDoneButtonCaption: "OK" => "Ados"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Aukera guztiak sailkatuta daude"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Arrastaka eta askatzen ditu hemen sailkatzeko"// takePhotoCaption: "Take Photo" => "Argazkia hartu"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Egin klik beheko botoian, kamerarekin argazki bat hartzeko."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Arrastatu eta askatu artxibo bat kamerarekin argazki bat kargatzeko edo hartzeko."
// replaceFileCaption: "Replace file" => "Artxiboa ordeztu"


/***/ }),

/***/ "./src/localization/bulgarian.ts":
/*!***************************************!*\
  !*** ./src/localization/bulgarian.ts ***!
  \***************************************/
/*! exports provided: bulgarianStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bulgarianStrings", function() { return bulgarianStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var bulgarianStrings = {
    pagePrevText: "Назад",
    pageNextText: "Напред",
    completeText: "Край",
    previewText: "Визуализация",
    editText: "редактиране",
    startSurveyText: "Начало",
    otherItemText: "Друго (опишете)",
    noneItemText: "Нито един",
    selectAllItemText: "Всички",
    progressText: "стр. {0}, общо стр. {1}",
    indexText: "{0} на {1}",
    panelDynamicProgressText: "Запис {0} от {1}",
    panelDynamicTabTextFormat: "Панел {panelIndex}",
    questionsProgressText: "Отговорени на {0} / {1} въпроса",
    emptySurvey: "Анкетата не съдържа видими страници или въпроси.",
    completingSurvey: "Благодарим ви за участието в анкетата!",
    completingSurveyBefore: "Изглежда, че вие вече сте попълнили анкетата.",
    loadingSurvey: "Зареждане на анкетата...",
    placeholder: "Изберете...",
    ratingOptionsCaption: "Отбран...",
    value: "value",
    requiredError: "Моля, отговорете на следния въпрос.",
    requiredErrorInPanel: "Моля, отговорете поне на един от въпросите.",
    requiredInAllRowsError: "Моля, отговорете на въпросите на всички редове.",
    numericError: "Стойността следва да бъде число.",
    minError: "Стойността не трябва да бъде по-малка от {0}",
    maxError: "Стойността не трябва да бъде по-голяма от {0}",
    textMinLength: "Моля, използвайте поне {0} символа.",
    textMaxLength: "Моля, използвайте не повече от {0} символа.",
    textMinMaxLength: "Моля, използвайте повече от {0} и по-малко от {1} символа.",
    minRowCountError: "Моля, попълнете поне {0} реда.",
    minSelectError: "Моля, изберете поне {0} варианта.",
    maxSelectError: "Моля, изберете не повече от {0} варианта.",
    numericMinMax: "Стойността '{0}' следва да бъде равна или по-голяма от {1} и равна или по-малка от {2}",
    numericMin: "Стойността '{0}' следва да бъде равна или по-голяма от {1}",
    numericMax: "Стойността '{0}' следва да бъде равна или по-малка от {1}",
    invalidEmail: "Моля, въведете валиден адрес на електронна поща.",
    invalidExpression: "Изразът: {0} трябва да дава резултат 'true' (истина).",
    urlRequestError: "Заявката води до грешка '{0}'. {1}",
    urlGetChoicesError: "Заявката не връща данни или частта 'path' (път до търсения ресурс на сървъра) е неправилно зададена",
    exceedMaxSize: "Размерът на файла следва да не превишава {0}.",
    otherRequiredError: "Моля, въведете другата стойност.",
    uploadingFile: "Вашит файл се зарежда на сървъра. Моля, изчакайте няколко секунди и тогава опитвайте отново.",
    loadingFile: "Зареждане...",
    chooseFile: "Изберете файл(ове)...",
    noFileChosen: "Няма избран файл",
    filePlaceholder: "Плъзнете и пуснете файл тук или щракнете върху бутона по-долу и изберете файл за качване.",
    confirmDelete: "Желаете ли да изтриете записа?",
    keyDuplicationError: "Стойността следва да бъде уникална.",
    addColumn: "Добавяне на колона",
    addRow: "Добавяне на ред",
    removeRow: "Премахване на ред",
    emptyRowsText: "Няма редове.",
    addPanel: "Добавяне на панел",
    removePanel: "Премахване на панел",
    choices_Item: "елемент",
    matrix_column: "Колона",
    matrix_row: "Ред",
    multipletext_itemname: "Текст",
    savingData: "Резултатите се запазват на сървъра...",
    savingDataError: "Поради възникнала грешка резултатите не можаха да бъдат запазени.",
    savingDataSuccess: "Резултатите бяха запазени успешно!",
    saveAgainButton: "Нов опит",
    timerMin: "мин",
    timerSec: "сек",
    timerSpentAll: "Вие използвахте {0} на тази страница и общо {1}.",
    timerSpentPage: "Вие използвахте {0} на тази страница.",
    timerSpentSurvey: "Вие използвахте общо {0}.",
    timerLimitAll: "Вие изпозвахте {0} от {1} на тази страница и общо {2} от {3}.",
    timerLimitPage: "Вие използвахте {0} от {1} на тази страница.",
    timerLimitSurvey: "Вие използвахте общо {0} от {1}.",
    clearCaption: "Начално състояние",
    signaturePlaceHolder: "Подпишете тук",
    chooseFileCaption: "Изберете файл",
    takePhotoCaption: "Направете снимка",
    photoPlaceholder: "Кликнете върху бутона по-долу, за да направите снимка с помощта на камерата.",
    fileOrPhotoPlaceholder: "Плъзнете и пуснете или изберете файл за качване или правене на снимка с помощта на камерата.",
    replaceFileCaption: "Заместване на файл",
    removeFileCaption: "Премахване на файла",
    booleanCheckedLabel: "Да",
    booleanUncheckedLabel: "Не",
    confirmRemoveFile: "Наистина ли искате да премахнете този файл: {0}?",
    confirmRemoveAllFiles: "Наистина ли искате да премахнете всички файлове?",
    questionTitlePatternText: "Заглавие на въпроса",
    modalCancelButtonText: "Отмени",
    modalApplyButtonText: "Прилагам",
    filterStringPlaceholder: "Въведете за търсене...",
    emptyMessage: "Няма данни за показване",
    noEntriesText: "Все още няма записи.\nЩракнете върху бутона по-долу, за да добавите нов запис.",
    noEntriesReadonlyText: "Няма записи.",
    more: "Още",
    tagboxDoneButtonCaption: "Добре",
    selectToRankEmptyRankedAreaText: "Всички възможности за избор са класирани",
    selectToRankEmptyUnrankedAreaText: "Плъзнете и пуснете опции тук, за да ги класирате"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["bg"] = bulgarianStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["bg"] = "български";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} на {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Панел {panelIndex}"
// ratingOptionsCaption: "Select..." => "Отбран..."
// minError: "The value should not be less than {0}" => "Стойността не трябва да бъде по-малка от {0}"
// maxError: "The value should not be greater than {0}" => "Стойността не трябва да бъде по-голяма от {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Плъзнете и пуснете файл тук или щракнете върху бутона по-долу и изберете файл за качване."
// emptyRowsText: "There are no rows." => "Няма редове."
// multipletext_itemname: "text" => "Текст"
// signaturePlaceHolder: "Sign here" => "Подпишете тук"
// modalCancelButtonText: "Cancel" => "Отмени"
// modalApplyButtonText: "Apply" => "Прилагам"
// filterStringPlaceholder: "Type to search..." => "Въведете за търсене..."
// emptyMessage: "No data to display" => "Няма данни за показване"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Все още няма записи.\nЩракнете върху бутона по-долу, за да добавите нов запис."
// noEntriesReadonlyText: "There are no entries." => "Няма записи."
// more: "More" => "Още"
// tagboxDoneButtonCaption: "OK" => "Добре"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Всички възможности за избор са класирани"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Плъзнете и пуснете опции тук, за да ги класирате"// takePhotoCaption: "Take Photo" => "Направете снимка"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Кликнете върху бутона по-долу, за да направите снимка с помощта на камерата."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Плъзнете и пуснете или изберете файл за качване или правене на снимка с помощта на камерата."
// replaceFileCaption: "Replace file" => "Заместване на файл"


/***/ }),

/***/ "./src/localization/catalan.ts":
/*!*************************************!*\
  !*** ./src/localization/catalan.ts ***!
  \*************************************/
/*! exports provided: catalanSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catalanSurveyStrings", function() { return catalanSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var catalanSurveyStrings = {
    pagePrevText: "Anterior",
    pageNextText: "Següent",
    completeText: "Complet",
    previewText: "Preestrena",
    editText: "Editar",
    startSurveyText: "Començar",
    otherItemText: "Un altre (descrigui)",
    noneItemText: "Cap",
    selectAllItemText: "Selecciona-ho tot",
    progressText: "Pàgina {0} de {1}",
    indexText: "{0} de {1}",
    panelDynamicProgressText: "{0} de {1}",
    panelDynamicTabTextFormat: "Panell {panelIndex}",
    questionsProgressText: "Respostes {0}/{1} preguntes",
    emptySurvey: "No hi ha cap pàgina visible o pregunta a l'enquesta.",
    completingSurvey: "Gràcies per completar l'enquesta!",
    completingSurveyBefore: "Els nostres registres mostren que ja heu completat aquesta enquesta.",
    loadingSurvey: "L'enquesta s'està carregant ...",
    placeholder: "Selecciona ...",
    ratingOptionsCaption: "Seleccionar...",
    value: "valor",
    requiredError: "Si us plau contesti la pregunta.",
    requiredErrorInPanel: "Resposta necessària: respondre almenys una pregunta.",
    requiredInAllRowsError: "Si us plau contesti les preguntes de cada filera.",
    numericError: "L'estimació ha de ser numèrica.",
    minError: "El valor no ha de ser inferior a {0}",
    maxError: "El valor no ha de ser superior a {0}",
    textMinLength: "Si us plau entre almenys {0} símbols.",
    textMaxLength: "Si us plau entre menys de {0} símbols.",
    textMinMaxLength: "Si us plau entre més de {0} i menys de {1} símbols.",
    minRowCountError: "Si us plau ompli almenys {0} fileres.",
    minSelectError: "Si us plau seleccioni almenys {0} variants.",
    maxSelectError: "Si us plau seleccioni no més de {0} variants.",
    numericMinMax: "El '{0}' deu ser igual o més de {1} i igual o menys de {2}",
    numericMin: "El '{0}' ha de ser igual o més de {1}",
    numericMax: "El '{0}' ha de ser igual o menys de {1}",
    invalidEmail: "Si us plau afegiu un correu electrònic vàlid.",
    invalidExpression: "L'expressió: {0} ha de tornar 'veritable'.",
    urlRequestError: "La sol·licitud va tornar error '{0}'. {1}",
    urlGetChoicesError: "La sol·licitud va tornar buida de dates o la propietat 'trajectòria' no és correcta",
    exceedMaxSize: "La mida de l'arxiu no pot excedir {0}.",
    otherRequiredError: "Si us plau afegiu l'altra estimació.",
    uploadingFile: "El seu arxiu s'està pujant. Si us plau esperi uns segons i intenteu-ho de nou.",
    loadingFile: "Càrrega...",
    chooseFile: "Trieu fitxer(s)...",
    noFileChosen: "No s'ha triat cap fitxer",
    filePlaceholder: "Arrossegueu i deixeu anar un fitxer aquí o feu clic al botó següent i trieu un fitxer per carregar.",
    confirmDelete: "Vols eliminar el registre?",
    keyDuplicationError: "Aquest valor ha de ser únic.",
    addColumn: "Afegeix una columna",
    addRow: "Afegiu una filera",
    removeRow: "Eliminar una filera",
    emptyRowsText: "No hi ha files.",
    addPanel: "Afegeix un nou",
    removePanel: "Treure",
    choices_Item: "ítem",
    matrix_column: "Columna",
    matrix_row: "Filera",
    multipletext_itemname: "SMS",
    savingData: "Els resultats s'estan guardant al servidor...",
    savingDataError: "S'ha produït un error i no hem pogut guardar els resultats.",
    savingDataSuccess: "Els resultats es van salvar amb èxit!",
    saveAgainButton: "Prova una altra vegada",
    timerMin: "min",
    timerSec: "Seg",
    timerSpentAll: "Heu passat {0} en aquesta pàgina i {1} en total.",
    timerSpentPage: "Has passat {0} en aquesta pàgina.",
    timerSpentSurvey: "Has gastat {0} en total.",
    timerLimitAll: "Heu passat {0} de {1} en aquesta pàgina i {2} de {3} en total.",
    timerLimitPage: "Has passat {0} de {1} en aquesta pàgina.",
    timerLimitSurvey: "Has gastat {0} d'{1} en total.",
    clearCaption: "Clar",
    signaturePlaceHolder: "Inscriu-te aquí",
    chooseFileCaption: "Tria un fitxer",
    takePhotoCaption: "Fer foto",
    photoPlaceholder: "Feu clic al botó següent per fer una foto amb la càmera.",
    fileOrPhotoPlaceholder: "Arrossegueu i deixeu anar o seleccioneu un fitxer per penjar-lo o fer-ne una foto amb la càmera.",
    replaceFileCaption: "Substitueix el fitxer",
    removeFileCaption: "Suprimeix aquest fitxer",
    booleanCheckedLabel: "Sí",
    booleanUncheckedLabel: "No",
    confirmRemoveFile: "Esteu segur que voleu eliminar aquest fitxer: {0}?",
    confirmRemoveAllFiles: "Esteu segur que voleu eliminar tots els fitxers?",
    questionTitlePatternText: "Títol de la pregunta",
    modalCancelButtonText: "Cancel·lar",
    modalApplyButtonText: "Aplicar",
    filterStringPlaceholder: "Escriviu per cercar...",
    emptyMessage: "No hi ha dades per mostrar",
    noEntriesText: "Encara no hi ha entrades.\nFeu clic al botó següent per afegir una entrada nova.",
    noEntriesReadonlyText: "No hi ha entrades.",
    more: "Més",
    tagboxDoneButtonCaption: "D'ACORD",
    selectToRankEmptyRankedAreaText: "Totes les opcions estan classificades",
    selectToRankEmptyUnrankedAreaText: "Arrossegueu i deixeu anar les opcions aquí per classificar-les"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["ca"] = catalanSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["ca"] = "català";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// previewText: "Preview" => "Preestrena"
// editText: "Edit" => "Editar"
// startSurveyText: "Start" => "Començar"
// noneItemText: "None" => "Cap"
// selectAllItemText: "Select All" => "Selecciona-ho tot"
// indexText: "{0} of {1}" => "{0} de {1}"
// panelDynamicProgressText: "{0} of {1}" => "{0} de {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panell {panelIndex}"
// questionsProgressText: "Answered {0}/{1} questions" => "Respostes {0}/{1} preguntes"
// completingSurveyBefore: "Our records show that you have already completed this survey." => "Els nostres registres mostren que ja heu completat aquesta enquesta."
// ratingOptionsCaption: "Select..." => "Seleccionar..."
// value: "value" => "valor"
// requiredErrorInPanel: "Response required: answer at least one question." => "Resposta necessària: respondre almenys una pregunta."
// minError: "The value should not be less than {0}" => "El valor no ha de ser inferior a {0}"
// maxError: "The value should not be greater than {0}" => "El valor no ha de ser superior a {0}"
// invalidExpression: "The expression: {0} should return 'true'." => "L'expressió: {0} ha de tornar 'veritable'."
// loadingFile: "Loading..." => "Càrrega..."
// chooseFile: "Choose file(s)..." => "Trieu fitxer(s)..."
// noFileChosen: "No file chosen" => "No s'ha triat cap fitxer"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Arrossegueu i deixeu anar un fitxer aquí o feu clic al botó següent i trieu un fitxer per carregar."
// confirmDelete: "Do you want to delete the record?" => "Vols eliminar el registre?"
// keyDuplicationError: "This value should be unique." => "Aquest valor ha de ser únic."
// addColumn: "Add Column" => "Afegeix una columna"
// emptyRowsText: "There are no rows." => "No hi ha files."
// addPanel: "Add new" => "Afegeix un nou"
// removePanel: "Remove" => "Treure"
// choices_Item: "item" => "ítem"
// multipletext_itemname: "text" => "SMS"
// savingData: "The results are being saved on the server..." => "Els resultats s'estan guardant al servidor..."
// savingDataError: "An error occurred and we could not save the results." => "S'ha produït un error i no hem pogut guardar els resultats."
// savingDataSuccess: "The results were saved successfully!" => "Els resultats es van salvar amb èxit!"
// saveAgainButton: "Try again" => "Prova una altra vegada"
// timerMin: "min" => "min"
// timerSec: "sec" => "Seg"
// timerSpentAll: "You have spent {0} on this page and {1} in total." => "Heu passat {0} en aquesta pàgina i {1} en total."
// timerSpentPage: "You have spent {0} on this page." => "Has passat {0} en aquesta pàgina."
// timerSpentSurvey: "You have spent {0} in total." => "Has gastat {0} en total."
// timerLimitAll: "You have spent {0} of {1} on this page and {2} of {3} in total." => "Heu passat {0} de {1} en aquesta pàgina i {2} de {3} en total."
// timerLimitPage: "You have spent {0} of {1} on this page." => "Has passat {0} de {1} en aquesta pàgina."
// timerLimitSurvey: "You have spent {0} of {1} in total." => "Has gastat {0} d'{1} en total."
// clearCaption: "Clear" => "Clar"
// signaturePlaceHolder: "Sign here" => "Inscriu-te aquí"
// chooseFileCaption: "Choose file" => "Tria un fitxer"
// removeFileCaption: "Remove this file" => "Suprimeix aquest fitxer"
// booleanCheckedLabel: "Yes" => "Sí"
// booleanUncheckedLabel: "No" => "No"
// confirmRemoveFile: "Are you sure that you want to remove this file: {0}?" => "Esteu segur que voleu eliminar aquest fitxer: {0}?"
// confirmRemoveAllFiles: "Are you sure that you want to remove all files?" => "Esteu segur que voleu eliminar tots els fitxers?"
// questionTitlePatternText: "Question Title" => "Títol de la pregunta"
// modalCancelButtonText: "Cancel" => "Cancel·lar"
// modalApplyButtonText: "Apply" => "Aplicar"
// filterStringPlaceholder: "Type to search..." => "Escriviu per cercar..."
// emptyMessage: "No data to display" => "No hi ha dades per mostrar"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Encara no hi ha entrades.\nFeu clic al botó següent per afegir una entrada nova."
// noEntriesReadonlyText: "There are no entries." => "No hi ha entrades."
// more: "More" => "Més"
// tagboxDoneButtonCaption: "OK" => "D'ACORD"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Totes les opcions estan classificades"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Arrossegueu i deixeu anar les opcions aquí per classificar-les"// takePhotoCaption: "Take Photo" => "Fer foto"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Feu clic al botó següent per fer una foto amb la càmera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Arrossegueu i deixeu anar o seleccioneu un fitxer per penjar-lo o fer-ne una foto amb la càmera."
// replaceFileCaption: "Replace file" => "Substitueix el fitxer"


/***/ }),

/***/ "./src/localization/croatian.ts":
/*!**************************************!*\
  !*** ./src/localization/croatian.ts ***!
  \**************************************/
/*! exports provided: croatianStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "croatianStrings", function() { return croatianStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var croatianStrings = {
    pagePrevText: "Prethodni",
    pageNextText: "Sljedeći",
    completeText: "Kompletan",
    previewText: "Pregled",
    editText: "Uređivanje",
    startSurveyText: "Početak",
    otherItemText: "Ostali (opis)",
    noneItemText: "Nitko",
    selectAllItemText: "Select All",
    progressText: "Stranica {0} od {1}",
    indexText: "{0} {1}",
    panelDynamicProgressText: "Zapisa {0} od {1}",
    panelDynamicTabTextFormat: "Ploča {panelIndex}",
    questionsProgressText: "Odgovorio na {0}/{1} pitanja",
    emptySurvey: "U anketi nema vidljive stranice ili pitanja.",
    completingSurvey: "Hvala vam što ste završili anketu!",
    completingSurveyBefore: "Naši zapisi pokazuju da ste već završili ovu anketu.",
    loadingSurvey: "Anketa o učitavanje...",
    placeholder: "Odaberite...",
    ratingOptionsCaption: "Odabirati...",
    value: "vrijednost",
    requiredError: "Molim vas odgovorite na pitanje.",
    requiredErrorInPanel: "Molim vas odgovorite na barem jedno pitanje.",
    requiredInAllRowsError: "Odgovorite na pitanja u svim redovima.",
    numericError: "Vrijednost bi trebala biti brojčana.",
    minError: "Vrijednost ne smije biti manja od {0}",
    maxError: "Vrijednost ne smije biti veća od {0}",
    textMinLength: "Unesite najmanje {0} znak(ova).",
    textMaxLength: "Unesite manje od {0} znak(ova).",
    textMinMaxLength: "Unesite više od {0} i manje od {1} znakova.",
    minRowCountError: "Molimo ispunite najmanje {0} redaka.",
    minSelectError: "Odaberite barem {0} varijante.",
    maxSelectError: "Odaberite ne više od {0} varijanti.",
    numericMinMax: "'{0}'bi trebao biti jednak ili više od {1} i jednak ili manji od {2}.",
    numericMin: "'{0}' bi trebao biti jednak ili više od {1}.",
    numericMax: "'{0}' bi trebao biti jednak ili manji od {1}",
    invalidEmail: "Unesite valjanu e-mail adresu.",
    invalidExpression: "Izraz: {0} treba vratiti 'true'.",
    urlRequestError: "Zahtjev vratio pogrešku '{0}'. {1}",
    urlGetChoicesError: "Zahtjev je vratio prazne podatke ili je 'path' svojstvo netočna.",
    exceedMaxSize: "Veličina datoteke ne smije prelaziti {0}.",
    otherRequiredError: "Unesite drugu vrijednost.",
    uploadingFile: "Vaša datoteka se prenosi. Pričekajte nekoliko sekundi i pokušajte ponovno.",
    loadingFile: "Učitavanje...",
    chooseFile: "Odaberite datoteku...",
    noFileChosen: "Nije odabrana datoteka",
    filePlaceholder: "Povucite i ispustite datoteku ovdje ili kliknite donji gumb i odaberite datoteku koju želite prenijeti.",
    confirmDelete: "Želite li izbrisati zapis?",
    keyDuplicationError: "Ta bi vrijednost trebala biti jedinstvena.",
    addColumn: "Dodavanje stupca",
    addRow: "Dodavanje redaka",
    removeRow: "Ukloniti",
    emptyRowsText: "Nema redova.",
    addPanel: "Dodavanje novih",
    removePanel: "Ukloniti",
    choices_Item: "stavku",
    matrix_column: "Stupca",
    matrix_row: "Redak",
    multipletext_itemname: "Tekstualna poruka",
    savingData: "Rezultati se spremaju na poslužitelju...",
    savingDataError: "Došlo je do pogreške i nismo mogli spremiti rezultate.",
    savingDataSuccess: "Rezultati su uspješno spremljeni!",
    saveAgainButton: "Pokušaj ponovo",
    timerMin: "min",
    timerSec: "sec",
    timerSpentAll: "Vi ste proveli {0} na ovoj stranici i {1} ukupno.",
    timerSpentPage: "Potrošili ste {0} na ovu stranicu.",
    timerSpentSurvey: "You have spent {0} in total. {0}.",
    timerLimitAll: "Vi ste proveli {0} od {1} na ovoj stranici i {2} od {3} ukupno.",
    timerLimitPage: "Potrošio si {0} od {1} na ovoj stranici.",
    timerLimitSurvey: "Ukupno ste potrošili {0} od {1}.",
    clearCaption: "Očistiti",
    signaturePlaceHolder: "Potpiši ovdje",
    chooseFileCaption: "Odaberite datoteku",
    takePhotoCaption: "Snimi fotografiju",
    photoPlaceholder: "Kliknite donji gumb da biste snimili fotografiju pomoću kamere.",
    fileOrPhotoPlaceholder: "Povucite i ispustite ili odaberite datoteku za prijenos ili snimanje fotografije pomoću kamere.",
    replaceFileCaption: "Zamijeni datoteku",
    removeFileCaption: "Uklonite ovu datoteku",
    booleanCheckedLabel: "Da",
    booleanUncheckedLabel: "Ne",
    confirmRemoveFile: "Jeste li sigurni da želite ukloniti ovu datoteku: {0}?",
    confirmRemoveAllFiles: "Jeste li sigurni da želite ukloniti sve datoteke?",
    questionTitlePatternText: "Naslov pitanja",
    modalCancelButtonText: "Otkazati",
    modalApplyButtonText: "Primijeniti",
    filterStringPlaceholder: "Upišite za pretraživanje...",
    emptyMessage: "Nema podataka za prikaz",
    noEntriesText: "Još nema unosa.\nKliknite donji gumb da biste dodali novi unos.",
    noEntriesReadonlyText: "Nema unosa.",
    more: "Više",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Svi izbori su rangirani",
    selectToRankEmptyUnrankedAreaText: "Ovdje povucite i ispustite odabire da biste ih rangirali"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["hr"] = croatianStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["hr"] = "hrvatski";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Ploča {panelIndex}"
// ratingOptionsCaption: "Select..." => "Odabirati..."
// minError: "The value should not be less than {0}" => "Vrijednost ne smije biti manja od {0}"
// maxError: "The value should not be greater than {0}" => "Vrijednost ne smije biti veća od {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Povucite i ispustite datoteku ovdje ili kliknite donji gumb i odaberite datoteku koju želite prenijeti."
// emptyRowsText: "There are no rows." => "Nema redova."
// multipletext_itemname: "text" => "Tekstualna poruka"
// signaturePlaceHolder: "Sign here" => "Potpiši ovdje"
// filterStringPlaceholder: "Type to search..." => "Upišite za pretraživanje..."
// emptyMessage: "No data to display" => "Nema podataka za prikaz"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Još nema unosa.\nKliknite donji gumb da biste dodali novi unos."
// noEntriesReadonlyText: "There are no entries." => "Nema unosa."
// more: "More" => "Više"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Svi izbori su rangirani"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Ovdje povucite i ispustite odabire da biste ih rangirali"// takePhotoCaption: "Take Photo" => "Snimi fotografiju"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kliknite donji gumb da biste snimili fotografiju pomoću kamere."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Povucite i ispustite ili odaberite datoteku za prijenos ili snimanje fotografije pomoću kamere."
// replaceFileCaption: "Replace file" => "Zamijeni datoteku"


/***/ }),

/***/ "./src/localization/czech.ts":
/*!***********************************!*\
  !*** ./src/localization/czech.ts ***!
  \***********************************/
/*! exports provided: czechSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "czechSurveyStrings", function() { return czechSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var czechSurveyStrings = {
    pagePrevText: "Předchozí",
    pageNextText: "Další",
    completeText: "Dokončit",
    previewText: "Náhled",
    editText: "Upravit",
    startSurveyText: "Začít",
    otherItemText: "Jiná odpověď (napište)",
    noneItemText: "Žádný",
    selectAllItemText: "Vybrat vše",
    progressText: "Strana {0} z {1}",
    indexText: "{0} z {1}",
    panelDynamicProgressText: "Záznam {0} z {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Zodpovězené otázky: {0} / {1}",
    emptySurvey: "Průzkum neobsahuje žádné otázky.",
    completingSurvey: "Děkujeme za vyplnění průzkumu!",
    completingSurveyBefore: "Naše záznamy ukazují, že jste tento průzkum již dokončil/a.",
    loadingSurvey: "Probíhá načítání průzkumu...",
    placeholder: "Vyberte...",
    ratingOptionsCaption: "Vybrat...",
    value: "hodnota",
    requiredError: "Odpovězte prosím na otázku.",
    requiredErrorInPanel: "Odpovězte prosím alespoň jednu otázku.",
    requiredInAllRowsError: "Odpovězte prosím na všechny otázky.",
    numericError: "V tomto poli lze zadat pouze čísla.",
    minError: "Hodnota by neměla být menší než {0}",
    maxError: "Hodnota by neměla být větší než {0}",
    textMinLength: "Zadejte prosím alespoň {0} znaků.",
    textMaxLength: "Zadejte prosím méně než {0} znaků.",
    textMinMaxLength: "Zadejte prosím více než {0} a méně než {1} znaků.",
    minRowCountError: "Vyplňte prosím alespoň {0} řádků.",
    minSelectError: "Vyberte prosím alespoň {0} varianty.",
    maxSelectError: "Nevybírejte prosím více než {0} variant.",
    numericMinMax: "Odpověď '{0}' by mělo být větší nebo rovno {1} a menší nebo rovno {2}",
    numericMin: "Odpověď '{0}' by mělo být větší nebo rovno {1}",
    numericMax: "Odpověď '{0}' by mělo být menší nebo rovno {1}",
    invalidEmail: "Zadejte prosím platnou e-mailovou adresu.",
    invalidExpression: "Výraz: {0} by měl vrátit hodnotu „true“.",
    urlRequestError: "Požadavek vrátil chybu '{0}'. {1}",
    urlGetChoicesError: "Požadavek nevrátil data nebo je neplatná vlastnost 'path'",
    exceedMaxSize: "Velikost souboru by neměla být větší než {0}.",
    otherRequiredError: "Zadejte prosím jinou hodnotu.",
    uploadingFile: "Váš soubor se nahrává. Zkuste to prosím za několik sekund.",
    loadingFile: "Načítání...",
    chooseFile: "Vyberte soubory...",
    noFileChosen: "Není zvolený žádný soubor",
    filePlaceholder: "Přetáhněte sem soubor nebo klikněte na tlačítko níže a vyberte soubor, který chcete nahrát.",
    confirmDelete: "Chcete záznam smazat?",
    keyDuplicationError: "Tato hodnota by měla být unikátní.",
    addColumn: "Přidat sloupec",
    addRow: "Přidat řádek",
    removeRow: "Odstranit",
    emptyRowsText: "Neexistují žádné řádky.",
    addPanel: "Přidat nový",
    removePanel: "Odstranit",
    choices_Item: "položka",
    matrix_column: "Sloupec",
    matrix_row: "Řádek",
    multipletext_itemname: "Text",
    savingData: "Výsledky se ukládají na server...",
    savingDataError: "Došlo k chybě a výsledky jsme nemohli uložit.",
    savingDataSuccess: "Výsledky byly úspěšně uloženy!",
    saveAgainButton: "Zkuste to znovu",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Na této stránce jste strávil/a celkem {0} z {1}.",
    timerSpentPage: "Na této stránce jste strávil/a {0}.",
    timerSpentSurvey: "Celkem jste strávil/a {0}.",
    timerLimitAll: "Na této stránce jste strávil/a {0} z {1} a celkem {2} z {3}.",
    timerLimitPage: "Na této stránce jste strávil/a {0} z {1}.",
    timerLimitSurvey: "Celkově jste strávil/a {0} z {1}.",
    clearCaption: "Vymazat",
    signaturePlaceHolder: "Podepište se zde",
    chooseFileCaption: "Vyberte soubor",
    takePhotoCaption: "Pořídit fotografii",
    photoPlaceholder: "Kliknutím na tlačítko níže pořídíte fotografii pomocí fotoaparátu.",
    fileOrPhotoPlaceholder: "Přetáhněte nebo vyberte soubor, který chcete nahrát nebo pořiďte fotografii pomocí fotoaparátu.",
    replaceFileCaption: "Nahradit soubor",
    removeFileCaption: "Odeberte tento soubor",
    booleanCheckedLabel: "Ano",
    booleanUncheckedLabel: "Ne",
    confirmRemoveFile: "Opravdu chcete odebrat tento soubor: {0}?",
    confirmRemoveAllFiles: "Opravdu chcete odstranit všechny soubory?",
    questionTitlePatternText: "Název otázky",
    modalCancelButtonText: "Zrušit",
    modalApplyButtonText: "Použít",
    filterStringPlaceholder: "Zadejte hledaný text...",
    emptyMessage: "Žádná data k zobrazení",
    noEntriesText: "Zatím nejsou žádné záznamy.\nKliknutím na tlačítko níže přidáte novou položku.",
    noEntriesReadonlyText: "Nejsou zde žádné položky.",
    more: "Více",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Všechny možnosti jsou seřazeny",
    selectToRankEmptyUnrankedAreaText: "Přetáhněte volby zde a seřaďte je"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["cs"] = czechSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["cs"] = "čeština";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} z {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Vybrat..."
// minError: "The value should not be less than {0}" => "Hodnota by neměla být menší než {0}"
// maxError: "The value should not be greater than {0}" => "Hodnota by neměla být větší než {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Přetáhněte sem soubor nebo klikněte na tlačítko níže a vyberte soubor, který chcete nahrát."
// emptyRowsText: "There are no rows." => "Neexistují žádné řádky."
// multipletext_itemname: "text" => "Text"
// signaturePlaceHolder: "Sign here" => "Podepište se zde"
// modalCancelButtonText: "Cancel" => "Zrušit"
// modalApplyButtonText: "Apply" => "Použít"
// filterStringPlaceholder: "Type to search..." => "Zadejte hledaný text..."
// emptyMessage: "No data to display" => "Žádná data k zobrazení"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Zatím nejsou žádné záznamy.\nKliknutím na tlačítko níže přidáte novou položku."
// noEntriesReadonlyText: "There are no entries." => "Nejsou zde žádné položky."
// more: "More" => "Více"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Všechny možnosti jsou seřazeny"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Přetáhněte volby zde a seřaďte je"// takePhotoCaption: "Take Photo" => "Pořídit fotografii"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kliknutím na tlačítko níže pořídíte fotografii pomocí fotoaparátu."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Přetáhněte nebo vyberte soubor, který chcete nahrát nebo pořiďte fotografii pomocí fotoaparátu."
// replaceFileCaption: "Replace file" => "Nahradit soubor"


/***/ }),

/***/ "./src/localization/danish.ts":
/*!************************************!*\
  !*** ./src/localization/danish.ts ***!
  \************************************/
/*! exports provided: danishSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "danishSurveyStrings", function() { return danishSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var danishSurveyStrings = {
    pagePrevText: "Tilbage",
    pageNextText: "Videre",
    completeText: "Færdig",
    previewText: "Forpremiere",
    editText: "Redigér",
    startSurveyText: "Start",
    otherItemText: "Valgfrit svar...",
    noneItemText: "Ingen",
    selectAllItemText: "Vælg alle",
    progressText: "Side {0} af {1}",
    indexText: "{0} af {1}",
    panelDynamicProgressText: "Optag {0} af {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Besvarede {0} / {1} spørgsmål",
    emptySurvey: "Der er ingen synlige spørgsmål.",
    completingSurvey: "Mange tak for din besvarelse!",
    completingSurveyBefore: "Vores data viser at du allerede har gennemført dette spørgeskema.",
    loadingSurvey: "Spørgeskemaet hentes fra serveren...",
    placeholder: "Vælg...",
    ratingOptionsCaption: "Markere...",
    value: "værdi",
    requiredError: "Besvar venligst spørgsmålet.",
    requiredErrorInPanel: "Besvar venligst mindst ét spørgsmål.",
    requiredInAllRowsError: "Besvar venligst spørgsmål i alle rækker.",
    numericError: "Angiv et tal.",
    minError: "Værdien bør ikke være mindre end {0}",
    maxError: "Værdien bør ikke være større end {0}",
    textMinLength: "Angiv mindst {0} tegn.",
    textMaxLength: "Please enter less than {0} characters.",
    textMinMaxLength: "Angiv mere end {0} og mindre end {1} tegn.",
    minRowCountError: "Udfyld mindst {0} rækker.",
    minSelectError: "Vælg venligst mindst {0} svarmulighed(er).",
    maxSelectError: "Vælg venligst færre {0} svarmuligheder(er).",
    numericMinMax: "'{0}' skal være lig med eller større end {1} og lig med eller mindre end {2}",
    numericMin: "'{0}' skal være lig med eller større end {1}",
    numericMax: "'{0}' skal være lig med eller mindre end {1}",
    invalidEmail: "Angiv venligst en gyldig e-mail adresse.",
    invalidExpression: "Udtrykket: {0} skal returnere 'true'.",
    urlRequestError: "Forespørgslen returnerede fejlen '{0}'. {1}",
    urlGetChoicesError: "Forespørgslen returnerede ingen data eller 'path' parameteren er forkert",
    exceedMaxSize: "Filstørrelsen må ikke overstige {0}.",
    otherRequiredError: "Angiv en værdi for dit valgfrie svar.",
    uploadingFile: "Din fil bliver uploadet. Vent nogle sekunder og prøv eventuelt igen.",
    loadingFile: "Indlæser...",
    chooseFile: "Vælg fil(er)...",
    noFileChosen: "Ingen fil er valgt",
    filePlaceholder: "Træk og slip en fil her, eller klik på knappen nedenfor, og vælg en fil, der skal uploades.",
    confirmDelete: "Vil du fjerne den?",
    keyDuplicationError: "Denne værdi skal være unik.",
    addColumn: "Tilføj kolonne",
    addRow: "Tilføj række",
    removeRow: "Fjern",
    emptyRowsText: "Der er ingen rækker.",
    addPanel: "Tilføj ny",
    removePanel: "Fjern",
    choices_Item: "valg",
    matrix_column: "Kolonne",
    matrix_row: "Række",
    multipletext_itemname: "Tekst",
    savingData: "Resultaterne bliver gemt på serveren...",
    savingDataError: "Der opstod en fejl og vi kunne ikke gemme resultatet.",
    savingDataSuccess: "Resultatet blev gemt!",
    saveAgainButton: "Prøv igen",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Du har brugt {0} på denne side og {1} i alt.",
    timerSpentPage: "Du har brugt {0} på denne side.",
    timerSpentSurvey: "Du har brugt {0} i alt.",
    timerLimitAll: "Du har brugt {0} af {1} på denne side og {2} af {3} i alt.",
    timerLimitPage: "Du har brugt {0} af {1} på denne side.",
    timerLimitSurvey: "Du har brugt {0} af {1} i alt.",
    clearCaption: "Fjern",
    signaturePlaceHolder: "Tilmeld dig her",
    chooseFileCaption: "Vælg fil",
    takePhotoCaption: "Tag billede",
    photoPlaceholder: "Klik på knappen nedenfor for at tage et billede med kameraet.",
    fileOrPhotoPlaceholder: "Træk og slip, eller vælg en fil, der skal uploades, eller tag et billede med kameraet.",
    replaceFileCaption: "Erstat fil",
    removeFileCaption: "Fjern denne fil",
    booleanCheckedLabel: "Ja",
    booleanUncheckedLabel: "Ingen",
    confirmRemoveFile: "Er du sikker på, at du vil fjerne denne fil: {0}?",
    confirmRemoveAllFiles: "Er du sikker på, at du vil fjerne alle filer?",
    questionTitlePatternText: "Spørgsmåls titel",
    modalCancelButtonText: "Aflyse",
    modalApplyButtonText: "Anvende",
    filterStringPlaceholder: "Skriv for at søge...",
    emptyMessage: "Ingen data at vise",
    noEntriesText: "Der er endnu ingen tilmeldinger.\nKlik på knappen nedenfor for at tilføje en ny post.",
    noEntriesReadonlyText: "Der er ingen poster.",
    more: "Mere",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Alle valg er rangeret",
    selectToRankEmptyUnrankedAreaText: "Træk og slip valg her for at rangere dem"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["da"] = danishSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["da"] = "dansk";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} af {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Markere..."
// minError: "The value should not be less than {0}" => "Værdien bør ikke være mindre end {0}"
// maxError: "The value should not be greater than {0}" => "Værdien bør ikke være større end {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Træk og slip en fil her, eller klik på knappen nedenfor, og vælg en fil, der skal uploades."
// emptyRowsText: "There are no rows." => "Der er ingen rækker."
// multipletext_itemname: "text" => "Tekst"
// signaturePlaceHolder: "Sign here" => "Tilmeld dig her"
// modalCancelButtonText: "Cancel" => "Aflyse"
// modalApplyButtonText: "Apply" => "Anvende"
// filterStringPlaceholder: "Type to search..." => "Skriv for at søge..."
// emptyMessage: "No data to display" => "Ingen data at vise"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Der er endnu ingen tilmeldinger.\nKlik på knappen nedenfor for at tilføje en ny post."
// noEntriesReadonlyText: "There are no entries." => "Der er ingen poster."
// more: "More" => "Mere"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Alle valg er rangeret"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Træk og slip valg her for at rangere dem"// takePhotoCaption: "Take Photo" => "Tag billede"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Klik på knappen nedenfor for at tage et billede med kameraet."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Træk og slip, eller vælg en fil, der skal uploades, eller tag et billede med kameraet."
// replaceFileCaption: "Replace file" => "Erstat fil"


/***/ }),

/***/ "./src/localization/dutch.ts":
/*!***********************************!*\
  !*** ./src/localization/dutch.ts ***!
  \***********************************/
/*! exports provided: dutchSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dutchSurveyStrings", function() { return dutchSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var dutchSurveyStrings = {
    pagePrevText: "Vorige",
    pageNextText: "Volgende",
    completeText: "Verzenden",
    previewText: "Voorbeeld",
    editText: "Bewerk",
    startSurveyText: "Start",
    otherItemText: "Anders, nl.",
    noneItemText: "Geen",
    selectAllItemText: "Selecteer Alles",
    progressText: "Pagina {0} van {1}",
    indexText: "{0} van {1}",
    panelDynamicProgressText: "Record {0} of {1}",
    panelDynamicTabTextFormat: "Paneel {panelIndex}",
    questionsProgressText: "Geantwoord {0}/{1} vragen",
    emptySurvey: "Er is geen zichtbare pagina of vraag in deze vragenlijst",
    completingSurvey: "Bedankt voor het invullen van de vragenlijst",
    completingSurveyBefore: "Onze gegevens tonen aan dat je deze vragenlijst reeds beantwoord hebt.",
    loadingSurvey: "De vragenlijst is aan het laden...",
    placeholder: "Kies...",
    ratingOptionsCaption: "Selecteren...",
    value: "waarde",
    requiredError: "Dit is een vereiste vraag",
    requiredErrorInPanel: "Gelieve ten minste een vraag te beantwoorden.",
    requiredInAllRowsError: "Deze vraag vereist één antwoord per rij",
    numericError: "Het antwoord moet een getal zijn",
    minError: "De waarde mag niet lager zijn dan {0}",
    maxError: "De waarde mag niet groter zijn dan {0}",
    textMinLength: "Vul minstens {0} karakters in",
    textMaxLength: "Gelieve minder dan {0} karakters in te vullen.",
    textMinMaxLength: "Gelieve meer dan {0} en minder dan {1} karakters in te vullen.",
    minRowCountError: "Gelieve ten minste {0} rijen in te vullen.",
    minSelectError: "Selecteer minimum {0} antwoorden",
    maxSelectError: "Selecteer niet meer dan {0} antwoorden",
    numericMinMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1} en kleiner of gelijk aan {2}",
    numericMin: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    numericMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    invalidEmail: "Vul een geldig e-mailadres in",
    invalidExpression: "De uitdrukking: {0} moet 'waar' teruggeven.",
    urlRequestError: "De vraag keerde een fout terug '{0}'. {1}",
    urlGetChoicesError: "De vraag gaf een leeg antwoord terug of de 'pad' eigenschap is niet correct",
    exceedMaxSize: "De grootte van het bestand mag niet groter zijn dan {0}",
    otherRequiredError: "Vul het veld 'Anders, nl.' in",
    uploadingFile: "Uw bestand wordt geüpload. Gelieve enkele seconden te wachten en opnieuw te proberen.",
    loadingFile: "Laden...",
    chooseFile: "Kies uw bestand(en)...",
    noFileChosen: "Geen bestand gekozen",
    filePlaceholder: "Sleep het bestand naar hier",
    confirmDelete: "Wilt u deze gegevens verwijderen?",
    keyDuplicationError: "Deze waarde moet uniek zijn.",
    addColumn: "Voeg kolom toe",
    addRow: "Voeg rij toe",
    removeRow: "Verwijder",
    emptyRowsText: "Er zijn geen rijen.",
    addPanel: "Nieuwe toevoegen",
    removePanel: "Verwijder",
    choices_Item: "onderwerp",
    matrix_column: "Kolom",
    matrix_row: "Rij",
    multipletext_itemname: "Sms",
    savingData: "De resultaten worden bewaard op de server...",
    savingDataError: "Er was een probleem en we konden de resultaten niet bewaren.",
    savingDataSuccess: "De resultaten werden succesvol bewaard!",
    saveAgainButton: "Probeer opnieuw",
    timerMin: "minimum",
    timerSec: "sec",
    timerSpentAll: "U heeft {0} gespendeerd op deze pagina en {1} in totaal.",
    timerSpentPage: "U heeft {0} op deze pagina gespendeerd.",
    timerSpentSurvey: "U heeft in totaal {0} gespendeerd.",
    timerLimitAll: "U heeft {0} van {1} op deze pagina gespendeerd en {2} van {3} in totaal.",
    timerLimitPage: "U heeft {0} van {1} gespendeerd op deze pagina.",
    timerLimitSurvey: "U heeft {0} van {1} in het totaal.",
    clearCaption: "Verwijder",
    signaturePlaceHolder: "Hier tekenen",
    chooseFileCaption: "Gekozen bestand",
    takePhotoCaption: "Foto maken",
    photoPlaceholder: "Klik op de onderstaande knop om een foto te maken met de camera.",
    fileOrPhotoPlaceholder: "Sleep en zet neer of selecteer een bestand om te uploaden of maak een foto met de camera.",
    replaceFileCaption: "Bestand vervangen",
    removeFileCaption: "Verwijder dit bestand",
    booleanCheckedLabel: "Ja",
    booleanUncheckedLabel: "Nee",
    confirmRemoveFile: "Weet u zeker dat u deze file wilt verwijderen: {0}?",
    confirmRemoveAllFiles: "Weet u zeker dat u al deze files wilt verwijderen?",
    questionTitlePatternText: "Titel van de vraag",
    modalCancelButtonText: "Annuleren",
    modalApplyButtonText: "Toepassen",
    filterStringPlaceholder: "Typ om te zoeken...",
    emptyMessage: "Geen gegevens om weer te geven",
    noEntriesText: "Er zijn nog geen inzendingen.\nKlik op de onderstaande knop om een nieuw item toe te voegen.",
    noEntriesReadonlyText: "Er zijn geen inzendingen.",
    more: "Meer",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Alle keuzes zijn gerangschikt",
    selectToRankEmptyUnrankedAreaText: "Drag en drop keuzes hier om ze te rangschikken"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["nl"] = dutchSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["nl"] = "nederlands";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} van {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Paneel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Selecteren..."
// minError: "The value should not be less than {0}" => "De waarde mag niet lager zijn dan {0}"
// maxError: "The value should not be greater than {0}" => "De waarde mag niet groter zijn dan {0}"
// emptyRowsText: "There are no rows." => "Er zijn geen rijen."
// multipletext_itemname: "text" => "Sms"
// modalCancelButtonText: "Cancel" => "Annuleren"
// modalApplyButtonText: "Apply" => "Toepassen"
// filterStringPlaceholder: "Type to search..." => "Typ om te zoeken..."
// emptyMessage: "No data to display" => "Geen gegevens om weer te geven"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Er zijn nog geen inzendingen.\nKlik op de onderstaande knop om een nieuw item toe te voegen."
// noEntriesReadonlyText: "There are no entries." => "Er zijn geen inzendingen."
// more: "More" => "Meer"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Alle keuzes zijn gerangschikt"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Drag en drop keuzes hier om ze te rangschikken"// takePhotoCaption: "Take Photo" => "Foto maken"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Klik op de onderstaande knop om een foto te maken met de camera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Sleep en zet neer of selecteer een bestand om te uploaden of maak een foto met de camera."
// replaceFileCaption: "Replace file" => "Bestand vervangen"


/***/ }),

/***/ "./src/localization/estonian.ts":
/*!**************************************!*\
  !*** ./src/localization/estonian.ts ***!
  \**************************************/
/*! exports provided: estonianSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estonianSurveyStrings", function() { return estonianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var estonianSurveyStrings = {
    pagePrevText: "Tagasi",
    pageNextText: "Edasi",
    completeText: "Lõpeta",
    previewText: "Eelvaade",
    editText: "Muuda",
    startSurveyText: "Alusta",
    otherItemText: "Muu (täpsusta)",
    noneItemText: "Mitte midagi",
    selectAllItemText: "Vali kõik",
    progressText: "Lehekülg {0}/{1}",
    indexText: "{0} {1}",
    panelDynamicProgressText: "Kirje {0}/{1}",
    panelDynamicTabTextFormat: "Paneel {panelIndex}",
    questionsProgressText: "Vastatud {0} küsimust {1}-st",
    emptySurvey: "Selles uuringus ei ole ühtki nähtavat lehekülge või küsimust.",
    completingSurvey: "Aitäh, et vastasid ankeedile!",
    completingSurveyBefore: "Meie andmetel oled sa sellele ankeedile juba vastanud.",
    loadingSurvey: "Laen ankeeti...",
    placeholder: "Vali...",
    ratingOptionsCaption: "Valima...",
    value: "väärtus",
    requiredError: "Palun vasta küsimusele.",
    requiredErrorInPanel: "Palun vasta vähemalt ühele küsimusele.",
    requiredInAllRowsError: "Palun anna vastus igal real.",
    numericError: "See peaks olema numbriline väärtus.",
    minError: "Väärtus ei tohiks olla väiksem kui {0}",
    maxError: "Väärtus ei tohiks olla suurem kui {0}",
    textMinLength: "Palun sisesta vähemalt {0} tähemärki.",
    textMaxLength: "Palun ära sisesta rohkem kui {0} tähemärki.",
    textMinMaxLength: "Sisesta palun {0} - {1} tähemärki.",
    minRowCountError: "Sisesta plaun vähemalt {0} rida.",
    minSelectError: "Palun vali vähemalt {0} varianti.",
    maxSelectError: "Palun vali kõige rohkem {0} varianti.",
    numericMinMax: "'{0}' peaks olema võrdne või suurem kui {1} ja võrdne või väiksem kui {2}",
    numericMin: "'{0}' peaks olema võrdne või suurem kui {1}",
    numericMax: "'{0}' peaks olema võrnde või väiksem kui {1}",
    invalidEmail: "Sisesta palun korrektne e-posti aadress.",
    invalidExpression: "Avaldis: {0} peaks tagastama tõese.",
    urlRequestError: "Taotlus tagastas vea „{0}”. {1}",
    urlGetChoicesError: "Taotlus tagastas tühjad andmed või atribuut 'path' on vale",
    exceedMaxSize: "Faili suurus ei tohi ületada {0}.",
    otherRequiredError: "Sisesta palun muu vastus.",
    uploadingFile: "Sinu fail laeb üles. Palun oota mõned sekundid ning proovi seejärel uuesti.",
    loadingFile: "Laen...",
    chooseFile: "Vali fail(id)...",
    noFileChosen: "Faili pole valitud",
    filePlaceholder: "Pukseerige fail siia või klõpsake allolevat nuppu ja valige üleslaaditav fail.",
    confirmDelete: "Kas tahad kirje kustutada?",
    keyDuplicationError: "See väärtus peab olema unikaalne.",
    addColumn: "Lisa veerg",
    addRow: "Lisa rida",
    removeRow: "Eemalda",
    emptyRowsText: "Ridu pole.",
    addPanel: "Lisa uus",
    removePanel: "Eemalda",
    choices_Item: "üksus",
    matrix_column: "Veerg",
    matrix_row: "Rida",
    multipletext_itemname: "Tekst",
    savingData: "Salvestan andmed serveris...",
    savingDataError: "Tekkis viga ning me ei saanud vastuseid salvestada.",
    savingDataSuccess: "Vastuste salvestamine õnnestus!",
    saveAgainButton: "Proovi uuesti",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Oled veetnud {0} sellel lehel ning kokku {1}.",
    timerSpentPage: "Oled veetnud {0} sellel lehel.",
    timerSpentSurvey: "Oled veetnud {0} kokku.",
    timerLimitAll: "Oled kulutanud {0} võimalikust {1} sellel lehel ning {2} võimalikust {3} kokku.",
    timerLimitPage: "Oled kulutanud {0} võimalikust {1} sellel lehel.",
    timerLimitSurvey: "Oled kulutanud {0} võimalikust {1} koguajast.",
    clearCaption: "Puhasta",
    signaturePlaceHolder: "Allkirjasta siin",
    chooseFileCaption: "Vali fail",
    takePhotoCaption: "Pildistamine",
    photoPlaceholder: "Kaamera abil pildistamiseks klõpsake allolevat nuppu.",
    fileOrPhotoPlaceholder: "Pukseerige või valige üleslaaditav fail või pildistage seda kaamera abil.",
    replaceFileCaption: "Asenda fail",
    removeFileCaption: "Eemalda see fail",
    booleanCheckedLabel: "Jah",
    booleanUncheckedLabel: "Ei",
    confirmRemoveFile: "Oled sa kindel, et soovid selle faili eemaldada: {0}?",
    confirmRemoveAllFiles: "Oled sa kindel, et soovid eemaldada kõik failid?",
    questionTitlePatternText: "Küsimuse pealkiri",
    modalCancelButtonText: "Tühistama",
    modalApplyButtonText: "Kohaldata",
    filterStringPlaceholder: "Tippige otsimiseks...",
    emptyMessage: "Kuvatavaid andmeid pole",
    noEntriesText: "Sissekandeid veel ei ole.\nUue kirje lisamiseks klõpsake allolevat nuppu.",
    noEntriesReadonlyText: "Kirjeid ei ole.",
    more: "Rohkem",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Kõik valikud on järjestatud",
    selectToRankEmptyUnrankedAreaText: "Lohistage valikuid siia, et neid järjestada"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["et"] = estonianSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["et"] = "eesti keel";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Paneel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Valima..."
// minError: "The value should not be less than {0}" => "Väärtus ei tohiks olla väiksem kui {0}"
// maxError: "The value should not be greater than {0}" => "Väärtus ei tohiks olla suurem kui {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Pukseerige fail siia või klõpsake allolevat nuppu ja valige üleslaaditav fail."
// emptyRowsText: "There are no rows." => "Ridu pole."
// multipletext_itemname: "text" => "Tekst"
// signaturePlaceHolder: "Sign here" => "Allkirjasta siin"
// modalCancelButtonText: "Cancel" => "Tühistama"
// modalApplyButtonText: "Apply" => "Kohaldata"
// filterStringPlaceholder: "Type to search..." => "Tippige otsimiseks..."
// emptyMessage: "No data to display" => "Kuvatavaid andmeid pole"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Sissekandeid veel ei ole.\nUue kirje lisamiseks klõpsake allolevat nuppu."
// noEntriesReadonlyText: "There are no entries." => "Kirjeid ei ole."
// more: "More" => "Rohkem"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Kõik valikud on järjestatud"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Lohistage valikuid siia, et neid järjestada"// takePhotoCaption: "Take Photo" => "Pildistamine"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kaamera abil pildistamiseks klõpsake allolevat nuppu."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Pukseerige või valige üleslaaditav fail või pildistage seda kaamera abil."
// replaceFileCaption: "Replace file" => "Asenda fail"


/***/ }),

/***/ "./src/localization/finnish.ts":
/*!*************************************!*\
  !*** ./src/localization/finnish.ts ***!
  \*************************************/
/*! exports provided: finnishSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finnishSurveyStrings", function() { return finnishSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var finnishSurveyStrings = {
    pagePrevText: "Edellinen",
    pageNextText: "Seuraava",
    completeText: "Valmis",
    previewText: "Esikatselu",
    editText: "Muokkaa",
    startSurveyText: "Aloita",
    otherItemText: "Muu (tarkenna)",
    noneItemText: "Ei mitään",
    selectAllItemText: "Valitse kaikki",
    progressText: "Sivu {0} / {1}",
    indexText: "{0} / {1}",
    panelDynamicProgressText: "Osio {0} / {1}",
    panelDynamicTabTextFormat: "Paneeli {panelIndex}",
    questionsProgressText: "Olet vastannut {0} / {1} kysymykseen.",
    emptySurvey: "Tässä kyselyssä ei ole yhtään näkyvillä olevaa sivua tai kysymystä.",
    completingSurvey: "Kiitos kyselyyn vastaamisesta!",
    completingSurveyBefore: "Tietojemme mukaan olet jo suorittanut tämän kyselyn.",
    loadingSurvey: "Kyselyä ladataan palvelimelta...",
    placeholder: "Valitse...",
    ratingOptionsCaption: "Arvioi napauttamalla tätä...",
    value: "arvo",
    requiredError: "Vastaa kysymykseen, kiitos.",
    requiredErrorInPanel: "Vastaa ainakin yhteen kysymykseen.",
    requiredInAllRowsError: "Vastaa kysymyksiin kaikilla riveillä.",
    numericError: "Arvon tulee olla numeerinen.",
    minError: "Arvo ei saa olla pienempi kuin {0}",
    maxError: "Arvo ei saa olla suurempi kuin {0}",
    textMinLength: "Syötä vähintään {0} merkkiä.",
    textMaxLength: "Älä syötä yli {0} merkkiä.",
    textMinMaxLength: "Syötä vähintään {0} ja enintään {1} merkkiä.",
    minRowCountError: "Täytä vähintään {0} riviä.",
    minSelectError: "Valitse vähintään {0} vaihtoehtoa.",
    maxSelectError: "Valitse enintään {0} vaihtoehtoa.",
    numericMinMax: "Luvun '{0}' tulee olla vähintään {1} ja korkeintaan {2}.",
    numericMin: "Luvun '{0}' tulee olla vähintään {1}.",
    numericMax: "Luvun '{0}' tulee olla korkeintaan {1}.",
    invalidEmail: "Syötä validi sähköpostiosoite.",
    invalidExpression: "Lausekkeen: {0} pitäisi palauttaa 'true'.",
    urlRequestError: "Pyyntö palautti virheen {0}. {1}",
    urlGetChoicesError: "Pyyntö palautti tyhjän tiedoston tai 'path'-asetus on väärä",
    exceedMaxSize: "Tiedoston koko ei saa olla suurempi kuin {0}.",
    otherRequiredError: "Tarkenna vastaustasi tekstikenttään.",
    uploadingFile: "Tiedostoa lähetetään. Odota muutama sekunti ja yritä uudelleen.",
    loadingFile: "Ladataan...",
    chooseFile: "Valitse tiedosto(t)...",
    noFileChosen: "Ei tiedostoa valittuna",
    filePlaceholder: "Pudota tiedosto tähän tai lataa tiedosto napsauttamalla alla olevaa painiketta.",
    confirmDelete: "Haluatko poistaa osion?",
    keyDuplicationError: "Tämä arvo on jo käytössä. Syötä toinen arvo.",
    addColumn: "Lisää sarake",
    addRow: "Lisää rivi",
    removeRow: "Poista",
    emptyRowsText: "Ei rivejä",
    addPanel: "Lisää uusi",
    removePanel: "Poista",
    choices_Item: "kohde",
    matrix_column: "Sarake",
    matrix_row: "Rivi",
    multipletext_itemname: "teksti",
    savingData: "Tietoja tallennetaan palvelimelle...",
    savingDataError: "Tapahtui virhe, emmekä voineet tallentaa kyselyn tietoja.",
    savingDataSuccess: "Tiedot tallennettiin onnistuneesti!",
    saveAgainButton: "Yritä uudelleen",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Olet käyttänyt {0} tällä sivulla ja yhteensä {1}.",
    timerSpentPage: "Olet käyttänyt {0} tällä sivulla.",
    timerSpentSurvey: "Olet käyttänyt yhteensä {0}.",
    timerLimitAll: "Olet käyttänyt tällä sivulla {0} / {1} ja yhteensä {2} / {3}.",
    timerLimitPage: "Olet käyttänyt {0} / {1} tällä sivulla.",
    timerLimitSurvey: "Olet käyttänyt yhteensä {0} / {1}.",
    clearCaption: "Tyhjennä",
    signaturePlaceHolder: "Allekirjoita tähän",
    chooseFileCaption: "Valitse tiedosto",
    takePhotoCaption: "Ota valokuva",
    photoPlaceholder: "Napsauta alla olevaa painiketta ottaaksesi valokuvan kameralla.",
    fileOrPhotoPlaceholder: "Vedä ja pudota tai valitse ladattava tiedosto tai ota valokuva kameralla.",
    replaceFileCaption: "Korvaa tiedosto",
    removeFileCaption: "Poista tämä tiedosto",
    booleanCheckedLabel: "Kyllä",
    booleanUncheckedLabel: "Ei",
    confirmRemoveFile: "Haluatko varmasti poistaa tämän tiedoston: {0}?",
    confirmRemoveAllFiles: "Haluatko varmasti poistaa kaikki tiedostot?",
    questionTitlePatternText: "Kysymyksen otsikko",
    modalCancelButtonText: "Peruuta",
    modalApplyButtonText: "Käytä",
    filterStringPlaceholder: "Hae kirjoittamalla...",
    emptyMessage: "Ei näytettäviä tietoja",
    noEntriesText: "Merkintöjä ei ole vielä.\nLisää uusi merkintä napsauttamalla alla olevaa painiketta.",
    noEntriesReadonlyText: "Merkintöjä ei ole.",
    more: "Enemmän",
    tagboxDoneButtonCaption: "OKEI",
    selectToRankEmptyRankedAreaText: "Kaikki valinnat asetetaan paremmuusjärjestykseen",
    selectToRankEmptyUnrankedAreaText: "Vedä ja pudota vaihtoehdot tähän luokitellaksesi ne"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["fi"] = finnishSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["fi"] = "suomi";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Paneeli {panelIndex}"
// emptyMessage: "No data to display" => "Ei näytettäviä tietoja"
// noEntriesReadonlyText: "There are no entries." => "Merkintöjä ei ole."
// more: "More" => "Enemmän"
// tagboxDoneButtonCaption: "OK" => "OKEI"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Kaikki valinnat asetetaan paremmuusjärjestykseen"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Vedä ja pudota vaihtoehdot tähän luokitellaksesi ne"// takePhotoCaption: "Take Photo" => "Ota valokuva"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Napsauta alla olevaa painiketta ottaaksesi valokuvan kameralla."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Vedä ja pudota tai valitse ladattava tiedosto tai ota valokuva kameralla."
// replaceFileCaption: "Replace file" => "Korvaa tiedosto"


/***/ }),

/***/ "./src/localization/french.ts":
/*!************************************!*\
  !*** ./src/localization/french.ts ***!
  \************************************/
/*! exports provided: frenchSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frenchSurveyStrings", function() { return frenchSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var frenchSurveyStrings = {
    pagePrevText: "Précédent",
    pageNextText: "Suivant",
    completeText: "Terminer",
    previewText: "Aperçu",
    editText: "Modifier",
    startSurveyText: "Commencer",
    otherItemText: "Autre (préciser)",
    noneItemText: "Aucun",
    selectAllItemText: "Tout sélectionner",
    progressText: "Page {0} sur {1}",
    indexText: "{0} sur {1}",
    panelDynamicProgressText: "Enregistrement {0} sur {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "{0}/{1} question(s) répondue(s)",
    emptySurvey: "Il n'y a ni page visible ni question visible dans ce questionnaire",
    completingSurvey: "Merci d'avoir répondu au questionnaire !",
    completingSurveyBefore: "Nos données indiquent que vous avez déjà rempli ce questionnaire.",
    loadingSurvey: "Le questionnaire est en cours de chargement...",
    placeholder: "Choisissez...",
    ratingOptionsCaption: "Appuyez ici pour noter...",
    value: "valeur",
    requiredError: "La réponse à cette question est obligatoire.",
    requiredErrorInPanel: "Merci de répondre au moins à une question.",
    requiredInAllRowsError: "Toutes les lignes sont obligatoires",
    numericError: "La réponse doit être un nombre.",
    minError: "La valeur ne doit pas être inférieure à {0}",
    maxError: "La valeur ne doit pas être supérieure à {0}",
    textMinLength: "Merci de saisir au moins {0} caractères.",
    textMaxLength: "Merci de saisir moins de {0} caractères.",
    textMinMaxLength: "Merci de saisir entre {0} et {1} caractères.",
    minRowCountError: "Merci de compléter au moins {0} lignes.",
    minSelectError: "Merci de sélectionner au minimum {0} réponses.",
    maxSelectError: "Merci de sélectionner au maximum {0} réponses.",
    numericMinMax: "Votre réponse '{0}' doit être supérieure ou égale à {1} et inférieure ou égale à {2}",
    numericMin: "Votre réponse '{0}' doit être supérieure ou égale à {1}",
    numericMax: "Votre réponse '{0}' doit être inférieure ou égale à {1}",
    invalidEmail: "Merci d'entrer une adresse mail valide.",
    invalidExpression: "L'expression: {0} doit retourner 'true'.",
    urlRequestError: "La requête a renvoyé une erreur '{0}'. {1}",
    urlGetChoicesError: "La requête a renvoyé des données vides ou la propriété 'path' est incorrecte",
    exceedMaxSize: "La taille du fichier ne doit pas excéder {0}.",
    otherRequiredError: "Merci de préciser le champ 'Autre'.",
    uploadingFile: "Votre fichier est en cours de chargement. Merci d'attendre quelques secondes et de réessayer.",
    loadingFile: "Chargement...",
    chooseFile: "Ajouter des fichiers...",
    noFileChosen: "Aucun fichier ajouté",
    filePlaceholder: "Déposez un fichier ici ou cliquez sur le bouton ci-dessous pour charger le fichier.",
    confirmDelete: "Voulez-vous supprimer cet enregistrement ?",
    keyDuplicationError: "Cette valeur doit être unique.",
    addColumn: "Ajouter une colonne",
    addRow: "Ajouter une ligne",
    removeRow: "Supprimer",
    emptyRowsText: "Il n'y a pas de lignes.",
    addPanel: "Ajouter",
    removePanel: "Supprimer",
    choices_Item: "item",
    matrix_column: "Colonne",
    matrix_row: "Ligne",
    multipletext_itemname: "texte",
    savingData: "Les résultats sont en cours de sauvegarde sur le serveur...",
    savingDataError: "Une erreur est survenue et a empêché la sauvegarde des résultats.",
    savingDataSuccess: "Les résultats ont bien été enregistrés !",
    saveAgainButton: "Réessayer",
    timerMin: "min",
    timerSec: "sec",
    timerSpentAll: "Vous avez passé {0} sur cette page et {1} au total.",
    timerSpentPage: "Vous avez passé {0} sur cette page.",
    timerSpentSurvey: "Vous avez passé {0} au total.",
    timerLimitAll: "Vous avez passé {0} sur {1} sur cette page et {2} sur {3} au total.",
    timerLimitPage: "Vous avez passé {0} sur {1} sur cette page.",
    timerLimitSurvey: "Vous avez passé {0} sur {1} au total.",
    clearCaption: "Vider",
    signaturePlaceHolder: "Signez ici",
    chooseFileCaption: "Ajouter un fichier",
    takePhotoCaption: "Prendre une photo",
    photoPlaceholder: "Cliquez sur le bouton ci-dessous pour prendre une photo à l’aide de l’appareil photo.",
    fileOrPhotoPlaceholder: "Faites glisser et déposez ou sélectionnez un fichier à télécharger ou à prendre une photo à l’aide de l’appareil photo.",
    replaceFileCaption: "Remplacer le fichier",
    removeFileCaption: "Enlever ce fichier",
    booleanCheckedLabel: "Oui",
    booleanUncheckedLabel: "Non",
    confirmRemoveFile: "Êtes-vous certains de vouloir supprimer ce fichier : {0}?",
    confirmRemoveAllFiles: "Êtes-vous certains de vouloir supprimer tous les fichiers?",
    questionTitlePatternText: "Titre de la question",
    modalCancelButtonText: "Annuler",
    modalApplyButtonText: "Appliquer",
    filterStringPlaceholder: "Tapez pour rechercher...",
    emptyMessage: "Aucune donnée à afficher",
    noEntriesText: "Il n'y a pas encore d'entrées.\nCliquez sur le bouton ci-dessous pour ajouter une nouvelle entrée.",
    noEntriesReadonlyText: "Il n’y a pas d’entrées.",
    more: "Plus",
    tagboxDoneButtonCaption: "D’ACCORD",
    selectToRankEmptyRankedAreaText: "Tous les choix sont classés",
    selectToRankEmptyUnrankedAreaText: "Faites glisser et déposez les choix ici pour les classer"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["fr"] = frenchSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["fr"] = "français";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// emptyMessage: "No data to display" => "Aucune donnée à afficher"
// noEntriesReadonlyText: "There are no entries." => "Il n’y a pas d’entrées."
// more: "More" => "Plus"
// tagboxDoneButtonCaption: "OK" => "D’ACCORD"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Tous les choix sont classés"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Faites glisser et déposez les choix ici pour les classer"// takePhotoCaption: "Take Photo" => "Prendre une photo"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Cliquez sur le bouton ci-dessous pour prendre une photo à l’aide de l’appareil photo."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Faites glisser et déposez ou sélectionnez un fichier à télécharger ou à prendre une photo à l’aide de l’appareil photo."
// replaceFileCaption: "Replace file" => "Remplacer le fichier"


/***/ }),

/***/ "./src/localization/georgian.ts":
/*!**************************************!*\
  !*** ./src/localization/georgian.ts ***!
  \**************************************/
/*! exports provided: georgianSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "georgianSurveyStrings", function() { return georgianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var georgianSurveyStrings = {
    pagePrevText: "უკან",
    pageNextText: "შემდეგ",
    completeText: "დასრულება",
    previewText: "გადახედვა",
    editText: "რედაქტირება",
    startSurveyText: "დაქოქვა",
    otherItemText: "სხვა (გთხოვთ მიუთითეთ)",
    noneItemText: "არცერთი",
    selectAllItemText: "ყველას მონიშნა",
    progressText: "გვერდი {0} / {1}",
    indexText: "{1} {0}",
    panelDynamicProgressText: "{1} {0}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "უპასუხეთ {0}/{1} კითხვებს",
    emptySurvey: "არცერთი კითხვა არ არის.",
    completingSurvey: "გმადლობთ კითხვარის შევსებისთვის!",
    completingSurveyBefore: "ჩვენი ჩანაწერები აჩვენებს, რომ თქვენ უკვე დაასრულეთ ეს გამოკითხვა.",
    loadingSurvey: "ჩატვირთვა სერვერიდან...",
    placeholder: "არჩევა...",
    ratingOptionsCaption: "აირჩიეთ...",
    value: "ღირებულება",
    requiredError: "გთხოვთ უპასუხეთ კითხვას.",
    requiredErrorInPanel: "საჭიროა პასუხი: უპასუხეთ მინიმუმ ერთ კითხვას.",
    requiredInAllRowsError: "საჭიროა პასუხი: უპასუხეთ კითხვებს ყველა რიგში.",
    numericError: "პასუხი უნდა იყოს რიცხვი.",
    minError: "ღირებულება არ უნდა იყოს ნაკლები {0}",
    maxError: "ღირებულება არ უნდა იყოს {0}",
    textMinLength: "გთხოვთ შეიყვანეთ არანაკლებ {0} სიმბოლო.",
    textMaxLength: "გთხოვთ, შეიყვანოთ არაუმეტეს {0} სიმბოლო(ებ)ი.",
    textMinMaxLength: "გთხოვთ, შეიყვანოთ მინიმუმ {0} და არაუმეტეს {1} სიმბოლო.",
    minRowCountError: "გთხოვთ შეავსოთ მინიმუმ {0} რიგი( ებ)ი.",
    minSelectError: "გთხოვთ აირჩიეთ არანაკლებ {0} ვარიანტი.",
    maxSelectError: "გთხოვთ აირჩიეთ არაუმეტეს {0} ვარიანტი.",
    numericMinMax: "'{0}' უნდა იყოს მეტი ან ტოლი, ვიდრე {1}, და ნაკლები ან ტოლი ვიდრე {2}",
    numericMin: "'{0}' უნდა იყოს მეტი ან ტოლი ვიდრე {1}",
    numericMax: "'{0}' უნდა იყოს ნაკლები ან ტოლი ვიდრე {1}",
    invalidEmail: "გთხოვთ შეიყვანოთ ელ. ფოსტის რეალური მისამართი.",
    invalidExpression: "გამოთქმა: {0} უნდა დაბრუნდეს \"ჭეშმარიტი\".",
    urlRequestError: "მოთხოვნა დაუბრუნდა შეცდომას '{0}'. {1}",
    urlGetChoicesError: "მოთხოვნამ დაუბრუნა ცარიელი მონაცემები ან \"ბილიკის\" ქონება არასწორია",
    exceedMaxSize: "ფაილის ზომა არ უნდა აღემატებოდეს {0}.",
    otherRequiredError: "საჭიროა პასუხი: შეიყვანეთ სხვა მნიშვნელობა.",
    uploadingFile: "თქვენი ფაილი ატვირთვაა. გთხოვთ დაელოდოთ რამდენიმე წამს და კიდევ სცადოთ.",
    loadingFile: "იტვირთება...",
    chooseFile: "აირჩიეთ ფაილი...",
    noFileChosen: "ფაილის არჩევა არ არის",
    filePlaceholder: "გადაიტანეთ და ჩამოაგდეთ ფაილი აქ ან დააჭირეთ ქვემოთ მოცემულ ღილაკს და აირჩიეთ ფაილი ასატვირთად.",
    confirmDelete: "გსურთ ჩანაწერის წაშლა?",
    keyDuplicationError: "ეს მნიშვნელობა უნდა იყოს უნიკალური.",
    addColumn: "სვეტის დამატება",
    addRow: "რიგის დამატება",
    removeRow: "წაშლა",
    emptyRowsText: "რიგები არ არის.",
    addPanel: "ახალი დამატება",
    removePanel: "წაშლა",
    choices_Item: "ნივთი",
    matrix_column: "სვეტი",
    matrix_row: "რიგი",
    multipletext_itemname: "ტექსტი",
    savingData: "შედეგები ინახება სერვერზე...",
    savingDataError: "დაფიქსირდა შეცდომა და შედეგი ვერ შევინახავდით.",
    savingDataSuccess: "შედეგები წარმატებით გადაარჩინეს!",
    saveAgainButton: "კიდევ სცადე",
    timerMin: "წთ",
    timerSec: "წმ",
    timerSpentAll: "თქვენ დახარჯეთ {0} ამ გვერდზე და ჯამში {1}.",
    timerSpentPage: "თქვენ {0} დახარჯეთ ამ გვერდზე.",
    timerSpentSurvey: "თქვენ სულ {0} დახარჯეთ.",
    timerLimitAll: "თქვენ დახარჯეთ {1} {0} ამ გვერდზე და ჯამში {3} {2}.",
    timerLimitPage: "თქვენ ამ გვერდზე {1} {0} დახარჯეთ.",
    timerLimitSurvey: "თქვენ სულ {1} {0} დახარჯეთ.",
    clearCaption: "მოწმენდილი ცა",
    signaturePlaceHolder: "შესვლა აქ",
    chooseFileCaption: "ვაუჩერის ნახვა",
    takePhotoCaption: "გადაიღეთ ფოტო",
    photoPlaceholder: "დააჭირეთ ქვემოთ მოცემულ ღილაკს, რომ გადაიღოთ ფოტო კამერის გამოყენებით.",
    fileOrPhotoPlaceholder: "გადაიტანეთ და ჩამოაგდეთ ან შეარჩიეთ ფაილი კამერის გამოყენებით ფოტოს ასატვირთად ან გადასაღებად.",
    replaceFileCaption: "ფაილის შეცვლა",
    removeFileCaption: "ამ ფაილის წაშლა",
    booleanCheckedLabel: "დიახ",
    booleanUncheckedLabel: "არა",
    confirmRemoveFile: "დარწმუნებული ხართ, რომ გსურთ ამ ფაილის წაშლა: {0}?",
    confirmRemoveAllFiles: "დარწმუნებული ხართ, რომ გსურთ ყველა ფაილის წაშლა?",
    questionTitlePatternText: "კითხვის სათაური",
    modalCancelButtonText: "გაუქმება",
    modalApplyButtonText: "მიღება",
    filterStringPlaceholder: "ჩაწერეთ ძებნა...",
    emptyMessage: "მონაცემები არ არის საჩვენებლად",
    noEntriesText: "ჯერ არ არის ჩანაწერები.\nდააჭირეთ ქვემოთ მოცემულ ღილაკს, რომ დაამატოთ ახალი ჩანაწერი.",
    noEntriesReadonlyText: "არ არსებობს ჩანაწერები.",
    more: "სრულად",
    tagboxDoneButtonCaption: "კარგი",
    selectToRankEmptyRankedAreaText: "ყველა არჩევანი რანჟირებულია",
    selectToRankEmptyUnrankedAreaText: "გადაიტანეთ და ჩამოაგდეთ არჩევანი აქ, რომ დაასახელოთ ისინი"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["ka"] = georgianSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["ka"] = "ქართული";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// previewText: "Preview" => "გადახედვა"
// editText: "Edit" => "რედაქტირება"
// startSurveyText: "Start" => "დაქოქვა"
// noneItemText: "None" => "არცერთი"
// selectAllItemText: "Select All" => "ყველას მონიშნა"
// indexText: "{0} of {1}" => "{1} {0}"
// panelDynamicProgressText: "{0} of {1}" => "{1} {0}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// questionsProgressText: "Answered {0}/{1} questions" => "უპასუხეთ {0}/{1} კითხვებს"
// completingSurveyBefore: "Our records show that you have already completed this survey." => "ჩვენი ჩანაწერები აჩვენებს, რომ თქვენ უკვე დაასრულეთ ეს გამოკითხვა."
// ratingOptionsCaption: "Select..." => "აირჩიეთ..."
// value: "value" => "ღირებულება"
// requiredErrorInPanel: "Response required: answer at least one question." => "საჭიროა პასუხი: უპასუხეთ მინიმუმ ერთ კითხვას."
// requiredInAllRowsError: "Response required: answer questions in all rows." => "საჭიროა პასუხი: უპასუხეთ კითხვებს ყველა რიგში."
// minError: "The value should not be less than {0}" => "ღირებულება არ უნდა იყოს ნაკლები {0}"
// maxError: "The value should not be greater than {0}" => "ღირებულება არ უნდა იყოს {0}"
// textMaxLength: "Please enter no more than {0} character(s)." => "გთხოვთ, შეიყვანოთ არაუმეტეს {0} სიმბოლო(ებ)ი."
// textMinMaxLength: "Please enter at least {0} and no more than {1} characters." => "გთხოვთ, შეიყვანოთ მინიმუმ {0} და არაუმეტეს {1} სიმბოლო."
// minRowCountError: "Please fill in at least {0} row(s)." => "გთხოვთ შეავსოთ მინიმუმ {0} რიგი( ებ)ი."
// invalidExpression: "The expression: {0} should return 'true'." => "გამოთქმა: {0} უნდა დაბრუნდეს \"ჭეშმარიტი\"."
// urlRequestError: "The request returned error '{0}'. {1}" => "მოთხოვნა დაუბრუნდა შეცდომას '{0}'. {1}"
// urlGetChoicesError: "The request returned empty data or the 'path' property is incorrect" => "მოთხოვნამ დაუბრუნა ცარიელი მონაცემები ან \"ბილიკის\" ქონება არასწორია"
// exceedMaxSize: "The file size should not exceed {0}." => "ფაილის ზომა არ უნდა აღემატებოდეს {0}."
// otherRequiredError: "Response required: enter another value." => "საჭიროა პასუხი: შეიყვანეთ სხვა მნიშვნელობა."
// uploadingFile: "Your file is uploading. Please wait several seconds and try again." => "თქვენი ფაილი ატვირთვაა. გთხოვთ დაელოდოთ რამდენიმე წამს და კიდევ სცადოთ."
// loadingFile: "Loading..." => "იტვირთება..."
// chooseFile: "Choose file(s)..." => "აირჩიეთ ფაილი..."
// noFileChosen: "No file chosen" => "ფაილის არჩევა არ არის"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "გადაიტანეთ და ჩამოაგდეთ ფაილი აქ ან დააჭირეთ ქვემოთ მოცემულ ღილაკს და აირჩიეთ ფაილი ასატვირთად."
// confirmDelete: "Do you want to delete the record?" => "გსურთ ჩანაწერის წაშლა?"
// keyDuplicationError: "This value should be unique." => "ეს მნიშვნელობა უნდა იყოს უნიკალური."
// addColumn: "Add Column" => "სვეტის დამატება"
// addRow: "Add Row" => "რიგის დამატება"
// removeRow: "Remove" => "წაშლა"
// emptyRowsText: "There are no rows." => "რიგები არ არის."
// addPanel: "Add new" => "ახალი დამატება"
// removePanel: "Remove" => "წაშლა"
// choices_Item: "item" => "ნივთი"
// matrix_column: "Column" => "სვეტი"
// matrix_row: "Row" => "რიგი"
// multipletext_itemname: "text" => "ტექსტი"
// savingData: "The results are being saved on the server..." => "შედეგები ინახება სერვერზე..."
// savingDataError: "An error occurred and we could not save the results." => "დაფიქსირდა შეცდომა და შედეგი ვერ შევინახავდით."
// savingDataSuccess: "The results were saved successfully!" => "შედეგები წარმატებით გადაარჩინეს!"
// saveAgainButton: "Try again" => "კიდევ სცადე"
// timerMin: "min" => "წთ"
// timerSec: "sec" => "წმ"
// timerSpentAll: "You have spent {0} on this page and {1} in total." => "თქვენ დახარჯეთ {0} ამ გვერდზე და ჯამში {1}."
// timerSpentPage: "You have spent {0} on this page." => "თქვენ {0} დახარჯეთ ამ გვერდზე."
// timerSpentSurvey: "You have spent {0} in total." => "თქვენ სულ {0} დახარჯეთ."
// timerLimitAll: "You have spent {0} of {1} on this page and {2} of {3} in total." => "თქვენ დახარჯეთ {1} {0} ამ გვერდზე და ჯამში {3} {2}."
// timerLimitPage: "You have spent {0} of {1} on this page." => "თქვენ ამ გვერდზე {1} {0} დახარჯეთ."
// timerLimitSurvey: "You have spent {0} of {1} in total." => "თქვენ სულ {1} {0} დახარჯეთ."
// clearCaption: "Clear" => "მოწმენდილი ცა"
// signaturePlaceHolder: "Sign here" => "შესვლა აქ"
// chooseFileCaption: "Choose file" => "ვაუჩერის ნახვა"
// removeFileCaption: "Remove this file" => "ამ ფაილის წაშლა"
// booleanCheckedLabel: "Yes" => "დიახ"
// booleanUncheckedLabel: "No" => "არა"
// confirmRemoveFile: "Are you sure that you want to remove this file: {0}?" => "დარწმუნებული ხართ, რომ გსურთ ამ ფაილის წაშლა: {0}?"
// confirmRemoveAllFiles: "Are you sure that you want to remove all files?" => "დარწმუნებული ხართ, რომ გსურთ ყველა ფაილის წაშლა?"
// questionTitlePatternText: "Question Title" => "კითხვის სათაური"
// modalCancelButtonText: "Cancel" => "გაუქმება"
// modalApplyButtonText: "Apply" => "მიღება"
// filterStringPlaceholder: "Type to search..." => "ჩაწერეთ ძებნა..."
// emptyMessage: "No data to display" => "მონაცემები არ არის საჩვენებლად"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "ჯერ არ არის ჩანაწერები.\nდააჭირეთ ქვემოთ მოცემულ ღილაკს, რომ დაამატოთ ახალი ჩანაწერი."
// noEntriesReadonlyText: "There are no entries." => "არ არსებობს ჩანაწერები."
// more: "More" => "სრულად"
// tagboxDoneButtonCaption: "OK" => "კარგი"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "ყველა არჩევანი რანჟირებულია"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "გადაიტანეთ და ჩამოაგდეთ არჩევანი აქ, რომ დაასახელოთ ისინი"// takePhotoCaption: "Take Photo" => "გადაიღეთ ფოტო"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "დააჭირეთ ქვემოთ მოცემულ ღილაკს, რომ გადაიღოთ ფოტო კამერის გამოყენებით."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "გადაიტანეთ და ჩამოაგდეთ ან შეარჩიეთ ფაილი კამერის გამოყენებით ფოტოს ასატვირთად ან გადასაღებად."
// replaceFileCaption: "Replace file" => "ფაილის შეცვლა"


/***/ }),

/***/ "./src/localization/german.ts":
/*!************************************!*\
  !*** ./src/localization/german.ts ***!
  \************************************/
/*! exports provided: germanSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "germanSurveyStrings", function() { return germanSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var germanSurveyStrings = {
    pagePrevText: "Zurück",
    pageNextText: "Weiter",
    completeText: "Abschließen",
    previewText: "Vorschau",
    editText: "Bearbeiten",
    startSurveyText: "Start",
    otherItemText: "Sonstiges (Bitte angeben)",
    noneItemText: "Nichts trifft zu",
    selectAllItemText: "Alles auswählen",
    progressText: "Seite {0} von {1}",
    indexText: "{0} von {1}",
    panelDynamicProgressText: "Eintrag {0} von {1}",
    panelDynamicTabTextFormat: "Bereich {panelIndex}",
    questionsProgressText: "{0}/{1} Fragen beantwortet",
    emptySurvey: "Es sind keine Fragen vorhanden.",
    completingSurvey: "Vielen Dank, dass Sie die Umfrage abgeschlossen haben!",
    completingSurveyBefore: "Wir haben festgestellt, dass Sie diese Umfrage bereits abgeschlossen haben.",
    loadingSurvey: "Umfrage wird geladen...",
    placeholder: "Bitte auswählen...",
    ratingOptionsCaption: "Tippen Sie hier, um zu bewerten...",
    value: "Wert",
    requiredError: "Bitte beantworten Sie diese Frage.",
    requiredErrorInPanel: "Bitte beantworten Sie mindestens eine Frage.",
    requiredInAllRowsError: "Bitte beantworten Sie alle Fragen.",
    numericError: "Der Wert muss eine Zahl sein.",
    minError: "Der Wert sollte nicht kleiner als {0} sein",
    maxError: "Der Wert sollte nicht größer als {0} sein",
    textMinLength: "Bitte geben Sie mindestens {0} Zeichen ein.",
    textMaxLength: "Bitte geben Sie nicht mehr als {0} Zeichen ein.",
    textMinMaxLength: "Bitte geben Sie mindestens {0} und maximal {1} Zeichen ein.",
    minRowCountError: "Bitte machen Sie in mindestens {0} Zeilen eine Eingabe.",
    minSelectError: "Bitte wählen Sie mindestens {0} Antwort(en) aus.",
    maxSelectError: "Bitte wählen Sie nicht mehr als {0} Antwort(en) aus.",
    numericMinMax: "'{0}' muss größer oder gleich {1} und kleiner oder gleich {2} sein",
    numericMin: "'{0}' muss größer oder gleich {1} sein",
    numericMax: "'{0}' muss kleiner oder gleich {1} sein",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    invalidExpression: "Der Ausdruck: {0} muss den Wert 'wahr' zurückgeben.",
    urlRequestError: "Ein Netzwerkdienst hat folgenden Fehler zurückgegeben '{0}'. {1}",
    urlGetChoicesError: "Eine Netzwerkdienst hat ungültige Daten zurückgegeben",
    exceedMaxSize: "Die Datei darf nicht größer als {0} sein.",
    otherRequiredError: "Bitte geben Sie einen Wert an.",
    uploadingFile: "Bitte warten Sie bis der Upload Ihrer Dateien abgeschlossen ist.",
    loadingFile: "Wird hochgeladen...",
    chooseFile: "Datei(en) auswählen...",
    noFileChosen: "Keine Datei ausgewählt",
    filePlaceholder: "Legen Sie hier eine Datei ab oder klicken Sie auf die Schaltfläche unten, um die Datei zu laden.",
    confirmDelete: "Wollen Sie den Eintrag löschen?",
    keyDuplicationError: "Dieser Wert muss einmalig sein.",
    addColumn: "Spalte hinzufügen",
    addRow: "Zeile hinzufügen",
    removeRow: "Entfernen",
    emptyRowsText: "Es gibt keine Reihen.",
    addPanel: "Neu hinzufügen",
    removePanel: "Entfernen",
    choices_Item: "Element",
    matrix_column: "Spalte",
    matrix_row: "Zeile",
    multipletext_itemname: "Text",
    savingData: "Die Ergebnisse werden auf dem Server gespeichert...",
    savingDataError: "Es ist ein Fehler aufgetreten. Die Ergebnisse konnten nicht gespeichert werden.",
    savingDataSuccess: "Die Ergebnisse wurden gespeichert!",
    saveAgainButton: "Erneut absenden",
    timerMin: "Min.",
    timerSec: "Sek.",
    timerSpentAll: "Sie waren {0} auf dieser Seite und brauchten insgesamt {1}.",
    timerSpentPage: "Sie waren {0} auf dieser Seite.",
    timerSpentSurvey: "Sie haben insgesamt {0} gebraucht.",
    timerLimitAll: "Sie waren {0} von {1} auf dieser Seite und brauchten insgesamt {2} von {3}.",
    timerLimitPage: "Sie waren {0} von {1} auf dieser Seite.",
    timerLimitSurvey: "Sie haben insgesamt {0} von {1} gebraucht.",
    clearCaption: "Auswahl entfernen",
    signaturePlaceHolder: "Hier unterschreiben",
    chooseFileCaption: "Datei auswählen",
    takePhotoCaption: "Foto machen",
    photoPlaceholder: "Klicken Sie auf die Schaltfläche unten, um ein Foto mit der Kamera aufzunehmen.",
    fileOrPhotoPlaceholder: "Ziehen Sie eine Datei per Drag & Drop oder wählen Sie sie aus, um sie hochzuladen oder ein Foto mit der Kamera aufzunehmen.",
    replaceFileCaption: "Datei ersetzen",
    removeFileCaption: "Datei löschen",
    booleanCheckedLabel: "Ja",
    booleanUncheckedLabel: "Nein",
    confirmRemoveFile: "Sind Sie sicher, dass Sie diese Datei löschen möchten: {0}?",
    confirmRemoveAllFiles: "Sind Sie sicher, dass Sie alle Dateien löschen möchten?",
    questionTitlePatternText: "Fragentitel",
    modalCancelButtonText: "Abbrechen",
    modalApplyButtonText: "Anwenden",
    filterStringPlaceholder: "Tippe um zu suchen...",
    emptyMessage: "Es gibt noch keine Daten.",
    noEntriesText: "Es gibt noch keine Einträge.\nKlicken Sie auf die Schaltfläche unten, um einen neuen Eintrag hinzuzufügen.",
    noEntriesReadonlyText: "Es gibt keine Einträge.",
    more: "Mehr",
    tagboxDoneButtonCaption: "OKAY",
    selectToRankEmptyRankedAreaText: "Alle Auswahlmöglichkeiten sind in einer Rangfolge angeordnet",
    selectToRankEmptyUnrankedAreaText: "Ziehen Sie die Auswahl hierher, um sie zu ordnen"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["de"] = germanSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["de"] = "deutsch";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Bereich {panelIndex}"
// noEntriesReadonlyText: "There are no entries." => "Es gibt keine Einträge."
// tagboxDoneButtonCaption: "OK" => "OKAY"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Alle Auswahlmöglichkeiten sind in einer Rangfolge angeordnet"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Ziehen Sie die Auswahl hierher, um sie zu ordnen"// takePhotoCaption: "Take Photo" => "Foto machen"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Klicken Sie auf die Schaltfläche unten, um ein Foto mit der Kamera aufzunehmen."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Ziehen Sie eine Datei per Drag & Drop oder wählen Sie sie aus, um sie hochzuladen oder ein Foto mit der Kamera aufzunehmen."
// replaceFileCaption: "Replace file" => "Datei ersetzen"


/***/ }),

/***/ "./src/localization/greek.ts":
/*!***********************************!*\
  !*** ./src/localization/greek.ts ***!
  \***********************************/
/*! exports provided: greekSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greekSurveyStrings", function() { return greekSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var greekSurveyStrings = {
    pagePrevText: "Προηγούμενο",
    pageNextText: "Επόμενο",
    completeText: "Ολοκλήρωση",
    previewText: "Προεπισκόπηση",
    editText: "Επεξεργασία",
    startSurveyText: "Αρχή",
    otherItemText: "Άλλο (παρακαλώ διευκρινίστε)",
    noneItemText: "Κανένας",
    selectAllItemText: "Επιλογή όλων",
    progressText: "Σελίδα {0} από {1}",
    indexText: "{0} από {1}",
    panelDynamicProgressText: "Εγγραφή {0} από {1}",
    panelDynamicTabTextFormat: "Πίνακας {panelIndex}",
    questionsProgressText: "Απαντήθηκαν {0} / {1} ερωτήσεις",
    emptySurvey: "Δεν υπάρχει καμία ορατή σελίδα ή ορατή ερώτηση σε αυτό το ερωτηματολόγιο.",
    completingSurvey: "Ευχαριστούμε για την συμπλήρωση αυτού του ερωτηματολογίου!",
    completingSurveyBefore: "Τα αρχεία μας δείχνουν ότι έχετε ήδη ολοκληρώσει αυτήν την έρευνα.",
    loadingSurvey: "Το ερωτηματολόγιο φορτώνεται απο το διακομιστή...",
    placeholder: "Επιλέξτε...",
    ratingOptionsCaption: "Πατήστε για να βαθμολογήσετε εδώ...",
    value: "τιμή",
    requiredError: "Παρακαλώ απαντήστε στην ερώτηση.",
    requiredErrorInPanel: "Απαντήστε σε τουλάχιστον μία ερώτηση.",
    requiredInAllRowsError: "Παρακαλώ απαντήστε τις ερωτήσεις σε όλες τις γραμμές.",
    numericError: "Η τιμή πρέπει να είναι αριθμητική.",
    minError: "Η τιμή δεν πρέπει να είναι μικρότερη από {0}",
    maxError: "Η τιμή δεν πρέπει να είναι μεγαλύτερη από {0}",
    textMinLength: "Παρακαλώ συμπληρώστε τουλάχιστον {0} χαρακτήρες.",
    textMaxLength: "Εισαγάγετε λιγότερους από {0} χαρακτήρες.",
    textMinMaxLength: "Εισαγάγετε περισσότερους από {0} και λιγότερους από {1} χαρακτήρες.",
    minRowCountError: "Παρακαλώ συμπληρώστε τουλάχιστον {0} γραμμές.",
    minSelectError: "Παρακαλώ επιλέξτε τουλάχιστον {0} παραλλαγές.",
    maxSelectError: "Παρακαλώ επιλέξτε όχι παραπάνω απο {0} παραλλαγές.",
    numericMinMax: "Το '{0}' θα πρέπει να είναι ίσο ή μεγαλύτερο απο το {1} και ίσο ή μικρότερο απο το {2}",
    numericMin: "Το '{0}' πρέπει να είναι μεγαλύτερο ή ισο με το {1}",
    numericMax: "Το '{0}' πρέπει να είναι μικρότερο ή ίσο απο το {1}",
    invalidEmail: "Παρακαλώ δώστε μια αποδεκτή διεύθυνση e-mail.",
    invalidExpression: "Η έκφραση: {0} θα πρέπει να επιστρέψει 'true'.",
    urlRequestError: "Η αίτηση επέστρεψε σφάλμα '{0}'. {1}",
    urlGetChoicesError: "Η αίτηση επέστρεψε κενά δεδομένα ή η ιδιότητα 'μονοπάτι/path' είναι εσφαλμένη",
    exceedMaxSize: "Το μέγεθος του αρχείου δεν μπορεί να υπερβαίνει τα {0}.",
    otherRequiredError: "Παρακαλώ συμπληρώστε την τιμή για το πεδίο 'άλλο'.",
    uploadingFile: "Το αρχείο σας ανεβαίνει. Παρακαλώ περιμένετε μερικά δευτερόλεπτα και δοκιμάστε ξανά.",
    loadingFile: "Φόρτωση...",
    chooseFile: "Επιλογή αρχείων ...",
    noFileChosen: "Δεν έχει επιλεγεί αρχείο",
    filePlaceholder: "Αποθέστε το αρχείο σας εδώ ή κάντε κλικ στο κουμπί παρακάτω για να φορτώσετε το αρχείο.",
    confirmDelete: "Θέλετε να διαγράψετε την εγγραφή;",
    keyDuplicationError: "Αυτή η τιμή πρέπει να είναι μοναδική.",
    addColumn: "Προσθήκη στήλης",
    addRow: "Προσθήκη γραμμής",
    removeRow: "Αφαίρεση",
    emptyRowsText: "Δεν υπάρχουν εγγραφές.",
    addPanel: "Προσθέστε νέο",
    removePanel: "Αφαίρεση",
    choices_Item: "είδος",
    matrix_column: "Στήλη",
    matrix_row: "Γραμμή",
    multipletext_itemname: "κείμενο",
    savingData: "Τα αποτελέσματα αποθηκεύονται στον διακομιστή ...",
    savingDataError: "Παρουσιάστηκε σφάλμα και δεν ήταν δυνατή η αποθήκευση των αποτελεσμάτων.",
    savingDataSuccess: "Τα αποτελέσματα αποθηκεύτηκαν με επιτυχία!",
    saveAgainButton: "Προσπάθησε ξανά",
    timerMin: "ελάχ",
    timerSec: "δευτ",
    timerSpentAll: "Έχετε δαπανήσει {0} σε αυτήν τη σελίδα και {1} συνολικά.",
    timerSpentPage: "Έχετε ξοδέψει {0} σε αυτήν τη σελίδα.",
    timerSpentSurvey: "Έχετε ξοδέψει συνολικά {0}.",
    timerLimitAll: "Έχετε δαπανήσει {0} από {1} σε αυτήν τη σελίδα και {2} από {3} συνολικά.",
    timerLimitPage: "Έχετε ξοδέψει {0} από {1} σε αυτήν τη σελίδα.",
    timerLimitSurvey: "Έχετε ξοδέψει {0} από {1} συνολικά.",
    clearCaption: "Εκκαθάριση",
    signaturePlaceHolder: "Υπογράψτε εδώ",
    chooseFileCaption: "Επιλέξτε αρχείο",
    takePhotoCaption: "Λήψη φωτογραφίας",
    photoPlaceholder: "Κάντε κλικ στο παρακάτω κουμπί για να τραβήξετε μια φωτογραφία χρησιμοποιώντας την κάμερα.",
    fileOrPhotoPlaceholder: "Σύρετε και αποθέστε ή επιλέξτε ένα αρχείο για αποστολή ή λήψη φωτογραφίας χρησιμοποιώντας την κάμερα.",
    replaceFileCaption: "Αντικατάσταση αρχείου",
    removeFileCaption: "Διαγράψτε αυτό το αρχείο",
    booleanCheckedLabel: "Ναι",
    booleanUncheckedLabel: "Όχι",
    confirmRemoveFile: "Είστε βέβαιοι ότι θέλετε να διαγράψετε αυτό το αρχείο: {0};",
    confirmRemoveAllFiles: "Είστε βέβαιοι ότι θέλετε να διαγράψετε όλα τα αρχεία;",
    questionTitlePatternText: "Τίτλος ερώτησης",
    modalCancelButtonText: "Άκυρο",
    modalApplyButtonText: "Εφαρμογή",
    filterStringPlaceholder: "Πληκτρολογήστε για αναζήτηση...",
    emptyMessage: "Δεν υπάρχουν δεδομένα προς εμφάνιση",
    noEntriesText: "Δεν υπάρχουν ακόμη εγγραφές.\nΚάντε κλικ στο κουμπί παρακάτω για να προσθέσετε μια νέα εγγραφή.",
    noEntriesReadonlyText: "Δεν υπάρχουν καταχωρήσεις.",
    more: "Περισσότερα",
    tagboxDoneButtonCaption: "ΟΚ",
    selectToRankEmptyRankedAreaText: "Όλες οι επιλογές κατατάσσονται",
    selectToRankEmptyUnrankedAreaText: "Σύρετε και αποθέστε επιλογές εδώ για να τις κατατάξετε"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["gr"] = greekSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["gr"] = "ελληνικά";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Πίνακας {panelIndex}"
// noEntriesReadonlyText: "There are no entries." => "Δεν υπάρχουν καταχωρήσεις."
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Όλες οι επιλογές κατατάσσονται"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Σύρετε και αποθέστε επιλογές εδώ για να τις κατατάξετε"// takePhotoCaption: "Take Photo" => "Λήψη φωτογραφίας"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Κάντε κλικ στο παρακάτω κουμπί για να τραβήξετε μια φωτογραφία χρησιμοποιώντας την κάμερα."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Σύρετε και αποθέστε ή επιλέξτε ένα αρχείο για αποστολή ή λήψη φωτογραφίας χρησιμοποιώντας την κάμερα."
// replaceFileCaption: "Replace file" => "Αντικατάσταση αρχείου"


/***/ }),

/***/ "./src/localization/hebrew.ts":
/*!************************************!*\
  !*** ./src/localization/hebrew.ts ***!
  \************************************/
/*! exports provided: hebrewSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hebrewSurveyStrings", function() { return hebrewSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var hebrewSurveyStrings = {
    pagePrevText: "אחורה",
    pageNextText: "קדימה",
    completeText: "סיום",
    previewText: "תצוגה מקדימה",
    editText: "לַעֲרוֹך",
    startSurveyText: "הַתחָלָה",
    otherItemText: "אחר (נא לתאר)",
    noneItemText: "אף אחד",
    selectAllItemText: "בחר הכל",
    progressText: "דף {1} מתוך {0}",
    indexText: "{0} מתוך {1}",
    panelDynamicProgressText: "הקלטה {0} מתוך {1}",
    panelDynamicTabTextFormat: "לוח {panelIndex}",
    questionsProgressText: "ענה על שאלות",
    emptySurvey: "אין שאלות",
    completingSurvey: "תודה על מילוי השאלון!",
    completingSurveyBefore: "הרשומות שלנו מראות שכבר סיימת את הסקר הזה.",
    loadingSurvey: "טעינה מהשרת...",
    placeholder: "בחר...",
    ratingOptionsCaption: "בחר...",
    value: "ערך",
    requiredError: "אנא השב על השאלה",
    requiredErrorInPanel: "אנא ענה לפחות על שאלה אחת.",
    requiredInAllRowsError: "אנא ענה על שאלות בכל השורות.",
    numericError: "התשובה צריכה להיות מספר.",
    minError: "הערך לא צריך להיות קטן מ {0}",
    maxError: "הערך לא צריך להיות גדול מ- {0}",
    textMinLength: "הזן לפחות {0} תווים.",
    textMaxLength: "הזן פחות מ- {0} תווים.",
    textMinMaxLength: "הזן יותר מ- {0} ופחות מ- {1} תווים.",
    minRowCountError: "אנא מלא לפחות {0} שורות.",
    minSelectError: "בחר לפחות {0} אפשרויות.",
    maxSelectError: "בחר עד {0} אפשרויות.",
    numericMinMax: "'{0}' חייב להיות שווה או גדול מ {1}, ושווה ל- {2} או פחות מ- {}}",
    numericMin: "'{0}' חייב להיות שווה או גדול מ {1}",
    numericMax: "'{0}' חייב להיות שווה או קטן מ {1}",
    invalidEmail: "הזן כתובת דוא\"ל חוקית.",
    invalidExpression: "הביטוי: {0} צריך להחזיר 'אמת'.",
    urlRequestError: "הבקשה החזירה את השגיאה '{0}'. {1}",
    urlGetChoicesError: "הבקשה החזירה נתונים ריקים או שהמאפיין 'נתיב' שגוי",
    exceedMaxSize: "גודל הקובץ לא יעלה על {0}.",
    otherRequiredError: "נא להזין נתונים בשדה \"אחר\"",
    uploadingFile: "הקובץ שלך נטען. המתן מספר שניות ונסה שוב.",
    loadingFile: "טוען...",
    chooseFile: "לבחור קבצים...",
    noFileChosen: "לא נבחר קובץ",
    filePlaceholder: "גרור ושחרר קובץ לכאן או לחץ על הלחצן למטה ובחר קובץ להעלאה.",
    confirmDelete: "האם אתה רוצה למחוק את הרשומה?",
    keyDuplicationError: "ערך זה צריך להיות ייחודי.",
    addColumn: "הוסף עמודה",
    addRow: "להוסיף שורה",
    removeRow: "לְהַסִיר",
    emptyRowsText: "אין שורות.",
    addPanel: "הוסף חדש",
    removePanel: "לְהַסִיר",
    choices_Item: "פריט",
    matrix_column: "טור",
    matrix_row: "שׁוּרָה",
    multipletext_itemname: "טקסט",
    savingData: "התוצאות נשמרות בשרת ...",
    savingDataError: "אירעה שגיאה ולא הצלחנו לשמור את התוצאות.",
    savingDataSuccess: "התוצאות נשמרו בהצלחה!",
    saveAgainButton: "נסה שוב",
    timerMin: "דקה",
    timerSec: "שניות",
    timerSpentAll: "הוצאת {0} בדף זה ובסך הכל {1}.",
    timerSpentPage: "הוצאת {0} בדף זה.",
    timerSpentSurvey: "הוצאת סכום כולל של {0}.",
    timerLimitAll: "הוצאת {0} מתוך {1} בדף זה ו- {2} מתוך {3} בסך הכל.",
    timerLimitPage: "הוצאת {0} מתוך {1} בדף זה.",
    timerLimitSurvey: "הוצאת סכום כולל של {0} מתוך {1}.",
    clearCaption: "ברור",
    signaturePlaceHolder: "חתום כאן",
    chooseFileCaption: "בחר קובץ",
    takePhotoCaption: "צלם תמונה",
    photoPlaceholder: "לחץ על הלחצן למטה כדי לצלם תמונה באמצעות המצלמה.",
    fileOrPhotoPlaceholder: "גרור ושחרר או בחר קובץ כדי להעלות או לצלם תמונה באמצעות המצלמה.",
    replaceFileCaption: "החלפת קובץ",
    removeFileCaption: "הסר קובץ זה",
    booleanCheckedLabel: "כן",
    booleanUncheckedLabel: "לא",
    confirmRemoveFile: "האם אתה בטוח שברצונך להסיר קובץ זה: {0}?",
    confirmRemoveAllFiles: "האם אתה בטוח שברצונך להסיר את כל הקבצים?",
    questionTitlePatternText: "כותרת שאלה",
    modalCancelButtonText: "ביטל",
    modalApplyButtonText: "החל",
    filterStringPlaceholder: "הקלד כדי לחפש...",
    emptyMessage: "אין נתונים להצגה",
    noEntriesText: "אין עדיין ערכים.\nלחץ על הלחצן למטה כדי להוסיף ערך חדש.",
    noEntriesReadonlyText: "אין ערכים.",
    more: "עוד",
    tagboxDoneButtonCaption: "אוקיי",
    selectToRankEmptyRankedAreaText: "כל האפשרויות מדורגות",
    selectToRankEmptyUnrankedAreaText: "גרור ושחרר אפשרויות לכאן כדי לדרג אותן"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["he"] = hebrewSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["he"] = "עברית";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} מתוך {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "לוח {panelIndex}"
// ratingOptionsCaption: "Select..." => "בחר..."
// minError: "The value should not be less than {0}" => "הערך לא צריך להיות קטן מ {0}"
// maxError: "The value should not be greater than {0}" => "הערך לא צריך להיות גדול מ- {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "גרור ושחרר קובץ לכאן או לחץ על הלחצן למטה ובחר קובץ להעלאה."
// emptyRowsText: "There are no rows." => "אין שורות."
// multipletext_itemname: "text" => "טקסט"
// signaturePlaceHolder: "Sign here" => "חתום כאן"
// modalCancelButtonText: "Cancel" => "ביטל"
// modalApplyButtonText: "Apply" => "החל"
// filterStringPlaceholder: "Type to search..." => "הקלד כדי לחפש..."
// emptyMessage: "No data to display" => "אין נתונים להצגה"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "אין עדיין ערכים.\nלחץ על הלחצן למטה כדי להוסיף ערך חדש."
// noEntriesReadonlyText: "There are no entries." => "אין ערכים."
// more: "More" => "עוד"
// tagboxDoneButtonCaption: "OK" => "אוקיי"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "כל האפשרויות מדורגות"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "גרור ושחרר אפשרויות לכאן כדי לדרג אותן"// takePhotoCaption: "Take Photo" => "צלם תמונה"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "לחץ על הלחצן למטה כדי לצלם תמונה באמצעות המצלמה."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "גרור ושחרר או בחר קובץ כדי להעלות או לצלם תמונה באמצעות המצלמה."
// replaceFileCaption: "Replace file" => "החלפת קובץ"


/***/ }),

/***/ "./src/localization/hindi.ts":
/*!***********************************!*\
  !*** ./src/localization/hindi.ts ***!
  \***********************************/
/*! exports provided: hindiStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hindiStrings", function() { return hindiStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var hindiStrings = {
    pagePrevText: "पिछला",
    pageNextText: "अगला",
    completeText: "पूरा",
    previewText: "पूर्वसमीक्षा",
    editText: "संपादित",
    startSurveyText: "शुरू",
    otherItemText: "दूसरा (वर्णन करें)",
    noneItemText: "कोई नहीं",
    selectAllItemText: "सभी का चयन करें",
    progressText: "पृष्ठ 1 में से 0",
    indexText: "{1} का {0}",
    panelDynamicProgressText: " दस्तावेज {1} के {0}",
    panelDynamicTabTextFormat: "पैनल {panelIndex}",
    questionsProgressText: "{1} सवालों में से {0} के जवाब दिए",
    emptySurvey: "सर्वेक्षण में कोई दृश्यमान पृष्ठ या प्रश्न नहीं है",
    completingSurvey: "सर्वेक्षण को पूरा करने के लिए धन्यवाद",
    completingSurveyBefore: " हमारे रिकॉर्ड बताते हैं कि आप पहले ही इस सर्वेक्षण को पूरा कर चुके हैं",
    loadingSurvey: "सर्वेक्षण खुल रहा है.…",
    placeholder: "चुनें",
    ratingOptionsCaption: "चुनना।।।",
    value: "मूल्य",
    requiredError: "कृपया प्रश्न का उत्तर दें",
    requiredErrorInPanel: "कृपया कम से कम एक प्रश्न का उत्तर दें",
    requiredInAllRowsError: "कृपया सभी पंक्तियों में सवालों के जवाब दें",
    numericError: "मूल्य संख्यात्मक होना चाहिए",
    minError: "मान {0} से कम नहीं होना चाहिए",
    maxError: "मान {0} से अधिक नहीं होना चाहिए",
    textMinLength: "कृपया कम से कम {0} वर्ण दर्ज करें",
    textMaxLength: "कृपया {0} से कम वर्ण दर्ज करें",
    textMinMaxLength: "कृपया {0} से अधिक और {1} से कम पात्रों में प्रवेश करें",
    minRowCountError: "कृपया कम से कम {0} पंक्तियों को भरें",
    minSelectError: "कृपया कम से कम {0} विकल्प का चयन करें",
    maxSelectError: "कृपया {0} विकल्पों से अधिक नहीं चुनें",
    numericMinMax: "'{0}' {1} से बराबर या अधिक और {2} से बराबर या कम होना चाहिए",
    numericMin: "'{0}' {1} से बराबर या अधिक होना चाहिए",
    numericMax: "'{0}' {1} से बराबर या कम होना चाहिए",
    invalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें",
    invalidExpression: "अभिव्यक्ति: {0} को ' सच ' लौटना चाहिए",
    urlRequestError: "अनुरोध लौटाया त्रुटि '{0}' . {1}",
    urlGetChoicesError: "अनुरोध ने खाली डेटा वापस कर दिया है ",
    exceedMaxSize: "फ़ाइल का आकार {0} से अधिक नहीं होना चाहिए  या फिर 'पाथ' प्रॉपर्टी गलत है",
    otherRequiredError: "कृपया दूसरा मूल्य दर्ज करें",
    uploadingFile: "आपकी फाइल अपलोड हो रही है। कृपया कई सेकंड इंतजार करें और फिर से प्रयास करें।",
    loadingFile: "लोडिंग",
    chooseFile: "फ़ाइल चुनें",
    noFileChosen: "कोई फाइल नहीं चुनी गई",
    filePlaceholder: "यहां एक फ़ाइल खींचें और छोड़ें या नीचे दिए गए बटन पर क्लिक करें और अपलोड करने के लिए एक फ़ाइल चुनें।",
    confirmDelete: "क्या आप रिकॉर्ड हटाना चाहते हैं",
    keyDuplicationError: "यह मान अनोखा होना चाहिए",
    addColumn: "कॉलम जोड़ें",
    addRow: "पंक्ति जोड़ें",
    removeRow: "हटाए",
    emptyRowsText: "कोई पंक्तियाँ नहीं हैं.",
    addPanel: "नया जोड़ें",
    removePanel: "हटाए",
    choices_Item: "मद",
    matrix_column: "कॉलम",
    matrix_row: "पंक्ति",
    multipletext_itemname: "टेक्स्ट",
    savingData: "परिणाम सर्वर पर सेव हो रहे हैं",
    savingDataError: "एक त्रुटि हुई और हम परिणामों को नहीं सेव कर सके",
    savingDataSuccess: "परिणाम सफलतापूर्वक सेव हो गए",
    saveAgainButton: "फिर कोशिश करो",
    timerMin: "मिनट",
    timerSec: "सेकंड",
    timerSpentAll: "आपने इस पृष्ठ पर {0} खर्च किए हैं और कुल {1}",
    timerSpentPage: "आपने इस पृष्ठ पर {0} खर्च किया है",
    timerSpentSurvey: "आपने कुल {0} खर्च किया है",
    timerLimitAll: "आपने इस पृष्ठ पर {1} की {0} और कुल {3} की {2} खर्च की है।",
    timerLimitPage: "आपने इस पृष्ठ पर {1} का {0} खर्च किया है",
    timerLimitSurvey: "आपने कुल {1} की {0} खर्च की है",
    clearCaption: "स्पष्ट",
    signaturePlaceHolder: "यहां साइन करें",
    chooseFileCaption: "फ़ाइल चुनें",
    takePhotoCaption: "फोटो ले लो",
    photoPlaceholder: "कैमरे का उपयोग करके फोटो लेने के लिए नीचे दिए गए बटन पर क्लिक करें।",
    fileOrPhotoPlaceholder: "कैमरे का उपयोग करके फ़ोटो अपलोड करने या फ़ोटो लेने के लिए किसी फ़ाइल को खींचें और छोड़ें या चुनें.",
    replaceFileCaption: "फ़ाइल बदलें",
    removeFileCaption: "इस फाइल को निकालें",
    booleanCheckedLabel: "हाँ",
    booleanUncheckedLabel: "नहीं",
    confirmRemoveFile: "क्या आप सुनिश्चित हैं कि आप इस फ़ाइल को हटाना चाहते हैं: {0}",
    confirmRemoveAllFiles: "क्या आप सुनिश्चित हैं कि आप सभी फ़ाइलों को हटाना चाहते हैं",
    questionTitlePatternText: "प्रश्न का शीर्षक",
    modalCancelButtonText: "रद्द करना",
    modalApplyButtonText: "लागू करना",
    filterStringPlaceholder: "खोज करने के लिए टाइप करें...",
    emptyMessage: "प्रदर्शित करने के लिए कोई डेटा नहीं",
    noEntriesText: "अभी तक कोई प्रविष्टियां नहीं हैं।\nनई प्रविष्टि जोड़ने के लिए नीचे दिए गए बटन पर क्लिक करें.",
    noEntriesReadonlyText: "कोई प्रविष्टियाँ नहीं हैं.",
    more: "अधिक",
    tagboxDoneButtonCaption: "ठीक है",
    selectToRankEmptyRankedAreaText: "सभी विकल्पों को रैंक किया गया है",
    selectToRankEmptyUnrankedAreaText: "विकल्पों को रैंक करने के लिए उन्हें यहां खींचें और छोड़ दें"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["hi"] = hindiStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["hi"] = "hindi";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// noneItemText: "None" => "कोई नहीं"
// indexText: "{0} of {1}" => "{1} का {0}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "पैनल {panelIndex}"
// ratingOptionsCaption: "Select..." => "चुनना।।।"
// minError: "The value should not be less than {0}" => "मान {0} से कम नहीं होना चाहिए"
// maxError: "The value should not be greater than {0}" => "मान {0} से अधिक नहीं होना चाहिए"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "यहां एक फ़ाइल खींचें और छोड़ें या नीचे दिए गए बटन पर क्लिक करें और अपलोड करने के लिए एक फ़ाइल चुनें।"
// emptyRowsText: "There are no rows." => "कोई पंक्तियाँ नहीं हैं."
// multipletext_itemname: "text" => "टेक्स्ट"
// signaturePlaceHolder: "Sign here" => "यहां साइन करें"
// modalCancelButtonText: "Cancel" => "रद्द करना"
// modalApplyButtonText: "Apply" => "लागू करना"
// filterStringPlaceholder: "Type to search..." => "खोज करने के लिए टाइप करें..."
// emptyMessage: "No data to display" => "प्रदर्शित करने के लिए कोई डेटा नहीं"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "अभी तक कोई प्रविष्टियां नहीं हैं।\nनई प्रविष्टि जोड़ने के लिए नीचे दिए गए बटन पर क्लिक करें."
// noEntriesReadonlyText: "There are no entries." => "कोई प्रविष्टियाँ नहीं हैं."
// more: "More" => "अधिक"
// tagboxDoneButtonCaption: "OK" => "ठीक है"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "सभी विकल्पों को रैंक किया गया है"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "विकल्पों को रैंक करने के लिए उन्हें यहां खींचें और छोड़ दें"// takePhotoCaption: "Take Photo" => "फोटो ले लो"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "कैमरे का उपयोग करके फोटो लेने के लिए नीचे दिए गए बटन पर क्लिक करें।"
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "कैमरे का उपयोग करके फ़ोटो अपलोड करने या फ़ोटो लेने के लिए किसी फ़ाइल को खींचें और छोड़ें या चुनें."
// replaceFileCaption: "Replace file" => "फ़ाइल बदलें"


/***/ }),

/***/ "./src/localization/hungarian.ts":
/*!***************************************!*\
  !*** ./src/localization/hungarian.ts ***!
  \***************************************/
/*! exports provided: hungarianSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hungarianSurveyStrings", function() { return hungarianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var hungarianSurveyStrings = {
    pagePrevText: "Vissza",
    pageNextText: "Tovább",
    completeText: "Kész",
    previewText: "Előnézet",
    editText: "Szerkesztés",
    startSurveyText: "Rajt",
    otherItemText: "Egyéb (adja meg)",
    noneItemText: "Egyik sem",
    selectAllItemText: "Mindet kiválaszt",
    progressText: "{0}./{1} oldal",
    indexText: "{0} {1} közül",
    panelDynamicProgressText: "{0} / {1} rekord",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Válaszolt kérdések: {0} / {1}",
    emptySurvey: "The survey doesn't contain visible pages or questions.",
    completingSurvey: "Köszönjük, hogy kitöltötte felmérésünket!",
    completingSurveyBefore: "Már kitöltötte a felmérést.",
    loadingSurvey: "Felmérés betöltése...",
    placeholder: "Válasszon...",
    ratingOptionsCaption: "Kiválaszt...",
    value: "érték",
    requiredError: "Kérjük, válaszolja meg ezt a kérdést!",
    requiredErrorInPanel: "Kérjük, válaszoljon legalább egy kérdésre.",
    requiredInAllRowsError: "Kérjük adjon választ minden sorban!",
    numericError: "Az érték szám kell, hogy legyen!",
    minError: "Az érték nem lehet kisebb, mint {0}",
    maxError: "Az érték nem lehet nagyobb, mint {0}",
    textMinLength: "Adjon meg legalább {0} karaktert!",
    textMaxLength: "Legfeljebb {0} karaktert adjon meg!",
    textMinMaxLength: "Adjon meg legalább {0}, de legfeljebb {1} karaktert!",
    minRowCountError: "Töltsön ki minimum {0} sort!",
    minSelectError: "Válasszon ki legalább {0} lehetőséget!",
    maxSelectError: "Ne válasszon többet, mint {0} lehetőség!",
    numericMinMax: "'{0}' legyen nagyobb, vagy egyenlő, mint {1} és kisebb, vagy egyenlő, mint {2}!",
    numericMin: "'{0}' legyen legalább {1}!",
    numericMax: "The '{0}' ne legyen nagyobb, mint {1}!",
    invalidEmail: "Adjon meg egy valós email címet!",
    invalidExpression: "A következő kifejezés: {0} vissza kell adnia az „igaz” értéket.",
    urlRequestError: "A lekérdezés hibával tért vissza: '{0}'. {1}",
    urlGetChoicesError: "A lekérdezés üres adattal tért vissza, vagy a 'path' paraméter helytelen.",
    exceedMaxSize: "A méret nem lehet nagyobb, mint {0}.",
    otherRequiredError: "Adja meg az egyéb értéket!",
    uploadingFile: "Feltöltés folyamatban. Várjon pár másodpercet, majd próbálja újra.",
    loadingFile: "Betöltés...",
    chooseFile: "Fájlok kiválasztása ...",
    noFileChosen: "Nincs kiválasztva fájl",
    filePlaceholder: "Dobjon ide egy fájlt, vagy kattintson az alábbi gombra a fájl betöltéséhez.",
    confirmDelete: "Törli ezt a rekordot?",
    keyDuplicationError: "Az értéknek egyedinek kell lennie.",
    addColumn: "Oszlop hozzáadása",
    addRow: "Sor hozzáadása",
    removeRow: "Eltávolítás",
    emptyRowsText: "Nincsenek sorok.",
    addPanel: "Új hozzáadása",
    removePanel: "Eltávolítás",
    choices_Item: "elem",
    matrix_column: "Oszlop",
    matrix_row: "Sor",
    multipletext_itemname: "SMS",
    savingData: "Eredmény mentése a szerverre...",
    savingDataError: "Egy hiba folytán nem tudtuk elmenteni az eredményt.",
    savingDataSuccess: "Eredmény sikeresen mentve!",
    saveAgainButton: "Próbálja újra",
    timerMin: "min",
    timerSec: "sec",
    timerSpentAll: "Ön {0} összeget költött ezen az oldalon, és összesen {1}.",
    timerSpentPage: "{0} összeget költött ezen az oldalon.",
    timerSpentSurvey: "Összesen {0} költött.",
    timerLimitAll: "Ön {0} / {1} összeget költött ezen az oldalon, és összesen {2} / {3}.",
    timerLimitPage: "Ön {0} / {1} összeget költött ezen az oldalon.",
    timerLimitSurvey: "Összesen {0} / {1} összeget költött el.",
    clearCaption: "Egyértelmű",
    signaturePlaceHolder: "Írja alá itt",
    chooseFileCaption: "Válassz fájlt",
    takePhotoCaption: "Fotó készítése",
    photoPlaceholder: "Kattintson az alábbi gombra, hogy fényképet készítsen a fényképezőgéppel.",
    fileOrPhotoPlaceholder: "Húzzon át vagy válasszon ki egy fájlt, amelyet fel szeretne tölteni vagy fényképet szeretne készíteni a kamerával.",
    replaceFileCaption: "Fájl cseréje",
    removeFileCaption: "Távolítsa el ezt a fájlt",
    booleanCheckedLabel: "Igen",
    booleanUncheckedLabel: "Nem",
    confirmRemoveFile: "Biztosan eltávolítja ezt a fájlt: {0}?",
    confirmRemoveAllFiles: "Biztosan el akarja távolítani az összes fájlt?",
    questionTitlePatternText: "Kérdés címe",
    modalCancelButtonText: "Érvénytelenít",
    modalApplyButtonText: "Alkalmaz",
    filterStringPlaceholder: "Írja be a kereséshez...",
    emptyMessage: "Nincs megjeleníthető adat",
    noEntriesText: "Még nincsenek bejegyzések.\nKattintson az alábbi gombra egy új bejegyzés hozzáadásához.",
    noEntriesReadonlyText: "Nincsenek bejegyzések.",
    more: "Több",
    tagboxDoneButtonCaption: "OKÉ",
    selectToRankEmptyRankedAreaText: "Minden választási lehetőség rangsorolva van",
    selectToRankEmptyUnrankedAreaText: "Húzza ide a választási lehetőségeket a rangsoroláshoz"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["hu"] = hungarianSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["hu"] = "magyar";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} {1} közül"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Kiválaszt..."
// minError: "The value should not be less than {0}" => "Az érték nem lehet kisebb, mint {0}"
// maxError: "The value should not be greater than {0}" => "Az érték nem lehet nagyobb, mint {0}"
// emptyRowsText: "There are no rows." => "Nincsenek sorok."
// multipletext_itemname: "text" => "SMS"
// signaturePlaceHolder: "Sign here" => "Írja alá itt"
// modalCancelButtonText: "Cancel" => "Érvénytelenít"
// modalApplyButtonText: "Apply" => "Alkalmaz"
// filterStringPlaceholder: "Type to search..." => "Írja be a kereséshez..."
// emptyMessage: "No data to display" => "Nincs megjeleníthető adat"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Még nincsenek bejegyzések.\nKattintson az alábbi gombra egy új bejegyzés hozzáadásához."
// noEntriesReadonlyText: "There are no entries." => "Nincsenek bejegyzések."
// more: "More" => "Több"
// tagboxDoneButtonCaption: "OK" => "OKÉ"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Minden választási lehetőség rangsorolva van"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Húzza ide a választási lehetőségeket a rangsoroláshoz"// takePhotoCaption: "Take Photo" => "Fotó készítése"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kattintson az alábbi gombra, hogy fényképet készítsen a fényképezőgéppel."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Húzzon át vagy válasszon ki egy fájlt, amelyet fel szeretne tölteni vagy fényképet szeretne készíteni a kamerával."
// replaceFileCaption: "Replace file" => "Fájl cseréje"


/***/ }),

/***/ "./src/localization/icelandic.ts":
/*!***************************************!*\
  !*** ./src/localization/icelandic.ts ***!
  \***************************************/
/*! exports provided: icelandicSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icelandicSurveyStrings", function() { return icelandicSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var icelandicSurveyStrings = {
    pagePrevText: "Tilbaka",
    pageNextText: "Áfram",
    completeText: "Lokið",
    previewText: "Forskoða",
    editText: "Breyta",
    startSurveyText: "Byrjaðu",
    otherItemText: "Hinn (skýring)",
    noneItemText: "Enginn",
    selectAllItemText: "Velja allt",
    progressText: "Síða {0} of {1}",
    indexText: "{0} af {1}",
    panelDynamicProgressText: "Taka upp {0} af {1}",
    panelDynamicTabTextFormat: "Pallborð {panelIndex}",
    questionsProgressText: "Svarað {0} / {1} spurningum",
    emptySurvey: "Það er enginn síða eða spurningar í þessari könnun.",
    completingSurvey: "Takk fyrir að fyllja út þessa könnun!",
    completingSurveyBefore: "Skrár okkar sýna að þú hefur þegar lokið þessari könnun.",
    loadingSurvey: "Könnunin er að hlaða...",
    placeholder: "Veldu...",
    ratingOptionsCaption: "Velja...",
    value: "gildi",
    requiredError: "Vinsamlegast svarið spurningunni.",
    requiredErrorInPanel: "Vinsamlegast svaraðu að minnsta kosti einni spurningu.",
    requiredInAllRowsError: "Vinsamlegast svarið spurningum í öllum röðum.",
    numericError: "Þetta gildi verður að vera tala.",
    minError: "Gildið má ekki vera lægra en {0}",
    maxError: "Gildið má ekki vera hærra en {0}",
    textMinLength: "Það ætti að vera minnst {0} tákn.",
    textMaxLength: "Það ætti að vera mest {0} tákn.",
    textMinMaxLength: "Það ætti að vera fleiri en {0} og færri en {1} tákn.",
    minRowCountError: "Vinsamlegast fyllið úr að minnsta kosti {0} raðir.",
    minSelectError: "Vinsamlegast veljið að minnsta kosti {0} möguleika.",
    maxSelectError: "Vinsamlegast veljið ekki fleiri en {0} möguleika.",
    numericMinMax: "'{0}' ætti að vera meira en eða jafnt og {1} minna en eða jafnt og {2}",
    numericMin: "{0}' ætti að vera meira en eða jafnt og {1}",
    numericMax: "'{0}' ætti að vera minna en eða jafnt og {1}",
    invalidEmail: "Vinsamlegast sláið inn gilt netfang.",
    invalidExpression: "Tjáningin: {0} ætti að skila 'satt'.",
    urlRequestError: "Beiðninn skilaði eftirfaranadi villu '{0}'. {1}",
    urlGetChoicesError: "Beiðninng skilaði engum gögnum eða slóðinn var röng",
    exceedMaxSize: "Skráinn skal ekki vera stærri en {0}.",
    otherRequiredError: "Vinamlegast fyllið út hitt gildið.",
    uploadingFile: "Skráinn þín var send. Vinsamlegast bíðið í nokkrar sekúndur og reynið aftur.",
    loadingFile: "Hleður ...",
    chooseFile: "Veldu skrár ...",
    noFileChosen: "Engin skrá valin",
    filePlaceholder: "Dragðu og slepptu skrá hér eða smelltu á hnappinn hér að neðan og veldu skrá til að hlaða upp.",
    confirmDelete: "Viltu eyða skránni?",
    keyDuplicationError: "Þetta gildi ætti að vera einstakt.",
    addColumn: "Bæta við dálki",
    addRow: "Bæta við röð",
    removeRow: "Fjarlægja",
    emptyRowsText: "Það eru engar raðir.",
    addPanel: "Bæta við nýju",
    removePanel: "Fjarlægðu",
    choices_Item: "hlutur",
    matrix_column: "Dálkur",
    matrix_row: "Röð",
    multipletext_itemname: "Texti",
    savingData: "Niðurstöðurnar eru að spara á netþjóninum ... ",
    savingDataError: "Villa kom upp og við gátum ekki vistað niðurstöðurnar.",
    savingDataSuccess: "Árangurinn var vistaður með góðum árangri!",
    saveAgainButton: "Reyndu aftur",
    timerMin: "mín",
    timerSec: "sek",
    timerSpentAll: "Þú hefur eytt {0} á þessari síðu og {1} samtals.",
    timerSpentPage: "Þú hefur eytt {0} á þessari síðu.",
    timerSpentSurvey: "Þú hefur eytt {0} samtals.",
    timerLimitAll: "Þú hefur eytt {0} af {1} á þessari síðu og {2} af {3} samtals.",
    timerLimitPage: "Þú hefur eytt {0} af {1} á þessari síðu.",
    timerLimitSurvey: "Þú hefur eytt {0} af {1} samtals.",
    clearCaption: "Hreinsa",
    signaturePlaceHolder: "Kvittađu hér",
    chooseFileCaption: "Veldu skrá",
    takePhotoCaption: "Taka mynd",
    photoPlaceholder: "Smelltu á hnappinn hér að neðan til að taka mynd með myndavélinni.",
    fileOrPhotoPlaceholder: "Dragðu og slepptu eða veldu skrá til að hlaða upp eða taka mynd með myndavélinni.",
    replaceFileCaption: "Skipta út skrá",
    removeFileCaption: "Fjarlægðu þessa skrá",
    booleanCheckedLabel: "Já",
    booleanUncheckedLabel: "Nei",
    confirmRemoveFile: "Ertu viss um að þú viljir fjarlægja þessa skrá: {0}?",
    confirmRemoveAllFiles: "Ertu viss um að þú viljir fjarlægja allar skrár?",
    questionTitlePatternText: "Spurningartitill",
    modalCancelButtonText: "Afturkalla",
    modalApplyButtonText: "Nota",
    filterStringPlaceholder: "Sláðu inn til að leita...",
    emptyMessage: "Engin gögn til að birta",
    noEntriesText: "Það eru engar færslur ennþá.\nSmelltu á hnappinn hér að neðan til að bæta við nýrri færslu.",
    noEntriesReadonlyText: "Það eru engar færslur.",
    more: "Fleiri",
    tagboxDoneButtonCaption: "ÓKEI",
    selectToRankEmptyRankedAreaText: "Öllum valkostum er raðað",
    selectToRankEmptyUnrankedAreaText: "Dragðu og slepptu valkostum hér til að raða þeim"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["is"] = icelandicSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["is"] = "íslenska";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} af {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Pallborð {panelIndex}"
// ratingOptionsCaption: "Select..." => "Velja..."
// minError: "The value should not be less than {0}" => "Gildið má ekki vera lægra en {0}"
// maxError: "The value should not be greater than {0}" => "Gildið má ekki vera hærra en {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Dragðu og slepptu skrá hér eða smelltu á hnappinn hér að neðan og veldu skrá til að hlaða upp."
// emptyRowsText: "There are no rows." => "Það eru engar raðir."
// multipletext_itemname: "text" => "Texti"
// signaturePlaceHolder: "Sign here" => "Kvittađu hér"
// modalCancelButtonText: "Cancel" => "Afturkalla"
// modalApplyButtonText: "Apply" => "Nota"
// filterStringPlaceholder: "Type to search..." => "Sláðu inn til að leita..."
// emptyMessage: "No data to display" => "Engin gögn til að birta"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Það eru engar færslur ennþá.\nSmelltu á hnappinn hér að neðan til að bæta við nýrri færslu."
// noEntriesReadonlyText: "There are no entries." => "Það eru engar færslur."
// more: "More" => "Fleiri"
// tagboxDoneButtonCaption: "OK" => "ÓKEI"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Öllum valkostum er raðað"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Dragðu og slepptu valkostum hér til að raða þeim"// takePhotoCaption: "Take Photo" => "Taka mynd"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Smelltu á hnappinn hér að neðan til að taka mynd með myndavélinni."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Dragðu og slepptu eða veldu skrá til að hlaða upp eða taka mynd með myndavélinni."
// replaceFileCaption: "Replace file" => "Skipta út skrá"


/***/ }),

/***/ "./src/localization/indonesian.ts":
/*!****************************************!*\
  !*** ./src/localization/indonesian.ts ***!
  \****************************************/
/*! exports provided: indonesianStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indonesianStrings", function() { return indonesianStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var indonesianStrings = {
    pagePrevText: "Sebelumnya",
    pageNextText: "Selanjutnya",
    completeText: "Selesai",
    previewText: "Pratinjau",
    editText: "Sunting",
    startSurveyText: "Mulai",
    otherItemText: "Lainnya (jelaskan)",
    noneItemText: "Tidak Ada",
    selectAllItemText: "Pilih Semua",
    progressText: "Halaman {0} dari {1}",
    indexText: "{0} dari {1}",
    panelDynamicProgressText: "Rekam {0} dari {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Menjawab pertanyaan {0} / {1}",
    emptySurvey: "Tidak ada halaman atau pertanyaan dalam survei.",
    completingSurvey: "Terima kasih telah menyelesaikan survei!",
    completingSurveyBefore: "Catatan kami menunjukkan bahwa Anda telah menyelesaikan survei ini.",
    loadingSurvey: "Memuat survei...",
    placeholder: "Pilih...",
    ratingOptionsCaption: "Pilih...",
    value: "nilai",
    requiredError: "Silahkan jawab pertanyaan berikut.",
    requiredErrorInPanel: "Silahkan jawab setidaknya satu petanyaan.",
    requiredInAllRowsError: "Silahkan jawab pertanyaan pada semua baris.",
    numericError: "Nilai harus berupa angka.",
    minError: "Nilainya tidak boleh kurang dari {0}",
    maxError: "Nilai tidak boleh lebih besar dari {0}",
    textMinLength: "Silahkan masukkan setidaknya {0} karakter.",
    textMaxLength: "Silahkan masukkan kurang {0} karakter.",
    textMinMaxLength: "PSilahkan masukkan lebih dari {0} dan kurang dari {1} karakter.",
    minRowCountError: "Silahkan isi setidaknya {0} baris.",
    minSelectError: "Silahkan pilih setidaknya {0} varian.",
    maxSelectError: "Silahkan pilih tidak lebih dari {0} varian.",
    numericMinMax: "'{0}' harus sama dengan atau lebih dari {1} dan harus sama dengan atau kurang dari {2}",
    numericMin: "'{0}' harus sama dengan atau lebih dari {1}",
    numericMax: "'{0}' harus sama dengan atau kurang dari {1}",
    invalidEmail: "Silahkan masukkan e-mail yang benar.",
    invalidExpression: "Ekspresi: {0} harus mengembalikan 'benar'.",
    urlRequestError: "Permintaan mengembalikan kesalahan '{0}'. {1}",
    urlGetChoicesError: "Permintaan mengembalikan data kosong atau properti 'path' salah.",
    exceedMaxSize: "Ukuran berkas tidak boleh melebihi {0}.",
    otherRequiredError: "Silahkan masukkan nilai lainnnya.",
    uploadingFile: "Berkas Anda sedang diunggah. Silahkan tunggu beberapa saat atau coba lagi.",
    loadingFile: "Memuat...",
    chooseFile: "Pilih berkas...",
    noFileChosen: "Tidak ada file yang dipilih",
    filePlaceholder: "Seret dan jatuhkan file di sini atau klik tombol di bawah ini dan pilih file yang akan diunggah.",
    confirmDelete: "Apakah Anda ingin menghapus catatan?",
    keyDuplicationError: "Nilai harus unik.",
    addColumn: "Tambah kolom",
    addRow: "Tambah baris",
    removeRow: "Hapus",
    emptyRowsText: "Tidak ada baris.",
    addPanel: "Tambah baru",
    removePanel: "Hapus",
    choices_Item: "item",
    matrix_column: "Kolom",
    matrix_row: "Baris",
    multipletext_itemname: "Teks",
    savingData: "Hasil sedang disimpan pada server...",
    savingDataError: "Kesalahan terjadi dan kami tidak dapat menyimpan hasil.",
    savingDataSuccess: "Hasil telah sukses disimpan!",
    saveAgainButton: "Coba lagi",
    timerMin: "menit",
    timerSec: "detik",
    timerSpentAll: "Anda telah menghabiskan {0} pada halaman ini dan {1} secara keseluruhan.",
    timerSpentPage: "YAnda telah menghabiskan {0} pada halaman ini.",
    timerSpentSurvey: "Anda telah menghabiskan {0} secara keseluruhan.",
    timerLimitAll: "Anda telah menghabiskan {0} dari {1} pada halaman ini dan {2} dari {3} secara keseluruhan.",
    timerLimitPage: "Anda telah menghabiskan {0} dari {1} pada halaman ini.",
    timerLimitSurvey: "Anda telah menghabiskan {0} dari {1} secara keseluruhan.",
    clearCaption: "Bersihkan",
    signaturePlaceHolder: "Tanda tangan di sini",
    chooseFileCaption: "Pilih File",
    takePhotoCaption: "Ambil Foto",
    photoPlaceholder: "Klik tombol di bawah ini untuk mengambil foto menggunakan kamera.",
    fileOrPhotoPlaceholder: "Seret dan lepas atau pilih file untuk diunggah atau mengambil foto menggunakan kamera.",
    replaceFileCaption: "Ganti file",
    removeFileCaption: "Hapus berkas ini",
    booleanCheckedLabel: "Iya",
    booleanUncheckedLabel: "Tidak",
    confirmRemoveFile: "Anda yakin ingin menghapus file ini: {0}?",
    confirmRemoveAllFiles: "Anda yakin ingin menghapus semua file?",
    questionTitlePatternText: "Judul pertanyaan",
    modalCancelButtonText: "Membatalkan",
    modalApplyButtonText: "Berlaku",
    filterStringPlaceholder: "Ketik untuk mencari...",
    emptyMessage: "Tidak ada data untuk ditampilkan",
    noEntriesText: "Belum ada entri.\nKlik tombol di bawah ini untuk menambahkan entri baru.",
    noEntriesReadonlyText: "Tidak ada entri.",
    more: "Lebih",
    tagboxDoneButtonCaption: "OKE",
    selectToRankEmptyRankedAreaText: "Semua pilihan diberi peringkat",
    selectToRankEmptyUnrankedAreaText: "Seret dan lepas pilihan di sini untuk memberi peringkat"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["id"] = indonesianStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["id"] = "bahasa Indonesia";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} dari {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Pilih..."
// minError: "The value should not be less than {0}" => "Nilainya tidak boleh kurang dari {0}"
// maxError: "The value should not be greater than {0}" => "Nilai tidak boleh lebih besar dari {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Seret dan jatuhkan file di sini atau klik tombol di bawah ini dan pilih file yang akan diunggah."
// emptyRowsText: "There are no rows." => "Tidak ada baris."
// multipletext_itemname: "text" => "Teks"
// signaturePlaceHolder: "Sign here" => "Tanda tangan di sini"
// modalCancelButtonText: "Cancel" => "Membatalkan"
// modalApplyButtonText: "Apply" => "Berlaku"
// filterStringPlaceholder: "Type to search..." => "Ketik untuk mencari..."
// emptyMessage: "No data to display" => "Tidak ada data untuk ditampilkan"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Belum ada entri.\nKlik tombol di bawah ini untuk menambahkan entri baru."
// noEntriesReadonlyText: "There are no entries." => "Tidak ada entri."
// more: "More" => "Lebih"
// tagboxDoneButtonCaption: "OK" => "OKE"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Semua pilihan diberi peringkat"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Seret dan lepas pilihan di sini untuk memberi peringkat"// takePhotoCaption: "Take Photo" => "Ambil Foto"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Klik tombol di bawah ini untuk mengambil foto menggunakan kamera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Seret dan lepas atau pilih file untuk diunggah atau mengambil foto menggunakan kamera."
// replaceFileCaption: "Replace file" => "Ganti file"


/***/ }),

/***/ "./src/localization/italian.ts":
/*!*************************************!*\
  !*** ./src/localization/italian.ts ***!
  \*************************************/
/*! exports provided: italianSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "italianSurveyStrings", function() { return italianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var italianSurveyStrings = {
    pagePrevText: "Precedente",
    pageNextText: "Successivo",
    completeText: "Salva",
    previewText: "Anteprima",
    editText: "Modifica",
    startSurveyText: "Inizio",
    otherItemText: "Altro (descrivi)",
    noneItemText: "Nessuno",
    selectAllItemText: "Seleziona tutti",
    progressText: "Pagina {0} di {1}",
    indexText: "{0} da {1}",
    panelDynamicProgressText: "Record di {0} di {1}",
    panelDynamicTabTextFormat: "Pannello {panelIndex}",
    questionsProgressText: "Risposte a {0}/{1} domande",
    emptySurvey: "Non ci sono pagine o domande visibili nel questionario.",
    completingSurvey: "Grazie per aver completato il questionario!",
    completingSurveyBefore: "I nostri records mostrano che hai già completato questo questionario.",
    loadingSurvey: "Caricamento del questionario in corso...",
    placeholder: "Scegli...",
    ratingOptionsCaption: "Tocca qui per valutare...",
    value: "valore",
    requiredError: "Campo obbligatorio",
    requiredErrorInPanel: "Per Favore, rispondi ad almeno una domanda.",
    requiredInAllRowsError: "Completare tutte le righe",
    numericError: "Il valore deve essere numerico",
    minError: "Il valore non deve essere inferiore a {0}",
    maxError: "Il valore non deve essere maggiore di {0}",
    textMinLength: "Inserire almeno {0} caratteri",
    textMaxLength: "Lunghezza massima consentita {0} caratteri",
    textMinMaxLength: "Inserire una stringa con minimo {0} e massimo {1} caratteri",
    minRowCountError: "Completare almeno {0} righe.",
    minSelectError: "Selezionare almeno {0} varianti.",
    maxSelectError: "Selezionare massimo {0} varianti.",
    numericMinMax: "'{0}' deve essere uguale o superiore a {1} e uguale o inferiore a {2}",
    numericMin: "'{0}' deve essere uguale o superiore a {1}",
    numericMax: "'{0}' deve essere uguale o inferiore a {1}",
    invalidEmail: "Inserire indirizzo mail valido",
    invalidExpression: "L'espressione: {0} dovrebbe tornare 'vero'.",
    urlRequestError: "La richiesta ha risposto con un errore '{0}'. {1}",
    urlGetChoicesError: "La richiesta ha risposto null oppure il percorso non è corretto",
    exceedMaxSize: "Il file non può eccedere {0}",
    otherRequiredError: "Inserire il valore 'altro'",
    uploadingFile: "File in caricamento. Attendi alcuni secondi e riprova",
    loadingFile: "Caricamento...",
    chooseFile: "Selezionare file(s)...",
    noFileChosen: "Nessun file selezionato",
    filePlaceholder: "Trascina un file qui o fai clic sul pulsante in basso per caricare il file.",
    confirmDelete: "Sei sicuro di voler elminare il record?",
    keyDuplicationError: "Questo valore deve essere univoco.",
    addColumn: "Aggiungi colonna",
    addRow: "Aggiungi riga",
    removeRow: "Rimuovi riga",
    emptyRowsText: "Non ci sono righe.",
    addPanel: "Aggiungi riga",
    removePanel: "Elimina",
    choices_Item: "Elemento",
    matrix_column: "Colonna",
    matrix_row: "Riga",
    multipletext_itemname: "testo",
    savingData: "Salvataggio dati sul server...",
    savingDataError: "Si è verificato un errore e non è stato possibile salvare i risultati.",
    savingDataSuccess: "I risultati sono stati salvati con successo!",
    saveAgainButton: "Riprova",
    timerMin: "min",
    timerSec: "sec",
    timerSpentAll: "Hai impiegato {0} su questa pagina e {1} in totale.",
    timerSpentPage: "Hai impiegato {0} su questa pagina.",
    timerSpentSurvey: "Hai impiegato {0} in totale.",
    timerLimitAll: "Hai impiegato {0} di {1} su questa pagina e {2} di {3} in totale.",
    timerLimitPage: "Hai impiegato {0} di {1} su questa pagina.",
    timerLimitSurvey: "Hai impiegato {0} di {1} in totale.",
    clearCaption: "Cancella",
    signaturePlaceHolder: "Firmare qui",
    chooseFileCaption: "Scegliere il file",
    takePhotoCaption: "Scatta foto",
    photoPlaceholder: "Fai clic sul pulsante qui sotto per scattare una foto utilizzando la fotocamera.",
    fileOrPhotoPlaceholder: "Trascina e rilascia o seleziona un file da caricare o scattare una foto utilizzando la fotocamera.",
    replaceFileCaption: "Sostituisci file",
    removeFileCaption: "Rimuovere questo file",
    booleanCheckedLabel: "Sì",
    booleanUncheckedLabel: "No",
    confirmRemoveFile: "Sei sicuro di voler elminare questo file: {0}?",
    confirmRemoveAllFiles: "Sei sicuro di voler elminare tutti i files?",
    questionTitlePatternText: "Titolo della domanda",
    modalCancelButtonText: "Annulla",
    modalApplyButtonText: "Applicare",
    filterStringPlaceholder: "Digita per cercare...",
    emptyMessage: "Nessun dato da visualizzare",
    noEntriesText: "Non ci sono ancora voci.\nFai clic sul pulsante qui sotto per aggiungere una nuova voce.",
    noEntriesReadonlyText: "Non ci sono voci.",
    more: "Più",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Tutte le scelte sono classificate",
    selectToRankEmptyUnrankedAreaText: "Trascina e rilascia le scelte qui per classificarle"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["it"] = italianSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["it"] = "italiano";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Pannello {panelIndex}"
// emptyMessage: "No data to display" => "Nessun dato da visualizzare"
// noEntriesReadonlyText: "There are no entries." => "Non ci sono voci."
// more: "More" => "Più"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Tutte le scelte sono classificate"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Trascina e rilascia le scelte qui per classificarle"// takePhotoCaption: "Take Photo" => "Scatta foto"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Fai clic sul pulsante qui sotto per scattare una foto utilizzando la fotocamera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Trascina e rilascia o seleziona un file da caricare o scattare una foto utilizzando la fotocamera."
// replaceFileCaption: "Replace file" => "Sostituisci file"


/***/ }),

/***/ "./src/localization/japanese.ts":
/*!**************************************!*\
  !*** ./src/localization/japanese.ts ***!
  \**************************************/
/*! exports provided: japaneseSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "japaneseSurveyStrings", function() { return japaneseSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var japaneseSurveyStrings = {
    pagePrevText: "前へ",
    pageNextText: "次へ",
    completeText: "完了",
    previewText: "プレビュー",
    editText: "編集",
    startSurveyText: "スタート",
    otherItemText: "その他（説明）",
    noneItemText: "なし",
    selectAllItemText: "すべて選択",
    progressText: "{0}/{1}頁",
    indexText: "{1}の{0}",
    panelDynamicProgressText: "{1}の{0}を記録する",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "{0}/{1}の質問に回答しました。",
    emptySurvey: "この調査に表示できるページや質問はありません",
    completingSurvey: "調査を完了してくれてありがとうございました",
    completingSurveyBefore: "当社の記録によると、この調査はすでに完了しています。",
    loadingSurvey: "調査をダウンロード中",
    placeholder: "選択",
    ratingOptionsCaption: "選ぶ。。。",
    value: "値打ち",
    requiredError: "質問にお答え下さい",
    requiredErrorInPanel: "最低でも1つの質問に答えてください。",
    requiredInAllRowsError: "質問には全列で回答してください。",
    numericError: "数字でご記入下さい",
    minError: "値は {0} 値より小さくすることはできません",
    maxError: "値は {0} を超えてはなりません。",
    textMinLength: "{0} 文字以上で入力して下さい",
    textMaxLength: "{0}文字以下で入力してください。",
    textMinMaxLength: "{0}以上{1}未満の文字を入力してください。",
    minRowCountError: "{0}行以上で入力して下さい",
    minSelectError: "{0}種類以上を選択して下さい",
    maxSelectError: "{0}以上のバリアントを選択しないでください。",
    numericMinMax: "{0}は{1}以上であり、{2}以下であることが望ましい。",
    numericMin: "'{0}' は同等か{1}より大きくなければなりません",
    numericMax: "'{0}' は同等か{1}より小さくなければなりません",
    invalidEmail: "有効なメールアドレスをご記入下さい",
    invalidExpression: "式は {0}は'true'を返すべきです。",
    urlRequestError: "リクエストはエラー '{0}' を返しました。{1}",
    urlGetChoicesError: "リクエストが空のデータを返したか、'path' プロパティが正しくありません。",
    exceedMaxSize: "ファイルのサイズは{0}を超えてはいけません",
    otherRequiredError: "その他の値を入力してください。",
    uploadingFile: "ファイルをアップロード中です。しばらくしてから再度お試し下さい",
    loadingFile: "読み込み中",
    chooseFile: "ファイルを選択",
    noFileChosen: "選択されたファイルはありません",
    filePlaceholder: "ここにファイルをドラッグ&ドロップするか、下のボタンをクリックしてアップロードするファイルを選択してください。",
    confirmDelete: "レコードを削除しますか？",
    keyDuplicationError: "この値は一意でなければなりません。",
    addColumn: "列の追加",
    addRow: "追加行",
    removeRow: "除去",
    emptyRowsText: "行はありません。",
    addPanel: "新規追加",
    removePanel: "除去",
    choices_Item: "品目",
    matrix_column: "コラム",
    matrix_row: "行",
    multipletext_itemname: "テキスト",
    savingData: "結果はサーバーに保存されています...。",
    savingDataError: "エラーが発生し、結果を保存できませんでした。",
    savingDataSuccess: "結果は無事に保存されました",
    saveAgainButton: "もう一度試してみてください。",
    timerMin: "僅少",
    timerSec: "セック",
    timerSpentAll: "あなたはこのページに{0}を費やし、合計で{1}を費やしました。",
    timerSpentPage: "あなたはこのページに{0}を費やしました。",
    timerSpentSurvey: "合計で{0}を使ったことになります。",
    timerLimitAll: "このページに{1}のうち{0}を費やし、{3}のうち{2}を合計で費やしました。",
    timerLimitPage: "このページで{1}の{0}を使ったことがあります。",
    timerLimitSurvey: "合計で{1}の{0}を使ったことがあります。",
    clearCaption: "空白",
    signaturePlaceHolder: "ここに署名",
    chooseFileCaption: "ファイルを選択",
    takePhotoCaption: "写真を撮る",
    photoPlaceholder: "下のボタンをクリックして、カメラを使用して写真を撮ります。",
    fileOrPhotoPlaceholder: "アップロードするファイルをドラッグアンドドロップまたは選択するか、カメラを使用して写真を撮ります。",
    replaceFileCaption: "ファイルの置換",
    removeFileCaption: "このファイルを削除",
    booleanCheckedLabel: "噫",
    booleanUncheckedLabel: "否",
    confirmRemoveFile: "このファイルを削除してもよろしいですか？{0}?",
    confirmRemoveAllFiles: "すべてのファイルを削除してもよろしいですか？",
    questionTitlePatternText: "質問名",
    modalCancelButtonText: "キャンセル",
    modalApplyButtonText: "申し込む",
    filterStringPlaceholder: "検索するタイプ...",
    emptyMessage: "表示するデータがありません",
    noEntriesText: "エントリはまだありません。\n下のボタンをクリックして、新しいエントリを追加します。",
    noEntriesReadonlyText: "エントリはありません。",
    more: "もっとその",
    tagboxDoneButtonCaption: "わかりました",
    selectToRankEmptyRankedAreaText: "すべての選択肢がランク付けされます",
    selectToRankEmptyUnrankedAreaText: "ここに選択肢をドラッグアンドドロップしてランク付けします"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["ja"] = japaneseSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["ja"] = "日本語";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{1}の{0}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "選ぶ。。。"
// minError: "The value should not be less than {0}" => "値は {0} 値より小さくすることはできません"
// maxError: "The value should not be greater than {0}" => "値は {0} を超えてはなりません。"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "ここにファイルをドラッグ&ドロップするか、下のボタンをクリックしてアップロードするファイルを選択してください。"
// emptyRowsText: "There are no rows." => "行はありません。"
// multipletext_itemname: "text" => "テキスト"
// signaturePlaceHolder: "Sign here" => "ここに署名"
// modalCancelButtonText: "Cancel" => "キャンセル"
// modalApplyButtonText: "Apply" => "申し込む"
// filterStringPlaceholder: "Type to search..." => "検索するタイプ..."
// emptyMessage: "No data to display" => "表示するデータがありません"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "エントリはまだありません。\n下のボタンをクリックして、新しいエントリを追加します。"
// noEntriesReadonlyText: "There are no entries." => "エントリはありません。"
// more: "More" => "もっとその"
// tagboxDoneButtonCaption: "OK" => "わかりました"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "すべての選択肢がランク付けされます"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "ここに選択肢をドラッグアンドドロップしてランク付けします"// takePhotoCaption: "Take Photo" => "写真を撮る"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "下のボタンをクリックして、カメラを使用して写真を撮ります。"
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "アップロードするファイルをドラッグアンドドロップまたは選択するか、カメラを使用して写真を撮ります。"
// replaceFileCaption: "Replace file" => "ファイルの置換"


/***/ }),

/***/ "./src/localization/kazakh.ts":
/*!************************************!*\
  !*** ./src/localization/kazakh.ts ***!
  \************************************/
/*! exports provided: kazakhStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kazakhStrings", function() { return kazakhStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var kazakhStrings = {
    pagePrevText: "Артқа",
    pageNextText: "Келесі",
    completeText: "Дайын",
    previewText: "Алдын ала қарау",
    editText: "Редакциялау",
    startSurveyText: "Бастау",
    otherItemText: "Басқа (өтінеміз, жазыңыз)",
    noneItemText: "Жоқ",
    selectAllItemText: "Барлығын таңдау",
    progressText: "{0} ден {1} бет ",
    indexText: "{1} {0}",
    panelDynamicProgressText: "{0} ден {1} жазба",
    panelDynamicTabTextFormat: "Панель {panelIndex}",
    questionsProgressText: "{0}/{1} сұрақтарға жауап",
    emptySurvey: "Бір де бір сұрақ жоқ.",
    completingSurvey: "Сауалнаманы толтырғаныңыз үшін рахмет!",
    completingSurveyBefore: "Сіз бұл сауалнаманы өтіп қойдыңыз.",
    loadingSurvey: "Серверден жүктеу...",
    placeholder: "Таңдау...",
    ratingOptionsCaption: "Таңдау...",
    value: "мәні",
    requiredError: "Өтінеміз, сұраққа жауап беріңіз.",
    requiredErrorInPanel: "Өтінеміз, кем дегенде бір сұраққа жауап беріңіз.",
    requiredInAllRowsError: "Өтінеміз, әрбір жолдың сұрағаны жауап беріңіз.",
    numericError: "Жауап сан түрінде болуы керек.",
    minError: "Мәні {0} кем болмауы тиіс",
    maxError: "Мән {0} артық болмауы тиіс",
    textMinLength: "Өтінеміз, {0} ден көп таңба енгізіңіз.",
    textMaxLength: "Өтінеміз, {0} ден аз таңба енгізіңіз.",
    textMinMaxLength: "Өтінеміз, {0} аз және {1} көп таңба енгізіңіз.",
    minRowCountError: "Өтінеміз, {0} ден кем емес жол толтырыңыз.",
    minSelectError: "Өтінеміз, тым болмаса {0} нұсқа таңдаңыз.",
    maxSelectError: "Өтінеміз, {0} нұсқадан көп таңдамаңыз.",
    numericMinMax: "'{0}' {1} ден кем емес және {2} ден көп емес болу керек",
    numericMin: "'{0}' {1} ден кем емес болу керек",
    numericMax: "'{0}' {1} ден көп емес болу керек",
    invalidEmail: "Өтінеміз, жарамды электрондық поштаңызды енгізіңіз.",
    invalidExpression: "{0} өрнегі  'true' қайтару керек.",
    urlRequestError: "Сұратым қателікті қайтарды'{0}'. {1}",
    urlGetChoicesError: "Сұратымға жауап бос келді немесе 'path' қасиеті қате көрсетілген ",
    exceedMaxSize: "Файлдың мөлшері {0} аспау керек.",
    otherRequiredError: "Өтінеміз, “Басқа” жолына деректі енгізіңіз",
    uploadingFile: "Сіздің файлыңыз жүктеліп жатыр. Бірнеше секунд тосып, қайтадан байқап көріңіз.",
    loadingFile: "Жүктеу...",
    chooseFile: "Файлдарды таңдаңыз...",
    noFileChosen: "Файл таңдалынбады",
    filePlaceholder: "Файлды осы жерге апарып тастаңыз немесе төмендегі түймені басыңыз және кері жүктеу үшін файлды таңдаңыз.",
    confirmDelete: "Сіз жазбаны жоятыныңызға сенімдісіз бе?",
    keyDuplicationError: "Бұл мән бірегей болу керек.",
    addColumn: "Бағана қосу",
    addRow: "Жолды қосу",
    removeRow: "Өшіру",
    emptyRowsText: "Қатарлар жоқ.",
    addPanel: "Жаңа қосу",
    removePanel: "Өшіру",
    choices_Item: "Нұсқа",
    matrix_column: "Бағана",
    matrix_row: "Жол",
    multipletext_itemname: "мәтін",
    savingData: "Нәтижелер серверде сақталады...",
    savingDataError: "Қателік туындады, нәтиже сақталынбады.",
    savingDataSuccess: "Нәтиже ойдағыдай сақталды!",
    saveAgainButton: "Қайтадан байқап көру",
    timerMin: "мин",
    timerSec: "сек",
    timerSpentAll: "Сіз бұл бетте {0} кетірдіңіз және барлығы {1}.",
    timerSpentPage: "Сіз бұл бетте {0} кетірдіңіз.",
    timerSpentSurvey: "Сіз сауалнама кезінде {0} кетірдіңіз.",
    timerLimitAll: "Сіз бұл бетте {0} ден {1} кетірдіңіз және {2} ден {3} бүкіл сауалнама үшін.",
    timerLimitPage: "Сіз бұл бетте {0} ден {1} кетірдіңіз.",
    timerLimitSurvey: "Сіз бүкіл сауалнама үшін {0} ден {1} кетірдіңіз ",
    clearCaption: "Тазалау",
    signaturePlaceHolder: "Осында кіру",
    chooseFileCaption: "Файл таңдаңыз",
    takePhotoCaption: "Фотосуретке түсу",
    photoPlaceholder: "Камераны пайдаланып суретке түсу үшін төмендегі түймені басыңыз.",
    fileOrPhotoPlaceholder: "Фотоаппаратты пайдаланып кері жүктеу немесе суретке түсіру үшін файлды апарып тастаыңыз немесе таңдаңыз.",
    replaceFileCaption: "Файлды ауыстыру",
    removeFileCaption: "Файлды жойыңыз",
    booleanCheckedLabel: "Иә",
    booleanUncheckedLabel: "Жоқ",
    confirmRemoveFile: "Сіз бұл файлды жоятыныңызға сенімдісіз бе: {0}?",
    confirmRemoveAllFiles: "Сіз барлық файлдарды жоятыныңызға сенімдісіз бе?",
    questionTitlePatternText: "Сұрақтың атауы",
    modalCancelButtonText: "Болдырмау",
    modalApplyButtonText: "Қолдану",
    filterStringPlaceholder: "Іздеу үшін теріңіз...",
    emptyMessage: "Көрсетілетін деректер жоқ",
    noEntriesText: "Әзірге жазбалар жоқ.\nЖаңа жазбаны қосу үшін төмендегі түймешігіңді басыңыз.",
    noEntriesReadonlyText: "Жазбалар жоқ.",
    more: "Қосымша",
    tagboxDoneButtonCaption: "ЖАҚСЫ",
    selectToRankEmptyRankedAreaText: "Барлық таңдаулар ранжирленген",
    selectToRankEmptyUnrankedAreaText: "Таңдауды рангтеу үшін осында апарып тастау"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["kk"] = kazakhStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["kk"] = "Kazakh";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{1} {0}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Панель {panelIndex}"
// ratingOptionsCaption: "Select..." => "Таңдау..."
// minError: "The value should not be less than {0}" => "Мәні {0} кем болмауы тиіс"
// maxError: "The value should not be greater than {0}" => "Мән {0} артық болмауы тиіс"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Файлды осы жерге апарып тастаңыз немесе төмендегі түймені басыңыз және кері жүктеу үшін файлды таңдаңыз."
// emptyRowsText: "There are no rows." => "Қатарлар жоқ."
// multipletext_itemname: "text" => "мәтін"
// signaturePlaceHolder: "Sign here" => "Осында кіру"
// modalCancelButtonText: "Cancel" => "Болдырмау"
// modalApplyButtonText: "Apply" => "Қолдану"
// filterStringPlaceholder: "Type to search..." => "Іздеу үшін теріңіз..."
// emptyMessage: "No data to display" => "Көрсетілетін деректер жоқ"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Әзірге жазбалар жоқ.\nЖаңа жазбаны қосу үшін төмендегі түймешігіңді басыңыз."
// noEntriesReadonlyText: "There are no entries." => "Жазбалар жоқ."
// more: "More" => "Қосымша"
// tagboxDoneButtonCaption: "OK" => "ЖАҚСЫ"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Барлық таңдаулар ранжирленген"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Таңдауды рангтеу үшін осында апарып тастау"// takePhotoCaption: "Take Photo" => "Фотосуретке түсу"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Камераны пайдаланып суретке түсу үшін төмендегі түймені басыңыз."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Фотоаппаратты пайдаланып кері жүктеу немесе суретке түсіру үшін файлды апарып тастаыңыз немесе таңдаңыз."
// replaceFileCaption: "Replace file" => "Файлды ауыстыру"


/***/ }),

/***/ "./src/localization/korean.ts":
/*!************************************!*\
  !*** ./src/localization/korean.ts ***!
  \************************************/
/*! exports provided: koreanStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "koreanStrings", function() { return koreanStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var koreanStrings = {
    pagePrevText: "이전",
    pageNextText: "다음",
    completeText: "완료",
    previewText: "미리보기",
    editText: "수정",
    startSurveyText: "시작",
    otherItemText: "기타 (설명)",
    noneItemText: "없음",
    selectAllItemText: "모두 선택",
    progressText: "페이지 {1} / {0}",
    indexText: "{0} / {1}",
    panelDynamicProgressText: "{0} / {1}",
    panelDynamicTabTextFormat: "패널 {panelIndex}",
    questionsProgressText: "{0} / {1} 개의 질문에 답변함",
    emptySurvey: "설문지에 보여지는 페이지나 질문이 없습니다.",
    completingSurvey: "설문조사를 완료해 주셔서 감사합니다.",
    completingSurveyBefore: "기록에 따르면 이미 설문 조사를 마치셨습니다.",
    loadingSurvey: "설문조사가 로드중입니다...",
    placeholder: "선택...",
    ratingOptionsCaption: "등급을 매기려면 누르세요.",
    value: "값",
    requiredError: "질문에 답하시오.",
    requiredErrorInPanel: "하나 이상의 질문에 답하십시오.",
    requiredInAllRowsError: "모든 행에 있는 질문에 답하십시오.",
    numericError: "값은 숫자여야 합니다.",
    minError: "값은 {0}보다 작으면 안됩니다.",
    maxError: "값은 {0}보다 클 수 없습니다.",
    textMinLength: "답변의 길이는 최소 {0}자여야 입니다.",
    textMaxLength: "답변의 길이는 {0}자를 초과 할 수 없습니다.",
    textMinMaxLength: "답변의 길이는 {0} - {1}자 사이여야 합니다.",
    minRowCountError: "최소 {0}개의 행을 채우십시오",
    minSelectError: "최소 {0}개의 변수를 선택하십시오.",
    maxSelectError: "최대 {0}개의 변수를 선택하십시오.",
    numericMinMax: "'{0}'은 {1}보다 크거나 같고 {2}보다 작거나 같아야합니다.",
    numericMin: "'{0}'은 {1}보다 크거나 같아야합니다.",
    numericMax: "'{0}'은 {1}보다 작거나 같아야합니다.",
    invalidEmail: "올바른 이메일 주소를 입력하십시오.",
    invalidExpression: "표현식: {0}은 '참'이어야 합니다.",
    urlRequestError: "'{0}'으로 잘못된 요청입니다. {1}",
    urlGetChoicesError: "비어있는 데이터를 요청했거나 잘못된 속성의 경로입니다.",
    exceedMaxSize: "파일 크기가 {0}을 초과 할 수 없습니다.",
    otherRequiredError: "다른 질문을 작성하십시오.",
    uploadingFile: "파일 업로드 중입니다. 잠시 후 다시 시도하십시오.",
    loadingFile: "로드 중...",
    chooseFile: "파일 선택...",
    noFileChosen: "선택된 파일이 없습니다.",
    filePlaceholder: "파일을 여기에 놓거나 아래 버튼을 클릭하여 파일을 불러오세요.",
    confirmDelete: "기록을 삭제하시겠습니까?",
    keyDuplicationError: " 이 값은 고유해야합니다.",
    addColumn: "열 추가",
    addRow: "행 추가",
    removeRow: "제거",
    emptyRowsText: "행이 없습니다.",
    addPanel: "추가",
    removePanel: "제거",
    choices_Item: "항목",
    matrix_column: "열",
    matrix_row: "행",
    multipletext_itemname: "텍스트",
    savingData: "결과가 서버에 저장 중입니다...",
    savingDataError: "오류가 발생하여 결과를 저장할 수 없습니다.",
    savingDataSuccess: "결과가 성공적으로 저장되었습니다.",
    saveAgainButton: "다시 시도하세요.",
    timerMin: "분",
    timerSec: "초",
    timerSpentAll: "현재 페이지에서 {0}을 소요해 총 {1}이 걸렸습니다.",
    timerSpentPage: "현재 페이지에서 {0}이 걸렸습니다.",
    timerSpentSurvey: "총 {0}이 걸렸습니다.",
    timerLimitAll: "현재 페이지에서 {0}/{1}을 소요해 총 {2}/{3}이 걸렸습니다.",
    timerLimitPage: "현재 페이지에서 {0}/{1}이 걸렸습니다.",
    timerLimitSurvey: "총 {0}/{1}이 걸렸습니다.",
    clearCaption: "지우기",
    signaturePlaceHolder: "서명하세요.",
    chooseFileCaption: "파일 선택",
    takePhotoCaption: "사진 찍기",
    photoPlaceholder: "아래 버튼을 클릭하여 카메라로 사진을 찍습니다.",
    fileOrPhotoPlaceholder: "업로드할 파일을 드래그 앤 드롭하거나 선택하거나 카메라를 사용하여 사진을 찍습니다.",
    replaceFileCaption: "파일 바꾸기",
    removeFileCaption: "파일 제거",
    booleanCheckedLabel: "예",
    booleanUncheckedLabel: "아니오",
    confirmRemoveFile: "{0} 파일을 제거 하시겠습니까?",
    confirmRemoveAllFiles: "모든 파일을 제거 하시겠습니까?",
    questionTitlePatternText: "질문 제목",
    modalCancelButtonText: "취소",
    modalApplyButtonText: "적용",
    filterStringPlaceholder: "검색 유형...",
    emptyMessage: "표시할 데이터가 없습니다.",
    noEntriesText: "아직 항목이 없습니다.\n새 항목을 추가하려면 아래 버튼을 클릭하세요.",
    noEntriesReadonlyText: "항목이 없습니다.",
    more: "더보기",
    tagboxDoneButtonCaption: "그래",
    selectToRankEmptyRankedAreaText: "모든 선택 항목이 순위가 매겨집니다.",
    selectToRankEmptyUnrankedAreaText: "여기에 선택 항목을 끌어다 놓아 순위를 매깁니다."
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["ko"] = koreanStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["ko"] = "한국어";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "패널 {panelIndex}"
// emptyMessage: "No data to display" => "표시할 데이터가 없습니다."
// noEntriesReadonlyText: "There are no entries." => "항목이 없습니다."
// tagboxDoneButtonCaption: "OK" => "그래"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "모든 선택 항목이 순위가 매겨집니다."
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "여기에 선택 항목을 끌어다 놓아 순위를 매깁니다."// takePhotoCaption: "Take Photo" => "사진 찍기"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "아래 버튼을 클릭하여 카메라로 사진을 찍습니다."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "업로드할 파일을 드래그 앤 드롭하거나 선택하거나 카메라를 사용하여 사진을 찍습니다."
// replaceFileCaption: "Replace file" => "파일 바꾸기"


/***/ }),

/***/ "./src/localization/latvian.ts":
/*!*************************************!*\
  !*** ./src/localization/latvian.ts ***!
  \*************************************/
/*! exports provided: latvianSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latvianSurveyStrings", function() { return latvianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var latvianSurveyStrings = {
    pagePrevText: "Iepriekšēja lapa",
    pageNextText: "Nākamā lapa",
    completeText: "Iesniegt",
    previewText: "Priekšskatījums",
    editText: "Rediģēt",
    startSurveyText: "Sākt",
    otherItemText: "Cits (lūdzu, aprakstiet!)",
    noneItemText: "Nav",
    selectAllItemText: "Izvēlēties visus",
    progressText: "{0}. lapa no {1}",
    indexText: "{0} no {1}",
    panelDynamicProgressText: "Ierakstīt {0} no {1}",
    panelDynamicTabTextFormat: "Panelis {panelIndex}",
    questionsProgressText: "Atbildēts uz {0} / {1} jautājumiem",
    emptySurvey: "Nav neviena jautājuma.",
    completingSurvey: "Pateicamies Jums par anketas aizpildīšanu!",
    completingSurveyBefore: "Mūsu ieraksti liecina, ka Jūs jau esat aizpildījis šo aptauju.",
    loadingSurvey: "Ielāde no servera...",
    placeholder: "Izvēlēties...",
    ratingOptionsCaption: "Nospiediet šeit, lai novērtētu...",
    value: "value",
    requiredError: "Lūdzu, atbildiet uz jautājumu!",
    requiredErrorInPanel: "Lūdzu, atbildiet uz vismaz vienu jautājumu.",
    requiredInAllRowsError: "Lūdzu, atbildiet uz jautājumiem visās rindās.",
    numericError: "Atbildei ir jābūt skaitlim.",
    minError: "Vērtība nedrīkst būt mazāka par {0}",
    maxError: "Vērtība nedrīkst būt lielāka par {0}",
    textMinLength: "Lūdzu, ievadiet vismaz {0} simbolus.",
    textMaxLength: "Lūdzu, ievadiet mazāk nekā {0} rakstzīmes.",
    textMinMaxLength: "Lūdzu, ievadiet vairāk nekā {0} rakstzīmes un mazāk nekā {1} rakstzīmes.",
    minRowCountError: "Lūdzu, aizpildiet vismaz {0} rindas.",
    minSelectError: "Lūdzu, izvēlieties vismaz {0} variantu.",
    maxSelectError: "Lūdzu, izvēlieties ne vairak par {0} variantiem.",
    numericMinMax: "'{0}' jābūt vienādam vai lielākam nekā {1}, un vienādam vai mazākam, nekā {2}",
    numericMin: "'{0}' jābūt vienādam vai lielākam {1}",
    numericMax: "'{0}' jābūt vienādam vai lielākam {1}",
    invalidEmail: "Lūdzu, ievadiet pareizu e-pasta adresi!",
    invalidExpression: "Izteicienam: {0} jāatgriež “true”.",
    urlRequestError: "Pieprasījumā tika atgriezta kļūda “{0}”. {1}",
    urlGetChoicesError: "Pieprasījums atgrieza tukšus datus vai rekvizīts “path” ir nepareizs",
    exceedMaxSize: "Faila lielums nedrīkst pārsniegt {0}.",
    otherRequiredError: "Lūdzu, ievadiet datus laukā 'Cits'",
    uploadingFile: "Jūsu fails tiek augšupielādēts. Lūdzu, uzgaidiet dažas sekundes un mēģiniet vēlreiz.",
    loadingFile: "Notiek ielāde ...",
    chooseFile: "Izvēlieties failus ...",
    noFileChosen: "Nav izvēlēts neviens fails",
    filePlaceholder: "Lai pievienotu, ievelciet failu šeit vai arī klikšķiniet uz zemāk redzamās pogas",
    confirmDelete: "Vai vēlaties izdzēst ierakstu?",
    keyDuplicationError: "Šai vērtībai jābūt unikālai.",
    addColumn: "Pievienot kolonnu",
    addRow: "Pievienot rindu",
    removeRow: "Noņemt",
    emptyRowsText: "Nav rindu.",
    addPanel: "Pievieno jaunu",
    removePanel: "Noņemt",
    choices_Item: "vienums",
    matrix_column: "Sleja",
    matrix_row: "Rinda",
    multipletext_itemname: "teksts",
    savingData: "Rezultāti tiek saglabāti serverī ...",
    savingDataError: "Radās kļūda, un mēs nevarējām saglabāt rezultātus.",
    savingDataSuccess: "Rezultāti tika veiksmīgi saglabāti!",
    saveAgainButton: "Mēģiniet vēlreiz",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Šajā lapā esat iztērējis {0} un kopā {1}.",
    timerSpentPage: "Šajā lapā esat iztērējis {0}.",
    timerSpentSurvey: "Kopā esat iztērējis {0}.",
    timerLimitAll: "Šajā lapā esat iztērējis {0} no {1} un kopā {2} no {3}.",
    timerLimitPage: "Šajā lapā esat iztērējis {0} no {1}.",
    timerLimitSurvey: "Kopā esat iztērējis {0} no {1}.",
    clearCaption: "Iztīrīt",
    signaturePlaceHolder: "Parakstieties šeit",
    chooseFileCaption: "Izvēlēties failu",
    takePhotoCaption: "Uzņemt fotoattēlu",
    photoPlaceholder: "Noklikšķiniet uz pogas zemāk, lai uzņemtu fotoattēlu, izmantojot kameru.",
    fileOrPhotoPlaceholder: "Velciet un nometiet vai atlasiet failu, ko augšupielādēt vai uzņemt fotoattēlu, izmantojot kameru.",
    replaceFileCaption: "Aizstāt failu",
    removeFileCaption: "Noņemiet šo failu",
    booleanCheckedLabel: "Jā",
    booleanUncheckedLabel: "Nē",
    confirmRemoveFile: "Vai tiešām vēlaties noņemt šo failu: {0}?",
    confirmRemoveAllFiles: "Vai tiešām vēlaties noņemt visus failus?",
    questionTitlePatternText: "Jautājuma nosaukums",
    modalCancelButtonText: "Atcelt",
    modalApplyButtonText: "Pielietot",
    filterStringPlaceholder: "Ierakstiet, lai meklētu...",
    emptyMessage: "Nav datu, ko rādīt",
    noEntriesText: "Vēl nav neviena ieraksta.\nNoklikšķiniet uz zemāk esošās pogas, lai pievienotu jaunu ierakstu.",
    noEntriesReadonlyText: "Ierakstu nav.",
    more: "Vairāk",
    tagboxDoneButtonCaption: "LABI",
    selectToRankEmptyRankedAreaText: "Visas izvēles ir sarindotas",
    selectToRankEmptyUnrankedAreaText: "Velciet un nometiet izvēles iespējas šeit, lai tās sarindotu"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["lv"] = latvianSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["lv"] = "latviešu";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panelis {panelIndex}"
// emptyMessage: "No data to display" => "Nav datu, ko rādīt"
// noEntriesReadonlyText: "There are no entries." => "Ierakstu nav."
// more: "More" => "Vairāk"
// tagboxDoneButtonCaption: "OK" => "LABI"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Visas izvēles ir sarindotas"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Velciet un nometiet izvēles iespējas šeit, lai tās sarindotu"// takePhotoCaption: "Take Photo" => "Uzņemt fotoattēlu"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Noklikšķiniet uz pogas zemāk, lai uzņemtu fotoattēlu, izmantojot kameru."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Velciet un nometiet vai atlasiet failu, ko augšupielādēt vai uzņemt fotoattēlu, izmantojot kameru."
// replaceFileCaption: "Replace file" => "Aizstāt failu"


/***/ }),

/***/ "./src/localization/lithuanian.ts":
/*!****************************************!*\
  !*** ./src/localization/lithuanian.ts ***!
  \****************************************/
/*! exports provided: lithuaniaSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lithuaniaSurveyStrings", function() { return lithuaniaSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var lithuaniaSurveyStrings = {
    pagePrevText: "Atgal",
    pageNextText: "Toliau",
    completeText: "Baigti",
    previewText: "Peržiūra",
    editText: "Redaguoti",
    startSurveyText: "Pradėti",
    otherItemText: "Kita (įvesti)",
    noneItemText: "Nėra",
    selectAllItemText: "Pasirinkti visus",
    progressText: "Puslapis {0} iš {1}",
    indexText: "{1} {0}",
    panelDynamicProgressText: "Įrašyti {0} iš {1}",
    panelDynamicTabTextFormat: "Skydelis {panelIndex}",
    questionsProgressText: "Atsakė į {0} / {1} klausimus",
    emptySurvey: "Apklausoje nėra matomo puslapio ar klausimo.",
    completingSurvey: "Dėkojame už dalyvavimą apklausoje!",
    completingSurveyBefore: "Mūsų įrašai rodo, kad jau atlikote šią apklausą.",
    loadingSurvey: "Prašome palaukti...",
    placeholder: "Pasirinkti...",
    ratingOptionsCaption: "Žymėti...",
    value: "reikšmė",
    requiredError: "Būtina atsakyti į šį klausimą.",
    requiredErrorInPanel: "Būtina atsakyti bent į vieną klausimą.",
    requiredInAllRowsError: "Prašome atsakyti į klausimus visose eilutėse.",
    numericError: "Turi būti skaičiai.",
    minError: "Vertė neturėtų būti mažesnė nei {0}",
    maxError: "Vertė neturėtų būti didesnė nei {0}",
    textMinLength: "Prašome suvesti bent {0} simbolius.",
    textMaxLength: "Prašome suvesti mažiau nei {0} simbolių.",
    textMinMaxLength: "Prašome suvesti daugiau nei {0} ir mažiau nei {1} simbolių.",
    minRowCountError: "Prašome suvesti ne mažiau nei {0} eilučių.",
    minSelectError: "Prašome pasirinkti bent {0} variantų.",
    maxSelectError: "Pasirinkite ne daugiau kaip {0} variantus.",
    numericMinMax: "'{0}' turi būti lygus arba didesnis nei {1} ir lygus arba mažesnis nei {2}",
    numericMin: "'{0}' turėtų būti lygus arba didesnis nei {1}",
    numericMax: "'{0}' turėtų būti lygus ar mažesnis už {1}",
    invalidEmail: "Prašome įvesti galiojantį elektroninio pašto adresą.",
    invalidExpression: "Reikšmė: {0} turi grąžinti 'true'.",
    urlRequestError: "Užklausa grąžino klaidą'{0}'. {1}",
    urlGetChoicesError: "Užklausa grąžino tuščius duomenis arba 'path' savybė yra neteisinga",
    exceedMaxSize: "Failo dydis neturi viršyti {0}.",
    otherRequiredError: "Įveskite kitą reikšmę.",
    uploadingFile: "Jūsų failas yra keliamas. Palaukite keletą sekundžių ir bandykite dar kartą.",
    loadingFile: "Prašome palaukti...",
    chooseFile: "Pasirinkti failą(us)...",
    noFileChosen: "Nepasirinktas joks failas",
    filePlaceholder: "Nuvilkite failą čia arba spustelėkite žemiau esantį mygtuką ir pasirinkite failą, kurį norite įkelti.",
    confirmDelete: "Ar norite ištrinti įrašą?",
    keyDuplicationError: "Ši reikšmė turėtų būti unikali.",
    addColumn: "Pridėti stulpelį",
    addRow: "Pridėti eilutę",
    removeRow: "Ištrinti",
    emptyRowsText: "Eilių nėra.",
    addPanel: "Pridėti naują",
    removePanel: "Ištrinti",
    choices_Item: "elementas",
    matrix_column: "Stulpelis",
    matrix_row: "Eilutė",
    multipletext_itemname: "SMS žinutė",
    savingData: "Rezultatai saugomi serveryje...",
    savingDataError: "Įvyko klaida ir mes negalėjome išsaugoti rezultatų.",
    savingDataSuccess: "Rezultatai buvo išsaugoti sėkmingai!",
    saveAgainButton: "Bandyti dar kartą",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Praleidote {0} šiame puslapyje ir {1} iš viso.",
    timerSpentPage: "Praleidote {0} šiame puslapyje.",
    timerSpentSurvey: "Praleidote {0} iš viso.",
    timerLimitAll: "Praleidote {0} iš {1} šiame puslapyje ir {2} iš {3} iš viso.",
    timerLimitPage: "Praleidote {0} iš {1} šiame puslapyje.",
    timerLimitSurvey: "Praleidote {0} iš {1} iš viso.",
    clearCaption: "Valyti",
    signaturePlaceHolder: "Pasirašykite čia",
    chooseFileCaption: "Pasirinkti failą",
    takePhotoCaption: "Fotografuoti",
    photoPlaceholder: "Spustelėkite žemiau esantį mygtuką, kad nufotografuotumėte fotoaparatu.",
    fileOrPhotoPlaceholder: "Nuvilkite arba pasirinkite failą, kurį norite įkelti arba nufotografuoti naudodami fotoaparatą.",
    replaceFileCaption: "Pakeiskite failą",
    removeFileCaption: "Ištrinti šį failą",
    booleanCheckedLabel: "Taip",
    booleanUncheckedLabel: "Ne",
    confirmRemoveFile: "Ar tikrai norite pašalinti šį failą: {0}?",
    confirmRemoveAllFiles: "Ar tikrai norite pašalinti visus failus?",
    questionTitlePatternText: "Klausimo pavadinimas",
    modalCancelButtonText: "Atšaukti",
    modalApplyButtonText: "Vartoti",
    filterStringPlaceholder: "Įveskite, kad ieškotumėte...",
    emptyMessage: "Nėra rodomų duomenų",
    noEntriesText: "Įrašų dar nėra.\nSpustelėkite žemiau esantį mygtuką, kad pridėtumėte naują įrašą.",
    noEntriesReadonlyText: "Įrašų nėra.",
    more: "Daugiau",
    tagboxDoneButtonCaption: "GERAI",
    selectToRankEmptyRankedAreaText: "Visi pasirinkimai yra reitinguojami",
    selectToRankEmptyUnrankedAreaText: "Nuvilkite pasirinkimus čia, kad juos reitinguotumėte"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["lt"] = lithuaniaSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["lt"] = "lietuvių";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{1} {0}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Skydelis {panelIndex}"
// ratingOptionsCaption: "Select..." => "Žymėti..."
// minError: "The value should not be less than {0}" => "Vertė neturėtų būti mažesnė nei {0}"
// maxError: "The value should not be greater than {0}" => "Vertė neturėtų būti didesnė nei {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Nuvilkite failą čia arba spustelėkite žemiau esantį mygtuką ir pasirinkite failą, kurį norite įkelti."
// emptyRowsText: "There are no rows." => "Eilių nėra."
// multipletext_itemname: "text" => "SMS žinutė"
// signaturePlaceHolder: "Sign here" => "Pasirašykite čia"
// modalCancelButtonText: "Cancel" => "Atšaukti"
// modalApplyButtonText: "Apply" => "Vartoti"
// filterStringPlaceholder: "Type to search..." => "Įveskite, kad ieškotumėte..."
// emptyMessage: "No data to display" => "Nėra rodomų duomenų"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Įrašų dar nėra.\nSpustelėkite žemiau esantį mygtuką, kad pridėtumėte naują įrašą."
// noEntriesReadonlyText: "There are no entries." => "Įrašų nėra."
// more: "More" => "Daugiau"
// tagboxDoneButtonCaption: "OK" => "GERAI"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Visi pasirinkimai yra reitinguojami"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Nuvilkite pasirinkimus čia, kad juos reitinguotumėte"// takePhotoCaption: "Take Photo" => "Fotografuoti"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Spustelėkite žemiau esantį mygtuką, kad nufotografuotumėte fotoaparatu."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Nuvilkite arba pasirinkite failą, kurį norite įkelti arba nufotografuoti naudodami fotoaparatą."
// replaceFileCaption: "Replace file" => "Pakeiskite failą"


/***/ }),

/***/ "./src/localization/macedonian.ts":
/*!****************************************!*\
  !*** ./src/localization/macedonian.ts ***!
  \****************************************/
/*! exports provided: macedonianSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macedonianSurveyStrings", function() { return macedonianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var macedonianSurveyStrings = {
    pagePrevText: "Претходна",
    pageNextText: "Следно",
    completeText: "Заврши",
    previewText: "Преглед",
    editText: "Уредување",
    startSurveyText: "Започнете",
    otherItemText: "Друго (опиши)",
    noneItemText: "Ништо",
    selectAllItemText: "Селектирај се",
    progressText: "Страница {0} од {1}",
    indexText: "{0} на {1}",
    panelDynamicProgressText: "Сними {0} од {1}",
    panelDynamicTabTextFormat: "Панел {панел Индекс}",
    questionsProgressText: "Одговорени на {0} / {1} прашања",
    emptySurvey: "Нема видлива страница или прашање во истражувањето.",
    completingSurvey: "Ви благодариме што го завршивте истражувањето!",
    completingSurveyBefore: "Нашите записи покажуваат дека веќе сте го завршиле ова истражување.",
    loadingSurvey: "Анкетата се вчитува ...",
    placeholder: "Изберете ...",
    ratingOptionsCaption: "Изберете...",
    value: "вредност",
    requiredError: "Ве молам, одговорете на прашањето.",
    requiredErrorInPanel: "Ве молам, одговорете барем на едно прашање.",
    requiredInAllRowsError: "Ве молиме, одговорете на прашања во сите редови.",
    numericError: "Вредноста треба да биде нумеричка.",
    minError: "Вредноста не треба да биде помала од {0}",
    maxError: "Вредноста не треба да биде поголема од {0}",
    textMinLength: "Внесете најмалку {0} знак/ци.",
    textMaxLength: "Внесете не повеќе од {0} знак/ци.",
    textMinMaxLength: "Внесете најмалку {0} и не повеќе од {1} знаци.",
    minRowCountError: "Пополнете најмалку {0} ред(ови).",
    minSelectError: "Ве молиме изберете најмалку {0} варијанта(и).",
    maxSelectError: "Изберете не повеќе од {0} варијанта(и).",
    numericMinMax: "'{0}' треба да биде најмалку {1} и најмногу {2}",
    numericMin: "'{0}' треба да биде најмалку {1}",
    numericMax: "'{0}' треба да биде најмногу {1}",
    invalidEmail: "Ве молиме внесете валидна е-маил адреса.",
    invalidExpression: "Изразот: {0} треба да се врати 'true'.",
    urlRequestError: "Барањето врати грешка '{0}'. {1} ",
    urlGetChoicesError: "Барањето врати празни податоци или својството 'path' е неточно",
    exceedMaxSize: "Големината на датотеката не треба да надминува {0}.",
    otherRequiredError: "Внесете ја другата вредност.",
    uploadingFile: "Вашата датотека се поставува. Ве молиме почекајте неколку секунди и обидете се повторно.",
    loadingFile: "Се вчитува ...",
    chooseFile: "Изберете датотека (и) ...",
    noFileChosen: "Не се избрани датотеки",
    filePlaceholder: "Пуштете датотека овде или кликнете на копчето подолу за да ја вчитате датотеката.",
    confirmDelete: "Дали сакате да го избришете записот?",
    keyDuplicationError: "Оваа вредност треба да биде единствена.",
    addColumn: "Додај колона",
    addRow: "Додади ред",
    removeRow: "Отстрани",
    emptyRowsText: "Нема редови.",
    addPanel: "Додади ново",
    removePanel: "Отстрани",
    choices_Item: "ставка",
    matrix_column: "Колона",
    matrix_row: "Ред",
    multipletext_itemname: "текст.",
    savingData: "Резултатите се зачувуваат на серверот ...",
    savingDataError: "Настана грешка и не можевме да ги зачуваме резултатите.",
    savingDataSuccess: "Резултатите беа успешно зачувани!",
    saveAgainButton: "Обиди се повторно",
    timerMin: "мин",
    timerSec: "сек",
    timerSpentAll: "Поминавте {0} на оваа страница и вкупно {1}.",
    timerSpentPage: "Поминавте {0} на оваа страница.",
    timerSpentSurvey: "Вие потрошивте вкупно {0}.",
    timerLimitAll: "Поминавте {0} од {1} на оваа страница и {2} од {3} вкупно.",
    timerLimitPage: "Поминавте {0} од {1} на оваа страница.",
    timerLimitSurvey: "Вие потрошивте вкупно {0} од {1}.",
    clearCaption: "Да расчисти",
    signaturePlaceHolder: "Потпиши се овде.",
    chooseFileCaption: "Изберете датотека",
    takePhotoCaption: "Фотографирајте",
    photoPlaceholder: "Кликнете на копчето подолу за да фотографирате користејќи ја камерата.",
    fileOrPhotoPlaceholder: "Влечете и фрлајте или изберете датотека за качување или фотографирање користејќи ја камерата.",
    replaceFileCaption: "Заменете го фајлот.",
    removeFileCaption: "Отстранете ја оваа датотека",
    booleanCheckedLabel: "Да",
    booleanUncheckedLabel: "Не",
    confirmRemoveFile: "Дали сте сигурни дека сакате да ја отстраните оваа датотека: {0}?",
    confirmRemoveAllFiles: "Дали сте сигурни дека сакате да ги отстраните сите датотеки?",
    questionTitlePatternText: "Наслов на прашањето",
    modalCancelButtonText: "Откажи",
    modalApplyButtonText: "Аплицирај",
    filterStringPlaceholder: "Тип за пребарување...",
    emptyMessage: "Нема податоци за прикажување",
    noEntriesText: "Сеуште нема влезници.\nКликнете на копчето подолу за да додадете нов влез.",
    noEntriesReadonlyText: "Нема влезници.",
    more: "Повеќе",
    tagboxDoneButtonCaption: "ДОБРО",
    selectToRankEmptyRankedAreaText: "Сите избори се рангирани",
    selectToRankEmptyUnrankedAreaText: "Влечете и фрлете го изборот овде за да ги рангирате"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["mk"] = macedonianSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["mk"] = "Македонски";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} на {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Панел {панел Индекс}"
// ratingOptionsCaption: "Select..." => "Изберете..."
// multipletext_itemname: "text" => "текст."
// signaturePlaceHolder: "Sign here" => "Потпиши се овде."
// filterStringPlaceholder: "Type to search..." => "Тип за пребарување..."
// emptyMessage: "No data to display" => "Нема податоци за прикажување"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Сеуште нема влезници.\nКликнете на копчето подолу за да додадете нов влез."
// noEntriesReadonlyText: "There are no entries." => "Нема влезници."
// more: "More" => "Повеќе"
// tagboxDoneButtonCaption: "OK" => "ДОБРО"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Сите избори се рангирани"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Влечете и фрлете го изборот овде за да ги рангирате"// takePhotoCaption: "Take Photo" => "Фотографирајте"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Кликнете на копчето подолу за да фотографирате користејќи ја камерата."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Влечете и фрлајте или изберете датотека за качување или фотографирање користејќи ја камерата."
// replaceFileCaption: "Replace file" => "Заменете го фајлот."


/***/ }),

/***/ "./src/localization/malay.ts":
/*!***********************************!*\
  !*** ./src/localization/malay.ts ***!
  \***********************************/
/*! exports provided: malaySurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "malaySurveyStrings", function() { return malaySurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var malaySurveyStrings = {
    pagePrevText: "Sebelumnya",
    pageNextText: "Seterusnya",
    completeText: "Selesai",
    previewText: "Pratonton",
    editText: "Edit",
    startSurveyText: "Mula",
    otherItemText: "Lain (terangkan)",
    noneItemText: "Tiada",
    selectAllItemText: "Pilih Semua",
    progressText: "Halaman {0} daripada {1}",
    indexText: "{0} {1}",
    panelDynamicProgressText: "Rekod {0} daripada {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "{0}/{1} soalan telah dijawab",
    emptySurvey: "Tiada halaman atau soalan boleh dilihat dalam tinjauan.",
    completingSurvey: "Terima kasih kerana melengkapkan tinjauan!",
    completingSurveyBefore: "Rekod kami menunjukkan yang anda telah melengkapkan tinjauan ini.",
    loadingSurvey: "Memuatkan Tinjauan...",
    placeholder: "Pilih...",
    ratingOptionsCaption: "Pilih...",
    value: "nilai",
    requiredError: "Respons diperlukan.",
    requiredErrorInPanel: "Respons diperlukan: jawab sekurang-kurangnya satu soalan.",
    requiredInAllRowsError: "Respons diperlukan: jawab soalan dalam semua baris.",
    numericError: "Nilai mestilah numerik.",
    minError: "Nilai tidak boleh kurang daripada {0}",
    maxError: "Nilai tidak boleh lebih besar daripada {0}",
    textMinLength: "Sila masukkan sekurang-kurangnya {0} aksara.",
    textMaxLength: "Sila masukkan tidak lebih daripada {0} aksara.",
    textMinMaxLength: "Sila masukkan sekurang-kurangnya {0} dan tidak lebih daripada {1} aksara.",
    minRowCountError: "Sila isikan sekurang-kurangnya {0} baris.",
    minSelectError: "Sila pilih sekurang-kurangnya {0} varian.",
    maxSelectError: "Sila pilih tidak lebih daripada {0} varian.",
    numericMinMax: "'{0}' mestilah sekurang-kurangnya {1} dan paling banyak {2}",
    numericMin: "'{0}' mestilah sekurang-kurangnya {1}",
    numericMax: "'{0}' mestilah paling banyak {1}",
    invalidEmail: "Sila masukkan alamat e-mel yang sah.",
    invalidExpression: "Ekspresi: {0} hendaklah mengembalikan nilai 'benar'.",
    urlRequestError: "Permintaan mengembalikan ralat '{0}'. {1}",
    urlGetChoicesError: "Permintaan mengembalikan data kosong atau ciri 'laluan' salah",
    exceedMaxSize: "Saiz fail hendaklah tidak melebihi {0}.",
    otherRequiredError: "Respons diperlukan: masukkan nilai lain.",
    uploadingFile: "Fail anda sedang dimuat naik. Sila tunggu beberapa saat dan cuba lagi.",
    loadingFile: "Memuat...",
    chooseFile: "Pilih fail...",
    noFileChosen: "Tiada fail dipilih",
    filePlaceholder: "Letakkan fail di sini atau klik butang di bawah untuk memuatkan fail.",
    confirmDelete: "Adakah anda ingin memadamkan rekod?",
    keyDuplicationError: "Nilai ini hendaklah unik.",
    addColumn: "Tambahkan lajur",
    addRow: "Tambahkan baris",
    removeRow: "Alih keluar",
    emptyRowsText: "Tiada baris.",
    addPanel: "Tambah baharu",
    removePanel: "Alih keluar",
    choices_Item: "item",
    matrix_column: "Lajur",
    matrix_row: "Baris",
    multipletext_itemname: "teks",
    savingData: "Keputusan sedang disimpan pada pelayan...",
    savingDataError: "Ralat berlaku dan kami tidak dapat menyimpan keputusan.",
    savingDataSuccess: "Keputusan berjaya disimpan!",
    saveAgainButton: "Cuba lagi",
    timerMin: "min",
    timerSec: "saat",
    timerSpentAll: "Anda telah meluangkan {0} pada halaman ini dan {1} secara keseluruhan.",
    timerSpentPage: "Anda telah meluangkan {0} pada halaman ini.",
    timerSpentSurvey: "Anda telah meluangkan {0} secara keseluruhan.",
    timerLimitAll: "Anda telah meluangkan {0} daripada {1} pada halaman ini dan {2} daripada {3} secara keseluruhan.",
    timerLimitPage: "Anda telah meluangkan {0} daripada {1} pada halaman ini.",
    timerLimitSurvey: "Anda telah meluangkan {0} daripada {1} secara keseluruhan.",
    clearCaption: "Kosongkan",
    signaturePlaceHolder: "Tandatangan di sini",
    chooseFileCaption: "Pilih fail",
    takePhotoCaption: "Ambil gambar",
    photoPlaceholder: "Klik butang di bawah untuk mengambil gambar menggunakan kamera.",
    fileOrPhotoPlaceholder: "Seret dan lepas atau pilih fail untuk memuat naik atau mengambil foto menggunakan kamera.",
    replaceFileCaption: "Gantikan fail",
    removeFileCaption: "Alih keluar fail ini",
    booleanCheckedLabel: "Ya",
    booleanUncheckedLabel: "Tidak",
    confirmRemoveFile: "Anda pasti ingin mengalih keluar fail ini: {0}?",
    confirmRemoveAllFiles: "Anda pasti ingin mengalih keluar semua fail?",
    questionTitlePatternText: "Tajuk Soalan",
    modalCancelButtonText: "Batal",
    modalApplyButtonText: "Guna",
    filterStringPlaceholder: "Taip untuk membuat carian...",
    emptyMessage: "Tiada data untuk dipaparkan",
    noEntriesText: "Belum ada entri.\nKlik butang di bawah untuk menambahkan entri.",
    noEntriesReadonlyText: "Tiada penyertaan.",
    more: "Lebih banyak",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Semua pilihan disenaraikan",
    selectToRankEmptyUnrankedAreaText: "Seret dan lepaskan pilihan di sini untuk meletakkannya"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["ms"] = malaySurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["ms"] = "melayu";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Pilih..."
// emptyMessage: "No data to display" => "Tiada data untuk dipaparkan"
// noEntriesReadonlyText: "There are no entries." => "Tiada penyertaan."
// more: "More" => "Lebih banyak"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Semua pilihan disenaraikan"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Seret dan lepaskan pilihan di sini untuk meletakkannya"// takePhotoCaption: "Take Photo" => "Ambil gambar"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Klik butang di bawah untuk mengambil gambar menggunakan kamera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Seret dan lepas atau pilih fail untuk memuat naik atau mengambil foto menggunakan kamera."
// replaceFileCaption: "Replace file" => "Gantikan fail"


/***/ }),

/***/ "./src/localization/nl-BE.ts":
/*!***********************************!*\
  !*** ./src/localization/nl-BE.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dutch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dutch */ "./src/localization/dutch.ts");


/**
 * This is initialized as a copy of the Dutch strings, when they start to deviate a choice has to be made:
 * - Copy the Dutch set once and move forward as if it are 2 totally different languages
 * - Override the relevant strings only
 */
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["nl-BE"] = _dutch__WEBPACK_IMPORTED_MODULE_1__["dutchSurveyStrings"];
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["nl-BE"] = "vlaams";


/***/ }),

/***/ "./src/localization/norwegian.ts":
/*!***************************************!*\
  !*** ./src/localization/norwegian.ts ***!
  \***************************************/
/*! exports provided: norwegianSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "norwegianSurveyStrings", function() { return norwegianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var norwegianSurveyStrings = {
    pagePrevText: "Forrige",
    pageNextText: "Neste",
    completeText: "Fullfør",
    previewText: "Forhåndsvisning",
    editText: "Redigere",
    startSurveyText: "Start",
    otherItemText: "Annet (beskriv)",
    noneItemText: "Ingen",
    selectAllItemText: "Velg alle",
    progressText: "Side {0} av {1}",
    indexText: "{0} av {1}",
    panelDynamicProgressText: "Ta opp {0} av {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Besvarte {0} / {1} spørsmål",
    emptySurvey: "Det er ingen synlig side eller spørsmål i undersøkelsen.",
    completingSurvey: "Takk for at du fullførte undersøkelsen!",
    completingSurveyBefore: "Våre data viser at du allerede har gjennomført denne undersøkelsen.",
    loadingSurvey: "Undersøkelsen laster...",
    placeholder: "Velg...",
    ratingOptionsCaption: "Velge...",
    value: "verdi",
    requiredError: "Vennligst svar på spørsmålet.",
    requiredErrorInPanel: "Vennligst svar på minst ett spørsmål.",
    requiredInAllRowsError: "Vennligst svar på spørsmål i alle rader.",
    numericError: "Verdien skal være numerisk.",
    minError: "Verdien bør ikke være mindre enn {0}",
    maxError: "Verdien bør ikke være større enn {0}",
    textMinLength: "Vennligst skriv inn minst {0} tegn.",
    textMaxLength: "Vennligst skriv inn mindre enn {0} tegn.",
    textMinMaxLength: "Vennligst skriv inn mer enn {0} og mindre enn {1} tegn.",
    minRowCountError: "Vennligst fyll inn minst {0} rader.",
    minSelectError: "Vennligst velg minst {0} varianter.",
    maxSelectError: "Vennligst ikke velg mer enn {0} varianter.",
    numericMinMax: "'{0}' bør være lik eller mer enn {1} og lik eller mindre enn {2}",
    numericMin: "'{0}' bør være lik eller mer enn {1}",
    numericMax: "'{0}' bør være lik eller mindre enn {1}",
    invalidEmail: "Vennligst skriv inn en gyldig e-post adresse.",
    invalidExpression: "Uttrykket: {0} skal returnere 'sant'.",
    urlRequestError: "Forespørselen returnerte feilen '{0}'. {1}",
    urlGetChoicesError: "Forespørselen returnerte tomme data, eller 'sti' -egenskapen er feil",
    exceedMaxSize: "Filstørrelsen bør ikke overstige {0}.",
    otherRequiredError: "Vennligst skriv inn den andre verdien.",
    uploadingFile: "Filen din lastes opp. Vennligst vent noen sekunder og prøv igjen.",
    loadingFile: "Laster inn ...",
    chooseFile: "Velg fil (er) ...",
    noFileChosen: "Ingen fil valgt",
    filePlaceholder: "Dra og slipp en fil her, eller klikk på knappen nedenfor og velg en fil du vil laste opp.",
    confirmDelete: "Ønsker du å slette posten?",
    keyDuplicationError: "Denne verdien skal være unik.",
    addColumn: "Legg til kolonne",
    addRow: "Legg til rad",
    removeRow: "Fjern",
    emptyRowsText: "Det er ingen rader.",
    addPanel: "Legg til ny",
    removePanel: "Fjerne",
    choices_Item: "element",
    matrix_column: "Kolonne",
    matrix_row: "Rad",
    multipletext_itemname: "Tekst",
    savingData: "Resultatene lagres på serveren ...",
    savingDataError: "Det oppsto en feil, og vi kunne ikke lagre resultatene.",
    savingDataSuccess: "Resultatene ble lagret!",
    saveAgainButton: "Prøv igjen",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Du har tilbrakt {0} på denne siden og {1} totalt.",
    timerSpentPage: "Du har tilbrakt {0} på denne siden.",
    timerSpentSurvey: "Du har tilbrakt {0} totalt.",
    timerLimitAll: "Du har tilbrakt {0} av {1} på denne siden og totalt {2} av {3}.",
    timerLimitPage: "Du har tilbrakt {0} av {1} på denne siden.",
    timerLimitSurvey: "Du har tilbrakt {0} av {1} totalt.",
    clearCaption: "Klar",
    signaturePlaceHolder: "Logg inn her",
    chooseFileCaption: "Velg Fil",
    takePhotoCaption: "Ta bilde",
    photoPlaceholder: "Klikk på knappen nedenfor for å ta et bilde med kameraet.",
    fileOrPhotoPlaceholder: "Dra og slipp eller velg en fil for å laste opp eller ta et bilde med kameraet.",
    replaceFileCaption: "Erstatt fil",
    removeFileCaption: "Fjern denne filen",
    booleanCheckedLabel: "Ja",
    booleanUncheckedLabel: "Nei",
    confirmRemoveFile: "Er du sikker på at du vil fjerne denne filen: {0}?",
    confirmRemoveAllFiles: "Er du sikker på at du vil fjerne alle filene?",
    questionTitlePatternText: "Spørsmålstittel",
    modalCancelButtonText: "Annullere",
    modalApplyButtonText: "Bruke",
    filterStringPlaceholder: "Skriv for å søke ...",
    emptyMessage: "Ingen data å vise",
    noEntriesText: "Det er ingen oppføringer ennå.\nKlikk på knappen nedenfor for å legge til en ny oppføring.",
    noEntriesReadonlyText: "Det er ingen oppføringer.",
    more: "Mer",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Alle valg er rangert",
    selectToRankEmptyUnrankedAreaText: "Dra og slipp valg her for å rangere dem"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["no"] = norwegianSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["no"] = "norsk";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} av {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Velge..."
// minError: "The value should not be less than {0}" => "Verdien bør ikke være mindre enn {0}"
// maxError: "The value should not be greater than {0}" => "Verdien bør ikke være større enn {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Dra og slipp en fil her, eller klikk på knappen nedenfor og velg en fil du vil laste opp."
// emptyRowsText: "There are no rows." => "Det er ingen rader."
// multipletext_itemname: "text" => "Tekst"
// signaturePlaceHolder: "Sign here" => "Logg inn her"
// modalCancelButtonText: "Cancel" => "Annullere"
// modalApplyButtonText: "Apply" => "Bruke"
// filterStringPlaceholder: "Type to search..." => "Skriv for å søke ..."
// emptyMessage: "No data to display" => "Ingen data å vise"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Det er ingen oppføringer ennå.\nKlikk på knappen nedenfor for å legge til en ny oppføring."
// noEntriesReadonlyText: "There are no entries." => "Det er ingen oppføringer."
// more: "More" => "Mer"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Alle valg er rangert"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Dra og slipp valg her for å rangere dem"// takePhotoCaption: "Take Photo" => "Ta bilde"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Klikk på knappen nedenfor for å ta et bilde med kameraet."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Dra og slipp eller velg en fil for å laste opp eller ta et bilde med kameraet."
// replaceFileCaption: "Replace file" => "Erstatt fil"


/***/ }),

/***/ "./src/localization/persian.ts":
/*!*************************************!*\
  !*** ./src/localization/persian.ts ***!
  \*************************************/
/*! exports provided: persianSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persianSurveyStrings", function() { return persianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var persianSurveyStrings = {
    pagePrevText: "قبلی",
    pageNextText: "بعدی",
    completeText: "تکمیل",
    previewText: "پیش نمایش",
    editText: "ویرایش",
    startSurveyText: "شروع",
    otherItemText: "دیگر(توضیح)",
    noneItemText: "هیچ",
    selectAllItemText: "انتخاب همه",
    progressText: "صفحه {0} از {1}",
    indexText: "{0} {1}",
    panelDynamicProgressText: "مورد {0} از {1}",
    panelDynamicTabTextFormat: "پنل {panelIndex}",
    questionsProgressText: "تعداد پاسخ {0}/{1} سوال",
    emptySurvey: "صفحه ای یا گزینه ای برای این پرسشنامه موجود نیست.",
    completingSurvey: "از شما بابت تکمیل این پرسشنامه متشکریم",
    completingSurveyBefore: "به نظر می رسد هم هم اکنون پرسشنامه را تکمیل کرده اید.",
    loadingSurvey: "درحال ایجاد پرسشنامه",
    placeholder: "انتخاب کنید...",
    ratingOptionsCaption: "انتخاب...",
    value: "مقدار",
    requiredError: "لطفا به سوال پاسخ دهید",
    requiredErrorInPanel: "لطفا حداقل به یک سوال پاسخ دهید.",
    requiredInAllRowsError: "لطفا سوالات تمام سطرها را پاسخ دهید.",
    numericError: "مقدار باید عددی باشد",
    minError: "ارزش نباید کمتر از {0}",
    maxError: "ارزش نباید بیشتر از {0}",
    textMinLength: "لطفا حداقل  {0} حرف وارد کنید",
    textMaxLength: "لطفا کمتر از  {0} حرف وارد کنید.",
    textMinMaxLength: "لطفا بیشتر از  {0} حرف و کمتر از {1} حرف وارد کنید.",
    minRowCountError: "لطفا حداقل {0} سطر وارد کنید.",
    minSelectError: "حداقل {0} انتخاب کنید.",
    maxSelectError: "لطفا بیشتر از  {0} انتخاب کنید.",
    numericMinMax: "'{0}' باید بین {1} و {2} باشد",
    numericMin: "'{0}' بزرگتر مساوی {1} باشد",
    numericMax: "'{0}' باید کوچکتر یا مساوی {1} باشد",
    invalidEmail: "لطفا ایمیل صحیح درج کنید",
    invalidExpression: "عبارت: {0} پاسخ باید 'true' باشد.",
    urlRequestError: "درخواست با خطا روبرو شد: '{0}'. {1}",
    urlGetChoicesError: "درخواست مسیری خالی بازگشت داده یا مسیر درست تنظیم نشده",
    exceedMaxSize: "بیشترین حجم مجاز فایل: {0}",
    otherRequiredError: "مقدار 'دیگر' را وارد کنید",
    uploadingFile: "فایل در حال آیلود است. لطفا صبر کنید.",
    loadingFile: "بارگیری...",
    chooseFile: "انتخاب فایل(ها)...",
    noFileChosen: "هیچ فایلی انتخاب نشده",
    filePlaceholder: "کشیدن و رها کردن یک فایل در اینجا و یا کلیک بر روی دکمه زیر و یک فایل برای اپلود را انتخاب کنید.",
    confirmDelete: "آیا مایل به حذف این ردیف هستید؟",
    keyDuplicationError: "این مقدار باید غیر تکراری باشد",
    addColumn: "ستون جدید",
    addRow: "سطر جدید",
    removeRow: "حذف",
    emptyRowsText: "هیچ ردیفی وجود ندارد.",
    addPanel: "جدید",
    removePanel: "حذف",
    choices_Item: "آیتم",
    matrix_column: "ستون",
    matrix_row: "سطر",
    multipletext_itemname: "پیامک",
    savingData: "نتایج در حال ذخیره سازی در سرور است",
    savingDataError: "خطایی در ذخیره سازی نتایج رخ داده است",
    savingDataSuccess: "نتایج با موفقیت ذخیره شد",
    saveAgainButton: "مجدد تلاش کنید",
    timerMin: "دقیقه",
    timerSec: "ثانیه",
    timerSpentAll: "شما مدت {0} در این صفحه و مدت {1} را در مجموع سپری کرده اید.",
    timerSpentPage: "شما مدت {0} را در این صفحه سپری کرده اید.",
    timerSpentSurvey: "شما مدت {0} را در مجموع سپری کرده اید.",
    timerLimitAll: "شما مدت {0} از {1} در این صفحه و مدت {2} از {3} را در مجموع سپری کرده اید.",
    timerLimitPage: "شما مدت {0} از {1} را در این صفحه سپری کرده اید.",
    timerLimitSurvey: "شما مدت {0} از {1} را در مجموع سپری کرده اید.",
    clearCaption: "خالی کردن",
    signaturePlaceHolder: "اینجا را امضا کنید",
    chooseFileCaption: "انتخاب فایل",
    takePhotoCaption: "گرفتن عکس",
    photoPlaceholder: "روی دکمه زیر کلیک کنید تا با استفاده از دوربین عکس بگیرید.",
    fileOrPhotoPlaceholder: "کشیدن و رها کردن یا انتخاب یک فایل برای اپلود یا گرفتن عکس با استفاده از دوربین.",
    replaceFileCaption: "جایگزینی پرونده",
    removeFileCaption: "حذف این فایل",
    booleanCheckedLabel: "بله",
    booleanUncheckedLabel: "خیر",
    confirmRemoveFile: "آیا میخواهید این فایل را پاک کنید: {0}?",
    confirmRemoveAllFiles: "آیا میخواهید تمام فایل ها را پاک کنید?",
    questionTitlePatternText: "عنوان سوال",
    modalCancelButtonText: "لغو",
    modalApplyButtonText: "درخواست",
    filterStringPlaceholder: "تایپ برای جستجو...",
    emptyMessage: "داده ای برای نمایش وجود ندارد",
    noEntriesText: "هنوز هیچ ورودی وجود ندارد.\nروی دکمه زیر کلیک کنید تا یک ورودی جدید اضافه شود.",
    noEntriesReadonlyText: "هیچ ورودی وجود ندارد.",
    more: "بیشتر",
    tagboxDoneButtonCaption: "باشه",
    selectToRankEmptyRankedAreaText: "همه انتخاب ها رتبه بندی می شوند",
    selectToRankEmptyUnrankedAreaText: "انتخاب های کشیدن و رها کردن در اینجا برای رتبه بندی انها"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["fa"] = persianSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["fa"] = "فارْسِى";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "پنل {panelIndex}"
// ratingOptionsCaption: "Select..." => "انتخاب..."
// minError: "The value should not be less than {0}" => "ارزش نباید کمتر از {0}"
// maxError: "The value should not be greater than {0}" => "ارزش نباید بیشتر از {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "کشیدن و رها کردن یک فایل در اینجا و یا کلیک بر روی دکمه زیر و یک فایل برای اپلود را انتخاب کنید."
// emptyRowsText: "There are no rows." => "هیچ ردیفی وجود ندارد."
// multipletext_itemname: "text" => "پیامک"
// signaturePlaceHolder: "Sign here" => "اینجا را امضا کنید"
// modalCancelButtonText: "Cancel" => "لغو"
// modalApplyButtonText: "Apply" => "درخواست"
// filterStringPlaceholder: "Type to search..." => "تایپ برای جستجو..."
// emptyMessage: "No data to display" => "داده ای برای نمایش وجود ندارد"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "هنوز هیچ ورودی وجود ندارد.\nروی دکمه زیر کلیک کنید تا یک ورودی جدید اضافه شود."
// noEntriesReadonlyText: "There are no entries." => "هیچ ورودی وجود ندارد."
// more: "More" => "بیشتر"
// tagboxDoneButtonCaption: "OK" => "باشه"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "همه انتخاب ها رتبه بندی می شوند"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "انتخاب های کشیدن و رها کردن در اینجا برای رتبه بندی انها"// takePhotoCaption: "Take Photo" => "گرفتن عکس"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "روی دکمه زیر کلیک کنید تا با استفاده از دوربین عکس بگیرید."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "کشیدن و رها کردن یا انتخاب یک فایل برای اپلود یا گرفتن عکس با استفاده از دوربین."
// replaceFileCaption: "Replace file" => "جایگزینی پرونده"


/***/ }),

/***/ "./src/localization/polish.ts":
/*!************************************!*\
  !*** ./src/localization/polish.ts ***!
  \************************************/
/*! exports provided: polishSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polishSurveyStrings", function() { return polishSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var polishSurveyStrings = {
    pagePrevText: "Wstecz",
    pageNextText: "Dalej",
    completeText: "Gotowe",
    previewText: "Premiera",
    editText: "Edycja",
    startSurveyText: "Start",
    otherItemText: "Inna odpowiedź (wpisz)",
    noneItemText: "Brak",
    selectAllItemText: "Wybierz wszystkie",
    progressText: "Strona {0} z {1}",
    indexText: "{0} od {1}",
    panelDynamicProgressText: "Zapis {0} z {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Odpowiedzi na {0}/{1} pytania",
    emptySurvey: "Nie ma widocznych pytań.",
    completingSurvey: "Dziękujemy za wypełnienie ankiety!",
    completingSurveyBefore: "Z naszych zapisów wynika, że wypełniłeś już tę ankietę.",
    loadingSurvey: "Trwa wczytywanie ankiety...",
    placeholder: "Wybierz...",
    ratingOptionsCaption: "Kliknij tutaj, aby ocenić...",
    value: "Wartość",
    requiredError: "Proszę odpowiedzieć na to pytanie.",
    requiredErrorInPanel: "Proszę odpowiedzieć na co najmniej jedno pytanie.",
    requiredInAllRowsError: "Proszę odpowiedzieć na wszystkie pytania.",
    numericError: "W tym polu można wpisać tylko liczby.",
    minError: "Wartość nie powinna być mniejsza niż {0}",
    maxError: "Wartość nie powinna być większa niż {0}",
    textMinLength: "Proszę wpisać co najmniej {0} znaków.",
    textMaxLength: "Proszę wpisać mniej niż {0} znaków.",
    textMinMaxLength: "Proszę wpisać więcej niż {0} i mniej niż {1} znaków.",
    minRowCountError: "Proszę uzupełnić przynajmniej {0} wierszy.",
    minSelectError: "Proszę wybrać co najmniej {0} pozycji.",
    maxSelectError: "Proszę wybrać nie więcej niż {0} pozycji.",
    numericMinMax: "Odpowiedź '{0}' powinna być większa lub równa {1} oraz mniejsza lub równa {2}",
    numericMin: "Odpowiedź '{0}' powinna być większa lub równa {1}",
    numericMax: "Odpowiedź '{0}' powinna być mniejsza lub równa {1}",
    invalidEmail: "Proszę podać prawidłowy adres email.",
    invalidExpression: "Wyrażenie: {0} powinno wracać 'prawdziwe'.",
    urlRequestError: "Żądanie zwróciło błąd '{0}'. {1}",
    urlGetChoicesError: "Żądanie nie zwróciło danych albo ścieżka jest nieprawidłowa",
    exceedMaxSize: "Rozmiar przesłanego pliku nie może przekraczać {0}.",
    otherRequiredError: "Proszę podać inną odpowiedź.",
    uploadingFile: "Trwa przenoszenie Twojego pliku, proszę spróbować ponownie za kilka sekund.",
    loadingFile: "Ładowanie...",
    chooseFile: "Wybierz plik(i)...",
    noFileChosen: "Nie wybrano żadnego pliku",
    filePlaceholder: "Upuść plik tutaj lub kliknij przycisk poniżej, aby załadować plik.",
    confirmDelete: "Chcesz skasować nagranie?",
    keyDuplicationError: "Ta wartość powinna być wyjątkowa.",
    addColumn: "Dodaj kolumnę",
    addRow: "Dodaj wiersz",
    removeRow: "Usuń",
    emptyRowsText: "Nie ma rzędów.",
    addPanel: "Dodaj panel",
    removePanel: "Usuń",
    choices_Item: "element",
    matrix_column: "Kolumna",
    matrix_row: "Wiersz",
    multipletext_itemname: "tekst",
    savingData: "Zapisuję wyniki ankiety na serwerze...",
    savingDataError: "Wystąpił błąd i wyniki nie mogły zostać zapisane.",
    savingDataSuccess: "Wyniki zostały poprawnie zapisane!",
    saveAgainButton: "Spróbuj ponownie",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Spędziłeś {0} na tej stronie a w sumie {1}.",
    timerSpentPage: "Spędziłeś {0} na tej stronie.",
    timerSpentSurvey: "Spędziłeś w sumie {0}.",
    timerLimitAll: "Spędziłeś {0} z {1} na tej stronie a w sumie {2} z {3}.",
    timerLimitPage: "Spędziłeś {0} z {1} na tej stronie",
    timerLimitSurvey: "Spędziłeś {0} z {1}.",
    clearCaption: "Wyczyść",
    signaturePlaceHolder: "Podpisz tutaj",
    chooseFileCaption: "Wybierz plik",
    takePhotoCaption: "Zrób zdjęcie",
    photoPlaceholder: "Kliknij przycisk poniżej, aby zrobić zdjęcie aparatem.",
    fileOrPhotoPlaceholder: "Przeciągnij i upuść lub wybierz plik, który chcesz przesłać lub zrobić zdjęcie za pomocą aparatu.",
    replaceFileCaption: "Zastąp plik",
    removeFileCaption: "Usuń ten plik",
    booleanCheckedLabel: "Tak",
    booleanUncheckedLabel: "Nie",
    confirmRemoveFile: "Jesteś pewien, że chcesz usunąć ten plik: {0}?",
    confirmRemoveAllFiles: "Jesteś pewien, że chcesz usunąć wszystkie pliki?",
    questionTitlePatternText: "Tytuł pytania",
    modalCancelButtonText: "Anulować",
    modalApplyButtonText: "Zastosować",
    filterStringPlaceholder: "Wpisz aby wyszukać...",
    emptyMessage: "Brak danych do wyświetlenia",
    noEntriesText: "Nie ma jeszcze wpisów.\nKliknij przycisk poniżej, aby dodać nowy wpis.",
    noEntriesReadonlyText: "Brak wpisów.",
    more: "Więcej",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Wszystkie wybory są uszeregowane",
    selectToRankEmptyUnrankedAreaText: "Przeciągnij i upuść tutaj wybory, aby je uszeregować"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["pl"] = polishSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["pl"] = "polski";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// emptyMessage: "No data to display" => "Brak danych do wyświetlenia"
// noEntriesReadonlyText: "There are no entries." => "Brak wpisów."
// more: "More" => "Więcej"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Wszystkie wybory są uszeregowane"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Przeciągnij i upuść tutaj wybory, aby je uszeregować"// takePhotoCaption: "Take Photo" => "Zrób zdjęcie"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kliknij przycisk poniżej, aby zrobić zdjęcie aparatem."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Przeciągnij i upuść lub wybierz plik, który chcesz przesłać lub zrobić zdjęcie za pomocą aparatu."
// replaceFileCaption: "Replace file" => "Zastąp plik"


/***/ }),

/***/ "./src/localization/portuguese-br.ts":
/*!*******************************************!*\
  !*** ./src/localization/portuguese-br.ts ***!
  \*******************************************/
/*! exports provided: portugueseBrSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portugueseBrSurveyStrings", function() { return portugueseBrSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

/**
 * You don't need to translate strings that have the same value as Portuguese translation
 */
var portugueseBrSurveyStrings = {
    pagePrevText: "Anterior",
    pageNextText: "Próximo",
    completeText: "Completar",
    previewText: "Visualizar",
    editText: "Editar",
    startSurveyText: "Começar",
    otherItemText: "Outros (descrever)",
    noneItemText: "Nenhum",
    selectAllItemText: "Selecionar tudo",
    progressText: "Página {0} de {1}",
    indexText: "{0} de {1}",
    panelDynamicProgressText: "{0} de {1}",
    panelDynamicTabTextFormat: "Painel {panelIndex}",
    questionsProgressText: "Perguntas respondidas {0}/{1}",
    emptySurvey: "Não há página visível ou pergunta na pesquisa.",
    completingSurvey: "Obrigado por finalizar a pesquisa!",
    completingSurveyBefore: "Nossos registros mostram que você já finalizou a pesquisa.",
    loadingSurvey: "A pesquisa está carregando...",
    placeholder: "Selecionar...",
    ratingOptionsCaption: "Selecionar...",
    value: "valor",
    requiredError: "Por favor, responda a pergunta.",
    requiredErrorInPanel: "Por favor, responda pelo menos uma pergunta.",
    requiredInAllRowsError: "Por favor, responda as perguntas em todas as linhas.",
    numericError: "O valor deve ser numérico.",
    minError: "O valor não deve ser inferior a {0}",
    maxError: "O valor não deve ser maior que {0}",
    textMinLength: "Introduza pelo menos {0} caractere(s).",
    textMaxLength: "Introduza no máximo {0} caractere(s).",
    textMinMaxLength: "Insira pelo menos {0} e não mais do que {1} caracteres.",
    minRowCountError: "Por favor, preencha pelo menos {0} linha(s).",
    minSelectError: "Selecione pelo menos {0} variante(s).",
    maxSelectError: "Por favor, selecione não mais do que {0} opções.",
    numericMinMax: "O \"{0}\" deve ser pelo menos {1} e no máximo {2}",
    numericMin: "O \"{0}\" deve ser pelo menos {1}",
    numericMax: "O \"{0}\" deve ser no máximo {1}",
    invalidEmail: "Por favor, informe um e-mail válido.",
    invalidExpression: "A expressão: {0} deve retornar 'verdadeiro'.",
    urlRequestError: "A requisição retornou o erro '{0}'. {1}",
    urlGetChoicesError: "A requisição não retornou dados ou o 'caminho' da requisição não está correto",
    exceedMaxSize: "O tamanho do arquivo não deve exceder {0}.",
    otherRequiredError: "Por favor, informe o outro valor.",
    uploadingFile: "Seu arquivo está sendo carregado. Por favor, aguarde alguns segundos e tente novamente.",
    loadingFile: "Carregando...",
    chooseFile: "Escolha o(s) arquivo(s)...",
    noFileChosen: "Nenhum arquivo escolhido",
    filePlaceholder: "Arraste e solte um arquivo aqui ou clique no botão abaixo e escolha um arquivo para carregar.",
    confirmDelete: "Tem certeza que deseja deletar?",
    keyDuplicationError: "Esse valor deve ser único.",
    addColumn: "Adicionar coluna",
    addRow: "Adicionar linha",
    removeRow: "Retirar",
    emptyRowsText: "Não há filas.",
    addPanel: "Adicionar novo",
    removePanel: "Retirar",
    choices_Item: "item",
    matrix_column: "Coluna",
    matrix_row: "Remar",
    multipletext_itemname: "Texto",
    savingData: "Os resultados esto sendo salvos no servidor...",
    savingDataError: "Ocorreu um erro e não foi possível salvar os resultados.",
    savingDataSuccess: "Os resultados foram salvos com sucesso!",
    saveAgainButton: "Tentar novamente",
    timerMin: "Min",
    timerSec: "segundo",
    timerSpentAll: "Você gastou {0} nesta página e {1} no total.",
    timerSpentPage: "Você passou {0} nesta página.",
    timerSpentSurvey: "Gastou {0} no total.",
    timerLimitAll: "Você gastou {0} de {1} nesta página e {2} de {3} no total.",
    timerLimitPage: "Você gastou {0} de {1} nesta página.",
    timerLimitSurvey: "Gastou {0} de {1} no total.",
    clearCaption: "Claro",
    signaturePlaceHolder: "Assine aqui",
    chooseFileCaption: "Escolher arquivo",
    takePhotoCaption: "Tirar foto",
    photoPlaceholder: "Clique no botão abaixo para tirar uma foto usando a câmera.",
    fileOrPhotoPlaceholder: "Arraste e solte ou selecione um arquivo para carregar ou tirar uma foto usando a câmera.",
    replaceFileCaption: "Substituir arquivo",
    removeFileCaption: "Remover este arquivo",
    booleanCheckedLabel: "Sim",
    booleanUncheckedLabel: "Não",
    confirmRemoveFile: "Tem certeza que deseja remover este arquivo: {0}?",
    confirmRemoveAllFiles: "Tem certeza que deseja remover todos os arquivos?",
    questionTitlePatternText: "Título da pergunta",
    modalCancelButtonText: "Cancelar",
    modalApplyButtonText: "Aplicar",
    filterStringPlaceholder: "Digite para pesquisar...",
    emptyMessage: "Nenhum dado a ser exibido",
    noEntriesText: "Ainda não há inscrições.\nClique no botão abaixo para adicionar uma nova entrada.",
    noEntriesReadonlyText: "Não há entradas.",
    more: "Mais",
    tagboxDoneButtonCaption: "OKEY",
    selectToRankEmptyRankedAreaText: "Todas as opções são classificadas",
    selectToRankEmptyUnrankedAreaText: "Arraste e solte as opções aqui para classificá-las"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["pt-br"] = portugueseBrSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["pt-br"] = "português brasileiro";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// pagePrevText: "Previous" => "Anterior"
// pageNextText: "Next" => "Próximo"
// completeText: "Complete" => "Completar"
// previewText: "Preview" => "Visualizar"
// editText: "Edit" => "Editar"
// startSurveyText: "Start" => "Começar"
// otherItemText: "Other (describe)" => "Outros (descrever)"
// noneItemText: "None" => "Nenhum"
// selectAllItemText: "Select All" => "Selecionar tudo"
// progressText: "Page {0} of {1}" => "Página {0} de {1}"
// indexText: "{0} of {1}" => "{0} de {1}"
// panelDynamicProgressText: "{0} of {1}" => "{0} de {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Painel {panelIndex}"
// questionsProgressText: "Answered {0}/{1} questions" => "Perguntas respondidas {0}/{1}"
// placeholder: "Select..." => "Selecionar..."
// ratingOptionsCaption: "Select..." => "Selecionar..."
// value: "value" => "valor"
// numericError: "The value should be numeric." => "O valor deve ser numérico."
// minError: "The value should not be less than {0}" => "O valor não deve ser inferior a {0}"
// maxError: "The value should not be greater than {0}" => "O valor não deve ser maior que {0}"
// textMinLength: "Please enter at least {0} character(s)." => "Introduza pelo menos {0} caractere(s)."
// textMaxLength: "Please enter no more than {0} character(s)." => "Introduza no máximo {0} caractere(s)."
// textMinMaxLength: "Please enter at least {0} and no more than {1} characters." => "Insira pelo menos {0} e não mais do que {1} caracteres."
// minRowCountError: "Please fill in at least {0} row(s)." => "Por favor, preencha pelo menos {0} linha(s)."
// minSelectError: "Please select at least {0} variant(s)." => "Selecione pelo menos {0} variante(s)."
// numericMinMax: "The '{0}' should be at least {1} and at most {2}" => "O \"{0}\" deve ser pelo menos {1} e no máximo {2}"
// numericMin: "The '{0}' should be at least {1}" => "O \"{0}\" deve ser pelo menos {1}"
// numericMax: "The '{0}' should be at most {1}" => "O \"{0}\" deve ser no máximo {1}"
// invalidExpression: "The expression: {0} should return 'true'." => "A expressão: {0} deve retornar 'verdadeiro'."
// exceedMaxSize: "The file size should not exceed {0}." => "O tamanho do arquivo não deve exceder {0}."
// chooseFile: "Choose file(s)..." => "Escolha o(s) arquivo(s)..."
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Arraste e solte um arquivo aqui ou clique no botão abaixo e escolha um arquivo para carregar."
// addColumn: "Add Column" => "Adicionar coluna"
// addRow: "Add Row" => "Adicionar linha"
// removeRow: "Remove" => "Retirar"
// emptyRowsText: "There are no rows." => "Não há filas."
// addPanel: "Add new" => "Adicionar novo"
// removePanel: "Remove" => "Retirar"
// choices_Item: "item" => "item"
// matrix_column: "Column" => "Coluna"
// matrix_row: "Row" => "Remar"
// multipletext_itemname: "text" => "Texto"
// saveAgainButton: "Try again" => "Tentar novamente"
// timerMin: "min" => "Min"
// timerSec: "sec" => "segundo"
// timerSpentAll: "You have spent {0} on this page and {1} in total." => "Você gastou {0} nesta página e {1} no total."
// timerSpentPage: "You have spent {0} on this page." => "Você passou {0} nesta página."
// timerSpentSurvey: "You have spent {0} in total." => "Gastou {0} no total."
// timerLimitAll: "You have spent {0} of {1} on this page and {2} of {3} in total." => "Você gastou {0} de {1} nesta página e {2} de {3} no total."
// timerLimitPage: "You have spent {0} of {1} on this page." => "Você gastou {0} de {1} nesta página."
// timerLimitSurvey: "You have spent {0} of {1} in total." => "Gastou {0} de {1} no total."
// clearCaption: "Clear" => "Claro"
// signaturePlaceHolder: "Sign here" => "Assine aqui"
// booleanCheckedLabel: "Yes" => "Sim"
// booleanUncheckedLabel: "No" => "Não"
// questionTitlePatternText: "Question Title" => "Título da pergunta"
// modalCancelButtonText: "Cancel" => "Cancelar"
// modalApplyButtonText: "Apply" => "Aplicar"
// filterStringPlaceholder: "Type to search..." => "Digite para pesquisar..."
// emptyMessage: "No data to display" => "Nenhum dado a ser exibido"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Ainda não há inscrições.\nClique no botão abaixo para adicionar uma nova entrada."
// noEntriesReadonlyText: "There are no entries." => "Não há entradas."
// more: "More" => "Mais"
// tagboxDoneButtonCaption: "OK" => "OKEY"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Todas as opções são classificadas"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Arraste e solte as opções aqui para classificá-las"// takePhotoCaption: "Take Photo" => "Tirar foto"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Clique no botão abaixo para tirar uma foto usando a câmera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Arraste e solte ou selecione um arquivo para carregar ou tirar uma foto usando a câmera."
// replaceFileCaption: "Replace file" => "Substituir arquivo"


/***/ }),

/***/ "./src/localization/portuguese.ts":
/*!****************************************!*\
  !*** ./src/localization/portuguese.ts ***!
  \****************************************/
/*! exports provided: portugueseSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portugueseSurveyStrings", function() { return portugueseSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var portugueseSurveyStrings = {
    pagePrevText: "Anterior",
    pageNextText: "Próximo",
    completeText: "Finalizar",
    previewText: "Pré-visualização",
    editText: "Editar",
    startSurveyText: "Começar",
    otherItemText: "Outros (descrever)",
    noneItemText: "Nenhum",
    selectAllItemText: "Selecionar Todos",
    progressText: "Página {0} de {1}",
    indexText: "{0} de {1}",
    panelDynamicProgressText: "Registo {0} de {1}",
    panelDynamicTabTextFormat: "Painel {panelIndex}",
    questionsProgressText: "Respostas {0}/{1} perguntas",
    emptySurvey: "Não há página visível ou pergunta no questionário.",
    completingSurvey: "Obrigado por finalizar o questionário!",
    completingSurveyBefore: "Os nossos registos mostram que já finalizou o questionário.",
    loadingSurvey: "O questionário está a carregar...",
    placeholder: "Selecione...",
    ratingOptionsCaption: "Selecione aqui para avaliar...",
    value: "valor",
    requiredError: "Por favor, responda à pergunta.",
    requiredErrorInPanel: "Por favor, responda pelo menos a uma pergunta.",
    requiredInAllRowsError: "Por favor, responda às perguntas em todas as linhas.",
    numericError: "O valor deve ser numérico.",
    minError: "O valor não deverá ser menor que {0}",
    maxError: "O valor não deverá ser maior que {0}",
    textMinLength: "Por favor, insira pelo menos {0} caracteres.",
    textMaxLength: "Por favor, insira menos de {0} caracteres.",
    textMinMaxLength: "Por favor, insira mais de {0} e menos de {1} caracteres.",
    minRowCountError: "Preencha pelo menos {0} linhas.",
    minSelectError: "Selecione pelo menos {0} opções.",
    maxSelectError: "Por favor, selecione no máximo {0} opções.",
    numericMinMax: "O '{0}' deve ser igual ou superior a {1} e igual ou menor que {2}",
    numericMin: "O '{0}' deve ser igual ou superior a {1}",
    numericMax: "O '{0}' deve ser igual ou inferior a {1}",
    invalidEmail: "Por favor, insira um e-mail válido.",
    invalidExpression: "A expressão: {0} deve retornar 'verdadeiro'.",
    urlRequestError: "O pedido retornou o erro '{0}'. {1}",
    urlGetChoicesError: "O pedido não retornou dados ou o 'caminho' do pedido não está correto",
    exceedMaxSize: "O tamanho do arquivo não deve exceder {0}.",
    otherRequiredError: "Por favor, insira o outro valor.",
    uploadingFile: "O seu ficheiro está a carregar. Por favor, aguarde alguns segundos e tente novamente.",
    loadingFile: "A carregar...",
    chooseFile: "Selecione o(s) arquivo(s)...",
    noFileChosen: "Nenhum ficheiro escolhido",
    filePlaceholder: "Arraste um ficheiro aqui ou clique no botão abaixo para carregar o ficheiro.",
    confirmDelete: "Tem a certeza que deseja apagar?",
    keyDuplicationError: "Este valor deve ser único.",
    addColumn: "Adicionar coluna",
    addRow: "Adicionar linha",
    removeRow: "Remover linha",
    emptyRowsText: "Não existem linhas.",
    addPanel: "Adicionar novo",
    removePanel: "Remover",
    choices_Item: "item",
    matrix_column: "Coluna",
    matrix_row: "Linha",
    multipletext_itemname: "texto",
    savingData: "Os resultados estão a ser guardados no servidor...",
    savingDataError: "Ocorreu um erro e não foi possível guardar os resultados.",
    savingDataSuccess: "Os resultados foram guardados com sucesso!",
    saveAgainButton: "Tente novamente",
    timerMin: "min",
    timerSec: "seg",
    timerSpentAll: "Você gastou {0} nesta página e {1} no total.",
    timerSpentPage: "Você gastou {0} nesta página.",
    timerSpentSurvey: "Você gastou {0} no total.",
    timerLimitAll: "Você gastou {0} de {1} nesta página e {2} de {3} no total.",
    timerLimitPage: "Você gastou {0} de {1} nesta página.",
    timerLimitSurvey: "Você gastou {0} de {1} no total.",
    clearCaption: "Limpar",
    signaturePlaceHolder: "Assine aqui",
    chooseFileCaption: "Escolher ficheiro",
    takePhotoCaption: "Tirar foto",
    photoPlaceholder: "Clique no botão abaixo para tirar uma foto usando a câmera.",
    fileOrPhotoPlaceholder: "Arraste e solte ou selecione um arquivo para carregar ou tirar uma foto usando a câmera.",
    replaceFileCaption: "Substituir arquivo",
    removeFileCaption: "Remover este ficheiro",
    booleanCheckedLabel: "Sim",
    booleanUncheckedLabel: "Não",
    confirmRemoveFile: "Tem a certeza que deseja remover este ficheiro: {0}?",
    confirmRemoveAllFiles: "Tem a certeza que deseja remover todos os ficheiros?",
    questionTitlePatternText: "Título da questão",
    modalCancelButtonText: "Cancelar",
    modalApplyButtonText: "Aplicar",
    filterStringPlaceholder: "Digite para pesquisar...",
    emptyMessage: "Não existe informação a mostrar",
    noEntriesText: "Ainda não existem registos.\nClique no botão abaixo para adicionar um novo registo.",
    noEntriesReadonlyText: "Não há entradas.",
    more: "Mais",
    tagboxDoneButtonCaption: "Terminado",
    selectToRankEmptyRankedAreaText: "Todas as opções são classificadas",
    selectToRankEmptyUnrankedAreaText: "Arraste e solte as opções aqui para classificá-las"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["pt"] = portugueseSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["pt"] = "português";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Painel {panelIndex}"
// noEntriesReadonlyText: "There are no entries." => "Não há entradas."
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Todas as opções são classificadas"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Arraste e solte as opções aqui para classificá-las"// takePhotoCaption: "Take Photo" => "Tirar foto"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Clique no botão abaixo para tirar uma foto usando a câmera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Arraste e solte ou selecione um arquivo para carregar ou tirar uma foto usando a câmera."
// replaceFileCaption: "Replace file" => "Substituir arquivo"


/***/ }),

/***/ "./src/localization/romanian.ts":
/*!**************************************!*\
  !*** ./src/localization/romanian.ts ***!
  \**************************************/
/*! exports provided: romanianSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "romanianSurveyStrings", function() { return romanianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var romanianSurveyStrings = {
    pagePrevText: "Precedent",
    pageNextText: "Următor",
    completeText: "Finalizare",
    previewText: "previzualizare",
    editText: "Editați",
    startSurveyText: "start",
    otherItemText: "Altul(precizaţi)",
    noneItemText: "Nici unul",
    selectAllItemText: "Selectează tot",
    progressText: "Pagina {0} din {1}",
    indexText: "{0} de {1}",
    panelDynamicProgressText: "Înregistrare {0} din {1}",
    panelDynamicTabTextFormat: "Panou {panelIndex}",
    questionsProgressText: "Răspunsuri la {0} / {1} întrebări",
    emptySurvey: "Nu sunt întrebări pentru acest chestionar",
    completingSurvey: "Vă mulţumim pentru timpul acordat!",
    completingSurveyBefore: "Din înregistrările noastre reiese că ați completat deja acest chestionar.",
    loadingSurvey: "Chestionarul se încarcă...",
    placeholder: "Alegeţi...",
    ratingOptionsCaption: "Alege...",
    value: "valoare",
    requiredError: "Răspunsul la această întrebare este obligatoriu.",
    requiredErrorInPanel: "Vă rugăm să răspundeți la cel puțin o întrebare.",
    requiredInAllRowsError: "Toate răspunsurile sunt obligatorii",
    numericError: "Răspunsul trebuie să fie numeric.",
    minError: "Valoarea nu trebuie să fie mai mică de {0}",
    maxError: "Valoarea nu trebuie să fie mai mare de {0}",
    textMinLength: "Trebuie să introduceți minim {0} caractere.",
    textMaxLength: "Trebuie să introduceți maxim {0} caractere.",
    textMinMaxLength: "Trebuie să introduceți mai mult de {0} și mai puțin de {1} caractere.",
    minRowCountError: "Trebuie să completați minim {0} rânduri.",
    minSelectError: "Trebuie să selectați minim {0} opţiuni.",
    maxSelectError: "Trebuie să selectați maxim {0} opţiuni.",
    numericMinMax: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1} şî mai mic sau egal cu {2}",
    numericMin: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1}",
    numericMax: "Răspunsul '{0}' trebuie să fie mai mic sau egal ca {1}",
    invalidEmail: "Trebuie să introduceţi o adresa de email validă.",
    invalidExpression: "Expresia: {0} ar trebui să returneze „adevărat”.",
    urlRequestError: "Request-ul a returnat eroarea '{0}'. {1}",
    urlGetChoicesError: "Request-ul nu a returnat date sau proprietatea 'path' este incorectă",
    exceedMaxSize: "Dimensiunea fişierului nu trebuie să depăşească {0}.",
    otherRequiredError: "Trebuie să completați câmpul 'Altul'.",
    uploadingFile: "Fișierul dumneavoastră este în curs de încărcare. Vă rugăm așteptați câteva secunde și reveniți apoi.",
    loadingFile: "Se încarcă...",
    chooseFile: "Alege fisierele...",
    noFileChosen: "Niciun fișier ales",
    filePlaceholder: "Glisați și fixați un fișier aici sau faceți clic pe butonul de mai jos și alegeți un fișier de încărcat.",
    confirmDelete: "Sunteți sigur că doriți să ștergeți înregistrarea?",
    keyDuplicationError: "Valoarea trebuie să fie unică.",
    addColumn: "Adăugați coloană",
    addRow: "Adăugare rând",
    removeRow: "Ștergere",
    emptyRowsText: "Nu există rânduri.",
    addPanel: "Adăugare",
    removePanel: "Ștergere",
    choices_Item: "opțiune",
    matrix_column: "Coloană",
    matrix_row: "Rând",
    multipletext_itemname: "Text",
    savingData: "Rezultatele sunt în curs de salvare...",
    savingDataError: "A intervenit o eroare, rezultatele nu au putut fi salvate.",
    savingDataSuccess: "Rezultatele au fost salvate cu succes!",
    saveAgainButton: "Încercați din nou",
    timerMin: "min",
    timerSec: "sec",
    timerSpentAll: "Ați petrecut {0} pe această pagină și {1} în total.",
    timerSpentPage: "Ați petrecut {0} pe această pagină.",
    timerSpentSurvey: "Ați petrecut {0} în total.",
    timerLimitAll: "Ați petrecut {0} din {1} pe această pagină și {2} din {3} în total.",
    timerLimitPage: "Ați petrecut {0} din {1} pe această pagină.",
    timerLimitSurvey: "Ați petrecut {0} din {1} în total.",
    clearCaption: "clar",
    signaturePlaceHolder: "Semnează aici",
    chooseFileCaption: "Alege fișierul",
    takePhotoCaption: "Faceți o fotografie",
    photoPlaceholder: "Faceți clic pe butonul de mai jos pentru a face o fotografie folosind camera.",
    fileOrPhotoPlaceholder: "Glisați și fixați sau selectați un fișier pentru a încărca sau a face o fotografie folosind camera.",
    replaceFileCaption: "Înlocuire fișier",
    removeFileCaption: "Eliminați acest fișier",
    booleanCheckedLabel: "da",
    booleanUncheckedLabel: "Nu",
    confirmRemoveFile: "Sigur doriți să eliminați acest fișier: {0}?",
    confirmRemoveAllFiles: "Sigur doriți să eliminați toate fișierele?",
    questionTitlePatternText: "Titlul intrebarii",
    modalCancelButtonText: "Anula",
    modalApplyButtonText: "Aplica",
    filterStringPlaceholder: "Tastați pentru a căuta...",
    emptyMessage: "Nu există date de afișat",
    noEntriesText: "Nu există încă intrări.\nFaceți clic pe butonul de mai jos pentru a adăuga o intrare nouă.",
    noEntriesReadonlyText: "Nu există intrări.",
    more: "Mai mult",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Toate opțiunile sunt clasificate",
    selectToRankEmptyUnrankedAreaText: "Glisați și fixați opțiunile aici pentru a le clasifica"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["ro"] = romanianSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["ro"] = "română";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} de {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panou {panelIndex}"
// ratingOptionsCaption: "Select..." => "Alege..."
// minError: "The value should not be less than {0}" => "Valoarea nu trebuie să fie mai mică de {0}"
// maxError: "The value should not be greater than {0}" => "Valoarea nu trebuie să fie mai mare de {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Glisați și fixați un fișier aici sau faceți clic pe butonul de mai jos și alegeți un fișier de încărcat."
// emptyRowsText: "There are no rows." => "Nu există rânduri."
// multipletext_itemname: "text" => "Text"
// signaturePlaceHolder: "Sign here" => "Semnează aici"
// modalCancelButtonText: "Cancel" => "Anula"
// modalApplyButtonText: "Apply" => "Aplica"
// filterStringPlaceholder: "Type to search..." => "Tastați pentru a căuta..."
// emptyMessage: "No data to display" => "Nu există date de afișat"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Nu există încă intrări.\nFaceți clic pe butonul de mai jos pentru a adăuga o intrare nouă."
// noEntriesReadonlyText: "There are no entries." => "Nu există intrări."
// more: "More" => "Mai mult"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Toate opțiunile sunt clasificate"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Glisați și fixați opțiunile aici pentru a le clasifica"// takePhotoCaption: "Take Photo" => "Faceți o fotografie"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Faceți clic pe butonul de mai jos pentru a face o fotografie folosind camera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Glisați și fixați sau selectați un fișier pentru a încărca sau a face o fotografie folosind camera."
// replaceFileCaption: "Replace file" => "Înlocuire fișier"


/***/ }),

/***/ "./src/localization/russian.ts":
/*!*************************************!*\
  !*** ./src/localization/russian.ts ***!
  \*************************************/
/*! exports provided: russianSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "russianSurveyStrings", function() { return russianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var russianSurveyStrings = {
    pagePrevText: "Назад",
    pageNextText: "Далее",
    completeText: "Готово",
    previewText: "Предварительный просмотр",
    editText: "Редактирование",
    startSurveyText: "Начать",
    otherItemText: "Другое (пожалуйста, опишите)",
    noneItemText: "Нет",
    selectAllItemText: "Выбрать всё",
    progressText: "Страница {0} из {1}",
    indexText: "{0} из {1}",
    panelDynamicProgressText: "Запись {0} из {1}",
    panelDynamicTabTextFormat: "Панель {panelIndex}",
    questionsProgressText: "Oтвечено на {0}/{1} вопросов",
    emptySurvey: "Нет ни одного вопроса.",
    completingSurvey: "Благодарим Вас за заполнение анкеты!",
    completingSurveyBefore: "Вы уже проходили этот опрос.",
    loadingSurvey: "Загрузка с сервера...",
    placeholder: "Выбрать...",
    ratingOptionsCaption: "Нажмите здесь, чтобы оценить...",
    value: "значение",
    requiredError: "Пожалуйста, ответьте на вопрос.",
    requiredErrorInPanel: "Пожалуйста, ответьте по крайней мере на один вопрос.",
    requiredInAllRowsError: "Пожалуйста, ответьте на вопросы в каждой строке.",
    numericError: "Ответ должен быть числом.",
    minError: "Значение не должно быть меньше {0}.",
    maxError: "Значение не должно превышать {0}.",
    textMinLength: "Пожалуйста введите больше {0} символов.",
    textMaxLength: "Пожалуйста введите меньше {0} символов.",
    textMinMaxLength: "Пожалуйста введите больше {0} и меньше {1} символов.",
    minRowCountError: "Пожалуйста, заполните не меньше {0} строк.",
    minSelectError: "Пожалуйста, выберите хотя бы {0} вариантов.",
    maxSelectError: "Пожалуйста, выберите не более {0} вариантов.",
    numericMinMax: "'{0}' должно быть не меньше чем {1}, и не больше чем {2}",
    numericMin: "'{0}' должно быть не меньше чем {1}",
    numericMax: "'{0}' должно быть не больше чем {1}",
    invalidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
    invalidExpression: "Выражение {0} должно возвращать 'true'.",
    urlRequestError: "Запрос вернул ошибку '{0}'. {1}",
    urlGetChoicesError: "Ответ на запрос пришел пустой или свойство 'path' указано неверно",
    exceedMaxSize: "Размер файла не должен превышать {0}.",
    otherRequiredError: "Пожалуйста, введите данные в поле 'Другое'",
    uploadingFile: "Ваш файл загружается. Подождите несколько секунд и попробуйте снова.",
    loadingFile: "Загрузка...",
    chooseFile: "Выберите файл(ы)...",
    noFileChosen: "Файл не выбран",
    filePlaceholder: "Перетащите файл сюда или нажмите кнопку ниже, чтобы загрузить файл.",
    confirmDelete: "Вы точно хотите удалить запись?",
    keyDuplicationError: "Это значение должно быть уникальным.",
    addColumn: "Добавить колонку",
    addRow: "Добавить строку",
    removeRow: "Удалить",
    emptyRowsText: "Рядов нет.",
    addPanel: "Добавить новую",
    removePanel: "Удалить",
    choices_Item: "Вариант",
    matrix_column: "Колонка",
    matrix_row: "Строка",
    multipletext_itemname: "текст",
    savingData: "Результаты сохраняются на сервер...",
    savingDataError: "Произошла ошибка, результат не был сохранён.",
    savingDataSuccess: "Результат успешно сохранён!",
    saveAgainButton: "Попробовать снова",
    timerMin: "мин",
    timerSec: "сек",
    timerSpentAll: "Вы потратили {0} на этой странице и {1} всего.",
    timerSpentPage: "Вы потратили {0} на этой странице.",
    timerSpentSurvey: "Вы потратили {0} в течение теста.",
    timerLimitAll: "Вы потратили {0} из {1} на этой странице и {2} из {3} для всего теста.",
    timerLimitPage: "Вы потратили {0} из {1} на этой странице.",
    timerLimitSurvey: "Вы потратили {0} из {1} для всего теста.",
    clearCaption: "Очистить",
    signaturePlaceHolder: "Подпишите здесь",
    chooseFileCaption: "Выберите файл",
    takePhotoCaption: "Сделать фото",
    photoPlaceholder: "Нажмите кнопку ниже, чтобы сделать снимок с помощью камеры.",
    fileOrPhotoPlaceholder: "Перетащите или выберите файл для загрузки или съемки с помощью камеры.",
    replaceFileCaption: "Заменить файл",
    removeFileCaption: "Удалить файл",
    booleanCheckedLabel: "Да",
    booleanUncheckedLabel: "Нет",
    confirmRemoveFile: "Вы уверены, что хотите удалить этот файл: {0}?",
    confirmRemoveAllFiles: "Вы уверены, что хотите удалить все файлы?",
    questionTitlePatternText: "Название вопроса",
    modalCancelButtonText: "Отменить",
    modalApplyButtonText: "Применять",
    filterStringPlaceholder: "Введите для поиска...",
    emptyMessage: "Нет данных для отображения",
    noEntriesText: "Пока нет записей.\nНажмите кнопку ниже, чтобы добавить новую запись.",
    noEntriesReadonlyText: "Записей нет.",
    more: "Больше",
    tagboxDoneButtonCaption: "ХОРОШО",
    selectToRankEmptyRankedAreaText: "Все варианты ранжируются",
    selectToRankEmptyUnrankedAreaText: "Перетащите сюда варианты, чтобы ранжировать их"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["ru"] = russianSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["ru"] = "русский";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Панель {panelIndex}"
// emptyMessage: "No data to display" => "Нет данных для отображения"
// noEntriesReadonlyText: "There are no entries." => "Записей нет."
// more: "More" => "Больше"
// tagboxDoneButtonCaption: "OK" => "ХОРОШО"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Все варианты ранжируются"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Перетащите сюда варианты, чтобы ранжировать их"// takePhotoCaption: "Take Photo" => "Сделать фото"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Нажмите кнопку ниже, чтобы сделать снимок с помощью камеры."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Перетащите или выберите файл для загрузки или съемки с помощью камеры."
// replaceFileCaption: "Replace file" => "Заменить файл"


/***/ }),

/***/ "./src/localization/serbian.ts":
/*!*************************************!*\
  !*** ./src/localization/serbian.ts ***!
  \*************************************/
/*! exports provided: serbianStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serbianStrings", function() { return serbianStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var serbianStrings = {
    pagePrevText: "Nazad",
    pageNextText: "Dalje",
    completeText: "Završi",
    previewText: "Pregledaj",
    editText: "Izmeni",
    startSurveyText: "Započni",
    otherItemText: "Drugo (upiši)",
    noneItemText: "Ništa",
    selectAllItemText: "Izaberi sve",
    progressText: "Stranica {0} od {1}",
    indexText: "{0} {1}",
    panelDynamicProgressText: "Upis {0} od {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Odgovoreno na {0}/{1} pitanja",
    emptySurvey: "Nema vidljivih stranica ili pitanja u anketi.",
    completingSurvey: "Hvala na popunjavanju ankete!",
    completingSurveyBefore: "Prema našim podacima, već ste popunili ovu anketu.",
    loadingSurvey: "Učitavam anketu...",
    placeholder: "Izaberi...",
    ratingOptionsCaption: "Izaberite...",
    value: "vrednost",
    requiredError: "Molimo odgovorite na ovo pitanje.",
    requiredErrorInPanel: "Molimo odgovorite na bar jedno pitanje.",
    requiredInAllRowsError: "Molimo odgovorite na pitanja u svim redovima.",
    numericError: "Vrednost bi trebalo da bude numerička.",
    minError: "Vrednost ne bi trebalo da bude manja od {0}",
    maxError: "Vrednost ne bi trebalo da bude veća od {0}",
    textMinLength: "Molimo unesite bar {0} znak(ov)a.",
    textMaxLength: "Molimo unesite najviše {0} znak(ov)a.",
    textMinMaxLength: "Molimo unesite najmanje {0} i ne više od {1} znak(ov)a.",
    minRowCountError: "Molimo popunite najmanje {0} red(ova).",
    minSelectError: "Molimo izaberite najmanje {0} opcija/e.",
    maxSelectError: "Molimo izaberite najviše {0} opcija/e.",
    numericMinMax: "'{0}' bi trebalo da bude najmanje {1} i najviše {2}",
    numericMin: "'{0}' bi trebalo da bude najmanje {1}",
    numericMax: "'{0}' bi trebalo da bude najviše {1}",
    invalidEmail: "Molimo unesite ispravnu e-mail adresu.",
    invalidExpression: "Izraz: {0} bi trebalo da bude tačan.",
    urlRequestError: "Zahtev je naišao na grešku '{0}'. {1}",
    urlGetChoicesError: "Zahtev nije pronašao podatke, ili je putanja netačna",
    exceedMaxSize: "Veličina fajla ne bi trebalo da prelazi {0}.",
    otherRequiredError: "Molimo unesite drugu vrednost.",
    uploadingFile: "Fajl se šalje. Molimo sačekajte neko vreme i pokušajte ponovo.",
    loadingFile: "Učitavanje...",
    chooseFile: "Izaberite fajlove...",
    noFileChosen: "Nije izabran nijedan fajl",
    filePlaceholder: "Prevucite i otpustite datoteku ovde ili kliknite na dugme ispod i odaberite datoteku za otpremanje.",
    confirmDelete: "Da li želite da izbrišete unos?",
    keyDuplicationError: "Ova vrednost treba da bude jedinstvena.",
    addColumn: "Dodaj kolonu",
    addRow: "Dodaj red",
    removeRow: "Ukloni",
    emptyRowsText: "Nema redova.",
    addPanel: "Dodaj novo",
    removePanel: "Ukloni",
    choices_Item: "stavka",
    matrix_column: "Kolona",
    matrix_row: "Red",
    multipletext_itemname: "tekst",
    savingData: "U toku je čuvanje podataka na serveru...",
    savingDataError: "Došlo je do greške i rezultati nisu sačuvani.",
    savingDataSuccess: "Rezultati su uspešno sačuvani!",
    saveAgainButton: "Pokušajte ponovo",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Proveli ste {0} na ovoj stranici i {1} ukupno.",
    timerSpentPage: "Proveli ste {0} na ovoj stranici.",
    timerSpentSurvey: "Proveli ste {0} ukupno.",
    timerLimitAll: "Proveli ste {0} od {1} na ovoj stranici i {2} od {3} ukupno.",
    timerLimitPage: "Proveli ste {0} od {1} na ovoj stranici.",
    timerLimitSurvey: "Proveli ste {0} od {1} ukupno.",
    clearCaption: "Poništi",
    signaturePlaceHolder: "Potpišite ovde",
    chooseFileCaption: "Izaberi fajl",
    takePhotoCaption: "Fotografisanje",
    photoPlaceholder: "Kliknite na dugme ispod da biste snimili fotografiju pomoću fotoaparata.",
    fileOrPhotoPlaceholder: "Prevucite i otpustite ili izaberite datoteku za otpremanje ili snimanje fotografije pomoću fotoaparata.",
    replaceFileCaption: "Zameni datoteku",
    removeFileCaption: "Ukloni ovaj fajl",
    booleanCheckedLabel: "Da",
    booleanUncheckedLabel: "Ne",
    confirmRemoveFile: "Da li ste sigurni da želite da uklonite ovaj fajl: {0}?",
    confirmRemoveAllFiles: "Da li ste sigurni da želite da uklonite sve fajlove?",
    questionTitlePatternText: "Naslov pitanja",
    modalCancelButtonText: "Otkaži",
    modalApplyButtonText: "Primeni",
    filterStringPlaceholder: "Otkucajte da biste pretražili...",
    emptyMessage: "Nema podataka za prikazivanje",
    noEntriesText: "Još uvek nema stavki.\nKliknite na dugme ispod da biste dodali novu stavku.",
    noEntriesReadonlyText: "Nema stavki.",
    more: "Viљe",
    tagboxDoneButtonCaption: "U redu",
    selectToRankEmptyRankedAreaText: "Svi izbori su rangirani",
    selectToRankEmptyUnrankedAreaText: "Prevucite i otpustite izbor ovde da biste ih rangirali"
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["rs"] = serbianStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["rs"] = "Srpski";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Izaberite..."
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Prevucite i otpustite datoteku ovde ili kliknite na dugme ispod i odaberite datoteku za otpremanje."
// signaturePlaceHolder: "Sign here" => "Potpišite ovde"
// filterStringPlaceholder: "Type to search..." => "Otkucajte da biste pretražili..."
// emptyMessage: "No data to display" => "Nema podataka za prikazivanje"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Još uvek nema stavki.\nKliknite na dugme ispod da biste dodali novu stavku."
// noEntriesReadonlyText: "There are no entries." => "Nema stavki."
// more: "More" => "Viљe"
// tagboxDoneButtonCaption: "OK" => "U redu"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Svi izbori su rangirani"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Prevucite i otpustite izbor ovde da biste ih rangirali"// takePhotoCaption: "Take Photo" => "Fotografisanje"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kliknite na dugme ispod da biste snimili fotografiju pomoću fotoaparata."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Prevucite i otpustite ili izaberite datoteku za otpremanje ili snimanje fotografije pomoću fotoaparata."
// replaceFileCaption: "Replace file" => "Zameni datoteku"


/***/ }),

/***/ "./src/localization/simplified-chinese.ts":
/*!************************************************!*\
  !*** ./src/localization/simplified-chinese.ts ***!
  \************************************************/
/*! exports provided: simplifiedChineseSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifiedChineseSurveyStrings", function() { return simplifiedChineseSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var simplifiedChineseSurveyStrings = {
    pagePrevText: "上一页",
    pageNextText: "下一页",
    completeText: "提交问卷",
    previewText: "预览",
    editText: "编辑",
    startSurveyText: "开始问卷",
    otherItemText: "填写其他答案",
    noneItemText: "无",
    selectAllItemText: "选择全部",
    progressText: "第 {0} 页, 共 {1} 页",
    indexText: "{1}{0}",
    panelDynamicProgressText: "{0} of {1}",
    panelDynamicTabTextFormat: "面板 {面板索引}",
    questionsProgressText: "第 {0}/{1} 题",
    emptySurvey: "问卷中没有问题或页面",
    completingSurvey: "感谢您的参与!",
    completingSurveyBefore: "你已完成问卷.",
    loadingSurvey: "问卷正在加载中...",
    placeholder: "请选择...",
    ratingOptionsCaption: "选择。。。",
    value: "值",
    requiredError: "请填写此问题",
    requiredErrorInPanel: "至少回答一题.",
    requiredInAllRowsError: "请填写所有行中问题",
    numericError: "答案必须是个数字",
    minError: "该值不能小于 {0}",
    maxError: "该值不能大于 {0}",
    textMinLength: "答案长度至少 {0} 个字符",
    textMaxLength: "答案长度不能超过 {0} 个字符",
    textMinMaxLength: "答案长度必须在 {0} - {1} 个字符之间",
    minRowCountError: "最少需要填写 {0} 行答案",
    minSelectError: "最少需要选择 {0} 项答案",
    maxSelectError: "最多只能选择 {0} 项答案",
    numericMinMax: "答案 '{0}' 必须大于等于 {1} 且小于等于 {2}",
    numericMin: "答案 '{0}' 必须大于等于 {1}",
    numericMax: "答案 '{0}' 必须小于等于 {1}",
    invalidEmail: "请输入有效的 Email 地址",
    invalidExpression: "公式: {0} 无效.",
    urlRequestError: "载入选项时发生错误 '{0}': {1}",
    urlGetChoicesError: "未能载入有效的选项或请求参数路径有误",
    exceedMaxSize: "文件大小不能超过 {0}",
    otherRequiredError: "请完成其他问题",
    uploadingFile: "文件上传中... 请耐心等待几秒后重试",
    loadingFile: "加载...",
    chooseFile: "选择文件...",
    noFileChosen: "未选择文件",
    filePlaceholder: "将文件拖放到此处或单击下面的按钮并选择要上传的文件。",
    confirmDelete: "删除记录?",
    keyDuplicationError: "主键不能重复",
    addColumn: "添加列",
    addRow: "添加行",
    removeRow: "删除答案",
    emptyRowsText: "无内容",
    addPanel: "新添",
    removePanel: "删除",
    choices_Item: "选项",
    matrix_column: "列",
    matrix_row: "行",
    multipletext_itemname: "文本",
    savingData: "正在将结果保存到服务器...",
    savingDataError: "在保存结果过程中发生了错误，结果未能保存",
    savingDataSuccess: "结果保存成功!",
    saveAgainButton: "请重试",
    timerMin: "分",
    timerSec: "秒",
    timerSpentAll: "本页用时 {0} 总计用时{1} .",
    timerSpentPage: "本页用时{0} .",
    timerSpentSurvey: "总计用时 {0} .",
    timerLimitAll: "本页用时 {0} 共 {1}， 总计用时 {2} 共 {3} .",
    timerLimitPage: "本页用时 {0} 共 {1} .",
    timerLimitSurvey: "总计用时 {0} 共 {1}.",
    clearCaption: "清除",
    signaturePlaceHolder: "在此签名",
    chooseFileCaption: "选择文件",
    takePhotoCaption: "拍照",
    photoPlaceholder: "单击下面的按钮使用相机拍照。",
    fileOrPhotoPlaceholder: "拖放或选择要上传的文件或使用相机拍摄照片。",
    replaceFileCaption: "替换文件",
    removeFileCaption: "移除文件",
    booleanCheckedLabel: "是",
    booleanUncheckedLabel: "否",
    confirmRemoveFile: "删除文件: {0}?",
    confirmRemoveAllFiles: "删除所有文件?",
    questionTitlePatternText: "标题",
    modalCancelButtonText: "取消",
    modalApplyButtonText: "确定",
    filterStringPlaceholder: "键入以搜索...",
    emptyMessage: "没有要显示的数据",
    noEntriesText: "尚无条目。\n单击下面的按钮以添加新条目。",
    noEntriesReadonlyText: "没有条目。",
    more: "更多",
    tagboxDoneButtonCaption: "还行",
    selectToRankEmptyRankedAreaText: "所有选择均已排名",
    selectToRankEmptyUnrankedAreaText: "将选项拖放到此处进行排名"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["zh-cn"] = simplifiedChineseSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["zh-cn"] = "简体中文";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{1}{0}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "面板 {面板索引}"
// ratingOptionsCaption: "Select..." => "选择。。。"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "将文件拖放到此处或单击下面的按钮并选择要上传的文件。"
// signaturePlaceHolder: "Sign here" => "在此签名"
// filterStringPlaceholder: "Type to search..." => "键入以搜索..."
// emptyMessage: "No data to display" => "没有要显示的数据"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "尚无条目。\n单击下面的按钮以添加新条目。"
// noEntriesReadonlyText: "There are no entries." => "没有条目。"
// more: "More" => "更多"
// tagboxDoneButtonCaption: "OK" => "还行"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "所有选择均已排名"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "将选项拖放到此处进行排名"// takePhotoCaption: "Take Photo" => "拍照"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "单击下面的按钮使用相机拍照。"
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "拖放或选择要上传的文件或使用相机拍摄照片。"
// replaceFileCaption: "Replace file" => "替换文件"


/***/ }),

/***/ "./src/localization/slovak.ts":
/*!************************************!*\
  !*** ./src/localization/slovak.ts ***!
  \************************************/
/*! exports provided: slovakSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slovakSurveyStrings", function() { return slovakSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var slovakSurveyStrings = {
    pagePrevText: "Predchádzajúca",
    pageNextText: "Ďalej",
    completeText: "Dokončené",
    previewText: "Ukážka",
    editText: "Upraviť",
    startSurveyText: "Spustiť",
    otherItemText: "Iné (opíšte)",
    noneItemText: "Žiadne",
    selectAllItemText: "Vybrať všetky",
    progressText: "Strana {0} z {1}",
    indexText: "{0} {1}",
    panelDynamicProgressText: "Záznam {0} z {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Zodpovedané otázky {0}/{1}",
    emptySurvey: "V prieskume nie je žiadna vidieľná stránka ani otázka.",
    completingSurvey: "Ďakujeme vám za dokončenie prieskumu.",
    completingSurveyBefore: "Podľa našich záznamov ste už tento prieskum dokončili.",
    loadingSurvey: "Načítanie prieskumu...",
    placeholder: "Vybrať...",
    ratingOptionsCaption: "Vybrať...",
    value: "hodnota",
    requiredError: "Požaduje sa odozva.",
    requiredErrorInPanel: "Požaduje sa odozva: zodpovedajte aspoň jednu otázku.",
    requiredInAllRowsError: "Požaduje sa odozva: zodpovedajte otázky vo všetkých riadkoch.",
    numericError: "Hodnota má byť číselná.",
    minError: "Hodnota nemá byť nižšia než {0}",
    maxError: "Hodnota nemá byť vyššia než {0}",
    textMinLength: "Zadajte aspoň {0} znak(-y/-ov).",
    textMaxLength: "Nezadávajte viac než {0} znak(-y/-ov).",
    textMinMaxLength: "Zadajte aspoň {0} a nie viac než {1} znaky(-ov).",
    minRowCountError: "Vyplňte aspoň {0} riadok(-y/-ov).",
    minSelectError: "Vyberte aspoň {0} variant(-y/-ov).",
    maxSelectError: "Nevyberajte viac než {0} variant(-y/-ov).",
    numericMinMax: "„{0}“ má byť minimálne {1} a maximálne {2}",
    numericMin: "„{0}“ má byť minimálne {1}",
    numericMax: "„{0}“ má byť maximálne {1}",
    invalidEmail: "Zadajte platnú e-mailovú adresu.",
    invalidExpression: "Výraz: {0} má vrátiť hodnotu „true“.",
    urlRequestError: "Požiadavky vrátila hodnotu „{0}“. {1}",
    urlGetChoicesError: "Požiadavka vrátila prázdne údaje alebo je vlastnosť „cesta“ nesprávna",
    exceedMaxSize: "Veľkosť súboru nemá prekročiť {0}.",
    otherRequiredError: "Požaduje sa odozva: zadajte inú hodnotu.",
    uploadingFile: "Súbor sa odovzdáva. Počkajte niekoľko sekúnd a skúste to znova.",
    loadingFile: "Načítanie...",
    chooseFile: "Vyberte súbor(-y)...",
    noFileChosen: "Žiadny vybratý súbor",
    filePlaceholder: "Presuňte súbor sem alebo kliknite na nasledujúce tlačidlo a načítajte súbor.",
    confirmDelete: "Chcete záznam odstrániť?",
    keyDuplicationError: "Táto hodnota má byť jedinečná.",
    addColumn: "Pridať stĺpec",
    addRow: "Pridať riadok",
    removeRow: "Odstrániť",
    emptyRowsText: "K dispozícii nie sú žiadne riadky.",
    addPanel: "Pridať nové",
    removePanel: "Odstrániť",
    choices_Item: "položka",
    matrix_column: "Stĺpec",
    matrix_row: "Riadok",
    multipletext_itemname: "text",
    savingData: "Výsledky sa ukladajú na server...",
    savingDataError: "V dôsledku chyby sa nepodarilo výsledky uložiť.",
    savingDataSuccess: "Výsledky sa úspešne uložili.",
    saveAgainButton: "Skúste to znova",
    timerMin: "min",
    timerSec: "s",
    timerSpentAll: "Na tejto stránke ste strávili {0} a celkovo {1}.",
    timerSpentPage: "Na tejto stránke ste strávili {0}.",
    timerSpentSurvey: "Celkovo ste strávili {0}.",
    timerLimitAll: "Na tejto stránke ste strávili {0} z {1} a celkovo {2} z {3}.",
    timerLimitPage: "Na tejto stránke ste strávili {0} z {1}.",
    timerLimitSurvey: "Celkovo ste strávili {0} z {1}.",
    clearCaption: "Vymazať",
    signaturePlaceHolder: "Podpísať tu",
    chooseFileCaption: "Vybrať súbor",
    takePhotoCaption: "Odfotiť",
    photoPlaceholder: "Kliknutím na tlačidlo nižšie nasnímate fotografiu pomocou fotoaparátu.",
    fileOrPhotoPlaceholder: "Presuňte myšou alebo vyberte súbor, ktorý chcete nahrať alebo nasnímať fotografiu pomocou fotoaparátu.",
    replaceFileCaption: "Nahradenie súboru",
    removeFileCaption: "Odstrániť tento súbor",
    booleanCheckedLabel: "Áno",
    booleanUncheckedLabel: "Nie",
    confirmRemoveFile: "Naozaj chcete odstrániť tento súbor: {0}?",
    confirmRemoveAllFiles: "Naozaj chcete odstrániť všetky súbory?",
    questionTitlePatternText: "Titul otázky",
    modalCancelButtonText: "Zrušiť",
    modalApplyButtonText: "Použiť",
    filterStringPlaceholder: "Vyhľadávanie písaním...",
    emptyMessage: "Žiadne údaje na zobrazenie",
    noEntriesText: "K dispozícii ešte nie sú žiadne zadania.\nKliknutím na nasledujúce tlačidlo pridajte nové zadanie.",
    noEntriesReadonlyText: "Nie sú k dispozícii žiadne záznamy.",
    more: "Viacej",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Všetky možnosti sú zoradené",
    selectToRankEmptyUnrankedAreaText: "Presuňte sem voľby, aby ste ich zoradili"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["sk"] = slovakSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["sk"] = "slovenčina";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Vybrať..."
// emptyMessage: "No data to display" => "Žiadne údaje na zobrazenie"
// noEntriesReadonlyText: "There are no entries." => "Nie sú k dispozícii žiadne záznamy."
// more: "More" => "Viacej"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Všetky možnosti sú zoradené"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Presuňte sem voľby, aby ste ich zoradili"// takePhotoCaption: "Take Photo" => "Odfotiť"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kliknutím na tlačidlo nižšie nasnímate fotografiu pomocou fotoaparátu."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Presuňte myšou alebo vyberte súbor, ktorý chcete nahrať alebo nasnímať fotografiu pomocou fotoaparátu."
// replaceFileCaption: "Replace file" => "Nahradenie súboru"


/***/ }),

/***/ "./src/localization/spanish.ts":
/*!*************************************!*\
  !*** ./src/localization/spanish.ts ***!
  \*************************************/
/*! exports provided: spanishSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spanishSurveyStrings", function() { return spanishSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var spanishSurveyStrings = {
    pagePrevText: "Anterior",
    pageNextText: "Siguiente",
    completeText: "Completar",
    previewText: "Vista previa",
    editText: "Edita",
    startSurveyText: "Comienza",
    otherItemText: "Otro (describa)",
    noneItemText: "Ninguno",
    selectAllItemText: "Seleccionar todo",
    progressText: "Página {0} de {1}",
    indexText: "{0} de {1}",
    panelDynamicProgressText: "Registro {0} de {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Respondió a {0}/{1} preguntas",
    emptySurvey: "No hay página visible o pregunta en la encuesta.",
    completingSurvey: "¡Gracias por completar la encuesta!",
    completingSurveyBefore: "Nuestros registros muestran que ya ha completado esta encuesta.",
    loadingSurvey: "La encuesta está cargando...",
    placeholder: "Seleccione...",
    ratingOptionsCaption: "Toca aquí para calificar...",
    value: "valor",
    requiredError: "Por favor conteste la pregunta.",
    requiredErrorInPanel: "Por favor, responda al menos una pregunta.",
    requiredInAllRowsError: "Por favor conteste las preguntas en cada hilera.",
    numericError: "La estimación debe ser numérica.",
    minError: "La estimación no debe ser menor que {0}",
    maxError: "La estimación no debe ser mayor que {0}",
    textMinLength: "Por favor entre por lo menos {0} símbolos.",
    textMaxLength: "Por favor entre menos de {0} símbolos.",
    textMinMaxLength: "Por favor entre más de {0} y menos de {1} símbolos.",
    minRowCountError: "Por favor llene por lo menos {0} hileras.",
    minSelectError: "Por favor seleccione por lo menos {0} variantes.",
    maxSelectError: "Por favor seleccione no más de {0} variantes.",
    numericMinMax: "El '{0}' debe de ser igual o más de {1} y igual o menos de {2}",
    numericMin: "El '{0}' debe ser igual o más de {1}",
    numericMax: "El '{0}' debe ser igual o menos de {1}",
    invalidEmail: "Por favor agregue un correo electrónico válido.",
    invalidExpression: "La expresión: {0} debería devolver 'verdadero'.",
    urlRequestError: "La solicitud regresó error '{0}'. {1}",
    urlGetChoicesError: "La solicitud regresó vacío de data o la propiedad 'trayectoria' no es correcta",
    exceedMaxSize: "El tamaño del archivo no debe de exceder {0}.",
    otherRequiredError: "Por favor agregue la otra estimación.",
    uploadingFile: "Su archivo se está subiendo. Por favor espere unos segundos e intente de nuevo.",
    loadingFile: "Cargando...",
    chooseFile: "Elija archivo(s)...",
    noFileChosen: "No se ha elegido ningún archivo",
    filePlaceholder: "Suelte un archivo aquí o haga clic en el botón de abajo para cargar el archivo",
    confirmDelete: "¿Quieres borrar el registro?",
    keyDuplicationError: "Este valor debe ser único.",
    addColumn: "Añadir columna",
    addRow: "Agregue una hilera",
    removeRow: "Eliminar una hilera",
    emptyRowsText: "No hay hileras.",
    addPanel: "Añadir nuevo",
    removePanel: "Retire",
    choices_Item: "artículo",
    matrix_column: "Columna",
    matrix_row: "Hilera",
    multipletext_itemname: "texto",
    savingData: "Los resultados se están guardando en el servidor...",
    savingDataError: "Los resultados se están guardando en el servidor...",
    savingDataSuccess: "¡Los resultados se guardaron con éxito!",
    saveAgainButton: "Inténtalo de nuevo.",
    timerMin: "min",
    timerSec: "sec",
    timerSpentAll: "Has gastado {0} en esta página y {1} en total.",
    timerSpentPage: "Usted ha pasado {0} en esta página.",
    timerSpentSurvey: "Has gastado en total.",
    timerLimitAll: "Has gastado {0} de {1} en esta página y {2} de {3} en total.",
    timerLimitPage: "Has gastado {0} de {1} en esta página.",
    timerLimitSurvey: "Usted ha gastado {0} de {1} en total.",
    clearCaption: "Despejen",
    signaturePlaceHolder: "Firma aqui",
    chooseFileCaption: "Elija el archivo",
    takePhotoCaption: "Tomar foto",
    photoPlaceholder: "Haga clic en el botón de abajo para tomar una foto con la cámara.",
    fileOrPhotoPlaceholder: "Arrastre y suelte o seleccione un archivo para cargar o tomar una foto con la cámara.",
    replaceFileCaption: "Reemplazar archivo",
    removeFileCaption: "Elimina este archivo",
    booleanCheckedLabel: "Sí",
    booleanUncheckedLabel: "No",
    confirmRemoveFile: "¿Estás seguro de que quieres eliminar este archivo: {0}?",
    confirmRemoveAllFiles: "¿Estás seguro de que quieres eliminar todos los archivos?",
    questionTitlePatternText: "Título de la pregunta",
    modalCancelButtonText: "Anular",
    modalApplyButtonText: "Aplicar",
    filterStringPlaceholder: "Escribe para buscar...",
    emptyMessage: "No hay datos para mostrar",
    noEntriesText: "Aún no hay entradas.\nHaga clic en el botón de abajo para agregar una nueva entrada.",
    noEntriesReadonlyText: "No hay entradas.",
    more: "Más",
    tagboxDoneButtonCaption: "De acuerdo",
    selectToRankEmptyRankedAreaText: "Todas las opciones están clasificadas",
    selectToRankEmptyUnrankedAreaText: "Arrastra y suelta opciones aquí para clasificarlas"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["es"] = spanishSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["es"] = "español";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// emptyMessage: "No data to display" => "No hay datos para mostrar"
// noEntriesReadonlyText: "There are no entries." => "No hay entradas."
// more: "More" => "Más"
// tagboxDoneButtonCaption: "OK" => "De acuerdo"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Todas las opciones están clasificadas"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Arrastra y suelta opciones aquí para clasificarlas"// takePhotoCaption: "Take Photo" => "Tomar foto"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Haga clic en el botón de abajo para tomar una foto con la cámara."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Arrastre y suelte o seleccione un archivo para cargar o tomar una foto con la cámara."
// replaceFileCaption: "Replace file" => "Reemplazar archivo"


/***/ }),

/***/ "./src/localization/swahili.ts":
/*!*************************************!*\
  !*** ./src/localization/swahili.ts ***!
  \*************************************/
/*! exports provided: swahiliStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swahiliStrings", function() { return swahiliStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var swahiliStrings = {
    pagePrevText: "Iliyotangulia",
    pageNextText: "Ifuatayo",
    completeText: "Kamili",
    previewText: "Hakiki",
    editText: "Hariri",
    startSurveyText: "Anza",
    otherItemText: "Nyingine (eleza)",
    noneItemText: "Hakuna",
    selectAllItemText: "Chagua Zote",
    progressText: "Ukurasa {0} wa {1}",
    indexText: "{0} ya {1}",
    panelDynamicProgressText: "Rekodi {0} ya {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Yaliyojibiwa {0}/{1} maswali",
    emptySurvey: "Hakuna ukurasa unaoonekana au swali katika utafiti.",
    completingSurvey: "Asanti kwa kukamilisha utafiti!",
    completingSurveyBefore: "Recodi zetu zinatuonyesha tayari umekamilisha utafiti.",
    loadingSurvey: "Tunaandaa utafiti...",
    placeholder: "Chagua...",
    ratingOptionsCaption: "Teua...",
    value: "thamani",
    requiredError: "Tafadhali jibu hili swali.",
    requiredErrorInPanel: "Tafadhali jibu swali angalau moja.",
    requiredInAllRowsError: "Tafadhali jibu maswali katika safu zote.",
    numericError: "Thamani inapaswa kuwa ya nambari.",
    minError: "Thamani haipaswi kuwa chini ya {0}",
    maxError: "Thamani haipaswi kuwa kubwa kuliko {0}",
    textMinLength: "Tafadhali ingiza angalau{0} husika.",
    textMaxLength: "Tafadhali ingiza isiozidi {0} husika.",
    textMinMaxLength: "Tafadhali ingiza kiwango zaidi ya {0} na kisichopungua {1} husika.",
    minRowCountError: "Tafadhali jaza isiopungua {0} safu.",
    minSelectError: "Tafadhali chagua angalau {0} lahaja.",
    maxSelectError: "Tafadhali changua isiozidi {0} lahaja.",
    numericMinMax: " '{0}' inapaswa kuwa sawa au zaidi ya {1} na sawa au chini ya {2}",
    numericMin: " '{0}'inapaswa kuwa sawa au zaidi ya {1}",
    numericMax: " '{0}'inapaswa kuwa sawa au chini ya {1}",
    invalidEmail: "Tafadhali ingiza anwani halali ya barua-pepe.",
    invalidExpression: "Usemi:{0} inapaswa kurudi 'kweli'.",
    urlRequestError: "Ombi lina kosa '{0}'. {1}",
    urlGetChoicesError: "Ombi lilirudisha data tupu au the 'path' mali ya njia sio sahihi",
    exceedMaxSize: "Saizi ya faili haipaswi kuzidi {0}.",
    otherRequiredError: "Tafadhali ingiza thamani nyingine.",
    uploadingFile: "Faili yako inapakia.Tafadhali subiri sekunde kadhaa na ujaribu tena.",
    loadingFile: "Inapakia...",
    chooseFile: "Chagua faili...",
    noFileChosen: "Hujachagua faili",
    filePlaceholder: "Buruta na udondoshe faili hapa au bofya kitufe hapa chini na uchague faili ya kupakia.",
    confirmDelete: "Je! Unataka kufuta rekodi?",
    keyDuplicationError: "Thamani hii inapaswa kuwa ya kipekee.",
    addColumn: "Ongeza Kolamu",
    addRow: "Ongeza safu",
    removeRow: "Toa",
    emptyRowsText: "Hakuna safu.",
    addPanel: "Ongeza mpya",
    removePanel: "Toa",
    choices_Item: "kitu",
    matrix_column: "Kolamu",
    matrix_row: "Safu",
    multipletext_itemname: "Ujumbe",
    savingData: "Matokeo yamehifadhiwa kwa seva...",
    savingDataError: "Kosa limetokea na hatukuweza kuhifadhi matokeo.",
    savingDataSuccess: "Matokeo yamehifadhiwa!",
    saveAgainButton: "Jaribu tena",
    timerMin: "dakika",
    timerSec: "sekunde",
    timerSpentAll: "Umetumia {0} kwenye ukurasa huu na {1} kwa jumla.",
    timerSpentPage: "Umetumia {0} kwenye ukurasa huu.",
    timerSpentSurvey: "Umetumia {0} kwa jumla.",
    timerLimitAll: "Umetumia {0} ya {1} kwenye ukurasa huu {2} wa {3} kwa jumla.",
    timerLimitPage: "Umetumia {0} ya {1} kwenye ukurasa huu.",
    timerLimitSurvey: "Umetumia {0} ya {1} kwa jumla.",
    clearCaption: "Ondoa",
    signaturePlaceHolder: "Ingia hapa",
    chooseFileCaption: "Chagua faili",
    takePhotoCaption: "Chukua Picha",
    photoPlaceholder: "Bonyeza kitufe hapa chini ili kupiga picha kwa kutumia kamera.",
    fileOrPhotoPlaceholder: "Drag na kuacha au kuchagua faili kupakia au kuchukua picha kwa kutumia kamera.",
    replaceFileCaption: "Badilisha faili",
    removeFileCaption: "Ondoa faili",
    booleanCheckedLabel: "Ndio",
    booleanUncheckedLabel: "Hapana",
    confirmRemoveFile: "Je! Una uhakika kuwa unataka kuondoa faili hii: {0}?",
    confirmRemoveAllFiles: "Je! Una uhakika kuwa unataka kuondoa faili zote?",
    questionTitlePatternText: "Kichwa cha Swali",
    modalCancelButtonText: "Katisha",
    modalApplyButtonText: "Tekeleza",
    filterStringPlaceholder: "Andika ili kutafuta...",
    emptyMessage: "Hakuna data ya kuonyesha",
    noEntriesText: "Hakuna maingizo kwa sasa.\nBofya kitufe hapa chini ili kuongeza ingizo jipya.",
    noEntriesReadonlyText: "Hakuna viingilio.",
    more: "Zaidi",
    tagboxDoneButtonCaption: "Sawa kabisa",
    selectToRankEmptyRankedAreaText: "Chaguzi zote zimeorodheshwa",
    selectToRankEmptyUnrankedAreaText: "Buruta na uache uchaguzi hapa ili kuziorodhesha"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["sw"] = swahiliStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["sw"] = "swahili";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} ya {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Teua..."
// minError: "The value should not be less than {0}" => "Thamani haipaswi kuwa chini ya {0}"
// maxError: "The value should not be greater than {0}" => "Thamani haipaswi kuwa kubwa kuliko {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Buruta na udondoshe faili hapa au bofya kitufe hapa chini na uchague faili ya kupakia."
// emptyRowsText: "There are no rows." => "Hakuna safu."
// multipletext_itemname: "text" => "Ujumbe"
// signaturePlaceHolder: "Sign here" => "Ingia hapa"
// modalCancelButtonText: "Cancel" => "Katisha"
// modalApplyButtonText: "Apply" => "Tekeleza"
// filterStringPlaceholder: "Type to search..." => "Andika ili kutafuta..."
// emptyMessage: "No data to display" => "Hakuna data ya kuonyesha"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Hakuna maingizo kwa sasa.\nBofya kitufe hapa chini ili kuongeza ingizo jipya."
// noEntriesReadonlyText: "There are no entries." => "Hakuna viingilio."
// more: "More" => "Zaidi"
// tagboxDoneButtonCaption: "OK" => "Sawa kabisa"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Chaguzi zote zimeorodheshwa"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Buruta na uache uchaguzi hapa ili kuziorodhesha"// takePhotoCaption: "Take Photo" => "Chukua Picha"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Bonyeza kitufe hapa chini ili kupiga picha kwa kutumia kamera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Drag na kuacha au kuchagua faili kupakia au kuchukua picha kwa kutumia kamera."
// replaceFileCaption: "Replace file" => "Badilisha faili"


/***/ }),

/***/ "./src/localization/swedish.ts":
/*!*************************************!*\
  !*** ./src/localization/swedish.ts ***!
  \*************************************/
/*! exports provided: swedishSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swedishSurveyStrings", function() { return swedishSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var swedishSurveyStrings = {
    pagePrevText: "Föregående",
    pageNextText: "Nästa",
    completeText: "Slutför",
    previewText: "Förhandsvisning",
    editText: "Redigera",
    startSurveyText: "Börja",
    otherItemText: "Annat (beskriv)",
    noneItemText: "Ingen",
    selectAllItemText: "Välj alla",
    progressText: "Sida {0} av {1}",
    indexText: "{0} av {1}",
    panelDynamicProgressText: "{0} av {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "{0} / {1} frågor besvarade",
    emptySurvey: "Det finns ingen synlig sida eller fråga i enkäten.",
    completingSurvey: "Tack för att du genomfört enkäten!!",
    completingSurveyBefore: "Våra register visar att du redan har slutfört denna undersökning.",
    loadingSurvey: "Enkäten laddas...",
    placeholder: "Välj...",
    ratingOptionsCaption: "Tryck här för att betygsätta...",
    value: "värde",
    requiredError: "Frågan är obligatorisk.",
    requiredErrorInPanel: "Vänligen svara på minst en fråga.",
    requiredInAllRowsError: "Var vänlig besvara frågorna på alla rader.",
    numericError: "Värdet ska vara numeriskt.",
    minError: "Värdet får inte vara mindre än {0}",
    maxError: "Värdet får inte vara större än {0}",
    textMinLength: "Ange minst {0} tecken.",
    textMaxLength: "Ange färre än {0} tecken.",
    textMinMaxLength: "Ange mer än {0} och färre än {1} tecken.",
    minRowCountError: "Var vänlig fyll i minst {0} rader.",
    minSelectError: "Var vänlig välj åtminstone {0} varianter.",
    maxSelectError: "Var vänlig välj inte fler än {0} varianter.",
    numericMinMax: "'{0}' ska vara lika med eller mer än {1} samt lika med eller mindre än {2}",
    numericMin: "'{0}' ska vara lika med eller mer än {1}",
    numericMax: "'{0}' ska vara lika med eller mindre än {1}",
    invalidEmail: "Var vänlig ange en korrekt e-postadress.",
    invalidExpression: "Uttrycket: {0} ska returnera 'true'.",
    urlRequestError: "Förfrågan returnerade felet '{0}'. {1}",
    urlGetChoicesError: "Antingen returnerade förfrågan ingen data eller så är egenskapen 'path' inte korrekt",
    exceedMaxSize: "Filstorleken får ej överstiga {0}.",
    otherRequiredError: "Var vänlig ange det andra värdet.",
    uploadingFile: "Din fil laddas upp. Var vänlig vänta några sekunder och försök sedan igen.",
    loadingFile: "Laddar...",
    chooseFile: "Välj fil(er) ...",
    noFileChosen: "Ingen fil vald",
    filePlaceholder: "Dra och släpp en fil här eller klicka på knappen nedan och välj en fil att ladda upp.",
    confirmDelete: "Vill du radera posten?",
    keyDuplicationError: "Detta värde ska vara unikt.",
    addColumn: "Lägg till kolumn",
    addRow: "Lägg till rad",
    removeRow: "Ta bort",
    emptyRowsText: "Det finns inga rader.",
    addPanel: "Lägg till ny",
    removePanel: "Ta bort",
    choices_Item: "Artikel",
    matrix_column: "Kolumn",
    matrix_row: "Rad",
    multipletext_itemname: "text",
    savingData: "Resultaten sparas på servern ...",
    savingDataError: "Ett fel inträffade och vi kunde inte spara resultaten.",
    savingDataSuccess: "Resultaten lyckades sparas!",
    saveAgainButton: "Försök igen",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Du har spenderat {0} på den här sidan och {1} totalt.",
    timerSpentPage: "Du har spenderat {0} på den här sidan.",
    timerSpentSurvey: "Du har spenderat {0} totalt.",
    timerLimitAll: "Du har spenderat {0} av {1} på den här sidan och {2} av {3} totalt.",
    timerLimitPage: "Du har spenderat {0} av {1} på den här sidan.",
    timerLimitSurvey: "Du har spenderat {0} av {1} totalt.",
    clearCaption: "Klar",
    signaturePlaceHolder: "Signera här",
    chooseFileCaption: "Välj fil",
    takePhotoCaption: "Ta foto",
    photoPlaceholder: "Klicka på knappen nedan för att ta ett foto med kameran.",
    fileOrPhotoPlaceholder: "Dra och släpp eller välj en fil att ladda upp eller ta ett foto med kameran.",
    replaceFileCaption: "Ersätt fil",
    removeFileCaption: "Ta bort den här filen",
    booleanCheckedLabel: "Ja",
    booleanUncheckedLabel: "Nej",
    confirmRemoveFile: "Är du säker på att du vill ta bort den här filen: {0}?",
    confirmRemoveAllFiles: "Är du säker på att du vill ta bort alla filer?",
    questionTitlePatternText: "Frågetitel",
    modalCancelButtonText: "Avbryt",
    modalApplyButtonText: "Spara",
    filterStringPlaceholder: "Skriv för att söka...",
    emptyMessage: "Ingen data finns",
    noEntriesText: "Det finns inga värden än.\nKlicka på knappen nedan för att lägga till nytt värde.",
    noEntriesReadonlyText: "Det finns inga poster.",
    more: "Mer",
    tagboxDoneButtonCaption: "OKEJ",
    selectToRankEmptyRankedAreaText: "Alla val rangordnas",
    selectToRankEmptyUnrankedAreaText: "Dra och släpp val här för att rangordna dem"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["sv"] = swedishSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["sv"] = "svenska";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Dra och släpp en fil här eller klicka på knappen nedan och välj en fil att ladda upp."
// emptyRowsText: "There are no rows." => "Det finns inga rader."
// noEntriesReadonlyText: "There are no entries." => "Det finns inga poster."
// tagboxDoneButtonCaption: "OK" => "OKEJ"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Alla val rangordnas"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Dra och släpp val här för att rangordna dem"// takePhotoCaption: "Take Photo" => "Ta foto"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Klicka på knappen nedan för att ta ett foto med kameran."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Dra och släpp eller välj en fil att ladda upp eller ta ett foto med kameran."
// replaceFileCaption: "Replace file" => "Ersätt fil"


/***/ }),

/***/ "./src/localization/tajik.ts":
/*!***********************************!*\
  !*** ./src/localization/tajik.ts ***!
  \***********************************/
/*! exports provided: tajikSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tajikSurveyStrings", function() { return tajikSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
// This dictionary contains 25 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.

var tajikSurveyStrings = {
    pagePrevText: "Бозгашт",
    pageNextText: "Оянда",
    completeText: "Иҷро шуд",
    // previewText: "Preview",
    // editText: "Edit",
    startSurveyText: "Оғоз",
    otherItemText: "Дигар (лутфан тавсиф кунед)",
    noneItemText: "Не",
    selectAllItemText: "Ҳамаро интихоб кардан",
    progressText: "Саҳифаи {0} аз {1}",
    // indexText: "{0} of {1}",
    // panelDynamicProgressText: "{0} of {1}",
    // questionsProgressText: "Answered {0}/{1} questions",
    emptySurvey: "Ягон савол вуҷуд надорад.",
    completingSurvey: "Ташаккур барои пур кардани саволнома!",
    completingSurveyBefore: "Шумо аллакай ин пурсишро анҷом додаед.",
    loadingSurvey: "Боргирӣ аз сервер...",
    placeholder: "Интихоб кардан...",
    // ratingOptionsCaption: "Select...",
    value: "қиммат",
    requiredError: "Илтимос, ба савол ҷавоб диҳед.",
    requiredErrorInPanel: "Илтимос, ақалан ба як савол ҷавоб диҳед.",
    requiredInAllRowsError: "Илтимос, ба ҳамаи саволҳо дар ҳамаи сатрҳо ҷавоб диҳед.",
    numericError: "Ҷавоб бояд рақам бошад.",
    // minError: "The value should not be less than {0}",
    // maxError: "The value should not be greater than {0}",
    textMinLength: "Илтимос, аз {0} зиёдтар рамз ворид кунед.",
    textMaxLength: "Илтимос, аз {0} камтар рамз ворид кунед.",
    textMinMaxLength: "Илтимос, аз {0} зиёдтар ва аз {1} камтар рамз ворид кунед.",
    minRowCountError: "Илтимос, на камтар аз {0} сатр пур кунед.",
    minSelectError: "Илтимос, ақалан {0} вариант интихоб кунед.",
    maxSelectError: "Илтимос, на зиёдтар аз {0} вариант интихоб кунед.",
    numericMinMax: "'{0}' бояд на кам аз {1} ва на бисёр аз {2} бошад",
    numericMin: "'{0}' бояд на кам аз {1} бошад",
    numericMax: "'{0}' бояд на зиёд аз {1} бошад",
    invalidEmail: "Илтимос, почтаи электронии воқеиро ворид кунед.",
    invalidExpression: "Ифодаи {0} бояд 'true' баргардонад.",
    urlRequestError: "Дархост хатогӣ бозгардонд '{0}'. {1}",
    urlGetChoicesError: "Ҷавоб ба дархост холӣ омад ё хосияти 'path' нодуруст муайян карда шудааст",
    exceedMaxSize: "Андозаи файл бояд на калон аз {0} бошад.",
    otherRequiredError: "Илтимос, ба майдони 'Дигар' додаҳоро ворид кунед",
    uploadingFile: "Файли шумо бор шуда истодааст. Якчанд сония интизор шавед ва бори дигар кӯшиш кунед.",
    loadingFile: "Боркунӣ...",
    chooseFile: "Файл(ҳо)-ро интихоб кунед...",
    // noFileChosen: "No file chosen",
    // filePlaceholder: "Drop a file here or click the button below to load the file.",
    confirmDelete: "Шумо мутмаин ҳастед, ки мехоҳед воридро тоза кунед?",
    keyDuplicationError: "Ин арзиш бояд беназир бошад.",
    addColumn: "Иловаи сутун",
    addRow: "Иловаи сатр",
    removeRow: "Нест кардан",
    // emptyRowsText: "There are no rows.",
    addPanel: "Илова кардан",
    removePanel: "Нест кардан",
    choices_Item: "Вариант",
    matrix_column: "Сутун",
    matrix_row: "Сатр",
    // multipletext_itemname: "text",
    savingData: "Натиҷа ба сервер сабт шуда истодаанд...",
    savingDataError: "Хатогӣ ба амал омад, натиҷа сабт нашуд.",
    savingDataSuccess: "Натиҷа бомуваффакият сабт шуд!",
    saveAgainButton: "Бори дигар кӯшиш карданд",
    timerMin: "дақ",
    timerSec: "сон",
    timerSpentAll: "Шумо {0} дар ин саҳифа ва {1} дар умум сарф кардед.",
    timerSpentPage: "Шумо {0} дар ин саҳифа сарф кардед.",
    timerSpentSurvey: "Шумо {0} дар ин тест сарф намудед.",
    timerLimitAll: "Шумо {0} аз {1} дар ин саҳифа ва {2} аз {3} дар умум сарф кардед дар дохили ин тест.",
    timerLimitPage: "Шумо {0} аз {1} дар ин саҳифа сарф кардед.",
    timerLimitSurvey: "Шумо {0} аз {1} дар ҳамаи тест сарф кардед.",
    clearCaption: "Тоза кардан",
    // signaturePlaceHolder: "Sign here",
    // chooseFileCaption: "Choose file",
    removeFileCaption: "Файлро нест кардан",
    // booleanCheckedLabel: "Yes",
    // booleanUncheckedLabel: "No",
    // confirmRemoveFile: "Are you sure that you want to remove this file: {0}?",
    // confirmRemoveAllFiles: "Are you sure that you want to remove all files?",
    // questionTitlePatternText: "Question Title",
    // modalCancelButtonText: "Cancel",
    // modalApplyButtonText: "Apply",
    // filterStringPlaceholder: "Type to search...",
    // emptyMessage: "No data to display",
    // noEntriesText: "There are no entries yet.\nClick the button below to add a new entry.",
    // more: "More"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["tg"] = tajikSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["tg"] = "тоҷикӣ";


/***/ }),

/***/ "./src/localization/telugu.ts":
/*!************************************!*\
  !*** ./src/localization/telugu.ts ***!
  \************************************/
/*! exports provided: teluguStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teluguStrings", function() { return teluguStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var teluguStrings = {
    pagePrevText: "వెనకటి",
    pageNextText: "తరువాయ",
    completeText: "పూర్తి చేయండి",
    previewText: "ముందుగా వీక్షించు",
    editText: "మార్పులు చెయ్యి",
    startSurveyText: "ప్రారంభించు",
    otherItemText: "ఇతరమైన(వివరించండి)",
    noneItemText: "ఎవరు కాదు",
    selectAllItemText: "అన్ని ఎంచుకో",
    progressText: "పేజీ{0}/{1}",
    indexText: "{1} {0}[మార్చు]",
    panelDynamicProgressText: "దాఖలాలు{0}/{1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "{0}/{1} ప్రశ్నలకు జవాబు ఇవ్వడం అయినది",
    emptySurvey: "ఈ సర్వేలో పేజీలు గాని ప్రశ్నలు గాని కనబడుట లేదు",
    completingSurvey: "సర్వేను ముగించి నందుకు ధన్యవాదములు",
    completingSurveyBefore: " మీరు ఇప్పటికే సర్వేను ముగించినట్లు మా రికార్డులు చూపిస్తున్నాయి",
    loadingSurvey: "సర్వే లోడ్ అవుతుంది",
    placeholder: "ఎన్నుకోండి",
    ratingOptionsCaption: "ఎంచు...",
    value: "విలువ",
    requiredError: "దయచేసి ప్రశ్నకు జవాబు ఇవ్వండి",
    requiredErrorInPanel: "దయచేసి కనీసం ఒక్క ప్రశ్నకైనా జవాబు ఇవ్వండి",
    requiredInAllRowsError: "దయచేసి అన్ని వరుసలలో ఉన్న ప్రశ్నలకు జవాబు ఇవ్వండి",
    numericError: "విలువను సంఖ్యలలో తెలియజేయండి",
    minError: "విలువ {0} కంటే తక్కువగా ఉండకూడదు.",
    maxError: "విలువ {0} కంటే ఎక్కువ ఉండకూడదు.",
    textMinLength: "దయచేసి కనీసం {0} అక్షరాలను నమోదు చేయండి",
    textMaxLength: "దయచేసి {0} కన్నా తక్కువ అక్షరాలను నమోదు చేయండి",
    textMinMaxLength: "దయచేసి {0} కన్నా ఎక్కువ మరియు{1} కన్నా తక్కువ అక్షరాలను నమోదు చేయండి",
    minRowCountError: "దయచేసి కనీసం {0}వరుసలను పూరించండి",
    minSelectError: "దయచేసి కనీసం{0} రకాలను ఎన్నుకోండి",
    maxSelectError: "దయచేసి {0} కన్నా ఎక్కువ రకాలను ఎన్నుకో కండి",
    numericMinMax: "'{0}' {1}తొ సమానంగా లేదా {1} కన్నా ఎక్కువ గా మరియు  {2}కన్నా తక్కువ ఉండాలి లెదా {2}తొ సమానంగా ఉండాలి",
    numericMin: "''{0}' {1}తొ  సమానంగా లేదా  {1}కన్నా ఎక్కువగా ఉండాలి",
    numericMax: "'{0}'  {1}  తక్కువ లేదా సమానంగా ఉండాలి",
    invalidEmail: "దయచేసి సరైన ఈమెయిల్  నమోదు చేయండి",
    invalidExpression: "{0} 'నిజం' అని తిరిగివ్వాలి",
    urlRequestError: "విన్నపము {0} ని తప్పుగా గుర్తించింది {1}",
    urlGetChoicesError: "విన్నపము ఖాళీ డేటాని తిరిగిచ్చింది, లేదా path తప్పైన ది",
    exceedMaxSize: "ఫైల్ పరిమాణం{0} కంటే పెద్దదిగా ఉండకూడదు",
    otherRequiredError: "దయచేసి ఇతర విలువలను నమో దించండి",
    uploadingFile: "మీ ఫైల్ అప్లోడ్ అవుతున్నది దయచేసి కొన్ని సెకండ్లు వేచి ఉండండి మరియు మళ్లీ ప్రయత్నించండి",
    loadingFile: "లోడ్ అవుతున్నది",
    chooseFile: "ఫైళ్లను ఎన్నుకోండి",
    noFileChosen: "ఏ ఫైల్ ఎన్నుకో లేదు",
    filePlaceholder: "ఇక్కడ ఒక ఫైల్ ను డ్రాగ్ చేసి డ్రాప్ చేయండి లేదా దిగువ బటన్ క్లిక్ చేయండి మరియు అప్ లోడ్ చేయడానికి ఫైల్ ఎంచుకోండి.",
    confirmDelete: "మీరు రికార్డులను తొలగించాలని అనుకుంటున్నారా",
    keyDuplicationError: "విలువ ప్రత్యేకంగా ఉండాలి",
    addColumn: "కాలం చేర్పించండి",
    addRow: "వరుసలు చేర్పించండి",
    removeRow: "తీసేయండి",
    emptyRowsText: "వరుసలు లేవు.",
    addPanel: "కొత్త దాన్ని చేర్పించండి",
    removePanel: "తీసేయండి",
    choices_Item: "వస్తువులు",
    matrix_column: "కాలం ",
    matrix_row: "వరుస",
    multipletext_itemname: "వచనం",
    savingData: "ఫలితాంశాలు సర్వర్లో సేవ్ అవుతున్నాయి",
    savingDataError: "ఒక లోపము సంభవించినది అందుకని ఫలితాంశాలను సేవ్ చేయలేకపోయాము  ",
    savingDataSuccess: "ఫలితాంశాలను విజయవంతంగా సేవ్ చేసాము",
    saveAgainButton: "మళ్లీ ప్రయత్నించు",
    timerMin: "నిమిషాలు ",
    timerSec: "సెకండ్లు",
    timerSpentAll: "ఈ పేజీ పైన మీరు{0}  ఉపయోగించారు మొత్తంగా  {1} ఉపయోగించారు",
    timerSpentPage: "ఈ పేజీ పైన మీరు{0} ఉపయోగించారు",
    timerSpentSurvey: "మీరు మొత్తంగా {0}  ఉపయోగించారు",
    timerLimitAll: "ఈ పేజీ పైన మీరు {1}లో {0} భాగాన్ని ఉపయోగించారు. మోతంగా {3}లో {2} భాగాన్ని ఉపయోగించారు.",
    timerLimitPage: "ఈ పేజీలో మీరు {1}లోని{0} ని ఉపయోగించారు",
    timerLimitSurvey: " మొత్తంగా మీరు {1} లో {0} ని ఉపయోగించారు ",
    clearCaption: "స్పష్టమ్",
    signaturePlaceHolder: "ఇక్కడ సంతకం చేయండి",
    chooseFileCaption: "ఫైల్ ఎంచుకోండి",
    takePhotoCaption: "ఫోటో తీసుకోండి",
    photoPlaceholder: "కెమెరాను ఉపయోగించి ఫోటో తీయడానికి దిగువ బటన్ మీద క్లిక్ చేయండి.",
    fileOrPhotoPlaceholder: "కెమెరాను ఉపయోగించి ఫోటోను అప్ లోడ్ చేయడానికి లేదా తీయడానికి ఫైల్ ను డ్రాగ్ మరియు డ్రాప్ చేయండి లేదా ఎంచుకోండి.",
    replaceFileCaption: "ఫైలు మార్చండి",
    removeFileCaption: "ఈ ఫైల్ తీసేయండి",
    booleanCheckedLabel: "అవును",
    booleanUncheckedLabel: "లేదు",
    confirmRemoveFile: " ఈ ఫైల్ని తీయించాలని మీరు ఖచ్చితంగా అనుకుంటున్నారా:{0} ?",
    confirmRemoveAllFiles: "అన్ని ఫైళ్లను తీసేయాలని మీరు ఖచ్చితంగా అనుకుంటున్నారా",
    questionTitlePatternText: "ప్రశ్న శీర్షిక",
    modalCancelButtonText: "రద్దు",
    modalApplyButtonText: "సరిపడు",
    filterStringPlaceholder: "శోధించడానికి టైప్ చేయండి...",
    emptyMessage: "డిస్ ప్లే చేయడానికి డేటా లేదు",
    noEntriesText: "ఇంకా ఎలాంటి ఎంట్రీలు లేవు.\nకొత్త ఎంట్రీని జోడించడం కొరకు దిగువ బటన్ మీద క్లిక్ చేయండి.",
    noEntriesReadonlyText: "ఎలాంటి ఎంట్రీలు లేవు.",
    more: "ఎక్కువ",
    tagboxDoneButtonCaption: "సరే",
    selectToRankEmptyRankedAreaText: "అన్ని ఎంపికలు ర్యాంక్ చేయబడతాయి",
    selectToRankEmptyUnrankedAreaText: "వాటిని ర్యాంక్ చేయడం కొరకు ఎంపికలను ఇక్కడ డ్రాగ్ మరియు డ్రాప్ చేయండి"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["tel"] = teluguStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["tel"] = "Telugu";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// noneItemText: "None" => "ఎవరు కాదు"
// indexText: "{0} of {1}" => "{1} {0}[మార్చు]"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "ఎంచు..."
// minError: "The value should not be less than {0}" => "విలువ {0} కంటే తక్కువగా ఉండకూడదు."
// maxError: "The value should not be greater than {0}" => "విలువ {0} కంటే ఎక్కువ ఉండకూడదు."
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "ఇక్కడ ఒక ఫైల్ ను డ్రాగ్ చేసి డ్రాప్ చేయండి లేదా దిగువ బటన్ క్లిక్ చేయండి మరియు అప్ లోడ్ చేయడానికి ఫైల్ ఎంచుకోండి."
// emptyRowsText: "There are no rows." => "వరుసలు లేవు."
// multipletext_itemname: "text" => "వచనం"
// signaturePlaceHolder: "Sign here" => "ఇక్కడ సంతకం చేయండి"
// modalCancelButtonText: "Cancel" => "రద్దు"
// modalApplyButtonText: "Apply" => "సరిపడు"
// filterStringPlaceholder: "Type to search..." => "శోధించడానికి టైప్ చేయండి..."
// emptyMessage: "No data to display" => "డిస్ ప్లే చేయడానికి డేటా లేదు"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "ఇంకా ఎలాంటి ఎంట్రీలు లేవు.\nకొత్త ఎంట్రీని జోడించడం కొరకు దిగువ బటన్ మీద క్లిక్ చేయండి."
// noEntriesReadonlyText: "There are no entries." => "ఎలాంటి ఎంట్రీలు లేవు."
// more: "More" => "ఎక్కువ"
// tagboxDoneButtonCaption: "OK" => "సరే"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "అన్ని ఎంపికలు ర్యాంక్ చేయబడతాయి"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "వాటిని ర్యాంక్ చేయడం కొరకు ఎంపికలను ఇక్కడ డ్రాగ్ మరియు డ్రాప్ చేయండి"// takePhotoCaption: "Take Photo" => "ఫోటో తీసుకోండి"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "కెమెరాను ఉపయోగించి ఫోటో తీయడానికి దిగువ బటన్ మీద క్లిక్ చేయండి."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "కెమెరాను ఉపయోగించి ఫోటోను అప్ లోడ్ చేయడానికి లేదా తీయడానికి ఫైల్ ను డ్రాగ్ మరియు డ్రాప్ చేయండి లేదా ఎంచుకోండి."
// replaceFileCaption: "Replace file" => "ఫైలు మార్చండి"


/***/ }),

/***/ "./src/localization/thai.ts":
/*!**********************************!*\
  !*** ./src/localization/thai.ts ***!
  \**********************************/
/*! exports provided: thaiStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thaiStrings", function() { return thaiStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var thaiStrings = {
    pagePrevText: "ก่อนหน้า",
    pageNextText: "ถัดไป",
    completeText: "สำเร็จ",
    previewText: "ดูตัวอย่าง",
    editText: "แก้ไข",
    startSurveyText: "เริ่ม",
    otherItemText: "อื่นๆ (โปรดระบุ)",
    noneItemText: "ไม่มี",
    selectAllItemText: "เลือกทั้งหมด",
    progressText: "หน้าที่ {0} จาก {1}",
    indexText: "{0} of {1}",
    panelDynamicProgressText: "รายการที่ {0} จาก {1}",
    panelDynamicTabTextFormat: "แผง {panelIndex}",
    questionsProgressText: "คำตอบที่ {0}/{1} จำนวนคำถาม",
    emptySurvey: "ไม่มีหน้าเพจที่มองเห็น หรือ คำถามใน survey นี้",
    completingSurvey: "ขอบคุณที่ทำ survey จนเสร็จ",
    completingSurveyBefore: "รายการของเราแสดงว่าคุณได้ทำ survey เสร็จเรียบร้อยแล้ว",
    loadingSurvey: "กำลังโหลด Survey...",
    placeholder: "เลือก...",
    ratingOptionsCaption: "เลือก   ",
    value: "ข้อมูล",
    requiredError: "กรุณาตอบคำถาม",
    requiredErrorInPanel: "กรุณาตอบขั้นต่ำหนึ่งคำถาม",
    requiredInAllRowsError: "กรุณาตอบคำถามในทุกๆแถว",
    numericError: "ข้อมูลที่ใส่ต้องเป็นตัวเลข",
    minError: "ค่าไม่ควรน้อยกว่า {0}",
    maxError: "ค่าไม่ควรเกิน{0}",
    textMinLength: "กรุณาใส่ขั้นต่ำจำนวน {0} ตัวอักษร",
    textMaxLength: "กรุณาใส่ไม่เกินจำนวน {0} ตัวอักษร",
    textMinMaxLength: "กรุณาใส่ขั้นต่ำจำนวน {0} และไม่เกินจำนวน {1} ตัวอักษร",
    minRowCountError: "กรุณาใส่ขั้นต่ำจำนวน {0} แถว",
    minSelectError: "กรุณาเลือกอย่างน้อย {0} รายการ",
    maxSelectError: "กรุณาเลือกไม่เกิน {0} รายการ",
    numericMinMax: "'{0}' ต้องมากกว่าหรือเท่ากับ {1} และน้อยกว่าหรือเท่ากับ {2}",
    numericMin: "'{0}' ต้องมากกว่าหรือเท่ากับ {1}",
    numericMax: "'{0}' น้อยกว่าหรือเท่ากับ {1}",
    invalidEmail: "กรุณาใส่อีเมล์แอดเดรสที่ถูกต้อง",
    invalidExpression: "The expression: {0} ต้องรีเทิร์น 'true'.",
    urlRequestError: "รีเควสรีเทิร์น error '{0}'. {1}",
    urlGetChoicesError: "รีเควสรีเทิร์นข้อมูลว่างเปล่า หรือ 'path' property ไม่ถูกต้อง",
    exceedMaxSize: "ขนาดไฟล์ต้องไม่เกิน {0}.",
    otherRequiredError: "กรุณาใส่ค่าอื่น",
    uploadingFile: "ไฟล์ของคุณกำลังอัพโหลดอยู่. กรุณารอสักครู่แล้วทำการลองอีกครั้ง",
    loadingFile: "กำลังโหลด...",
    chooseFile: "เลือกไฟล์...",
    noFileChosen: "ไม่ไฟล์ที่เลือก",
    filePlaceholder: "ลากและวางไฟล์ที่นี่หรือคลิกปุ่มด้านล่างและเลือกไฟล์ที่จะอัปโหลด",
    confirmDelete: "คุณต้องการลบรายการนี้จริงหรือไม่?",
    keyDuplicationError: "ข้อมูลนี้ต้องเป็น unique.",
    addColumn: "เพิ่มคอลัมน์",
    addRow: "เพิ่มแถว",
    removeRow: "ลบ",
    emptyRowsText: "ไม่มีแถว",
    addPanel: "เพิ่ม",
    removePanel: "ลบ",
    choices_Item: "ชิ้น",
    matrix_column: "คอลัมน์",
    matrix_row: "แถว",
    multipletext_itemname: "ข้อความ",
    savingData: "ผลลัพท์กำลังบันทึกลงที่เซิร์ฟเวอร์...",
    savingDataError: "มีความผิดพลาดเกิดขึ้นส่งผลให้ไม่สามารถบันทึกผลได้",
    savingDataSuccess: "บันทึกสำเร็จแล้ว",
    saveAgainButton: "รบกวนลองอีกครั้ง",
    timerMin: "นาที",
    timerSec: "วินาที",
    timerSpentAll: "คุณใช้เวลา {0} บนหน้านี้และ {1} รวมทั้งหมด",
    timerSpentPage: "คุณใช้เวลา {0} บนหน้านี้",
    timerSpentSurvey: "คุณใช้เวลา {0} รวมทั้งหมด",
    timerLimitAll: "คุณใช้เวลา {0} ของ {1} บนหน้านี้และ {2} ของ {3} รวมทั้งหมด",
    timerLimitPage: "คุณใช้เวลา {0} ของ {1} บนหน้านี้",
    timerLimitSurvey: "คุณใช้เวลา {0} ของ {1} รวมทั้งหมด",
    clearCaption: "เคลียร์",
    signaturePlaceHolder: "ลงชื่อที่นี่",
    chooseFileCaption: "เลือกไฟล์",
    takePhotoCaption: "ถ่ายรูป",
    photoPlaceholder: "คลิกปุ่มด้านล่างเพื่อถ่ายภาพโดยใช้กล้อง",
    fileOrPhotoPlaceholder: "ลากและวางหรือเลือกไฟล์ที่จะอัปโหลดหรือถ่ายภาพโดยใช้กล้อง",
    replaceFileCaption: "แทนที่ไฟล์",
    removeFileCaption: "นำไฟล์นี้ออก",
    booleanCheckedLabel: "ใช่",
    booleanUncheckedLabel: "ไม่ใช่",
    confirmRemoveFile: "คุณแน่ใจที่จะนำไฟล์นี้ออกใช่หรือไม่: {0}?",
    confirmRemoveAllFiles: "คุณแน่ใจที่จะนำไฟล์ทั้งหมดออกใช่หรือไม่",
    questionTitlePatternText: "ชื่อคำถาม",
    modalCancelButtonText: "ยกเลิก",
    modalApplyButtonText: "ใช้",
    filterStringPlaceholder: "พิมพ์เพื่อค้นหา...",
    emptyMessage: "ไม่มีข้อมูลที่จะแสดง",
    noEntriesText: "ยังไม่มีรายการ\nคลิกปุ่มด้านล่างเพื่อเพิ่มรายการใหม่",
    noEntriesReadonlyText: "ไม่มีรายการ",
    more: "อีก",
    tagboxDoneButtonCaption: "ตกลง, ได้",
    selectToRankEmptyRankedAreaText: "ตัวเลือกทั้งหมดจะถูกจัดอันดับ",
    selectToRankEmptyUnrankedAreaText: "ลากและวางตัวเลือกที่นี่เพื่อจัดอันดับ"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["th"] = thaiStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["th"] = "ไทย";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} of {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "แผง {panelIndex}"
// ratingOptionsCaption: "Select..." => "เลือก   "
// minError: "The value should not be less than {0}" => "ค่าไม่ควรน้อยกว่า {0}"
// maxError: "The value should not be greater than {0}" => "ค่าไม่ควรเกิน{0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "ลากและวางไฟล์ที่นี่หรือคลิกปุ่มด้านล่างและเลือกไฟล์ที่จะอัปโหลด"
// emptyRowsText: "There are no rows." => "ไม่มีแถว"
// multipletext_itemname: "text" => "ข้อความ"
// signaturePlaceHolder: "Sign here" => "ลงชื่อที่นี่"
// modalCancelButtonText: "Cancel" => "ยกเลิก"
// modalApplyButtonText: "Apply" => "ใช้"
// filterStringPlaceholder: "Type to search..." => "พิมพ์เพื่อค้นหา..."
// emptyMessage: "No data to display" => "ไม่มีข้อมูลที่จะแสดง"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "ยังไม่มีรายการ\nคลิกปุ่มด้านล่างเพื่อเพิ่มรายการใหม่"
// noEntriesReadonlyText: "There are no entries." => "ไม่มีรายการ"
// more: "More" => "อีก"
// tagboxDoneButtonCaption: "OK" => "ตกลง, ได้"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "ตัวเลือกทั้งหมดจะถูกจัดอันดับ"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "ลากและวางตัวเลือกที่นี่เพื่อจัดอันดับ"// takePhotoCaption: "Take Photo" => "ถ่ายรูป"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "คลิกปุ่มด้านล่างเพื่อถ่ายภาพโดยใช้กล้อง"
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "ลากและวางหรือเลือกไฟล์ที่จะอัปโหลดหรือถ่ายภาพโดยใช้กล้อง"
// replaceFileCaption: "Replace file" => "แทนที่ไฟล์"


/***/ }),

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

/***/ "./src/localization/turkish.ts":
/*!*************************************!*\
  !*** ./src/localization/turkish.ts ***!
  \*************************************/
/*! exports provided: turkishSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turkishSurveyStrings", function() { return turkishSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var turkishSurveyStrings = {
    pagePrevText: "Önceki",
    pageNextText: "Sonraki",
    completeText: "Tamamla",
    previewText: "Önizleme",
    editText: "Düzenle",
    startSurveyText: "Başlat",
    otherItemText: "Diğer (açıklayınız)",
    noneItemText: "Hiçbiri",
    selectAllItemText: "Tümünü Seç",
    progressText: "Sayfa {0}/{1}",
    indexText: "{0}/{1}",
    panelDynamicProgressText: "{0}/{1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "{0}/{1} soru yanıtlandı",
    emptySurvey: "Ankette görüntülenecek sayfa ya da soru mevcut değil.",
    completingSurvey: "Anketi tamamladığınız için teşekkür ederiz",
    completingSurveyBefore: "Kayıtlarımız bu anketi zaten tamamladığınızı gösteriyor.",
    loadingSurvey: "Anket Yükleniyor...",
    placeholder: "Seçiniz...",
    ratingOptionsCaption: "Seçiniz...",
    value: "değer",
    requiredError: "Lütfen soruya cevap verin.",
    requiredErrorInPanel: "Lütfen en az bir soruyu yanıtlayın.",
    requiredInAllRowsError: "Lütfen tüm satırlardaki soruları cevaplayın.",
    numericError: "Değer sayısal olmalıdır.",
    minError: "Değer {0}'den küçük olmamalıdır",
    maxError: "Değer {0}'dan büyük olmamalıdır",
    textMinLength: "Lütfen en az {0} karakter girin.",
    textMaxLength: "Lütfen en fazla {0} karakter girin.",
    textMinMaxLength: "Lütfen {0}’den fazla ve {1}’den az karakter girin.",
    minRowCountError: "Lütfen en az {0} satırı doldurun.",
    minSelectError: "Lütfen en az {0} seçeneği seçin.",
    maxSelectError: "Lütfen en fazla {0} seçeneği seçin.",
    numericMinMax: "'{0}', {1}'e eşit veya daha büyük ve {2}'ye eşit veya daha küçük olmalıdır",
    numericMin: "'{0}' değeri {1} değerine eşit veya büyük olmalıdır",
    numericMax: "'{0}' değeri {1} değerine eşit ya da küçük olmalıdır.",
    invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
    invalidExpression: "İfade: {0} 'true' döndürmelidir.",
    urlRequestError: "İstek '{0}' hatasını döndürdü. {1}",
    urlGetChoicesError: "İstek boş veri döndürdü veya 'path' özelliği yanlış",
    exceedMaxSize: "Dosya boyutu {0} değerini geçemez.",
    otherRequiredError: "Lütfen diğer değerleri girin.",
    uploadingFile: "Dosyanız yükleniyor. Lütfen birkaç saniye bekleyin ve tekrar deneyin.",
    loadingFile: "Yükleniyor...",
    chooseFile: "Dosyaları seçin...",
    noFileChosen: "Dosya seçili değil",
    filePlaceholder: "Buraya bir dosya bırakın veya dosyayı yüklemek için aşağıdaki düğmeyi tıklayın.",
    confirmDelete: "Kaydı silmek istiyor musunuz?",
    keyDuplicationError: "Bu değer benzersiz olmalıdır.",
    addColumn: "Sütun Ekle",
    addRow: "Satır Ekle",
    removeRow: "Kaldır",
    emptyRowsText: "Satır yok.",
    addPanel: "Yeni ekle",
    removePanel: "Kaldır",
    choices_Item: "öğe",
    matrix_column: "Sütun",
    matrix_row: "Satır",
    multipletext_itemname: "metin",
    savingData: "Sonuçlar sunucuya kaydediliyor...",
    savingDataError: "Bir hata oluştu ve sonuçlar kaydedilemedi.",
    savingDataSuccess: "Sonuçlar başarıyla kaydedildi!",
    saveAgainButton: "Tekrar deneyin",
    timerMin: "dakika",
    timerSec: "saniye",
    timerSpentAll: "Bu sayfada {0} ve toplamda {1} harcadınız.",
    timerSpentPage: "Bu sayfaya {0} harcadınız.",
    timerSpentSurvey: "Toplamda {0} harcadınız.",
    timerLimitAll: "Bu sayfaya {0}/{1} ve toplamda {2}/{3} harcadınız.",
    timerLimitPage: "Bu sayfaya {0}/{1} harcadınız.",
    timerLimitSurvey: "Toplamda {0}/{1} harcadınız.",
    clearCaption: "Temizle",
    signaturePlaceHolder: "Burayı imzalayın",
    chooseFileCaption: "Dosya seçin",
    takePhotoCaption: "Fotoğraf Çekin",
    photoPlaceholder: "Kamerayı kullanarak fotoğraf çekmek için aşağıdaki düğmeyi tıklayın.",
    fileOrPhotoPlaceholder: "Kamerayı kullanarak fotoğraf yüklemek veya fotoğraf çekmek için bir dosyayı sürükleyip bırakın veya seçin.",
    replaceFileCaption: "Dosyayı değiştir",
    removeFileCaption: "Bu dosyayı kaldır",
    booleanCheckedLabel: "Evet",
    booleanUncheckedLabel: "Hayır",
    confirmRemoveFile: "Bu dosyayı kaldırmak istediğinizden emin misiniz: {0}?",
    confirmRemoveAllFiles: "Tüm dosyaları kaldırmak istediğinizden emin misiniz?",
    questionTitlePatternText: "Soru Başlığı",
    modalCancelButtonText: "İptal",
    modalApplyButtonText: "Uygula",
    filterStringPlaceholder: "Aramak için yazın...",
    emptyMessage: "Görüntülenecek veri yok",
    noEntriesText: "Henüz giriş yok.\nYeni bir giriş eklemek için aşağıdaki düğmeyi tıklayın.",
    noEntriesReadonlyText: "Giriş yok.",
    more: "Daha fazla",
    tagboxDoneButtonCaption: "TAMAM",
    selectToRankEmptyRankedAreaText: "Tüm seçenekler sıralanmıştır",
    selectToRankEmptyUnrankedAreaText: "Seçimleri sıralamak için buraya sürükleyip bırakın"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["tr"] = turkishSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["tr"] = "türkçe";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// takePhotoCaption: "Take Photo" => "Fotoğraf Çekin"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kamerayı kullanarak fotoğraf çekmek için aşağıdaki düğmeyi tıklayın."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Kamerayı kullanarak fotoğraf yüklemek veya fotoğraf çekmek için bir dosyayı sürükleyip bırakın veya seçin."
// replaceFileCaption: "Replace file" => "Dosyayı değiştir"


/***/ }),

/***/ "./src/localization/ukrainian.ts":
/*!***************************************!*\
  !*** ./src/localization/ukrainian.ts ***!
  \***************************************/
/*! exports provided: ukrainianSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ukrainianSurveyStrings", function() { return ukrainianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var ukrainianSurveyStrings = {
    pagePrevText: "Назад",
    pageNextText: "Далі",
    completeText: "Завершити",
    previewText: "Попередній перегляд",
    editText: "Редагувати",
    startSurveyText: "Почати",
    otherItemText: "Інше (будь ласка, опишіть)",
    noneItemText: "Жоден",
    selectAllItemText: "Вибрати все",
    progressText: "Сторінка {0} з {1}",
    indexText: "{0} {1}",
    panelDynamicProgressText: "Запис {0} із {1}",
    panelDynamicTabTextFormat: "Панель {panelIndex}",
    questionsProgressText: "Відповіли на {0}/{1} питань",
    emptySurvey: "Немає жодного питання.",
    completingSurvey: "Дякуємо Вам за заповнення анкети!",
    completingSurveyBefore: "Ви вже проходили це опитування.",
    loadingSurvey: "Завантаження опитування...",
    placeholder: "Вибрати...",
    ratingOptionsCaption: "Виберіть...",
    value: "значення",
    requiredError: "Будь ласка, дайте відповідь.",
    requiredErrorInPanel: "Будь ласка, дайте відповідь хоча б на одне питання.",
    requiredInAllRowsError: "Будь ласка, дайте відповідь на питання в кожному рядку.",
    numericError: "Відповідь повинна бути числом.",
    minError: "Значення не повинно бути менше {0}",
    maxError: "Значення не повинно бути більше {0}",
    textMinLength: "Будь ласка введіть більше {0} символів.",
    textMaxLength: "Будь ласка введіть менше {0} символів.",
    textMinMaxLength: "Будь ласка введіть більше {0} и менше {1} символів.",
    minRowCountError: "Будь ласка, заповніть не менше {0} рядків.",
    minSelectError: "Будь ласка, виберіть хоча б {0} варіантів.",
    maxSelectError: "Будь ласка, виберіть не більше {0} варіантів.",
    numericMinMax: "'{0}' повинно бути не менше ніж {1}, і не більше ніж {2}",
    numericMin: "'{0}' повинно бути не менше ніж {1}",
    numericMax: "'{0}' повинно бути не більше ніж {1}",
    invalidEmail: "Будь ласка, введіть дійсну адресу електронної пошти.",
    invalidExpression: "Вираз {0} повинен повертати 'true'.",
    urlRequestError: "Запит повернув помилку '{0}'. {1}",
    urlGetChoicesError: "Відповідь на запит повернулась порожньою або властивіть 'path' вказано невірно",
    exceedMaxSize: "Розмір файлу не повинен перевищувати {0}.",
    otherRequiredError: "Будь ласка, введіть дані в поле 'Інше'",
    uploadingFile: "Ваш файл завантажується. Зачекайте декілька секунд і спробуйте знову.",
    loadingFile: "Завантаження...",
    chooseFile: "Виберіть файл(и)...",
    noFileChosen: "Файл не вибрано",
    filePlaceholder: "Перетягніть файл сюди або натисніть кнопку нижче та виберіть файл для завантаження.",
    confirmDelete: "Ви хочете видалити запис?",
    keyDuplicationError: "Це значення повинно бути унікальним.",
    addColumn: "Додати колонку",
    addRow: "Додати рядок",
    removeRow: "Видалити",
    emptyRowsText: "Рядів немає.",
    addPanel: "Додати нову",
    removePanel: "Видалити",
    choices_Item: "Варіант",
    matrix_column: "Колонка",
    matrix_row: "Рядок",
    multipletext_itemname: "Текст",
    savingData: "Результати зберігаються на сервер...",
    savingDataError: "Відбулася помилка, результат не був збережений.",
    savingDataSuccess: "Резвультат успішно збережений!",
    saveAgainButton: "Спробувати знову",
    timerMin: "хв",
    timerSec: "сек",
    timerSpentAll: "Ви витратили {0} на цій сторінці і {1} загалом.",
    timerSpentPage: "Ви витратили {0} на цій сторінці.",
    timerSpentSurvey: "Ви витратили {0} протягом тесту.",
    timerLimitAll: "Ви витратили {0} з {1} на цій сторінці і {2} з {3} для всього тесту.",
    timerLimitPage: "Ви витратили {0} з {1} на цій сторінці.",
    timerLimitSurvey: "Ви витратили {0} з {1} для всього тесту.",
    clearCaption: "Очистити",
    signaturePlaceHolder: "Підпишіться тут",
    chooseFileCaption: "Виберіть файл",
    takePhotoCaption: "Зробити фото",
    photoPlaceholder: "Натисніть кнопку нижче, щоб зробити фото за допомогою камери.",
    fileOrPhotoPlaceholder: "Перетягніть або виберіть файл, щоб завантажити або зробити фотографію за допомогою камери.",
    replaceFileCaption: "Замінити файл",
    removeFileCaption: "Видалити файл",
    booleanCheckedLabel: "Так",
    booleanUncheckedLabel: "Ні",
    confirmRemoveFile: "Ви впевнені, що хочете видалити цей файл: {0}?",
    confirmRemoveAllFiles: "Ви впевнені, що хочете видалити всі файли?",
    questionTitlePatternText: "Назва запитання",
    modalCancelButtonText: "Скасувати",
    modalApplyButtonText: "Застосовувати",
    filterStringPlaceholder: "Введіть для пошуку...",
    emptyMessage: "Немає даних для відображення",
    noEntriesText: "Записів поки немає.\nНатисніть кнопку нижче, щоб додати новий запис.",
    noEntriesReadonlyText: "Записів немає.",
    more: "Більше",
    tagboxDoneButtonCaption: "ГАРАЗД",
    selectToRankEmptyRankedAreaText: "Всі варіанти ранжуються",
    selectToRankEmptyUnrankedAreaText: "Перетягніть варіанти тут, щоб оцінити їх"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["ua"] = ukrainianSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["ua"] = "українська";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Панель {panelIndex}"
// ratingOptionsCaption: "Select..." => "Виберіть..."
// minError: "The value should not be less than {0}" => "Значення не повинно бути менше {0}"
// maxError: "The value should not be greater than {0}" => "Значення не повинно бути більше {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Перетягніть файл сюди або натисніть кнопку нижче та виберіть файл для завантаження."
// emptyRowsText: "There are no rows." => "Рядів немає."
// multipletext_itemname: "text" => "Текст"
// signaturePlaceHolder: "Sign here" => "Підпишіться тут"
// modalCancelButtonText: "Cancel" => "Скасувати"
// modalApplyButtonText: "Apply" => "Застосовувати"
// filterStringPlaceholder: "Type to search..." => "Введіть для пошуку..."
// emptyMessage: "No data to display" => "Немає даних для відображення"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Записів поки немає.\nНатисніть кнопку нижче, щоб додати новий запис."
// noEntriesReadonlyText: "There are no entries." => "Записів немає."
// more: "More" => "Більше"
// tagboxDoneButtonCaption: "OK" => "ГАРАЗД"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Всі варіанти ранжуються"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Перетягніть варіанти тут, щоб оцінити їх"// takePhotoCaption: "Take Photo" => "Зробити фото"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Натисніть кнопку нижче, щоб зробити фото за допомогою камери."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Перетягніть або виберіть файл, щоб завантажити або зробити фотографію за допомогою камери."
// replaceFileCaption: "Replace file" => "Замінити файл"


/***/ }),

/***/ "./src/localization/vietnamese.ts":
/*!****************************************!*\
  !*** ./src/localization/vietnamese.ts ***!
  \****************************************/
/*! exports provided: vietnameseSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vietnameseSurveyStrings", function() { return vietnameseSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var vietnameseSurveyStrings = {
    pagePrevText: "Trở về",
    pageNextText: "Tiếp theo",
    completeText: "Hoàn thành",
    previewText: "Xem trước",
    editText: "Chỉnh sửa",
    startSurveyText: "Bắt đầu",
    otherItemText: "Khác (mô tả)",
    noneItemText: "Trống",
    selectAllItemText: "Chọn tất cả",
    progressText: "Trang {0} / {1}",
    indexText: "{0} của {1}",
    panelDynamicProgressText: "Dòng {0} / {1}",
    panelDynamicTabTextFormat: "Bảng điều khiển {panelIndex}",
    questionsProgressText: "Đã trả lời {0}/{1} câu hỏi",
    emptySurvey: "Không có trang hoặc câu hỏi nào được hiển thị trong cuộc khảo sát này.",
    completingSurvey: "Cảm ơn đã hoàn thành khảo sát!",
    completingSurveyBefore: "Hồ sơ chúng tôi cho thấy rằng bạn đã hoàn thành cuộc khảo sát này.",
    loadingSurvey: "Đang tải khảo sát...",
    placeholder: "Chọn...",
    ratingOptionsCaption: "Lựa...",
    value: "Giá trị",
    requiredError: "Vui lòng trả lời câu hỏi.",
    requiredErrorInPanel: "Vui lòng trả lời ít nhất một câu hỏi.",
    requiredInAllRowsError: "Vui lòng trả lời các câu hỏi trên tất cả các dòng.",
    numericError: "Giá trị nên là kiểu số.",
    minError: "Giá trị không được nhỏ hơn {0}",
    maxError: "Giá trị không được lớn hơn {0}",
    textMinLength: "Vui lòng nhập ít nhất {0} kí tự.",
    textMaxLength: "Vui lòng nhập ít hơn {0} kí tự.",
    textMinMaxLength: "Vui lòng nhập nhiều hơn {0} hoặc ít hơn {1} kí tự.",
    minRowCountError: "Vui lòng nhập ít nhất {0} dòng.",
    minSelectError: "Vui lòng chọn ít nhất {0} loại.",
    maxSelectError: "Vui lòng không chọn nhiều hơn {0} loại.",
    numericMinMax: "Giá trị '{0}' nên bằng hoặc lớn hơn {1} và bằng hoặc nhỏ hơn {2}",
    numericMin: "Giá trị '{0}' nên bằng hoặc lớn hơn {1}",
    numericMax: "Giá trị '{0}' nên bằng hoặc nhỏ hơn {1}",
    invalidEmail: "Vui lòng điền địa chỉ email hợp lệ.",
    invalidExpression: "Biểu thức: {0} nên trả về 'true'.",
    urlRequestError: "Yêu cầu trả về lỗi '{0}'. {1}",
    urlGetChoicesError: "Yêu cầu trả về dữ liệu trống hoặc thuộc tính 'path' không đúng",
    exceedMaxSize: "Kích thước tập tin không nên vượt quá {0}.",
    otherRequiredError: "Vui lòng điền giá trị khác.",
    uploadingFile: "Tập tin đang được tải lên. Vui lòng chờ một lúc và thử lại.",
    loadingFile: "Đang tải...",
    chooseFile: "Chọn các tập tin...",
    noFileChosen: "Không có tập tin nào được chọn",
    filePlaceholder: "Kéo và thả tệp vào đây hoặc nhấp vào nút bên dưới và chọn tệp để tải lên.",
    confirmDelete: "Bạn muốn xóa dòng này?",
    keyDuplicationError: "Giá trị này không nên bị trùng lặp.",
    addColumn: "Thêm cột",
    addRow: "Thêm dòng",
    removeRow: "Xóa",
    emptyRowsText: "Không có hàng.",
    addPanel: "Thêm mới",
    removePanel: "Xóa",
    choices_Item: "mục",
    matrix_column: "Cột",
    matrix_row: "Dòng",
    multipletext_itemname: "Nhắn tin",
    savingData: "Kết quả đang lưu lại trên hệ thống...",
    savingDataError: "Có lỗi xảy ra và chúng ta không thể lưu kết quả.",
    savingDataSuccess: "Kết quả đã được lưu thành công!",
    saveAgainButton: "Thử lại",
    timerMin: "phút",
    timerSec: "giây",
    timerSpentAll: "Bạn đã sử dụng {0} trên trang này và {1} trên toàn bộ.",
    timerSpentPage: "Bạn đã sử dụng {0} trên trang.",
    timerSpentSurvey: "Bạn đã sử dụng {0} trên toàn bộ.",
    timerLimitAll: "Bạn đã sử dụng {0} / {1} trên trang này và {2} / {3} trên toàn bộ.",
    timerLimitPage: "Bạn đã sử dụng {0} / {1} trên trang này.",
    timerLimitSurvey: "Bạn đã sử dụng {0} / {1} trên toàn bộ.",
    clearCaption: "Xóa",
    signaturePlaceHolder: "Ký tên tại đây",
    chooseFileCaption: "Chọn tập tin",
    takePhotoCaption: "Chụp ảnh",
    photoPlaceholder: "Nhấp vào nút bên dưới để chụp ảnh bằng máy ảnh.",
    fileOrPhotoPlaceholder: "Kéo và thả hoặc chọn tệp để tải lên hoặc chụp ảnh bằng máy ảnh.",
    replaceFileCaption: "Thay thế tập tin",
    removeFileCaption: "Xóa tập tin",
    booleanCheckedLabel: "Có",
    booleanUncheckedLabel: "Không",
    confirmRemoveFile: "Bạn có chắc chắn muốn xóa tập tin này: {0}?",
    confirmRemoveAllFiles: "Bạn có chắc chắn muốn xóa toàn bộ tập tin?",
    questionTitlePatternText: "Tiêu đề câu hỏi",
    modalCancelButtonText: "Hủy",
    modalApplyButtonText: "Áp dụng",
    filterStringPlaceholder: "Nhập để tìm kiếm...",
    emptyMessage: "Không có dữ liệu để hiển thị",
    noEntriesText: "Chưa có mục nào.\nNhấp vào nút bên dưới để thêm mục nhập mới.",
    noEntriesReadonlyText: "Không có mục.",
    more: "Nhiều hơn",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Tất cả các lựa chọn được xếp hạng",
    selectToRankEmptyUnrankedAreaText: "Kéo và thả các lựa chọn vào đây để xếp hạng chúng"
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["vi"] = vietnameseSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["vi"] = "Việt Nam";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} của {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Bảng điều khiển {panelIndex}"
// ratingOptionsCaption: "Select..." => "Lựa..."
// minError: "The value should not be less than {0}" => "Giá trị không được nhỏ hơn {0}"
// maxError: "The value should not be greater than {0}" => "Giá trị không được lớn hơn {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Kéo và thả tệp vào đây hoặc nhấp vào nút bên dưới và chọn tệp để tải lên."
// emptyRowsText: "There are no rows." => "Không có hàng."
// multipletext_itemname: "text" => "Nhắn tin"
// signaturePlaceHolder: "Sign here" => "Ký tên tại đây"
// modalCancelButtonText: "Cancel" => "Hủy"
// modalApplyButtonText: "Apply" => "Áp dụng"
// filterStringPlaceholder: "Type to search..." => "Nhập để tìm kiếm..."
// emptyMessage: "No data to display" => "Không có dữ liệu để hiển thị"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Chưa có mục nào.\nNhấp vào nút bên dưới để thêm mục nhập mới."
// noEntriesReadonlyText: "There are no entries." => "Không có mục."
// more: "More" => "Nhiều hơn"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Tất cả các lựa chọn được xếp hạng"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Kéo và thả các lựa chọn vào đây để xếp hạng chúng"// takePhotoCaption: "Take Photo" => "Chụp ảnh"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Nhấp vào nút bên dưới để chụp ảnh bằng máy ảnh."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Kéo và thả hoặc chọn tệp để tải lên hoặc chụp ảnh bằng máy ảnh."
// replaceFileCaption: "Replace file" => "Thay thế tập tin"


/***/ }),

/***/ "./src/localization/welsh.ts":
/*!***********************************!*\
  !*** ./src/localization/welsh.ts ***!
  \***********************************/
/*! exports provided: welshSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "welshSurveyStrings", function() { return welshSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var welshSurveyStrings = {
    pagePrevText: "Blaenorol",
    pageNextText: "Nesaf",
    completeText: "Cwblhau",
    previewText: "Rhagolwg",
    editText: "Golygu",
    startSurveyText: "Dechrau",
    otherItemText: "Arall (disgrifiwch)",
    noneItemText: "Dim",
    selectAllItemText: "Dewis y Cyfan ",
    progressText: "Tudalen {0} o {1}",
    indexText: "{0} o {1}",
    panelDynamicProgressText: "Cofnod {0} o {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Wedi ateb {0}/{1} cwestiwn",
    emptySurvey: "Does dim modd gweld tudalen na chwestiwn yn yr arolwg.",
    completingSurvey: "Diolch am lenwi’r holiadur!",
    completingSurveyBefore: "Rydych chi wedi llenwi’r arolwg hwn yn barod yn ôl ein cofnodion.",
    loadingSurvey: "Wrthi’n Llwytho’r Arolwg...",
    placeholder: "Dewiswch...",
    ratingOptionsCaption: "Dewis...",
    value: "gwerth",
    requiredError: "Atebwch y cwestiwn.",
    requiredErrorInPanel: "Atebwch o leiaf un cwestiwn.",
    requiredInAllRowsError: "Atebwch y cwestiynau ym mhob rhes.",
    numericError: "Dylai’r gwerth fod yn rhif.",
    minError: "Ni ddylai'r gwerth fod yn llai na {0}",
    maxError: "Ni ddylai'r gwerth fod yn fwy na {0}",
    textMinLength: "Rhowch o leiaf {0} nod.",
    textMaxLength: "Rhowch lai na {0} nod.",
    textMinMaxLength: "Rhowch o leiaf {0} nod ond dim mwy na {1}.",
    minRowCountError: "Llenwch o leiaf {0} rhes.",
    minSelectError: "Dewiswch o leiaf {0} amrywiolyn.",
    maxSelectError: "Peidiwch â dewis mwy na {0} amrywiolyn.",
    numericMinMax: "Dylai’r '{0}' fod yr un fath â {1} neu’n fwy, a’r fath â {2} neu’n llai",
    numericMin: "Dylai’r '{0}' fod yr un fath â {1} neu’n fwy",
    numericMax: "Dylai’r '{0}' fod yr un fath â {1} neu’n llai",
    invalidEmail: "Rhowch gyfeiriad e-bost dilys.",
    invalidExpression: "Dylai’r mynegiad {0} arwain at 'true'.",
    urlRequestError: "Roedd y cais wedi arwain at y gwall '{0}'. {1}",
    urlGetChoicesError: "Roedd y cais wedi arwain at ddata gwag neu mae priodwedd y ‘path’ yn anghywir ",
    exceedMaxSize: "Ddylai’r ffeil ddim bod yn fwy na {0}.",
    otherRequiredError: "Rhowch y gwerth arall.",
    uploadingFile: "Mae eich ffeil wrthi’n llwytho i fyny. Arhoswch ychydig o eiliadau a rhoi cynnig arall arni.",
    loadingFile: "Wrthi’n llwytho...",
    chooseFile: "Dewiswch ffeil(iau)...",
    noFileChosen: "Heb ddewis ffeil ",
    filePlaceholder: "Llusgwch a gollwng ffeil yma neu cliciwch y botwm isod a dewiswch ffeil i'w lanlwytho.",
    confirmDelete: "Ydych chi am ddileu’r cofnod?",
    keyDuplicationError: "Dylai’r gwerth hwn fod yn unigryw.",
    addColumn: "Ychwanegu colofn ",
    addRow: "Ychwanegu rhes",
    removeRow: "Tynnu",
    emptyRowsText: "Nid oes unrhyw ffraeau.",
    addPanel: "Ychwanegu o’r newydd",
    removePanel: "Tynnu",
    choices_Item: "eitem",
    matrix_column: "Colofn",
    matrix_row: "Rhes",
    multipletext_itemname: "Testun",
    savingData: "Mae’r canlyniadau’n cael eu cadw ar y gweinydd...",
    savingDataError: "Roedd gwall a doedd dim modd cadw’r canlyniadau.",
    savingDataSuccess: "Wedi llwyddo i gadw’r canlyniadau!",
    saveAgainButton: "Rhowch gynnig arall arni",
    timerMin: "mun",
    timerSec: "eil",
    timerSpentAll: "Rydych chi wedi treulio {0} ar y dudalen hon a {1} gyda’i gilydd.",
    timerSpentPage: "Rydych chi wedi treulio {0} ar y dudalen hon.",
    timerSpentSurvey: "Rydych chi wedi treulio {0} gyda’i gilydd.",
    timerLimitAll: "Rydych chi wedi treulio {0} o {1} ar y dudalen hon a {2} o {3} gyda’i gilydd.",
    timerLimitPage: "Rydych chi wedi treulio {0} o {1} ar y dudalen hon.",
    timerLimitSurvey: "Rydych chi wedi treulio {0} o {1} gyda’i gilydd.",
    clearCaption: "Clirio",
    signaturePlaceHolder: "Arwydd yma",
    chooseFileCaption: "Dewiswch ffeil ",
    takePhotoCaption: "Tynnu Llun",
    photoPlaceholder: "Cliciwch y botwm isod i dynnu llun gan ddefnyddio'r camera.",
    fileOrPhotoPlaceholder: "Llusgwch a gollwng neu dewiswch ffeil i lanlwytho neu dynnu llun gan ddefnyddio'r camera.",
    replaceFileCaption: "Amnewid ffeil",
    removeFileCaption: "Tynnu’r ffeil hon ",
    booleanCheckedLabel: "Iawn",
    booleanUncheckedLabel: "Na",
    confirmRemoveFile: "Ydych chi’n siŵr eich bod am dynnu’r ffeil hon: {0}?",
    confirmRemoveAllFiles: "Ydych chi’n siŵr eich bod am dynnu pob ffeil?",
    questionTitlePatternText: "Teitl y Cwestiwn ",
    modalCancelButtonText: "Canslo",
    modalApplyButtonText: "Cynnig",
    filterStringPlaceholder: "Teipiwch i chwilio...",
    emptyMessage: "Dim data i'w arddangos",
    noEntriesText: "Nid oes unrhyw gofnodion hyd yn hyn.\nCliciwch y botwm isod i ychwanegu cofnod newydd.",
    noEntriesReadonlyText: "Nid oes unrhyw gofnodion.",
    more: "Rhagor",
    tagboxDoneButtonCaption: "OCÊ",
    selectToRankEmptyRankedAreaText: "Mae'r holl ddewisiadau yn cael eu rhestru",
    selectToRankEmptyUnrankedAreaText: "Dewisiadau llusgo a gollwng yma i'w graddio"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["cy"] = welshSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["cy"] = "cymraeg";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} o {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Dewis..."
// minError: "The value should not be less than {0}" => "Ni ddylai'r gwerth fod yn llai na {0}"
// maxError: "The value should not be greater than {0}" => "Ni ddylai'r gwerth fod yn fwy na {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Llusgwch a gollwng ffeil yma neu cliciwch y botwm isod a dewiswch ffeil i'w lanlwytho."
// emptyRowsText: "There are no rows." => "Nid oes unrhyw ffraeau."
// multipletext_itemname: "text" => "Testun"
// signaturePlaceHolder: "Sign here" => "Arwydd yma"
// modalCancelButtonText: "Cancel" => "Canslo"
// modalApplyButtonText: "Apply" => "Cynnig"
// filterStringPlaceholder: "Type to search..." => "Teipiwch i chwilio..."
// emptyMessage: "No data to display" => "Dim data i'w arddangos"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Nid oes unrhyw gofnodion hyd yn hyn.\nCliciwch y botwm isod i ychwanegu cofnod newydd."
// noEntriesReadonlyText: "There are no entries." => "Nid oes unrhyw gofnodion."
// more: "More" => "Rhagor"
// tagboxDoneButtonCaption: "OK" => "OCÊ"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Mae'r holl ddewisiadau yn cael eu rhestru"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Dewisiadau llusgo a gollwng yma i'w graddio"// takePhotoCaption: "Take Photo" => "Tynnu Llun"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Cliciwch y botwm isod i dynnu llun gan ddefnyddio'r camera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Llusgwch a gollwng neu dewiswch ffeil i lanlwytho neu dynnu llun gan ddefnyddio'r camera."
// replaceFileCaption: "Replace file" => "Amnewid ffeil"


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
//# sourceMappingURL=index.js.map