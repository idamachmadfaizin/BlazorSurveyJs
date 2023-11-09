import * as ko from "knockout";
import { SurveyCreator } from "../creator";
import { Base } from "survey-core";
import { QuestionToolbox } from "survey-creator-core";
export declare class ToolboxViewModel extends Base {
    private _categoriesSubscription;
    categories: ko.ObservableArray<any>;
    creator: SurveyCreator;
    constructor(creator: SurveyCreator);
    get toolbox(): QuestionToolbox;
    dispose(): void;
}
