import { QuestionMatrixDropdownModel } from "survey-core";
import { VisualizerBase } from "./visualizerBase";
export declare class VisualizationMatrixDropdown extends VisualizerBase {
    protected _matrixDropdownVisualizer: VisualizerBase;
    private readonly _childOptions;
    constructor(question: QuestionMatrixDropdownModel, data: Array<{
        [index: string]: any;
    }>, options?: {
        [index: string]: any;
    }, name?: string);
    protected setLocale(newLocale: string): void;
    get matrixDropdownVisualizer(): VisualizerBase;
    private onPanelAfterRenderCallback;
    private updateDropdownVisualizerData;
    updateData(data: Array<{
        [index: string]: any;
    }>): void;
    protected onDataChanged(): void;
    getQuestions(): any[];
    destroyContent(container: HTMLElement): void;
    renderContent(container: HTMLElement): void;
    destroy(): void;
}
