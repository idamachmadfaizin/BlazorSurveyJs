import { QuestionExpressionModel } from "survey-core";
export declare class QuestionExpression extends QuestionExpressionModel {
    private _implementor;
    constructor(name: string);
    protected onBaseCreating(): void;
    dispose(): void;
}
