/*!
 * surveyjs - SurveyJS Dashboard library v1.9.116
 * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyAnalyticsDatatables", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["SurveyAnalyticsDatatables"] = factory(require("survey-core"));
	else
		root["SurveyAnalyticsDatatables"] = factory(root["Survey"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_survey_core__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/datatables.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/svgbundle.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/svgbundle.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg style=\"display:none;\"><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-detail\"><circle cx=\"1.5\" cy=\"8.5\" r=\"1.5\"></circle><circle cx=\"7.5\" cy=\"8.5\" r=\"1.5\"></circle><circle cx=\"13.5\" cy=\"8.5\" r=\"1.5\"></circle></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-drag\"><path d=\"M13 5l-1 1 1 1H9V3l1 1 1-1-3-3-3 3 1 1 1-1v4H3l1-1-1-1-3 3 3 3 1-1-1-1h4v4l-1-1-1 1 3 3 3-3-1-1-1 1V9h4l-1 1 1 1 3-3z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-hide\"><path d=\"M12.79 4.2L16 1l-1-1-3.32 3.32C10.57 2.55 9.32 2 8 2 3.63 2 0 7.97 0 7.97s1.27 2.1 3.21 3.82l-3.23 3.23.98.98 3.35-3.34C5.41 13.44 6.67 14 8 14c4.37 0 8-6 8-6s-1.27-2.09-3.21-3.8zM2 7.97c1.07-1.47 3.61-4 6-4 .8 0 1.6.27 2.35.68l-.78.78c-.46-.29-.99-.46-1.57-.46-1.66 0-3 1.34-3 3 0 .58.17 1.11.46 1.57l-.97.97A13.38 13.38 0 0 1 2 7.97zm6 4c-.8 0-1.59-.27-2.33-.67l.78-.77c.45.27.98.44 1.55.44 1.66 0 3-1.34 3-3 0-.57-.17-1.09-.44-1.55l.98-.98c1.11.87 2.01 1.91 2.46 2.52-1.07 1.48-3.61 4.01-6 4.01z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makeprivate\"><circle cx=\"8\" cy=\"4\" r=\"3\"></circle><path d=\"M8 8c-3.31 0-6 2.73-6 4.67S5.27 15 8 15s6-.4 6-2.33S11.31 8 8 8z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makepublic\"><circle cx=\"6\" cy=\"5\" r=\"3\"></circle><path d=\"M10 5c0 .34-.06.67-.14.99.05 0 .09.01.14.01 1.66 0 3-1.34 3-3s-1.34-3-3-3C8.97 0 8.07.52 7.53 1.3 8.98 1.91 10 3.33 10 5zM6 9c-3.31 0-6 2.73-6 4.67S3.27 16 6 16s6-.4 6-2.33S9.31 9 6 9zM10 7c-.19 0-.38.01-.57.03a4.14 4.14 0 0 1-1.37 1.39c3 .83 5.23 3.31 5.42 5.28 1.44-.31 2.52-.92 2.52-2.03C16 9.74 13.31 7 10 7z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-movetodetails\"><circle cx=\"1.5\" cy=\"14.5\" r=\"1.5\"></circle><circle cx=\"7.5\" cy=\"14.5\" r=\"1.5\"></circle><circle cx=\"13.5\" cy=\"14.5\" r=\"1.5\"></circle><path d=\"M12 1h3v9h-3zM2.02 7.02L1 6 0 7l3 3 3-3-1-1-.94.94C4.33 4.73 6.21 3 8.5 3c.17 0 .33.03.5.05V1.03C8.83 1.01 8.67 1 8.5 1 5.08 1 2.27 3.66 2.02 7.02z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-noncommercial\"><path d=\"M8 0L0 15h16L8 0zm1 13H7v-2h2v2zm-2-3V5h2v5H7z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-sorting\"><path d=\"M8 3l2 2 1-1-3-3-3 3 1 1zM8 13l-2-2-1 1 3 3 3-3-1-1z\"></path></symbol></svg>";

/***/ }),

/***/ "./src/analytics-localization/arabic.ts":
/*!**********************************************!*\
  !*** ./src/analytics-localization/arabic.ts ***!
  \**********************************************/
/*! exports provided: arabicStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arabicStrings", function() { return arabicStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var arabicStrings = {
    groupButton: "زرار المجموعة",
    ungroupButton: "تم التحديث من خلالى",
    selectButton: "اختر",
    hideColumn: "اخفاء العمود",
    showColumn: "اظهار",
    makePrivateColumn: "أجعل العمود خاص",
    makePublicColumn: "أجعل العمود عام",
    moveToDetail: "انتقل إلى التفاصيل",
    showAsColumn: "إظهار كعمود",
    filterPlaceholder: "بحث...",
    removeRows: "حذف",
    showLabel: "اظهار",
    entriesLabel: "مدخلات",
    visualizer_text: "جداول",
    visualizer_wordcloud: "كلمات",
    visualizer_histogram: "الرسم البياني",
    visualizer_number: "متوسط",
    visualizer_choices: "جدول",
    visualizer_selectBase: "رسم بياني",
    chartType_bar: "شريط",
    chartType_vbar: "شريط عمودي",
    chartType_stackedbar: "شريط مكدس",
    chartType_doughnut: "Doughnut",
    chartType_pie: "Pie",
    chartType_scatter: "Scatter",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bullet",
    hideButton: "اخفاء",
    makePrivateButton: "أجعل خاص",
    makePublicButton: "أجعل عام",
    showButton: "اظهار",
    filter: "ترشح",
    resetFilter: "إعادة تعيين",
    changeLocale: "تغيير اللغة",
    en: "اللغة الانجليزية",
    fr: "اللغه الفرنسية",
    ru: "اللغه الروسية",
    de: "اللغه الانجليزية",
    clearButton: "مسح",
    addElement: "اختر سؤالاً للعرض ...",
    defaultOrder: "الترتيب الافتراضي",
    ascOrder: "تصاعدى",
    descOrder: "تنازلى",
    showMinorColumns: "إظهار الأعمدة الثانوية",
    otherCommentTitle: "بنود وتعليقات أخرى",
    showPercentages: "عرض النسب المئوية",
    hidePercentages: "إخفاء النسب",
    pdfDownloadCaption: "PDF",
    xlsxDownloadCaption: "Excel",
    csvDownloadCaption: "CSV",
    saveDiagramAsPNG: "تنزيل بصيغة png",
    hideEmptyAnswers: "إخفاء الإجابات الفارغة",
    showEmptyAnswers: "إظهار الإجابات الفارغة",
    hideMissingAnswers: "إخفاء الإجابات المفقودة",
    showMissingAnswers: "عرض الإجابات المفقودة",
    missingAnswersLabel: "أجوبة مفقودة",
    noVisualizerForQuestion: "لم يتم العرض بعد",
    noResults: "لا يوجد نتائج للعرض",
    showPerValues: "لكل القيم",
    showPerColumns: "لكل الأعمدة",
    answer: "إجب",
    correctAnswer: "الاجابة الصحيحة: ",
    percent: "النسبه المئويه",
    responses: "الاستجابات",
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["ar"] = arabicStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["ar"] = "Arabic";


/***/ }),

/***/ "./src/analytics-localization/dutch.ts":
/*!*********************************************!*\
  !*** ./src/analytics-localization/dutch.ts ***!
  \*********************************************/
/*! exports provided: dutchStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dutchStrings", function() { return dutchStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
//Uncomment this line on creating a translation file

var dutchStrings = {
    groupButton: "Groep door mij",
    ungroupButton: "Degroeperen bij mij",
    selectButton: "Selecteer mij",
    hideColumn: "Kolom verbergen",
    showColumn: "Toon kolom",
    makePrivateColumn: "Kolom privé maken",
    makePublicColumn: "Maak de kolom openbaar",
    moveToDetail: "Ga naar Detail",
    showAsColumn: "Weergeven als kolom",
    filterPlaceholder: "Zoeken...",
    removeRows: "Verwijder rijen",
    showLabel: "Tonen",
    entriesLabel: "inzendingen",
    visualizer_text: "Teksten in tabel",
    visualizer_wordcloud: "Wordcloud",
    chartType_bar: "Bar",
    chartType_stackedbar: "Gestapelde Bar",
    chartType_doughnut: "Donut",
    chartType_pie: "Taart",
    chartType_scatter: "Verstrooien",
    chartType_gauge: "Meter",
    chartType_bullet: "Kogel",
    hideButton: "Verbergen",
    makePrivateButton: "Maak prive",
    makePublicButton: "Openbaar maken",
    showButton: "Tonen",
    resetFilter: "Filter resetten",
    changeLocale: "Wijzig de landinstelling",
    clearButton: "Doorzichtig",
    addElement: "Kies een vraag om weer te geven ...",
    defaultOrder: "Standaardvolgorde",
    ascOrder: "Oplopend",
    descOrder: "Aflopend",
    showMinorColumns: "Toon kleine kolommen",
    otherCommentTitle: "Andere items en opmerkingen",
    showPercentages: "Percentages weergeven",
    hidePercentages: "Verberg percentages",
    pdfDownloadCaption: "PDF",
    xlsxDownloadCaption: "Excel",
    csvDownloadCaption: "CSV",
    saveDiagramAsPNG: "Download plot als een png",
    hideEmptyAnswers: "Verberg lege antwoorden",
    showEmptyAnswers: "Toon lege antwoorden",
    "topNValueText-1": "Alle antwoorden",
    "topNValueText5": "Top 5 antwoorden",
    "topNValueText10": "Top 10 antwoorden",
    "topNValueText20": "Top 20 antwoorden",
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["nl"] = dutchStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["nl"] = "Dutch";


/***/ }),

/***/ "./src/analytics-localization/english.ts":
/*!***********************************************!*\
  !*** ./src/analytics-localization/english.ts ***!
  \***********************************************/
/*! exports provided: englishStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "englishStrings", function() { return englishStrings; });
// Uncomment the line below if you create a custom dictionary
// import { localization } from "../localizationManager";
var englishStrings = {
    groupButton: "Group By Me",
    ungroupButton: "Ungroup By Me",
    selectButton: "Select Me",
    hideColumn: "Hide column",
    showColumn: "Show column",
    makePrivateColumn: "Make column private",
    makePublicColumn: "Make column public",
    moveToDetail: "Move to Detail",
    showAsColumn: "Show as Column",
    filterPlaceholder: "Search...",
    removeRows: "Remove rows",
    showLabel: "Show",
    entriesLabel: "entries",
    visualizer_text: "Texts in table",
    visualizer_wordcloud: "Wordcloud",
    visualizer_histogram: "Histogram",
    visualizer_number: "Average",
    visualizer_choices: "Table",
    visualizer_selectBase: "Chart",
    chartType_bar: "Bar",
    chartType_vbar: "Vertical Bar",
    chartType_stackedbar: "Stacked Bar",
    chartType_doughnut: "Doughnut",
    chartType_pie: "Pie",
    chartType_scatter: "Scatter",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bullet",
    hideButton: "Hide",
    makePrivateButton: "Make private",
    makePublicButton: "Make public",
    showButton: "Show",
    filter: "Filter",
    resetFilter: "Reset Filter",
    changeLocale: "Change Locale",
    en: "English",
    fr: "Français",
    ru: "Русский",
    de: "Deutsch",
    clearButton: "Clear",
    addElement: "Choose question to show...",
    defaultOrder: "Default Order",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns",
    otherCommentTitle: "Other items and comments",
    showPercentages: "Show percentages",
    hidePercentages: "Hide percentages",
    pdfDownloadCaption: "PDF",
    xlsxDownloadCaption: "Excel",
    csvDownloadCaption: "CSV",
    saveDiagramAsPNG: "Download plot as a png",
    hideEmptyAnswers: "Hide empty answers",
    showEmptyAnswers: "Show empty answers",
    "topNValueText-1": "All answers",
    "topNValueText5": "Top 5 answers",
    "topNValueText10": "Top 10 answers",
    "topNValueText20": "Top 20 answers",
    hideMissingAnswers: "Hide missing answers",
    showMissingAnswers: "Show missing answers",
    missingAnswersLabel: "Missing answers",
    noVisualizerForQuestion: "This question type is not visualized yet",
    noResults: "There are no results yet",
    showPerValues: "Per Values",
    showPerColumns: "Per Columns",
    answer: "Answer",
    correctAnswer: "Correct answer: ",
    percent: "Percent",
    responses: "Responses"
};
// Uncomment the lines below if you create a custom dictionary.
// Replace "en" with a custom locale code (for example, "fr" or "de"),
// Replace `englishStrings` with the name of the variable that contains the custom dictionary.
// localization.locales["en"] = englishStrings;
// localization.localeNames["en"] = "English";


/***/ }),

/***/ "./src/analytics-localization/farsi.ts":
/*!*********************************************!*\
  !*** ./src/analytics-localization/farsi.ts ***!
  \*********************************************/
/*! exports provided: farsiStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "farsiStrings", function() { return farsiStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var farsiStrings = {
    groupButton: "گروه بندی با",
    ungroupButton: "حذف گروه",
    selectButton: "انتخاب",
    hideColumn: "مخفی کردن ستون",
    showColumn: "نمایش ستون",
    moveToDetail: "انتقال به جزئیات",
    showAsColumn: "نمایش به عنوان ستون",
    visualizer_text: "متون در جدول",
    visualizer_wordcloud: "ابر کلمات",
    chartType_bar: "میله ای",
    chartType_pie: "دابره ای(pie)",
    chartType_scatter: "پراکندگی(Scatter)",
    chartType_gauge: "عقربه ای",
    chartType_bullet: "Bullet",
    hideButton: "مخفی",
    resetFilter: "بازنشانی فیلترها",
    clearButton: "پاک کردن",
    addElement: "انتخاب سوال برای نمایش..."
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["fa"] = farsiStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["fa"] = "Farsi(Persian)";


/***/ }),

/***/ "./src/analytics-localization/french.ts":
/*!**********************************************!*\
  !*** ./src/analytics-localization/french.ts ***!
  \**********************************************/
/*! exports provided: frenchStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frenchStrings", function() { return frenchStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var frenchStrings = {
    groupButton: "Grouper",
    ungroupButton: "Dissocier",
    selectButton: "Sélectionner",
    hideColumn: "Masquer colonne",
    showColumn: "Afficher colonne",
    makePrivateColumn: "Rendre la colonne privé",
    makePublicColumn: "Rendre la colonne public",
    moveToDetail: "Déplacer vers détails",
    showAsColumn: "Afficher en colonne",
    filterPlaceholder: "Rechercher...",
    removeRows: "Supprimer colonne",
    showLabel: "Afficher",
    entriesLabel: "entrées",
    visualizer_text: "Textes en table",
    visualizer_wordcloud: "Nuages de mots",
    chartType_bar: "Barres",
    chartType_stackedbar: "Barres empilées",
    chartType_doughnut: "Anneau",
    chartType_pie: "Secteurs",
    chartType_scatter: "Nuages de points",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bulles",
    filter: "Filtre",
    hideButton: "Masquer",
    saveDiagramAsPNG: "Sauver en png",
    makePrivateButton: "Rendre privé",
    makePublicButton: "Rendre publique",
    showButton: "Afficher",
    resetFilter: "Rafraichir Filtres",
    clearButton: "Rafraichir",
    addElement: "Choisir la question à afficher...",
    defaultOrder: "Defaut",
    ascOrder: "Ascendant",
    descOrder: "Descendant",
    showMinorColumns: "Afficher les colonnes mineures",
    otherCommentTitle: "Autre élément et commentaires",
    noVisualizerForQuestion: "Ce type de question n'est pas encore visualisé",
    noResults: "Il n'y a pas encore de résultats",
    showPerValues: "Par valeur",
    showPerColumns: "Par colonne",
    answer: "Réponse",
    correctAnswer: "Réponse correcte: ",
    percent: "Pourcentage",
    responses: "Réponses"
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["fr"] = frenchStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["fr"] = "French";


/***/ }),

/***/ "./src/analytics-localization/german.ts":
/*!**********************************************!*\
  !*** ./src/analytics-localization/german.ts ***!
  \**********************************************/
/*! exports provided: germanStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "germanStrings", function() { return germanStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var germanStrings = {
    groupButton: "Gruppieren",
    ungroupButton: "Gruppierung aufheben",
    selectButton: "Mich auswählen",
    hideColumn: "Spalte ausblenden",
    showColumn: "Spalte einblenden",
    makePrivateColumn: "Spalte privat machen",
    makePublicColumn: "Spalte veröffentlichen",
    moveToDetail: "in Details verschieben",
    showAsColumn: "Als Spalte anzeigen",
    filterPlaceholder: "Suche...",
    removeRows: "Zeilen entfernen",
    showLabel: "anzeigen",
    entriesLabel: "Einträge",
    visualizer_text: "Texte in Tabellenform",
    visualizer_wordcloud: "Wordcloud",
    chartType_bar: "Balkendiagramm",
    chartType_stackedbar: "Gestapeltes Balkendiagramm",
    chartType_doughnut: "Donut-Diagramm",
    chartType_pie: "Kreisdiagramm",
    chartType_scatter: "Punktediagramm",
    chartType_gauge: "Pegeldiagramm",
    chartType_bullet: "Aufzählungsdiagramm",
    hideButton: "Ausblenden",
    makePrivateButton: "Privat machen",
    makePublicButton: "Öffentlich machen",
    showButton: "Anzeigen",
    filter: "Filter",
    resetFilter: "Filter zurücksetzen",
    changeLocale: "Lokalisierung ändern",
    clearButton: "Einstellungen löschen",
    addElement: "Wählen Sie eine Frage, um zu zeigen...",
    defaultOrder: "Standardreihenfolge",
    ascOrder: "Aufsteigend",
    descOrder: "Absteigend",
    showMinorColumns: "Kleinere Spalten anzeigen",
    otherCommentTitle: "Andere Punkte und Kommentare",
    showPercentages: "Prozentsätze anzeigen",
    hidePercentages: "Prozentsätze ausblenden",
    pdfDownloadCaption: "PDF",
    xlsxDownloadCaption: "Excel",
    csvDownloadCaption: "CSV",
    saveDiagramAsPNG: "Diagramm als png herunterladen",
    hideEmptyAnswers: "Leere Antworten ausblenden",
    showEmptyAnswers: "Leere Antworten anzeigen",
    "topNValueText-1": "Alle Antworten",
    "topNValueText5": "Top 5 Antworten",
    "topNValueText10": "Top 10 Antworten",
    "topNValueText20": "Top 20 Antworten",
    noVisualizerForQuestion: "Für diesen Fragetyp gibt es noch keine Visualisierung.",
    noResults: "Es liegen noch keine Ergebnisse vor"
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["de"] = germanStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["de"] = "German";


/***/ }),

/***/ "./src/analytics-localization/norwegian.ts":
/*!*************************************************!*\
  !*** ./src/analytics-localization/norwegian.ts ***!
  \*************************************************/
/*! exports provided: norwegianStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "norwegianStrings", function() { return norwegianStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var norwegianStrings = {
    groupButton: "Grupper",
    ungroupButton: "Opphev gruppering",
    selectButton: "Velg",
    hideColumn: "Skjul kolonne",
    showColumn: "Vis kolonne",
    makePrivateColumn: "Gjør kolonne privat",
    makePublicColumn: "Gjør kolonne offentlig",
    moveToDetail: "Flytt til detaljert visning",
    showAsColumn: "Vis som kolonne",
    filterPlaceholder: "Søk...",
    removeRows: "Fjern rader",
    showLabel: "Vis",
    entriesLabel: "oppføringer",
    visualizer_text: "Tabellvisning",
    visualizer_wordcloud: "Ordsky",
    chartType_bar: "Stolpediagram",
    chartType_stackedbar: "Stablet stolpediagram",
    chartType_doughnut: "Hjuldiagram",
    chartType_pie: "Sektordiagram",
    chartType_scatter: "Punktdiagram",
    chartType_gauge: "Målediagram",
    chartType_bullet: "Kulediagram",
    hideButton: "Skjul",
    makePrivateButton: "Gjør privat",
    makePublicButton: "Gjør offentlig",
    showButton: "Vis",
    resetFilter: "Nullstill filter",
    changeLocale: "Bytt språk",
    clearButton: "Tøm",
    addElement: "Velg spørsmål...",
    defaultOrder: "Standard",
    ascOrder: "Stigende",
    descOrder: "Synkende",
    showMinorColumns: "Vis mindre kolonner",
    otherCommentTitle: "Annet og kommentarer",
    showPercentages: "Vis prosenter",
    hidePercentages: "Skjul prosenter",
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["no"] = norwegianStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["no"] = "Norwegian";


/***/ }),

/***/ "./src/analytics-localization/portuguese.ts":
/*!**************************************************!*\
  !*** ./src/analytics-localization/portuguese.ts ***!
  \**************************************************/
/*! exports provided: portugueseStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portugueseStrings", function() { return portugueseStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var portugueseStrings = {
    groupButton: "Agrupar Por Mim",
    ungroupButton: "Desagrupar Por Mim",
    selectButton: "Selecionar",
    hideColumn: "Esconder coluna",
    showColumn: "Mostrar coluna",
    makePrivateColumn: "Tornar coluna privada",
    makePublicColumn: "Tornar coluna pública",
    moveToDetail: "Mover para Detalhes",
    showAsColumn: "Mostrar como Coluna",
    filterPlaceholder: "Pesquisar...",
    removeRows: "Remover linhas",
    showLabel: "Mostrar",
    entriesLabel: "entradas",
    visualizer_text: "Textos em tabela",
    visualizer_wordcloud: "Nuvem de palavras",
    visualizer_histogram: "Histograma",
    visualizer_number: "Média",
    visualizer_choices: "Tabela",
    visualizer_selectBase: "Gráfico",
    chartType_bar: "Barra",
    chartType_vbar: "Barra vertical",
    chartType_stackedbar: "Barra Empilhada",
    chartType_doughnut: "Rosca",
    chartType_pie: "Tarte",
    chartType_scatter: "Lastro",
    chartType_gauge: "Escala",
    chartType_bullet: "Bala",
    hideButton: "Esconder",
    makePrivateButton: "Tornar privado",
    makePublicButton: "Tornar público",
    showButton: "Mostrar",
    filter: "Filtrar",
    resetFilter: "Restaurar Filtro",
    changeLocale: "Mudar Localização",
    en: "Inglês",
    fr: "Francês",
    ru: "Russo",
    de: "Alemão",
    clearButton: "Limpar",
    addElement: "Escolher questão para mostrar...",
    defaultOrder: "Ordenação Padrão",
    ascOrder: "Ascendente",
    descOrder: "Descendente",
    showMinorColumns: "Mostrar colunas menores",
    otherCommentTitle: "Outros itens e comentários",
    showPercentages: "Mostrar percentuais",
    hidePercentages: "Esconder percentuais",
    pdfDownloadCaption: "PDF",
    xlsxDownloadCaption: "Excel",
    csvDownloadCaption: "CSV",
    saveDiagramAsPNG: "Baixar diagrama como PNG",
    hideEmptyAnswers: "Esconder perguntas vazias",
    showEmptyAnswers: "Mostrar perguntas vazias",
    "topNValueText-1": "Todas as respostas",
    "topNValueText5": "Primeiras 5 respostas",
    "topNValueText10": "Primeiras 10 respostas",
    "topNValueText20": "Primeiras 20 respostas",
    hideMissingAnswers: "Ocultar perguntas não respondidas",
    showMissingAnswers: "Mostrar perguntas não respondidas",
    missingAnswersLabel: "Perguntas não respondidas",
    noVisualizerForQuestion: "Este tipo de pergunta ainda não foi visualizada",
    noResults: "Ainda não possui resultados",
    showPerValues: "Por valores",
    showPerColumns: "Por colunas",
    answer: "Resposta",
    correctAnswer: "Resposta correta: ",
    percent: "Percentagem",
    responses: "Respostas"
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["pt"] = portugueseStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["pt"] = "Português";


/***/ }),

/***/ "./src/analytics-localization/russian.ts":
/*!***********************************************!*\
  !*** ./src/analytics-localization/russian.ts ***!
  \***********************************************/
/*! exports provided: russianStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "russianStrings", function() { return russianStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var russianStrings = {
    groupButton: "Group By Me",
    ungroupButton: "Ungroup By Me",
    selectButton: "Select Me",
    hideColumn: "Hide column",
    showColumn: "Show column",
    makePrivateColumn: "Make column private",
    makePublicColumn: "Make column public",
    moveToDetail: "Move to Detail",
    filter: "Фильтр",
    showAsColumn: "Show as Column",
    visualizer_text: "Texts in table",
    visualizer_wordcloud: "Wordcloud",
    chartType_bar: "Bar",
    chartType_stackedbar: "Stacked Bar",
    chartType_doughnut: "Doughnut",
    chartType_pie: "Pie",
    chartType_scatter: "Scatter",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bullet",
    hideButton: "Скрыть",
    showButton: "Показать",
    resetFilter: "Очистить фильтр",
    changeLocale: "Сменить язык",
    clearButton: "Clear",
    addElement: "Choose question to show...",
    defaultOrder: "Default",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns",
    otherCommentTitle: "Другое и комментарии",
    noVisualizerForQuestion: "Этот тип вопроса еще не поддерживается аналитикой",
    noResults: "Результаты отсутствуют"
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["ru"] = russianStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["ru"] = "Russian";


/***/ }),

/***/ "./src/entries/datatables.ts":
/*!***********************************!*\
  !*** ./src/entries/datatables.ts ***!
  \***********************************/
/*! exports provided: localization, surveyStrings, TableEvent, Table, TableRow, DataTables, DatatablesRow, TableExtensions, DocumentHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["surveyStrings"]; });

/* harmony import */ var _analytics_localization_farsi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analytics-localization/farsi */ "./src/analytics-localization/farsi.ts");
/* harmony import */ var _analytics_localization_french__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../analytics-localization/french */ "./src/analytics-localization/french.ts");
/* harmony import */ var _analytics_localization_german__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../analytics-localization/german */ "./src/analytics-localization/german.ts");
/* harmony import */ var _analytics_localization_norwegian__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../analytics-localization/norwegian */ "./src/analytics-localization/norwegian.ts");
/* harmony import */ var _analytics_localization_portuguese__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../analytics-localization/portuguese */ "./src/analytics-localization/portuguese.ts");
/* harmony import */ var _analytics_localization_russian__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../analytics-localization/russian */ "./src/analytics-localization/russian.ts");
/* harmony import */ var _analytics_localization_dutch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../analytics-localization/dutch */ "./src/analytics-localization/dutch.ts");
/* harmony import */ var _analytics_localization_arabic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../analytics-localization/arabic */ "./src/analytics-localization/arabic.ts");
/* harmony import */ var _tables_extensions_rowextensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/extensions/rowextensions */ "./src/tables/extensions/rowextensions.ts");
/* harmony import */ var _tables_extensions_headerextensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tables/extensions/headerextensions */ "./src/tables/extensions/headerextensions.ts");
/* harmony import */ var _tables_extensions_columnextensions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tables/extensions/columnextensions */ "./src/tables/extensions/columnextensions.ts");
/* harmony import */ var _tables_extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tables/extensions/detailsextensions */ "./src/tables/extensions/detailsextensions.ts");
/* harmony import */ var _tables_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tables/table */ "./src/tables/table.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableEvent", function() { return _tables_table__WEBPACK_IMPORTED_MODULE_13__["TableEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _tables_table__WEBPACK_IMPORTED_MODULE_13__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return _tables_table__WEBPACK_IMPORTED_MODULE_13__["TableRow"]; });

/* harmony import */ var _tables_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tables/datatables */ "./src/tables/datatables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return _tables_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatatablesRow", function() { return _tables_datatables__WEBPACK_IMPORTED_MODULE_14__["DatatablesRow"]; });

/* harmony import */ var _tables_extensions_tableextensions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tables/extensions/tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableExtensions", function() { return _tables_extensions_tableextensions__WEBPACK_IMPORTED_MODULE_15__["TableExtensions"]; });

/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_16__["DocumentHelper"]; });


//localization








//extensions










/***/ }),

/***/ "./src/localizationManager.ts":
/*!************************************!*\
  !*** ./src/localizationManager.ts ***!
  \************************************/
/*! exports provided: localization, surveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return localization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return surveyStrings; });
/* harmony import */ var _analytics_localization_english__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics-localization/english */ "./src/analytics-localization/english.ts");

var localization = {
    currentLocaleValue: "",
    defaultLocaleValue: "en",
    locales: {},
    localeNames: {},
    supportedLocales: [],
    get currentLocale() {
        return this.currentLocaleValue === this.defaultLocaleValue
            ? ""
            : this.currentLocaleValue;
    },
    set currentLocale(val) {
        this.currentLocaleValue = val;
    },
    get defaultLocale() {
        return this.defaultLocaleValue;
    },
    set defaultLocale(val) {
        this.defaultLocaleValue = val;
    },
    getString: function (strName) {
        var loc = this.currentLocale
            ? this.locales[this.currentLocale]
            : this.locales[this.defaultLocale];
        if (!loc || !loc[strName])
            loc = this.locales[this.defaultLocale];
        var result = loc[strName];
        if (result === undefined) {
            result = this.locales["en"][strName] || strName;
        }
        return result;
    },
    getLocales: function () {
        var res = [];
        res.push("");
        if (this.supportedLocales && this.supportedLocales.length > 0) {
            for (var i = 0; i < this.supportedLocales.length; i++) {
                res.push(this.supportedLocales[i]);
            }
        }
        else {
            for (var key in this.locales) {
                res.push(key);
            }
        }
        res.sort();
        return res;
    }
};
var surveyStrings = _analytics_localization_english__WEBPACK_IMPORTED_MODULE_0__["englishStrings"];
localization.locales["en"] = _analytics_localization_english__WEBPACK_IMPORTED_MODULE_0__["englishStrings"];
localization.localeNames["en"] = "english";


/***/ }),

/***/ "./src/tables/columnbuilder.ts":
/*!*************************************!*\
  !*** ./src/tables/columnbuilder.ts ***!
  \*************************************/
