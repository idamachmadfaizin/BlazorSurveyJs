export declare class StringEditorViewModel {
    locString: any;
    constructor(locString: any);
    get koHasHtml(): any;
    get editValue(): any;
    set editValue(value: any);
    onInput(sender: StringEditorViewModel, event: any): void;
    onClick(sender: StringEditorViewModel, event: any): void;
    dispose(): void;
}
