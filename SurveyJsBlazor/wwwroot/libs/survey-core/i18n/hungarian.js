/*!
 * surveyjs - Survey JavaScript library v1.9.116
 * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("hungarian", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["hungarian"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/localization/hungarian.ts");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=hungarian.js.map