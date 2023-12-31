/*!
 * surveyjs - Survey JavaScript library v1.9.116
 * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("finnish", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["finnish"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/localization/finnish.ts");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=finnish.js.map