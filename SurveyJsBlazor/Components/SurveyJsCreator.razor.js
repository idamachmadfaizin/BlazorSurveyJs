/// <reference path="../wwwroot/libs/survey-core/survey.core.d.ts" />
import SurveyJsBlazor from "/_content/SurveyJsBlazor/scripts/survey-js-blazor.js";
import "/_content/SurveyJsBlazor/libs/knockout/build/output/knockout-latest.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.core.min.js";
import "/_content/SurveyJsBlazor/libs/survey-knockout-ui/survey-knockout-ui.min.js";
import "/_content/SurveyJsBlazor/libs/survey-creator-core/survey-creator-core.js";
import "/_content/SurveyJsBlazor/libs/survey-creator-knockout/survey-creator-knockout.js";
/**
 * The list of dotnet component method with attribute "JSInvokable".
 */
const Methods = {
    SaveSurveyFuncHandle: "SaveSurveyFuncHandle",
};
Object.freeze(Methods);
SurveyJsBlazor.addQuestionProperty();
export function render({ dotNetObject, hashId, creatorOptions, jsonScheme }) {
    if (!creatorOptions) {
        creatorOptions = {};
    }
    const creator = new SurveyCreator.SurveyCreator(creatorOptions);
    creator.saveSurveyFunc = async (saveNo, callback) => {
        await dotNetObject.invokeMethodAsync(Methods.SaveSurveyFuncHandle, creator.text);
        callback(saveNo, true);
    };
    if (jsonScheme) {
        creator.text = jsonScheme;
    }
    creator.render(hashId.toString());
}
