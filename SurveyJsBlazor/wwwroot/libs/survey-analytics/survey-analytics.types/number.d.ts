import { Question } from "survey-core";
import { VisualizerBase } from "./visualizerBase";
export declare class NumberModel extends VisualizerBase {
    private _resultAverage;
    private _resultMin;
    private _resultMax;
    static stepsCount: number;
    static generateTextsCallback: (question: Question, maxValue: number, minValue: number, stepsCount: number, texts: string[]) => string[];
    protected chartTypes: Array<string>;
    chartType: String;
    static showAsPercentage: boolean;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: {
        [index: string]: any;
    }, name?: string);
    protected onDataChanged(): void;
    protected onChartTypeChanged(): void;
    protected setChartType(chartType: string): void;
    destroy(): void;
    generateText(maxValue: number, minValue: number, stepsCount: number): any;
    generateValues(maxValue: number, stepsCount: number): any[];
    generateColors(maxValue: number, minValue: number, stepsCount: number): any[];
    getData(): number[];
}
