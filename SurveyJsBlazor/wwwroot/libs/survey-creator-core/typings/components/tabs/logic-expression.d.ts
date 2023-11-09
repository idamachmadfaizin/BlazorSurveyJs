export declare class SurveyLogicExpressionUpdater {
    private operand;
    private constChanges;
    constructor(expresion: string);
    update(varName: string, oldValue: any, newValue: any): void;
    get isModified(): boolean;
    toString(): string;
    private constToString;
    private binaryToString;
    private operandToString;
    private operatorToString;
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
    private updateOperand;
    private hasVarName;
    private updateOperandConst;
    private getCorrectNewValue;
}
export declare function updateLogicExpression(expression: string, varName: string, oldValue: any, newValue: any): string;
