import { Question } from "./question";
import { LocalizableString } from "./localizablestring";
import { ActionContainer } from "./actions/container";
/**
 * A class that describes the Yes/No (Boolean) question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-boolean/ (linkStyle))
 */
export declare class QuestionBooleanModel extends Question {
    constructor(name: string);
    getType(): string;
    isLayoutTypeSupported(layoutType: string): boolean;
    supportGoNextPageAutomatic(): boolean;
    get isIndeterminate(): boolean;
    get hasTitle(): boolean;
    /**
     * Gets or sets the question value as a Boolean value.
     *
     * If you set the `valueTrue` and `valueFalse` properties, the `value` property contains their values instead of Boolean values. This may be inconvenient when you operate the question value in code. To access the standard Boolean values, use the `booleanValue` property.
     * @see valueTrue
     * @see valueFalse
     */
    get booleanValue(): any;
    set booleanValue(val: any);
    booleanValueRendered: boolean;
    get checkedValue(): any;
    set checkedValue(val: any);
    private setBooleanValue;
    get defaultValue(): any;
    set defaultValue(val: any);
    getDefaultValue(): any;
    get locTitle(): LocalizableString;
    get labelRenderedAriaID(): string;
    showTitle: boolean;
    label: string;
    get isLabelRendered(): boolean;
    get canRenderLabelDescription(): boolean;
    /**
     * Gets or sets a text label that corresponds to a positive answer.
     *
     * Default value: "Yes"
     * @see valueTrue
     * @see valueFalse
     */
    get labelTrue(): any;
    set labelTrue(val: any);
    get locLabelTrue(): LocalizableString;
    get isDeterminated(): boolean;
    /**
     * Gets or sets a text label that corresponds to a negative answer.
     *
     * Default value: "No"
     * @see valueTrue
     * @see valueFalse
     */
    get labelFalse(): any;
    set labelFalse(val: any);
    get locLabelFalse(): LocalizableString;
    /**
     * A value to save in survey results when respondents give a positive answer.
     *
     * Default value: `true`
     * @see labelTrue
     * @see labelFalse
     */
    valueTrue: any;
    /**
     * A value to save in survey results when respondents give a negative answer.
     *
     * Default value: `false`
     * @see labelTrue
     * @see labelFalse
     */
    valueFalse: any;
    getValueTrue(): any;
    getValueFalse(): any;
    protected setDefaultValue(): void;
    private isDefaultValueSet;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    private getItemCssValue;
    getItemCss(): string;
    getCheckboxItemCss(): string;
    getLabelCss(checked: boolean): string;
    get svgIcon(): string;
    get allowClick(): boolean;
    getCheckedLabel(): LocalizableString;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    onLabelClick(event: any, value: boolean): boolean;
    private calculateBooleanValueByEvent;
    onSwitchClickModel(event: any): boolean;
    onKeyDownCore(event: any): boolean;
    getRadioItemClass(css: any, value: any): string;
    protected supportResponsiveness(): boolean;
    protected getCompactRenderAs(): string;
    protected createActionContainer(allowAdaptiveActions?: boolean): ActionContainer;
}
