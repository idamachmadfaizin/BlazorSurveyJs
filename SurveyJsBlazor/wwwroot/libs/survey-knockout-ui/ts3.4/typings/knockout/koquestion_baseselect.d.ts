import { QuestionImplementor } from "./koquestion";
import { Question } from "survey-core";
export declare class QuestionSelectBaseImplementor extends QuestionImplementor {
    protected onCreated(): void;
    constructor(question: Question);
    protected readonly isOtherSelected: boolean;
}
export declare class QuestionCheckboxBaseImplementor extends QuestionSelectBaseImplementor {
    constructor(question: Question);
    private koAfterRender;
}
