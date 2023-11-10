import { VisualizerBase } from "./visualizerBase";
import { VisualizationPanel } from "./visualizationPanel";
import { Question, IQuestion } from "survey-core";
export declare class VisualizationPanelDynamic extends VisualizerBase {
    protected _panelVisualizer: VisualizationPanel;
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: {
        [index: string]: any;
    }, name?: string);
    protected setLocale(newLocale: string): void;
    private onAfterRenderPanelCallback;
    get type(): string;
    private updatePanelVisualizerData;
    updateData(data: Array<{
        [index: string]: any;
    }>): void;
    protected onDataChanged(): void;
    getQuestions(): IQuestion[];
    destroyContent(container: HTMLElement): void;
    renderContent(container: HTMLElement): void;
    destroy(): void;
}
