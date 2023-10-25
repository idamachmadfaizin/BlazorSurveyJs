// @ts-check

import "/libs/knockout/knockout-latest.js";
import "/libs/survey-core/survey.core.min.js";
import "/libs/survey-knockout-ui/survey-knockout-ui.min.js";

/**
 * @typedef {Object} IViewModel
 * @property {any} model
 */

/** @type {string}*/
let ASSEMBLY_NAME;

/** @type {Element | null} */
let surveyElement = null;

/** @type {IViewModel}*/
let viewModel = null;

/**
 * Set assembly name.
 * @param {string} name
 */
export function setAssemblyName(name) {
    ASSEMBLY_NAME = name;
    console.log({ ASSEMBLY_NAME });
}

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
function onSurveyComplete(sender) {
    console.log('onSurveyComplete', sender);
    DotNet.invokeMethodAsync(ASSEMBLY_NAME, "OnSurveyComplete", sender.data);
}
