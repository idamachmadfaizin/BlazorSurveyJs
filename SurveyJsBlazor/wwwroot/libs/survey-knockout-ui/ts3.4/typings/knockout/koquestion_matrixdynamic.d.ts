import { QuestionMatrixDropdownRenderedTable } from "survey-core";
import { QuestionMatrixBaseImplementor } from "./koquestion_matrixdropdown";
import { QuestionMatrixDynamicModel } from "survey-core";
import { Question } from "survey-core";
import { MatrixDropdownRowModelBase } from "survey-core";
import { MatrixDynamicRowModel } from "survey-core";
export declare class QuestionMatrixDynamicImplementor extends QuestionMatrixBaseImplementor {
    constructor(question: Question);
    protected addRow(): void;
    protected removeRow(row: MatrixDynamicRowModel): void;
    getKoPopupIsVisible(row: MatrixDropdownRowModelBase): any;
    dispose(): void;
}
export declare class QuestionMatrixDynamic extends QuestionMatrixDynamicModel {
    private _implementor;
    constructor(name: string);
    protected createRenderedTable(): QuestionMatrixDropdownRenderedTable;
    protected onBaseCreating(): void;
    dispose(): void;
}
