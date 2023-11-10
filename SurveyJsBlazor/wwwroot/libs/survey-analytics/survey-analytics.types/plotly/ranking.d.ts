import { SelectBasePlotly } from "./selectBase";
export declare class RankingPlotly extends SelectBasePlotly {
    getQuestionResults(): any[];
    getEmptyData(): any;
    getData(): any[];
    applyResultToPlotlyData(result: any[], plotlyData: any, choices: any): void;
}
