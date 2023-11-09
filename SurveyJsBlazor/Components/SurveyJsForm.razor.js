/// <reference path="../wwwroot/libs/survey-core/survey.core.d.ts" />
import SurveyJsBlazor from "/_content/SurveyJsBlazor/scripts/survey-js-blazor.js";
import "/_content/SurveyJsBlazor/libs/knockout/build/output/knockout-latest.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.core.min.js";
import "/_content/SurveyJsBlazor/libs/survey-knockout-ui/survey-knockout-ui.min.js";
/**
 * The list of dotnet component method with attribute "JSInvokable".
 */
const Methods = {
    OnCompleteHandle: "OnCompleteHandle",
};
Object.freeze(Methods);
SurveyJsBlazor.addQuestionProperty();
/**
 * Render SurveyJS Form.
 * @param param
 */
export function render({ dotNetObject, hashId, jsonScheme }) {
    const survey = new window.Survey.Model(jsonScheme);
    survey.onCompleting.add((sender) => {
        const totalScore = calculateTotalScore(survey, sender.data);
        const maxScore = calculateMaxScore(sender.getAllQuestions());
        // Save the scores in survey results
        sender.setValue("maxScore", maxScore);
        sender.setValue("totalScore", totalScore);
    });
    survey.onComplete.add((sender) => onSurveyComplete(dotNetObject, sender));
    const viewModel = { model: survey };
    const surveyElement = document.querySelector(`survey[id="${hashId}"]`);
    window.ko.applyBindings(viewModel, surveyElement);
}
/**
 * Get survey
 * @param hashId
 * @returns IKoViewModel
 */
function getViewModel(hashId) {
    const surveyElement = document.querySelector(`survey[id="${hashId}"]`);
    const viewModel = window.ko.dataFor(surveyElement);
    return { viewModel: viewModel, element: surveyElement };
}
/**
 * Dispose SurveyJs Form.
 * @param param IHashId
 */
export function dispose({ hashId }) {
    const survey = getViewModel(hashId);
    if (survey.element && survey.viewModel) {
        if (!survey.viewModel.model.isDisposed) {
            survey.viewModel.model.dispose();
        }
        window.ko.cleanNode(survey.element);
        survey.element.innerHTML = '';
    }
}
/**
 * Clear answer.
 * @param param
 */
export function clear({ hashId }) {
    const survey = getViewModel(hashId);
    survey.viewModel.model.clear();
}
/**
 * Call Dotnet method when survey on complete
 * @param dotNetObject
 * @param sender
 */
async function onSurveyComplete(dotNetObject, sender) {
    await dotNetObject.invokeMethodAsync(Methods.OnCompleteHandle, sender.data);
}
function calculateMaxScore(questions) {
    let maxScore = 0;
    questions.forEach((question) => {
        if (!!question.score) {
            maxScore += question.score;
        }
    });
    return maxScore;
}
function calculateTotalScore(survey, data) {
    let totalScore = 0;
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
