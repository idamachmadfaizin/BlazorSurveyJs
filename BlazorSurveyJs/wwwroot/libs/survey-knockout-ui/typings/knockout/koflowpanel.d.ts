import { FlowPanelModel } from "survey-core";
import { Question } from "survey-core";
export declare class FlowPanel extends FlowPanelModel {
    koElementType: any;
    koElementAfterRender: any;
    placeHolder: string;
    constructor(name?: string);
    protected onCreating(): void;
    protected getHtmlForQuestion(question: Question): string;
    private elementAfterRender;
}
