/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../wwwroot/libs/survey-jquery/survey.jquery.d.ts" />
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
