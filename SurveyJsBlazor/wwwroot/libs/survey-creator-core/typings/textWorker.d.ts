import { SurveyModel, JsonError, Base } from "survey-core";
declare class SurveyTextWorkerJsonErrorFixerBase {
    getCorrectAt(text: string, at: number, end: number): number;
    get isFixable(): boolean;
    fixError(text: string, start: number, end: number): string;
}
export declare abstract class SurveyTextWorkerError {
    at: number;
    text: string;
    rowAt: number;
    columnAt: number;
    private fixerValue;
    constructor(at: number, text: string);
    abstract getErrorType(): string;
    get isFixable(): boolean;
    fixError(text: string): string;
    protected get fixer(): SurveyTextWorkerJsonErrorFixerBase;
    protected createFixer(): SurveyTextWorkerJsonErrorFixerBase;
}
export declare class SurveyTextWorkerParserError extends SurveyTextWorkerError {
    getErrorType(): string;
}
export declare class SurveyTextWorkerJsonError extends SurveyTextWorkerError {
    elementStart: number;
    elementEnd: number;
    private element;
    private errorType;
    private propertyName;
    private jsonObj;
    constructor(jsonError: JsonError);
    protected createFixer(): SurveyTextWorkerJsonErrorFixerBase;
    getErrorType(): string;
    get isFixable(): boolean;
    correctAt(text: string): void;
    fixError(text: string): string;
}
export declare class SurveyTextWorker {
    text: string;
    static newLineChar: string;
    errors: Array<SurveyTextWorkerError>;
    private surveyValue;
    private jsonValue;
    constructor(text: string);
    get survey(): SurveyModel;
    get isJsonCorrect(): boolean;
    get isJsonHasErrors(): boolean;
    protected process(): void;
    private updateJsonPositions;
    private setErrorsPositionByChartAt;
    private getPostionByChartAt;
    private getDuplicatedNamesErrors;
    private getDuplicatedElements;
    private checkDuplicatedElement;
    private createDuplicatedError;
}
export declare class JsonDuplicateNameError extends JsonError {
    constructor(el: Base);
}
export {};
