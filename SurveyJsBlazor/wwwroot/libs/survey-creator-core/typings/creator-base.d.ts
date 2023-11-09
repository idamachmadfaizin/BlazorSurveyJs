import { Base, SurveyModel, Question, PageModel, IElement, JsonObjectProperty, ActionContainer, AdaptiveActionContainer, IAction, Action, IPanel, SurveyElement, ItemValue, QuestionSelectBase, LocalizableString, ILocalizableString, ILocalizableOwner, PopupBaseViewModel, EventBase, Event, MatrixDropdownColumn, ISurveyElement, ITheme } from "survey-core";
import { ISurveyCreatorOptions, ICollectionItemAllowOperations } from "./creator-settings";
import { DragDropChoices } from "survey-core";
import { QuestionToolbox, QuestionToolboxItem } from "./toolbox";
import { PropertyGridModel } from "./property-grid";
import { ICreatorSelectionOwner } from "./selection-owner";
import { SelectionHistory } from "./selection-history";
import { SurveyLogic } from "./components/tabs/logic";
import { Notifier } from "survey-core";
import { UndoRedoManager } from "./plugins/undo-redo/undo-redo-manager";
import { UndoRedoController } from "./plugins/undo-redo/undo-redo-controller";
import { SidebarModel } from "./components/side-bar/side-bar-model";
import { ICreatorOptions } from "./creator-options";
import { DragDropSurveyElements } from "./survey-elements";
import { PageAdorner } from "./components/page";
export interface IKeyboardShortcut {
    name?: string;
    affectedTab?: string;
    hotKey: {
        ctrlKey?: boolean;
        keyCode: number;
    };
    macOsHotkey?: {
        shiftKey?: boolean;
        keyCode: number;
    };
    execute: (context: any) => void;
}
export interface ICreatorPlugin {
    activate: () => void;
    update?: () => void;
    deactivate?: () => boolean;
    canDeactivateAsync?: (onSuccess: () => void) => void;
    defaultAllowingDeactivate?: () => boolean | undefined;
    dispose?: () => void;
    onDesignerSurveyPropertyChanged?: (obj: Base, propName: string) => void;
    model: Base;
}
export declare class CreatorAction extends Action {
}
export interface ITabbedMenuItem extends IAction {
    componentContent: string;
    renderTab?: () => any;
}
export declare class TabbedMenuItem extends Action implements ITabbedMenuItem {
    constructor(item: ITabbedMenuItem);
    componentContent: string;
    renderTab?: () => any;
}
export declare class TabbedMenuContainer extends AdaptiveActionContainer<TabbedMenuItem> {
    constructor();
}
export declare class ToolbarActionContainer extends ActionContainer {
    private creator;
    constructor(creator: CreatorBase);
    protected getRenderedActions(): Array<Action>;
}
export declare type toolboxLocationType = "left" | "right" | "sidebar";
export declare class CreatorEvent extends EventBase<CreatorBase, any> {
}
/**
 * Base class for Survey Creator.
 */
