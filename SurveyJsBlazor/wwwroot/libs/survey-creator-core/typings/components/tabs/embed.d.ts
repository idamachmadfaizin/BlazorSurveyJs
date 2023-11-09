import { Base, SurveyModel } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
export declare class EmbedModel extends Base {
    survey: SurveyModel;
    constructor(creator: CreatorBase);
}
export declare class TabEmbedPlugin implements ICreatorPlugin {
    private creator;
    model: EmbedModel;
    constructor(creator: CreatorBase);
    activate(): void;
    deactivate(): boolean;
}
