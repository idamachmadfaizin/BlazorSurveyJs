import { Question } from "survey-core";
import { VisualizationPanelDynamic } from "./visualizationPanelDynamic";
export declare class VisualizationMatrixDynamic extends VisualizationPanelDynamic {
    constructor(question: Question, data: Array<{
        [index: string]: any;
    }>, options?: Object);
    get type(): string;
    getQuestions(): Question[];
}
