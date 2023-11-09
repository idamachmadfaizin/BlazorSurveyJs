import { QuestionMultipleTextModel, MultipleTextItemModel } from "survey-core";
import { QuestionTextModel } from "survey-core";
import { QuestionImplementor } from "./koquestion";
import { MultipleTextEditorModel } from "survey-core";
import { MutlipleTextRow } from "survey-core";
export declare class koMultipleTextEditorModel extends MultipleTextEditorModel {
    private _implementor;
    constructor(name: string);
    protected onBaseCreating(): void;
    dispose(): void;
}
export declare class MultipleTextItem extends MultipleTextItemModel {
    constructor(name?: any, title?: string);
    protected createEditor(name: string): QuestionTextModel;
}
export declare class QuestionMultipleTextImplementor extends QuestionImplementor {
    koRecalc: any;
    constructor(question: QuestionMultipleText);
}
export declare class QuestionMultipleText extends QuestionMultipleTextModel {
    private _implementor;
    koRows: any;
    constructor(name: string);
    protected onBaseCreating(): void;
    protected onRowCreated(row: MutlipleTextRow): MutlipleTextRow;
    protected createTextItem(name: string, title: string): MultipleTextItemModel;
    dispose(): void;
}
