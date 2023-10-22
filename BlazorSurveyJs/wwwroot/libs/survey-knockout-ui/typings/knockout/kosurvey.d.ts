import { Base, SurveyModel } from "survey-core";
import { ImplementorBase } from "./kobase";
export declare class SurveyImplementor extends ImplementorBase {
    survey: SurveyModel;
    private renderedElement;
    constructor(survey: SurveyModel);
    render(element?: any): void;
    private applyBinding;
    koEventAfterRender(element: any, survey: any): void;
    dispose(): void;
}
export declare class Survey extends SurveyModel {
    implementor: SurveyImplementor;
    constructor(jsonObj?: any, renderedElement?: any);
    render(element?: any): void;
    getHtmlTemplate(): string;
    makeReactive(obj: Base): void;
    dispose(): void;
}
export declare var registerTemplateEngine: (ko: any, platform: string) => void;
