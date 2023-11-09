export interface ISurveyQuestionEditorDefinition {
    title?: string;
    properties?: Array<string | IPropertyEditorInfo>;
    tabs?: Array<IPropertyTabInfo>;
}
export interface IPropertyEditorInfo {
    name: string;
    title?: string;
    tab?: string;
    placeholder?: string;
}
export interface IPropertyTabInfo {
    name: string;
    index?: number;
    title?: string;
    visible?: boolean;
}
export declare class SurveyQuestionEditorDefinition {
    static definition: {
        [key: string]: ISurveyQuestionEditorDefinition;
    };
}
