import { Event, SurveyModel } from "survey-core";
import { VisualizerBase } from "./visualizerBase";
import { AlternativeVisualizersWrapper } from "./alternativeVizualizersWrapper";
import { IVisualizerPanelElement, IState, IPermission } from "./config";
import { LayoutEngine } from "./layoutEngine";
import { DataProvider } from "./dataProvider";
export interface IVisualizerPanelRenderedElement extends IVisualizerPanelElement {
    renderedElement?: HTMLElement;
}
/**
 * Visualization Panel configuration. Pass it as the third argument to the [`VisualizationPanel`](https://surveyjs.io/dashboard/documentation/api-reference/visualizationpanel) constructor:
 *
 * ```js
 * import { VisualizationPanel } from "survey-analytics";
 *
 * const vizPanel = new VisualizationPanel(
 *   surveyQuestions,
 *   surveyResults,
 *   vizPanelOptions
 * );
 * ```
 */
export interface IVisualizationPanelOptions {
    /**
     * The number of label characters after which truncation starts.
     *
     * Set this property to -1 to disable truncation.
     *
     * Default value: 27
     */
    labelTruncateLength?: number;
    allowMakeQuestionsPrivate?: boolean;
    seriesValues?: string[];
    seriesLabels?: string[];
    useValuesAsLabels?: boolean;
    /**
     * Pass a survey instance to use survey locales in the Visualization Panel.
     */
    survey?: SurveyModel;
    /**
     * A common data provider for all visualizers.
     */
    dataProvider?: DataProvider;
    /**
     * Allows users to change the visibility of individual charts.
     *
     * This property adds a Hide button to each chart.
     *
     * Default value: `true`
     */
    allowHideQuestions?: boolean;
    /**
     * Specifies whether to arrange charts based on the available screen space and allow users to reorder them via drag and drop.
     *
     * If this property is disabled, charts are displayed one under another, and users cannot drag and drop them. If you want to disable only drag and drop, set the [`allowDragDrop`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions#allowDynamicLayout) property to `false`.
     *
     * Default value: `true`
     *
     * [View Demo](https://surveyjs.io/dashboard/examples/custom-layout/ (linkStyle))
     * @see layoutEngine
     */
    allowDynamicLayout?: boolean;
    /**
     * Specifies whether users can drag and drop charts. Applies only if [`allowDynamicLayout`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions#allowDynamicLayout) is `true`.
     *
     * Default value: `true`
     * @see layoutEngine
     */
    allowDragDrop?: boolean;
    /**
     * A layout engine used to arrange charts on the Visualization Panel.
     *
     * You can use this property to integrate a third-party layout engine with SurveyJS Dashboard.
     *
     * @see allowDynamicLayout
     */
    layoutEngine?: LayoutEngine;
    /**
     * Allows users to switch between absolute and percentage values in bar charts.
     *
     * This property adds a Show Percentages button to each bar chart.
     *
     * Default value: `false`
     *
     * @see showPercentages
     * @see showOnlyPercentages
     * @see percentagePrecision
     */
    allowShowPercentages?: boolean;
    /**
     * Specifies whether bar charts display percentages in addition to absolute values.
     *
     * Users can change this property value if you enable the `allowShowPercentages` property.
     *
     * Default value: `false`
     *
     * @see allowShowPercentages
     * @see showOnlyPercentages
     * @see percentagePrecision
     */
    showPercentages?: boolean;
    /**
     * Specifies whether bar charts display only percentages, without absolute values.
     *
     * Applies only if the `allowShowPercentages` or `showPercentages` property is enabled.
     *
     * Default value: `false`
     *
     * @see allowShowPercentages
     * @see showPercentages
     * @see percentagePrecision
     */
    showOnlyPercentages?: boolean;
    /**
     * Specifies percentage precision.
     *
     * Default value: 0
     *
     * @see allowShowPercentages
     * @see showPercentages
     * @see showOnlyPercentages
     */
    percentagePrecision?: number;
    haveCommercialLicense?: boolean;
    /**
     * Allows users to sort answers by answer count. Applies only to bar and scatter charts.
     *
     * This property adds a Sorting dropdown to each bar and scatter chart.
     *
     * Default value: `true`
     *
     * @see answersOrder
     */
    allowChangeAnswersOrder?: boolean;
    /**
     * Specifies how to sort answers in bar and scatter charts.
     *
     * Accepted values:
     *
     * - `"default"` (default) - Do not sort answers.
     * - `"asc"` - Sort answers by ascending answer count.
     * - `"desc"` - Sort answers by descending answer count.
     *
     * Users can change this property value if you enable the `allowChangeAnswersOrder` property.
     *
     * @see allowChangeAnswersOrder
     */
    answersOrder?: "default" | "asc" | "desc";
    /**
     * Allows users to hide answers with zero count in bar and scatter charts.
     *
     * This property adds a Hide Empty Answers button to each bar and scatter chart.
     *
     * Default value: `false`
     */
    allowHideEmptyAnswers?: boolean;
    /**
     * Hides answers with zero count in bar and scatter charts.
     *
     * Users can change this property value if you enable the `allowHideEmptyAnswers` property.
     *
     * Default value: `false`
     *
     * @see allowHideEmptyAnswers
     */
    hideEmptyAnswers?: boolean;
    /**
     * Allows users to select whether to show top 5, 10, or 20 answers by answer count.
     *
     * This property adds a Top N Answers dropdown to each chart.
     *
     * Default value: `false`
     */
    allowTopNAnswers?: boolean;
    /**
     * Allows users to show the number of respondents who did not answer a particular question.
     *
     * This property adds a Show Missing Answers button to each chart.
     *
     * Default value: `false`
     */
    allowShowMissingAnswers?: boolean;
    allowExperimentalFeatures?: boolean;
    /**
     * Default chart type.
     *
     * Accepted values depend on the question type as follows:
     *
     * - Boolean: `"bar"` | `"pie"` | `"doughnut"`
     * - Date, Number: `"bar"` | `"scatter"`
     * - Matrix: `"bar"` | `"pie"` | `"doughnut"` | `"stackedbar"`
     * - Rating: `"bar"` | `"scatter"` | `"gauge"` | `"bullet"`
     * - Radiogroup, Checkbox, Dropdown, Image Picker: `"bar"` | `"pie"` | `"doughnut"` | `"scatter"`
     *
     * To set a type for an individual chart, access this chart in the `visualizers` array and set its `chartType` property to one of the values described above:
     *
     * ```js
     * const vizPanel = new SurveyAnalytics.VisualizationPanel( ... );
     * vizPanel.visualizers[0].chartType = "stackedbar";
     * ```
     *
     */
    defaultChartType?: string;
    /**
     * Allows users to transpose a visualized matrix question.
     *
     * This property adds a Transpose button to charts that visualize matrixes. When users select Per Values, matrix rows go to chart arguments and matrix columns form chart series. When users select Per Columns, matrix rows form chart series and matrix columns go to chart arguments.
     *
     * Default value: `false`
     */
    allowTransposeData?: boolean;
    /**
     * Allows users to cross-filter charts. The filter applies when users select a series point.
     *
     * Default value: `true`
     */
    allowSelection?: boolean;
    renderContent?: Function;
    destroyContent?: Function;
    /**
     * Removes HTML tags from survey element titles.
     *
     * Survey element titles can contain HTML markup and are specified by users. An attacker can inject malicious code into the titles. To guard against it, keep this property set to `true`.
     *
     * Default value: `true`
     */
    stripHtmlFromTitles?: boolean;
}
/**
 * An object that visualizes survey results and allows users to analyze them.
 *
 * Constructor parameters:
 *
 * - `questions`: Array\<[`Question`](https://surveyjs.io/form-library/documentation/api-reference/question)\>\
 * Survey questions to visualize. Call `SurveyModel`'s [`getAllQuestions()`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#getQuestionByName) method to access all survey questions and pass its result as the `questions` parameter.
 * - `data`: `Array<any>`\
 * Survey results.
 * - `options`: [`IVisualizationPanelOptions`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions)\
 * Visualization Panel configuration.
 *
 * [View Demo](https://surveyjs.io/dashboard/examples/interactive-survey-data-dashboard/ (linkStyle))
 */
