import * as ko from "knockout";
import { ToolboxToolViewModel } from "survey-creator-core";
import { SurveyCreator } from "../creator";
import { IQuestionToolboxItem } from "survey-creator-core";
export declare class KnockoutToolboxToolViewModel extends ToolboxToolViewModel {
    protected item: IQuestionToolboxItem;
    protected creator: SurveyCreator;
    isCompact: boolean;
    title: ko.Observable<string>;
    iconName: ko.Observable<string>;
    constructor(item: IQuestionToolboxItem, creator: SurveyCreator, isCompact?: boolean);
}
