import { Question, ItemValue, Event } from "survey-core";
import { VisualizerBase } from "./visualizerBase";
export interface IVisualizerWithSelection {
    selection: ItemValue;
    onDataItemSelected: (selectedValue: any, selectedText: string) => void;
    setSelection(item: ItemValue): void;
}
export interface IAnswersData {
    datasets: Array<Array<any>>;
    labels: Array<string>;
    colors: Array<string>;
    texts: Array<Array<any>>;
    seriesLabels: Array<string>;
}
export declare class SelectBase extends VisualizerBase implements IVisualizerWithSelection {
    protected selectedItem: ItemValue;
    private choicesOrderSelector;
    private showPercentageBtn;
    private emptyAnswersBtn;
    private transposeDataBtn;
    private topNSelector;
    private _showPercentages;
    private _showOnlyPercentages;
    private _percentagePrecision;
    protected _answersOrder: string;
    protected _supportSelection: boolean;
    private _hideEmptyAnswers;
    private _topN;
    static topNValuesDefaults: number[];
    topNValues: any[];
    private _transposeData;
    private _showMissingAnswers;
    private missingAnswersBtn;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: any, name?: string);
    protected chartTypes: string[];
    protected _chartType: string;
    /**
     * Chart type - current chart type.
     */
    get chartType(): string;
    set chartType(newChartType: string);
    private updateEmptyAnswersBtn;
    private updateTransposeDataBtn;
    private updateOrderSelector;
    private updateShowPercentageBtn;
    private updateTopNSelector;
    private updateMissingAnswersBtn;
    protected onChartTypeChanged(): void;
    protected setChartType(chartType: string): void;
    protected getCorrectAnswerText(): string;
    getSelectedItemByText(itemText: string): any;
    setSelection(item: ItemValue): void;
    get selection(): ItemValue;
    /**
     * Gets and sets whether chart should show percentages only.
     */
    get showOnlyPercentages(): boolean;
    set showOnlyPercentages(val: boolean);
    /**
     * Gets and sets whether chart should show values and percentages.
     */
    get showPercentages(): boolean;
    set showPercentages(val: boolean);
    /**
     * Gets and sets chart elements order.
     */
    get answersOrder(): string;
    set answersOrder(value: string);
    /**
     * Set to true if need to hide empty chart elements (e.g. bars vith zero value).
     */
    get hideEmptyAnswers(): boolean;
    set hideEmptyAnswers(value: boolean);
    get transposeData(): boolean;
    set transposeData(value: boolean);
    /**
     * Set to some value if need to show top N chart elements.
     */
    get topN(): number;
    set topN(value: number);
    protected isSupportMissingAnswers(): boolean;
    /**
     * Set to true if you want to see chart elements for missing answers (e.g. radiogroup items never been selected by surveyee).
     */
    get showMissingAnswers(): boolean;
    set showMissingAnswers(value: boolean);
    refreshContent(): void;
    onDataItemSelected: (selectedValue: any, selectedText: string) => void;
    get showValuesInOriginalOrder(): boolean;
    valuesSource(): Array<ItemValue>;
    getValues(): Array<any>;
    getLabels(): Array<string>;
    getPercentages(): Array<Array<number>>;
    protected hideEmptyAnswersInData(answersData: IAnswersData): IAnswersData;
    protected answersDataReady(answersData: IAnswersData): any;
    /**
     * Fires when answer data has been combined before they passed to draw graph.
     * options - the answers data object containing: datasets, labels, colors, additional texts (percentage).
     * options fields can be modified
     */
    onAnswersDataReady: Event<(sender: SelectBase, options: any) => any, SelectBase, any>;
    /**
     * Returns object with all infotmation for data visualization: datasets, labels, colors, additional texts (percentage).
     */
    getAnswersData(): IAnswersData;
    protected transpose(data: Array<Array<number>>): Array<Array<number>>;
    private static _stateProperties;
    getState(): any;
    setState(state: any): void;
}
