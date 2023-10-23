/// <reference path="../wwwroot/js/site.ts" />

declare const Survey: any;

//const scripts = [
//    "libs/jquery/jquery.min.js",

//];

//BlazorSurveyJs.injectScripts(scripts);

export async function initAsync() {
    console.log('init called');

    const surveyJson = localStorage.getItem(BlazorSurveyJs.surveyStorageKey) || {};

    //await BlazorSurveyJs.checkJqueryAsync();
    
    const survey = new Survey.Model(surveyJson);
    const viewModel = { model: survey };

    const surveyElement = document.querySelector('survey');
    if (!isSurveyBound(surveyElement)) {
        console.log('binding');
        ko.applyBindings(viewModel, surveyElement);
    }
}

export function dispose() {
    const surveyElement = document.querySelector('survey');
    ko.cleanNode(surveyElement);
    surveyElement!.innerHTML = '';
}

function isSurveyBound(element) {
    return !!element.koSurvey;
}