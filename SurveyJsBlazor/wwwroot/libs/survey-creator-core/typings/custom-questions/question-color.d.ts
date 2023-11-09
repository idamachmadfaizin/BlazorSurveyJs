import { Action, ItemValue, QuestionTextModel } from "survey-core";
export declare class QuestionColorModel extends QuestionTextModel {
    allowEmptyValue: boolean;
    constructor(name: string);
    private getCorrectedValue;
    protected setNewValue(newValue: string): void;
    onBeforeInput(event: InputEvent): void;
    onColorInputChange(event: Event): void;
    getType(): string;
    _renderedValue: string;
    private resetRenderedValue;
    private updateRenderedValue;
    get renderedValue(): string;
    getSwatchCss(): string;
    getSwatchStyle(): {
        [index: string]: string;
    };
    get renderedColorValue(): string;
    get isInputTextUpdate(): boolean;
    onSurveyValueChanged(newValue: any): void;
    private _dropdownAction;
    get dropdownAction(): Action;
    get choices(): Array<ItemValue>;
    set choices(newValue: Array<ItemValue>);
    get showDropdownAction(): boolean;
    createDropdownAction(): Action;
    protected calcCssClasses(css: any): void;
    private updateChoices;
    get itemComponent(): string;
}
