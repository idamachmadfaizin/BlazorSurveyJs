import { QuestionColorModel } from "survey-creator-core";
import { QuestionImplementor } from "survey-knockout-ui";
export declare class QuestionColorImplementor extends QuestionImplementor {
    constructor(question: QuestionColor);
}
export declare class QuestionColor extends QuestionColorModel {
    private _implementor;
    constructor(name: string);
    protected onBaseCreating(): void;
    dispose(): void;
}
