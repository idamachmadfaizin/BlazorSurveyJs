import { ItemValue, Question } from "survey-core";
import { SelectBase } from "./selectBase";
export declare class HistogramModel extends SelectBase {
    protected valueType: "date" | "number";
    private _cachedValues;
    private _continiousData;
    private _cachedIntervals;
    private _intervalPrecision;
    protected chartTypes: string[];
    static IntervalsCount: number;
    static UseIntervalsFrom: number;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    private reset;
    getContiniousValue(value: any): number;
    getString(value: number): string;
    private toPrecision;
    getSelectedItemByText(itemText: string): ItemValue;
    /**
     * Updates visualizer data.
     */
    updateData(data: Array<{
        [index: string]: any;
    }>): void;
    protected onDataChanged(): void;
    protected getContiniousValues(): {
        original: any;
        continious: number;
    }[];
    protected isSupportMissingAnswers(): boolean;
    protected get needUseRateValues(): boolean;
    getValues(): Array<any>;
    getLabels(): Array<string>;
    get hasCustomIntervals(): boolean;
    get intervals(): any;
    getData(): any;
}
