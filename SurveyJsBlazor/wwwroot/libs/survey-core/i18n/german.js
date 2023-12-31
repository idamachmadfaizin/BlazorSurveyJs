/*!
 * surveyjs - Survey JavaScript library v1.9.116
 * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("german", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["german"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/localization/german.ts");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=german.js.map