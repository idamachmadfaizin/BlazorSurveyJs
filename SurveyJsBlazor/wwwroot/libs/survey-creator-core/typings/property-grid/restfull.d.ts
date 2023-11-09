import { Base, JsonObjectProperty, Question } from "survey-core";
import { PropertyGridEditorQuestion } from "./index";
import { ISurveyCreatorOptions } from "../creator-settings";
export declare class PropertyGridEditorQuestionRestfull extends PropertyGridEditorQuestion {
    fit(prop: JsonObjectProperty): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
    onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void;
}
