import { ItemValue, QuestionMatrixModel, Question } from "survey-core";
import { IAnswersData, SelectBase } from "./selectBase";
export declare class Matrix extends SelectBase {
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    protected get matrixQuestion(): QuestionMatrixModel;
    protected isSupportMissingAnswers(): boolean;
    getSeriesValues(): Array<string>;
    getSeriesLabels(): Array<string>;
    getSelectedItemByText(itemText: string): any;
    valuesSource(): Array<ItemValue>;
    private getHasAnswersInAllSeriesArray;
    private getHasAnswersInSeries;
    protected hideEmptyAnswersInData(answersData: IAnswersData): IAnswersData;
    getData(): any[];
}
