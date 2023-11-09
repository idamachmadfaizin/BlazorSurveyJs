import { SurveyModel, QuestionNonValue } from "survey-core";
export declare class QuestionEmbeddedSurveyModel extends QuestionNonValue {
    embeddedSurveyValue: SurveyModel;
    onEmbeddedSurveyValueChanged: () => void;
    set embeddedSurvey(val: SurveyModel);
    get embeddedSurvey(): SurveyModel;
    constructor(name: string);
    getType(): string;
}
