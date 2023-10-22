import { QuestionEmptyModel } from "survey-core";
export declare class QuestionEmpty extends QuestionEmptyModel {
    private _implementor;
    constructor(name: string);
    protected onBaseCreating(): void;
    dispose(): void;
}
