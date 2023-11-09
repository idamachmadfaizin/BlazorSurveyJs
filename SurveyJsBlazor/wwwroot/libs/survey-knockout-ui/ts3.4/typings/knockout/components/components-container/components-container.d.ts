import { SurveyModel } from "survey-core";
export declare class ComponentsContainer {
    survey: SurveyModel;
    private container;
    needRenderWrapper: boolean;
    constructor(survey: SurveyModel, container: any, needRenderWrapper?: boolean);
    css: string;
    readonly components: Array<any>;
}
