/// <reference path="../wwwroot/js/site.ts" />

declare const $: any;
declare const SurveyCreator: any;

const scripts = [
    "libs/jquery/jquery.min.js",
    "libs/knockout/knockout-latest.js",
    "libs/survey-core/survey.core.min.js",
    "libs/survey-knockout-ui/survey-knockout-ui.min.js",
    "libs/survey-creator-core/survey-creator-core.min.js",
    "libs/survey-creator-knockout/survey-creator-knockout.min.js"
];

//BlazorSurveyJs.injectScripts(scripts);

export async function initAsync() {
    console.log('init called');

    const creatorOptions = {
        showLogicTab: true,
        isAutoSave: true
    };

    const creator = new SurveyCreator.SurveyCreator(creatorOptions);

    creator.render("surveyCreator");
}