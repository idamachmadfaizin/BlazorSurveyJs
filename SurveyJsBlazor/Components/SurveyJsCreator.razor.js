/// <reference path="../wwwroot/scripts/interfaces.d.ts" />
/// <reference path="../wwwroot/scripts/survey-js-blazor.d.ts" />
// @ts-check

// @ts-ignore
import SurveyJsBlazor from "/_content/SurveyJsBlazor/scripts/survey-js-blazor.js";

import "/_content/SurveyJsBlazor/libs/knockout/knockout-latest.js";
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

/**
 * @typedef {Object} IRenderModel
 * @property {IDotNetObject} dotNetObject
 * @property {number} hashId
 * @property {Object} creatorOptions
 * @property {Object?} jsonScheme
 */
/**
 * Render SurveyJs Creator.
 * @param {IRenderModel} renderModel
 */
export function render({ dotNetObject, hashId, creatorOptions, jsonScheme }) {
    if (!creatorOptions) {
        creatorOptions = {};
    }

    // @ts-ignore
    const creator = new SurveyCreator.SurveyCreator(creatorOptions);

    creator.saveSurveyFunc = async (saveNo, callback) => {
        await dotNetObject.invokeMethodAsync(Methods.SaveSurveyFuncHandle, creator.text);

        callback(saveNo, true);
    }
    
    if (jsonScheme) {
        creator.text = jsonScheme;
    }

    creator.render(hashId.toString());
}