/// <reference path="../wwwroot/libs/survey-core/survey.core.d.ts" />
/// <reference path="../wwwroot/libs/survey-core/themes/index.d.ts" />

import SurveyJsBlazor from "/_content/SurveyJsBlazor/scripts/survey-js-blazor.js";

import "/_content/SurveyJsBlazor/libs/knockout/knockout.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.core.min.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.i18n.min.js";
import "/_content/SurveyJsBlazor/libs/survey-knockout-ui/survey-knockout-ui.min.js";
import "/_content/SurveyJsBlazor/libs/survey-core/themes/index.min.js";

import { DotNetObjectType, IDotNetObject } from "../wwwroot/scripts/declarations/dot-net-object.type";
import { IHashId } from "../wwwroot/scripts/declarations/hash-id.type";
import { ILocale } from "../wwwroot/scripts/declarations/locale.type";
import { IViewModel } from "../wwwroot/scripts/declarations/view-model.type";
import { IKoViewModel } from "../wwwroot/scripts/declarations/ko-view-model.type";
import { ITheme } from "../wwwroot/scripts/declarations/theme.type";

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
type IRenderModel = {
    jsonScheme: string,
} & IHashId & IDotNetObject & ILocale & ITheme;
export function render({ dotNetObject, hashId, jsonScheme, locale, theme }: IRenderModel) {
    const survey = new window.Survey.Model(JSON.parse(jsonScheme));

    survey.onCompleting.add((sender: any) => {
        const totalScore = calculateTotalScore(survey, sender.data);
        const maxScore = calculateMaxScore(sender.getAllQuestions());

        // Save the scores in survey results
        sender.setValue("maxScore", maxScore);
        sender.setValue("totalScore", totalScore);
    });

    survey.locale = locale;

    if (theme) {
        survey.applyTheme(window.SurveyTheme[theme]);
    }

    survey.onComplete.add((sender: any) => onSurveyComplete(dotNetObject, sender));

    const viewModel: IViewModel = { model: survey };

    const surveyElement = document.querySelector(`survey[id="${hashId}"]`);

    window.ko.applyBindings(viewModel, surveyElement);
}

/**
 * Dispose SurveyJs Form.
 * @param param IHashId
 */
export function dispose({ hashId }: IHashId) {
    const survey = getViewModel(hashId);

    if (survey.element && survey.ko) {
        if (!survey.ko.model.isDisposed) {
            survey.ko.model.dispose();
        }

        window.ko.cleanNode(survey.element);
        survey.element.innerHTML = '';
    }
}

/**
 * Clear answer.
 * @param param
 */
export function clear({ hashId }: IHashId) {
    const survey = getViewModel(hashId);
    survey.ko.model.clear();
}

/**
 * Set i18n.
 * @param param
 */
export function setLocale({ hashId, locale }: IHashId & ILocale) {
    const survey = getViewModel(hashId);
    survey.ko.model.locale = locale;
}

export function setTheme({ hashId, theme }: IHashId & ITheme) {
    const survey = getViewModel(hashId);
    var exist = Object.keys(window.SurveyTheme).find(key => key === theme);

    if (!exist) {
        throw new Error("Theme not found");
    }
    survey.ko.model.applyTheme(window.SurveyTheme[theme]);
}

/**
 * Get survey.
 * @param hashId
 * @returns IKoViewModel
 */
function getViewModel(hashId: number): IKoViewModel<IViewModel> {
    const surveyElement = document.querySelector(`survey[id="${hashId}"]`)!;

    const viewModel = window.ko.dataFor(surveyElement);

    return { ko: viewModel, element: surveyElement };
}

/**
 * Call Dotnet method when survey on complete
 * @param dotNetObject
 * @param sender
 */
async function onSurveyComplete(dotNetObject: DotNetObjectType, sender: any) {
    await dotNetObject.invokeMethodAsync(Methods.OnCompleteHandle, sender.data);
}

function calculateMaxScore(questions: any) {
    let maxScore = 0;
    questions.forEach((question: any) => {
        if (!!question.score) {
            maxScore += question.score;
        }
    });
    return maxScore;
}

function calculateTotalScore(survey: any, data: any) {
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