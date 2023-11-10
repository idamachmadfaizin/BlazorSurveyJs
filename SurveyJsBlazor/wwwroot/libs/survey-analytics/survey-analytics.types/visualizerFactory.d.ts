import { Question } from "survey-core";
import { VisualizerBase } from "./visualizerBase";
/**
 * An object that allows you to create individual visualizers without creating a [visualization panel](https://surveyjs.io/dashboard/documentation/api-reference/visualizationpanel).
 */
export declare class VisualizerFactory {
    /**
     * Creates a visualizer for a single question.
     *
     * ```js
     * import { VisualizerFactory } from "survey-analytics";
     *
     * const visualizer = new VisualizerFactory.createVisualizer(
     *   question,
     *   data,
     *   options
     * );
     *
     * visualizer.render("containerId")
     * ```
     *
     * If a question has more than one [registered](https://surveyjs.io/dashboard/documentation/api-reference/visualizationmanager#registerVisualizer) visualizer, users can switch between them using a drop-down menu.
     * @param question A question for which to create a visualizer.
     * @param data A data array with survey results to be visualized.
     * @param options An object with any custom properties you need within the visualizer.
     */
    static createVisualizer(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: {
        [index: string]: any;
    }): VisualizerBase;
}
