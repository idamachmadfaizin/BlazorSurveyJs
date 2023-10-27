/// <reference path="../wwwroot/js/interfaces.d.ts" />
// @ts-check

import "/_content/SurveyJsBlazor/libs/knockout/knockout-latest.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.core.min.js";
import "/_content/SurveyJsBlazor/libs/survey-knockout-ui/survey-knockout-ui.min.js";

import "/_content/SurveyJsBlazor/libs/survey-creator-core/survey-creator-core.js";
import "/_content/SurveyJsBlazor/libs/survey-creator-knockout/survey-creator-knockout.js";

const Methods = {
    SaveSurveyFuncHandle: "SaveSurveyFuncHandle",
};

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
    console.log({ creatorOptions })
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