/// <reference path="../wwwroot/js/interfaces.d.ts" />
// @ts-check

import "/_content/SurveyJsBlazor/libs/knockout/knockout-latest.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.core.min.js";
import "/_content/SurveyJsBlazor/libs/survey-knockout-ui/survey-knockout-ui.min.js";

const Methods = {
    OnCompleteHandle: "OnCompleteHandle",
};

/**
 * @typedef {Object} IViewModel
 * @property {any} model
 */
/** @type {IViewModel}*/
let viewModel = null;

/**
 * @typedef {Object} IRenderModel
 * @property {IDotNetObject} dotNetObject
 * @property {number} hashId
 * @property {Object?} jsonScheme
 */
/**
 * Render SurveyJS Form.
 * @param {IRenderModel} renderModel
 */
export function render({ dotNetObject, hashId, jsonScheme }) {
    console.log({ dotNetObject, hashId, jsonScheme })
    // @ts-ignore
    const survey = new Survey.Model(jsonScheme);

    survey.onComplete.add((sender) => {
        onSurveyComplete(dotNetObject, sender);
    });
    viewModel = { model: survey };

    /** @type {Element | null} */
    const surveyElement = document.querySelector(`survey[id="${hashId}"]`);
    
    // @ts-ignore
    ko.applyBindings(viewModel, surveyElement);
}

/**
 * Dispose SurveyJs Form.
 */
export function dispose({ hashId }) {
    /** @type {Element | null} */
    const surveyElement = document.querySelector(`survey[id="${hashId}"]`);

    if (surveyElement) {
        viewModel.model.dispose();
        // @ts-ignore
        ko.cleanNode(surveyElement);
        surveyElement.innerHTML = '';
    }
}

/**
 * Call Dotnet method when survey on complete
 * @param {IDotNetObject} dotNetObject
 * @param {any} sender
 */
async function onSurveyComplete(dotNetObject, sender) {
    await dotNetObject.invokeMethodAsync(Methods.OnCompleteHandle, sender);
}