/*! exports provided: DefaultColumnsBuilder, ColumnsBuilderFactory, MatrixColumnsBuilder, ImageColumnsBuilder, FileColumnsBuilder, MatrixDropdownColumnBuilder, CustomColumnsBuilder, CompositeColumnsBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultColumnsBuilder", function() { return DefaultColumnsBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsBuilderFactory", function() { return ColumnsBuilderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnsBuilder", function() { return MatrixColumnsBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageColumnsBuilder", function() { return ImageColumnsBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileColumnsBuilder", function() { return FileColumnsBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownColumnBuilder", function() { return MatrixDropdownColumnBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomColumnsBuilder", function() { return CustomColumnsBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeColumnsBuilder", function() { return CompositeColumnsBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns */ "./src/tables/columns.ts");


var DefaultColumnsBuilder = /** @class */ (function () {
    function DefaultColumnsBuilder() {
    }
    DefaultColumnsBuilder.prototype.createColumn = function (question, table) {
        return new _columns__WEBPACK_IMPORTED_MODULE_1__["BaseColumn"](question, table);
    };
    DefaultColumnsBuilder.prototype.buildColumnsCore = function (question, table) {
        var columns = [];
        columns.push(this.createColumn(question, table));
        return columns;
    };
    DefaultColumnsBuilder.prototype.buildColumns = function (question, table) {
        var columns = this.buildColumnsCore(question, table);
        if (question.hasComment ||
            (question.hasOther && question["getStoreOthersAsComment"]())) {
            columns.push(new _columns__WEBPACK_IMPORTED_MODULE_1__["CommentColumn"](question, table));
        }
        return columns;
    };
    return DefaultColumnsBuilder;
}());

var ColumnsBuilderFactory = /** @class */ (function () {
    function ColumnsBuilderFactory() {
        this.columnsBuilders = {};
        this.defaultColumnsBuilder = new DefaultColumnsBuilder();
    }
    ColumnsBuilderFactory.prototype.registerBuilderColumn = function (type, columnsBuilder) {
        this.columnsBuilders[type] = columnsBuilder;
    };
    ColumnsBuilderFactory.prototype.getColumnsBuilder = function (type) {
        return this.columnsBuilders[type] || this.defaultColumnsBuilder;
    };
    ColumnsBuilderFactory.Instance = new ColumnsBuilderFactory();
    return ColumnsBuilderFactory;
}());

var MatrixColumnsBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatrixColumnsBuilder, _super);
    function MatrixColumnsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatrixColumnsBuilder.prototype.buildColumnsCore = function (questionBase, table) {
        var question = questionBase;
        var columns = [];
        question.rows.forEach(function (row) {
            columns.push(new _columns__WEBPACK_IMPORTED_MODULE_1__["MatrixColumn"](question, row, table));
        });
        return columns;
    };
    return MatrixColumnsBuilder;
}(DefaultColumnsBuilder));

ColumnsBuilderFactory.Instance.registerBuilderColumn("matrix", new MatrixColumnsBuilder());
var ImageColumnsBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImageColumnsBuilder, _super);
    function ImageColumnsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageColumnsBuilder.prototype.createColumn = function (question, table) {
        return new _columns__WEBPACK_IMPORTED_MODULE_1__["ImageColumn"](question, table);
    };
    return ImageColumnsBuilder;
}(DefaultColumnsBuilder));

ColumnsBuilderFactory.Instance.registerBuilderColumn("signaturepad", new ImageColumnsBuilder());
var FileColumnsBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FileColumnsBuilder, _super);
    function FileColumnsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileColumnsBuilder.prototype.createColumn = function (question, table) {
        return new _columns__WEBPACK_IMPORTED_MODULE_1__["FileColumn"](question, table);
    };
    return FileColumnsBuilder;
}(DefaultColumnsBuilder));

ColumnsBuilderFactory.Instance.registerBuilderColumn("file", new FileColumnsBuilder());
var MatrixDropdownColumnBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatrixDropdownColumnBuilder, _super);
    function MatrixDropdownColumnBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatrixDropdownColumnBuilder.prototype.buildColumns = function (questionBase, table) {
        var question = questionBase;
        var columns = [];
        question.rows.forEach(function (row) {
            question.columns.forEach(function (col) {
                columns.push(new _columns__WEBPACK_IMPORTED_MODULE_1__["MatrixDropdownColumn"](question, row, col, table));
            });
        });
        return columns;
    };
    return MatrixDropdownColumnBuilder;
}(DefaultColumnsBuilder));

ColumnsBuilderFactory.Instance.registerBuilderColumn("matrixdropdown", new MatrixDropdownColumnBuilder());
var CustomColumnsBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CustomColumnsBuilder, _super);
    function CustomColumnsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomColumnsBuilder.prototype.createColumn = function (question, table) {
        return new _columns__WEBPACK_IMPORTED_MODULE_1__["CustomQuestionColumn"](question, table);
    };
    return CustomColumnsBuilder;
}(DefaultColumnsBuilder));

ColumnsBuilderFactory.Instance.registerBuilderColumn("custom", new CustomColumnsBuilder());
var CompositeColumnsBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompositeColumnsBuilder, _super);
    function CompositeColumnsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompositeColumnsBuilder.prototype.createColumn = function (question, table) {
        return new _columns__WEBPACK_IMPORTED_MODULE_1__["CompositeQuestionColumn"](question, table);
    };
    return CompositeColumnsBuilder;
}(DefaultColumnsBuilder));

ColumnsBuilderFactory.Instance.registerBuilderColumn("composite", new CompositeColumnsBuilder());


/***/ }),

/***/ "./src/tables/columns.ts":
/*!*******************************!*\
  !*** ./src/tables/columns.ts ***!
  \*******************************/
/*! exports provided: BaseColumn, DefaultColumn, CommentColumn, MatrixColumn, ImageColumn, FileColumn, MatrixDropdownColumn, CustomQuestionColumn, CompositeQuestionColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseColumn", function() { return BaseColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultColumn", function() { return DefaultColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentColumn", function() { return CommentColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixColumn", function() { return MatrixColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageColumn", function() { return ImageColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileColumn", function() { return FileColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownColumn", function() { return MatrixDropdownColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomQuestionColumn", function() { return CustomQuestionColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeQuestionColumn", function() { return CompositeQuestionColumn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table */ "./src/tables/table.ts");





var BaseColumn = /** @class */ (function () {
    function BaseColumn(question, table) {
        this.question = question;
        this.table = table;
        this.isVisible = true;
        this.isPublic = true;
        this.location = _config__WEBPACK_IMPORTED_MODULE_3__["QuestionLocation"].Column;
        this.dataType = this.getDataType();
    }
    Object.defineProperty(BaseColumn.prototype, "name", {
        get: function () {
            if (!this.nameValue) {
                this.name = this.getName();
            }
            return this.nameValue;
        },
        set: function (val) {
            this.nameValue = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseColumn.prototype, "displayName", {
        get: function () {
            if (!this.displayNameValue) {
                this.displayName = this.getDisplayName();
            }
            return this.displayNameValue;
        },
        set: function (val) {
            this.displayNameValue = val;
        },
        enumerable: false,
        configurable: true
    });
    BaseColumn.prototype.getDisplayName = function () {
        return this.table.useNamesAsTitles
            ? this.question.name
            : (this.question.title || "").trim() || this.question.name;
    };
    BaseColumn.prototype.getName = function () {
        return this.question.name;
    };
    BaseColumn.prototype.getDataType = function () {
        return _config__WEBPACK_IMPORTED_MODULE_3__["ColumnDataType"].Text;
    };
    BaseColumn.prototype.getDisplayValueCore = function (data) {
        return data[this.name];
    };
    BaseColumn.prototype.setupReadyChangedCallback = function (table, question) {
        if (!!question) {
            var onReadyChangedCallback_1 = function (sender, options) {
                if (options.isReady) {
                    table.refresh(!table.isInitTableDataProcessing);
                    sender.onReadyChanged.remove(onReadyChangedCallback_1);
                }
            };
            if (!question.isReady) {
                question.onReadyChanged.add(onReadyChangedCallback_1);
            }
        }
    };
    BaseColumn.prototype.getDisplayValue = function (data, table, options) {
        var displayValue = this.getDisplayValueCore(data);
        var question = this.question;
        if (!!question) {
            if (options.useValuesAsLabels) {
                displayValue = question.value;
            }
            else {
                displayValue = question.displayValue;
            }
        }
        return displayValue;
    };
    BaseColumn.prototype.formatDisplayValue = function (displayValue) {
        return typeof displayValue === "string"
            ? displayValue
            : JSON.stringify(displayValue) || "";
    };
    BaseColumn.prototype.getCellData = function (table, data) {
        var displayValue = this.getDisplayValue(data, table, table.options);
        this.setupReadyChangedCallback(table, this.question);
        return { question: this.question, displayValue: this.formatDisplayValue(displayValue) };
    };
    BaseColumn.prototype.toJSON = function () {
        return {
            name: this.name,
            displayName: this.displayName,
            dataType: this.dataType,
            isVisible: this.isVisible,
            isPublic: this.isPublic,
            location: this.location
        };
    };
    BaseColumn.prototype.fromJSON = function (data) {
        var _this = this;
        Object.keys(data).forEach(function (key) {
            _this[key] = data[key];
        });
    };
    return BaseColumn;
}());

var DefaultColumn = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultColumn, _super);
    function DefaultColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultColumn.prototype.getDisplayValue = function (data, table, options) {
        return this.getDisplayValueCore(data);
    };
    return DefaultColumn;
}(BaseColumn));

var CommentColumn = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CommentColumn, _super);
    function CommentColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommentColumn.prototype.getName = function () {
        return "".concat(this.question.name).concat(survey_core__WEBPACK_IMPORTED_MODULE_1__["settings"].commentPrefix);
    };
    CommentColumn.prototype.getDisplayName = function () {
        return this.question.hasOther
            ? this.question.otherText
            : this.question.commentText;
    };
    CommentColumn.prototype.getDisplayValue = function (data, table, options) {
        return this.question.comment;
    };
    return CommentColumn;
}(BaseColumn));

var MatrixColumn = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatrixColumn, _super);
    function MatrixColumn(question, row, table) {
        var _this = this;
        var _a;
        _this = _super.call(this, question, table) || this;
        _this.row = row;
        _this.valueName = _this.question.name;
        _this.valuePath = (_a = _this.row) === null || _a === void 0 ? void 0 : _a.value;
        return _this;
    }
    MatrixColumn.prototype.getName = function () {
        var _a;
        return this.question.name + "." + ((_a = this.row) === null || _a === void 0 ? void 0 : _a.value);
    };
    MatrixColumn.prototype.getDisplayName = function () {
        var table = this.table;
        var question = this.question;
        var row = this.row;
        return (table.useNamesAsTitles
            ? question.name
            : (question.title || "").trim() || question.name) + " - " + (table.useNamesAsTitles ? row === null || row === void 0 ? void 0 : row.value : row === null || row === void 0 ? void 0 : row.locText.textOrHtml);
    };
    MatrixColumn.prototype.getDisplayValue = function (data, table, options) {
        var displayValue = data[this.valueName];
        if (this.valuePath && typeof displayValue === "object") {
            displayValue = displayValue[this.valuePath];
            if (displayValue !== undefined) {
                var choiceValue = survey_core__WEBPACK_IMPORTED_MODULE_1__["ItemValue"].getItemByValue(this.question.columns, displayValue);
                if (!!choiceValue) {
                    displayValue = options.useValuesAsLabels ? choiceValue.value : choiceValue.locText.textOrHtml;
                }
            }
        }
        return displayValue;
    };
    return MatrixColumn;
}(BaseColumn));

var ImageColumn = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImageColumn, _super);
    function ImageColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageColumn.prototype.getDataType = function () {
        return _config__WEBPACK_IMPORTED_MODULE_3__["ColumnDataType"].Image;
    };
    return ImageColumn;
}(BaseColumn));

var FileColumn = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FileColumn, _super);
    function FileColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileColumn.prototype.getDataType = function () {
        return _config__WEBPACK_IMPORTED_MODULE_3__["ColumnDataType"].FileLink;
    };
    FileColumn.prototype.getDisplayValue = function (data, table, options) {
        var displayValue = this.getDisplayValueCore(data);
        if (Array.isArray(displayValue)) {
            displayValue = _table__WEBPACK_IMPORTED_MODULE_4__["Table"].showFilesAsImages ? Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImagesContainer"])(displayValue).outerHTML : Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createLinksContainer"])(displayValue).outerHTML;
        }
        return displayValue;
    };
    return FileColumn;
}(BaseColumn));

var MatrixDropdownColumn = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatrixDropdownColumn, _super);
    function MatrixDropdownColumn(question, row, col, table) {
        var _this = _super.call(this, question, table) || this;
        _this.row = row;
        _this.col = col;
        _this.rowValue = _this.row.value;
        _this.colName = _this.col.name;
        return _this;
    }
    MatrixDropdownColumn.prototype.getName = function () {
        return this.question.name + "." + this.row.value + "." + this.col.name;
    };
    MatrixDropdownColumn.prototype.getDisplayName = function () {
        var table = this.table;
        var question = this.question;
        return (this.table.useNamesAsTitles
            ? question.name
            : (question.title || "").trim() || question.name) + " - " + (table.useNamesAsTitles ? this.row.value : this.row.locText.textOrHtml) + " - " + (table.useNamesAsTitles ? this.col.name : this.col.locTitle.textOrHtml);
    };
    MatrixDropdownColumn.prototype.getDisplayValue = function (data, table, options) {
        var _this = this;
        var displayValue = data[this.question.name];
        var question = this.question;
        if (this.rowValue && this.colName && typeof displayValue === "object") {
            var _a = [this.rowValue, this.colName], rowId = _a[0], colId = _a[1];
            displayValue = question.value;
            if (!options.useValuesAsLabels) {
                displayValue = question.displayValue;
                rowId = question.rows.filter(function (row) { return row.value === _this.rowValue; })[0].text;
                colId = question.getColumnByName(this.colName).title;
            }
            displayValue = (displayValue[rowId] && displayValue[rowId][colId]) || "";
        }
        return displayValue;
    };
    return MatrixDropdownColumn;
}(BaseColumn));

var CustomQuestionColumn = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CustomQuestionColumn, _super);
    function CustomQuestionColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomQuestionColumn.prototype.getCellData = function (table, data) {
        this.setupReadyChangedCallback(table, this.question.contentQuestion);
        return _super.prototype.getCellData.call(this, table, data);
    };
    return CustomQuestionColumn;
}(BaseColumn));

var CompositeQuestionColumn = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompositeQuestionColumn, _super);
    function CompositeQuestionColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompositeQuestionColumn.prototype.getCellData = function (table, data) {
        var _this = this;
        var questionList = [];
        this.question.contentPanel.addQuestionsToList(questionList);
        questionList.forEach(function (question) {
            _this.setupReadyChangedCallback(table, question);
        });
        return _super.prototype.getCellData.call(this, table, data);
    };
    return CompositeQuestionColumn;
}(BaseColumn));



/***/ }),

/***/ "./src/tables/config.ts":
/*!******************************!*\
  !*** ./src/tables/config.ts ***!
  \******************************/
/*! exports provided: QuestionLocation, ColumnDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionLocation", function() { return QuestionLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnDataType", function() { return ColumnDataType; });
var QuestionLocation;
(function (QuestionLocation) {
    QuestionLocation[QuestionLocation["Column"] = 0] = "Column";
    QuestionLocation[QuestionLocation["Row"] = 1] = "Row";
})(QuestionLocation || (QuestionLocation = {}));
var ColumnDataType;
(function (ColumnDataType) {
    ColumnDataType[ColumnDataType["Text"] = 0] = "Text";
    ColumnDataType[ColumnDataType["FileLink"] = 1] = "FileLink";
    ColumnDataType[ColumnDataType["Image"] = 2] = "Image";
})(ColumnDataType || (ColumnDataType = {}));


/***/ }),

/***/ "./src/tables/datatables.scss":
/*!************************************!*\
  !*** ./src/tables/datatables.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/tables/datatables.ts":
/*!**********************************!*\
  !*** ./src/tables/datatables.ts ***!
  \**********************************/
/*! exports provided: DataTables, DatatablesRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return DataTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablesRow", function() { return DatatablesRow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/tables/table.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");





var styles = __webpack_require__(/*! ./datatables.scss */ "./src/tables/datatables.scss");
if (!!document) {
    var svgTemplate = __webpack_require__(/*! html-loader?interpolate!val-loader!../svgbundle.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/svgbundle.html");
    var templateHolder = document.createElement("div");
    templateHolder.style.display = "none";
    templateHolder.innerHTML = svgTemplate;
    document.head.appendChild(templateHolder);
}
var jQuery = window["jQuery"];
var DataTables = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataTables, _super);
    function DataTables(survey, data, options, _columnsData) {
        if (_columnsData === void 0) { _columnsData = []; }
        var _this = _super.call(this, survey, data, options, _columnsData) || this;
        _this.currentPageNumber = 0;
        /**
         * The event is fired columns configuration has been changed.
         * <br/> sender the datatables adapter
         * <br/> options.survey current survey
         * @see getColumns
         */
        _this.onColumnsReorder = new survey_core__WEBPACK_IMPORTED_MODULE_2__["Event"]();
        return _this;
    }
    DataTables.initJQuery = function ($) {
        jQuery = $;
    };
    Object.defineProperty(DataTables, "haveCommercialLicense", {
        set: function (val) {
            _table__WEBPACK_IMPORTED_MODULE_1__["Table"].haveCommercialLicense = val;
        },
        enumerable: false,
        configurable: true
    });
    DataTables.prototype.destroy = function () {
        if (!this.renderResult)
            return;
        var tableNode = this.renderResult.children[0];
        if (jQuery.fn.DataTable.isDataTable(tableNode)) {
            jQuery(tableNode).DataTable().destroy();
        }
        this.datatableApi = undefined;
        _super.prototype.destroy.call(this);
    };
    DataTables.prototype.setColumnVisibility = function (columnName, isVisible) {
        _super.prototype.setColumnVisibility.call(this, columnName, isVisible);
        this.datatableApi.column(columnName + ":name").visible(isVisible);
    };
    DataTables.prototype.setColumnLocation = function (columnName, location) {
        _super.prototype.setColumnLocation.call(this, columnName, location);
        var column = this.datatableApi.column(columnName + ":name");
        var isColumnLocation = location == _config__WEBPACK_IMPORTED_MODULE_3__["QuestionLocation"].Column;
        column.visible(isColumnLocation);
    };
    DataTables.prototype.applyFilter = function (value) {
        this.datatableApi.search(value).draw(false);
    };
    DataTables.prototype.applyColumnFilter = function (columnName, value) {
        var column = this.datatableApi.column(columnName + ":name");
        if (column.search() !== value) {
            column.search(value).draw(false);
        }
    };
    DataTables.prototype.sortByColumn = function (columnName, direction) {
        var column = this.datatableApi.column(columnName + ":name");
        column.order(direction).draw(false);
    };
    DataTables.prototype.setPageSize = function (value) {
        _super.prototype.setPageSize.call(this, value);
        if (this.isRendered) {
            this.datatableApi.page.len(value).draw(false);
        }
    };
    DataTables.prototype.setPageNumber = function (value) {
        _super.prototype.setPageNumber.call(this, value);
        if (this.isRendered) {
            this.datatableApi.page(value).draw(false);
        }
    };
    DataTables.prototype.getPageNumber = function () {
        if (!this.isRendered) {
            return 0;
        }
        return this.datatableApi.page();
    };
    DataTables.prototype.render = function (targetNode) {
        var _this = this;
        _super.prototype.render.call(this, targetNode);
        var self = this;
        if (typeof targetNode === "string") {
            targetNode = document.getElementById(targetNode);
        }
        targetNode.className += " sa-table sa-datatables";
        var tableNode = (_utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("table", ""));
        var columns = this.getColumns();
        var columnsData = columns.map(function (c) { return c.data; });
        var dtButtonClass = "sa-table__btn sa-table__btn--small sa-table__btn--gray";
        var options = jQuery.extend(true, {
            buttons: [
                { extend: "copy", className: dtButtonClass },
                { extend: "csv", className: dtButtonClass },
                { extend: "print", className: dtButtonClass },
            ],
            dom: 'B<"sa-table__header-extensions">prtip',
            // ordering: false,
            data: this.tableData,
            pageLength: this.currentPageSize,
            responsive: false,
            scrollX: true,
            columns: columns,
            colReorder: {
                fixedColumnsLeft: 1,
                realtime: false,
            },
            //orderFixed: [[1, "asc"]],
            language: {
                sSearch: " ",
                searchPlaceholder: "Search...",
                sLengthMenu: "Show _MENU_ entries",
                paginate: {
                    previous: " ",
                    next: " ",
                },
            },
            select: "api",
            headerCallback: function (thead, data, start, end, display) {
                var datatableApi = jQuery(tableNode).dataTable().api();
                var self = _this;
                datatableApi
                    .columns()
                    .eq(0)
                    .each(function (index) {
                    var $thNode = jQuery(datatableApi.columns(index).header());
                    $thNode.unbind("click.DT");
                    if (!!columnsData[index] && $thNode.has("button").length === 0) {
                        var container = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-table__action-container");
                        self.extensions.render(container, "column", {
                            columnName: columnsData[index],
                        });
                        container.onmousedown = function (e) {
                            if (!self.isColumnReorderEnabled) {
                                e.stopPropagation();
                            }
                            else {
                                _this.disableColumnReorder();
                            }
                        };
                    }
                    $thNode.prepend(container);
                });
            },
        }, this._options);
        targetNode.appendChild(tableNode);
        tableNode.className = "sa-datatables__table display responsive dataTable";
        var datatableApiRef = (this.datatableApi = jQuery(tableNode).DataTable(options));
        var extensionsContainer = jQuery("div.sa-table__header-extensions")[0];
        // this.onTableToolsCreated.fire(this, { extensions: extensions });
        this.extensions.render(extensionsContainer, "header");
        datatableApiRef.page(self.currentPageNumber);
        this.datatableApi.rowGroup().enable(false).draw(false);
        datatableApiRef.on("column-reorder", function (e, settings, details) {
            _this.moveColumn(details.from - 1, details.to - 1);
            _this.disableColumnReorder();
            _this.onColumnsReorder.fire(_this, { columns: _this.columns });
        });
        datatableApiRef
            .rows()
            .eq(0)
            .each(function (index) {
            var row = datatableApiRef.row(index);
            var detailsTr = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("tr");
            var detailsTd = (_utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("td", "sa-datatables__details-container"));
            detailsTr.appendChild(detailsTd);
            var rowElement = row.node();
            var firstCell = row.cell(row.index(), 0).node();
            var tableRow = new DatatablesRow(_this, firstCell, detailsTd, row);
            tableRow.onToggleDetails.add(function (sender, options) {
                if (options.isExpanded) {
                    detailsTd.colSpan = rowElement.childElementCount;
                    rowElement.parentNode.insertBefore(detailsTr, rowElement.nextSibling);
                }
                else {
                    if (!!detailsTr.parentNode) {
                        detailsTr.parentNode.removeChild(detailsTr);
                    }
                }
            });
            _this._rows.push(tableRow);
            tableRow.render();
        });
        datatableApiRef.draw(false);
        this.renderResult = targetNode;
    };
    DataTables.prototype.getColumns = function () {
        var _this = this;
        var columns = this.columns.map(function (column) {
            var question = _this.survey.getQuestionByName(column.name);
            var columnTitle = (question && (_this.options.useNamesAsTitles ? question.name : question.title)) || column.displayName;
            return {
                name: column.name,
                data: column.name,
                sTitle: (jQuery === null || jQuery === void 0 ? void 0 : jQuery.fn.dataTable.render.text().display(columnTitle)) || columnTitle,
                visible: _this.isColumnVisible(column),
                orderable: false,
                defaultContent: "",
                width: typeof column.width == "number" ? column.width + "px" : column.width,
                render: function (_data, _type, row) {
                    var value = row[column.name];
                    if (column.dataType === _config__WEBPACK_IMPORTED_MODULE_3__["ColumnDataType"].FileLink) {
                        return value;
                    }
                    if (column.dataType === _config__WEBPACK_IMPORTED_MODULE_3__["ColumnDataType"].Image) {
                        return "<image src='" + value + "'/>";
                    }
                    return typeof value === "string"
                        ? jQuery("<div>").text(value).html()
                        : JSON.stringify(value);
                },
            };
        });
        return [
            {
                orderable: false,
                data: null,
                defaultContent: "",
            },
        ].concat(columns);
    };
    DataTables.prototype.layout = function () {
        !!this.datatableApi && this.datatableApi.columns.adjust();
    };
    return DataTables;
}(_table__WEBPACK_IMPORTED_MODULE_1__["Table"]));

var DatatablesRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DatatablesRow, _super);
    function DatatablesRow(table, extensionsContainer, detailsContainer, _innerRow) {
        var _this = _super.call(this, table, extensionsContainer, detailsContainer) || this;
        _this.table = table;
        _this.extensionsContainer = extensionsContainer;
        _this.detailsContainer = detailsContainer;
        _this._innerRow = _innerRow;
        _this.rowElement = _innerRow.node();
        _this.rowData = _innerRow.data();
        _this._innerRow = _this._innerRow.row(_this.rowElement);
        table.onColumnsReorder.add(function () {
            _this.render();
        });
        return _this;
    }
    Object.defineProperty(DatatablesRow.prototype, "innerRow", {
        get: function () {
            return this._innerRow.row(this.rowElement);
        },
        enumerable: false,
        configurable: true
    });
    DatatablesRow.prototype.getElement = function () {
        return this.rowElement;
    };
    DatatablesRow.prototype.getRowData = function () {
        return this.rowData;
    };
    DatatablesRow.prototype.getDataPosition = function () {
        return this.innerRow.index();
    };
    DatatablesRow.prototype.remove = function () {
        this.innerRow.remove().draw();
        _super.prototype.remove.call(this);
    };
    return DatatablesRow;
}(_table__WEBPACK_IMPORTED_MODULE_1__["TableRow"]));



/***/ }),

/***/ "./src/tables/extensions/columnextensions.ts":
/*!***************************************************!*\
  !*** ./src/tables/extensions/columnextensions.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/tables/config.ts");




_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "drag",
    visibleIndex: 0,
    render: function (table, options) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("button", "sa-table__svg-button sa-table__drag-button");
        btn.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("drag"));
        btn.onmousedown = function (e) {
            table.enableColumnReorder();
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "sort",
    visibleIndex: 1,
    render: function (table, options) {
        var descTitle = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("descOrder");
        var ascTitle = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("ascOrder");
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("sorting");
        btn.title = "";
        var direction = "asc";
        btn.onclick = function () {
            if (direction == "asc") {
                btn.title = descTitle;
                direction = "desc";
            }
            else {
                btn.title = ascTitle;
                direction = "asc";
            }
            table.sortByColumn(options.columnName, direction);
        };
        btn.ondrag = function (e) {
            e.stopPropagation();
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "hide",
    visibleIndex: 2,
    render: function (table, options) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("hide");
        btn.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("hideColumn");
        btn.onclick = function () {
            table.setColumnVisibility(options.columnName, false);
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "movetodetails",
    visibleIndex: 3,
    render: function (table, options) {
        var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("movetodetails");
        button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("moveToDetail");
        button.onclick = function (e) {
            e.stopPropagation();
            table.setColumnLocation(options.columnName, _config__WEBPACK_IMPORTED_MODULE_3__["QuestionLocation"].Row);
        };
        return button;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "filter",
    visibleIndex: 4,
    render: function (table, options) {
        var el = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createInput("sa-table__filter", _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("filterPlaceholder"));
        el.onclick = function (e) { return e.stopPropagation(); };
        el.onchange = function (e) {
            table.applyColumnFilter(options.columnName, el.value);
        };
        return el;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "makepublic",
    visibleIndex: -1,
    render: function (table, options) {
        var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("button");
        var makePrivateSvg = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("makeprivate");
        var makePublicSvg = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("makepublic");
        var column = table.getColumnByName(options.columnName);
        updateState(column);
        button.appendChild(makePrivateSvg);
        button.appendChild(makePublicSvg);
        button.onclick = function (e) {
            e.stopPropagation();
            column.isPublic = !column.isPublic;
            updateState(column);
            table.onPermissionsChangedCallback &&
                table.onPermissionsChangedCallback(table);
        };
        function updateState(column) {
            if (column.isPublic) {
                button.className = "sa-table__svg-button";
                button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("makePrivateColumn");
                makePrivateSvg.style.display = "none";
                makePublicSvg.style.display = "block";
            }
            else {
                button.className = "sa-table__svg-button sa-table__svg-button--active";
                button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("makePublicColumn");
                makePrivateSvg.style.display = "block";
                makePublicSvg.style.display = "none";
            }
        }
        return button;
    },
});


/***/ }),

/***/ "./src/tables/extensions/detailsextensions.ts":
/*!****************************************************!*\
  !*** ./src/tables/extensions/detailsextensions.ts ***!
  \****************************************************/
/*! exports provided: Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/tables/config.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");




var Details = /** @class */ (function () {
    function Details(table, row, targetNode) {
        var _this = this;
        this.table = table;
        this.row = row;
        this.targetNode = targetNode;
        this.location = "details";
        this.createShowAsColumnButton = function (columnName) {
            var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("button", "sa-table__btn sa-table__btn--gray");
            button.appendChild(document.createTextNode(_localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("showAsColumn")));
            button.onclick = function (e) {
                e.stopPropagation();
                _this.table.setColumnLocation(columnName, _config__WEBPACK_IMPORTED_MODULE_1__["QuestionLocation"].Column);
            };
            return button;
        };
        this.detailsTable = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("table", "sa-table__detail-table");
        this.table.onColumnsLocationChanged.add(function () {
            _this.close();
        });
    }
    Details.prototype.open = function () {
        var _this = this;
        this.detailsTable.innerHTML = "";
        var rows = [];
        this.table.columns
            .filter(function (column) { return column.location === _config__WEBPACK_IMPORTED_MODULE_1__["QuestionLocation"].Row && column; })
            .forEach(function (column) {
            var row = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("tr", "sa-table__detail");
            var td1 = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td");
            td1.appendChild(document.createTextNode(column.displayName));
            var td2 = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td");
            td2.textContent = _this.row.getRowData()[column.name];
            if (column.dataType === _config__WEBPACK_IMPORTED_MODULE_1__["ColumnDataType"].Image) {
                td2.innerHTML = "<image src='" + td2.textContent + "'/>";
            }
            var td3 = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td");
            td3.appendChild(_this.createShowAsColumnButton(column.name));
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            rows.push(row);
        });
        var row = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("tr", "sa-table__detail");
        var td = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td", "", { colSpan: 3 });
        var extensions = new _tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"](this.table);
        extensions.render(td, "details", { row: this.row });
        if (td.children.length != 0) {
            row.appendChild(td);
            rows.push(row);
        }
        rows.forEach(function (row) {
            _this.detailsTable.appendChild(row);
        });
        this.targetNode.appendChild(this.detailsTable);
    };
    Details.prototype.close = function () {
        if (!!this.detailsTable.parentNode) {
            this.detailsTable.parentNode.removeChild(this.detailsTable);
        }
    };
    return Details;
}());



