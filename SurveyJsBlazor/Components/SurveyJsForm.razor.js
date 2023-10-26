// @ts-check

import ASSEMBLY_NAME from "/_content/SurveyJsBlazor/js/assembly-name.js";
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
export function render(hashId, jsonScheme) {
    console.log('render called', { hashId, jsonScheme });

    const survey = new Survey.Model(jsonScheme);

    survey.onComplete.add(onSurveyComplete);
    viewModel = { model: survey };
    console.log({ viewModel });

    surveyElement = document.querySelector(`survey[id="${hashId}"]`);
    ko.applyBindings(viewModel, surveyElement);
}

/**
 * Dispose SurveyJs Form.
 */
export function dispose() {
    if (surveyElement) {
        viewModel.model.dispose();
        ko.cleanNode(surveyElement);
        surveyElement.innerHTML = '';
    }
}

/**
 * Call Dotnet method when survey on complete.
 * @param {any} sender
 */
async function onSurveyComplete(sender) {
    console.log('onSurveyComplete', sender);
    await DotNet.invokeMethodAsync(ASSEMBLY_NAME, "OnSurveyCompleteHandle", sender.data);
}
