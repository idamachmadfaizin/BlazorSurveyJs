import { SurveyModel, PopupSurveyModel } from "survey-core";
import { ImplementorBase } from "./kobase";
export declare class PopupSurveyImplementor extends ImplementorBase {
    window: PopupSurveyModel;
    constructor(window: PopupSurveyModel);
    private doShowingChanged;
    private readonly template: any;
}
export declare class PopupSurvey extends PopupSurveyModel {
    constructor(jsonObj: any, initialModel?: SurveyModel);
}
export declare class SurveyWindow extends PopupSurvey {
}
