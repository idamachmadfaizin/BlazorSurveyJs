import { Question } from "survey-core";
export declare const DefaultFonts: string[];
export declare function updateFontSettingsJSON(): void;
export declare function fontsettingsToCssVariable(question: Question, themeCssVariables: {
    [index: string]: string;
}): void;
export declare function fontsettingsFromCssVariable(question: Question, themeCssVariables: {
    [index: string]: string;
}, defaultColorVariable?: string, defaultPlaceholderColorVariable?: string): void;
