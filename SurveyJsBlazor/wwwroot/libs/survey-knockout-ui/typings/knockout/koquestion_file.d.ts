import { QuestionFileModel } from "survey-core";
export declare class QuestionFile extends QuestionFileModel {
    private _implementor;
    private updateState;
    constructor(name: string);
    protected onBaseCreating(): void;
    dispose(): void;
}
