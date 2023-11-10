import { Question } from "survey-core";
import { NumberModel } from "../number";
export declare class PlotlyGaugeAdapter {
    private model;
    private _chart;
    constructor(model: GaugePlotly);
    get chart(): Promise<Plotly.PlotlyHTMLElement>;
    create(chartNode: HTMLElement): any;
    destroy(node: HTMLElement): void;
}
export declare class GaugePlotly extends NumberModel {
    private _chartAdapter;
    static displayModeBar: any;
    static types: string[];
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
}
