import { QuestionMatrixDropdownModel, QuestionMatrixModel } from "survey-core";
import { ISurveyCreatorOptions } from "../creator-settings";
import { PropertyEditorSetupValue } from "./index";
export declare class CellsEditor extends PropertyEditorSetupValue {
    matrix: QuestionMatrixModel;
    private editMatrixValue;
    constructor(matrix: QuestionMatrixModel, options?: ISurveyCreatorOptions);
    protected getSurveyJSON(): any;
    protected getSurveyCreationReason(): string;
    get editMatrix(): QuestionMatrixDropdownModel;
    apply(): boolean;
    private buildColumns;
    private buildRows;
}
