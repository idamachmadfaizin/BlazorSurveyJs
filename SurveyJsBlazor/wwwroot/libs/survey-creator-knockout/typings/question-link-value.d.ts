import { QuestionLinkValueModel } from "survey-creator-core";
export declare class QuestionLinkValue extends QuestionLinkValueModel {
    private _implementor;
    koClickLink: (model: QuestionLinkValue, event: MouseEvent) => void;
    koClearLink: (model: QuestionLinkValue, event: MouseEvent) => void;
    constructor(name: string, json?: any);
    clearCaption: string;
    protected onBaseCreating(): void;
    dispose(): void;
}
