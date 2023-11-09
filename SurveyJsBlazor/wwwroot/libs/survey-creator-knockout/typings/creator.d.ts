import { ICreatorOptions, CreatorBase } from "survey-creator-core";
import { SurveyModel } from "survey-core";
export declare class SurveyCreator extends CreatorBase {
    constructor(options?: ICreatorOptions, options2?: ICreatorOptions);
    protected createSurveyCore(json: any, reason: string): SurveyModel;
    protected onViewTypeChanged(newType: string): void;
    render(target: string | HTMLElement): void;
}
