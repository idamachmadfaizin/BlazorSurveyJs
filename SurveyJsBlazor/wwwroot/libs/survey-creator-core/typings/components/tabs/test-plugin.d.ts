import { Action } from "survey-core";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { TestSurveyTabViewModel } from "./test";
export declare class TabTestPlugin implements ICreatorPlugin {
    private creator;
    private languageSelectorAction;
    private changeThemePopupModel;
    private changeThemeModel;
    protected changeThemeAction: Action;
    private deviceSelectorAction;
    private orientationSelectorAction;
    private invisibleToggleAction;
    private testAgainAction;
    private designerAction;
    private previewAction;
    private prevPageAction;
    private nextPageAction;
    private simulatorTheme;
    model: TestSurveyTabViewModel;
    private setDevice;
    private setDefaultLanguageOption;
    private getLanguages;
    private updateActions;
    private setPreviewTheme;
    private createVisibleUpdater;
    constructor(creator: CreatorBase);
    activate(): void;
    update(): void;
    deactivate(): boolean;
    private getAvailableThemes;
    private getThemeLocName;
    createActions(): Array<Action>;
    addFooterActions(): void;
}