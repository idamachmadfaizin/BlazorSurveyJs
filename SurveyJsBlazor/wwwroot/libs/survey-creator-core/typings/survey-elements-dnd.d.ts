import { IElement, IPanel } from "survey-core";
import { DragDropSurveyElements } from "./survey-elements";
export declare class DragDropSurveyElementsInCreator extends DragDropSurveyElements {
    protected duringDragOver(dropTargetNode?: HTMLElement, event?: PointerEvent): void;
    protected removeDragOverMarker(dropTarget: {
        dragTypeOverMe: boolean;
    }): void;
    protected afterDragOver(dropTargetNode?: HTMLElement, event?: PointerEvent): void;
    private getElementIndexInPanel;
    moveElementInPanel(panel: IPanel, src: IElement, target: IElement, targetIndex: number): void;
    protected doDrop: () => any;
}
