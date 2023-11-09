import { IAction } from "survey-core";
export declare class PageNavigatorItemViewModel {
    private item;
    constructor(item: IAction);
    get text(): string;
    action: (data: any, event: any) => void;
    private unwrap;
    get active(): boolean;
    get disabled(): boolean;
}
