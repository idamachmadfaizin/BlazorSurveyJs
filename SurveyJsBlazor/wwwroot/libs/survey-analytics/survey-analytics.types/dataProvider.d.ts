import { Event } from "survey-core";
export interface IDataInfo {
    name: string | Array<string>;
    getValues(): Array<any>;
    getLabels(): Array<string>;
    getSeriesValues(): Array<string>;
    getSeriesLabels(): Array<string>;
}
export declare class DataProvider {
    private _data;
    private _getDataCore;
    static seriesMarkerKey: string;
    private _filteredData;
    private _statisticsCache;
    protected filterValues: {
        [index: string]: any;
    };
    private getStatisticsCacheKey;
    constructor(_data?: Array<any>, _getDataCore?: (dataInfo: IDataInfo) => number[][]);
    reset(dataInfo?: IDataInfo): void;
    get data(): Array<any>;
    set data(data: Array<any>);
    get filteredData(): {
        [index: string]: any;
    }[];
    /**
     * Sets filter by question name and value.
     */
    setFilter(questionName: string, selectedValue: any): void;
    protected getDataCore(dataInfo: IDataInfo): number[][] | number[][][];
    /**
     * Returns calculated statisctics for the IDataInfo object.
     */
    getData(dataInfo: IDataInfo): any[];
    /**
     * Fires when data has been changed.
     */
    onDataChanged: Event<(sender: DataProvider, options: any) => any, DataProvider, any>;
    protected raiseDataChanged(): void;
}
