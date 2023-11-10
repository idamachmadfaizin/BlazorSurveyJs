import { ITableOptions, Table, TableRow } from "./table";
import { SurveyModel } from "survey-core";
import { IColumnData, QuestionLocation } from "./config";
interface ITabulatorOptions extends ITableOptions {
    tabulatorOptions?: any;
    downloadHiddenColumns?: boolean;
    actionsColumnWidth?: number;
    downloadButtons: Array<string>;
    downloadOptions?: {
        [type: string]: any;
    };
    onDownloadCallbacks?: {
        [type: string]: (tabulator: Tabulator, options: any) => void;
    };
}
export declare const defaultDownloadOptions: {
    fileName: string;
    pdf: {
        orientation: string;
        autoTable: (doc: any) => {
            styles: {
                font: string;
                fontStyle: string;
                cellWidth: number;
            };
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
        };
    };
    csv: {
        delimiter: string;
    };
    xlsx: {
        sheetName: string;
    };
};
export declare const defaultOptions: ITabulatorOptions;
export declare class Tabulator extends Table {
    static set haveCommercialLicense(val: boolean);
    constructor(survey: SurveyModel, data: Array<Object>, options?: ITabulatorOptions, _columnsData?: Array<IColumnData>);
    private readonly COLUMN_MIN_WIDTH;
    tabulatorTables: any;
    private tableContainer;
    private currentDownloadType;
    render(targetNode: HTMLElement | string): void;
    private createDownloadsBar;
    destroy: () => void;
    private columnMovedCallback;
    private columnResizedCallback;
    private rowFormatter;
    private accessorDownload;
    private getTitleFormatter;
    private getHeaderActions;
    getColumns(): Array<any>;
    setColumnVisibility(columnName: string, isVisible: boolean): void;
    setColumnLocation(columnName: string, location: QuestionLocation): void;
    setColumnWidth(columnName: string, width: number | string): void;
    sortByColumn(columnName: string, direction: string): void;
    applyColumnFilter(columnName: string, value: string): void;
    applyFilter(value: string): void;
    getPageNumber(): number;
    setPageNumber(value: number): void;
    setPageSize(value: number): void;
    private getDownloadOptions;
    download(type: string): void;
    layout(hard?: boolean): void;
}
export declare class TabulatorRow extends TableRow {
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
