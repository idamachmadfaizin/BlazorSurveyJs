/*Type definitions for SurveyJS Analytics library v1.7.26
Copyright (c) 2015-2019 Devsoft Baltic OÜ  - http://surveyjs.io/
Definitions by: Devsoft Baltic OÜ <https://github.com/surveyjs/>
*/
// Dependencies for this module:
//   ../../survey-core

import { Event } from "survey-core";
import { Question } from "survey-core";
import { Question, IQuestion } from "survey-core";
import { QuestionMatrixDropdownModel } from "survey-core";
import { SurveyModel, Event } from "survey-core";
import { SurveyModel } from "survey-core";
import { Question, ItemValue } from "survey-core";
import { ItemValue, QuestionMatrixModel, Question } from "survey-core";
import { Question, QuestionBooleanModel } from "survey-core";
import { ItemValue } from "survey-core";

import "./localization/farsi";
import "./localization/french";
import "./localization/russian";

export var localization: {
    currentLocaleValue: string;
    defaultLocaleValue: string;
    locales: {
        [index: string]: any;
    };
    localeNames: {
        [index: string]: any;
    };
    supportedLocales: any[];
    currentLocale: string;
    defaultLocale: string;
    getString: (strName: string) => any;
    getLocales: () => Array<string>;
};
export var surveyStrings: {
    groupButton: string;
    ungroupButton: string;
    selectButton: string;
    hideColumn: string;
    showColumn: string;
    makePrivateColumn: string;
    makePublicColumn: string;
    moveToDetail: string;
    showAsColumn: string;
    filterPlaceholder: string;
    removeRows: string;
    showLabel: string;
    entriesLabel: string;
    visualizer_text: string;
    visualizer_wordcloud: string;
    chartType_bar: string;
    chartType_stackedbar: string;
    chartType_doughnut: string;
    chartType_pie: string;
    chartType_scatter: string;
    chartType_gauge: string;
    chartType_bullet: string;
    hideButton: string;
    makePrivateButton: string;
    makePublicButton: string;
    showButton: string;
    resetFilter: string;
    changeLocale: string;
    clearButton: string;
    addElement: string;
    defaultOrder: string;
    ascOrder: string;
    descOrder: string;
    showMinorColumns: string;
    otherCommentTitle: string;
    showPercentages: string;
    hidePercentages: string;
};

/**
    * Describes data info:
    * dataName - question name, used as a key to obtain question data
    * getValues - function returning an array of all possible values
    * getLabels - function returning an array of human-friendly descriptions for values
    * getSeriesValues - function returning an array of all possible series values
    * getSeriesLabels - function returning an array of human-friendly descriptions for series values
    */
export interface IDataInfo {
        dataName: string;
        getValues(): Array<any>;
        getLabels(): Array<string>;
        getSeriesValues(): Array<string>;
        getSeriesLabels(): Array<string>;
}
export class DataProvider {
        static seriesMarkerKey: string;
        protected filterValues: {
                [index: string]: any;
        };
        constructor(_data?: Array<any>);
        reset(): void;
        get data(): Array<any>;
        set data(data: Array<any>);
        get filteredData(): {
                [index: string]: any;
        }[];
        /**
            * Sets filter by question name and value.
            */
        setFilter(questionName: string, selectedValue: any): void;
        protected getDataCore(dataInfo: IDataInfo): number[][];
        /**
            * Returns calculated statisctics for the IDataInfo object.
            */
        getData(dataInfo: IDataInfo): any[];
        /**
            * Fires when data has been changed.
            */
        onDataChanged: Event<(sender: DataProvider, options: any) => any, any>;
        protected raiseDataChanged(): void;
}