/***/ }),

/***/ "./src/tables/extensions/headerextensions.ts":
/*!***************************************************!*\
  !*** ./src/tables/extensions/headerextensions.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");



_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "filter",
    visibleIndex: 0,
    render: function (table) {
        var input = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createInput("sa-table__global-filter sa-table__header-extension", _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("filterPlaceholder"));
        input.onchange = function (event) {
            table.applyFilter(event.target.value);
        };
        return input;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "showcolumn",
    visibleIndex: 2,
    destroy: function () {
        this.onDestroy();
    },
    render: function (table) {
        var dropdown = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("select", "sa-table__show-column sa-table__header-extension");
        function update() {
            var hiddenColumns = table.columns.filter(function (column) { return !column.isVisible; });
            if (hiddenColumns.length == 0) {
                dropdown.style.display = "none";
                return;
            }
            dropdown.style.display = "inline-block";
            dropdown.innerHTML = "";
            var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
                text: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("showColumn"),
                disabled: true,
                selected: true,
            });
            dropdown.appendChild(option);
            hiddenColumns.forEach(function (column) {
                var text = column.displayName || column.name;
                if (!!text && text.length > 20) {
                    text = text.substring(0, 20) + "...";
                }
                var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
                    text: text,
                    title: column.displayName,
                    value: column.name,
                });
                dropdown.appendChild(option);
            });
        }
        dropdown.onchange = function (e) {
            var val = e.target.value;
            e.stopPropagation();
            if (!val)
                return;
            table.setColumnVisibility(val, true);
        };
        update();
        var onVisibilityChangedCallback = function () {
            update();
        };
        table.onColumnsVisibilityChanged.add(onVisibilityChangedCallback);
        this.onDestroy = function () {
            table.onColumnsVisibilityChanged.remove(onVisibilityChangedCallback);
        };
        return dropdown;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "showentries",
    visibleIndex: 3,
    render: function (table) {
        function getEntriesDropdown(table) {
            var el = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("select");
            var optionsValues = table.paginationSizeSelector || ["1", "5", "10", "25", "50", "75", "100"];
            optionsValues.forEach(function (val) {
                var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
                    value: val,
                    text: val,
                });
                el.appendChild(option);
            });
            el.value = String(table.getPageSize());
            el.onchange = function () {
                table.setPageSize(Number(el.value));
            };
            return el;
        }
        var selectorContainer = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("div", "sa-table__entries");
        var spaceSpan = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("span", "sa-table__header-space");
        var showSpan = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("span", "sa-table__entries-label sa-table__entries-label--right", {
            innerText: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("showLabel"),
        });
        var entriesSpan = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("span", "sa-table__entries-label sa-table__entries-label--left", {
            innerText: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("entriesLabel"),
        });
        selectorContainer.appendChild(spaceSpan);
        selectorContainer.appendChild(showSpan);
        selectorContainer.appendChild(getEntriesDropdown(table));
        selectorContainer.appendChild(entriesSpan);
        return selectorContainer;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "removerows",
    visibleIndex: -1,
    render: function (table) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("button", "sa-table__btn sa-table__btn--green sa-table__header-extension ", { innerText: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("removeRows") });
        btn.onclick = function () {
            table.getCreatedRows().forEach(function (row) {
                if (row.getIsSelected()) {
                    row.remove();
                }
            });
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "changelocale",
    visibleIndex: 1,
    render: function (table) {
        var locales = table.getLocales();
        if (locales.length < 2)
            return null;
        var el = (_utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("select", "sa-table__header-extension", {}));
        var optionsValues = [_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("changeLocale")].concat(locales);
        optionsValues.forEach(function (val) {
            var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
                value: val,
                text: val,
            });
            el.appendChild(option);
        });
        el.onchange = function () {
            table.locale = el.value;
        };
        return el;
    },
});


/***/ }),

/***/ "./src/tables/extensions/rowextensions.ts":
/*!************************************************!*\
  !*** ./src/tables/extensions/rowextensions.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");



_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "row",
    name: "details",
    visibleIndex: 0,
    render: function (_table, options) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createSvgButton("detail");
        btn.title = _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("showMinorColumns");
        btn.className += " sa-table__row-extension";
        btn.onclick = function () {
            options.row.toggleDetails();
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "row",
    name: "select",
    visibleIndex: -1,
    render: function (_table, opt) {
        var row = opt.row;
        var checkbox = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("input", "sa-table__row-extension", {
            type: "checkbox",
        });
        checkbox.checked = row.getIsSelected();
        checkbox.onchange = function () {
            row.toggleSelect();
        };
        return checkbox;
    },
});


/***/ }),

/***/ "./src/tables/extensions/tableextensions.ts":
/*!**************************************************!*\
  !*** ./src/tables/extensions/tableextensions.ts ***!
  \**************************************************/
/*! exports provided: TableExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableExtensions", function() { return TableExtensions; });
var TableExtensions = /** @class */ (function () {
    function TableExtensions(table) {
        this.table = table;
        this.renderedExtensions = [];
    }
    TableExtensions.prototype.render = function (targetNode, location, options) {
        var _this = this;
        var extensions = TableExtensions.extensions[location];
        if (!!extensions) {
            extensions = this.sortExtensions(extensions);
            extensions.forEach(function (extension) {
                if (!!extension.render) {
                    var action = extension.render(_this.table, options);
                    if (!!action) {
                        targetNode.appendChild(action);
                        _this.renderedExtensions.push(extension);
                    }
                }
            });
        }
    };
    TableExtensions.prototype.destroy = function () {
        this.renderedExtensions.forEach(function (extension) {
            if (!!extension.destroy)
                extension.destroy();
        });
        this.renderedExtensions = [];
    };
    TableExtensions.registerExtension = function (extension) {
        if (!this.extensions[extension.location])
            this.extensions[extension.location] = [];
        this.extensions[extension.location].push(extension);
    };
    TableExtensions.removeExtension = function (extension) {
        if (!extension) {
            return;
        }
        var extensions = TableExtensions.extensions[extension.location];
        var index = extensions.indexOf(extension);
        if (index >= 0) {
            extensions.splice(index, 1);
        }
    };
    TableExtensions.unregisterExtension = function (location, actionName) {
        if (!actionName) {
            return;
        }
        if (!!location) {
            var extension = TableExtensions.findExtension(location, actionName);
            TableExtensions.removeExtension(extension);
        }
        else {
            Object.keys(this.extensions).forEach(function (location) { return TableExtensions.unregisterExtension(location, actionName); });
        }
    };
    TableExtensions.findExtension = function (location, actionName) {
        if (!this.extensions[location])
            return null;
        var extension = this.extensions[location].filter(function (extension) {
            return extension.name == actionName;
        })[0];
        return extension || null;
    };
    TableExtensions.prototype.sortExtensions = function (extensions) {
        if (!Array.isArray(extensions))
            return;
        return []
            .concat(extensions.filter(function (extension) { return extension.visibleIndex >= 0; }))
            .sort(function (firstExtension, secondExtension) {
            return firstExtension.visibleIndex - secondExtension.visibleIndex;
        });
    };
    TableExtensions.extensions = {};
    return TableExtensions;
}());



/***/ }),

/***/ "./src/tables/table.ts":
/*!*****************************!*\
  !*** ./src/tables/table.ts ***!
  \*****************************/
/*! exports provided: TableEvent, Table, TableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEvent", function() { return TableEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/detailsextensions */ "./src/tables/extensions/detailsextensions.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extensions/tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _columnbuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./columnbuilder */ "./src/tables/columnbuilder.ts");
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./columns */ "./src/tables/columns.ts");










var TableEvent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TableEvent, _super);
    function TableEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TableEvent;
}(survey_core__WEBPACK_IMPORTED_MODULE_1__["EventBase"]));

