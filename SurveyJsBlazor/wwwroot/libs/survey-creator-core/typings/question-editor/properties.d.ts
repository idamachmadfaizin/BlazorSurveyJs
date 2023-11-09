import * as Survey from "survey-core";
import { ISurveyCreatorOptions } from "../creator-settings";
export declare class SurveyQuestionEditorPropertyDefinition {
    property: Survey.JsonObjectProperty;
    title: string;
    category: string;
    createdFromTabName: boolean;
    onSameLine: boolean;
    get name(): string;
}
export declare class SurveyQuestionEditorTabDefinition {
    name: string;
    title: string;
    visible: boolean;
    index: number;
    properties: Array<SurveyQuestionEditorPropertyDefinition>;
}
export declare class SurveyQuestionProperties {
    obj: any;
    options: ISurveyCreatorOptions;
    private parentObj;
    private parentProperty;
    private showModeValue;
    private properties;
    private propertiesHash;
    private tabs;
    constructor(obj: any, options?: ISurveyCreatorOptions, className?: string, showMode?: string, parentObj?: any, parentProperty?: Survey.JsonObjectProperty);
    getProperty(propertyName: string): Survey.JsonObjectProperty;
    get showMode(): string;
    get isEmpty(): boolean;
    private fillPropertiesHash;
    private isJSONPropertyVisible;
    getTabByName(tabName: string): SurveyQuestionEditorTabDefinition;
    getTabs(): Array<SurveyQuestionEditorTabDefinition>;
    getProperties(tab: SurveyQuestionEditorTabDefinition): Array<Survey.JsonObjectProperty>;
    private buildTabs;
    private addPropertyIntoTab;
    private movePropertiesToNextProperties;
    private getTabByPropertyName;
    private getNextToNameProperty;
    private isPropertyOnSameLine;
    private getPropertyByNameInTab;
    private getTabOrCreate;
    private setUsedProperties;
    private getAllDefinitionsByClass;
    private getJsonPropertyCategory;
    private addNonTabProperties;
    private sortProperties;
}
