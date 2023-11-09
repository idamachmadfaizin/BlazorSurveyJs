/*!
 * surveyjs - Survey JavaScript library v1.9.116
 * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("french", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["french"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/localization/french.ts");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=french.js.map