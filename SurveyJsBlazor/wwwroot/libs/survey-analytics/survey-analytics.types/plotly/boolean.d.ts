import { Question } from "survey-core";
import { BooleanModel } from "../boolean";
import { PlotlyChartAdapter } from "./selectBase";
export declare class PlotlyBoolChartAdapter extends PlotlyChartAdapter {
    constructor(model: BooleanPlotly);
    protected patchConfigParameters(chartNode: object, traces: Array<object>, layout: object, config: object): void;
}
export declare class BooleanPlotly extends BooleanModel {
    private _chartAdapter;
    static types: string[];
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
}
