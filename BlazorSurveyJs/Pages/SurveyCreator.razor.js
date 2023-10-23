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
    "libs/knockout/knockout-latest.js",
    "libs/survey-core/survey.core.min.js",
    "libs/survey-knockout-ui/survey-knockout-ui.min.js",
    "libs/survey-creator-core/survey-creator-core.min.js",
    "libs/survey-creator-knockout/survey-creator-knockout.min.js"
];
//BlazorSurveyJs.injectScripts(scripts);
export function initAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('init called');
        const creatorOptions = {
            showLogicTab: true,
            isAutoSave: true
        };
        const creator = new SurveyCreator.SurveyCreator(creatorOptions);
        creator.render("surveyCreator");
    });
}
