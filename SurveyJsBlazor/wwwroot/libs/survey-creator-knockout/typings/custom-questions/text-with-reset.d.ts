import { QuestionCommentWithResetModel, QuestionTextWithResetModel, ResetValueAdorner } from "survey-creator-core";
import { QuestionImplementor } from "survey-knockout-ui";
export declare class QuestionTextWithResetImplementor extends QuestionImplementor {
    constructor(question: QuestionTextWithReset);
}
export declare class QuestionTextWithReset extends QuestionTextWithResetModel {
    private _implementor;
    private _adornerImplementor;
    constructor(name: string);
    protected createResetValueAdorner(): ResetValueAdorner;
    protected onBaseCreating(): void;
    dispose(): void;
}
export declare class QuestionCommentWithReset extends QuestionCommentWithResetModel {
    private _implementor;
    private _adornerImplementor;
    constructor(name: string);
    protected createResetValueAdorner(): ResetValueAdorner;
    protected onBaseCreating(): void;
    dispose(): void;
}
