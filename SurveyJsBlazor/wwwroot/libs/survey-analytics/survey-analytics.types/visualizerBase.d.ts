import { Question } from "survey-core";
import { IDataInfo, DataProvider } from "./dataProvider";
import { Event } from "survey-core";
/**
 * A base object for all visualizers. Use it to implement a custom visualizer.
 *
 * Constructor parameters:
 *
 * - `question`: [`Question`](https://surveyjs.io/form-library/documentation/api-reference/question)\
 * A survey question to visualize.
 * - `data`: `Array<any>`\
 * Survey results.
 * - `options`\
 * An object with the following properties:
 *    - `seriesValues`: `Array<string>`\
 *    Series values used to group data.
 *    - `seriesLabels`: `Array<string>`\
 *    Series labels to display. If this property is not set, `seriesValues` are used as labels.
 *    - `survey`: [`SurveyModel`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model)\
 *    Pass a `SurveyModel` instance if you want to use locales from the survey JSON schema.
 *    - `dataProvider`: `DataProvider`\
 *    A data provider for this visualizer.
 * - `type`: `string`\
 * *(Optional)* The visualizer's type.
 *
 * [View Demo](https://surveyjs.io/dashboard/examples/how-to-plot-survey-data-in-custom-bar-chart/ (linkStyle))
 */
