import { QuestionTextModel } from "survey-core";
import { QuestionImplementor } from "./koquestion";
export declare class QuestionTextImplementor extends QuestionImplementor {
    constructor(question: QuestionTextModel);
}
export declare class QuestionText extends QuestionTextModel {
    private _implementor;
    constructor(name: string);
    protected onBaseCreating(): void;
    dispose(): void;
}