import "./visualizerBase.scss";
export class VisualizerBase implements IDataInfo {
        question: Question;
        protected options: {
                [index: string]: any;
        };
        protected renderResult: HTMLElement;
        protected toolbarContainer: HTMLElement;
        protected contentContainer: HTMLElement;
        protected footerContainer: HTMLElement;
        static otherCommentCollapsed: boolean;
        protected toolbarItemCreators: {
                [name: string]: (toolbar?: HTMLDivElement) => HTMLElement;
        };
        constructor(question: Question, data: Array<{
                [index: string]: any;
        }>, options?: {
                [index: string]: any;
        }, _name?: string);
        protected onDataChanged(): void;
        get dataName(): string;
        get hasFooter(): boolean;
        protected createVisualizer(question: Question): VisualizerBase;
        get footerVisualizer(): VisualizerBase;
        getSeriesValues(): Array<string>;
        getSeriesLabels(): Array<string>;
        getValues(): Array<any>;
        getLabels(): Array<string>;
        registerToolbarItem(name: string, creator: (toolbar?: HTMLDivElement) => HTMLElement): void;
        get name(): string;
        protected get data(): {
                [index: string]: any;
        }[];
        protected get dataProvider(): DataProvider;
        /**
            * Updates visualizer data.
            */
        updateData(data: Array<{
                [index: string]: any;
        }>): void;
        onUpdate: () => void;
        invokeOnUpdate(): void;
        destroy(): void;
        protected createToolbarItems(toolbar: HTMLDivElement): void;
        protected destroyToolbar(container: HTMLElement): void;
        protected renderToolbar(container: HTMLElement): void;
        protected destroyContent(container: HTMLElement): void;
        protected renderContent(container: HTMLElement): void;
        protected destroyFooter(container: HTMLElement): void;
        protected renderFooter(container: HTMLElement): void;
        render(targetElement: HTMLElement): void;
        /**
            * Redraws visualizer and all inner content.
            */
        refresh(): void;
        getRandomColor(): any;
        backgroundColor: string;
        static customColors: string[];
        getColors(count?: number): any;
        get showHeader(): boolean;
        set showHeader(newValue: boolean);
        getData(): any;
}

type VisualizerConstructor = new (question: Question, data: Array<{
        [index: string]: any;
}>, options?: Object) => any;
export class VisualizationManager {
        static alternativesVisualizer: any;
        static vizualizers: {
                [index: string]: Array<VisualizerConstructor>;
        };
        /**
            * Register visualizer (constructor) for question type.
            */
        static registerVisualizer(typeName: string, constructor: VisualizerConstructor): void;
        /**
            * Get visualizers (constructors) for question type.
            */
        static getVisualizersByType(typeName: string): VisualizerConstructor[];
        /**
            * Get visualizers (constructors) for question type.
            */
        static getAlternativesVisualizer(): any;
        /**
            * Register visualizer (constructor) for question type.
            */
        static registerAlternativesVisualizer(constructor: any): void;
}
export {};

import "./visualizationPanel.scss";
export interface IVisualizerPanelRenderedElement extends IVisualizerPanelElement {
        renderedElement?: HTMLElement;
}
/**
    * VisualizationPanel is responsible for displaying an array of survey questions
    *
    * constructor parameters:
    * questions - an array of survey questions to visualize
    * data - an array of answers in format of survey result
    *
    * options:
    * allowDynamicLayout - set it to false to disable items drag/drop reordering and dynamic layouting
    * allowHideQuestions - set it to false to deny user to hide/show individual questions
    * seriesValues - an array of series values in data to group data by series
    * seriesLabels - labels for series to display, if not passed the seriesValues are used as labels
    * survey - pass survey instance to use localses from the survey JSON
    * dataProvider - dataProvider for this visualizer
    *
    * elements - list of visual element descriptions
    */
