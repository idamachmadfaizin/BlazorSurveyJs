import { Base } from "./base";
import { ISurveyData, ISurveyImpl, ISurvey, IPanel, IElement, IQuestion, ITextProcessor, IProgressInfo } from "./base-interfaces";
import { SurveyValidator, IValidatorOwner } from "./validator";
import { Question, IConditionObject } from "./question";
import { QuestionTextModel } from "./question_text";
import { SurveyError } from "./survey-error";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { HashTable } from "./helpers";
export interface IMultipleTextData extends ILocalizableOwner, IPanel {
    getSurvey(): ISurvey;
    getTextProcessor(): ITextProcessor;
    getAllValues(): any;
    getMultipleTextValue(name: string): any;
    setMultipleTextValue(name: string, value: any): any;
    getItemDefaultValue(name: string): any;
    getIsRequiredText(): string;
}
export declare class MultipleTextEditorModel extends QuestionTextModel {
    get a11y_input_ariaLabel(): string;
    get a11y_input_ariaLabelledBy(): string;
}
/**
 * A class that describes an item in a [Multiple Textboxes](https://surveyjs.io/form-library/documentation/api-reference/multiple-text-entry-question-model) question.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/multiple-text-box-question/)
 */
export declare class MultipleTextItemModel extends Base implements IValidatorOwner, ISurveyData, ISurveyImpl {
    private editorValue;
    private data;
    valueChangedCallback: (newValue: any) => void;
    constructor(name?: any, title?: string);
    getType(): string;
    get id(): string;
    getOriginalObj(): Base;
    /**
     * The item name.
     */
    get name(): string;
    set name(val: string);
    get question(): Question;
    get editor(): MultipleTextEditorModel;
    protected createEditor(name: string): MultipleTextEditorModel;
    addUsedLocales(locales: Array<string>): void;
    localeChanged(): void;
    locStrsChanged(): void;
    setData(data: IMultipleTextData): void;
    focusIn: () => void;
    /**
     * Set this property to true, to make the item a required. If a user doesn't fill the item then a validation error will be generated.
     */
    get isRequired(): boolean;
    set isRequired(val: boolean);
    /**
     * Use this property to change the default input type.
     */
    get inputType(): string;
    set inputType(val: string);
    /**
     * Item title. If it is empty, the item name is rendered as title. This property supports markdown.
     * @see name
     */
    get title(): string;
    set title(val: string);
    get locTitle(): LocalizableString;
    get fullTitle(): string;
    /**
     * The maximum text length. If it is -1, defaul value, then the survey maxTextLength property will be used.
     * If it is 0, then the value is unlimited
     * @see SurveyModel.maxTextLength
     */
    get maxLength(): number;
    set maxLength(val: number);
    getMaxLength(): any;
    /**
     * The input place holder.
     */
    get placeholder(): string;
    set placeholder(val: string);
    get locPlaceholder(): LocalizableString;
    get placeHolder(): string;
    set placeHolder(val: string);
    get locPlaceHolder(): LocalizableString;
    /**
     * The custom text that will be shown on required error. Use this property, if you do not want to show the default text.
     */
    get requiredErrorText(): string;
    set requiredErrorText(val: string);
    get locRequiredErrorText(): LocalizableString;
    /**
     * The input size.
     */
    get size(): number;
    set size(val: number);
    /**
     * An expression used to calculate the [defaultValue](https://surveyjs.io/form-library/documentation/question#defaultValue).
     */
    get defaultValueExpression(): string;
    set defaultValueExpression(val: string);
    /**
     * The minimum value specified as an expression. For example, `"minValueExpression": "today(-1)"` sets the minimum value to yesterday.
     */
    get minValueExpression(): string;
    set minValueExpression(val: string);
    /**
     * The maximum value specified as an expression. For example, `"maxValueExpression": "today(1)"` sets the maximum value to tomorrow.
     */
    get maxValueExpression(): string;
    set maxValueExpression(val: string);
    /**
     * The list of question validators.
     */
    get validators(): Array<SurveyValidator>;
    set validators(val: Array<SurveyValidator>);
    getValidators(): Array<SurveyValidator>;
    /**
     * The item value.
     */
    get value(): any;
    set value(value: any);
    isEmpty(): boolean;
    onValueChanged(newValue: any): void;
    getSurveyData(): ISurveyData;
    getSurvey(): ISurvey;
    getTextProcessor(): ITextProcessor;
    getValue(name: string): any;
    setValue(name: string, value: any): void;
    getVariable(name: string): any;
    setVariable(name: string, newValue: any): void;
    getComment(name: string): string;
    setComment(name: string, newValue: string): void;
    getAllValues(): any;
    getFilteredValues(): any;
    getFilteredProperties(): any;
    findQuestionByName(name: string): IQuestion;
    getValidatorTitle(): string;
    get validatedValue(): any;
    set validatedValue(val: any);
    getDataFilteredValues(): any;
    getDataFilteredProperties(): any;
}
/**
 * A class that describes the Multiple Text question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-multipletext/ (linkStyle))
 */
