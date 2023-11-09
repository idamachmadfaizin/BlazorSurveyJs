import * as Survey from "survey-core";
export declare class ExpressionToDisplayText {
    survey: Survey.SurveyModel;
    private options;
    private currentQuestion;
    private showTitles;
    constructor(survey: Survey.SurveyModel, options?: any);
    toDisplayText(expression: string): string;
    toExpression(node: Survey.Operand): string;
    private toDisplayTextCore;
    private getQuestionText;
    private getDisplayText;
    private getDisplayOperand;
    static operatorText: {
        less: string;
        lessorequal: string;
        greater: string;
        greaterorequal: string;
        equal: string;
        notequal: string;
        plus: string;
        minus: string;
        mul: string;
        div: string;
        power: string;
        mod: string;
        negate: string;
    };
    private getDisplayOperator;
    private getDisplayBinary;
    private getDisplayUnary;
    private proceedBinary;
    private getQuestionFromOperands;
    private replaceVariables;
    private replaceVariable;
    private getQuestionByName;
}
export declare class ExpressionRemoveVariable {
    private wasRemoved;
    constructor();
    remove(expression: string, variable: string): string;
    private processOperand;
    private processVariable;
    private processUnary;
    private proceedBinary;
}
