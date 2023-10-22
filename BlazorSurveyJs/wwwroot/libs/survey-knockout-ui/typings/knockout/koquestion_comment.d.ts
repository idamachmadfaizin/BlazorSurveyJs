import { QuestionCommentModel } from "survey-core";
export declare class QuestionComment extends QuestionCommentModel {
    private _implementor;
    constructor(name: string);
    protected onBaseCreating(): void;
    dispose(): void;
}
