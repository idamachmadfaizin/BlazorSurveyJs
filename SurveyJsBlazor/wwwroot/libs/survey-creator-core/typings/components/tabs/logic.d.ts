import { SurveyModel, Base, Question, ItemValue, MatrixDropdownColumn, QuestionDropdownModel, EventBase } from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { ISurveyLogicItemOwner, SurveyLogicItem, SurveyLogicAction } from "./logic-items";
import { SurveyLogicType } from "./logic-types";
export declare function initLogicOperator(question: QuestionDropdownModel): void;
export declare class LogicEvent extends EventBase<SurveyLogic, any> {
}
export declare class SurveyLogic extends Base implements ISurveyLogicItemOwner {
    survey: SurveyModel;
    options: ISurveyCreatorOptions;
    private editableItemValue;
    static get visibleActions(): Array<string>;
    static set visibleActions(val: Array<string>);
    static get types(): import("./logic-types").ISurveyLogicType[];
    invisibleItems: Array<SurveyLogicItem>;
    onChangedCallback: (item: SurveyLogicItem, changeType: string) => void;
    /**
     * The event is called when logic item is saved.
     * options.item is the saved logic item.
     */
    onLogicItemSaved: LogicEvent;
    /**
     * The event is called before logic item is saved. You can set options.error to non empty string to show error instead of saving the item.
     * You can use options.item.actions to access actions and optionally set errorText to a particular action.
     * options.item is the editing logic item. options.item.actions contains the old actions.
     * options.actions is the array of  logic actions that user edit and create.
     * usedNamesInExpression - the string list of all variables (questions, calculatedValues, and so on) that are used in expression
     * error - the error string. It is empty by default. You have to set it to non-empty string to show the error on saving.
     */
    onLogicItemValidation: LogicEvent;
    /**
     * The event is called before logic item is being removed.
     * options.allowRemove is the option you can set to false and prevent removing.
     * options.item is the logic item to remove.
     */
    onLogicItemRemoving: LogicEvent;
    /**
     * The event is called when logic item is removed.
     * options.item is the removed logic item.
     */
    onLogicItemRemoved: LogicEvent;
    constructor(survey: SurveyModel, options?: ISurveyCreatorOptions);
    dispose(): void;
    items: Array<SurveyLogicItem>;
    logicTypes: Array<SurveyLogicType>;
    errorText: string;
    readOnly: boolean;
    placeholderHtml: string;
    get editableItem(): SurveyLogicItem;
    private modeValue;
    /**
     * There are 3 modes: view, new, edit
     */
    get mode(): string;
    set mode(val: string);
    getLocString(name: string): string;
    getTypeByName(name: string): SurveyLogicType;
    update(survey?: SurveyModel, options?: ISurveyCreatorOptions): void;
    private updateVisibleItems;
    get optionsReadOnly(): boolean;
    saveEditableItem(): boolean;
    saveEditableItemAndBack(): boolean;
    protected onEditableItemApply(): void;
    protected onItemChanged(item: SurveyLogicItem, changeType: string): void;
    renameQuestion(oldName: string, newName: string): void;
    renameItemValue(item: ItemValue, oldValue: any): void;
    renameRowValue(item: ItemValue, oldValue: any): void;
    renameColumn(column: MatrixDropdownColumn, oldName: string): void;
    private getItemValueQuestion;
    removeQuestion(name: string): void;
    hasError(): boolean;
    getUsedQuestions(): Question[];
    getUsedActionTypes(): SurveyLogicType[];
    protected hasErrorInUI(): boolean;
    protected getExpressionText(): string;
    protected getEditingActions(): Array<SurveyLogicAction>;
    protected onReadOnlyChanged(): void;
    private removeQuestionCore;
    addNew(): void;
    editItem(item: SurveyLogicItem): void;
    private editItemCore;
    protected onStartEditing(): void;
    protected onEndEditing(): void;
    protected canRemoveItem(item: SurveyLogicItem): boolean;
    removeItem(item: SurveyLogicItem, checkCanRemove?: boolean): void;
    addAction(lt: SurveyLogicType, element?: Base): SurveyLogicAction;
    addNewAction(): SurveyLogicAction;
    private createNewAction;
    getVisibleLogicTypes(): Array<SurveyLogicType>;
    removeAction(action: SurveyLogicAction): void;
    getExpressionAsDisplayText(expression: string): string;
    protected buildItems(showInUI: boolean): Array<SurveyLogicItem>;
    protected getAllElements(): Array<Base>;
    private getValidators;
    private getItemValues;
    private AddElements;
    private buildItemsByElement;
    private getLogicItemHashKey;
    private getParentQuestion;
    private getElementAllTypes;
    protected createLogicTypes(): Array<SurveyLogicType>;
}
