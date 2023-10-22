import { QuestionPanelDynamicModel } from "survey-core";
import { QuestionImplementor } from "./koquestion";
export declare class QuestionPanelDynamicImplementor extends QuestionImplementor {
    koRecalc: any;
    constructor(question: QuestionPanelDynamic);
    protected onPanelCountChanged(): void;
    protected onRenderModeChanged(): void;
    protected onCurrentIndexChanged(): void;
    protected addPanel(): void;
    protected removePanel(val: any): void;
    private panelAfterRender;
    dispose(): void;
}
export declare class QuestionPanelDynamic extends QuestionPanelDynamicModel {
    private _implementor;
    constructor(name: string);
    protected onBaseCreating(): void;
    dispose(): void;
}
