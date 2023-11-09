import { QuestionTextModel } from "survey-core";
export declare class QuestionSpinEditorModel extends QuestionTextModel {
    unit: string;
    private _showUnitsInEditor;
    private parseValue;
    private changeValue;
    private get showUnitsInEditor();
    private correctValue;
    protected setNewValue(newValue: string | number): void;
    get renderedValue(): string;
    private increase;
    decrease(): void;
    private increaseTimer;
    private decreaseTimer;
    onUpButtonMouseDown: () => void;
    onDownButtonMouseDown: () => void;
    onButtonMouseLeave: () => void;
    onButtonMouseUp: () => void;
    onKeyDown: (event: KeyboardEvent) => void;
    onInputKeyDown: (event: KeyboardEvent) => void;
    onBeforeInput(event: InputEvent): void;
    onFocus: (event: Event) => void;
    onBlur: (event: Event) => void;
    getType(): string;
    get isInputTextUpdate(): boolean;
}
