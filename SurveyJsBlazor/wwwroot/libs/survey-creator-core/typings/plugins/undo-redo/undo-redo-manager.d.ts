import { ArrayChanges, Base } from "survey-core";
export interface IUndoRedoChange {
    object: any;
    propertyName: string;
    oldValue: any;
    newValue: any;
}
export declare class UndoRedoManager {
    constructor();
    onPropertyValueChanged(name: string, oldValue: any, newValue: any, sender: Base, arrayChanges: ArrayChanges): void;
    isCorrectProperty(sender: Base, propertyName: string): boolean;
    tryMergeTransaction(sender: Base, propertyName: string, newValue: any): boolean;
    private _ignoreChanges;
    private _isExecuting;
    private _preparingTransaction;
    private _transactions;
    private _currentTransactionIndex;
    isCopyObject(sender: Base): void;
    private _cutOffTail;
    private get isIgnoring();
    private _addTransaction;
    private _getCurrentTransaction;
    private _getNextTransaction;
    private notifyChangesFinished;
    canUndoRedoCallback(): void;
    private transactionCounter;
    startTransaction(name: string): void;
    stopTransaction(): void;
    setUndoCallbackForTransaction(callback: () => void): void;
    get isProcessingUndoRedo(): boolean;
    canUndo(): boolean;
    undo(): void;
    canRedo(): boolean;
    redo(): void;
    suspend(): void;
    resume(): void;
    changesFinishedCallback: (changes: UndoRedoAction[], isUndo: boolean) => void;
}
export declare class Transaction {
    private _name;
    constructor(_name: string);
    private _actions;
    undoCallback: () => void;
    apply(): void;
    rollback(): void;
    addAction(action: any): void;
    isEmpty(): boolean;
    get actions(): UndoRedoAction[];
}
export interface IUndoRedoAction {
    apply: () => void;
    rollback: () => void;
    getChanges(): IUndoRedoChange;
    tryMerge(sender: Base, propertyName: string, newValue: any): boolean;
}
export declare class UndoRedoAction implements IUndoRedoAction {
    private _propertyName;
    private _oldValue;
    private _newValue;
    private _sender;
    static maximumMergeTime: number;
    private tickCount;
    constructor(_propertyName: string, _oldValue: any, _newValue: any, _sender: Base);
    apply(): void;
    rollback(): void;
    getChanges(isUndo?: boolean): IUndoRedoChange;
    getDeletedElement(isUndo: boolean): any;
    getInsertedElement(isUndo: boolean): any;
    getIndex(): number;
    tryMerge(sender: Base, propertyName: string, newValue: any): boolean;
}
export declare class UndoRedoArrayAction implements IUndoRedoAction {
    private _propertyName;
    private _sender;
    private survey;
    private _index;
    private _itemsToAdd;
    private _deletedItems;
    constructor(_propertyName: string, _sender: Base, arrayChanges: ArrayChanges);
    apply(): void;
    rollback(): void;
    getChanges(): IUndoRedoChange;
    getDeletedElement(isUndo: boolean): any;
    getInsertedElement(isUndo: boolean): any;
    getIndex(): number;
    private getMovedElement;
    tryMerge(sender: Base, propertyName: string, newValue: any): boolean;
    private getSenderElement;
    private getItemsToAdd;
}