export class VisualizationPanel extends VisualizerBase {
        protected questions: Array<any>;
        protected visualizers: Array<VisualizerBase>;
        constructor(questions: Array<any>, data: Array<{
                [index: string]: any;
        }>, options?: {
                [index: string]: any;
        }, _elements?: Array<IVisualizerPanelRenderedElement>, isTrustedAccess?: boolean);
        protected showElement(elementName: string): void;
        protected hideElement(elementName: string): void;
        protected makeElementPrivate(element: any): void;
        protected makeElementPublic(element: any): void;
        protected moveVisibleElement(fromVisibleIndex: number, toVisibleIndex: number): void;
        protected moveElement(fromIndex: number, toIndex: number): void;
        /**
            * Returns current locale of the visualization panel.
            * If locales more than one, the language selection dropdown will be added in the toolbar
            * In order to use survey locales the survey instance object should be passed as 'survey' option for visualizer
            */
        get locale(): string;
        /**
            * Sets locale for visualization panel.
            */
        set locale(newLocale: string);
        /**
            * Returns whether the VisualizationPanel allows dynamic layouting - rearrange items via drap/drop.
            */
        get allowDynamicLayout(): boolean;
        /**
            * Returns whether the VisualizationPanel allows to hide/show individual inner visualizers.
            */
        get allowHideQuestions(): boolean;
        /**
            * Returns the layout engine instance if any.
            */
        get layoutEngine(): LayoutEngine;
        protected buildElements(questions: any[]): IVisualizerPanelElement[];
        /**
            * Returns panel elements descriptions array.
            * Inner visualizers are rendered in the order of this array and with titles from the displayName property
            */
        getElements(): IVisualizerPanelElement[];
        /**
            * Checks whether certain element is visible.
            */
        isVisible(visibility: ElementVisibility): boolean;
        protected get visibleElements(): IVisualizerPanelRenderedElement[];
        protected get hiddenElements(): IVisualizerPanelRenderedElement[];
        protected get locales(): any;
        /**
            * Returns panel element description by the question name.
            */
        getElement(name: string): IVisualizerPanelRenderedElement;
        /**
            * Returns panel element visualizer by the question name.
            */
        getVisualizer(dataName: string): VisualizerBase;
        /**
            * Fires when element visibility has been changed.
            * options:
            * elements - panel elements array
            * changed - changed element
            * reason - reason (string) why event fired: "ADDED", "MOVED" or "REMOVED"
            */
        onVisibleElementsChanged: Event<(sender: VisualizationPanel, options: any) => any, any>;
        protected visibleElementsChanged(element: IVisualizerPanelElement, reason: string): void;
        /**
            * Fires when vizualization panel state changed.
            * sender - this panel
            * state - new state of the panel
            */
        onStateChanged: Event<(sender: VisualizationPanel, state: any) => any, any>;
        /**
            * Fires when permissions changed
            */
        onPermissionsChangedCallback: any;
        /**
            * Renders given panel element.
            */
        protected renderPanelElement(element: IVisualizerPanelRenderedElement): HTMLElement;
        protected renderToolbar(container: HTMLElement): void;
        /**
            * Renders all questions into given HTML container element.
            * container - HTML element to render the panel
            */
        renderContent(container: HTMLElement): void;
        /**
            * Destroys visualizer and all inner content.
            */
        protected destroyContent(container: HTMLElement): void;
        /**
            * Method for clearing all rendered elements from outside.
            */
        clear(): void;
        /**
            * Redraws visualizer toobar and all inner content.
            */
        refresh(): void;
        /**
            * Updates layout of visualizer inner content.
            */
        layout(): void;
        /**
            * Sets filter by question name and value.
            */
        setFilter(questionName: string, selectedValue: any): void;
        /**
            * Gets vizualization panel state.
            */
        get state(): IState;
        /**
            * Sets vizualization panel state.
            */
        set state(newState: IState);
        /**
            * Gets vizualization panel permissions.
            */
        get permissions(): IPermission[];
        /**
            * Sets vizualization panel permissions.
            */
        set permissions(permissions: IPermission[]);
        destroy(): void;
}

export class VisualizationPanelDynamic extends VisualizerBase {
    protected _panelVisualizer: VisualizationPanel;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: {
        [index: string]: any;
    }, name?: string);
    get name(): string;
    updateData(data: Array<{
        [index: string]: any;
    }>): void;
    getQuestions(): IQuestion[];
    destroyContent(container: HTMLElement): void;
    renderContent(container: HTMLElement): void;
}

