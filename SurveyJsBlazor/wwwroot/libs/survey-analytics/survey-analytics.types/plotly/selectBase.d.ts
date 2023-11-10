import { Question } from "survey-core";
import { SelectBase } from "../selectBase";
export declare class PlotlyChartAdapter {
    protected model: SelectBase;
    private _chart;
    constructor(model: SelectBase);
    protected patchConfigParameters(chartNode: object, traces: Array<object>, layout: object, config: object): void;
    get chart(): Promise<Plotly.PlotlyHTMLElement>;
    create(chartNode: HTMLElement): any;
    destroy(node: HTMLElement): void;
}
export declare class SelectBasePlotly extends SelectBase {
    private _chartAdapter;
    static types: string[];
    static displayModeBar: any;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: {
        [index: string]: any;
    }, name?: string);
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
    getData(): any[];
}
