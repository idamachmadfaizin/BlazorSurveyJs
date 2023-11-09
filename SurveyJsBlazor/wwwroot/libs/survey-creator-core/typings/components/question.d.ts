import { SurveyElement, SurveyTemplateRendererTemplateData, Action, Question, DragTypeOverMeEnum, IAction } from "survey-core";
import { CreatorBase } from "../creator-base";
import { IPortableMouseEvent } from "../utils/events";
import { SurveyElementAdornerBase } from "./action-container-view-model";
export interface QuestionCarryForwardParams {
    question: Question;
    text: string;
    onClick: () => void;
}
export declare class QuestionAdornerViewModel extends SurveyElementAdornerBase {
    templateData: SurveyTemplateRendererTemplateData;
    isDragged: boolean;
    currentAddQuestionType: string;
    placeholderComponent: string;
    placeholderComponentData: any;
    private dragOrClickHelper;
    constructor(creator: CreatorBase, surveyElement: SurveyElement, templateData: SurveyTemplateRendererTemplateData);
    get element(): SurveyElement<any>;
    select(model: QuestionAdornerViewModel, event: IPortableMouseEvent): boolean;
    rootCss(): "" | " svc-question__adorner--start-with-new-line";
    css(): string;
    get isDragMe(): boolean;
    get dragTypeOverMe(): DragTypeOverMeEnum;
    get isUsingCarryForward(): boolean;
    createCarryForwardParams(): QuestionCarryForwardParams;
    dispose(): void;
    get isDraggable(): boolean;
    hover(event: MouseEvent, element: HTMLElement | any): void;
    protected updateElementAllowOptions(options: any, operationsAllow: boolean): void;
    private updateActionVisibilityByProp;
    get isEmptyElement(): boolean;
    get placeholderText(): string;
    private get dragDropHelper();
    get isRequired(): any;
    set isRequired(newVal: any);
    onPointerDown(pointerDownEvent: PointerEvent): void;
    startDragSurveyElement: (event: PointerEvent) => boolean;
    getConvertToTypesActions(): Array<IAction>;
    private get currentType();
    private createConvertToAction;
    private createConvertInputType;
    private getSelectedItem;
    private createDropdownModel;
    private createRequiredAction;
    protected getUpdatedPropertyValue(propName: string, newValue: any): any;
    protected buildActions(items: Array<Action>): void;
    protected duplicate(): void;
    addNewQuestion(): void;
    questionTypeSelectorModel: any;
    get addNewQuestionText(): string;
}
