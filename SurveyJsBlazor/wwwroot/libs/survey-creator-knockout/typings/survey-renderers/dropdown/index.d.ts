import * as ko from "knockout";
import { ItemValue } from "survey-core";
export declare class DropdownEditorViewModel {
    question: any;
    hasValue: ko.Computed<boolean>;
    koValue: ko.Observable<any>;
    isExpanded: ko.Observable<boolean>;
    isFocused: ko.Observable<boolean>;
    constructor(question: any);
    selectItem: (itemValue: ItemValue) => void;
    toggle(): void;
    onBlur(): void;
}
