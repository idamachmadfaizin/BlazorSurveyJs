import { Question, IConditionObject } from "./question";
import { ISurveyImpl, ISurveyData, ITextProcessor, IPanel, IElement, IQuestion, IProgressInfo } from "./base-interfaces";
import { SurveyElement } from "./survey-element";
import { PanelModel } from "./panel";
import { HashTable } from "./helpers";
import { ItemValue } from "./itemvalue";
/**
 * An interface used to create custom question types.
 *
 * Refer to the following articles for more information:
 *
 * - [Create Specialized Question Types](https://surveyjs.io/form-library/documentation/customize-question-types/create-specialized-question-types)
 * - [Create Composite Question Types](https://surveyjs.io/form-library/documentation/customize-question-types/create-composite-question-types)
 */
export interface ICustomQuestionTypeConfiguration {
    /**
     * A name used to identify a custom question type.
     *
     * @see title
     */
    name: string;
    /**
     * A title used for this custom question type in the UI. When `title` is not specified, the `name` property value is used.
     *
     * @see name
     */
    title?: string;
    /**
     * The name of an icon to use for the custom question type.
     *
     * [UI Icons](https://surveyjs.io/form-library/documentation/icons (linkStyle))
     */
    iconName?: string;
    /**
     * A function that is called when the custom question type is initialized. Use it to add, remove, or modify the type's properties (see [Override Base Question Properties](https://surveyjs.io/form-library/documentation/customize-question-types/create-composite-question-types#override-base-question-properties)).
     */
    onInit?(): void;
    /**
     * Specifies whether the custom question type is available in the Toolbox and the Add Question menu.
     *
     * Default value: `true`
     *
     * Set this property to `false` if your custom question type is used only to customize Property Grid content and is not meant for a survey.
     */
    showInToolbox?: boolean;
    /**
     * A function that is called when the custom question is created. Use it to access questions nested within a [composite question type](https://surveyjs.io/form-library/documentation/customize-question-types/create-composite-question-types).
     *
     * Parameters:
     *
     * - `question`: [Question](https://surveyjs.io/Documentation/Library?id=Question)\
     * The custom question.
     */
    onCreated?(question: Question): void;
    /**
     * A function that is called when JSON schemas are loaded.
     *
     * Parameters:
     *
     * - `question`: [Question](https://surveyjs.io/Documentation/Library?id=Question)\
     * A custom question.
     */
    onLoaded?(question: Question): void;
    /**
     * A function that is called after the entire question is rendered.
     *
     * Parameters:
     *
     * - `question`: [Question](https://surveyjs.io/Documentation/Library?id=Question)\
     * A custom question.
     * - `htmlElement`: `any`\
     * An HTML element that represents the custom question.
     */
    onAfterRender?(question: Question, htmlElement: any): void;
    /**
     * A function that is called each time a question nested within a [composite question](https://surveyjs.io/form-library/documentation/customize-question-types/create-composite-question-types) is rendered.
     *
     * Parameters:
     *
     * - `question`: [Question](https://surveyjs.io/Documentation/Library?id=Question)\
     * A composite question.
     * - `element`: [Question](https://surveyjs.io/Documentation/Library?id=Question)\
     * A nested question.
     * - `htmlElement`: `any`\
     * An HTML element that represents a nested question.
     */
    onAfterRenderContentElement?(question: Question, element: Question, htmlElement: any): void;
    /**
     * A function that is called each time a question nested within a [composite question](https://surveyjs.io/form-library/documentation/customize-question-types/create-composite-question-types) requires an update of its CSS classes.
     *
     * Parameters:
     *
     * - `question`: [Question](https://surveyjs.io/Documentation/Library?id=Question)\
     * A composite question.
     * - `element`: [Question](https://surveyjs.io/Documentation/Library?id=Question)\
     * A nested question.
     * - `cssClasses`: `any`\
     * An object with CSS classes applied to a nested question, for example, `{ root: "class1", button: "class2" }`. You can modify this object to apply custom CSS classes.
     */
    onUpdateQuestionCssClasses?(question: Question, element: Question, cssClasses: any): void;
    /**
     * A function that is called when a custom question type property is changed. Use it to handle property changes.
     *
     * Parameters:
     *
     * - `question`: [Question](https://surveyjs.io/Documentation/Library?id=Question)\
     * A custom question.
     * - `propertyName`: `string`\
     * The name of the changed property.
     * - `newValue`: `any`\
     * A new value for the property.
     */
    onPropertyChanged?(question: Question, propertyName: string, newValue: any): void;
    /**
     * A function that is called after the question value is changed.
     *
     * Parameters:
     *
     * - `question`: [Question](https://surveyjs.io/Documentation/Library?id=Question)\
     * A custom question.
     * - `name`: `string`\
     * The question's [name](https://surveyjs.io/Documentation/Library?id=Question#name).
     * - `newValue`: `any`\
     * A new value for the question.
     */
    onValueChanged?(question: Question, name: string, newValue: any): void;
    /**
     * A function that is called before a question value is changed.
     *
     * This function should return the value you want to save: `newValue`, a custom value, or `undefined` if you want to clear the question value.
     *
     * Parameters:
     *
     * - `question`: [Question](https://surveyjs.io/Documentation/Library?id=Question)\
     * A custom question.
     * - `name`: `string`\
     * The question's [name](https://surveyjs.io/Documentation/Library?id=Question#name).
     * - `newValue`: `any`\
     * A new value for the question.
     */
    onValueChanging?(question: Question, name: string, newValue: any): any;
    /**
     * A function that is called when an [ItemValue](https://surveyjs.io/Documentation/Library?id=itemvalue) property is changed.
     *
     * Parameters:
     *
     * - `question`: [Question](https://surveyjs.io/Documentation/Library?id=Question)\
     * A custom question.
     * - `options.obj`: [ItemValue](https://surveyjs.io/Documentation/Library?id=itemvalue)\
     * An `ItemValue` object.
     * - `options.propertyName`: `string`\
     * The name of the property to which an array of `ItemValue` objects is assigned (for example, `"choices"` or `"rows"`).
     * - `options.name`: `string`\
     * The name of the changed property: `"text"` or `"value"`.
     * - `options.newValue`: `any`\
     * A new value for the property.
     */
    onItemValuePropertyChanged?(question: Question, options: {
        obj: ItemValue;
        propertyName: string;
        name: string;
        newValue: any;
    }): void;
    /**
     * A function that allows you to override the default `getDisplayValue()` implementation.
     */
    getDisplayValue?: ((keyAsText: boolean, value: any) => any) | ((question: Question) => any);
    /**
     * JSON schemas of nested questions. Specify this property to create a [composite question type](https://surveyjs.io/form-library/documentation/customize-question-types/create-composite-question-types).
     */
    elementsJSON?: any;
    /**
     * A function that allows you to create nested questions if you do not specify the `elementsJSON` property.
     *
     * @see elementsJSON
     */
    createElements?: any;
    /**
     * A JSON schema for a built-in question type on which the custom question type is based.
     *
     * Refer to the [Create Specialized Question Types](https://surveyjs.io/form-library/documentation/customize-question-types/create-specialized-question-types) help topic for more information.
     */
    questionJSON?: any;
    /**
     * A function that allows you to create a custom question if you do not specify the `questionJSON` property.
     *
     * @see questionJSON
     */
    createQuestion?: any;
    valueToQuestion?: (val: any) => any;
    valueFromQuestion?: (val: any) => any;
    getValue?: (val: any) => any;
    setValue?: (val: any) => any;
}
export declare class ComponentQuestionJSON {
    name: string;
    json: ICustomQuestionTypeConfiguration;
    constructor(name: string, json: ICustomQuestionTypeConfiguration);
    onInit(): void;
    onCreated(question: Question): void;
    onLoaded(question: Question): void;
    onAfterRender(question: Question, htmlElement: any): void;
    onAfterRenderContentElement(question: Question, element: Question, htmlElement: any): void;
    onUpdateQuestionCssClasses(question: Question, element: Question, css: any): void;
    onPropertyChanged(question: Question, propertyName: string, newValue: any): void;
    onValueChanged(question: Question, name: string, newValue: any): void;
    onValueChanging(question: Question, name: string, newValue: any): any;
    onItemValuePropertyChanged(question: Question, item: ItemValue, propertyName: string, name: string, newValue: any): void;
    getDisplayValue(keyAsText: boolean, value: any, question: Question): any;
    setValueToQuestion(val: any): any;
    getValueFromQuestion(val: any): any;
    get isComposite(): boolean;
}
export declare class ComponentCollection {
    static Instance: ComponentCollection;
    private customQuestionValues;
    onCreateComposite: (name: string, questionJSON: ComponentQuestionJSON) => QuestionCompositeModel;
    onCreateCustom: (name: string, questionJSON: ComponentQuestionJSON) => QuestionCustomModel;
    onAddingJson: (name: string, isComposite: boolean) => void;
    add(json: ICustomQuestionTypeConfiguration): void;
    get items(): Array<ComponentQuestionJSON>;
    getCustomQuestionByName(name: string): ComponentQuestionJSON;
    clear(): void;
    createQuestion(name: string, questionJSON: ComponentQuestionJSON): Question;
    protected createCompositeModel(name: string, questionJSON: ComponentQuestionJSON): QuestionCompositeModel;
    protected createCustomModel(name: string, questionJSON: ComponentQuestionJSON): QuestionCustomModel;
}
export declare abstract class QuestionCustomModelBase extends Question implements ISurveyImpl, ISurveyData, IPanel {
    customQuestion: ComponentQuestionJSON;
    constructor(name: string, customQuestion: ComponentQuestionJSON);
    getType(): string;
    locStrsChanged(): void;
    protected createWrapper(): void;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    itemValuePropertyChanged(item: ItemValue, name: string, oldValue: any, newValue: any): void;
    onFirstRendering(): void;
    onHidingContent(): void;
    getProgressInfo(): IProgressInfo;
    protected abstract getElement(): SurveyElement;
    protected initElement(el: SurveyElement): void;
    protected isSettingValOnLoading: boolean;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    onSurveyLoad(): void;
    afterRenderQuestionElement(el: HTMLElement): void;
    afterRenderCore(el: any): void;
    protected onUpdateQuestionCssClasses(element: Question, css: any): void;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    protected setNewValue(newValue: any): void;
    getSurveyData(): ISurveyData;
    getTextProcessor(): ITextProcessor;
    getValue(name: string): any;
    setValue(name: string, newValue: any, locNotification: any, allowNotifyValueChanged?: boolean): any;
    protected getQuestionByName(name: string): IQuestion;
    protected isValueChanging(name: string, newValue: any): boolean;
    protected convertDataName(name: string): string;
    protected convertDataValue(name: string, newValue: any): any;
    getVariable(name: string): any;
    setVariable(name: string, newValue: any): void;
    getComment(name: string): string;
    setComment(name: string, newValue: string, locNotification: any): any;
    getAllValues(): any;
    getFilteredValues(): any;
    getFilteredProperties(): any;
    findQuestionByName(name: string): IQuestion;
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
    getQuestionErrorLocation(): string;
    protected getContentDisplayValueCore(keyAsText: boolean, value: any, question: Question): any;
}
export declare class QuestionCustomModel extends QuestionCustomModelBase {
    private questionWrapper;
    getTemplate(): string;
    protected createWrapper(): void;
    protected getElement(): SurveyElement;
    onAnyValueChanged(name: string, questionName: string): void;
    protected getQuestionByName(name: string): IQuestion;
    setValue(name: string, newValue: any, locNotification: any, allowNotifyValueChanged?: boolean): any;
    protected onSetData(): void;
    hasErrors(fireCallback?: boolean, rec?: any): boolean;
    focus(onError?: boolean): void;
    afterRenderCore(el: any): void;
    get contentQuestion(): Question;
    protected createQuestion(): Question;
    onSurveyLoad(): void;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    protected convertDataName(name: string): string;
    protected convertDataValue(name: string, newValue: any): any;
    protected getContentQuestionValue(): any;
    protected setContentQuestionValue(val: any): void;
    protected canSetValueToSurvey(): boolean;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    onSurveyValueChanged(newValue: any): void;
    protected getValueCore(): any;
    protected initElement(el: SurveyElement): void;
    updateElementCss(reNew?: boolean): void;
    protected updateElementCssCore(cssClasses: any): void;
    protected getDisplayValueCore(keyAsText: boolean, value: any): any;
}
export declare class QuestionCompositeModel extends QuestionCustomModelBase {
    customQuestion: ComponentQuestionJSON;
    static ItemVariableName: string;
    private panelWrapper;
    private textProcessing;
    constructor(name: string, customQuestion: ComponentQuestionJSON);
    protected createWrapper(): void;
    getTemplate(): string;
    protected getElement(): SurveyElement;
    protected getCssRoot(cssClasses: any): string;
    get contentPanel(): PanelModel;
    hasErrors(fireCallback?: boolean, rec?: any): boolean;
    updateElementCss(reNew?: boolean): void;
    getTextProcessor(): ITextProcessor;
    findQuestionByName(name: string): IQuestion;
    protected clearValueIfInvisibleCore(reason: string): void;
    onAnyValueChanged(name: string, questionName: string): void;
    get hasSingleInput(): boolean;
    get isContainer(): boolean;
    protected createPanel(): PanelModel;
    protected onReadOnlyChanged(): void;
    onSurveyLoad(): void;
    private setIsContentElement;
    setVisibleIndex(val: number): number;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    getValue(name: string): any;
    protected getQuestionByName(name: string): IQuestion;
    private settingNewValue;
    setValue(name: string, newValue: any, locNotification: any, allowNotifyValueChanged?: boolean): any;
    private updateValueCoreWithPanelValue;
    private getContentPanelValue;
    private getValueForContentPanel;
    private setNewValueIntoQuestion;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    protected collectNestedQuestionsCore(questions: Question[], visibleOnly: boolean): void;
    protected convertDataValue(name: string, newValue: any): any;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    private setValuesIntoQuestions;
    protected getDisplayValueCore(keyAsText: boolean, value: any): any;
    private setAfterRenderCallbacks;
}
