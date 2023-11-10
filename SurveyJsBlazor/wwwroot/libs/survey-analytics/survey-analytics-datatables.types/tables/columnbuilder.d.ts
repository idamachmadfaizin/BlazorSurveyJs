import { Question, QuestionCompositeModel, QuestionCustomModel, QuestionFileModel, QuestionMatrixDropdownModel, QuestionMatrixModel } from "survey-core";
import { BaseColumn, CompositeQuestionColumn, CustomQuestionColumn, FileColumn, ImageColumn } from "./columns";
import { IColumn } from "./config";
import { Table } from "./table";
export interface IColumnsBuilder {
    buildColumns(question: Question, table: Table): Array<IColumn>;
}
export declare class DefaultColumnsBuilder<T extends Question = Question> implements IColumnsBuilder {
    protected createColumn(question: T, table: Table): BaseColumn<T>;
    protected buildColumnsCore(question: T, table: Table): Array<IColumn>;
    buildColumns(question: T, table: Table): Array<IColumn>;
}
export declare class ColumnsBuilderFactory {
    static Instance: ColumnsBuilderFactory;
    private constructor();
    private readonly columnsBuilders;
    private readonly defaultColumnsBuilder;
    registerBuilderColumn(type: string, columnsBuilder: IColumnsBuilder): void;
    getColumnsBuilder(type: string): IColumnsBuilder;
}
export declare class MatrixColumnsBuilder extends DefaultColumnsBuilder<QuestionMatrixModel> {
    protected buildColumnsCore(questionBase: Question, table: Table): IColumn[];
}
export declare class ImageColumnsBuilder extends DefaultColumnsBuilder {
    protected createColumn(question: Question, table: Table): ImageColumn;
}
export declare class FileColumnsBuilder extends DefaultColumnsBuilder<QuestionFileModel> {
    protected createColumn(question: QuestionFileModel, table: Table): FileColumn;
}
export declare class MatrixDropdownColumnBuilder extends DefaultColumnsBuilder {
    buildColumns(questionBase: QuestionMatrixDropdownModel, table: Table): Array<IColumn>;
}
export declare class CustomColumnsBuilder extends DefaultColumnsBuilder<QuestionCustomModel> {
    protected createColumn(question: QuestionCustomModel, table: Table): CustomQuestionColumn;
}
export declare class CompositeColumnsBuilder extends DefaultColumnsBuilder<QuestionCompositeModel> {
    protected createColumn(question: QuestionCompositeModel, table: Table): CompositeQuestionColumn;
}
