import { IVisualizerWithSelection } from "./selectBase";
export declare class FilterInfo {
    private _htmlElement;
    private text;
    constructor(visualizer: IVisualizerWithSelection);
    get htmlElement(): HTMLDivElement;
    update(selection: {
        value: any;
        text: string;
    }): void;
}
