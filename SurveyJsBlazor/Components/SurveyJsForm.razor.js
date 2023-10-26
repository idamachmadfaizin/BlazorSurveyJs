// @ts-check

// @ts-ignore
import "/_content/SurveyJsBlazor/libs/knockout/knockout-latest.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.core.min.js";
import "/_content/SurveyJsBlazor/libs/survey-knockout-ui/survey-knockout-ui.min.js";

/**
 * @typedef {Object} IViewModel
 * @property {any} model
 */

/** @type {Element | null} */
let surveyElement = null;

/** @type {IViewModel}*/
let viewModel = null;

/**
 * Render SurveyJS Form.
 * @param {string} hashId
 * @param {string} jsonScheme
 */
export function render(dotNetObjRef, hashId, jsonScheme) {
    // @ts-ignore
    const survey = new Survey.Model(jsonScheme);

    survey.onComplete.add((sender) => {
        onSurveyComplete(dotNetObjRef, sender);
    });
    viewModel = { model: survey };

    surveyElement = document.querySelector(`survey[id="${hashId}"]`);
    
    // @ts-ignore
    ko.applyBindings(viewModel, surveyElement);
}

/**
 * Dispose SurveyJs Form.
 */
export function dispose() {
    if (surveyElement) {
        viewModel.model.dispose();
        // @ts-ignore
        ko.cleanNode(surveyElement);
        surveyElement.innerHTML = '';
    }
}

/**
 * Call Dotnet method when survey on complete.
 * @param {any} sender
 */
async function onSurveyComplete(dotNetObjRef, sender) {
    await dotNetObjRef.invokeMethodAsync("OnSurveyCompleteHandle", sender.data);
}
