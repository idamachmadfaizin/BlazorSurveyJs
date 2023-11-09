import { LocalizableString, LocalizableStrings } from "./localizablestring";
import { HashTable } from "./helpers";
import { SurveyError } from "./survey-error";
import { QuestionTextBase } from "./question_textbase";
import { CssClassBuilder } from "./utils/cssClassBuilder";
/**
 * A class that describes the Single-Line Input question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-text/ (linkStyle))
 */
export declare class QuestionTextModel extends QuestionTextBase {
    private locDataListValue;
    private minValueRunner;
    private maxValueRunner;
    constructor(name: string);
    protected isTextValue(): boolean;
    getType(): string;
    onSurveyLoad(): void;
    /*
    * A value passed on to the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) attribute of the underlying `<input>` element.
    */
    inputType: string;
    getMaxLength(): any;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    isLayoutTypeSupported(layoutType: string): boolean;
    /*
    * A value passed on to the [`size`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size) attribute of the underlying `<input>` element.
    */
    size: number;
    readonly isTextInput: boolean;
    readonly inputSize: number;
    readonly renderedInputSize: number;
    readonly inputWidth: string;
    updateInputSize(): void;
    /*
    * A value passed on to the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute of the underlying `<input>` element.
    */
    autocomplete: string;
    /*
    * A value passed on to the [`min`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min) attribute of the underlying `<input>` element.
    * @see minValueExpression
    */
    min: string;
    /*
    * A value passed on to the [`max`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max) attribute of the underlying `<input>` element.
    * @see maxValueExpression
    */
    max: string;
    /*
    * The minimum value specified as an expression. For example, `"minValueExpression": "today(-1)"` sets the minimum value to yesterday.
    * @see min
    */
    minValueExpression: string;
    /*
    * The maximum value specified as an expression. For example, `"maxValueExpression": "today(1)"` sets the maximum value to tomorrow.
    * @see max
    */
    maxValueExpression: string;
    readonly renderedMin: any;
    readonly renderedMax: any;
    /*
    * An error message to display when the question value is less than the minimum accepted value.
    * @see min
    * @see minValueExpression
    */
    minErrorText: string;
    readonly locMinErrorText: LocalizableString;
    /*
    * An error message to display when the question value exceeds the maximum accepted value.
    * @see max
    * @see maxValueExpression
    */
    maxErrorText: string;
    readonly locMaxErrorText: LocalizableString;
    /*
    * Returns `true` if the specified `inputType` supports the `min` and `max` properties.
    * @see inputType
    * @see min
    * @see max
    */
    readonly isMinMaxType: boolean;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean): void;
    protected canSetValueToSurvey(): boolean;
    protected convertFuncValuetoQuestionValue(val: any): any;
    private getMinMaxErrorText;
    private readonly isValueLessMin: any;
    private readonly isValueGreaterMax: any;
    private readonly isDateInputType: any;
    private getCalculatedMinMax;
    private setRenderedMinMax;
    /*
    * A value passed on to the [`step`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step) attribute of the underlying `<input>` element.
    */
    step: string;
    readonly renderedStep: string;
    supportGoNextPageAutomatic(): boolean;
    supportGoNextPageError(): boolean;
    /*
    * An array of predefined options from which users can select. This property configures an HTML [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) element and associates it with the underlying `input` element.
    */
    dataList: Array<string>;
    readonly locDataList: LocalizableStrings;
    readonly dataListId: string;
    protected canRunValidators(isOnValueChanged: boolean): boolean;
    protected setNewValue(newValue: any): void;
    protected correctValueType(newValue: any): any;
    protected hasPlaceholder(): boolean;
    protected getControlCssClassBuilder(): CssClassBuilder;
    isReadOnlyRenderDiv(): boolean;
    readonly inputStyle: any;
    private _isWaitingForEnter;
    private updateValueOnEvent;
    onCompositionUpdate: (event: any) => void;
    onKeyUp: (event: any) => void;
    onKeyDown: (event: any) => void;
    onChange: (event: any) => void;
    onBlur: (event: any) => void;
    onFocus: (event: any) => void;
}
export declare function isMinMaxType(obj: any): boolean;