export class VisualizationMatrixDynamic extends VisualizationPanelDynamic {
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object);
    get name(): string;
    getQuestions(): Question[];
}

export class VisualizationMatrixDropdown extends VisualizerBase {
    protected _panelVisualizer: VisualizationPanel;
    constructor(question: QuestionMatrixDropdownModel, data: Array<{
        [index: string]: any;
    }>, options?: {
        [index: string]: any;
    }, name?: string);
    updateData(data: Array<{
        [index: string]: any;
    }>): void;
    getQuestions(): import("survey-core").Question[];
    destroyContent(container: HTMLElement): void;
    renderContent(container: HTMLElement): void;
}

export class AlternativeVisualizersWrapper extends VisualizerBase {
    constructor(visualizers: Array<VisualizerBase>, question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object);
    protected visualizerContainer: HTMLElement;
    updateData(data: Array<{
        [index: string]: any;
    }>): void;
    protected renderContent(container: HTMLElement): void;
    destroy(): void;
}

import "./datatables.scss";
interface DataTablesOptions {
    buttons: boolean | string[] | any[] | any;
    dom: string;
    orderFixed: Array<number | string> | Array<Array<number | string>> | object;
    rowGroup: boolean | any;
    headerCallback: any;
}
export class DataTables extends Table {
    datatableApi: any;
    currentPageNumber: number;
    /**
      * The event is fired columns configuration has been changed.
      * <br/> sender the datatables adapter
      * <br/> options.survey current survey
      * @see getColumns
      */
    onColumnsReorder: Event<(sender: DataTables, options: any) => any, any>;
    static initJQuery($: any): void;
    constructor(survey: SurveyModel, data: Array<Object>, options: DataTablesOptions, _columns?: Array<ITableColumn>, isTrustedAccess?: boolean);
    destroy(): void;
    setColumnVisibility(columnName: string, visibility: ColumnVisibility): void;
    setColumnLocation(columnName: string, location: QuestionLocation): void;
    applyFilter(value: string): void;
    applyColumnFilter(columnName: string, value: string): void;
    sortByColumn(columnName: string, direction: string): void;
    setPageSize(value: number): void;
    setPageNumber(value: number): void;
    getPageNumber(): number;
    render(targetNode: HTMLElement): void;
    getColumns(): Array<Object>;
    layout(): void;
}
export class DatatablesRow extends TableRow {
    protected table: Table;
    protected extensionsContainer: HTMLElement;
    protected detailsContainer: HTMLElement;
    constructor(table: Table, extensionsContainer: HTMLElement, detailsContainer: HTMLElement, _innerRow: any);
    get innerRow(): any;
    getElement(): HTMLElement;
    getRowData(): HTMLElement;
    getDataPosition(): number;
    remove(): void;
}
export {};

import "./tabulator.scss";
interface IDownloadOptions {
    pdf?: any;
    csv?: any;
    xlsx?: any;
}
interface IOptions {
    columnMinWidth: number;
    actionsColumnWidth: number;
    paginationButtonCount: number;
    downloadOptions: IDownloadOptions;
}
export var defaultOptions: IOptions;
export class Tabulator extends Table {
    constructor(survey: SurveyModel, data: Array<Object>, options: IOptions, _columns?: Array<any>, isTrustedAccess?: boolean);
    tabulatorTables: any;
    render(targetNode: HTMLElement): void;
    destroy: () => void;
    getColumns(): Array<Object>;
    setColumnVisibility(columnName: string, visibility: ColumnVisibility): void;
    setColumnLocation(columnName: string, location: QuestionLocation): void;
    sortByColumn(columnName: string, direction: string): void;
    applyColumnFilter(columnName: string, value: string): void;
    applyFilter(value: string): void;
    getPageNumber(): number;
    setPageNumber(value: number): void;
    setPageSize(value: number): void;
    download(type: string): void;
    layout(): void;
}
export class TabulatorRow extends TableRow {
    protected table: Table;
    protected extensionsContainer: HTMLElement;
    protected detailsContainer: HTMLElement;
    protected innerRow: any;
    constructor(table: Table, extensionsContainer: HTMLElement, detailsContainer: HTMLElement, innerRow: any);
    getElement(): HTMLElement;
    getRowData(): HTMLElement;
    getDataPosition(): number;
    remove(): void;
}
export {};

