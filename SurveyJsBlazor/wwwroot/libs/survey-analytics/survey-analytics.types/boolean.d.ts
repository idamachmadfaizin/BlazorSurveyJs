import { Question, QuestionBooleanModel } from "survey-core";
import { ItemValue } from "survey-core";
import { SelectBase } from "./selectBase";
export declare class BooleanModel extends SelectBase {
    protected chartTypes: string[];
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    protected getCorrectAnswerText(): string;
    get booleanQuestion(): QuestionBooleanModel;
    static trueColor: string;
    static falseColor: string;
    getSelectedItemByText(itemText: string): ItemValue;
    getValues(): Array<any>;
    getLabels(): Array<string>;
}