export declare class VisualizationPanel extends VisualizerBase {
    protected questions: Array<any>;
    private _elements;
    static haveCommercialLicense: boolean;
    visualizers: Array<VisualizerBase>;
    private haveCommercialLicense;
    private renderedQuestionsCount;
    constructor(questions: Array<any>, data: Array<{
        [index: string]: any;
    }>, options?: IVisualizationPanelOptions, _elements?: Array<IVisualizerPanelRenderedElement>);
    private onAfterRenderQuestionCallback;
    /**
     * An event that is raised when a user selects a different visualizer type from the Type drop-down menu.
     *
     * Parameters:
     *
     * - `sender`: `AlternativeVisualizersWrapper`\
     * An object that controls altenative visualizers.
     *
     * - `options.visualizer`: `VisualizerBase`\
     * An applied visualizer.
     **/
    onAlternativeVisualizerChanged: Event<(sender: AlternativeVisualizersWrapper, options: any) => any, AlternativeVisualizersWrapper, any>;
    private onAlternativeVisualizerChangedCallback;
    protected showElementCore(element: IVisualizerPanelRenderedElement, elementIndex?: number): void;
    showElement(elementName: string): void;
    protected hideElementCore(element: IVisualizerPanelRenderedElement): void;
    hideElement(elementName: string): void;
    /**
     * Hides all panel elements. Users can select the elements they want to show from a drop-down menu.
     * @see showAllElements
     * @see allowHideQuestions
     */
    hideAllElements(): void;
    /**
     * Shows all panel elements if they are hidden to a drop-down menu.
     * @see hideAllElements
     * @see allowHideQuestions
     */
    showAllElements(): void;
    protected makeElementPrivate(element: IVisualizerPanelElement): void;
    protected makeElementPublic(element: IVisualizerPanelElement): void;
    protected moveVisibleElement(fromVisibleIndex: number, toVisibleIndex: number): void;
    protected moveElement(fromIndex: number, toIndex: number): void;
    protected setBackgroundColorCore(color: string): void;
    private buildVisualizers;
    private destroyVisualizers;
    protected setLocale(newLocale: string): void;
    /**
     * Returns the [`allowDynamicLayout`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions#allowDynamicLayout) property value of the [`IVisualizationPanelOptions`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions) object.
     */
    get allowDynamicLayout(): boolean;
    /**
     * Returns the [`allowDragDrop`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions#allowDragDrop) property value of the [`IVisualizationPanelOptions`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions) object.
     */
    get allowDragDrop(): boolean;
    /**
     * Returns the [`allowHideQuestions`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions#allowHideQuestions) property value of the [`IVisualizationPanelOptions`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions) object.
     */
    get allowHideQuestions(): boolean;
    get allowMakeQuestionsPrivate(): boolean;
    private _layoutEngine;
    /**
     * Returns a [`LayoutEngine`](https://surveyjs.io/dashboard/documentation/api-reference/layoutengine) instance used to arrange visualization items on `VisualizationPanel`.
     */
    get layoutEngine(): LayoutEngine;
    protected buildElements(questions: any[]): IVisualizerPanelElement[];
    /**
     * Returns an array of [`IVisualizerPanelElement`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizerpanelelement) objects with information about visualization items.
     * @param questionNames Question [names](https://surveyjs.io/form-library/documentation/api-reference/question#name). Do not specify this parameter to get an array of all visualization items.
     * @see visibleElements
     * @see hiddenElements
     */
    getElements(questionNames?: Array<string>): IVisualizerPanelElement[];
    /**
     * Returns an array of [`IVisualizerPanelElement`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizerpanelelement) objects with information about currently visible visualization items.
     *
     * If you want to disallow users to hide visualization items, set the [`allowHideQuestions`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions#allowHideQuestions) property to `false`.
     * @see hiddenElements
     * @see getElements
     */
    get visibleElements(): IVisualizerPanelRenderedElement[];
    /**
     * Returns an array of [`IVisualizerPanelElement`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizerpanelelement) objects with information about currently hidden visualization items.
     *
     * If you want to disallow users to hide visualization items, set the [`allowHideQuestions`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions#allowHideQuestions) property to `false`.
     * @see visibleElements
     * @see getElements
     */
    get hiddenElements(): IVisualizerPanelRenderedElement[];
    get publicElements(): IVisualizerPanelRenderedElement[];
    get privateElements(): IVisualizerPanelRenderedElement[];
    protected get locales(): any;
    /**
     * Returns a visualization item with a specified question name.
     * @param name A question [name](https://surveyjs.io/form-library/documentation/api-reference/question#name).
     */
    getElement(questionName: string): IVisualizerPanelRenderedElement;
    /**
     * Returns a [visualizer](https://surveyjs.io/dashboard/documentation/api-reference/visualizerbase) that visualizes a specified survey question.
     * @param questionName A question [name](https://surveyjs.io/form-library/documentation/api-reference/question#name).
     */
    getVisualizer(questionName: string): VisualizerBase;
    /**
     * Obsolete. Use [`onElementShown`](https://surveyjs.io/dashboard/documentation/api-reference/visualizationpanel#onElementShown), [`onElementHidden`](https://surveyjs.io/dashboard/documentation/api-reference/visualizationpanel#onElementHidden), or [`onElementMoved`](https://surveyjs.io/dashboard/documentation/api-reference/visualizationpanel#onElementMoved) instead.
     */
    onVisibleElementsChanged: Event<(sender: VisualizationPanel, options: any) => any, VisualizationPanel, any>;
    /**
     * An event that is raised when users [show a visualization item](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions#allowHideQuestions).
     *
     * Parameters:
     *
     * - `sender`: [`VisualizationPanel`](https://surveyjs.io/dashboard/documentation/api-reference/visualizationpanel)\
     * A `VisualizationPanel` that raised the event.
     *
     * - `options.elements`: Array\<[`IVisualizerPanelElement`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizerpanelelement)\>\
     * Information about all visualization items rendered by this `VisualizationPanel`.
     *
     * - `options.element`: [`IVisualizerPanelElement`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizerpanelelement)\
     * A visualization item that has been shown.
     */
    onElementShown: Event<(sender: VisualizationPanel, options: any) => any, VisualizationPanel, any>;
    /**
     * An event that is raised when users [hide a visualization item](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions#allowHideQuestions).
     *
     * Parameters:
     *
     * - `sender`: [`VisualizationPanel`](https://surveyjs.io/dashboard/documentation/api-reference/visualizationpanel)\
     * A `VisualizationPanel` that raised the event.
     *
     * - `options.elements`: Array\<[`IVisualizerPanelElement`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizerpanelelement)\>\
     * Information about all visualization items rendered by this `VisualizationPanel`.
     *
     * - `options.element`: [`IVisualizerPanelElement`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizerpanelelement)\
     * A visualization item that has been hidden.
     */
    onElementHidden: Event<(sender: VisualizationPanel, options: any) => any, VisualizationPanel, any>;
    /**
     * An event that is raised when users [move a visualization item](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizationpaneloptions#allowDynamicLayout).
     *
     * Parameters:
     *
     * - `sender`: [`VisualizationPanel`](https://surveyjs.io/dashboard/documentation/api-reference/visualizationpanel)\
     * A `VisualizationPanel` that raised the event.
     *
     * - `options.elements`: Array\<[`IVisualizerPanelElement`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizerpanelelement)\>\
     * Information about all visualization items rendered by this `VisualizationPanel`.
     *
     * - `options.element`: [`IVisualizerPanelElement`](https://surveyjs.io/dashboard/documentation/api-reference/ivisualizerpanelelement)\
     * A visualization item that has been moved.
     */
    onElementMoved: Event<(sender: VisualizationPanel, options: any) => any, VisualizationPanel, any>;
    protected visibleElementsChanged(element: IVisualizerPanelElement, reason: string): void;
    onStateChanged: Event<(sender: VisualizationPanel, state: IState) => any, VisualizationPanel, any>;
    onPermissionsChangedCallback: any;
    protected renderPanelElement(element: IVisualizerPanelRenderedElement, container: HTMLElement): HTMLElement;
    protected renderToolbar(container: HTMLElement): void;
    renderContent(container: HTMLElement): void;
    protected destroyContent(container: HTMLElement): void;
    /**
     * Redraws the `VisualizationPanel` and all its content.
     */
    refresh(): void;
    layout(): void;
    /**
     * Filters visualized data based on a specified question name and value. This method is called when a user clicks a chart point.
     * @param questionName A question [name](https://surveyjs.io/form-library/documentation/api-reference/question#name).
     * @param selectedValue
     * @see IVisualizationPanelOptions.allowSelection
     */
    setFilter(questionName: string, selectedValue: any): void;
    /**
     * The state of `VisualizationPanel`. Includes information about the visualized elements and current locale.
     */
    get state(): IState;
    set state(newState: IState);
    get permissions(): IPermission[];
    set permissions(permissions: IPermission[]);
    destroy(): void;
}
