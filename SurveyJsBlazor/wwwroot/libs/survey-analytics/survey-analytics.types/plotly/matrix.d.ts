import { Question } from "survey-core";
import { Matrix } from "../matrix";
export declare class MatrixPlotly extends Matrix {
    private _chartAdapter;
    static types: string[];
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
}
