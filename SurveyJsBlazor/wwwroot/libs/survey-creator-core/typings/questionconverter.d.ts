import { Question } from "survey-core";
export declare class QuestionConverter {
    private static convertInfoValue;
    static get convertInfo(): any;
    private static createDefaultQuestionConverterItems;
    static addConvertInfo(className: string, convertToClassName: string): void;
    static getConvertToClasses(className: string, availableTypes?: Array<string>, includeCurrent?: boolean): Array<string>;
    static convertObject(obj: Question, convertToClass: string, defaultObjJSON?: any, defaultJSON?: any): Question;
    private static updateJSON;
    private static updateJSONForMatrices;
    private static getColumnName;
    private static updateJSONForRating;
    private static updateJSONForBarrating;
    private static updateJSONForPanels;
    private static removeValidators;
}
