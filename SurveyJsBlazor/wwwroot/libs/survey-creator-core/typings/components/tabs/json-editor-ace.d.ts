import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { JsonEditorBaseModel, TabJsonEditorBasePlugin } from "./json-editor-plugin";
export declare class AceJsonEditorModel extends JsonEditorBaseModel {
    static aceBasePath: string;
    private aceEditor;
    private aceCanUndo;
    private aceCanRedo;
    constructor(creator: CreatorBase);
    protected getText(): string;
    protected setText(value: string): void;
    init(aceEditor: any): void;
    private updateUndoRedoState;
    protected onTextChanged(): void;
    private createAnnotations;
    protected setErrors(errors: any[]): void;
    protected gotoError(at: number, row: number, column: number): void;
    onEditorActivated(): void;
}
export declare class TabJsonEditorAcePlugin extends TabJsonEditorBasePlugin implements ICreatorPlugin {
    constructor(creator: CreatorBase);
    protected createModel(creator: CreatorBase): JsonEditorBaseModel;
    static hasAceEditor(): boolean;
}
