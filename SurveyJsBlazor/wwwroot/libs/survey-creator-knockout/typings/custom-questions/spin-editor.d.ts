import { QuestionSpinEditorModel } from "survey-creator-core";
import { QuestionImplementor } from "survey-knockout-ui";
export declare class QuestionSpinEditorImplementor extends QuestionImplementor {
    constructor(question: QuestionSpinEditor);
}
export declare class QuestionSpinEditor extends QuestionSpinEditorModel {
    private _implementor;
    constructor(name: string);
    protected onBaseCreating(): void;
    dispose(): void;
}
