import { IDragDropEngine } from "./engine";
export interface IDragDropDOMAdapter {
    startDrag(event: PointerEvent, draggedElement: any, parentElement: any, draggedElementNode: HTMLElement, preventSaveTargetNode: boolean): void;
    draggedElementShortcut: HTMLElement;
    rootContainer: HTMLElement;
}
export declare class DragDropDOMAdapter implements IDragDropDOMAdapter {
    private dd;
    private longTap;
    static PreventScrolling: boolean;
    private timeoutID;
    private startX;
    private startY;
    private currentX;
    private currentY;
    private savedTargetNode;
    private savedTargetNodeParent;
    private savedTargetNodeIndex;
    private scrollIntervalId;
    constructor(dd: IDragDropEngine, longTap?: boolean);
    private get rootElement();
    private stopLongTapIfMoveEnough;
    private get isMicroMovement();
    private stopLongTap;
    private startLongTapProcessing;
    private handlePointerCancel;
    private handleEscapeButton;
    private onContextMenu;
    private moveShortcutElement;
    private getShortcutBottomCoordinate;
    private getShortcutRightCoordinate;
    private doScroll;
    private dragOver;
    private clear;
    private drop;
    private doStartDrag;
    private returnUserSelectBack;
    draggedElementShortcut: any;
    rootContainer: HTMLElement;
    startDrag(event: PointerEvent, draggedElement: any, parentElement?: any, draggedElementNode?: HTMLElement, preventSaveTargetNode?: boolean): void;
    private getNodeIndexInParent;
    private insertNodeToParentAtIndex;
}
