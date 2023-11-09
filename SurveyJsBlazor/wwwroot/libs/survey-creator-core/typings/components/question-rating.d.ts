import { SurveyElement, SurveyTemplateRendererTemplateData, QuestionRatingModel, Base } from "survey-core";
import { CreatorBase } from "../creator-base";
export declare class QuestionRatingAdornerViewModel extends Base {
    creator: CreatorBase;
    surveyElement: SurveyElement;
    templateData: SurveyTemplateRendererTemplateData;
    constructor(creator: CreatorBase, surveyElement: SurveyElement, templateData: SurveyTemplateRendererTemplateData);
    get element(): QuestionRatingModel;
    static useRateValues(element: any): boolean;
    addItem(model: QuestionRatingAdornerViewModel): void;
    removeItem(model: QuestionRatingAdornerViewModel): void;
    static allowAddForElement(element: QuestionRatingModel, maximumRateValues: number): boolean;
    get allowAdd(): boolean;
    get enableAdd(): boolean;
    get addClassNames(): string;
    static allowRemoveForElement(element: QuestionRatingModel): boolean;
    private canAddOrRemove;
    get allowRemove(): boolean;
    get enableRemove(): boolean;
    get removeClassNames(): string;
    get addTooltip(): string;
    get removeTooltip(): string;
}
