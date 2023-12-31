import { SurveyModel, QuestionPanelDynamicModel, PanelModel, Question } from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { PropertyEditorSetupValue } from "../../property-grid/index";
import { SurveyLogicItem, SurveyLogicAction } from "./logic-items";
import { LogicActionModelBase } from "./logic-actions-model";
export declare class LogicItemEditor extends PropertyEditorSetupValue {
    protected options: ISurveyCreatorOptions;
    private logicTypeChoices;
    private editableItemValue;
    private isBuildingPanels;
    private initialSelectedElements;
    private isModifiedValue;
    private contextValue;
    private selectorElementsHash;
    constructor(editableItem: SurveyLogicItem, options?: ISurveyCreatorOptions);
    get editableItem(): SurveyLogicItem;
    setEditableItem(val: SurveyLogicItem): void;
    get survey(): SurveyModel;
    get isModified(): boolean;
    get panel(): QuestionPanelDynamicModel;
    get panels(): Array<PanelModel>;
    getActionModelByPanel(panel: PanelModel): LogicActionModelBase;
    setActionModelByPanel(panel: PanelModel, actionModel: LogicActionModelBase): void;
    get context(): Question;
    set context(val: Question);
    private getLogicTypeByPanel;
    protected getSurveyJSON(): any;
    protected getSurveyCreationReason(): string;
    resetModified(): void;
    isEmpty(): boolean;
    apply(): boolean;
    getEditingActions(): Array<SurveyLogicAction>;
    private onUpdateQuestionCssClasses;
    private isSetValueInternalQuestion;
    private isSetValueInternalQuestionCore;
    private onUpdatePanelCssClasses;
    private onValueChanged;
    private onQuestionAdded;
    private onGetQuestionTitleActions;
    private applyPanel;
    private buildInitialSelectedElements;
    private buildPanels;
    private onPanelAdded;
    private updatePanelsOnContextChanged;
    private isPanelSupportContext;
    private updateSelectorOnContextChanged;
    private getLogicTypeChoices;
    private onLogicTypeChanged;
    private getLogicTypeByName;
    private isElementSelectorVisible;
    getLocString(name: string): string;
    private getElementText;
    private getSelectorChoices;
    private isElementInInitialSelection;
}
