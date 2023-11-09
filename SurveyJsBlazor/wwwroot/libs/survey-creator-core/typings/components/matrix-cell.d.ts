import { SurveyModel, Base, Question } from "survey-core";
import { CreatorBase } from "../creator-base";
export declare class MatrixCellWrapperEditSurvey {
    private cellQuestion;
    private surveyValue;
    private creator;
    constructor(creator: CreatorBase, cellQuestion: Question, model?: Base);
    get survey(): SurveyModel;
    get question(): Question;
    apply(): void;
}
export declare class MatrixCellWrapperViewModel extends Base {
    creator: CreatorBase;
    templateData: any;
    question: Question;
    row: any;
    column: any;
    constructor(creator: CreatorBase, templateData: any, question: Question, row: any, column: any);
    isSelected: boolean;
    private onSelectionChanged;
    editQuestion(model: MatrixCellWrapperViewModel, event: MouseEvent): void;
    get context(): any;
    selectContext(model: MatrixCellWrapperViewModel, event: MouseEvent): void;
    get isSupportCellEditor(): boolean;
    hover(event: MouseEvent, element: HTMLElement | any): void;
    dispose(): void;
}
