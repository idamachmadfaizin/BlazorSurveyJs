import { Question, Base } from "survey-core";
import { PropertyEditorSetupValue } from "./index";
import { ISurveyCreatorOptions } from "../creator-settings";
export declare class DefaultValueEditor extends PropertyEditorSetupValue {
    editQuestion: Question;
    protected propertyName: string;
    constructor(editQuestion: Question, propertyName: string, options?: ISurveyCreatorOptions);
    get question(): Question;
    protected getSurveyJSON(): any;
    protected getQuestionJSON(): any;
    protected getQuestionValue(): any;
    protected getEditValue(): any;
    protected getSurveyCreationReason(): string;
    apply(): boolean;
}
export declare class DefaultArrayValueEditor extends DefaultValueEditor {
    editQuestion: Question;
    protected propertyName: string;
    constructor(editQuestion: Question, propertyName: string, options?: ISurveyCreatorOptions);
    protected getQuestionValue(): any;
    protected getEditValue(): any;
}
export declare class DefaultMatrixRowValueEditor extends DefaultArrayValueEditor {
    editQuestion: Question;
    protected propertyName: string;
    constructor(editQuestion: Question, propertyName: string, options?: ISurveyCreatorOptions);
    protected getQuestionJSON(): any;
}
export declare class DefaultPanelDynamicPanelValueEditor extends DefaultArrayValueEditor {
    editQuestion: Question;
    protected propertyName: string;
    constructor(editQuestion: Question, propertyName: string, options?: ISurveyCreatorOptions);
    protected getQuestionJSON(): any;
}
export declare class TriggerValueEditor extends DefaultValueEditor {
    editQuestion: Question;
    editObj: Base;
    protected propertyName: string;
    constructor(editQuestion: Question, editObj: Base, propertyName: string, options?: ISurveyCreatorOptions);
    protected getQuestionValue(): any;
    apply(): boolean;
}
