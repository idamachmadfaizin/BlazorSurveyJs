import { ItemValue, QuestionMatrixDropdownModel, Question } from "survey-core";
import { SelectBase } from "./selectBase";
export declare class MatrixDropdownGrouped extends SelectBase {
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    protected get matrixQuestion(): QuestionMatrixDropdownModel;
    get name(): string | Array<string>;
    getSeriesValues(): Array<string>;
    getSeriesLabels(): Array<string>;
    valuesSource(): Array<ItemValue>;
    protected isSupportMissingAnswers(): boolean;
    getData(): any[];
}
