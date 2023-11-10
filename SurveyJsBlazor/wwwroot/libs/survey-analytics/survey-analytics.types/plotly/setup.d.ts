import { Event } from "survey-core";
import { SelectBase } from "../selectBase";
import { VisualizerBase } from "../visualizerBase";
export interface PlotlyOptions {
    traces: Array<any>;
    layout: any;
    hasSeries: boolean;
}
export declare class PlotlySetup {
    static imageExportFormat: string;
    /**
     * Fires when end user clicks on the 'save as image' button.
     */
    static onImageSaving: Event<(sender: SelectBase, options: any) => any, SelectBase, any>;
    /**
     * Fires before plot will be created. User can change traces, layout and config of the plot.
     * Options is an object with the following fields: traces, layout and config of the plot.
     */
    static onPlotCreating: Event<(sender: VisualizerBase, options: any) => any, VisualizerBase, any>;
    static setups: {
        [type: string]: (model: SelectBase) => PlotlyOptions;
    };
    static setup(charType: string, model: SelectBase): PlotlyOptions;
    static getTruncatedLabel: (label: string, labelTruncateLength: number) => string;
    static setupPie(model: SelectBase): PlotlyOptions;
    static setupBar(model: SelectBase): PlotlyOptions;
    static setupVBar(model: SelectBase): PlotlyOptions;
    static setupScatter(model: SelectBase): PlotlyOptions;
}
