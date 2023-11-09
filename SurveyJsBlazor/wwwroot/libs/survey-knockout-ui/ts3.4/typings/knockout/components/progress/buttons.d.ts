import { SurveyModel } from "survey-core";
export declare class ProgressButtonsViewModel {
    private survey;
    private progressButtonsModel;
    private scrollButtonCssKo;
    private hasScroller;
    private updateScroller;
    constructor(survey: SurveyModel, element: any);
    isListElementClickable(index: any): boolean;
    getListElementCss(index: any): string;
    clickListElement(index: any): void;
    getScrollButtonCss(isLeftScroll: boolean): any;
    clickScrollButton(listContainerElement: Element, isLeftScroll: boolean): void;
    dispose(): void;
}
