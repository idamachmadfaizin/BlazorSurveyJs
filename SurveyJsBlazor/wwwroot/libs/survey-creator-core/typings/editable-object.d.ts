import { Base, SurveyModel } from "survey-core";
export declare class EditableObject {
    static isCopyObject(obj: any): boolean;
    static getSurvey(object: any): SurveyModel;
    static getOriginalObject(object: any): any;
    static getOriginalSurvey(survey: SurveyModel): SurveyModel;
    private objValue;
    private editableObjValue;
    constructor(obj: Base);
    get obj(): Base;
    get editableObj(): Base;
    isPropertyChanged(propertyName: string): boolean;
    apply(propertyName: string): void;
    reset(): void;
    applyAll(excludedProps?: Array<string>): void;
    private getProperties;
    protected createEditableObj(): Base;
    private assignProperties;
    private getObjJson;
}