var Table = /** @class */ (function () {
    function Table(_survey, data, _options, _columnsData) {
        if (_options === void 0) { _options = {}; }
        if (_columnsData === void 0) { _columnsData = []; }
        var _this = this;
        this._survey = _survey;
        this.data = data;
        this._options = _options;
        this._columnsData = _columnsData;
        this.haveCommercialLicense = false;
        this.currentPageSize = 5;
        this._rows = [];
        /**
         * Sets pagination selector content.
         */
        this.paginationSizeSelector = [1, 5, 10, 25, 50, 100];
        this.onColumnsVisibilityChanged = new TableEvent();
        this.onColumnsLocationChanged = new TableEvent();
        this.onRowRemoved = new TableEvent();
        this.buildColumns = function (survey) {
            var columns = [];
            _this._survey.getAllQuestions().forEach(function (question) {
                var builder = _columnbuilder__WEBPACK_IMPORTED_MODULE_7__["ColumnsBuilderFactory"].Instance.getColumnsBuilder(question.getTemplate());
                columns = columns.concat(builder.buildColumns(question, _this));
            });
            return columns;
        };
        /**
         * Fires when table state changed.
         */
        this.onStateChanged = new TableEvent();
        if (!this._options) {
            this._options = {};
        }
        this._columns = this.buildColumns(_survey);
        this.initTableData(data);
        _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale = this._survey.locale;
        this._columns = this.buildColumns(_survey);
        if (_columnsData.length !== 0) {
            this.updateColumnsFromData(this._columnsData);
        }
        this.extensions = new _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_5__["TableExtensions"](this);
        var f = survey_core__WEBPACK_IMPORTED_MODULE_1__["hasLicense"];
        this.haveCommercialLicense = (!!f && f(4)) ||
            Table.haveCommercialLicense ||
            (!!_options &&
                (typeof _options.haveCommercialLicense !== "undefined"
                    ? _options.haveCommercialLicense
                    : false));
    }
    Table.prototype.getData = function () {
        return this.data;
    };
    Object.defineProperty(Table.prototype, "survey", {
        get: function () {
            return this._survey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.render = function (targetNode) {
        if (typeof targetNode === "string") {
            targetNode = document.getElementById(targetNode);
        }
        targetNode.innerHTML = "";
        if (!this.haveCommercialLicense) {
            targetNode.appendChild(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["createCommercialLicenseLink"])());
        }
    };
    Table.prototype.enableColumnReorder = function () {
        this.isColumnReorderEnabled = true;
    };
    Table.prototype.disableColumnReorder = function () {
        this.isColumnReorderEnabled = false;
    };
    Table.prototype.getPageNumber = function () {
        return this.currentPageNumber;
    };
    Table.prototype.setPageNumber = function (value) {
        this.currentPageNumber = value;
    };
    /**
     * Returns current page size.
     */
    Table.prototype.getPageSize = function () {
        return this.currentPageSize;
    };
    /**
     * Sets current page size.
     */
    Table.prototype.setPageSize = function (value) {
        this.currentPageSize = value;
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.getCreatedRows = function () {
        return [].concat(this._rows);
    };
    Table.prototype.clearCreatedRows = function () {
        this._rows.forEach(function (row) {
            row.destroy();
        });
        this._rows = [];
    };
    Object.defineProperty(Table.prototype, "useNamesAsTitles", {
        get: function () {
            return this._options && this._options.useNamesAsTitles === true;
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.isColumnVisible = function (column) {
        if (column.location !== _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Column)
            return false;
        return column.isVisible;
    };
    Object.defineProperty(Table.prototype, "columns", {
        get: function () {
            return [].concat(this._columns);
        },
        set: function (columns) {
            this._columns = columns;
            this.refresh(true);
            this.onStateChanged.fire(this, this.state);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "isInitTableDataProcessing", {
        get: function () { return this.isInitTableDataProcessingValue; },
        enumerable: false,
        configurable: true
    });
    Table.prototype.initTableData = function (data) {
        var _this = this;
        this.isInitTableDataProcessingValue = true;
        this.tableData = (data || []).map(function (item) {
            var dataItem = {};
            _this._survey.data = item;
            _this._columns.forEach(function (column) {
                var opt = column.getCellData(_this, item);
                if (typeof _this._options.onGetQuestionValue === "function") {
                    _this._options.onGetQuestionValue(opt);
                }
                dataItem[column.name] = opt.displayValue;
            });
            return dataItem;
        });
        this.isInitTableDataProcessingValue = false;
    };
    Table.prototype.moveColumn = function (from, to) {
        var deletedColumns = this._columns.splice(from, 1);
        this._columns.splice(to, 0, deletedColumns[0]);
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.setColumnLocation = function (columnName, location) {
        this.getColumnByName(columnName).location = location;
        this.onColumnsLocationChanged.fire(this, {
            columnName: columnName,
            location: location,
        });
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.getColumnByName = function (columnName) {
        return this._columns.filter(function (column) { return column.name === columnName; })[0];
    };
    Table.prototype.setColumnVisibility = function (columnName, isVisible) {
        var column = this.getColumnByName(columnName);
        column.isVisible = isVisible;
        this.onColumnsVisibilityChanged.fire(this, {
            columnName: columnName,
            columnVisibility: isVisible,
        });
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.setColumnWidth = function (columnName, width) {
        var column = this.getColumnByName(columnName);
        column.width = width;
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.removeRow = function (row) {
        var index = this._rows.indexOf(row);
        this._rows.splice(index, 1);
        this.onRowRemoved.fire(this, { row: row });
    };
    Object.defineProperty(Table.prototype, "locale", {
        /**
         * Returns current locale of the table.
         * If locales more than one, the language selection dropdown will be added in the toolbar
         */
        get: function () {
            return _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale;
        },
        /**
         * Sets locale for table.
         */
        set: function (newLocale) {
            this._survey.locale = newLocale;
            _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale = newLocale;
            this.refresh(true);
            this.onStateChanged.fire(this, this.state);
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.getLocales = function () {
        return [].concat(this._survey.getUsedLocales());
    };
    Table.prototype.refresh = function (hard) {
        if (hard === void 0) { hard = false; }
        if (hard) {
            this.initTableData(this.data);
        }
        if (this.isRendered) {
            this.currentPageNumber = this.getPageNumber();
            var targetNode = this.renderResult;
            this.destroy();
            this.render(targetNode);
            this.setPageSize(this.currentPageSize);
            this.setPageNumber(this.currentPageNumber);
        }
    };
    Table.prototype.destroy = function () {
        this.clearCreatedRows();
        this.extensions.destroy();
        this.renderResult.innerHTML = "";
        this.renderResult = undefined;
    };
    Object.defineProperty(Table.prototype, "isRendered", {
        get: function () {
            return !!this.renderResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "state", {
        /**
         * Vizualization panel state getter.
         */
        get: function () {
            return {
                locale: _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale,
                elements: JSON.parse(JSON.stringify(this._columns)),
                pageSize: this.currentPageSize,
            };
        },
        /**
         * Vizualization panel state setter.
         */
        set: function (newState) {
            if (!newState)
                return;
            if (typeof newState.locale !== "undefined") {
                _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale = newState.locale;
                this._survey.locale = newState.locale;
                this.initTableData(this.data);
            }
            if (typeof newState.elements !== "undefined")
                this.updateColumnsFromData(newState.elements);
            if (typeof newState.pageSize !== "undefined")
                this.currentPageSize = newState.pageSize;
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.updateColumnsFromData = function (columnsData) {
        var _this = this;
        var columns = this._columns;
        columns.forEach(function (column) {
            var el = columnsData.filter(function (el) { return column.name === el.name; })[0];
            if (!!el) {
                column.fromJSON(el);
                column.visibleIndex = columnsData.indexOf(el);
            }
        });
        columnsData.forEach(function (el) {
            var column = columns.filter(function (column) { return column.name === el.name; })[0];
            if (!column) {
                column = new _columns__WEBPACK_IMPORTED_MODULE_8__["DefaultColumn"](undefined, _this);
                column.fromJSON(el);
                column.visibleIndex = columnsData.indexOf(el);
                columns.push(column);
            }
        });
        this._columns = this._columns.sort(function (col1, col2) { return col1.visibleIndex - col2.visibleIndex; });
    };
    Object.defineProperty(Table.prototype, "permissions", {
        /**
         * Gets table permissions.
         */
        get: function () {
            return this._columns.map(function (column) {
                return {
                    name: column.name,
                    isPublic: column.isPublic,
                };
            });
        },
        /**
         * Sets table permissions.
         */
        set: function (permissions) {
            var updatedElements = this._columns.map(function (column) {
                permissions.forEach(function (permission) {
                    if (permission.name === column.name)
                        column.isPublic = permission.isPublic;
                });
                return column;
            });
            this._columns = [].concat(updatedElements);
            this.onPermissionsChangedCallback &&
                this.onPermissionsChangedCallback(this);
        },
        enumerable: false,
        configurable: true
    });
    Table.showFilesAsImages = false;
    Table.haveCommercialLicense = false;
    return Table;
}());

var TableRow = /** @class */ (function () {
    function TableRow(table, extensionsContainer, detailsContainer) {
        var _this = this;
        this.table = table;
        this.extensionsContainer = extensionsContainer;
        this.detailsContainer = detailsContainer;
        this.detailedRowClass = "sa-table__detail-row";
        this.isDetailsExpanded = false;
        this.onToggleDetails = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        this.onColumnLocationChangedCallback = function () {
            _this.closeDetails();
        };
        this.details = new _extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_3__["Details"](table, this, detailsContainer);
        this.extensions = new _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_5__["TableExtensions"](table);
        table.onColumnsLocationChanged.add(this.onColumnLocationChangedCallback);
    }
    TableRow.prototype.render = function () {
        this.extensions.render(this.extensionsContainer, "row", { row: this });
    };
    TableRow.prototype.openDetails = function () {
        this.details.open();
        this.getElement().className += " " + this.detailedRowClass;
        this.onToggleDetails.fire(this, { isExpanded: true });
        this.isDetailsExpanded = true;
    };
    TableRow.prototype.closeDetails = function () {
        this.details.close();
        this.getElement().classList.remove(this.detailedRowClass);
        this.onToggleDetails.fire(this, { isExpanded: false });
        this.isDetailsExpanded = false;
    };
    TableRow.prototype.toggleDetails = function () {
        if (this.isDetailsExpanded) {
            this.closeDetails();
        }
        else
            this.openDetails();
    };
    TableRow.prototype.getIsSelected = function () {
        return this.isSelected;
    };
    TableRow.prototype.toggleSelect = function () {
        this.isSelected = !this.isSelected;
    };
    TableRow.prototype.remove = function () {
        this.table.removeRow(this);
    };
    TableRow.prototype.destroy = function () {
        this.table.onColumnsLocationChanged.remove(this.onColumnLocationChangedCallback);
        this.extensions.destroy();
    };
    return TableRow;
}());



/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/*! exports provided: __assign, __extends, __rest, __decorate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
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
var __rest = function (source, e) {
    var result = {};
    for (var propertyName in source)
        if (Object.prototype.hasOwnProperty.call(source, propertyName) &&
            e.indexOf(propertyName) < 0)
            result[propertyName] = source[propertyName];
    if (source != null &&
        typeof Object["getOwnPropertySymbols"] === "function")
        for (var i = 0, propertySymbols = Object["getOwnPropertySymbols"](source); i < propertySymbols.length; i++)
            if (e.indexOf(propertySymbols[i]) < 0)
                result[propertySymbols[i]] = source[propertySymbols[i]];
    return result;
};
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


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: DocumentHelper, options, allowDomRendering, createCommercialLicenseLink, DataHelper, createLinksContainer, createImagesContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return DocumentHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowDomRendering", function() { return allowDomRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommercialLicenseLink", function() { return createCommercialLicenseLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataHelper", function() { return DataHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLinksContainer", function() { return createLinksContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImagesContainer", function() { return createImagesContainer; });
var DocumentHelper = /** @class */ (function () {
    function DocumentHelper() {
    }
    DocumentHelper.createSelector = function (options, isSelected, handler) {
        var selectWrapper = document.createElement("div");
        selectWrapper.className = "sa-question__select-wrapper";
        var select = document.createElement("select");
        select.className = "sa-question__select";
        options.forEach(function (option) {
            var optionElement = DocumentHelper.createElement("option", "", {
                value: option.value,
                text: option.text,
                selected: isSelected(option),
            });
            select.appendChild(optionElement);
        });
        select.onchange = handler;
        selectWrapper.appendChild(select);
        return selectWrapper;
    };
    DocumentHelper.createButton = function (handler, text, className) {
        if (text === void 0) { text = ""; }
        if (className === void 0) { className = "sa-toolbar__button"; }
        var button = DocumentHelper.createElement("span", className, {
            innerText: text,
            onclick: handler,
        });
        return button;
    };
    DocumentHelper.createElement = function (tagName, className, attrs) {
        if (className === void 0) { className = ""; }
        var el = document.createElement(tagName);
        el.className = className;
        if (!!attrs) {
            Object.keys(attrs).forEach(function (key) {
                el[key] = attrs[key];
            });
        }
        return el;
    };
    DocumentHelper.createSvgElement = function (path) {
        var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#sa-svg-" + path);
        svgElem.appendChild(useElem);
        return svgElem;
    };
    DocumentHelper.createSvgButton = function (path) {
        var btn = (DocumentHelper.createElement("button", "sa-table__svg-button"));
        btn.appendChild(DocumentHelper.createSvgElement(path));
        return btn;
    };
    DocumentHelper.createSvgToggleButton = function (svgPath1, svPpath2, text1, text2, handler1, handler2, state, className) {
        if (state === void 0) { state = "first"; }
        if (className === void 0) { className = "sa-toolbar__button sa-toolbar__svg-button"; }
        var svg1 = DocumentHelper.createSvgElement(svgPath1);
        var svg2 = DocumentHelper.createSvgElement(svPpath2);
        var button = DocumentHelper.createElement("button", className);
        var toggle = function (e) {
            if (state === "first") {
                state = "second";
                button.title = text2;
                button.removeChild(svg1);
                button.appendChild(svg2);
                handler2(e);
            }
            else if (state === "second") {
                state = "first";
                button.title = text1;
                button.removeChild(svg2);
                button.appendChild(svg1);
                handler1(e);
            }
        };
        if (state === "first") {
            button.title = text1;
            button.appendChild(svg1);
        }
        else if ((state = "second")) {
            button.title = text2;
            button.appendChild(svg2);
        }
        button.onclick = toggle;
        return button;
    };
    DocumentHelper.createInput = function (className, placeholder, defaultValue) {
        if (placeholder === void 0) { placeholder = ""; }
        if (defaultValue === void 0) { defaultValue = ""; }
        var el = DocumentHelper.createElement("input", className, {
            placeholder: placeholder,
            defaultValue: defaultValue,
        });
        return el;
    };
    return DocumentHelper;
}());

var options = {
    runningInBrowser: typeof window.URL.createObjectURL === "function",
};
function allowDomRendering() {
    return options.runningInBrowser;
}
function createCommercialLicenseLink() {
    var container = DocumentHelper.createElement("div", "sa-commercial");
    var link = DocumentHelper.createElement("a", "sa-commercial__text", {
        href: "https://www.surveyjs.io/Buy",
        target: "_blank",
    });
    var containerSpan = DocumentHelper.createElement("span", "");
    var icon = DocumentHelper.createSvgElement("noncommercial");
    var textSpan = DocumentHelper.createElement("span", "sa-commercial__product", {
        innerText: "Please purchase a SurveyJS Analytics developer license to use it in your app.",
    });
    container.appendChild(link).appendChild(containerSpan);
    containerSpan.appendChild(icon);
    containerSpan.appendChild(textSpan);
    return container;
}
var DataHelper = /** @class */ (function () {
    function DataHelper() {
    }
    DataHelper.zipArrays = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        var zipArray = [];
        var _loop_1 = function (i) {
            zipArray[i] = [];
            arrays.forEach(function (arr) {
                zipArray[i].push(arr[i]);
            });
        };
        for (var i = 0; i < arrays[0].length; i++) {
            _loop_1(i);
        }
        return zipArray;
    };
    DataHelper.unzipArrays = function (zipArray) {
        var arrays = [];
        zipArray.forEach(function (value, i) {
            value.forEach(function (val, j) {
                if (!arrays[j])
                    arrays[j] = [];
                arrays[j][i] = val;
            });
        });
        return arrays;
    };
    DataHelper.sortDictionary = function (keys, values, desc) {
        var dictionary = this.zipArrays(keys, values);
        var comparator = function (a, b, asc) {
            if (asc === void 0) { asc = true; }
            var result = a[1] < b[1] ? 1 : a[1] == b[1] ? 0 : -1;
            return asc ? result : result * -1;
        };
        dictionary.sort(function (a, b) {
            return desc ? comparator(a, b, false) : comparator(a, b);
        });
        var keysAndValues = this.unzipArrays(dictionary);
        return { keys: keysAndValues[0], values: keysAndValues[1] };
    };
    DataHelper.toPercentage = function (value, maxValue) {
        return (value / maxValue) * 100;
    };
    return DataHelper;
}());

function createLinksContainer(links) {
    var linksContainer = DocumentHelper.createElement("div");
    links.forEach(function (link) {
        linksContainer.appendChild(DocumentHelper.createElement("a", "", {
            innerText: link.name,
            download: link.name,
            href: link.content,
        }));
    });
    return linksContainer;
}
function createImagesContainer(links) {
    var linksContainer = DocumentHelper.createElement("div");
    links.forEach(function (link) {
        linksContainer.appendChild(DocumentHelper.createElement("img", "", {
            alt: link.name,
            src: link.content,
        }));
    });
    return linksContainer;
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2FuYWx5dGljcy1sb2NhbGl6YXRpb24vYXJhYmljLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9hbmFseXRpY3MtbG9jYWxpemF0aW9uL2R1dGNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9hbmFseXRpY3MtbG9jYWxpemF0aW9uL2VuZ2xpc2gudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2FuYWx5dGljcy1sb2NhbGl6YXRpb24vZmFyc2kudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2FuYWx5dGljcy1sb2NhbGl6YXRpb24vZnJlbmNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9hbmFseXRpY3MtbG9jYWxpemF0aW9uL2dlcm1hbi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvYW5hbHl0aWNzLWxvY2FsaXphdGlvbi9ub3J3ZWdpYW4udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2FuYWx5dGljcy1sb2NhbGl6YXRpb24vcG9ydHVndWVzZS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvYW5hbHl0aWNzLWxvY2FsaXphdGlvbi9ydXNzaWFuLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9lbnRyaWVzL2RhdGF0YWJsZXMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9jb2x1bW5idWlsZGVyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvY29sdW1ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2RhdGF0YWJsZXMuc2Nzcz85M2U1Iiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvY29sdW1uZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL2hlYWRlcmV4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3Jvd2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL3RhYmxlLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9oZWxwZXJzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QU87U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUM7QUFFTSxTQUFTLHFCQUFxQixDQUNuQyxLQUE0QztJQUU1QyxJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1FBQ2pCLGNBQWMsQ0FBQyxXQUFXLENBQ3hCLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUN0QyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZCxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDbEIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUM7Ozs7Ozs7Ozs7OztBQzlPRCx5RCIsImZpbGUiOiJzdXJ2ZXkuYW5hbHl0aWNzLmRhdGF0YWJsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleUFuYWx5dGljc0RhdGF0YWJsZXNcIiwgW1wic3VydmV5LWNvcmVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3VydmV5QW5hbHl0aWNzRGF0YXRhYmxlc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdXJ2ZXlBbmFseXRpY3NEYXRhdGFibGVzXCJdID0gZmFjdG9yeShyb290W1wiU3VydmV5XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJ2ZXlfY29yZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cmllcy9kYXRhdGFibGVzLnRzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWRldGFpbFxcXCI+PGNpcmNsZSBjeD1cXFwiMS41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjcuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWRyYWdcXFwiPjxwYXRoIGQ9XFxcIk0xMyA1bC0xIDEgMSAxSDlWM2wxIDEgMS0xLTMtMy0zIDMgMSAxIDEtMXY0SDNsMS0xLTEtMS0zIDMgMyAzIDEtMS0xLTFoNHY0bC0xLTEtMSAxIDMgMyAzLTMtMS0xLTEgMVY5aDRsLTEgMSAxIDEgMy0zelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWhpZGVcXFwiPjxwYXRoIGQ9XFxcIk0xMi43OSA0LjJMMTYgMWwtMS0xLTMuMzIgMy4zMkMxMC41NyAyLjU1IDkuMzIgMiA4IDIgMy42MyAyIDAgNy45NyAwIDcuOTdzMS4yNyAyLjEgMy4yMSAzLjgybC0zLjIzIDMuMjMuOTguOTggMy4zNS0zLjM0QzUuNDEgMTMuNDQgNi42NyAxNCA4IDE0YzQuMzcgMCA4LTYgOC02cy0xLjI3LTIuMDktMy4yMS0zLjh6TTIgNy45N2MxLjA3LTEuNDcgMy42MS00IDYtNCAuOCAwIDEuNi4yNyAyLjM1LjY4bC0uNzguNzhjLS40Ni0uMjktLjk5LS40Ni0xLjU3LS40Ni0xLjY2IDAtMyAxLjM0LTMgMyAwIC41OC4xNyAxLjExLjQ2IDEuNTdsLS45Ny45N0ExMy4zOCAxMy4zOCAwIDAgMSAyIDcuOTd6bTYgNGMtLjggMC0xLjU5LS4yNy0yLjMzLS42N2wuNzgtLjc3Yy40NS4yNy45OC40NCAxLjU1LjQ0IDEuNjYgMCAzLTEuMzQgMy0zIDAtLjU3LS4xNy0xLjA5LS40NC0xLjU1bC45OC0uOThjMS4xMS44NyAyLjAxIDEuOTEgMi40NiAyLjUyLTEuMDcgMS40OC0zLjYxIDQuMDEtNiA0LjAxelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1ha2Vwcml2YXRlXFxcIj48Y2lyY2xlIGN4PVxcXCI4XFxcIiBjeT1cXFwiNFxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTggOGMtMy4zMSAwLTYgMi43My02IDQuNjdTNS4yNyAxNSA4IDE1czYtLjQgNi0yLjMzUzExLjMxIDggOCA4elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1ha2VwdWJsaWNcXFwiPjxjaXJjbGUgY3g9XFxcIjZcXFwiIGN5PVxcXCI1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTAgNWMwIC4zNC0uMDYuNjctLjE0Ljk5LjA1IDAgLjA5LjAxLjE0LjAxIDEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zQzguOTcgMCA4LjA3LjUyIDcuNTMgMS4zIDguOTggMS45MSAxMCAzLjMzIDEwIDV6TTYgOWMtMy4zMSAwLTYgMi43My02IDQuNjdTMy4yNyAxNiA2IDE2czYtLjQgNi0yLjMzUzkuMzEgOSA2IDl6TTEwIDdjLS4xOSAwLS4zOC4wMS0uNTcuMDNhNC4xNCA0LjE0IDAgMCAxLTEuMzcgMS4zOWMzIC44MyA1LjIzIDMuMzEgNS40MiA1LjI4IDEuNDQtLjMxIDIuNTItLjkyIDIuNTItMi4wM0MxNiA5Ljc0IDEzLjMxIDcgMTAgN3pcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tb3ZldG9kZXRhaWxzXFxcIj48Y2lyY2xlIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjcuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTMuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDFoM3Y5aC0zek0yLjAyIDcuMDJMMSA2IDAgN2wzIDMgMy0zLTEtMS0uOTQuOTRDNC4zMyA0LjczIDYuMjEgMyA4LjUgM2MuMTcgMCAuMzMuMDMuNS4wNVYxLjAzQzguODMgMS4wMSA4LjY3IDEgOC41IDEgNS4wOCAxIDIuMjcgMy42NiAyLjAyIDcuMDJ6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbm9uY29tbWVyY2lhbFxcXCI+PHBhdGggZD1cXFwiTTggMEwwIDE1aDE2TDggMHptMSAxM0g3di0yaDJ2MnptLTItM1Y1aDJ2NUg3elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLXNvcnRpbmdcXFwiPjxwYXRoIGQ9XFxcIk04IDNsMiAyIDEtMS0zLTMtMyAzIDEgMXpNOCAxM2wtMi0yLTEgMSAzIDMgMy0zLTEtMXpcXFwiPjwvcGF0aD48L3N5bWJvbD48L3N2Zz5cIjsiLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGFyYWJpY1N0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcItiy2LHYp9ixINin2YTZhdis2YXZiNi52KlcIixcbiAgdW5ncm91cEJ1dHRvbjogXCLYqtmFINin2YTYqtit2K/ZitirINmF2YYg2K7ZhNin2YTZiVwiLFxuICBzZWxlY3RCdXR0b246IFwi2KfYrtiq2LFcIixcbiAgaGlkZUNvbHVtbjogXCLYp9iu2YHYp9ihINin2YTYudmF2YjYr1wiLFxuICBzaG93Q29sdW1uOiBcItin2LjZh9in2LFcIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwi2KPYrNi52YQg2KfZhNi52YXZiNivINiu2KfYtVwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcItij2KzYudmEINin2YTYudmF2YjYryDYudin2YVcIixcbiAgbW92ZVRvRGV0YWlsOiBcItin2YbYqtmC2YQg2KXZhNmJINin2YTYqtmB2KfYtdmK2YRcIixcbiAgc2hvd0FzQ29sdW1uOiBcItil2LjZh9in2LEg2YPYudmF2YjYr1wiLFxuICBmaWx0ZXJQbGFjZWhvbGRlcjogXCLYqNit2KsuLi5cIixcbiAgcmVtb3ZlUm93czogXCLYrdiw2YFcIixcbiAgc2hvd0xhYmVsOiBcItin2LjZh9in2LFcIixcbiAgZW50cmllc0xhYmVsOiBcItmF2K/YrtmE2KfYqlwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwi2KzYr9in2YjZhFwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCLZg9mE2YXYp9iqXCIsXG4gIHZpc3VhbGl6ZXJfaGlzdG9ncmFtOiBcItin2YTYsdiz2YUg2KfZhNio2YrYp9mG2YpcIixcbiAgdmlzdWFsaXplcl9udW1iZXI6IFwi2YXYqtmI2LPYt1wiLFxuICB2aXN1YWxpemVyX2Nob2ljZXM6IFwi2KzYr9mI2YRcIixcbiAgdmlzdWFsaXplcl9zZWxlY3RCYXNlOiBcItix2LPZhSDYqNmK2KfZhtmKXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwi2LTYsdmK2LdcIixcbiAgY2hhcnRUeXBlX3ZiYXI6IFwi2LTYsdmK2Lcg2LnZhdmI2K/ZilwiLFxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCLYtNix2YrYtyDZhdmD2K/Ys1wiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiRG91Z2hudXRcIixcbiAgY2hhcnRUeXBlX3BpZTogXCJQaWVcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiU2NhdHRlclwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcbiAgaGlkZUJ1dHRvbjogXCLYp9iu2YHYp9ihXCIsXG4gIG1ha2VQcml2YXRlQnV0dG9uOiBcItij2KzYudmEINiu2KfYtVwiLFxuICBtYWtlUHVibGljQnV0dG9uOiBcItij2KzYudmEINi52KfZhVwiLFxuICBzaG93QnV0dG9uOiBcItin2LjZh9in2LFcIixcbiAgZmlsdGVyOiBcItiq2LHYtNitXCIsXG4gIHJlc2V0RmlsdGVyOiBcItil2LnYp9iv2Kkg2KrYudmK2YrZhlwiLFxuICBjaGFuZ2VMb2NhbGU6IFwi2KrYutmK2YrYsSDYp9mE2YTYutipXCIsXG4gIGVuOiBcItin2YTZhNi62Kkg2KfZhNin2YbYrNmE2YrYstmK2KlcIixcbiAgZnI6IFwi2KfZhNmE2LrZhyDYp9mE2YHYsdmG2LPZitipXCIsXG4gIHJ1OiBcItin2YTZhNi62Ycg2KfZhNix2YjYs9mK2KlcIixcbiAgZGU6IFwi2KfZhNmE2LrZhyDYp9mE2KfZhtis2YTZitiy2YrYqVwiLFxuICBjbGVhckJ1dHRvbjogXCLZhdiz2K1cIixcbiAgYWRkRWxlbWVudDogXCLYp9iu2KrYsSDYs9ik2KfZhNin2Ysg2YTZhNi52LHYtiAuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcItin2YTYqtix2KrZitioINin2YTYp9mB2KrYsdin2LbZilwiLFxuICBhc2NPcmRlcjogXCLYqti12KfYudiv2YlcIixcbiAgZGVzY09yZGVyOiBcItiq2YbYp9iy2YTZiVwiLFxuICBzaG93TWlub3JDb2x1bW5zOiBcItil2LjZh9in2LEg2KfZhNij2LnZhdiv2Kkg2KfZhNir2KfZhtmI2YrYqVwiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCLYqNmG2YjYryDZiNiq2LnZhNmK2YLYp9iqINij2K7YsdmJXCIsXG4gIHNob3dQZXJjZW50YWdlczogXCLYudix2LYg2KfZhNmG2LPYqCDYp9mE2YXYptmI2YrYqVwiLFxuICBoaWRlUGVyY2VudGFnZXM6IFwi2KXYrtmB2KfYoSDYp9mE2YbYs9ioXCIsXG4gIHBkZkRvd25sb2FkQ2FwdGlvbjogXCJQREZcIixcbiAgeGxzeERvd25sb2FkQ2FwdGlvbjogXCJFeGNlbFwiLFxuICBjc3ZEb3dubG9hZENhcHRpb246IFwiQ1NWXCIsXG4gIHNhdmVEaWFncmFtQXNQTkc6IFwi2KrZhtiy2YrZhCDYqNi12YrYutipIHBuZ1wiLFxuICBoaWRlRW1wdHlBbnN3ZXJzOiBcItil2K7Zgdin2KEg2KfZhNil2KzYp9io2KfYqiDYp9mE2YHYp9ix2LrYqVwiLFxuICBzaG93RW1wdHlBbnN3ZXJzOiBcItil2LjZh9in2LEg2KfZhNil2KzYp9io2KfYqiDYp9mE2YHYp9ix2LrYqVwiLFxuICBoaWRlTWlzc2luZ0Fuc3dlcnM6IFwi2KXYrtmB2KfYoSDYp9mE2KXYrNin2KjYp9iqINin2YTZhdmB2YLZiNiv2KlcIixcbiAgc2hvd01pc3NpbmdBbnN3ZXJzOiBcIti52LHYtiDYp9mE2KXYrNin2KjYp9iqINin2YTZhdmB2YLZiNiv2KlcIixcbiAgbWlzc2luZ0Fuc3dlcnNMYWJlbDogXCLYo9is2YjYqNipINmF2YHZgtmI2K/YqVwiLFxuICBub1Zpc3VhbGl6ZXJGb3JRdWVzdGlvbjogXCLZhNmFINmK2KrZhSDYp9mE2LnYsdi2INio2LnYr1wiLFxuICBub1Jlc3VsdHM6IFwi2YTYpyDZitmI2KzYryDZhtiq2KfYptisINmE2YTYudix2LZcIixcbiAgc2hvd1BlclZhbHVlczogXCLZhNmD2YQg2KfZhNmC2YrZhVwiLFxuICBzaG93UGVyQ29sdW1uczogXCLZhNmD2YQg2KfZhNij2LnZhdiv2KlcIixcbiAgYW5zd2VyOiBcItil2KzYqFwiLFxuICBjb3JyZWN0QW5zd2VyOiBcItin2YTYp9is2KfYqNipINin2YTYtdit2YrYrdipOiBcIixcbiAgcGVyY2VudDogXCLYp9mE2YbYs9io2Ycg2KfZhNmF2KbZiNmK2YdcIixcbiAgcmVzcG9uc2VzOiBcItin2YTYp9iz2KrYrNin2KjYp9iqXCIsXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImFyXCJdID0gYXJhYmljU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImFyXCJdID0gXCJBcmFiaWNcIjtcbiIsIi8vVW5jb21tZW50IHRoaXMgbGluZSBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGVcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZHV0Y2hTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm9lcCBkb29yIG1palwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIkRlZ3JvZXBlcmVuIGJpaiBtaWpcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdGVlciBtaWpcIixcbiAgaGlkZUNvbHVtbjogXCJLb2xvbSB2ZXJiZXJnZW5cIixcbiAgc2hvd0NvbHVtbjogXCJUb29uIGtvbG9tXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIktvbG9tIHByaXbDqSBtYWtlblwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1hYWsgZGUga29sb20gb3BlbmJhYXJcIixcbiAgbW92ZVRvRGV0YWlsOiBcIkdhIG5hYXIgRGV0YWlsXCIsXG4gIHNob3dBc0NvbHVtbjogXCJXZWVyZ2V2ZW4gYWxzIGtvbG9tXCIsXG4gIGZpbHRlclBsYWNlaG9sZGVyOiBcIlpvZWtlbi4uLlwiLFxuICByZW1vdmVSb3dzOiBcIlZlcndpamRlciByaWplblwiLFxuICBzaG93TGFiZWw6IFwiVG9uZW5cIixcbiAgZW50cmllc0xhYmVsOiBcImluemVuZGluZ2VuXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZWtzdGVuIGluIHRhYmVsXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIldvcmRjbG91ZFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJHZXN0YXBlbGRlIEJhclwiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiRG9udXRcIixcbiAgY2hhcnRUeXBlX3BpZTogXCJUYWFydFwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJWZXJzdHJvb2llblwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiTWV0ZXJcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJLb2dlbFwiLFxuICBoaWRlQnV0dG9uOiBcIlZlcmJlcmdlblwiLFxuICBtYWtlUHJpdmF0ZUJ1dHRvbjogXCJNYWFrIHByaXZlXCIsXG4gIG1ha2VQdWJsaWNCdXR0b246IFwiT3BlbmJhYXIgbWFrZW5cIixcbiAgc2hvd0J1dHRvbjogXCJUb25lblwiLFxuICByZXNldEZpbHRlcjogXCJGaWx0ZXIgcmVzZXR0ZW5cIixcbiAgY2hhbmdlTG9jYWxlOiBcIldpanppZyBkZSBsYW5kaW5zdGVsbGluZ1wiLFxuICBjbGVhckJ1dHRvbjogXCJEb29yemljaHRpZ1wiLFxuICBhZGRFbGVtZW50OiBcIktpZXMgZWVuIHZyYWFnIG9tIHdlZXIgdGUgZ2V2ZW4gLi4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJTdGFuZGFhcmR2b2xnb3JkZVwiLFxuICBhc2NPcmRlcjogXCJPcGxvcGVuZFwiLFxuICBkZXNjT3JkZXI6IFwiQWZsb3BlbmRcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJUb29uIGtsZWluZSBrb2xvbW1lblwiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJBbmRlcmUgaXRlbXMgZW4gb3BtZXJraW5nZW5cIixcbiAgc2hvd1BlcmNlbnRhZ2VzOiBcIlBlcmNlbnRhZ2VzIHdlZXJnZXZlblwiLFxuICBoaWRlUGVyY2VudGFnZXM6IFwiVmVyYmVyZyBwZXJjZW50YWdlc1wiLFxuICBwZGZEb3dubG9hZENhcHRpb246IFwiUERGXCIsXG4gIHhsc3hEb3dubG9hZENhcHRpb246IFwiRXhjZWxcIixcbiAgY3N2RG93bmxvYWRDYXB0aW9uOiBcIkNTVlwiLFxuICBzYXZlRGlhZ3JhbUFzUE5HOiBcIkRvd25sb2FkIHBsb3QgYWxzIGVlbiBwbmdcIixcbiAgaGlkZUVtcHR5QW5zd2VyczogXCJWZXJiZXJnIGxlZ2UgYW50d29vcmRlblwiLFxuICBzaG93RW1wdHlBbnN3ZXJzOiBcIlRvb24gbGVnZSBhbnR3b29yZGVuXCIsXG4gIFwidG9wTlZhbHVlVGV4dC0xXCI6IFwiQWxsZSBhbnR3b29yZGVuXCIsXG4gIFwidG9wTlZhbHVlVGV4dDVcIjogXCJUb3AgNSBhbnR3b29yZGVuXCIsXG4gIFwidG9wTlZhbHVlVGV4dDEwXCI6IFwiVG9wIDEwIGFudHdvb3JkZW5cIixcbiAgXCJ0b3BOVmFsdWVUZXh0MjBcIjogXCJUb3AgMjAgYW50d29vcmRlblwiLFxufTtcblxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcIm5sXCJdID0gZHV0Y2hTdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wibmxcIl0gPSBcIkR1dGNoXCI7XG4iLCIvLyBVbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgaWYgeW91IGNyZWF0ZSBhIGN1c3RvbSBkaWN0aW9uYXJ5XG4vLyBpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGVuZ2xpc2hTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIlVuZ3JvdXAgQnkgTWVcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXG4gIHNob3dDb2x1bW46IFwiU2hvdyBjb2x1bW5cIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1ha2UgY29sdW1uIHB1YmxpY1wiLFxuICBtb3ZlVG9EZXRhaWw6IFwiTW92ZSB0byBEZXRhaWxcIixcbiAgc2hvd0FzQ29sdW1uOiBcIlNob3cgYXMgQ29sdW1uXCIsXG4gIGZpbHRlclBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICByZW1vdmVSb3dzOiBcIlJlbW92ZSByb3dzXCIsXG4gIHNob3dMYWJlbDogXCJTaG93XCIsXG4gIGVudHJpZXNMYWJlbDogXCJlbnRyaWVzXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0cyBpbiB0YWJsZVwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJXb3JkY2xvdWRcIixcbiAgdmlzdWFsaXplcl9oaXN0b2dyYW06IFwiSGlzdG9ncmFtXCIsXG4gIHZpc3VhbGl6ZXJfbnVtYmVyOiBcIkF2ZXJhZ2VcIixcbiAgdmlzdWFsaXplcl9jaG9pY2VzOiBcIlRhYmxlXCIsXG4gIHZpc3VhbGl6ZXJfc2VsZWN0QmFzZTogXCJDaGFydFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxuICBjaGFydFR5cGVfdmJhcjogXCJWZXJ0aWNhbCBCYXJcIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiU3RhY2tlZCBCYXJcIixcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkRvdWdobnV0XCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlNjYXR0ZXJcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwiSGlkZVwiLFxuICBtYWtlUHJpdmF0ZUJ1dHRvbjogXCJNYWtlIHByaXZhdGVcIixcbiAgbWFrZVB1YmxpY0J1dHRvbjogXCJNYWtlIHB1YmxpY1wiLFxuICBzaG93QnV0dG9uOiBcIlNob3dcIixcbiAgZmlsdGVyOiBcIkZpbHRlclwiLFxuICByZXNldEZpbHRlcjogXCJSZXNldCBGaWx0ZXJcIixcbiAgY2hhbmdlTG9jYWxlOiBcIkNoYW5nZSBMb2NhbGVcIixcbiAgZW46IFwiRW5nbGlzaFwiLFxuICBmcjogXCJGcmFuw6dhaXNcIixcbiAgcnU6IFwi0KDRg9GB0YHQutC40LlcIixcbiAgZGU6IFwiRGV1dHNjaFwiLFxuICBjbGVhckJ1dHRvbjogXCJDbGVhclwiLFxuICBhZGRFbGVtZW50OiBcIkNob29zZSBxdWVzdGlvbiB0byBzaG93Li4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJEZWZhdWx0IE9yZGVyXCIsXG4gIGFzY09yZGVyOiBcIkFzY2VuZGluZ1wiLFxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGluZ1wiLFxuICBzaG93TWlub3JDb2x1bW5zOiBcIlNob3cgbWlub3IgY29sdW1uc1wiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJPdGhlciBpdGVtcyBhbmQgY29tbWVudHNcIixcbiAgc2hvd1BlcmNlbnRhZ2VzOiBcIlNob3cgcGVyY2VudGFnZXNcIixcbiAgaGlkZVBlcmNlbnRhZ2VzOiBcIkhpZGUgcGVyY2VudGFnZXNcIixcbiAgcGRmRG93bmxvYWRDYXB0aW9uOiBcIlBERlwiLFxuICB4bHN4RG93bmxvYWRDYXB0aW9uOiBcIkV4Y2VsXCIsXG4gIGNzdkRvd25sb2FkQ2FwdGlvbjogXCJDU1ZcIixcbiAgc2F2ZURpYWdyYW1Bc1BORzogXCJEb3dubG9hZCBwbG90IGFzIGEgcG5nXCIsXG4gIGhpZGVFbXB0eUFuc3dlcnM6IFwiSGlkZSBlbXB0eSBhbnN3ZXJzXCIsXG4gIHNob3dFbXB0eUFuc3dlcnM6IFwiU2hvdyBlbXB0eSBhbnN3ZXJzXCIsXG4gIFwidG9wTlZhbHVlVGV4dC0xXCI6IFwiQWxsIGFuc3dlcnNcIixcbiAgXCJ0b3BOVmFsdWVUZXh0NVwiOiBcIlRvcCA1IGFuc3dlcnNcIixcbiAgXCJ0b3BOVmFsdWVUZXh0MTBcIjogXCJUb3AgMTAgYW5zd2Vyc1wiLFxuICBcInRvcE5WYWx1ZVRleHQyMFwiOiBcIlRvcCAyMCBhbnN3ZXJzXCIsXG4gIGhpZGVNaXNzaW5nQW5zd2VyczogXCJIaWRlIG1pc3NpbmcgYW5zd2Vyc1wiLFxuICBzaG93TWlzc2luZ0Fuc3dlcnM6IFwiU2hvdyBtaXNzaW5nIGFuc3dlcnNcIixcbiAgbWlzc2luZ0Fuc3dlcnNMYWJlbDogXCJNaXNzaW5nIGFuc3dlcnNcIixcbiAgbm9WaXN1YWxpemVyRm9yUXVlc3Rpb246IFwiVGhpcyBxdWVzdGlvbiB0eXBlIGlzIG5vdCB2aXN1YWxpemVkIHlldFwiLFxuICBub1Jlc3VsdHM6IFwiVGhlcmUgYXJlIG5vIHJlc3VsdHMgeWV0XCIsXG4gIHNob3dQZXJWYWx1ZXM6IFwiUGVyIFZhbHVlc1wiLFxuICBzaG93UGVyQ29sdW1uczogXCJQZXIgQ29sdW1uc1wiLFxuICBhbnN3ZXI6IFwiQW5zd2VyXCIsXG4gIGNvcnJlY3RBbnN3ZXI6IFwiQ29ycmVjdCBhbnN3ZXI6IFwiLFxuICBwZXJjZW50OiBcIlBlcmNlbnRcIixcbiAgcmVzcG9uc2VzOiBcIlJlc3BvbnNlc1wiXG59O1xuXG4vLyBVbmNvbW1lbnQgdGhlIGxpbmVzIGJlbG93IGlmIHlvdSBjcmVhdGUgYSBjdXN0b20gZGljdGlvbmFyeS5cbi8vIFJlcGxhY2UgXCJlblwiIHdpdGggYSBjdXN0b20gbG9jYWxlIGNvZGUgKGZvciBleGFtcGxlLCBcImZyXCIgb3IgXCJkZVwiKSxcbi8vIFJlcGxhY2UgYGVuZ2xpc2hTdHJpbmdzYCB3aXRoIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0aGF0IGNvbnRhaW5zIHRoZSBjdXN0b20gZGljdGlvbmFyeS5cbi8vIGxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbi8vIGxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJFbmdsaXNoXCI7XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGZhcnNpU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwi2q/YsdmI2Ycg2KjZhtiv24wg2KjYp1wiLFxuICB1bmdyb3VwQnV0dG9uOiBcItit2LDZgSDar9ix2YjZh1wiLFxuICBzZWxlY3RCdXR0b246IFwi2KfZhtiq2K7Yp9ioXCIsXG4gIGhpZGVDb2x1bW46IFwi2YXYrtmB24wg2qnYsdiv2YYg2LPYqtmI2YZcIixcbiAgc2hvd0NvbHVtbjogXCLZhtmF2KfbjNi0INiz2KrZiNmGXCIsXG4gIG1vdmVUb0RldGFpbDogXCLYp9mG2KrZgtin2YQg2KjZhyDYrNiy2KbbjNin2KpcIixcbiAgc2hvd0FzQ29sdW1uOiBcItmG2YXYp9uM2LQg2KjZhyDYudmG2YjYp9mGINiz2KrZiNmGXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCLZhdiq2YjZhiDYr9ixINis2K/ZiNmEXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcItin2KjYsSDaqdmE2YXYp9iqXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwi2YXbjNmE2Ycg2KfbjFwiLFxuICBjaGFydFR5cGVfcGllOiBcItiv2KfYqNix2Ycg2KfbjChwaWUpXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcItm+2LHYp9qp2YbYr9qv24woU2NhdHRlcilcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIti52YLYsdio2Ycg2KfbjFwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcItmF2K7ZgduMXCIsXG4gIHJlc2V0RmlsdGVyOiBcItio2KfYstmG2LTYp9mG24wg2YHbjNmE2KrYsdmH2KdcIixcbiAgY2xlYXJCdXR0b246IFwi2b7Yp9qpINqp2LHYr9mGXCIsXG4gIGFkZEVsZW1lbnQ6IFwi2KfZhtiq2K7Yp9ioINiz2YjYp9mEINio2LHYp9uMINmG2YXYp9uM2LQuLi5cIlxufTtcblxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmYVwiXSA9IGZhcnNpU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZhXCJdID0gXCJGYXJzaShQZXJzaWFuKVwiO1xuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBmcmVuY2hTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm91cGVyXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwiRGlzc29jaWVyXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCJTw6lsZWN0aW9ubmVyXCIsXG4gIGhpZGVDb2x1bW46IFwiTWFzcXVlciBjb2xvbm5lXCIsXG4gIHNob3dDb2x1bW46IFwiQWZmaWNoZXIgY29sb25uZVwiLFxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwcml2w6lcIixcbiAgbWFrZVB1YmxpY0NvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwdWJsaWNcIixcbiAgbW92ZVRvRGV0YWlsOiBcIkTDqXBsYWNlciB2ZXJzIGTDqXRhaWxzXCIsXG4gIHNob3dBc0NvbHVtbjogXCJBZmZpY2hlciBlbiBjb2xvbm5lXCIsXG4gIGZpbHRlclBsYWNlaG9sZGVyOiBcIlJlY2hlcmNoZXIuLi5cIixcbiAgcmVtb3ZlUm93czogXCJTdXBwcmltZXIgY29sb25uZVwiLFxuICBzaG93TGFiZWw6IFwiQWZmaWNoZXJcIixcbiAgZW50cmllc0xhYmVsOiBcImVudHLDqWVzXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0ZXMgZW4gdGFibGVcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiTnVhZ2VzIGRlIG1vdHNcIixcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJyZXNcIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiQmFycmVzIGVtcGlsw6llc1wiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiQW5uZWF1XCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwiU2VjdGV1cnNcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiTnVhZ2VzIGRlIHBvaW50c1wiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXNcIixcbiAgZmlsdGVyOiBcIkZpbHRyZVwiLFxuICBoaWRlQnV0dG9uOiBcIk1hc3F1ZXJcIixcbiAgc2F2ZURpYWdyYW1Bc1BORzogXCJTYXV2ZXIgZW4gcG5nXCIsXG4gIG1ha2VQcml2YXRlQnV0dG9uOiBcIlJlbmRyZSBwcml2w6lcIixcbiAgbWFrZVB1YmxpY0J1dHRvbjogXCJSZW5kcmUgcHVibGlxdWVcIixcbiAgc2hvd0J1dHRvbjogXCJBZmZpY2hlclwiLFxuICByZXNldEZpbHRlcjogXCJSYWZyYWljaGlyIEZpbHRyZXNcIixcbiAgY2xlYXJCdXR0b246IFwiUmFmcmFpY2hpclwiLFxuICBhZGRFbGVtZW50OiBcIkNob2lzaXIgbGEgcXVlc3Rpb24gw6AgYWZmaWNoZXIuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1dFwiLFxuICBhc2NPcmRlcjogXCJBc2NlbmRhbnRcIixcbiAgZGVzY09yZGVyOiBcIkRlc2NlbmRhbnRcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJBZmZpY2hlciBsZXMgY29sb25uZXMgbWluZXVyZXNcIixcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiQXV0cmUgw6lsw6ltZW50IGV0IGNvbW1lbnRhaXJlc1wiLFxuICBub1Zpc3VhbGl6ZXJGb3JRdWVzdGlvbjogXCJDZSB0eXBlIGRlIHF1ZXN0aW9uIG4nZXN0IHBhcyBlbmNvcmUgdmlzdWFsaXPDqVwiLFxuICBub1Jlc3VsdHM6IFwiSWwgbid5IGEgcGFzIGVuY29yZSBkZSByw6lzdWx0YXRzXCIsXG4gIHNob3dQZXJWYWx1ZXM6IFwiUGFyIHZhbGV1clwiLFxuICBzaG93UGVyQ29sdW1uczogXCJQYXIgY29sb25uZVwiLFxuICBhbnN3ZXI6IFwiUsOpcG9uc2VcIixcbiAgY29ycmVjdEFuc3dlcjogXCJSw6lwb25zZSBjb3JyZWN0ZTogXCIsXG4gIHBlcmNlbnQ6IFwiUG91cmNlbnRhZ2VcIixcbiAgcmVzcG9uc2VzOiBcIlLDqXBvbnNlc1wiXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZyXCJdID0gZnJlbmNoU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZyXCJdID0gXCJGcmVuY2hcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZ2VybWFuU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwiR3J1cHBpZXJlblwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIkdydXBwaWVydW5nIGF1ZmhlYmVuXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCJNaWNoIGF1c3fDpGhsZW5cIixcbiAgaGlkZUNvbHVtbjogXCJTcGFsdGUgYXVzYmxlbmRlblwiLFxuICBzaG93Q29sdW1uOiBcIlNwYWx0ZSBlaW5ibGVuZGVuXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIlNwYWx0ZSBwcml2YXQgbWFjaGVuXCIsXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiU3BhbHRlIHZlcsO2ZmZlbnRsaWNoZW5cIixcbiAgbW92ZVRvRGV0YWlsOiBcImluIERldGFpbHMgdmVyc2NoaWViZW5cIixcbiAgc2hvd0FzQ29sdW1uOiBcIkFscyBTcGFsdGUgYW56ZWlnZW5cIixcbiAgZmlsdGVyUGxhY2Vob2xkZXI6IFwiU3VjaGUuLi5cIixcbiAgcmVtb3ZlUm93czogXCJaZWlsZW4gZW50ZmVybmVuXCIsXG4gIHNob3dMYWJlbDogXCJhbnplaWdlblwiLFxuICBlbnRyaWVzTGFiZWw6IFwiRWludHLDpGdlXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0ZSBpbiBUYWJlbGxlbmZvcm1cIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFsa2VuZGlhZ3JhbW1cIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiR2VzdGFwZWx0ZXMgQmFsa2VuZGlhZ3JhbW1cIixcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkRvbnV0LURpYWdyYW1tXCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwiS3JlaXNkaWFncmFtbVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJQdW5rdGVkaWFncmFtbVwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiUGVnZWxkaWFncmFtbVwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkF1ZnrDpGhsdW5nc2RpYWdyYW1tXCIsXG4gIGhpZGVCdXR0b246IFwiQXVzYmxlbmRlblwiLFxuICBtYWtlUHJpdmF0ZUJ1dHRvbjogXCJQcml2YXQgbWFjaGVuXCIsXG4gIG1ha2VQdWJsaWNCdXR0b246IFwiw5ZmZmVudGxpY2ggbWFjaGVuXCIsXG4gIHNob3dCdXR0b246IFwiQW56ZWlnZW5cIixcbiAgZmlsdGVyOiBcIkZpbHRlclwiLFxuICByZXNldEZpbHRlcjogXCJGaWx0ZXIgenVyw7xja3NldHplblwiLFxuICBjaGFuZ2VMb2NhbGU6IFwiTG9rYWxpc2llcnVuZyDDpG5kZXJuXCIsXG4gIGNsZWFyQnV0dG9uOiBcIkVpbnN0ZWxsdW5nZW4gbMO2c2NoZW5cIixcbiAgYWRkRWxlbWVudDogXCJXw6RobGVuIFNpZSBlaW5lIEZyYWdlLCB1bSB6dSB6ZWlnZW4uLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIlN0YW5kYXJkcmVpaGVuZm9sZ2VcIixcbiAgYXNjT3JkZXI6IFwiQXVmc3RlaWdlbmRcIixcbiAgZGVzY09yZGVyOiBcIkFic3RlaWdlbmRcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJLbGVpbmVyZSBTcGFsdGVuIGFuemVpZ2VuXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIkFuZGVyZSBQdW5rdGUgdW5kIEtvbW1lbnRhcmVcIixcbiAgc2hvd1BlcmNlbnRhZ2VzOiBcIlByb3plbnRzw6R0emUgYW56ZWlnZW5cIixcbiAgaGlkZVBlcmNlbnRhZ2VzOiBcIlByb3plbnRzw6R0emUgYXVzYmxlbmRlblwiLFxuICBwZGZEb3dubG9hZENhcHRpb246IFwiUERGXCIsXG4gIHhsc3hEb3dubG9hZENhcHRpb246IFwiRXhjZWxcIixcbiAgY3N2RG93bmxvYWRDYXB0aW9uOiBcIkNTVlwiLFxuICBzYXZlRGlhZ3JhbUFzUE5HOiBcIkRpYWdyYW1tIGFscyBwbmcgaGVydW50ZXJsYWRlblwiLFxuICBoaWRlRW1wdHlBbnN3ZXJzOiBcIkxlZXJlIEFudHdvcnRlbiBhdXNibGVuZGVuXCIsXG4gIHNob3dFbXB0eUFuc3dlcnM6IFwiTGVlcmUgQW50d29ydGVuIGFuemVpZ2VuXCIsXG4gIFwidG9wTlZhbHVlVGV4dC0xXCI6IFwiQWxsZSBBbnR3b3J0ZW5cIixcbiAgXCJ0b3BOVmFsdWVUZXh0NVwiOiBcIlRvcCA1IEFudHdvcnRlblwiLFxuICBcInRvcE5WYWx1ZVRleHQxMFwiOiBcIlRvcCAxMCBBbnR3b3J0ZW5cIixcbiAgXCJ0b3BOVmFsdWVUZXh0MjBcIjogXCJUb3AgMjAgQW50d29ydGVuXCIsXG4gIG5vVmlzdWFsaXplckZvclF1ZXN0aW9uOiBcIkbDvHIgZGllc2VuIEZyYWdldHlwIGdpYnQgZXMgbm9jaCBrZWluZSBWaXN1YWxpc2llcnVuZy5cIixcbiAgbm9SZXN1bHRzOiBcIkVzIGxpZWdlbiBub2NoIGtlaW5lIEVyZ2Vibmlzc2Ugdm9yXCJcbn07XG5cbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZGVcIl0gPSBnZXJtYW5TdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZGVcIl0gPSBcIkdlcm1hblwiO1xuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBub3J3ZWdpYW5TdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcnVwcGVyXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwiT3BwaGV2IGdydXBwZXJpbmdcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlZlbGdcIixcbiAgaGlkZUNvbHVtbjogXCJTa2p1bCBrb2xvbm5lXCIsXG4gIHNob3dDb2x1bW46IFwiVmlzIGtvbG9ubmVcIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiR2rDuHIga29sb25uZSBwcml2YXRcIixcbiAgbWFrZVB1YmxpY0NvbHVtbjogXCJHasO4ciBrb2xvbm5lIG9mZmVudGxpZ1wiLFxuICBtb3ZlVG9EZXRhaWw6IFwiRmx5dHQgdGlsIGRldGFsamVydCB2aXNuaW5nXCIsXG4gIHNob3dBc0NvbHVtbjogXCJWaXMgc29tIGtvbG9ubmVcIixcbiAgZmlsdGVyUGxhY2Vob2xkZXI6IFwiU8O4ay4uLlwiLFxuICByZW1vdmVSb3dzOiBcIkZqZXJuIHJhZGVyXCIsXG4gIHNob3dMYWJlbDogXCJWaXNcIixcbiAgZW50cmllc0xhYmVsOiBcIm9wcGbDuHJpbmdlclwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGFiZWxsdmlzbmluZ1wiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJPcmRza3lcIixcbiAgY2hhcnRUeXBlX2JhcjogXCJTdG9scGVkaWFncmFtXCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIlN0YWJsZXQgc3RvbHBlZGlhZ3JhbVwiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiSGp1bGRpYWdyYW1cIixcbiAgY2hhcnRUeXBlX3BpZTogXCJTZWt0b3JkaWFncmFtXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlB1bmt0ZGlhZ3JhbVwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiTcOlbGVkaWFncmFtXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiS3VsZWRpYWdyYW1cIixcbiAgaGlkZUJ1dHRvbjogXCJTa2p1bFwiLFxuICBtYWtlUHJpdmF0ZUJ1dHRvbjogXCJHasO4ciBwcml2YXRcIixcbiAgbWFrZVB1YmxpY0J1dHRvbjogXCJHasO4ciBvZmZlbnRsaWdcIixcbiAgc2hvd0J1dHRvbjogXCJWaXNcIixcbiAgcmVzZXRGaWx0ZXI6IFwiTnVsbHN0aWxsIGZpbHRlclwiLFxuICBjaGFuZ2VMb2NhbGU6IFwiQnl0dCBzcHLDpWtcIixcbiAgY2xlYXJCdXR0b246IFwiVMO4bVwiLFxuICBhZGRFbGVtZW50OiBcIlZlbGcgc3DDuHJzbcOlbC4uLlwiLFxuICBkZWZhdWx0T3JkZXI6IFwiU3RhbmRhcmRcIixcbiAgYXNjT3JkZXI6IFwiU3RpZ2VuZGVcIixcbiAgZGVzY09yZGVyOiBcIlN5bmtlbmRlXCIsXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiVmlzIG1pbmRyZSBrb2xvbm5lclwiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJBbm5ldCBvZyBrb21tZW50YXJlclwiLFxuICBzaG93UGVyY2VudGFnZXM6IFwiVmlzIHByb3NlbnRlclwiLFxuICBoaWRlUGVyY2VudGFnZXM6IFwiU2tqdWwgcHJvc2VudGVyXCIsXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcIm5vXCJdID0gbm9yd2VnaWFuU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcIm5vXCJdID0gXCJOb3J3ZWdpYW5cIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgcG9ydHVndWVzZVN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcIkFncnVwYXIgUG9yIE1pbVwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIkRlc2FncnVwYXIgUG9yIE1pbVwiLFxuICBzZWxlY3RCdXR0b246IFwiU2VsZWNpb25hclwiLFxuICBoaWRlQ29sdW1uOiBcIkVzY29uZGVyIGNvbHVuYVwiLFxuICBzaG93Q29sdW1uOiBcIk1vc3RyYXIgY29sdW5hXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIlRvcm5hciBjb2x1bmEgcHJpdmFkYVwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIlRvcm5hciBjb2x1bmEgcMO6YmxpY2FcIixcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmVyIHBhcmEgRGV0YWxoZXNcIixcbiAgc2hvd0FzQ29sdW1uOiBcIk1vc3RyYXIgY29tbyBDb2x1bmFcIixcbiAgZmlsdGVyUGxhY2Vob2xkZXI6IFwiUGVzcXVpc2FyLi4uXCIsXG4gIHJlbW92ZVJvd3M6IFwiUmVtb3ZlciBsaW5oYXNcIixcbiAgc2hvd0xhYmVsOiBcIk1vc3RyYXJcIixcbiAgZW50cmllc0xhYmVsOiBcImVudHJhZGFzXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0b3MgZW0gdGFiZWxhXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIk51dmVtIGRlIHBhbGF2cmFzXCIsXG4gIHZpc3VhbGl6ZXJfaGlzdG9ncmFtOiBcIkhpc3RvZ3JhbWFcIixcbiAgdmlzdWFsaXplcl9udW1iZXI6IFwiTcOpZGlhXCIsXG4gIHZpc3VhbGl6ZXJfY2hvaWNlczogXCJUYWJlbGFcIixcbiAgdmlzdWFsaXplcl9zZWxlY3RCYXNlOiBcIkdyw6FmaWNvXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFycmFcIixcbiAgY2hhcnRUeXBlX3ZiYXI6IFwiQmFycmEgdmVydGljYWxcIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiQmFycmEgRW1waWxoYWRhXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJSb3NjYVwiLFxuICBjaGFydFR5cGVfcGllOiBcIlRhcnRlXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIkxhc3Ryb1wiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiRXNjYWxhXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQmFsYVwiLFxuICBoaWRlQnV0dG9uOiBcIkVzY29uZGVyXCIsXG4gIG1ha2VQcml2YXRlQnV0dG9uOiBcIlRvcm5hciBwcml2YWRvXCIsXG4gIG1ha2VQdWJsaWNCdXR0b246IFwiVG9ybmFyIHDDumJsaWNvXCIsXG4gIHNob3dCdXR0b246IFwiTW9zdHJhclwiLFxuICBmaWx0ZXI6IFwiRmlsdHJhclwiLFxuICByZXNldEZpbHRlcjogXCJSZXN0YXVyYXIgRmlsdHJvXCIsXG4gIGNoYW5nZUxvY2FsZTogXCJNdWRhciBMb2NhbGl6YcOnw6NvXCIsXG4gIGVuOiBcIkluZ2zDqnNcIixcbiAgZnI6IFwiRnJhbmPDqnNcIixcbiAgcnU6IFwiUnVzc29cIixcbiAgZGU6IFwiQWxlbcOjb1wiLFxuICBjbGVhckJ1dHRvbjogXCJMaW1wYXJcIixcbiAgYWRkRWxlbWVudDogXCJFc2NvbGhlciBxdWVzdMOjbyBwYXJhIG1vc3RyYXIuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIk9yZGVuYcOnw6NvIFBhZHLDo29cIixcbiAgYXNjT3JkZXI6IFwiQXNjZW5kZW50ZVwiLFxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGVudGVcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJNb3N0cmFyIGNvbHVuYXMgbWVub3Jlc1wiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJPdXRyb3MgaXRlbnMgZSBjb21lbnTDoXJpb3NcIixcbiAgc2hvd1BlcmNlbnRhZ2VzOiBcIk1vc3RyYXIgcGVyY2VudHVhaXNcIixcbiAgaGlkZVBlcmNlbnRhZ2VzOiBcIkVzY29uZGVyIHBlcmNlbnR1YWlzXCIsXG4gIHBkZkRvd25sb2FkQ2FwdGlvbjogXCJQREZcIixcbiAgeGxzeERvd25sb2FkQ2FwdGlvbjogXCJFeGNlbFwiLFxuICBjc3ZEb3dubG9hZENhcHRpb246IFwiQ1NWXCIsXG4gIHNhdmVEaWFncmFtQXNQTkc6IFwiQmFpeGFyIGRpYWdyYW1hIGNvbW8gUE5HXCIsXG4gIGhpZGVFbXB0eUFuc3dlcnM6IFwiRXNjb25kZXIgcGVyZ3VudGFzIHZhemlhc1wiLFxuICBzaG93RW1wdHlBbnN3ZXJzOiBcIk1vc3RyYXIgcGVyZ3VudGFzIHZhemlhc1wiLFxuICBcInRvcE5WYWx1ZVRleHQtMVwiOiBcIlRvZGFzIGFzIHJlc3Bvc3Rhc1wiLFxuICBcInRvcE5WYWx1ZVRleHQ1XCI6IFwiUHJpbWVpcmFzIDUgcmVzcG9zdGFzXCIsXG4gIFwidG9wTlZhbHVlVGV4dDEwXCI6IFwiUHJpbWVpcmFzIDEwIHJlc3Bvc3Rhc1wiLFxuICBcInRvcE5WYWx1ZVRleHQyMFwiOiBcIlByaW1laXJhcyAyMCByZXNwb3N0YXNcIixcbiAgaGlkZU1pc3NpbmdBbnN3ZXJzOiBcIk9jdWx0YXIgcGVyZ3VudGFzIG7Do28gcmVzcG9uZGlkYXNcIixcbiAgc2hvd01pc3NpbmdBbnN3ZXJzOiBcIk1vc3RyYXIgcGVyZ3VudGFzIG7Do28gcmVzcG9uZGlkYXNcIixcbiAgbWlzc2luZ0Fuc3dlcnNMYWJlbDogXCJQZXJndW50YXMgbsOjbyByZXNwb25kaWRhc1wiLFxuICBub1Zpc3VhbGl6ZXJGb3JRdWVzdGlvbjogXCJFc3RlIHRpcG8gZGUgcGVyZ3VudGEgYWluZGEgbsOjbyBmb2kgdmlzdWFsaXphZGFcIixcbiAgbm9SZXN1bHRzOiBcIkFpbmRhIG7Do28gcG9zc3VpIHJlc3VsdGFkb3NcIixcbiAgc2hvd1BlclZhbHVlczogXCJQb3IgdmFsb3Jlc1wiLFxuICBzaG93UGVyQ29sdW1uczogXCJQb3IgY29sdW5hc1wiLFxuICBhbnN3ZXI6IFwiUmVzcG9zdGFcIixcbiAgY29ycmVjdEFuc3dlcjogXCJSZXNwb3N0YSBjb3JyZXRhOiBcIixcbiAgcGVyY2VudDogXCJQZXJjZW50YWdlbVwiLFxuICByZXNwb25zZXM6IFwiUmVzcG9zdGFzXCJcbn07XG5cbi8vVW5jb21tZW50IHRoZXNlIHR3byBsaW5lcyBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGUuIFlvdSBzaG91bGQgcmVwbGFjZSBcImVuXCIgYW5kIGVuU3RyaW5ncyB3aXRoIHlvdXIgbG9jYWxlIChcImZyXCIsIFwiZGVcIiBhbmQgc28gb24pIGFuZCB5b3VyIHZhcmlhYmxlLlxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJwdFwiXSA9IHBvcnR1Z3Vlc2VTdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wicHRcIl0gPSBcIlBvcnR1Z3XDqnNcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgcnVzc2lhblN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcIkdyb3VwIEJ5IE1lXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwiVW5ncm91cCBCeSBNZVwiLFxuICBzZWxlY3RCdXR0b246IFwiU2VsZWN0IE1lXCIsXG4gIGhpZGVDb2x1bW46IFwiSGlkZSBjb2x1bW5cIixcbiAgc2hvd0NvbHVtbjogXCJTaG93IGNvbHVtblwiLFxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJNYWtlIGNvbHVtbiBwcml2YXRlXCIsXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHVibGljXCIsXG4gIG1vdmVUb0RldGFpbDogXCJNb3ZlIHRvIERldGFpbFwiLFxuICBmaWx0ZXI6IFwi0KTQuNC70YzRgtGAXCIsXG4gIHNob3dBc0NvbHVtbjogXCJTaG93IGFzIENvbHVtblwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dHMgaW4gdGFibGVcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFyXCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIlN0YWNrZWQgQmFyXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxuICBjaGFydFR5cGVfcGllOiBcIlBpZVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJTY2F0dGVyXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcItCh0LrRgNGL0YLRjFwiLFxuICBzaG93QnV0dG9uOiBcItCf0L7QutCw0LfQsNGC0YxcIixcbiAgcmVzZXRGaWx0ZXI6IFwi0J7Rh9C40YHRgtC40YLRjCDRhNC40LvRjNGC0YBcIixcbiAgY2hhbmdlTG9jYWxlOiBcItCh0LzQtdC90LjRgtGMINGP0LfRi9C6XCIsXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1bHRcIixcbiAgYXNjT3JkZXI6IFwiQXNjZW5kaW5nXCIsXG4gIGRlc2NPcmRlcjogXCJEZXNjZW5kaW5nXCIsXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiU2hvdyBtaW5vciBjb2x1bW5zXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcItCU0YDRg9Cz0L7QtSDQuCDQutC+0LzQvNC10L3RgtCw0YDQuNC4XCIsXG4gIG5vVmlzdWFsaXplckZvclF1ZXN0aW9uOiBcItCt0YLQvtGCINGC0LjQvyDQstC+0L/RgNC+0YHQsCDQtdGJ0LUg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YLRgdGPINCw0L3QsNC70LjRgtC40LrQvtC5XCIsXG4gIG5vUmVzdWx0czogXCLQoNC10LfRg9C70YzRgtCw0YLRiyDQvtGC0YHRg9GC0YHRgtCy0YPRjtGCXCJcbn07XG5cbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wicnVcIl0gPSBydXNzaWFuU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcInJ1XCJdID0gXCJSdXNzaWFuXCI7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG4vL2xvY2FsaXphdGlvblxuaW1wb3J0IFwiLi4vYW5hbHl0aWNzLWxvY2FsaXphdGlvbi9mYXJzaVwiO1xuaW1wb3J0IFwiLi4vYW5hbHl0aWNzLWxvY2FsaXphdGlvbi9mcmVuY2hcIjtcbmltcG9ydCBcIi4uL2FuYWx5dGljcy1sb2NhbGl6YXRpb24vZ2VybWFuXCI7XG5pbXBvcnQgXCIuLi9hbmFseXRpY3MtbG9jYWxpemF0aW9uL25vcndlZ2lhblwiO1xuaW1wb3J0IFwiLi4vYW5hbHl0aWNzLWxvY2FsaXphdGlvbi9wb3J0dWd1ZXNlXCI7XG5pbXBvcnQgXCIuLi9hbmFseXRpY3MtbG9jYWxpemF0aW9uL3J1c3NpYW5cIjtcbmltcG9ydCBcIi4uL2FuYWx5dGljcy1sb2NhbGl6YXRpb24vZHV0Y2hcIjtcbmltcG9ydCBcIi4uL2FuYWx5dGljcy1sb2NhbGl6YXRpb24vYXJhYmljXCI7XG5cbi8vZXh0ZW5zaW9uc1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvcm93ZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvaGVhZGVyZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvY29sdW1uZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uL3RhYmxlcy90YWJsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL3RhYmxlcy9kYXRhdGFibGVzXCI7XG5leHBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvdGFibGVleHRlbnNpb25zXCI7XG5leHBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlscy9pbmRleFwiO1xuIiwiaW1wb3J0IHsgZW5nbGlzaFN0cmluZ3MgfSBmcm9tIFwiLi9hbmFseXRpY3MtbG9jYWxpemF0aW9uL2VuZ2xpc2hcIjtcblxuZXhwb3J0IHZhciBsb2NhbGl6YXRpb24gPSB7XG4gIGN1cnJlbnRMb2NhbGVWYWx1ZTogXCJcIixcbiAgZGVmYXVsdExvY2FsZVZhbHVlOiBcImVuXCIsXG4gIGxvY2FsZXM6IDx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+e30sXG4gIGxvY2FsZU5hbWVzOiA8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9Pnt9LFxuICBzdXBwb3J0ZWRMb2NhbGVzOiA8QXJyYXk8YW55Pj5bXSxcbiAgZ2V0IGN1cnJlbnRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID09PSB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZVxuICAgICAgPyBcIlwiXG4gICAgICA6IHRoaXMuY3VycmVudExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgY3VycmVudExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXQgZGVmYXVsdExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBkZWZhdWx0TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldFN0cmluZzogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZykge1xuICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGVcbiAgICAgID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV1cbiAgICAgIDogdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgdmFyIHJlc3VsdCA9IGxvY1tzdHJOYW1lXTtcbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxlc1tcImVuXCJdW3N0ck5hbWVdIHx8IHN0ck5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGdldExvY2FsZXM6IGZ1bmN0aW9uICgpOiBBcnJheTxzdHJpbmc+IHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgcmVzLnB1c2goXCJcIik7XG4gICAgaWYgKHRoaXMuc3VwcG9ydGVkTG9jYWxlcyAmJiB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzLnB1c2godGhpcy5zdXBwb3J0ZWRMb2NhbGVzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubG9jYWxlcykge1xuICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXMuc29ydCgpO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgc3VydmV5U3RyaW5ncyA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiZW5nbGlzaFwiO1xuIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uQ29tcG9zaXRlTW9kZWwsIFF1ZXN0aW9uQ3VzdG9tTW9kZWwsIFF1ZXN0aW9uRmlsZU1vZGVsLCBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwsIFF1ZXN0aW9uTWF0cml4TW9kZWwsIFF1ZXN0aW9uU2VsZWN0QmFzZSB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgQmFzZUNvbHVtbiwgQ29tbWVudENvbHVtbiwgQ29tcG9zaXRlUXVlc3Rpb25Db2x1bW4sIEN1c3RvbVF1ZXN0aW9uQ29sdW1uLCBGaWxlQ29sdW1uLCBJbWFnZUNvbHVtbiwgTWF0cml4Q29sdW1uLCBNYXRyaXhEcm9wZG93bkNvbHVtbiB9IGZyb20gXCIuL2NvbHVtbnNcIjtcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4vdGFibGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sdW1uc0J1aWxkZXIge1xuICBidWlsZENvbHVtbnMocXVlc3Rpb246IFF1ZXN0aW9uLCB0YWJsZTogVGFibGUpOiBBcnJheTxJQ29sdW1uPjtcbn1cbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29sdW1uc0J1aWxkZXI8VCBleHRlbmRzIFF1ZXN0aW9uID0gUXVlc3Rpb24+IGltcGxlbWVudHMgSUNvbHVtbnNCdWlsZGVyIHtcbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbHVtbihxdWVzdGlvbjogVCwgdGFibGU6IFRhYmxlKSB7XG4gICAgcmV0dXJuIG5ldyBCYXNlQ29sdW1uKHF1ZXN0aW9uLCB0YWJsZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRDb2x1bW5zQ29yZShxdWVzdGlvbjogVCwgdGFibGU6IFRhYmxlKTogQXJyYXk8SUNvbHVtbj4ge1xuICAgIGNvbnN0IGNvbHVtbnM6IEFycmF5PElDb2x1bW4+ID0gW107XG4gICAgY29sdW1ucy5wdXNoKHRoaXMuY3JlYXRlQ29sdW1uKHF1ZXN0aW9uLCB0YWJsZSkpO1xuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgcHVibGljIGJ1aWxkQ29sdW1ucyhxdWVzdGlvbjogVCwgdGFibGU6IFRhYmxlKTogQXJyYXk8SUNvbHVtbj4ge1xuICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmJ1aWxkQ29sdW1uc0NvcmUocXVlc3Rpb24sIHRhYmxlKTtcbiAgICBpZiAoXG4gICAgICBxdWVzdGlvbi5oYXNDb21tZW50IHx8XG4gICAgICAocXVlc3Rpb24uaGFzT3RoZXIgJiYgKDxhbnk+cXVlc3Rpb24gYXMgUXVlc3Rpb25TZWxlY3RCYXNlKVtcImdldFN0b3JlT3RoZXJzQXNDb21tZW50XCJdKCkpXG4gICAgKSB7XG4gICAgICBjb2x1bW5zLnB1c2gobmV3IENvbW1lbnRDb2x1bW4ocXVlc3Rpb24sIHRhYmxlKSk7XG4gICAgfVxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5zQnVpbGRlckZhY3Rvcnkge1xuICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBDb2x1bW5zQnVpbGRlckZhY3RvcnkgPSBuZXcgQ29sdW1uc0J1aWxkZXJGYWN0b3J5KCk7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgY29sdW1uc0J1aWxkZXJzOiB7W2luZGV4OiBzdHJpbmddOiBJQ29sdW1uc0J1aWxkZXIgfSA9IHt9O1xuICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRDb2x1bW5zQnVpbGRlcjogSUNvbHVtbnNCdWlsZGVyID0gbmV3IERlZmF1bHRDb2x1bW5zQnVpbGRlcigpO1xuXG4gIHJlZ2lzdGVyQnVpbGRlckNvbHVtbih0eXBlOiBzdHJpbmcsIGNvbHVtbnNCdWlsZGVyOiBJQ29sdW1uc0J1aWxkZXIpIHtcbiAgICB0aGlzLmNvbHVtbnNCdWlsZGVyc1t0eXBlXSA9IGNvbHVtbnNCdWlsZGVyO1xuICB9XG4gIGdldENvbHVtbnNCdWlsZGVyKHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnNCdWlsZGVyc1t0eXBlXSB8fCB0aGlzLmRlZmF1bHRDb2x1bW5zQnVpbGRlcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0cml4Q29sdW1uc0J1aWxkZXIgZXh0ZW5kcyBEZWZhdWx0Q29sdW1uc0J1aWxkZXI8UXVlc3Rpb25NYXRyaXhNb2RlbD4ge1xuICBwcm90ZWN0ZWQgYnVpbGRDb2x1bW5zQ29yZShxdWVzdGlvbkJhc2U6IFF1ZXN0aW9uLCB0YWJsZTogVGFibGUpOiBJQ29sdW1uW10ge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gPFF1ZXN0aW9uTWF0cml4TW9kZWw+cXVlc3Rpb25CYXNlO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcbiAgICBxdWVzdGlvbi5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbHVtbnMucHVzaChuZXcgTWF0cml4Q29sdW1uKHF1ZXN0aW9uLCByb3csIHRhYmxlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cbn1cbkNvbHVtbnNCdWlsZGVyRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlckJ1aWxkZXJDb2x1bW4oXCJtYXRyaXhcIiwgbmV3IE1hdHJpeENvbHVtbnNCdWlsZGVyKCkpO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VDb2x1bW5zQnVpbGRlciBleHRlbmRzIERlZmF1bHRDb2x1bW5zQnVpbGRlciB7XG4gIHByb3RlY3RlZCBjcmVhdGVDb2x1bW4ocXVlc3Rpb246IFF1ZXN0aW9uLCB0YWJsZTogVGFibGUpOiBJbWFnZUNvbHVtbiB7XG4gICAgcmV0dXJuIG5ldyBJbWFnZUNvbHVtbihxdWVzdGlvbiwgdGFibGUpO1xuICB9XG59XG5Db2x1bW5zQnVpbGRlckZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJCdWlsZGVyQ29sdW1uKFwic2lnbmF0dXJlcGFkXCIsIG5ldyBJbWFnZUNvbHVtbnNCdWlsZGVyKCkpO1xuXG5leHBvcnQgY2xhc3MgRmlsZUNvbHVtbnNCdWlsZGVyIGV4dGVuZHMgRGVmYXVsdENvbHVtbnNCdWlsZGVyPFF1ZXN0aW9uRmlsZU1vZGVsPiB7XG4gIHByb3RlY3RlZCBjcmVhdGVDb2x1bW4ocXVlc3Rpb246IFF1ZXN0aW9uRmlsZU1vZGVsLCB0YWJsZTogVGFibGUpOiBGaWxlQ29sdW1uIHtcbiAgICByZXR1cm4gbmV3IEZpbGVDb2x1bW4ocXVlc3Rpb24sIHRhYmxlKTtcbiAgfVxufVxuQ29sdW1uc0J1aWxkZXJGYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyQnVpbGRlckNvbHVtbihcImZpbGVcIiwgbmV3IEZpbGVDb2x1bW5zQnVpbGRlcigpKTtcblxuZXhwb3J0IGNsYXNzIE1hdHJpeERyb3Bkb3duQ29sdW1uQnVpbGRlciBleHRlbmRzIERlZmF1bHRDb2x1bW5zQnVpbGRlciB7XG4gIHB1YmxpYyBidWlsZENvbHVtbnMocXVlc3Rpb25CYXNlOiBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwsIHRhYmxlOiBUYWJsZSk6IEFycmF5PElDb2x1bW4+IHtcbiAgICBjb25zdCBxdWVzdGlvbiA9IDxRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWw+cXVlc3Rpb25CYXNlO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcbiAgICBxdWVzdGlvbi5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIHF1ZXN0aW9uLmNvbHVtbnMuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBjb2x1bW5zLnB1c2gobmV3IE1hdHJpeERyb3Bkb3duQ29sdW1uKHF1ZXN0aW9uLCByb3csIGNvbCwgdGFibGUpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG59XG5Db2x1bW5zQnVpbGRlckZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJCdWlsZGVyQ29sdW1uKFwibWF0cml4ZHJvcGRvd25cIiwgbmV3IE1hdHJpeERyb3Bkb3duQ29sdW1uQnVpbGRlcigpKTtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbUNvbHVtbnNCdWlsZGVyIGV4dGVuZHMgRGVmYXVsdENvbHVtbnNCdWlsZGVyPFF1ZXN0aW9uQ3VzdG9tTW9kZWw+IHtcbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbHVtbihxdWVzdGlvbjogUXVlc3Rpb25DdXN0b21Nb2RlbCwgdGFibGU6IFRhYmxlKTogQ3VzdG9tUXVlc3Rpb25Db2x1bW4ge1xuICAgIHJldHVybiBuZXcgQ3VzdG9tUXVlc3Rpb25Db2x1bW4ocXVlc3Rpb24sIHRhYmxlKTtcbiAgfVxufVxuQ29sdW1uc0J1aWxkZXJGYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyQnVpbGRlckNvbHVtbihcImN1c3RvbVwiLCBuZXcgQ3VzdG9tQ29sdW1uc0J1aWxkZXIoKSk7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVDb2x1bW5zQnVpbGRlciBleHRlbmRzIERlZmF1bHRDb2x1bW5zQnVpbGRlcjxRdWVzdGlvbkNvbXBvc2l0ZU1vZGVsPiB7XG4gIHByb3RlY3RlZCBjcmVhdGVDb2x1bW4ocXVlc3Rpb246IFF1ZXN0aW9uQ29tcG9zaXRlTW9kZWwsIHRhYmxlOiBUYWJsZSk6IENvbXBvc2l0ZVF1ZXN0aW9uQ29sdW1uIHtcbiAgICByZXR1cm4gbmV3IENvbXBvc2l0ZVF1ZXN0aW9uQ29sdW1uKHF1ZXN0aW9uLCB0YWJsZSk7XG4gIH1cbn1cbkNvbHVtbnNCdWlsZGVyRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlckJ1aWxkZXJDb2x1bW4oXCJjb21wb3NpdGVcIiwgbmV3IENvbXBvc2l0ZUNvbHVtbnNCdWlsZGVyKCkpO1xuIiwiaW1wb3J0IHsgQmFzZSwgSXRlbVZhbHVlLCBNYXRyaXhSb3dNb2RlbCwgUXVlc3Rpb24sIFF1ZXN0aW9uQ29tcG9zaXRlTW9kZWwsIFF1ZXN0aW9uQ3VzdG9tTW9kZWwsIFF1ZXN0aW9uRmlsZU1vZGVsLCBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwsIFF1ZXN0aW9uTWF0cml4TW9kZWwsIHNldHRpbmdzIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBjcmVhdGVJbWFnZXNDb250YWluZXIsIGNyZWF0ZUxpbmtzQ29udGFpbmVyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBJQ2VsbERhdGEsIElDb2x1bW4sIENvbHVtbkRhdGFUeXBlLCBRdWVzdGlvbkxvY2F0aW9uLCBJQ29sdW1uRGF0YSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgSVRhYmxlT3B0aW9ucywgVGFibGUgfSBmcm9tIFwiLi90YWJsZVwiO1xuZXhwb3J0IGNsYXNzIEJhc2VDb2x1bW48VCBleHRlbmRzIFF1ZXN0aW9uID0gUXVlc3Rpb24+IGltcGxlbWVudHMgSUNvbHVtbiB7XG4gIGRhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcbiAgaXNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgaXNQdWJsaWM6IGJvb2xlYW4gPSB0cnVlO1xuICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbiA9IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgdmlzaWJsZUluZGV4PzogbnVtYmVyO1xuICBpc0NvbW1lbnQ/OiBib29sZWFuO1xuICBwcml2YXRlIG5hbWVWYWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIGRpc3BsYXlOYW1lVmFsdWU/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHF1ZXN0aW9uOiBULCBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlKSB7XG4gICAgdGhpcy5kYXRhVHlwZSA9IHRoaXMuZ2V0RGF0YVR5cGUoKTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIGlmKCF0aGlzLm5hbWVWYWx1ZSkge1xuICAgICAgdGhpcy5uYW1lID0gdGhpcy5nZXROYW1lKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5hbWVWYWx1ZTtcbiAgfVxuICBzZXQgbmFtZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMubmFtZVZhbHVlID0gdmFsO1xuICB9XG4gIGdldCBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIGlmKCF0aGlzLmRpc3BsYXlOYW1lVmFsdWUpIHtcbiAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSB0aGlzLmdldERpc3BsYXlOYW1lKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRpc3BsYXlOYW1lVmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCBkaXNwbGF5TmFtZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuZGlzcGxheU5hbWVWYWx1ZSA9IHZhbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXREaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRhYmxlLnVzZU5hbWVzQXNUaXRsZXNcbiAgICAgID8gdGhpcy5xdWVzdGlvbi5uYW1lXG4gICAgICA6ICh0aGlzLnF1ZXN0aW9uLnRpdGxlIHx8IFwiXCIpLnRyaW0oKSB8fCB0aGlzLnF1ZXN0aW9uLm5hbWU7XG4gIH1cbiAgcHJvdGVjdGVkIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi5uYW1lO1xuICB9XG4gIHByb3RlY3RlZCBnZXREYXRhVHlwZSgpOiBDb2x1bW5EYXRhVHlwZSB7XG4gICAgcmV0dXJuIENvbHVtbkRhdGFUeXBlLlRleHQ7XG4gIH1cbiAgcHJvdGVjdGVkIGdldERpc3BsYXlWYWx1ZUNvcmUoZGF0YTogYW55KSB7XG4gICAgcmV0dXJuIGRhdGFbdGhpcy5uYW1lXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXR1cFJlYWR5Q2hhbmdlZENhbGxiYWNrKHRhYmxlOiBUYWJsZSwgcXVlc3Rpb246IFF1ZXN0aW9uKSB7XG4gICAgaWYoISFxdWVzdGlvbikge1xuICAgICAgY29uc3Qgb25SZWFkeUNoYW5nZWRDYWxsYmFjayA9IChzZW5kZXIsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgaWYob3B0aW9ucy5pc1JlYWR5KSB7XG4gICAgICAgICAgdGFibGUucmVmcmVzaCghdGFibGUuaXNJbml0VGFibGVEYXRhUHJvY2Vzc2luZyk7XG4gICAgICAgICAgc2VuZGVyLm9uUmVhZHlDaGFuZ2VkLnJlbW92ZShvblJlYWR5Q2hhbmdlZENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmKCFxdWVzdGlvbi5pc1JlYWR5KSB7XG4gICAgICAgIHF1ZXN0aW9uLm9uUmVhZHlDaGFuZ2VkLmFkZChvblJlYWR5Q2hhbmdlZENhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGlzcGxheVZhbHVlKGRhdGE6IGFueSwgdGFibGU6IFRhYmxlLCBvcHRpb25zOiBJVGFibGVPcHRpb25zKTogYW55IHtcbiAgICBsZXQgZGlzcGxheVZhbHVlID0gdGhpcy5nZXREaXNwbGF5VmFsdWVDb3JlKGRhdGEpO1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbjtcblxuICAgIGlmICghIXF1ZXN0aW9uKSB7XG4gICAgICBpZiAob3B0aW9ucy51c2VWYWx1ZXNBc0xhYmVscykge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSBxdWVzdGlvbi52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IHF1ZXN0aW9uLmRpc3BsYXlWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlWYWx1ZTtcbiAgfVxuICBwcml2YXRlIGZvcm1hdERpc3BsYXlWYWx1ZShkaXNwbGF5VmFsdWU6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2YgZGlzcGxheVZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICA/IGRpc3BsYXlWYWx1ZVxuICAgICAgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpIHx8IFwiXCI7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2VsbERhdGEodGFibGU6IFRhYmxlLCBkYXRhOiBhbnkpOiBJQ2VsbERhdGEge1xuICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHRoaXMuZ2V0RGlzcGxheVZhbHVlKGRhdGEsIHRhYmxlLCB0YWJsZS5vcHRpb25zKTtcbiAgICB0aGlzLnNldHVwUmVhZHlDaGFuZ2VkQ2FsbGJhY2sodGFibGUsIHRoaXMucXVlc3Rpb24pO1xuICAgIHJldHVybiB7IHF1ZXN0aW9uOiB0aGlzLnF1ZXN0aW9uLCBkaXNwbGF5VmFsdWU6IHRoaXMuZm9ybWF0RGlzcGxheVZhbHVlKGRpc3BsYXlWYWx1ZSkgfTtcbiAgfVxuICBwdWJsaWMgdG9KU09OKCk6IElDb2x1bW5EYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICBkYXRhVHlwZTogdGhpcy5kYXRhVHlwZSxcbiAgICAgIGlzVmlzaWJsZTogdGhpcy5pc1Zpc2libGUsXG4gICAgICBpc1B1YmxpYzogdGhpcy5pc1B1YmxpYyxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uXG4gICAgfTtcbiAgfVxuICBwdWJsaWMgZnJvbUpTT04oZGF0YTogSUNvbHVtbkRhdGEpIHtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRDb2x1bW4gZXh0ZW5kcyBCYXNlQ29sdW1uIHtcbiAgcHJvdGVjdGVkIGdldERpc3BsYXlWYWx1ZShkYXRhOiBhbnksIHRhYmxlOiBUYWJsZSwgb3B0aW9uczogSVRhYmxlT3B0aW9ucyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGlzcGxheVZhbHVlQ29yZShkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tbWVudENvbHVtbiBleHRlbmRzIEJhc2VDb2x1bW4ge1xuICBwcm90ZWN0ZWQgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLnF1ZXN0aW9uLm5hbWV9JHtzZXR0aW5ncy5jb21tZW50UHJlZml4fWA7XG4gIH1cbiAgcHJvdGVjdGVkIGdldERpc3BsYXlOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucXVlc3Rpb24uaGFzT3RoZXJcbiAgICAgID8gKDxhbnk+dGhpcy5xdWVzdGlvbikub3RoZXJUZXh0XG4gICAgICA6IHRoaXMucXVlc3Rpb24uY29tbWVudFRleHQ7XG4gIH1cbiAgcHJvdGVjdGVkIGdldERpc3BsYXlWYWx1ZShkYXRhOiBhbnksIHRhYmxlOiBUYWJsZSwgb3B0aW9uczogSVRhYmxlT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnF1ZXN0aW9uLmNvbW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdHJpeENvbHVtbiBleHRlbmRzIEJhc2VDb2x1bW48UXVlc3Rpb25NYXRyaXhNb2RlbD4ge1xuICBwcml2YXRlIHZhbHVlTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHZhbHVlUGF0aDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCwgcHJpdmF0ZSByb3c6IE1hdHJpeFJvd01vZGVsLCB0YWJsZTogVGFibGUpIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgdGFibGUpO1xuICAgIHRoaXMudmFsdWVOYW1lID0gdGhpcy5xdWVzdGlvbi5uYW1lO1xuICAgIHRoaXMudmFsdWVQYXRoID0gdGhpcy5yb3c/LnZhbHVlO1xuICB9XG4gIHByb3RlY3RlZCBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucXVlc3Rpb24ubmFtZSArIFwiLlwiICsgdGhpcy5yb3c/LnZhbHVlO1xuICB9XG4gIHByb3RlY3RlZCBnZXREaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRhYmxlID0gdGhpcy50YWJsZTtcbiAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMucXVlc3Rpb247XG4gICAgY29uc3Qgcm93ID0gdGhpcy5yb3c7XG4gICAgcmV0dXJuICh0YWJsZS51c2VOYW1lc0FzVGl0bGVzXG4gICAgICA/IHF1ZXN0aW9uLm5hbWVcbiAgICAgIDogKHF1ZXN0aW9uLnRpdGxlIHx8IFwiXCIpLnRyaW0oKSB8fCBxdWVzdGlvbi5uYW1lKSArIFwiIC0gXCIgKyAodGFibGUudXNlTmFtZXNBc1RpdGxlcyA/IHJvdz8udmFsdWUgOiByb3c/LmxvY1RleHQudGV4dE9ySHRtbCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGlzcGxheVZhbHVlKGRhdGE6IGFueSwgdGFibGU6IFRhYmxlLCBvcHRpb25zOiBJVGFibGVPcHRpb25zKSB7XG4gICAgbGV0IGRpc3BsYXlWYWx1ZSA9IGRhdGFbdGhpcy52YWx1ZU5hbWVdO1xuICAgIGlmKHRoaXMudmFsdWVQYXRoICYmIHR5cGVvZiBkaXNwbGF5VmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9IGRpc3BsYXlWYWx1ZVt0aGlzLnZhbHVlUGF0aF07XG4gICAgICBpZihkaXNwbGF5VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjaG9pY2VWYWx1ZSA9IEl0ZW1WYWx1ZS5nZXRJdGVtQnlWYWx1ZSh0aGlzLnF1ZXN0aW9uLmNvbHVtbnMsIGRpc3BsYXlWYWx1ZSk7XG4gICAgICAgIGlmKCEhY2hvaWNlVmFsdWUpIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBvcHRpb25zLnVzZVZhbHVlc0FzTGFiZWxzID8gY2hvaWNlVmFsdWUudmFsdWUgOiBjaG9pY2VWYWx1ZS5sb2NUZXh0LnRleHRPckh0bWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VDb2x1bW4gZXh0ZW5kcyBCYXNlQ29sdW1uIHtcbiAgcHJvdGVjdGVkIGdldERhdGFUeXBlKCk6IENvbHVtbkRhdGFUeXBlIHtcbiAgICByZXR1cm4gQ29sdW1uRGF0YVR5cGUuSW1hZ2U7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVDb2x1bW4gZXh0ZW5kcyBCYXNlQ29sdW1uPFF1ZXN0aW9uRmlsZU1vZGVsPiB7XG4gIHByb3RlY3RlZCBnZXREYXRhVHlwZSgpOiBDb2x1bW5EYXRhVHlwZSB7XG4gICAgcmV0dXJuIENvbHVtbkRhdGFUeXBlLkZpbGVMaW5rO1xuICB9XG4gIHByb3RlY3RlZCBnZXREaXNwbGF5VmFsdWUoZGF0YTogYW55LCB0YWJsZTogVGFibGUsIG9wdGlvbnM6IElUYWJsZU9wdGlvbnMpIHtcbiAgICBsZXQgZGlzcGxheVZhbHVlID0gdGhpcy5nZXREaXNwbGF5VmFsdWVDb3JlKGRhdGEpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRpc3BsYXlWYWx1ZSkpIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9IFRhYmxlLnNob3dGaWxlc0FzSW1hZ2VzID8gY3JlYXRlSW1hZ2VzQ29udGFpbmVyKFxuICAgICAgICBkaXNwbGF5VmFsdWVcbiAgICAgICkub3V0ZXJIVE1MIDogY3JlYXRlTGlua3NDb250YWluZXIoXG4gICAgICAgIGRpc3BsYXlWYWx1ZVxuICAgICAgKS5vdXRlckhUTUw7XG4gICAgfVxuICAgIHJldHVybiBkaXNwbGF5VmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBNYXRyaXhEcm9wZG93bkNvbHVtbiBleHRlbmRzIEJhc2VDb2x1bW48UXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsPiB7XG4gIHByaXZhdGUgcm93VmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSBjb2xOYW1lOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwsIHByb3RlY3RlZCByb3csIHByb3RlY3RlZCBjb2wsIHRhYmxlOiBUYWJsZSkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCB0YWJsZSk7XG4gICAgdGhpcy5yb3dWYWx1ZSA9IHRoaXMucm93LnZhbHVlO1xuICAgIHRoaXMuY29sTmFtZSA9IHRoaXMuY29sLm5hbWU7XG4gIH1cbiAgcHJvdGVjdGVkIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi5uYW1lICsgXCIuXCIgKyB0aGlzLnJvdy52YWx1ZSArIFwiLlwiICsgdGhpcy5jb2wubmFtZTtcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0RGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCB0YWJsZSA9IHRoaXMudGFibGU7XG4gICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9uO1xuICAgIHJldHVybiAodGhpcy50YWJsZS51c2VOYW1lc0FzVGl0bGVzXG4gICAgICA/IHF1ZXN0aW9uLm5hbWVcbiAgICAgIDogKHF1ZXN0aW9uLnRpdGxlIHx8IFwiXCIpLnRyaW0oKSB8fCBxdWVzdGlvbi5uYW1lKSArIFwiIC0gXCIgKyAodGFibGUudXNlTmFtZXNBc1RpdGxlcyA/IHRoaXMucm93LnZhbHVlIDogdGhpcy5yb3cubG9jVGV4dC50ZXh0T3JIdG1sKSArIFwiIC0gXCIgKyAodGFibGUudXNlTmFtZXNBc1RpdGxlcyA/IHRoaXMuY29sLm5hbWUgOiB0aGlzLmNvbC5sb2NUaXRsZS50ZXh0T3JIdG1sKTtcblxuICB9XG4gIHByb3RlY3RlZCBnZXREaXNwbGF5VmFsdWUoZGF0YTogYW55LCB0YWJsZTogVGFibGUsIG9wdGlvbnM6IElUYWJsZU9wdGlvbnMpIHtcbiAgICBsZXQgZGlzcGxheVZhbHVlID0gZGF0YVt0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbjtcbiAgICBpZih0aGlzLnJvd1ZhbHVlICYmIHRoaXMuY29sTmFtZSAmJiB0eXBlb2YgZGlzcGxheVZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBsZXQgW3Jvd0lkLCBjb2xJZF0gPSBbdGhpcy5yb3dWYWx1ZSwgdGhpcy5jb2xOYW1lXTtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9IHF1ZXN0aW9uLnZhbHVlO1xuICAgICAgaWYoIW9wdGlvbnMudXNlVmFsdWVzQXNMYWJlbHMpIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gcXVlc3Rpb24uZGlzcGxheVZhbHVlO1xuICAgICAgICByb3dJZCA9IHF1ZXN0aW9uLnJvd3MuZmlsdGVyKHJvdyA9PiByb3cudmFsdWUgPT09IHRoaXMucm93VmFsdWUpWzBdLnRleHQ7XG4gICAgICAgIGNvbElkID0gcXVlc3Rpb24uZ2V0Q29sdW1uQnlOYW1lKHRoaXMuY29sTmFtZSkudGl0bGU7XG4gICAgICB9XG4gICAgICBkaXNwbGF5VmFsdWUgPSAoZGlzcGxheVZhbHVlW3Jvd0lkXSAmJiBkaXNwbGF5VmFsdWVbcm93SWRdW2NvbElkXSkgfHwgXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tUXVlc3Rpb25Db2x1bW4gZXh0ZW5kcyBCYXNlQ29sdW1uPFF1ZXN0aW9uQ3VzdG9tTW9kZWw+IHtcbiAgcHVibGljIGdldENlbGxEYXRhKHRhYmxlOiBUYWJsZSwgZGF0YTogYW55KTogSUNlbGxEYXRhIHtcbiAgICB0aGlzLnNldHVwUmVhZHlDaGFuZ2VkQ2FsbGJhY2sodGFibGUsIHRoaXMucXVlc3Rpb24uY29udGVudFF1ZXN0aW9uKTtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2VsbERhdGEodGFibGUsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVRdWVzdGlvbkNvbHVtbiBleHRlbmRzIEJhc2VDb2x1bW48UXVlc3Rpb25Db21wb3NpdGVNb2RlbD4ge1xuICBwdWJsaWMgZ2V0Q2VsbERhdGEodGFibGU6IFRhYmxlLCBkYXRhOiBhbnkpOiBJQ2VsbERhdGEge1xuICAgIGNvbnN0IHF1ZXN0aW9uTGlzdDogUXVlc3Rpb25bXSA9IFtdO1xuICAgIHRoaXMucXVlc3Rpb24uY29udGVudFBhbmVsLmFkZFF1ZXN0aW9uc1RvTGlzdChxdWVzdGlvbkxpc3QpO1xuICAgIHF1ZXN0aW9uTGlzdC5mb3JFYWNoKChxdWVzdGlvbjogUXVlc3Rpb24pID0+IHtcbiAgICAgIHRoaXMuc2V0dXBSZWFkeUNoYW5nZWRDYWxsYmFjayh0YWJsZSwgcXVlc3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBzdXBlci5nZXRDZWxsRGF0YSh0YWJsZSwgZGF0YSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBRdWVzdGlvbiwgU3VydmV5TW9kZWwgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IElUYWJsZU9wdGlvbnMsIFRhYmxlIH0gZnJvbSBcIi4vdGFibGVcIjtcblxuZXhwb3J0IGVudW0gUXVlc3Rpb25Mb2NhdGlvbiB7XG4gIENvbHVtbixcbiAgUm93LFxufVxuZXhwb3J0IGVudW0gQ29sdW1uRGF0YVR5cGUge1xuICBUZXh0LFxuICBGaWxlTGluayxcbiAgSW1hZ2UsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNlbGxEYXRhIHtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uO1xuICBkaXNwbGF5VmFsdWU6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29sdW1uRGF0YSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgZGF0YVR5cGU6IENvbHVtbkRhdGFUeXBlO1xuICBpc1Zpc2libGU6IGJvb2xlYW47XG4gIGlzUHVibGljOiBib29sZWFuO1xuICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGlzQ29tbWVudD86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIElDb2x1bW4gZXh0ZW5kcyBJQ29sdW1uRGF0YSB7XG4gIHZpc2libGVJbmRleD86IG51bWJlcjtcbiAgZnJvbUpTT04oanNvbjogYW55KTogdm9pZDtcbiAgZ2V0Q2VsbERhdGEodGFibGU6IFRhYmxlLCBkYXRhOiBhbnkpOiBJQ2VsbERhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlU3RhdGUge1xuICBsb2NhbGU/OiBzdHJpbmc7XG4gIGVsZW1lbnRzPzogSUNvbHVtbkRhdGFbXTtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBlcm1pc3Npb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzUHVibGljOiBib29sZWFuO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgSVRhYmxlT3B0aW9ucywgVGFibGUsIFRhYmxlUm93IH0gZnJvbSBcIi4vdGFibGVcIjtcbmltcG9ydCB7IFN1cnZleU1vZGVsLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgQ29sdW1uRGF0YVR5cGUsIElDb2x1bW4sIElDb2x1bW5EYXRhLCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIi4vZGF0YXRhYmxlcy5zY3NzXCIpO1xuXG5pZiAoISFkb2N1bWVudCkge1xuICB2YXIgc3ZnVGVtcGxhdGUgPSByZXF1aXJlKFwiaHRtbC1sb2FkZXI/aW50ZXJwb2xhdGUhdmFsLWxvYWRlciEuLi9zdmdidW5kbGUuaHRtbFwiKTtcbiAgdmFyIHRlbXBsYXRlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcGxhdGVIb2xkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0ZW1wbGF0ZUhvbGRlci5pbm5lckhUTUwgPSBzdmdUZW1wbGF0ZTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZUhvbGRlcik7XG59XG5cbnZhciBqUXVlcnkgPSAoPGFueT53aW5kb3cpW1wialF1ZXJ5XCJdO1xuXG5pbnRlcmZhY2UgRGF0YVRhYmxlc09wdGlvbnMgZXh0ZW5kcyBJVGFibGVPcHRpb25zIHtcbiAgYnV0dG9uczogYm9vbGVhbiB8IHN0cmluZ1tdIHwgYW55W10gfCBhbnk7XG5cbiAgZG9tOiBzdHJpbmc7XG5cbiAgb3JkZXJGaXhlZDogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IEFycmF5PEFycmF5PG51bWJlciB8IHN0cmluZz4+IHwgb2JqZWN0O1xuXG4gIHJvd0dyb3VwOiBib29sZWFuIHwgYW55O1xuXG4gIGhlYWRlckNhbGxiYWNrOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVzIGV4dGVuZHMgVGFibGUge1xuICBwdWJsaWMgZGF0YXRhYmxlQXBpOiBhbnk7XG5cbiAgcHVibGljIGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgaXMgZmlyZWQgY29sdW1ucyBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGNoYW5nZWQuXG4gICAqIDxici8+IHNlbmRlciB0aGUgZGF0YXRhYmxlcyBhZGFwdGVyXG4gICAqIDxici8+IG9wdGlvbnMuc3VydmV5IGN1cnJlbnQgc3VydmV5XG4gICAqIEBzZWUgZ2V0Q29sdW1uc1xuICAgKi9cbiAgcHVibGljIG9uQ29sdW1uc1Jlb3JkZXI6IEV2ZW50PFxuICAgIChzZW5kZXI6IERhdGFUYWJsZXMsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIERhdGFUYWJsZXMsXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksIERhdGFUYWJsZXMsIGFueT4oKTtcblxuICBwdWJsaWMgc3RhdGljIGluaXRKUXVlcnkoJDogYW55KSB7XG4gICAgalF1ZXJ5ID0gJDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2V0IGhhdmVDb21tZXJjaWFsTGljZW5zZSh2YWw6IGJvb2xlYW4pIHtcbiAgICBUYWJsZS5oYXZlQ29tbWVyY2lhbExpY2Vuc2UgPSB2YWw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzdXJ2ZXk6IFN1cnZleU1vZGVsLFxuICAgIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgb3B0aW9ucz86IERhdGFUYWJsZXNPcHRpb25zLFxuICAgIF9jb2x1bW5zRGF0YTogQXJyYXk8SUNvbHVtbkRhdGE+ID0gW11cbiAgKSB7XG4gICAgc3VwZXIoc3VydmV5LCBkYXRhLCBvcHRpb25zLCBfY29sdW1uc0RhdGEpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKCF0aGlzLnJlbmRlclJlc3VsdCkgcmV0dXJuO1xuICAgIGNvbnN0IHRhYmxlTm9kZSA9IHRoaXMucmVuZGVyUmVzdWx0LmNoaWxkcmVuWzBdO1xuICAgIGlmIChqUXVlcnkuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKHRhYmxlTm9kZSkpIHtcbiAgICAgIGpRdWVyeSh0YWJsZU5vZGUpLkRhdGFUYWJsZSgpLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhdGFibGVBcGkgPSB1bmRlZmluZWQ7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nLCBpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICBzdXBlci5zZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWUsIGlzVmlzaWJsZSk7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpLnZpc2libGUoaXNWaXNpYmxlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uKSB7XG4gICAgc3VwZXIuc2V0Q29sdW1uTG9jYXRpb24oY29sdW1uTmFtZSwgbG9jYXRpb24pO1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW4oY29sdW1uTmFtZSArIFwiOm5hbWVcIik7XG4gICAgdmFyIGlzQ29sdW1uTG9jYXRpb24gPSBsb2NhdGlvbiA9PSBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbjtcbiAgICBjb2x1bW4udmlzaWJsZShpc0NvbHVtbkxvY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkuc2VhcmNoKHZhbHVlKS5kcmF3KGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUNvbHVtbkZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpO1xuICAgIGlmIChjb2x1bW4uc2VhcmNoKCkgIT09IHZhbHVlKSB7XG4gICAgICBjb2x1bW4uc2VhcmNoKHZhbHVlKS5kcmF3KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpO1xuICAgIGNvbHVtbi5vcmRlcihkaXJlY3Rpb24pLmRyYXcoZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBzdXBlci5zZXRQYWdlU2l6ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgdGhpcy5kYXRhdGFibGVBcGkucGFnZS5sZW4odmFsdWUpLmRyYXcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlTnVtYmVyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBzdXBlci5zZXRQYWdlTnVtYmVyKHZhbHVlKTtcbiAgICBpZiAodGhpcy5pc1JlbmRlcmVkKSB7XG4gICAgICB0aGlzLmRhdGF0YWJsZUFwaS5wYWdlKHZhbHVlKS5kcmF3KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFnZU51bWJlcigpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5pc1JlbmRlcmVkKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF0YXRhYmxlQXBpLnBhZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICBzdXBlci5yZW5kZXIodGFyZ2V0Tm9kZSk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0Tm9kZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE5vZGUpO1xuICAgIH1cbiAgICB0YXJnZXROb2RlLmNsYXNzTmFtZSArPSBcIiBzYS10YWJsZSBzYS1kYXRhdGFibGVzXCI7XG5cbiAgICBjb25zdCB0YWJsZU5vZGUgPSA8SFRNTFRhYmxlRWxlbWVudD4oXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgXCJcIilcbiAgICApO1xuICAgIHZhciBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKCk7XG4gICAgdmFyIGNvbHVtbnNEYXRhOiBhbnkgPSBjb2x1bW5zLm1hcCgoYzogYW55KSA9PiBjLmRhdGEpO1xuICAgIGNvbnN0IGR0QnV0dG9uQ2xhc3MgPVxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLXNtYWxsIHNhLXRhYmxlX19idG4tLWdyYXlcIjtcbiAgICBjb25zdCBvcHRpb25zID0galF1ZXJ5LmV4dGVuZChcbiAgICAgIHRydWUsXG4gICAgICB7XG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7IGV4dGVuZDogXCJjb3B5XCIsIGNsYXNzTmFtZTogZHRCdXR0b25DbGFzcyB9LFxuICAgICAgICAgIHsgZXh0ZW5kOiBcImNzdlwiLCBjbGFzc05hbWU6IGR0QnV0dG9uQ2xhc3MgfSxcbiAgICAgICAgICB7IGV4dGVuZDogXCJwcmludFwiLCBjbGFzc05hbWU6IGR0QnV0dG9uQ2xhc3MgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZG9tOiAnQjxcInNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uc1wiPnBydGlwJyxcbiAgICAgICAgLy8gb3JkZXJpbmc6IGZhbHNlLFxuICAgICAgICBkYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgICAgcGFnZUxlbmd0aDogdGhpcy5jdXJyZW50UGFnZVNpemUsXG4gICAgICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxuICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICBjb2xSZW9yZGVyOiB7XG4gICAgICAgICAgZml4ZWRDb2x1bW5zTGVmdDogMSxcbiAgICAgICAgICByZWFsdGltZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC8vb3JkZXJGaXhlZDogW1sxLCBcImFzY1wiXV0sXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgc1NlYXJjaDogXCIgXCIsXG4gICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gICAgICAgICAgc0xlbmd0aE1lbnU6IFwiU2hvdyBfTUVOVV8gZW50cmllc1wiLFxuICAgICAgICAgIHBhZ2luYXRlOiB7XG4gICAgICAgICAgICBwcmV2aW91czogXCIgXCIsXG4gICAgICAgICAgICBuZXh0OiBcIiBcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IFwiYXBpXCIsXG4gICAgICAgIGhlYWRlckNhbGxiYWNrOiAoXG4gICAgICAgICAgdGhlYWQ6IGFueSxcbiAgICAgICAgICBkYXRhOiBhbnksXG4gICAgICAgICAgc3RhcnQ6IGFueSxcbiAgICAgICAgICBlbmQ6IGFueSxcbiAgICAgICAgICBkaXNwbGF5OiBhbnlcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgdmFyIGRhdGF0YWJsZUFwaSA9IGpRdWVyeSh0YWJsZU5vZGUpLmRhdGFUYWJsZSgpLmFwaSgpO1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICBkYXRhdGFibGVBcGlcbiAgICAgICAgICAgIC5jb2x1bW5zKClcbiAgICAgICAgICAgIC5lcSgwKVxuICAgICAgICAgICAgLmVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgdmFyICR0aE5vZGUgPSBqUXVlcnkoZGF0YXRhYmxlQXBpLmNvbHVtbnMoaW5kZXgpLmhlYWRlcigpKTtcbiAgICAgICAgICAgICAgJHRoTm9kZS51bmJpbmQoXCJjbGljay5EVFwiKTtcbiAgICAgICAgICAgICAgaWYgKCEhY29sdW1uc0RhdGFbaW5kZXhdICYmICR0aE5vZGUuaGFzKFwiYnV0dG9uXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwic2EtdGFibGVfX2FjdGlvbi1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2VsZi5leHRlbnNpb25zLnJlbmRlcihjb250YWluZXIsIFwiY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbnNEYXRhW2luZGV4XSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUNvbHVtblJlb3JkZXIoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICR0aE5vZGUucHJlcGVuZChjb250YWluZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGhpcy5fb3B0aW9uc1xuICAgICk7XG5cbiAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XG4gICAgdGFibGVOb2RlLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlc19fdGFibGUgZGlzcGxheSByZXNwb25zaXZlIGRhdGFUYWJsZVwiO1xuXG4gICAgY29uc3QgZGF0YXRhYmxlQXBpUmVmID0gKHRoaXMuZGF0YXRhYmxlQXBpID0galF1ZXJ5KHRhYmxlTm9kZSkuRGF0YVRhYmxlKFxuICAgICAgb3B0aW9uc1xuICAgICkpO1xuICAgIHZhciBleHRlbnNpb25zQ29udGFpbmVyID0galF1ZXJ5KFwiZGl2LnNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uc1wiKVswXTtcblxuICAgIC8vIHRoaXMub25UYWJsZVRvb2xzQ3JlYXRlZC5maXJlKHRoaXMsIHsgZXh0ZW5zaW9uczogZXh0ZW5zaW9ucyB9KTtcbiAgICB0aGlzLmV4dGVuc2lvbnMucmVuZGVyKGV4dGVuc2lvbnNDb250YWluZXIsIFwiaGVhZGVyXCIpO1xuXG4gICAgZGF0YXRhYmxlQXBpUmVmLnBhZ2Uoc2VsZi5jdXJyZW50UGFnZU51bWJlcik7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkucm93R3JvdXAoKS5lbmFibGUoZmFsc2UpLmRyYXcoZmFsc2UpO1xuXG4gICAgZGF0YXRhYmxlQXBpUmVmLm9uKFxuICAgICAgXCJjb2x1bW4tcmVvcmRlclwiLFxuICAgICAgKGU6IGFueSwgc2V0dGluZ3M6IGFueSwgZGV0YWlsczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubW92ZUNvbHVtbihkZXRhaWxzLmZyb20gLSAxLCBkZXRhaWxzLnRvIC0gMSk7XG4gICAgICAgIHRoaXMuZGlzYWJsZUNvbHVtblJlb3JkZXIoKTtcbiAgICAgICAgdGhpcy5vbkNvbHVtbnNSZW9yZGVyLmZpcmUodGhpcywgeyBjb2x1bW5zOiB0aGlzLmNvbHVtbnMgfSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIGRhdGF0YWJsZUFwaVJlZlxuICAgICAgLnJvd3MoKVxuICAgICAgLmVxKDApXG4gICAgICAuZWFjaCgoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICB2YXIgcm93ID0gZGF0YXRhYmxlQXBpUmVmLnJvdyhpbmRleCk7XG4gICAgICAgIHZhciBkZXRhaWxzVHIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHZhciBkZXRhaWxzVGQgPSA8SFRNTFRhYmxlRGF0YUNlbGxFbGVtZW50PihcbiAgICAgICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzYS1kYXRhdGFibGVzX19kZXRhaWxzLWNvbnRhaW5lclwiKVxuICAgICAgICApO1xuICAgICAgICBkZXRhaWxzVHIuYXBwZW5kQ2hpbGQoZGV0YWlsc1RkKTtcbiAgICAgICAgdmFyIHJvd0VsZW1lbnQgPSByb3cubm9kZSgpO1xuICAgICAgICB2YXIgZmlyc3RDZWxsID0gcm93LmNlbGwocm93LmluZGV4KCksIDApLm5vZGUoKTtcbiAgICAgICAgdmFyIHRhYmxlUm93ID0gbmV3IERhdGF0YWJsZXNSb3codGhpcywgZmlyc3RDZWxsLCBkZXRhaWxzVGQsIHJvdyk7XG4gICAgICAgIHRhYmxlUm93Lm9uVG9nZ2xlRGV0YWlscy5hZGQoKHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChvcHRpb25zLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIGRldGFpbHNUZC5jb2xTcGFuID0gcm93RWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICAgICAgICAgIHJvd0VsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgIGRldGFpbHNUcixcbiAgICAgICAgICAgICAgcm93RWxlbWVudC5uZXh0U2libGluZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEhZGV0YWlsc1RyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgZGV0YWlsc1RyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGV0YWlsc1RyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yb3dzLnB1c2godGFibGVSb3cpO1xuICAgICAgICB0YWJsZVJvdy5yZW5kZXIoKTtcbiAgICAgIH0pO1xuICAgIGRhdGF0YWJsZUFwaVJlZi5kcmF3KGZhbHNlKTtcbiAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHRhcmdldE5vZGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29sdW1ucygpOiBBcnJheTxhbnk+IHtcbiAgICBjb25zdCBjb2x1bW5zOiBhbnkgPSB0aGlzLmNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcbiAgICAgIGNvbnN0IGNvbHVtblRpdGxlID0gKHF1ZXN0aW9uICYmICh0aGlzLm9wdGlvbnMudXNlTmFtZXNBc1RpdGxlcyA/IHF1ZXN0aW9uLm5hbWUgOiBxdWVzdGlvbi50aXRsZSkpIHx8IGNvbHVtbi5kaXNwbGF5TmFtZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICBkYXRhOiBjb2x1bW4ubmFtZSxcbiAgICAgICAgc1RpdGxlOiBqUXVlcnk/LmZuLmRhdGFUYWJsZS5yZW5kZXIudGV4dCgpLmRpc3BsYXkoY29sdW1uVGl0bGUpIHx8IGNvbHVtblRpdGxlLFxuICAgICAgICB2aXNpYmxlOiB0aGlzLmlzQ29sdW1uVmlzaWJsZShjb2x1bW4pLFxuICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0Q29udGVudDogXCJcIixcbiAgICAgICAgd2lkdGg6XG4gICAgICAgICAgdHlwZW9mIGNvbHVtbi53aWR0aCA9PSBcIm51bWJlclwiID8gY29sdW1uLndpZHRoICsgXCJweFwiIDogY29sdW1uLndpZHRoLFxuICAgICAgICByZW5kZXI6IChfZGF0YTogb2JqZWN0LCBfdHlwZTogc3RyaW5nLCByb3c6IGFueSkgPT4ge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHJvd1tjb2x1bW4ubmFtZV07XG4gICAgICAgICAgaWYgKGNvbHVtbi5kYXRhVHlwZSA9PT0gQ29sdW1uRGF0YVR5cGUuRmlsZUxpbmspIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbHVtbi5kYXRhVHlwZSA9PT0gQ29sdW1uRGF0YVR5cGUuSW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWFnZSBzcmM9J1wiICsgdmFsdWUgKyBcIicvPlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGpRdWVyeShcIjxkaXY+XCIpLnRleHQodmFsdWUpLmh0bWwoKVxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgZGVmYXVsdENvbnRlbnQ6IFwiXCIsXG4gICAgICB9LFxuICAgIF0uY29uY2F0KGNvbHVtbnMpO1xuICB9XG5cbiAgcHVibGljIGxheW91dCgpIHtcbiAgICAhIXRoaXMuZGF0YXRhYmxlQXBpICYmIHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbnMuYWRqdXN0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGF0YWJsZXNSb3cgZXh0ZW5kcyBUYWJsZVJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJvdGVjdGVkIGV4dGVuc2lvbnNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIF9pbm5lclJvdzogYW55XG4gICkge1xuICAgIHN1cGVyKHRhYmxlLCBleHRlbnNpb25zQ29udGFpbmVyLCBkZXRhaWxzQ29udGFpbmVyKTtcbiAgICB0aGlzLnJvd0VsZW1lbnQgPSBfaW5uZXJSb3cubm9kZSgpO1xuICAgIHRoaXMucm93RGF0YSA9IF9pbm5lclJvdy5kYXRhKCk7XG4gICAgdGhpcy5faW5uZXJSb3cgPSB0aGlzLl9pbm5lclJvdy5yb3codGhpcy5yb3dFbGVtZW50KTtcbiAgICAoPERhdGFUYWJsZXM+dGFibGUpLm9uQ29sdW1uc1Jlb3JkZXIuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSByb3dFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSByb3dEYXRhOiBhbnk7XG5cbiAgcHVibGljIGdldCBpbm5lclJvdygpIHtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJSb3cucm93KHRoaXMucm93RWxlbWVudCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMucm93RWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSb3dEYXRhKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5yb3dEYXRhO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmluZGV4KCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5uZXJSb3cucmVtb3ZlKCkuZHJhdygpO1xuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi90YWJsZWV4dGVuc2lvbnNcIjtcbmltcG9ydCB7IFF1ZXN0aW9uTG9jYXRpb24sIElDb2x1bW4gfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcImRyYWdcIixcbiAgdmlzaWJsZUluZGV4OiAwLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fZHJhZy1idXR0b25cIlxuICAgICk7XG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJkcmFnXCIpKTtcbiAgICBidG4ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgdGFibGUuZW5hYmxlQ29sdW1uUmVvcmRlcigpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJzb3J0XCIsXG4gIHZpc2libGVJbmRleDogMSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBkZXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpO1xuICAgIGNvbnN0IGFzY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFzY09yZGVyXCIpO1xuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJzb3J0aW5nXCIpO1xuICAgIGJ0bi50aXRsZSA9IFwiXCI7XG4gICAgdmFyIGRpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09IFwiYXNjXCIpIHtcbiAgICAgICAgYnRuLnRpdGxlID0gZGVzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImRlc2NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi50aXRsZSA9IGFzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgICAgfVxuICAgICAgdGFibGUuc29ydEJ5Q29sdW1uKG9wdGlvbnMuY29sdW1uTmFtZSwgZGlyZWN0aW9uKTtcbiAgICB9O1xuICAgIGJ0bi5vbmRyYWcgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwiaGlkZVwiLFxuICB2aXNpYmxlSW5kZXg6IDIsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImhpZGVcIik7XG4gICAgYnRuLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImhpZGVDb2x1bW5cIik7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgZmFsc2UpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtb3ZldG9kZXRhaWxzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJtb3ZldG9kZXRhaWxzXCIpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtb3ZlVG9EZXRhaWxcIik7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRhYmxlLnNldENvbHVtbkxvY2F0aW9uKG9wdGlvbnMuY29sdW1uTmFtZSwgUXVlc3Rpb25Mb2NhdGlvbi5Sb3cpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJmaWx0ZXJcIixcbiAgdmlzaWJsZUluZGV4OiA0LFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIHZhciBlbCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFxuICAgICAgXCJzYS10YWJsZV9fZmlsdGVyXCIsXG4gICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyUGxhY2Vob2xkZXJcIilcbiAgICApO1xuICAgIGVsLm9uY2xpY2sgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlbC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICB0YWJsZS5hcHBseUNvbHVtbkZpbHRlcihvcHRpb25zLmNvbHVtbk5hbWUsIGVsLnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBlbDtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtYWtlcHVibGljXCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWtlUHJpdmF0ZVN2ZyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJtYWtlcHJpdmF0ZVwiKTtcbiAgICBjb25zdCBtYWtlUHVibGljU3ZnID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm1ha2VwdWJsaWNcIik7XG4gICAgY29uc3QgY29sdW1uID0gdGFibGUuZ2V0Q29sdW1uQnlOYW1lKG9wdGlvbnMuY29sdW1uTmFtZSk7XG5cbiAgICB1cGRhdGVTdGF0ZShjb2x1bW4pO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChtYWtlUHJpdmF0ZVN2Zyk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKG1ha2VQdWJsaWNTdmcpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb2x1bW4uaXNQdWJsaWMgPSAhY29sdW1uLmlzUHVibGljO1xuICAgICAgdXBkYXRlU3RhdGUoY29sdW1uKTtcbiAgICAgIHRhYmxlLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sgJiZcbiAgICAgICAgdGFibGUub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayh0YWJsZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKGNvbHVtbjogSUNvbHVtbikge1xuICAgICAgaWYgKGNvbHVtbi5pc1B1YmxpYykge1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fc3ZnLWJ1dHRvblwiO1xuICAgICAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVByaXZhdGVDb2x1bW5cIik7XG4gICAgICAgIG1ha2VQcml2YXRlU3ZnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbWFrZVB1YmxpY1N2Zy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b24gc2EtdGFibGVfX3N2Zy1idXR0b24tLWFjdGl2ZVwiO1xuICAgICAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVB1YmxpY0NvbHVtblwiKTtcbiAgICAgICAgbWFrZVByaXZhdGVTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgbWFrZVB1YmxpY1N2Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IFRhYmxlUm93IH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IENvbHVtbkRhdGFUeXBlLCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgRGV0YWlscyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJpdmF0ZSByb3c6IFRhYmxlUm93LFxuICAgIHByb3RlY3RlZCB0YXJnZXROb2RlOiBIVE1MRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmRldGFpbHNUYWJsZSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBcInNhLXRhYmxlX19kZXRhaWwtdGFibGVcIlxuICAgICk7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGRldGFpbHNUYWJsZTogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBsb2NhdGlvbiA9IFwiZGV0YWlsc1wiO1xuXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWlsc1RhYmxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdmFyIHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICB0aGlzLnRhYmxlLmNvbHVtbnNcbiAgICAgIC5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmxvY2F0aW9uID09PSBRdWVzdGlvbkxvY2F0aW9uLlJvdyAmJiBjb2x1bW4pXG4gICAgICAuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgICAgICB2YXIgdGQxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZDEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29sdW1uLmRpc3BsYXlOYW1lKSk7XG4gICAgICAgIHZhciB0ZDIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMi50ZXh0Q29udGVudCA9IHRoaXMucm93LmdldFJvd0RhdGEoKVtjb2x1bW4ubmFtZV07XG4gICAgICAgIGlmKGNvbHVtbi5kYXRhVHlwZSA9PT0gQ29sdW1uRGF0YVR5cGUuSW1hZ2UpIHtcbiAgICAgICAgICB0ZDIuaW5uZXJIVE1MID0gXCI8aW1hZ2Ugc3JjPSdcIiArIHRkMi50ZXh0Q29udGVudCArIFwiJy8+XCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRkMyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uKGNvbHVtbi5uYW1lKSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDEpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMyk7XG4gICAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgfSk7XG4gICAgdmFyIHJvdyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNhLXRhYmxlX19kZXRhaWxcIik7XG4gICAgdmFyIHRkID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIsIFwiXCIsIHsgY29sU3BhbjogMyB9KTtcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IG5ldyBUYWJsZUV4dGVuc2lvbnModGhpcy50YWJsZSk7XG4gICAgZXh0ZW5zaW9ucy5yZW5kZXIodGQsIFwiZGV0YWlsc1wiLCB7IHJvdzogdGhpcy5yb3cgfSk7XG4gICAgaWYgKHRkLmNoaWxkcmVuLmxlbmd0aCAhPSAwKSB7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgcm93cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfSk7XG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMuZGV0YWlsc1RhYmxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVTaG93QXNDb2x1bW5CdXR0b24gPSAoY29sdW1uTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLWdyYXlcIlxuICAgICk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93QXNDb2x1bW5cIikpKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50YWJsZS5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbik7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIGlmICghIXRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcImZpbHRlclwiLFxuICB2aXNpYmxlSW5kZXg6IDAsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBpbnB1dCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFxuICAgICAgXCJzYS10YWJsZV9fZ2xvYmFsLWZpbHRlciBzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiLFxuICAgICAgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlclBsYWNlaG9sZGVyXCIpXG4gICAgKTtcbiAgICBpbnB1dC5vbmNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgICB0YWJsZS5hcHBseUZpbHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIGlucHV0O1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInNob3djb2x1bW5cIixcbiAgdmlzaWJsZUluZGV4OiAyLFxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGRyb3Bkb3duID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic2VsZWN0XCIsXG4gICAgICBcInNhLXRhYmxlX19zaG93LWNvbHVtbiBzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBoaWRkZW5Db2x1bW5zID0gdGFibGUuY29sdW1ucy5maWx0ZXIoXG4gICAgICAgIChjb2x1bW46IGFueSkgPT4gIWNvbHVtbi5pc1Zpc2libGVcbiAgICAgICk7XG4gICAgICBpZiAoaGlkZGVuQ29sdW1ucy5sZW5ndGggPT0gMCkge1xuICAgICAgICBkcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgZHJvcGRvd24uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcbiAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dDb2x1bW5cIiksXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgICAgaGlkZGVuQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IGFueSkgPT4ge1xuICAgICAgICB2YXIgdGV4dCA9IGNvbHVtbi5kaXNwbGF5TmFtZSB8fCBjb2x1bW4ubmFtZTtcbiAgICAgICAgaWYgKCEhdGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgdGl0bGU6IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLm5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJvcGRvd24ub25jaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuO1xuICAgICAgdGFibGUuc2V0Q29sdW1uVmlzaWJpbGl0eSh2YWwsIHRydWUpO1xuICAgIH07XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIHZhciBvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgdGFibGUub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuYWRkKG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XG5cbiAgICB0aGlzLm9uRGVzdHJveSA9ICgpID0+IHtcbiAgICAgIHRhYmxlLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLnJlbW92ZShvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIGRyb3Bkb3duO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInNob3dlbnRyaWVzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGZ1bmN0aW9uIGdldEVudHJpZXNEcm9wZG93bih0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgICBjb25zdCBlbCA9IDxIVE1MU2VsZWN0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSB0YWJsZS5wYWdpbmF0aW9uU2l6ZVNlbGVjdG9yIHx8IFtcIjFcIiwgXCI1XCIsIFwiMTBcIiwgXCIyNVwiLCBcIjUwXCIsIFwiNzVcIiwgXCIxMDBcIl07XG4gICAgICBvcHRpb25zVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICB0ZXh0OiB2YWwsXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgICBlbC52YWx1ZSA9IFN0cmluZyh0YWJsZS5nZXRQYWdlU2l6ZSgpKTtcblxuICAgICAgZWwub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIHRhYmxlLnNldFBhZ2VTaXplKE51bWJlcihlbC52YWx1ZSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RvckNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJzYS10YWJsZV9fZW50cmllc1wiXG4gICAgKTtcbiAgICBjb25zdCBzcGFjZVNwYW4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBcInNhLXRhYmxlX19oZWFkZXItc3BhY2VcIik7XG4gICAgY29uc3Qgc2hvd1NwYW4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzcGFuXCIsXG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1yaWdodFwiLFxuICAgICAge1xuICAgICAgICBpbm5lclRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TGFiZWxcIiksXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBlbnRyaWVzU3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNwYW5cIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLWxlZnRcIixcbiAgICAgIHtcbiAgICAgICAgaW5uZXJUZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZW50cmllc0xhYmVsXCIpLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFjZVNwYW4pO1xuICAgIHNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNob3dTcGFuKTtcbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRFbnRyaWVzRHJvcGRvd24odGFibGUpKTtcbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyaWVzU3Bhbik7XG4gICAgcmV0dXJuIHNlbGVjdG9yQ29udGFpbmVyO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInJlbW92ZXJvd3NcIixcbiAgdmlzaWJsZUluZGV4OiAtMSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGUpIHtcbiAgICB2YXIgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tZ3JlZW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb24gXCIsXG4gICAgICB7IGlubmVyVGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlbW92ZVJvd3NcIikgfVxuICAgICk7XG4gICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0YWJsZS5nZXRDcmVhdGVkUm93cygpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICBpZiAocm93LmdldElzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgIHJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcImNoYW5nZWxvY2FsZVwiLFxuICB2aXNpYmxlSW5kZXg6IDEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgdmFyIGxvY2FsZXMgPSB0YWJsZS5nZXRMb2NhbGVzKCk7XG4gICAgaWYgKGxvY2FsZXMubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZWwgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+KFxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBcInNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uXCIsIHt9KVxuICAgICk7XG4gICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYW5nZUxvY2FsZVwiKV0uY29uY2F0KFxuICAgICAgbG9jYWxlc1xuICAgICk7XG4gICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgdGV4dDogdmFsLFxuICAgICAgfSk7XG4gICAgICBlbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIGVsLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGFibGUubG9jYWxlID0gZWwudmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gZWw7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJyb3dcIixcbiAgbmFtZTogXCJkZXRhaWxzXCIsXG4gIHZpc2libGVJbmRleDogMCxcbiAgcmVuZGVyOiAoX3RhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiB7XG4gICAgY29uc3QgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwiZGV0YWlsXCIpO1xuICAgIGJ0bi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TWlub3JDb2x1bW5zXCIpO1xuICAgIGJ0bi5jbGFzc05hbWUgKz0gXCIgc2EtdGFibGVfX3Jvdy1leHRlbnNpb25cIjtcbiAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIG9wdGlvbnMucm93LnRvZ2dsZURldGFpbHMoKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwicm93XCIsXG4gIG5hbWU6IFwic2VsZWN0XCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKF90YWJsZSwgb3B0KSB7XG4gICAgdmFyIHJvdyA9IG9wdC5yb3c7XG4gICAgdmFyIGNoZWNrYm94ID0gPEhUTUxJbnB1dEVsZW1lbnQ+RG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgIFwic2EtdGFibGVfX3Jvdy1leHRlbnNpb25cIixcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgfVxuICAgICk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHJvdy5nZXRJc1NlbGVjdGVkKCk7XG4gICAgY2hlY2tib3gub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByb3cudG9nZ2xlU2VsZWN0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gY2hlY2tib3g7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5cbmludGVyZmFjZSBJVGFibGVFeHRlbnNpb24ge1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZpc2libGVJbmRleDogbnVtYmVyO1xuICByZW5kZXI6ICh0YWJsZTogVGFibGUsIG9wdDogYW55KSA9PiBIVE1MRWxlbWVudDtcbiAgZGVzdHJveT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUV4dGVuc2lvbnMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlOiBUYWJsZSkge31cbiAgcHJpdmF0ZSBzdGF0aWMgZXh0ZW5zaW9uczogeyBbbG9jYXRpb246IHN0cmluZ106IEFycmF5PElUYWJsZUV4dGVuc2lvbj4gfSA9IHt9O1xuICBwcml2YXRlIHJlbmRlcmVkRXh0ZW5zaW9uczogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPiA9IFtdO1xuXG4gIHB1YmxpYyByZW5kZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsIGxvY2F0aW9uOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IFRhYmxlRXh0ZW5zaW9ucy5leHRlbnNpb25zW2xvY2F0aW9uXTtcbiAgICBpZiAoISFleHRlbnNpb25zKSB7XG4gICAgICBleHRlbnNpb25zID0gdGhpcy5zb3J0RXh0ZW5zaW9ucyhleHRlbnNpb25zKTtcbiAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiB7XG4gICAgICAgIGlmICghIWV4dGVuc2lvbi5yZW5kZXIpIHtcbiAgICAgICAgICB2YXIgYWN0aW9uID0gZXh0ZW5zaW9uLnJlbmRlcih0aGlzLnRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICBpZiAoISFhY3Rpb24pIHtcbiAgICAgICAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoYWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zLnB1c2goZXh0ZW5zaW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgaWYgKCEhZXh0ZW5zaW9uLmRlc3Ryb3kpIGV4dGVuc2lvbi5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlZEV4dGVuc2lvbnMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFeHRlbnNpb24oZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb24pIHtcbiAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dKVxuICAgICAgdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbi5sb2NhdGlvbl0gPSBbXTtcbiAgICB0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXS5wdXNoKGV4dGVuc2lvbik7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyByZW1vdmVFeHRlbnNpb24oZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb24pIHtcbiAgICBpZighZXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSBUYWJsZUV4dGVuc2lvbnMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dO1xuICAgIGNvbnN0IGluZGV4ID0gZXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbik7XG4gICAgaWYoaW5kZXggPj0gMCkge1xuICAgICAgZXh0ZW5zaW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlckV4dGVuc2lvbihcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgIGFjdGlvbk5hbWU6IHN0cmluZ1xuICApIHtcbiAgICBpZighYWN0aW9uTmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZighIWxvY2F0aW9uKSB7XG4gICAgICBjb25zdCBleHRlbnNpb24gPSBUYWJsZUV4dGVuc2lvbnMuZmluZEV4dGVuc2lvbihsb2NhdGlvbiwgYWN0aW9uTmFtZSk7XG4gICAgICBUYWJsZUV4dGVuc2lvbnMucmVtb3ZlRXh0ZW5zaW9uKGV4dGVuc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXh0ZW5zaW9ucykuZm9yRWFjaCgobG9jYXRpb246c3RyaW5nKSA9PiBUYWJsZUV4dGVuc2lvbnMudW5yZWdpc3RlckV4dGVuc2lvbihsb2NhdGlvbiwgYWN0aW9uTmFtZSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZmluZEV4dGVuc2lvbihcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgIGFjdGlvbk5hbWU6IHN0cmluZ1xuICApOiBJVGFibGVFeHRlbnNpb24ge1xuICAgIGlmICghdGhpcy5leHRlbnNpb25zW2xvY2F0aW9uXSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGV4dGVuc2lvbiA9IHRoaXMuZXh0ZW5zaW9uc1tsb2NhdGlvbl0uZmlsdGVyKGZ1bmN0aW9uIChcbiAgICAgIGV4dGVuc2lvbjogSVRhYmxlRXh0ZW5zaW9uXG4gICAgKSB7XG4gICAgICByZXR1cm4gZXh0ZW5zaW9uLm5hbWUgPT0gYWN0aW9uTmFtZTtcbiAgICB9KVswXTtcbiAgICByZXR1cm4gZXh0ZW5zaW9uIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHNvcnRFeHRlbnNpb25zKGV4dGVuc2lvbnM6IEFycmF5PElUYWJsZUV4dGVuc2lvbj4pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0ZW5zaW9ucykpIHJldHVybjtcbiAgICByZXR1cm4gW11cbiAgICAgIC5jb25jYXQoZXh0ZW5zaW9ucy5maWx0ZXIoKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLnZpc2libGVJbmRleCA+PSAwKSlcbiAgICAgIC5zb3J0KChmaXJzdEV4dGVuc2lvbiwgc2Vjb25kRXh0ZW5zaW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBmaXJzdEV4dGVuc2lvbi52aXNpYmxlSW5kZXggLSBzZWNvbmRFeHRlbnNpb24udmlzaWJsZUluZGV4O1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFN1cnZleU1vZGVsLCBRdWVzdGlvbiwgRXZlbnQsIHNldHRpbmdzLCBRdWVzdGlvblNlbGVjdEJhc2UsIFF1ZXN0aW9uTWF0cml4TW9kZWwsIEl0ZW1WYWx1ZSwgSnNvbkVycm9yLCBFdmVudEJhc2UgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCAqIGFzIFN1cnZleUNvcmUgZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQge1xuICBJUGVybWlzc2lvbixcbiAgUXVlc3Rpb25Mb2NhdGlvbixcbiAgSVRhYmxlU3RhdGUsXG4gIElDb2x1bW4sXG4gIElDb2x1bW5EYXRhLFxufSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IERldGFpbHMgfSBmcm9tIFwiLi9leHRlbnNpb25zL2RldGFpbHNleHRlbnNpb25zXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vZXh0ZW5zaW9ucy90YWJsZWV4dGVuc2lvbnNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbW1lcmNpYWxMaWNlbnNlTGluaywgY3JlYXRlSW1hZ2VzQ29udGFpbmVyLCBjcmVhdGVMaW5rc0NvbnRhaW5lciwgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7IENvbHVtbnNCdWlsZGVyRmFjdG9yeSB9IGZyb20gXCIuL2NvbHVtbmJ1aWxkZXJcIjtcbmltcG9ydCB7IERlZmF1bHRDb2x1bW4gfSBmcm9tIFwiLi9jb2x1bW5zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlT3B0aW9ucyB7XG4gIFtpbmRleDogc3RyaW5nXTogYW55O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhpcyBwcm9wZXJ0eSB0byB0cnVlIHRvIHJlbmRlciBjb2x1bW4gaGVhZGluZ3MgdXNpbmcgcXVlc3Rpb24gbmFtZXNcbiAgICovXG4gIHVzZU5hbWVzQXNUaXRsZXM/OiBib29sZWFuO1xuICAvKipcbiAgICogVXNlIHRoaXMgZXZlbnQgdG8gY2hhbmdlIHRoZSBkaXNwbGF5IHZhbHVlIG9mIHF1ZXN0aW9uIGluIHRhYmxlLlxuICAgKiA8YnIvPiBgc2VuZGVyYCAtIHRoZSB0YWJsZSBvYmplY3QgdGhhdCBmaXJlcyB0aGUgZXZlbnQuXG4gICAqIDxici8+IGBvcHRpb25zLnF1ZXN0aW9uYCAtIHRoZSBxdWVzdGlvbiBvYmVjdCBmb3Igd2hpY2ggZXZlbnQgaXMgZmlyZWQuXG4gICAqIDxici8+IGBvcHRpb25zLmRpc3BsYXlWYWx1ZWAgLSB0aGUgcXVlc3Rpb24gZGlzcGxheSB2YWx1ZS4gWW91IGNhbiBjaGFuZ2UgdGhpcyBvcHRpb24gYmVmb3JlIGl0IGlzIGRpc3BsYXllZCBpbiB0aGUgdGFibGUuXG4gICAqL1xuICBvbkdldFF1ZXN0aW9uVmFsdWU/OiAob3B0aW9uczoge1xuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkaXNwbGF5VmFsdWU6IGFueSxcbiAgfSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlRXZlbnQgZXh0ZW5kcyBFdmVudEJhc2U8VGFibGU+IHt9XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZSB7XG4gIHB1YmxpYyBzdGF0aWMgc2hvd0ZpbGVzQXNJbWFnZXMgPSBmYWxzZTtcbiAgcHVibGljIHN0YXRpYyBoYXZlQ29tbWVyY2lhbExpY2Vuc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIHRhYmxlRGF0YTogYW55O1xuICBwcm90ZWN0ZWQgZXh0ZW5zaW9uczogVGFibGVFeHRlbnNpb25zO1xuICBwcml2YXRlIGhhdmVDb21tZXJjaWFsTGljZW5zZSA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX2NvbHVtbnM6IEFycmF5PElDb2x1bW4+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgX3N1cnZleTogU3VydmV5TW9kZWwsXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgcHJvdGVjdGVkIF9vcHRpb25zOiBJVGFibGVPcHRpb25zID0ge30sXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5zRGF0YTogQXJyYXk8SUNvbHVtbkRhdGE+ID0gW11cbiAgKSB7XG4gICAgaWYoIXRoaXMuX29wdGlvbnMpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoX3N1cnZleSk7XG4gICAgdGhpcy5pbml0VGFibGVEYXRhKGRhdGEpO1xuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gdGhpcy5fc3VydmV5LmxvY2FsZTtcbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoX3N1cnZleSk7XG5cbiAgICBpZihfY29sdW1uc0RhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbHVtbnNGcm9tRGF0YSh0aGlzLl9jb2x1bW5zRGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0aGlzKTtcbiAgICBjb25zdCBmID0gKDxhbnk+U3VydmV5Q29yZSkuaGFzTGljZW5zZTtcbiAgICB0aGlzLmhhdmVDb21tZXJjaWFsTGljZW5zZSA9ICghIWYgJiYgZig0KSkgfHxcbiAgICAgIFRhYmxlLmhhdmVDb21tZXJjaWFsTGljZW5zZSB8fFxuICAgICAgKCEhX29wdGlvbnMgJiZcbiAgICAgICAgKHR5cGVvZiBfb3B0aW9ucy5oYXZlQ29tbWVyY2lhbExpY2Vuc2UgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICA/IF9vcHRpb25zLmhhdmVDb21tZXJjaWFsTGljZW5zZVxuICAgICAgICAgIDogZmFsc2UpKTtcbiAgfVxuICBwcm90ZWN0ZWQgcmVuZGVyUmVzdWx0OiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlU2l6ZTogbnVtYmVyID0gNTtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfcm93czogVGFibGVSb3dbXSA9IFtdO1xuICBwcm90ZWN0ZWQgaXNDb2x1bW5SZW9yZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0cyBwYWdpbmF0aW9uIHNlbGVjdG9yIGNvbnRlbnQuXG4gICAqL1xuICBwdWJsaWMgcGFnaW5hdGlvblNpemVTZWxlY3RvcjogbnVtYmVyW10gPSBbMSwgNSwgMTAsIDI1LCA1MCwgMTAwXTtcblxuICBwdWJsaWMgb25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQgPSBuZXcgVGFibGVFdmVudCgpO1xuXG4gIHB1YmxpYyBvbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQgPSBuZXcgVGFibGVFdmVudCgpO1xuXG4gIHB1YmxpYyBvblJvd1JlbW92ZWQgPW5ldyBUYWJsZUV2ZW50KCk7XG5cbiAgcHVibGljIHJlbmRlckRldGFpbEFjdGlvbnM6IChcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHJvdzogVGFibGVSb3dcbiAgKSA9PiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIHB1YmxpYyBnZXQgc3VydmV5KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXJ2ZXk7XG4gIH1cbiAgcHVibGljIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IGFwcGx5RmlsdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICBwdWJsaWMgYWJzdHJhY3QgYXBwbHlDb2x1bW5GaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IHNvcnRCeUNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZDtcblxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50IHwgc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXROb2RlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0Tm9kZSk7XG4gICAgfVxuICAgIHRhcmdldE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAoIXRoaXMuaGF2ZUNvbW1lcmNpYWxMaWNlbnNlKSB7XG4gICAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZUNvbW1lcmNpYWxMaWNlbnNlTGluaygpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlQ29sdW1uUmVvcmRlcigpIHtcbiAgICB0aGlzLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGVDb2x1bW5SZW9yZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuaXNDb2x1bW5SZW9yZGVyRW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldFBhZ2VOdW1iZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZU51bWJlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjdXJyZW50IHBhZ2Ugc2l6ZS5cbiAgICovXG4gIHB1YmxpYyBnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlU2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGN1cnJlbnQgcGFnZSBzaXplLlxuICAgKi9cbiAgcHVibGljIHNldFBhZ2VTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlU2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDcmVhdGVkUm93cygpOiBUYWJsZVJvd1tdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX3Jvd3MpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQ3JlYXRlZFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fcm93cyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGdldCB1c2VOYW1lc0FzVGl0bGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMudXNlTmFtZXNBc1RpdGxlcyA9PT0gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZENvbHVtbnMgPSAoc3VydmV5OiBTdXJ2ZXlNb2RlbCkgPT4ge1xuICAgIGxldCBjb2x1bW5zOiBBcnJheTxJQ29sdW1uPiA9IFtdO1xuICAgIHRoaXMuX3N1cnZleS5nZXRBbGxRdWVzdGlvbnMoKS5mb3JFYWNoKChxdWVzdGlvbjogUXVlc3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGJ1aWxkZXIgPSBDb2x1bW5zQnVpbGRlckZhY3RvcnkuSW5zdGFuY2UuZ2V0Q29sdW1uc0J1aWxkZXIocXVlc3Rpb24uZ2V0VGVtcGxhdGUoKSk7XG4gICAgICBjb2x1bW5zID0gY29sdW1ucy5jb25jYXQoYnVpbGRlci5idWlsZENvbHVtbnMocXVlc3Rpb24sIHRoaXMpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29sdW1ucztcbiAgfTtcblxuICBwdWJsaWMgaXNDb2x1bW5WaXNpYmxlKGNvbHVtbjogSUNvbHVtbikge1xuICAgIGlmIChjb2x1bW4ubG9jYXRpb24gIT09IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGNvbHVtbi5pc1Zpc2libGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgY29sdW1ucyhjb2x1bW5zOiBBcnJheTxJQ29sdW1uPikge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cbiAgcHVibGljIGdldCBpc0luaXRUYWJsZURhdGFQcm9jZXNzaW5nKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc0luaXRUYWJsZURhdGFQcm9jZXNzaW5nVmFsdWU7IH1cbiAgcHJpdmF0ZSBpc0luaXRUYWJsZURhdGFQcm9jZXNzaW5nVmFsdWU6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBpbml0VGFibGVEYXRhKGRhdGE6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLmlzSW5pdFRhYmxlRGF0YVByb2Nlc3NpbmdWYWx1ZSA9IHRydWU7XG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChpdGVtKSA9PiB7XG4gICAgICB2YXIgZGF0YUl0ZW06IGFueSA9IHt9O1xuICAgICAgdGhpcy5fc3VydmV5LmRhdGEgPSBpdGVtO1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgY29uc3Qgb3B0ID0gY29sdW1uLmdldENlbGxEYXRhKHRoaXMsIGl0ZW0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX29wdGlvbnMub25HZXRRdWVzdGlvblZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLm9uR2V0UXVlc3Rpb25WYWx1ZShvcHQpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFJdGVtW2NvbHVtbi5uYW1lXSA9IG9wdC5kaXNwbGF5VmFsdWU7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRhdGFJdGVtO1xuICAgIH0pO1xuICAgIHRoaXMuaXNJbml0VGFibGVEYXRhUHJvY2Vzc2luZ1ZhbHVlID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgbW92ZUNvbHVtbihmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpIHtcbiAgICB2YXIgZGVsZXRlZENvbHVtbnMgPSB0aGlzLl9jb2x1bW5zLnNwbGljZShmcm9tLCAxKTtcbiAgICB0aGlzLl9jb2x1bW5zLnNwbGljZSh0bywgMCwgZGVsZXRlZENvbHVtbnNbMF0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uKSB7XG4gICAgdGhpcy5nZXRDb2x1bW5CeU5hbWUoY29sdW1uTmFtZSkubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5maXJlKHRoaXMsIHtcbiAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgfSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIGdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lOiBzdHJpbmcpOiBJQ29sdW1uIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nLCBpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5nZXRDb2x1bW5CeU5hbWUoY29sdW1uTmFtZSk7XG4gICAgY29sdW1uLmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICB0aGlzLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLmZpcmUodGhpcywge1xuICAgICAgY29sdW1uTmFtZTogY29sdW1uTmFtZSxcbiAgICAgIGNvbHVtblZpc2liaWxpdHk6IGlzVmlzaWJsZSxcbiAgICB9KTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uV2lkdGgoY29sdW1uTmFtZTogc3RyaW5nLCB3aWR0aDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbk5hbWUpO1xuICAgIGNvbHVtbi53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVSb3cocm93OiBUYWJsZVJvdyk6IHZvaWQge1xuICAgIHZhciBpbmRleCA9IHRoaXMuX3Jvd3MuaW5kZXhPZihyb3cpO1xuICAgIHRoaXMuX3Jvd3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLm9uUm93UmVtb3ZlZC5maXJlKHRoaXMsIHsgcm93OiByb3cgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjdXJyZW50IGxvY2FsZSBvZiB0aGUgdGFibGUuXG4gICAqIElmIGxvY2FsZXMgbW9yZSB0aGFuIG9uZSwgdGhlIGxhbmd1YWdlIHNlbGVjdGlvbiBkcm9wZG93biB3aWxsIGJlIGFkZGVkIGluIHRoZSB0b29sYmFyXG4gICAqL1xuICBwdWJsaWMgZ2V0IGxvY2FsZSgpIHtcbiAgICByZXR1cm4gbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBsb2NhbGUgZm9yIHRhYmxlLlxuICAgKi9cbiAgcHVibGljIHNldCBsb2NhbGUobmV3TG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdXJ2ZXkubG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9jYWxlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX3N1cnZleS5nZXRVc2VkTG9jYWxlcygpKTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoKGhhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmIChoYXJkKSB7XG4gICAgICB0aGlzLmluaXRUYWJsZURhdGEodGhpcy5kYXRhKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZU51bWJlciA9IHRoaXMuZ2V0UGFnZU51bWJlcigpO1xuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMucmVuZGVyUmVzdWx0O1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLnJlbmRlcih0YXJnZXROb2RlKTtcbiAgICAgIHRoaXMuc2V0UGFnZVNpemUodGhpcy5jdXJyZW50UGFnZVNpemUpO1xuICAgICAgdGhpcy5zZXRQYWdlTnVtYmVyKHRoaXMuY3VycmVudFBhZ2VOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMuY2xlYXJDcmVhdGVkUm93cygpO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5kZXN0cm95KCk7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZW5kZXJlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnJlbmRlclJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIGdldHRlci5cbiAgICovXG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogSVRhYmxlU3RhdGUge1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbGU6IGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlLFxuICAgICAgZWxlbWVudHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fY29sdW1ucykpLFxuICAgICAgcGFnZVNpemU6IHRoaXMuY3VycmVudFBhZ2VTaXplLFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFZpenVhbGl6YXRpb24gcGFuZWwgc3RhdGUgc2V0dGVyLlxuICAgKi9cbiAgcHVibGljIHNldCBzdGF0ZShuZXdTdGF0ZTogSVRhYmxlU3RhdGUpIHtcbiAgICBpZiAoIW5ld1N0YXRlKSByZXR1cm47XG5cbiAgICBpZiAodHlwZW9mIG5ld1N0YXRlLmxvY2FsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSBuZXdTdGF0ZS5sb2NhbGU7XG4gICAgICB0aGlzLl9zdXJ2ZXkubG9jYWxlID0gbmV3U3RhdGUubG9jYWxlO1xuICAgICAgdGhpcy5pbml0VGFibGVEYXRhKHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuZXdTdGF0ZS5lbGVtZW50cyAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIHRoaXMudXBkYXRlQ29sdW1uc0Zyb21EYXRhKG5ld1N0YXRlLmVsZW1lbnRzKTtcbiAgICBpZiAodHlwZW9mIG5ld1N0YXRlLnBhZ2VTaXplICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgdGhpcy5jdXJyZW50UGFnZVNpemUgPSBuZXdTdGF0ZS5wYWdlU2l6ZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29sdW1uc0Zyb21EYXRhKGNvbHVtbnNEYXRhOiBBcnJheTxJQ29sdW1uRGF0YT4pIHtcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5fY29sdW1ucztcbiAgICBjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgIGNvbnN0IGVsID0gY29sdW1uc0RhdGEuZmlsdGVyKGVsID0+IGNvbHVtbi5uYW1lID09PSBlbC5uYW1lKVswXTtcbiAgICAgIGlmKCEhZWwpIHtcbiAgICAgICAgY29sdW1uLmZyb21KU09OKGVsKTtcbiAgICAgICAgY29sdW1uLnZpc2libGVJbmRleCA9IGNvbHVtbnNEYXRhLmluZGV4T2YoZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbHVtbnNEYXRhLmZvckVhY2goZWwgPT4ge1xuICAgICAgbGV0IGNvbHVtbiA9IGNvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubmFtZSA9PT0gZWwubmFtZSlbMF07XG4gICAgICBpZighY29sdW1uKSB7XG4gICAgICAgIGNvbHVtbiA9IG5ldyBEZWZhdWx0Q29sdW1uKHVuZGVmaW5lZCwgdGhpcyk7XG4gICAgICAgIGNvbHVtbi5mcm9tSlNPTihlbCk7XG4gICAgICAgIGNvbHVtbi52aXNpYmxlSW5kZXggPSBjb2x1bW5zRGF0YS5pbmRleE9mKGVsKTtcbiAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuc29ydCgoY29sMSwgY29sMikgPT4gY29sMS52aXNpYmxlSW5kZXggLSBjb2wyLnZpc2libGVJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0YWJsZSBzdGF0ZSBjaGFuZ2VkLlxuICAgKi9cbiAgcHVibGljIG9uU3RhdGVDaGFuZ2VkID0gbmV3IFRhYmxlRXZlbnQoKTtcblxuICAvKipcbiAgICogR2V0cyB0YWJsZSBwZXJtaXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKTogSVBlcm1pc3Npb25bXSB7XG4gICAgcmV0dXJuIDxhbnk+dGhpcy5fY29sdW1ucy5tYXAoKGNvbHVtbjogSUNvbHVtbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgIGlzUHVibGljOiBjb2x1bW4uaXNQdWJsaWMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRhYmxlIHBlcm1pc3Npb25zLlxuICAgKi9cbiAgcHVibGljIHNldCBwZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogSVBlcm1pc3Npb25bXSkge1xuICAgIGNvbnN0IHVwZGF0ZWRFbGVtZW50cyA9IHRoaXMuX2NvbHVtbnMubWFwKChjb2x1bW46IElDb2x1bW4pID0+IHtcbiAgICAgIHBlcm1pc3Npb25zLmZvckVhY2goKHBlcm1pc3Npb24pID0+IHtcbiAgICAgICAgaWYgKHBlcm1pc3Npb24ubmFtZSA9PT0gY29sdW1uLm5hbWUpXG4gICAgICAgICAgY29sdW1uLmlzUHVibGljID0gcGVybWlzc2lvbi5pc1B1YmxpYztcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY29sdW1uO1xuICAgIH0pO1xuICAgIHRoaXMuX2NvbHVtbnMgPSBbXS5jb25jYXQodXBkYXRlZEVsZW1lbnRzKTtcbiAgICB0aGlzLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sgJiZcbiAgICAgIHRoaXMub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHBlcm1pc3Npb25zIGNoYW5nZWRcbiAgICovXG4gIHB1YmxpYyBvblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrOiBhbnk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZVJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJvdGVjdGVkIGV4dGVuc2lvbnNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyh0YWJsZSwgdGhpcywgZGV0YWlsc0NvbnRhaW5lcik7XG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0YWJsZSk7XG4gICAgdGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmFkZCh0aGlzLm9uQ29sdW1uTG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG4gIHB1YmxpYyBkZXRhaWxzOiBEZXRhaWxzO1xuICBwdWJsaWMgZXh0ZW5zaW9uczogVGFibGVFeHRlbnNpb25zO1xuICBwcml2YXRlIGRldGFpbGVkUm93Q2xhc3MgPSBcInNhLXRhYmxlX19kZXRhaWwtcm93XCI7XG4gIHByaXZhdGUgaXNEZXRhaWxzRXhwYW5kZWQgPSBmYWxzZTtcbiAgcHVibGljIG9uVG9nZ2xlRGV0YWlsczogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIFRhYmxlUm93LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IGFueSwgVGFibGVSb3csIGFueT4oKTtcblxuICAvKipcbiAgICogUmV0dXJucyByb3cncyBodG1sIGVsZW1lbnRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGRhdGEsIHdoaWNoIGlzIGRpc3BsYXllZCBpbiB0aGUgcm93LlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldFJvd0RhdGEoKTogYW55O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBvc2l0aW9uIG9mIHJvdyBpbiB0aGUgdGFibGUncyBkYXRhLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldERhdGFQb3NpdGlvbigpOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICB0aGlzLmV4dGVuc2lvbnMucmVuZGVyKHRoaXMuZXh0ZW5zaW9uc0NvbnRhaW5lciwgXCJyb3dcIiwgeyByb3c6IHRoaXMgfSk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkRldGFpbHMoKSB7XG4gICAgdGhpcy5kZXRhaWxzLm9wZW4oKTtcbiAgICB0aGlzLmdldEVsZW1lbnQoKS5jbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLmRldGFpbGVkUm93Q2xhc3M7XG4gICAgdGhpcy5vblRvZ2dsZURldGFpbHMuZmlyZSh0aGlzLCB7IGlzRXhwYW5kZWQ6IHRydWUgfSk7XG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEZXRhaWxzKCkge1xuICAgIHRoaXMuZGV0YWlscy5jbG9zZSgpO1xuICAgIHRoaXMuZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kZXRhaWxlZFJvd0NsYXNzKTtcbiAgICB0aGlzLm9uVG9nZ2xlRGV0YWlscy5maXJlKHRoaXMsIHsgaXNFeHBhbmRlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURldGFpbHMoKSB7XG4gICAgaWYgKHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VEZXRhaWxzKCk7XG4gICAgfSBlbHNlIHRoaXMub3BlbkRldGFpbHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWQ7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9ICF0aGlzLmlzU2VsZWN0ZWQ7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMudGFibGUucmVtb3ZlUm93KHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvc2VEZXRhaWxzKCk7XG4gIH07XG5cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQucmVtb3ZlKFxuICAgICAgdGhpcy5vbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrXG4gICAgKTtcbiAgICB0aGlzLmV4dGVuc2lvbnMuZGVzdHJveSgpO1xuICB9XG59IiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XG4gICg8YW55Pk9iamVjdClbXCJhc3NpZ25cIl0gfHxcbiAgZnVuY3Rpb24odGFyZ2V0OiBhbnkpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBwIGluIHMpXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzOiBhbnksIGJhc2VDbGFzczogYW55KSB7XG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxuICAgIGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkocCkpIHRoaXNDbGFzc1twXSA9IGJhc2VDbGFzc1twXTtcbiAgZnVuY3Rpb24gX18oKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcbiAgfVxuICB0aGlzQ2xhc3MucHJvdG90eXBlID1cbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcbiAgICAgID8gT2JqZWN0LmNyZWF0ZShiYXNlQ2xhc3MpXG4gICAgICA6ICgoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSksIG5ldyAoPGFueT5fXykoKSk7XG59XG5cbmV4cG9ydCB2YXIgX19yZXN0ID0gZnVuY3Rpb24oc291cmNlOiBhbnksIGU6IGFueSkge1xuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcbiAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHNvdXJjZSlcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICBlLmluZGV4T2YocHJvcGVydHlOYW1lKSA8IDBcbiAgICApXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xuICBpZiAoXG4gICAgc291cmNlICE9IG51bGwgJiZcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXG4gIClcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICBwcm9wZXJ0eVN5bWJvbHMgPSAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdKHNvdXJjZSk7XG4gICAgICBpIDwgcHJvcGVydHlTeW1ib2xzLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgIClcbiAgICAgIGlmIChlLmluZGV4T2YocHJvcGVydHlTeW1ib2xzW2ldKSA8IDApXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5kZWNsYXJlIHZhciBSZWZsZWN0OiBhbnk7XG5cbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxuICBkZWNvcmF0b3JzOiBhbnksXG4gIHRhcmdldDogYW55LFxuICBrZXk6IGFueSxcbiAgZGVzYzogYW55XG4pIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIHIgPVxuICAgICAgYyA8IDNcbiAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgOiBkZXNjID09PSBudWxsXG4gICAgICAgICAgPyAoZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpKVxuICAgICAgICAgIDogZGVzYyxcbiAgICBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2VcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcbiAgICAgIGlmICgoZCA9IGRlY29yYXRvcnNbaV0pKVxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG4iLCJleHBvcnQgY2xhc3MgRG9jdW1lbnRIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBvcHRpb25zOiBBcnJheTx7IHZhbHVlOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB9PixcclxuICAgIGlzU2VsZWN0ZWQ6IChvcHRpb246IHsgdmFsdWU6IHN0cmluZywgdGV4dDogc3RyaW5nIH0pID0+IGJvb2xlYW4sXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlbGVjdFdyYXBwZXIuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0LXdyYXBwZXJcIjtcclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBzZWxlY3QuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0XCI7XHJcbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xyXG4gICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXHJcbiAgICAgICAgdGV4dDogb3B0aW9uLnRleHQsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGlzU2VsZWN0ZWQob3B0aW9uKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgc2VsZWN0Lm9uY2hhbmdlID0gaGFuZGxlcjtcclxuICAgIHNlbGVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuICAgIHJldHVybiBzZWxlY3RXcmFwcGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVCdXR0b24oXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkLFxyXG4gICAgdGV4dCA9IFwiXCIsXHJcbiAgICBjbGFzc05hbWUgPSBcInNhLXRvb2xiYXJfX2J1dHRvblwiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBjbGFzc05hbWUsIHtcclxuICAgICAgaW5uZXJUZXh0OiB0ZXh0LFxyXG4gICAgICBvbmNsaWNrOiBoYW5kbGVyLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVFbGVtZW50KFxyXG4gICAgdGFnTmFtZTogc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcgPSBcIlwiLFxyXG4gICAgYXR0cnM/OiBhbnlcclxuICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKCEhYXR0cnMpIHtcclxuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICg8YW55PmVsKVtrZXldID0gYXR0cnNba2V5XTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0VsZW1lbnQocGF0aDogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwic3ZnXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB1c2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwidXNlXCJcclxuICAgICk7XHJcbiAgICB1c2VFbGVtLnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcclxuICAgICAgXCJocmVmXCIsXHJcbiAgICAgIFwiI3NhLXN2Zy1cIiArIHBhdGhcclxuICAgICk7XHJcbiAgICBzdmdFbGVtLmFwcGVuZENoaWxkKHVzZUVsZW0pO1xyXG4gICAgcmV0dXJuIHN2Z0VsZW07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0J1dHRvbihwYXRoOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBjb25zdCBidG4gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+KFxyXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwic2EtdGFibGVfX3N2Zy1idXR0b25cIilcclxuICAgICk7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChwYXRoKSk7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdUb2dnbGVCdXR0b24oXHJcbiAgICBzdmdQYXRoMTogc3RyaW5nLFxyXG4gICAgc3ZQcGF0aDI6IHN0cmluZyxcclxuICAgIHRleHQxOiBzdHJpbmcsXHJcbiAgICB0ZXh0Mjogc3RyaW5nLFxyXG4gICAgaGFuZGxlcjE6IChlOiBhbnkpID0+IGFueSxcclxuICAgIGhhbmRsZXIyOiAoZTogYW55KSA9PiBhbnksXHJcbiAgICBzdGF0ZSA9IFwiZmlyc3RcIixcclxuICAgIGNsYXNzTmFtZSA9IFwic2EtdG9vbGJhcl9fYnV0dG9uIHNhLXRvb2xiYXJfX3N2Zy1idXR0b25cIlxyXG4gICk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IHN2ZzEgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHN2Z1BhdGgxKTtcclxuICAgIGNvbnN0IHN2ZzIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHN2UHBhdGgyKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgY2xhc3NOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSBcInNlY29uZFwiO1xyXG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQyO1xyXG4gICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChzdmcxKTtcclxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMik7XHJcbiAgICAgICAgaGFuZGxlcjIoZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFwic2Vjb25kXCIpIHtcclxuICAgICAgICBzdGF0ZSA9IFwiZmlyc3RcIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSB0ZXh0MTtcclxuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQoc3ZnMik7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzEpO1xyXG4gICAgICAgIGhhbmRsZXIxKGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChzdGF0ZSA9PT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQxO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMSk7XHJcbiAgICB9IGVsc2UgaWYgKChzdGF0ZSA9IFwic2Vjb25kXCIpKSB7XHJcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQyO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMik7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSB0b2dnbGU7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5wdXQoXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyID0gXCJcIixcclxuICAgIGRlZmF1bHRWYWx1ZSA9IFwiXCJcclxuICApOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IDxIVE1MSW5wdXRFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiaW5wdXRcIixcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBvcHRpb25zID0ge1xyXG4gIHJ1bm5pbmdJbkJyb3dzZXI6IHR5cGVvZiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsbG93RG9tUmVuZGVyaW5nKCkge1xyXG4gIHJldHVybiBvcHRpb25zLnJ1bm5pbmdJbkJyb3dzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21tZXJjaWFsTGljZW5zZUxpbmsoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNhLWNvbW1lcmNpYWxcIik7XHJcbiAgY29uc3QgbGluayA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwic2EtY29tbWVyY2lhbF9fdGV4dFwiLCB7XHJcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LnN1cnZleWpzLmlvL0J1eVwiLFxyXG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbnRhaW5lclNwYW4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIlwiKTtcclxuICBjb25zdCBpY29uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm5vbmNvbW1lcmNpYWxcIik7XHJcbiAgY29uc3QgdGV4dFNwYW4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgXCJzcGFuXCIsXHJcbiAgICBcInNhLWNvbW1lcmNpYWxfX3Byb2R1Y3RcIixcclxuICAgIHtcclxuICAgICAgaW5uZXJUZXh0OiBcIlBsZWFzZSBwdXJjaGFzZSBhIFN1cnZleUpTIEFuYWx5dGljcyBkZXZlbG9wZXIgbGljZW5zZSB0byB1c2UgaXQgaW4geW91ciBhcHAuXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGluaykuYXBwZW5kQ2hpbGQoY29udGFpbmVyU3Bhbik7XHJcbiAgY29udGFpbmVyU3Bhbi5hcHBlbmRDaGlsZChpY29uKTtcclxuICBjb250YWluZXJTcGFuLmFwcGVuZENoaWxkKHRleHRTcGFuKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyB6aXBBcnJheXMoLi4uYXJyYXlzOiBhbnlbXSk6IGFueVtdW10ge1xyXG4gICAgbGV0IHppcEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheXNbMF0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgemlwQXJyYXlbaV0gPSBbXTtcclxuICAgICAgYXJyYXlzLmZvckVhY2goKGFycikgPT4ge1xyXG4gICAgICAgIHppcEFycmF5W2ldLnB1c2goYXJyW2ldKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gemlwQXJyYXk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVuemlwQXJyYXlzKHppcEFycmF5OiBhbnlbXVtdKTogYW55W11bXSB7XHJcbiAgICBsZXQgYXJyYXlzOiBhbnlbXVtdID0gW107XHJcbiAgICB6aXBBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICB2YWx1ZS5mb3JFYWNoKCh2YWwsIGopID0+IHtcclxuICAgICAgICBpZiAoIWFycmF5c1tqXSkgYXJyYXlzW2pdID0gW107XHJcbiAgICAgICAgYXJyYXlzW2pdW2ldID0gdmFsO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycmF5cztcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBzb3J0RGljdGlvbmFyeShcclxuICAgIGtleXM6IGFueVtdLFxyXG4gICAgdmFsdWVzOiBhbnlbXSxcclxuICAgIGRlc2M6IGJvb2xlYW5cclxuICApOiB7IGtleXM6IGFueVtdLCB2YWx1ZXM6IGFueVtdIH0ge1xyXG4gICAgbGV0IGRpY3Rpb25hcnkgPSB0aGlzLnppcEFycmF5cyhrZXlzLCB2YWx1ZXMpO1xyXG4gICAgbGV0IGNvbXBhcmF0b3IgPSAoYTogYW55W10sIGI6IGFueVtdLCBhc2M6IGJvb2xlYW4gPSB0cnVlKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhWzFdIDwgYlsxXSA/IDEgOiBhWzFdID09IGJbMV0gPyAwIDogLTE7XHJcbiAgICAgIHJldHVybiBhc2MgPyByZXN1bHQgOiByZXN1bHQgKiAtMTtcclxuICAgIH07XHJcbiAgICBkaWN0aW9uYXJ5LnNvcnQoKGE6IGFueVtdLCBiOiBhbnlbXSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGVzYyA/IGNvbXBhcmF0b3IoYSwgYiwgZmFsc2UpIDogY29tcGFyYXRvcihhLCBiKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGtleXNBbmRWYWx1ZXMgPSB0aGlzLnVuemlwQXJyYXlzKGRpY3Rpb25hcnkpO1xyXG4gICAgcmV0dXJuIHsga2V5czoga2V5c0FuZFZhbHVlc1swXSwgdmFsdWVzOiBrZXlzQW5kVmFsdWVzWzFdIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvUGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKHZhbHVlIC8gbWF4VmFsdWUpICogMTAwO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpbmtzQ29udGFpbmVyKFxyXG4gIGxpbmtzOiBBcnJheTx7IG5hbWU6IHN0cmluZywgY29udGVudDogYW55IH0+XHJcbik6IEhUTUxFbGVtZW50IHtcclxuICBjb25zdCBsaW5rc0NvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiXCIsIHtcclxuICAgICAgICBpbm5lclRleHQ6IGxpbmsubmFtZSxcclxuICAgICAgICBkb3dubG9hZDogbGluay5uYW1lLFxyXG4gICAgICAgIGhyZWY6IGxpbmsuY29udGVudCxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGxpbmtzQ29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VzQ29udGFpbmVyKFxyXG4gIGxpbmtzOiBBcnJheTx7IG5hbWU6IHN0cmluZywgY29udGVudDogYW55IH0+XHJcbik6IEhUTUxFbGVtZW50IHtcclxuICBjb25zdCBsaW5rc0NvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJcIiwge1xyXG4gICAgICAgIGFsdDogbGluay5uYW1lLFxyXG4gICAgICAgIHNyYzogbGluay5jb250ZW50LFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9KTtcclxuICByZXR1cm4gbGlua3NDb250YWluZXI7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX187Il0sInNvdXJjZVJvb3QiOiIifQ==