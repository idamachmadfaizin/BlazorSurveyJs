/// <reference path="../wwwroot/libs/jquery/jquery.d.ts" />
/// <reference path="../wwwroot/libs/survey-jquery/survey.jquery.d.ts" />

declare const Survey: any;
declare const $: any;

export function init() {
    const surveyJson = {
        elements: [{
            name: "FirstName",
            title: "Enter your first name:",
            type: "text"
        }, {
            name: "LastName",
            title: "Enter your last name:",
            type: "text"
        }]
    };

    const survey = new Survey.Model(surveyJson);
    $(function () {
        $("#surveyContainer").Survey({ model: survey });
    });
}