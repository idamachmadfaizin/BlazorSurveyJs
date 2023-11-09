import { SurveySimulatorModel } from "../simulator";
import { Base, PageModel, SurveyModel, Action, IAction, ActionContainer, ITheme, EventBase } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { UndoRedoManager } from "../../plugins/undo-redo/undo-redo-manager";
export declare class ThemeBuilder extends Base {
    private surveyProvider;
    private startThemeClasses;
    static DefaultTheme: ITheme;
    private json;
    pages: ActionContainer;
    prevPageAction: Action;
    testAgainAction: Action;
    nextPageAction: Action;
    undoRedoManager: UndoRedoManager;
    private themeEditorSurveyValue;
    private themeCssVariablesChanges;
    private colorCalculator;
    private blockChanges;
    private _availableThemes;
    private prevQuestionValues;
    onSurveyCreatedCallback: (survey: SurveyModel) => any;
    get themeCssCustomizations(): {
        [index: string]: string;
    };
    simulator: SurveySimulatorModel;
    showInvisibleElements: any;
    showPagesInTestSurveyTab: any;
    isRunning: boolean;
    pageListItems: Array<IAction>;
    activePage: PageModel;
    backgroundImage: any;
    backgroundImageFit: any;
    backgroundImageAttachment: any;
    backgroundOpacity: any;
    themeName: any;
    themePalette: any;
    themeMode: any;
    getFullThemeName(_themeName?: string): any;
    get activeLanguage(): string;
    set activeLanguage(val: string);
    get survey(): SurveyModel;
    get pageActions(): Array<Action>;
    get isPageToolbarVisible(): boolean;
    get themeEditorSurvey(): SurveyModel;
    get currentTheme(): ITheme;
    get currentThemeCssVariables(): {
        [index: string]: string;
    };
    onThemeSelected: EventBase<ThemeBuilder, {
        theme: ITheme;
    }>;
    onThemeModified: EventBase<ThemeBuilder, {
        name: string;
        value: any;
    }>;
    onCanModifyTheme: EventBase<ThemeBuilder, {
        theme: ITheme;
        canModify: boolean;
    }>;
    constructor(surveyProvider: CreatorBase, startThemeClasses?: any);
    get isMobileView(): boolean;
    get showResults(): boolean;
    loadTheme(theme: ITheme): void;
    resetTheme(): void;
    setTheme(theme: ITheme): void;
    selectTheme(themeName: string, themePalette?: string, themeMode?: string): void;
    updateSimulatorSurvey(json: any, theme: any): void;
    setJSON(json: any, currTheme: any): void;
    private creatorPropertyChanged;
    private blockThemeChangedNotifications;
    initialize(json: any, options: any): void;
    private updatePageItem;
    private getCurrentPageItem;
    private getSelectPageTitle;
    private getPageTitle;
    private updatePageList;
    show(): void;
    testAgain(): void;
    buildActions(): void;
    private updatePrevNextPageActionState;
    get availableThemes(): string[];
    set availableThemes(availebleThemes: string[]);
    private setActivePageItem;
    private getPageItemByPage;
    private getPredefinedColorsItemValues;
    private initializeColorCalculator;
    private generalPropertiesChanged;
    private headerViewContainerPropertiesChanged;
    private cssVariablePropertiesChanged;
    private updateDependentQuestionValues;
    private setThemeCssVariablesChanges;
    protected createThemeEditorSurvey(): SurveyModel;
    findSuitableTheme(themeName: string): ITheme;
    private patchFileEditors;
    private getCoverJson;
    private setHeaderBackgroundColorCssVariable;
    private loadThemeIntoPropertyGrid;
    private getBackgroundColorSwitchByValue;
    private updateVisibilityOfPropertyGridGroups;
    private setCoverPropertiesFromSurvey;
    private setCoverColorsFromThemeVariables;
    private updateHeaderViewContainerEditors;
    private updatePropertyGridEditorsAvailability;
    private updatePropertyGridEditors;
    private trimCssVariables;
    private updateSimulatorTheme;
    private _saveThemeFuncValue;
    /**
     * A function that is called [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#isAutoSave) is triggered to save a theme JSON object.
     *
     * For more information, refer to the [Save and Load Custom Themes](https://surveyjs.io/survey-creator/documentation/theme-editor#save-and-load-custom-themes) help topic.
     */
    get saveThemeFunc(): any;
    set saveThemeFunc(value: any);
    private autoSaveTimerId;
    protected processAutoSave(): void;
    protected themeModified(options: {
        theme: ITheme;
    } | {
        name: string;
        value: any;
    }): void;
    private getDefaultTitleSetting;
    private getDefaultDescriptionSetting;
    private getThemeEditorSurveyJSON;
    getHorizontalAlignment(questionName: string, title: string, defaultValue: string): {
        type: string;
        name: string;
        title: string;
        choices: {
            value: string;
            text: string;
        }[];
        defaultValue: string;
    };
    getVerticalAlignment(questionName: string, defaultValue: string): {
        type: string;
        name: string;
        titleLocation: string;
        choices: {
            value: string;
            text: string;
        }[];
        defaultValue: string;
    };
    dispose(): void;
}
