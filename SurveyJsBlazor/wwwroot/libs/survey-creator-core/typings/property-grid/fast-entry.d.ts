import { ItemValue, QuestionCommentModel } from "survey-core";
import { PropertyEditorSetupValue } from "./index";
import { ISurveyCreatorOptions } from "../creator-settings";
export declare class FastEntryEditorBase extends PropertyEditorSetupValue {
    choices: Array<any>;
    protected className: string;
    protected names: Array<string>;
    protected commentValue: QuestionCommentModel;
    protected static calcBeforeApplyItemsArray(dest: Array<any>, src: Array<any>, names: Array<string>): void;
    static applyItemsArray(dest: Array<any>, src: Array<any>, names?: Array<string>): void;
    constructor(choices: Array<any>, options?: ISurveyCreatorOptions, className?: string, names?: Array<string>);
    protected getSurveyJSON(): any;
    protected getSurveyCreationReason(): string;
    apply(): boolean;
    protected convertTextToItemValues(text: string): ItemValue[];
    get comment(): QuestionCommentModel;
    protected getChoicesCount(): number;
    protected get isValueUnique(): boolean;
    protected getFirstUniqueValue(): boolean;
    setComment(): void;
    protected collectNames(item: any, type: string, separatorCounter: number): string;
    protected convertItemValuesToText(): string;
}
export declare class FastEntryEditor extends FastEntryEditorBase {
    choices: Array<ItemValue>;
    protected className: string;
    protected names: Array<string>;
    static applyItemValueArray(dest: Array<ItemValue>, src: Array<ItemValue>, names?: Array<string>): void;
    constructor(choices: Array<ItemValue>, options?: ISurveyCreatorOptions, className?: string, names?: Array<string>);
    apply(): boolean;
    protected convertItemValuesToText(): string;
}
