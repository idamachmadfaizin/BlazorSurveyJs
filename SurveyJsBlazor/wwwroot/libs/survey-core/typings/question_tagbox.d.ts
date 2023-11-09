import { LocalizableString } from "./localizablestring";
import { QuestionCheckboxModel } from "./question_checkbox";
import { PopupModel } from "./popup";
import { DropdownMultiSelectListModel } from "./dropdownMultiSelectListModel";
import { EventBase } from "./base";
import { ItemValue } from "./itemvalue";
/**
 * A class that describes the Multi-Select Dropdown (Tag Box) question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/how-to-create-multiselect-tag-box/ (linkStyle))
 */
export declare class QuestionTagboxModel extends QuestionCheckboxModel {
    dropdownListModel: DropdownMultiSelectListModel;
    private itemDisplayNameMap;
    constructor(name: string);
    locStrsChanged(): void;
    readOnlyText: string;
    private updateReadOnlyText;
    protected getDefaultItemComponent(): string;
    onSurveyLoad(): void;
    /**
     * Specifies whether to display a button that clears the selected value.
     */
    allowClear: boolean;
    /**
     * Specifies whether users can enter a value into the input field to filter the drop-down list.
     */
    searchEnabled: boolean;
    /**
     * Specifies whether to remove selected items from the drop-down list.
     */
    hideSelectedItems: boolean;
    /**
     * Enables lazy loading. If you set this property to `true`, you should implement the Survey's [`onChoicesLazyLoad`](https://surveyjs.io/form-library/documentation/surveymodel#onChoicesLazyLoad) event handler.
     * @see choicesLazyLoadPageSize
     * @see SurveyModel.onChoicesLazyLoad
     */
    choicesLazyLoadEnabled: boolean;
    /**
     * Specifies the number of choice items to load at a time when choices are loaded on demand.
     * @see choicesLazyLoadEnabled
     * @see SurveyModel.onChoicesLazyLoad
     */
    choicesLazyLoadPageSize: number;
    /**
     * Specifies whether to close the drop-down menu after a user selects a value.
     */
    closeOnSelect: number;
    /**
     * A text displayed in the input field when it doesn't have a value.
     */
    get placeholder(): string;
    set placeholder(val: string);
    get locPlaceholder(): LocalizableString;
    get clearCaption(): string;
    set clearCaption(value: string);
    get locClearCaption(): LocalizableString;
    getType(): string;
    get ariaRole(): string;
    get popupModel(): PopupModel;
    get ariaExpanded(): string;
    getControlClass(): string;
    onOpened: EventBase<QuestionTagboxModel>;
    onOpenedCallBack(): void;
    protected hasUnknownValue(val: any, includeOther: boolean, isFilteredChoices: boolean, checkEmptyValue: boolean): boolean;
    protected needConvertRenderedOtherToDataValue(): boolean;
    protected onVisibleChoicesChanged(): void;
    protected getItemIfChoicesNotContainThisValue(value: any, text?: string): any;
    protected validateItemValues(itemValues: Array<ItemValue>): Array<ItemValue>;
    updateItemDisplayNameMap(): void;
    protected getFirstInputElementId(): string;
    getInputId(): string;
    dispose(): void;
    clearValue(): void;
    get showClearButton(): boolean;
    get isNewA11yStructure(): boolean;
}
