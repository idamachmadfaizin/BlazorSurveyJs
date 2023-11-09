export declare class ProgressViewModel {
    model: any;
    private container;
    constructor(model: any, container?: string);
    getProgressTextInBarCss(css: any): string;
    getProgressTextUnderBarCss(css: any): string;
    getProgressCssClasses(): any;
}