export declare class VisualizerBase implements IDataInfo {
    question: Question;
    options: {
        [index: string]: any;
    };
    private _type?;
    private _showToolbar;
    private _footerVisualizer;
    private _dataProvider;
    labelTruncateLength: number;
    protected renderResult: HTMLElement;
    protected toolbarContainer: HTMLElement;
    protected headerContainer: HTMLElement;
    protected contentContainer: HTMLElement;
    protected footerContainer: HTMLElement;
    protected _supportSelection: boolean;
    static otherCommentCollapsed: boolean;
    /**
     * An event that is raised after the visualizer's content is rendered.
     *
     * Parameters:
     *
     * - `sender`: `VisualizerBase`\
     * A `VisualizerBase` instance that raised the event.
     *
     * - `options.htmlElement`: `HTMLElement`\
     * A page element with the visualizer's content.
     * @see render
     * @see refresh
     **/
    onAfterRender: Event<(sender: VisualizerBase, options: any) => any, VisualizerBase, any>;
    protected afterRender(contentContainer: HTMLElement): void;
    /**
     * An event that is raised after a new locale is set.
     *
     * Parameters:
     *
     * - `sender`: `VisualizerBase`\
     * A `VisualizerBase` instance that raised the event.
     *
     * - `options.locale`: `string`\
     * The indentifier of a new locale (for example, "en").
     * @see locale
     */
    onLocaleChanged: Event<(sender: VisualizerBase, options: {
        locale: string;
    }) => any, VisualizerBase, any>;
    protected toolbarItemCreators: {
        [name: string]: (toolbar?: HTMLDivElement) => HTMLElement;
    };
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: {
        [index: string]: any;
    }, _type?: string);
    protected get questionOptions(): any;
    protected onDataChanged(): void;
    /**
     * Returns the identifier of a visualized question.
     */
    get name(): string | Array<string>;
    /**
     * Indicates whether the visualizer displays a header. This property is `true` when a visualized question has a correct answer.
     * @see hasFooter
     */
    get hasHeader(): boolean;
    /**
     * Indicates whether the visualizer displays a footer. This property is `true` when a visualized question has a comment.
     * @see hasHeader
     */
    get hasFooter(): boolean;
    protected createVisualizer<T = VisualizerBase>(question: Question): T;
    /**
     * Allows you to access the footer visualizer. Returns `undefined` if the footer is absent.
     * @see hasFooter
     */
    get footerVisualizer(): VisualizerBase;
    /**
     * Indicates whether users can select series points to cross-filter charts. To allow or disallow selection, set the `allowSelection` property of the `options` object in the constructor.
     */
    get supportSelection(): boolean;
    getSeriesValues(): Array<string>;
    getSeriesLabels(): Array<string>;
    getValues(): Array<any>;
    getLabels(): Array<string>;
    /**
     * Registers a function used to create a toolbar item for this visualizer.
     *
     * The following code shows how to add a custom button and drop-down menu to the toolbar:
     *
     * ```js
     * import { VisualizationPanel, DocumentHelper } from "survey-analytics";
     *
     * const vizPanel = new VisualizationPanel( ... );
     *
     * // Add a custom button to the toolbar
     * vizPanel.visualizers[0].registerToolbarItem("my-toolbar-button", () => {
     *   return DocumentHelper.createButton(
     *     // A button click event handler
     *     () => {
     *       alert("Custom toolbar button is clicked");
     *     },
     *     // Button caption
     *     "Button"
     *   );
     * });
     *
     * // Add a custom drop-down menu to the toolbar
     * vizPanel.visualizers[0].registerToolbarItem("my-toolbar-dropdown", () => {
     *   return DocumentHelper.createSelector(
     *     // Menu items
     *     [
     *       { value: 1, text: "One" },
     *       { value: 2, text: "Two" },
     *       { value: 3, text: "Three" }
     *     ],
     *     // A function that specifies initial selection
     *     (option) => false,
     *     // An event handler that is executed when selection is changed
     *     (e) => {
     *       alert(e.target.value);
     *     }
     *   );
     * });
     * ```
     * @param name A custom name for the toolbar item.
     * @param creator A function that accepts the toolbar and should return an `HTMLElement` with the toolbar item.
     * @see unregisterToolbarItem
     */
    registerToolbarItem(name: string, creator: (toolbar?: HTMLDivElement) => HTMLElement): void;
    /**
     *
     * Unregisters a function used to create a toolbar item. Allows you to remove a toolbar item.
     * @param name A toolbar item name.
     * @returns A function previously used to [register](#registerToolbarItem) the removed toolbar item.
     * @see registerToolbarItem
     */
    unregisterToolbarItem(name: string): (toolbar?: HTMLDivElement) => HTMLElement;
    /**
     * Returns the visualizer's type.
     */
    get type(): string;
    /**
     * Obsolete. Use [`surveyData`](https://surveyjs.io/dashboard/documentation/api-reference/visualizationpanel#surveyData) instead.
     */
    protected get data(): {
        [index: string]: any;
    }[];
    /**
     * Returns an array of survey results used to calculate values for visualization. If a user applies a filter, the array is also filtered.
     *
     * To get an array of calculated and visualized values, call the [`getCalculatedValues()`](https://surveyjs.io/dashboard/documentation/api-reference/visualizerbase#getCalculatedValues) method.
     */
    protected get surveyData(): {
        [index: string]: any;
    }[];
    protected get dataProvider(): DataProvider;
    /**
     * Updates visualized data.
     * @param data A data array with survey results to be visualized.
     */
    updateData(data: Array<{
        [index: string]: any;
    }>): void;
    onUpdate: () => void;
    invokeOnUpdate(): void;
    /**
     * Deletes the visualizer and all its elements from the DOM.
     * @see clear
     */
    destroy(): void;
    /**
     * Empties the toolbar, header, footer, and content containers.
     *
     * If you want to empty and delete the visualizer and all its elements from the DOM, call the [`destroy()`](https://surveyjs.io/dashboard/documentation/api-reference/visualizerbase#destroy) method instead.
     */
    clear(): void;
    protected createToolbarItems(toolbar: HTMLDivElement): void;
    protected getCorrectAnswerText(): string;
    protected destroyToolbar(container: HTMLElement): void;
    protected renderToolbar(container: HTMLElement): void;
    protected destroyHeader(container: HTMLElement): void;
    protected destroyContent(container: HTMLElement): void;
    protected renderHeader(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
    protected destroyFooter(container: HTMLElement): void;
    protected renderFooter(container: HTMLElement): void;
    /**
     * Renders the visualizer in a specified container.
     * @param targetElement An `HTMLElement` or an `id` of a page element in which you want to render the visualizer.
     */
    render(targetElement: HTMLElement | string): void;
    /**
     * Re-renders the visualizer and its content.
     */
    refresh(): void;
    protected processText(text: string): string;
    getRandomColor(): any;
    private _backgroundColor;
    get backgroundColor(): string;
    set backgroundColor(value: string);
    protected getBackgroundColorCore(): string;
    protected setBackgroundColorCore(color: string): void;
    static customColors: string[];
    private static colors;
    getColors(count?: number): any;
    /**
     * Gets or sets the visibility of the visualizer's toolbar.
     *
     * Default value: `true`
     */
    get showToolbar(): boolean;
    set showToolbar(newValue: boolean);
    /**
     * Obsolete. Use [`getCalculatedValues()`](https://surveyjs.io/dashboard/documentation/api-reference/visualizationpanel#getCalculatedValues) instead.
     */
    getData(): any;
    /**
     * Returns an array of calculated and visualized values. If a user applies a filter, the array is also filtered.
     *
     * To get an array of source survey results, use the [`surveyData`](https://surveyjs.io/dashboard/documentation/api-reference/visualizerbase#surveyData) property.
     */
    getCalculatedValues(): any;
    /**
     * Returns an object with properties that describe a current visualizer state. The properties are different for each individual visualizer.
     *
     * > This method is overriden in descendant classes.
     * @see setState
     */
    getState(): any;
    /**
     * Sets the visualizer's state.
     *
     * > This method is overriden in descendant classes.
     * @see getState
     */
    setState(state: any): void;
    /**
     * Gets or sets the current locale.
     *
     * If you want to inherit the locale from a visualized survey, assign a `SurveyModel` instance to the `survey` property of the `options` object in the constructor.
     *
     * If the survey is [translated into more than one language](https://surveyjs.io/form-library/examples/survey-localization/), the toolbar displays a language selection drop-down menu.
     * @see onLocaleChanged
     */
    get locale(): string;
    set locale(newLocale: string);
    protected setLocale(newLocale: string): void;
}
