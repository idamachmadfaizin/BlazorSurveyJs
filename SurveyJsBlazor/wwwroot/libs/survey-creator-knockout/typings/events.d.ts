import { IPortableDragEvent, IPortableMouseEvent } from "survey-creator-core";
export declare class KnockoutMouseEvent implements IPortableMouseEvent {
    event: MouseEvent;
    constructor(event: MouseEvent);
    stopPropagation(): void;
    preventDefault(): void;
    get cancelBubble(): boolean;
    set cancelBubble(value: boolean);
    get target(): EventTarget | null;
    get currentTarget(): EventTarget | null;
    get clientX(): number;
    get clientY(): number;
    get offsetX(): number;
    get offsetY(): number;
}
export declare class KnockoutDragEvent extends KnockoutMouseEvent implements IPortableDragEvent {
    event: DragEvent;
    constructor(event: DragEvent);
    get dataTransfer(): DataTransfer;
}
