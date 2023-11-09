import { Base, Action } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { PropertyGridViewModel } from "../../property-grid/property-grid-view-model";
import { TabDesignerViewModel } from "./designer";
export declare class TabDesignerPlugin implements ICreatorPlugin {
    private creator;
    model: TabDesignerViewModel;
    propertyGrid: PropertyGridViewModel;
    private propertyGridTab;
    private toolboxTab;
    private surveySettingsAction;
    private saveSurveyAction;
    previewAction: Action;
    private designerAction;
    private get isSurveySelected();
    private get isSettingsActive();
    private createVisibleUpdater;
    constructor(creator: CreatorBase);
    activate(): void;
    deactivate(): boolean;
    onDesignerSurveyPropertyChanged(obj: Base, propName: string): void;
    update(): void;
    createActions(): Action[];
    selectSurvey(): void;
    addFooterActions(): void;
}
