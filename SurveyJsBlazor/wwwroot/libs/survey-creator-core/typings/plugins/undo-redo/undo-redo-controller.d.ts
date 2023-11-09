import { Action, Base } from "survey-core";
import { CreatorBase, CreatorEvent } from "../../creator-base";
import { UndoRedoManager } from "./undo-redo-manager";
export declare class UndoRedoController extends Base {
    private creator;
    private undoAction;
    private redoAction;
    private onSurveyPropertyValueChangedCallback;
    constructor(creator: CreatorBase);
    undoRedoManager: UndoRedoManager;
    updateSurvey(): void;
    private notifySurveyMoveItem;
    private selectElementAfterUndo;
    private selectElementAfterUndoCore;
    undo(): void;
    redo(): void;
    startTransaction(name?: string): void;
    stopTransaction(): void;
    createActions(): Action[];
    private updateUndeRedoActions;
    /**
     * The event is called before undo happens.
     * options.canUndo a boolean value. It is true by default. Set it false to hide prevent undo operation.
     */
    onBeforeUndo: CreatorEvent;
    /**
      * The event is called before redo happens.
      * options.canRedo a boolean value. It is true by default. Set it false to hide prevent redo operation.
      */
    onBeforeRedo: CreatorEvent;
}
