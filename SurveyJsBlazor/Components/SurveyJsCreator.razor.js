// @ts-check

// @ts-ignore
import ASSEMBLY_NAME from "/_content/SurveyJsBlazor/js/assembly-name.js";
import "/_content/SurveyJsBlazor/libs/knockout/knockout-latest.js";
import "/_content/SurveyJsBlazor/libs/survey-core/survey.core.min.js";
import "/_content/SurveyJsBlazor/libs/survey-knockout-ui/survey-knockout-ui.min.js";

import "/_content/SurveyJsBlazor/libs/survey-creator-core/survey-creator-core.js";
import "/_content/SurveyJsBlazor/libs/survey-creator-knockout/survey-creator-knockout.js";

/**
 * Render SurveyJs Creator.
 * @param {string} hashId
 * @param {string} jsonScheme
 */
export function render(hashId, jsonScheme) {
    const creatorOptions = {
        showLogicTab: true,
        isAutoSave: true
    };

    // @ts-ignore
    const creator = new SurveyCreator.SurveyCreator(creatorOptions);

    creator.saveSurveyFunc = async (saveNo, callback) => {
        // @ts-ignore
        await DotNet.invokeMethodAsync(ASSEMBLY_NAME, "OnSurveySaveHandle", creator.text);

        callback(saveNo, true);
    }
    
    if (jsonScheme) {
        creator.text = jsonScheme;
    }

    creator.render(hashId.toString());
}
