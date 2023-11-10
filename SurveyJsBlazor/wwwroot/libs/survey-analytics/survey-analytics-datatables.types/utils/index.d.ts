export declare class DocumentHelper {
    static createSelector(options: Array<{
        value: string;
        text: string;
    }>, isSelected: (option: {
        value: string;
        text: string;
    }) => boolean, handler: (e: any) => void): HTMLDivElement;
    static createButton(handler: (e: any) => void, text?: string, className?: string): HTMLElement;
    static createElement(tagName: string, className?: string, attrs?: any): HTMLElement;
    static createSvgElement(path: string): SVGSVGElement;
    static createSvgButton(path: string): HTMLButtonElement;
    static createSvgToggleButton(svgPath1: string, svPpath2: string, text1: string, text2: string, handler1: (e: any) => any, handler2: (e: any) => any, state?: string, className?: string): HTMLElement;
    static createInput(className: string, placeholder?: string, defaultValue?: string): HTMLInputElement;
}
export declare var options: {
    runningInBrowser: boolean;
};
export declare function allowDomRendering(): boolean;
export declare function createCommercialLicenseLink(): HTMLElement;
export declare class DataHelper {
    static zipArrays(...arrays: any[]): any[][];
    static unzipArrays(zipArray: any[][]): any[][];
    static sortDictionary(keys: any[], values: any[], desc: boolean): {
        keys: any[];
        values: any[];
    };
    static toPercentage(value: number, maxValue: number): number;
}
export declare function createLinksContainer(links: Array<{
    name: string;
    content: any;
}>): HTMLElement;
export declare function createImagesContainer(links: Array<{
    name: string;
    content: any;
}>): HTMLElement;
