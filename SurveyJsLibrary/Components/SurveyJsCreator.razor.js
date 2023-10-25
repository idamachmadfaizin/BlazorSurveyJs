// @ts-check

import "/_content/SurveyJsLibrary/libs/knockout/knockout-latest.js";
import "/_content/SurveyJsLibrary/libs/survey-core/survey.core.min.js";
import "/_content/SurveyJsLibrary/libs/survey-knockout-ui/survey-knockout-ui.min.js";

import "/_content/SurveyJsLibrary/libs/survey-creator-core/survey-creator-core.js";
import "/_content/SurveyJsLibrary/libs/survey-creator-knockout/survey-creator-knockout.js";

/** @type {string}*/
let ASSEMBLY_NAME;

/**
 * Set assembly name.
 * @param {string} name
 */
export function setAssemblyName(name) {
    ASSEMBLY_NAME = name;
    console.log({ ASSEMBLY_NAME });
}

/**
 * Render SurveyJs Creator.
 * @param {string} hashId
 * @param {string} jsonScheme
 */
export function render(hashId, jsonScheme) {
    console.log('render called');

    const creatorOptions = {
        showLogicTab: true,
        isAutoSave: true
    };

    const creator = new SurveyCreator.SurveyCreator(creatorOptions);

    creator.saveSurveyFunc = async (saveNo, callback) => {
        console.log('creator.saveSurveyFunc');

        await DotNet.invokeMethodAsync(ASSEMBLY_NAME, "OnSurveySaveHandle", creator.text);

        callback(saveNo, true);
    }
    
    if (jsonScheme) {
        creator.text = jsonScheme;
    }

    creator.render(hashId.toString());
}
