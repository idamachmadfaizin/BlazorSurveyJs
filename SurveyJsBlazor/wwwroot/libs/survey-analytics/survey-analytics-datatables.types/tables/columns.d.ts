import { MatrixRowModel, Question, QuestionCompositeModel, QuestionCustomModel, QuestionFileModel, QuestionMatrixDropdownModel, QuestionMatrixModel } from "survey-core";
import { ICellData, IColumn, ColumnDataType, QuestionLocation, IColumnData } from "./config";
import { ITableOptions, Table } from "./table";
export declare class BaseColumn<T extends Question = Question> implements IColumn {
    protected question: T;
    protected table: Table;
    dataType: ColumnDataType;
    isVisible: boolean;
    isPublic: boolean;
    location: QuestionLocation;
    width?: string | number;
    visibleIndex?: number;
    isComment?: boolean;
    private nameValue;
    private displayNameValue?;
    constructor(question: T, table: Table);
    get name(): string;
    set name(val: string);
    get displayName(): string;
    set displayName(val: string);
    protected getDisplayName(): string;
    protected getName(): string;
    protected getDataType(): ColumnDataType;
    protected getDisplayValueCore(data: any): any;
    protected setupReadyChangedCallback(table: Table, question: Question): void;
    protected getDisplayValue(data: any, table: Table, options: ITableOptions): any;
    private formatDisplayValue;
    getCellData(table: Table, data: any): ICellData;
    toJSON(): IColumnData;
    fromJSON(data: IColumnData): void;
}
export declare class DefaultColumn extends BaseColumn {
    protected getDisplayValue(data: any, table: Table, options: ITableOptions): any;
}
export declare class CommentColumn extends BaseColumn {
    protected getName(): string;
    protected getDisplayName(): string;
    protected getDisplayValue(data: any, table: Table, options: ITableOptions): string;
}
export declare class MatrixColumn extends BaseColumn<QuestionMatrixModel> {
    private row;
    private valueName;
    private valuePath;
    constructor(question: QuestionMatrixModel, row: MatrixRowModel, table: Table);
    protected getName(): string;
    protected getDisplayName(): string;
    protected getDisplayValue(data: any, table: Table, options: ITableOptions): any;
}
export declare class ImageColumn extends BaseColumn {
    protected getDataType(): ColumnDataType;
}
export declare class FileColumn extends BaseColumn<QuestionFileModel> {
    protected getDataType(): ColumnDataType;
    protected getDisplayValue(data: any, table: Table, options: ITableOptions): any;
}
export declare class MatrixDropdownColumn extends BaseColumn<QuestionMatrixDropdownModel> {
    protected row: any;
    protected col: any;
    private rowValue;
    private colName;
    constructor(question: QuestionMatrixDropdownModel, row: any, col: any, table: Table);
    protected getName(): string;
    protected getDisplayName(): string;
    protected getDisplayValue(data: any, table: Table, options: ITableOptions): any;
}
export declare class CustomQuestionColumn extends BaseColumn<QuestionCustomModel> {
    getCellData(table: Table, data: any): ICellData;
}
export declare class CompositeQuestionColumn extends BaseColumn<QuestionCompositeModel> {
    getCellData(table: Table, data: any): ICellData;
}
