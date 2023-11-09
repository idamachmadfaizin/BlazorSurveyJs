import { Base, AdaptiveActionContainer, Action, SurveyElement } from "survey-core";
import { CreatorBase } from "../creator-base";
export declare class SurveyElementActionContainer extends AdaptiveActionContainer {
    private setModeForActions;
    private skipInputType;
    private skipQuestionType;
    fit(dimension: number, dotsItemSize: number): void;
}
export declare class SurveyElementAdornerBase<T extends SurveyElement = SurveyElement> extends Base {
    creator: CreatorBase;
    protected surveyElement: T;
    actionContainer: SurveyElementActionContainer;
    allowDragging: boolean;
    private allowEditOption;
    private selectedPropPageFunc;
    private sidebarFlyoutModeChangedFunc;
    constructor(creator: CreatorBase, surveyElement: T);
    protected detachElement(surveyElement: T): void;
    protected attachElement(surveyElement: T): void;
    protected setSurveyElement(surveyElement: T, updateActions?: boolean): void;
    protected checkActionProperties(): void;
    dispose(): void;
    protected onElementSelectedChanged(isSelected: boolean): void;
    protected updateActionsProperties(): void;
    protected updateElementAllowOptions(options: any, operationsAllow: boolean): void;
    protected isOperationsAllow(): boolean;
    protected updateActionVisibility(id: string, isVisible: boolean): void;
    getActionById(id: string): Action;
    protected buildActions(items: Array<Action>): void;
    get allowEdit(): boolean;
    get showAddQuestionButton(): boolean;
    protected setShowAddQuestionButton(val: boolean): void;
    protected duplicate(): void;
    protected delete(): void;
}
