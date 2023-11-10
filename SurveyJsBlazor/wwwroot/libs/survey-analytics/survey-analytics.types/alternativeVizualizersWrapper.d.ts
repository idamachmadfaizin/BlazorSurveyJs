import { Question, ItemValue } from "survey-core";
import { VisualizerBase } from "./visualizerBase";
import { IVisualizerWithSelection } from "./selectBase";
import { Event } from "survey-core";
export declare class AlternativeVisualizersWrapper extends VisualizerBase implements IVisualizerWithSelection {
    private visualizers;
    private visualizerSelector;
    private updateVisualizerSelector;
    constructor(visualizers: Array<VisualizerBase>, question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object);
    protected visualizerContainer: HTMLElement;
    get hasFooter(): boolean;
    getVisualizers(): VisualizerBase[];
    private visualizersWithSelection;
    private selectedItem;
    private visualizer;
    private onAfterVisualizerRenderCallback;
    /**
     * The event is fired right after AlternativeVisualizersWrapper content type has been changed.
     **/
    onVisualizerChanged: Event<(sender: AlternativeVisualizersWrapper, options: any) => any, AlternativeVisualizersWrapper, any>;
    /**
     * This method selects visualizer to show by it name.
    *
    * parameters:
    * name - the name of visualizer to show,
    * quiet - set it to true if you don't want to rise a notification event
    *
    **/
    setVisualizer(type: string, quiet?: boolean): void;
    updateData(data: Array<{
        [index: string]: any;
    }>): void;
    set onDataItemSelected(val: (selectedValue: any, selectedText: string) => void);
    setSelection(item: ItemValue): void;
    get selection(): any;
    protected renderContent(container: HTMLElement): void;
    protected setBackgroundColorCore(color: string): void;
    /**
     * Returns an object with properties that describe a current visualizer state. The properties are different for each individual visualizer.
     *
     * > This method is overriden in descendant classes.
     * @see setState
     */
    getState(): any;
    /**
     * Sets the visualizer's state.
     *
     * > This method is overriden in descendant classes.
     * @see getState
     */
    setState(state: any): void;
    destroy(): void;
}
