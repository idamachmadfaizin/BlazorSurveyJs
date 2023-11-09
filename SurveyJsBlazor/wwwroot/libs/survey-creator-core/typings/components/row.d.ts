import { Base, SurveyTemplateRendererTemplateData, QuestionRowModel } from "survey-core";
import { CreatorBase } from "../creator-base";
export declare class RowViewModel extends Base {
    creator: CreatorBase;
    row: QuestionRowModel;
    templateData: SurveyTemplateRendererTemplateData;
    constructor(creator: CreatorBase, row: QuestionRowModel, templateData: SurveyTemplateRendererTemplateData);
    get cssClasses(): string;
}
