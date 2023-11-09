import { QuestionMatrixModel, MatrixRowModel } from "survey-core";
export declare class QuestionMatrix extends QuestionMatrixModel {
    private _implementor;
    koVisibleRows: any;
    koVisibleColumns: any;
    constructor(name: string);
    protected onBaseCreating(): void;
    protected onColumnsChanged(): void;
    protected onRowsChanged(): void;
    onSurveyLoad(): void;
    protected onMatrixRowCreated(row: MatrixRowModel): void;
    protected getVisibleRows(): Array<MatrixRowModel>;
    dispose(): void;
}
