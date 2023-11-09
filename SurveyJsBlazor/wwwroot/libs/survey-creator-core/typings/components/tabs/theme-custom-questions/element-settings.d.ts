import { Question } from "survey-core";
export declare function updateElementSettingsJSON(): void;
export declare function elementSettingsToCssVariable(question: Question, themeCssVariables: {
    [index: string]: string;
}): void;
export declare function elementSettingsFromCssVariable(question: Question, themeCssVariables: {
    [index: string]: string;
}, defaultBackcolorVariable: string, defaultHovercolorVariable: string): void;
