/// <reference path="../wwwroot/js/site.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const scripts = [
    "libs/jquery/jquery.min.js",
];
//BlazorSurveyJs.injectScripts(scripts);
export function initAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('init called');
        const surveyJson = localStorage.getItem(BlazorSurveyJs.surveyStorageKey) || {};
        yield BlazorSurveyJs.checkJqueryAsync();
        const survey = new Survey.Model(surveyJson);
        const viewModel = { model: survey };
        const surveyElement = document.querySelector('survey');
        if (!isSurveyBound(surveyElement)) {
            console.log('binding');
            ko.applyBindings(viewModel, surveyElement);
        }
    });
}
export function dispose() {
    const surveyElement = document.querySelector('survey');
    ko.cleanNode(surveyElement);
    surveyElement.innerHTML = '';
}
function isSurveyBound(element) {
    return !!element.koSurvey;
}