export declare class CreatorBase extends Base implements ISurveyCreatorOptions, ICreatorSelectionOwner, ILocalizableOwner {
    protected options: ICreatorOptions;
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    getLocale(): string;
    /**
     * Specifies whether to display the Designer tab.
     *
     * Default value: `true`
     * @see activeTab
     * @see onDesignerSurveyCreated
     */
    showDesignerTab: boolean;
    /**
     * Specifies whether to display the JSON Editor tab.
     *
     * Default value: `true`
     * @see activeTab
     */
    showJSONEditorTab: boolean;
    showTestSurveyTab: boolean;
    /**
     * Specifies whether to display the Preview tab.
     *
     * Default value: `true`
     * @see activeTab
     * @see onPreviewSurveyCreated
     */
    get showPreviewTab(): boolean;
    set showPreviewTab(val: boolean);
    /**
     * Specifies whether to display the Themes tab.
     *
     * Default value: `false`
     * @see activeTab
     * @see saveThemeFunc
     */
    showThemeTab: boolean;
    /**
     * Specifies whether to display the Translation tab.
     *
     * Default value: `false`
     * @see activeTab
     */
    showTranslationTab: boolean;
    /**
     * Specifies whether to display the Logic tab.
     *
     * Default value: `false`
     * @see activeTab
     */
    showLogicTab: boolean;
    useTableViewInLogicTab: boolean;
    pageHoverDelay: number;
    /**
     * Allows users to edit choice values instead of choice texts on the design surface.
     *
     * Default value: `false` (users edit choice texts)
     *
     * If you enable this property, users cannot edit choice texts because the Property Grid hides the Text column for choices, rate values, columns and rows in [Single-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model), and rows in [Multi-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) questions.
     * @see showObjectTitles
     */
    inplaceEditForValues: boolean;
    get allowEditSurveyTitle(): boolean;
    set allowEditSurveyTitle(val: boolean);
    /**
     * Specifies whether users can see and edit the survey header and related survey properties.
     *
     * Default value: `true`
     */
    get showSurveyTitle(): boolean;
    set showSurveyTitle(val: boolean);
    get haveCommercialLicense(): boolean;
    set haveCommercialLicense(val: boolean);
    get licenseText(): string;
    /**
     * Specifies whether to automatically save a survey or theme JSON schema each time survey or theme settings are changed.
     *
     * Default value: `false`
     *
     * If you enable this property, Survey Creator calls the [`saveSurveyFunc`](#saveSurveyFunc) or [`saveThemeFunc`](#saveThemeFunc) function to save the survey or theme JSON schema. The schemas are saved with a 500-millisecond delay after users change settings. You can specify the [`autoSaveDelay`](#autoSaveDelay) property to increase or descrease the delay.
     */
    isAutoSave: boolean;
    showOptions: boolean;
    showSearch: boolean;
    generateValidJSON: boolean;
    currentAddQuestionType: string;
    /**
     * Specifies the orientation of the selected device in the Preview tab.
     *
     * Possible values:
     * - `"landscape"` (default)
     * - `"portrait"`
     */
    previewOrientation: "landscape" | "portrait";
    set startEditTitleOnQuestionAdded(value: boolean);
    get startEditTitleOnQuestionAdded(): boolean;
    private startEditTitleOnQuestionAddedValue;
    private isRTLValue;
    private alwaySaveTextInPropertyEditorsValue;
    private toolbarValue;
    private responsivityManager;
    footerToolbar: ActionContainer;
    private changePageModifications;
    private pageEditModeValue;
    /**
     * Specifies how Survey Creator users edit survey pages.
     *
     * Accepted values:
     *
     * - `"standard"` (default)
     * Questions and panels are divided between pages. Users can scroll the design surface to reach a required page.
     *
     * - `"single"`
     * All questions and panels belong to a single page. Users cannot add or remove pages.
     *
     * - `"bypage"`
     * Questions and panels are divided between pages. Users can use the page navigator to switch to a required page.
     * @see allowModifyPages
     */
    get pageEditMode(): "standard" | "single" | "bypage";
    set pageEditMode(val: "standard" | "single" | "bypage");
    surveyValue: SurveyModel;
    get toolbarItems(): Array<Action>;
    get toolbar(): ActionContainer;
    dragDropSurveyElements: DragDropSurveyElements;
    dragDropChoices: DragDropChoices;
    private selectedElementValue;
    private newQuestions;
    private newPanels;
    private newQuestionChangedNames;
    private selectionHistoryControllerValue;
    private saveSurveyFuncValue;
    private saveThemeFuncValue;
    viewType: string;
    get showingViewName(): string;
    get isDesignerShowing(): boolean;
    showDesigner(): void;
    get isTestSurveyShowing(): boolean;
    get isPreviewShowing(): boolean;
    showTestSurvey(): void;
    showPreview(): void;
    protected plugins: {
        [name: string]: ICreatorPlugin;
    };
    addPluginTab(name: string, plugin: ICreatorPlugin, title?: string, componentContent?: string, index?: number): void;
    addPlugin(name: string, plugin: ICreatorPlugin): void;
    getPlugin<P extends ICreatorPlugin = ICreatorPlugin>(name: string): P;
    /**
     * An event that is raised before a survey element (a question, panel, or page) is deleted.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.element`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * A survey element to be deleted.
     * - `options.elementType`: `"question"` | `"panel"` | `"page"`\
     * The element type.
     * - `options.allowing`: `boolean`\
     * A Boolean property that you can set to `false` if you want to cancel element deletion.
     * @see deleteElement
     */
    onElementDeleting: CreatorEvent;
    /**
     * An event that is raised when Survey Creator sets the read-only status for a survey element property. Use this event to change the read-only status for individual properties.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.property`: `JsonObjectProperty`\
     * A property whose read-only status you can change.
     * - `options.parentProperty`: `JsonObjectProperty`\
     * A property that nests `options.property` (`choices` for an item value, `columns` for a matrix column, `rows` for a matrix row etc.). `options.parentProperty` has a value only for nested properties.
     * - `options.obj`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * A survey element (question, panel, page, or the survey itself) for which you can change the read-only status.
     * - `options.parentObj`: `any`\
     * A survey element that contains `options.parentProperty`. `options.parentObj` has a value only for nested properties.
     * - `options.readOnly`: `boolean`\
     * A Boolean value that specifies the property's read-only status.
     */
    onGetPropertyReadOnly: CreatorEvent;
    /**
     * The event is fired when the survey creator creates a survey object (Survey.Survey).
     *- sender the survey creator object that fires the event
     *- options.survey the survey object showing in the creator.
     *- options.reason indicates what component of the creator requests the survey. There are several reason types: "designer" - survey for designer survey, "test" - survey for "Preview" tab and "conditionEditor", "defaultValueEditor", "restfulEditor" - surveys for different property editors.
     */
    onSurveyInstanceCreated: CreatorEvent;
    /**
     * An event that is raised when Survey Creator obtains a survey element name to display it in the UI.
     *
     * Handle this event to replace survey element names in the UI with custom display texts. If you only want to replace the names with survey element titles, enable the [`showObjectTitles`](https://surveyjs.io/survey-creator/documentation/surveycreator#showObjectTitles) property instead of handling this event.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.element`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * A survey element (survey, page, question, or panel) whose name has been requested.
     * - `options.area`: `string`\
     * A Survey Creator UI element that requests the display name. Contains one of the following values:
     *   - `"page-selector"` - Page selector on the design surface
     *   - `"condition-editor"` - Condition pop-up window or drop-down menus that allow users to select questions in the Logic tab
     *   - `"logic-tab:question-filter"` - Question filter in the Logic tab
     *   - `"logic-tab:question-selector"` - Question selector on editing actions in the Logic tab
     *   - `"preview-tab:page-list"` - Page list in the Preview tab
     *   - `"preview-tab:selected-page"` - Selected page name in the Preview tab
     *   - `"property-grid:property-editor"` - Property editors in the Property Grid
     *   - `"property-grid-header:element-list"` - Survey element list in the header of the Property Grid
     *   - `"property-grid-header:selected-element"` - Selected survey element in the header of the Property Grid
     *   - `"translation-tab"` - Translation tab
     * - `options.displayName`: `string`\
     * A survey element's display text. Modify this property to set a custom display text for the survey element.
     */
    onGetObjectDisplayName: CreatorEvent;
    /**
     * This event is raised after a user has edited a text value on the design surface. This value may include HTML markup. You can handle the `onHtmlToMarkdown` event to convert the HTML markup to Markdown.
     *
     * The event handler accepts the following arguments:
     *
     * - `sender` - A Survey Creator instance that raised the event.
     * - `options.element` - The instance of a survey element (survey, page, panel, question) that the user configures.
     * - `options.name` - The name of a property whose value has been edited.
     * - `options.html` - HTML content. Pass this field's value to an HTML-to-Markdown converter.
     * - `options.text` - A text string that may contain Markdown. Assign the result of the HTML-to-Markdown conversion to this field.
     */
    onHtmlToMarkdown: CreatorEvent;
    /**
     * An event that is raised when Survey Creator obtains permitted operations for a survey element. Use this event to disable user interactions with a question, panel, or page on the design surface.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.obj`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * A survey element (question or panel) for which you can disable user interactions.
     * - `options.allowChangeRequired`: `boolean`\
     * Allows users to mark the survey element as required.
     * - `options.allowChangeType`: `boolean`\
     * Allows users to change the survey element type.
     * - `options.allowChangeInputType`: `boolean`\
     * Allows users to change the [`inputType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#inputType) property of Single-Line Input questions.
     * - `options.allowCopy`: `boolean`\
     * Allows users to duplicate the survey element.
     * - `options.allowDelete`: `boolean`\
     * Allows users to delete the survey element.
     * - `options.allowDragging`: `boolean`\
     * Allows users to drag and drop the survey element.
     * - `options.allowEdit`: `boolean`\
     * Allows users to edit survey element properties on the design surface. If you disable this property, users can edit the properties only in the Property Grid.
     *
     * To disable a user interaction, set the correponding `allow...` property to `false`.
     *
     * [Specify Adorner Visibility](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#specify-adorner-availability (linkStyle))
     */
    onElementAllowOperations: CreatorEvent;
    /**
     * An event that is raised when Survey Creator obtains [adorners](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#specify-adorner-availability) for a survey element. Use this event to hide and modify predefined adorners or add a custom adorner.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.obj`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * A survey element (question, panel, or page) whose adorners you can customize.
     * - `options.items`: [`IAction[]`](https://surveyjs.io/form-library/documentation/api-reference/iaction#title)\
     * An array of adorner actions. You can add, modify, or remove actions from this array.
     *
     * [View Demo](https://surveyjs.io/survey-creator/examples/create-custom-adorners/ (linkStyle))
     * @see onElementAllowOperations
     * @see onGetPageActions
     */
    onDefineElementMenuItems: CreatorEvent;
    /**
     * An event that is raised when Survey Creator adds properties to a survey element selected on the design surface. Handle this event if you cancel the addition of certain properties and thus [hide them from the Property Grid](https://surveyjs.io/survey-creator/documentation/property-grid-customization#hide-properties-from-the-property-grid).
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.property`: `JsonObjectProperty`\
     * A property being added.
     * - `options.parentProperty`: `JsonObjectProperty`\
     * A property that nests `options.property` (`choices` for an item value, `columns` for a matrix column, `rows` for a matrix row etc.). `options.parentProperty` has a value only for nested properties.
     * - `options.obj`: `any`\
     * A survey element that contains `options.property`: page, panel, question, the survey itself, item value (choice option), matrix column, etc.
     * - `options.parentObj`: `any`\
     * A survey element that contains `options.parentProperty`. `options.parentObj` has a value only for nested properties.
     * - `options.canShow`: `boolean`\
     * A Boolean property that you can set to `false` if you do not want to add the property.
     *
     * [View Demo](https://surveyjs.io/survey-creator/examples/hide-category-from-property-grid/ (linkStyle))
     */
    onShowingProperty: CreatorEvent;
    onCanShowProperty: CreatorEvent;
    /**
     * The event is called after a survey that represents the Property Grid is created and all its questions (property editors) are setup.
     * You can use this event to modify this survey to change the property grid behavior
     *- options.obj the survey object that is currently editing in the property grid
     *- options.survey the property grid survey
     */
    onPropertyGridSurveyCreated: CreatorEvent;
    /**
      * The event is called after a property editor (in fact a survey question) has been created and all it's properties have been assign.
      * You can use this event to modify the property editor properties or set event handlers to customize it's behavior
      *- options.obj the survey object that is currently editing in the property grid
      *- options.property the property that the current property editor is editing
      *- options.editor the property editor. In fact it is a survey question. We are using a heavily customizable survey as a property grid in Creator V2. It means that every property editor is a question.
      */
    onPropertyEditorCreated: CreatorEvent;
    /**
     * The event is called after a property editor setups its title actions.
     * You can use this event to modify the property editor title actions
     *- options.obj the survey object that is currently editing in the property grid
     *- options.property the property that the current property editor is editing
     *- options.editor the property editor. In fact it is a survey question. We are using a heavily customizable survey as a property grid in Creator V2. It means that every property editor is a question.
     *- options.titleActions the list of title actions.
     */
    onPropertyEditorUpdateTitleActions: CreatorEvent;
    /**
     * An event that is raised before Survey Creator displays a pop-up window called from the Property Grid. This window allows users to edit choices, conditions, and so on.
     *
     * Use this event to customize the pop-up window, for example, add custom action buttons.
     *
     * Parameters:
     *
     * - `sender` - A Survey Creator instance that raised the event.
     * - `options.obj` - An instance of a survey element (question or panel) that users are configuring in the Property Grid.
     * - `options.property`- A `JsonObjectProperty` object with metadata about the property being edited.
     * - `options.editor` - A property editor. It is an object of the [`Question`](https://surveyjs.io/form-library/documentation/question) type because the Property Grid is [built upon a regular survey](https://surveyjs.io/survey-creator/documentation/creator-v2-whats-new#survey-creator-ui-elements-are-surveys).
     * - `options.popupEditor` - An editor inside the pop-up window.
     * - `options.popupModel` - A `PopupBaseViewModel` object that describes the pop-up window model. Use `options.popupModel.footerToolbar` to access the actions at the bottom of the window.
     */
    onPropertyGridShowModal: CreatorEvent;
    onCanDeleteItem: CreatorEvent;
    onCollectionItemDeleting: CreatorEvent;
    /**
     * The event is called before rendering a collection item in a property editor. For example: a column in a column editor, or an item in Choices and so on.
     * Use this event to prevent a collection item from being edited or removed from a collection.
     *- sender the survey creator object that fires the event
     *- options.obj the survey object: Question, Panel, Page or Survey
     *- options.property the collection property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
     *- options.propertyName the collection property name
     *- options.collection a collection where a target item is located. It is can be Columns in Matrices or Choices in Dropdown question and so on.
     *- options.item a target collection item
     *- options.allowDelete a boolean value. It is `true` by default. Set it false to prevent an item from being removed from the collection
     *- options.allowAdd a boolean value. It is `true` by default. Set it false to prevent an item from being added to the collection
     *- options.allowEdit a boolean value. It is `true` by default. Set it `false` to disable editing.
     */
    onCollectionItemAllowOperations: CreatorEvent;
    /**
      * The event is called on adding a new Survey.ItemValue object. It uses as an element in choices array in Radiogroup, checkbox and dropdown questions or Matrix columns and rows properties.
      * Use this event, to set ItemValue.value and ItemValue.text properties by default or set a value to the custom property.
      *- sender the survey creator object that fires the event
      *- options.obj the object that contains the itemsValues array, for example selector, rating and single choice matrix questions.
      *- options.propertyName  the object property Name. It can be "choices" for selector questions or rateValues for rating question or columns/rows for single choice matrix.
      *- options.newItem a new created Survey.ItemValue object.
      *- options.itemValues an editing Survey.ItemValue array. newItem object is not added yet into this array.
      */
    onItemValueAdded: CreatorEvent;
    /**
     * The event is called when a user adds a new column into MatrixDropdown or MatrixDynamic questions. Use it to set some properties of Survey.MatrixDropdownColumn by default, for example name or a custom property.
     *- sender the survey creator object that fires the event
     *- options.matrix a matrix question where column is located, matrix.columns.
     *- options.newColumn a new created Survey.MatrixDropdownColumn object.
     *- options.columns editable columns objects. They can be different from options.matrix.columns. options.columns and options.matrix.columns are equal after user press Apply or Cancel and options.columns will be set to options.matrix.columns or reset to initial state.
     */
    onMatrixColumnAdded: CreatorEvent;
    /**
     * Use this event to control Property Editors UI.
     *- sender the survey creator object that fires the event
     *- options.obj the survey object which property is edited in the Property Editor.
     *- options.propertyName  the name of the edited property.
     *- options.editorOptions  options that can be changed.
     *- options.editorOptions.allowAddRemoveItems a boolean property, true by default. Set it false to disable add/remove items in array properties. For example 'choices', 'columns', 'rows'.
     *- options.editorOptions.allowRemoveAllItems a boolean property, true by default. Set it false to disable remove all items in array properties. For example 'choices', 'columns', 'rows'.
     *- options.editorOptions.allowBatchEdit a boolean property, true by default. Set it false to hide the "Edit" button for the "choices" property.
     *- options.editorOptions.itemsEntryType a string property, 'form' by default. Set it 'fast' to show "Manual Entry" tab for "choices" property by default.
     */
    onSetPropertyEditorOptions: CreatorEvent;
    /**
     * The event is called on generation a new name for a new created element.
     *- sender the survey creator object that fires the event
     *- options.element a new created survey element. It can be question, panel or page
     *- options.name a new suggested name, that is unique for the current survey. You can suggest your own name. If it is unique, creator will assign it to the element.
     */
    onGenerateNewName: CreatorEvent;
    /**
     * An event that is raised when Survey Creator validates a modified value of a survey element property. Use this event to display a custom error message when the value is incorrect.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.obj`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * A survey element (survey, page, panel, question) whose property is being validated.
     * - `options.propertyName`: `string`\
     * The name of a property being validated.
     * - `options.value`: `any`\
     * The property value.
     * - `options.error`: `string`\
     * An error message you want to display. If `options.value` is valid, this parameter contains an empty string.
     * @see onPropertyValueChanging
     * @see onSurveyPropertyValueChanged
     */
    onPropertyValidationCustomError: CreatorEvent;
    /**
     * An event that is raised each time a user modifies a survey element property. Use this event to validate or correct a property value while the user changes it.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.obj`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * A survey element (question, panel, page, or the survey itself) whose property is being edited.
     * - `options.propertyName`: `string`\
     * The name of a property being modified.
     * - `options.value`: `any`\
     * An old property value.
     * - `options.newValue`: `any`\
     * A new property value. Modify this parameter if you want to override the property value.
     * @see onPropertyValidationCustomError
     * @see onSurveyPropertyValueChanged
     */
    onPropertyValueChanging: CreatorEvent;
    /**
     * An event that is raised after a survey element property has changed.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.obj`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * A survey element (question, panel, page, or the survey itself) whose property is has changed.
     * - `options.propertyName`: `string`\
     * The name of the modified property.
     * - `options.value`: `any`\
     * A new property value.
     * @see onPropertyValidationCustomError
     * @see onPropertyValueChanging
     */
    onSurveyPropertyValueChanged: CreatorEvent;
    /**
      * Use this event to modify the list (name and titles) of the questions available in a condition editor.
      *- sender the survey creator object that fires the event
      *- options.obj the survey object which property is edited in the Property Editor.
      *- options.propertyName  the name of the edited property.
      *- options.editor the instance of Property Editor.
      *- options.list the list of the questions available for condition
      *- options.sortOrder "asc" (default) | "none". Change it to "none", if you don't want to sort your condition list
      */
    onConditionQuestionsGetList: CreatorEvent;
    /**
     * Use this event to modify the title in a condition editor. The title is changing during editing. In case of empty or incorrect expression it tells that expression is incorrect
     *- sender the survey creator object that fires the event.
     *- options.expression the current expression. If the expression is empty or incorrect then the value is empty.
     *- options.title the default value of the title. You can change the default value.
     */
    onConditionGetTitle: CreatorEvent;
    /**
     * An event that is raised when Survey Creator populates a condition editor with operators. Use this event to hide individual condition operators.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.questionName`: `string`\
     * The name of a question for which conditions are displayed.
     * - `options.questionName`: `string`\
     * The name of a question for which conditions are displayed.
     * - `options.operator`: `"empty"` | `"notempty"` | `"equal"` | `"notequal"` | `"contains"` | `"notcontains"` | `"anyof"` | `"allof"` | `"greater"` | `"less"` | `"greaterorequal"` | `"lessorequal"`\
     * A condition opeator for which the event is raised.
     * - `options.show`: `boolean`\
     * A Boolean property that you can set to `false` if you want to hide the condition operator.
     *
     */
    onGetConditionOperator: CreatorEvent;
    /**
     * Use this event to modify the display text of a logic item in the Logic tab.
     *
     * The event handler accepts the following arguments:
     *
     * - `sender` - A Survey Creator instance that raised the event.
     * - `options.expression` - A logical expression associated with the logic item.
     * - `options.expressionText` - The same expression in a user-friendly format. It may contain question titles instead of question names.
     * - `options.logicItem` - A logic item object. Contains an array of actions and other properties.
     * - `options.text` - The expression and actions in a user-friendly format. Redefine this property if you want to change the display text.
     */
    onLogicItemDisplayText: CreatorEvent;
    /**
      * An event that is raised when users modify survey or theme settings.
      *
      * Parameters:
      *
      * - `sender`: `CreatorBase`\
      * A Survey Creator instance that raised the event.
      *
      * - `options.type`: `"ADDED_FROM_TOOLBOX"` | `"PAGE_ADDED"` | `"PAGE_MOVED"` | `"QUESTION_CONVERTED"` | `"QUESTION_CHANGED_BY_EDITOR"` | `"PROPERTY_CHANGED"` | `"ELEMENT_REORDERED"` | `"OBJECT_DELETED"` | `"VIEW_TYPE_CHANGED"` | `"DO_DROP"` | `"TRANSLATIONS_CHANGED"` | `"JSON_EDITOR"` | `"THEME_MODIFIED"`\
      * A value that indicates the modification.
      *
      * Depending on the `options.type` value, the `options` object contains parameters listed below:
      *
      * `options.type`: `"ADDED_FROM_TOOLBOX"`
      * - `options.question` - An added question.
      *
      * `options.type`: `"PAGE_ADDED"`
      * - `options.newValue` - An added page.
      *
      * `options.type`: `"PAGE_MOVED"`
      * - `options.page` - A moved page.
      * - `options.indexFrom` - A previous index.
      * - `options.indexTo` - A current index.
      *
      * `options.type`: `"QUESTION_CONVERTED"`
      * - `options.className` - The name of a class to which a question has been converted.
      * - `options.oldValue` - An object of a previous class.
      * - `options.newValue` - An object of a class specified by `options.className`.
      *
      * `options.type`: `"QUESTION_CHANGED_BY_EDITOR"`
      * - `options.question` - A question that has been edited in a pop-up editor.
      *
      * `options.type`: `"PROPERTY_CHANGED"`
      * - `options.name` - The name of the changed property.
      * - `options.target` - An object that contains the changed property.
      * - `options.oldValue` - A previous value of the changed property.
      * - `options.newValue` - A new value of the changed property.
      *
      * `options.type`: `"ELEMENT_REORDERED"`
      * - `options.arrayName` - The name of the changed array.
      * - `options.parent` - An object that contains the changed array.
      * - `options.element` - A reordered element.
      * - `options.indexFrom` - A previous index.
      * - `options.indexTo` - A current index.
      *
      * `options.type`: `"OBJECT_DELETED"`
      * - `options.target` - A deleted object.
      *
      * `options.type`: `"VIEW_TYPE_CHANGED"`
      * - `options.newType` - A current view: `"editor"` or `"designer"`.
      *
      * `options.type`: `"DO_DROP"`
      * - `options.page` - A parent page of the dragged element.
      * - `options.source` - A dragged element.
      * - `options.target` - A drop target.
      * - `options.newElement` - A new element. This parameter is defined only if users drag a question or panel from the Toolbox.
      */
    onModified: CreatorEvent;
    /**
     * An event that is raised when users add a question to the survey. Use this event to customize the question.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.question`: [`Question`](https://surveyjs.io/form-library/documentation/api-reference/question)\
     * The question users added.
     * - `options.page`: [`PageModel`](https://surveyjs.io/form-library/documentation/api-reference/page-model)\
     * A page to which the question was added.
     * - `options.reason`: `"DROPPED_FROM_TOOLBOX"` | `"ADDED_FROM_PAGEBUTTON"` | `"ELEMENT_COPIED"`\
     * A value that indicates how the question was added: dragged from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox-customization), created using the Add Question button, or duplicated.
     *
     * [Customize Survey Elements on Creation](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#customize-survey-elements-on-creation (linkStyle))
     */
    onQuestionAdded: CreatorEvent;
    /**
     * An event that is raised when users add a [Panel](https://surveyjs.io/form-library/documentation/api-reference/panel-model) element to the survey. Use this event to customize the panel.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.panel`: [`PanelModel`](https://surveyjs.io/form-library/documentation/api-reference/panel-model)\
     * The panel users added.
     * - `options.page`: [`PageModel`](https://surveyjs.io/form-library/documentation/api-reference/page-model)\
     * A page to which the panel was added.
     * - `options.reason`: `"DROPPED_FROM_TOOLBOX"` | `"ADDED_FROM_PAGEBUTTON"` | `"ELEMENT_COPIED"`\
     * A value that indicates how the panel was added: dragged from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox-customization), created using the Add Question button, or duplicated.
     *
     * [Customize Survey Elements on Creation](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#customize-survey-elements-on-creation (linkStyle))
     */
    onPanelAdded: CreatorEvent;
    /**
     * An event that is raised when a new page is added to the survey. Use this event to customize the page.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.page`: [`PageModel`](https://surveyjs.io/form-library/documentation/api-reference/page-model)\
     * The page users added.
     *
     * [Customize Survey Elements on Creation](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#customize-survey-elements-on-creation (linkStyle))
     */
    onPageAdded: CreatorEvent;
    /**
     * An event that is raised when Survey Creator renders action buttons under each page on the design surface. Use this event to add, remove, or modify the buttons.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.actions`: [`IAction[]`](https://surveyjs.io/form-library/documentation/api-reference/iaction)\
     * An array of actions. You can add, modify, or remove actions from this array.
     * - `options.page`: [`PageModel`](https://surveyjs.io/form-library/documentation/api-reference/page-model)\
     * A page for which the event is raised.
     * - `options.addNewQuestion(type)`: Method\
     * Adds a new question of a specified [`type`](https://surveyjs.io/form-library/documentation/api-reference/question#getType) to the page.
     * @see onDefineElementMenuItems
     */
    onGetPageActions: CreatorEvent;
    /**
     * An event that is raised when Survey Creator instantiates a survey for the [Designer](https://surveyjs.io/survey-creator/documentation/end-user-guide#designer-tab) tab. Use this event to customize the survey.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.survey`: [`SurveyModel`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model)\
     * A survey to be displayed in the Designer tab.
     *
     * [Design Mode Survey Instance](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#design-mode-survey-instance (linkStyle))
     *
     * > If you want this event raised at startup, assign a survey JSON schema to the [`JSON`](#JSON) property *after* you add a handler to the event. If the JSON schema should be empty, specify the `JSON` property with an empty object.
     */
    onDesignerSurveyCreated: CreatorEvent;
    /**
     * An event that is raised when Survey Creator instantiates a survey for the [Preview](https://surveyjs.io/survey-creator/documentation/end-user-guide#preview-tab) tab. Use this event to customize the survey.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.survey`: [`SurveyModel`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model)\
     * A survey to be displayed in the Preview tab.
     *
     * [Preview Mode Survey Instance](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#preview-mode-survey-instance (linkStyle))
     *
     * > If you want this event raised at startup, assign a survey JSON schema to the [`JSON`](#JSON) property *after* you add a handler to the event. If the JSON schema should be empty, specify the `JSON` property with an empty object.
     */
    onPreviewSurveyCreated: CreatorEvent;
    onTestSurveyCreated: CreatorEvent;
    /**
     * The event is called in case of UI notifications. By default all notifications are done via built-in alert () function.
     * In case of any subscriptions to this event all notifications will be redirected into the event handler.
     *- options.message is a message to show.
     */
    onNotify: CreatorEvent;
    /**
     * An event that is raised before a survey element (question, panel, page, or the survey itself) is focused. Use this event to move focus to a different survey element.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.newSelectedElement`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * An element that is going to be focused.
     * @see onSelectedElementChanged
     * @see selectedElement
     */
    onSelectedElementChanging: CreatorEvent;
    /**
     * An event that is raised after a survey element (a question, panel, page, or the survey itself) is focused.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.newSelectedElement`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * The [focused element](#selectedElement).
     * @see onSelectedElementChanging
     */
    onSelectedElementChanged: CreatorEvent;
    /**
     * The event is fired then one need to choose files.
     *
     * - `sender` - the survey creator object that fires the event
     * - `options.input` - file input HTML element
     * - `options.callback` - need to be called after files has been chosen
     * @see uploadFiles
     */
    onOpenFileChooser: CreatorEvent;
    /**
     * The event is fired on uploading the files.
     *
     * - `sender` - the survey creator object that fires the event
     * - `options.files` - the Javascript File objects array
     * - `options.callback(status, imageLink)` - called on upload complete
     *
     *  [View Demo](https://surveyjs.io/survey-creator/examples/file-upload/ (linkStyle))
     * @see uploadFiles
     */
    onUploadFile: CreatorEvent;
    /**
     * An event that is raised when the Translation tab displays a property for translation. Use this event to control the property visibility.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.obj`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * A survey element (survey, page, panel, question) whose string translations are edited in the Translation tab.
     * - `options.propertyName`: `string`\
     * The name of a property being translated.
     * - `options.visible`: `boolean`\
     * A Boolean value that specifies the property visibility. Set it to `false` to hide the property.
     */
    onTranslationStringVisibility: CreatorEvent;
    onTranslationLocaleInitiallySelected: CreatorEvent;
    /**
     * An event that is raised before a translated string is imported from a CSV file. Use this event to modify the string to be imported or cancel the import.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.locale`: `string`\
     * The current locale identifier (`"en"`, `"de"`, etc.). Contains an empty string if the default locale is used.
     * - `options.name`: `string`\
     * A full name of the translated string. It is composed of names of all parent elements, for example: `"mySurvey.page1.question2.title"`.
     * - `options.text`: `string`\
     * A text string to be imported. You can modify this property to import a different string or set this property to `undefined` to cancel the import.
     * @see onTranslationExportItem
     * @see onTranslationImported
     */
    onTranslationImportItem: CreatorEvent;
    /**
     * An event that is raised after all translated strings are imported from a CSV file.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * @see onTranslationImportItem
     * @see onTranslationExportItem
     */
    onTranslationImported: CreatorEvent;
    /**
     * An event that is raised before a translated string is exported to a CSV file. Use this event to modify the string to be exported.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.obj`: [`Survey.Base`](https://surveyjs.io/form-library/documentation/api-reference/base)\
     * A survey element (survey, page, panel, question) whose string translations are being exported to CSV.
     * - `options.locale`: `string`\
     * The current locale identifier (`"en"`, `"de"`, etc.). Contains an empty string if the default locale is used.
     * - `options.name`: `string`\
     * A full name of the translated string. It is composed of names of all parent elements, for example: `"mySurvey.page1.question2.title"`.
     * - `options.locString`: `LocalizableString`\
     * A `LocalizableString` instance. Call the `options.locString.getLocaleText(locale)` method if you need to get a text string for a specific locale.
     * - `options.text`: `string`\
     * A text string to be exported. The string is taken from the current locale. You can modify this property to export a different string.
     * @see onTranslationImportItem
     */
    onTranslationExportItem: CreatorEvent;
    /**
     * An event that allows you to integrate a machine translation service, such as Google Translate or Microsoft Translator, into Survey Creator.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.fromLocale`: `string`\
     * A locale from which you want to translate strings. Contains a locale identifier (`"en"`, `"de"`, etc.).
     * - `options.toLocale`: `string`\
     * A locale to which you want to translate strings. Contains a locale identifier (`"en"`, `"de"`, etc.).
     * - `options.strings`: `Array<string>`\
     * Strings to translate.
     * - `options.callback: (strings: Array<string>)`: `Function`\
     * A callback function that accepts translated strings. If the translation failed, pass an empty array or call this function without arguments.
     *
     * Within the event handler, you need to pass translation strings and locale information to the translation service API. The service should return an array of translated strings that you need to pass to the `options.callback` function. The following code shows how to integrate the Microsoft Translator service into Survey Creator:
     *
     * ```js
     * import { SurveyCreatorModel } from "survey-creator-core";
     * const creatorOptions = { ... };
     * const creator = new SurveyCreatorModel(creatorOptions);
     *
     * const apiKey = "<your-microsoft-translator-api-key>";
     * const resourceRegion = "<your-azure-region>";
     * const endpoint = "https://api.cognitive.microsofttranslator.com/";
     * creator.onMachineTranslate.add((_, options) => {
     *   // Prepare strings for Microsoft Translator as an array of objects: [{ Text: "text to translate" }]
     *   const data = [];
     *   options.strings.forEach(str => { data.push({ Text: str }); });
     *   // Include required locales in the URL
     *   const params = "api-version=3.0&from=" + options.fromLocale + "&to=" + options.toLocale;
     *   const url = endpoint + "/translate?" + params;
     *   fetch(url, {
     *     method: "POST",
     *     headers: {
     *       "Content-Type": "application/json",
     *       "Ocp-Apim-Subscription-Key": apiKey,
     *       "Ocp-Apim-Subscription-Region": resourceRegion,
     *       "X-ClientTraceId": crypto.randomUUID()
     *     },
     *     body: JSON.stringify(data)
     *   }).then(response => response.json())
     *     .then(data => {
     *       // Convert data received from Microsoft Translator to a flat array
     *       const translatedStrings = [];
     *       for (let i = 0; i < data.length; i++) {
     *         translatedStrings.push(data[i].translations[0].text);
     *       }
     *       // Pass translated strings to Survey Creator
     *       options.callback(translatedStrings);
     *
     *     }).catch(error => {
     *       // If translation was unsuccessful:
     *       options.callback();
     *       alert("Could not translate strings to the " + options.toLocale + " locale");
     *     });
     * });
     * ```
     *
     * > Survey Creator does not include a machine translation service out of the box. Our component only provides a UI for calling the service API.
     */
    onMachineTranslate: CreatorEvent;
    /**
     * An event that is raised before a string translation is changed. Use this event to override a new translation value.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.obj`: `any`\
     * A survey element instance (survey, page, panel, question) whose string translation is being changed.
     * - `options.locale`: `string`\
     * The current locale identifier (`"en"`, `"de"`, etc.). Contains an empty string if the default locale is used.
     * - `options.locString`: `LocalizableString`\
     * An object that you can use to manipulate a localization string. Call the `options.locString.getLocaleText(locale)` method if you need to get a text string for a specific locale.
     * - `options.newText`: `string`\
     * A new value for the string translation.
     *
     * Refer to the following help topics for more information on localization:
     *
     * - [Localization & Globalization in SurveyJS Form Library](https://surveyjs.io/form-library/documentation/survey-localization)
     * - [Localization & Globalization in Survey Creator](https://surveyjs.io/survey-creator/documentation/localization)
     */
    onTranslationItemChanging: CreatorEvent;
    /**
     * An event that is raised when users drag and drop survey elements within the design surface. Use this event to control drag and drop operations.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.target`: `IElement`\
     * A survey element being dragged.
     * - `options.source`: `IElement`\
     * A survey element from which `target` is being dragged. This parameter is `null` if `target` is being dragged from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox).
     * - `options.insertBefore`: `IElement`\
     * A survey element before which the target element will be placed. This parameter is `null` if the parent container (page or panel) has no elements or if the target element will be placed below all other elements within the container.
     * - `options.insertAfter`: `IElement`\
     * A survey element after which `target` will be placed. This parameter is `null` if the parent container (page or panel) has no elements or if `target` will be placed above all other elements within the container.
     * - `options.parent`: `ISurveyElement`\
     * A parent container (page or panel) within which `target` will be placed.
     * - `options.survey`: [`SurveyModel`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model)\
     * A survey within which the drag and drop operation occured.
     * - `options.allow`: `boolean`\
     * A Boolean property that you can set to `false` if you want to cancel the drag and drop operation.
     * @see onDragStart
     * @see onDragEnd
     */
    onDragDropAllow: CreatorEvent;
    getSurveyJSONTextCallback: () => {
        text: string;
        isModified: boolean;
    };
    setSurveyJSONTextCallback: (text: string) => void;
    /**
     * Limits the number of items in a logical expression.
     *
     * Default value: -1 (unlimited)
     */
    maxLogicItemsInCondition: number;
    /**
     * Specifies whether drop-down menus and other UI elements display survey, page, and question titles instead of their names.
     *
     * Default value: `false`
     * @see onGetObjectDisplayName
     */
    showObjectTitles: boolean;
    /**
     * Limits the number of visible choices. Users can click "Show more" to view hidden choices.
     *
     * Set this property to -1 if you do not want to hide any choices.
     *
     * Default value: 10
     */
    maxVisibleChoices: number;
    /**
     * Specifies whether to display question titles instead of names when users edit logical expressions.
     *
     * Default value: `false`
     * @see showObjectTitles
     * @see onGetObjectDisplayName
     */
    showTitlesInExpressions: boolean;
    /**
     * Specifies whether users can edit expressions in the Logic tab as plain text.
     *
     * If you set this property to `false`, users can only use UI elements to edit logical expressions.
     *
     * Default value: `true`
     *
     * @see showLogicTab
     */
    allowEditExpressionsInTextEditor: boolean;
    /**
     * Limits the number of columns that users can add to [Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel), [Matrix Dynamic](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel), and [Matrix Dropdown](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) questions.
     *
     * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumColumnsCount`)
     */
    maximumColumnsCount: number;
    /**
     * Limits the number of choices that users can add to [Checkbox](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radiogroup](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions.
     *
     * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumChoicesCount`)
     */
    maximumChoicesCount: number;
    /**
     * Limits the minimum number of choices in [Checkbox](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radiogroup](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions. Set this property if users should not delete choices below the specified limit.
     *
     * Default value: 0 (unlimited, taken from `settings.propertyGrid.minimumChoicesCount`)
     */
    minimumChoicesCount: number;
    /**
     * Limits the number of rows that users can add to [Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel) and [Matrix Dropdown](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) questions.
     *
     * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumRowsCount`)
     */
    maximumRowsCount: number;
    /**
     * Limits the number of rate values that users can add to [Rating](https://surveyjs.io/Documentation/Library?id=questionratingmodel) questions.
     *
     * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumRateValues`)
     */
    maximumRateValues: number;
    /**
     * Limits the number of nested panels within a [Panel](https://surveyjs.io/form-library/documentation/api-reference/panel-model) element.
     *
     * Default value: -1 (unlimited)
     */
    maxNestedPanels: number;
    showPagesInTestSurveyTab: boolean;
    /**
     * Specifies whether to show a page selector at the bottom of the Preview tab.
     *
     * Default value: `true`
     */
    get showPagesInPreviewTab(): boolean;
    set showPagesInPreviewTab(val: boolean);
    showSimulatorInTestSurveyTab: boolean;
    /**
     * Specifies whether the Preview tab displays a Device button that allows users to preview the survey on different device types.
     *
     * Default value: `true`
     */
    get showSimulatorInPreviewTab(): boolean;
    set showSimulatorInPreviewTab(val: boolean);
    /**
     * A [UI theme](https://surveyjs.io/Documentation/Library?id=get-started-react#configure-styles) used to display the survey in the Preview tab.
     *
     * Accepted values: `"modern"`, `"default"`, `"defaultV2"`
     *
     * Default value: `"defaultV2"`
     * @see allowChangeThemeInPreview
     */
    themeForPreview: string;
    /**
     * A function that is called each time users click the [Save button](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) or [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#isAutoSave) is triggered to save a theme JSON object.
     *
     * For more information, refer to the [Save and Load Custom Themes](https://surveyjs.io/survey-creator/documentation/theme-editor#save-and-load-custom-themes) help topic.
     * @see showThemeTab
     * @see saveSurveyFunc
     */
    get saveThemeFunc(): any;
    set saveThemeFunc(value: any);
    isThemeModified: boolean;
    private _theme;
    get theme(): ITheme;
    set theme(newTheme: ITheme);
    doSaveTheme(): void;
    private _allowModifyPages;
    /**
     * Specifies whether users can add, edit, and delete survey pages.
     *
     * Default value: `true`
     * @see pageEditMode
     */
    get allowModifyPages(): boolean;
    set allowModifyPages(val: boolean);
    showDefaultLanguageInTestSurveyTab: boolean | string;
    /**
     * Specifies whether the Preview tab displays a language selector.
     *
     * Accepted values:
     *
     * - `"auto"` (default)
     * Display the language selector only if the survey is translated into more than one language.
     *
     * - `true`
     * Always display the language selector regardless of how many languages the survey uses.
     *
     * - `false`
     * Never display the language selector.
     *
     * - `"all"`
     * Always display the language selector with [all supported languages](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization).
     *
     * [Localization & Globalization](https://surveyjs.io/survey-creator/documentation/survey-localization-translate-surveys-to-different-languages (linkStyle))
     */
    get showDefaultLanguageInPreviewTab(): boolean | string;
    set showDefaultLanguageInPreviewTab(val: boolean | string);
    showInvisibleElementsInTestSurveyTab: boolean;
    /**
     * Specifies whether the Preview tab displays a toggle that allows users to show or hide invisible survey elements.
     *
     * Default value: `true`
     */
    get showInvisibleElementsInPreviewTab(): boolean;
    set showInvisibleElementsInPreviewTab(val: boolean);
    /**
     * Set this property to true if you want to show "page selector" in the toolabar instead of "pages editor"
     */
    showPageSelectorInToolbar: boolean;
    /**
     * Specifies whether users can switch between UI themes in the Preview tab.
     *
     * Default value: `true`
     *
     * [View Demo](https://surveyjs.io/Examples/Creator?id=theme-switcher (linkStyle))
     * @see themeForPreview
     */
    allowChangeThemeInPreview: boolean;
    tabbedMenu: AdaptiveActionContainer<TabbedMenuItem>;
    get tabs(): Array<TabbedMenuItem>;
    set tabs(val: Array<TabbedMenuItem>);
    /**
     * Returns the localized string by its id
     * @param str the string id.
     */
    getLocString(str: string): string;
    /**
     * Specifies whether to show an error message if a survey is not saved in the database.
     *
     * Default value: `true`
     */
    showErrorOnFailedSave: boolean;
    protected onSetReadOnly(newVal: boolean): void;
    /**
     * Gets or sets the survey locale. The default value it is empty, this means the 'en' locale is used.
     * You can set it to 'de' - German, 'fr' - French and so on.
     */
    get locale(): string;
    set locale(value: string);
    locStrsChanged(): void;
    private refreshPlugin;
    /**
     * Enables the read-only mode. If you set this property to `true`, users cannot change the initial survey configuration.
     *
     * Default value: `false`
     */
    get readOnly(): boolean;
    set readOnly(newVal: boolean);
    /**
     * Specifies whether to enable support for right-to-left languages.
     *
     * Default value: `false`
     */
    get isRTL(): boolean;
    set isRTL(value: boolean);
    /**
     * An event that is raised before the [active tab](#activeTab) is switched. Use this event to allow or cancel the switch.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.tabName`: `"designer"` | `"test"` | `"theme"` | `"editor"` | `"logic"` | `"translation"`\
     * A tab that is going to become active.
     * - `options.allow`: `boolean`\
     * Specifies whether the active tab can be switched. Set this property to `false` if you want to cancel the switch.
     * @see makeNewViewActive
     */
    onActiveTabChanging: CreatorEvent;
    /**
     * An event that is raised after the [active tab](#activeTab) is switched.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.tabName`: `"designer"` | `"test"` | `"theme"` | `"editor"` | `"logic"` | `"translation"`\
     * A tab that has become active.
     * @see makeNewViewActive
     */
    onActiveTabChanged: CreatorEvent;
    /**
     * Gets or sets the currently displayed tab.
     *
     * Possible values:
     *
     * - [`"designer"`](#showDesignerTab)
     * - [`"test"`](#showPreviewTab)
     * - [`"theme"`](#showThemeTab)
     * - [`"editor"`](#showJSONEditorTab)
     * - [`"logic"`](#showLogicTab)
     * - [`"translation"`](#showLogicTab)
     * @see makeNewViewActive
     */
    get activeTab(): string;
    set activeTab(val: string);
    /**
     * Switches the [active tab](#activeTab). Returns `false` if the tab cannot be switched.
     * @param tabName A tab that you want to make active: `"designer"`, `"test"`, `"theme"`, `"editor"`, `"logic"`, or `"translation"`.
     * @returns `false` if the active tab cannot be switched, `true` otherwise.
     */
    makeNewViewActive(tabName: string): boolean;
    private switchViewType;
    private canSwitchViewType;
    private activatePlugin;
    private get currentPlugin();
    toolbox: QuestionToolbox;
    get toolboxCategories(): Array<any>;
    sidebar: SidebarModel;
    constructor(options: ICreatorOptions, options2?: ICreatorOptions);
    updateToolboxIsCompact(newVal?: boolean): void;
    showToolboxValue: boolean;
    get showToolbox(): boolean;
    set showToolbox(val: boolean);
    showSidebarValue: boolean;
    onShowSidebarVisibilityChanged: CreatorEvent;
    /**
     * Specifies whether to show the sidebar that displays Property Grid.
     *
     * Default value: `true`
     * @see sidebarLocation
     */
    get showSidebar(): boolean;
    set showSidebar(val: boolean);
    setShowSidebar(value: boolean, isManualMode?: boolean): void;
    onShowPropertyGridVisiblityChanged: CreatorEvent;
    get showPropertyGrid(): boolean;
    set showPropertyGrid(val: boolean);
    rightContainerActiveItem(name: string): void;
    leftContainerActiveItem(name: string): void;
    /**
     * An event that is raised before an undo operation.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.canUndo`: `boolean`\
     * A Boolean value that you can set to `false` if you want to prevent the undo operation.
     * @see undo
     * @see redo
     * @see onBeforeRedo
     */
    onBeforeUndo: CreatorEvent;
    /**
     * An event that is raised before an redo operation.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.canRedo`: `boolean`\
     * A Boolean value that you can set to `false` if you want to prevent the redo operation.
     * @see redo
     * @see undo
     * @see onBeforeUndo
     */
    onBeforeRedo: CreatorEvent;
    get undoRedoManager(): UndoRedoManager;
    get undoRedoController(): UndoRedoController;
    startUndoRedoTransaction(name?: string): void;
    stopUndoRedoTransaction(): void;
    /**
     * Returns `true` if an undo or redo operation is in progress.
     * @see undo
     * @see redo
     */
    get isProcessingUndoRedo(): boolean;
    /**
     * Cancels the last change if possible.
     * @see redo
     * @see onBeforeUndo
     */
    undo(): void;
    /**
     * Repeats the last undone action if possible.
     * @see undo
     * @see onBeforeRedo
     */
    redo(): void;
    get selectionHistoryController(): SelectionHistory;
    get currentPage(): PageModel;
    set currentPage(value: PageModel);
    /**
     * An event that is raised before a new page is added to the survey. Handle this event if you do not want to add the page.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.page`: [`PageModel`](https://surveyjs.io/form-library/documentation/api-reference/page-model)\
     * A page to be added.
     * - `options.allow`: `boolean`\
     * Set this property to `false` if you do not want to add the page.
     */
    onPageAdding: CreatorEvent;
    addPage(pageToAdd?: PageModel, changeSelection?: boolean, beforeAdd?: () => boolean): PageModel;
    private addNewPageIntoSurvey;
    protected initTabs(): void;
    private initPlugins;
    private initFooterToolbar;
    getOptions(): ICreatorOptions;
    protected setOptions(options: ICreatorOptions): void;
    private setPropertyPlaceHolder;
    private setPropertyVisibility;
    private patchMetadata;
    isCanModifyProperty(obj: Base, propertyName: string): boolean;
    onIsPropertyReadOnlyCallback(obj: Base, property: JsonObjectProperty, readOnly: boolean, parentObj: Base, parentProperty: JsonObjectProperty): boolean;
    /**
     * The editing survey object (Survey.Survey)
     */
    get survey(): SurveyModel;
    private existingPages;
    private isInitialSurveyEmptyValue;
    /**
     * Returns true if initial survey was empty. It was not set via JSON property and default new survey is empty as well.
     * @returns true if initial survey doesn't have any elements or properties
     */
    get isInitialSurveyEmpty(): boolean;
    protected initSurveyWithJSON(json: any, clearState: boolean): void;
    private updatePlugin;
    protected initDragDrop(): void;
    /**
     * An event that is raised when users start to drag a survey element within the design surface.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.draggedElement`: `any`\
     * A survey element being dragged.
     * - `options.fromElement`: `any`\
     * A survey element from which `draggedElement` is being dragged.
     * - `options.toElement`: `any`\
     * A survey element to which `draggedElement` is being dragged.
     * @see onDragEnd
     * @see onDragDropAllow
     */
    onDragStart: Event<() => any, any, any>;
    onBeforeDrop: Event<() => any, any, any>;
    /**
     * An event that is raised when users finish dragging a survey element within the design surface.
     *
     * Parameters:
     *
     * - `sender`: `CreatorBase`\
     * A Survey Creator instance that raised the event.
     * - `options.draggedElement`: `any`\
     * A survey element that was dragged.
     * - `options.fromElement`: `any`\
     * A survey element from which `draggedElement` was dragged.
     * - `options.toElement`: `any`\
     * A survey element to which `draggedElement` was dragged.
     * @see onDragStart
     * @see onDragDropAllow
     */
    onDragEnd: Event<() => any, any, any>;
    onAfterDrop: Event<() => any, any, any>;
    private initDragDropSurveyElements;
    private initDragDropChoices;
    updateElementsOnLocaleChanged(obj: Base, propertyName: string): void;
    updateConditionsOnNameChanged(obj: Base, propertyName: string, oldValue: any): void;
    private surveyLogicForUpdate;
    private surveyLogicRenaming;
    private getSurveyLogicForUpdate;
    private clearSurveyLogicForUpdate;
    private needClearSurveyLogicForUpdate;
    private updateSurveyLogicValues;
    private updateSurveyLogicItemValue;
    protected createSurveyLogicForUpdate(): SurveyLogic;
    private updateLogicOnQuestionNameChanged;
    private updateLogicOnColumnNameChanged;
    private updateChoicesFromQuestionOnColumnNameChanged;
    isObjQuestion(obj: Base): boolean;
    isObjPage(obj: Base): boolean;
    private isObjThisType;
    private addNewElementReason;
    onDragDropItemStart(): void;
    private doOnQuestionAdded;
    private doOnPanelAdded;
    private doOnPageAdded;
    private getPageByElement;
    private getDefaultSurveyJson;
    protected setSurvey(survey: SurveyModel): void;
    private getSurveyTextFromDesigner;
    protected setTextValue(value: string): void;
    /**
     * Set JSON as text  into survey. Clear undo/redo states optionally.
     * @param value JSON as text
     * @param clearState default false. Set this parameter to true to clear undo/redo states.
     */
    changeText(value: string, clearState?: boolean): void;
    /**
     * A survey JSON schema as a string.
     *
     * This property allows you to get or set the JSON schema of a survey being configured. Alternatively, you can use the [`JSON`](#JSON) property.
     */
    get text(): string;
    set text(value: string);
    getSurveyJSON(): any;
    getObjectDisplayName(obj: Base, area: string, reason?: string, displayName?: string): string;
    createSurvey(json?: any, reason?: string, model?: any): SurveyModel;
    protected createSurveyCore(json: any, reason: string): SurveyModel;
    private _stateValue;
    /**
     * Returns the creator state. It may return empty string or "saving" and "saved".
     */
    get state(): string;
    protected setState(value: string): void;
    onStateChanged: CreatorEvent;
    notifier: Notifier;
    setModified(options?: any): void;
    notifySurveyPropertyChanged(options: any): void;
    notifySurveyItemMoved(options: any): void;
    /**
     * This function triggers user notification (via the alert() function if no onNotify event handler added).
     * @see onNotify
     */
    notify(msg: string, type?: "info" | "error"): void;
    protected convertQuestion(obj: Question, className: string): Question;
    private getDefaultElementJSON;
    private singlePageJSON;
    /**
     * A survey JSON schema.
     *
     * This property allows you to get or set the JSON schema of a survey being configured. Alternatively, you can use the [`text`](#text) property.
     */
    get JSON(): any;
    set JSON(val: any);
    loadSurvey(surveyId: string): void;
    protected doClickQuestionCore(element: IElement, modifiedType?: string, index?: number, panel?: IPanel): void;
    private isRowMultiline;
    private findRowByElement;
    private addElemenMultiline;
    setNewNames(element: ISurveyElement): void;
    private updateNewElementExpressions;
    protected getAllQuestions(includeNewItems?: boolean): Array<any>;
    protected getAllPanels(includeNewItems?: boolean): Array<any>;
    private getAllElements;
    protected getNewName(type: string, isPanel?: boolean): string;
    protected getNewQuestionName(): string;
    protected getNewPanelName(): string;
    protected setNewNamesCore(element: ISurveyElement): void;
    createNewElement(json: any): IElement;
    copyElement(element: Base): IElement;
    /**
     * Copy a question to the active page
     * @param question A copied Survey.Question
     */
    fastCopyQuestion(question: Base): IElement;
    /**
     * Gets or sets the focused survey element: a question, panel, page, or the survey itself.
     * @see onSelectedElementChanging
     * @see onSelectedElementChanged
     */
    get selectedElement(): Base;
    set selectedElement(val: Base);
    /**
     * Refreshes the Designer tab.
     *
     * `refreshDesigner()` is useful if the Designer tab UI depends on an external variable. Call this method each time this variable changes to update the UI.
     */
    refreshDesigner(): void;
    deleteCurrentObject(): void;
    deleteCurrentElement(): void;
    /**
     * Deletes a survey element: a question, panel, or page.
     *
     * If you want to delete the focused element, pass the [`selectedElement`](#selectedElement) property value to this method.
     * @param element A survey element to delete.
     * @see onElementDeleting
     */
    deleteElement(element: Base): void;
    /**
     * Create a new page with the same elements and place it next to the current one. It returns the new created Survey.Page
     * @param page A copied Survey.Page
     */
    copyPage(page: PageModel): PageModel;
    protected deleteObjectCore(obj: any): void;
    private getNextPage;
    protected deleteObject(obj: any): void;
    protected updateConditionsOnRemove(obj: any): void;
    private checkOnElementDeleting;
    isElementSelected(element: Base): boolean;
    selectElement(element: any, propertyName?: string, focus?: boolean | string, startEdit?: boolean): void;
    focusElement(element: any, focus: string | boolean, selEl?: any, propertyName?: string, startEdit?: boolean): void;
    private getSelectedSurveyElement;
    private onSelectingElement;
    protected get designerPropertyGrid(): PropertyGridModel;
    get propertyGrid(): SurveyModel;
    /**
     * Collapses a specified category in Property Grid.
     * @param name A [category name](https://surveyjs.io/survey-creator/documentation/property-grid-customization#category).
     * @see expandPropertyGridCategory
     */
    collapsePropertyGridCategory(name: string): void;
    /**
     * Expands a specified category in Property Grid.
     * @param name A [category name](https://surveyjs.io/survey-creator/documentation/property-grid-customization#category).
     * @see collapsePropertyGridCategory
     */
    expandPropertyGridCategory(name: string): void;
    /**
     * Collapses all categories in Property Grid.
     * @see expandAllPropertyGridCategories
     */
    collapseAllPropertyGridCategories(): void;
    /**
     * Expands all categories in Property Grid.
     * @see collapseAllPropertyGridCategories
     */
    expandAllPropertyGridCategories(): void;
    collapseAllPropertyTabs(): void;
    expandAllPropertyTabs(): void;
    expandPropertyTab(name: string): void;
    collapsePropertyTab(name: string): void;
    /**
     * Validates the property values of the [focused element](#selectedElement).
     * @returns `true` if all property values of the focused element are valid or if no element is focused, `false` otherwise.
     * @see onSelectedElementChanging
     * @see onSelectedElementChanged
     */
    validateSelectedElement(): boolean;
    /**
     * Deletes all custom translation strings for the passed locale from Survey Creator and from the generated survey JSON schema.
     * @param locale A locale code (for example, "en").
     */
    deleteLocaleStrings(locale: string): void;
    private getPropertyGridExpandedCategory;
    private expandCategoryIfNeeded;
    private selectionChanged;
    private getCurrentPageByElement;
    clickToolboxItem(newElement: any, panel?: IPanel, modifiedType?: string): void;
    getJSONForNewElement(json: any): any;
    /**
     * Open file chooser dialog
     * @param input file input element
     * @param onFilesChosen a call back function to process chosen files
     */
    chooseFiles(input: HTMLInputElement, onFilesChosen: (files: File[]) => void): void;
    /**
     * Upload the files on a server
     * @param files files to upload
     * @param uploadingCallback a call back function to get the status on uploading the file and operation result - URI of the uploaded file
     */
    uploadFiles(files: File[], question: Question, uploadingCallback: (status: string, data: any) => any): void;
    private _rootElementValue;
    get rootElement(): HTMLElement;
    setRootElement(element: HTMLElement): void;
    unsubscribeRootElement(): void;
    initKeyboardShortcuts(rootNode: HTMLElement): void;
    removeKeyboardShortcuts(rootNode: HTMLElement): void;
    protected onKeyDownHandler: (event: KeyboardEvent) => void;
    private shortcuts;
    registerShortcut(name: string, shortcut: IKeyboardShortcut): void;
    unRegisterShortcut(name: string): void;
    protected deletePanelOrQuestion(obj: Base): void;
    protected onCanShowObjectProperty(object: any, property: JsonObjectProperty, showMode: string, parentObj: any, parentProperty: JsonObjectProperty): boolean;
    protected canDeleteItem(object: any, item: Base, allowDelete: boolean): boolean;
    private getErrorOnPropertyChanging;
    protected generateUniqueName(el: Base, newName: string): string;
    protected generateUniqueNameCore(options: any): void;
    private checkForUniqueName;
    protected isNameUnique(el: Base, newName: string, includeNewItems?: boolean): boolean;
    private isNameUniqueInArray;
    protected doPropertyGridChanged(): void;
    get alwaySaveTextInPropertyEditors(): boolean;
    set alwaySaveTextInPropertyEditors(value: boolean);
    onCanShowPropertyCallback(object: any, property: JsonObjectProperty, showMode: string, parentObj: any, parentProperty: JsonObjectProperty): boolean;
    onPropertyGridSurveyCreatedCallback(object: any, survey: SurveyModel): void;
    onPropertyEditorCreatedCallback(object: any, property: JsonObjectProperty, editor: Question): void;
    onPropertyEditorUpdateTitleActionsCallback(object: any, property: JsonObjectProperty, editor: Question, titleActions: IAction[]): void;
    onPropertyGridShowModalCallback(object: any, property: JsonObjectProperty, editor: Question, popupEditor: any, popupModel: PopupBaseViewModel): void;
    onCanDeleteItemCallback(object: any, item: Base, allowDelete: boolean): boolean;
    onCollectionItemDeletingCallback(obj: Base, property: JsonObjectProperty, collection: Array<Base>, item: Base): boolean;
    onCollectionItemAllowingCallback(obj: Base, property: JsonObjectProperty, collection: Array<Base>, item: Base, itemOptions: ICollectionItemAllowOperations): void;
    onItemValueAddedCallback(obj: Base, propertyName: string, itemValue: ItemValue, itemValues: Array<ItemValue>): void;
    onMatrixDropdownColumnAddedCallback(matrix: Question, column: MatrixDropdownColumn, columns: Array<MatrixDropdownColumn>): void;
    onSetPropertyEditorOptionsCallback(propertyName: string, obj: Base, editorOptions: any): void;
    onGetErrorTextOnValidationCallback(propertyName: string, obj: Base, value: any): string;
    onValueChangingCallback(options: any): void;
    onGetElementEditorTitleCallback(obj: Base, title: string): string;
    onConditionQuestionsGetListCallback(propertyName: string, obj: Base, editor: any, list: any[]): string;
    onConditionGetTitleCallback(expression: string, title: string): string;
    isConditionOperatorEnabled(questionName: string, question: Question, operator: string, isEnabled: boolean): boolean;
    onLogicGetTitleCallback(expression: string, expressionText: string, text: string, logicItem: any): string;
    getProcessedTranslationItemText(locale: string, locString: ILocalizableString, newText: string, obj: any): string;
    getTranslationExportedText(obj: Base, name: string, locString: ILocalizableString, locale: string, text: string): string;
    getHasMachineTranslation(): boolean;
    doMachineTranslation(fromLocale: string, toLocale: string, strings: Array<string>, callback: (translated: Array<string>) => void): void;
    /**
     * A delay between changing survey settings and saving the survey JSON schema, measured in milliseconds. Applies only when the [`isAutoSave`](#isAutoSave) property is `true`.
     *
     * Default value: 500 (taken from `settings.autoSave.delay`)
     *
     * If a user changes the settings once again during the delay, only the latest version will be saved.
     */
    autoSaveDelay: number;
    private autoSaveTimerId;
    protected doAutoSave(): void;
    saveNo: number;
    doSave(): void;
    /**
     * Specifies whether to display a button that saves the survey or theme (executes the [`saveSurveyFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) or [`saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc) function).
     * @see isAutoSave
     */
    showSaveButton: boolean;
    /**
     * A function that is called each time users click the [Save button](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) or [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#isAutoSave) is triggered to save a survey JSON schema.
     *
     * For more information, refer to the Save and Load Survey Model Schemas help topic for your framework: [Angular](https://surveyjs.io/survey-creator/documentation/get-started-angular#save-and-load-survey-model-schemas) | [Vue](https://surveyjs.io/survey-creator/documentation/get-started-vue#save-and-load-survey-model-schemas) | [React](https://surveyjs.io/survey-creator/documentation/get-started-react#save-and-load-survey-model-schemas) | [Knockout / jQuery](https://surveyjs.io/survey-creator/documentation/get-started-knockout-jquery).
     * @see saveThemeFunc
     */
    get saveSurveyFunc(): any;
    set saveSurveyFunc(value: any);
    convertCurrentQuestion(newType: string): void;
    getAddNewQuestionText(currentAddQuestionType?: string): any;
    get addNewQuestionText(): any;
    getAvailableToolboxItems(element?: SurveyElement, isAddNew?: boolean): Array<QuestionToolboxItem>;
    getQuestionTypeSelectorModel(beforeAdd: (type: string) => void, element?: SurveyElement): any;
    getUpdatedPageAdornerFooterActions(pageAdorner: PageAdorner, actions: Array<IAction>): IAction[];
    addNewQuestionInPage(beforeAdd: (string: any) => void, panel?: IPanel, type?: string): void;
    createIActionBarItemByClass(className: string, title: string, iconName: string, needSeparator: boolean): Action;
    onElementMenuItemsChanged(element: any, items: Action[]): void;
    getElementAllowOperations(element: SurveyElement): any;
    getChoicesItemBaseTitle(): any;
    getNextItemValue(question: QuestionSelectBase): string | number;
    createNewItemValue(question: QuestionSelectBase, callEvent?: boolean, callback?: (res: ItemValue) => void): ItemValue;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    initResponsivityManager(container: HTMLDivElement): void;
    resetResponsivityManager(): void;
    showHeaderInEmptySurvey: any;
    showPageNavigator: any;
    showTabs: any;
    showToolbar: any;
    allowCollapseSidebar: any;
    isMobileView: boolean;
    isTouch: any;
    /**
     * Specifies Toolbox location.
     *
     * Possible values:
     *
     * - `"left"` (default) - Displays Toolbox on the left side of the design surface.
     * - `"right"` - Displays Toolbox on the right side of the design surface.
     * - `"sidebar"` - Displays Toolbox as an overlay on top of Property Grid. Use the [`sidebarLocation`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#sidebarLocation) property to specify Property Grid position.
     */
    toolboxLocation: toolboxLocationType;
    /**
     * Specifies the position of the sidebar that displays Property Grid. Applies only when [`showSidebar`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSidebar) is `true`.
     *
     * Possible values:
     *
     * - `"right"` (default) - Displays the sidebar on the right side of the design surface.
     * - `"left"` - Displays the sidebar on the left side of the design surface.
     * @see toolboxLocation
     */
    sidebarLocation: "left" | "right";
    selectFromStringEditor: boolean;
    isCreatorDisposed: boolean;
    dispose(): void;
    enableLinkFileEditor: boolean;
}
export declare class SurveyCreatorModel extends CreatorBase {
}
export declare class StylesManager {
    static get currentTheme(): string;
    static set currentTheme(val: string);
    static applyTheme(name?: string): void;
}
export declare function initializeDesignTimeSurveyModel(model: any, creator: CreatorBase): void;
export declare const editableStringRendererName = "svc-string-editor";
export declare function getElementWrapperComponentName(element: any, reason: string, isPopupEditorContent: boolean): string;
export declare function getQuestionContentWrapperComponentName(element: any): string;
export declare function getElementWrapperComponentData(element: any, reason: string, creator: CreatorBase): any;
export declare function getItemValueWrapperComponentName(item: ItemValue, question: QuestionSelectBase): string;
export declare function getItemValueWrapperComponentData(item: ItemValue, question: QuestionSelectBase, creator: CreatorBase): any;
export declare function isStringEditable(element: any, name: string): boolean;
export declare function isTextInput(target: any): boolean;
export declare function registerAdorner(name: any, adorner: any): void;
export declare function removeAdorners(names?: string[]): void;
