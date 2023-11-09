import { Base, JsonObjectProperty, Question } from "survey-core";
import { IPropertyEditorSetup, PropertyGridEditor } from "./index";
import { ISurveyCreatorOptions } from "../creator-settings";
export declare abstract class PropertyGridValueEditorBase extends PropertyGridEditor {
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
    onCreated: (obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions) => void;
    clearPropertyValue(obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): void;
    protected isValueEmpty(val: any): boolean;
    isSupportGrouping(): boolean;
}
export declare class PropertyGridCellsEditor extends PropertyGridValueEditorBase {
    fit(prop: JsonObjectProperty): boolean;
    createPropertyEditorSetup(obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): IPropertyEditorSetup;
    clearPropertyValue(obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): void;
    protected isValueEmpty(val: any): boolean;
}
export declare class PropertyGridValueEditor extends PropertyGridValueEditorBase {
    fit(prop: JsonObjectProperty): boolean;
    createPropertyEditorSetup(obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): IPropertyEditorSetup;
}
export declare class PropertyGridRowValueEditor extends PropertyGridValueEditorBase {
    fit(prop: JsonObjectProperty): boolean;
    createPropertyEditorSetup(obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): IPropertyEditorSetup;
}
export declare class PropertyGridPanelValueEditor extends PropertyGridValueEditorBase {
    fit(prop: JsonObjectProperty): boolean;
    createPropertyEditorSetup(obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): IPropertyEditorSetup;
}
export declare class PropertyGridTriggerValueEditor extends PropertyGridValueEditorBase {
    fit(prop: JsonObjectProperty): boolean;
    createPropertyEditorSetup(obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): IPropertyEditorSetup;
    protected getSetToNameQuestion(obj: Base): Question;
}
export declare class PropertyGridTriggerValueInLogicEditor extends PropertyGridTriggerValueEditor {
    fit(prop: JsonObjectProperty, context?: string): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
}
