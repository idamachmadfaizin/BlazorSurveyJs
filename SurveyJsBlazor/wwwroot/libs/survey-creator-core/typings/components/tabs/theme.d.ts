import { SurveySimulatorModel } from "../simulator";
import { Base, PageModel, SurveyModel, Action, IAction, ActionContainer, ITheme } from "survey-core";
import { CreatorBase } from "../../creator-base";
export declare const Themes: any;
export declare const PredefinedThemes: string[];
export declare const PredefinedColors: {
    light: {
        teal: string;
        blue: string;
        purple: string;
        orchid: string;
        tulip: string;
        brown: string;
        green: string;
    };
    dark: {
        teal: string;
        blue: string;
        purple: string;
        orchid: string;
        tulip: string;
        brown: string;
        green: string;
    };
};
export interface ICreatorTheme extends ITheme {
    themeName?: string;
    colorPalette?: string;
}
export declare class ThemeSurveyTabViewModel extends Base {
    private surveyProvider;
    private startTheme;
    private json;
    exportToFileUI: any;
    importFromFileUI: any;
    pages: ActionContainer;
    prevPageAction: Action;
    testAgainAction: Action;
    nextPageAction: Action;
    private selectPageAction;
    private themeEditorSurveyValue;
    private themeChanges;
    private colorCalculator;
    private blockChanges;
    onSurveyCreatedCallback: (survey: SurveyModel) => any;
    simulator: SurveySimulatorModel;
    showInvisibleElements: any;
    showPagesInTestSurveyTab: any;
    isRunning: boolean;
    pageListItems: Array<IAction>;
    activePage: PageModel;
    backgroundImage: any;
    backgroundImageFit: any;
    backgroundImageAttachment: any;
    themeName: any;
    themePalette: any;
    themeMode: any;
    getFullThemeName(_themeName?: string): any;
    get themeVariables(): any;
    get activeLanguage(): string;
    set activeLanguage(val: string);
    get survey(): SurveyModel;
    get pageActions(): Array<Action>;
    get isPageToolbarVisible(): boolean;
    get themeEditorSurvey(): SurveyModel;
    get currentTheme(): ICreatorTheme;
    applySelectedTheme(): void;
    constructor(surveyProvider: CreatorBase, startTheme?: any);
    private loadTheme;
    updateSimulatorSurvey(json: any, theme: any): void;
    exportToFile(fileName: string): void;
    importFromFile(file: File): void;
    setThemeFromFile(theme: ITheme): void;
    setJSON(json: any, currTheme: any): void;
    private blockThemeChangedNotifications;
    initialize(json: any, options: any): void;
    private updatePageItem;
    private getCurrentPageItem;
    private getSelectPageTitle;
    private getPageTitle;
    private updatePageList;
    resetTheme(): void;
    show(): void;
    testAgain(): void;
    buildActions(): void;
    private setActivePageItem;
    private getPageItemByPage;
    private updateResultsTemplate;
    setTheme(themeName: string, themeMapper: any): void;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    private updatePrevNextPageActionState;
    initializeColorCalculator(): void;
    protected createThemeEditorSurvey(): SurveyModel;
    private loadThemeIntoPropertyGrid;
    private updatePGEditors;
    private raiseThemeChanged;
    private setThemeToSurvey;
    private getThemeEditorSurveyJSON;
    dispose(): void;
}
