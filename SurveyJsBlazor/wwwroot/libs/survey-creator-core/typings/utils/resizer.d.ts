export declare class ResizeManager {
    private container;
    private originalMouseX;
    private originalWidth;
    private minWidth;
    private maxWidth;
    private westResizer;
    private eastResizer;
    private currentResizer;
    private mouseDevice;
    private events;
    constructor(container: HTMLElement, handles: string);
    setHandles(newVal: string): void;
    private getStyleValue;
    private isEventSupported;
    private getEventPrefix;
    private getMouseEvent;
    private onMouseDownListener;
    private resize;
    private stopResize;
    private init;
    private createrResizerElement;
    dispose(): void;
}
