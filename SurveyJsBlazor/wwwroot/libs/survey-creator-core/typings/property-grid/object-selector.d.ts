import { CreatorBase } from "../creator-base";
import { Base, SurveyModel, ListModel, IAction, Action } from "survey-core";
export declare class ObjectSelectorItem extends Action {
    data: Base;
    level: number;
    private textInLow;
    constructor(id: number, data: Base, title: string, level: number);
    hasText(filteredTextInLow: string): boolean;
}
export declare class ObjectSelector {
    private creator;
    private getObjectDisplayName;
    private surveyValue;
    private deepestLevel;
    private filteredTextInLow;
    private itemsValue;
    constructor(creator: CreatorBase, survey: SurveyModel, getObjectDisplayName?: (obj: Base, area: string, reason: string, displayName: string) => string);
    get survey(): SurveyModel;
    get items(): Array<ObjectSelectorItem>;
    getItemByObj(obj: Base): IAction;
    filterByText(filteredText: string): void;
    private rebuild;
    private updateItemsVisibility;
    private updateItemsLevelVisibility;
    private hasVisibleChildren;
    private getElements;
    private buildElements;
    private static uniqueId;
    private createItem;
    private getText;
}
export declare class ObjectSelectorModel extends Base {
    private creator;
    private getObjectDisplayName;
    private selector;
    private listModelValue;
    isVisible: boolean;
    constructor(creator: CreatorBase, getObjectDisplayName?: (obj: Base, area: string, reason: string, displayName: string) => string);
    get list(): ListModel;
    show(survey: SurveyModel, selectedObj: Base, onClose: (obj: Base) => void): void;
    refresh(): void;
}
