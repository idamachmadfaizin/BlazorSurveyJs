import { QuestionBooleanModel } from "survey-core";
export declare class QuestionBoolean extends QuestionBooleanModel {
    private _implementor;
    constructor(name: string);
    protected onBaseCreating(): void;
    onSwitchClick(data: any, event: any): boolean;
    onTrueLabelClick(data: any, event: any): boolean;
    onFalseLabelClick(data: any, event: any): boolean;
    onKeyDown(data: any, event: any): boolean;
    dispose(): void;
}
