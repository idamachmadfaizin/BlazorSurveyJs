import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { JsonEditorBaseModel, TabJsonEditorBasePlugin } from "./json-editor-plugin";
export declare class TextareaJsonEditorModel extends JsonEditorBaseModel {
    protected _text: string;
    private _errors;
    ariaLabel: string;
    textElement: HTMLTextAreaElement;
    canShowErrors: boolean;
    constructor(creator: CreatorBase);
    checkKey(data: any, e: any): boolean;
    protected getText(): string;
    protected setText(value: string): void;
    protected gotoError(at: number, row: number, column: number): void;
    get errorButtonText(): string;
    toggleErrors(): void;
    get userFriendlyErrors(): any[];
    get errors(): any[];
    protected onTextChanged(): void;
    protected setErrors(errors: any[]): void;
}
export declare class TabJsonEditorTextareaPlugin extends TabJsonEditorBasePlugin implements ICreatorPlugin {
    constructor(creator: CreatorBase);
    protected createModel(creator: CreatorBase): JsonEditorBaseModel;
}
