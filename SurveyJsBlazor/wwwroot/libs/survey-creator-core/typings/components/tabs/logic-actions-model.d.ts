import { Base, ItemValue, PanelModel, QuestionDropdownModel, SurveyModel } from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { SurveyLogicAction } from "./logic-items";
import { SurveyLogicType } from "./logic-types";
export declare class LogicActionModelBase {
    protected panel: PanelModel;
    initialLogicAction: SurveyLogicAction;
    logicType: SurveyLogicType;
    isTrigger: boolean;
    currentLogicAction: SurveyLogicAction;
    static createActionModel(panel: PanelModel, logicAction: SurveyLogicAction, logicType: SurveyLogicType, selectorElementsHash: any): LogicActionModelBase;
    constructor(panel: PanelModel, initialLogicAction: SurveyLogicAction, logicType: SurveyLogicType);
    updateCurrentLogicAction(survey: SurveyModel): boolean;
    afterUpdateInitialLogicAction(): void;
    resetElements(): void;
    getSelectedElement(): string;
    updateInitialLogicAction(): void;
    setInitialElementValue(question: QuestionDropdownModel, action: SurveyLogicAction, selectedQuestion: string): void;
}
export declare class LogicActionModel extends LogicActionModelBase {
    private selectorElementsHash;
    private getSelectorOptionsText;
    protected getElementBySelectorName(panel: PanelModel): Base;
    constructor(panel: PanelModel, logicAction: SurveyLogicAction, logicType: SurveyLogicType, selectorElementsHash: any);
    updateCurrentLogicAction(survey: SurveyModel): boolean;
    resetElements(): void;
    updatePanelElements(selectedElement: string, choices: Array<ItemValue>): void;
    getSelectedElement(): string;
}
export declare class LogicActionSetValueModel extends LogicActionModel {
    updatePanelElements(selectedElement: string, choices: Array<ItemValue>): void;
    afterUpdateInitialLogicAction(): void;
    private setValueExpressionValue;
    private getValueIfPanel;
    private getValueIfQuestion;
    resetElements(): void;
}
export declare class LogicActionTriggerModel extends LogicActionModelBase {
    private panelObj;
    isTrigger: boolean;
    private recreateQuestion;
    private updateSetValueQuestion;
    private updateRunExpressionQuestion;
    private createElementPanelObj;
    private getQuestions;
    private resetPanel;
    private updateVisibilityPanel;
    private updatePanelQuestionsValue;
    constructor(panel: PanelModel, logicAction: SurveyLogicAction, logicType: SurveyLogicType);
    afterUpdateInitialLogicAction(): void;
    updateCurrentLogicAction(survey: SurveyModel): boolean;
    updatePanel(propertyName: string, newValue: any, options: ISurveyCreatorOptions, survey: SurveyModel): void;
    setPanelObj(obj: Base): void;
    resetElements(): void;
    updatePanelElements(selectedElement: string, options?: ISurveyCreatorOptions): void;
    getSelectedElement(): string;
}
