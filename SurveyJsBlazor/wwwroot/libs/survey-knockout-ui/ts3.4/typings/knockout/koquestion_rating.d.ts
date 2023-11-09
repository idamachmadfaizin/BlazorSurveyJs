import { QuestionImplementor } from "./koquestion";
import { QuestionRatingModel, Question } from "survey-core";
export declare class QuestionRatingImplementor extends QuestionImplementor {
    protected onCreated(): void;
    constructor(question: Question);
}
export declare class QuestionRating extends QuestionRatingModel {
    private _implementor;
    constructor(name: string);
    protected onBaseCreating(): void;
    dispose(): void;
}
