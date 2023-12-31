import * as ko from "knockout";
import { CreatorBase } from "survey-creator-core";
import { LocalizableString } from "survey-core";
export declare class StringEditorViewModel {
    locString: any;
    private creator;
    private implementor;
    private baseModel;
    constructor(locString: any, creator: CreatorBase, element: any);
    setLocString(locString: LocalizableString): LocalizableString;
    afterRender: () => void;
    get koHasHtml(): boolean;
    get editValue(): string;
    get className(): string;
    get placeholder(): string;
    get contentEditable(): string;
    get characterCounter(): any;
    get showCharacterCounter(): boolean;
    get getCharacterCounterClass(): string;
    errorText: ko.Observable<string>;
    onClick(sender: StringEditorViewModel, event: any): void;
    onCompositionStart(sender: StringEditorViewModel, event: any): void;
    onCompositionEnd(sender: StringEditorViewModel, event: any): void;
    onInput(sender: StringEditorViewModel, event: any): void;
    onPaste(sender: StringEditorViewModel, event: any): void;
    onBlur(sender: StringEditorViewModel, event: any): void;
    onFocus(sender: StringEditorViewModel, event: any): void;
    onKeyUp(sender: StringEditorViewModel, event: KeyboardEvent): boolean;
    onKeyDown(sender: StringEditorViewModel, event: KeyboardEvent): boolean;
    onMouseUp(sender: StringEditorViewModel, event: MouseEvent): boolean;
    edit(model: StringEditorViewModel, _: MouseEvent): void;
    done(_: StringEditorViewModel, event: Event): void;
    focusEditor: () => void;
    dispose(): void;
}
