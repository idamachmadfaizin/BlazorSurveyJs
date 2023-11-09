import { PageNavigatorViewModel, PagesController } from "survey-creator-core";
import { IAction, Action } from "survey-core";
export declare class PageNavigatorView extends PageNavigatorViewModel {
    constructor(pagesController: PagesController, pageEditMode: string);
    protected createActionBarCore(item: IAction): Action;
}
