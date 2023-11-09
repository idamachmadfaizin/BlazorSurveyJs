import { Base, JsonObjectProperty, PanelModel, PanelModelBase, Question, SurveyModel, MatrixDynamicRowModel } from "survey-core";
import { ISurveyCreatorOptions } from "../creator-settings";
import { QuestionFileEditorModel } from "../custom-questions/question-file";
export interface IPropertyEditorSetup {
    editSurvey: SurveyModel;
    apply(): boolean;
}
export declare function setSurveyJSONForPropertyGrid(json: any, updateOnTyping?: boolean, titleLocationLeft?: boolean): void;
export declare abstract class PropertyEditorSetupValue implements IPropertyEditorSetup {
    protected options: ISurveyCreatorOptions;
    private editSurveyValue;
    constructor(options?: ISurveyCreatorOptions, doSetup?: boolean);
    protected setupSurvey(): void;
    get editSurvey(): SurveyModel;
    hasErrors(): boolean;
    protected createSurvey(): SurveyModel;
    protected abstract getSurveyJSON(): any;
    protected abstract getSurveyCreationReason(): string;
    abstract apply(): boolean;
    dispose(): void;
}
export interface IPropertyGridEditor {
    fit(prop: JsonObjectProperty, context?: string): boolean;
    isDefault?: () => boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
    showModalPropertyEditor?: (editor: IPropertyGridEditor, property: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions) => IPropertyEditorSetup;
    onCreated?: (obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions) => void;
    onSetup?: (obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions) => void;
    validateValue?: (obj: Base, question: Question, prop: JsonObjectProperty, val: any) => string;
    onAfterRenderQuestion?: (obj: Base, prop: JsonObjectProperty, evtOptions: any) => void;
    createPropertyEditorSetup?: (obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions) => IPropertyEditorSetup;
    isPropertyEditorSetupEnabled?: (obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions) => boolean;
    canClearPropertyValue?: (obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions) => boolean;
    clearPropertyValue?: (obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions) => void;
    onMasterValueChanged?: (obj: Base, prop: JsonObjectProperty, question: Question) => void;
    onAddIntoPropertyValue?: (obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions) => void;
    onMatrixCellCreated?: (obj: Base, options: any) => void;
    onMatrixCellValueChanged?: (obj: Base, options: any) => void;
    onMatrixAllowRemoveRow?: (obj: Base, row: any) => boolean;
    onGetQuestionTitleActions?: (obj: Base, options: any) => void;
    onUpdateQuestionCssClasses?: (obj: Base, options: any) => void;
}
export declare var PropertyGridEditorCollection: {
    editors: IPropertyGridEditor[];
    fitHash: {};
    clearHash(): void;
    register(editor: IPropertyGridEditor): void;
    getEditor(prop: JsonObjectProperty, context?: string): IPropertyGridEditor;
    isEditorFit(prop: JsonObjectProperty, asDefault?: boolean): IPropertyGridEditor;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions, context?: string): any;
    onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
    onSetup(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
    validateValue(obj: Base, question: Question, prop: JsonObjectProperty, value: any): string;
    onAfterRenderQuestion(obj: Base, prop: JsonObjectProperty, evtOptions: any): void;
    onMatrixCellCreated(obj: Base, prop: JsonObjectProperty, options: any): void;
    onMatrixCellValueChanged(obj: Base, prop: JsonObjectProperty, options: any): void;
    onMatrixAllowRemoveRow(obj: Base, prop: JsonObjectProperty, row: MatrixDynamicRowModel): boolean;
    onGetMatrixRowAction(obj: Base, prop: JsonObjectProperty, options: any, setObjFunc: (obj: Base) => void): void;
    onUpdateQuestionCssClasses(obj: Base, prop: JsonObjectProperty, options: any): void;
    onGetQuestionTitleActions(obj: Base, prop: JsonObjectProperty, options: any): void;
    onValueChanged(obj: Base, prop: JsonObjectProperty, question: Question): void;
    onMasterValueChanged(obj: Base, prop: JsonObjectProperty, question: Question): void;
};
export declare class PropertyGridTitleActionsCreator {
    obj: Base;
    private options;
    constructor(obj: Base, options: ISurveyCreatorOptions);
    onGetQuestionTitleActions(options: any): void;
    private createClearValueAction;
    private showModalPropertyEditor;
    private createEditorSetupAction;
    private createPropertyHelpAction;
    private getHelpActionIconName;
}
export declare class PropertyJSONGenerator {
    obj: Base;
    private options;
    private parentObj;
    private parentProperty;
    private properties;
    static isPropertyReadOnly(prop: JsonObjectProperty, options: ISurveyCreatorOptions, obj: Base, parentObj: Base, parentProperty: JsonObjectProperty): boolean;
    static getClassNameProperty(obj: Base): string;
    constructor(obj: Base, options?: ISurveyCreatorOptions, parentObj?: Base, parentProperty?: JsonObjectProperty, properties?: Array<JsonObjectProperty>);
    toJSON(isNested?: boolean, context?: string): any;
    createColumnsJSON(className: string, names: Array<string>): any;
    setupObjPanel(panel: PanelModelBase, isNestedObj?: boolean, context?: string): void;
    private onQuestionsCreated;
    private getVisibilityOnEvent;
    private isPropertyReadOnly;
    private createOverridingQuestion;
    private getClasPropName;
    private createJSON;
    private createPanelProps;
    private updateQuestionJSONOnSameLine;
    private createPanelJSON;
    private createQuestionJSON;
    private getColumnPropertyJSON;
    private isPropertyVisible;
    private getPanelTitle;
    private getQuestionTitle;
}
export declare class PropertyGridModel {
    private surveyValue;
    private objValue;
    private optionsValue;
    private titleActionsCreator;
    private classNameProperty;
    private classNameValue;
    currentlySelectedProperty: string;
    currentlySelectedPanel: PanelModel;
    objValueChangedCallback: () => void;
    changedFromActionCallback: (obj: Base, propertyName: string) => void;
    refresh(): void;
    constructor(obj?: Base, options?: ISurveyCreatorOptions);
    get obj(): Base;
    set obj(value: Base);
    selectProperty(propertyName: string, focus?: boolean): void;
    private setObjFromAction;
    private setObj;
    get options(): ISurveyCreatorOptions;
    set options(val: ISurveyCreatorOptions);
    get survey(): SurveyModel;
    validate(): boolean;
    collapseCategory(name: string): void;
    expandCategory(name: string): void;
    collapseAllCategories(): void;
    expandAllCategories(): void;
    protected createSurvey(json: any): SurveyModel;
    protected getSurveyJSON(): any;
    private validateQuestionValue;
    private getErrorTextOnValidate;
    private onValidateQuestion;
    private onValueChanging;
    private isPropNameInValid;
    private onValueChanged;
    private changeDependedProperties;
    private updateDependedPropertiesEditor;
    private updateDependedPropertiesEditors;
    private onAfterRenderQuestion;
    private isCellCreating;
    private onMatrixCellCreated;
    private onMatrixCellValueChanging;
    private onMatrixCellValidate;
    private onGetMatrixRowAction;
    private onUpdateQuestionCssClasses;
    private onGetQuestionTitleActions;
    private onMatrixCellValueChanged;
    private getMatrixAllowRemoveRow;
    private getMatrixOnRowRemoving;
    private getMatrixAllowEditRow;
    private calculateMatrixAllowOperations;
    private onMatrixAllowRemoveRow;
    private onMatrixRowAdded;
}
export declare abstract class PropertyGridEditor implements IPropertyGridEditor {
    constructor();
    abstract fit(prop: JsonObjectProperty): boolean;
    abstract getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
    showModalPropertyEditor(editor: IPropertyGridEditor, property: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions, onClose?: (reason: "apply" | "cancel") => void): IPropertyEditorSetup;
    protected onModalPropertyEditorShown(editor: IPropertyGridEditor, property: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): void;
    protected onModalPropertyEditorClosed(editor: IPropertyGridEditor, property: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions, reason: "apply" | "cancel"): void;
    isSupportGrouping(): boolean;
    private hasPreviousElementForGrouping;
    onUpdateQuestionCssClasses(obj: Base, options: any): void;
}
export declare class PropertyGridEditorBoolean extends PropertyGridEditor {
    fit(prop: JsonObjectProperty, context?: string): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
    isSupportGrouping(): boolean;
}
export declare abstract class PropertyGridEditorStringBase extends PropertyGridEditor {
    protected updateMaxLength(prop: JsonObjectProperty, json: any): any;
    protected updateType(prop: JsonObjectProperty, obj: Base, json: any): any;
    onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void;
}
export declare class PropertyGridEditorString extends PropertyGridEditorStringBase {
    fit(prop: JsonObjectProperty): boolean;
    isDefault(): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
}
export declare class PropertyGridLinkEditor extends PropertyGridEditor {
    fit(prop: JsonObjectProperty): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
    onCreated(obj: Base, question: QuestionFileEditorModel, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void;
}
export declare class PropertyGridEditorColor extends PropertyGridEditor {
    fit(prop: JsonObjectProperty): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
}
export declare class PropertyGridEditorNumber extends PropertyGridEditor {
    fit(prop: JsonObjectProperty): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
}
export declare class PropertyGridEditorImageSize extends PropertyGridEditorString {
    fit(prop: JsonObjectProperty): boolean;
    isDefault(): boolean;
    onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void;
}
export declare class PropertyGridEditorText extends PropertyGridEditorStringBase {
    fit(prop: JsonObjectProperty): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
}
export declare class PropertyGridEditorHtml extends PropertyGridEditorStringBase {
    fit(prop: JsonObjectProperty): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
}
export declare class PropertyGridEditorStringArray extends PropertyGridEditor {
    fit(prop: JsonObjectProperty): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
    onCreated(obj: Base, question: Question, prop: JsonObjectProperty): void;
}
export declare class PropertyGridEditorDropdown extends PropertyGridEditor {
    fit(prop: JsonObjectProperty): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
    private getChoices;
    private updateObjBasedOnEmptyValueItem;
    protected get canRenderAsButtonGroup(): boolean;
    protected renderAsButtonGroup(prop: JsonObjectProperty, choices: Array<any>): boolean;
    onCreated(obj: Base, question: Question, prop: JsonObjectProperty): void;
    onMasterValueChanged(obj: Base, prop: JsonObjectProperty, question: Question): void;
    private setChoicesCore;
    private isLocaleProp;
    private getLocalizedText;
    private choicesFromPropChoices;
    private getJsonItem;
    private setChoices;
    private getEmptyJsonItemValue;
}
export declare class PropertyGridEditorSet extends PropertyGridEditorDropdown {
    fit(prop: JsonObjectProperty): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
}
export declare class PropertyGridEditorPage extends PropertyGridEditorDropdown {
    fit(prop: JsonObjectProperty): boolean;
    protected get canRenderAsButtonGroup(): boolean;
    onCreated(obj: Base, question: Question, prop: JsonObjectProperty): void;
}
export declare class PropertyGridEditorQuestion extends PropertyGridEditor {
    fit(prop: JsonObjectProperty): boolean;
    getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any;
    private getChoices;
    protected getQuestions(survey: SurveyModel, obj: Base): Array<Question>;
    protected getItemValue(question: Question): any;
}
export declare class PropertyGridEditorQuestionSelectBase extends PropertyGridEditorQuestion {
    fit(prop: JsonObjectProperty): boolean;
    protected isQuestionFit(question: Question): boolean;
    protected getQuestions(survey: SurveyModel, obj: Base): Array<Question>;
}
export declare class PropertyGridEditorQuestionCarryForward extends PropertyGridEditorQuestionSelectBase {
    fit(prop: JsonObjectProperty): boolean;
    protected isQuestionFit(question: Question): boolean;
}
export declare class PropertyGridEditorQuestionValue extends PropertyGridEditorQuestion {
    fit(prop: JsonObjectProperty): boolean;
    protected getItemValue(question: Question): any;
    protected getQuestions(survey: SurveyModel, obj: Base): Array<Question>;
}
