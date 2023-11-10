import { ITableOptions, Table, TableRow } from "./table";
import { SurveyModel, Event } from "survey-core";
import { IColumnData, QuestionLocation } from "./config";
interface DataTablesOptions extends ITableOptions {
    buttons: boolean | string[] | any[] | any;
    dom: string;
    orderFixed: Array<number | string> | Array<Array<number | string>> | object;
    rowGroup: boolean | any;
    headerCallback: any;
}
export declare class DataTables extends Table {
    datatableApi: any;
    currentPageNumber: number;
    /**
     * The event is fired columns configuration has been changed.
     * <br/> sender the datatables adapter
     * <br/> options.survey current survey
     * @see getColumns
     */
    onColumnsReorder: Event<(sender: DataTables, options: any) => any, DataTables, any>;
    static initJQuery($: any): void;
    static set haveCommercialLicense(val: boolean);
    constructor(survey: SurveyModel, data: Array<Object>, options?: DataTablesOptions, _columnsData?: Array<IColumnData>);
    destroy(): void;
    setColumnVisibility(columnName: string, isVisible: boolean): void;
    setColumnLocation(columnName: string, location: QuestionLocation): void;
    applyFilter(value: string): void;
    applyColumnFilter(columnName: string, value: string): void;
    sortByColumn(columnName: string, direction: string): void;
    setPageSize(value: number): void;
    setPageNumber(value: number): void;
    getPageNumber(): number;
    render(targetNode: HTMLElement | string): void;
    getColumns(): Array<any>;
    layout(): void;
}
export declare class DatatablesRow extends TableRow {
    protected table: Table;
    protected extensionsContainer: HTMLElement;
    protected detailsContainer: HTMLElement;
    private _innerRow;
    constructor(table: Table, extensionsContainer: HTMLElement, detailsContainer: HTMLElement, _innerRow: any);
    private rowElement;
    private rowData;
    get innerRow(): any;
    getElement(): HTMLElement;
    getRowData(): HTMLElement;
    getDataPosition(): number;
    remove(): void;
}
export {};