export class WordCloudAdapter {
    constructor(model: WordCloud);
    get wordcloud(): any;
    create(node: HTMLElement): any;
    destroy(node: HTMLElement): void;
}
export class WordCloud extends VisualizerBase {
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    getData(): (string | number)[][];
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
    destroy(): void;
}

export var textHelper: {
    getStopWords: (locale?: string) => string[];
};

import "./text.scss";
export class TextTableAdapter {
    constructor(model: Text);
    create(container: HTMLElement): void;
    destroy(node: HTMLElement): void;
}
export class Text extends VisualizerBase {
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    getData(): {
        columnsCount: number;
        data: string[][];
    };
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
    destroy(): void;
}

export enum ElementVisibility {
    Visible = 0,
    Invisible = 1,
    PublicInvisible = 2
}
export interface IVisualizerPanelElement {
    name: string;
    displayName: string;
    visibility: ElementVisibility;
    type?: string;
}
export interface IState {
    locale: string;
    elements: IVisualizerPanelElement[];
}
export interface IPermission {
    name: string;
    visibility: ElementVisibility;
}

export class LayoutEngine {
    protected _allowed: boolean;
    constructor(_allowed: boolean);
    protected startCore(container: HTMLElement): void;
    protected stopCore(): void;
    protected updateCore(): void;
    get allowed(): boolean;
    start(container: HTMLElement): void;
    stop(): void;
    update(): void;
    add(elements: Array<HTMLElement>, options?: any): void;
    remove(elements: Array<HTMLElement>, options?: any): void;
    onMoveCallback: (fromIndex: number, toIndex: number) => void;
    destroy(): void;
}
export class MuuriLayoutEngine extends LayoutEngine {
    constructor(allowed: boolean, _selector: string);
    protected startCore(container: HTMLElement): void;
    protected stopCore(): void;
    protected updateCore(): void;
    add(elements: Array<HTMLElement>, options?: any): void;
    remove(elements: Array<HTMLElement>, options?: any): void;
}

