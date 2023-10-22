import { IDialogOptions } from "./popup";
export declare type ISurveyEnvironment = {
    root: Document | ShadowRoot;
    rootElement: HTMLElement | ShadowRoot;
    popupMountContainer: HTMLElement | string;
    svgMountContainer: HTMLElement | string;
    stylesSheetsMountContainer: HTMLElement;
};
/**
 * Global settings that apply to all surveys on the page. To specify one of the settings, use the code below:
 *
 * ```js
 * import { settings } from "survey-core";
 *
 * settings.settingName = "value";
 * ```
 */
export declare var settings: {
    /**
     * An object that configures survey appearance when the survey is being designed in Survey Creator.
     *
     * Nested properties:
     *
     * - `showEmptyDescriptions`: `boolean`\
     * Specifies whether to display an empty description for pages and panels. Default value: `true`.
     *
     * - `showEmptyTitles`: `boolean`\
     * Specifies whether to display an empty title for pages and panels. Default value: `true`.
     */
    designMode: {
        showEmptyDescriptions: boolean;
        showEmptyTitles: boolean;
    };
    /**
     * This property is obsolete. Use the [`settings.designMode.showEmptyDescriptions`](https://surveyjs.io/form-library/documentation/api-reference/settings#designMode) property instead.
     */
    allowShowEmptyDescriptionInDesignMode: boolean;
    /**
     * This property is obsolete. Use the [`settings.designMode.showEmptyTitles`](https://surveyjs.io/form-library/documentation/api-reference/settings#designMode) property instead.
     */
    allowShowEmptyTitleInDesignMode: boolean;
    /**
     * An object that contains properties related to localization.
     *
     * Nested properties:
     *
     * - `useLocalTimeZone`: `boolean`\
     * Disable this property if you want internal SurveyJS functions to use methods that work with UTC date and time (`setUTCDate()` `setUTCHours()`, etc.) instead of methods that work with local date and time (`setYear`, `setHours()`, etc.). Default value: `true`.
     *
     * - `defaultLocaleName`: `string`\
     * A property key that stores a translation for the default locale. Default value: `"default"`.
     *
     * - `storeDuplicatedTranslations`: `boolean`\
     * Specifies whether surveys should store translation strings that equal the translation strings in the default locale. Default value: `false`.
     */
    localization: {
        useLocalTimeZone: boolean;
        storeDuplicatedTranslations: boolean;
        defaultLocaleName: string;
    };
    /**
     * This property is obsolete. Use the [`settings.localization.useLocalTimeZone`](https://surveyjs.io/form-library/documentation/api-reference/settings#localization) property instead.
     */
    useLocalTimeZone: boolean;
    /**
     * This property is obsolete. Use the [`settings.localization.storeDuplicatedTranslations`](https://surveyjs.io/form-library/documentation/api-reference/settings#localization) property instead.
     */
    storeDuplicatedTranslations: boolean;
    /**
     * This property is obsolete. Use the [`settings.localization.defaultLocaleName`](https://surveyjs.io/form-library/documentation/api-reference/settings#localization) property instead.
     */
    defaultLocaleName: string;
    /**
     * An object with properties that configure surveys when they work with a web service.
     *
     * Nested properties:
     *
     * - `encodeUrlParams`: `boolean`\
     * Specifies whether to encode URL parameters when you access a web service. Default value: `true`.
     *
     * - `cacheLoadedChoices`: `boolean`\
     * Specifies whether to cache [choices](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model#choicesByUrl) loaded from a web service. Default value: `true`.
     *
     * - `disableQuestionWhileLoadingChoices`: `boolean`\
     * Disables a question while its choices are being loaded from a web service. Default value: `false`.
     *
     * - `surveyServiceUrl`: `string`\
     * The URL of the SurveyJS Service API endpoint.
     */
    web: {
        encodeUrlParams: boolean;
        cacheLoadedChoices: boolean;
        disableQuestionWhileLoadingChoices: boolean;
        surveyServiceUrl: string;
    };
    /**
     * This property is obsolete. Use the [`settings.web.encodeUrlParams`](https://surveyjs.io/form-library/documentation/api-reference/settings#web) property instead.
     */
    webserviceEncodeParameters: boolean;
    /**
     * This property is obsolete. Use the [`settings.web.cacheLoadedChoices`](https://surveyjs.io/form-library/documentation/api-reference/settings#web) property instead.
     */
    useCachingForChoicesRestful: boolean;
    useCachingForChoicesRestfull: boolean;
    /**
     * This property is obsolete. Use the [`settings.web.disableQuestionWhileLoadingChoices`](https://surveyjs.io/form-library/documentation/api-reference/settings#web) property instead.
     */
    disableOnGettingChoicesFromWeb: boolean;
    /**
     * This property is obsolete. Use the [`settings.web.surveyServiceUrl`](https://surveyjs.io/form-library/documentation/api-reference/settings#web) property instead.
     */
    surveyServiceUrl: string;
    /**
     * An object that contains properties related to [triggers](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-survey-logic-triggers).
     *
     * Nested properties:
     *
     * - `changeNavigationButtonsOnComplete`: `boolean`\
     * Specifies whether to re-evaluate an expression associated with the [Complete trigger](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#complete) immediately when a question value changes. If the expression evaluates to `true`, the trigger is executed. Default value: `false`.\
     * Keep this property set to `false` if you want to re-evaluate the Complete trigger's expression only when the respondents navigate to another page.
     *
     * - `executeCompleteOnValueChanged`: `boolean`\
     * Specifies whether to replace the Next button with the Complete button when the [Complete trigger](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#complete) is going to be executed. Default value: `true`.
     *
     * - `executeSkipOnValueChanged`: `boolean`\
     * Specifies whether to re-evaluate an expression associated with the [Skip trigger](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#skip) immediately when a question value changes. If the expression evaluates to `true`, the trigger is executed. Default value: `true`.\
     * Disable this property if you want to re-evaluate the Skip trigger's expression only when respondents navigate to another page.
     */
    triggers: {
        changeNavigationButtonsOnComplete: boolean;
        executeCompleteOnValueChanged: boolean;
        executeSkipOnValueChanged: boolean;
    };
    /**
     * This property is obsolete. Use the [`settings.triggers.executeCompleteOnValueChanged`](https://surveyjs.io/form-library/documentation/api-reference/settings#triggers) property instead.
     */
    executeCompleteTriggerOnValueChanged: boolean;
    /**
     * This property is obsolete. Use the [`settings.triggers.changeNavigationButtonsOnComplete`](https://surveyjs.io/form-library/documentation/api-reference/settings#triggers) property instead.
     */
    changeNavigationButtonsOnCompleteTrigger: boolean;
    /**
     * This property is obsolete. Use the [`settings.triggers.executeSkipOnValueChanged`](https://surveyjs.io/form-library/documentation/api-reference/settings#triggers) property instead.
     */
    executeSkipTriggerOnValueChanged: boolean;
    /**
     * An object that contains properties related to JSON serialization.
     *
     * Nested properties:
     *
     * - `itemValueSerializeAsObject`: `boolean`\
     * Enable this property if you want to serialize [`ItemValue`](https://surveyjs.io/form-library/documentation/api-reference/itemvalue) instances as objects even when they include only the `value` property. Default value: `false`. View an example below.
     *
     * - `itemValueSerializeDisplayText`: `boolean`\
     * Enable this property if you want to serialize the `text` property of [`ItemValue`](https://surveyjs.io/form-library/documentation/api-reference/itemvalue) objects even when it is empty or equal to the `value` property. Default value: `false`. View an example below.
     *
     * - `localizableStringSerializeAsObject`: `boolean`\
     * Enable this property if you want to serialize [`LocalizableString`](https://surveyjs.io/form-library/documentation/api-reference/localizablestring) instances as objects even when they include only a translation string for the default locale. For example, `"Custom String"` will be serialized as `{ default: "Custom String" }`. Default value: `false`.
     *
     * ```js
     * import { ItemValue, settings } from "survey-core";
     *
     * // `itemValueSerializeAsObject` example
     * settings.localization.itemValueSerializeAsObject = true;
     * const item = new ItemValue(5);
     * const itemString = item.toJSON(); // Produces { value: 5 } instead of 5
     *
     * // `itemValueSerializeDisplayText` example
     * settings.localization.itemValueSerializeDisplayText = true;
     * const item = new ItemValue("item1");
     * const itemString = item.toJSON(); // Produces { value: "item1", text: "item1" } instead of "item1"
     * ```
     */
    serialization: {
        itemValueSerializeAsObject: boolean;
        itemValueSerializeDisplayText: boolean;
        localizableStringSerializeAsObject: boolean;
    };
    /**
     * This property is obsolete. Use the [`settings.serialization.itemValueSerializeAsObject`](https://surveyjs.io/form-library/documentation/api-reference/settings#serialization) property instead.
     */
    itemValueAlwaysSerializeAsObject: boolean;
    /**
     * This property is obsolete. Use the [`settings.serialization.itemValueSerializeDisplayText`](https://surveyjs.io/form-library/documentation/api-reference/settings#serialization) property instead.
     */
    itemValueAlwaysSerializeText: boolean;
    /**
     * This property is obsolete. Use the [`settings.serialization.localizableStringSerializeAsObject`](https://surveyjs.io/form-library/documentation/api-reference/settings#serialization) property instead.
     */
    serializeLocalizableStringAsObject: boolean;
    /**
     * An object that configures lazy rendering.
     *
     * Nested properties:
     *
     * - `enabled`: `boolean`\
     * Specifies whether to add questions to the DOM only when they get into the viewport. Default value: `false`.
     *
     * > Lazy rendering is an experimental feature that may not work as expected in all use cases.
     */
    lazyRender: {
        enabled: boolean;
        firstBatchSize: number;
    };
    /**
     * This property is obsolete. Use the [`settings.lazyRender.enabled`](https://surveyjs.io/form-library/documentation/api-reference/settings#lazyRender) property instead.
     */
    lazyRowsRendering: boolean;
    lazyRowsRenderingStartRow: number;
    /**
     * An object with properties that apply to [Single-Choice](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model), [Multiple-Choice](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list), and [Dynamic Matrix](https://surveyjs.io/form-library/documentation/api-reference/dynamic-matrix-table-question-model) questions.
     *
     * Nested properties:
     *
     * - `defaultRowName`: `string`\
     * A property key that stores an object with default cell values. Default value: "default".
     *
     * - `defaultCellType`: `string`\
     * The default type of matrix cells. Default value: `"dropdown"`.\
     * You can specify this setting for individual questions or matrix columns: [`cellType`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-matrix-table-question-model#cellType). Refer to the `cellType` property description for information on possible values.
     *
     * - `totalsSuffix`: `string`\
     * A suffix added to the name of the property that stores total values. The resulting property name consists of the matrix name and the suffix. Default value: `"-total"`.
     *
     * - `maxRowCount`: `number`\
     * A maximum number of rows in a Dynamic Matrix. Default value: 1000.\
     * You can specify this setting for an individual Dynamic Matrix: [`maxRowCount`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-matrix-table-question-model#maxRowCount).
     *
     * - `maxRowCountInCondition`: `number`\
     * A maximum number of matrix rows included in the Condition drop-down menu in Survey Creator. This menu is used to configure conditional survey logic. Default value: 1.\
     * If you set this property to 0, the Condition menu does not include any matrix rows. Users still can specify conditions that use matrix rows but only with Manual Entry.
     *
     * - `renderRemoveAsIcon`: `boolean`\
     * Disable this property if you want to render the Remove action in Dynamic Matrix as a button. Otherwise, the action is rendered as an icon. Default value: `true`.
     *
     * - `columnWidthsByType`: `object`\
     * An object that specifies fixed and minimum column width based on the column type.\
     * Example: `settings.matrix.columnWidthsByType = { "tagbox": { minWidth: "240px", width: "300px" } }`
     *
     * - `rateSize`: `"small"` (default) | `"normal"`\
     * Specifies the size of rate values. Applies to [Rating Scale](https://surveyjs.io/form-library/examples/rating-scale/) questions within matrixes.
     */
    matrix: {
        defaultCellType: string;
        defaultRowName: string;
        totalsSuffix: string;
        maxRowCount: number;
        maxRowCountInCondition: number;
        renderRemoveAsIcon: boolean;
        columnWidthsByType: {
            [index: string]: {
                minWidth?: string;
                width?: string;
            };
        };
        rateSize: "small" | "normal";
    };
    /**
     * This property is obsolete. Use the [`settings.matrix.defaultRowName`](https://surveyjs.io/form-library/documentation/api-reference/settings#matrix) property instead.
     */
    matrixDefaultRowName: string;
    /**
     * This property is obsolete. Use the [`settings.matrix.defaultCellType`](https://surveyjs.io/form-library/documentation/api-reference/settings#matrix) property instead.
     */
    matrixDefaultCellType: string;
    /**
     * This property is obsolete. Use the [`settings.matrix.totalsSuffix`](https://surveyjs.io/form-library/documentation/api-reference/settings#matrix) property instead.
     */
    matrixTotalValuePostFix: string;
    /**
     * This property is obsolete. Use the [`settings.matrix.maxRowCount`](https://surveyjs.io/form-library/documentation/api-reference/settings#matrix) property instead.
     */
    matrixMaximumRowCount: number;
    /**
     * This property is obsolete. Use the [`settings.matrix.maxRowCountInCondition`](https://surveyjs.io/form-library/documentation/api-reference/settings#matrix) property instead.
     */
    matrixMaxRowCountInCondition: number;
    /**
     * This property is obsolete. Use the [`settings.matrix.renderRemoveAsIcon`](https://surveyjs.io/form-library/documentation/api-reference/settings#matrix) property instead.
     */
    matrixRenderRemoveAsIcon: boolean;
    /**
     * An object with properties that apply to [Dynamic Panel](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model) questions.
     *
     * Nested properties:
     *
     * - `maxPanelCount`: `number`\
     * A maximum number of panels in Dynamic Panel. Default value: 100.\
     * You can specify this setting for an individual Dynamic Panel: [`maxPanelCount`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#maxPanelCount).
     *
     * - `maxPanelCountInCondition`: `number`\
     * A maximum number of Dynamic Panel panels included in the Condition drop-down menu in Survey Creator. This menu is used to configure conditional survey logic. Default value: 1.\
     * If you set this property to 0, the Condition menu does not include any panel questions. Users still can specify conditions that use panel questions but only with Manual Entry.
     */
    panel: {
        maxPanelCount: number;
        maxPanelCountInCondition: number;
    };
    /**
     * This property is obsolete. Use the [`settings.panel.maxPanelCountInCondition`](https://surveyjs.io/form-library/documentation/api-reference/settings#panel) property instead.
     */
    panelDynamicMaxPanelCountInCondition: number;
    /**
     * This property is obsolete. Use the [`settings.panel.maxPanelCount`](https://surveyjs.io/form-library/documentation/api-reference/settings#panel) property instead.
     */
    panelMaximumPanelCount: number;
    /**
     * An object with properties that configure questions in read-only mode.
     *
     * Nested properties:
     *
     * - `commentRenderMode`: `"textarea"` (default) | `"div"`\
     * Specifies how to render the input field of [Comment](https://surveyjs.io/form-library/documentation/api-reference/comment-field-model) questions in [read-only](https://surveyjs.io/form-library/documentation/api-reference/comment-field-model#readOnly) mode: as a disabled `<textarea>` element or as a `<div>` element with a non-editable question value within it.
     *
     * - `textRenderMode`: `"input"` (default) | `"div"`\
     * Specifies how to render the input field of [Text](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model) questions in [read-only](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#readOnly) mode: as a disabled `<input>` element or as a `<div>` element with a non-editable question value within it.
     */
    readOnly: {
        enableValidation: boolean;
        commentRenderMode: string;
        textRenderMode: string;
    };
    /**
     * This property is obsolete. Use the [`settings.readOnly.commentRenderMode`](https://surveyjs.io/form-library/documentation/api-reference/settings#readOnly) property instead.
     */
    readOnlyCommentRenderMode: string;
    /**
     * This property is obsolete. Use the [`settings.readOnly.textRenderMode`](https://surveyjs.io/form-library/documentation/api-reference/settings#readOnly) property instead.
     */
    readOnlyTextRenderMode: string;
    /**
     * An object with properties that configure question numbering.
     *
     * Nested properties:
     *
     * - `includeQuestionsWithHiddenNumber`: `boolean`\
     * Specifies whether to number questions whose [`hideNumber`](https://surveyjs.io/form-library/documentation/api-reference/question#hideNumber) property is enabled. Default value: `false`.
     *
     * - `includeQuestionsWithHiddenTitle`: `boolean`\
     * Specifies whether to number questions whose [`titleLocation`](https://surveyjs.io/form-library/documentation/api-reference/question#titleLocation) property is set to `"hidden"`. Default value: `false`.
     */
    numbering: {
        includeQuestionsWithHiddenNumber: boolean;
        includeQuestionsWithHiddenTitle: boolean;
    };
    /**
     * This property is obsolete. Use the [`settings.numbering.includeQuestionsWithHiddenTitle`](https://surveyjs.io/form-library/documentation/api-reference/settings#numbering) property instead.
     */
    setQuestionVisibleIndexForHiddenTitle: boolean;
    /**
     * This property is obsolete. Use the [`settings.numbering.includeQuestionsWithHiddenNumber`](https://surveyjs.io/form-library/documentation/api-reference/settings#numbering) property instead.
     */
    setQuestionVisibleIndexForHiddenNumber: boolean;
    /**
     * Specifies an action to perform when users press the Enter key within a survey.
     *
     * Possible values:
     *
     * - `"moveToNextEditor"` - Moves focus to the next editor.
     * - `"loseFocus"` - Removes focus from the current editor.
     * - `"default"` - Behaves as a standard `<input>` element.
     */
    enterKeyAction: "default" | "moveToNextEditor" | "loseFocus";
    /**
     * An object that configures string comparison.
     *
     * Nested properties:
     *
     * - `trimStrings`: `boolean`\
     * Specifies whether to remove whitespace from both ends of a string before the comparison. Default value: `true`.
     *
     * - `caseSensitive`: `boolean`\
     * Specifies whether to differentiate between capital and lower-case letters. Default value: `false`.
     */
    comparator: {
        trimStrings: boolean;
        caseSensitive: boolean;
        normalizeTextCallback: (str: string, reason: string) => string;
    };
    expressionDisableConversionChar: string;
    commentPrefix: string;
    /**
     * A suffix added to the name of the property that stores comments.
     *
     * Default value: "-Comment"
     *
     * You can specify this setting for an individual survey: [`commentSuffix`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#commentSuffix).
     */
    commentSuffix: string;
    /**
     * A separator used in a shorthand notation that specifies a value and display text for an [`ItemValue`](https://surveyjs.io/form-library/documentation/api-reference/itemvalue) object: `"value|text"`.
     *
     * Default value: `"|"`
     */
    itemValueSeparator: string;
    /**
     * A maximum number of rate values in a [Rating](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model) question.
     *
     * Default value: 20
     */
    ratingMaximumRateValueCount: number;
    /**
     * Specifies whether to close the drop-down menu of a [TagBox](https://surveyjs.io/form-library/examples/how-to-create-multiselect-tag-box/) question after a user selects a value.
     *
     * This setting applies to all TagBox questions on a page. You can use the [closeOnSelect](https://surveyjs.io/form-library/documentation/api-reference/dropdown-tag-box-model#closeOnSelect) property to specify the same setting for an individual TagBox question.
     */
    tagboxCloseOnSelect: boolean;
    /**
     * A property that allows you to display a custom confirm dialog.
     *
     * Set this property to a function that renders your custom dialog window. This function should return `true` if a user confirms an action or `false` otherwise.
     * @param message A message to be displayed in the confirm dialog window.
     */
    confirmActionFunc: (message: string) => boolean;
    /**
     * A property that allows you to display a custom confirm dialog in async mode or activate the standard browser dialog.
     *
     * To display a custom confirm dialog, set this property to a function that renders it. This function should return `true` to be enabled; otherwise, a survey executes the [`confirmActionFunc`](#confirmActionFunc) function. Pass the dialog result as the `callback` parameter: `true` if a user confirms an action, `false` otherwise.
     *
     * To activate the standard browser dialog, set the `confirmActionAsync` property to a function that returns `false`. With this configuration, a survey falls back to the [`confirmActionFunc`](#confirmActionFunc) function, which renders the standard browser dialog by default.
     *
     * ```js
     * import { settings } from "survey-core";
     *
     * // Display the standard browser dialog
     * settings.confirmActionAsync = () => {
     *    return false;
     * }
     * ```
     * @param message A message to be displayed in the confirm dialog window.
     * @param callback A callback function that should be called with `true` if a user confirms an action or `false` otherwise.
     */
    confirmActionAsync: (message: string, callback: (res: boolean) => void) => boolean;
    /**
     * A minimum width value for all survey elements.
     *
     * Default value: `"300px"`
     *
     * You can override this setting for individual elements: [`minWidth`](https://surveyjs.io/form-library/documentation/api-reference/surveyelement#minWidth).
     */
    minWidth: string;
    /**
     * A maximum width value for all survey elements.
     *
     * Default value: `"100%"`
     *
     * You can override this setting for individual elements: [`maxWidth`](https://surveyjs.io/form-library/documentation/api-reference/surveyelement#maxWidth).
     */
    maxWidth: string;
    /**
     * Specifies how many times surveys can re-evaluate expressions when a question value changes. This limit helps avoid recursions in expressions.
     *
     * Default value: 10
     */
    maxConditionRunCountOnValueChanged: number;
    /**
     * An object that configures notifications.
     *
     * Nested properties:
     *
     * - `lifetime`: `number`\
     * Specifies a time period during which a notification is displayed; measured in milliseconds.
     */
    notifications: {
        lifetime: number;
    };
    /**
     * Specifies how many milliseconds a survey should wait before it automatically switches to the next page. Applies only when [auto-advance](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#goNextPageAutomatic) is enabled.
     *
     * Default value: 300
     */
    autoAdvanceDelay: number;
    /**
     * Specifies the direction in which to lay out Checkbox and Radiogroup items. This setting affects the resulting UI when items are arranged in [more than one column](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model#colCount).
     *
     * Possible values:
     *
     * - `"row"` (default) - Items fill the current row, then move on to the next row.
     * - `"column"` - Items fill the current column, then move on to the next column.
     */
    showItemsInOrder: string;
    /**
     * A value to save in survey results when respondents select the None choice item.
     *
     * Default value: `"none"`
     */
    noneItemValue: string;
    /**
     * A list of supported validators by question type.
     */
    supportedValidators: {
        question: string[];
        comment: string[];
        text: string[];
        checkbox: string[];
        imagepicker: string[];
    };
    /**
     * Specifies a minimum date that users can enter into a [Text](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model) question with [`inputType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#inputType) set to `"date"` or `"datetime-local"`. Set this property to a string with the folllowing format: `"yyyy-mm-dd"`.
     */
    minDate: string;
    /**
     * Specifies a maximum date that users can enter into a [Text](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model) question with [`inputType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#inputType) set to `"date"` or `"datetime-local"`. Set this property to a string with the folllowing format: `"yyyy-mm-dd"`.
     */
    maxDate: string;
    showModal: (componentName: string, data: any, onApply: () => boolean, onCancel?: () => void, cssClass?: string, title?: string, displayMode?: "popup" | "overlay") => any;
    showDialog: (options: IDialogOptions, rootElement?: HTMLElement) => any;
    supportCreatorV2: boolean;
    showDefaultItemsInCreatorV2: boolean;
    /**
     * An object that specifies icon replacements. Object keys are built-in icon names. To use a custom icon, assign its name to the key of the icon you want to replace:
     *
     * ```js
     * import { settings } from "survey-core";
     *
     * settings.customIcons["icon-redo"] = "custom-redo-icon";
     * ```
     *
     * For more information about icons in SurveyJS, refer to the following help topic: [UI Icons](https://surveyjs.io/form-library/documentation/icons).
     */
    customIcons: {};
    /**
     * Specifies which part of a choice item responds to a drag gesture in Ranking questions.
     *
     * Possible values:
     *
     * - `"entireItem"` (default) - Users can use the entire choice item as a drag handle.
     * - `"icon"` - Users can only use the choice item icon as a drag handle.
     */
    rankingDragHandleArea: string;
    environment: ISurveyEnvironment;
    /**
     * Allows you to hide the maximum length indicator in text input questions.
     *
     * If you specify a question's [`maxLength`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#maxLength) property or a survey's [`maxTextLength`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#maxTextLength) property, text input questions indicate the number of entered characters and the character limit. Assign `false` to the `settings.showMaxLengthIndicator` property if you want to hide this indicator.
     *
     * Default value: `true`
     */
    showMaxLengthIndicator: boolean;
    /**
     * An object that specifies heading levels (`<h1>`, `<h2>`, etc.) to use when rendering survey, page, panel, and question titles.
     *
     * Default value: `{ survey: "h3", page: "h4", panel: "h4", question: "h5" }`
     *
     * If you want to modify heading levels for individual titles, handle `SurveyModel`'s [`onGetTitleTagName`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onGetTitleTagName) event.
     */
    titleTags: {
        survey: string;
        page: string;
        panel: string;
        question: string;
    };
    questions: {
        inputTypes: string[];
        dataList: string[];
    };
};
