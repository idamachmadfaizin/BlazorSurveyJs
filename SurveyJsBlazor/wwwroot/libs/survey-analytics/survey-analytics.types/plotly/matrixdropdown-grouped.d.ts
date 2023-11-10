import { QuestionMatrixDropdownModel } from "survey-core";
import { MatrixDropdownGrouped } from "../matrixDropdownGrouped";
export declare class MatrixDropdownGroupedPlotly extends MatrixDropdownGrouped {
    private _chartAdapter;
    static types: string[];
    constructor(question: QuestionMatrixDropdownModel, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
}
