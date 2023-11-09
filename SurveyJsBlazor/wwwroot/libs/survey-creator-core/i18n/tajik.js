/*!
 * SurveyJS Creator v1.9.116
 * (c) 2015-2023 Devsoft Baltic OÜ - http://surveyjs.io/
 * Github: https://github.com/surveyjs/survey-creator
 * License: https://surveyjs.io/Licenses#SurveyCreator
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-creator-core"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyCreatorLocales", ["survey-creator-core"], factory);
	else if(typeof exports === 'object')
		exports["SurveyCreatorLocales"] = factory(require("survey-creator-core"));
	else
		root["SurveyCreatorLocales"] = factory(root["SurveyCreatorCore"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_survey_creator_core__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/localization/tajik.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/localization/tajik.ts":
/*!***********************************!*\
  !*** ./src/localization/tajik.ts ***!
  \***********************************/
/*! exports provided: tgStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tgStrings", function() { return tgStrings; });
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_0__);
// This dictionary contains 405 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.

var tgStrings = {
    // survey templates
    survey: {
        edit: "Тағйир додан",
        externalHelpLink: "Ёд гирифтани ташкил кардани саволномаҳо",
        externalHelpLinkUrl: "Https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
        dropQuestion: "Илтимос, элементи даркориро аз бастаи чап кашида биёред.",
        // addLogicItem: "Create a rule to customize the flow of the survey.",
        copy: "Нусхабардорӣ кардан",
        // duplicate: "Duplicate",
        addToToolbox: "Илова кардан ба асбобҳо",
        deletePanel: "Нест кардани баста",
        deleteQuestion: "Нест кардани савол",
        convertTo: "Тағйир додани шакл ба",
        drag: "Кашидани элемент"
    },
    // Question types
    qt: {
        default: "Бо нобаёнӣ",
        checkbox: "Интихоби бисёр",
        comment: "Шарҳ",
        imagepicker: "Интихоби сурат",
        // ranking: "Ranking",
        // image: "Image",
        dropdown: "Рӯйхати таркишӣ",
        // tagbox: "Multi-Select Dropdown",
        file: "Боркунии файлҳо",
        // html: "HTML",
        matrix: "Матриса (интихоби танҳо)",
        matrixdropdown: "Матриса (интихоби бисёр)",
        matrixdynamic: "Матриса (сатрҳои динамикӣ)",
        multipletext: "Матнҳои бисёр",
        panel: "Баста (барои гурӯҳи саволҳо)",
        paneldynamic: "Баста (бастаҳои динамикӣ)",
        radiogroup: "Интихоби танҳо",
        rating: "Рейтинг (миқёс)",
        text: "Воридкунии матнӣ",
        boolean: "Қиммати булӣ",
        expression: "Ифода (танҳо барои хондан)",
        // signaturepad: "Signature",
        // buttongroup: "Button Group"
    },
    // Strings in SurveyJS Creator
    ed: {
        defaultLocale: "Бо нобаёнӣ ({0})",
        survey: "Саволнома",
        settings: "Танзимоти саволнома",
        // settingsTooltip: "Open settings",
        // surveySettings: "Survey Settings",
        // surveySettingsTooltip: "Open survey settings",
        // showPanel: "Show Panel",
        // hidePanel: "Hide Panel",
        // prevSelected: "Select previous",
        // nextSelected: "Select next",
        // surveyTypeName: "Survey",
        // pageTypeName: "Page",
        // panelTypeName: "Panel",
        // questionTypeName: "Question",
        // columnTypeName: "Column",
        addNewPage: "Сохтани саҳифаи нав",
        moveRight: "Ба рост тоб додан",
        moveLeft: "Ба чап тоб додан",
        deletePage: "Нест кардани саҳифа",
        editPage: "Тағйир додани саҳифа",
        edit: "Тағйир додан",
        newPageName: "саҳифа",
        newQuestionName: "савол",
        newPanelName: "баста",
        newTextItemName: "матн",
        testSurvey: "Санҷиши саволнома",
        // defaultV2Theme: "Default",
        // modernTheme: "Modern",
        // defaultTheme: "Default (legacy)",
        testSurveyAgain: "Боз як бор санҷиш гузаронидан",
        testSurveyWidth: "Дарозии саволнома:",
        // navigateToMsg: "You had to navigate to",
        logic: "Мантиқи саволнома",
        embedSurvey: "Сабти саволнома",
        translation: "Тарҷума",
        saveSurvey: "Сабти саволнома",
        // saveSurveyTooltip: "Save Survey",
        designer: "Дида баромадани конструктор",
        jsonEditor: "Тағйиркунаки JSON",
        // jsonHideErrors: "Hide errors",
        // jsonShowErrors: "Show errors",
        undo: "Бекор кардан",
        redo: "Такрор",
        // undoTooltip: "Undo last change",
        // redoTooltip: "Redo the change",
        // showMoreChoices: "Show more",
        // showLessChoices: "Show less",
        // copy: "Copy",
        // cut: "Cut",
        // paste: "Paste",
        // copyTooltip: "Copy selection to clipboard",
        // cutTooltip: "Cut selection to clipboard",
        // pasteTooltip: "Paste from clipboard",
        options: "Танзимотҳо",
        generateValidJSON: "Сохтани JSON-и дуруст",
        generateReadableJSON: "Сохтани JSON-и мехондагӣ",
        toolbox: "Бастаи асбобҳо",
        // "property-grid": "Properties",
        // propertyGridFilteredTextPlaceholder: "Type to search...",
        toolboxGeneralCategory: "Умумӣ",
        // toolboxChoiceCategory: "Choice Questions",
        // toolboxTextCategory: "Text Input Questions",
        // toolboxContainersCategory: "Containers",
        // toolboxMatrixCategory: "Matrix Questions",
        // toolboxMiscCategory: "Misc",
        correctJSON: "Илтимос, JSON-ро дуруст кунед.",
        surveyResults: "Натиҷаи ташхис:",
        surveyResultsTable: "Ҳамчун ҷадвал",
        surveyResultsJson: "Ҳамчун JSON",
        resultsTitle: "Сарлавҳаи савол",
        resultsName: "Мақсади савол",
        resultsValue: "Қиммати ҷавоб",
        resultsDisplayValue: "Қиммати нишондода",
        modified: "Тағйирдодашуда",
        saving: "Сабт",
        saved: "Сабтшуда",
        // propertyEditorError: "Error",
        saveError: "Хатогӣ! Қиммати тағйиркунак сабт нашудааст.",
        // translationPropertyGridTitle: "Language Settings",
        // translationLanguages: "Languages",
        translationAddLanguage: "Интихоби забон барои тарҷума",
        translationShowAllStrings: "Нишон додани ҳамаи сатрҳо",
        // translationShowUsedStringsOnly: "Used Strings Only",
        translationShowAllPages: "Нишон додани ҳамаи саҳифаҳо",
        translationNoStrings: "Сатрҳо барои тарҷума вуҷуд надоранд. Илтимос, филтрро тағйир диҳед.",
        translationExportToSCVButton: "Экспорт ба CSV",
        translationImportFromSCVButton: "Импорт аз CSV",
        translationMergeLocaleWithDefault: "Якҷоя кардани {0} бо локали нобаёнӣ",
        // translationPlaceHolder: "Translation...",
        bold: "Ғавс",
        italic: "Қаҷ",
        underline: "Зерхат",
        addNewQuestion: "Иловаи савол",
        // selectPage: "Select page...",
        // htmlPlaceHolder: "HTML content will be here.",
        // panelPlaceHolder: "Drop a question from the toolbox here.",
        // surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below.",
        // addNewTypeQuestion: "Add {0}", //{0} is localizable question type
        // chooseLogoPlaceholder: "[LOGO]",
        // auto: "auto",
        lg: {
            // addNewItem: "Add New Rule",
            // empty_tab: "Create a rule to customize the flow of the survey.",
            page_visibilityName: "Намоиши саҳифа",
            // page_enableName: "Enable (disable) page",
            panel_visibilityName: "Намоиши баста",
            panel_enableName: "Баста гирон/куштагӣ",
            question_visibilityName: "Намоиши савол",
            question_enableName: "Савол гирон/куштагӣ",
            question_requireName: "Савол ихтиёрӣ аст",
            // column_visibilityName: "Show (hide) column",
            // column_enableName: "Enable (disable) column",
            // column_requireName: "Make column required",
            trigger_completeName: "Назарсанҷӣ тамом шуд",
            trigger_setvalueName: "Сабти қиммати савол",
            trigger_copyvalueName: "Нусхабардорӣ кардани қиммати савол",
            trigger_skipName: "Гузаштан ба савол",
            trigger_runExpressionName: "Иҷро кардани ифодаи истифодабаранда",
            completedHtmlOnConditionName: "Матни истифодабаранда 'Саҳифаи ташаккурӣ'",
            page_visibilityDescription: "Саҳифаро намоён кардан, агар ифодаи мантиқӣ 'true' баргардонад. Вагарна онро нонамоён кардан.",
            panel_visibilityDescription: "Бастаро намоён кардан, агар ифодаи мантиқӣ 'true' баргардонад. Вагарна онро нонамоён кардан.",
            panel_enableDescription: "Бастаро ва ҳамаи элементҳои дохилии онро намоён кардан, агар ифодаи мантиқӣ 'true' баргардонад. Вагарна онро нонамоён кардан.",
            question_visibilityDescription: "Саволро намоён кардан, агар ифодаи мантиқӣ 'true' баргардонад. Вагарна онро нонамоён кардан.",
            question_enableDescription: "Саволро гирон кардан, агар ифодаи мантиқӣ 'true' баргардонад. Вагарна онро нонамоён кардан.",
            question_requireDescription: "Савол ҳатмӣ мешавад, вақте ки ифодаи мантиқӣ 'true' баргардонад.",
            trigger_completeDescription: "Вақте, ки ифодаи мантиқӣ 'true' баргардонад, он вақт ӯ ҳамчун тамом шуда ҳисобида мешавад ва истифодабар саҳифаи 'Саҳифаи ташаккурӣ'-ро мебинад.",
            trigger_setvalueDescription: "Вақте, ки қиммати саволҳо, ки дар ифодаи мантиқӣ истифода мешавад, тағйир мешаванд ва ифодаи мантиқӣ 'true' бармегардонад, он гоҳ ба саволи интихобшуда қиммат сабт мешавад.",
            trigger_copyvalueDescription: "Вақте, ки қимматҳои саволҳо, ки дар ифодаи мантиқӣ истифода мешаванд, тағйир меёбанд ва ифода қиммати 'true' бармегардонад, он гоҳ як қиммати саволи интихобшуда ба дигар савол нусхабардорӣ карда мешавад.",
            trigger_skipDescription: "Вақте, ки ифодаи мантиқӣ 'true' бармегардонад, он гоҳ саволнома ба саволи интихобшуда равона мешавад.",
            trigger_runExpressionDescription: "Вақте, ки ифодаи мантиқӣ 'true' бармегардонад, он гоҳ ифодаи истифодабар иҷро мешавад. Шумо, бо хоҳиш, метавонед натиҷаи ин ифодаро ба саволи интихобшуда бахшед.",
            completedHtmlOnConditionDescription: "Агар ифодаи мантиқӣ 'true' баргардонад, он гоҳ матн бо нобаёнӣ барои 'саҳифаи ташаккурӣ' тағйир мешавад ба ишорашуда.",
            itemExpressionText: "Вақте, ки ифода: '{0}' бармегардонад 'true':",
            // itemEmptyExpressionText: "New rule",
            page_visibilityText: "Саҳифаи {0}-ро намоён кардан ",
            panel_visibilityText: "Бастаи {0}-ро намоён кардан",
            panel_enableText: "Бастаи {0}-ро гирон кардан",
            question_visibilityText: "Саволи {0}-ро намоён кардан",
            question_enableText: "Саволи {0}-ро намоён кардан",
            question_requireText: "Саволи {0}-ро ҳатмӣ кардан",
            // column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
            // column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
            // column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
            trigger_completeText: "Саволнома ҳамчун анҷомшуда тағйир меёбад",
            trigger_setvalueText: "Ба саволи {0} қиммати {1}-ро сабт кардан",
            trigger_copyvalueText: "Нусхабардорӣ кардан ба саволи {0} қиммат аз саволи {1}",
            trigger_skipText: "Саволнома мегузарад ба саволи {0}",
            trigger_runExpressionText1: "Иҷро кардани ифодаи: '{0}'",
            trigger_runExpressionText2: "ва натиҷаи онро ба саволи {0} гузоштан",
            completedHtmlOnConditionText: "Нишон додани матни истифодабар дар 'Саҳифаи ташаккурӣ'",
            // showAllQuestions: "All Questions",
            // showAllActionTypes: "All Action Types",
            // conditions: "Condition(s)",
            // actions: "Action(s)",
            expressionEditorTitle: "Танзимоти мантиқи ифода",
            // actionsEditorTitle: "Define action(s)",
            // deleteAction: "Delete Action",
            // addNewAction: "Add Action",
            // selectedActionCaption: "Select action...",
            expressionInvalid: "Ифодаи мантиқӣ холӣ ё беэътибор мебошад. Илтимос, ислоҳ кунед.",
            // noActionError: "Please, add at least one action.",
            // actionInvalid: "Please, fix problems in your action(s).",
            // expressionSetup: "",
            // actionsSetup: ""
        }
    },
    // Property Editors
    pe: {
        apply: "Сабт",
        ok: "OK",
        save: "Сабт кардан",
        // clear: "Clear",
        // saveTooltip: "Save",
        cancel: "Бекор кардан",
        // set: "Set",
        reset: "Партофтан",
        // change: "Change",
        // refresh: "Refresh",
        close: "Махкам кардан",
        delete: "Нест кардан",
        add: "Илова кардан",
        // addNew: "Add New",
        addItem: "Пахш кунед, барои илова кардани элемент...",
        // removeItem: "Click to remove the item...",
        // dragItem: "Drag the item",
        addOther: "Дигар",
        addSelectAll: "Интихоб кардани ҳамаи нуқтаҳо",
        addNone: "Ҳичӣ",
        removeAll: "Ҳамаро нест кардан",
        edit: "Тағйир додан",
        back: "Бозгашт бе сабт",
        // backTooltip: "Return without saving",
        saveAndBack: "Сабт кардан ва бозгаштан",
        // saveAndBackTooltip: "Save and return",
        // doneEditing: "Done",
        editChoices: "Тағйир додани интихоб",
        // showChoices: "Show Choices",
        move: "Ҷойивазкунӣ",
        empty: "<холӣ>",
        // emptyValue: "Value is empty",
        fastEntry: "Даромади тез",
        // fastEntryNonUniqueError: "Value '{0}' is not unique",
        // fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
        // fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2",
        formEntry: "Формаи даромад",
        testService: "Тести хизматрасонӣ",
        itemSelectorEmpty: "Илтимос, элементро интихоб кунед",
        // conditionActionEmpty: "Please select the action",
        conditionSelectQuestion: "Саволро интихоб кунед ...",
        conditionSelectPage: "Саҳифаро интихоб кунед ...",
        conditionSelectPanel: "Бастаро интихоб кунед ...",
        conditionValueQuestionTitle: "Илтимос, қимматро ворид/интихоб кунед",
        expressionHelp: "Илтимос, ифодаро ворид кунед. Шумо метавонед қавзҳои ҷингиларо истифода кунед, барои дастрасӣ гирифтан ба қимматҳои савол: '{Савол1} + {Савол2}', '({нарх}*{шумора}) * (100 - {тахфиф}).",
        aceEditorHelp: "Тугмаҳои Ctrl+Пробел пахш кунед, барои гирифтани ишораҳои кӯмакӣ",
        aceEditorRowTitle: "Сатрҳои ҷорӣ",
        aceEditorPanelTitle: "Бастаи ҷорӣ",
        showMore: "Барои гирифтани маълумоти мушаххастар, илтимос, ба дастурамал гузаред",
        assistantTitle: "Саволҳои дастрас:",
        cellsEmptyRowsColumns: "Бояд ақалан як сатр ё сутун бошад",
        // showPreviewBeforeComplete: "Preview answers before submitting the survey",
        propertyIsEmpty: "Илтимос, қимматро ворид кунед",
        // propertyIsNoUnique: "Please enter a unique value",
        propertyNameIsNotUnique: "Лутфан як номи беҳамто ворид кунед",
        listIsEmpty: "Ҳолати нав илова кунед",
        // "listIsEmpty@choices": "No choices have been added yet",
        // "addNew@choices": "Add a choice",
        expressionIsEmpty: "Ибораи холӣ аст",
        value: "Қиммат",
        text: "Матн",
        rowid: "ID-и сатр",
        imageLink: "Истинод ба сурат",
        columnEdit: "Иваз додани сутун: {0}",
        itemEdit: "Тағйир додани элемент: {0}",
        url: "URL",
        path: "Роҳ",
        valueName: "Номи нуқта",
        choicesbyurl: {
        // valueName: "Get values from the following JSON field"
        },
        titleName: "Сарлавҳаи нуқта",
        // imageLinkName: "Get image URLs from the following JSON field",
        // allowEmptyResponse: "Allow empty response",
        titlePlaceholder: "Сарлавҳа ворид кунед",
        surveyTitlePlaceholder: "Сарлавҳаи пурсишро ворид кунед",
        pageTitlePlaceholder: "Сарлавҳаи саҳифаро ворид кунед",
        descriptionPlaceholder: "Тавсифро ворид кунед",
        surveyDescriptionPlaceholder: "Тавсифи пурсишро ворид кунед",
        pageDescriptionPlaceholder: "Тавсифи саҳифаро ворид кунед",
        showOtherItem: "Нуқтаи 'Дигар' вуҷуд аст",
        otherText: "Манти нуқтаи 'Дигар'",
        showNoneItem: "Ягон нуқта вуҷуд надорад",
        noneText: "Матни нуқтаи 'Ҳиҷӣ'",
        showSelectAllItem: "Ҳамаи нуқтаҳоро интихоб кардан",
        selectAllText: "Матни нуқта 'Ҳамаи нуқтаҳоро интихоб кардан'",
        choicesMin: "Қиммати минималӣ барои элементҳои сохташуда бо роҳи автоматӣ",
        choicesMax: "Қиммати максималӣ барои элементҳои сохташуда бо роҳи автоматӣ",
        choicesStep: "Фарқият байни элементҳои сохташуда бо роҳи автоматӣ",
        name: "Ном",
        title: "Сарлавҳа",
        cellType: "Намдуи катакча",
        // colCount: "Column count",
        choicesOrder: "Интихоб кардани фармоиши интихоб",
        visible: "Нишон додан?",
        isRequired: "Ҳатмӣ?",
        isAllRowRequired: "Ҳамаи сатрҳо барои пуркунӣ ҳатмӣ мебошад",
        requiredErrorText: "Ин майдон баро пуркунӣ ҳатмист",
        startWithNewLine: "Аз сатри нав сар кардан?",
        rows: "Шумораи сатрҳо",
        // cols: "Columns",
        // placeholder: "Input area placeholder",
        showPreview: "Нишон додани пешнамоиш?",
        storeDataAsText: "Нигоҳ доштани дохили файл дар формати JSON ҳамчун матн",
        // maxSize: "Maximum file size (in bytes)",
        // imageHeight: "Image height",
        // imageWidth: "Image width",
        rowCount: "Шумораи сатрҳо",
        columnLayout: "Макети сутунҳо",
        addRowLocation: "Илова кардани ҷойи тугмаи сатр",
        addRowText: "Илова кардани матни тугмаи сатр",
        removeRowText: "Нест кардани тугмаи матн",
        rateMin: "Рейтинги минималӣ",
        rateMax: "Рейтинги максималӣ",
        rateStep: "Қадами рейтинг",
        minRateDescription: "Маълумот барои рейтинги минималӣ",
        maxRateDescription: "Маълумот барои рейтинги максималӣ",
        inputType: "Намуди дохилкунӣ",
        optionsCaption: "Танзимотҳои имзо",
        // defaultValue: "Default Answer",
        cellsDefaultRow: "Матни нобаёни катак",
        surveyEditorTitle: "Танзимоти саволнома",
        qEditorTitle: "Тағйир додани: {0}",
        maxLength: "Шумораи максималӣ",
        buildExpression: "Сохтан",
        editExpression: "Таҳрир кунед",
        // and: "and",
        // or: "or",
        remove: "Ҷойивазкунӣ",
        addCondition: "шарт илова кунед",
        // emptyLogicPopupMessage: "Select a question to start configuring conditions.",
        // if: "If",
        // then: "then",
        // setToName: "Target question",
        // fromName: "Question to copy answer from",
        // gotoName: "Question to skip to",
        // ruleIsNotSet: "Rule is incorrect",
        // includeIntoResult: "Include into survey results",
        showTitle: "Нишон/пинҳон кардани сарлавҳа",
        // expandCollapseTitle: "Expand/collapse title",
        locale: "Забон ба нобаён",
        simulator: "Таҷҳизотро интихоб кунед",
        landscapeOrientation: "Манзаравӣ",
        // portraitOrientation: "Switch to portrait orientation",
        mode: "Намуд (тағйирот/намоиш)",
        clearInvisibleValues: "Тоза кардани қимматҳои ноёан",
        cookieName: "Номи Cookie (куштани такроран локалӣ гузаштани саволнома)",
        sendResultOnPageNext: "Нишон додани натиҷаи саволнома дар саҳифаи наздик",
        storeOthersAsComment: "Нигоҳ доштани қиммати 'Дигар' дар майдони алоҳида",
        showPageTitles: "Нишон додани сарлавҳаи саҳифа",
        showPageNumbers: "Нишон додани рақами саҳифа",
        pagePrevText: "Матн дар тугмаи 'Саҳифаи пештара'",
        pageNextText: "Матн дар тугмаи 'Саҳифаи оянда'",
        completeText: "Матн дар тугмаи 'Анҷом додан'",
        // previewText: "Preview Answers button text",
        // editText: "Edit Answer button text",
        startSurveyText: "Матн дар тугмаи 'Сар кардан'",
        showNavigationButtons: "Нишон додани тугмаҳои новбарӣ (новбарии нобаён)",
        showPrevButton: "Нишон додани тугмаи 'Саҳифаи пештара' (истифодабар метавонад ба саҳифаи пештара баргардад)",
        firstPageIsStarted: "Саҳифаи якуми саволнома саҳифаи саршаванда мебошад.",
        showCompletedPage: "Нишон додани саҳифа бо матн дар анҷоми пуркунӣ (HTML-и саҳифаи анҷом)",
        goNextPageAutomatic: "Гузариш ба саҳифаи оянда ба роҳи автоматӣ дар ҳолати пуркунии ҳамаи саволҳо",
        showProgressBar: "Нишон додани пешравии пуркунӣ",
        questionTitleLocation: "Ҷойгиршавии сарлавҳаи савол",
        requiredText: "Аломат барои саволи ҳатмӣ",
        questionStartIndex: "Индекси саршавии савол (1, 2 ё 'A', 'а')",
        showQuestionNumbers: "Нишон додани номери савол",
        questionTitleTemplate: "Намунаи номи саволнома, ҳамчун нобаён: {матнро} {талаб} {намекунад}.",
        questionErrorLocation: "Ҷойгиркунии хатогии саволнома",
        focusFirstQuestionAutomatic: "Гузариш ба саволи якум дар ивазкунии саҳифа",
        questionsOrder: "Мураттабсозии элементҳо дар саҳифа",
        maxTimeToFinish: "Вақти максималӣ дар сонияҳо, барои пур кардани саволнома",
        maxTimeToFinishPage: "Вақти максималӣ дар сонияҳо, барои пур кардани саҳифаи саволнома",
        page: {
        // maxTimeToFinish: "Time limit to finish the page (in seconds)"
        },
        question: {
        // page: "Parent page"
        },
        showTimerPanel: "Нишон додани бастаи вақтсанҷ",
        showTimerPanelMode: "Нишон додани ҳолати бастаи таймер",
        // renderMode: "Panel display mode",
        allowAddPanel: "Иҷозат додан ба илова кардани бастаҳо",
        allowRemovePanel: "Иҷозат додан ба нест кардани бастаҳо",
        // noEntriesText: "Empty entries text",
        panelAddText: "Иловаи матн ба баста",
        panelRemoveText: "Нест кардани матн ба баста",
        isSinglePage: "Нишон додани ҳамаи элементҳо дар як саҳифа",
        // html: "HTML markup",
        expression: "Ифода",
        // setValue: "Answer",
        // dataFormat: "Image format",
        // allowAddRows: "Allow adding rows",
        // allowRemoveRows: "Allow removing rows",
        // allowRowsDragAndDrop: "Allow row drag and drop",
        // responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height.",
        // minImageWidth: "Minimum image width",
        // maxImageWidth: "Maximum image width",
        // minImageHeight: "Minimum image height",
        // maxImageHeight: "Maximum image height",
        minValue: "Қиммати минималӣ",
        maxValue: "Қиммати максималӣ",
        // minLength: "Minimum length (in characters)",
        allowDigits: "Иҷозат додани рақамҳо",
        minCount: "Шумораи минималӣ",
        maxCount: "Шумораи максималӣ",
        regex: "Ифодаи регулярӣ",
        surveyvalidator: {
        // text: "Error message",
        // expression: "Validation expression"
        },
        totalText: "Тексти умумӣ",
        totalType: "Намуди умумӣ",
        totalExpression: "Ифодаи умумӣ",
        totalDisplayStyle: "Услуби намоиши умумӣ",
        totalCurrency: "Асъори умумӣ",
        totalFormat: "Намуди умумӣ",
        // logo: "Logo (URL or base64-encoded string)",
        // questionsOnPageMode: "Survey structure",
        // maxTextLength: "Maximum answer length (in characters)",
        // maxOthersLength: "Maximum comment length (in characters)",
        // autoGrowComment: "Auto-expand comment area if necessary",
        // textUpdateMode: "Update text question value",
        // focusOnFirstError: "Set focus on the first invalid answer",
        // checkErrorsMode: "Run validation",
        // navigateToUrl: "Navigate to URL",
        // navigateToUrlOnCondition: "Dynamic URL",
        // completedBeforeHtml: "Markup to show if the user already filled out this survey",
        // completedHtml: "Survey Complete page markup",
        // completedHtmlOnCondition: "Dynamic Survey Complete page markup",
        // loadingHtml: "Markup to show while survey model is loading",
        // commentText: "Comment area text",
        // autocomplete: "Autocomplete type",
        // labelTrue: "\"True\" label",
        // labelFalse: "\"False\" label",
        // allowClear: "Show the Clear button",
        // displayStyle: "Value display style",
        // format: "Formatted string",
        // maximumFractionDigits: "Maximum fractional digits",
        // minimumFractionDigits: "Minimum fractional digits",
        // useGrouping: "Display grouping separators",
        // allowMultiple: "Allow multiple files",
        // allowImagesPreview: "Preview images",
        // acceptedTypes: "Accepted file types",
        // waitForUpload: "Wait for the upload to complete",
        // needConfirmRemoveFile: "Confirm file deletion",
        // detailPanelMode: "Detail panel location",
        // minRowCount: "Minimum row count",
        // maxRowCount: "Maximum row count",
        // confirmDelete: "Confirm row deletion",
        // confirmDeleteText: "Confirmation message",
        paneldynamic: {
        // confirmDelete: "Confirm panel deletion"
        },
        // panelCount: "Initial panel count",
        // minPanelCount: "Minimum panel count",
        // maxPanelCount: "Maximum panel count",
        // panelsState: "Inner panel expand state",
        // templateDescription: "Description template",
        // templateTitle: "Title template",
        // panelPrevText: "Previous Panel button tooltip",
        // panelNextText: "Next Panel button tooltip",
        // showRangeInProgress: "Show progress bar",
        // templateTitleLocation: "Question title location",
        // panelRemoveButtonLocation: "Remove Panel button location",
        // hideIfRowsEmpty: "Hide the question if there are no rows",
        // hideColumnsIfEmpty: "Hide columns if there are no rows",
        // rateValues: "Custom rate values",
        // hideIfChoicesEmpty: "Hide the question if it contains no choices",
        // hideNumber: "Hide question number",
        // minWidth: "Minimum width (in CSS-accepted values)",
        // maxWidth: "Maximum width (in CSS-accepted values)",
        // width: "Width (in CSS-accepted values)",
        // showHeader: "Show column headers",
        // horizontalScroll: "Show horizontal scrollbar",
        // columnMinWidth: "Minimum column width (in CSS-accepted values)",
        // rowTitleWidth: "Row header width (in CSS-accepted values)",
        // valueTrue: "\"True\" value",
        // valueFalse: "\"False\" value",
        // minErrorText: "\"Value is below minimum\" error message",
        // maxErrorText: "\"Value exceeds maximum\" error message",
        // otherErrorText: "\"Empty comment\" error message",
        // keyDuplicationError: "\"Non-unique key value\" error message",
        // maxSelectedChoices: "Maximum selected choices",
        // showClearButton: "Show the Clear button",
        // showNumber: "Show panel number",
        // logoWidth: "Logo width (in CSS-accepted values)",
        // logoHeight: "Logo height (in CSS-accepted values)",
        // readOnly: "Read-only",
        // enableIf: "Editable if",
        // emptyRowsText: "\"No rows\" message",
        // size: "Input size (in characters)",
        // separateSpecialChoices: "Separate special choices (None, Other, Select All)",
        // choicesFromQuestion: "Copy choices from the following question",
        // choicesFromQuestionMode: "Which choices to copy?",
        // showCommentArea: "Show the comment area",
        // commentPlaceholder: "Comment area placeholder",
        // displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values",
        // rowsOrder: "Row order",
        // columnsLayout: "Column layout",
        // columnColCount: "Nested column count",
        // state: "Panel expand state",
        // correctAnswer: "Correct Answer",
        // defaultPanelValue: "Default Values",
        // cells: "Cell Texts",
        // keyName: "Key column",
        itemvalue: {
        // text: "Alt text"
        },
        logoPosition: "Ҷойгиршавии логотип",
        addLogo: "Иловаи логотип...",
        changeLogo: "Тағйир додани логотип...",
        logoPositions: {
            none: "Разместить логотип",
            left: "Аз чап",
            right: "Дар тарафи рост",
            top: "Аз боло",
            bottom: "Аз поён"
        },
        tabs: {
            general: "Умумӣ",
            fileOptions: "Танзимотҳо",
            // html: "HTML Editor",
            columns: "Сутунҳо",
            rows: "Сатрҳо",
            choices: "Интихоб",
            items: "Элементҳо",
            visibleIf: "Нишон додан, агар",
            enableIf: "Дастрас аст, агар",
            requiredIf: "Ҳатмӣ барои пуркунӣ, агар",
            rateValues: "Баҳодиҳии қимматбаҳои савол",
            choicesByUrl: "Интихоб аз интернет",
            matrixChoices: "Интихоби нобаён",
            multipleTextItems: "Дохилкунии якчанд майдончаҳои матнӣ",
            // numbering: "Numbering",
            validators: "Валидаторҳо",
            navigation: "Новбарӣ",
            question: "Савол",
            // pages: "Pages",
            timer: "Вақтсанҷ/Викторина",
            calculatedValues: "Қимматҳои ҳисобкунӣ",
            triggers: "Триггерҳо",
            templateTitle: "Номи намуна",
            totals: "Натиҷаҳо",
            logic: "Мантиқ",
            layout: "Тарҳ",
            data: "Маълумот",
            validation: "Санҷед",
            cells: "Ҳуҷайраҳо",
            showOnCompleted: "Дар охир нишон диҳед",
            logo: "Логитип дар сарлавҳаи саволнома",
            // slider: "Slider",
            // expression: "Expression",
            others: "Дигар"
        },
        editProperty: "Тағйири хосияти '{0}'",
        items: "[Элементҳо: {0}]",
        // choicesVisibleIf: "Choices are visible if",
        // choicesEnableIf: "Choices are selectable if",
        // columnsEnableIf: "Columns are visible if",
        // rowsEnableIf: "Rows are visible if",
        // indent: "Add indents",
        panel: {
        // indent: "Add outer indents"
        },
        // innerIndent: "Add inner indents",
        // defaultValueFromLastRow: "Take default values from the last row",
        // defaultValueFromLastPanel: "Take default values from the last panel",
        enterNewValue: "Илтимос, қимматро ворид кунед.",
        noquestions: "Дар саволнома ягон савол нест",
        createtrigger: "Илтимос, триггерро созед",
        // titleKeyboardAdornerTip: "Press enter button to edit",
        // keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
        triggerOn: "О",
        triggerMakePagesVisible: "Саҳифаҳоро намоён кардан:",
        triggerMakeQuestionsVisible: "Элементҳоро номаён кардан:",
        triggerCompleteText: "Тамом кардани саволнома, агар ҳама иҷро шавад.",
        triggerNotSet: "Триггер сабт нашудааст.",
        triggerRunIf: "Сар кардан, агар",
        triggerSetToName: "Тағйири қиммат:",
        triggerFromName: "Нусхабардорӣ кардани қиммат аз:",
        triggerRunExpression: "Иҷро кардани ин ифода:",
        triggerSetValue: "ба:",
        triggerGotoName: "Гузариш ба савол:",
        triggerIsVariable: "Тағйирёбандаро ба натиҷаи саволнома нагузоштан.",
        triggerRunExpressionEmpty: "Илтимос, қиммати дурустро ворид кунед.",
        // emptyExpressionPlaceHolder: "Type expression here...",
        // noFile: "No file choosen",
        // clearIfInvisible: "Clear the value if the question becomes hidden",
        // valuePropertyName: "Value property name",
        // searchEnabled: "Enable search",
        // hideSelectedItems: "Hide selected items",
        // signatureWidth: "Signature width",
        // signatureHeight: "Signature height",
        // verticalAlign: "Vertical alignment",
        // alternateRows: "Alternate rows",
        // columnsVisibleIf: "Columns are visible if",
        // rowsVisibleIf: "Rows are visible if",
        // otherPlaceholder: "Comment area placeholder"
    },
    // Property values
    pv: {
        // true: "true",
        // false: "false",
        inherit: "Меросгирӣ кардан",
        show: "Нишон додан",
        hide: "Пинҳон кардан",
        default: "Нобаёнӣ",
        initial: "Тартиботи аввала",
        random: "Тартиботи тасодуфӣ",
        collapsed: "Қатъ шуд",
        expanded: "Зиёд шуд",
        none: "Не",
        asc: "Ба калоншавӣ",
        desc: "Ба камшавӣ",
        indeterminate: "Номуайян",
        // decimal: "decimal",
        // currency: "currency",
        // percent: "percent",
        firstExpanded: "Якум зиёд шудааст",
        off: "Куштан",
        // onpanel: "Start on each panel",
        onPanel: "Дар баста",
        onSurvey: "Дар саволнома",
        list: "Рӯйхат",
        progressTop: "progressTop",
        progressBottom: "progressBottom",
        progressTopBottom: "progressTopBottom",
        horizontal: "Уфуқӣ",
        vertical: "Амудӣ",
        top: "Аз боло",
        bottom: "Аз поён",
        topBottom: "Аз боло ва поён",
        // both: "Both",
        left: "Чап",
        // right: "Right",
        // color: "color",
        // date: "date",
        // datetime: "datetime",
        // "datetime-local": "datetime-local",
        // email: "email",
        // month: "month",
        // number: "number",
        // password: "password",
        // range: "range",
        // tel: "tel",
        // text: "text",
        // time: "time",
        // url: "url",
        // week: "week",
        hidden: "Пинҳон",
        on: "Гирондан",
        onPage: "Дар саҳифа",
        edit: "Тағйир додан",
        display: "Намоиш",
        onComplete: "Пас аз анҷом",
        onHidden: "Пас аз пинҳон",
        // onHiddenContainer: "When the question or its panel/page becomes hidden",
        clearInvisibleValues: {
        // none: "Never"
        },
        all: "Ҳама",
        page: "Саҳифа",
        survey: "Саволнома",
        onNextPage: "Дар гузариш ба саҳифаи оянда",
        onValueChanged: "Дар тағйири қиммат",
        // onValueChanging: "Before an answer is changed",
        // standard: "Original structure",
        // singlePage: "All questions on a single page",
        // questionPerPage: "Each question on an individual page",
        // noPreview: "No preview",
        // showAllQuestions: "Show all questions",
        // showAnsweredQuestions: "Show answered questions only",
        // pages: "Completed pages",
        // questions: "Answered questions",
        // requiredQuestions: "Answered required questions",
        // correctQuestions: "Valid answers",
        // buttons: "Completed pages (button UI)",
        // underInput: "Under the input",
        // underTitle: "Under the title",
        // onBlur: "On blur",
        // onTyping: "While typing",
        // underRow: "Under the row",
        // underRowSingle: "Under the row, only one panel is visible",
        showNavigationButtons: {
        // none: "Hidden"
        },
        showProgressBar: {
        // off: "Hidden"
        },
        showTimerPanel: {
        // none: "Hidden"
        },
        showTimerPanelMode: {
        // all: "Both"
        },
        detailPanelMode: {
        // none: "Hidden"
        },
        addRowLocation: {
        // default: "Depends on matrix layout"
        },
        panelsState: {
        // default: "Users cannot expand or collapse panels",
        // collapsed: "All panels are collapsed",
        // expanded: "All panels are expanded"
        },
        widthMode: {
        // auto: "Auto",
        // static: "Static",
        // responsive: "Responsive"
        },
        imageFit: {
        // none: "None",
        // contain: "Contain",
        // cover: "Cover",
        // fill: "Fill"
        },
        contentMode: {
        // auto: "Auto",
        // image: "Image",
        // video: "Video",
        // youtube: "YouTube"
        },
        displayMode: {
        // auto: "Auto",
        // buttons: "Buttons",
        // dropdown: "Dropdown"
        }
    },
    // Operators
    op: {
        empty: "пур накарда",
        notempty: "пур карда",
        equal: "баробар",
        notequal: "нобаробар",
        contains: "дар бар дорад",
        notcontains: "дар бар надорад",
        anyof: "ҳар як аз",
        allof: "ҳама аз",
        greater: "зиёдтар",
        less: "камтар",
        greaterorequal: "калон ё баробар",
        lessorequal: "кам ё баробар",
        // and: "and",
        // or: "or"
    },
    // Embed window
    ew: {
        angular: "Истифода баред версияи Angular",
        jquery: "Истифода баред версияи jQuery",
        knockout: "Истифода баред версияи Knockout",
        react: "Истифода баред версияи React",
        vue: "Истифода баред версияи Vue",
        bootstrap: "Барои китобхонаи bootstrap",
        // modern: "Modern theme",
        // default: "Default theme",
        // orange: "Orange theme",
        // darkblue: "Darkblue theme",
        // darkrose: "Darkrose theme",
        // stone: "Stone theme",
        // winter: "Winter theme",
        // winterstone: "Winter-Stone theme",
        showOnPage: "Нишон додани саволнома дар саҳифа",
        showInWindow: "Нишон додани саволнома дар равзанаи модалӣ",
        loadFromServer: "Бор кардани Json саволнома аз сервер",
        titleScript: "Скриптҳо и услубҳо",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    // Preview (Survey)
    ts: {
        selectPage: "Саҳифаро интихоб кунед, барои санҷидани ин:",
        showInvisibleElements: "Нишон додани элементҳои пинҳон",
        // hideInvisibleElements: "Hide invisible elements"
    },
    validators: {
        answercountvalidator: "Шумораи ҷавобҳо",
        // emailvalidator: "Email",
        expressionvalidator: "Ишора",
        numericvalidator: "Рақам",
        regexvalidator: "Ишораи регулярӣ",
        textvalidator: "Матн"
    },
    triggers: {
        completetrigger: "Анҷом додани саволнома",
        setvaluetrigger: "Гузоштани қиммат",
        copyvaluetrigger: "Нусхабардорӣ кардани қиммат",
        skiptrigger: "Гузариш ба саволи",
        runexpressiontrigger: "Иҷро кардани ишора",
        visibletrigger: "Тағйир кардани намоиш (тавсия дода намешавад)"
    },
    pehelp: {
        // cookieName: "Cookies prevent users from filling out the same survey twice.",
        // format: "Use {0} as a placeholder for the actual value.",
        // totalText: "Visible only when at least one column has Total type or Total expression.",
        // acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.",
        // columnColCount: "Applicable only to Radiogroup and Checkbox cell types.",
        // autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information.",
        // valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property.",
        choicesbyurl: {
        // valueName: " "
        },
        // keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error."
    },
    // Properties
    p: {
        title: {
            name: "Ном",
            title: "Холӣ гузоред, агар номи ӯ ҳамчун 'Ном' бошад"
        },
        // multiSelect: "Allow multiple selection",
        // showLabel: "Show image captions",
        // value: "Value",
        visibleIf: "Нишон додан, агар",
        // attachOriginalItems: "attachOriginalItems",
        // useDisplayValuesInDynamicTexts: "useDisplayValuesInDynamicTexts",
        titleLocation: "Ҷойгиршавии сарлавҳа",
        description: "Шарҳ",
        // descriptionLocation: "descriptionLocation",
        // defaultValueExpression: "defaultValueExpression",
        requiredIf: "Ҳатмист, агар",
        validators: "Валидаторҳо",
        // bindings: "bindings",
        // renderAs: "renderAs",
        currency: "Асъор",
        // cellHint: "cellHint",
        // isUnique: "isUnique",
        // showInMultipleColumns: "showInMultipleColumns",
        // totalMaximumFractionDigits: "totalMaximumFractionDigits",
        // totalMinimumFractionDigits: "totalMinimumFractionDigits",
        columns: "Сутунҳо",
        // detailElements: "detailElements",
        choices: "Интихоб",
        // allowAdaptiveActions: "allowAdaptiveActions",
        defaultRowValue: "Қимматҳои сатри нобаён",
        // detailPanelShowOnAdding: "detailPanelShowOnAdding",
        // logoFit: "logoFit",
        // pages: "pages",
        // questions: "questions",
        triggers: "триггерҳо",
        // calculatedValues: "calculatedValues",
        // surveyId: "surveyId",
        // surveyPostId: "surveyPostId",
        // surveyShowDataSaving: "surveyShowDataSaving",
        // questionDescriptionLocation: "questionDescriptionLocation",
        // progressBarType: "progressBarType",
        // questionTitlePattern: "questionTitlePattern",
        // widthMode: "widthMode",
        // showBrandInfo: "showBrandInfo",
        choicesByUrl: "Интихоб аз интернет",
        // choicesLazyLoadEnabled: "choicesLazyLoadEnabled",
        // choicesLazyLoadPageSize: "choicesLazyLoadPageSize",
        // inputFieldComponent: "inputFieldComponent",
        // itemComponent: "itemComponent",
        // min: "min",
        // max: "max",
        // minValueExpression: "minValueExpression",
        // maxValueExpression: "maxValueExpression",
        // step: "step",
        // dataList: "dataList",
        itemSize: "Андозаи элементҳо",
        // elements: "elements",
        // content: "content",
        navigationButtonsVisibility: "Нишон додани тугмаҳои новбарӣ",
        // navigationTitle: "navigationTitle",
        // navigationDescription: "navigationDescription",
        // closeOnSelect: "closeOnSelect",
        // longTap: "longTap",
        // autoGrow: "autoGrow",
        // acceptCarriageReturn: "acceptCarriageReturn",
        // displayMode: "displayMode",
        label: "Миёнабур",
        // contentMode: "contentMode",
        // imageFit: "imageFit",
        // altText: "altText",
        // height: "height",
        // penColor: "penColor",
        // backgroundColor: "backgroundColor",
        // templateElements: "templateElements",
        // operator: "operator",
        // isVariable: "isVariable",
        // runExpression: "runExpression",
        // showCaption: "showCaption",
        // iconName: "iconName",
        // iconSize: "iconSize"
    }
};
survey_creator_core__WEBPACK_IMPORTED_MODULE_0__["editorLocalization"].locales["tg"] = tgStrings;


/***/ }),

/***/ "survey-creator-core":
/*!********************************************************************************************************************************************!*\
  !*** external {"root":"SurveyCreatorCore","commonjs2":"survey-creator-core","commonjs":"survey-creator-core","amd":"survey-creator-core"} ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_creator_core__;

/***/ })

/******/ });
});
//# sourceMappingURL=tajik.js.map