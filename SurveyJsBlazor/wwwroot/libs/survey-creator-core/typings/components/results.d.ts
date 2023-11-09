import * as Survey from "survey-core";
import { Base } from "survey-core";
export declare class SurveyResultsItemModel extends Base {
    private _data;
    private _lvl;
    collapsed: boolean;
    lvl: number;
    items: Array<any>;
    constructor(_data: any, _lvl: number);
    get data(): Array<any>;
    toggle: () => void;
    get isNode(): boolean;
    get name(): boolean;
    get title(): string;
    get value(): any;
    get displayValue(): string;
    getString(data: any): string;
    private markerWidth;
    get markerMargin(): string;
    get textMargin(): string;
}
export declare class SurveyResultsModel extends Base {
    private survey;
    constructor(survey: Survey.SurveyModel);
    resultViewType: string;
    resultText: string;
    resultData: Array<any>;
    getLocString(name: string): string;
    get surveyResultsText(): string;
    get surveyResultsTableText(): string;
    get surveyResultsJsonText(): string;
    get resultsTitle(): string;
    get resultsName(): string;
    get resultsValue(): string;
    get resultsDisplayValue(): string;
    get isTableSelected(): boolean;
    get isJsonSelected(): boolean;
    selectTableClick: () => void;
    selectJsonClick: () => void;
}
