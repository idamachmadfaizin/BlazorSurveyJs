import { JsonObjectProperty, Base, QuestionCompositeModel } from "survey-core";
import { PropertyGridEditor } from ".";
import { ISurveyCreatorOptions } from "../creator-settings";
export declare class PropertyGridEditorBindings extends PropertyGridEditor {
    fit(prop: JsonObjectProperty): boolean;
    getJSON(): any;
    onCreated(obj: Base, question: QuestionCompositeModel, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void;
    private getQuestions;
    private getBindingJSON;
}
