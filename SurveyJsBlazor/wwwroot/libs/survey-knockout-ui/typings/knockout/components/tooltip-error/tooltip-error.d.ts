import { Question } from "survey-core";
export declare class TooltipErrorViewModel {
    question: Question;
    private tooltipManager;
    constructor(question: Question);
    afterRender: (elements: HTMLElement[]) => void;
}
