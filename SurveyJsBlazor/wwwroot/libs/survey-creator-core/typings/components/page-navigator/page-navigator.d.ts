import { PagesController } from "../../pages-controller";
import { PageModel, PopupModel, ListModel, Base, IAction, Action } from "survey-core";
export declare class PageNavigatorViewModel extends Base {
    private pagesController;
    private pageEditMode;
    icon: string;
    pageListModel: ListModel;
    popupModel: PopupModel;
    private pagesChangedFunc;
    private currentPagesChangedFunc;
    private _resizeObserver;
    private pcPropertyChangedHandler;
    constructor(pagesController: PagesController, pageEditMode: string);
    dispose(): void;
    items: Array<IAction>;
    visible: boolean;
    isPopupOpened: boolean;
    private getActionBarByPage;
    private setItems;
    private buildItems;
    private patchContainerOffset;
    private createActionBarItem;
    scrollToPage(page: PageModel): void;
    protected createActionBarCore(item: IAction): Action;
    togglePageSelector: (event?: any) => void;
    get pageSelectorCaption(): string;
    onContainerScroll(viewPort: HTMLDivElement): any;
    currentPage: PageModel;
    stopItemsContainerHeightObserver(): void;
    visibleItemsStartIndex: number;
    visibleItemsCount: number;
    private _scrollableContainer;
    setScrollableContainer(scrollableContainer: HTMLDivElement | any): void;
    private _itemsContainer;
    setItemsContainer(itemsContainer: HTMLDivElement | any): void;
    static PAGE_NAVIGATION_MENU_ITEM_HEIGHT: number;
    static PAGE_NAVIGATION_ITEM_HEIGHT: number;
    protected updateVisibleItems(allAvailableHeight: number): void;
    get visibleItems(): IAction[];
}