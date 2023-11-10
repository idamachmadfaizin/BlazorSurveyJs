import { Question } from "survey-core";
import { HistogramModel } from "../histogram";
export declare class HistogramPlotly extends HistogramModel {
    private _chartAdapter;
    static types: string[];
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
    getData(): any[];
}