export abstract class Table {
        protected survey: SurveyModel;
        protected data: Array<Object>;
        protected options: any;
        protected _columns: Array<any>;
        isTrustedAccess: boolean;
        protected tableData: any;
        protected extensions: TableExtensions;
        constructor(survey: SurveyModel, data: Array<Object>, options: any, _columns: Array<any>, isTrustedAccess: boolean);
        protected renderResult: HTMLElement;
        protected currentPageSize: number;
        protected currentPageNumber: number;
        protected _rows: TableRow[];
        protected isColumnReorderEnabled: boolean;
        onColumnsVisibilityChanged: Event<(sender: Table, options: any) => any, any>;
        onColumnsLocationChanged: Event<(sender: Table, options: any) => any, any>;
        onRowRemoved: Event<(sender: Table, options: any) => any, any>;
        renderDetailActions: (container: HTMLElement, row: TableRow) => HTMLElement;
        getData(): Object[];
        abstract render(targetNode: HTMLElement): void;
        abstract applyFilter(value: string): void;
        abstract applyColumnFilter(columnName: string, value: string): void;
        abstract sortByColumn(columnName: string, direction: string): void;
        enableColumnReorder(): void;
        disableColumnReorder(): void;
        getPageNumber(): number;
        setPageNumber(value: number): void;
        getPageSize(): number;
        setPageSize(value: number): void;
        getCreatedRows(): TableRow[];
        clearCreatedRows(): void;
        protected buildColumns: (survey: SurveyModel) => {
                name: string;
                displayName: string;
                dataType: ColumnDataType;
                visibility: ColumnVisibility;
                location: QuestionLocation;
        }[];
        isColumnVisible(column: any): boolean;
        isVisible: (visibility: ColumnVisibility) => boolean;
        isAvailable: (visibility: ColumnVisibility) => boolean;
        getAvailableColumns: () => Array<ITableColumn>;
        get columns(): Array<ITableColumn>;
        set columns(columns: Array<ITableColumn>);
        protected initTableData(data: Array<any>): void;
        moveColumn(from: number, to: number): void;
        setColumnLocation(columnName: string, location: QuestionLocation): void;
        setColumnVisibility(columnName: string, visibility: ColumnVisibility): void;
        getColumnVisibility(columnName: string): ColumnVisibility;
        removeRow(row: TableRow): void;
        /**
            * Returns current locale of the table.
            * If locales more than one, the language selection dropdown will be added in the toolbar
            */
        get locale(): string;
        /**
            * Sets locale for table.
            */
        set locale(newLocale: string);
        getLocales(): Array<string>;
        refresh(hard?: boolean): void;
        destroy(): void;
        get isRendered(): boolean;
        /**
            * Vizualization panel state getter.
            */
        get state(): ITableState;
        /**
            * Vizualization panel state setter.
            */
        set state(newState: ITableState);
        /**
            * Fires when table state changed.
            */
        onStateChanged: Event<(sender: Table, options: any) => any, any>;
        /**
        * Gets table permissions.
        */
        get permissions(): IPermission[];
        /**
            * Sets table permissions.
            */
        set permissions(permissions: IPermission[]);
        /**
            * Fires when permissions changed
            */
        onPermissionsChangedCallback: any;
}
export abstract class TableRow {
        protected table: Table;
        protected extensionsContainer: HTMLElement;
        protected detailsContainer: HTMLElement;
        constructor(table: Table, extensionsContainer: HTMLElement, detailsContainer: HTMLElement);
        details: Details;
        extensions: TableExtensions;
        onToggleDetails: Event<(sender: TableRow, options: any) => any, any>;
        /**
            * Returns row's html element
            */
        abstract getElement(): HTMLElement;
        /**
            * Returns data, which is displayed in the row.
            */
        abstract getRowData(): any;
        /**
            * Returns position of row in the table's data.
            */
        abstract getDataPosition(): number;
        protected isSelected: boolean;
        render(): void;
        openDetails(): void;
        closeDetails(): void;
        toggleDetails(): void;
        getIsSelected(): boolean;
        toggleSelect(): void;
        remove(): void;
        destroy(): void;
}

export enum ColumnVisibility {
    Visible = 0,
    Invisible = 1,
    PublicInvisible = 2
}
export enum QuestionLocation {
    Column = 0,
    Row = 1
}
export enum ColumnDataType {
    Text = 0,
    FileLink = 1,
    Image = 2
}
export interface ITableColumn {
    name: string;
    displayName: string;
    dataType: ColumnDataType;
    visibility: ColumnVisibility;
    location: QuestionLocation;
}
export interface ITableState {
    locale: string;
    elements: ITableColumn[];
}

export class PlotlyChartAdapter {
    protected model: SelectBase;
    constructor(model: SelectBase);
    protected patchConfigParameters(chartNode: object, traces: Array<object>, layout: object, config: object): void;
    get chart(): Promise<import("plotly.js").PlotlyHTMLElement>;
    create(chartNode: HTMLElement): any;
    destroy(node: HTMLElement): void;
}
export interface PlotlyOptions {
    traces: Array<any>;
    layout: any;
    hasSeries: boolean;
}
export class PlotlySetup {
    static setups: {
        [type: string]: (model: SelectBase) => PlotlyOptions;
    };
    static setup(charType: string, model: SelectBase): PlotlyOptions;
    static setupPie(model: SelectBase): PlotlyOptions;
    static setupBar(model: SelectBase): PlotlyOptions;
    static setupScatter(model: SelectBase): PlotlyOptions;
}
export class SelectBasePlotly extends SelectBase {
    static types: string[];
    static displayModeBar: any;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object);
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
    getData(): any[];
}

