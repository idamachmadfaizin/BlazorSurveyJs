/// <reference path="../wwwroot/scripts/interfaces.d.ts" />
// @ts-check

// @ts-ignore
import SurveyJsBlazor from "/_content/SurveyJsBlazor/scripts/survey-js-blazor.js";

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

// @ts-ignore
SurveyJsBlazor.addQuestionProperty();

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

    survey.onCompleting.add((sender) => {
        const totalScore = calculateTotalScore(survey, sender.data);
        const maxScore = calculateMaxScore(sender.getAllQuestions());

        // Save the scores in survey results
        sender.setValue("maxScore", maxScore);
        sender.setValue("totalScore", totalScore);
    });

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

function calculateMaxScore(questions) {
    var maxScore = 0;
    questions.forEach((question) => {
        if (!!question.score) {
            maxScore += question.score;
        }
    });
    return maxScore;
}
function calculateTotalScore(survey, data) {
    var totalScore = 0;
    Object.keys(data).forEach((qName) => {
        const question = survey.getQuestionByValueName(qName);
        if (question.isAnswerCorrect()) {
            if (!!question.score) {
                totalScore += question.score;
            }
        }
    });
    return totalScore;
}