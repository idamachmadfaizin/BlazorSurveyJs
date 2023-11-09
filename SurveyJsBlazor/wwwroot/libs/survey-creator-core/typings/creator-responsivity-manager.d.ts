import { CreatorBase } from "./creator-base";
export declare class CreatorResponsivityManager {
    protected container: HTMLDivElement;
    private creator;
    private resizeObserver;
    private currentWidth;
    private prevShowToolbox;
    private prevShowPageNavigator;
    static screenSizeBreakpoints: {
        [key: string]: number;
    };
    private getScreenWidth;
    private initMobileView;
    private resetMobileView;
    private procesShowToolbox;
    private procesShowPageNavigator;
    private findCorrectParent;
    constructor(container: HTMLDivElement, creator: CreatorBase);
    private _process;
    process(): void;
    dispose(): void;
}
