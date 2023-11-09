import { QuestionFileModel } from "survey-core";
export declare class QuestionFileEditorModel extends QuestionFileModel {
    protected loadedFilesValue: any;
    protected onChangeQuestionValue(newValue: any): void;
    protected setNewValue(newValue: any): void;
    protected loadPreview(newValue: any): void;
    get allowMultiple(): boolean;
    set allowMultiple(val: boolean);
    clear(doneCallback?: () => void, shouldClearValue?: boolean): void;
    private _renderedValue;
    placeholder: string;
    protected updateRenderedValue(value: string): void;
    get renderedValue(): string;
    protected updateValueFromInputEvent(event: Event): void;
    onSurveyValueChanged(newValue: any): void;
    onInputChange(event: Event): void;
    onInputBlur(event: Event): void;
    getType(): string;
    getIsClearButtonDisabled(): boolean;
    getChooseButtonCss(): string;
    onKeyDown: (event: KeyboardEvent) => void;
    onFileInputChange: (event: Event) => boolean;
    onChooseFilesCallback: (input: HTMLInputElement, onFilesChosen: (files: File[]) => void) => void;
    chooseFiles(event: Event): boolean;
}
