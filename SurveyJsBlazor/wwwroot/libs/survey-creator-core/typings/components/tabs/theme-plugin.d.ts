import { Action, ITheme, EventBase } from "survey-core";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { ThemeBuilder } from "./theme-builder";
import { saveToFileHandler } from "../../utils/utils";
export declare class ThemeTabPlugin implements ICreatorPlugin {
    private creator;
    private previewAction;
    private invisibleToggleAction;
    private testAgainAction;
    private designerAction;
    private prevPageAction;
    private nextPageAction;
    private themeSettingsAction;
    private saveThemeAction;
    private resetTheme;
    private importAction;
    private exportAction;
    private undoAction;
    private redoAction;
    private inputFileElement;
    private simulatorTheme;
    private sidebarTab;
    private _availableThemes;
    model: ThemeBuilder;
    private createVisibleUpdater;
    constructor(creator: CreatorBase);
    activate(): void;
    update(): void;
    deactivate(): boolean;
    saveToFileHandler: typeof saveToFileHandler;
    exportToFile(fileName: string): void;
    importFromFile(file: File, callback?: (theme: ITheme) => void): void;
    createActions(): Array<Action>;
    undo(): void;
    redo(): void;
    private updateUndeRedoActions;
    addFooterActions(): void;
    get availableThemes(): string[];
    set availableThemes(availebleThemes: string[]);
    addTheme(theme: ITheme, setAsDefault?: boolean): string;
    removeTheme(themeAccessor: string | ITheme): void;
    getCurrentTheme(content?: "full" | "changes"): ITheme;
    getThemeChanges(): ITheme;
    get isThemePristine(): boolean;
    onThemeSelected: EventBase<ThemeTabPlugin, {
        theme: ITheme;
    }>;
    onThemeModified: EventBase<ThemeTabPlugin, {
        name: string;
        value: any;
    }>;
    onCanModifyTheme: EventBase<ThemeTabPlugin, {
        theme: ITheme;
        canModify: boolean;
    }>;
}
