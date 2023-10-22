import { ItemValue } from "../itemvalue";
import { DragDropRankingChoices } from "./ranking-choices";
import { QuestionRankingModel } from "../question_ranking";
export declare class DragDropRankingSelectToRank extends DragDropRankingChoices {
    protected onStartDrag(event: PointerEvent): void;
    protected findDropTargetNodeByDragOverNode(dragOverNode: HTMLElement): HTMLElement;
    protected getDropTargetByDataAttributeValue(dataAttributeValue: string): ItemValue;
    protected getDropTargetByNode(dropTargetNode: HTMLElement, event: PointerEvent): any;
    protected isDropTargetValid(dropTarget: ItemValue | string, dropTargetNode?: HTMLElement): boolean;
    protected afterDragOver(dropTargetNode: HTMLElement): void;
    doRankBetween(dropTargetNode: HTMLElement, fromChoicesArray: Array<ItemValue>, toChoicesArray: Array<ItemValue>, rankFunction: Function): void;
    getIndixies(model: any, fromChoicesArray: Array<ItemValue>, toChoicesArray: Array<ItemValue>): {
        fromIndex: number;
        toIndex: number;
    };
    private doUIEffects;
    private get isDraggedElementRanked();
    private get isDropTargetRanked();
    private get isDraggedElementUnranked();
    private get isDropTargetUnranked();
    selectToRank(questionModel: QuestionRankingModel, fromIndex: number, toIndex: number): void;
    unselectFromRank(questionModel: QuestionRankingModel, fromIndex: number, toIndex?: number): void;
    reorderRankedItem(questionModel: QuestionRankingModel, fromIndex: number, toIndex: number): void;
}
