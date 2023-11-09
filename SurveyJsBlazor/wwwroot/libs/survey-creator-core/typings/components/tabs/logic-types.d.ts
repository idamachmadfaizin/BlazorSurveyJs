import { SurveyModel, Base, Question, SurveyElement } from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
export declare function getLogicString(name: string): string;
export interface ISurveyLogicType {
    name: string;
    baseClass: string;
    propertyName: string;
    dynamicPropertyName?: string;
    dependedOnPropertyName?: string;
    isInvisible?: boolean;
    showInUI?: boolean;
    showIf?: (survey: SurveyModel) => boolean;
    getCollection?: (survey: SurveyModel) => Array<Base>;
    isUniqueItem?: boolean;
    questionNames?: Array<string>;
    getDisplayText?: (element: Base, formatStr: string, lt: SurveyLogicType) => string;
    getElementName?: (element: Base) => string;
    getSelectorChoices?: (survey: SurveyModel, context: Question) => Array<SurveyElement<any>>;
    supportContext?: (question: Base) => boolean;
    getParentElement?(element: Base): Base;
}
export declare class SurveyLogicType {
    private logicType;
    survey: SurveyModel;
    options: ISurveyCreatorOptions;
    static expressionToDisplayText(survey: SurveyModel, options: ISurveyCreatorOptions, expression: string): string;
    constructor(logicType: ISurveyLogicType, survey: SurveyModel, options?: ISurveyCreatorOptions);
    private mergeWithBaseClass;
    get name(): string;
    get baseClass(): string;
    get propertyName(): string;
    get hasVisibleElements(): boolean;
    get dynamicPropertyName(): string;
    get dependedOnPropertyName(): string;
    get visible(): boolean;
    get showTitlesInExpression(): boolean;
    createNewObj(srcObj: Base): Base;
    cloneElement(el: Base): Base;
    areElementsEqual(el1: Base, el2: Base): boolean;
    saveNewElement(el: Base): void;
    get showInUI(): boolean;
    get isUniqueItem(): boolean;
    get questionNames(): Array<string>;
    get displayName(): string;
    get description(): string;
    getParentElement(element: Base): Base;
    get hasSelectorChoices(): boolean;
    getSelectorChoices(survey: SurveyModel, context: Question): Array<SurveyElement<any>>;
    getDisplayText(element: Base): string;
    private getElementDisplayName;
    private getElementByName;
    formatElName(name: string): string;
    formatExpression(expression: string): string;
    supportContext(context: Base): boolean;
    private get isTrigger();
}
export declare class SurveyLogicTypes {
    static baseTypes: {
        panel: {
            showIf: (survey: SurveyModel) => boolean;
            getSelectorChoices(survey: SurveyModel, context: Question): Array<SurveyElement<any>>;
        };
        question: {
            showIf: (survey: SurveyModel) => boolean;
            supportContext(context: Base): boolean;
            getParentElement(element: Base): Base;
            getSelectorChoices(survey: SurveyModel, context: Question): Array<SurveyElement<any>>;
        };
        matrixdropdowncolumn: {
            showIf: (survey: SurveyModel) => boolean;
            supportContext(context: Base): boolean;
            getParentElement(element: Base): Base;
            getSelectorChoices(survey: SurveyModel, context: Question): Array<SurveyElement<any>>;
        };
    };
    static types: Array<ISurveyLogicType>;
}
