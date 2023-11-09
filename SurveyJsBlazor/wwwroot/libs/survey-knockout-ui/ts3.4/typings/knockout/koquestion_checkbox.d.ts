import { QuestionCheckboxBaseImplementor } from "./koquestion_baseselect";
import { QuestionCheckboxModel } from "survey-core";
import { Question } from "survey-core";
export declare class QuestionCheckboxImplementor extends QuestionCheckboxBaseImplementor {
    constructor(question: Question);
    protected getKoValue(): any;
    protected setKoValue(val: any): void;
}
export declare class QuestionCheckbox extends QuestionCheckboxModel {
    koAllSelected: any;
    private isAllSelectedUpdating;
    private _implementor;
    private _selectAllItemImpl;
    private _otherItemImpl;
    constructor(name: string);
    protected onBaseCreating(): void;
    onSurveyValueChanged(newValue: any): void;
    protected onVisibleChoicesChanged(): void;
    protected updateAllSelected(): void;
    dispose(): void;
}
