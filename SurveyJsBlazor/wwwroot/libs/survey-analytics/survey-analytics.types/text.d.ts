import { Question } from "survey-core";
import { VisualizerBase } from "./visualizerBase";
export declare class TextTableAdapter {
    private model;
    constructor(model: Text);
    create(container: HTMLElement): void;
    destroy(node: HTMLElement): void;
}
export declare class Text extends VisualizerBase {
    private _textTableAdapter;
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