export class PlotlyGaugeAdapter {
    constructor(model: GaugePlotly);
    get chart(): Promise<import("plotly.js").PlotlyHTMLElement>;
    create(chartNode: HTMLElement): any;
    destroy(node: HTMLElement): void;
}
export class GaugePlotly extends NumberModel {
    static types: string[];
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object);
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
}

export class MatrixPlotly extends Matrix {
    static types: string[];
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object);
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
}

export class PlotlyBoolChartAdapter extends PlotlyChartAdapter {
    constructor(model: BooleanPlotly);
    protected patchConfigParameters(chartNode: object, traces: Array<object>, layout: object, config: object): void;
}
export class BooleanPlotly extends BooleanModel {
    static types: string[];
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object);
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
}

export class Details {
    protected table: Table;
    protected targetNode: HTMLElement;
    constructor(table: Table, row: TableRow, targetNode: HTMLElement);
    protected location: string;
    open(): void;
    protected createShowAsColumnButton: (columnName: string) => HTMLElement;
    close(): void;
}

interface ITableExtension {
    location: string;
    name: string;
    visibleIndex: number;
    render: (table: Table, opt: any) => HTMLElement;
    destroy?: () => void;
}
export class TableExtensions {
    constructor(table: Table);
    render(targetNode: HTMLElement, location: string, options?: any): void;
    destroy(): void;
    static registerExtension(extension: ITableExtension): void;
    static findExtension(location: string, actionName: string): ITableExtension;
}
export {};

export class SelectBase extends VisualizerBase {
    orderByAnsweres: string;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    protected chartTypes: string[];
    chartType: string;
    protected onChartTypeChanged(): void;
    protected setChartType(chartType: string): void;
    getSelectedItemByText(itemText: string): any;
    setSelection(item: ItemValue): void;
    get selection(): ItemValue;
    get showPercentages(): boolean;
    set showPercentages(val: boolean);
    setLabelsOrder(value: string): void;
    refreshContent(): void;
    onDataItemSelected: (selectedValue: any, selectedText: string) => void;
    valuesSource(): Array<ItemValue>;
    getValues(): Array<any>;
    getLabels(): Array<string>;
    getPercentages(): Array<Array<number>>;
}

export class NumberModel extends VisualizerBase {
    static stepsCount: number;
    static generateTextsCallback: (question: Question, maxValue: number, minValue: number, stepsCount: number, texts: string[]) => string[];
    protected chartTypes: Array<string>;
    chartType: String;
    static showAsPercentage: boolean;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: {
        [index: string]: any;
    }, name?: string);
    protected onDataChanged(): void;
    protected onChartTypeChanged(): void;
    protected setChartType(chartType: string): void;
    destroy(): void;
    generateText(maxValue: number, minValue: number, stepsCount: number): any;
    generateValues(maxValue: number, stepsCount: number): number[];
    generateColors(maxValue: number, minValue: number, stepsCount: number): any[];
    getData(): number[];
}

export class Matrix extends SelectBase {
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    protected get matrixQuestion(): QuestionMatrixModel;
    getSeriesValues(): Array<string>;
    getSeriesLabels(): Array<string>;
    getSelectedItemByText(itemText: string): any;
    valuesSource(): Array<ItemValue>;
    getData(): any[];
}

export class BooleanModel extends SelectBase {
    protected chartTypes: string[];
    chartType: string;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object);
    get booleanQuestion(): QuestionBooleanModel;
    static trueColor: string;
    static falseColor: string;
    getSelectedItemByText(itemText: string): ItemValue;
    getValues(): Array<any>;
    getLabels(): Array<string>;
}

