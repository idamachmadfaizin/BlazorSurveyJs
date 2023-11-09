import { SurveyCreator } from "./creator";
export declare class CreatorViewModel {
    creator: SurveyCreator;
    private rootNode;
    constructor(creator: SurveyCreator, rootNode: HTMLElement);
    dispose(): void;
}
