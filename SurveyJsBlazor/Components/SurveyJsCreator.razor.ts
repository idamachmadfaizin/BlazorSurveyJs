/// <reference path="../wwwroot/libs/survey-core/survey.core.d.ts" />

import SurveyJsBlazor, { IKoViewModel } from "/_content/SurveyJsBlazor/scripts/survey-js-blazor.js";

import "/_content/SurveyJsBlazor/libs/knockout/knockout.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.core.min.js";
import "/_content/SurveyJsBlazor/libs/survey-knockout-ui/survey-knockout-ui.min.js";

import "/_content/SurveyJsBlazor/libs/survey-creator-core/survey-creator-core.min.js";
import "/_content/SurveyJsBlazor/libs/survey-creator-knockout/survey-creator-knockout.min.js";
import "/_content/SurveyJsBlazor/libs/survey-creator-core/survey-creator-core.i18n.min.js";

import { IDotNetObject } from "../wwwroot/scripts/dot-net-object.type";
import { IHashId } from "../wwwroot/scripts/hash-id.type";
import { ISetLocale } from "../wwwroot/scripts/set-locale.type";

declare const SurveyCreator: any;

/**
 * The list of dotnet component method with attribute "JSInvokable".
 */
const Methods = {
    SaveSurveyFuncHandle: "SaveSurveyFuncHandle",
};
Object.freeze(Methods);

SurveyJsBlazor.addQuestionProperty();

type IRender = {
    creatorOptions: any;
    jsonScheme: any;
    locale: string;
} & IDotNetObject & IHashId;
export function render({ dotNetObject, hashId, creatorOptions, jsonScheme, locale }: IRender) {
    if (!creatorOptions) {
        creatorOptions = {};
    }

    const creator = new SurveyCreator.SurveyCreator(creatorOptions);

    creator.saveSurveyFunc = async (saveNo: any, callback: any) => {
        await dotNetObject.invokeMethodAsync(Methods.SaveSurveyFuncHandle, creator.text);

        callback(saveNo, true);
    }

    if (jsonScheme) {
        creator.text = jsonScheme;
    }

    if (locale) {
        creator.locale = locale;
    }

    creator.render(hashId.toString());
}

/**
 * Dispose SurveyJs.
 * @param param IHashId
 */
export function dispose({ hashId }: IHashId) {
    const survey = getViewModel(hashId);

    if (survey.element && survey.ko) {
        if (!survey.ko.creator.isDisposed) {
            survey.ko.creator.dispose();
        }

        window.ko.cleanNode(survey.element);
        survey.element.innerHTML = '';
    }
}

/**
 * Set i18n.
 * @param param
 */
export function setLocale({ hashId, locale }: ISetLocale) {
    const survey = getViewModel(hashId);
    survey.ko.creator.locale = locale;
}

function getViewModel(hashId: number): IKoViewModel<{ creator: any }> {
    const surveyElement = document.getElementById(hashId.toString())!;

    const viewModel = window.ko.dataFor(surveyElement);

    return { ko: viewModel, element: surveyElement };
}