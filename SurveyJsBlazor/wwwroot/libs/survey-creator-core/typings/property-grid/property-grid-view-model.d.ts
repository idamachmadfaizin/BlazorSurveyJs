import { Base, SurveyModel, Action } from "survey-core";
import { PropertyGridModel } from "./index";
import { CreatorBase } from "../creator-base";
export declare class PropertyGridViewModel extends Base {
    private propertyGridModel;
    private creator;
    nextSelectionAction: Action;
    prevSelectionAction: Action;
    objectSelectionAction: Action;
    private selectorPopupModel;
    hasPrev: boolean;
    hasNext: boolean;
    survey: SurveyModel;
    selectedElementName: string;
    constructor(propertyGridModel: PropertyGridModel, creator: CreatorBase);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    private get selectionController();
    private onSurveyChanged;
    private updateTitle;
    private getTitle;
    private getSelectedObj;
    private initActions;
}
