/*!
 * surveyjs - Survey JavaScript library v1.9.116
 * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("basque", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["basque"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/localization/basque.ts");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=basque.js.map