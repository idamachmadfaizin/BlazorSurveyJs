import { ActionContainer } from "survey-core";
import { ImplementorBase } from "../../kobase";
export * from "./action";
export * from "./action-bar-item";
export * from "./action-bar-item-dropdown";
export * from "./action-bar-separator";
export declare class ActionContainerImplementor extends ImplementorBase {
    private model;
    handleClick: boolean;
    private itemsSubscription;
    constructor(model: ActionContainer, handleClick?: boolean);
    dispose(): void;
}
