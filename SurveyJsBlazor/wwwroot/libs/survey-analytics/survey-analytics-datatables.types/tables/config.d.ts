import { Question } from "survey-core";
import { Table } from "./table";
export declare enum QuestionLocation {
    Column = 0,
    Row = 1
}
export declare enum ColumnDataType {
    Text = 0,
    FileLink = 1,
    Image = 2
}
export interface ICellData {
    question: Question;
    displayValue: any;
}
export interface IColumnData {
    name: string;
    displayName: string;
    dataType: ColumnDataType;
    isVisible: boolean;
    isPublic: boolean;
    location: QuestionLocation;
    width?: string | number;
    isComment?: boolean;
}
export interface IColumn extends IColumnData {
    visibleIndex?: number;
    fromJSON(json: any): void;
    getCellData(table: Table, data: any): ICellData;
}
export interface ITableState {
    locale?: string;
    elements?: IColumnData[];
    pageSize?: number;
}
export interface IPermission {
    name: string;
    isPublic: boolean;
}
