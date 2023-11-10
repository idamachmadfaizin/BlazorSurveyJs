import { Question, Event } from "survey-core";
import { VisualizerBase } from "../visualizerBase";
export declare class WordCloudAdapter {
    private model;
    private _wordcloud;
    static drawOutOfBound: boolean;
    static shrinkToFit: boolean;
    static abortThreshold: any;
    static weightFactor: number;
    static onWordcloudCreating: Event<(sender: WordCloud, options: any) => any, WordCloud, any>;
    constructor(model: WordCloud);
    get wordcloud(): any;
    create(node: HTMLElement): any;
    destroy(node: HTMLElement): void;
}
export declare class WordCloud extends VisualizerBase {
    private _wordcloudAdapter;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object, name?: string);
    getData(): (string | number)[][];
    protected destroyContent(container: HTMLElement): void;
    protected renderContent(container: HTMLElement): void;
    destroy(): void;
}
