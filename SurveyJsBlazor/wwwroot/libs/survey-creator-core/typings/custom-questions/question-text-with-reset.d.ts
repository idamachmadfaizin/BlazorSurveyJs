import { Base, QuestionCommentModel, QuestionTextModel } from "survey-core";
export declare class ResetValueAdorner extends Base {
    private question;
    constructor(question: QuestionTextModel | QuestionCommentModel);
    resetValueCallback: () => {};
    caption: string;
    allowResetValue: boolean;
    resetValue(): void;
    get isDisabled(): boolean;
}
export declare class QuestionTextWithResetModel extends QuestionTextModel {
    resetValueAdorner: ResetValueAdorner;
    constructor(name: string);
    protected createResetValueAdorner(): ResetValueAdorner;
    getType(): string;
    getRootClass(): string;
    getControlClass(): string;
    get wrappedQuestionTemplate(): string;
}
export declare class QuestionCommentWithResetModel extends QuestionCommentModel {
    constructor(name: string);
    protected createResetValueAdorner(): ResetValueAdorner;
    getType(): string;
    protected getCssType(): string;
    getRootClass(): string;
    getControlClass(): string;
    get wrappedQuestionTemplate(): string;
}
