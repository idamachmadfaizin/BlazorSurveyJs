import { QuestionDropdownModel } from "survey-core";
export declare class QuestionDropdown extends QuestionDropdownModel {
    private _implementor;
    koDisableOption: any;
    constructor(name: string);
    protected onBaseCreating(): void;
    dispose(): void;
}
