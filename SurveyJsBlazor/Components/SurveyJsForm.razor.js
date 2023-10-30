/// <reference path="../wwwroot/js/interfaces.d.ts" />
// @ts-check

import "/_content/SurveyJsBlazor/libs/knockout/knockout-latest.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.core.min.js";
import "/_content/SurveyJsBlazor/libs/survey-knockout-ui/survey-knockout-ui.min.js";

/**
 * The list of dotnet component method with attribute "JSInvokable".
 */
const Methods = {
    OnCompleteHandle: "OnCompleteHandle",
};
Object.freeze(Methods);

/**
 * @typedef {Object} IViewModel
 * @property {any} model
 */

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
    // @ts-ignore
    const survey = new Survey.Model(jsonScheme);

    survey.onComplete.add((sender) => {
        onSurveyComplete(dotNetObject, sender);
    });
    /** @type {IViewModel}*/
    const viewModel = { model: survey };

    /** @type {Element | null} */
    const surveyElement = document.querySelector(`survey[id="${hashId}"]`);
    
    // @ts-ignore
    ko.applyBindings(viewModel, surveyElement);
}

/**
 * @typedef {Object} IKoViewModel
 * @property {IViewModel} viewModel
 * @property {Element} element
 */
/**
 * Get survey viewModel.
 * @param {string} hashId
 * @returns {IKoViewModel}
 */
function getViewModel(hashId) {
    const surveyElement = document.querySelector(`survey[id="${hashId}"]`);

    // @ts-ignore
    const viewModel = ko.dataFor(surveyElement);

    /** @type {IKoViewModel} */
    return { viewModel: viewModel, element: surveyElement };
}

/**
 * Dispose SurveyJs Form.
 */
export function dispose({ hashId }) {
    const survey = getViewModel(hashId);

    if (survey.element && survey.viewModel) {
        if (!survey.viewModel.model.isDisposed) {
            survey.viewModel.model.dispose();
        }
        // @ts-ignore
        ko.cleanNode(survey.element);
        survey.element.innerHTML = '';
    }
}

export function clear({ hashId }) {
    const survey = getViewModel(hashId);
    survey.viewModel.model.clear();
}

/**
 * Call Dotnet method when survey on complete
 * @param {IDotNetObject} dotNetObject
 * @param {any} sender
 */
async function onSurveyComplete(dotNetObject, sender) {
    await dotNetObject.invokeMethodAsync(Methods.OnCompleteHandle, sender.data);
}
