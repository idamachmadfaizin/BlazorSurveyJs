import { Question } from "survey-core";
import { ImplementorBase } from "./kobase";
export declare class QuestionImplementor extends ImplementorBase {
    question: Question;
    private disposedObjects;
    private callBackFunctions;
    private koDummy;
    koElementType: any;
    private _koValue;
    constructor(question: Question);
    protected setObservaleObj(name: string, obj: any, addToQuestion?: boolean): any;
    protected setCallbackFunc(name: string, func: any): void;
    protected getKoValue(): any;
    protected setKoValue(val: any): void;
    protected onSurveyLoad(): void;
    protected getQuestionTemplate(): string;
    private getTemplateName;
    protected getNo(): string;
    protected updateKoDummy(): void;
    protected koQuestionAfterRender(elements: any, con: any): void;
    dispose(): void;
}
