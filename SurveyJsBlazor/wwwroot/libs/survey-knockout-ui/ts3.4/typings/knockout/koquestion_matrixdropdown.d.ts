import { QuestionMatrixDropdownRenderedRow } from "survey-core";
import { QuestionMatrixDropdownModel } from "survey-core";
import { MatrixDropdownRowModelBase, QuestionMatrixDropdownRenderedTable } from "survey-core";
import { Question } from "survey-core";
import { QuestionImplementor } from "./koquestion";
export declare class QuestionMatrixBaseImplementor extends QuestionImplementor {
    private _tableImplementor;
    koRecalc: any;
    constructor(question: Question);
    readonly matrix: QuestionMatrixDropdownModel;
    private cellAfterRender;
    private cellQuestionAfterRender;
    protected isAddRowTop(): boolean;
    protected isAddRowBottom(): boolean;
    protected addRow(): void;
    protected removeRow(row: MatrixDropdownRowModelBase): void;
    private panelAfterRender;
    dispose(): void;
}
export declare class QuestionMatrixDropdown extends QuestionMatrixDropdownModel {
    private _implementor;
    constructor(name: string);
    protected createRenderedTable(): QuestionMatrixDropdownRenderedTable;
    protected onBaseCreating(): void;
    dispose(): void;
}
export declare class KoQuestionMatrixDropdownRenderedTable extends QuestionMatrixDropdownRenderedTable {
    protected createRenderedRow(cssClasses: any, isDetailRow?: boolean): QuestionMatrixDropdownRenderedRow;
    protected createErrorRenderedRow(cssClasses: any): import("../../build/survey-core/typings/question_matrixdropdownrendered").QuestionMatrixDropdownRenderedErrorRow;
}
