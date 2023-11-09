import { QuestionEmbeddedSurveyModel } from "survey-creator-core";
export declare class QuestionEmbeddedSurvey extends QuestionEmbeddedSurveyModel {
    private _implementor;
    constructor(name: string);
    get currentPageId(): string;
    protected onBaseCreating(): void;
    dispose(): void;
}
