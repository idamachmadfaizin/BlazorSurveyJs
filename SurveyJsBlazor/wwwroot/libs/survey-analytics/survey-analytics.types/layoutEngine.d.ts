/**
 * A base class used to implement custom layout engines or integrate third-party layout engines with SurveyJS Dashboard.
 */
export declare class LayoutEngine {
    protected _allowed: boolean;
    constructor(_allowed: boolean);
    protected startCore(container: HTMLElement): void;
    protected stopCore(): void;
    protected updateCore(): void;
    get allowed(): boolean;
    /**
     * Enables the dynamic layout in a given HTML element.
     *
     * This method should arrange visualization items based on the available screen space and allow users to reorder them via drag and drop.
     */
    start(container: HTMLElement): void;
    /**
     * Disables the dynamic layout.
     */
    stop(): void;
    /**
     * Updates the dynamic layout.
     */
    update(): void;
    add(elements: Array<HTMLElement>, options?: any): void;
    remove(elements: Array<HTMLElement>, options?: any): void;
    onMoveCallback: (fromIndex: number, toIndex: number) => void;
    destroy(): void;
}
export declare class MuuriLayoutEngine extends LayoutEngine {
    private _selector;
    private _muuri;
    private _layoutingTimer;
    constructor(allowed: boolean, _selector: string);
    protected startCore(container: HTMLElement): void;
    protected stopCore(): void;
    protected updateCore(): void;
    add(elements: Array<HTMLElement>, options?: any): void;
    remove(elements: Array<HTMLElement>, options?: any): void;
}