export declare class QuestionMultipleTextModel extends Question implements IMultipleTextData, IPanel {
    static addDefaultItems(question: QuestionMultipleTextModel): void;
    constructor(name: string);
    getType(): string;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    get isAllowTitleLeft(): boolean;
    get hasSingleInput(): boolean;
    get isContainer(): boolean;
    get id(): string;
    set id(val: string);
    onSurveyLoad(): void;
    setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    onSurveyValueChanged(newValue: any): void;
    private updateItemsSize;
    private editorsOnSurveyLoad;
    private performForEveryEditor;
    /**
     * Gets or sets an array of `MultipleTextItemModel` objects that represent input items.
     *
     * This property accepts an array of objects with the following structure:
     *
     * ```js
     * {
     *   "name": any, // A unique value used to identify an input item and save an item value to survey results.
     *   "title": String // An item caption. When `title` is undefined, `name` is used. This property supports Markdown.
     * }
     * ```
     *
     * To enable Markdown support for the `title` property, implement Markdown-to-HTML conversion in the [onTextMarkdown](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onTextMarkdown) event handler. For an example, refer to the following demo: [Convert Markdown to HTML with Showdown](https://surveyjs.io/form-library/examples/edit-survey-questions-markdown/).
     * @see addItem
     */
    get items(): Array<MultipleTextItemModel>;
    set items(val: Array<MultipleTextItemModel>);
    /**
     * Adds a new input item.
     * @param name An item name
     * @param title (Optional) An item title
     * @see items
     */
    addItem(name: string, title?: string): MultipleTextItemModel;
    getItemByName(name: string): MultipleTextItemModel;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    protected collectNestedQuestionsCore(questions: Question[], visibleOnly: boolean): void;
    getConditionJson(operator?: string, path?: string): any;
    locStrsChanged(): void;
    localeChanged(): void;
    /**
     * Specifies the error message position relative to individual input fields.
     *
     * Possible values:
     *
     * - `"default"` (default) - Inherits the setting from the [`errorLocation`](#errorLocation) property.
     * - `"top"` - Displays error messages above input fields.
     * - `"bottom"` - Displays error messages below input fields.
     */
    get itemErrorLocation(): string;
    set itemErrorLocation(val: string);
    getQuestionErrorLocation(): string;
    get showItemErrorOnTop(): boolean;
    get showItemErrorOnBottom(): boolean;
    getChildErrorLocation(child: Question): string;
    protected isNewValueCorrect(val: any): boolean;
    supportGoNextPageAutomatic(): boolean;
    /**
     * The number of columns used to arrange input items. Accepts the following values: 1, 2, 3, 4, 5.
     *
     * Default value: 1
     */
    get colCount(): number;
    set colCount(val: number);
    /**
     * A value passed on to the [`size`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size) attribute of the underlying `<input>` elements.
     */
    get itemSize(): number;
    set itemSize(val: number);
    rows: Array<MutlipleTextRow>;
    protected onRowCreated(row: MutlipleTextRow): MutlipleTextRow;
    private calcVisibleRows;
    getRows(): Array<any>;
    private isMultipleItemValueChanging;
    protected onValueChanged(): void;
    protected createTextItem(name: string, title: string): MultipleTextItemModel;
    protected onItemValueChanged(): void;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    protected getIsRunningValidators(): boolean;
    hasErrors(fireCallback?: boolean, rec?: any): boolean;
    getAllErrors(): Array<SurveyError>;
    clearErrors(): void;
    protected getContainsErrors(): boolean;
    protected getIsAnswered(): boolean;
    getProgressInfo(): IProgressInfo;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    protected allowMobileInDesignMode(): boolean;
    getMultipleTextValue(name: string): any;
    setMultipleTextValue(name: string, value: any): void;
    getItemDefaultValue(name: string): any;
    getTextProcessor(): ITextProcessor;
    getAllValues(): any;
    getIsRequiredText(): string;
    addElement(element: IElement, index: number): void;
    removeElement(element: IElement): boolean;
    getQuestionTitleLocation(): string;
    getQuestionStartIndex(): string;
    getChildrenLayoutType(): string;
    elementWidthChanged(el: IElement): void;
    get elements(): Array<IElement>;
    indexOf(el: IElement): number;
    ensureRowsVisibility(): void;
    validateContainerOnly(): void;
    getItemLabelCss(item: MultipleTextItemModel): string;
    getItemCss(): string;
    getItemTitleCss(): string;
}
export declare class MutlipleTextRow extends Base {
    isVisible: boolean;
    cells: Array<MultipleTextCell>;
}
export declare class MutlipleTextErrorRow extends MutlipleTextRow {
    onAfterCreated(): void;
}
export declare class MultipleTextCell {
    item: MultipleTextItemModel;
    protected question: QuestionMultipleTextModel;
    constructor(item: MultipleTextItemModel, question: QuestionMultipleTextModel);
    isErrorsCell: boolean;
    protected getClassName(): string;
    get className(): string;
}
export declare class MultipleTextErrorCell extends MultipleTextCell {
    isErrorsCell: boolean;
    protected getClassName(): string;
}
