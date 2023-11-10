import { Question } from "survey-core";
import { SelectBase } from "./selectBase";
export declare class ChoicesTableAdapter {
    private model;
    constructor(model: ChoicesTable);
    create(container: HTMLElement): void;
    destroy(node: HTMLElement): void;
}
export declare class ChoicesTable extends SelectBase {
    private _choicesTableAdapter;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
    destroy(): void;
}
