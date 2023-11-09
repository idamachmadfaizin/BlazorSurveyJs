import { QuestionTagboxModel } from "survey-core";
export declare class QuestionTagbox extends QuestionTagboxModel {
    koAllSelected: any;
    private isAllSelectedUpdating;
    private _implementor;
    constructor(name: string);
    protected onBaseCreating(): void;
    onSurveyValueChanged(newValue: any): void;
    protected onVisibleChoicesChanged(): void;
    protected updateAllSelected(): void;
    dispose(): void;
}
