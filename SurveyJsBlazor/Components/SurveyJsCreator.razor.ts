/// <reference path="../wwwroot/libs/survey-core/survey.core.d.ts" />

import SurveyJsBlazor from "/_content/SurveyJsBlazor/scripts/survey-js-blazor.js";

import "/_content/SurveyJsBlazor/libs/knockout/build/output/knockout-latest.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.core.min.js";
import "/_content/SurveyJsBlazor/libs/survey-knockout-ui/survey-knockout-ui.min.js";

import "/_content/SurveyJsBlazor/libs/survey-creator-core/survey-creator-core.js";
import "/_content/SurveyJsBlazor/libs/survey-creator-knockout/survey-creator-knockout.js";

import { IDotNetObject } from "../wwwroot/scripts/dot-net-object.type";
import { IHashId } from "../wwwroot/scripts/hash-id";

declare const SurveyCreator: any;

type IRender = {
    creatorOptions: any;
    jsonScheme: any;
} & IDotNetObject & IHashId;

/**
 * The list of dotnet component method with attribute "JSInvokable".
 */
const Methods = {
    SaveSurveyFuncHandle: "SaveSurveyFuncHandle",
};
Object.freeze(Methods);

SurveyJsBlazor.addQuestionProperty();

export function render({ dotNetObject, hashId, creatorOptions, jsonScheme }: IRender) {
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

    creator.render(hashId.toString());
}