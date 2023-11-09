import { QuestionCustomModel, QuestionCompositeModel, ComponentQuestionJSON } from "survey-core";
export declare class QuestionCustom extends QuestionCustomModel {
    private _implementor;
    constructor(name: string, questionJSON: ComponentQuestionJSON);
    protected onBaseCreating(): void;
    dispose(): void;
}
export declare class QuestionComposite extends QuestionCompositeModel {
    private _implementor;
    constructor(name: string, questionJSON: ComponentQuestionJSON);
    protected onBaseCreating(): void;
    dispose(): void;
}
