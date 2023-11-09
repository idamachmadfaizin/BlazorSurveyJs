import { Base } from "survey-core";
import { ICreatorSelectionOwner } from "./selection-owner";
export declare class SelectionHistory extends Base {
    creator: ICreatorSelectionOwner;
    private items;
    private isChangingInternally;
    constructor(creator: ICreatorSelectionOwner);
    get hasPrev(): boolean;
    get hasNext(): boolean;
    hasInHistory(obj: Base): boolean;
    prev(): void;
    next(): void;
    reset(): void;
    selectFromAction(obj: Base, propertyName: string): void;
    onObjSelected(obj: Base): void;
    private get currentIndex();
    private getIndex;
    private selectElement;
    private updateItems;
}
