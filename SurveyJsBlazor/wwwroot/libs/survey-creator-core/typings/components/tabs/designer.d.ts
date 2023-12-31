import { Base, PageModel, SurveyModel } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { PagesController } from "../../pages-controller";
export declare const initialSettingsAllowShowEmptyTitleInDesignMode: boolean;
export declare class TabDesignerViewModel extends Base {
    private cssUpdater;
    private pagesControllerValue;
    newPage: PageModel;
    showNewPage: boolean;
    pageCount: number;
    designerCss: string;
    showPlaceholder: boolean;
    creator: CreatorBase;
    private createNewPage;
    private get canShowNewPage();
    constructor(creator: CreatorBase);
    get survey(): SurveyModel;
    get pagesController(): PagesController;
    get isToolboxVisible(): boolean;
    get placeholderText(): string;
    private isUpdatingNewPage;
    onDesignerSurveyPropertyChanged(obj: Base, propName: string): void;
    private calculateDesignerCss;
    initSurvey(): void;
    private checkNewPage;
    dispose(): void;
    private checkLastPageToDelete;
    clickDesigner(): void;
    getRootCss(): string;
}
