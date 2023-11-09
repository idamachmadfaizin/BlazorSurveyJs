import { Base, IAction, ItemValue, JsonObjectProperty, MatrixDropdownColumn, Question, SurveyModel, ILocalizableString, PopupBaseViewModel } from "survey-core";
/**
 * List available question convert modes
 */
export declare enum QuestionConvertMode {
    AllTypes = 0,
    CompatibleTypes = 1
}
export declare var settings: {
    translation: {
        sortByName: boolean;
        exportPrefix: string;
        /**
         * The maximum number of locales that user can select at once for translation
         */
        maximumSelectedLocales: number;
        /**
         * The name of the translation export file in csv format
         */
        exportFileName: string;
    };
    theme: {
        exportFileName: string;
        fontFamily: string;
        allowEditHeaderSettings: boolean;
    };
    operators: {
        empty: any[];
        notempty: any[];
        equal: string[];
        notequal: string[];
        contains: string[];
        notcontains: string[];
        anyof: string[];
        allof: string[];
        greater: string[];
        less: string[];
        greaterorequal: string[];
        lessorequal: string[];
    };
    defaultNewSurveyJSON: {};
    designer: {
        /**
         * The default question type on clicking Add Question button.
         */
        defaultAddQuestionType: string;
        /**
         * Set this property to false, to hide "Add Question" button on designer surface
         */
        showAddQuestionButton: boolean;
    };
    logic: {
        defaultOperator: string;
        defaultOperators: {
            default: string;
            checkbox: string;
            tagbox: string;
        };
        visibleActions: any[];
        logicItemTitleMaxChars: number;
        openBracket: string;
        closeBracket: string;
        /**
         * Set these properties to false if you don't want to update expressions on changing question and column names and on changing choices values
         */
        updateExpressionsOnChanging: {
            questionName: boolean;
            columnName: boolean;
            choiceValue: boolean;
        };
        /**
         * Set these properties to false if you don't want to update expressions on deleting question
         */
        updateExpressionsOnDeleting: {
            question: boolean;
        };
    };
    /**
     * Determines which types of questions the conversion will be available for.
     */
    questionConvertMode: QuestionConvertMode;
    propertyGrid: {
        useButtonGroup: boolean;
        maxCharsInButtonGroup: number;
        showNavigationButtons: boolean;
        maximumColumnsCount: number;
        minimumChoicesCount: number;
        maximumChoicesCount: number;
        maximumRowsCount: number;
        maximumRateValues: number;
        generalTabName: string;
        defaultExpandedTabName: string;
    };
    toolbox: {
        /**
         * Use it to change the default question JSON on dropping it into designer or converting questions
         */
        defaultJSON: {
            dropdown: {
                choices: string[];
            };
            tagbox: {
                choices: string[];
            };
            checkbox: {
                choices: string[];
            };
            radiogroup: {
                choices: string[];
            };
            ranking: {
                choices: string[];
            };
            imagepicker: {
                imageFit: string;
                choices: {
                    value: string;
                    imageLink: string;
                }[];
            };
            image: {
                imageFit: string;
                imageHeight: string;
                imageWidth: string;
            };
        };
    };
    /**
     * Notification settings
     */
    notifications: {
        lifetime: number;
    };
    /**
     * Auto save parameters
     */
    autoSave: {
        delay: number;
    };
    /**
     * Drag Drop Settings
     */
    dragDrop: {
        restrictDragQuestionBetweenPages: boolean;
        allowDragToTheSameLine: boolean;
    };
    /**
     * Creator layout settings
     */
    layout: {
        showTabs: boolean;
        showToolbar: boolean;
        allowCollapseSidebar: boolean;
    };
    jsonEditor: {
        indentation: number;
        exportFileName: string;
    };
};
export interface ICollectionItemAllowOperations {
    allowDelete: boolean;
    allowEdit: boolean;
    allowAdd: boolean;
}
export interface ISurveyCreatorOptions {
    isMobileView: boolean;
    alwaySaveTextInPropertyEditors: boolean;
    readOnly: boolean;
    maxLogicItemsInCondition: number;
    showTitlesInExpressions: boolean;
    showObjectTitles: boolean;
    allowEditExpressionsInTextEditor: boolean;
    maximumColumnsCount: number;
    minimumChoicesCount: number;
    maximumChoicesCount: number;
    maximumRowsCount: number;
    maximumRateValues: number;
    maxNestedPanels: number;
    enableLinkFileEditor: boolean;
    inplaceEditForValues: boolean;
    rootElement?: HTMLElement;
    getObjectDisplayName(obj: Base, area: string, reason: string, displayName: string): string;
    onCanShowPropertyCallback(object: any, property: JsonObjectProperty, showMode: string, parentObj: any, parentProperty: JsonObjectProperty): boolean;
    onPropertyEditorCreatedCallback(object: any, property: JsonObjectProperty, editor: Question): any;
    onPropertyGridSurveyCreatedCallback(object: any, survey: SurveyModel): any;
    onPropertyEditorUpdateTitleActionsCallback(object: any, property: JsonObjectProperty, editor: Question, titleActions: IAction[]): any;
    onPropertyGridShowModalCallback(object: any, property: JsonObjectProperty, editor: Question, popupEditor: any, popupModel: PopupBaseViewModel): any;
    onIsPropertyReadOnlyCallback(obj: Base, property: JsonObjectProperty, readOnly: boolean, parentObj: Base, parentProperty: JsonObjectProperty): boolean;
    onCanDeleteItemCallback(object: any, item: Base, allowDelete: boolean): boolean;
    onCollectionItemDeletingCallback(obj: Base, property: JsonObjectProperty, collection: Array<Base>, item: Base): boolean;
    onCollectionItemAllowingCallback(obj: Base, property: JsonObjectProperty, collection: Array<Base>, item: Base, options: ICollectionItemAllowOperations): void;
    onItemValueAddedCallback(obj: Base, propertyName: string, itemValue: ItemValue, itemValues: Array<ItemValue>): any;
    onMatrixDropdownColumnAddedCallback(matrix: Question, column: MatrixDropdownColumn, columns: Array<MatrixDropdownColumn>): any;
    onSetPropertyEditorOptionsCallback(propertyName: string, obj: Base, editorOptions: any): any;
    onGetErrorTextOnValidationCallback(propertyName: string, obj: Base, value: any): string;
    onValueChangingCallback(options: any): any;
    onGetElementEditorTitleCallback(obj: Base, title: string): string;
    startUndoRedoTransaction(): any;
    stopUndoRedoTransaction(): any;
    createSurvey(json: any, reason: string, model?: any): any;
    onConditionQuestionsGetListCallback(propertyName: string, obj: Base, editor: any, list: any[]): string;
    onConditionGetTitleCallback(expression: string, title: string): string;
    isConditionOperatorEnabled(questionName: string, question: Question, operator: string, isEnabled: boolean): boolean;
    onLogicGetTitleCallback(expression: string, displayExpression: string, text: string, logicItem: any): string;
    getProcessedTranslationItemText(locale: string, locString: ILocalizableString, newText: string, obj: any): string;
    getTranslationExportedText(obj: Base, name: string, locString: ILocalizableString, locale: string, text: string): string;
    uploadFiles(files: File[], question: Question, uploadingCallback: (status: string, data: any) => any): void;
    getHasMachineTranslation(): boolean;
    doMachineTranslation(fromLocale: string, toLocale: string, strings: Array<string>, callback: (translated: Array<string>) => void): void;
    chooseFiles(input: HTMLInputElement, onFilesChosen: (files: File[]) => void): void;
}
export declare class EmptySurveyCreatorOptions implements ISurveyCreatorOptions {
    rootElement: HTMLElement;
    enableLinkFileEditor: boolean;
    getProcessedTranslationItemText(locale: string, locString: ILocalizableString, newText: string, obj: any): string;
    isMobileView: boolean;
    alwaySaveTextInPropertyEditors: boolean;
    readOnly: boolean;
    maxLogicItemsInCondition: number;
    showTitlesInExpressions: boolean;
    showObjectTitles: boolean;
    allowEditExpressionsInTextEditor: boolean;
    maximumColumnsCount: number;
    minimumChoicesCount: number;
    maximumChoicesCount: number;
    maximumRowsCount: number;
    maximumRateValues: number;
    machineTranslationValue: boolean;
    inplaceEditForValues: boolean;
    maxNestedPanels: number;
    getObjectDisplayName(obj: Base, area: string, reason: string, displayName: string): string;
    onCanShowPropertyCallback(object: any, property: JsonObjectProperty, showMode: string, parentObj: any, parentProperty: JsonObjectProperty): boolean;
    onPropertyGridSurveyCreatedCallback(object: any, survey: SurveyModel): void;
    onPropertyEditorCreatedCallback(object: any, property: JsonObjectProperty, editor: Question): void;
    onPropertyEditorUpdateTitleActionsCallback(object: any, property: JsonObjectProperty, editor: Question, titleActions: IAction[]): void;
    onPropertyGridShowModalCallback(object: any, property: JsonObjectProperty, editor: Question, popupEditor: any, popupModel: PopupBaseViewModel): void;
    onIsPropertyReadOnlyCallback(obj: Base, property: JsonObjectProperty, readOnly: boolean, parentObj: Base, parentProperty: JsonObjectProperty): boolean;
    onCanDeleteItemCallback(object: any, item: Base, allowDelete: boolean): boolean;
    onCollectionItemDeletingCallback(obj: Base, property: JsonObjectProperty, collection: Array<Base>, item: Base): boolean;
    onCollectionItemAllowingCallback(obj: Base, property: JsonObjectProperty, collection: Array<Base>, item: Base, options: ICollectionItemAllowOperations): void;
    onItemValueAddedCallback(obj: Base, propertyName: string, itemValue: ItemValue, itemValues: Array<ItemValue>): void;
    onMatrixDropdownColumnAddedCallback(matrix: Question, column: MatrixDropdownColumn, columns: Array<MatrixDropdownColumn>): void;
    onSetPropertyEditorOptionsCallback(propertyName: string, obj: Base, editorOptions: any): void;
    onGetErrorTextOnValidationCallback(propertyName: string, obj: Base, value: any): string;
    onValueChangingCallback(options: any): void;
    onGetElementEditorTitleCallback(obj: Base, title: string): string;
    startUndoRedoTransaction(): void;
    stopUndoRedoTransaction(): void;
    createSurvey(json: any, reason: string, model?: any): SurveyModel;
    onConditionQuestionsGetListCallback(propertyName: string, obj: Base, editor: any, list: any[]): string;
    onConditionGetTitleCallback(expression: string, title: string): string;
    isConditionOperatorEnabled(questionName: string, question: Question, operator: string, isEnabled: boolean): boolean;
    onLogicGetTitleCallback(expression: string, displayExpression: string, text: string, logicItem: any): string;
    getTranslationExportedText(obj: Base, name: string, locString: ILocalizableString, locale: string, text: string): string;
    uploadFiles(files: File[], question: Question, uploadingCallback: (status: string, data: any) => any): void;
    getHasMachineTranslation(): boolean;
    doMachineTranslation(fromLocale: string, toLocale: string, strings: Array<string>, callback: (translated: Array<string>) => void): void;
    chooseFiles(input: HTMLInputElement, onFilesChosen: (files: File[]) => void): void;
}
