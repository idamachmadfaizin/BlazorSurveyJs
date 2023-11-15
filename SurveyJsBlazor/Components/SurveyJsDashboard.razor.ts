/// <reference path="../wwwroot/libs/survey-core/survey.core.d.ts" />
///// <reference path="../wwwroot/libs/survey-analytics/survey.analytics.d.ts" />

import "/_content/SurveyJsBlazor/libs/knockout/knockout.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.core.min.js";

import "/_content/SurveyJsBlazor/libs/plotly.js-dist-min/plotly.min.js";
import "/_content/SurveyJsBlazor/libs/survey-analytics/survey.analytics.min.js";

import { IDotNetObject } from "../wwwroot/scripts/declarations/dot-net-object.type";
import { IHashId } from "../wwwroot/scripts/declarations/hash-id.type";
//import { IVisualizationPanelOptions } from "../wwwroot/libs/survey-analytics/survey.analytics";

declare const SurveyAnalytics;

const surveyResults = [{
    "satisfaction-score": 5,
    "nps-score": 10
}, {
    "satisfaction-score": 5,
    "nps-score": 9
}, {
    "satisfaction-score": 3,
    "nps-score": 6
}, {
    "satisfaction-score": 3,
    "nps-score": 6
}, {
    "satisfaction-score": 2,
    "nps-score": 3
    }];

type IRenderModel = {
    jsonScheme: string,
    visualizationPanelOptions?: any,
    data: string
} & IHashId & IDotNetObject;
export function render({ dotNetObject, hashId, jsonScheme, visualizationPanelOptions, data }: IRenderModel) {
    console.log({ jsonScheme, data })
    if (!visualizationPanelOptions) {
        visualizationPanelOptions = {
            allowHideQuestions: false
        }
    }

    const survey = new window.Survey.Model(JSON.parse(jsonScheme));

    const vizPanel = new SurveyAnalytics.VisualizationPanel(
        survey.getAllQuestions(),
        JSON.parse(data),
        visualizationPanelOptions
    );

    vizPanel.render(hashId.toString());
}