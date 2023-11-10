import { SurveyModel, Question, Event, EventBase } from "survey-core";
import { IPermission, QuestionLocation, ITableState, IColumn, IColumnData } from "./config";
import { Details } from "./extensions/detailsextensions";
import { TableExtensions } from "./extensions/tableextensions";
export interface ITableOptions {
    [index: string]: any;
    /**
     * Set this property to true to render column headings using question names
     */
    useNamesAsTitles?: boolean;
    /**
     * Use this event to change the display value of question in table.
     * <br/> `sender` - the table object that fires the event.
     * <br/> `options.question` - the question obect for which event is fired.
     * <br/> `options.displayValue` - the question display value. You can change this option before it is displayed in the table.
     */
    onGetQuestionValue?: (options: {
        question: Question;
        displayValue: any;
    }) => void;
}
export declare class TableEvent extends EventBase<Table> {
}
export declare abstract class Table {
    protected _survey: SurveyModel;
    protected data: Array<Object>;
    protected _options: ITableOptions;
    protected _columnsData: Array<IColumnData>;
    static showFilesAsImages: boolean;
    static haveCommercialLicense: boolean;
    protected tableData: any;
    protected extensions: TableExtensions;
    private haveCommercialLicense;
    protected _columns: Array<IColumn>;
    constructor(_survey: SurveyModel, data: Array<Object>, _options?: ITableOptions, _columnsData?: Array<IColumnData>);
    protected renderResult: HTMLElement;
    protected currentPageSize: number;
    protected currentPageNumber: number;
    protected _rows: TableRow[];
    protected isColumnReorderEnabled: boolean;
    /**
     * Sets pagination selector content.
     */
    paginationSizeSelector: number[];
    onColumnsVisibilityChanged: TableEvent;
    onColumnsLocationChanged: TableEvent;
    onRowRemoved: TableEvent;
    renderDetailActions: (container: HTMLElement, row: TableRow) => HTMLElement;
    getData(): Object[];
    get survey(): SurveyModel;
    get options(): ITableOptions;
    abstract applyFilter(value: string): void;
    abstract applyColumnFilter(columnName: string, value: string): void;
    abstract sortByColumn(columnName: string, direction: string): void;
    render(targetNode: HTMLElement | string): void;
    enableColumnReorder(): void;
    disableColumnReorder(): void;
    getPageNumber(): number;
    setPageNumber(value: number): void;
    /**
     * Returns current page size.
     */
    getPageSize(): number;
    /**
     * Sets current page size.
     */
    setPageSize(value: number): void;
    getCreatedRows(): TableRow[];
    clearCreatedRows(): void;
    get useNamesAsTitles(): boolean;
    protected buildColumns: (survey: SurveyModel) => IColumn[];
    isColumnVisible(column: IColumn): boolean;
    get columns(): Array<IColumn>;
    set columns(columns: Array<IColumn>);
    get isInitTableDataProcessing(): boolean;
    private isInitTableDataProcessingValue;
    protected initTableData(data: Array<any>): void;
    moveColumn(from: number, to: number): void;
    setColumnLocation(columnName: string, location: QuestionLocation): void;
    getColumnByName(columnName: string): IColumn;
    setColumnVisibility(columnName: string, isVisible: boolean): void;
    setColumnWidth(columnName: string, width: string | number): void;
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
    private updateColumnsFromData;
    /**
     * Fires when table state changed.
     */
    onStateChanged: TableEvent;
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
export declare abstract class TableRow {
    protected table: Table;
    protected extensionsContainer: HTMLElement;
    protected detailsContainer: HTMLElement;
    constructor(table: Table, extensionsContainer: HTMLElement, detailsContainer: HTMLElement);
    details: Details;
    extensions: TableExtensions;
    private detailedRowClass;
    private isDetailsExpanded;
    onToggleDetails: Event<(sender: TableRow, options: any) => any, TableRow, any>;
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
    private onColumnLocationChangedCallback;
    destroy(): void;
}
