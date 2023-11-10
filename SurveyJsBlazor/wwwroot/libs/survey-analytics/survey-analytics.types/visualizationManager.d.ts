import { Question } from "survey-core";
declare type VisualizerConstructor = new (question: Question, data: Array<{
    [index: string]: any;
}>, options?: Object) => any;
/**
 * An object with methods used to register and unregister visualizers for individual question types.
 *
 * [View Demo](https://surveyjs.io/dashboard/examples/visualize-answers-from-text-entry-fields-with-charts/ (linkStyle))
 */
export declare class VisualizationManager {
    static alternativesVisualizer: any;
    static vizualizers: {
        [index: string]: Array<VisualizerConstructor>;
    };
    /**
     * Registers a visualizer for a specified question type.
     *
     * [View Demo](https://surveyjs.io/dashboard/examples/visualize-answers-from-text-entry-fields-with-charts/ (linkStyle))
     * @param questionType A question [type](https://surveyjs.io/form-library/documentation/api-reference/question#getType).
     * @param constructor A function that returns a visualizer constructor to register.
     */
    static registerVisualizer(questionType: string, constructor: VisualizerConstructor): void;
    /**
     * Unregisters a visualizer for a specified question type.
     *
     * [View Demo](https://surveyjs.io/dashboard/examples/visualize-answers-from-text-entry-fields-with-charts/ (linkStyle))
     * @param questionType A question [type](https://surveyjs.io/form-library/documentation/api-reference/question#getType).
     * @param constructor A function that returns a visualizer constructor to unregister.
     */
    static unregisterVisualizer(questionType: string | undefined, constructor: VisualizerConstructor): void;
    /**
     * Obsolete. Pass `undefined` to the [`unregisterVisualizer`](https://surveyjs.io/dashboard/documentation/api-reference/visualizationmanager#unregisterVisualizer) method instead.
     * @param constructor A function that returns a visualizer constructor to unregister.
     */
    static unregisterVisualizerForAll(constructor: VisualizerConstructor): void;
    /**
     * Returns all visualizer constructors for a specified question type.
     * @param questionType A question [type](https://surveyjs.io/form-library/documentation/api-reference/question#getType).
     */
    static getVisualizersByType(questionType: string): VisualizerConstructor[];
    /**
     * Returns a constructor for an alternative visualizer selector.
     * @see registerAltVisualizerSelector
     */
    static getAltVisualizerSelector(): any;
    /**
     * Registers an alternative visualizer selector.
     * @param constructor A function that returns a constructor for an alternative visualizer selector.
     */
    static registerAltVisualizerSelector(constructor: any): void;
}
export {};
