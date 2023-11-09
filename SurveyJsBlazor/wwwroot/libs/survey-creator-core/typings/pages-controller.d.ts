import { Base, SurveyModel, EventBase, PageModel } from "survey-core";
import { ICreatorSelectionOwner } from "./selection-owner";
export declare class PagesController extends Base {
    creator: ICreatorSelectionOwner;
    onPagesChanged: EventBase<PagesController>;
    onCurrentPageChanged: EventBase<PagesController>;
    private currentPageChangedFunc;
    private surveyValue;
    page2Display: PageModel;
    constructor(creator: ICreatorSelectionOwner);
    get survey(): SurveyModel;
    get pages(): Array<PageModel>;
    get currentPage(): PageModel;
    set currentPage(value: PageModel);
    selectPage(value: PageModel): void;
    getDisplayName(page: PageModel): string;
    raisePagesChanged(): void;
    onSurveyChanged(): void;
    dispose(): void;
    private removeFunctions;
}
